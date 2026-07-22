import Link from 'next/link';
import { site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-edge mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-mono text-sm tracking-[0.15em]">
              MG<span className="text-brass">/</span>SOLUTIONS
            </p>
            <p className="display text-3xl mt-4 max-w-sm leading-tight">
              {site.tagline}
            </p>
            <Link href="/prenota-call" className="btn-solid mt-6 bg-brass text-ink hover:bg-paper">
              Prenota una call →
            </Link>
          </div>

          <div>
            <p className="eyebrow text-paper/50">Naviga</p>
            <ul className="mt-4 space-y-2 font-mono text-sm text-paper/80">
              <li><Link href="/chi-sono" className="hover:text-brass">Chi sono</Link></li>
              <li><Link href="/servizi" className="hover:text-brass">Servizi</Link></li>
              <li><Link href="/software" className="hover:text-brass">Software</Link></li>
              <li><Link href="/settori" className="hover:text-brass">Settori</Link></li>
              <li><Link href="/portfolio" className="hover:text-brass">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-brass">Blog</Link></li>
              <li><Link href="/risorse" className="hover:text-brass">Risorse</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/50">Contatti</p>
            <ul className="mt-4 space-y-2 font-mono text-sm text-paper/80">
              <li><a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-brass">{site.phone}</a></li>
              <li className="text-paper/60 leading-relaxed">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="rule border-paper/15 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-xs text-paper/50">
          <span>© {new Date().getFullYear()} {site.founder}. Tutti i diritti riservati.</span>
          <span>P.IVA IT04006460549</span>
        </div>
      </div>
    </footer>
  );
}
