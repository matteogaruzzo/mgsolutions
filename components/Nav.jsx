'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GrapeIcon } from '@/components/icons/WineIcons';
import SocialIcons from '@/components/SocialIcons';

const links = [
  { href: '/chi-sono', label: 'Chi Sono' },
  { href: '/servizi', label: 'Cosa Facciamo' },
  { href: '/settori', label: 'I Tre Settori' },
  { href: '/metodo', label: 'Metodo' },
  { href: '/software', label: 'Software' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contatti', label: 'Contatti' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
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
        <div className="md:hidden bg-paper border-b border-line">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-ink/80"
              >
                {l.label}
              </Link>
            ))}
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
