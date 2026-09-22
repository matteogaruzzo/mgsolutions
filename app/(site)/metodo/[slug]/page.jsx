import { notFound } from 'next/navigation';
import MethodStepTemplate from '@/components/MethodStepTemplate';
import { metodoSteps, getMetodoStep } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema } from '@/lib/seo';

export function generateStaticParams() {
  return metodoSteps.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const step = getMetodoStep(params.slug);
  if (!step) return {};
  return pageMetadata({
    title: `Step ${step.n}: ${step.title}`,
    description: step.body,
    path: `/metodo/${step.slug}`,
  });
}

export default function MetodoStepPage({ params }) {
  const step = getMetodoStep(params.slug);
  if (!step) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({ title: `Step ${step.n}: ${step.title}`, description: step.body, path: `/metodo/${step.slug}` })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Metodo', path: '/metodo' },
              { name: step.title, path: `/metodo/${step.slug}` },
            ])
          ),
        }}
      />
      <MethodStepTemplate step={step} />
    </>
  );
}
