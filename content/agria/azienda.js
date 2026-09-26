// =====================================================================
//  PAGINA AZIENDA — copy approvato (Prompt 14). Modificare qui i testi,
//  non nei componenti. Nessun testo va aggiunto senza approvazione.
//  Ordine delle sezioni: app/(site)/azienda/page.jsx.
//  icon: nome di un'icona del set (components/agria/icons/Icon.jsx).
// =====================================================================

import { agriaImage } from '@/lib/agria-images';

const CONTACT = { label: 'Parliamo del progetto', href: '/contatti' };

export const meta = {
  title: 'Azienda — Agria System, technology company per agroalimentare e hospitality',
  description:
    'Chi siamo: progettiamo e sviluppiamo internamente sistemi digitali per agriturismi, hotel, cantine e frantoi. Sede a Perugia, progetti in tutta Italia.',
  path: '/azienda',
};

// 1. Hero
export const hero = {
  eyebrow: 'Azienda',
  title: "Una technology company, non un'agenzia.",
  lead: 'Agria System progetta e costruisce i sistemi digitali di agriturismi, hotel, cantine e frantoi. Lavoriamo su pochi settori, in profondità, e sviluppiamo internamente tutto quello che consegniamo.',
  primary: CONTACT,
  secondary: { label: 'Vedi i servizi', href: '/servizi' },
};

// 2. Posizionamento
export const positioning = {
  eyebrow: 'Chi siamo',
  title: 'Tre persone, tre mestieri, un solo sistema.',
  text: "Nasciamo dall'esperienza sul campo con aziende agroalimentari e strutture ricettive. Abbiamo scelto di concentrarci su tre settori invece di accettare qualunque progetto, perché conoscere un mestiere cambia il risultato più di qualsiasi tecnologia.",
};

// 3. Principi: fisarmonica orizzontale (components/agria/azienda/PrinciplesAccordion.jsx)
export const principles = {
  label: 'Principi',
  items: [
    {
      icon: 'code',
      title: 'Sviluppiamo internamente',
      text: 'Nessun subappalto. Chi progetta è la stessa persona che costruisce e che risponde quando qualcosa non funziona.',
    },
    {
      icon: 'minus',
      title: 'Diciamo di no',
      text: "Se un progetto non cambia il modo in cui l'azienda lavora o vende, lo diciamo prima di iniziare.",
    },
    {
      icon: 'sparkles',
      title: "L'AI è un metodo, non un prodotto",
      text: 'La usiamo per analizzare, strutturare e accelerare. Le decisioni e la responsabilità restano nostre.',
    },
    {
      icon: 'key',
      title: 'Quello che costruiamo è vostro',
      text: 'Codice, contenuti, domini e dati restano di proprietà del cliente, senza vincoli tecnici.',
    },
  ],
};

// 4. Team: tre ritratti con scheda che si apre (components/agria/azienda/TeamCards.jsx)
// photo: percorso di una foto (es. '/images/team/nome.jpg') oppure null → iniziali
// su fondo tipografico. Le foto legacy in public/images/team non sono omogenee
// (un ritaglio circolare in bianco e nero da 500 px, un'orizzontale, una
// verticale): si attivano qui quando esiste un set coerente.
// linkedin: URL del profilo oppure null (nessun link inventato).
export const team = {
  label: 'Team',
  linkLabel: 'LinkedIn',
  people: [
    {
      name: 'Matteo Garuzzo',
      role: 'Product e tecnologia',
      detail: 'Architettura dei sistemi, sviluppo e direzione tecnica dei progetti.',
      photo: null,
      // profilo già pubblicato nel sito legacy (content/site.js)
      linkedin: 'https://www.linkedin.com/in/matteogaruzzo',
    },
    {
      name: 'Matteo De Pilla',
      role: 'Sviluppo e automazioni',
      detail: 'Sviluppo web, e-commerce e automazioni applicate ai processi.',
      photo: null,
      linkedin: null,
    },
    {
      name: 'Alessandro Poponi',
      role: 'Relazioni e progetti',
      detail: 'Primo contatto, analisi delle esigenze e gestione del rapporto con il cliente.',
      photo: null,
      linkedin: null,
    },
  ],
};

// 5. Ricerca e sviluppo
export const research = {
  eyebrow: 'Ricerca e sviluppo',
  title: 'Costruiamo anche prodotti nostri.',
  text: 'Una parte del nostro lavoro è ricerca applicata: software proprietari che nascono dai problemi che vediamo in queste aziende. Ne parliamo quando saranno pronti, non prima.',
};

// 6. Territorio: foto della pipeline Unsplash (scripts/images.config.json → azienda/territorio)
export const territory = {
  eyebrow: 'Dove lavoriamo',
  title: 'Da Perugia, in tutta Italia e sui mercati esteri.',
  text: "La sede è in Umbria, il lavoro no. Seguiamo progetti in tutta Italia e costruiamo versioni in inglese per le aziende che vendono all'estero.",
  address: 'Via Ponte Vecchio, 06135 Perugia',
  image: agriaImage('azienda/territorio'),
};

// 7. Come si lavora con noi: linea temporale verticale (components/agria/azienda/ProcessTimeline.jsx)
export const howWeWork = {
  title: 'Come si lavora con noi',
  steps: [
    {
      icon: 'inbox',
      title: 'Primo contatto',
      text: 'Ci scrivete o vi scriviamo. Capiamo se il vostro caso rientra in quello che sappiamo fare.',
    },
    {
      icon: 'search',
      title: 'Analisi',
      text: 'Guardiamo come lavorate oggi: strumenti, passaggi manuali, dove si perdono tempo e clienti.',
    },
    {
      icon: 'file-text',
      title: 'Proposta',
      text: 'Ricevete ambito, tempi e investimento definiti su quel progetto, non un listino.',
    },
    {
      icon: 'layers',
      title: 'Progetto',
      text: 'Sviluppo con consegne intermedie da approvare, poi misura e miglioramento.',
    },
  ],
};

// 8. Dati aziendali. Email e telefono arrivano da content/site.js (gli stessi
// dello schema Organization della homepage), passati dalla pagina.
export const company = {
  label: 'Dati aziendali',
  name: 'Agria System',
  claim: 'Agria System è il marchio con cui operiamo.',
  vat: 'IT04006460549',
  address: { street: 'Via Ponte Vecchio', postalCode: '06135', city: 'Perugia', province: 'PG', country: 'IT' },
  addressLine: 'Via Ponte Vecchio, 06135 Perugia',
  labels: { name: 'Denominazione', address: 'Indirizzo', vat: 'P.IVA', email: 'Email', phone: 'Telefono' },
};

// 9. CTA finale
export const closing = {
  title: 'Parliamo di quello che vi serve.',
  text: 'Una prima analisi serve a capire se ha senso lavorare insieme.',
  cta: CONTACT,
};
