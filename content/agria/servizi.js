// =====================================================================
//  PAGINE SERVIZI AGRIA — copy approvato (Prompt 12). Modificare qui i
//  testi, non nei componenti. Nessun testo va aggiunto senza approvazione.
// =====================================================================

import { services } from './home';

const CTA = { label: 'Parliamo del progetto', href: '/contatti' };

// Tre aree: nome, indirizzo e testo della card (lo stesso della homepage),
// etichetta usata come eyebrow della card e della pagina dell'area.
const AREA_LABELS = {
  presence: '01 — Presence',
  commerce: '02 — Commerce',
  automation: '03 — Automation',
};

export const areas = services.items.map((item) => ({
  key: item.key,
  label: AREA_LABELS[item.key],
  title: item.title,
  href: item.href,
  text: item.text,
}));

// Indice /servizi
export const servicesIndex = {
  meta: {
    title: 'Servizi — Agria System',
    description:
      'Digital Presence, Digital Commerce e Digital Automation: siti, e-commerce e automazioni per agriturismi, hotel, cantine e frantoi.',
    path: '/servizi',
  },
  eyebrow: 'Servizi',
  title: 'Tre aree, un solo sistema.',
  lead: 'Non vendiamo pacchetti. Partiamo da come lavorate oggi e costruiamo quello che serve, integrato con gli strumenti che già usate.',
  linkLabel: services.linkLabel,
};

// CTA finale di tutte le pagine servizi
export const serviceClosing = {
  title: 'Raccontateci come lavorate oggi.',
  cta: CTA,
};

// ---------------------------------------------------------------------
// Pagine delle tre aree (template: components/agria/service/ServicePage.jsx)
// ---------------------------------------------------------------------

// titoli delle sezioni del template, uguali per le tre aree
export const serviceSections = {
  problem: 'Il problema',
  includes: 'Cosa comprende',
  sectors: 'Come si applica ai tre settori',
  steps: 'Come lavoriamo su questa area',
  notDo: 'Cosa non facciamo',
  articles: 'Approfondimenti',
  others: 'Servizi',
};

// pagine settore: i rimandi "Vedi il settore" compaiono quando esistono
export const SECTOR_PAGES_LIVE = false;
export const sectorTabs = [
  { key: 'hospitality', label: 'Hospitality', href: '/settori/hospitality' },
  { key: 'cantine', label: 'Cantine', href: '/settori/cantine' },
  { key: 'frantoi', label: 'Frantoi', href: '/settori/frantoi' },
];
export const sectorLinkLabel = 'Vedi il settore';

