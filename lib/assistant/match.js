// Scelta della risposta dell'assistente: confronto tra la domanda e le parole
// chiave di content/agria/assistente.js. Nessun servizio esterno.

// minuscole, senza accenti né punteggiatura, spazi singoli, con spazi ai bordi
// (così una parola chiave come ' ai ' trova "ai" isolato)
export function normalize(text) {
  return ` ${String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'`]/g, ' ')
    .replace(/[^a-z0-9&+@.\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()} `;
}

const EMAIL = /[^\s@]+@[^\s@]+\.[a-z]{2,}/i;
const PHONE = /(?:\+?\d[\s.\-/]?){8,}/;

// Dati personali nel messaggio: email o numero di telefono.
export function containsPersonalData(text) {
  return EMAIL.test(text) || PHONE.test(text);
}

// Risposta con più parole chiave presenti (le frasi lunghe pesano di più).
// null se nessuna parola chiave compare: l'assistente propone una persona.
export function findAnswer(question, answers) {
  const text = normalize(question);
  let best = null;
  let bestScore = 0;
  for (const answer of answers) {
    let score = 0;
    for (const keyword of answer.keywords) {
      const key = keyword.includes(' ') && keyword.trim() !== keyword ? keyword : normalize(keyword).trim();
      if (text.includes(key)) score += key.trim().split(' ').length + 1;
    }
    if (score > bestScore) {
      best = answer;
      bestScore = score;
    }
  }
  return best;
}
