import { Resend } from 'resend';
import { site } from '@/lib/data';
import { log } from './http';

const escape = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Segnala al team una richiesta arrivata ma non completata nel CRM (per
// esempio trattativa non creata), perché il lead non si perda. Usa Resend se
// configurato (RESEND_API_KEY, TEAM_NOTIFICATION_EMAIL); in ogni caso resta la
// riga di registro con l'identificativo della richiesta.
export async function alertTeam({ submissionId, stage, reason, lead }) {
  log('error', 'lead_needs_attention', { submissionId, stage, reason });
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  try {
    const resend = new Resend(key);
    const rows = [
      ['Azienda', lead.azienda],
      ['Settore', lead.settore],
      ['Servizio', lead.servizio],
      ['Tempistica', lead.tempistica],
      ['Nome', `${lead.nome} ${lead.cognome}`],
      ['Email', lead.email],
      ['Telefono', lead.phone],
      ['Preferenza', lead.preferenza],
      ['Messaggio', lead.messaggio || '—'],
    ];
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TEAM_NOTIFICATION_EMAIL || site.email,
      subject: `Richiesta dal sito da completare in HubSpot — ${lead.azienda}`,
      html: `<p>La richiesta è arrivata dal modulo contatti, ma un passaggio nel CRM non è riuscito: <strong>${escape(stage)}</strong> (${escape(reason)}).</p>
<p>Va completata a mano in HubSpot. Identificativo: <code>${escape(submissionId)}</code></p>
<table cellpadding="4">${rows.map(([k, v]) => `<tr><td><strong>${escape(k)}</strong></td><td>${escape(v)}</td></tr>`).join('')}</table>`,
    });
  } catch (error) {
    log('error', 'alert_email_failed', { submissionId, reason: error?.name || 'errore' });
  }
}
