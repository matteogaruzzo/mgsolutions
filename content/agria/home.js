// =====================================================================
//  HOMEPAGE AGRIA — copy approvato (Prompt 08). Modificare qui i testi,
//  non nei componenti. Nessun testo va aggiunto senza approvazione.
// =====================================================================

export const hero = {
  eyebrow: 'Technology company · Hospitality · Cantine · Frantoi',
  title: 'Uno strato digitale sopra il vostro lavoro.',
  // titolo animato (Prompt 09): la prima variante è quella nell'HTML
  titlePrefix: 'Uno strato digitale sopra ',
  titlePhrases: ['il vostro lavoro', 'la vostra cantina', 'il vostro agriturismo', 'il vostro frantoio'],
  titleSuffix: '.',
  lead: 'Siti, e-commerce e automazioni per agriturismi, hotel, cantine e frantoi. I dati smettono di stare in dieci posti diversi e iniziano a lavorare per voi.',
  primary: { label: 'Parliamo del progetto', href: '/contatti' },
  secondary: { label: 'Come lavoriamo', href: '#come-lavoriamo' },
  chips: ['Prenotazioni', 'Ordini', 'Clienti', 'Costi'],
};

export const facts = [
  // kind: 'figure' per valori brevi o numerici, 'word' per parole (resi più piccoli)
  { value: '3', label: 'settori: hospitality, cantine, frantoi', kind: 'figure' },
  { value: 'IT · EN', label: "progetti pensati anche per l'estero", kind: 'figure' },
  { value: 'Interno', label: 'sviluppo nostro, nessun subappalto', kind: 'word' },
  { value: 'Perugia', label: 'lavoriamo in tutta Italia', kind: 'word' },
];

export const sectors = {
  eyebrow: 'Settori',
  title: 'Conosciamo tre mestieri, non tutti.',
  linkLabel: 'Vedi il settore',
  items: [
    {
      key: 'hospitality',
      title: 'Hospitality',
      href: '/settori/hospitality',
      image: {
        src: '/images/agria/settori/agriturismo.jpg',
        alt: 'Casale in pietra con giardino, ulivi e piscina',
      },
      text: 'Agriturismi, boutique hotel, relais, masserie. Prenotazioni diverse su portali, email e telefono, inserite due volte a mano. Commissioni che crescono mentre il canale diretto resta fermo.',
    },
    {
      key: 'cantine',
      title: 'Cantine',
      href: '/settori/cantine',
      text: "Cantine e aziende vitivinicole. Degustazioni piene e nessun contatto raccolto. Vendita diretta marginale rispetto alla distribuzione, spedizioni e adempimenti fuori dall'e-commerce.",
    },
    {
      key: 'frantoi',
      title: 'Frantoi',
      href: '/settori/frantoi',
      text: 'Frantoi e aziende olivicole. Ordini tra telefono, WhatsApp ed email, tutti da riscrivere. Listini diversi per privati, ristorazione e B2B, gestiti a memoria.',
    },
  ],
};

