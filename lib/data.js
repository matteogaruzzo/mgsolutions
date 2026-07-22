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
  // Sostituisci con il tuo link Calendly reale (es. https://calendly.com/tuonome/call)
  calendly: 'https://calendly.com/matteogaruzzo/call-conoscitiva',
  tagline: 'Sistemi digitali che portano più vendite, lead e fiducia.',
};

// ---- SERVIZI -------------------------------------------------------
export const services = [
  {
    tag: 'AI',
    title: 'Software & agenti AI su misura',
    body: 'Costruiamo software e agenti che lavorano al posto di un reparto: qualificano lead, rispondono ai clienti, gestiscono processi ripetitivi. Li progettiamo per la tua azienda e restano tuoi.',
  },
  {
    tag: 'SHOPIFY',
    title: 'E-commerce Shopify performanti',
    body: 'Store costruiti per vendere: schede prodotto, checkout e percorso d’acquisto ottimizzati. Focus su velocità, chiarezza e conversione, non solo estetica.',
  },
  {
    tag: 'WEB',
    title: 'Siti web che generano contatti',
    body: 'Siti pensati per far arrivare chiamate, messaggi e richieste di preventivo. Struttura, copy e call-to-action guidano il visitatore fino all’azione.',
  },
  {
    tag: 'RESTYLING',
    title: 'Restyling e ottimizzazione',
    body: 'Il tuo sito è vecchio o non converte? Lo rifacciamo o lo miglioriamo dove serve: grafica, contenuti, performance e SEO tecnica.',
  },
  {
    tag: 'INTEGRAZIONI',
    title: 'AI integration nei tuoi flussi',
    body: 'Colleghiamo l’intelligenza artificiale ai processi che già usi: preventivi, customer care, aggiornamento contenuti, automazioni operative.',
  },
  {
    tag: 'CONSULENZA',
    title: 'Consulenza strategica',
    body: 'Analizziamo il tuo progetto, individuiamo i punti critici e definiamo una roadmap concreta per crescere online. Niente fuffa, solo priorità chiare.',
  },
];

