import SectorPageTemplate from '@/components/SectorPageTemplate';
import { getSector, sectorPageContent } from '@/lib/data';
import { OliveIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const s = getSector('oleifici-food-tech');
const content = sectorPageContent['oleifici-food-tech'];

const PAGE = {
  title: 'E-commerce olio e B2B per frantoi',
  description:
    'Vendite dirette e B2B online per oleifici. Automazione ordini, gestione bulk, CRM clienti. Scalate da vendita locale a distribuzione nazionale.',
  path: '/settori/oleifici-food-tech',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'e-commerce olio',
    'vendita olio online',
    'b2b oleificio',
    'automazione clienti oleificio',
    'oleificio online Umbria',
  ],
});

const theme = {
  accentText: 'text-olio-accent',
  goldText: 'text-olio-gold',
  goldBgSoft: 'bg-olio-gold/15',
  bgAlt: 'bg-olio-bg',
  divider: '#D4AF37',
  heroImage: '/images/sectors/olio-hero.png',
  icon: OliveIcon,
};

export default function OleificiFoodTechPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <SectorPageTemplate sectorNumber="02" sector={s} content={content} theme={theme} />
    </>
  );
}
