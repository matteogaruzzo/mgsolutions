import SectorPageTemplate from '@/components/SectorPageTemplate';
import { getSector, sectorPageContent } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const s = getSector('wine-viticulture');
const content = sectorPageContent['wine-viticulture'];

const PAGE = {
  title: 'E-commerce vino e booking enoturistico',
  description:
    'Portate le vendite dirette online: e-commerce, wine club, prenotazioni esperienze. Strategie costruite su cantine vere, non su promesse generiche.',
  path: '/settori/wine-viticulture',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'e-commerce vino',
    'vendita vino online',
    'booking cantine',
    'enoturismo booking system',
    'cantina online Umbria',
  ],
});

const theme = {
  accentText: 'text-wine-accent',
  goldText: 'text-wine-gold',
  goldBgSoft: 'bg-wine-gold/15',
  bgAlt: 'bg-wine-bg',
  divider: '#D4A574',
  heroImage: '/images/sectors/wine-hero.png',
  icon: GrapeIcon,
};

export default function WineViticulturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <SectorPageTemplate sectorNumber="01" sector={s} content={content} theme={theme} />
    </>
  );
}
