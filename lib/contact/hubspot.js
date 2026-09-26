import { ASSOCIATION, FREE_EMAIL_DOMAINS, HUBSPOT, OBJECT, SERVICE_TO_DEAL } from './config';
import { HttpError, log, request } from './http';

// ---------------------------------------------------------------------------
//  Errori
// ---------------------------------------------------------------------------

// 403 per ambito mancante della Private App: registra endpoint e ambiti
// richiesti (errors[].context.requiredGranularScopes, o requiredScopes nelle
// risposte più vecchie). Il chiamante lo segnala: non si ampliano ambiti.
export class MissingScopeError extends Error {
  constructor(endpoint, scopes) {
    super(`Ambito mancante per ${endpoint}: ${scopes.join(', ') || 'non indicato'}`);
    this.endpoint = endpoint;
    this.scopes = scopes;
  }
}

function scopesFrom(body) {
  const found = new Set();
  for (const error of body?.errors || []) {
    for (const key of ['requiredGranularScopes', 'requiredScopes']) {
      for (const scope of error?.context?.[key] || []) found.add(scope);
    }
  }
  return [...found];
}

function token() {
  const value = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!value) throw new Error('HUBSPOT_PRIVATE_APP_TOKEN non configurato');
  return value;
}

// Chiamata alle API CRM con il token della Private App.
async function crm(method, path, { body, endpoint, ok } = {}) {
  try {
    return await request(`${HUBSPOT.apiHost}${path}`, {
      method,
      headers: { Authorization: `Bearer ${token()}`, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      endpoint: `${method} ${endpoint}`,
      ok,
    });
  } catch (error) {
    if (error instanceof HttpError && error.status === 403) {
      throw new MissingScopeError(`${method} ${endpoint}`, scopesFrom(error.body));
    }
    throw error;
  }
}

// Campi rifiutati dalla Forms API (FIELD_NOT_IN_FORM_DEFINITION o valore non
// ammesso): i messaggi citano il campo come 'fields.nome' o 'nome'.
function rejectedFormFields(body, candidates) {
  const messages = (body?.errors || []).map((error) => String(error?.message || ''));
  return candidates.filter((name) =>
    messages.some((message) => message.includes(`fields.${name}'`) || message.includes(`'${name}'`) || message.includes(`"${name}"`))
  );
}

// Proprietà rifiutate dalle API CRM (PROPERTY_DOESNT_EXIST, INVALID_OPTION):
// il messaggio contiene un elenco JSON con "name":"proprietà", e alcune
// risposte le riportano in errors[].context.propertyName.
function rejectedProperties(body, candidates) {
  const found = new Set();
  for (const match of String(body?.message || '').matchAll(/\\?"name\\?"\s*:\s*\\?"([a-z0-9_]+)/gi)) found.add(match[1]);
  for (const error of body?.errors || []) for (const name of error?.context?.propertyName || []) found.add(name);
  return candidates.filter((name) => found.has(name));
}

// ---------------------------------------------------------------------------
//  Forms API: la submission registra la richiesta sul modulo HubSpot
//  (e crea o aggiorna il contatto per email, secondo le regole del portale)
// ---------------------------------------------------------------------------

export function formFields(lead) {
  return [
    { objectTypeId: OBJECT.contact, name: 'firstname', value: lead.nome },
    { objectTypeId: OBJECT.contact, name: 'lastname', value: lead.cognome },
    { objectTypeId: OBJECT.contact, name: 'email', value: lead.email },
    { objectTypeId: OBJECT.contact, name: 'phone', value: lead.phone },
    { objectTypeId: OBJECT.company, name: 'name', value: lead.azienda },
    { objectTypeId: OBJECT.contact, name: 'settore_agria', value: lead.settore },
    { objectTypeId: OBJECT.contact, name: 'servizio_di_interesse_sito', value: lead.servizio },
    { objectTypeId: OBJECT.contact, name: 'tempistica_progetto', value: lead.tempistica },
    { objectTypeId: OBJECT.contact, name: 'message', value: lead.messaggio },
    { objectTypeId: OBJECT.contact, name: 'tipo_richiesta_sito', value: lead.preferenza },
  ].filter((field) => field.value);
}

export async function submitForm(lead, { submissionId, consentText }) {
  let fields = formFields(lead);
  const payload = () => ({
    submittedAt: String(Date.now()),
    fields,
    context: {
      pageUri: lead.pageUri,
      pageName: lead.pageName,
      ...(lead.ip && lead.ip !== 'sconosciuto' ? { ipAddress: lead.ip } : {}),
      ...(lead.hutk ? { hutk: lead.hutk } : {}),
    },
    // solo consenso al trattamento, nessuna comunicazione commerciale
    legalConsentOptions: {
      consent: { consentToProcess: true, text: consentText, communications: [] },
    },
  });

  let lastError;
  for (const host of HUBSPOT.formsHosts) {
    const url = `${host}/submissions/v3/integration/submit/${HUBSPOT.portalId}/${HUBSPOT.formId}`;
    for (let attempt = 1; attempt <= 2; attempt += 1) {
      try {
        await request(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload()),
          endpoint: `POST forms/submit (${new URL(host).hostname})`,
        });
        log('info', 'form_submitted', { submissionId, host: new URL(host).hostname, fields: fields.map((f) => f.name) });
        return { ok: true };
      } catch (error) {
        lastError = error;
        if (!(error instanceof HttpError)) throw error;
        // campi non presenti nel modulo: una sola ripetizione senza quei campi
        if (error.status === 400 && attempt === 1) {
          const rejected = rejectedFormFields(error.body, fields.map((f) => f.name)).filter((n) => n !== 'email');
          if (rejected.length) {
            log('warn', 'form_fields_rejected', { submissionId, rejected, errorTypes: (error.body?.errors || []).map((e) => e.errorType) });
            fields = fields.filter((field) => !rejected.includes(field.name));
            continue;
          }
        }
        log('warn', 'form_submit_failed', {
          submissionId,
          host: new URL(host).hostname,
          status: error.status,
          errorTypes: (error.body?.errors || []).map((e) => e.errorType),
        });
        break;
      }
    }
    // host successivo solo se questo non conosce il portale o il modulo
    if (!(lastError instanceof HttpError) || lastError.status !== 404) break;
  }
  throw lastError;
}

// ---------------------------------------------------------------------------
//  CRM: contatto, azienda, trattativa e associazioni
// ---------------------------------------------------------------------------

// Contatto per email: se esiste si aggiorna, altrimenti si crea. Il 409 copre
// il caso in cui la submission lo abbia appena creato.
export async function upsertContact(lead, submissionId) {
  const properties = {
    email: lead.email,
    firstname: lead.nome,
    lastname: lead.cognome,
    phone: lead.phone,
    company: lead.azienda,
  };
  const found = await crm('GET', `/crm/v3/objects/contacts/${encodeURIComponent(lead.email)}?idProperty=email`, {
    endpoint: '/crm/v3/objects/contacts/{email}',
    ok: [404],
  });
  if (found.status === 200 && found.body?.id) {
    await crm('PATCH', `/crm/v3/objects/contacts/${found.body.id}`, {
      body: { properties },
      endpoint: '/crm/v3/objects/contacts/{id}',
    });
    log('info', 'contact_updated', { submissionId, contactId: found.body.id });
    return found.body.id;
  }
  const created = await crm('POST', '/crm/v3/objects/contacts', {
    body: { properties },
    endpoint: '/crm/v3/objects/contacts',
    ok: [409],
  });
  if (created.status === 409) {
    const existing = String(created.body?.message || '').match(/Existing ID:\s*(\d+)/);
    if (existing) {
      log('info', 'contact_exists', { submissionId, contactId: existing[1] });
      return existing[1];
    }
    throw new Error('Contatto duplicato senza identificativo');
  }
  log('info', 'contact_created', { submissionId, contactId: created.body.id });
  return created.body.id;
}

// Dominio aziendale dall'email, solo se non è un indirizzo personale
export function companyDomain(email) {
  const domain = String(email).split('@')[1]?.toLowerCase().trim();
  if (!domain || FREE_EMAIL_DOMAINS.has(domain)) return null;
  return domain;
}

// Azienda per dominio (quando affidabile) o per nome: se esiste si riusa,
// altrimenti si crea con name e settore_agria (e il dominio, se c'è).
export async function findOrCreateCompany(lead, submissionId) {
  const domain = companyDomain(lead.email);
  const filterGroups = [{ filters: [{ propertyName: 'name', operator: 'EQ', value: lead.azienda }] }];
  if (domain) filterGroups.unshift({ filters: [{ propertyName: 'domain', operator: 'EQ', value: domain }] });
  const search = await crm('POST', '/crm/v3/objects/companies/search', {
    body: { filterGroups, properties: ['name', 'domain'], limit: 5 },
    endpoint: '/crm/v3/objects/companies/search',
  });
  const results = search.body?.results || [];
  const match =
    (domain && results.find((c) => c.properties?.domain?.toLowerCase() === domain)) ||
    results.find((c) => c.properties?.name?.trim().toLowerCase() === lead.azienda.trim().toLowerCase());
  if (match) {
    log('info', 'company_reused', { submissionId, companyId: match.id, by: match.properties?.domain === domain ? 'domain' : 'name' });
    return match.id;
  }

  let properties = { name: lead.azienda, settore_agria: lead.settore, ...(domain ? { domain } : {}) };
  try {
    const created = await crm('POST', '/crm/v3/objects/companies', { body: { properties }, endpoint: '/crm/v3/objects/companies' });
    log('info', 'company_created', { submissionId, companyId: created.body.id });
    return created.body.id;
  } catch (error) {
    // proprietà assente o valore non ammesso: si crea senza, e si registra
    const rejected = error instanceof HttpError && error.status === 400 ? rejectedProperties(error.body, ['settore_agria']) : [];
    if (!rejected.length) throw error;
    log('warn', 'company_property_rejected', { submissionId, rejected });
    properties = { name: lead.azienda, ...(domain ? { domain } : {}) };
    const created = await crm('POST', '/crm/v3/objects/companies', { body: { properties }, endpoint: '/crm/v3/objects/companies' });
    log('info', 'company_created', { submissionId, companyId: created.body.id });
    return created.body.id;
  }
}

export async function associateContactCompany(contactId, companyId, submissionId) {
  await crm('PUT', `/crm/v4/objects/contact/${contactId}/associations/default/company/${companyId}`, {
    endpoint: '/crm/v4/objects/contact/{id}/associations/default/company/{id}',
  });
  log('info', 'contact_company_associated', { submissionId, contactId, companyId });
}

// Trattativa con associazioni a contatto e azienda. Prima di crearla cerca
// una trattativa con lo stesso nome creata negli ultimi 15 minuti (secondo
// invio arrivato a un'altra istanza): se c'è, la riusa.
export async function createDeal(lead, { contactId, companyId, submissionId }) {
  const dealname = HUBSPOT.deal.name(lead.azienda);
  const since = String(Date.now() - 15 * 60 * 1000);
  const recent = await crm('POST', '/crm/v3/objects/deals/search', {
    body: {
      filterGroups: [
        {
          filters: [
            { propertyName: 'dealname', operator: 'EQ', value: dealname },
            { propertyName: 'createdate', operator: 'GTE', value: since },
          ],
        },
      ],
      properties: ['dealname'],
      limit: 1,
    },
    endpoint: '/crm/v3/objects/deals/search',
  });
  if (recent.body?.results?.[0]?.id) {
    log('info', 'deal_reused', { submissionId, dealId: recent.body.results[0].id });
    return recent.body.results[0].id;
  }

  const { deal } = HUBSPOT;
  let properties = {
    dealname,
    pipeline: deal.pipeline,
    dealstage: deal.stage,
    hubspot_owner_id: deal.owner,
    [deal.sourceProperty]: deal.sourceValue,
    [deal.serviceProperty]: SERVICE_TO_DEAL[lead.servizio],
  };
  const associations = [
    { to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: ASSOCIATION.dealToContact }] },
    ...(companyId
      ? [{ to: { id: companyId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: ASSOCIATION.dealToPrimaryCompany }] }]
      : []),
  ];

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const created = await crm('POST', '/crm/v3/objects/deals', {
        body: { properties, associations },
        endpoint: '/crm/v3/objects/deals',
      });
      log('info', 'deal_created', { submissionId, dealId: created.body.id, properties: Object.keys(properties) });
      return created.body.id;
    } catch (error) {
      const optional = [deal.sourceProperty, deal.serviceProperty];
      const rejected = error instanceof HttpError && error.status === 400 && attempt === 1 ? rejectedProperties(error.body, optional) : [];
      if (!rejected.length) throw error;
      log('warn', 'deal_property_rejected', { submissionId, rejected });
      properties = Object.fromEntries(Object.entries(properties).filter(([key]) => !rejected.includes(key)));
    }
  }
  throw new Error('Trattativa non creata');
}
