import Link from 'next/link';
import { GrapeIcon } from '@/components/icons/WineIcons';

const categoryBucket = {
  AI: 'ai',
  'Agribusiness AI': 'ai',
  Shopify: 'ecommerce',
  'Wine Tech': 'ecommerce',
  SEO: 'seo',
  Strategia: 'strategia',
};

const ctas = {
  ecommerce: {
    title: 'Pronto a vendere online?',
    description: 'Realizziamo e-commerce Shopify performanti, pensati per convertire.',
    ctaLabel: 'Scopri e-commerce',
    href: '/servizi/ecommerce-shopify',
  },
  ai: {
    title: 'Automatizzare il lavoro è possibile',
    description: 'Software su misura che ti libera dalle attività ripetitive.',
    ctaLabel: 'Scopri l’automazione',
    href: '/software',
  },
  seo: {
    title: 'Vuoi più clienti nella tua zona?',
    description: 'Aiutiamo aziende agroalimentari a farsi trovare online, non solo da Google.',
    ctaLabel: 'Scopri i nostri siti',
    href: '/servizi/siti-web-contatti',
  },
  strategia: {
    title: 'Non sai da dove iniziare?',
    description: 'Analizziamo il tuo caso e definiamo insieme le priorità.',
    ctaLabel: 'Richiedi una consulenza',
    href: '/servizi/consulenza-strategica',
  },
  default: {
    title: 'Scalare online non è complicato',
    description: 'Questo articolo è una guida. Se vuoi implementare davvero, abbiamo soluzioni pronte.',
    ctaLabel: 'Scopri cosa possiamo fare',
    href: '/prenota-call',
  },
};

export default function CtaHeroSection({ category }) {
  const cta = ctas[categoryBucket[category]] || ctas.default;

  return (
    <div
      className="rounded-2xl p-6 md:p-8 shadow-md text-paper"
      style={{ background: 'linear-gradient(135deg, #00713a 0%, #008b47 100%)' }}
    >
      <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-display font-bold text-paper">{cta.title}</h2>
          <p className="mt-2 text-sm md:text-base text-paper/80 max-w-xl">{cta.description}</p>
        </div>
        <div className="text-center md:text-right">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 justify-center w-full md:w-auto px-6 py-3 bg-paper text-forest font-semibold rounded-full hover:scale-105 hover:bg-paper/95 transition-transform duration-300 shadow"
          >
            <GrapeIcon className="w-4 h-4" />
            {cta.ctaLabel} →
          </Link>
          <p className="mt-2 text-xs text-paper/60">30 minuti di consulenza gratuita</p>
        </div>
      </div>
    </div>
  );
}
