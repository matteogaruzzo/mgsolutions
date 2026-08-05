import SoftwareSectorTemplate from '@/components/software/SoftwareSectorTemplate';
import { testimonials } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Software per Cantine: MG Business Suite',
  description:
    'CRM, prenotazioni degustazioni, gestione team e analytics per cantine, in un’unica piattaforma. Scopri come si applica al tuo caso.',
  path: '/software/vitivinicolo',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['software per cantine', 'crm cantine', 'gestionale cantina', 'software vino', 'wine club automatico'],
});

const faqs = [
  {
    q: 'Posso gestire wine club differenziati (es. solo rossi, solo bianchi)?',
    a: 'Sì, con la segmentazione dei contatti in MG Lead & Sales puoi creare gruppi diversi e inviare comunicazioni specifiche a ciascuno.',
  },
  {
    q: 'Integra le prenotazioni di degustazioni e visite in cantina?',
    a: 'Sì, MG Booking & Experience gestisce prenotazioni e calendario condiviso con il team, con promemoria automatici agli ospiti.',
  },
  {
    q: 'Posso tracciare quali vini vendono di più?',
    a: 'La dashboard di MG Lead & Sales mostra lo storico degli ordini; con il piano Ecosistema, MG Control Tower aggrega questi dati insieme a prenotazioni e team in un’unica vista.',
  },
  {
    q: 'Serve sostituire il sito o l’e-commerce esistente?',
    a: 'No, la piattaforma si affianca al sito e all’e-commerce che già usi: centralizza contatti, prenotazioni e team, non li sostituisce.',
  },
];

const testimonial = testimonials.find((t) => t.caseStudySlug === 'tenuta-monteverdi');

export default function SoftwareVitivinicoloPage() {
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
              { name: 'Per Cantine', path: PAGE.path },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <SoftwareSectorTemplate
        eyebrow="MG Business Suite · Per Cantine"
        h1="Software per Cantine: Vendite, Prenotazioni e Team in Una Piattaforma"
        subheadline="Vendi vino online e offline, gestisci l’enoturismo e un wine club ricorrente: se ognuno di questi vive in uno strumento diverso, il problema non è la mancanza di software, è la mancanza di una piattaforma che li unisca."
        todayVsSuite={{
          today: [
            'Contatti commerciali sparsi tra email, agende e WhatsApp',
            'Prenotazioni di degustazioni gestite solo per telefono',
            'Nessun follow-up automatico verso il wine club',
            'Nessuna vista unica su vini più venduti e clienti ricorrenti',
          ],
          withSuite: [
            'Un’unica pipeline per privati, ristoranti e distributori',
            'Calendario di degustazioni e visite condiviso con tutto il team',
            'Email automatiche per rinnovo e promozione del wine club',
            'Dashboard che mostra vendite, prenotazioni e clienti ricorrenti',
          ],
        }}
        moduleNotes={{
          'lead-sales': 'Traccia ogni cliente vino — privati, ristoranti, distributori — con follow-up automatici per il nuovo millesimo o l’iscrizione al wine club.',
          'social-ai': 'Contenuti social per raccontare vendemmia, cantina e vini, pubblicati con costanza senza doverci pensare ogni settimana.',
          'booking-experience': 'Prenotazioni di degustazioni e visite in cantina, con calendario condiviso da tutto il team.',
          'staff-operations': 'Turni e task per chi accoglie, chi guida il tour in vigna, chi serve durante un evento.',
          'control-tower': 'Una dashboard che aggrega vendite, prenotazioni e performance del team in un unico sguardo (piano Ecosistema).',
        }}
        caseStudySlug="tenuta-monteverdi"
        testimonial={testimonial}
        recommendedPlanId="crescita"
        faqs={faqs}
        blogHref="/blog/software-per-cantine"
        blogLabel="Leggi l’articolo: Software per Cantine"
        otherSectors={[
          { href: '/software/hospitality', label: 'Per Agriturismi' },
          { href: '/software/frantoi', label: 'Per Frantoi' },
        ]}
      />
    </>
  );
}
