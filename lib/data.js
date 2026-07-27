// =====================================================================
//  CONTENUTI DEL SITO — modifica QUI testi, prezzi, progetti, articoli.
//  Non serve toccare il codice delle pagine.
// =====================================================================

export const site = {
  name: 'MG Solutions',
  founder: 'Matteo Garuzzo',
  email: 'matteogaruzzo1@gmail.com',
  phone: '+39 366 344 5417',
  location: 'Perugia, Italia — operativi in tutta Italia',
  address: {
    street: 'Via Ponte Vecchio',
    city: 'Perugia',
    province: 'PG',
    postalCode: '06135',
    country: 'IT',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/matteogaruzzo',
    instagram: 'https://instagram.com/matteogaruzzo',
  },
  calendly: 'https://calendly.com/matteogaruzzo/30min',
  tagline: 'Digitalizziamo l’eccellenza agroalimentare.',
  positioning:
    'Siti, e-commerce e software per cantine, produttori e strutture ricettive rurali che uniscono terra, accoglienza e innovazione.',
};

// ---- SERVIZI -------------------------------------------------------
// Ogni servizio ha una pagina dedicata (/servizi/<slug>). caseStudySlug e
// testimonialName riusano i case study e le testimonianze concept già
// dichiarati in portfolio: nessun nuovo cliente o numero inventato.
export const servizi = [
  {
    slug: 'software-ai-su-misura',
    n: '01',
    tag: 'AI',
    icon: 'ai',
    title: 'Software & agenti AI su misura',
    body: 'Costruiamo software e agenti che lavorano al posto di un reparto: qualificano lead, rispondono ai clienti, gestiscono processi ripetitivi. Li progettiamo per la tua azienda e restano tuoi.',
    resultNote: 'Meno lavoro manuale ripetitivo, risposta ai clienti anche fuori orario.',
    whatIsIt:
      'Un software custom non è "codice che fa una cosa": è una macchina che lavora dentro il tuo business, senza stancarsi e senza errori di distrazione. Qualifica lead, gestisce prenotazioni, manda comunicazioni intelligenti, e ti lascia il tempo per la strategia.',
    bullets: [
      'Qualificazione lead automatica',
      'Customer care assistito, con passaggio a una persona quando serve',
      'Gestione prenotazioni e follow-up automatico',
      'Comunicazioni personalizzate via email o WhatsApp',
      'Analytics su cosa sta funzionando davvero',
    ],
    perSettoreExtra: {
      'wine-viticulture': 'Automazione tasting room: prenotazioni, reminder, follow-up post-visita verso il wine club.',
      'oleifici-food-tech': 'Automazione ordini e abbonamento olio: tracking, comunicazioni, proposta di riacquisto.',
      'wine-hospitality-agriturismi': 'Automazione booking ed esperienza ospite: conferme, suggerimenti, richieste durante il soggiorno.',
    },
    caseStudySlug: 'tasting-flow',
    caseStudyNote: 'Tasting Flow, il software per la tasting room di Tenuta Monteverdi, ha portato +25% di conversione da degustazione a wine club e 15 ore al mese di lavoro amministrativo risparmiate.',
    testimonialName: 'Andrea',
    technicalPoints: [
      'Stack: Next.js, Node.js, PostgreSQL',
      'Integrazioni: pagamenti, email transazionali, calendario',
      'Monitoraggio e backup regolari',
      'Documentazione essenziale per la gestione autonoma',
    ],
    faqs: [
      { q: 'Quanto tempo ci vuole per sviluppare un agente custom?', a: 'Dipende dalla complessità: lo definiamo nella fase di strategia, dopo aver capito cosa deve fare davvero.' },
      { q: 'Posso testarlo prima del lancio definitivo?', a: 'Sì, lo sviluppo passa sempre da un ambiente di staging che puoi provare prima del rilascio finale.' },
      { q: 'Chi lo gestisce una volta live?', a: 'Resta tuo al 100%; se preferisci possiamo occuparci noi della gestione continuativa (hosting, aggiornamenti, assistenza).' },
      { q: 'È veramente disponibile 24/7?', a: 'Il software risponde in automatico in ogni momento; per le richieste che richiedono una persona, viene passata a te o al tuo team.' },
    ],
    relatedSlugs: ['ai-integration', 'consulenza-strategica'],
  },
  {
    slug: 'ecommerce-shopify',
    n: '02',
    tag: 'SHOPIFY',
    icon: 'cart',
    title: 'E-commerce Shopify performanti',
    body: 'Store costruiti per vendere: schede prodotto, checkout e percorso d’acquisto ottimizzati. Focus su velocità, chiarezza e conversione, non solo estetica.',
    resultNote: 'Un canale di vendita diretta che riduce la dipendenza da grossisti e distributori.',
    whatIsIt:
      'Uno store Shopify non è solo un catalogo online: è il canale che ti permette di vendere direttamente, senza intermediari, con margini più alti. Curiamo velocità, chiarezza del percorso d’acquisto e gestione di stock e spedizioni.',
    bullets: [
      'Store Shopify (o Shopify Plus) su misura per il tuo brand',
      'Gestione stock, spedizioni e pricing per zona',
      'Abbonamenti ricorrenti (wine club, box prodotto)',
      'Integrazione con marketplace di settore, dove disponibile',
      'Ottimizzazione velocità e percorso di checkout',
    ],
    perSettoreExtra: {
      'wine-viticulture': 'E-commerce vino con wine club ricorrente e tracciabilità di lotto via QR code.',
      'oleifici-food-tech': 'E-commerce olio EVO con abbonamento ricorrente e catalogo che racconta la produzione.',
      'wine-hospitality-agriturismi': 'Shop per prodotti aziendali e voucher esperienza integrati nel sito dell’agriturismo.',
    },
    caseStudySlug: 'frantoi-san-lorenzo',
    caseStudyNote: 'Per Frantoi San Lorenzo, il passaggio a un e-commerce Shopify Plus diretto ha portato +200% di vendita diretta online e 300+ clienti regolari.',
    testimonialName: 'Maria',
    technicalPoints: [
      'Shopify / Shopify Plus, personalizzazione in Liquid',
      'Integrazione pagamenti e spedizioni',
      'Ottimizzazione performance (velocità di caricamento)',
      'SEO tecnica di base inclusa',
    ],
    faqs: [
      { q: 'Shopify o Shopify Plus: come si sceglie?', a: 'Dipende dal volume di vendite e dalla complessità delle integrazioni: lo valutiamo insieme in fase di analisi.' },
      { q: 'Potete migrare il mio store esistente?', a: 'Sì, valutiamo caso per caso cosa migrare e cosa ricostruire da zero per performance migliori.' },
      { q: 'Gestite anche il catalogo prodotti?', a: 'Impostiamo la struttura; l’aggiornamento quotidiano del catalogo resta tuo, con formazione inclusa.' },
    ],
    relatedSlugs: ['restyling-ottimizzazione', 'software-ai-su-misura'],
  },
  {
    slug: 'siti-web-contatti',
    n: '03',
    tag: 'WEB',
    icon: 'web',
    title: 'Siti web che generano contatti',
    body: 'Siti pensati per far arrivare chiamate, messaggi e richieste di preventivo. Struttura, copy e call-to-action guidano il visitatore fino all’azione.',
    resultNote: 'Più richieste di contatto e prenotazioni dirette, non solo visite passive.',
    whatIsIt:
      'Un sito vetrina non basta se non porta a un’azione. Costruiamo siti dove struttura, testi e call-to-action guidano il visitatore verso una richiesta di contatto, una prenotazione o una visita, non solo verso una bella pagina.',
    bullets: [
      'Struttura pensata per il percorso del visitatore, non solo esteticamente',
      'Copy e call-to-action orientati alla conversione',
      'Form di contatto e prenotazione integrati',
      'SEO locale per farti trovare da chi cerca vicino a te',
      'Integrazione con WhatsApp o booking diretto',
    ],
    perSettoreExtra: {
      'wine-viticulture': 'Sito che racconta il territorio e porta a prenotare una degustazione, non solo a leggere.',
      'oleifici-food-tech': 'Sito che spiega raccolta e produzione e porta all’acquisto diretto o a una visita al frantoio.',
      'wine-hospitality-agriturismi': 'Sito immersivo che guida dalla prima visita alla prenotazione del soggiorno.',
    },
    caseStudySlug: 'podere-la-vite',
    caseStudyNote: 'Per Podere La Vite, il nuovo sito immersivo con booking integrato ha portato +35% di occupazione camere e +50% di prenotazioni cena dirette.',
    testimonialName: 'Luca',
    technicalPoints: [
      'Next.js o WordPress, a seconda della gestione contenuti richiesta',
      'Form e booking integrati',
      'SEO tecnica e local business schema',
      'Ottimizzazione mobile prioritaria',
    ],
    faqs: [
      { q: 'Quanto tempo serve per avere il sito online?', a: 'Un sito vetrina richiede in media alcune settimane; dipende da contenuti e funzionalità richieste.' },
      { q: 'Scrivete voi i testi?', a: 'Sì, i testi fanno parte del lavoro: partiamo dai contenuti che hai già e li strutturiamo per la conversione.' },
      { q: 'Il sito include la gestione delle prenotazioni?', a: 'Sì, dove serve integriamo form di contatto o booking diretto collegato ai tuoi strumenti.' },
    ],
    relatedSlugs: ['restyling-ottimizzazione', 'consulenza-strategica'],
  },
  {
    slug: 'restyling-ottimizzazione',
    n: '04',
    tag: 'RESTYLING',
    icon: 'refresh',
    title: 'Restyling e ottimizzazione',
    body: 'Il tuo sito è vecchio o non converte? Lo rifacciamo o lo miglioriamo dove serve: grafica, contenuti, performance e SEO tecnica.',
    resultNote: 'Un sito più veloce, più chiaro, che riprende a produrre contatti o vendite.',
    whatIsIt:
      'Non sempre serve ripartire da zero. Analizziamo cosa funziona e cosa no nel tuo sito attuale, e interveniamo dove conta davvero: grafica, contenuti, velocità e SEO tecnica, conservando ciò che già porta risultati.',
    bullets: [
      'Audit del sito esistente: cosa tenere, cosa cambiare',
      'Restyling grafico coerente con il brand',
      'Ottimizzazione velocità e performance tecnica',
      'Aggiornamento contenuti e struttura SEO',
      'Percorso di conversione rivisto dove necessario',
    ],
    perSettoreExtra: {
      'wine-viticulture': 'Da sito statico a piattaforma con e-commerce e wine club, senza perdere la SEO già costruita.',
      'oleifici-food-tech': 'Da catalogo cartaceo o sito vetrina a canale di vendita diretta con tracciabilità.',
      'wine-hospitality-agriturismi': 'Da template generico a sito che riflette davvero l’esperienza offerta.',
    },
    caseStudySlug: 'tenuta-monteverdi',
    caseStudyNote: 'Tenuta Monteverdi partiva da un sito statico fermo al 2010, senza e-commerce: il restyling ha portato a +40% di vendite dirette in meno di un anno.',
    testimonialName: 'Andrea',
    technicalPoints: [
      'Audit tecnico e di contenuto iniziale',
      'Migrazione contenuti esistenti dove possibile',
      'Ottimizzazione Core Web Vitals',
      'Redirect corretti per non perdere posizionamento SEO',
    ],
    faqs: [
      { q: 'Perdo il posizionamento SEO che ho già?', a: 'No, gestiamo redirect e struttura con attenzione per mantenere (o migliorare) il posizionamento esistente.' },
      { q: 'Devo rifare tutti i contenuti?', a: 'Solo dove serve: valutiamo insieme cosa conservare e cosa riscrivere in fase di audit.' },
    ],
    relatedSlugs: ['siti-web-contatti', 'ecommerce-shopify'],
  },
  {
    slug: 'ai-integration',
    n: '05',
    tag: 'INTEGRAZIONI',
    icon: 'integration',
    title: 'AI integration nei tuoi flussi',
    body: 'Colleghiamo l’intelligenza artificiale ai processi che già usi: preventivi, customer care, aggiornamento contenuti, automazioni operative.',
    resultNote: 'Strumenti che già usi, collegati tra loro, con meno lavoro manuale di travaso dati.',
    whatIsIt:
      'Se hai già sistemi e strumenti (email, gestionale, CRM, spedizioni), spesso il problema non è la mancanza di tecnologia ma la mancanza di collegamento tra i pezzi. Integriamo l’AI nei flussi esistenti invece di sostituirli tutti.',
    bullets: [
      'Automazioni tra strumenti che già usi',
      'Quiz o raccomandazioni intelligenti per i tuoi clienti',
      'Prevenzione abbandono (churn) su abbonamenti e wine club',
      'Tracking e comunicazioni automatizzate',
      'Centralizzazione dei dati cliente',
    ],
    perSettoreExtra: {
      'wine-viticulture': 'Wine club automation: pagamenti ricorrenti, quiz di preferenze, prevenzione abbandono.',
      'oleifici-food-tech': 'Automazione tra e-commerce e comunicazione post-vendita per l’abbonamento olio.',
      'wine-hospitality-agriturismi': 'Automazioni WhatsApp collegate al booking, senza intervento manuale.',
    },
    caseStudySlug: 'wine-club-pro',
    caseStudyNote: 'Wine Club Pro, sviluppato per Azienda Rossi, integra pagamenti ricorrenti, un quiz AI di preferenze e automazioni anti-abbandono: 85% di retention dal primo al dodicesimo mese.',
    testimonialName: 'Giulia',
    technicalPoints: [
      'Integrazioni via API con gli strumenti che già usi',
      'Automazioni email e messaggistica',
      'Modelli AI per raccomandazioni o quiz',
      'Dati centralizzati in un unico posto',
    ],
    faqs: [
      { q: 'Devo cambiare i software che già uso?', a: 'Di norma no: l’obiettivo è collegarli, non sostituirli, salvo che uno strumento sia davvero un limite.' },
      { q: 'Funziona con qualsiasi gestionale?', a: 'Dipende dalla disponibilità di API o integrazioni: lo verifichiamo nella fase di analisi.' },
    ],
    relatedSlugs: ['software-ai-su-misura', 'ecommerce-shopify'],
  },
  {
    slug: 'consulenza-strategica',
    n: '06',
    tag: 'CONSULENZA',
    icon: 'compass',
    premium: true,
    title: 'Consulenza strategica',
    body: 'Analizziamo il tuo progetto, individuiamo i punti critici e definiamo una roadmap concreta per crescere online. Niente fuffa, solo priorità chiare.',
    resultNote: 'Priorità chiare su cosa fare per primo, e perché.',
    whatIsIt:
      'La maggior parte dei problemi digitali non comincia con la tecnologia: comincia con la confusione su cosa serva davvero. La consulenza strategica analizza il tuo business reale e ti restituisce una direzione chiara, prima ancora di scrivere una riga di codice.',
    bullets: [
      'Analisi del business, del mercato e della concorrenza diretta',
      'Chiarezza su cosa serve davvero (non su cosa pensavi di volere)',
      'Roadmap di priorità, non un elenco generico di funzionalità',
      'Valutazione onesta se e come possiamo aiutarti',
      'Base di lavoro per tutti gli altri servizi, se decidi di procedere',
    ],
    perSettoreExtra: {
      'wine-viticulture': 'Prima domanda tipica: vendita diretta o wine club? La strategia lo chiarisce prima di scegliere la tecnologia.',
      'oleifici-food-tech': 'Prima domanda tipica: come ridurre la dipendenza dai grossisti senza perdere volumi?',
      'wine-hospitality-agriturismi': 'Prima domanda tipica: dove si perde margine tra OTA e prenotazioni dirette?',
    },
    caseStudySlug: 'tenuta-monteverdi',
    caseStudyNote: 'Per Tenuta Monteverdi, l’analisi iniziale (vedi /metodo/analisi-e-obiettivi) ha fatto emergere che il problema non era la qualità del vino, ma l’assenza di un canale diretto.',
    testimonialName: null,
    technicalPoints: [],
    faqs: [
      { q: 'La consulenza è vincolante per poi lavorare insieme?', a: 'No. Ti diciamo con onestà se ha senso proseguire; se la risposta è no, hai comunque una direzione più chiara.' },
      { q: 'Quanto dura?', a: 'Dipende dalla complessità del progetto: lo definiamo nella prima chiamata conoscitiva.' },
      { q: 'Cosa ricevo alla fine?', a: 'Un quadro chiaro delle priorità e, se decidiamo di proseguire, i prossimi passi concreti del progetto.' },
    ],
    relatedSlugs: ['software-ai-su-misura', 'siti-web-contatti'],
  },
];