export const areaPages = {
  presence: {
    key: 'presence',
    meta: {
      title: 'Digital Presence — siti web per agriturismi, cantine e frantoi | Agria System',
      description:
        'Progettiamo siti che portano richieste e prenotazioni dirette: struttura, contenuti, performance, SEO tecnica e visibilità sui sistemi AI.',
      path: '/servizi/digital-presence',
    },
    name: 'Digital Presence',
    eyebrow: '01 — Presence',
    title: 'Il sito come strumento commerciale.',
    lead: 'Struttura, contenuti, velocità e visibilità. Non un catalogo online, ma la prima cosa che vende al posto vostro.',
    cta: CTA,
    pills: ['Strategia', 'UX e interfaccia', 'Sviluppo', 'Performance', 'SEO tecnica', 'Visibilità AI', 'Multilingua'],
    problem:
      "Molti siti del settore raccontano l'azienda e si fermano lì. Chi cerca non trova, chi arriva non capisce cosa fare, e il contatto finisce comunque al telefono. Il sito diventa un costo invece che un canale.",
    includes: [
      { title: 'Strategia e struttura', text: 'Cosa deve fare il sito, per chi, e come si arriva alla richiesta o alla prenotazione.' },
      { title: 'Design e interfaccia', text: 'Una struttura chiara, leggibile su mobile, coerente con il vostro posizionamento.' },
      { title: 'Sviluppo', text: 'Costruito internamente, veloce, gestibile da voi dove serve.' },
      { title: 'Performance', text: 'Immagini leggere, caricamento rapido, nessuna pagina che fa aspettare.' },
      {
        title: 'SEO tecnica e locale',
        text: 'Struttura, dati strutturati, pagine e territorio: farsi trovare da chi cerca già il vostro tipo di azienda.',
      },
      {
        title: 'Visibilità nei sistemi AI',
        text: 'Contenuti e dati organizzati perché anche gli assistenti conversazionali vi trovino e vi citino correttamente.',
      },
      {
        title: 'Identità visiva, quando serve',
        text: "Non vendiamo loghi. Curiamo la coerenza visiva all'interno del progetto, dove ha impatto sul risultato.",
      },
      { title: 'Italiano e inglese', text: 'Una sola architettura, contenuti adattati al mercato, non tradotti a macchina.' },
    ],
    sectors: {
      hospitality: 'Un sito che porta prenotazioni dirette, visibile su Google e sui sistemi AI.',
      cantine: "Il sito della cantina come strumento commerciale, anche per l'estero.",
      frantoi: 'Il frantoio trovabile su Google e sui sistemi AI, con un sito che vende.',
    },
    steps: [
      { number: '01', title: 'Analisi', text: 'Guardiamo come vi trovano oggi, cosa cercano, dove si perdono.' },
      { number: '02', title: 'Struttura', text: 'Definiamo pagine, percorsi e contenuti prima di disegnare qualsiasi cosa.' },
      { number: '03', title: 'Sviluppo e misura', text: 'Costruiamo, pubblichiamo e osserviamo cosa succede davvero.' },
    ],
    notDo:
      'Non facciamo restyling estetici fini a sé stessi, né loghi venduti a parte. Se il sito non cambia il modo in cui ricevete richieste, non ha senso rifarlo.',
    // alt scritti qui: quelli dei post non descrivono sempre la foto
    articles: [
      { slug: 'siti-web-per-agriturismi', alt: 'Casale in pietra tra cipressi, con colline sullo sfondo' },
      { slug: 'seo-locale-agroalimentare-google-maps', alt: 'Plastico di una città con segnaposto numerati' },
    ],
  },

  commerce: {
    key: 'commerce',
    meta: {
      title: 'Digital Commerce — e-commerce e vendita diretta per il settore | Agria System',
      description:
        'E-commerce, prenotazioni dirette, listini B2B e pagamenti per cantine, frantoi e strutture ricettive, integrati con i vostri strumenti.',
      path: '/servizi/digital-commerce',
    },
    name: 'Digital Commerce',
    eyebrow: '02 — Commerce',
    title: 'Vendere direttamente, senza attriti.',
    lead: 'E-commerce, prenotazioni e listini che funzionano insieme agli strumenti che già usate.',
    cta: CTA,
    pills: ['E-commerce', 'Prenotazioni dirette', 'Pagamenti', 'Listini B2B', 'Spedizioni', 'Integrazioni', 'Clienti che tornano'],
    problem:
      "La vendita diretta pesa poco perché è scomoda: il cliente chiede su WhatsApp, l'ordine si scrive a mano, il pagamento arriva dopo. Intanto le commissioni dei portali crescono e i clienti restano di qualcun altro.",
    includes: [
      { title: 'E-commerce', text: 'Catalogo, formati, disponibilità e pagamenti, costruiti su come vendete davvero.' },
      { title: 'Prenotazioni dirette', text: 'Camere, tavoli, degustazioni ed esperienze prenotabili dal vostro sito.' },
      { title: 'Pagamenti', text: 'Incassi online sicuri, con le modalità che i vostri clienti usano.' },
      {
        title: 'Listini differenziati',
        text: 'Privati, ristorazione e B2B nello stesso sistema, con prezzi e condizioni diverse.',
      },
      {
        title: 'Spedizioni e adempimenti',
        text: 'Corrieri, formati e regole del settore gestiti dentro il flusso, non a parte.',
      },
      { title: 'Integrazioni', text: 'Collegamento con gestionali, portali e strumenti già in uso, quando è possibile.' },
      {
        title: 'Clienti che tornano',
        text: 'Anagrafica, storico e riacquisto: chi ha già comprato è il canale più economico che avete.',
      },
    ],
    sectors: {
      hospitality: 'Prenotazioni e pagamenti sul vostro canale diretto.',
      cantine: 'Vendita diretta online, degustazioni prenotabili, spedizioni gestite.',
      frantoi: 'Listini per privati, ristorazione e B2B nello stesso e-commerce.',
    },
    steps: [
      { number: '01', title: 'Analisi', text: 'Come vendete oggi, attraverso quali canali, con quali margini.' },
      { number: '02', title: 'Progetto', text: 'Cosa deve fare la piattaforma, cosa resta fuori, cosa si integra.' },
      { number: '03', title: 'Lancio e misura', text: 'Pubblichiamo, osserviamo gli ordini reali e correggiamo.' },
    ],
    notDo:
      'Non costruiamo marketplace da zero, né gestionali di magazzino su misura. Ci occupiamo del canale di vendita, non di sostituire i sistemi che già funzionano.',
    articles: [
      { slug: 'ecommerce-per-frantoi', alt: "Olive su un cucchiaio sotto un filo d'olio" },
      { slug: 'agriturismo-booking-online-prenotazioni', alt: 'Casolari rossi lungo una strada bianca in campagna' },
    ],
  },

  automation: {
    key: 'automation',
    meta: {
      title: 'Digital Automation — automazioni e integrazioni AI | Agria System',
      description:
        'Automazioni, integrazioni API e intelligenza artificiale applicate ai processi di strutture ricettive, cantine e frantoi.',
      path: '/servizi/digital-automation',
    },
    name: 'Digital Automation',
    eyebrow: '03 — Automation',
    title: 'Il lavoro che non deve più farvi perdere tempo.',
    lead: 'Automazioni, integrazioni e AI applicata ai processi: i dati si muovono da soli, senza reinserimenti.',
    cta: CTA,
    pills: ['Integrazioni API', 'Automazioni', 'AI sui processi', 'Sincronizzazione dati', 'Notifiche', 'Report ricorrenti'],
    problem:
      "Le informazioni esistono già, ma stanno in sistemi che non si parlano. Qualcuno le copia da una parte all'altra, ogni giorno. È il lavoro più costoso che c'è: invisibile, ripetitivo e pieno di errori.",
    includes: [
      {
        title: 'Integrazioni',
        text: 'Colleghiamo gli strumenti che usate già: sito, gestionale, email, fogli di lavoro, portali.',
      },
      { title: 'Automazioni di processo', text: 'Le attività ripetitive avvengono da sole, con regole decise da voi.' },
      {
        title: 'AI applicata',
        text: 'Classificazione di richieste e documenti, risposte assistite, estrazione di dati. Sempre su processi concreti.',
      },
      { title: 'Dati sincronizzati', text: 'Una sola anagrafica, aggiornata ovunque, senza doppie versioni.' },
      { title: 'Notifiche e promemoria', text: 'Chi deve sapere una cosa la riceve quando serve, senza doverla cercare.' },
      { title: 'Report ricorrenti', text: 'Ogni settimana lo stesso quadro, senza costruirlo a mano.' },
    ],
    sectors: {
      hospitality: 'Prenotazioni da portali, email e telefono in un unico flusso, senza doppi inserimenti.',
      cantine: 'Contatti delle degustazioni raccolti e collegati alla vendita diretta.',
      frantoi: 'Ordini da telefono, WhatsApp ed email raccolti in un unico ingresso.',
    },
    steps: [
      { number: '01', title: 'Mappatura', text: "Seguiamo un processo dall'inizio alla fine e contiamo i passaggi manuali." },
      { number: '02', title: 'Automazione', text: 'Togliamo i passaggi inutili e colleghiamo il resto.' },
      { number: '03', title: 'Verifica', text: 'Controlliamo che regga i casi veri, non solo quelli previsti.' },
    ],
    notDo:
      'Non sviluppiamo CRM, ERP o gestionali su misura, e non sostituiamo i software che usate. Lavoriamo sopra quelli, per farli parlare tra loro.',
    articles: [
      { slug: 'software-per-agriturismi', alt: 'Ospite al banco del check-in di una struttura ricettiva' },
      // illustrazione 3D accreditata su Unsplash (kuu akura), non una fotografia
      { slug: 'chatbot-cantina-ai-customer-service', alt: 'Illustrazione di fumetti di una chat' },
    ],
  },
};
