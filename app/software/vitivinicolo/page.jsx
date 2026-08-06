import SoftwareSectorTemplate from '@/components/software/SoftwareSectorTemplate';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Software e CRM su misura per cantine',
  description:
    'Wine club, degustazioni, vendita diretta, listini B2B. Costruiamo il gestionale attorno a come lavorate. Prima analisi gratuita.',
  path: '/software/vitivinicolo',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['software per cantine', 'crm cantine', 'gestionale cantina', 'software vino su misura', 'wine club'],
});

const problems = [
  'Il wine club lo gestiamo su un foglio Excel e ogni mese è un terno al lotto capire a chi va spedito cosa.',
  'Le degustazioni arrivano per mail, le segniamo su un’agenda, e ogni tanto ne saltiamo una o ci ritroviamo doppioni.',
  'So quanto abbiamo fatturato, ma non so quale vino ci lascia più margine né quali clienti sono tornati a comprare.',
  'Il gestionale che abbiamo è quello del commercialista. Va bene per le fatture, ma dei clienti non sa niente.',
  'Ogni volta che parte una spedizione qualcuno deve controllare a mano le giacenze.',
];

const capabilities = [
  'Anagrafica clienti con storico e preferenze',
  'Gestione wine club e spedizioni ricorrenti',
  'Prenotazione degustazioni e visite con calendario e pagamenti',
  'Listini differenziati privati/enoteche/ristoranti',
  'Automazioni email per rinnovi e riordini',
  'Giacenze per vino, annata e formato',
  'Report su margine per etichetta',
];

const faqs = [
  {
    q: 'Posso gestire wine club differenziati (es. solo rossi, solo bianchi)?',
    a: 'Sì, il CRM che costruiamo segmenta i contatti in gruppi diversi e invia comunicazioni specifiche a ciascuno.',
  },
  {
    q: 'Integra le prenotazioni di degustazioni e visite in cantina?',
    a: 'Sì, con calendario condiviso con il team, promemoria automatici agli ospiti e proposte di upgrade (es. cena abbinata) al momento giusto.',
  },
  {
    q: 'Posso tracciare quali vini vendono di più?',
    a: 'Sì, costruiamo report sullo storico degli ordini e sul margine per etichetta, non solo sul fatturato totale.',
  },
  {
    q: 'Serve sostituire il sito o l’e-commerce esistente?',
    a: 'No, il gestionale si affianca al sito e all’e-commerce che già usi: centralizza contatti, prenotazioni e team, non li sostituisce.',
  },
  {
    q: 'Gestisce anche i distributori e i clienti B2B, non solo la vendita diretta?',
    a: 'Sì, il CRM distingue privati, ristoranti e distributori, con pipeline e follow-up differenziati per ciascun segmento.',
  },
  {
    q: 'Cosa succede al wine club se un cliente non rinnova?',
    a: 'Le email automatiche includono promemoria di rinnovo prima della scadenza; resta comunque una decisione del cliente — il gestionale riduce le disdette per dimenticanza, non le elimina.',
  },
  {
    q: 'Serve un team tecnico per gestire il gestionale?',
    a: 'No, l’interfaccia è pensata per essere usata dal titolare o da chi si occupa di vendite e accoglienza, senza competenze tecniche.',
  },
];

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
        eyebrow="Software su misura · Per Cantine"
        breadcrumbLabel="Per Cantine"
        accentKey="wine"
        h1="Software e CRM su misura per cantine"
        subheadline="Vendi vino online e offline, gestisci l’enoturismo e un wine club ricorrente: se ognuno di questi vive in uno strumento diverso, il problema non è la mancanza di software, è la mancanza di uno strumento costruito attorno a come lavorate voi."
        heroImage="/images/software/sector-vitivinicolo-hero.jpg"
        heroImageAlt="Laptop su una scrivania, pronto per gestire vendite e prenotazioni della cantina"
        problems={problems}
        capabilities={capabilities}
        faqs={faqs}
        otherSectors={[
          { href: '/software/hospitality', label: 'Per Agriturismi' },
          { href: '/software/frantoi', label: 'Per Frantoi' },
        ]}
      />
    </>
  );
}
