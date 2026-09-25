import ServiceAreaPage from '@/components/agria/service/ServiceAreaPage';
import { SECTOR_LABELS, serviceAreas } from '@/content/agria/servizi-aree';
import { agriaPageMetadata } from '@/lib/seo';

// Pagina area AGRIA (Prompt 13). Rotta statica: ha la precedenza su /servizi/[slug] (legacy).
const area = serviceAreas.presence;
const others = Object.values(serviceAreas).filter((other) => other.key !== area.key);

export const metadata = agriaPageMetadata(area.meta);

export default function DigitalPresencePage() {
  return <ServiceAreaPage area={area} others={others} sectorLabels={SECTOR_LABELS} />;
}
