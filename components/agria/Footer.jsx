'use client';

import Link from 'next/link';
import { reopenConsentBanner } from '@/lib/consent';
import BrandLockup from './BrandLockup';
import { Container, Eyebrow } from './ui';
import { NAV_PANELS } from './nav-data';

const FISCAL = 'P.IVA IT04006460549';

const LINK_CLASS =
  'rounded font-agria-sans text-agria-sm text-agria-grey transition-colors hover:text-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2';

const panelLinks = (key) =>
  NAV_PANELS.find((panel) => panel.key === key).items.map(({ title, href }) => ({ label: title, href }));

const COLUMNS = [
  { title: 'Servizi', links: panelLinks('servizi') },
  { title: 'Settori', links: panelLinks('settori') },
  {
    title: 'Azienda',
    links: [
      { label: 'Azienda', href: '/azienda' },
      { label: 'Insights', href: '/blog' },
      { label: 'Contatti', href: '/contatti' },
    ],
  },
  {
    title: 'Legale',
    links: [
      { label: 'Privacy', href: '/privacy-policy' },
      { label: 'Cookie', href: '/cookie-policy' },
      { label: 'Termini', href: '/termini-e-condizioni' },
      { label: 'Crediti immagini', href: '/crediti-immagini' },
    ],
    // pulsante gestito dal banner consenso esistente
    extra: (
      <button type="button" onClick={reopenConsentBanner} className={`text-left ${LINK_CLASS}`}>
        Preferenze cookie
      </button>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-agria-border bg-agria-white">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <Eyebrow as="h2">{column.title}</Eyebrow>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={LINK_CLASS}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {column.extra && <li>{column.extra}</li>}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-agria-border pt-8 md:flex-row md:items-center md:justify-between">
          <BrandLockup tone="light" />
          <p className="font-agria-sans text-agria-sm text-agria-grey">
            © {new Date().getFullYear()} Agria System · {FISCAL}
          </p>
        </div>
      </Container>
    </footer>
  );
}
