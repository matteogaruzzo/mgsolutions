import ModuleTemplate from '@/components/ModuleTemplate';
import { getBusinessSuiteModule } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const mod = getBusinessSuiteModule('social-ai');

const PAGE = {
  title: `${mod.name}: automazione social con approvazione cliente`,
  description:
    'Calendario editoriale, contenuti AI e pubblicazione automatica sui social — ma nulla esce senza la tua approvazione. Per cantine, agriturismi e produttori agroalimentari.',
  path: '/software/social-ai',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['social media automation agroalimentare', 'gestione social cantina', 'contenuti AI agriturismo'],
});

export default function SocialAIPage() {
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