export function getServizio(slug) {
  return servizi.find((s) => s.slug === slug);
}

// ---- SETTORI -------------------------------------------------------
// slug = indirizzo pagina (/settori/wine-viticulture)
// 3 macro-settori verticali: Wine & Viticulture, Oleifici & Food Tech,
// Wine Hospitality & Agriturismi. Ogni settore ha una pagina dedicata
// completamente diversa (vedi app/settori/<slug>/page.jsx) — qui restano
// solo i contenuti testuali condivisi (indice /settori, card in home).
export const sectors = [
  {
    slug: 'wine-viticulture',
    name: 'Wine & Viticulture',
    lead: 'Cantine, vigneti e aziende vitivinicole.',
    intro:
      'Portiamo online il mondo del vino con siti che raccontano il territorio e store che vendono davvero: gestione stock, spedizioni, wine club e tracciabilità di filiera.',
    deliverables: [
      'Sito immersivo per cantina con storia, vigne e visite',
      'E-commerce vini su Shopify con gestione stock e spedizioni',
      'Wine club con ordini in abbonamento e area riservata',
      'Prenotazione degustazioni e visite in cantina',
      'Tracciabilità di lotto con QR code',
    ],
    result: 'Più vendite dirette, meno dipendenza dagli intermediari.',
  },
  {
    slug: 'oleifici-food-tech',
    name: 'Oleifici & Food Tech',
    lead: 'Frantoi, oleifici e produttori di eccellenza alimentare.',
    intro:
      'Portiamo il frantoio fuori dal circuito dei grossisti: e-commerce diretto, tracciabilità di lotto e un catalogo che racconta raccolta, frangitura e imbottigliamento.',
    deliverables: [
      'E-commerce olio EVO su Shopify con abbonamento ricorrente',
      'Catalogo immersivo con timeline di raccolta e produzione',
      'Tracciabilità di lotto con QR code',
      'Integrazione con marketplace del settore food',
    ],
    result: 'Più vendita diretta, margini più alti, meno dipendenza dai grossisti.',
  },
  {
    slug: 'wine-hospitality-agriturismi',
    name: 'Wine Hospitality & Agriturismi',
    lead: 'Wine hotel, agriturismi e ristorazione rurale.',
    intro:
      'Un’esperienza digitale immersiva quanto il soggiorno reale: gallery sequenziali, esperienze in evidenza (colazione, degustazione, cena) e prenotazione integrata, senza intermediari.',
    deliverables: [
      'Sito immersivo con gallery di esperienze e storytelling per sequenza',
      'Booking engine collegato a Booking.com / Airbnb',
      'Menù digitale e automazioni WhatsApp',
      'Loyalty program per gli ospiti abituali',
    ],
    result: 'Più occupazione camere e coperti prenotati direttamente.',
  },
];

// ---- SOFTWARE ------------------------------------------------------
// Prezzi non ancora pubblicati: struttura piani, limiti, costi operativi
// e condizioni commerciali sono ancora da definire (vedi docs/AUDIT-STRATEGIA-MG-SOLUTIONS.md §11/§23).
// Il campo `pricing` resta nel modello dati per una futura pubblicazione
// di canone/piani per famiglia, ma non viene letto da app/software/page.jsx.

// Stato reale, unico per tutte le famiglie: oggi non esistono sette (né
// quattro) SaaS autonomi pronti all'uso o pilota pubblicamente attivi.
// Ogni famiglia è realizzabile come soluzione personalizzata; la versione
// standardizzata in abbonamento è ancora in fase di progettazione.
export const softwareFamilyStatus = {
  label: 'Configurabile su progetto',
  note:
    'Disponibile come soluzione personalizzata. La versione standardizzata in abbonamento è in fase di progettazione.',
};

// ---- FAMIGLIE DI AUTOMAZIONE -----------------------------------------
// Le sette soluzioni della prima stesura sono state accorpate in 4
// famiglie per ridurre le sovrapposizioni. Nessuna è un prodotto
// acquistabile tramite checkout: si attiva dopo un'analisi del processo.
export const softwareFamilies = [
  {
    slug: 'agente-commerciale',
    name: 'Agente Commerciale AI',
    icon: 'ai',
    heroImage: '/images/software/agente-commerciale-hero.png',
    pitch:
      'Il primo contatto commerciale gestito da un agente che non dorme mai: intercetta, qualifica, informa e fissa l’appuntamento.',
    problem:
      'Chi ti contatta oggi aspetta ore o giorni per una risposta. Nel frattempo, spesso, ha già scritto anche a qualcun altro.',
    solution:
      'L’agente risponde subito, fa le domande giuste per capire se il contatto è valido, e — se lo è — fissa l’appuntamento direttamente sul tuo calendario.',
    scope: [
      'Acquisizione e qualificazione dei lead',
      'Risposte iniziali',
      'Raccolta informazioni',
      'Prenotazione call',
      'Follow-up automatici',
    ],
    caseStudySlug: 'tasting-flow',
    testimonialName: 'Andrea',
    pricing: null,
  },
  {
    slug: 'assistente-clienti-knowledge-base',
    name: 'Assistente Clienti e Knowledge Base',
    icon: 'compass',
    heroImage: '/images/software/assistente-clienti-hero.png',
    pitch:
      'Un assistente che risponde usando solo i documenti reali dell’azienda, e passa a una persona quando serve davvero.',
    problem:
      'Le stesse domande arrivano ogni giorno — su prodotti, spedizioni, disponibilità — e rispondere manualmente a tutte toglie tempo al resto.',
    solution:
      'L’assistente risponde usando i tuoi documenti reali (schede prodotto, policy, FAQ), e passa la conversazione a una persona quando la domanda è troppo specifica.',
    scope: [
      'Customer care',
      'Risposte su prodotti e servizi',
      'Utilizzo di documenti aziendali',
      'FAQ',
      'Passaggio a un operatore umano',
    ],
    caseStudySlug: null,
    testimonialName: 'Maria',
    pricing: null,
  },
  {
    slug: 'automazione-preventivi-processi',
    name: 'Automazione Preventivi e Processi',
    icon: 'gear',
    heroImage: '/images/software/automazione-preventivi-hero.png',
    pitch:
      'Da una richiesta in entrata a un documento pronto da approvare, con i passaggi e le integrazioni che servono davvero.',
    problem:
      'Ogni preventivo richiede di raccogliere dati da più fonti, compilare un documento a mano, e aspettare i passaggi di approvazione via email.',
    solution:
      'Il software raccoglie i dati, genera una bozza di preventivo, gestisce notifiche e passaggi di approvazione, integrato con gli strumenti che già usi.',
    scope: [
      'Raccolta dati',
      'Generazione assistita di preventivi',
      'Documenti',
      'Notifiche',
      'Passaggi approvativi',
      'Integrazioni con CRM o gestionali',
    ],
    caseStudySlug: null,
    testimonialName: null,
    pricing: null,
  },
  {
    slug: 'reputation-customer-follow-up',
    name: 'Reputation e Customer Follow-up',
    icon: 'target',
    heroImage: '/images/software/reputation-followup-hero.png',
    pitch:
      'Quello che succede dopo la vendita: recensioni, feedback, segmentazione e riattivazione dei contatti che si sono raffreddati.',
    problem:
      'Dopo la vendita, spesso non succede più nulla: nessuna richiesta di recensione, nessun follow-up, clienti che si raffreddano senza che nessuno se ne accorga.',
    solution:
      'Il software chiede automaticamente una recensione al momento giusto, raccoglie feedback, segmenta i clienti e riattiva chi non acquista da tempo.',
    scope: [
      'Richieste di recensione',
      'Raccolta feedback',
      'Follow-up post-acquisto',
      'Segmentazione dei clienti',
      'Riattivazione dei contatti',
    ],
    caseStudySlug: 'wine-club-pro',
    testimonialName: 'Giulia',
    pricing: null,
  },
];

