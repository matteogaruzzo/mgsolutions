'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { testimonials as allTestimonials } from '@/lib/data';

const sectorAccent = {
  'wine-viticulture': 'text-wine-accent',
  'oleifici-food-tech': 'text-olio-accent',
  'wine-hospitality-agriturismi': 'text-hospitality-accent',
};

function Stars() {
  return (
    <div className="flex gap-0.5 text-brass" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialCarousel({ items }) {
  const trackRef = useRef(null);
  const testimonials = items || allTestimonials;

  function scroll(dir) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' });
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[32%] border border-line rounded-2xl bg-paper p-7 flex flex-col"
          >
            <Stars />
            <p className="mt-4 text-ink/80 leading-relaxed flex-1">“{t.quote}”</p>
            <div className="mt-6 pt-4 border-t border-line">
              <p className="font-semibold text-ink">{t.name}</p>
              <p className={`text-xs mt-0.5 ${sectorAccent[t.sector]}`}>{t.role}</p>
              <Link
                href={`/portfolio/${t.caseStudySlug}`}
                className="mt-3 inline-block text-xs font-semibold text-forest hover:text-brass"
              >
                Leggi il case study →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-end">
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => scroll(-1)}
            aria-label="Precedente"
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Successivo"
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
