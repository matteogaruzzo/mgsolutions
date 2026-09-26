import { RATE_LIMIT } from './config';

// Protezioni in memoria, per istanza del server (su Vercel ogni istanza ha la
// propria memoria: bastano contro raffiche e doppi invii ravvicinati, che
// arrivano quasi sempre alla stessa istanza).

// --- limite di richieste per IP -----------------------------------------
const hits = new Map();

export function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) if (now - times[times.length - 1] > RATE_LIMIT.windowMs) hits.delete(key);
  }
  return recent.length > RATE_LIMIT.max;
}

// --- doppio invio ---------------------------------------------------------
// Lo stesso identificativo di richiesta, arrivato due volte, riceve la stessa
// risposta senza ripetere le chiamate a HubSpot. Una richiesta ancora in
// corso viene attesa, non duplicata.
const DEDUPE_MS = 15 * 60 * 1000;
const results = new Map();

export function once(key, work) {
  const now = Date.now();
  for (const [k, entry] of results) if (now - entry.at > DEDUPE_MS) results.delete(k);
  const existing = results.get(key);
  if (existing) return { duplicate: true, promise: existing.promise };
  const promise = work().catch((error) => {
    results.delete(key); // un errore non blocca un nuovo tentativo
    throw error;
  });
  results.set(key, { at: now, promise });
  return { duplicate: false, promise };
}

// Un esito negativo (per esempio verifica reCAPTCHA non riuscita) non va
// ricordato: il visitatore deve poter riprovare con la stessa richiesta.
export function forget(key) {
  results.delete(key);
}

// Indirizzo IP del visitatore (Vercel: primo valore di x-forwarded-for)
export function clientIp(headers) {
  return headers.get('x-forwarded-for')?.split(',')[0]?.trim() || headers.get('x-real-ip') || 'sconosciuto';
}
