'use client';

import { useState } from 'react';
import { supportTiers } from '@/lib/data';

export default function PricingSupportTier() {
  const [selected, setSelected] = useState('basic');

  return (
    <div>
      <p className="eyebrow">Assistenza</p>
      <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Potenzia il tuo supporto.</h2>

      <div className="mt-8 space-y-3 max-w-2xl">
        {supportTiers.map((tier) => (
          <label
            key={tier.id}
            className={`flex items-center justify-between gap-4 rounded-xl border p-5 cursor-pointer transition-colors ${
              selected === tier.id ? 'border-primary bg-primary/5' : 'border-line bg-paper'
            }`}
          >
            <span className="flex items-center gap-4">
              <input
                type="radio"
                name="support-tier"
                checked={selected === tier.id}
                onChange={() => setSelected(tier.id)}
                className="w-4 h-4 accent-[#008b47]"
              />
              <span>
                <span className="block text-sm font-semibold text-gray-900">
                  {tier.name}
                  {tier.price > 0 && <span className="font-normal text-gray-600"> (+€{tier.price}/mese)</span>}
                </span>
                <span className="block text-xs text-gray-600 mt-0.5">{tier.description}</span>
              </span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
