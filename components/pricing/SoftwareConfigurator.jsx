'use client';

import { useState, useMemo } from 'react';
import { configuratorSoftware } from '@/lib/data';

function discountFor(count) {
  if (count >= 5) return 0.3;
  if (count >= 3) return 0.2;
  if (count === 2) return 0.1;
  return 0;
}

export default function SoftwareConfigurator() {
  const [selected, setSelected] = useState([]);

  function toggle(id) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  }

  const { rawTotal, discountedTotal, discount, count } = useMemo(() => {
    const items = configuratorSoftware.filter((s) => selected.includes(s.id));
    const raw = items.reduce((sum, s) => sum + s.price, 0);
    const d = discountFor(items.length);
    return {
      rawTotal: raw,
      discountedTotal: Math.round(raw * (1 - d)),
      discount: d,
      count: items.length,
    };
  }, [selected]);

  return (
    <div>
      <p className="eyebrow">Su misura</p>
      <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
        Preferisci costruire il tuo pacchetto?
      </h2>
      <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
        Seleziona i software che servono davvero e ottieni lo sconto automatico.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
        {configuratorSoftware.map((s) => (
          <label
            key={s.id}
            className={`flex items-center justify-between gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${
              selected.includes(s.id) ? 'border-primary bg-primary/5' : 'border-line bg-paper'
            }`}
          >
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selected.includes(s.id)}
                onChange={() => toggle(s.id)}
                className="w-4 h-4 accent-[#008b47]"
              />
              <span className="text-sm font-medium text-gray-900">{s.name}</span>
            </span>
            <span className="text-sm text-gray-600">€{s.price}</span>
          </label>
        ))}
      </div>

      <div className="mt-8 max-w-2xl rounded-2xl bg-ink text-paper p-8">
        {count === 0 ? (
          <p className="text-paper/70">Seleziona almeno un software per vedere il prezzo.</p>
        ) : (
          <>
            <p className="text-lg">
              Hai scelto {count} software: <span className="font-bold">€{discountedTotal}/mese</span>
              {discount > 0 && (
                <span className="text-paper/60">
                  {' '}
                  (invece di €{rawTotal}/mese, -{Math.round(discount * 100)}%)
                </span>
              )}
            </p>
            <button
              type="button"
              disabled
              title="Prossimamente — Stripe integration"
              className="mt-6 py-3 px-6 rounded-lg text-base font-bold bg-brass text-ink opacity-50 cursor-not-allowed"
            >
              Procedi con questo pacchetto
            </button>
          </>
        )}
      </div>
    </div>
  );
}
