import { notFound } from 'next/navigation';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servizi, getServizio } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

export function generateStaticParams() {
  return servizi.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServizio(params.slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.body,
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
      <ServicePageTemplate service={service} />
    </>
  );
}
