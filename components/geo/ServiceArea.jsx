import Link from 'next/link';
import { regions } from '@/lib/geo-data';

const copyByPageType = {
  homepage: {
    title: 'Soluzioni digitali per l’agroalimentare in tutta Italia',
    desc: 'Lavoriamo con cantine, oleifici e agriturismi in tutte le regioni italiane. Seleziona la tua per scoprire come lavoriamo nella tua zona.',
  },
  software: {
    title: 'MG Business Suite in tutta Italia',
    desc: 'Implementiamo software e automazioni per l’agroalimentare in tutte le regioni italiane. Seleziona la tua regione per scoprire come lavoriamo nella tua zona.',
  },
  servizi: {
    title: 'Siti, e-commerce e software in tutta Italia',
    desc: 'Realizziamo progetti digitali per realtà agroalimentari in tutte le regioni. Clicca sulla tua regione per scoprire come lavoriamo lì.',
  },
  portfolio: {
    title: 'Progetti agroalimentari in tutta Italia',
    desc: 'I nostri case study coprono realtà di diverse regioni italiane. Seleziona la tua per scoprire come lavoriamo nella tua zona.',
  },
  blog: {
    title: 'Servizi digitali per l’agroalimentare nella tua regione',
    desc: 'Scopri come lavoriamo nella tua zona. Seleziona la regione.',
  },
  contatti: {
    title: 'Ti serviamo ovunque tu sia in Italia',
    desc: 'Lavoriamo da remoto con clienti in tutte le regioni italiane, con incontri in presenza dove serve. Seleziona la tua regione.',
  },
  referral: {
    title: 'Presenta un’azienda della tua regione',
    desc: 'Il programma referral vale in tutta Italia. Trova la tua regione per capire chi potresti presentarci.',
  },
  default: {
    title: 'Area servita: tutta Italia',
    desc: 'Lavoriamo con l’agroalimentare in tutte le regioni italiane. Seleziona la tua regione.',
  },
};

export default function ServiceArea({ pageType = 'default' }) {
  const copy = copyByPageType[pageType] || copyByPageType.default;

  return (
    <section className="bg-paper-dim border-t border-line">
      <div className="max-w-edge mx-auto px-6 py-16">
        <p className="eyebrow">Area servita</p>
        <h2 className="h3 text-xl md:text-2xl mt-3 text-ink max-w-xl">{copy.title}</h2>
        <p className="mt-2 text-sm text-ink/60 max-w-xl leading-relaxed">{copy.desc}</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
          {regions.map((r) => (
            <Link
              key={r.slug}
              href={`/geo/${r.slug}`}
              className="text-sm text-ink/70 hover:text-forest hover:underline transition-colors"
            >
              {r.name}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink/45">
          Non vedi la tua regione o vuoi maggiori dettagli?{' '}
          <Link href="/prenota-call" className="text-forest hover:text-brass font-semibold">
            Contattaci
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