// ---- SETTORI -------------------------------------------------------
// slug = indirizzo pagina (/settori/vitivinicolo)
export const sectors = [
  {
    slug: 'vitivinicolo',
    name: 'Vitivinicolo',
    lead: 'Cantine, enoteche e aziende del vino.',
    intro:
      'Portiamo online il mondo del vino con siti che raccontano il territorio e store che vendono davvero: gestione stock, spedizioni, wine club e tracciabilità.',
    deliverables: [
      'Sito vetrina per cantina con storia, vigne e visite',
      'E-commerce vini su Shopify con gestione stock e spedizioni',
      'Wine club con ordini in abbonamento e area riservata',
      'Prenotazione degustazioni e visite in cantina',
    ],
    result: 'Più vendite dirette, meno dipendenza dagli intermediari.',
  },
  {
    slug: 'ristorazione',
    name: 'Ristorazione',
    lead: 'Ristoranti, bistrot e attività locali.',
    intro:
      'Siti che trasformano chi cerca “dove mangiare” in prenotazioni reali. Menu digitale, prenotazione online e presenza locale ottimizzata.',
    deliverables: [
      'Sito con menu digitale sempre aggiornato',
      'Sistema di prenotazione online integrato',
      'Ottimizzazione per ricerche locali (Google)',
      'Gallery e recensioni che costruiscono fiducia',
    ],
    result: 'Più coperti prenotati direttamente, senza commissioni.',
  },
  {
    slug: 'servizi-professionali',
    name: 'Servizi professionali',
    lead: 'Studi, professionisti e consulenti.',
    intro:
      'Per chi vende competenza e fiducia. Costruiamo autorevolezza online e un percorso chiaro che porta il visitatore a contattarti.',
    deliverables: [
      'Sito che comunica competenza e affidabilità',
      'Percorso guidato dal problema alla richiesta di contatto',
      'Contenuti e SEO per farti trovare da chi ti cerca',
      'Automazioni per gestire i primi contatti',
    ],
    result: 'Contatti più qualificati e meno tempo perso.',
  },
  {
    slug: 'retail-pmi',
    name: 'Retail & PMI',
    lead: 'Negozi e piccole-medie imprese.',
    intro:
      'Dall’insegna fisica alla vendita online. Uniamo e-commerce, automazioni e AI per far crescere il fatturato senza aumentare il carico di lavoro.',
    deliverables: [
      'E-commerce completo con catalogo e pagamenti',
      'Automazioni per ordini, magazzino e post-vendita',
      'Agenti AI per supporto clienti H24',
      'Integrazione con gestionali e strumenti esistenti',
    ],
    result: 'Un canale di vendita in più che lavora anche di notte.',
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
    pitch:
      'Il primo contatto commerciale gestito da un agente che non dorme mai: intercetta, qualifica, informa e fissa l’appuntamento.',
    scope: [
      'Acquisizione e qualificazione dei lead',
      'Risposte iniziali',
      'Raccolta informazioni',
      'Prenotazione call',
      'Follow-up automatici',
    ],
    pricing: null,
  },
  {
    slug: 'assistente-clienti-knowledge-base',
    name: 'Assistente Clienti e Knowledge Base',
    pitch:
      'Un assistente che risponde usando solo i documenti reali dell’azienda, e passa a una persona quando serve davvero.',
    scope: [
      'Customer care',
      'Risposte su prodotti e servizi',
      'Utilizzo di documenti aziendali',
      'FAQ',
      'Passaggio a un operatore umano',
    ],
    pricing: null,
  },
  {
    slug: 'automazione-preventivi-processi',
    name: 'Automazione Preventivi e Processi',
    pitch:
      'Da una richiesta in entrata a un documento pronto da approvare, con i passaggi e le integrazioni che servono davvero.',
    scope: [
      'Raccolta dati',
      'Generazione assistita di preventivi',
      'Documenti',
      'Notifiche',
      'Passaggi approvativi',
      'Integrazioni con CRM o gestionali',
    ],
    pricing: null,
  },
  {
    slug: 'reputation-customer-follow-up',
    name: 'Reputation e Customer Follow-up',
    pitch:
      'Quello che succede dopo la vendita: recensioni, feedback, segmentazione e riattivazione dei contatti che si sono raffreddati.',
    scope: [
      'Richieste di recensione',
      'Raccolta feedback',
      'Follow-up post-acquisto',
      'Segmentazione dei clienti',
      'Riattivazione dei contatti',
    ],
    pricing: null,
  },
];

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

// ---- PORTFOLIO -----------------------------------------------------
export const projects = [
  {
    title: 'VYNT',
    kind: 'E-commerce Shopify · Branding · UX/UI',
    body: 'Concept di brand wellness sviluppato end-to-end: identità visiva, UX e store Shopify con personalizzazioni in codice e ottimizzazione performance.',
    tags: ['Shopify', 'Liquid', 'UX/UI', 'SEO'],
    concept: true,
  },
  {
    title: 'COREX',
    kind: 'Brand identity · Web design · Sviluppo',
    body: 'Marchio e intera esperienza digitale per un contesto enterprise: dal linguaggio visivo alle interfacce fino allo sviluppo del sito.',
    tags: ['Design System', 'HTML/CSS/JS', 'Web'],
    concept: true,
  },
  {
    title: 'Il Ristorantino della Carne',
    kind: 'WordPress · Sistema di prenotazione',
    body: 'Identità, esperienza utente e sito in WordPress con sistema di prenotazione online personalizzato per il ristorante.',
    tags: ['WordPress', 'Booking', 'PHP', 'Brand'],
    concept: false,
  },
  {
    title: 'GO Clean',
    kind: 'Web · App mobile · API',
    body: 'Brand ed esperienza digitale completa: sito web e app mobile con integrazioni API per collegare interfacce, dati e funzionalità.',
    tags: ['Mobile App', 'API', 'UX/UI', 'Sviluppo'],
    concept: true,
  },
];

