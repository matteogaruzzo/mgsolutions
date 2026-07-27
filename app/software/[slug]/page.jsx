import { notFound } from 'next/navigation';
import SoftwareFamilyTemplate from '@/components/SoftwareFamilyTemplate';
import { softwareFamilies, getSoftwareFamily } from '@/lib/data';

export function generateStaticParams() {
  return softwareFamilies.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }) {
  const family = getSoftwareFamily(params.slug);
  if (!family) return {};
  return {
    title: family.name,
    description: family.pitch,
  };
}

export default function SoftwareFamilyPage({ params }) {
  const family = getSoftwareFamily(params.slug);
  if (!family) notFound();
  return <SoftwareFamilyTemplate family={family} />;
}
