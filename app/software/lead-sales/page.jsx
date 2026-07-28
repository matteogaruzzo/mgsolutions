import ModuleTemplate from '@/components/ModuleTemplate';
import { getBusinessSuiteModule } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const mod = getBusinessSuiteModule('lead-sales');

const PAGE = {
  title: `${mod.name}: CRM per cantine, frantoi e agriturismi`,
  description:
    'CRM costruito sulle esigenze reali dell’agroalimentare: distingue privati, ristoranti, distributori e degustazioni. Non è un CRM generico.',
  path: '/software/lead-sales',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['crm agroalimentare', 'gestione lead cantina', 'crm distributori vino'],
});

export default function LeadSalesPage() {
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
