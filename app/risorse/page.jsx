'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const upcoming = [
  {
    tag: 'GUIDA',
    title: 'Il playbook dell’agente AI commerciale',
    body: 'Come impostare un agente che qualifica lead e fissa appuntamenti, passo per passo.',
  },
  {
    tag: 'TEMPLATE',
    title: 'Checklist Shopify ad alte conversioni',
    body: 'La lista di controllo che usiamo per rendere uno store veloce e pronto a vendere.',
  },
  {
    tag: 'MINI-CORSO',
    title: 'SEO & GEO per PMI',
    body: 'Farsi trovare da Google e dalle risposte AI, spiegato senza tecnicismi.',
  },
];

export default function Risorse() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function join(e) {
    e.preventDefault();
    // TODO fase 2: collegare a un servizio email (es. Resend / Mailchimp) o a Stripe per la vendita.
    setDone(true);
  }

  return (
    <section className="max-w-edge mx-auto px-6 pt-32 pb-24">
      <p className="eyebrow">Risorse</p>
      <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
        Contenuti digitali in arrivo.
      </h1>
      <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
        Guide, template e mini-corsi pratici per usare l’AI e vendere di più online. Lascia la tua
        email: sarai il primo a sapere quando escono, con un prezzo riservato a chi è in lista.
      </p>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {upcoming.map((u, i) => (
          <Reveal key={u.title} delay={i * 70}>
            <div className="border border-line rounded-2xl p-7 bg-paper h-full relative overflow-hidden">
              <span className="absolute top-5 right-5 font-mono text-[10px] tracking-widest text-ink/40 border border-line rounded-full px-2 py-0.5">
                PRESTO
              </span>
              <p className="font-mono text-xs text-forest tracking-widest">{u.tag}</p>
              <h2 className="display text-2xl mt-3">{u.title}</h2>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">{u.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* waitlist */}
      <div className="mt-16 bg-ink text-paper rounded-2xl p-10 md:p-14">
        <p className="eyebrow text-brass">Lista d’attesa</p>
        <h2 className="display text-3xl md:text-4xl mt-4 max-w-xl">
          Entra in lista, prezzo riservato al lancio.
        </h2>

        {done ? (
          <p className="mt-8 font-mono text-sm text-brass">
            → Sei in lista. Ti scriviamo appena il primo contenuto è pronto.
          </p>
        ) : (
          <form onSubmit={join} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="flex-1 bg-paper/10 border border-paper/25 rounded-full px-5 py-3 font-mono text-sm text-paper placeholder:text-paper/40 focus:outline-none focus:border-brass"
            />
            <button className="btn-solid bg-brass text-ink hover:bg-paper justify-center">
              Avvisami →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
