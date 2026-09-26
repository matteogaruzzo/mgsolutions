// =====================================================================
//  Integrazione HubSpot del modulo contatti (Prompt 15, fase B).
//  Identificativi del portale: non sono segreti, restano nel codice.
//  Segreti (token, chiave reCAPTCHA) solo in variabili d'ambiente.
//  Solo lato server: nessun componente client importa questo file.
// =====================================================================

export const HUBSPOT = {
  portalId: '149362651',
  formId: '131a0830-cc23-4255-9e4a-ac4be4ee2114',
  region: 'eu1',
  // Endpoint indicato nel prompt. Per i portali eu1 la community HubSpot e
  // molti progetti indicano api-eu1.hsforms.com: se il primo risponde 404,
  // la submission viene ripetuta una volta sull'host EU (vedi report 15).
  formsHosts: ['https://api.hsforms.com', 'https://api-eu1.hsforms.com'],
  apiHost: 'https://api.hubapi.com',
  deal: {
    pipeline: 'default',
    stage: '6062102776', // Nuovo Lead
    owner: '37994989', // Alessandro Poponi
    // nome interno della proprietà "fonte" della trattativa: se il portale non
    // la ha, la trattativa si crea comunque senza e l'evento viene registrato
    sourceProperty: 'fonte',
    sourceValue: 'Sito web',
    serviceProperty: 'servizio_di_interesse',
    name: (company) => `${company} — Opportunità da qualificare`,
  },
};

// Valore del modulo → valore di servizio_di_interesse della trattativa
export const SERVICE_TO_DEAL = {
  'Realizzazione sito web': 'Digital Presence',
  'Realizzazione E-commerce': 'Digital Commerce',
  'Implementazioni AI / varie': 'Digital Automation',
  'Realizzazione Software / Products': 'Software / Products',
  'Non ancora definito': 'Non ancora definito',
};

// Tipi di associazione predefiniti HubSpot (Associations v4)
export const ASSOCIATION = {
  dealToContact: 3,
  dealToPrimaryCompany: 5,
};

// Oggetti CRM per i campi della Forms API: 0-1 contatto, 0-2 azienda
export const OBJECT = { contact: '0-1', company: '0-2' };

// reCAPTCHA v3
export const RECAPTCHA = {
  action: 'contact_form',
  verifyUrl: 'https://www.google.com/recaptcha/api/siteverify',
  // la chiave è registrata per agriasystem.com e localhost
  hostnames: ['agriasystem.com', 'www.agriasystem.com', 'localhost'],
  defaultMinScore: 0.5,
};

// Limite di richieste per indirizzo IP (per istanza del server)
export const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

// Timeout e ripetizione delle chiamate esterne
export const HTTP = { timeoutMs: 8000, retryDelayMs: 700 };

// Domini email personali: non identificano un'azienda
export const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.it', 'hotmail.com', 'hotmail.it', 'outlook.com', 'outlook.it',
  'live.com', 'live.it', 'msn.com', 'icloud.com', 'me.com', 'mac.com', 'libero.it', 'virgilio.it', 'tiscali.it',
  'alice.it', 'tim.it', 'fastwebnet.it', 'email.it', 'inwind.it', 'katamail.com', 'aruba.it', 'pec.it', 'legalmail.it',
  'proton.me', 'protonmail.com', 'gmx.com', 'gmx.it', 'gmx.de', 'yandex.com', 'aol.com', 'tin.it', 'teletu.it',
]);
