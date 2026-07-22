'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  { href: '/chi-sono', label: 'Chi sono' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/software', label: 'Software' },
  { href: '/settori', label: 'Settori' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-edge mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-[0.15em] font-medium">
          MG<span className="text-brass">/</span>SOLUTIONS
        </Link>

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
              Prenota una call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
