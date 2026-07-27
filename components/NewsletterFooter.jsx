'use client';

import { useState } from 'react';
import { GrapeIcon } from '@/components/icons/WineIcons';

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage(`✓ ${data.message || 'Iscritto alla newsletter!'}`);
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage(data.message || 'Qualcosa è andato storto, riprova.');
      }
    } catch {
      setStatus('error');
      setMessage('Errore di connessione. Riprova.');
    }
  }

  return (
    <section className="bg-gradient-to-r from-forest to-forest-deep text-paper">
      <div className="max-w-edge mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="eyebrow text-brass">Newsletter</p>
          <h2 className="display text-3xl md:text-4xl mt-4 leading-tight">
            Non perderti i prossimi articoli
          </h2>
          <p className="mt-4 text-paper/80 max-w-md leading-relaxed">
            Strategie vere, case study reali, tips per scalare.
          </p>
          <p className="mt-5 font-mono text-xs text-paper/55">
            Ricevirai articoli quando escono (1-2/mese). Niente spam, no fuffa.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full" noValidate>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              required
              disabled={status === 'loading'}
              aria-label="La tua email"
              className="flex-1 px-5 py-3 rounded-full bg-paper text-ink placeholder-ink/40 outline-none focus:ring-2 focus:ring-brass disabled:opacity-60 transition-shadow"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-solid bg-brass text-ink hover:bg-paper disabled:opacity-60 disabled:pointer-events-none justify-center hover:shadow-lg hover:-translate-y-0.5"
            >
              {status === 'loading' ? (
                'Iscrizione...'
              ) : (
                <>
                  <GrapeIcon className="w-4 h-4" />
                  Iscriviti
                </>
              )}
            </button>
          </div>

          <p className="mt-3 min-h-[1.25rem] text-sm" role="status" aria-live="polite">
            {status === 'success' && <span className="text-paper">{message}</span>}
            {status === 'error' && <span className="text-red-200">{message}</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
