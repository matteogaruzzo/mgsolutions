'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GrapeIcon } from '@/components/icons/WineIcons';
import SocialIcons from '@/components/SocialIcons';

const softwareDropdown = [
  { href: '/software', label: 'MG Business Suite (overview)' },
  { href: '/software/social-ai', label: 'Social AI' },
  { href: '/software/lead-sales', label: 'Lead & Sales' },
  { href: '/software/booking-experience', label: 'Booking & Customer Experience' },
  { href: '/software/staff-operations', label: 'Staff & Operations' },
  { href: '/software/control-tower', label: 'Control Tower' },
  { href: '/software/pricing', label: 'Pricing' },
  { href: '/software/pricing#web-care', label: 'Manutenzione Sito (Web Care)' },
];

const links = [
  { href: '/chi-sono', label: 'Chi Sono' },
  { href: '/servizi', label: 'Cosa Facciamo' },
  { href: '/settori', label: 'I Tre Settori' },
  { href: '/metodo', label: 'Metodo' },
  { href: '/software', label: 'Software', dropdown: softwareDropdown },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contatti', label: 'Contatti' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobileSoftwareOpen, setMobileSoftwareOpen] = useState(false);

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

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.href} className="relative group">
                <Link
                  href={l.href}
                  className="font-mono text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors flex items-center gap-1"
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
                className="font-mono text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <Link href="/prenota-call" className="btn-solid text-[13px] py-2">
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
              l.dropdown ? (
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
                      onClick={() => setMobileSoftwareOpen((v) => !v)}
                      aria-label="Espandi Software"
                      className="text-ink/50 font-mono text-xs px-2"
                    >
                      {mobileSoftwareOpen ? '▴' : '▾'}
                    </button>
                  </div>
                  {mobileSoftwareOpen && (
                    <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-line pl-4">
                      {l.dropdown.map((d) => (
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
