'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GrapeIcon, OliveIcon, FarmhouseDoorIcon } from '@/components/icons/WineIcons';
import { AIIcon, CartIcon, ScreenIcon, RefreshIcon, GearIcon, CompassIcon } from '@/components/icons/ServiceIcons';
import SocialIcons from '@/components/SocialIcons';
import { servizi, sectors } from '@/lib/data';

const serviziIconMap = { ai: AIIcon, cart: CartIcon, web: ScreenIcon, refresh: RefreshIcon, integration: GearIcon, compass: CompassIcon };

const serviziMega = servizi.map((s) => ({
  href: `/servizi/${s.slug}`,
  title: s.title,
  desc: s.body,
  benefit: s.resultNote,
  Icon: serviziIconMap[s.icon] || AIIcon,
}));

const settoriIconMap = {
  'wine-viticulture': GrapeIcon,
  'oleifici-food-tech': OliveIcon,
  'wine-hospitality-agriturismi': FarmhouseDoorIcon,
};

const settoriMega = sectors.map((s) => ({
  href: `/settori/${s.slug}`,
  title: s.name,
  desc: s.lead,
  benefit: s.result,
  Icon: settoriIconMap[s.slug] || GrapeIcon,
}));

const softwareDropdown = [
  { href: '/software', label: 'MG Business Suite (overview)' },
  { href: '/software/social-ai', label: 'Social AI' },
  { href: '/software/lead-sales', label: 'Lead & Sales' },
  { href: '/software/booking-experience', label: 'Booking & Customer Experience' },
  { href: '/software/staff-operations', label: 'Staff & Operations' },
  { href: '/software/control-tower', label: 'Control Tower' },
  { href: '/software/pricing', label: 'Pricing' },
];

const contattiDropdown = [
  { href: '/contatti', label: 'Scrivici' },
  { href: '/prenota-call', label: 'Prenota una call' },
  { href: '/referral', label: 'Guadagna con noi' },
];

const links = [
  { href: '/chi-sono', label: 'Chi Sono' },
  {
    href: '/servizi',
    label: 'Cosa Facciamo',
    mega: serviziMega,
    megaCols: 2,
    megaViewAll: { href: '/servizi', label: 'Vedi tutti i servizi →' },
  },
  {
    href: '/settori',
    label: 'I Tre Settori',
    mega: settoriMega,
    megaCols: 3,
    megaViewAll: { href: '/settori', label: 'Scopri tutti i settori →' },
  },
  { href: '/metodo', label: 'Metodo' },
  { href: '/software', label: 'Software', dropdown: softwareDropdown },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contatti', label: 'Contatti', dropdown: contattiDropdown },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="max-w-edge mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/brand/mg-logo-mark.png" alt="" width={36} height={36} priority className="w-9 h-9" />
            <span className="text-sm font-semibold tracking-[0.15em] text-ink">
              MG SOLUTIONS
            </span>
          </Link>
          <span className="hidden sm:block w-px h-5 bg-line" aria-hidden="true" />
          <SocialIcons className="hidden sm:flex text-ink [&_svg]:w-[18px] [&_svg]:h-[18px]" />
        </div>

        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) =>
            l.mega ? (
              <div key={l.href} className="relative group shrink-0">
                <Link
                  href={l.href}
                  className="font-mono text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {l.label}
                  <span className="text-[10px] text-ink/40" aria-hidden="true">▾</span>
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                  <div className="w-[600px] bg-paper border border-line rounded-xl shadow-lg p-6">
                    <div className={`grid gap-4 ${l.megaCols === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                      {l.mega.map((m) =>
                        l.megaCols === 3 ? (
                          <Link
                            key={m.href}
                            href={m.href}
                            className="p-4 rounded-lg transition-all duration-200 hover:bg-paper-dim hover:scale-[1.02] hover:shadow-sm"
                          >
                            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-forest/10 text-forest">
                              <m.Icon className="w-5 h-5" />
                            </span>
                            <p className="text-[13px] font-semibold text-ink leading-snug mt-3">{m.title}</p>
                            <p className="text-[11px] text-ink/55 mt-1 leading-snug">{m.desc}</p>
                            <p className="text-[11px] text-forest mt-1 leading-snug">{m.benefit}</p>
                          </Link>
                        ) : (
                          <Link
                            key={m.href}
                            href={m.href}
                            className="flex gap-3 p-4 rounded-lg transition-all duration-200 hover:bg-paper-dim hover:scale-[1.02] hover:shadow-sm"
                          >
                            <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-forest/10 text-forest">
                              <m.Icon className="w-5 h-5" />
                            </span>
                            <div className="min-w-0">
                              <p className="text-[13px] font-semibold text-ink leading-snug">{m.title}</p>
                              <p className="text-[11px] text-ink/55 mt-1 leading-snug">{m.desc}</p>
                              <p className="text-[11px] text-forest mt-1 leading-snug">{m.benefit}</p>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-line">
                      <Link href={l.megaViewAll.href} className="text-[13px] font-semibold text-forest hover:text-brass">
                        {l.megaViewAll.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : l.dropdown ? (
              <div key={l.href} className="relative group shrink-0">
                <Link
                  href={l.href}
                  className="font-mono text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {l.label}
                  <span className="text-[10px] text-ink/40" aria-hidden="true">▾</span>
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                  <div className="w-64 bg-paper border border-line rounded-xl shadow-lg py-2">
                    {l.dropdown.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className="block px-4 py-2 text-[13px] text-ink/75 hover:text-ink hover:bg-paper-dim transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors whitespace-nowrap shrink-0"
              >
                {l.label}
              </Link>
            )
          )}
          <Link href="/prenota-call" className="btn-solid text-[13px] py-2 whitespace-nowrap shrink-0">
            <GrapeIcon className="w-4 h-4" />
            Prenota una call
          </Link>
        </nav>

        <button
          className="md:hidden font-mono text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? '✕ CHIUDI' : '☰ MENU'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-b border-line max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) =>
              l.mega || l.dropdown ? (
                <div key={l.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-mono text-sm text-ink/80"
                    >
                      {l.label}
                    </Link>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen((v) => (v === l.href ? null : l.href))
                      }
                      aria-label={`Espandi ${l.label}`}
                      className="text-ink/50 font-mono text-xs px-2"
                    >
                      {mobileDropdownOpen === l.href ? '▴' : '▾'}
                    </button>
                  </div>
                  {mobileDropdownOpen === l.href && (
                    <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-line pl-4">
                      {l.mega
                        ? l.mega.map((m) => (
                            <Link
                              key={m.href}
                              href={m.href}
                              onClick={() => setOpen(false)}
                              className="flex gap-3"
                            >
                              <m.Icon className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                              <span>
                                <span className="block font-mono text-xs text-ink/80">{m.title}</span>
                                <span className="block text-[11px] text-ink/50 mt-0.5 leading-snug">{m.benefit}</span>
                              </span>
                            </Link>
                          ))
                        : l.dropdown.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              onClick={() => setOpen(false)}
                              className="font-mono text-xs text-ink/65"
                            >
                              {d.label}
                            </Link>
                          ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-ink/80"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              href="/prenota-call"
              onClick={() => setOpen(false)}
              className="btn-solid justify-center mt-2"
            >
              <GrapeIcon className="w-4 h-4" />
              Prenota una call
            </Link>
            <SocialIcons className="text-ink mt-2 [&_svg]:w-5 [&_svg]:h-5" />
          </div>
        </div>
      )}
    </header>
  );
}
