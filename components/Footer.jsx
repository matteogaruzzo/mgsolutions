'use client';

import Link from 'next/link';
import { site } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';
import SocialIcons from '@/components/SocialIcons';
import NewsletterFooter from '@/components/NewsletterFooter';
import { reopenConsentBanner } from '@/lib/consent';

const serviziLinks = [
  { href: '/chi-sono', label: 'Chi Sono' },
  { href: '/servizi', label: 'Cosa Facciamo' },
  { href: '/settori', label: 'I Tre Settori' },
  { href: '/metodo', label: 'Metodo' },
  { href: '/portfolio', label: 'Portfolio' },
];

const risorseLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/software', label: 'Software' },
  { href: '/risorse', label: 'Risorse' },
  { href: '/quiz', label: 'Genera una proposta' },
  { href: '/referral', label: 'Referral Program (€200)' },
  { href: '/contatti', label: 'Contatti' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/termini-e-condizioni', label: 'Termini e Condizioni' },
];

export default function Footer() {
  return (
    <footer className="bg-paper-dim">
      <NewsletterFooter />

      <div className="max-w-edge mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-semibold text-sm tracking-[0.15em] text-ink">MG SOLUTIONS</p>
            <p className="mt-4 text-ink/70 leading-relaxed max-w-xs">{site.tagline}</p>
            <SocialIcons className="mt-5 text-ink" />
            <ul className="mt-5 space-y-2 font-mono text-sm text-ink/70">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-forest transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-forest transition-colors">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Servizi</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              {serviziLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-forest transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Risorse</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              {risorseLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-forest transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Azienda</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-forest transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={reopenConsentBanner}
                  className="hover:text-forest transition-colors underline-offset-2 hover:underline"
                >
                  Preferenze cookie
                </button>
              </li>
            </ul>
            <Link href="/prenota-call" className="btn-solid mt-6 text-[13px] py-2">
              <GrapeIcon className="w-4 h-4" />
              Prenota una call →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-xs text-paper/60">
          <span>© {new Date().getFullYear()} MG Solutions | P.IVA IT04006460549</span>
          <span>Made with ❤️ by {site.founder}</span>
        </div>
      </div>
    </footer>
  );
}
