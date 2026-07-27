import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { supabaseServer } from '@/lib/supabase';
import { validateLeadPayload } from '@/lib/quiz/validators';
import { buildRecommendation } from '@/lib/quiz/rulesEngine';
import { sendClientConfirmation, notifyTeam, isEmailConfigured } from '@/lib/quiz/email';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'JSON non valido' }, { status: 400 });
  }

  const { valid, errors, isBot, sanitized } = validateLeadPayload(body);

  // Honeypot compilato: rispondiamo "successo" senza salvare né inviare nulla,
  // così un bot non scopre di essere stato individuato.
  if (isBot) {
    return NextResponse.json({ status: 'success' });
  }

  if (!valid) {
    return NextResponse.json({ error: 'Dati non validi', details: errors }, { status: 400 });
  }

  // La proposta viene SEMPRE ricalcolata qui, dalle risposte validate, mai
  // presa dal client: garantisce che quanto salvato/inviato per email sia
  // esattamente ciò che il motore regole avrebbe prodotto, senza possibilità
  // di manomissione lato client.
  const recommendation = buildRecommendation(sanitized.responses);

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null;

  let lead;
  try {
    lead = await prisma.lead.create({
      data: {
        nome: sanitized.nome,
        email: sanitized.email,
        telefono: sanitized.telefono,
        azienda: sanitized.azienda,
        responses: sanitized.responses,
        recommendation,
        ipAddress: ip,
      },
    });
  } catch (err) {
    console.error('[quiz/lead] Errore salvataggio DB:', err);
    return NextResponse.json(
      { error: 'Non siamo riusciti a salvare la richiesta. Riprova o scrivici direttamente.' },
      { status: 500 }
    );
  }

  // Log grezzo su Supabase, in parallelo a Prisma (fonte dati primaria).
  // Non deve mai bloccare né far fallire la risposta al client.
  const siteAnalysis = sanitized.responses.siteAnalysis;
  if (supabaseServer) {
    try {
      const { error: supabaseError } = await supabaseServer.from('quiz_responses').insert([
        {
          name: sanitized.nome,
          email: sanitized.email,
          phone: sanitized.telefono,
          company: sanitized.azienda,
          activities: sanitized.responses.businesses,
          tools: sanitized.responses.existingTools,
          goal: sanitized.responses.objective,
          urgency: sanitized.responses.urgency,
          website: sanitized.responses.websiteUrl,
          ai_platform: siteAnalysis?.platform || null,
          ai_ecommerce: siteAnalysis?.hasEcommerce || false,
          ai_notes: sanitized.responses.notes || null,
        },
      ]);
      if (supabaseError) {
        console.warn('[quiz/lead] Supabase backup failed (non-critical):', supabaseError);
      }
    } catch (err) {
      console.warn('[quiz/lead] Supabase backup failed (non-critical):', err);
    }
  } else {
    console.warn('[quiz/lead] Supabase non configurato: skip backup log.');
  }

  if (isEmailConfigured()) {
    const contact = { nome: sanitized.nome, email: sanitized.email, telefono: sanitized.telefono, azienda: sanitized.azienda };
    const [clientResult, teamResult] = await Promise.allSettled([
      sendClientConfirmation({ contact, recommendation, leadId: lead.id }),
      notifyTeam({ contact, responses: sanitized.responses, recommendation, leadId: lead.id }),
    ]);

    await prisma.lead.update({
      where: { id: lead.id },
      data: {
        emailClientSent: clientResult.status === 'fulfilled',
        emailTeamSent: teamResult.status === 'fulfilled',
      },
    });

    if (clientResult.status === 'rejected') console.error('[quiz/lead] Email cliente fallita:', clientResult.reason);
    if (teamResult.status === 'rejected') console.error('[quiz/lead] Email team fallita:', teamResult.reason);
  } else {
    console.warn('[quiz/lead] RESEND_API_KEY non configurata: lead salvato ma nessuna email inviata.');
  }

  return NextResponse.json({ status: 'success', leadId: lead.id });
}
