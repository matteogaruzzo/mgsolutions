'use client';

import Script from 'next/script';
import { site } from '@/lib/data';

export default function PrenotaCall() {
  return (
    <section className="max-w-edge mx-auto px-6 pt-32 pb-24">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14">
        {/* colonna sinistra */}
        <div>
          <p className="eyebrow">MG://prenota-call</p>
          <h1 className="display text-5xl md:text-6xl mt-5 leading-[1.02]">
            Trenta minuti, zero impegno.
          </h1>
          <p className="mt-8 text-lg text-ink/70 leading-relaxed">
            Scegli uno slot libero qui a fianco. Nella call capiamo cosa vuoi ottenere e ti dico con
            onestà se e come possiamo aiutarti. Parli direttamente con me, Matteo.
          </p>

          <ul className="mt-10 rule">
            {[
              'Analisi del tuo progetto e degli obiettivi',
              'Ti dico se ha senso lavorare insieme',
              'Nessuna presentazione commerciale',
              'Prossimi passi chiari, con tempi e costi',
            ].map((t) => (
              <li key={t} className="rule py-4 flex gap-3 text-ink/80">
                <span className="text-brass font-mono">✓</span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 font-mono text-sm text-ink/60 space-y-1">
            <p>Preferisci scrivere?</p>
            <p>
              <a href={`mailto:${site.email}`} className="text-forest hover:text-brass">
                {site.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="text-forest hover:text-brass"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>

        {/* colonna destra: Calendly */}
        <div className="border border-line rounded-2xl overflow-hidden bg-paper min-h-[640px]">
          <div
            className="calendly-inline-widget"
            data-url={site.calendly}
            style={{ minWidth: '320px', height: '640px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  );
}
