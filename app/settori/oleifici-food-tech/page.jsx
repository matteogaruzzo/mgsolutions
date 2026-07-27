import SectorPageTemplate from '@/components/SectorPageTemplate';
import { getSector, sectorPageContent } from '@/lib/data';
import { OliveIcon } from '@/components/icons/WineIcons';

const s = getSector('oleifici-food-tech');
const content = sectorPageContent['oleifici-food-tech'];

export const metadata = {
  title: 'Oleifici & Food Tech',
  description: content.heroSubtitle,
};

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
  return <SectorPageTemplate sectorNumber="02" sector={s} content={content} theme={theme} />;
}
