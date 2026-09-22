// ---- METODO (7 fasi) — condiviso tra /metodo e la sezione home ----------
// ---- IL METODO — 4 fasi, ognuna con una pagina di approfondimento -------
// caseStudyRef/testimonialRef puntano a case study e testimonianze concept
// già dichiarati in portfolio (stesso disclaimer) — non introducono nuovi
// clienti o fatti non verificati.
export const metodoSteps = [
  {
    slug: 'analisi-e-obiettivi',
    n: '01',
    title: 'Analisi e obiettivi',
    icon: 'chart',
    duration: '1-2 settimane',
    outputs: 'Documento di sintesi + obiettivi di progetto',
    body: 'Ascoltiamo il progetto reale: chi sei, cosa vendi, chi è il tuo cliente. Definiamo cosa deve produrre il sito o il software, non solo com’è fatto.',
    whatHappens:
      'Non è un meeting di cortesia: è il momento in cui capiamo davvero il tuo business. Parliamo con te (o con il tuo team) per capire prodotto, clienti, concorrenza diretta e cosa ha funzionato o no finora. Da qui usciamo con priorità chiare, non con un elenco di funzionalità a caso.',
    dayByDay: [
      { range: 'Giorni 1-2', body: 'Call di kick-off: obiettivi, vincoli, contesto del tuo settore.' },
      { range: 'Giorni 3-7', body: 'Analisi del mercato e della concorrenza diretta, raccolta materiali esistenti.' },
      { range: 'Giorni 8-10', body: 'Sintesi in un documento condiviso: priorità, KPI, perimetro del progetto.' },
    ],
    tools: ['Google Workspace', 'Figma (moodboard)', 'Call su Zoom o Google Meet'],
    deliverables: [
      'Documento di sintesi con obiettivi e priorità',
      'Perimetro del progetto (cosa entra, cosa no)',
      'KPI su cui misureremo il risultato',
    ],
    caseStudySlug: 'tenuta-monteverdi',
    caseStudyNote:
      'Per Tenuta Monteverdi, questa fase ha fatto emergere il problema reale: non mancava la qualità del vino, mancava un canale diretto verso chi lo beve.',
    nextStepNote:
      'Il documento di sintesi diventa la base della fase successiva: la strategia si costruisce su queste priorità, non da zero.',
    testimonialName: 'Giulia',
    faqs: [
      { q: 'Quanto costerà il progetto dopo questa fase?', a: 'Con il perimetro chiaro ti diamo una stima concreta, non prima: dipende da cosa emerge in questa fase.' },
      { q: 'Quante call avrò con voi?', a: 'Di solito una call di kick-off e un confronto finale di revisione; per progetti più grandi possono servirne altre.' },
      { q: 'Devo prepararmi qualcosa in anticipo?', a: 'Aiuta avere accesso a numeri di vendita, materiali di marketing esistenti e un’idea chiara dei tuoi clienti tipo.' },
    ],
  },
  {
    slug: 'strategia-di-settore',
    n: '02',
    title: 'Strategia di settore',
    icon: 'compass',
    duration: '2-3 settimane',
    outputs: 'Architettura del sito + piano dei contenuti',
    body: 'Wine, olio o hospitality richiedono approcci diversi. Scegliamo struttura, canali e priorità in base al tuo settore specifico.',
    whatHappens:
      'Qui decidiamo la forma che prenderà il progetto: struttura del sito o del software, percorso dell’utente dalla prima visita alla conversione, e quali funzionalità contano davvero per il tuo settore (wine club, tracciabilità, booking...). Niente viene aggiunto perché "fa figo": ogni scelta risponde a un obiettivo della fase 1.',
    dayByDay: [
      { range: 'Settimana 1', body: 'Architettura delle pagine e mappa del percorso utente.' },
      { range: 'Settimana 2', body: 'Piano dei contenuti: cosa scrivere, dove, con quale priorità SEO.' },
      { range: 'Settimana 3', body: 'Revisione con te e definizione finale dello scope tecnico.' },
    ],
    tools: ['Figma (wireframe)', 'Fogli di calcolo condivisi', 'Documentazione condivisa'],
    deliverables: [
      'Mappa del sito e dei suoi percorsi principali',
      'Wireframe a bassa fedeltà delle pagine chiave',
      'Piano dei contenuti prioritari',
    ],
    caseStudySlug: 'frantoi-san-lorenzo',
    caseStudyNote:
      'Per Frantoi San Lorenzo, la strategia ha messo al centro tracciabilità di lotto ed e-commerce diretto, riducendo il peso dei soli grossisti.',
    nextStepNote:
      'L’architettura definita qui guida il design: ogni schermata ha già uno scopo chiaro prima di essere disegnata.',
    testimonialName: 'Maria',
    faqs: [
      { q: 'Posso cambiare idea a metà di questa fase?', a: 'Sì, è il momento giusto per farlo: costa molto meno cambiare un wireframe che del codice già scritto.' },
      { q: 'Come decidete cosa dare priorità?', a: 'In base ai KPI definiti nella fase di analisi: quello che muove più il risultato atteso viene prima.' },
    ],
  },
  {
    slug: 'design',
    n: '03',
    title: 'Design',
    icon: 'palette',
    duration: '2-3 settimane',
    outputs: 'Prototipo Figma approvato',
    body: 'Costruiamo l’identità visiva della pagina: colori, atmosfera, fotografia. Deve somigliare a te, non a un template generico.',
    whatHappens:
      'Qui il progetto diventa visibile per la prima volta. Costruiamo un prototipo su Figma, coerente con il tuo brand e il tuo settore (colori, fotografia, atmosfera), che puoi vedere e commentare prima che venga scritta una riga di codice. Raccogliamo feedback e iteriamo finché il design è approvato.',
    dayByDay: [
      { range: 'Settimana 1', body: 'Prima proposta visiva sulle pagine chiave.' },
      { range: 'Settimana 2', body: 'Revisione con te, iterazioni sulla base dei feedback.' },
      { range: 'Settimana 3', body: 'Approvazione finale del prototipo completo.' },
    ],
    tools: ['Figma', 'Libreria immagini/fotografia dedicata al progetto'],
    deliverables: [
      'Prototipo Figma navigabile delle pagine principali',
      'Palette colori e stile tipografico definitivi',
      'Versione desktop e mobile del design',
    ],
    caseStudySlug: 'podere-la-vite',
    caseStudyNote:
      'Per Podere La Vite, il design ha dovuto raccontare l’esperienza (colazione, degustazione, cena, pernottamento) prima ancora del booking stesso.',
    nextStepNote:
      'Il prototipo approvato è il riferimento esatto per lo sviluppo: nessuna sorpresa visiva nella fase successiva.',
    testimonialName: 'Luca',
    faqs: [
      { q: 'Quante revisioni sono incluse?', a: 'Iteriamo finché il design ti rappresenta davvero: non c’è un numero fisso, ma un processo di revisione condiviso in call.' },
      { q: 'Posso vedere il sito prima che sia sviluppato?', a: 'Sì, è proprio lo scopo di questa fase: il prototipo Figma è navigabile ed esplorabile prima dello sviluppo.' },
    ],
  },
  {
    slug: 'sviluppo',
    n: '04',
    title: 'Sviluppo & implementazione',
    icon: 'code',
    duration: '6-10 settimane',
    outputs: 'Sito/software funzionante in staging',
    body: 'Sviluppiamo sito, e-commerce o software con codice pulito e performante, integrato con gli strumenti che già usi. Lavoriamo in staging, passo dopo passo.',
    whatHappens:
      'Scriviamo il codice: Shopify, Next.js o WordPress a seconda del progetto, con le integrazioni necessarie (pagamenti, CRM, email, automazioni). Il lavoro procede in ambiente di staging, così puoi vedere i progressi prima del lancio, non solo il risultato finale.',
    dayByDay: [
      { range: 'Prime settimane', body: 'Struttura tecnica di base e prime pagine funzionanti.' },
      { range: 'Settimane centrali', body: 'Funzionalità principali (e-commerce, booking, automazioni) e integrazioni.' },
      { range: 'Ultime settimane', body: 'Test, rifiniture e preparazione al lancio.' },
    ],
    tools: ['Shopify / WordPress / Next.js', 'GitHub', 'Ambiente di staging dedicato'],
    deliverables: [
      'Sito o software funzionante in ambiente di staging',
      'Integrazioni configurate (pagamenti, email, CRM se previsti)',
      'Documentazione essenziale per la gestione autonoma',
    ],
    caseStudySlug: 'wine-club-pro',
    caseStudyNote:
      'Per Wine Club Pro, lo sviluppo ha integrato pagamenti ricorrenti, un quiz di preferenze e l’automazione anti-abbandono fin dal primo ambiente di test.',
    nextStepNote:
      'Da qui si passa a test, lancio e alla gestione continuativa: il rapporto non finisce con la consegna.',
    testimonialName: 'Andrea',
    faqs: [
      { q: 'Come comunicate durante lo sviluppo?', a: 'Con aggiornamenti periodici e accesso all’ambiente di staging, così vedi i progressi reali, non solo promesse.' },
      { q: 'Cosa succede dopo il lancio?', a: 'Ogni soluzione attiva comporta una gestione continuativa: hosting, aggiornamenti, assistenza ed evoluzione nel tempo.' },
    ],
  },
];

export function getMetodoStep(slug) {
  return metodoSteps.find((s) => s.slug === slug);
}
