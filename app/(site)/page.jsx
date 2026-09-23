import HomeHero from '@/components/agria/home/HomeHero';
import FactStrip from '@/components/agria/home/FactStrip';
import SectorCards from '@/components/agria/home/SectorCards';
import ServiceCards from '@/components/agria/home/ServiceCards';
import DataSection from '@/components/agria/home/DataSection';
import MethodSection from '@/components/agria/home/MethodSection';
import ClaritySection from '@/components/agria/home/ClaritySection';
import ClosingCta from '@/components/agria/home/ClosingCta';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';
import { faqs } from '@/lib/data';

const PAGE = {
  title: 'Software e Siti Web per Cantine, Frantoi e Agriturismi',
  description:
    'Aumenta le vendite dirette con siti web, e-commerce, software CRM e AI per cantine, frantoi e agriturismi. Soluzioni su misura in tutta Italia.',
  path: '/',
};

// La root page condivide il segmento con app/layout.jsx: il title.template
// lì definito non si applica qui (stesso segmento, non un discendente), quindi
// il <title> risulta esattamente PAGE.title, senza suffisso automatico.
export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'web agency agroalimentare',
    'e-commerce vino',
    'automazione agribusiness',
    'software per cantina',
    'digitalizzazione Umbria',
    'Matteo Garuzzo',
  ],
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <HomeHero />
      <FactStrip />
      <SectorCards />
      <ServiceCards />
      <DataSection />
      <MethodSection />
      <ClaritySection />
      <ClosingCta />
    </>
  );
}
