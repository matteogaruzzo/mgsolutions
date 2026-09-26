import { RECAPTCHA } from './config';
import { log, request } from './http';

// Verifica server-side del token reCAPTCHA v3, prima di qualsiasi chiamata a
// HubSpot: success, action, hostname e punteggio minimo (RECAPTCHA_MIN_SCORE,
// predefinito 0.5). Restituisce { ok, reason } senza mai esporre il token.
export async function verifyRecaptcha(token, ip, submissionId) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    log('error', 'recaptcha_not_configured', { submissionId });
    return { ok: false, reason: 'not_configured' };
  }
  if (typeof token !== 'string' || token.length < 20 || token.length > 4000) {
    return { ok: false, reason: 'missing_token' };
  }
  const minScore = Number.parseFloat(process.env.RECAPTCHA_MIN_SCORE);
  const threshold = Number.isFinite(minScore) ? minScore : RECAPTCHA.defaultMinScore;

  const params = new URLSearchParams({ secret, response: token });
  if (ip && ip !== 'sconosciuto') params.set('remoteip', ip);

  let result;
  try {
    ({ body: result } = await request(RECAPTCHA.verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      endpoint: 'recaptcha/siteverify',
    }));
  } catch (error) {
    log('error', 'recaptcha_unreachable', { submissionId, reason: error.status || error.name });
    return { ok: false, reason: 'unreachable' };
  }

  const checks = {
    success: result?.success === true,
    action: result?.action === RECAPTCHA.action,
    hostname: RECAPTCHA.hostnames.includes(result?.hostname),
    score: typeof result?.score === 'number' && result.score >= threshold,
  };
  const failed = Object.keys(checks).filter((key) => !checks[key]);
  log(failed.length ? 'warn' : 'info', 'recaptcha', {
    submissionId,
    score: result?.score,
    action: result?.action,
    hostname: result?.hostname,
    failed,
    errorCodes: result?.['error-codes'],
  });
  return { ok: failed.length === 0, reason: failed.join(',') || null };
}
