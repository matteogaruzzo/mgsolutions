const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validazione server-side: il client non decide mai se un lead è valido.
export function validateLeadPayload(body) {
  const errors = [];
  const contact = body?.contact || {};
  const responses = body?.responses || {};

  // Honeypot: se compilato, è quasi certamente un bot. Segnaliamo senza
  // rivelarlo al chiamante (la route deciderà come rispondere).
  const isBot = Boolean(contact.website);

  if (!contact.nome || typeof contact.nome !== 'string' || contact.nome.trim().length < 2) {
    errors.push('Nome non valido');
  }
  if (!contact.email || typeof contact.email !== 'string' || !EMAIL_REGEX.test(contact.email)) {
    errors.push('Email non valida');
  }
  if (!contact.privacy) {
    errors.push('Consenso privacy mancante');
  }

  // La "recommendation" NON viene mai presa dal client: viene sempre
  // ricalcolata server-side da rulesEngine.buildRecommendation() partendo
  // dalle risposte validate qui sotto (vedi route.js). Così un client
  // malevolo non può falsificare i servizi consigliati prima dell'invio.
  const sanitized = {
    nome: (contact.nome || '').trim().slice(0, 100),
    email: (contact.email || '').trim().toLowerCase().slice(0, 255),
    telefono: (contact.telefono || '').trim().slice(0, 40) || null,
    azienda: (contact.azienda || '').trim().slice(0, 150) || null,
    responses: {
      businesses: Array.isArray(responses.businesses) ? responses.businesses.slice(0, 10) : [],
      existingTools: Array.isArray(responses.existingTools) ? responses.existingTools.slice(0, 10) : [],
      websiteUrl: typeof responses.websiteUrl === 'string' ? responses.websiteUrl.slice(0, 300) : null,
      siteAnalysis: responses.siteAnalysis && typeof responses.siteAnalysis === 'object' ? responses.siteAnalysis : null,
      objective: typeof responses.objective === 'string' ? responses.objective.slice(0, 50) : null,
      urgency: typeof responses.urgency === 'string' ? responses.urgency.slice(0, 50) : null,
      notes: typeof responses.notes === 'string' ? responses.notes.slice(0, 300) : null,
    },
  };

  return { valid: errors.length === 0 && !isBot, errors, isBot, sanitized };
}