export function getSoftwareFamily(slug) {
  return softwareFamilies.find((f) => f.slug === slug);
}

// ---- SOLUZIONI PRECONFIGURATE IN ARRIVO -------------------------------
export const softwareUpcoming = {
  title: 'Soluzioni preconfigurate in arrivo',
  body:
    'Stiamo trasformando le automazioni più richieste in prodotti modulari attivabili più rapidamente e con un canone definito. Fino al rilascio delle prime versioni, ogni soluzione viene configurata sulla base dei processi reali dell’azienda.',
};

// ---- SOFTWARE AI SU MISURA ------------------------------------------
export const softwareCustom = {
  title: 'Software AI su misura',
  pitch:
    'Hai un processo specifico da automatizzare? Analizziamo il flusso reale della tua azienda e progettiamo il software che si adatta a te, non il contrario. Nessun prezzo fisso: dipende dal processo.',
  features: [
    'Analisi del processo e definizione degli obiettivi',
    'Sviluppo dedicato, integrato negli strumenti che già usi',
    'Nessun vincolo a un modulo preconfigurato',
    'Supporto ed evoluzione nel tempo',
  ],
};

// ---- GESTIONE CONTINUATIVA -------------------------------------------
export const softwareOngoing = {
  title: 'Gestione continuativa',
  intro:
    'Ogni soluzione attiva — preconfigurata o su misura — comporta una gestione nel tempo. Fa parte del servizio, non è un costo nascosto che scopri dopo.',
  items: [
    'Configurazione iniziale',
    'Hosting',
    'Utilizzo dei modelli AI',
    'Database',
    'Monitoraggio',
    'Aggiornamenti',
    'Assistenza',
    'Manutenzione delle integrazioni',
    'Evoluzione delle funzionalità',
  ],
};

// ---- DA COSA DIPENDE L'INVESTIMENTO ----------------------------------
export const investmentFactors = [
  'Numero di utenti',
  'Volume di utilizzo',
  'Numero di conversazioni o operazioni',
  'Modelli AI utilizzati',
  'Integrazioni necessarie',
  'Dati e documenti da collegare',
  'Livello di personalizzazione',
  'Livello di assistenza',
  'Requisiti di sicurezza',
];