export const services = {
  eyebrow: 'Servizi',
  title: 'Tre aree, un solo sistema.',
  intro: 'Non vendiamo pacchetti. Partiamo da come lavorate oggi e costruiamo quello che serve, integrato con gli strumenti che già usate.',
  linkLabel: 'Approfondisci',
  tabsLabel: 'Servizi per settore',
  // Prompt 09: come le tre aree si applicano a ciascun settore (testi approvati)
  bySector: [
    {
      key: 'hospitality',
      label: 'Hospitality',
      lines: {
        presence: 'Un sito che porta prenotazioni dirette, visibile su Google e sui sistemi AI.',
        commerce: 'Prenotazioni e pagamenti sul vostro canale diretto.',
        automation: 'Prenotazioni da portali, email e telefono in un unico flusso, senza doppi inserimenti.',
      },
    },
    {
      key: 'cantine',
      label: 'Cantine',
      lines: {
        presence: "Il sito della cantina come strumento commerciale, anche per l'estero.",
        commerce: 'Vendita diretta online, degustazioni prenotabili, spedizioni gestite.',
        automation: 'Contatti delle degustazioni raccolti e collegati alla vendita diretta.',
      },
    },
    {
      key: 'frantoi',
      label: 'Frantoi',
      lines: {
        presence: 'Il frantoio trovabile su Google e sui sistemi AI, con un sito che vende.',
        commerce: 'Listini per privati, ristorazione e B2B nello stesso e-commerce.',
        automation: 'Ordini da telefono, WhatsApp ed email raccolti in un unico ingresso.',
      },
    },
  ],
  items: [
    {
      key: 'presence',
      eyebrow: '01 — Presence',
      title: 'Digital Presence',
      href: '/servizi/digital-presence',
      text: 'Il sito come strumento commerciale: struttura, contenuti, velocità e visibilità su Google e sui sistemi AI.',
    },
    {
      key: 'commerce',
      eyebrow: '02 — Commerce',
      title: 'Digital Commerce',
      href: '/servizi/digital-commerce',
      text: 'Vendita diretta: e-commerce, prenotazioni, pagamenti, listini B2B e integrazione con i canali che già usate.',
    },
    {
      key: 'automation',
      eyebrow: '03 — Automation',
      title: 'Digital Automation',
      href: '/servizi/digital-automation',
      text: 'Automazioni, integrazioni e AI sui processi: i dati si muovono da soli, senza reinserimenti manuali.',
    },
  ],
};

export const data = {
  eyebrow: 'Dai dati alle decisioni',
  title: 'I vostri strumenti raccolgono dati. Noi li rendiamo utili.',
  text: 'Prenotazioni, ordini, costi e personale vivono in sistemi diversi. Li colleghiamo e li mettiamo in relazione: ogni settimana sapete cosa sta succedendo e dove intervenire.',
  schemaLabel: 'Schema · non un prodotto in vendita',
  rows: [
    { label: 'Prenotazioni dirette', status: 'in crescita' },
    { label: 'Costo per camera occupata', status: 'da verificare' },
    { label: 'Ore personale programmate', status: 'sopra la media' },
  ],
};

export const method = {
  id: 'come-lavoriamo',
  eyebrow: 'Come lavoriamo',
  title: 'Prima capire, poi costruire.',
  steps: [
    {
      number: '01',
      title: 'Analisi',
      text: 'Guardiamo come lavorate davvero: strumenti, passaggi manuali, dove si perdono tempo e clienti.',
    },
    {
      number: '02',
      title: 'Progetto',
      text: 'Definiamo il sistema: cosa serve, cosa si integra con quello che avete, cosa non serve affatto.',
    },
    {
      number: '03',
      title: 'Sviluppo ed evoluzione',
      text: 'Costruiamo internamente, con consegne intermedie. Poi misuriamo e miglioriamo.',
    },
  ],
};

export const clarity = {
  eyebrow: 'Chiarezza',
  title: 'Meglio dirlo subito.',
  text: 'Non facciamo lavori spot che non cambiano nulla, né gestionali su misura che nessuno poi mantiene. Lavoriamo con aziende strutturate, su progetti che restano nel tempo.',
};

export const research = {
  eyebrow: 'Ricerca e sviluppo',
  title: 'Costruiamo anche prodotti nostri.',
  text: 'Una parte del nostro lavoro è ricerca applicata: software proprietari che nascono dai problemi che vediamo in queste aziende. Ne parliamo quando saranno pronti, non prima.',
};

export const closing = {
  title: 'Raccontateci come lavorate oggi.',
  text: 'Una prima analisi serve a capire se ha senso lavorare insieme. Rispondiamo con una valutazione concreta, non con un preventivo generico.',
  cta: { label: 'Parliamo del progetto', href: '/contatti' },
};
