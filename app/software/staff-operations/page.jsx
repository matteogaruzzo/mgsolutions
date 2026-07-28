import ModuleTemplate from '@/components/ModuleTemplate';
import { getBusinessSuiteModule } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const mod = getBusinessSuiteModule('staff-operations');

const PAGE = {
  title: `${mod.name}: turni, checklist e task per il team`,
  description:
    'Turni, ferie, timbrature, checklist di apertura/chiusura e task board per aziende agroalimentari e ricettive con personale.',
  path: '/software/staff-operations',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['gestione turni cantina', 'checklist operative agriturismo', 'software team agroalimentare'],
});

export default function StaffOperationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Software', path: '/software' },
              { name: mod.name, path: PAGE.path },
            ])
          ),
        }}
      />
      {mod.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(mod.faqs)) }}
        />
      )}
      <ModuleTemplate module={mod} />
    </>
  );
}
