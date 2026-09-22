import SoftwareSectorTemplate from '@/components/software/SoftwareSectorTemplate';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Software e CRM su misura per frantoi e oleifici',
  description:
    'Ordini privati e B2B, listini multipli, giacenze per lotto. Gestionale su misura per il settore oleario. Prima analisi gratuita.',
  path: '/software/frantoi',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['software per frantoi', 'crm frantoi', 'gestionale frantoio su misura', 'software olio', 'gestione ordini B2B olio'],
});

const problems = [
  'Vendiamo ai privati in bottiglia e ai ristoranti in latta, ma sono due gestioni completamente diverse e le teniamo separate a mano.',
  'I clienti B2B hanno listini e condizioni diverse e ogni ordine è una telefonata.',
  'Chi compra a novembre non lo risentiamo fino all’anno dopo, e spesso nel frattempo ha comprato altrove.',
  'Le giacenze per formato e per lotto le sappiamo solo andando a guardare in magazzino.',
];

const capabilities = [
  'Anagrafica clienti divisa privati/B2B',
  'Ordini con formati e listini multipli',
  'Gestione abbonamenti olio',
  'Condizioni e scontistiche per cliente B2B',
  'Giacenze per formato, varietà e lotto',
  'Automazioni per riordino stagionale',
  'Report su margine per formato e canale',
];

const faqs = [
  {
    q: 'Distingue i clienti B2B (ristoranti, distributori) dai privati?',
    a: 'Sì, il CRM segmenta i contatti per tipo di cliente e volume d’ordine, con follow-up diversi per B2B e B2C.',
  },
  {
    q: 'Gestisce anche le visite al frantoio, non solo gli ordini?',
    a: 'Sì, possiamo costruire la prenotazione di visite e degustazioni guidate con calendario condiviso dal team.',
  },
  {
    q: 'Ha senso nei periodi di picco della raccolta?',
    a: 'È proprio in quei periodi che aiuta di più: organizza turni e task del team quando il carico di lavoro è più alto e le dimenticanze costano di più.',
  },
  {
    q: 'Posso tenere traccia degli ordini ricorrenti di un ristorante o distributore?',
    a: 'Sì, lo storico ordini di ogni contatto resta visibile nel CRM, utile per capire chi riordina con regolarità e chi rischia di passare alla concorrenza.',
  },
  {
    q: 'Gestisce anche un abbonamento ricorrente all’olio?',
    a: 'Sì, il CRM può tracciare gli ordini ricorrenti e automatizzare il follow-up per il riordino, collegandosi alla piattaforma di vendita che usi.',
  },
  {
    q: 'Serve uno strumento diverso per la parte B2B rispetto al B2C?',
    a: 'No, costruiamo un unico CRM che gestisce entrambi, distinguendoli tramite segmentazione automatica, non con strumenti separati.',
  },
];

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
        eyebrow="Software su misura · Per Frantoi"
        breadcrumbLabel="Per Frantoi"
        accentKey="olio"
        h1="Software e CRM su misura per frantoi e oleifici"
        subheadline="Un frantoio vende a privati, ristoranti e distributori, con volumi e cicli diversi. Se gli ordini vivono su fogli di calcolo separati dal resto, nessuno ha davvero il quadro di chi compra cosa, e quanto spesso."
        heroImage="/images/software/sector-frantoi-hero.jpg"
        heroImageAlt="Olio extravergine appena spremuto che scende dal frantoio"
        problems={problems}
        capabilities={capabilities}
        faqs={faqs}
        otherSectors={[
          { href: '/software/vitivinicolo', label: 'Per Cantine' },
          { href: '/software/hospitality', label: 'Per Agriturismi' },
        ]}
      />
    </>
  );
}