// ---- PORTFOLIO — CASE STUDIES ----------------------------------------
// Tutti e 6 sono progetti illustrativi (concept: true): esempi realistici
// di ciò che sappiamo costruire per ciascun settore, non clienti reali.
// Il badge "CONCEPT" e il disclaimer in pagina lo rendono esplicito.
export const caseStudies = [
  {
    slug: 'tenuta-monteverdi',
    sector: 'wine-viticulture',
    title: 'Tenuta Monteverdi',
    kind: 'Cantina · Toscana, Chianti Classico',
    tagline: 'Un sito immersivo e un e-commerce che hanno portato la cantina a vendere direttamente, senza intermediari.',
    concept: true,
    beforeImage: '/images/case-studies/tenuta-monteverdi-prima.png',
    brand: {
      primary: '#6B3D6F',
      accent: '#D4A574',
      bg: '#F5F0F8',
      domain: 'tenutamonteverdi.it',
      mockupType: 'ecommerce',
      mockupItems: [
        { name: 'Chianti Classico DOC', meta: '€28' },
        { name: 'Chianti Classico Riserva', meta: '€42' },
        { name: 'Rosso di Toscana IGT', meta: '€19' },
      ],
    },
    stats: [
      ['+40%', 'vendite dirette'],
      ['60/mese', 'prenotazioni degustazione'],
      ['200', 'wine club members'],
    ],
    overview:
      'Cantina medievale a conduzione familiare, 50 ettari, produzione DOC Chianti Classico. Storia lunga, presenza online ferma al 2010.',
    problem:
      'Sito statico, nessun e-commerce, prenotazioni gestite solo per telefono ed email. La cantina perdeva vendite dirette e non riusciva a costruire una relazione continuativa con gli appassionati.',
    solution:
      'Sito immersivo con racconto del territorio, e-commerce Shopify con 40 SKU, software di gestione tasting room, SEO locale, automazione wine club e tracciabilità di lotto tramite QR code.',
    techStack: ['Next.js', 'Shopify Liquid', 'Node.js', 'PostgreSQL'],
    deliverables: [
      'Sito vetrina + e-commerce Shopify integrato',
      'Gestione stock e spedizioni vino',
      'Wine club con abbonamento ricorrente',
      'Prenotazione degustazioni online',
      'Tracciabilità di lotto con QR code',
      'SEO locale e contenuti di territorio',
    ],
    results: [
      '+40% vendite dirette rispetto al solo canale intermediari',
      '60 prenotazioni di degustazione al mese',
      '200 membri attivi nel wine club',
    ],
    roi: 'Il canale diretto (e-commerce + wine club) è diventato la seconda fonte di fatturato della cantina in meno di un anno.',
    deepDive: {
      metricsHuman: [
        'Un euro su tre incassato oggi arriva dal canale diretto, non più dai soli intermediari.',
        'Quasi 2 gruppi in degustazione ogni giorno, gestiti senza una telefonata.',
        'Una base di clienti che ordina più volte l’anno, non un acquisto isolato.',
      ],
      learnings: [
        'Una cantina non vende solo vino: vende un territorio. Il sito doveva raccontare la storia prima del prodotto.',
        'Il wine club funziona se è un’estensione della visita in cantina, non un modulo di iscrizione separato.',
        'La tracciabilità di lotto non è solo compliance: è un argomento di vendita per chi cerca autenticità.',
      ],
      roadmap: [
        'Wine club con selezione guidata da AI in base alle preferenze di gusto già raccolte.',
        'Contenuti multimediali collegati al QR code di tracciabilità (video del vigneto, note del produttore).',
        'Programma referral per i membri wine club esistenti.',
      ],
      impactNote:
        'Impatto stimato: un secondo motore di fatturato, indipendente dagli intermediari, che riduce l’esposizione della cantina a un solo canale di vendita.',
    },
  },
  {
    slug: 'azienda-rossi',
    sector: 'wine-viticulture',
    title: 'Azienda Rossi',
    kind: 'Cantina biologica · Emilia-Romagna, Lambrusco',
    tagline: 'Da presenza solo sui social a un e-commerce con membership ed eventi sold out.',
    concept: true,
    beforeImage: '/images/case-studies/tenuta-rossi-prima.png',
    brand: {
      primary: '#8B6914',
      accent: '#D4AF37',
      bg: '#FAF7F2',
      domain: 'aziendarossi.it',
      mockupType: 'ecommerce',
      mockupItems: [
        { name: 'Lambrusco di Sorbara', meta: '€14' },
        { name: 'Lambrusco Grasparossa', meta: '€16' },
        { name: 'Lambrusco Rosé Bio', meta: '€15' },
      ],
    },
    stats: [
      ['80/mese', 'ordini online'],
      ['80', 'membership attive'],
      ['6/anno', 'workshop sold out'],
    ],
    overview:
      'Piccola cantina biologica, 15 ettari, guidata da una giovane fondatrice. Presenza solo su social e fiere di settore, nessuna struttura digitale.',
    problem:
      'Zero struttura digitale: vendite affidate a passaparola, social ed eventi fisici. Nessun modo per trasformare i follower in clienti ricorrenti.',
    solution:
      'Sito in WordPress, e-commerce WooCommerce, club a membership con spedizioni ricorrenti, sistema di prenotazione eventi/workshop e newsletter automatizzata.',
    techStack: ['WordPress', 'WooCommerce', 'PHP', 'Elementor Pro'],
    deliverables: [
      'Sito WordPress con identità del brand biologico',
      'E-commerce WooCommerce',
      'Membership club con spedizioni ricorrenti',
      'Prenotazione eventi e workshop in cantina',
      'Newsletter automation',
    ],
    results: [
      '80 ordini online al mese',
      '80 membri nel club a membership',
      '6 workshop l’anno, sempre sold out',
    ],
    roi: 'Il club a membership ha creato un flusso di cassa ricorrente prevedibile, prima assente.',
    deepDive: {
      metricsHuman: [
        'Quasi 3 ordini al giorno, arrivati senza una fiera o un evento fisico.',
        'Un flusso di cassa ricorrente prevedibile, non più legato all’estro dei social.',
        'La domanda ora supera i posti disponibili ai workshop, non il contrario.',
      ],
      learnings: [
        'I follower sui social non sono clienti finché non hanno un posto dove comprare in due click.',
        'Un piccolo produttore biologico compete sull’esperienza, non sul prezzo: gli eventi in cantina vendono più della scontistica.',
        'La membership funziona quando la spedizione diventa un’abitudine, non una decisione ripetuta ogni mese.',
      ],
      roadmap: [
        'Calendario eventi con lista d’attesa automatica per i workshop sold out.',
        'Box degustazione stagionale in abbonamento, alternativo alla membership fissa.',
        'Automazione recensioni post-workshop per rafforzare la prova sociale.',
      ],
      impactNote:
        'Impatto stimato: entrate ricorrenti prevedibili invece che concentrate in poche fiere ed eventi l’anno.',
    },
  },
  {
    slug: 'frantoi-san-lorenzo',
    sector: 'oleifici-food-tech',
    title: 'Frantoi San Lorenzo',
    kind: 'Oleificio storico · Umbria, Olio DOP',
    tagline: 'Da catalogo cartaceo e dipendenza dai grossisti a un canale diretto in forte crescita.',
    concept: true,
    beforeImage: '/images/case-studies/frantoi-san-lorenzo-prima.png',
    brand: {
      primary: '#6B4423',
      accent: '#D4A76A',
      bg: '#FAF7F2',
      domain: 'frantoisanlorenzo.it',
      mockupType: 'ecommerce',
      mockupItems: [
        { name: 'Olio EVO Classico', meta: '€18' },
        { name: 'Olio EVO Riserva DOP', meta: '€26' },
        { name: 'Olio EVO Biologico', meta: '€22' },
      ],
    },
    stats: [
      ['+200%', 'vendita diretta'],
      ['300+', 'clienti regolari'],
      ['€5.000/mese', 'da marketplace'],
    ],
    overview:
      'Oleificio storico a conduzione familiare, 200 ettari, produzione DOP. L’80% del fatturato dipendeva da grossisti, con margini compressi.',
    problem:
      'Catalogo solo cartaceo, nessuna vendita diretta online, forte dipendenza dai grossisti e margini bassi su ogni bottiglia venduta.',
    solution:
      'E-commerce Shopify Plus, catalogo immersivo con racconto di raccolta e frangitura, tracciabilità di lotto tramite QR code, abbonamento olio ricorrente e integrazione con un marketplace di settore.',
    techStack: ['Shopify Plus', 'Shopify Liquid', 'Integrazione marketplace'],
    deliverables: [
      'E-commerce Shopify Plus con abbonamento ricorrente',
      'Catalogo immersivo con timeline di produzione',
      'Tracciabilità di lotto con QR code',
      'Integrazione marketplace di settore',
    ],
    results: [
      '+200% vendita diretta rispetto al periodo pre-digitale',
      '300+ clienti regolari nell’abbonamento olio',
      '€5.000/mese di fatturato aggiuntivo da marketplace',
    ],
    roi: 'La vendita diretta ha ridotto la dipendenza dai grossisti, alzando il margine medio per bottiglia.',
    deepDive: {
      metricsHuman: [
        'Il canale online ha praticamente triplicato quello che arrivava dai soli grossisti.',
        'Non acquirenti occasionali, ma persone che riordinano l’olio con costanza.',
        'Un canale in più, senza assumere nessuno per gestirlo.',
      ],
      learnings: [
        'Dipendere dai grossisti non è solo un rischio di margine: è anche perdere il contatto diretto con chi consuma il prodotto.',
        'Il racconto della raccolta e della frangitura vende più della sola scheda tecnica dell’olio.',
        'Il marketplace di settore non sostituisce il canale diretto: lo affianca, portando clienti che altrimenti non si sarebbero mai trovati.',
      ],
      roadmap: [
        'Abbonamento con blend personalizzato in base alle preferenze del cliente.',
        'Espansione su un secondo marketplace di settore, anche internazionale.',
        'Contenuti di tracciabilità arricchiti con dati di raccolta in tempo reale.',
      ],
      impactNote:
        'Impatto stimato: margini più alti per bottiglia e una relazione diretta con chi consuma l’olio, non solo con chi lo distribuisce.',
    },
  },
  {
    slug: 'podere-la-vite',
    sector: 'wine-hospitality-agriturismi',
    title: 'Podere La Vite',
    kind: 'Agriturismo · Toscana, 8 camere + ristorazione',
    tagline: 'Da booking manuale via telefono a un motore di prenotazione integrato con occupazione in crescita.',
    concept: true,
    beforeImage: '/images/case-studies/podere-la-vite-prima.png',
    brand: {
      primary: '#8B5A3C',
      accent: '#D4A574',
      bg: '#F9F5F0',
      domain: 'poderelavite.it',
      mockupType: 'booking',
      mockupItems: [
        { name: 'Camera Vigneto', meta: 'da €140/notte' },
        { name: 'Cena Farm-to-Table', meta: '5 portate' },
        { name: 'Degustazione Guidata', meta: '4 vini' },
      ],
    },
    stats: [
      ['+35%', 'occupazione camere'],
      ['+50%', 'prenotazioni cena'],
      ['Top 5%', 'su Booking.com'],
    ],
    overview:
      'Wine hotel con 8 camere, ristorante farm-to-table, wine bar e vigneto di proprietà. Sito su template generico, booking gestito manualmente via telefono.',
    problem:
      'Template generico non coerente con l’esperienza reale, nessuna integrazione con i canali di prenotazione, gestione manuale che generava errori e overbooking.',
    solution:
      'Sito immersivo con gallery di esperienze in sequenza (colazione, degustazione, cena, pernottamento), booking engine personalizzato integrato con Booking.com e Airbnb, menù digitale, automazioni WhatsApp e loyalty program.',
    techStack: ['Next.js', 'Booking engine custom', 'Stripe', 'Twilio WhatsApp API'],
    deliverables: [
      'Sito immersivo con storytelling per esperienza',
      'Booking engine collegato a Booking.com / Airbnb',
      'Menù digitale sempre aggiornato',
      'Automazioni WhatsApp per ospiti',
      'Loyalty program per ospiti abituali',
    ],
    results: [
      '+35% occupazione camere',
      '+50% prenotazioni cena dirette',
      'Ingresso nel top 5% delle strutture su Booking.com',
    ],
    roi: 'Le prenotazioni dirette hanno ridotto le commissioni pagate alle OTA, aumentando il margine per soggiorno.',
    deepDive: {
      metricsHuman: [
        'Più notti vendute nelle stesse 8 camere, senza aumentare i prezzi.',
        'Meno commissioni pagate alle piattaforme di prenotazione per ogni cena venduta direttamente.',
        'La struttura compete con realtà molto più grandi, a parità di camere.',
      ],
      learnings: [
        'Un template generico comunica il contrario di quello che un agriturismo vuole vendere: l’unicità del posto.',
        'L’overbooking non è solo un problema tecnico: è un problema di fiducia con l’ospite, che si paga in recensioni.',
        'Le OTA (Booking, Airbnb) portano visibilità, ma ogni prenotazione diretta in più è margine che resta in casa.',
      ],
      roadmap: [
        'Upsell automatico di esperienze (degustazioni, tour) in fase di conferma prenotazione.',
        'Loyalty program con vantaggi progressivi per gli ospiti ricorrenti.',
        'Sincronizzazione disponibilità in tempo reale con ulteriori canali OTA.',
      ],
      impactNote:
        'Impatto stimato: più margine per soggiorno grazie a meno commissioni pagate alle piattaforme di prenotazione.',
    },
  },
  {
    slug: 'tasting-flow',
    sector: 'wine-viticulture',
    title: 'Tasting Flow',
    kind: 'Software su misura · Gestione tasting room (per Tenuta Monteverdi)',
    tagline: 'Il software che organizza le degustazioni, dal booking al follow-up automatico.',
    concept: true,
    brand: {
      primary: '#1A1A1A',
      accent: '#E8D4A0',
      bg: '#F9F7F4',
      domain: 'app.tastingflow.io',
      mockupType: 'dashboard',
      mockupStats: [
        ['12', 'Prenotazioni oggi'],
        ['+25%', 'Conversione wine club'],
        ['15:30', 'Prossima degustazione'],
      ],
      mockupItems: [
        { name: 'Gruppo Bianchi', meta: '4 persone · 11:00' },
        { name: 'Sig.ra Neri', meta: '2 persone · 15:30' },
        { name: 'Gruppo aziendale Rossi srl', meta: '8 persone · 17:00' },
      ],
    },
    stats: [
      ['+25%', 'conversione tasting → wine club'],
      ['-15h/mese', 'lavoro amministrativo'],
    ],
    overview:
      'Software sviluppato per la tasting room di Tenuta Monteverdi: prenotazioni automatiche, schede di degustazione per il sommelier e upsell intelligente.',
    problem:
      'Le prenotazioni di degustazione venivano gestite a mano su un foglio di calcolo, senza follow-up post-visita né dati su cosa convertisse meglio in vendita.',
    solution:
      'Prenotazioni automatiche con calendario integrato, schede tasting digitali per il sommelier, suggerimenti di upsell (catering, souvenir), follow-up automatico via email e dashboard di analytics.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Nodemailer', 'Chart.js'],
    deliverables: [
      'Prenotazioni automatiche con calendario',
      'Schede di degustazione digitali per il sommelier',
      'Upsell intelligente su catering e souvenir',
      'Follow-up automatico post-visita',
      'Dashboard analytics',
    ],
    results: [
      '+25% conversione da degustazione a wine club',
      '15 ore al mese di lavoro amministrativo risparmiate',
    ],
    roi: 'Il tempo risparmiato in amministrazione è stato reinvestito nell’accoglienza in cantina.',
    deepDive: {
      metricsHuman: [
        'Un visitatore su quattro in più esce dalla degustazione iscritto al wine club.',
        'Quasi 2 giornate lavorative restituite ogni mese al sommelier, da dedicare all’accoglienza invece che ai fogli di calcolo.',
      ],
      learnings: [
        'Il sommelier non ha bisogno di più dati: ha bisogno dei dati giusti, al momento giusto, durante la degustazione.',
        'Il follow-up post-visita vale quanto la visita stessa: senza, l’interesse si raffredda in pochi giorni.',
        'Automatizzare l’amministrazione non toglie lavoro al sommelier: gli restituisce tempo per vendere durante la visita.',
      ],
      roadmap: [
        'Suggerimento AI del vino da proporre in base al gruppo prenotato, prima ancora dell’arrivo.',
        'Integrazione con un POS per unificare carrello fisico e upsell digitale.',
        'Un assistente per rispondere alle domande più comuni su abbinamenti, in autonomia dal sommelier.',
      ],
      impactNote:
        'Impatto stimato: il tempo risparmiato in amministrazione si traduce in più attenzione dedicata a chi è già in cantina, nel momento in cui decide di comprare.',
    },
  },
  {
    slug: 'wine-club-pro',
    sector: 'wine-viticulture',
    title: 'Wine Club Pro',
    kind: 'Software su misura · Automazione abbonamenti (per Azienda Rossi)',
    tagline: 'Abbonamenti vino gestiti in automatico: pagamenti, preferenze, spedizioni e retention.',
    concept: true,
    brand: {
      primary: '#8B6914',
      accent: '#D4AF37',
      bg: '#FAF7F2',
      domain: 'app.wineclubpro.io',
      mockupType: 'dashboard',
      mockupStats: [
        ['80', 'Membri attivi'],
        ['85%', 'Retention M1→M12'],
        ['3%', 'Churn rate'],
      ],
      mockupItems: [
        { name: 'Marco B. — Piano Mensile', meta: 'Rinnovo tra 3 giorni' },
        { name: 'Giulia T. — Piano Trimestrale', meta: 'Rinnovo tra 12 giorni' },
        { name: 'Elena P. — Piano Mensile', meta: 'Rinnovo tra 18 giorni' },
      ],
    },
    stats: [
      ['85%', 'retention M1→M12'],
      ['3%', 'churn rate'],
      ['€450', 'LTV medio per membro'],
    ],
    overview:
      'Software di automazione per il club a membership di Azienda Rossi: dall’iscrizione al rinnovo mensile, senza intervento manuale.',
    problem:
      'Gli abbonamenti venivano gestiti a mano tra fogli di calcolo e pagamenti singoli, con perdita di soci per mancanza di follow-up e nessuna personalizzazione delle spedizioni.',
    solution:
      'Onboarding guidato, pagamenti ricorrenti automatici, quiz AI per capire le preferenze di gusto, tracking spedizione, upsell automation e prevenzione abbandono (churn).',
    techStack: ['Next.js', 'Stripe Subscriptions API', 'OpenAI API', 'PostgreSQL', 'Mailchimp API'],
    deliverables: [
      'Onboarding e checkout abbonamento',
      'Pagamenti ricorrenti automatici',
      'Quiz AI per preferenze di gusto',
      'Tracking spedizioni',
      'Automazione anti-abbandono (churn prevention)',
    ],
    results: [
      '85% retention dal primo al dodicesimo mese',
      '3% di tasso di abbandono mensile',
      '€450 di valore medio per membro nel tempo (LTV)',
    ],
    roi: 'La retention alta ha reso il club a membership la fonte di fatturato più prevedibile dell’azienda.',
    deepDive: {
      metricsHuman: [
        '85 soci su 100 sono ancora abbonati dopo un anno, contro una media di settore più vicina al 60%.',
        'Meno di 3 soci su 100 abbandonano ogni mese, un tasso che rende il fatturato prevedibile.',
        'Il valore reale di ogni socio nel tempo, non solo il primo ordine.',
      ],
      learnings: [
        'La retention si gioca nei primi tre mesi, non dopo un anno: l’onboarding è il momento più critico.',
        'Un quiz che si adatta alle risposte comunica attenzione al singolo socio, un form statico no.',
        'Il churn si previene, non si recupera: intercettare i segnali prima della disdetta costa meno che riconquistare un socio perso.',
      ],
      roadmap: [
        'Scoring predittivo del rischio di abbandono, per intervenire prima della disdetta.',
        'Loyalty a punti legato alla fedeltà del socio nel tempo, non solo al rinnovo.',
        'Segmentazione automatica delle comunicazioni in base alle preferenze emerse dal quiz.',
      ],
      impactNote:
        'Impatto stimato: un fatturato ricorrente più prevedibile, che permette di pianificare produzione e magazzino con più sicurezza.',
    },
  },
];

// ---- PORTFOLIO: perché questa tech stack (per case study) -----------------
// Chiave = nome esatto come appare in techStack. Usata per spiegare la SCELTA
// tecnica, non solo elencare lo strumento.
export const techRationale = {
  'Next.js': 'Rendering ibrido (server + client): pagine veloci per la SEO, interattività dove serve.',
  'Shopify Liquid': 'Personalizzazione profonda del tema Shopify senza perdere aggiornamenti e sicurezza della piattaforma.',
  'Node.js': 'Stesso linguaggio di frontend e backend: meno attrito tra le parti, integrazioni più rapide.',
  PostgreSQL: 'Dati relazionali robusti per prenotazioni, abbonamenti e transazioni: conformità ACID, query complesse affidabili.',
  WordPress: 'Il team del cliente aggiorna i contenuti in autonomia, senza dipendere da noi per ogni modifica.',
  WooCommerce: 'E-commerce leggero e integrato in WordPress: costi di gestione più bassi per una cantina piccola.',
  PHP: 'Compatibilità piena con l’ecosistema WordPress/WooCommerce e i suoi plugin.',
  'Elementor Pro': 'Editor visuale: il cliente modifica testi e immagini senza toccare codice.',
  'Shopify Plus': 'Volumi più alti e automazioni native (abbonamenti, checkout) che il piano Shopify base non supporta.',
  'Integrazione marketplace': 'Vendita anche dove il cliente cerca già, senza duplicare il catalogo a mano.',
  'Booking engine custom': 'Regole di prenotazione specifiche (camere, cene, tour) che un plugin generico non gestiva.',
  Stripe: 'Pagamenti certificati PCI, multi-valuta, integrazione diretta con abbonamenti e checkout.',
  'Twilio WhatsApp API': 'Comunicazione dove gli ospiti già sono, con tassi di apertura molto più alti dell’email.',
  Nodemailer: 'Invio email transazionali affidabile (conferme, follow-up) senza un servizio terzo costoso.',
  'Chart.js': 'Dashboard leggibile per il sommelier, senza bisogno di uno strumento di BI esterno.',
  'Stripe Subscriptions API': 'Gestione nativa di rinnovi, mancati pagamenti e cambi piano, senza costruire la logica da zero.',
  'OpenAI API': 'Un quiz che si adatta alle risposte, invece di un form statico a scelta multipla.',
  'Mailchimp API': 'Automazioni email già testate su larga scala (retention, promemoria rinnovo) senza reinventare l’infrastruttura.',
};

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getMetodoStep(slug) {
  return metodoSteps.find((s) => s.slug === slug);
}