// ---- TEAM ----------------------------------------------------------
export const team = [
  {
    name: 'Matteo Garuzzo',
    role: 'Web Designer & Sviluppatore',
    body: 'Progetta e sviluppa siti ed e-commerce su misura, con focus su Shopify. Cura UX/UI, performance e integrazioni.',
  },
  {
    name: 'Matteo De Pilla',
    role: 'AI Specialist',
    body: 'Integra strumenti AI nei processi digitali per rendere i progetti più rapidi, automatizzati e intelligenti.',
  },
  {
    name: 'Alessandro Poponi',
    role: 'Marketing & Lead Generation',
    body: 'Cerca opportunità commerciali, analizza mercati e costruisce contatti qualificati per la crescita dei progetti.',
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
    readingMinutes: 6,
    category: 'AI',
    body: [
      'La maggior parte delle aziende perde lead non perché il prodotto sia debole, ma perché nessuno risponde in tempo. Un contatto che arriva alle 21 e riceve risposta due giorni dopo è, nella pratica, un contatto perso.',
      'Un agente AI commerciale interviene proprio qui: risponde subito, capisce cosa cerca la persona, la qualifica con poche domande e, se è un contatto valido, fissa un appuntamento sul calendario del titolare.',
      'Non sostituisce la vendita vera, quella resta umana. Sostituisce il lavoro ripetitivo di filtro e primo contatto, che oggi o non viene fatto o viene fatto male perché manca tempo.',
      'Per una PMI il vantaggio è doppio: nessun lead resta senza risposta e il commerciale (o il titolare) parla solo con chi è realmente interessato. Il risultato non è “più tecnologia”, è più appuntamenti utili.',
    ],
  },
  {
    slug: 'shopify-velocita-conversioni',
    title: 'Perché la velocità del tuo Shopify vale più di un nuovo template',
    excerpt:
      'La differenza tra uno store che converte e uno che no spesso è nascosta nei millisecondi di caricamento.',
    date: '2026-01-08',
    readingMinutes: 5,
    category: 'Shopify',
    body: [
      'Quando un e-commerce non vende, il primo istinto è cambiare grafica. Nella maggior parte dei casi il problema è un altro: lo store è lento, e ogni secondo di attesa fa scappare clienti.',
      'Su mobile, dove arriva gran parte del traffico, un caricamento pesante significa carrelli abbandonati prima ancora di vedere il prodotto. Nessun template risolve questo da solo.',
      'Ottimizzare uno Shopify significa lavorare su immagini, codice, app inutili e struttura delle pagine. È meno visibile di un restyling, ma incide molto di più sul fatturato.',
      'La regola pratica: prima si rende lo store veloce e chiaro, poi si pensa all’estetica. Un sito bello che carica in cinque secondi vende meno di uno essenziale che carica in uno.',
    ],
  },
  {
    slug: 'seo-geo-farsi-trovare-ai',
    title: 'SEO e GEO: farsi trovare da Google e dalle risposte AI',
    excerpt:
      'Non basta più posizionarsi su Google. Oggi conta anche essere citati dagli assistenti AI. Ecco cosa cambia.',
    date: '2026-01-02',
    readingMinutes: 7,
    category: 'SEO',
    body: [
      'Per anni farsi trovare online ha significato una cosa: comparire tra i primi risultati di Google. Oggi le persone chiedono anche agli assistenti AI, e quelle risposte pescano da fonti che considerano affidabili.',
      'La GEO (Generative Engine Optimization) è l’attività di rendere i tuoi contenuti comprensibili e citabili da questi sistemi. Non sostituisce la SEO classica: la estende.',
      'In pratica servono contenuti chiari, ben strutturati, che rispondano a domande reali con informazioni verificabili. Testi confusi o pieni di parole vuote non vengono premiati né da Google né dall’AI.',
      'Per una PMI il messaggio è semplice: scrivere bene e in modo utile è diventato un investimento di marketing, non un dettaglio. Chi spiega meglio, viene trovato di più.',
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getSector(slug) {
  return sectors.find((s) => s.slug === slug);
}
