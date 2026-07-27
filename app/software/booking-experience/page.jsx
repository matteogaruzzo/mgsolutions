import ModuleTemplate from '@/components/ModuleTemplate';
import { getBusinessSuiteModule } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const mod = getBusinessSuiteModule('booking-experience');

const PAGE = {
  title: `${mod.name}: da prenotazione a recensione`,
  description:
    'Prenotazioni, caparre, promemoria, upselling e richiesta recensione automatica. Per enoturismo, agriturismi e strutture ricettive rurali.',
  path: '/software/booking-experience',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['booking enoturismo', 'prenotazioni agriturismo software', 'upselling degustazioni'],
});

export default function BookingExperiencePage() {
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
