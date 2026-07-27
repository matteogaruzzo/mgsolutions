import { catalog } from './catalog';

// Motore deterministico: nessuna AI, nessuna invenzione. Punteggi espliciti
// su un catalogo fisso (vedi catalog.js). Stessa risposta → stesso risultato,
// sempre verificabile e testabile.
export function buildRecommendation(responses) {
  const businesses = responses.businesses || [];
  const existingTools = responses.existingTools || [];
  const objective = responses.objective;
  const urgency = responses.urgency;
  const siteAnalysis = responses.siteAnalysis?.success ? responses.siteAnalysis : null;

  const scores = {};
  catalog.forEach((c) => {
    scores[c.id] = 0;
  });

  const hasSite = existingTools.includes('sito');
  const hasEcommerceTool = existingTools.includes('ecommerce');
  const hasBookingTool = existingTools.includes('booking');
  const hasCrmTool = existingTools.includes('crm');
  const noTools = existingTools.includes('nessuno');
  const managesMultipleActivities = businesses.filter((b) => b !== 'altro').length > 1;

  // Consulenza strategica: base sempre presente, più alta se incerti o se
  // gestiscono più attività insieme — coordinare più linee di business
  // beneficia di una direzione unica prima di scegliere gli strumenti.
  scores['consulenza-strategica'] += 4;
  if (objective === 'non_so') scores['consulenza-strategica'] += 10;
  if (managesMultipleActivities) scores['consulenza-strategica'] += 4;

  // Sito nuovo vs restyling: mutuamente esclusivi in base a cosa ha già.
  if (!hasSite) scores['siti-web-contatti'] += 10;
  if (hasSite) scores['restyling-ottimizzazione'] += 9;

  // Vendere online: se ha già un e-commerce, proporne uno nuovo non ha senso.
  // Il gap reale è far rendere di più quello che c'è già.
  if (objective === 'vendere_online') {
    if (!hasEcommerceTool) {
      scores['ecommerce-shopify'] += 10;
      scores['agente-commerciale'] += 5;
    } else {
      scores['ai-integration'] += 9; // wine club, abbonamenti, automazioni sullo store esistente
      scores['reputation-customer-follow-up'] += 7; // far ricomprare chi ha già acquistato
      scores['restyling-ottimizzazione'] += 5; // ottimizzare conversione dello store esistente
    }
  }

  // Prenotazioni dirette: se ha già un booking system, il problema è la
  // conversione o la promozione, non la mancanza dello strumento.
  if (objective === 'prenotazioni') {
    if (!hasBookingTool) {
      scores['siti-web-contatti'] += 6;
      scores['agente-commerciale'] += 6;
    } else {
      scores['restyling-ottimizzazione'] += 7;
      scores['agente-commerciale'] += 5;
    }
  }
  if (businesses.includes('wine-hospitality-agriturismi')) {
    if (!hasSite) scores['siti-web-contatti'] += 4;
    scores['agente-commerciale'] += 4;
  }

  // Automatizzare processi interni: se ha già un CRM, il gap è collegarlo
  // (ai-integration), non costruire uno strumento da zero.
  if (objective === 'automatizzare') {
    scores['automazione-preventivi-processi'] += 10;
    if (hasCrmTool) {
      scores['ai-integration'] += 11;
      scores['software-ai-su-misura'] += 4;
    } else {
      scores['software-ai-su-misura'] += 7;
      if (!noTools) scores['ai-integration'] += 8;
    }
  }

  // Assistenza clienti e fidelizzazione.
  if (objective === 'assistenza_clienti') {
    scores['assistente-clienti-knowledge-base'] += 10;
    scores['reputation-customer-follow-up'] += 9;
    if (hasCrmTool) scores['ai-integration'] += 5;
  }

  // Gestisce più attività insieme: più da coordinare, spinge leggermente
  // verso strumenti di processo/integrazione.
  if (managesMultipleActivities) {
    scores['software-ai-su-misura'] += 3;
    scores['automazione-preventivi-processi'] += 3;
  }

  // Segnali dall'analisi del sito (se fornito e raggiungibile): rinforzano
  // scelte già emerse dalle risposte, non introducono servizi nuovi da soli.
  if (siteAnalysis) {
    if (!siteAnalysis.hasEcommerce && objective === 'vendere_online' && !hasEcommerceTool) {
      scores['ecommerce-shopify'] += 3;
    }
    if (!siteAnalysis.hasBooking && objective === 'prenotazioni' && !hasBookingTool) {
      scores['siti-web-contatti'] += 3;
      scores['agente-commerciale'] += 3;
    }
  }

  // Urgenza alta: rinforza ciò che è già emerso, non aggiunge servizi nuovi.
  if (urgency === 'subito') {
    Object.keys(scores).forEach((id) => {
      if (scores[id] > 0) scores[id] += 2;
    });
  }

  const ranked = catalog
    .map((c) => ({ ...c, score: scores[c.id] }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);

  return {
    core: ranked.filter((c) => c.score >= 10),
    recommended: ranked.filter((c) => c.score >= 6 && c.score < 10),
    optional: ranked.filter((c) => c.score < 6),
    ranked,
  };
}
