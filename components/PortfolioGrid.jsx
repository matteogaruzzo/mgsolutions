'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const filters = [
  { key: 'all', label: 'Tutti' },
  { key: 'wine-viticulture', label: 'Wine' },
  { key: 'oleifici-food-tech', label: 'Olio' },
  { key: 'wine-hospitality-agriturismi', label: 'Hospitality' },
];

export default function PortfolioGrid({ caseStudies }) {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? caseStudies : caseStudies.filter((c) => c.sector === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={`text-xs font-semibold tracking-wide rounded-full px-4 py-2 border transition-colors ${
              active === f.key
                ? 'bg-forest text-paper border-forest'
                : 'border-line text-ink/60 hover:text-ink hover:border-ink/30'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {visible.map((c, i) => (
          <Reveal key={c.slug} delay={i * 60}>
            <Link href={`/portfolio/${c.slug}`} className="group relative block overflow-hidden rounded-2xl h-80">
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(/images/case-studies/${c.slug}-desktop.png)` }}
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-colors duration-300" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                  {c.concept && (
                    <span className="text-[10px] tracking-widest border border-white/40 rounded-full px-2 py-0.5 text-white/70">
                      CONCEPT
                    </span>
                  )}
                </div>
                <p className="text-white/75 text-sm mt-1">{c.kind}</p>

                <div className="mt-4 max-h-0 group-hover:max-h-32 overflow-hidden transition-[max-height] duration-300">
                  <div className="space-y-1 pb-1">
                    {c.results.slice(0, 2).map((r) => (
                      <p key={r} className="text-sm font-semibold" style={{ color: c.brand.accent }}>
                        {r}
                      </p>
                    ))}
                  </div>
                  <span className="inline-block mt-2 text-xs font-semibold text-white">Entra nella storia →</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
