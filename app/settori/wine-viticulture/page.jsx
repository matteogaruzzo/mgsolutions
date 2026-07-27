import SectorPageTemplate from '@/components/SectorPageTemplate';
import { getSector, sectorPageContent } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';

const s = getSector('wine-viticulture');
const content = sectorPageContent['wine-viticulture'];

export const metadata = {
  title: 'Wine & Viticulture',
  description: content.heroSubtitle,
};

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
  return <SectorPageTemplate sectorNumber="01" sector={s} content={content} theme={theme} />;
}
