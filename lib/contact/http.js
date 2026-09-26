import { HTTP } from './config';

// Registro eventi lato server: una riga JSON per evento, con identificativo
// della richiesta e passaggio. Mai nomi, email, telefoni, messaggi o token.
export function log(level, event, data = {}) {
  const line = JSON.stringify({ scope: 'contact', level, event, ...data });
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.info(line);
}

const TEMPORARY = new Set([408, 425, 429, 500, 502, 503, 504]);
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class HttpError extends Error {
  constructor(status, body, endpoint) {
    super(`HTTP ${status} su ${endpoint}`);
    this.status = status;
    this.body = body;
    this.endpoint = endpoint;
  }
}

// fetch con timeout e un solo tentativo di ripetizione sugli errori
// temporanei (rete, timeout, 429, 5xx). Restituisce { status, body }; lancia
// HttpError sugli altri codici non 2xx. endpoint: etichetta per il registro,
// senza parametri né dati personali.
// retry: false per le creazioni (POST che creano record): una ripetizione
// dopo un timeout potrebbe duplicare il record; il chiamante ricontrolla.
export async function request(url, { method = 'GET', headers = {}, body, endpoint, ok = [], retry = true } = {}) {
  let lastError;
  const attempts = retry ? 2 : 1;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body,
        signal: AbortSignal.timeout(HTTP.timeoutMs),
        cache: 'no-store',
      });
      const text = await response.text();
      let parsed = null;
      try {
        parsed = text ? JSON.parse(text) : null;
      } catch {
        parsed = { raw: text.slice(0, 500) };
      }
      if (response.ok || ok.includes(response.status)) return { status: response.status, body: parsed };
      lastError = new HttpError(response.status, parsed, endpoint);
      if (!TEMPORARY.has(response.status) || attempt === attempts) throw lastError;
    } catch (error) {
      if (error instanceof HttpError && (!TEMPORARY.has(error.status) || attempt === attempts)) throw error;
      lastError = error;
      if (attempt === attempts) throw error;
    }
    log('warn', 'retry', { endpoint, reason: lastError?.status || lastError?.name || 'network' });
    await wait(HTTP.retryDelayMs);
  }
  throw lastError;
}
