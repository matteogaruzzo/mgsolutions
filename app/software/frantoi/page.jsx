import SoftwareSectorTemplate from '@/components/software/SoftwareSectorTemplate';
import { testimonials } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Software per Frantoi: MG Business Suite',
  description:
    'CRM, ordini B2B, gestione team e analytics per frantoi e oleifici, in un’unica piattaforma. Scopri come si applica al tuo caso.',
  path: '/software/frantoi',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['software per frantoi', 'crm frantoi', 'gestionale frantoio', 'software olio', 'gestione ordini B2B olio'],
});

const faqs = [
  {
    q: 'Distingue i clienti B2B (ristoranti, distributori) dai privati?',
    a: 'Sì, MG Lead & Sales segmenta i contatti per tipo di cliente e volume d’ordine, con follow-up diversi per B2B e B2C.',
  },
  {
    q: 'Gestisce anche le visite al frantoio, non solo gli ordini?',
    a: 'Sì, MG Booking & Experience gestisce le prenotazioni di visite e degustazioni guidate con calendario condiviso dal team.',
  },
  {
    q: 'Ha senso nei periodi di picco della raccolta?',
    a: 'È proprio in quei periodi che MG Staff & Operations aiuta di più: organizza turni e task del team quando il carico di lavoro è più alto e le dimenticanze costano di più.',
  },
  {
    q: 'Posso tenere traccia degli ordini ricorrenti di un ristorante o distributore?',
    a: 'Sì, lo storico ordini di ogni contatto è visibile nel CRM, utile per capire chi riordina con regolarità e chi rischia di passare alla concorrenza.',
  },
];

const testimonial = testimonials.find((t) => t.caseStudySlug === 'frantoi-san-lorenzo');

export default function SoftwareFrantoiPage() {
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
              { name: 'Per Frantoi', path: PAGE.path },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <SoftwareSectorTemplate
        eyebrow="MG Business Suite · Per Frantoi"
        h1="Software per Frantoi: Ordini, Clienti e Team in Una Piattaforma"
        subheadline="Un frantoio vende a privati, ristoranti e distributori, con volumi e cicli diversi. Se gli ordini vivono su fogli di calcolo separati dal resto, nessuno ha davvero il quadro di chi compra cosa, e quanto spesso."
        todayVsSuite={{
          today: [
            'Ordini B2B e B2C gestiti su fogli di calcolo separati',
            'Nessuna distinzione automatica tra un privato e un distributore',
            'Turni del team coordinati a voce nei periodi di raccolta',
            'Nessun follow-up automatico verso i clienti che riordinano',
          ],
          withSuite: [
            'Un unico CRM per contatti B2B e B2C, con storico ordini',
            'Segmentazione automatica tra privati, ristoranti e distributori',
            'Turni e task del team organizzati anche nei periodi di picco',
            'Email automatiche per il riordino e le novità di prodotto',
          ],
        }}
        moduleNotes={{
          'lead-sales': 'Traccia i clienti dell’olio — privati, ristoranti, distributori — distinguendo chi acquista B2B da chi compra online.',
          'social-ai': 'Contenuti social sulla raccolta, la frangitura e le varietà, pubblicati con costanza.',
          'booking-experience': 'Prenotazioni di visite al frantoio e degustazioni guidate, con calendario condiviso dal team.',
          'staff-operations': 'Turni e task per la raccolta, la frangitura e la gestione ordini, soprattutto nei periodi di picco stagionale.',
          'control-tower': 'Una dashboard che aggrega vendite dirette, ordini B2B e performance del team (piano Ecosistema).',
        }}
        caseStudySlug="frantoi-san-lorenzo"
        testimonial={testimonial}
        recommendedPlanId="crescita"
        faqs={faqs}
        blogHref="/blog/software-frantoi-gestione-ordini-crm"
        blogLabel="Leggi l’articolo: Software per Frantoi"
        otherSectors={[
          { href: '/software/vitivinicolo', label: 'Per Cantine' },
          { href: '/software/hospitality', label: 'Per Agriturismi' },
        ]}
      />
    </>
  );
}
