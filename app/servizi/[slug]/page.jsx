import { notFound } from 'next/navigation';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servizi, getServizio } from '@/lib/data';

export function generateStaticParams() {
  return servizi.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServizio(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.body,
  };
}

export default function ServizioPage({ params }) {
  const service = getServizio(params.slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
