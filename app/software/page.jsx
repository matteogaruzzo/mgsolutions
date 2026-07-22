'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { softwareProducts } from '@/lib/data';

export default function Software() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="max-w-edge mx-auto px-6 pt-32 pb-14">
        <p className="eyebrow">MG://software</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
          Software AI che lavorano al posto di un reparto.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Prodotti digitali pronti da attivare, oppure sviluppati su misura per la tua azienda.
          Agenti che qualificano lead, rispondono ai clienti e gestiscono processi ripetitivi —
          H24, senza pause.
        </p>

        {/* toggle prezzi */}
        <div className="mt-10 inline-flex items-center gap-1 border border-line rounded-full p-1 font-mono text-sm">
          <button
            onClick={() => setYearly(false)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !yearly ? 'bg-forest text-paper' : 'text-ink/60'
            }`}
          >
            Mensile
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-4 py-2 rounded-full transition-colors ${
              yearly ? 'bg-forest text-paper' : 'text-ink/60'
            }`}
          >
            Annuale <span className="text-brass">−2 mesi</span>
          </button>
        </div>
      </section>

      <section className="max-w-edge mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {softwareProducts.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div
                className={`h-full rounded-2xl p-8 flex flex-col border ${
                  p.highlight
                    ? 'bg-forest text-paper border-forest'
                    : 'bg-paper border-line'
                }`}
              >
                {p.highlight && (
                  <span className="font-mono text-[10px] tracking-widest text-brass mb-3">
                    PIÙ RICHIESTO
                  </span>
                )}
                <h3 className="display text-2xl">{p.name}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    p.highlight ? 'text-paper/75' : 'text-ink/65'
                  }`}
                >
                  {p.pitch}
                </p>

                <div className="mt-6 mb-6">
                  {p.monthly ? (
                    <p className="flex items-baseline gap-1">
                      <span className="display text-4xl">
                        €{yearly ? Math.round(p.yearly / 12) : p.monthly}
                      </span>
                      <span
                        className={`font-mono text-xs ${
                          p.highlight ? 'text-paper/60' : 'text-ink/50'
                        }`}
                      >
                        /mese{yearly ? ' · fatt. annuale' : ''}
                      </span>
                    </p>
                  ) : (
                    <p className="display text-3xl">Su progetto</p>
                  )}
                </div>

                <ul className="space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex gap-2.5 ${
                        p.highlight ? 'text-paper/80' : 'text-ink/70'
                      }`}
                    >
                      <span className="text-brass">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/prenota-call"
                  className={`btn mt-8 justify-center ${
                    p.highlight
                      ? 'bg-brass text-ink hover:bg-paper'
                      : 'btn-solid'
                  }`}
                >
                  {p.monthly ? 'Richiedi accesso →' : 'Parliamone →'}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-ink/50 max-w-2xl">
          * L’attivazione parte da una call: configuriamo l’agente sui tuoi processi e i tuoi dati
          prima di metterlo al lavoro. Nessun pagamento automatico online in questa fase.
        </p>
      </section>
    </>
  );
}
