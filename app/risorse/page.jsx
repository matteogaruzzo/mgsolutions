import RisorseContent from '@/components/RisorseContent';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Risorse: Guide e Template per il Tuo Business',
  description:
    'Guide, template e mini-corsi pratici su AI, Shopify, SEO e GEO per PMI agroalimentari. Iscriviti in lista per essere il primo ad accedere gratis.',
  path: '/risorse',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['guide e-commerce vino', 'template Shopify', 'risorse marketing digitale agroalimentare'],
});

export default function Risorse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <RisorseContent />
    </>
  );
}
