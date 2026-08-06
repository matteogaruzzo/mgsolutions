import { notFound } from 'next/navigation';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import ServiceLandingTemplate from '@/components/servizi/ServiceLandingTemplate';
import { servizi, getServizio } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema, serviceSchema } from '@/lib/seo';

// Le pagine con il nuovo template a 9 blocchi (vedi components/servizi/ServiceLandingTemplate).
// automazioni-ai resta sul vecchio ServicePageTemplate.
const LANDING_TEMPLATE_SLUGS = ['siti-web-contatti', 'ecommerce-shopify', 'restyling-ottimizzazione', 'consulenza-strategica'];

export function generateStaticParams() {
  return servizi.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServizio(params.slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.body,
    path: `/servizi/${service.slug}`,
  });
}

export default function ServizioPage({ params }) {
  const service = getServizio(params.slug);
  if (!service) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({ title: service.title, description: service.body, path: `/servizi/${service.slug}` })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({ name: service.title, description: service.body, path: `/servizi/${service.slug}` })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Servizi', path: '/servizi' },
              { name: service.title, path: `/servizi/${service.slug}` },
            ])
          ),
        }}
      />
      {service.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(service.faqs)) }}
        />
      )}
      {LANDING_TEMPLATE_SLUGS.includes(service.slug) ? (
        <ServiceLandingTemplate service={service} />
      ) : (
        <ServicePageTemplate service={service} />
      )}
    </>
  );
}
