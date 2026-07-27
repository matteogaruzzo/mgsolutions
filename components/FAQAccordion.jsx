'use client';

import { useState } from 'react';
import { faqs as allFaqs } from '@/lib/data';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  const faqs = items || allFaqs;

  return (
    <div className="rule">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="rule">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full py-5 flex items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink">{f.q}</span>
              <span
                className="shrink-0 text-primary transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-ink/60 leading-relaxed max-w-2xl">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
