import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'JSON non valido' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const source = typeof body.source === 'string' ? body.source : 'footer';

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ success: false, message: 'Email non valida' }, { status: 400 });
  }

  if (!supabaseServer) {
    console.error('[newsletter/subscribe] Supabase non configurato');
    return NextResponse.json({ success: false, message: 'Servizio non disponibile' }, { status: 500 });
  }

  const { error } = await supabaseServer
    .from('newsletter_subscribers')
    .insert([{ email, source }]);

  if (error?.code === '23505') {
    return NextResponse.json({ success: false, message: 'Email già iscritta' }, { status: 400 });
  }

  if (error) {
    console.error('[newsletter/subscribe] Errore salvataggio Supabase:', error);
    return NextResponse.json({ success: false, message: 'Errore nel salvataggio' }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Iscritto alla newsletter!' });
}
