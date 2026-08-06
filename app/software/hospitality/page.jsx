import SoftwareSectorTemplate from '@/components/software/SoftwareSectorTemplate';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Software e CRM su misura per agriturismi',
  description:
    'Prenotazioni dirette, gestione ospiti, esperienze. Un gestionale costruito su come lavorate voi. Prima analisi gratuita.',
  path: '/software/hospitality',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['software per agriturismi', 'crm agriturismi', 'gestionale agriturismi su misura', 'pms agriturismi'],
});

const problems = [
  'Metà delle prenotazioni arriva da Booking e ci lascia il 15-18%. Le dirette non riusciamo a farle crescere.',
  'Chi è stato qui una volta non lo risentiamo mai più. Non abbiamo nemmeno le mail.',
  'Le esperienze — cena, corso di cucina, visita — le gestiamo a voce e ogni volta bisogna ricordarsi chi fa cosa.',
  'Il PMS che usiamo è pensato per gli hotel. Metà delle funzioni non ci servono e quelle che ci servirebbero non ci sono.',
];

const capabilities = [
  'Anagrafica ospiti con storico soggiorni',
  'Calendario camere e disponibilità',
  'Motore di prenotazione diretta',
  'Gestione esperienze e attività',
  'Automazioni pre e post soggiorno',
  'Assegnazione compiti al team',
  'Report su canale di provenienza e prenotazioni dirette vs OTA',
];

const faqs = [
  {
    q: 'Posso continuare a usare Booking.com e Airbnb insieme al gestionale?',
    a: 'Sì, il motore di prenotazione si sincronizza con i principali canali per evitare l’overbooking mentre cresce il canale diretto, che non paga commissioni.',
  },
  {
    q: 'Gestisce anche le esperienze, non solo le camere?',
    a: 'Sì, puoi proporre cene, degustazioni ed escursioni nello stesso percorso di prenotazione della camera, con upselling al momento giusto.',
  },
  {
    q: 'Ha senso anche per un B&B con poche camere?',
    a: 'Sì: si parte sempre dal singolo processo che oggi vi fa perdere più tempo, tipicamente le prenotazioni dirette, e si amplia da lì.',
  },
  {
    q: 'Serve formazione per il team?',
    a: 'Sì, viene inclusa all’avvio; l’interfaccia è pensata per essere usata senza competenze tecniche.',
  },
  {
    q: 'Come aiuta nei periodi di alta stagione per il team?',
    a: 'Organizzando turni, task e checklist di apertura/chiusura, riducendo le dimenticanze proprio nei periodi più intensi.',
  },
  {
    q: 'Posso richiedere una caparra alla prenotazione?',
    a: 'Sì, il gestionale gestisce il pagamento di una caparra al momento della prenotazione, riducendo le disdette dell’ultimo minuto.',
  },
];

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
        eyebrow="Software su misura · Per Agriturismi"
        breadcrumbLabel="Per Agriturismi"
        accentKey="hospitality"
        h1="Software e CRM su misura per agriturismi"
        subheadline="Camere, cene, degustazioni ed escursioni: un agriturismo vende più di un semplice pernottamento. Se prenotazioni, contatti e team vivono su strumenti diversi, nessuno di quegli strumenti ha davvero il quadro completo."
        heroImage="/images/software/sector-hospitality-hero.jpg"
        heroImageAlt="Terrazza di un borgo di campagna con vista sulle colline, tipica di un agriturismo"
        problems={problems}
        capabilities={capabilities}
        faqs={faqs}
        otherSectors={[
          { href: '/software/vitivinicolo', label: 'Per Cantine' },
          { href: '/software/frantoi', label: 'Per Frantoi' },
        ]}
      />
    </>
  );
}
