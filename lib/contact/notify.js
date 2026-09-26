import { Resend } from 'resend';
import { site } from '@/lib/data';
import { log } from './http';

// Notifiche interne via Resend, indipendenti da quelle native di HubSpot.
// Destinatari: TEAM_NOTIFICATION_EMAIL, anche più indirizzi separati da
// virgola (se vuota, l'email del sito). Mittente: RESEND_FROM_EMAIL.
// Nel testo solo i dati della richiesta: nessun token, segreto o dato tecnico.

const escape = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function teamRecipients() {
  const list = String(process.env.TEAM_NOTIFICATION_EMAIL || '')
    .split(/[,;]/)
    .map((email) => email.trim())
    .filter((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  return list.length ? list : [site.email];
}

function leadRows(lead) {
  return [
    ['Nome e cognome', `${lead.nome} ${lead.cognome}`],
    ['Azienda', lead.azienda],
    ['Email', lead.email],
    ['Telefono', lead.phone],
    ['Settore', lead.settore],
    ['Servizio richiesto', lead.servizio],
    ['Tempistica', lead.tempistica],
    ['Tipo richiesta', lead.preferenza],
    ['Messaggio', lead.messaggio || '—'],
  ];
}

const table = (rows) =>
  `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="border-bottom:1px solid #e4e8e3;color:#6b706c;vertical-align:top;white-space:nowrap">${escape(k)}</td><td style="border-bottom:1px solid #e4e8e3;color:#111;white-space:pre-wrap">${escape(v)}</td></tr>`
    )
    .join('')}</table>`;

const text = (rows) => rows.map(([k, v]) => `${k}: ${v}`).join('\n');

async function send({ subject, intro, lead, submissionId, event }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    log('warn', `${event}_skipped`, { submissionId, reason: 'resend_not_configured' });
    return false;
  }
  try {
    const resend = new Resend(key);
    const rows = leadRows(lead);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: teamRecipients(),
      replyTo: lead.email,
      subject,
      html: `<p style="font-family:Arial,sans-serif;font-size:14px">${intro}</p>${table(rows)}`,
      text: `${intro.replace(/<[^>]+>/g, '')}\n\n${text(rows)}`,
    });
    if (error) throw new Error(error.name || 'resend_error');
    log('info', event, { submissionId, recipients: teamRecipients().length });
    return true;
  } catch (error) {
    log('error', `${event}_failed`, { submissionId, reason: error?.message?.slice(0, 80) || 'errore' });
    return false;
  }
}

// Nuova richiesta completata: notifica al team
export function notifyNewLead({ submissionId, lead }) {
  return send({
    subject: `Nuova richiesta dal sito — ${lead.azienda}`,
    intro: `Nuova richiesta dal modulo contatti del sito (<strong>${escape(lead.preferenza)}</strong>). Contatto, azienda e trattativa sono in HubSpot, assegnati ad Alessandro.`,
    lead,
    submissionId,
    event: 'team_notified',
  });
}

// Richiesta arrivata ma non completata nel CRM (per esempio trattativa non
// creata): va completata a mano perché il lead non si perda.
export function alertTeam({ submissionId, stage, lead }) {
  log('error', 'lead_needs_attention', { submissionId, stage });
  return send({
    subject: `Richiesta dal sito da completare in HubSpot — ${lead.azienda}`,
    intro: `La richiesta è arrivata dal modulo contatti, ma un passaggio in HubSpot non è riuscito: <strong>${escape(stage)}</strong>. Va completata a mano.`,
    lead,
    submissionId,
    event: 'team_alerted',
  });
}
