import ModuleTemplate from '@/components/ModuleTemplate';
import { getBusinessSuiteModule } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const mod = getBusinessSuiteModule('control-tower');

const PAGE = {
  title: `${mod.name}: la dashboard direzionale con report AI`,
  description:
    'Sito, prenotazioni, vendite, social e team in un’unica dashboard, con alert automatici e report AI settimanale. Incluso nel pacchetto Ecosistema.',
  path: '/software/control-tower',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['dashboard direzionale agroalimentare', 'report ai settimanale', 'business intelligence cantina'],
});

export default function ControlTowerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <ModuleTemplate module={mod} />
    </>
  );
}
