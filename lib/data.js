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

// ---- PIANI SOFTWARE (prodotti in vendita) --------------------------
export const softwareProducts = [
  {
    name: 'Agente Commerciale AI',
    pitch:
      'Un agente che fa il lavoro di primo contatto del reparto commerciale: intercetta i lead, li qualifica, risponde e fissa gli appuntamenti. Attivo 24/7.',
    monthly: 149,
    yearly: 1490,
    features: [
      'Qualifica automatica dei lead in entrata',
      'Risposte immediate su sito, WhatsApp ed email',
      'Prenotazione appuntamenti sul tuo calendario',
      'Report settimanale delle opportunità',
    ],
    highlight: true,
  },
  {
    name: 'Assistente Clienti AI',
    pitch:
      'Risponde alle domande dei clienti, gestisce richieste ricorrenti e passa a te solo i casi che contano. Riduce il carico del customer care.',
    monthly: 99,
    yearly: 990,
    features: [
      'Risposte su prodotti, ordini e spedizioni',
      'Base di conoscenza sempre aggiornata',
      'Passaggio all’operatore quando serve',
      'Integrazione con il tuo e-commerce',
    ],
    highlight: false,
  },
  {
    name: 'Software su misura',
    pitch:
      'Hai un processo specifico da automatizzare? Progettiamo e sviluppiamo il software su misura per la tua azienda. Prezzo su progetto.',
    monthly: null,
    yearly: null,
    features: [
      'Analisi del processo e definizione obiettivi',
      'Sviluppo dedicato alla tua azienda',
      'Integrazione con gli strumenti che già usi',
      'Supporto e evoluzione nel tempo',
    ],
    highlight: false,
  },
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