// ---- TEAM ----------------------------------------------------------
export const team = [
  {
    name: 'Matteo Garuzzo',
    role: 'Web Developer & Founder',
    body: 'Progetta e sviluppa i sistemi digitali. Full-stack con focus su Shopify, Next.js e performance. Specialista agribusiness.',
    photo: '/images/team/matteo-garuzzo.jpg',
  },
  {
    name: 'Matteo De Pilla',
    role: 'AI Specialist',
    body: 'Integra intelligenza artificiale nei sistemi: software custom, agenti conversazionali, automazioni intelligenti.',
    photo: '/images/team/matteo-de-pilla.png',
  },
  {
    name: 'Alessandro Poponi',
    role: 'Marketing & Lead Generation',
    body: 'Trasforma i visitatori in clienti: positioning, SEO, GEO e marketing locale per farti trovare online.',
    photo: '/images/team/alessandro-poponi.jpg',
  },
];

// ---- BLOG (esempi, SEO/GEO ready) ----------------------------------
export const posts = [
  {
    slug: 'agente-ai-reparto-commerciale',
    title: 'Un agente AI può davvero sostituire il primo contatto commerciale?',
    excerpt:
      'Cosa fa (e cosa non fa) un agente AI commerciale, e come una PMI può usarlo per non perdere più lead.',
    date: '2026-01-15',
    updated: '2026-07-27',
    readingMinutes: 7,
    category: 'AI',
    keywords: ['agente AI commerciale', 'automazione lead', 'AI vendite PMI', 'primo contatto commerciale AI'],
    relatedSlugs: ['agenti-ai-processo-commerciale', 'seo-geo-farsi-trovare-ai'],
    relatedLinks: [
      { href: '/servizi/software-ai-su-misura', label: 'Servizio: Software & agenti AI su misura' },
      { href: '/portfolio/wine-club-pro', label: 'Case study: Wine Club Pro' },
      { href: '/metodo/analisi-e-obiettivi', label: 'Metodo: Analisi e obiettivi' },
    ],
    body: [
      {
        h2: 'Il problema non è il prodotto: è la velocità di risposta',
        paragraphs: [
          'La maggior parte delle aziende perde lead non perché il prodotto sia debole, ma perché nessuno risponde in tempo. Un contatto che arriva alle 21 e riceve risposta due giorni dopo è, nella pratica, un contatto perso: nel frattempo ha già scritto a un concorrente, o ha semplicemente perso interesse.',
          'Per una PMI questo problema è quasi strutturale: il titolare o il responsabile commerciale ha altro da fare durante il giorno, e i messaggi si accumulano fuori orario, nei weekend, durante le fiere. Non è mancanza di volontà, è mancanza di ore.',
        ],
      },
      {
        h2: 'Cosa fa davvero un agente AI commerciale',
        paragraphs: [
          'Un agente AI commerciale interviene proprio in quel vuoto: risponde subito, in qualsiasi orario, capisce cosa cerca la persona e la qualifica con poche domande mirate — budget indicativo, tipo di richiesta, tempistiche.',
          'Se il contatto è valido, lo porta a un appuntamento sul calendario del titolare o del commerciale, con già in mano le informazioni utili per non ripartire da zero alla call. Se non lo è, lo filtra senza far perdere tempo a nessuno.',
        ],
      },
      {
        h2: 'Cosa NON fa (e perché è importante saperlo)',
        paragraphs: [
          'Non sostituisce la vendita vera, quella resta umana: soprattutto nel settore agroalimentare, dove la fiducia si costruisce raccontando il territorio, il metodo di produzione, la persona dietro il prodotto — cose che un agente AI non può replicare.',
          'Non decide al posto tuo e non tratta condizioni commerciali al posto tuo. Sostituisce il lavoro ripetitivo di filtro e primo contatto, che oggi o non viene fatto o viene fatto male perché manca tempo.',
        ],
      },
      {
        h2: 'Dove ha senso in un’azienda agroalimentare',
        paragraphs: [
          'Qualificazione dei contatti in ingresso da sito o campagne ads, quando i lead sono tanti e rispondere a tutti manualmente non è sostenibile.',
          'Prenotazioni e promemoria per una tasting room o una visita in cantina, con follow-up automatico dopo la visita invece di lasciare che l’interesse si raffreddi.',
          'Prima risposta su richieste ricorrenti (disponibilità prodotto, tempi di spedizione, prezzi indicativi), con passaggio a una persona reale quando la richiesta lo richiede davvero.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Wine Club Pro (case study concept, esempio illustrativo — lo trovi in portfolio) nasce da un problema simile applicato agli abbonamenti: iscrizioni e rinnovi gestiti a mano, senza un modo sistematico per capire le preferenze di ogni socio o intercettare chi stava per disdire.',
          'Il quiz AI integrato nel sistema qualifica ogni nuovo socio in pochi minuti — gusti, frequenza d’acquisto preferita — esattamente come un agente commerciale qualifica un lead prima ancora che qualcuno lo chiami.',
        ],
      },
      {
        h2: 'Come iniziare senza sostituire tutto in una volta',
        paragraphs: [
          'Il modo più sicuro di iniziare è scegliere un solo punto di ingresso dei contatti — il form del sito, per esempio — e automatizzare solo quello, misurando cosa cambia prima di allargare ad altri canali.',
          'Per una PMI il vantaggio è doppio: nessun lead resta senza risposta, e il commerciale (o il titolare) parla solo con chi è realmente interessato. Il risultato non è “più tecnologia”, è più appuntamenti utili.',
        ],
      },
    ],
  },
  {
    slug: 'shopify-velocita-conversioni',
    title: 'Perché la velocità del tuo Shopify vale più di un nuovo template',
    excerpt:
      'La differenza tra uno store che converte e uno che no spesso è nascosta nei millisecondi di caricamento.',
    date: '2026-01-08',
    updated: '2026-07-27',
    readingMinutes: 6,
    category: 'Shopify',
    keywords: ['velocità Shopify', 'Core Web Vitals e-commerce', 'ottimizzazione Shopify', 'conversione e-commerce'],
    relatedSlugs: ['ecommerce-vino-vendite-dirette', 'agente-ai-reparto-commerciale'],
    relatedLinks: [
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/servizi/restyling-ottimizzazione', label: 'Servizio: Restyling e ottimizzazione' },
      { href: '/portfolio/frantoi-san-lorenzo', label: 'Case study: Frantoi San Lorenzo' },
    ],
    body: [
      {
        h2: 'Il sintomo sbagliato: “il sito non vende, cambiamo grafica”',
        paragraphs: [
          'Quando un e-commerce non vende, il primo istinto è cambiare grafica. Nella maggior parte dei casi il problema è un altro: lo store è lento, e ogni secondo di attesa fa scappare clienti prima ancora che vedano il prodotto.',
          'Un restyling estetico su uno store lento è come ridipingere una vetrina con la saracinesca abbassata: migliora l’aspetto, ma non risolve perché nessuno entra.',
        ],
      },
      {
        h2: 'Perché la velocità pesa così tanto sulla conversione',
        paragraphs: [
          'Su mobile, dove arriva gran parte del traffico, un caricamento pesante significa carrelli abbandonati prima ancora di vedere il prodotto. È un dato noto da anni nel settore: la maggior parte delle visite da mobile viene abbandonata se la pagina impiega più di pochi secondi a caricare.',
          'Google misura questo con i Core Web Vitals: quanto velocemente appare il contenuto principale (LCP), quanto la pagina resta stabile mentre carica (CLS), quanto è reattiva ai primi click (INP). Non sono metriche astratte: sono la differenza tra un cliente che aspetta e uno che se ne va.',
        ],
      },
      {
        h2: 'Cosa rallenta davvero uno Shopify',
        paragraphs: [
          'Immagini prodotto non ottimizzate: foto da 5-10 MB caricate senza compressione né dimensionamento corretto sono la causa più comune, soprattutto per store con cataloghi fotografici curati (vino, olio, prodotti artigianali).',
          'App di terze parti installate e mai rimosse: ogni app aggiunge script che il browser deve caricare, anche se non viene più usata attivamente.',
          'Temi “gonfi”: molti temi Shopify premium includono funzionalità che non userai mai, ma che pesano comunque sul caricamento di ogni pagina.',
        ],
      },
      {
        h2: 'Come verificare se il tuo store è lento',
        paragraphs: [
          'Google PageSpeed Insights è gratuito e dà un punteggio concreto, oltre a indicare esattamente cosa rallenta la pagina (immagini, script, font). È il primo controllo da fare prima di decidere cosa cambiare.',
          'Se il punteggio mobile è sotto il 50, quasi certamente stai perdendo conversioni per questo motivo, non per il design.',
        ],
      },
      {
        h2: 'Cosa cambia per un e-commerce alimentare o vino',
        paragraphs: [
          'Il catalogo fotografico è spesso il punto più pesante: bottiglie, etichette, momenti di degustazione in alta definizione. Vanno serviti in formati moderni e dimensioni corrette, non come file originali della fotocamera.',
          'Un checkout lento pesa doppio quando il carrello include un wine club o un abbonamento ricorrente: più passaggi significano più occasioni per un caricamento lento di far desistere il cliente.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Prima si rende lo store veloce e chiaro, poi si pensa all’estetica: un sito bello che carica in cinque secondi vende meno di uno essenziale che carica in uno.',
          'La priorità pratica è quasi sempre la stessa: ottimizzare le immagini, rimuovere le app inutilizzate, e solo dopo valutare un intervento più profondo sul codice o sul tema.',
        ],
      },
    ],
  },
  {
    slug: 'seo-geo-farsi-trovare-ai',
    title: 'SEO e GEO: farsi trovare da Google e dalle risposte AI',
    excerpt:
      'Non basta più posizionarsi su Google. Oggi conta anche essere citati dagli assistenti AI. Ecco cosa cambia.',
    date: '2026-01-02',
    updated: '2026-07-27',
    readingMinutes: 7,
    category: 'SEO',
    keywords: ['SEO agroalimentare', 'GEO generative engine optimization', 'farsi trovare AI', 'content marketing PMI'],
    relatedSlugs: ['specialista-digitale-vs-web-agency-agroalimentare', 'ecommerce-vino-vendite-dirette'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/metodo/strategia-di-settore', label: 'Metodo: Strategia di settore' },
      { href: '/risorse', label: 'Risorse' },
    ],
    body: [
      {
        h2: 'Due modi di essere trovati, oggi',
        paragraphs: [
          'Per anni farsi trovare online ha significato una cosa sola: comparire tra i primi risultati di Google. Oggi le persone chiedono anche agli assistenti AI — Claude, ChatGPT, le risposte generate direttamente nei motori di ricerca — e quelle risposte pescano da fonti che questi sistemi considerano affidabili e ben strutturate.',
          'Non sono due mondi separati da presidiare con strategie diverse: sono due modi di leggere lo stesso contenuto. Chi scrive bene per l’uno, nella maggior parte dei casi funziona anche per l’altro.',
        ],
      },
      {
        h2: 'Cos’è la GEO e perché non sostituisce la SEO',
        paragraphs: [
          'La GEO (Generative Engine Optimization) è l’attività di rendere i tuoi contenuti comprensibili e citabili dai sistemi AI generativi. Non sostituisce la SEO classica: la estende, richiedendo la stessa cura sui fondamentali — struttura, chiarezza, autorevolezza — più un’attenzione in più a come un sistema AI “legge” e riassume il contenuto.',
          'In pratica, un contenuto ben scritto per Google (risposte dirette, struttura chiara in H2/H3, fonti verificabili) è quasi sempre anche un buon contenuto da citare per un assistente AI.',
        ],
      },
      {
        h2: 'Cosa cercano davvero Google e gli assistenti AI',
        paragraphs: [
          'Contenuti che rispondono a domande reali, non che girano intorno all’argomento per allungare il testo. Una domanda posta chiaramente, seguita da una risposta diretta nei primi righi del paragrafo, funziona meglio di un’introduzione lunga prima di arrivare al punto.',
          'Informazioni verificabili: numeri, esempi concreti, dichiarazioni oneste su cosa è dimostrato e cosa è stimato. Testi vaghi o pieni di affermazioni non verificabili non vengono premiati né da Google né dall’AI.',
        ],
      },
      {
        h2: 'Errori comuni che affossano entrambi',
        paragraphs: [
          'Keyword ripetute in modo innaturale: né Google né un modello linguistico ne hanno più bisogno per capire di cosa parla una pagina.',
          'Contenuto generico, uguale a decine di altri articoli sullo stesso argomento: non c’è motivo per essere scelto, né come risultato di ricerca né come fonte citata da un’AI.',
          'Nessuna struttura: un unico blocco di testo senza titoli intermedi è difficile da scansionare sia per un lettore che per un motore di ricerca.',
        ],
      },
      {
        h2: 'Cosa significa in pratica per una PMI agroalimentare',
        paragraphs: [
          'Scrivere contenuti specifici del proprio settore — non “come vendere online” in generale, ma “come vendere vino online”, “come far crescere le prenotazioni di un agriturismo” — batte quasi sempre un contenuto più generico, perché risponde a una domanda precisa con autorità reale.',
          'Anche la trasparenza aiuta: su questo stesso sito, i case study nel portfolio sono dichiarati esplicitamente come esempi illustrativi (concept), non clienti reali. Una fonte che dichiara chiaramente cosa è verificato e cosa no è, paradossalmente, più citabile di una che millanta risultati senza contesto.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Parti da poche keyword a bassa concorrenza ma alto intento — quelle che usa davvero chi sta per prendere una decisione, non i termini più generici e affollati.',
          'Scrivi in modo chiaro e struttura ogni articolo con titoli intermedi che rispondono a una domanda specifica. Il messaggio per una PMI è semplice: scrivere bene e in modo utile è un investimento di marketing, non un dettaglio. Chi spiega meglio, viene trovato di più — da Google e da chi chiede a un’AI.',
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-vino-vendite-dirette',
    title: 'Come un e-commerce può far crescere le vendite dirette di una cantina',
    excerpt:
      'Non basta mettere il catalogo online. Ecco cosa fa davvero la differenza tra un e-commerce vino che vende e uno che resta una vetrina.',
    date: '2026-07-24',
    readingMinutes: 8,
    category: 'Wine Tech',
    keywords: ['e-commerce vino', 'vendita diretta vino', 'wine shop online', 'Shopify cantina'],
    relatedSlugs: ['agenti-ai-processo-commerciale', 'shopify-velocita-conversioni'],
    relatedLinks: [
      { href: '/settori/wine-viticulture', label: 'Settore Wine & Viticulture' },
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/portfolio/frantoi-san-lorenzo', label: 'Case study: Frantoi San Lorenzo' },
    ],
    body: [
      {
        h2: 'Perché il canale diretto conta più della bella grafica',
        paragraphs: [
          'La maggior parte delle cantine che ci contatta ha già un sito. Il problema non è l’estetica: è che quel sito non vende, e la vendita continua a passare quasi interamente da distributori e importatori, con margini compressi e zero contatto diretto con chi beve davvero il vino.',
          'Un e-commerce non risolve questo da solo. Lo risolve se è costruito per essere un canale di vendita reale, non una brochure interattiva: gestione stock, spedizioni corrette per zona, checkout senza attrito, e un percorso che porta dal "guardare" al "comprare" senza intoppi.',
        ],
      },
      {
        h2: 'I tre ostacoli che fermano la maggior parte delle cantine',
        paragraphs: [
          'Il primo è la logistica: spedire vino costa e si rompe facilmente, e molte cantine non hanno mai definito zone, corrieri e costi in modo chiaro, così finiscono per non vendere online per paura di gestire male gli ordini.',
          'Il secondo è la fiducia: chi compra vino online vuole sapere cosa sta comprando — annata, note di degustazione, provenienza. Senza questo, il visitatore torna a comprare dal solito rivenditore fisico.',
          'Il terzo è la ricorrenza: una vendita spot vale meno di un cliente che torna. Senza un meccanismo che lo faccia tornare — un wine club, una newsletter utile, un follow-up dopo l’acquisto — ogni vendita resta isolata.',
        ],
      },
      {
        h2: 'Cosa serve davvero in un e-commerce vino (non solo "bello")',
        paragraphs: [
          'Un catalogo che comunica la qualità, non solo il prezzo: foto professionali, note di degustazione, storytelling del territorio.',
          'Spedizioni configurate correttamente per zona e tipo di prodotto, con costi chiari già nel carrello, non scoperti al checkout.',
          'Un meccanismo di ricorrenza — tipicamente un wine club in abbonamento — che trasforma un acquisto isolato in una relazione continuativa.',
          'Tracciabilità di lotto, quando ha senso per il posizionamento del brand: comunica trasparenza e autenticità, elementi che pesano nella decisione d’acquisto.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Nel case study concept di Tenuta Monteverdi (esempio illustrativo, non un cliente reale — lo trovi in portfolio) il problema di partenza era esattamente questo: sito statico, zero e-commerce, prenotazioni gestite solo per telefono. La cantina perdeva vendite dirette senza nemmeno vederlo, perché non aveva un canale per intercettarle.',
          'La soluzione ha unito e-commerce Shopify, wine club ricorrente e tracciabilità di lotto — non funzionalità isolate, ma un sistema pensato per portare il visitatore dalla prima visita all’acquisto ricorrente.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve costruire tutto insieme. Il punto di partenza più sicuro è capire dove si sta perdendo valore oggi: distribuzione troppo dipendente da terzi, zero dati sui clienti, o semplicemente nessun modo per chi visita la cantina di comprare più tardi, da casa.',
          'Da lì si costruisce un e-commerce che risponde a quel problema specifico, non un catalogo generico.',
        ],
      },
    ],
  },
  {
    slug: 'agenti-ai-processo-commerciale',
    title: 'Agenti AI: automatizzare il processo commerciale senza perdere il controllo',
    excerpt:
      'Cosa può fare davvero un agente AI in un’azienda agroalimentare, dove ha senso usarlo, e perché non significa sostituire le persone.',
    date: '2026-07-24',
    readingMinutes: 7,
    category: 'Agribusiness AI',
    keywords: ['automazione commerciale', 'agenti AI', 'automazione lead', 'AI agroalimentare'],
    relatedSlugs: ['ecommerce-vino-vendite-dirette', 'agente-ai-reparto-commerciale'],
    relatedLinks: [
      { href: '/servizi/software-ai-su-misura', label: 'Servizio: Software & agenti AI su misura' },
      { href: '/metodo/analisi-e-obiettivi', label: 'Metodo: Analisi e obiettivi' },
      { href: '/portfolio/tasting-flow', label: 'Case study: Tasting Flow' },
    ],
    body: [
      {
        h2: 'Cosa fa (e cosa non fa) un agente AI commerciale',
        paragraphs: [
          'Un agente AI ben progettato risponde subito a chi contatta l’azienda, raccoglie le informazioni giuste con poche domande, e — se il contatto è valido — lo porta a un appuntamento o a un acquisto. Non decide al posto tuo, non tratta con il cliente al posto tuo: filtra e prepara il terreno.',
          'Il rischio più comune è vederlo come un sostituto della relazione umana. Nel settore agroalimentare, dove la fiducia si costruisce anche raccontando il territorio e il lavoro dietro un prodotto, l’agente AI funziona meglio come primo filtro, non come unico interlocutore.',
        ],
      },
      {
        h2: 'Dove un agente AI ha senso in un’azienda agroalimentare',
        paragraphs: [
          'Prenotazioni e follow-up di una tasting room: conferma automatica, promemoria il giorno prima, e — dopo la visita — una proposta pertinente (wine club, prossimo acquisto), invece di un silenzio che spreca l’interesse appena creato.',
          'Gestione ordini e comunicazioni post-vendita per un e-commerce: tracking, richiesta di feedback, proposta di riacquisto quando ha senso, senza che qualcuno debba ricordarsi di farlo manualmente.',
          'Qualificazione dei contatti in ingresso, quando i lead sono tanti e il tempo per rispondere a tutti manualmente non c’è.',
        ],
      },
      {
        h2: 'Il rischio di automatizzare senza strategia',
        paragraphs: [
          'Automatizzare un processo confuso lo rende solo un processo confuso più veloce. Prima di costruire un agente AI ha senso capire cosa succede oggi, dove si perde tempo o si perdono contatti, e solo dopo decidere cosa automatizzare — è lo stesso principio alla base della fase di analisi del nostro metodo.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Tasting Flow (case study concept, esempio illustrativo — lo trovi in portfolio) è un software sviluppato per la gestione di una tasting room: prenotazioni automatiche, schede di degustazione digitali per il sommelier, upsell intelligente e follow-up automatico dopo la visita.',
          'Il punto non era "aggiungere AI": era risolvere un problema preciso, prenotazioni gestite a mano su un foglio di calcolo senza alcun follow-up post-visita.',
        ],
      },
      {
        h2: 'Come iniziare senza sostituire tutto in una volta',
        paragraphs: [
          'Il modo più sicuro di iniziare è scegliere un solo processo ripetitivo e ben definito — non "automatizzare il commerciale" in generale — e partire da lì. Si vede il risultato prima, e si capisce cosa funziona davvero per la propria azienda prima di allargare l’automazione ad altri processi.',
        ],
      },
    ],
  },
  {
    slug: 'specialista-digitale-vs-web-agency-agroalimentare',
    title: 'Perché una PMI agroalimentare ha bisogno di uno specialista, non di una web agency generica',
    excerpt:
      'La differenza tra un’agenzia che fa siti per tutti e un partner che conosce il tuo settore non è marketing: cambia le decisioni tecniche fin dal primo giorno.',
    date: '2026-07-24',
    readingMinutes: 6,
    category: 'Strategia',
    keywords: ['web agency agribusiness', 'specialista digitale vino', 'consulenza digitale agroalimentare'],
    relatedSlugs: ['ecommerce-vino-vendite-dirette', 'agenti-ai-processo-commerciale'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/chi-sono', label: 'Chi sono' },
      { href: '/settori', label: 'I tre settori' },
    ],
    body: [
      {
        h2: 'Il problema delle agenzie generaliste',
        paragraphs: [
          'Un’agenzia che realizza siti per ristoranti, studi legali e negozi di abbigliamento non è "sbagliata": è generica. Applica lo stesso processo a settori molto diversi, perché non ha altra scelta — non può conoscere davvero le esigenze specifiche di ognuno.',
          'Per un’azienda agroalimentare questo si traduce in scelte tecniche superficiali: un e-commerce vino trattato come un e-commerce qualsiasi, senza pensare a spedizioni, stagionalità, tracciabilità o wine club; un sito agriturismo che non integra booking reale, solo un form di contatto.',
        ],
      },
      {
        h2: 'Cosa cambia con uno specialista di settore',
        paragraphs: [
          'Conoscere il settore significa sapere in anticipo quali domande porsi: come gestisci le spedizioni oggi? Hai già un canale di vendita diretta o dipendi solo da distributori? Le prenotazioni della tasting room o dell’agriturismo sono già gestite da qualche parte, o solo a voce?',
          'Significa anche non riproporre le stesse funzionalità per tutti: un oleificio con vendita B2B ha esigenze diverse da un agriturismo con prenotazioni dirette, anche se entrambi vendono "prodotti agricoli online".',
        ],
      },
      {
        h2: 'Tre domande da farsi prima di scegliere',
        paragraphs: [
          'Chi mi propone il progetto ha già lavorato con aziende del mio settore, o sto per essere il loro primo esperimento?',
          'Il progetto parte da un’analisi del mio business reale, o da un pacchetto standard applicato a chiunque?',
          'Cosa succede dopo il lancio — resto solo con il sito, o c’è un rapporto continuativo su cui contare?',
        ],
      },
      {
        h2: 'Un esempio di cosa cambia in pratica',
        paragraphs: [
          'Nei case study concept in portfolio, ogni soluzione parte da un problema specifico del settore: Frantoi San Lorenzo doveva ridurre la dipendenza dai grossisti senza perdere volumi, Podere La Vite doveva far convivere booking, ristorazione e degustazioni in un’unica esperienza. Non sono varianti dello stesso template: sono progetti pensati a partire dal problema reale di ciascun settore.',
        ],
      },
      {
        h2: 'Come valutare chi ti propone il progetto',
        paragraphs: [
          'Non serve fidarsi di parole come "esperti del settore": basta chiedere esempi concreti, guardare se le domande che ti fanno nella prima call sono generiche o specifiche del tuo mondo, e verificare se il metodo di lavoro proposto parte da un’analisi reale o da un preventivo standard.',
        ],
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getSector(slug) {
  return sectors.find((s) => s.slug === slug);
}

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
    body: 'Sviluppiamo sito, e-commerce o software con codice pulito e performante, integrato con gli strumenti che già usi.',
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

// ---- HOME: numeri di apertura -------------------------------------------
// Solo cifre verificabili dal contenuto pubblico del sito: niente fatturati
// o rating inventati spacciati per dati reali.
export const heroStats = [
  ['3', 'Settori verticali'],
  ['6', 'Case study illustrativi'],
  ['5+', 'Anni di esperienza'],
  ['100%', 'Trasparenza sui risultati'],
];

// ---- HOME: numeri dai progetti illustrativi -----------------------------
// Ripresi direttamente dai case study in portfolio (tutti concept: true).
// Non sono KPI aggregati reali di MG Solutions: sono l'evidenza di cosa
// abbiamo progettato per ottenere quei risultati in un caso tipo.
export const referenceNumbers = [
  ['+40%', 'vendite dirette', 'Tenuta Monteverdi'],
  ['+200%', 'vendita diretta online', 'Frantoi San Lorenzo'],
  ['85%', 'retention wine club (M1→M12)', 'Wine Club Pro'],
  ['-15h/mese', 'lavoro amministrativo', 'Tasting Flow'],
];

// ---- HOME: il problema ---------------------------------------------------
export const problemPoints = [
  'Il sito vende poco, o non vende affatto.',
  'Non sai come mostrare al mondo la qualità di quello che produci.',
  'L’e-commerce è disorganizzato e i clienti si perdono nel percorso d’acquisto.',
  'Non riesci a farti trovare online: zero posizionamento sui motori di ricerca.',
  'La tecnologia sembra complicata e nessuno te la spiega in modo chiaro.',
  'Hai un sito, ma non genera lead né contatti diretti.',
];

// ---- HOME: per chi è / per chi non è -------------------------------------
export const forWho = [
  'Hai un’azienda agroalimentare o ricettiva già operativa',
  'Vuoi aumentare vendite dirette o lead qualificati',
  'Sei disposto a cambiare il modo in cui lavori oggi, se serve',
  'Cerchi un partner con cui parlare direttamente, non un fornitore anonimo',
  'Vedi l’AI e l’automazione come strumenti concreti, non come una moda',
];

export const notForWho = [
  'Stai ancora aprendo l’azienda: prima apri, poi ne parliamo volentieri',
  'Pensi che il sito da solo farà tutte le vendite, senza alcun tuo impegno',
  'Per te un sito bello conta più di un sito che converte',
  'Non vuoi investire nulla ma ti aspetti risultati professionali',
  'Preferisci un’agenzia anonima che non conosce il tuo settore',
];

// ---- HOME: testimonianze illustrative ------------------------------------
// Legate esplicitamente ai case study concept già dichiarati in portfolio:
// non sono recensioni reali, sono voci rappresentative degli stessi profili
// illustrativi, per rendere leggibile il tipo di risultato raccontato.
export const testimonials = [
  {
    name: 'Andrea',
    role: 'Titolare, Tenuta Monteverdi',
    sector: 'wine-viticulture',
    caseStudySlug: 'tenuta-monteverdi',
    quote:
      'L’e-commerce e il wine club ci hanno dato un canale diretto che prima non avevamo. Le degustazioni si prenotano da sole, il resto del tempo lo passiamo in vigna.',
    concept: true,
  },
  {
    name: 'Maria',
    role: 'Titolare, Frantoi San Lorenzo',
    sector: 'oleifici-food-tech',
    caseStudySlug: 'frantoi-san-lorenzo',
    quote:
      'Vendevamo quasi solo ai grossisti. Con il catalogo online e la tracciabilità di lotto abbiamo iniziato a parlare direttamente con chi compra il nostro olio.',
    concept: true,
  },
  {
    name: 'Luca',
    role: 'Titolare, Podere La Vite',
    sector: 'wine-hospitality-agriturismi',
    caseStudySlug: 'podere-la-vite',
    quote:
      'Il booking integrato con Booking.com e Airbnb ci ha tolto la gestione manuale delle prenotazioni. Vediamo più prenotazioni dirette a cena, con meno commissioni.',
    concept: true,
  },
  {
    name: 'Giulia',
    role: 'Fondatrice, Azienda Rossi',
    sector: 'wine-viticulture',
    caseStudySlug: 'azienda-rossi',
    quote:
      'Prima eravamo solo su Instagram e alle fiere. Con il club a membership abbiamo un flusso di ordini ricorrente che prima non esisteva, e i workshop si riempiono da soli.',
    concept: true,
  },
];

// ---- HOME: FAQ -----------------------------------------------------------
export const faqs = [
  {
    q: 'Quali settori servite esattamente?',
    a: 'Tre verticali: Wine & Viticulture, Oleifici & Food Tech, Wine Hospitality & Agriturismi. Non lavoriamo fuori da questi ambiti perché è ciò che conosciamo meglio.',
  },
  {
    q: 'Quanto costa sviluppare un sito per una cantina?',
    a: 'Non pubblichiamo un listino: il costo dipende da obiettivi, funzionalità e integrazioni necessarie. Ne parliamo apertamente nella prima call, prima di qualsiasi proposta.',
  },
  {
    q: 'In quanto tempo si vede il sito live?',
    a: 'Dipende dal progetto: un sito vetrina richiede settimane, un e-commerce o un software su misura richiedono più fasi (vedi il nostro metodo in 7 step). I tempi si definiscono dopo l’analisi iniziale.',
  },
  {
    q: 'Potete integrare il mio gestionale o CRM esistente?',
    a: 'Sì, le integrazioni con gli strumenti che già usi fanno parte dell’analisi iniziale: è uno dei fattori che definisce lo scope del progetto.',
  },
  {
    q: 'Gestite anche il marketing dopo il lancio?',
    a: 'Nel team abbiamo una figura dedicata a marketing e lead generation, oltre allo sviluppo. Ne parliamo caso per caso in base alle tue esigenze.',
  },
  {
    q: 'Come funziona l’AI software che proponete?',
    a: 'Sono automazioni configurate sul processo reale della tua azienda, non un SaaS pronto da attivare in autonomia: partono sempre da un’analisi del flusso di lavoro esistente.',
  },
  {
    q: 'Che tech stack usate?',
    a: 'Shopify e Shopify Plus per l’e-commerce, WordPress per siti a gestione contenuti semplice, Next.js/Node.js/PostgreSQL per software su misura. Scegliamo lo stack in base al progetto, non il contrario.',
  },
  {
    q: 'Offrite supporto dopo il lancio?',
    a: 'Sì: ogni soluzione attiva comporta una gestione continuativa (hosting, aggiornamenti, assistenza, evoluzione delle funzionalità), inclusa nel rapporto di lavoro.',
  },
  {
    q: 'Posso gestire da solo il sito una volta online?',
    a: 'Sì. Su Shopify e WordPress hai un pannello per aggiornare contenuti e catalogo in autonomia; per i software su misura includiamo una fase di formazione.',
  },
  {
    q: 'Lavorate con clienti fuori dall’Italia?',
    a: 'Siamo basati a Perugia e operiamo principalmente in Italia. Progetti da remoto con clienti esteri sono possibili se lingua e fuso orario sono compatibili: parliamone in call.',
  },
];

// ---- PAGINE SETTORE: "perché MG" (condiviso, stessa struttura sulle 3 pagine) --
export const whyMG = [
  {
    title: 'Specializzazione',
    generic: 'Fa siti per tutto — ristoranti, e-commerce generico, blog.',
    mg: 'Lavoriamo solo su agribusiness e hospitality rurale. Conosciamo il settore, non solo il codice.',
  },
  {
    title: 'Tecnologia',
    generic: 'Template WordPress e plugin generici.',
    mg: 'Next.js, Shopify su misura, automazioni AI configurate sul processo reale.',
  },
  {
    title: 'Risultato, non estetica',
    generic: 'L’obiettivo è consegnare un sito bello.',
    mg: 'L’obiettivo è un sito che converte: lead, vendite dirette, fiducia misurabile.',
  },
  {
    title: 'Partnership reale',
    generic: '“Ecco il sito, il resto è affar tuo.”',
    mg: 'Restiamo al tuo fianco dopo il lancio: gestione, ottimizzazione, evoluzione.',
  },
  {
    title: 'Innovazione continua',
    generic: 'Stack tecnico fermo a dieci anni fa.',
    mg: 'AI, automazioni, SEO e GEO (ottimizzazione per le risposte degli assistenti AI).',
  },
];

// ---- PAGINE SETTORE: contenuto specifico per ciascuna delle 3 pagine ---------
// Numeri e testimonianze sono derivati dai case study concept già dichiarati in
// portfolio (stessa fonte, stesso disclaimer) — non sono aggregati reali di
// fatturato/rating di MG Solutions.
export const sectorPageContent = {
  'wine-viticulture': {
    ctaNoun: 'vino',
    heroTitle: 'Il tuo vino merita una vetrina digitale all’altezza.',
    heroSubtitle:
      'Le migliori cantine vendono più di come vendono. Racconta il territorio, i tempi della vigna, la qualità. Noi costruiamo la piattaforma.',
    targetIntro:
      'Sei un viticoltore, grande o piccolo, che sa che il vino online è il futuro. Vendi già a distributori, ma vuoi il canale diretto. Conosci i tuoi clienti, ma non sai come raggiungerli digitalmente.',
    targetBullets: [
      'Produci vino di qualità (DOC, biologico, naturale...)',
      'Hai una cantina visitabile con tasting room',
      'Vuoi vendite dirette online ma non sai da dove iniziare',
      'I tuoi clienti parlano di terroir, non solo di prezzo',
      'Non conosci Shopify, ma sei disposto a imparare',
    ],
    painPoints: [
      { problem: 'Il sito vende poco perché non racconta la storia', solution: 'Costruiamo una narrativa digitale che vende territorio e qualità, non solo il prodotto.' },
      { problem: 'Dipendi da distributori e importatori', solution: 'Costruiamo il canale diretto per ridurre gli intermediari e alzare i margini.' },
      { problem: 'Il wine club non decolla, la gestione è caotica', solution: 'Software di automazione per abbonamenti, spedizioni e comunicazione.' },
      { problem: 'Non riesci a far trovare il tuo vino online', solution: 'SEO locale e GEO: chi cerca “Chianti Classico Toscana” deve trovarti facilmente.' },
      { problem: 'Ricevi prenotazioni tasting ma la gestione è manuale', solution: 'Software di gestione tasting room con booking, reminder e follow-up automatico.' },
      { problem: 'Non sai chi compra il tuo vino, né perché', solution: 'Analytics e CRM per capire il cliente e personalizzare l’offerta.' },
    ],
    solutionCards: [
      { icon: 'book', title: 'Sito immersivo', body: 'Storytelling territoriale, gallery vigneti, storia della cantina, design premium. Il sito racconta una storia, non vende bottiglie generiche.' },
      { icon: 'cart', title: 'E-commerce Shopify', body: 'Shop integrato con gestione stock, spedizioni, pricing per zona, wine club ricorrente.' },
      { icon: 'glass', title: 'Software tasting room', body: 'Prenotazioni degustazioni, calendario automatico, reminder, upsell intelligente.' },
      { icon: 'target', title: 'Wine club automation', body: 'Abbonamenti ricorrenti, selezione guidata, spedizioni gestite, comunicazione personalizzata.' },
      { icon: 'label', title: 'Tracciabilità QR', body: 'Ogni bottiglia con codice QR: provenienza, annata, note di degustazione, autenticità certificata.' },
      { icon: 'pin', title: 'SEO locale & GEO', body: 'Posizionamento su keyword locali e ottimizzazione per le risposte degli assistenti AI.' },
    ],
    statNumbers: [
      ['+40%', 'vendite dirette', 'Tenuta Monteverdi'],
      ['200', 'wine club members', 'Tenuta Monteverdi'],
      ['80/mese', 'ordini online', 'Azienda Rossi'],
      ['6/anno', 'workshop sold out', 'Azienda Rossi'],
    ],
    caseStudySlugs: ['tenuta-monteverdi', 'azienda-rossi'],
    faqs: [
      { q: 'Quanto costa un sito e-commerce per una cantina?', a: 'Dipende da catalogo, integrazioni e funzionalità (wine club, tracciabilità...). Non pubblichiamo un listino: ne parliamo in call sulla base del tuo progetto reale.' },
      { q: 'Posso gestire il wine club da solo dopo il lancio?', a: 'Sì: il pannello di gestione resta tuo, con formazione inclusa. Se preferisci, possiamo occuparcene noi in modo continuativo.' },
      { q: 'Come funziona l’integrazione con Shopify?', a: 'Costruiamo lo store su Shopify (o Shopify Plus per volumi maggiori), personalizzato in Liquid per il tuo brand, con stock, spedizioni e wine club integrati.' },
      { q: 'Che ROI posso aspettarmi?', a: 'Non pubblichiamo percentuali garantite: dipende da catalogo, prezzo medio e distribuzione attuale. I case study in portfolio mostrano il tipo di risultato che progettiamo per ottenere.' },
      { q: 'Quanto tempo prima di vedere risultati?', a: 'Il sito va live in poche settimane; wine club e vendite ricorrenti richiedono qualche mese per stabilizzarsi, come per qualunque canale diretto nuovo.' },
      { q: 'Gestite anche il marketing dopo il lancio?', a: 'Nel team abbiamo una figura dedicata a marketing e lead generation: ne parliamo caso per caso in base alle tue esigenze.' },
    ],
  },
  'oleifici-food-tech': {
    ctaNoun: 'olio',
    heroTitle: 'Dal frantoio al mondo. La tua eccellenza merita di essere raccontata online.',
    heroSubtitle:
      'Un oleificio non è un negozio online. È un racconto di terra, tradizione ed eccellenza. Creiamo il canale diretto tra te e i tuoi clienti.',
    targetIntro:
      'Sei un produttore di olio EVO, con qualità certificata (DOP, biologico), che dipende da grossisti con margini bassi. Sai che il direct-to-consumer è il futuro, ma non sai come iniziare.',
    targetBullets: [
      'Produci olio EVO e/o altre eccellenze agroalimentari',
      'Dipendi oggi da distributori o marketplace generici',
      'Vuoi margini più alti vendendo direttamente',
      'La tracciabilità del prodotto è importante per te',
      'Cerchi un partner che capisca il tuo mondo, non un fornitore generico',
    ],
    painPoints: [
      { problem: 'Il catalogo cartaceo non raggiunge nessuno', solution: 'E-commerce Shopify con catalogo immersivo, foto professionali, storytelling di prodotto.' },
      { problem: 'Margini bassi dai grossisti, dipendenza totale', solution: 'Il direct-to-consumer online ti dà margini più alti e controllo sul cliente finale.' },
      { problem: 'La tracciabilità non è visibile al cliente', solution: 'QR code per bottiglia: racconta origine, raccolta, lotto e certificazioni.' },
      { problem: 'Vendi su marketplace generici con commissioni alte', solution: 'Piattaforma proprietaria su Shopify, senza commissione su ogni vendita.' },
      { problem: 'Non conosci i tuoi clienti diretti', solution: 'Database clienti, email marketing e programmi fedeltà per far ripetere l’acquisto.' },
      { problem: 'Il packaging non racconta nulla online', solution: 'Fotografia e storytelling che trasformano l’olio in un’esperienza, non solo un prodotto.' },
    ],
    solutionCards: [
      { icon: 'book', title: 'Catalogo immersivo', body: 'Storytelling di raccolta, frangitura e imbottigliamento: il catalogo racconta il processo, non solo il prezzo.' },
      { icon: 'cart', title: 'E-commerce Shopify', body: 'Store dedicato all’olio EVO, con abbonamento ricorrente e gestione spedizioni.' },
      { icon: 'label', title: 'Tracciabilità di lotto', body: 'QR code per bottiglia: provenienza, data di raccolta, certificazioni, lotto.' },
      { icon: 'target', title: 'Abbonamento olio ricorrente', body: 'Spedizioni programmate, comunicazione automatica, retention costruita nel tempo.' },
      { icon: 'gear', title: 'Integrazione marketplace', body: 'Collegamento con marketplace di settore, senza perdere il controllo del canale diretto.' },
      { icon: 'pin', title: 'SEO locale & GEO', body: 'Posizionamento su ricerche come “olio EVO Umbria” e ottimizzazione per le risposte AI.' },
    ],
    statNumbers: [
      ['+200%', 'vendita diretta online', 'Frantoi San Lorenzo'],
      ['300+', 'clienti regolari', 'Frantoi San Lorenzo'],
      ['€5.000/mese', 'fatturato da marketplace', 'Frantoi San Lorenzo'],
    ],
    caseStudySlugs: ['frantoi-san-lorenzo'],
    faqs: [
      { q: 'Come tracciare i lotti con QR code?', a: 'Ogni bottiglia riceve un codice univoco collegato a una pagina con data di raccolta, frangitura, certificazioni e lotto di produzione.' },
      { q: 'Quale piattaforma è meglio per vendere olio online?', a: 'Shopify (o Shopify Plus per volumi maggiori): gestisce bene abbonamenti ricorrenti, spedizioni e cataloghi con tracciabilità.' },
      { q: 'Posso integrare marketplace come Eataly?', a: 'Sì, dove l’integrazione è tecnicamente disponibile la colleghiamo al tuo store, mantenendo il canale diretto come priorità.' },
      { q: 'Come si calcolano i costi di spedizione per l’olio?', a: 'Dipende da peso, fragilità e zone servite: li definiamo insieme durante l’analisi iniziale, integrati nel checkout.' },
      { q: 'Che visibilità posso ottenere online?', a: 'Non promettiamo posizionamenti garantiti: lavoriamo su SEO locale e contenuti che aumentano nel tempo la possibilità di essere trovato e citato.' },
      { q: 'Offrite supporto dopo il lancio?', a: 'Sì: gestione continuativa di hosting, aggiornamenti e assistenza, come per ogni soluzione che attiviamo.' },
    ],
  },
  'wine-hospitality-agriturismi': {
    ctaNoun: 'agriturismo',
    heroTitle: 'Non solo prenotazioni. Esperienze digitali che trasformano visitatori in ospiti fedeli.',
    heroSubtitle:
      'Un agriturismo è un’esperienza, non solo una camera. La piattaforma digitale deve riflettere questa complessità: booking, gallery, storia, enoturismo, ristorazione.',
    targetIntro:
      'Sei un agriturista, proprietario di un wine hotel o ristorante rurale che offre esperienze (degustazioni, cene pairing, pernottamenti). Ricevi prenotazioni da Booking e Airbnb, ma vuoi il canale diretto e esperienze personalizzate.',
    targetBullets: [
      'Hai una struttura ricettiva con ristorazione o enoteca',
      'Ricevi prenotazioni ma gestisci tutto manualmente',
      'Vuoi offrire esperienze personalizzate (degustazioni, cene, tour)',
      'Le piattaforme di terzi prendono commissioni alte',
      'Vuoi controllare la customer experience al 100%',
    ],
    painPoints: [
      { problem: 'Booking.com e Airbnb prendono il 15-20% di commissioni', solution: 'Un booking engine personalizzato sul sito ti fa risparmiare su ogni prenotazione diretta.' },
      { problem: 'Gestisci prenotazioni con email e fogli Excel', solution: 'Software centralizzato: camere, cene, degustazioni e tour in un unico posto.' },
      { problem: 'L’esperienza inizia online ma poi scompare', solution: 'Piattaforma immersiva dove l’ospite vede la sua giornata prima ancora di arrivare.' },
      { problem: 'Non hai contatto diretto con chi prenota', solution: 'Automazioni WhatsApp per comunicazione pre, durante e post soggiorno.' },
      { problem: 'Le esperienze sono uguali per tutti gli ospiti', solution: 'Personalizzazione dell’offerta in base alle preferenze raccolte al booking.' },
      { problem: 'Dipendi da piattaforme di terzi', solution: 'Un canale diretto ti dà controllo su brand, prezzo e relazione con l’ospite.' },
    ],
    solutionCards: [
      { icon: 'book', title: 'Sito immersivo', body: 'Gallery di esperienze in sequenza (colazione, degustazione, cena, pernottamento) che raccontano il soggiorno prima che inizi.' },
      { icon: 'calendar', title: 'Booking engine personalizzato', body: 'Prenotazioni dirette integrate con Booking.com e Airbnb, senza gestione manuale.' },
      { icon: 'gear', title: 'Gestione camere, cene e tour', body: 'Un unico pannello per gestire disponibilità, servizi e prenotazioni extra.' },
      { icon: 'chat', title: 'Automazioni WhatsApp', body: 'Comunicazione automatica pre-arrivo, durante il soggiorno e follow-up post-partenza.' },
      { icon: 'target', title: 'Loyalty program', body: 'Programma fedeltà per far tornare gli ospiti abituali, con offerte dedicate.' },
      { icon: 'pin', title: 'SEO locale & GEO', body: 'Posizionamento per ricerche come “agriturismo Toscana” e ottimizzazione per le risposte AI.' },
    ],
    statNumbers: [
      ['+35%', 'occupazione camere', 'Podere La Vite'],
      ['+50%', 'prenotazioni cena dirette', 'Podere La Vite'],
      ['Top 5%', 'strutture su Booking.com', 'Podere La Vite'],
    ],
    caseStudySlugs: ['podere-la-vite'],
    faqs: [
      { q: 'Posso cancellare Booking.com se ho il mio booking engine?', a: 'Puoi ridurre la dipendenza, ma spesso ha senso mantenere le OTA come canale aggiuntivo mentre cresce quello diretto: lo valutiamo insieme.' },
      { q: 'Come gestire più servizi (camere, cene, tour) in un’unica piattaforma?', a: 'Costruiamo un pannello centralizzato dove ogni servizio ha la propria disponibilità, collegato al sito e al booking.' },
      { q: 'Qual è il costo della piattaforma di booking?', a: 'Dipende da funzionalità e integrazioni richieste (OTA, pagamenti, WhatsApp...). Non pubblichiamo un listino: ne parliamo in call.' },
      { q: 'Come automatizzare il contatto pre-soggiorno?', a: 'Con automazioni WhatsApp che inviano informazioni utili (arrivo, esperienze disponibili) senza intervento manuale.' },
      { q: 'Posso gestire il sito da solo dopo il lancio?', a: 'Sì, con formazione inclusa; se preferisci possiamo occuparci noi della gestione continuativa.' },
      { q: 'Offrite supporto dopo il lancio?', a: 'Sì: hosting, aggiornamenti e assistenza fanno parte della gestione continuativa di ogni soluzione attiva.' },
    ],
  },
};
