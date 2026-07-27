import { notFound } from 'next/navigation';
import SoftwareFamilyTemplate from '@/components/SoftwareFamilyTemplate';
import { softwareFamilies, getSoftwareFamily } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

export function generateStaticParams() {
  return softwareFamilies.map((f) => ({ slug: f.slug }));
}

// Title/description ottimizzati per SEO, più mirati del name/pitch generico
// usato nel resto della pagina (che restano invariati per l'H1/UI).
const seoOverrides = {
  'agente-commerciale': {
    title: 'Agente AI commerciale: intercetta e fissa appuntamenti 24/7',
    description:
      'Primo contatto automatizzato. Intercetta lead, qualifica, informa, fissa call. Niente email perse, niente clienti buoni dimenticati.',
  },
  'assistente-clienti-knowledge-base': {
    title: 'Assistente clienti AI: risposte 24/7 dalla knowledge base',
    description:
      'Risponde ai tuoi clienti usando solo i tuoi documenti. Quando serve davvero un umano, passa a una persona. Supporto senza costi fissi.',
  },
  'automazione-preventivi-processi': {
    title: 'Automazione preventivi: da richiesta a documento pronto',
    description:
      'Da email di richiesta a preventivo PDF firmato in minuti. Integrato nei tuoi strumenti, costruito sul tuo processo. Zero lavoro manuale.',
  },
  'reputation-customer-follow-up': {
    title: 'Reputation & follow-up: quando ha senso mantenere il cliente',
    description:
      'Raccoglie feedback, monitora recensioni, riattiva clienti dormienti. La differenza tra vendita una tantum e relazione ricorrente.',
  },
};

function seoContentFor(family) {
  return seoOverrides[family.slug] || { title: family.name, description: family.pitch };
}

export function generateMetadata({ params }) {
  const family = getSoftwareFamily(params.slug);
  if (!family) return {};
  return pageMetadata({
    ...seoContentFor(family),
    path: `/software/${family.slug}`,
  });
}

export default function SoftwareFamilyPage({ params }) {
  const family = getSoftwareFamily(params.slug);
  if (!family) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({ ...seoContentFor(family), path: `/software/${family.slug}` })
          ),
        }}
      />
      <SoftwareFamilyTemplate family={family} />
    </>
  );
}
