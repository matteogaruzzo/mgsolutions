import { notFound } from 'next/navigation';
import MethodStepTemplate from '@/components/MethodStepTemplate';
import { metodoSteps, getMetodoStep } from '@/lib/data';

export function generateStaticParams() {
  return metodoSteps.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const step = getMetodoStep(params.slug);
  if (!step) return {};
  return {
    title: `Step ${step.n}: ${step.title}`,
    description: step.body,
  };
}

export default function MetodoStepPage({ params }) {
  const step = getMetodoStep(params.slug);
  if (!step) notFound();
  return <MethodStepTemplate step={step} />;
}
