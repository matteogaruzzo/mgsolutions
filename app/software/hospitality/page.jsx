import SoftwareSectorTemplate from '@/components/software/SoftwareSectorTemplate';
import { testimonials } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Software per Agriturismi: MG Business Suite',
  description:
    'Prenotazioni, CRM ospiti e gestione team per agriturismi, in un’unica piattaforma. Scopri come si applica al tuo caso.',
  path: '/software/hospitality',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['software per agriturismi', 'crm agriturismi', 'gestionale agriturismi', 'pms agriturismi'],
});

const faqs = [
  {
    q: 'Posso continuare a usare Booking.com e Airbnb insieme alla piattaforma?',
    a: 'Sì, MG Booking & Experience si sincronizza con i principali canali per evitare l’overbooking mentre cresce il canale diretto.',
  },
  {
    q: 'Gestisce anche le esperienze, non solo le camere?',
    a: 'Sì, puoi proporre cene, degustazioni ed escursioni nello stesso percorso di prenotazione della camera.',
  },
  {
    q: 'Ha senso anche per un B&B con poche camere?',
    a: 'Sì: il piano Essenziale è pensato proprio per strutture piccole che vogliono partire da un solo processo prioritario, tipicamente le prenotazioni.',
  },
  {
    q: 'Serve formazione per il team?',
    a: 'Sì, viene inclusa all’attivazione; l’interfaccia è pensata per essere usata senza competenze tecniche.',
  },
];

const testimonial = testimonials.find((t) => t.caseStudySlug === 'podere-la-vite');

export default function SoftwareHospitalityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Software', path: '/software' },
              { name: 'Per Agriturismi', path: PAGE.path },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <SoftwareSectorTemplate
        eyebrow="MG Business Suite · Per Agriturismi"
        h1="Software per Agriturismi: Prenotazioni, CRM e Team in Una Piattaforma"
        subheadline="Camere, cene, degustazioni ed escursioni: un agriturismo vende più di un semplice pernottamento. Se prenotazioni, contatti e team vivono su strumenti diversi, nessuno di quegli strumenti ha davvero il quadro completo."
        todayVsSuite={{
          today: [
            'Prenotazioni gestite solo per telefono o email',
            'Nessun modo semplice per proporre esperienze durante la prenotazione',
            'Task del team coordinati a voce o su WhatsApp',
            'Nessun follow-up automatico verso gli ospiti che tornano',
          ],
          withSuite: [
            'Booking diretto con calendario sincronizzato anche con Booking.com e Airbnb',
            'Esperienze proposte nello stesso percorso di prenotazione della camera',
            'Turni e task del team organizzati in un unico posto',
            'Email automatiche dopo il soggiorno per far tornare l’ospite',
          ],
        }}
        moduleNotes={{
          'lead-sales': 'Contatti degli ospiti — chi prenota per la prima volta, chi torna ogni anno — con follow-up automatici.',
          'social-ai': 'Contenuti social per raccontare l’esperienza — colazioni, colline, silenzio — pubblicati con costanza.',
          'booking-experience': 'Prenotazioni dirette di camere ed esperienze, con calendario sincronizzato anche con Booking.com e Airbnb.',
          'staff-operations': 'Turni e task per pulizie, cucina e accoglienza, coordinati senza il caos di WhatsApp nei periodi di alta stagione.',
          'control-tower': 'Una dashboard che aggrega occupazione, esperienze vendute e performance del team (piano Ecosistema).',
        }}
        caseStudySlug="podere-la-vite"
        testimonial={testimonial}
        recommendedPlanId="crescita"
        faqs={faqs}
        blogHref="/blog/software-per-agriturismi"
        blogLabel="Leggi l’articolo: Software per Agriturismi"
        otherSectors={[
          { href: '/software/vitivinicolo', label: 'Per Cantine' },
          { href: '/software/frantoi', label: 'Per Frantoi' },
        ]}
      />
    </>
  );
}
