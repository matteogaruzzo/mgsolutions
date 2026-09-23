'use client';

import { locales, defaultLocale } from '@/lib/i18n';

// Nascosto finché non esistono pagine in altre lingue. Attivabile impostando
// NEXT_PUBLIC_SHOW_LOCALE_SWITCH=true su Vercel/env, senza riscritture.
const SHOW_LOCALE_SWITCH = process.env.NEXT_PUBLIC_SHOW_LOCALE_SWITCH === 'true';

export default function LanguageSwitcher() {
  if (!SHOW_LOCALE_SWITCH) return null;

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-white/20 p-0.5"
      role="group"
      aria-label="Lingua"
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          aria-pressed={locale === defaultLocale}
          className={`rounded-full px-2.5 py-1 font-agria-mono text-[11px] uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-agria-ink ${
            locale === defaultLocale
              ? 'bg-agria-white text-agria-ink'
              : 'text-agria-on-dark-muted hover:text-agria-on-dark'
          }`}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
