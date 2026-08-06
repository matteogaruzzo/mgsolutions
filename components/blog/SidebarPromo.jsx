import Link from 'next/link';
import { ScreenIcon, GearIcon, CompassIcon, ChartIcon, CartIcon } from '@/components/icons/ServiceIcons';

const categoryBucket = {
  AI: 'ai',
  'Agribusiness AI': 'ai',
  Shopify: 'ecommerce',
  'Wine Tech': 'ecommerce',
  SEO: 'seo',
  Strategia: 'strategia',
};

const promosByBucket = {
  ecommerce: [
    { Icon: CartIcon, title: 'E-commerce Shopify', body: 'Store costruiti per vendere.', href: '/servizi/ecommerce-shopify' },
    { Icon: CompassIcon, title: 'Consulenza strategica', body: 'Analisi personalizzata del tuo caso.', href: '/servizi/consulenza-strategica' },
  ],
  ai: [
    { Icon: GearIcon, title: 'Software AI su misura', body: 'Automazione per le attività ripetitive.', href: '/servizi/software-ai-su-misura' },
    { Icon: ChartIcon, title: 'Gestionali su misura', body: 'CRM e automazioni per cantine, agriturismi e frantoi.', href: '/software' },
  ],
  seo: [
    { Icon: ScreenIcon, title: 'Siti che generano contatti', body: 'Struttura pensata per farti trovare.', href: '/servizi/siti-web-contatti' },
    { Icon: CompassIcon, title: 'Presenza in tutta Italia', body: 'Scopri come lavoriamo nella tua regione.', href: '/geo' },
  ],
  strategia: [
    { Icon: CompassIcon, title: 'Consulenza strategica', body: 'Priorità chiare su cosa fare per primo.', href: '/servizi/consulenza-strategica' },
    { Icon: ScreenIcon, title: 'Tutti i servizi', body: 'Siti, e-commerce, software.', href: '/servizi' },
  ],
  default: [
    { Icon: GearIcon, title: 'Software su misura', body: 'Gestionali costruiti sul tuo modo di lavorare.', href: '/software' },
    { Icon: CompassIcon, title: 'Consulenza strategica', body: 'Analisi personalizzata del tuo caso.', href: '/servizi/consulenza-strategica' },
  ],
};

export default function SidebarPromo({ category, className = '' }) {
  const promos = promosByBucket[categoryBucket[category]] || promosByBucket.default;

  return (
    <div className={`space-y-3 ${className}`}>
      {promos.map((p) => (
        <Link
          key={p.title}
          href={p.href}
          className="block bg-paper border border-line rounded-xl p-4 hover:border-forest/40 hover:shadow-sm transition-all"
        >
          <p.Icon className="w-5 h-5 text-forest" />
          <p className="mt-2 text-sm font-semibold text-ink">{p.title}</p>
          <p className="mt-1 text-xs text-ink/55 leading-relaxed">{p.body}</p>
          <span className="mt-2 inline-block text-xs font-semibold text-forest">Scopri →</span>
        </Link>
      ))}
    </div>
  );
}
