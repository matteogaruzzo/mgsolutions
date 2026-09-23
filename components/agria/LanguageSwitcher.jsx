'use client';

import { locales, defaultLocale } from '@/lib/i18n';

// Nascosto finché non esistono pagine in altre lingue. Attivabile impostando
// NEXT_PUBLIC_SHOW_LOCALE_SWITCH=true su Vercel/env, senza riscritture.
const SHOW_LOCALE_SWITCH = process.env.NEXT_PUBLIC_SHOW_LOCALE_SWITCH === 'true';

export default function LanguageSwitcher() {
  if (!SHOW_LOCALE_SWITCH) return null;

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-agria-border p-0.5"
      role="group"
      aria-label="Lingua"
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          aria-pressed={locale === defaultLocale}
          className={`rounded-full px-2.5 py-1 font-agria-mono text-[11px] uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 ${
            locale === defaultLocale
              ? 'bg-agria-graphite text-agria-white'
              : 'text-agria-grey hover:text-agria-graphite'
          }`}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
