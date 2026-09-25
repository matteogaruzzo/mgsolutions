import ServicePage from '@/components/agria/service/ServicePage';
import { areaPages } from '@/content/agria/servizi';
import { agriaPageMetadata } from '@/lib/seo';

// Pagina area AGRIA (Prompt 12). Rotta statica: ha la precedenza su /servizi/[slug] (legacy).
const area = areaPages.presence;

export const metadata = agriaPageMetadata(area.meta);

export default function DigitalPresencePage() {
  return <ServicePage area={area} />;
}
