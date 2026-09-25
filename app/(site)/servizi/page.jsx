import PageHero from '@/components/agria/sections/PageHero';
import AreaCards from '@/components/agria/service/AreaCards';
import MethodSection from '@/components/agria/home/MethodSection';
import ClosingCta from '@/components/agria/home/ClosingCta';
import { serviceClosing, servicesIndex } from '@/content/agria/servizi';
import { agriaPageMetadata, breadcrumbSchema, webPageSchema } from '@/lib/seo';

// Indice dei servizi AGRIA (Prompt 12): sostituisce l'indice legacy allo stesso
// indirizzo. Le pagine legacy /servizi/[slug] restano (migration map: Prompt 14).
const { meta } = servicesIndex;

export const metadata = agriaPageMetadata(meta);

const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Servizi', path: meta.path },
];

export default function ServiziPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(meta)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMB)) }}
      />
      <PageHero
        eyebrow={servicesIndex.eyebrow}
        title={servicesIndex.title}
        lead={servicesIndex.lead}
        titleId="servizi-title"
      />
      <AreaCards />
      <MethodSection />
      <ClosingCta title={serviceClosing.title} text={null} cta={serviceClosing.cta} />
    </>
  );
}
