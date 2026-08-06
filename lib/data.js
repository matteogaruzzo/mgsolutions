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

// ---- PREZZI SERVIZI --------------------------------------------------
// Dichiarati prima di `servizi` perché i campi `investment` di alcune
// voci li leggono direttamente (niente numeri duplicati a mano).
// I primi 3 mesi di assistenza sono inclusi nel progetto; dal 4° mese è
// un canone opzionale (il cliente è formato per gestirsi da solo, se preferisce).
export const siteDevPricing = {
  from: 2400,
  typicalRange: '3.000-4.500€',
};

export const webCare = {
  name: 'MG Web Care',
  price: 80,
  includedMonths: 3,
};

// Canone più alto di quello dei siti vetrina: un ecommerce ha più
// superficie da monitorare (catalogo, checkout, pagamenti, spedizioni).
export const ecommerceDevPricing = {
  from: 3900,
  typicalRange: '4.500-7.500€',
};

export const ecommerceWebCare = {
  name: 'MG Web Care Ecommerce',
  price: 110,
  includedMonths: 3,
};

// Restyling: un solo intervento, non piani separati. Solo una tantum,
// nessun canone incluso.
export const restylingPricing = {
  from: 900,
  typicalRange: '1.200-2.500€',
};

export const consulenzaPricing = {
  from: 490,
  typicalRange: '490-1.200€',
};

export const wineClubPricing = {
  from: 2500,
  typicalRange: '2.500-4.000€',
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
    seoTitle: 'Software e Agenti AI su Misura per Aziende',
    seoDescription:
      'Costruiamo software e agenti AI che qualificano lead, rispondono ai clienti e gestiscono processi ripetitivi. Progettati per la tua azienda, restano tuoi.',
    heroImage: '/images/servizi/software-ai-su-misura-hero.jpg',
    body: 'Costruiamo software e agenti che lavorano al posto di un reparto: qualificano lead, rispondono ai clienti, gestiscono processi ripetitivi. Li progettiamo per la tua azienda e restano tuoi.',
    resultNote: 'Meno lavoro manuale ripetitivo, risposta ai clienti anche fuori orario.',
    whatIsIt:
      'Un software custom non è "codice che fa una cosa": è una macchina che lavora dentro il tuo business, senza stancarsi e senza errori di distrazione. Qualifica lead, gestisce prenotazioni, manda comunicazioni intelligenti, e ti lascia il tempo per la strategia.',
    whatIsItMore: [
      'Non partiamo da un template: analizziamo il processo reale della tua azienda, decidiamo insieme cosa deve fare l’agente e lo costruiamo attorno a quello. Il software resta tuo al 100%, senza vincoli a piattaforme di terzi o canoni nascosti legati a un fornitore esterno.',
      'Il progetto passa sempre da un ambiente di staging che puoi provare prima del rilascio finale, e resta documentato quanto basta per essere gestito anche senza di noi, se un giorno lo desideri. Nulla è una scatola nera: sai sempre cosa succede dentro, con che tecnologie e con che logica.',
    ],
    quickFacts: [
      { label: 'Tempo di sviluppo tipico', value: '4-10 settimane' },
      { label: 'Proprietà del codice', value: '100% tua' },
      { label: 'Frontend', value: 'Next.js, React, TypeScript, Tailwind' },
      { label: 'Backend & dati', value: 'Node.js, PostgreSQL/MySQL' },
      { label: 'Intelligenza artificiale', value: 'OpenAI, Anthropic, Gemini (RAG, tool calling)' },
      { label: 'Hosting & infrastruttura', value: 'Vercel, Cloudflare, GitHub' },
    ],
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
      'Frontend: Next.js, React, TypeScript, Tailwind',
      'Backend & dati: Node.js, PostgreSQL/MySQL',
      'AI: OpenAI, Anthropic, Gemini — RAG e tool calling',
      'Infrastruttura: Vercel, Cloudflare, GitHub',
      'Integrazioni: pagamenti, email transazionali, WhatsApp Business API, calendario',
      'Monitoraggio, backup e documentazione per la gestione autonoma',
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
    seoTitle: 'E-commerce Shopify per Vendite Dirette',
    seoDescription:
      'E-commerce Shopify veloci che convertono: pagamenti sicuri, spedizioni automatizzate, gestione inventario. Aumenta le vendite dirette online.',
    heroImage: '/images/servizi/ecommerce-shopify-hero.jpg',
    body: 'Store costruiti per vendere: schede prodotto, checkout e percorso d’acquisto ottimizzati. Focus su velocità, chiarezza e conversione, non solo estetica.',
    resultNote: 'Un canale di vendita diretta che riduce la dipendenza da grossisti e distributori.',
    tesi: 'Vendere direttamente vale più che vendere di più.',
    problemBlock: {
      eyebrow: 'Ci risulta che vada più o meno così',
      paragraphs: [
        'Vendete già. Il punto è a chi resta il margine.',
        'Se vendete tramite intermediari o piattaforme, su ogni bottiglia c’è qualcuno che prende una parte. E soprattutto: il cliente è loro, non vostro. Non sapete chi è, non potete riscrivergli, non torna da voi ma da loro.',
        'Vendere diretto non è vendere di più. È tenere il margine e tenere il cliente.',
      ],
      image: '/images/servizi/ecommerce-shopify-problema.webp',
      imageAlt: 'Casse di vino pronte per la distribuzione all’ingrosso',
    },
    changeBlock: {
      heading: 'Cosa cambia con uno store costruito per il vostro settore',
      paragraphs: [
        'Chi vi trova online compra direttamente da voi: niente commissioni a un intermediario, e il contatto resta vostro per il riacquisto.',
        'Il catalogo racconta il prodotto — annata, varietà, provenienza — invece di trattarlo come una merce qualsiasi, e propone formati e bundle nel momento giusto, non come ripensamento a fine carrello.',
        'Chi abbandona il carrello riceve un promemoria automatico, e chi ha già comprato resta un contatto a cui potete riscrivere per la stagione successiva.',
      ],
      image: '/images/servizi/ecommerce-shopify-cambia.webp',
      imageAlt: 'Confezione regalo di vino pronta per la spedizione diretta',
    },
    includes: [
      { icon: 'cart', title: 'Catalogo e schede che raccontano', body: 'Non solo prezzo: varietà, provenienza, metodo di produzione.' },
      { icon: 'gift', title: 'Formati e bundle', body: 'Confezioni regalo, assortimenti, abbonamenti ricorrenti.' },
      { icon: 'compass', title: 'Spedizione Italia ed estero', body: 'Zone, corrieri e costi impostati per il vostro prodotto.' },
      { icon: 'lock', title: 'Pagamenti', body: 'Shopify Payments, carte, PayPal, Klarna dove serve.' },
      { icon: 'refresh', title: 'Recupero carrelli abbandonati', body: 'Promemoria automatico a chi si ferma prima di pagare.' },
      { icon: 'chat', title: 'Raccolta contatti per riacquisto', body: 'Chi compra una volta resta un contatto a cui riscrivere.' },
    ],
    howWeWork: [
      { n: '1', title: 'Analisi', duration: '1 settimana', body: 'Guardiamo lo store attuale (se c’è), il catalogo e come vendete oggi.' },
      { n: '2', title: 'Progetto', duration: '1-2 settimane', body: 'Struttura del catalogo e del percorso d’acquisto. Vedete il mockup prima dello sviluppo.' },
      { n: '3', title: 'Costruzione', duration: '3-5 settimane', body: 'Sviluppo dello store, catalogo, pagamenti e spedizioni. Avanzamento visibile ogni settimana.' },
      { n: '4', title: 'Lancio e dopo', duration: '3 mesi', body: 'Online, formazione al team, assistenza inclusa per sistemare ciò che i dati dicono.' },
    ],
    howWeWorkNote: 'In media: 6-9 settimane dal via al lancio.',
    comparisonTable: {
      competitorA: 'Web agency generalista',
      competitorB: 'Shopify fai-da-te (temi)',
      rows: [
        { label: 'Conosce il settore', mg: 'Solo questo', competitorA: 'No', competitorB: '—' },
        { label: 'Store curato', mg: 'Sì', competitorA: 'Sì', competitorB: 'Dipende' },
        { label: 'Abbonamenti / ricorrenza', mg: 'Sì', competitorA: 'A volte', competitorB: 'Con app di terzi' },
        { label: 'Spedizione multi-zona configurata', mg: 'Sì', competitorA: 'A volte', competitorB: 'Manuale' },
        { label: 'Chi vi risponde', mg: 'Chi lavora sul progetto', competitorA: 'Un account', competitorB: 'Nessuno' },
        { label: 'Dopo il lancio', mg: '3 mesi inclusi', competitorA: 'Progetto chiuso', competitorB: 'Da soli' },
      ],
      closingLine: 'La differenza non è tecnica. È che quando dite "wine club", "annata" o "DOP" non dobbiamo chiedere cosa significa.',
    },
    investment: {
      eyebrow: 'Prezzi pubblicati',
      heading: 'Quanto costa vendere online il vostro prodotto',
      subheading: 'Vendere diretto vale più che vendere di più.',
      offerName: 'E-commerce per vendita diretta',
      price: ecommerceDevPricing.from,
      typicalRange: ecommerceDevPricing.typicalRange,
      installment: 'oppure 3 rate senza interessi, anche legate alla vostra stagione',
      offerDescription: 'Uno store che tiene il margine e tiene il cliente.',
      benefits: [
        'Catalogo e schede che raccontano, non elencano',
        'Formati, bundle e listini differenziati B2B',
        'Spedizioni Italia ed estero configurate',
        'Recupero carrelli abbandonati attivo',
        'Contatti raccolti per farli tornare',
      ],
      reassurances: [
        'Rate anche stagionali, senza interessi',
        'Prezzi pubblicati: quello che leggete è quello che pagate',
        `${ecommerceWebCare.includedMonths} mesi di assistenza inclusi dopo il lancio`,
        'Tutto resta vostro',
      ],
      closing: 'Cifra precisa dopo una call di 20 minuti. Se non ha senso farlo, ve lo diciamo.',
    },
    faqs: [
      { q: 'Shopify o Shopify Plus: come si sceglie?', a: 'Dipende dal volume di vendite e dalla complessità delle integrazioni: lo valutiamo insieme in fase di analisi.' },
      { q: 'Potete migrare il mio store esistente?', a: 'Sì, valutiamo caso per caso cosa migrare e cosa ricostruire da zero per performance migliori.' },
      { q: 'Gestite anche il catalogo prodotti?', a: 'Impostiamo la struttura; l’aggiornamento quotidiano del catalogo resta tuo, con formazione inclusa.' },
      { q: 'Siete in tre. Riuscite a seguirci?', a: 'Proprio perché siamo in tre prendiamo pochi progetti alla volta. Chi vi risponde è chi lavora sul vostro store, non un account che gira la mail a qualcun altro.' },
      { q: 'Lavorate solo in Umbria?', a: 'Siamo a Perugia ma lavoriamo in tutta Italia. Per chi è entro due o tre ore veniamo di persona all’inizio e al lancio.' },
    ],
    relatedSlugs: ['restyling-ottimizzazione', 'software-ai-su-misura'],
  },
  {
    slug: 'siti-web-contatti',
    n: '03',
    tag: 'WEB',
    icon: 'web',
    title: 'Siti web che generano contatti',
    seoTitle: 'Siti Web per Cantine, Frantoi e Agriturismi',
    seoDescription:
      'Siti responsive, veloci e ottimizzati SEO per farsi trovare online. Progettati sul tuo settore, non su un template generico per PMI qualsiasi.',
    heroImage: '/images/servizi/siti-web-contatti-hero.jpg',
    body: 'Siti pensati per far arrivare chiamate, messaggi e richieste di preventivo. Struttura, copy e call-to-action guidano il visitatore fino all’azione.',
    resultNote: 'Più richieste di contatto e prenotazioni dirette, non solo visite passive.',
    tesi: 'Il sito non è una vetrina, è il canale che raccoglie richieste mentre dormite.',
    problemBlock: {
      eyebrow: 'Ci risulta che vada più o meno così',
      paragraphs: [
        'Qualcuno vi cerca. Vi trova, gli piacete, vuole prenotare una degustazione. Sono le nove di sera di una domenica.',
        'Sul sito c’è una mail. La scrive. Poi, mentre aspetta, apre un’altra scheda e prenota da qualcun altro che gli ha dato una conferma in trenta secondi.',
        'Voi quella mail la leggete lunedì mattina. E non saprete mai quante ne sono andate così.',
      ],
      image: '/images/servizi/siti-web-contatti-problema.webp',
      imageAlt: 'Vigneto al tramonto, l’ora in cui arrivano le richieste che si perdono',
    },
    changeBlock: {
      heading: 'Cosa cambia con un sito costruito per il vostro settore',
      paragraphs: [
        'Le richieste non passano più dalla mail. Chi vuole prenotare vede le date libere, sceglie, paga la caparra e riceve la conferma subito. Anche di domenica sera.',
        'Chi arriva sul sito capisce in pochi secondi cosa fate, cosa può comprare e cosa può prenotare — senza dover cercare.',
        'E chi compra una volta non sparisce: resta un contatto a cui potete scrivere quando esce l’annata nuova.',
      ],
      image: '/images/servizi/siti-web-contatti-cambia.webp',
      imageAlt: 'Degustazione prenotata comodamente in cantina',
    },
    includes: [
      { icon: 'web', title: 'Struttura e pagine', body: 'Progettate sul vostro percorso di vendita, non su un template.' },
      { icon: 'book', title: 'Contenuti e racconto', body: 'Testi, schede prodotto, la vostra storia. Scritti, non riempiti.' },
      { icon: 'calendar', title: 'Prenotazioni online', body: 'Calendario, pagamenti, promemoria automatici.' },
      { icon: 'compass', title: 'Trovabilità', body: 'SEO di base, Google Business, mappe, struttura leggibile dai motori.' },
      { icon: 'target', title: 'Formazione', body: 'Due ore col vostro team, più i video per rivederle.' },
      { icon: 'lock', title: 'Assistenza 3 mesi', body: 'Correzioni, modifiche, monitoraggio dopo il lancio.' },
    ],
    howWeWork: [
      { n: '1', title: 'Analisi', duration: '1 settimana', body: 'Guardiamo il sito attuale, i numeri, i competitor della zona. Vi diciamo cosa vi sta costando.' },
      { n: '2', title: 'Progetto', duration: '1-2 settimane', body: 'Struttura e contenuti. Vedete il mockup prima che si scriva una riga di codice.' },
      { n: '3', title: 'Costruzione', duration: '2-3 settimane', body: 'Sviluppo e contenuti. Vedete l’avanzamento ogni settimana.' },
      { n: '4', title: 'Lancio e dopo', duration: '3 mesi', body: 'Online, formazione al team, e restiamo a sistemare ciò che i dati dicono.' },
    ],
    howWeWorkNote: 'In media: 5-7 settimane dal via al lancio.',
    comparisonTable: {
      competitorA: 'Web agency generalista',
      competitorB: 'Fai da te (Wix, temi)',
      rows: [
        { label: 'Conosce il settore', mg: 'Solo questo', competitorA: 'No', competitorB: '—' },
        { label: 'Sito curato', mg: 'Sì', competitorA: 'Sì', competitorB: 'Dipende' },
        { label: 'Prenotazioni integrate', mg: 'Sì', competitorA: 'A volte', competitorB: 'No' },
        { label: 'Vendita diretta', mg: 'Sì', competitorA: 'A volte', competitorB: 'Base' },
        { label: 'Wine club / ricorrenza', mg: 'Sì', competitorA: 'No', competitorB: 'No' },
        { label: 'Chi vi risponde', mg: 'Chi lavora sul progetto', competitorA: 'Un account', competitorB: 'Nessuno' },
        { label: 'Dopo il lancio', mg: '3 mesi inclusi', competitorA: 'Progetto chiuso', competitorB: 'Da soli' },
      ],
      closingLine: 'La differenza non è tecnica. È che quando dite "wine club", "annata" o "DOP" non dobbiamo chiedere cosa significa.',
    },
    investment: {
      eyebrow: 'Prezzi pubblicati',
      heading: 'Quanto costa un sito per la vostra attività',
      subheading: 'Nessun listino nascosto, nessun "dipende" all’infinito.',
      offerName: 'Sito orientato alle richieste',
      price: siteDevPricing.from,
      typicalRange: siteDevPricing.typicalRange,
      installment: 'oppure 3 rate senza interessi, anche legate alla vostra stagione (vendemmia, raccolta, alta stagione)',
      offerDescription: 'Un sito che raccoglie richieste e prenotazioni anche quando siete in vigna, in frantoio o in accoglienza.',
      benefits: [
        'Progettato su misura, nessun template',
        'Prenotazioni e pagamenti online integrati',
        'Testi e schede prodotto scritti, non riempiti',
        'SEO tecnica e Google Business configurati',
        'Veloce da mobile, da dove arriva la maggior parte delle visite',
      ],
      reassurances: [
        'Rate anche stagionali, senza interessi',
        'Prezzi pubblicati: quello che leggete è quello che pagate',
        `${webCare.includedMonths} mesi di assistenza inclusi dopo il lancio`,
        'Dominio, codice e accessi restano vostri',
      ],
      closing: 'Cifra precisa dopo una call di 20 minuti. Se non ha senso farlo, ve lo diciamo.',
    },
    faqs: [
      { q: 'Abbiamo già un sito. Dobbiamo rifarlo da zero?', a: 'Spesso no. A volte conviene tenerlo e aggiungerci sopra quello che manca — prenotazioni, shop, raccolta contatti. Ve lo diciamo dopo averlo guardato, e se la risposta è "va bene così" ve la diciamo lo stesso.' },
      { q: 'Siete in tre. Riuscite a seguirci?', a: 'Proprio perché siamo in tre prendiamo pochi progetti alla volta. Chi vi risponde al telefono è chi lavora sul vostro sito, non un account che poi gira la mail a qualcun altro.' },
      { q: 'Quanto ci vuole?', a: '5-7 settimane per un sito. Se serve anche lo shop, 8-10.' },
      { q: 'Lavorate solo in Umbria?', a: 'Siamo a Perugia ma lavoriamo in tutta Italia. Per chi è entro due o tre ore veniamo di persona all’inizio e al lancio: su queste cose vedere i posti cambia il lavoro.' },
      { q: 'E dopo il lancio ci lasciate soli?', a: 'Tre mesi di assistenza sono inclusi. Vi formiamo perché possiate gestirlo da soli, e se poi volete continuare con noi si può.' },
    ],
    relatedSlugs: ['restyling-ottimizzazione', 'consulenza-strategica'],
  },
  {
    slug: 'restyling-ottimizzazione',
    n: '04',
    tag: 'RESTYLING',
    icon: 'refresh',
    title: 'Restyling e ottimizzazione',
    seoTitle: 'Restyling e Ottimizzazione Siti Web',
    seoDescription:
      'Il tuo sito è lento o datato? Lo miglioriamo dove serve: design, velocità, SEO tecnica e conversioni. Da vetrina passiva a canale che vende.',
    heroImage: '/images/servizi/restyling-ottimizzazione-hero.jpg',
    body: 'Il tuo sito è vecchio o non converte? Lo rifacciamo o lo miglioriamo dove serve: grafica, contenuti, performance e SEO tecnica.',
    resultNote: 'Un sito più veloce, più chiaro, che riprende a produrre contatti o vendite.',
    tesi: 'Spesso non serve rifare, serve aggiungere il pezzo che manca.',
    problemBlock: {
      eyebrow: 'Ci risulta che vada più o meno così',
      paragraphs: [
        'Il vostro sito probabilmente non è il problema.',
        'Le web agency vi diranno di rifarlo. È normale: è quello che vendono.',
        'Ma nella maggior parte dei casi il sito che avete regge. Quello che manca è un pezzo sopra: le prenotazioni, lo shop, un modo per raccogliere i contatti di chi passa. Costa una frazione, si fa in poche settimane, e non buttate via quello che avete già pagato.',
        'Se invece rifarlo serve davvero, ve lo diciamo. Ma solo dopo averlo guardato.',
      ],
      image: '/images/servizi/restyling-ottimizzazione-problema.webp',
      imageAlt: 'Vecchio casale di campagna, come un sito da rinnovare',
    },
    changeBlock: {
      heading: 'Cosa cambia con un intervento mirato',
      paragraphs: [
        'L’audit vi dice con esattezza cosa tenere, cosa cambiare e cosa manca — non un rifacimento alla cieca.',
        'Il posizionamento SEO che avete già costruito resta intatto: redirect e struttura si gestiscono con attenzione, non si buttano via.',
        'Il sito riparte a produrre contatti o vendite senza che dobbiate rifare tutto da capo.',
      ],
      image: '/images/servizi/restyling-ottimizzazione-cambia.webp',
      imageAlt: 'Casale ristrutturato, l’intervento mirato che serviva',
    },
    includes: [
      { icon: 'compass', title: 'Audit del sito esistente', body: 'Cosa tenere, cosa cambiare, cosa manca.' },
      { icon: 'web', title: 'Restyling grafico', body: 'Coerente con il brand, non un template diverso.' },
      { icon: 'refresh', title: 'Velocità e performance', body: 'Core Web Vitals, immagini, caching.' },
      { icon: 'book', title: 'Contenuti e SEO', body: 'Aggiornamento struttura e testi dove serve.' },
      { icon: 'target', title: 'Percorso di conversione', body: 'Rivisto dove il sito perde richieste.' },
    ],
    howWeWork: [
      { n: '1', title: 'Analisi', duration: '3-5 giorni', body: 'Audit tecnico e di contenuto: cosa tenere, cosa cambiare, cosa manca.' },
      { n: '2', title: 'Progetto', duration: '3-5 giorni', body: 'Vi mostriamo cosa interverremmo e in che ordine, prima di toccare nulla.' },
      { n: '3', title: 'Intervento', duration: '1-3 settimane', body: 'Sviluppo dell’intervento concordato, con redirect gestiti per non perdere posizionamento.' },
      { n: '4', title: 'Lancio e dopo', duration: 'a richiesta', body: 'Online, e potete aggiungere l’assistenza continuativa se serve.' },
    ],
    howWeWorkNote: 'In media: 2-4 settimane dal via al lancio, a seconda dell’intervento.',
    comparisonTable: {
      competitorA: 'Rifare tutto con un’agenzia',
      competitorB: 'Lasciare com’è',
      rows: [
        { label: 'Conosce il settore', mg: 'Solo questo', competitorA: 'No', competitorB: '—' },
        { label: 'Mantiene il posizionamento SEO', mg: 'Sì', competitorA: 'A volte', competitorB: 'Sì, ma non migliora' },
        { label: 'Costo', mg: 'Proporzionato all’intervento', competitorA: 'Come un sito nuovo', competitorB: 'Zero, ma zero risultati nuovi' },
        { label: 'Tempi', mg: '2-4 settimane', competitorA: '2-4 mesi', competitorB: '—' },
        { label: 'Chi vi risponde', mg: 'Chi lavora sul progetto', competitorA: 'Un account', competitorB: 'Nessuno' },
      ],
      closingLine: 'La differenza non è tecnica. È che quando dite "wine club", "annata" o "DOP" non dobbiamo chiedere cosa significa.',
    },
    investment: {
      eyebrow: 'Prezzi pubblicati',
      heading: 'Quanto costa sistemare quello che avete già',
      subheading: 'Spesso non serve rifare. Serve aggiungere il pezzo che manca.',
      offerName: 'Intervento mirato',
      price: restylingPricing.from,
      typicalRange: restylingPricing.typicalRange,
      installment: null,
      offerDescription: 'Prenotazioni, shop o raccolta contatti aggiunti al sito che avete già.',
      benefits: [
        'Analisi di cosa vale la pena tenere',
        'Solo il pezzo che manca, non tutto da capo',
        '2-3 settimane invece di due mesi',
        'Non buttate quello che avete già pagato',
      ],
      reassurances: [
        'Prezzi pubblicati: quello che leggete è quello che pagate',
        'Redirect e SEO gestiti per non perdere posizionamento',
        `Potete aggiungere l’assistenza continuativa da ${webCare.price}€/mese dopo l’intervento`,
      ],
      closing: 'Se invece rifarlo conviene davvero, ve lo diciamo — anche se per noi è un lavoro più piccolo.',
    },
    faqs: [
      { q: 'Perdo il posizionamento SEO che ho già?', a: 'No, gestiamo redirect e struttura con attenzione per mantenere (o migliorare) il posizionamento esistente.' },
      { q: 'Devo rifare tutti i contenuti?', a: 'Solo dove serve: valutiamo insieme cosa conservare e cosa riscrivere in fase di audit.' },
      { q: 'Siete in tre. Riuscite a seguirci?', a: 'Proprio perché siamo in tre prendiamo pochi progetti alla volta. Chi vi risponde è chi lavora sul vostro sito, non un account che gira la mail a qualcun altro.' },
      { q: 'Quanto dura l’intervento?', a: 'Dalle 2 alle 4 settimane in media, a seconda che sia un intervento mirato o un restyling completo.' },
      { q: 'Lavorate solo in Umbria?', a: 'Siamo a Perugia ma lavoriamo in tutta Italia. Per chi è entro due o tre ore veniamo di persona dove serve.' },
    ],
    relatedSlugs: ['siti-web-contatti', 'ecommerce-shopify'],
  },
  {
    slug: 'ai-integration',
    n: '05',
    tag: 'INTEGRAZIONI',
    icon: 'integration',
    title: 'AI integration nei tuoi flussi',
    seoTitle: 'AI Integration nei Processi Agroalimentari',
    seoDescription:
      'Integriamo l’AI nei processi che già usi: preventivi, customer care, contenuti, automazioni operative. Meno lavoro manuale, più efficienza reale.',
    heroImage: '/images/servizi/ai-integration-hero.jpg',
    body: 'Colleghiamo l’intelligenza artificiale ai processi che già usi: preventivi, customer care, aggiornamento contenuti, automazioni operative.',
    resultNote: 'Strumenti che già usi, collegati tra loro, con meno lavoro manuale di travaso dati.',
    whatIsIt:
      'Se hai già sistemi e strumenti (email, gestionale, CRM, spedizioni), spesso il problema non è la mancanza di tecnologia ma la mancanza di collegamento tra i pezzi. Integriamo l’AI nei flussi esistenti invece di sostituirli tutti.',
    whatIsItMore: [
      'Lavoriamo con le API degli strumenti che già usi — email, gestionale, CRM, spedizioni — invece di proporre l’ennesima piattaforma da imparare. Dove un’integrazione diretta non esiste, valutiamo alternative prima di chiederti di cambiare strumento.',
      'I modelli AI (OpenAI, Anthropic o Gemini, a seconda del caso) entrano nel flusso solo dove servono davvero: un quiz, una raccomandazione, un filtro anti-abbandono. I dati restano centralizzati in un unico database, non sparsi tra automazioni scollegate tra loro.',
    ],
    quickFacts: [
      { label: 'Tempo di attivazione', value: '2-4 settimane per integrazione' },
      { label: 'Approccio', value: 'API REST — colleghiamo, non sostituiamo' },
      { label: 'Intelligenza artificiale', value: 'OpenAI, Anthropic, Gemini' },
      { label: 'Canali collegabili', value: 'Email, WhatsApp Business API, CRM, e-commerce' },
      { label: 'Dati', value: 'Centralizzati su database dedicato' },
    ],
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
      'Integrazioni via API REST con gli strumenti che già usi',
      'Automazioni email e messaggistica (WhatsApp Business API)',
      'Modelli AI: OpenAI, Anthropic, Gemini per raccomandazioni o quiz',
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
    seoTitle: 'Consulenza Strategica Digitale Agroalimentare',
    seoDescription:
      'Analizziamo il tuo progetto, individuiamo le priorità reali e definiamo una roadmap concreta. Il punto di partenza prima di scegliere la tecnologia.',
    heroImage: '/images/servizi/consulenza-strategica-hero.jpg',
    body: 'Analizziamo il tuo progetto, individuiamo i punti critici e definiamo una roadmap concreta per crescere online. Niente fuffa, solo priorità chiare.',
    resultNote: 'Priorità chiare su cosa fare per primo, e perché.',
    tesi: 'Prima di spendere, capire dove state perdendo.',
    problemBlock: {
      eyebrow: 'Ci risulta che vada più o meno così',
      paragraphs: [
        'Il problema non è quasi mai il sito.',
        'È che nessuno ha mai guardato i numeri insieme. Quante richieste arrivano e quante diventano clienti. Quanto vale un cliente nei due anni dopo il primo acquisto. Quale canale porta le persone che spendono di più.',
        'Senza questi numeri, qualsiasi cosa costruiate è una scommessa.',
      ],
      image: '/images/servizi/consulenza-strategica-problema.webp',
      imageAlt: 'Appunti e pianificazione in vigna, prima di decidere cosa costruire',
    },
    changeBlock: {
      heading: 'Cosa cambia con una direzione chiara',
      paragraphs: [
        'Sapete cosa fare prima e cosa dopo, non un elenco di funzionalità possibili senza un ordine.',
        'Ogni euro investito dopo la consulenza va dove serve davvero, non dove sembrava urgente.',
        'Se dopo l’analisi non ha senso procedere insieme, ve lo diciamo apertamente: la direzione resta vostra comunque.',
      ],
      image: '/images/servizi/consulenza-strategica-cambia.webp',
      imageAlt: 'Cassette di vendemmia ordinate, come le priorità dopo l’analisi',
    },
    includes: [
      { icon: 'compass', title: 'Analisi del sito e dei numeri attuali', body: 'Richieste, conversioni, dati che già avete.' },
      { icon: 'target', title: 'Analisi dei competitor della zona', body: 'Chi altro c’è, e cosa fa diversamente.' },
      { icon: 'chart', title: 'Dove si perde e quanto vale', body: 'Un quadro concreto, non intuizioni.' },
      { icon: 'refresh', title: 'Un piano con le priorità in ordine', body: 'Cosa fare prima, cosa dopo, e perché.' },
      { icon: 'book', title: 'Report scritto che resta vostro', body: 'Utile anche se poi decidete di non proseguire con noi.' },
    ],
    howWeWork: [
      { n: '1', title: 'Prima call', duration: 'gratuita', body: 'Ci raccontate il business, capiamo se ha senso procedere.' },
      { n: '2', title: 'Analisi', duration: 'mezza giornata da voi o due call', body: 'Guardiamo sito, numeri e concorrenza diretta.' },
      { n: '3', title: 'Documento con roadmap', duration: 'circa 1 settimana', body: 'Priorità ordinate, non un elenco di funzionalità.' },
      { n: '4', title: 'Decisione', duration: 'nessun vincolo', body: 'Se ha senso proseguire insieme lo facciamo; se no, la direzione resta vostra.' },
    ],
    howWeWorkNote: 'Formato: mezza giornata da voi o due call + documento finale.',
    comparisonTable: {
      competitorA: 'Nessuna consulenza (si decide a intuito)',
      competitorB: 'Consulente generalista',
      rows: [
        { label: 'Conosce il settore', mg: 'Solo questo', competitorA: '—', competitorB: 'No' },
        { label: 'Guarda i numeri reali', mg: 'Sì', competitorA: 'No', competitorB: 'A volte' },
        { label: 'Priorità ordinate, non funzionalità', mg: 'Sì', competitorA: '—', competitorB: 'A volte' },
        { label: 'Vi dice se non serve procedere', mg: 'Sì', competitorA: '—', competitorB: 'Raramente' },
        { label: 'Chi vi risponde', mg: 'Chi lavora sul progetto', competitorA: '—', competitorB: 'Un account' },
      ],
      closingLine: 'La differenza non è tecnica. È che quando dite "wine club", "annata" o "DOP" non dobbiamo chiedere cosa significa.',
    },
    investment: {
      eyebrow: 'Prezzi pubblicati',
      heading: 'Quanto costa capire dove state perdendo',
      subheading: 'Una direzione chiara, prima di spendere in tecnologia.',
      offerName: 'Consulenza strategica',
      price: consulenzaPricing.from,
      typicalRange: consulenzaPricing.typicalRange,
      installment: null,
      offerDescription: 'Analisi dei numeri reali e una roadmap di priorità, non un elenco di funzionalità.',
      benefits: [
        'Analisi del sito e dei numeri attuali',
        'Analisi dei competitor della zona',
        'Piano con le priorità in ordine',
        'Report scritto che resta vostro',
      ],
      reassurances: [
        'Prezzi pubblicati: quello che leggete è quello che pagate',
        'Scalata dal costo del progetto se poi decidete di proseguire',
        'Nessun vincolo a continuare insieme',
      ],
      closing: 'Cifra precisa dopo la prima call, gratuita e senza impegno.',
    },
    faqs: [
      { q: 'La consulenza è vincolante per poi lavorare insieme?', a: 'No. Ti diciamo con onestà se ha senso proseguire; se la risposta è no, hai comunque una direzione più chiara.' },
      { q: 'Quanto dura?', a: 'Dipende dalla complessità del progetto: lo definiamo nella prima chiamata conoscitiva.' },
      { q: 'Cosa ricevo alla fine?', a: 'Un quadro chiaro delle priorità e, se decidiamo di proseguire, i prossimi passi concreti del progetto.' },
      { q: 'Siete in tre. Riuscite a seguirci?', a: 'Proprio perché siamo in tre prendiamo pochi progetti alla volta. Chi vi risponde è chi lavora sul vostro caso, non un account che gira la mail a qualcun altro.' },
      { q: 'Lavorate solo in Umbria?', a: 'Siamo a Perugia ma lavoriamo in tutta Italia. Per chi è entro due o tre ore veniamo di persona dove serve.' },
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

// ---- SOFTWARE SU MISURA ----------------------------------------------
// MG Solutions non ha un prodotto SaaS pronto: progetta e sviluppa CRM e
// gestionali su misura per cantine, agriturismi e frantoi, partendo dalle
// esigenze reali di ciascuna azienda (vedi /software e le pagine di settore).

// ---- SOFTWARE AI SU MISURA ------------------------------------------
export const softwareCustom = {
  title: 'Software AI su misura',
  pitch:
    'Hai un processo specifico da automatizzare? Analizziamo il flusso reale della tua azienda e progettiamo il software che si adatta a te, non il contrario. Nessun prezzo fisso: dipende dal processo.',
  features: [
    'Analisi del processo e definizione degli obiettivi',
    'Sviluppo dedicato, integrato negli strumenti che già usi',
    'Nessun vincolo a un software preconfigurato',
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

// ---- AI INTEGRATION: PREZZO PER INTEGRAZIONE + SVILUPPO VARIABILE ----
export const aiIntegrationPricing = {
  perIntegration: 300,
  note: 'Una tantum per integrazione singola tra strumenti che già usi. Lo sviluppo di automazioni, quiz o modelli su misura si valuta a parte, in base al flusso reale.',
};

// ---- SOFTWARE AI SU MISURA: SVILUPPO + CANONE DI GESTIONE ------------
export const softwareCustomPricing = {
  devRange: '4.000-20.000€',
  monthlyRange: '149-599€',
  note: 'Una tantum di sviluppo iniziale più un canone mensile di gestione continuativa (hosting, modelli AI, monitoraggio, assistenza, evoluzione).',
};


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
    tagline: 'Un sito immersivo e un e-commerce che hanno portato la cantina toscana a vendere direttamente, senza intermediari, aumentando il margine per bottiglia.',
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
    tagline: 'Da presenza solo sui social a un e-commerce con membership ed eventi sold out: come una cantina biologica ha costruito un canale di vendita diretta.',
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
    tagline: 'Da catalogo cartaceo e dipendenza dai grossisti a un canale diretto in forte crescita, con un e-commerce pensato per la vendita B2B e B2C di olio DOP.',
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
    tagline: 'Da booking manuale via telefono a un motore di prenotazione integrato, con occupazione in crescita per un agriturismo toscano con 8 camere e ristorazione.',
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
    tagline: 'Il software su misura che organizza le degustazioni della tasting room di una cantina toscana, dal booking al follow-up automatico verso il wine club.',
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
    tagline: 'Il software che gestisce in automatico gli abbonamenti del wine club di una cantina: pagamenti ricorrenti, preferenze dei soci, spedizioni e retention.',
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
    seoTitle: 'Agente AI commerciale: può sostituire il primo contatto?',
    excerpt:
      'Cosa fa (e cosa non fa) un agente AI commerciale, e come una PMI può usarlo per non perdere più lead.',
    date: '2026-01-15',
    updated: '2026-07-27',
    readingMinutes: 7,
    category: 'AI',
    featuredImage: '/images/blog/agente-ai-reparto-commerciale.jpg',
    imageAlt: 'Dashboard di automazione AI per il reparto commerciale',
    tags: ['AI', 'Automazione', 'Vendite', 'CRM'],
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
          'La maggior parte delle aziende perde lead non perché il prodotto sia debole, ma perché **nessuno risponde in tempo**. Un contatto che arriva alle 21 e riceve risposta due giorni dopo è, nella pratica, un contatto perso: nel frattempo ha già scritto a un concorrente, o ha semplicemente perso interesse.',
          'Per una PMI questo problema è quasi strutturale: il titolare o il responsabile commerciale ha altro da fare durante il giorno, e i messaggi si accumulano fuori orario, nei weekend, durante le fiere.',
          '> Non è mancanza di volontà, è mancanza di ore.',
        ],
      },
      {
        h2: 'Cosa fa davvero un agente AI commerciale',
        paragraphs: [
          'Un agente AI commerciale interviene proprio in quel vuoto: **risponde subito, in qualsiasi orario**, capisce cosa cerca la persona e la qualifica con poche domande mirate — budget indicativo, tipo di richiesta, tempistiche.',
          'Se il contatto è valido, lo porta a un appuntamento sul calendario del titolare o del commerciale, con già in mano le informazioni utili per non ripartire da zero alla call. Se non lo è, *lo filtra senza far perdere tempo a nessuno*.',
        ],
      },
      {
        h2: 'Cosa NON fa (e perché è importante saperlo)',
        paragraphs: [
          '**Non sostituisce la vendita vera**, quella resta umana: soprattutto nel settore agroalimentare, dove la fiducia si costruisce raccontando il territorio, il metodo di produzione, la persona dietro il prodotto — cose che un agente AI non può replicare.',
          'Non decide al posto tuo e non tratta condizioni commerciali al posto tuo. **Sostituisce il lavoro ripetitivo di filtro e primo contatto**, che oggi o non viene fatto o viene fatto male perché manca tempo.',
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
    seoTitle: 'Velocità Shopify: perché conta più di un nuovo tema',
    excerpt:
      'La differenza tra uno store che converte e uno che no spesso è nascosta nei millisecondi di caricamento.',
    date: '2026-01-08',
    updated: '2026-07-27',
    readingMinutes: 6,
    category: 'Shopify',
    featuredImage: '/images/blog/shopify-velocita-conversioni.jpg',
    imageAlt: 'Checkout veloce di un e-commerce, velocita e conversioni online',
    tags: ['E-commerce', 'Shopify', 'Performance', 'Conversioni'],
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
          'Quando un e-commerce non vende, il primo istinto è cambiare grafica. Nella maggior parte dei casi il problema è un altro: **lo store è lento**, e ogni secondo di attesa fa scappare clienti prima ancora che vedano il prodotto.',
          '> Un restyling estetico su uno store lento è come ridipingere una vetrina con la saracinesca abbassata: migliora l’aspetto, ma non risolve perché nessuno entra.',
        ],
      },
      {
        h2: 'Perché la velocità pesa così tanto sulla conversione',
        paragraphs: [
          'Su mobile, dove arriva gran parte del traffico, un caricamento pesante significa **carrelli abbandonati prima ancora di vedere il prodotto**. È un dato noto da anni nel settore: la maggior parte delle visite da mobile viene abbandonata se la pagina impiega più di pochi secondi a caricare.',
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
          'Prima si rende lo store veloce e chiaro, poi si pensa all’estetica: **un sito bello che carica in cinque secondi vende meno di uno essenziale che carica in uno**.',
          'La priorità pratica è quasi sempre la stessa: ottimizzare le immagini, rimuovere le app inutilizzate, e solo dopo valutare un intervento più profondo sul codice o sul tema.',
        ],
      },
    ],
  },
  {
    slug: 'seo-geo-farsi-trovare-ai',
    title: 'SEO e GEO: farsi trovare da Google e dalle risposte AI',
    seoTitle: 'SEO e GEO: farsi trovare da Google e dall’AI',
    excerpt:
      'Non basta più posizionarsi su Google. Oggi conta anche essere citati dagli assistenti AI. Ecco cosa cambia.',
    date: '2026-01-02',
    updated: '2026-07-27',
    readingMinutes: 7,
    category: 'SEO',
    featuredImage: '/images/blog/seo-geo-farsi-trovare-ai.jpg',
    imageAlt: 'Mappa e ricerca locale, farsi trovare online nel proprio territorio',
    tags: ['SEO', 'GEO', 'Local Search', 'Marketing Digitale'],
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
          '> Non sono due mondi separati da presidiare con strategie diverse: sono due modi di leggere lo stesso contenuto.',
          'Chi scrive bene per l’uno, nella maggior parte dei casi funziona anche per l’altro.',
        ],
      },
      {
        h2: 'Cos’è la GEO e perché non sostituisce la SEO',
        paragraphs: [
          'La GEO (Generative Engine Optimization) è l’attività di rendere i tuoi contenuti comprensibili e citabili dai sistemi AI generativi. **Non sostituisce la SEO classica: la estende**, richiedendo la stessa cura sui fondamentali — struttura, chiarezza, autorevolezza — più un’attenzione in più a come un sistema AI “legge” e riassume il contenuto.',
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
          'Scrivi in modo chiaro e struttura ogni articolo con titoli intermedi che rispondono a una domanda specifica. Il messaggio per una PMI è semplice: **scrivere bene e in modo utile è un investimento di marketing, non un dettaglio**. Chi spiega meglio, viene trovato di più — da Google e da chi chiede a un’AI.',
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-vino-vendite-dirette',
    title: 'Come un e-commerce può far crescere le vendite dirette di una cantina',
    seoTitle: 'E-commerce vino: come scalare le vendite dirette della cantina',
    excerpt:
      'Non basta mettere il catalogo online. Ecco cosa fa davvero la differenza tra un e-commerce vino che vende e uno che resta una vetrina.',
    date: '2026-07-24',
    readingMinutes: 8,
    category: 'Wine Tech',
    featuredImage: '/images/blog/ecommerce-vino-vendite-dirette.jpg',
    imageAlt: 'Vendita diretta di vino online, e-commerce per cantine',
    tags: ['E-commerce', 'Vino', 'Wine Club', 'Vendita Diretta'],
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
          'La maggior parte delle cantine che ci contatta ha già un sito. Il problema non è l’estetica: **è che quel sito non vende**, e la vendita continua a passare quasi interamente da distributori e importatori, con margini compressi e zero contatto diretto con chi beve davvero il vino.',
          'Un e-commerce non risolve questo da solo. Lo risolve se è costruito per essere un canale di vendita reale, non una brochure interattiva: gestione stock, spedizioni corrette per zona, checkout senza attrito, e un percorso che porta dal "guardare" al "comprare" senza intoppi.',
        ],
      },
      {
        h2: 'I tre ostacoli che fermano la maggior parte delle cantine',
        paragraphs: [
          'Il primo è la logistica: spedire vino costa e si rompe facilmente, e molte cantine non hanno mai definito zone, corrieri e costi in modo chiaro, così finiscono per non vendere online per paura di gestire male gli ordini.',
          'Il secondo è la fiducia: chi compra vino online vuole sapere cosa sta comprando — annata, note di degustazione, provenienza. Senza questo, il visitatore torna a comprare dal solito rivenditore fisico.',
          'Il terzo è la ricorrenza: senza un meccanismo che lo faccia tornare — un wine club, una newsletter utile, un follow-up dopo l’acquisto — ogni vendita resta isolata.',
          '> Una vendita spot vale meno di un cliente che torna.',
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
          'Non serve costruire tutto insieme. **Il punto di partenza più sicuro è capire dove si sta perdendo valore oggi**: distribuzione troppo dipendente da terzi, zero dati sui clienti, o semplicemente nessun modo per chi visita la cantina di comprare più tardi, da casa.',
          'Da lì si costruisce un e-commerce che risponde a quel problema specifico, non un catalogo generico.',
        ],
      },
    ],
  },
  {
    slug: 'agenti-ai-processo-commerciale',
    title: 'Agenti AI: automatizzare il processo commerciale senza perdere il controllo',
    seoTitle: 'Agenti AI nel processo commerciale, senza perdere il controllo',
    excerpt:
      'Cosa può fare davvero un agente AI in un’azienda agroalimentare, dove ha senso usarlo, e perché non significa sostituire le persone.',
    date: '2026-07-24',
    readingMinutes: 7,
    category: 'Agribusiness AI',
    featuredImage: '/images/blog/agenti-ai-processo-commerciale.jpg',
    imageAlt: 'Flusso di automazione AI applicato ai processi aziendali',
    tags: ['AI', 'Automazione', 'Processi', 'Efficienza'],
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
          'Un agente AI ben progettato risponde subito a chi contatta l’azienda, raccoglie le informazioni giuste con poche domande, e — se il contatto è valido — lo porta a un appuntamento o a un acquisto. Non decide al posto tuo, non tratta con il cliente al posto tuo: **filtra e prepara il terreno**.',
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
          '> Automatizzare un processo confuso lo rende solo un processo confuso più veloce.',
          'Prima di costruire un agente AI ha senso capire cosa succede oggi, dove si perde tempo o si perdono contatti, e solo dopo decidere cosa automatizzare — è lo stesso principio alla base della fase di analisi del nostro metodo.',
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
          'Il modo più sicuro di iniziare è **scegliere un solo processo ripetitivo e ben definito** — non "automatizzare il commerciale" in generale — e partire da lì. Si vede il risultato prima, e si capisce cosa funziona davvero per la propria azienda prima di allargare l’automazione ad altri processi.',
        ],
      },
    ],
  },
  {
    slug: 'specialista-digitale-vs-web-agency-agroalimentare',
    title: 'Perché una PMI agroalimentare ha bisogno di uno specialista, non di una web agency generica',
    seoTitle: 'Specialista digitale o web agency generica: chi scegliere?',
    excerpt:
      'La differenza tra un’agenzia che fa siti per tutti e un partner che conosce il tuo settore non è marketing: cambia le decisioni tecniche fin dal primo giorno.',
    date: '2026-07-24',
    readingMinutes: 6,
    category: 'Strategia',
    featuredImage: '/images/blog/specialista-digitale-vs-web-agency-agroalimentare.jpg',
    imageAlt: 'Un team al lavoro su una lavagna con post-it, confronto tra specialista digitale e web agency',
    tags: ['Freelance', 'Web Agency', 'Strategia Digitale'],
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
          'Un’agenzia che realizza siti per ristoranti, studi legali e negozi di abbigliamento non è "sbagliata": **è generica**. Applica lo stesso processo a settori molto diversi, perché non ha altra scelta — non può conoscere davvero le esigenze specifiche di ognuno.',
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
          'Nei case study concept in portfolio, ogni soluzione parte da un problema specifico del settore: Frantoi San Lorenzo doveva ridurre la dipendenza dai grossisti senza perdere volumi, Podere La Vite doveva far convivere booking, ristorazione e degustazioni in un’unica esperienza.',
          '> Non sono varianti dello stesso template: sono progetti pensati a partire dal problema reale di ciascun settore.',
        ],
      },
      {
        h2: 'Come valutare chi ti propone il progetto',
        paragraphs: [
          'Non serve fidarsi di parole come "esperti del settore": **basta chiedere esempi concreti**, guardare se le domande che ti fanno nella prima call sono generiche o specifiche del tuo mondo, e verificare se il metodo di lavoro proposto parte da un’analisi reale o da un preventivo standard.',
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-vino-margini-vendita-diretta',
    title: 'E-commerce Vino: Come Calcolare i Margini Reali e Smettere di Dipendere dai Grossisti',
    seoTitle: 'E-commerce vino: margini reali e vendita diretta',
    excerpt:
      'Vendere tramite grossisti significa cedere gran parte del margine. Ecco come calcolare cosa guadagni davvero online, cosa serve per costruire un e-commerce che converte, e dove si nascondono i costi che nessuno ti dice.',
    date: '2026-08-01',
    readingMinutes: 9,
    category: 'E-commerce',
    featuredImage: '/images/blog/ecommerce-vino-margini-vendita-diretta.jpg',
    imageAlt: 'Bottiglie di vino imballate per la spedizione da un e-commerce di vendita diretta',
    tags: ['E-commerce', 'Vino', 'Pricing', 'Vendita Diretta'],
    keywords: ['e-commerce vino margini', 'vendita diretta vino online', 'bypassare grossisti vino', 'pricing e-commerce cantina', 'Shopify vino'],
    relatedSlugs: ['ecommerce-vino-vendite-dirette', 'wine-club-revenue-ricorrente-fedelta'],
    relatedLinks: [
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/settori/wine-viticulture', label: 'Settore Wine & Viticulture' },
      { href: '/portfolio/tenuta-monteverdi', label: 'Case study: Tenuta Monteverdi' },
    ],
    body: [
      {
        h2: 'Quanto vale davvero un canale grossisti (e quanto ne resta a te)',
        paragraphs: [
          'Vendere tramite grossisti e importatori è comodo: qualcun altro si occupa di trovare i clienti finali, gestire gli ordini, fare la logistica. Il prezzo di questa comodità è quasi sempre invisibile finché non lo si mette per iscritto: **ogni passaggio nella filiera — grossista, distributore, punto vendita — trattiene una parte del prezzo finale**, e chi produce resta con quello che avanza.',
          'Non è un problema del settore vino in sé: è una caratteristica di qualsiasi filiera con più intermediari. La differenza è che, con l’e-commerce, per la prima volta una cantina può vendere alla stessa persona che prima raggiungeva solo attraverso tre passaggi — e trattenere la parte di margine che prima finiva a qualcun altro.',
          'Molti produttori conoscono questo meccanismo in astratto, ma non lo hanno mai messo su un foglio di calcolo applicato alla propria etichetta più venduta. È un esercizio che richiede mezz’ora, e che quasi sempre cambia la percezione di cosa valga davvero investire in un canale diretto.',
          'Il punto non è demonizzare i grossisti: per molte cantine restano un canale insostituibile per volumi, mercati esteri o distribuzione capillare che un e-commerce da solo non potrà mai replicare. Il punto è **smettere di trattarli come l’unico canale possibile**, e iniziare a trattarli come uno dei canali disponibili, ciascuno con un proprio conto economico.',
          'Questo articolo non è un invito a chiudere i rapporti con distributori e importatori dall’oggi al domani: è una guida per capire, con numeri reali e non a sensazione, quanto vale davvero costruire un canale diretto accanto a quello esistente — e come farlo senza ripetere gli errori più comuni che vanificano il vantaggio di margine appena costruito.',
        ],
      },
      {
        h2: 'Cosa cambia nei margini quando vendi direttamente',
        paragraphs: [
          'Il calcolo corretto non è "prezzo di vendita meno costo di produzione": è **prezzo di vendita meno costo di produzione, meno i costi che nel canale grossisti erano nascosti dentro lo sconto all’ingrosso** (spedizione, packaging, gestione ordini, marketing) e che nell’e-commerce diretto tornano a carico tuo, ma anche a tuo controllo.',
          'La differenza reale non è un numero fisso uguale per tutte le cantine — dipende da prezzo medio bottiglia, volumi, e quanto costa davvero servire un ordine online. Quello che è vero quasi sempre: **il margine per bottiglia venduta direttamente è nettamente superiore** a quello di una bottiglia venduta a un grossista, anche dopo aver sottratto i costi di gestione dell’e-commerce.',
          '> Il vantaggio non è "vendere online invece che ai grossisti": è avere entrambi i canali, e sapere esattamente quanto vale ciascuno.',
          'C’è anche una differenza meno ovvia, ma altrettanto rilevante: nel canale grossisti, la cantina non sa quasi mai chi ha bevuto la propria bottiglia. Nel canale diretto, ogni ordine porta con sé un nome, un’email, uno storico d’acquisto. Quel dato non compare in nessun bilancio, ma è la base di ogni strategia di fidelizzazione futura — inclusi wine club, remarketing e nuove annate proposte a chi ha già comprato.',
        ],
      },
      {
        h2: 'Il calcolo che dovresti fare prima di iniziare',
        paragraphs: [
          'Prima di investire in un e-commerce, ha senso costruire un confronto onesto tra i due canali, riga per riga. Non serve un commercialista per farlo: serve mettere per iscritto, per la bottiglia che vendi di più, tutte le voci che oggi restano implicite.',
          'Per il canale grossisti: prezzo di cessione all’ingrosso, meno costo di produzione, meno eventuali costi di gestione commerciale (agenti, fiere, campionature). Quello che resta è il margine reale per bottiglia, ed è quasi sempre più basso di quanto si pensi a mente.',
          'Per il canale diretto: prezzo al consumatore finale, meno costo di produzione, meno spedizione, meno packaging protettivo, meno commissioni di pagamento, meno una stima ragionevole del tempo dedicato a gestire l’ordine (anche se non è un costo "in fattura", è un costo reale). Quello che resta è il margine diretto — e va confrontato con il primo, non con il prezzo di listino.',
          'Il numero che ne esce raramente è identico tra due cantine diverse, ma la direzione è quasi sempre la stessa: **il canale diretto lascia più margine per bottiglia**, a patto di avere i volumi e l’organizzazione per gestirlo senza che i costi nascosti lo erodano.',
        ],
      },
      {
        h2: 'Dove si nascondono i costi che nessuno calcola',
        paragraphs: [
          'Il primo costo sottovalutato è la spedizione del vino: pesante, fragile, sensibile alla temperatura. Chi non lo mette a budget fin dall’inizio scopre dopo pochi mesi che sta perdendo margine proprio lì, magari perché ha impostato una spedizione gratuita sopra una soglia troppo bassa, o perché non ha negoziato tariffe adeguate ai volumi con il corriere.',
          'Il secondo è il tempo di gestione: rispondere a domande, gestire resi, seguire spedizioni in ritardo. Senza automazione, questo tempo si mangia silenziosamente il vantaggio di margine che l’e-commerce dovrebbe portare — ed è un costo che non compare mai in un conto economico, ma si sente eccome a fine mese in termini di ore sottratte ad altro.',
          'Il terzo è il costo di acquisizione: portare un visitatore sul sito (ads, contenuti, SEO) ha un costo che va confrontato con il valore di quel cliente nel tempo, non solo con il primo ordine — è qui che un programma come un wine club cambia i conti a proprio favore, perché trasforma un costo di acquisizione una tantum in un investimento che si ripaga su più acquisti.',
          'Il quarto costo, spesso ignorato del tutto, è quello dei resi e dei sinistri di trasporto: bottiglie rotte, ritardi che portano a rimborsi, contestazioni. Un piano di packaging pensato per il vino (non un cartone riadattato) riduce sensibilmente questa voce, ma va messo a budget fin dall’inizio, non scoperto dopo il primo sinistro importante.',
        ],
      },
      {
        h2: 'Il ruolo del prezzo psicologico e del posizionamento online',
        paragraphs: [
          'Un errore comune è pensare che il prezzo online debba essere il più basso possibile per "battere" il grossista. In realtà il cliente che compra direttamente dal sito della cantina non sta confrontando il prezzo con quello del supermercato: sta valutando l’esperienza, la storia, la fiducia nel produttore. Questo dà margine di manovra sul prezzo che il canale grossisti non ha mai avuto.',
          'Il posizionamento del prezzo online comunica anche qualità: un prezzo troppo aggressivo rispetto al valore percepito del prodotto può addirittura ridurre la fiducia, non aumentarla. Vale la pena testare prezzi diversi per fasce di prodotto, piuttosto che applicare uno sconto lineare pensando che sia l’unica leva disponibile.',
          'Anche il modo in cui il prezzo viene presentato conta: mostrare il prezzo per bottiglia in un box da sei o dodici, con la spedizione già inclusa nel calcolo, riduce la sorpresa (e l’abbandono carrello) al momento del checkout rispetto a scoprire il costo di spedizione solo all’ultimo passaggio.',
        ],
      },
      {
        h2: 'Costruire un e-commerce che regge il confronto sul prezzo',
        paragraphs: [
          'Un e-commerce vino che vende davvero non è un catalogo con un pulsante "compra": è un percorso pensato per chi non ha mai assaggiato il vino prima di ora. Schede prodotto con note di degustazione reali, non generiche; foto che comunicano qualità, non solo la bottiglia su sfondo bianco; abbinamenti concreti che aiutano a decidere.',
          'Il checkout conta quanto il catalogo: costi di spedizione chiari fin da subito (non scoperti all’ultimo passaggio), metodi di pagamento affidabili, e un processo che si completa in pochi passaggi. Ogni frizione in più nel checkout costa conversioni, indipendentemente da quanto sia buono il vino.',
          'Un dettaglio spesso trascurato è la scelta tra vendere singole bottiglie o spingere fin da subito su confezioni multiple (box da tre, sei, dodici): una confezione multipla distribuisce il costo fisso della spedizione su più bottiglie, migliorando il margine per ordine senza toccare il prezzo per bottiglia percepito dal cliente.',
          'Anche i contenuti che accompagnano il catalogo — la storia della cantina, il territorio, il metodo di produzione — non sono un "di più" estetico: sono ciò che giustifica un prezzo superiore a quello di un vino anonimo trovato online. Chi vende vino sta sempre vendendo anche una storia, ed è quella storia che il canale grossisti non riesce mai a trasmettere fino in fondo.',
        ],
      },
      {
        h2: 'La logistica del vino: il dettaglio che decide tutto',
        paragraphs: [
          'La spedizione del vino non è come spedire qualsiasi altro prodotto: il peso incide sulle tariffe, la fragilità richiede packaging dedicato, e in alcuni periodi dell’anno le temperature estreme possono danneggiare il contenuto se il corriere non gestisce correttamente il trasporto.',
          'Avere una soluzione di packaging collaudata (scatole con inserti protettivi pensati per bottiglie, non cartoni generici) riduce sinistri e resi, ma incide anche sul costo per spedizione: vale la pena confrontare più fornitori prima di scegliere, invece di adattare all’ultimo momento un packaging pensato per altro.',
          'La scelta del corriere merita la stessa attenzione: tariffe negoziate su volumi crescenti, tempi di consegna affidabili, e — dove possibile — opzioni di consegna in fasce orarie o punti di ritiro riducono sensibilmente i mancati recapiti, che sono un costo nascosto enorme quando il prodotto è delicato come il vino.',
          'Vale la pena anche definire in anticipo una politica chiara per resi e sinistri: cosa succede se una bottiglia arriva rotta, chi la rimborsa, in quanto tempo. Comunicarla in modo trasparente sul sito, prima ancora che il cliente debba chiederla, riduce l’ansia da acquisto online — un fattore che pesa più di quanto si pensi quando si vende un prodotto che non si può "provare" prima di riceverlo.',
        ],
      },
      {
        h2: 'Wine club e ricorrenza: il moltiplicatore del margine',
        paragraphs: [
          'Il vero salto di qualità nei margini non arriva dal singolo ordine online, ma dalla ricorrenza: un cliente che acquista una volta ha un margine, ma un cliente che acquista più volte nel tempo (grazie a un wine club, a una newsletter ben curata, o semplicemente a un’esperienza d’acquisto positiva) ammortizza il costo di acquisizione iniziale su più ordini, migliorando drasticamente il margine complessivo per cliente.',
          'Non è un caso che le cantine più solide sul canale diretto trattino l’e-commerce come il punto di ingresso, e il wine club come il vero motore di redditività nel medio periodo — un tema che approfondiamo a parte, perché merita un ragionamento specifico su come strutturarlo.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Nel case study concept di Tenuta Monteverdi (esempio illustrativo, non un cliente reale — lo trovi in portfolio) il punto di partenza era un sito statico senza alcun canale di vendita diretta: ogni bottiglia passava per un distributore, e la cantina non aveva alcun dato su chi comprava davvero il proprio vino.',
          'La soluzione ha unito e-commerce Shopify, gestione stock e spedizioni pensata per il vino, e un wine club per trasformare acquisti singoli in relazioni continuative — non funzionalità isolate, ma un sistema pensato per portare il visitatore dalla prima visita all’acquisto ricorrente.',
          'Il punto centrale di questo tipo di progetto non è mai la tecnologia in sé, ma la sequenza: prima si costruisce un catalogo che comunica valore, poi un checkout che non perde ordini per attrito, poi un meccanismo che trasforma il primo acquisto in una relazione — in quest’ordine, non al contrario.',
        ],
      },
      {
        h2: 'Errori che azzerano il vantaggio di margine',
        paragraphs: [
          'Il primo errore è impostare il prezzo online identico al prezzo grossista più margine standard, senza considerare che il canale diretto ha costi diversi — a volte più bassi, a volte più alti a seconda del volume.',
          'Il secondo è non automatizzare la gestione ordini: ogni ora spesa a rincorrere spedizioni manualmente è margine che sparisce silenziosamente.',
          'Il terzo è trattare l’e-commerce come un progetto "una tantum": senza aggiornamenti, contenuti nuovi e un motivo per tornare (newsletter, wine club, nuove annate), il traffico si esaurisce e il costo di acquisizione per ordine sale nel tempo.',
          'Il quarto è ignorare i dati che l’e-commerce genera: ogni ordine racconta qualcosa (quale prodotto vende di più, quale fascia di prezzo converte meglio, da dove arriva il traffico che compra davvero). Chi non guarda questi dati continua a decidere "a sensazione", perdendo l’unico vero vantaggio competitivo che il canale diretto offre rispetto al grossista: sapere chi compra e perché.',
          'Il quinto è sottovalutare l’assistenza post-vendita: una domanda a cui non si risponde in tempo, o un reso gestito male, costa più di quanto sembri — non solo in termini di quel singolo cliente, ma di recensioni e passaparola che nel canale diretto contano molto più che nel canale grossisti.',
        ],
      },
      {
        h2: 'Le domande da farsi prima di partire',
        paragraphs: [
          'Prima di costruire un e-commerce, vale la pena rispondersi con onestà ad alcune domande: quante bottiglie vendo oggi tramite grossisti, e quale margine reale mi resta su ciascuna? Ho i volumi di produzione per sostenere un canale diretto senza sottrarre stock al canale esistente? Ho qualcuno (interno o esterno) che possa gestire ordini, spedizioni e assistenza clienti senza che diventi un collo di bottiglia?',
          'Non c’è una risposta giusta uguale per tutti: una piccola cantina con produzione limitata potrebbe scegliere di concentrarsi solo su un canale diretto premium (poche etichette, prezzo alto, esperienza curata), mentre una cantina con volumi maggiori potrebbe permettersi di far convivere entrambi i canali su segmenti di prodotto diversi.',
          'Un’altra domanda utile: quale parte del catalogo ha senso vendere online? Non sempre conviene mettere in vendita diretta tutte le etichette — alcune cantine scelgono di riservare al canale diretto le referenze più identitarie o le annate limitate, lasciando ai grossisti i volumi più standardizzati. È una decisione strategica, non solo tecnica, e va presa prima di scrivere una riga di codice.',
        ],
      },
      {
        h2: 'Come capire se sta funzionando',
        paragraphs: [
          'Una volta lanciato l’e-commerce, la tentazione è guardare solo il numero di ordini. È un indicatore utile, ma parziale: quello che conta davvero, ai fini del ragionamento sui margini fatto in questo articolo, è il margine netto per ordine — non il fatturato lordo.',
          'Vale la pena monitorare regolarmente alcuni indicatori qualitativi oltre ai numeri: quanti clienti tornano per un secondo ordine (segnale che il primo acquisto ha convinto), quanto tempo passa tra un ordine e l’altro, e quali prodotti vengono acquistati insieme. Questi segnali dicono molto di più sulla salute del canale diretto rispetto al solo fatturato del mese.',
          'Anche il costo di acquisizione va tenuto d’occhio nel tempo: se sale progressivamente senza che il valore medio dell’ordine cresca in proporzione, è un segnale che vale la pena rivedere il funnel — dal traffico che arriva sul sito fino al checkout — prima che il margine dell’e-commerce si avvicini troppo a quello del canale grossisti.',
        ],
      },
      {
        h2: 'Cosa succede se non lo fai adesso',
        paragraphs: [
          'Rimandare la costruzione di un canale diretto ha un costo che raramente viene contabilizzato: ogni anno che passa senza un e-commerce funzionante è un anno in cui i concorrenti che lo hanno già costruito accumulano dati, relazioni con i clienti finali e margine reinvestibile — mentre chi resta dipendente solo dal canale grossisti continua a competere sullo stesso terreno di sempre, quello del prezzo all’ingrosso.',
          'Non è necessario partire con un progetto enorme: anche un e-commerce essenziale, con un catalogo curato e una logistica affidabile, è sufficiente per iniziare a raccogliere dati e costruire relazioni dirette con i clienti finali. Il sistema può crescere in complessità (wine club, automazioni, contenuti) una volta che il canale di base funziona e genera margine reale.',
        ],
      },
      {
        h2: 'Chi deve occuparsene in cantina',
        paragraphs: [
          'Un errore frequente è pensare all’e-commerce come un progetto tecnico da delegare interamente e dimenticare. In realtà richiede un referente interno, anche part-time, che conosca il prodotto e possa aggiornare contenuti, gestire ordini particolari e rispondere a domande sui vini con la competenza che solo chi lavora in cantina ha davvero.',
          'La parte tecnica — sviluppo, hosting, integrazioni di pagamento e spedizione, sicurezza — ha senso affidarla a chi la gestisce ogni giorno, così da non distogliere risorse interne da produzione e vigna. Ma i contenuti, il tono di voce, le risposte ai clienti restano più efficaci se restano in mano a chi il vino lo fa davvero.',
          'Con il tempo, se il canale cresce, ha senso valutare una figura dedicata anche solo a mezza giornata a settimana per gestione ordini e customer care: è un costo che si ripaga rapidamente se il volume di ordini lo giustifica, e libera il resto del team da un carico che altrimenti finisce per essere gestito "quando si ha tempo" — cioè male.',
        ],
      },
      {
        h2: 'Domande frequenti su margini ed e-commerce vino',
        paragraphs: [
          '**Un e-commerce sostituisce del tutto il canale grossisti?** Quasi mai, e nella maggior parte dei casi non è nemmeno l’obiettivo giusto. Il canale grossisti resta prezioso per volumi e mercati che il diretto non può coprire da solo. L’e-commerce si affianca, e nel tempo diventa il canale a marginalità più alta.',
          '**Quanto tempo serve prima che l’e-commerce diventi redditizio?** Dipende da quanto traffico qualificato riesci a portare sul sito e da quanto è curato il percorso d’acquisto. Le prime settimane servono soprattutto a raccogliere dati; il margine reale si consolida quando iniziano gli acquisti ripetuti, non dal primo ordine.',
          '**Serve per forza un wine club fin da subito?** No. Ha senso partire con un e-commerce solido e ben strutturato, e introdurre il wine club una volta che il canale diretto genera un flusso costante di clienti — è un secondo passo naturale, non un prerequisito.',
          '**Vale la pena farlo anche con una produzione piccola?** Sì, spesso è proprio la piccola produzione a beneficiarne di più: con volumi limitati, ogni bottiglia venduta a margine pieno pesa proporzionalmente di più sul conto economico rispetto a una grande cantina che si appoggia principalmente sui volumi.',
        ],
      },
      {
        h2: 'Come si integra con il resto della strategia digitale',
        paragraphs: [
          'L’e-commerce non vive isolato: funziona meglio quando è collegato a una presenza digitale coerente — un sito che racconta la cantina, contenuti che spiegano il metodo di produzione, una presenza social che mantiene viva l’attenzione tra un acquisto e l’altro. Senza questo contesto, anche il miglior e-commerce fatica a portare traffico qualificato in modo continuativo.',
          'Anche il collegamento con l’enoturismo merita attenzione: chi visita la cantina di persona è il candidato ideale per un acquisto online successivo, se il percorso post-visita (email di follow-up, invito al wine club, sconto sul primo ordine online) è impostato correttamente. Sono due canali che, integrati, si rafforzano a vicenda molto più della somma delle parti.',
          'Lo stesso vale per la SEO locale e i contenuti del blog: chi cerca informazioni sul territorio, sul vitigno o sull’abbinamento giusto per una cena arriva spesso da un contenuto informativo, non da una scheda prodotto. Un e-commerce isolato dal resto della strategia di contenuti perde gran parte del traffico che potrebbe intercettare a costo zero, prima ancora di investire in pubblicità a pagamento.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Prima di costruire qualunque cosa, ha senso fare il conto vero: quanto guadagni oggi per bottiglia venduta al grossista, e quanto potresti guadagnare vendendola direttamente, al netto di spedizione, packaging e tempo di gestione. **Solo con quel numero in mano ha senso decidere quanto investire nell’e-commerce.**',
          'Costruiamo e-commerce Shopify pensati per il vino — dalla gestione spedizioni al wine club ricorrente. [Scopri il servizio →](/servizi/ecommerce-shopify)',
        ],
      },
    ],
  },
  {
    slug: 'wine-club-revenue-ricorrente-fedelta',
    title: 'Wine Club: Come Costruire Revenue Ricorrente e Clienti Fedeli',
    seoTitle: 'Wine club: revenue ricorrente e fedeltà clienti',
    excerpt:
      'Un wine club ben strutturato trasforma acquisti occasionali in revenue prevedibile ogni mese. Ecco come impostare i tier, il prezzo, lo storytelling e l’automazione che lo rendono sostenibile.',
    date: '2026-08-01',
    readingMinutes: 10,
    category: 'Strategia',
    featuredImage: '/images/blog/wine-club-revenue-ricorrente-fedelta.jpg',
    imageAlt: 'Selezione di vini pronta per la spedizione mensile di un wine club',
    tags: ['Wine Club', 'Revenue Ricorrente', 'Loyalty', 'Vino'],
    keywords: ['wine club', 'fedeltà clienti vino', 'abbonamento vino', 'revenue ricorrente cantina', 'community vino online'],
    relatedSlugs: ['ecommerce-vino-margini-vendita-diretta', 'storytelling-vino-marketing-vendite'],
    relatedLinks: [
      { href: '/servizi/wine-club', label: 'Servizio: Wine Club' },
      { href: '/portfolio/azienda-rossi', label: 'Case study: Wine Club Pro' },
      { href: '/software/vitivinicolo', label: 'Software su misura per cantine' },
    ],
    body: [
      {
        h2: 'Perché un wine club cambia la natura del fatturato',
        paragraphs: [
          'La maggior parte delle cantine vive di vendite saltuarie: un cliente compra, magari torna, magari no. **Un wine club sostituisce quella casualità con un flusso ricorrente**: gli iscritti pagano ogni mese o ogni trimestre per ricevere una selezione, e quel fatturato si può pianificare con largo anticipo, non solo sperare.',
          'Non è solo una questione di prevedibilità: un socio di wine club, in genere, resta cliente molto più a lungo di chi compra una volta e basta, perché ha già scelto di fidarsi della cantina prima ancora di aprire la scatola. Questa fiducia iniziale è un capitale che va coltivato con cura in ogni spedizione, non dato per scontato una volta ottenuto.',
          'C’è anche un cambiamento meno visibile ma altrettanto importante: un wine club trasforma il rapporto tra cantina e cliente da transazionale a continuativo. Non si vende più "una bottiglia alla volta a chi capita", si costruisce una base di persone che hanno scelto di seguire la cantina nel tempo — un pubblico su cui è molto più facile testare nuove annate, raccogliere feedback reali, e costruire il passaparola più efficace che esista, quello di chi è già cliente.',
          'Questo cambiamento ha anche un effetto pratico sulla pianificazione della produzione: sapere in anticipo, con buona approssimazione, quante bottiglie verranno assorbite dal wine club nei mesi successivi permette di programmare meglio imbottigliamento e stock, riducendo l’incertezza che tipicamente accompagna la vendita tramite canali indiretti dove la domanda arriva a ondate imprevedibili e difficili da anticipare con precisione.',
        ],
      },
      {
        h2: 'Il vero valore non è solo il fatturato ricorrente',
        paragraphs: [
          'Guardare un wine club solo come fonte di revenue prevedibile è riduttivo. Il valore più grande, nel medio periodo, è spesso un altro: **i dati e la relazione diretta con un gruppo di clienti fedeli**, qualcosa che nessun canale di vendita indiretta può offrire.',
          'Ogni socio che resta iscritto per mesi o anni racconta, con il suo comportamento, cosa funziona davvero: quali vini apprezza di più, quando è più propenso ad acquistare extra, cosa lo spinge a consigliare la cantina ad altri. Questi segnali, aggregati nel tempo, valgono più di qualsiasi ricerca di mercato commissionata a terzi.',
          'Un wine club sano diventa anche un laboratorio a basso rischio per nuove etichette: prima di lanciare una nuova annata sul mercato generale, si può proporla in anteprima ai soci e raccogliere reazioni reali, capendo se il prodotto merita un lancio più ampio o va rivisto.',
        ],
      },
      {
        h2: 'Come strutturare i tier di membership',
        paragraphs: [
          'Una struttura a tre livelli funziona bene nella maggior parte dei casi: un tier base con poche bottiglie e spedizione inclusa, pensato per chi vuole provare; un tier intermedio con più bottiglie e uno sconto maggiore, che spesso diventa il più popolare; un tier premium con selezione personalizzata e accesso a eventi esclusivi, pensato per un numero limitato di soci.',
          'Il prezzo va calibrato sul valore reale del contenuto (bottiglie + sconto rispetto al retail), non fissato a sensazione. **Un tier troppo economico non copre i costi di gestione, uno troppo caro scoraggia le prime iscrizioni.**',
          'Un’attenzione particolare va data alla flessibilità: prevedere la possibilità di saltare una spedizione, mettere in pausa l’iscrizione per un periodo, o passare da un tier all’altro senza dover disdire e reiscriversi da capo riduce sensibilmente le cancellazioni definitive. Un socio che può mettere in pausa quando ha già troppo vino in cantina resta iscritto molto più a lungo di uno che si sente costretto a scegliere tra "tutto o niente".',
          'Vale la pena resistere alla tentazione di lanciare troppi tier fin dall’inizio: tre opzioni ben distinte sono più facili da comunicare e da scegliere rispetto a cinque o sei varianti che confondono chi si sta iscrivendo per la prima volta. È sempre possibile aggiungere un tier ulteriore in un secondo momento, quando si conoscono meglio le preferenze dei soci.',
          'Anche la denominazione dei tier merita cura: nomi generici come "base", "medio" e "premium" funzionano ma non aggiungono nulla al racconto della cantina. Nomi legati al territorio, a un vigneto specifico o a una tradizione di famiglia rendono la scelta del tier parte dell’esperienza, non solo una decisione di prezzo.',
        ],
      },
      {
        h2: 'Come calcolare il prezzo giusto per ogni tier',
        paragraphs: [
          'Il prezzo di un tier non dovrebbe mai partire dal "quanto vorrei incassare", ma dal valore reale che il socio riceve: il prezzo di listino delle bottiglie incluse, meno uno sconto che sia percepito come vantaggioso ma non così alto da erodere il margine costruito con fatica nel canale diretto.',
          'Un errore frequente è dimenticare, nel calcolo del prezzo, i costi fissi di gestione: spedizione, packaging dedicato, tempo di comunicazione con i soci. Se questi costi non vengono inclusi nel prezzo del tier, ogni socio in più aumenta il fatturato ma non necessariamente il margine — anzi, in alcuni casi lo riduce.',
          'Un test utile prima del lancio definitivo è proporre il wine club a un piccolo gruppo di clienti fedeli con un prezzo di lancio, osservare quante iscrizioni arrivano e quante disdette si verificano nei primi mesi, e solo dopo consolidare il prezzo definitivo sulla base di questi segnali reali.',
          'Un ultimo elemento da considerare nel prezzo è la spedizione: includerla nel costo del tier semplifica la comunicazione ("prezzo unico, tutto incluso") e riduce l’attrito psicologico rispetto a doverla aggiungere a parte a ogni rinnovo. Il costo va comunque calcolato e assorbito nel prezzo complessivo, non ignorato: una spedizione non correttamente considerata è uno dei modi più rapidi per erodere silenziosamente il margine di un wine club altrimenti ben impostato.',
        ],
      },
      {
        h2: 'Il ruolo dello storytelling in ogni spedizione',
        paragraphs: [
          'La differenza tra un wine club che funziona e uno che genera disdette non è quasi mai il vino: è cosa lo accompagna. Ogni selezione ha bisogno di un motivo, di una storia — l’annata difficile che ha richiesto pazienza, il vitigno recuperato da un vecchio filare, la persona dietro l’etichetta.',
          '> Un socio che capisce perché sta bevendo proprio quel vino, in quel momento, si sente parte della cantina — non solo un abbonato che riceve una scatola.',
          'Lo storytelling non deve essere elaborato per funzionare: bastano poche righe scritte con cura, una nota vocale del produttore, una foto della vendemmia di quell’annata. Quello che conta è la costanza — ogni spedizione dovrebbe avere il suo racconto, non solo le prime per entusiasmare i nuovi iscritti.',
        ],
      },
      {
        h2: 'Cosa mettere nella scatola oltre al vino',
        paragraphs: [
          'Le cantine che ottengono i tassi di rinnovo più alti raramente spediscono solo bottiglie. Una scheda di degustazione stampata, un suggerimento di abbinamento gastronomico, un piccolo omaggio a sorpresa in occasioni speciali (l’anniversario di iscrizione, le festività) trasformano l’apertura della scatola in un momento che il socio ricorda, non solo in una consegna.',
          'Anche l’accesso a contenuti esclusivi — una visita guidata riservata ai soci, una degustazione online con il produttore, l’anteprima di una nuova annata prima del lancio pubblico — rafforza la sensazione di appartenere a qualcosa di più di un semplice abbonamento, ed è spesso il motivo che i soci citano quando spiegano perché non hanno mai pensato di disdire.',
          'Alcune cantine costruiscono anche un piccolo rituale attorno all’apertura della scatola: un codice QR che porta a un video del produttore che presenta la selezione, un gruppo privato (su un canale semplice come una newsletter dedicata o una community online) dove i soci possono commentare e fare domande. Non serve una tecnologia complessa: serve la volontà di trattare ogni socio come una persona con cui costruire una relazione, non come una riga in un foglio di calcolo degli abbonamenti attivi.',
        ],
      },
      {
        h2: 'Come lanciare il wine club senza partire da zero',
        paragraphs: [
          'Il modo più sicuro di partire è rivolgersi prima ai propri clienti esistenti: chi ha già comprato e apprezzato il vino è il pubblico più propenso a iscriversi. Una pagina di iscrizione chiara, un’email dedicata, e un primo invio curato con particolare attenzione allo storytelling costruiscono le basi per la crescita successiva.',
          'Solo dopo aver validato l’offerta con i primi iscritti ha senso investire in acquisizione di nuovi soci attraverso il sito, i social o eventi in cantina.',
          'Un lancio "morbido" con un gruppo ristretto di clienti fedeli permette anche di testare l’intera macchina operativa — dal pagamento ricorrente alla spedizione, dalla comunicazione al feedback — senza il rischio di scoprire un problema logistico quando ci sono già centinaia di soci in attesa della propria scatola.',
          'Anche la comunicazione del lancio merita cura: raccontare perché nasce il wine club, cosa lo rende diverso da un semplice acquisto ripetuto, e cosa possono aspettarsi i primi iscritti costruisce entusiasmo autentico, molto più efficace di uno sconto lancio comunicato senza contesto.',
        ],
      },
      {
        h2: 'Perché l’automazione è ciò che rende sostenibile un wine club',
        paragraphs: [
          'Gestire iscrizioni, rinnovi, spedizioni e comunicazioni a mano funziona per i primi venti soci. Oltre quella soglia, senza automazione, diventa un lavoro a tempo pieno che nessuno in cantina ha davvero il tempo di fare bene.',
          'Iscrizione e pagamento ricorrente automatici, email di benvenuto e reminder di spedizione, richiesta di feedback dopo ogni invio: sono gli elementi che permettono di far crescere il numero di soci senza far crescere proporzionalmente il carico di lavoro.',
          'Anche la gestione dei pagamenti falliti merita un processo automatico: una carta scaduta o un pagamento respinto, se non gestito con un promemoria automatico e un breve periodo di grazia, si traduce in una disdetta involontaria che nessuno voleva davvero — e che un sistema ben impostato evita quasi del tutto.',
          'Automatizzare non significa spersonalizzare: significa liberare tempo umano per le parti che contano davvero, come rispondere personalmente a un socio che scrive una domanda specifica, o dedicare tempo a curare il contenuto di ogni selezione invece di passarlo a inseguire spedizioni in ritardo.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'In un caso concept ispirato a progetti reali di wine club (esempio illustrativo, non riferito a un singolo cliente), il punto di partenza era una lista di email raccolte nel tempo senza alcuna offerta ricorrente collegata: contatti preziosi, ma senza un modo strutturato per trasformarli in revenue continuativa.',
          'La struttura costruita ha previsto tre tier con selezioni tematiche trimestrali, un sistema di pagamento e spedizione automatizzato, e una sequenza di comunicazioni pensata per accompagnare ogni socio dal primo invio in poi — dal benvenuto alla richiesta di feedback, fino al promemoria discreto prima del rinnovo. Il risultato non è mai un singolo numero isolato, ma un sistema che continua a funzionare anche quando il team in cantina è impegnato altrove, in vigna o in cantina durante i periodi più intensi dell’anno.',
          'Un elemento chiave di questo tipo di progetto è stato il tema trimestrale: invece di selezioni scollegate tra loro, ogni invio seguiva un filo conduttore — un vitigno, un’annata, un abbinamento gastronomico — che rendeva la scatola successiva qualcosa da aspettare, non solo da ricevere. È un dettaglio che costa poco in fase di progettazione ma che incide molto sulla percezione di cura da parte dei soci nel tempo.',
        ],
      },
      {
        h2: 'Il rapporto tra wine club e posizionamento del brand',
        paragraphs: [
          'Un wine club non è solo uno strumento di revenue: è anche una dichiarazione di posizionamento. Il modo in cui viene comunicato — il tono, le immagini, il tipo di contenuto che accompagna ogni spedizione — racconta al mercato che tipo di cantina si è, molto più di qualunque campagna pubblicitaria tradizionale.',
          'Una cantina che punta su un wine club premium, con selezioni limitate e un’esperienza curata nei minimi dettagli, comunica un posizionamento diverso rispetto a una cantina che punta su un tier accessibile e ad ampia diffusione. Nessuna delle due strade è giusta o sbagliata in assoluto: quello che conta è la coerenza tra il posizionamento del wine club e quello del resto del brand, dal sito all’etichetta fino all’esperienza in cantina.',
        ],
      },
      {
        h2: 'Errori comuni che fanno perdere soci',
        paragraphs: [
          'Una selezione senza criterio, percepita come casuale invece che curata, è il primo motivo di disdetta: un socio che paga ogni mese si aspetta di percepire l’intenzione dietro ogni scelta.',
          'La seconda causa comune è il silenzio tra una spedizione e l’altra: nessuna comunicazione, nessun contenuto, nessun motivo per pensare alla cantina se non quando arriva la scatola.',
          'La terza è ignorare i primi mesi di un nuovo socio, che sono quelli in cui si decide davvero se restare o disdire: un buon onboarding pesa più di qualunque promozione successiva.',
          'La quarta è rendere complicato disdire o modificare l’iscrizione: un processo di cancellazione nascosto o farraginoso non trattiene i soci insoddisfatti, li trasforma in soci arrabbiati che raccontano l’esperienza negativa ad altri — l’esatto opposto dell’effetto passaparola che un wine club dovrebbe generare.',
        ],
      },
      {
        h2: 'Come misurare la salute del wine club',
        paragraphs: [
          'Il numero di iscritti attivi è l’indicatore più visibile, ma non il più importante. Il tasso di rinnovo — quanti soci confermano l’iscrizione al periodo successivo — dice molto di più sulla reale soddisfazione rispetto al semplice conteggio totale.',
          'Vale la pena osservare anche in quale fase del percorso i soci tendono a disdire: se la maggior parte delle cancellazioni avviene dopo la prima o la seconda spedizione, il problema è quasi sempre nell’onboarding o nell’aspettativa creata prima dell’iscrizione. Se avviene dopo molti mesi, il problema è più spesso legato alla varietà percepita delle selezioni, che con il tempo può sembrare ripetitiva.',
          'Anche il feedback diretto — un breve sondaggio dopo ogni spedizione, o semplicemente la richiesta di rispondere all’email di invio — è una fonte di informazioni che nessun dato di vendita può sostituire, e che permette di correggere la rotta prima che un problema si trasformi in un’ondata di disdette.',
          'Un ultimo indicatore spesso trascurato è il tasso di apertura e di interazione con le comunicazioni inviate ai soci: se le email sul nuovo invio vengono aperte sempre meno nel tempo, è un segnale precoce di disaffezione che precede quasi sempre la disdetta vera e propria — e che dà il tempo di intervenire prima che sia troppo tardi.',
        ],
      },
      {
        h2: 'Un piano di lancio in tre fasi',
        paragraphs: [
          'La prima fase è la preparazione: definire i tier, il prezzo, il tema della prima selezione, e allestire la piattaforma tecnica per pagamenti ricorrenti e spedizioni. In questa fase ha senso anche scrivere in anticipo la sequenza di comunicazioni che accompagnerà i primi mesi di ogni socio, così da non doverla improvvisare quando arrivano le prime iscrizioni.',
          'La seconda fase è il lancio riservato ai clienti esistenti: un invito diretto, personale, spiegando cosa rende diverso il wine club rispetto a un acquisto singolo. È il momento in cui si osservano i primi segnali reali — quante persone si iscrivono, quali domande fanno prima di farlo, cosa genera dubbi nel processo di iscrizione — e si correggono eventuali frizioni prima di aprire l’offerta a un pubblico più ampio.',
          'La terza fase è la crescita controllata: solo dopo aver verificato che il primo gruppo di soci resta soddisfatto (pochi reclami, buon tasso di apertura delle comunicazioni, prime recensioni positive) ha senso investire in acquisizione più ampia, tramite il sito, i social o eventi dedicati. Aprire troppo presto a un pubblico ampio, prima di aver testato l’intera macchina operativa, è uno degli errori più comuni e più costosi da correggere in corsa.',
        ],
      },
      {
        h2: 'Errori nella scelta della piattaforma tecnica',
        paragraphs: [
          'Un errore frequente è costruire un wine club su strumenti pensati per altro — un semplice modulo di pagamento ricorrente collegato a un foglio di calcolo gestito a mano, senza alcuna integrazione con l’e-commerce esistente o con la gestione delle spedizioni. Funziona per i primi mesi, poi ogni crescita nel numero di soci diventa un problema operativo che si scarica interamente sul team.',
          'La piattaforma giusta dipende dalla scala del progetto, ma alcuni requisiti restano validi quasi sempre: pagamento ricorrente affidabile e conforme alle normative sui pagamenti online, gestione automatica dei rinnovi e dei mancati pagamenti, integrazione con il sistema di spedizione per generare etichette senza intervento manuale a ogni invio, e uno storico ordini per ogni socio che permetta di personalizzare le comunicazioni nel tempo.',
          'Vale la pena evitare di costruire tutto da zero quando esistono soluzioni già collaudate: il tempo risparmiato nello sviluppo va investito nella parte che nessuno strumento può replicare, cioè la cura della selezione e della relazione con i soci.',
        ],
      },
      {
        h2: 'Come si integra con il resto della strategia digitale della cantina',
        paragraphs: [
          'Il wine club funziona meglio quando non è un progetto isolato, ma il punto di arrivo naturale di un percorso più ampio: chi scopre la cantina tramite i contenuti del blog, chi visita in occasione di una degustazione, chi acquista per la prima volta sull’e-commerce, dovrebbe incontrare in modo naturale l’invito a iscriversi al wine club, non scoprirlo per caso in una pagina nascosta del sito.',
          'Anche l’enoturismo gioca un ruolo importante: chi ha vissuto un’esperienza diretta in cantina — una visita, una degustazione guidata, un evento — è statisticamente il pubblico più propenso a iscriversi, perché ha già un ricordo personale a cui la scatola mensile o trimestrale può ricollegarsi. Un follow-up ben calibrato dopo la visita, con un invito chiaro al wine club, converte molto meglio di una campagna pubblicitaria generica rivolta a sconosciuti.',
          'Anche i social media, se usati per raccontare il dietro le quinte della cantina piuttosto che solo per vendere, alimentano naturalmente l’interesse verso il wine club: mostrare la vendemmia, l’imbottigliamento, le scelte dietro ogni annata costruisce nel tempo il tipo di fiducia che poi si traduce in un’iscrizione.',
        ],
      },
      {
        h2: 'Domande frequenti sul wine club',
        paragraphs: [
          '**Quanti soci servono perché un wine club sia sostenibile?** Non esiste una soglia universale: dipende dai costi fissi di gestione e dal margine per tier. Quello che conta è che ogni tier, calcolato correttamente, generi margine positivo fin dai primi soci, non solo a numeri elevati.',
          '**Meglio mensile o trimestrale?** Dipende dal prodotto e dal pubblico: una cadenza mensile crea più frequenza di contatto ma richiede più contenuti e più gestione logistica; una cadenza trimestrale è più semplice da sostenere per una cantina piccola, con selezioni più curate e meno pressione operativa.',
          '**Il wine club funziona anche per una cantina appena avviata?** Sì, a patto di avere una base minima di clienti già fidelizzati a cui proporlo per primi. Partire da zero, senza alcuna relazione pregressa, richiede più tempo per costruire fiducia sufficiente a far scattare la prima iscrizione.',
          '**Conviene offrire la possibilità di personalizzare la selezione?** Per un tier premium sì, è spesso un elemento distintivo molto apprezzato. Per i tier base e intermedio è meglio mantenere una selezione curata dalla cantina: troppa personalizzazione, nelle fasi iniziali, complica la logistica senza un beneficio proporzionato per la maggior parte dei soci.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il wine club non richiede di reinventare la cantina: richiede di **decidere una struttura chiara, un tema per ogni selezione, e un sistema che gestisca l’operatività senza consumare il tempo del team**.',
          'Aiutiamo cantine a impostare tier, automazione e software per il wine club, dal lancio alla gestione quotidiana. [Scopri il servizio Wine Club →](/servizi/wine-club)',
        ],
      },
    ],
  },
  {
    slug: 'enoturismo-prenotazioni-online-vendite-dirette',
    title: 'Enoturismo: Come le Prenotazioni Online Aumentano Vendite e Occupazione',
    seoTitle: 'Enoturismo: prenotazioni online e vendite dirette',
    excerpt:
      'Molte cantine fanno enoturismo in modo improvvisato: telefono, email, agenda cartacea. Ecco come un sistema di prenotazione online cambia la gestione delle visite e apre a nuove vendite dirette.',
    date: '2026-08-01',
    readingMinutes: 9,
    category: 'E-commerce',
    featuredImage: '/images/blog/enoturismo-prenotazioni-online-vendite-dirette.jpg',
    imageAlt: 'Degustazione guidata in cantina durante una visita enoturistica prenotata online',
    tags: ['Enoturismo', 'Booking Online', 'Degustazioni', 'Wine Tourism'],
    keywords: ['enoturismo', 'prenotazioni degustazioni online', 'booking system cantina', 'esperienze in cantina', 'wine tourism'],
    relatedSlugs: ['wine-club-revenue-ricorrente-fedelta', 'agriturismo-booking-online-prenotazioni'],
    relatedLinks: [
      { href: '/software/vitivinicolo', label: 'Software su misura per cantine' },
      { href: '/settori/wine-viticulture', label: 'Settore Wine & Viticulture' },
      { href: '/portfolio/podere-la-vite', label: 'Case study: Podere La Vite' },
    ],
    body: [
      {
        h2: 'Perché l’enoturismo improvvisato costa più di quanto sembri',
        paragraphs: [
          'Molte cantine gestiscono le visite come sono sempre state gestite: una telefonata, un’email, un’agenda su carta o su un foglio di calcolo condiviso. Finché i numeri sono piccoli funziona; **appena le richieste crescono, iniziano gli errori — doppie prenotazioni, mail perse, visitatori che non ricevono mai risposta.**',
          'Chi cerca una degustazione oggi, nella maggior parte dei casi, si aspetta di poter vedere la disponibilità e prenotare senza dover aspettare una risposta manuale. Se quell’opzione non c’è, molti semplicemente scelgono un’altra cantina che la offre.',
          'La visita in cantina, per un numero crescente di persone, non è più un’uscita improvvisata ma parte di un itinerario enogastronomico pianificato con anticipo, insieme a hotel, ristoranti e altre esperienze del territorio — tutte cercate e prenotate online, senza dover fare una telefonata.',
          'Una cantina che accetta prenotazioni solo per telefono manda, senza volerlo, un segnale di scarsa organizzazione ancora prima che il visitatore assaggi il primo calice: l’esperienza comincia dal momento in cui si prova a prenotare, non da quando si varca il cancello.',
        ],
      },
      {
        h2: 'Come sta cambiando il modo di scoprire e prenotare un’esperienza in cantina',
        paragraphs: [
          'In molti casi, oggi, chi pianifica una vacanza enogastronomica organizza gran parte del percorso online prima di partire, confrontando esperienze diverse e scegliendo quella che offre disponibilità chiara e un processo di prenotazione semplice, senza dover attendere una risposta.',
          'Un numero crescente di visitatori arriva sulla pagina di una cantina già con l’intenzione di prenotare, non solo di informarsi: se non trova un modo immediato per farlo, spesso torna alla ricerca e sceglie un’alternativa nello stesso territorio, senza nemmeno segnalare il motivo dell’abbandono.',
          'La maggior parte delle esperienze enoturistiche di maggior successo, negli ultimi anni, non sono necessariamente quelle con il vino più pregiato in assoluto, ma quelle che hanno reso l’intero percorso — dalla scoperta alla prenotazione alla visita — il più semplice possibile per chi non conosce ancora la cantina.',
          'Questo cambiamento riguarda anche il tipo di pubblico: un numero crescente di visitatori arriva da fuori regione o dall’estero, pianifica con largo anticipo e si aspetta di poter prenotare in autonomia, in qualunque fuso orario si trovi, senza dover attendere gli orari di ufficio della cantina.',
        ],
      },
      {
        h2: 'Cosa perde davvero una cantina senza booking online',
        paragraphs: [
          'Il primo costo è il visitatore che rinuncia perché non trova un modo semplice per prenotare: non lo si vede mai, ma è una vendita persa quanto una qualsiasi altra.',
          'Il secondo è il tempo del team, speso a rispondere a domande ripetitive su orari e disponibilità invece che a preparare l’esperienza in cantina.',
          'Il terzo, meno visibile ma reale, è la mancanza di dati: senza un sistema di prenotazione, non si sa davvero quanti visitatori arrivano, quando, e cosa acquistano dopo la visita.',
          'C’è anche un quarto costo, spesso sottovalutato: l’immagine che la cantina comunica. Un visitatore che deve scrivere un’email e aspettare giorni per una risposta percepisce un’organizzazione meno curata, anche se la qualità della visita, una volta arrivato, supera ogni aspettativa.',
        ],
      },
      {
        h2: 'Il costo nascosto dei no-show e delle mancate presentazioni',
        paragraphs: [
          'Anche quando la prenotazione arriva, senza un sistema strutturato il problema si sposta più avanti: le mancate presentazioni. Chi prenota per telefono o via email, senza versare nulla, tratta spesso l’appuntamento come provvisorio, e semplicemente non si presenta se cambiano i piani.',
          'Ogni mancata presentazione non è solo una degustazione andata a vuoto: è tempo del team preparato per nulla, uno slot che avrebbe potuto essere occupato da un altro visitatore realmente interessato, e in molti casi anche prodotto preparato in anticipo che finisce sprecato.',
          'Nei periodi di alta stagione, quando la disponibilità è limitata, ogni slot perso per un no-show pesa ancora di più: significa aver implicitamente rifiutato un altro visitatore che avrebbe onorato la prenotazione, per lasciare spazio a chi poi non arriva.',
          'Anche una quota contenuta di mancate presentazioni, ripetuta settimana dopo settimana per tutta la stagione, si traduce in un ammanco di fatturato che raramente viene registrato come tale, perché non compare in nessun report: semplicemente, quella vendita non succede.',
        ],
      },
      {
        h2: 'La soluzione concettuale: un sistema di prenotazione pensato per l’enoturismo',
        paragraphs: [
          'La soluzione non è complicata nel principio, anche se richiede attenzione nei dettagli: dare al visitatore la possibilità di vedere la disponibilità reale e prenotare in autonomia, in qualunque momento, con un impegno — anche minimo — che renda la prenotazione concreta invece che provvisoria.',
          'Un sistema di questo tipo non serve solo a raccogliere prenotazioni: serve a strutturare l’intero percorso del visitatore, dal primo click sulla pagina delle esperienze fino al momento in cui, dopo la visita, riceve un invito a proseguire la relazione con la cantina.',
          '**Il punto centrale non è la tecnologia in sé, ma cosa permette di fare**: liberare il team da compiti ripetitivi, ridurre le mancate presentazioni, e trasformare ogni visita in un’occasione di vendita diretta, non solo in un’esperienza isolata.',
          'Un buon sistema di prenotazione, in questo senso, va pensato come un’estensione del racconto della cantina, non come un semplice modulo tecnico aggiunto al sito: il tono, i testi e le immagini usate nella pagina di prenotazione contribuiscono già a costruire l’aspettativa della visita.',
        ],
      },
      {
        h2: 'Cosa deve fare davvero un buon sistema di booking',
        paragraphs: [
          'Un buon sistema mostra la disponibilità reale in tempo reale, senza obbligare il visitatore a scrivere e aspettare una conferma: chi vede uno slot libero e lo prenota deve poter considerare la prenotazione confermata da subito, salvo casi eccezionali.',
          'Deve permettere di distinguere tipologie di esperienza diverse — degustazione classica, percorso premium con abbinamento cibo, visita guidata al vigneto, evento speciale — ciascuna con propria disponibilità, durata e prezzo, senza costringere il team a gestire manualmente le eccezioni.',
          'Deve integrarsi con il resto degli strumenti della cantina: il sito, l’eventuale e-commerce, il sistema di comunicazione via email o messaggistica, in modo che ogni prenotazione generi automaticamente le comunicazioni necessarie senza intervento manuale ripetuto.',
          'Deve infine restituire dati utilizzabili: quanti visitatori arrivano, in quali giorni e orari, quale tipo di esperienza scelgono più spesso, quanti acquistano dopo la visita. Senza questi dati, ogni decisione sulla programmazione delle visite resta una scommessa basata su impressioni.',
          'Un ultimo requisito, spesso trascurato in fase di scelta, è la semplicità di gestione lato team: un sistema che richiede formazione lunga o passaggi macchinosi per bloccare uno slot o aggiungere un’esperienza speciale finisce per essere usato male, o abbandonato del tutto dopo le prime settimane.',
        ],
      },
      {
        h2: 'Come funziona in pratica un sistema di prenotazione ben fatto',
        paragraphs: [
          'Una pagina dedicata mostra la disponibilità reale, non un form generico "vi ricontattiamo": il visitatore vede gli slot liberi, sceglie il tipo di esperienza (degustazione classica, premium, abbinamento cibo) e paga o versa una caparra al momento della prenotazione.',
          'La caparra, in particolare, riduce in modo significativo le mancate presentazioni: chi ha già pagato qualcosa è molto più propenso a presentarsi rispetto a chi ha solo lasciato un numero di telefono.',
          'Il processo di prenotazione dovrebbe richiedere pochi passaggi: scelta della data, scelta del tipo di esperienza, numero di partecipanti, pagamento o caparra, conferma immediata. Ogni passaggio aggiuntivo, ogni campo non necessario, è un’occasione in più per chi sta prenotando di abbandonare prima di completare.',
          'Anche il momento tecnico della conferma merita attenzione: un’email o un messaggio immediato, con tutte le informazioni pratiche (indirizzo, parcheggio, cosa aspettarsi, come modificare o cancellare) riduce le domande ripetitive che altrimenti arrivano al team nei giorni precedenti la visita.',
        ],
      },
      {
        h2: 'Le comunicazioni automatiche prima e durante la visita',
        paragraphs: [
          'Le comunicazioni intorno alla visita non dovrebbero limitarsi alla singola email di conferma: una sequenza ben calibrata accompagna il visitatore dal momento della prenotazione fino al giorno dell’esperienza, riducendo incertezza e domande ripetitive rivolte al team.',
          'Un primo messaggio, inviato subito dopo la prenotazione, conferma i dettagli e fornisce le informazioni pratiche essenziali: indirizzo, orario, come raggiungere la cantina, cosa aspettarsi durante la visita.',
          'Un secondo messaggio, inviato uno o due giorni prima, funge da promemoria e riduce ulteriormente le mancate presentazioni; è anche l’occasione per ricordare dettagli pratici — parcheggio limitato, abbigliamento consigliato per una visita in vigna, orario di ritrovo preciso.',
          'Automatizzare questa sequenza non significa renderla impersonale: il tono e i contenuti possono comunque riflettere lo stile della cantina, e un breve messaggio scritto con cura vale più di un’email standard copiata da un template generico.',
        ],
      },
      {
        h2: 'Ridurre i no-show con caparra e comunicazioni automatiche',
        paragraphs: [
          'La caparra, anche minima, cambia il comportamento di chi prenota: chi ha già versato qualcosa tratta l’appuntamento come un impegno reale, non come un’opzione da confermare più avanti.',
          'Oltre alla caparra, un promemoria automatico nei giorni e nelle ore precedenti la visita riduce ulteriormente le mancate presentazioni: un messaggio semplice, con l’orario e le indicazioni pratiche, spesso basta a far ricordare l’appuntamento a chi, tra mille impegni, rischiava di dimenticarlo.',
          'Prevedere una politica di cancellazione chiara — ad esempio un rimborso parziale se la cancellazione avviene con un preavviso ragionevole, nessun rimborso se avviene all’ultimo momento — protegge la cantina senza risultare ostile, a patto che sia comunicata in modo trasparente al momento della prenotazione.',
          'Anche la possibilità di modificare autonomamente data o orario, entro certi limiti, senza dover scrivere al team, riduce sia le cancellazioni definitive sia il carico di richieste che altrimenti finiscono in email o telefonate dell’ultimo minuto.',
        ],
      },
      {
        h2: 'Gestire calendario e disponibilità in modo realistico',
        paragraphs: [
          'Uno degli errori più comuni nell’impostare un sistema di prenotazione è definire una disponibilità che non tiene conto dei vincoli reali della cantina: tempo di preparazione tra una degustazione e l’altra, numero massimo di persone che lo spazio può accogliere, giorni in cui il team è impegnato in vigna o in cantina per la produzione.',
          'Un calendario ben impostato riflette questi vincoli fin dall’inizio, evitando che il sistema accetti prenotazioni impossibili da onorare — una delle cause più frequenti di frustrazione sia per il visitatore, che deve essere ricontattato, sia per il team, che deve gestire l’imprevisto.',
          'Vale la pena rivedere periodicamente la disponibilità pubblicata in base alla stagionalità: aprire più slot nei periodi di alta richiesta, ridurli nei periodi in cui il team è concentrato su altre attività, comunicando con chiarezza quando le visite non sono disponibili invece di lasciare una pagina vuota senza spiegazione.',
          'Anche la gestione dei gruppi merita una logica propria: un gruppo numeroso richiede spesso uno slot dedicato o un’organizzazione diversa rispetto a una coppia o una famiglia, e un buon sistema permette di distinguere queste situazioni fin dalla fase di prenotazione, invece di scoprirle solo all’arrivo.',
          'Anche la comunicazione della disponibilità futura merita attenzione: pubblicare il calendario con largo anticipo permette a chi pianifica un viaggio enogastronomico di includere la cantina nel proprio itinerario, mentre una disponibilità visibile solo per i giorni immediatamente successivi esclude proprio chi organizza per tempo.',
        ],
      },
      {
        h2: 'L’upselling durante la prenotazione',
        paragraphs: [
          'Il momento della prenotazione è anche il momento migliore per proporre un pacchetto più ricco — abbinamento con prodotti locali, visita guidata al vigneto, acquisto anticipato di una bottiglia della degustazione da portare a casa.',
          '**Il visitatore che ha appena vissuto un’esperienza positiva è nel momento più propenso a comprare** di tutta la relazione con la cantina: è lo spazio in cui un follow-up automatico dopo la visita — sconto sul primo ordine online, invito al wine club — rende il valore della singola visita molto più alto.',
          'Anche piccoli suggerimenti, proposti al momento giusto, aumentano il valore medio della visita senza risultare invadenti: un abbinamento gastronomico suggerito durante la prenotazione, la possibilità di aggiungere una bottiglia da portare a casa, un upgrade a un percorso più esperienziale con un piccolo supplemento.',
          'L’importante è che ogni proposta sia realmente rilevante e non un tentativo generico di vendere di più: un upsell percepito come pertinente aumenta il valore percepito dell’intera esperienza, uno percepito come forzato rischia di rovinare la sensazione di cura costruita fino a quel momento.',
        ],
      },
      {
        h2: 'Il follow-up dopo la visita: dalla degustazione all’acquisto online',
        paragraphs: [
          'La parte più trascurata dell’enoturismo, nella maggior parte delle cantine, è quello che succede dopo che il visitatore ha lasciato la cantina. Senza un follow-up strutturato, l’entusiasmo della visita si raffredda in pochi giorni e si perde un’occasione di vendita diretta.',
          'Un’email o un messaggio inviato nelle ore o nei giorni successivi alla visita, con un ringraziamento personale, un link diretto ai vini degustati sull’e-commerce e magari un piccolo sconto per il primo ordine online, converte molto meglio di qualunque comunicazione generica inviata più avanti nel tempo.',
          'Questo è anche il momento naturale per invitare il visitatore a iscriversi al wine club, se la cantina ne ha uno: chi ha appena vissuto un’esperienza diretta è nella posizione migliore per apprezzare il valore di ricevere una selezione periodica direttamente a casa.',
          'Il follow-up non deve limitarsi a una singola email: una breve sequenza — ringraziamento subito dopo la visita, promemoria sui vini degustati dopo qualche giorno, invito al wine club o alla newsletter più avanti — costruisce una relazione che continua ben oltre la singola giornata di visita.',
          'Anche il canale scelto per il follow-up ha un peso: per molti visitatori un messaggio breve su un canale di messaggistica diretta ottiene più attenzione di un’email che rischia di perdersi tra altre comunicazioni, ma la scelta va sempre calibrata sulle abitudini reali del proprio pubblico.',
        ],
      },
      {
        h2: 'Integrazione con e-commerce e wine club',
        paragraphs: [
          'Un sistema di prenotazione che funziona bene isolato ma non comunica con l’e-commerce o con il wine club lascia sul tavolo gran parte del valore che potrebbe generare: il visitatore che degusta un vino in cantina dovrebbe poterlo ritrovare, con un click, sulla pagina del negozio online.',
          'L’integrazione permette anche di riconoscere automaticamente chi ha già visitato la cantina quando torna a comprare online, personalizzando la comunicazione: non è la stessa cosa scrivere a uno sconosciuto e scrivere a chi si è già seduto al tavolo di degustazione.',
          'Anche i dati generati dalle prenotazioni — quali vini vengono degustati più spesso, quali esperienze scelgono i visitatori che poi acquistano di più — diventano utili per orientare le decisioni su cosa proporre nell’e-commerce e nel wine club, chiudendo il cerchio tra visita fisica e vendita digitale.',
          'Un sistema realmente integrato riduce anche il lavoro duplicato: gli stessi dati anagrafici, le stesse preferenze, lo stesso storico di acquisto restano accessibili in un unico posto, invece di essere sparsi tra un registro delle visite, un foglio di calcolo del wine club e la piattaforma dell’e-commerce.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'In un caso concept ispirato a progetti reali di enoturismo (esempio illustrativo, non riferito a un singolo cliente), il punto di partenza era simile a quello di molte cantine di dimensioni medie: booking gestito solo per telefono ed email, nessuna visibilità reale sulla disponibilità, ed esperienze — degustazione, visita al vigneto, eventuale pernottamento — gestite come attività scollegate tra loro.',
          'La soluzione ha unito un motore di prenotazione integrato al sito, con calendario reale per ogni tipo di esperienza, caparra al momento della prenotazione, e comunicazioni automatiche prima e dopo ogni visita, incluso un invito mirato all’acquisto online dei vini degustati.',
          'Uno degli elementi più efficaci in questo tipo di progetto è stata proprio la sequenza post-visita: un ringraziamento immediato, seguito da un promemoria con i vini degustati e un piccolo incentivo al primo ordine online, ha permesso di trasformare una parte significativa delle visite in una relazione commerciale continuativa, invece che in un’esperienza isolata senza seguito.',
          'Anche la riduzione delle mancate presentazioni è stata un beneficio concreto: con una caparra minima richiesta al momento della prenotazione e un promemoria automatico nei giorni precedenti, il numero di slot persi per assenze ingiustificate si è ridotto in modo significativo rispetto alla gestione precedente, basata solo su telefono ed email.',
          'Il team, liberato dal tempo speso a rispondere manualmente a richieste ripetitive su orari e disponibilità, ha potuto dedicare più attenzione alla cura della visita stessa — dall’accoglienza al racconto durante la degustazione — che resta, in ogni caso, l’elemento che più incide sulla probabilità che un visitatore torni o consigli la cantina ad altri.',
        ],
      },
      {
        h2: 'Errori comuni nella gestione dell’enoturismo',
        paragraphs: [
          'Il primo è affidarsi solo al telefono, escludendo di fatto chi preferisce prenotare fuori orario o senza dover chiamare.',
          'Il secondo è uno staff non preparato a raccontare la storia dietro il vino durante la degustazione: l’esperienza vale quanto il racconto che la accompagna, non solo il calice servito.',
          'Il terzo è non seguire il visitatore dopo la visita: senza un follow-up, l’interesse creato durante la degustazione si raffredda in pochi giorni.',
          'Il quarto errore comune è pubblicare una disponibilità che non rispecchia la realtà operativa della cantina: slot troppo ravvicinati che non lasciano tempo di preparazione, oppure al contrario una disponibilità troppo scarsa, che scoraggia chi cerca di prenotare con largo anticipo.',
        ],
      },
      {
        h2: 'Errori nella scelta della piattaforma tecnica',
        paragraphs: [
          'Un errore frequente è affidarsi a strumenti generici, pensati per altri settori, che gestiscono male le specificità dell’enoturismo: durata variabile delle esperienze, gruppi di dimensioni diverse, necessità di comunicare informazioni pratiche specifiche (parcheggio, accessibilità, cosa indossare per una visita in vigna).',
          'Un altro errore è scegliere un sistema di prenotazione completamente scollegato dal resto degli strumenti digitali della cantina — sito, e-commerce, comunicazioni via email — costringendo il team a un doppio lavoro per tenere allineate le informazioni tra piattaforme diverse.',
          'Vale la pena evitare anche l’eccesso opposto: costruire un sistema su misura estremamente complesso quando le esigenze reali della cantina sono ancora semplici. La piattaforma giusta è quella che risolve i problemi attuali e può crescere con la cantina, non quella con più funzionalità sulla carta.',
        ],
      },
      {
        h2: 'Domande frequenti sull’enoturismo digitale',
        paragraphs: [
          '**Serve davvero far pagare una caparra per prenotare una degustazione?** In molti casi sì, anche una cifra minima: non serve a generare fatturato in sé, serve a rendere concreto l’impegno preso e a ridurre in modo significativo le mancate presentazioni.',
          '**Un sistema di prenotazione online funziona anche per una cantina piccola con pochi visitatori a settimana?** Sì: anche con volumi ridotti, evita gli errori di gestione manuale e libera tempo che, su una cantina piccola, pesa proporzionalmente ancora di più rispetto a una realtà con uno staff dedicato.',
          '**Conviene gestire le prenotazioni con un semplice modulo di contatto sul sito?** Un modulo di contatto informa che si vuole prenotare, ma non conferma nulla: il visitatore resta in attesa di una risposta manuale, con tutti i rischi — tempi lunghi, errori, mancate risposte — che questo comporta.',
          '**Quanto tempo richiede impostare un sistema di prenotazione completo per l’enoturismo?** Dipende dalla complessità delle esperienze offerte, ma nella maggior parte dei casi non serve partire da un progetto enorme: il primo passo — rendere prenotabile online l’esperienza principale — può essere avviato in tempi contenuti, per poi allargare gradualmente calendario, upsell e automazioni.',
          '**Le comunicazioni automatiche rischiano di far sembrare la cantina impersonale?** Non se sono scritte con cura: automatizzare l’invio non significa rinunciare al tono e allo stile della cantina. Il rischio opposto — nessuna comunicazione strutturata — pesa molto di più sulla percezione che il visitatore si porta a casa dopo la visita.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve digitalizzare tutta l’esperienza in un colpo solo: **il primo passo è rendere prenotabile online quello che oggi si gestisce solo per telefono**, misurare cosa cambia, e da lì costruire l’automazione attorno al resto del percorso.',
          'Il passo successivo è osservare cosa cambia — quante prenotazioni arrivano fuori dagli orari di ufficio, quante mancate presentazioni si riducono, quanti visitatori acquistano online dopo la visita — e usare questi dati per decidere dove investire l’automazione successiva, che si tratti del follow-up post-visita o dell’integrazione con il wine club.',
          'Realizziamo sistemi di prenotazione pensati per cantine e wine tourism, integrati con sito, e-commerce e comunicazioni automatiche pre e post visita. [Scopri il software su misura per cantine →](/software/vitivinicolo)',
        ],
      },
    ],
  },
  {
    slug: 'software-frantoi-gestione-ordini-crm',
    title: 'Software per Frantoi: Come Automatizzare Ordini B2B e Gestione Clienti',
    seoTitle: 'Software frantoi: gestione ordini e CRM B2B',
    excerpt:
      'Gestire ordini B2B, distributori e consegne con fogli di calcolo funziona finché i clienti sono pochi. Ecco cosa cambia con un CRM pensato per un frantoio, e come evitare gli errori più costosi.',
    date: '2026-08-01',
    readingMinutes: 9,
    category: 'Tecnologie',
    featuredImage: '/images/blog/software-frantoi-gestione-ordini-crm.jpg',
    imageAlt: 'Gestione digitale di ordini B2B per un frantoio con dashboard di controllo',
    tags: ['Software Frantoi', 'CRM Agroalimentare', 'Gestione Ordini', 'B2B'],
    keywords: ['software frantoi', 'gestione ordini frantoi', 'CRM agroalimentare', 'software olio B2B', 'automazione vendite frantoi'],
    relatedSlugs: ['chatbot-cantina-ai-customer-service', 'ecommerce-vino-margini-vendita-diretta'],
    relatedLinks: [
      { href: '/software/frantoi', label: 'Software su misura per frantoi' },
      { href: '/settori/oleifici-food-tech', label: 'Settore Oleifici & Food Tech' },
      { href: '/portfolio/frantoi-san-lorenzo', label: 'Case study: Frantoi San Lorenzo' },
    ],
    body: [
      {
        h2: 'Perché i fogli di calcolo smettono di funzionare',
        paragraphs: [
          'Un foglio Excel per gestire ordini funziona bene quando i clienti sono una decina e le consegne poche a settimana. **Superata quella soglia, gli errori diventano quasi inevitabili**: una riga sovrascritta, un ordine duplicato, un cliente dimenticato in un follow-up.',
          'Il problema non è la persona che gestisce il foglio: è lo strumento, che non è pensato per tracciare stato ordini, scadenze e comunicazioni in modo affidabile su volumi crescenti.',
          'Nella pratica, il foglio finisce per vivere su più computer contemporaneamente: una versione sul PC dell’ufficio, una su un portatile, una allegata a un’email di qualche settimana prima. Capire quale sia quella aggiornata diventa un problema quotidiano, soprattutto quando più persone toccano gli stessi dati.',
          'Nei mesi di molitura, quando gli ordini si concentrano in poche settimane, questi piccoli errori si moltiplicano insieme al volume di lavoro. Un problema che a settembre sembrava gestibile, a novembre — nel pieno della campagna — può diventare un collo di bottiglia reale.',
        ],
      },
      {
        h2: 'La stagionalità della molitura non deve significare gestione stagionale',
        paragraphs: [
          'La molitura si concentra in poche settimane l’anno, tipicamente tra ottobre e dicembre. In quel periodo gli ordini si moltiplicano, le consegne si accavallano e il tempo per gestire ogni cliente individualmente si riduce drasticamente rispetto al resto dell’anno.',
          'Molti frantoi, quasi per inerzia, trattano anche la relazione commerciale come qualcosa di stagionale: intensa durante la campagna, quasi assente nei mesi successivi. È un errore che lascia sul tavolo diverse occasioni di vendita, perché un cliente che ha comprato a novembre spesso riordina a marzo o ad aprile, se qualcuno glielo ricorda.',
          'Un sistema strutturato permette di continuare a seguire i clienti anche fuori dai mesi di picco, con promemoria automatici basati sul consumo tipico di ciascuno — senza che questo richieda lo stesso carico di lavoro manuale del periodo di raccolta.',
          'In molti casi, i mesi fuori stagione sono in realtà il momento migliore per costruire la relazione con un cliente nuovo, con più tempo a disposizione per una telefonata o una visita — a patto di avere un sistema che ricordi di farlo.',
        ],
      },
      {
        h2: 'Come sta cambiando la vendita di olio extravergine in Italia',
        paragraphs: [
          'Un numero crescente di consumatori e di ristoratori cerca oggi maggiore trasparenza su provenienza, metodo di produzione e annata dell’olio che acquista. Non è più solo una questione di prezzo: la tracciabilità è diventata parte del valore percepito del prodotto.',
          'In molti casi, questo spinge i produttori più piccoli a costruire un rapporto più diretto con il cliente finale — attraverso vendita diretta, e-commerce o relazioni commerciali dirette con ristoranti e negozi — invece di dipendere esclusivamente dai grossisti come unico canale di sbocco.',
          'Questo cambiamento porta con sé un aumento reale del numero di relazioni commerciali da gestire: più clienti diretti, più punti di contatto, più comunicazioni da tenere sotto controllo rispetto a quando la vendita passava quasi solo attraverso pochi intermediari.',
          'Allo stesso tempo, la maggior parte dei frantoi continua a lavorare con canali misti — grossisti, distribuzione organizzata, vendita diretta — e questa convivenza rende la gestione ancora più complessa se affidata solo a strumenti pensati per un singolo canale, come un foglio di calcolo.',
        ],
      },
      {
        h2: 'I problemi reali di un frantoio senza software dedicato',
        paragraphs: [
          'Ordini che restano fermi in una casella email tra decine di altre, senza un sistema che segnali quando serve una risposta.',
          'Errori su quantità o indirizzi di consegna, che nel B2B costano molto di più di un semplice disguido: un cliente che riceve l’ordine sbagliato spesso non riordina.',
          'Nessuna visibilità su chi sono davvero i clienti più importanti: senza dati centralizzati, è difficile sapere chi genera più fatturato o margine, e quindi dove investire tempo commerciale.',
          'Comunicazione interna frammentata: chi prende la telefonata non sempre sa cosa è stato promesso al cliente dal collega che ha gestito l’ordine precedente, e questo genera incoerenze che il cliente nota — soprattutto se è un ristorante o un negozio che ordina con regolarità.',
        ],
      },
      {
        h2: 'Tracciare lo stock per lotto e annata: un problema spesso sottovalutato',
        paragraphs: [
          'L’olio non è un prodotto uniforme: ogni lotto di spremitura ha caratteristiche organolettiche proprie, e l’annata incide in modo diretto su gusto, acidità e shelf life percepita. Trattare lo stock come un numero unico, senza distinzione di lotto, è una semplificazione che prima o poi crea problemi.',
          'Senza un sistema che colleghi ordine, cliente e lotto, diventa difficile rispondere a domande semplici ma importanti: quale lotto è quasi esaurito, quale cliente ha ricevuto quale partita, cosa fare se un lotto specifico presenta un problema di qualità da segnalare.',
          'Alcuni clienti, in particolare ristoranti di fascia alta o negozi specializzati, chiedono esplicitamente un’annata precisa o un lotto con caratteristiche costanti nel tempo. Sapere chi sono questi clienti, e cosa hanno acquistato in passato, permette di servirli meglio e di evitare di proporre loro un prodotto diverso da quello che si aspettano.',
          'Un sistema strutturato registra automaticamente questa associazione a ogni ordine, così che non serva ricostruirla a memoria o rovistando tra bolle di consegna cartacee quando serve un’informazione precisa, magari mesi dopo la vendita.',
        ],
      },
      {
        h2: 'Quando B2B e B2C convivono nello stesso sistema (o restano separati per errore)',
        paragraphs: [
          'Molti frantoi gestiscono la vendita a ristoranti, negozi e distributori con uno strumento — spesso telefono e Excel — e la vendita diretta al consumatore finale con un altro, magari un e-commerce scollegato dal resto. Il risultato è una visione spezzata del proprio business.',
          'Questa separazione crea problemi concreti: prezzi non sempre coerenti tra canali, nessuna visibilità su un cliente che compra sia come privato sia per il proprio ristorante, difficoltà a capire quale canale sta davvero crescendo e quale invece si sta riducendo.',
          '**Un CRM unico, capace di gestire sia gli ordini B2B sia quelli B2C, restituisce invece una visione unificata**: un solo profilo cliente, uno storico ordini completo, indipendentemente dal canale con cui l’acquisto è arrivato.',
        ],
      },
      {
        h2: 'Cosa fa un CRM pensato per un frantoio',
        paragraphs: [
          'Centralizza ogni contatto e ogni ordine in un unico posto, con stato aggiornato (in lavorazione, spedito, fatturato) visibile a chi ne ha bisogno senza dover chiedere in giro.',
          'Automatizza i promemoria: un follow-up dopo una richiesta senza risposta, un avviso quando un cliente abituale non ordina da un po’ di tempo, un alert quando lo stock scende sotto una soglia critica.',
          '**Genera report reali** su quali clienti comprano di più, con quale frequenza e quale margine — informazioni che, su un foglio di calcolo, restano quasi sempre nella testa di una sola persona.',
          'Gestisce listini differenziati per canale — prezzo distributore, prezzo negozio, prezzo consumatore finale — applicandoli automaticamente in base al tipo di cliente, senza bisogno di ricalcolare manualmente ogni preventivo o rischiare di applicare per errore il listino sbagliato.',
        ],
      },
      {
        h2: 'Preventivi e ordini ricorrenti stagionali: automatizzare senza perdere personalizzazione',
        paragraphs: [
          'Molti clienti B2B di un frantoio — un ristorante, un negozio di alimentari, un piccolo distributore — ordinano quantitativi simili con una certa regolarità: ogni due mesi, ogni stagione, o subito dopo la campagna di molitura per rifornirsi per l’anno.',
          'Un sistema strutturato può generare automaticamente un nuovo preventivo basato sull’ultimo ordine dello stesso cliente, pronto per essere rivisto, personalizzato se serve e inviato — invece di ricostruirlo da zero ogni volta partendo da una vecchia email o da un vecchio documento.',
          'Questo riduce in modo significativo il tempo amministrativo dedicato a ordini che, di fatto, si ripetono con poche variazioni, e libera tempo per le attività che generano davvero nuovo fatturato: contattare clienti nuovi, seguire chi sta valutando di aumentare i quantitativi.',
          'L’automazione non toglie spazio alla personalizzazione: uno sconto quantità, una nota specifica, una variazione di lotto possono sempre essere aggiunti prima dell’invio. Il punto non è eliminare la revisione umana, ma eliminare il lavoro ripetitivo che la precede.',
        ],
      },
      {
        h2: 'Automatizzare il processo vendite B2B senza perdere il controllo',
        paragraphs: [
          'Un lead che arriva dal sito o da una chiamata entra automaticamente nel sistema, con un promemoria che parte se nessuno risponde entro un tempo definito.',
          '> Automatizzare non significa eliminare il rapporto umano: significa assicurarsi che nessun contatto si perda per semplice dimenticanza.',
          'Le richieste di un potenziale distributore o di un ristorante interessato a un rifornimento regolare hanno spesso un valore molto più alto di un singolo ordine — vale la pena qualificarle rapidamente, capire volumi previsti e frequenza, invece di trattarle come una richiesta generica in coda con le altre.',
          'Un sistema che assegna automaticamente ogni nuovo contatto alla persona giusta del team, con visibilità su chi sta seguendo cosa, evita anche la situazione opposta: due persone che rispondono allo stesso cliente con informazioni diverse, o nessuno che risponde perché ognuno pensava se ne stesse occupando l’altro.',
        ],
      },
      {
        h2: 'Come implementare un sistema del genere, passo dopo passo',
        paragraphs: [
          'Il primo passo, prima di qualsiasi automazione, è censire e centralizzare in un unico sistema tutti i contatti attivi — clienti B2B, clienti diretti, distributori — insieme allo storico degli ordini disponibile, anche se parziale o disomogeneo.',
          'Il secondo passo è digitalizzare il catalogo prodotti collegandolo ai lotti disponibili: quantità in stock per lotto, annata, eventuali caratteristiche specifiche da comunicare al cliente. Questo passaggio richiede un po’ di lavoro iniziale, ma è la base su cui si appoggia tutto il resto.',
          'Il terzo passo è impostare poche automazioni essenziali: un follow-up sui lead senza risposta, un alert quando un cliente abituale rallenta gli ordini, un avviso quando lo stock di un lotto scende sotto una soglia critica. Poche regole, ma applicate con costanza.',
          'Solo dopo, con il sistema in uso quotidiano, ha senso estendere l’automazione ai preventivi ricorrenti e alla reportistica commerciale più avanzata. Provare a fare tutto insieme dal primo giorno è spesso la ragione per cui questi progetti falliscono o vengono abbandonati a metà.',
          'Vale la pena pianificare l’avvio fuori dai mesi di picco: iniziare a marzo o ad aprile, con qualche mese di margine prima della campagna successiva, permette al team di abituarsi al sistema senza la pressione dei volumi di ottobre e novembre.',
        ],
      },
      {
        h2: 'Formare il team a usare il sistema, non solo installarlo',
        paragraphs: [
          'Un CRM installato ma usato solo da una persona su tre non risolve granché: le informazioni restano comunque frammentate, solo distribuite su un numero minore di strumenti invece che eliminate del tutto.',
          'Serve un momento di formazione reale — anche breve — in cui il team capisce non solo come inserire un ordine, ma perché farlo in quel modo aiuta tutti, compreso chi non usa direttamente il sistema ma ne beneficia dei dati.',
          'Avere una persona di riferimento interna, responsabile della qualità dei dati inseriti, fa una differenza enorme nei primi mesi: è quella persona che nota se un collega sta tornando alle vecchie abitudini e interviene prima che il problema si radichi di nuovo.',
        ],
      },
      {
        h2: 'Il costo nascosto del tempo perso in attività ripetitive',
        paragraphs: [
          'Il tempo che il team dedica ogni settimana a ricostruire preventivi, cercare vecchie email o verificare a mano la disponibilità di un lotto raramente viene contato come un costo reale, eppure lo è: è tempo sottratto a chi potrebbe usarlo per parlare con un cliente o cercarne uno nuovo.',
          'Su base annua, sommando i minuti persi in attività ripetitive durante ogni settimana della campagna di molitura, il totale è spesso più alto di quanto ci si aspetterebbe — anche se difficile da quantificare con precisione senza un sistema che tenga traccia del tempo dedicato a ciascuna attività.',
          'Un’automazione anche minima, come la generazione automatica di un preventivo ricorrente o un promemoria di follow-up, restituisce quel tempo alla parte del lavoro che nessun software può sostituire: la relazione diretta con il cliente.',
          'Vale la pena guardare a queste automazioni non come una spesa, ma come una redistribuzione del tempo già disponibile verso le attività che hanno davvero un impatto sul fatturato.',
        ],
      },
      {
        h2: 'Distributori, negozi e ristoranti: relazioni commerciali diverse da gestire diversamente',
        paragraphs: [
          'Un distributore che acquista grandi quantitativi con margini più bassi ha esigenze diverse da un ristorante che ordina poche taniche al mese ma è disposto a pagare di più per un prodotto con una storia da raccontare ai propri clienti.',
          'Trattare tutti i clienti B2B allo stesso modo, con lo stesso ritmo di comunicazione e le stesse condizioni, significa quasi sempre sotto-servire i clienti più importanti e sovra-servire quelli meno redditizi.',
          'Un sistema strutturato permette di segmentare i clienti in base a volume, frequenza e marginalità, e di adattare automazioni e comunicazioni a ciascun segmento — senza che questo richieda di ricordare a memoria le caratteristiche di ogni singolo cliente.',
          'Anche i negozi specializzati, spesso una via di mezzo tra il distributore e il cliente finale, beneficiano di questo approccio: ordinano con una regolarità propria, diversa sia da un grande distributore sia da un consumatore privato, e meritano una gestione che rifletta questa differenza.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Nel case study concept di Frantoi San Lorenzo (esempio illustrativo, non un cliente reale — lo trovi in portfolio) il problema di partenza era la dipendenza quasi totale dai grossisti, con un catalogo ancora cartaceo e nessun canale diretto verso il cliente finale.',
          'La soluzione ha unito e-commerce diretto, tracciabilità di lotto e gestione ordini centralizzata — permettendo al frantoio di vendere anche fuori dal circuito dei distributori tradizionali, con dati reali su cosa funziona.',
          'Nell’esempio concettuale, il passaggio più significativo non è stato tecnico ma organizzativo: smettere di trattare ogni cliente come un caso isolato da ricordare a memoria, e iniziare a trattarlo come un contatto con una storia tracciata — ordini precedenti, lotti acquistati, preferenze note.',
          'A distanza di una stagione, nell’esempio, la parte più utile del sistema non era l’e-commerce in sé, ma i promemoria automatici sui clienti che stavano rallentando gli ordini: un segnale che, senza un sistema strutturato, sarebbe rimasto invisibile fino a quando sarebbe stato troppo tardi per intervenire.',
        ],
      },
      {
        h2: 'Errori comuni da evitare',
        paragraphs: [
          'Affidarsi a Excel oltre la soglia in cui diventa gestibile in modo affidabile, spesso per abitudine più che per scelta reale.',
          'Lasciare che i clienti scoprano lo stato del loro ordine solo chiedendo per telefono, invece di comunicarlo in modo proattivo.',
          'Non avere un follow-up sistematico sui clienti che ordinano meno frequentemente del solito — spesso il primo segnale che stanno comprando altrove.',
          'Trattare la gestione dello stock per lotto come un dettaglio secondario, da sistemare "quando c’è tempo" — salvo poi trovarsi senza risposta quando un cliente chiede informazioni precise su un lotto specifico già consegnato.',
          'Voler digitalizzare tutto insieme, in un solo passaggio, prima della campagna di molitura: è uno dei motivi più comuni per cui un progetto di questo tipo si blocca. Meglio partire con un perimetro ridotto e ampliarlo con calma nei mesi successivi.',
        ],
      },
      {
        h2: 'Il ruolo dei dati nel decidere dove investire tempo commerciale',
        paragraphs: [
          'Con i dati centralizzati, un frantoio può iniziare a rispondere a domande che prima restavano solo intuizioni: quali clienti generano più fatturato, quali generano più margine — e sono spesso due liste diverse — e su quali vale davvero la pena investire tempo commerciale.',
          'Un cliente che ordina spesso ma con margini bassi merita un’attenzione diversa rispetto a uno che ordina meno frequentemente ma con volumi e marginalità più alti. Senza dati strutturati, questa distinzione resta quasi sempre affidata alla memoria di chi segue le vendite.',
          'Allo stesso modo, i dati permettono di individuare per tempo i clienti che stanno riducendo gli ordini — un segnale che, intercettato in anticipo con una telefonata o un’offerta mirata, può evitare di perdere del tutto una relazione commerciale costruita in anni.',
          'Questi stessi dati, nel tempo, aiutano anche a decidere le priorità di produzione: se un certo tipo di olio o un certo formato di confezione viene richiesto sempre più spesso, è un’informazione utile ben oltre il reparto vendite.',
        ],
      },
      {
        h2: 'Quanto costa non fare nulla',
        paragraphs: [
          'Non decidere è comunque una decisione: continuare con i fogli di calcolo e le telefonate ha un costo, anche se meno visibile di quello di un nuovo software, perché si manifesta in occasioni perse più che in una voce di spesa registrata da qualche parte.',
          'Un cliente che smette di ordinare senza che nessuno se ne accorga in tempo, un lead che resta senza risposta per giorni, un preventivo ricostruito da zero ogni volta: sono costi reali, distribuiti nel tempo, che raramente vengono messi a bilancio ma che pesano comunque sul risultato.',
          'Guardare a un sistema strutturato come a un investimento, e non come a una spesa aggiuntiva, cambia la prospettiva: il confronto corretto non è tra costo del software e costo zero, ma tra costo del software e costo reale di continuare come si è sempre fatto.',
        ],
      },
      {
        h2: 'Scegliere un sistema adatto a un frantoio, non un CRM generico',
        paragraphs: [
          'Molti CRM generici sono pensati per software o servizi digitali, con concetti — pipeline, deal, ticket — che si adattano male alla realtà di un frantoio, fatta di ordini fisici, lotti, consegne e una stagionalità marcata che pochi strumenti standard gestiscono davvero bene.',
          'Un sistema costruito, o comunque configurato, pensando a come lavora davvero un frantoio riduce lo scarto tra come il team lavora oggi e come dovrebbe usare il nuovo strumento — ed è spesso la differenza tra un progetto adottato davvero e uno abbandonato dopo poche settimane.',
          'Vale la pena preferire un partner che parta dai processi reali dell’azienda, invece di forzare l’azienda ad adattarsi a un software pensato per un settore diverso: la personalizzazione iniziale costa un po’ di tempo in più, ma si ripaga rapidamente in adozione da parte del team.',
        ],
      },
      {
        h2: 'Domande frequenti',
        paragraphs: [
          '**Serve sostituire subito tutti i fogli Excel esistenti?** No. Il passaggio più efficace è graduale: si parte centralizzando contatti e ordini attivi, e solo dopo si estende il sistema a preventivi ricorrenti e reportistica, senza fermare l’attività quotidiana per una migrazione completa.',
          '**Un sistema di questo tipo ha senso anche per un frantoio piccolo, con pochi dipendenti?** Sì, spesso è proprio dove il tempo di chi gestisce le vendite è più prezioso che un’automazione anche minima fa la differenza più grande, liberando ore da dedicare al rapporto diretto con i clienti.',
          '**Come si gestisce la tracciabilità di lotto richiesta dalla normativa insieme al CRM commerciale?** I due aspetti si integrano bene: lo stesso sistema che traccia lotto e annata per obbligo normativo può alimentare automaticamente le informazioni commerciali su cosa è stato venduto a chi, senza doppio inserimento dei dati.',
          '**Quanto tempo serve per vedere risultati concreti?** Nella maggior parte dei casi, i primi benefici si notano già nelle prime settimane, soprattutto sui follow-up automatici: sono spesso il tipo di attività più semplice da dimenticare manualmente, e il primo a mostrare un impatto misurabile una volta automatizzato.',
          '**Un sistema del genere funziona anche se i clienti B2B continuano a ordinare per telefono?** Sì: il canale con cui arriva l’ordine — telefono, email, sito — non cambia il fatto che, una volta ricevuto, debba entrare nello stesso sistema centralizzato. È lì che si gioca la differenza, non nel canale di contatto.',
          '**Cosa succede ai dati raccolti negli anni con i vecchi fogli Excel?** Nella maggior parte dei casi possono essere importati nel nuovo sistema come storico, anche se incompleti: anche uno storico parziale è più utile di nessuno storico, perché dà già un primo quadro delle abitudini d’acquisto di ogni cliente.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve sostituire tutto in un colpo: **il primo passo è centralizzare i contatti e gli ordini attivi in un unico sistema**, e automatizzare solo i follow-up più critici, prima di allargare l’automazione al resto del processo.',
          'Costruiamo CRM su misura per aziende agroalimentari, pensati per gestione ordini B2B e follow-up automatico. [Scopri il software su misura per frantoi →](/software/frantoi)',
        ],
      },
    ],
  },
  {
    slug: 'agriturismo-booking-online-prenotazioni',
    title: 'Agriturismi: Come il Booking Online Aumenta Prenotazioni e Riduce il Lavoro Amministrativo',
    seoTitle: 'Agriturismo booking online: prenotazioni e gestione',
    excerpt:
      'Chi cerca un soggiorno oggi si aspetta di poter prenotare online, come su qualsiasi altra piattaforma. Ecco come un sistema di booking dedicato aumenta le prenotazioni dirette e alleggerisce il lavoro di chi gestisce l’agriturismo.',
    date: '2026-08-01',
    readingMinutes: 9,
    category: 'E-commerce',
    featuredImage: '/images/blog/agriturismo-booking-online-prenotazioni.jpg',
    imageAlt: 'Camera di un agriturismo pronta ad accogliere ospiti prenotati online',
    tags: ['Agriturismo', 'Booking Online', 'Gestione Prenotazioni', 'Farm Stay'],
    keywords: ['agriturismo booking online', 'prenotazioni agriturismo', 'sistema gestione agriturismo', 'farm stay online', 'agriturismo Italia'],
    relatedSlugs: ['enoturismo-prenotazioni-online-vendite-dirette', 'chatbot-cantina-ai-customer-service'],
    relatedLinks: [
      { href: '/software/hospitality', label: 'Software su misura per agriturismi' },
      { href: '/settori/wine-hospitality-agriturismi', label: 'Settore Wine Hospitality & Agriturismi' },
      { href: '/portfolio/podere-la-vite', label: 'Case study: Podere La Vite' },
    ],
    body: [
      {
        h2: 'Perché il booking online non è più un dettaglio',
        paragraphs: [
          'Chi cerca un soggiorno in agriturismo oggi è abituato a piattaforme dove si vede la disponibilità, si prenota e si paga in pochi minuti. **Un agriturismo che offre solo telefono o email parte già svantaggiato** rispetto a chi propone lo stesso livello di comodità di un sito di prenotazioni generalista.',
          'Non è solo una questione di immagine: è una questione di quante richieste arrivano davvero a diventare una prenotazione confermata, e quante invece si perdono nell’attesa di una risposta.',
          'Chi pianifica un weekend fuori città, o una settimana di vacanza in campagna, oggi confronta quasi sempre più strutture in parallelo, aprendo diverse schede nello stesso momento: chi risponde prima con una disponibilità chiara, spesso, si aggiudica la prenotazione anche a parità di prezzo.',
          'L’esperienza dell’ospite, in un certo senso, comincia molto prima dell’arrivo in azienda agricola: comincia dal momento in cui prova a capire se c’è posto per le date che ha in mente, e da quanto è semplice o complicato scoprirlo.',
        ],
      },
      {
        h2: 'Come sta cambiando il modo di cercare e prenotare un soggiorno in campagna',
        paragraphs: [
          'Un numero crescente di persone pianifica le vacanze in agriturismo con settimane, a volte mesi, di anticipo, confrontando strutture diverse online prima ancora di contattarle direttamente.',
          'La maggior parte di chi prenota oggi si aspetta di poter vedere calendario e prezzi senza dover scrivere una email e aspettare: è lo stesso comportamento ormai dato per scontato su qualsiasi altro tipo di alloggio, dall’hotel all’appartamento in affitto breve.',
          'Anche il profilo di chi sceglie un agriturismo si è ampliato: non più solo un pubblico di nicchia legato al turismo rurale tradizionale, ma famiglie, coppie, gruppi di amici e, in molti casi, ospiti stranieri che pianificano da un altro fuso orario e prenotano fuori dagli orari di ufficio italiani.',
          'Questo cambiamento riguarda anche il modo in cui un soggiorno viene scoperto: sempre più spesso attraverso ricerche online, mappe e portali di comparazione, prima ancora che attraverso il passaparola che per anni ha rappresentato il canale principale per molte strutture agricole.',
          'Anche le aspettative sulla velocità di risposta sono cambiate: un ospite che scrive oggi si aspetta un riscontro nel giro di poche ore, non di giorni, e considera un lungo silenzio come un segnale che la struttura potrebbe non essere organizzata quanto vorrebbe.',
        ],
      },
      {
        h2: 'Cosa perde davvero un agriturismo senza booking diretto',
        paragraphs: [
          'Il primo costo è la richiesta che non arriva mai a diventare prenotazione: un ospite che scrive un’email, non riceve risposta entro un tempo ragionevole, e semplicemente prenota altrove, spesso senza nemmeno segnalare il motivo.',
          'Il secondo è il tempo del titolare o del team, speso a rispondere manualmente alle stesse domande — disponibilità, prezzi, come arrivare — invece che a occuparsi dell’accoglienza e della gestione dell’azienda agricola.',
          'Il terzo, meno visibile, è la mancanza di dati: senza un sistema di prenotazione strutturato, è difficile sapere davvero quali periodi si riempiono prima, quali camere sono più richieste, e quali servizi extra vengono scelti più spesso.',
          'C’è anche un quarto costo, spesso sottovalutato: l’immagine percepita. Un ospite che deve scrivere e aspettare giorni per una conferma percepisce una gestione meno curata, indipendentemente da quanto sia bella la struttura una volta arrivato.',
        ],
      },
      {
        h2: 'Il costo nascosto delle commissioni sui portali OTA',
        paragraphs: [
          'Molti agriturismi si affidano quasi esclusivamente ai portali di prenotazione di terze parti — Booking.com e piattaforme simili — che offrono visibilità reale, ma trattengono una commissione su ogni prenotazione che passa dal loro canale.',
          'Quella commissione, ripetuta su ogni prenotazione per un’intera stagione, si traduce in una quota di fatturato che non torna mai alla struttura: è un costo fisso e ricorrente, anche se raramente viene guardato come tale nel bilancio complessivo dell’attività.',
          '**Il punto non è smettere di usare i portali**, che restano un canale utile per farsi scoprire da chi non conosce ancora la struttura: il punto è non dipendere esclusivamente da loro, offrendo anche un modo diretto e altrettanto semplice per prenotare sul proprio sito.',
          'Un ospite che ha già soggiornato una volta, e torna una seconda o terza volta, non dovrebbe passare di nuovo dal portale esterno e dalla relativa commissione: è esattamente il tipo di prenotazione che un canale diretto ben fatto dovrebbe intercettare senza sforzo.',
        ],
      },
      {
        h2: 'Overbooking e gestione manuale: il problema quotidiano',
        paragraphs: [
          'La gestione manuale delle prenotazioni, oltre un certo numero di camere, porta quasi inevitabilmente a errori: due prenotazioni per la stessa camera nello stesso periodo, un’agenda cartacea non aggiornata, una disponibilità comunicata a voce che nessuno ha scritto da nessuna parte.',
          'Quando le prenotazioni arrivano da più canali — telefono, email, uno o più portali esterni — senza un sistema che li tenga sincronizzati, il rischio di overbooking cresce in modo quasi proporzionale al numero di canali usati.',
          'Un overbooking scoperto pochi giorni prima dell’arrivo non è solo un problema logistico: è un ospite da spostare altrove, spesso con un imbarazzo che pesa sulla reputazione della struttura molto più del singolo mancato guadagno.',
          'Anche senza arrivare all’overbooking vero e proprio, la gestione manuale consuma tempo in modo silenzioso: verificare a mano la disponibilità ogni volta che arriva una richiesta, aggiornare più agende in parallelo, rispondere di nuovo a chi ha già chiesto la stessa cosa qualche giorno prima.',
        ],
      },
      {
        h2: 'La soluzione concettuale: un booking system pensato per l’agriturismo',
        paragraphs: [
          'La soluzione, nel principio, non è complicata: dare all’ospite la possibilità di vedere la disponibilità reale e prenotare in autonomia, in qualsiasi momento, con una conferma immediata invece che un’attesa indefinita.',
          '**Il punto centrale non è la tecnologia in sé, ma cosa permette di fare**: liberare tempo dal lavoro amministrativo ripetitivo, ridurre gli errori di gestione, e trasformare ogni prenotazione in un’occasione per proporre anche i servizi extra dell’azienda agricola.',
          'Un buon sistema di prenotazione, in questo senso, va pensato come parte dell’esperienza dell’ospite fin dal primo contatto, non come un semplice modulo tecnico aggiunto al sito: il modo in cui si prenota comunica già qualcosa sulla cura con cui viene gestito il resto del soggiorno.',
        ],
      },
      {
        h2: 'Cosa deve fare davvero un buon sistema di prenotazione per agriturismi',
        paragraphs: [
          'Deve mostrare la disponibilità reale delle camere, aggiornata in tempo reale, senza costringere l’ospite a scrivere e aspettare una risposta manuale per sapere se un periodo è libero.',
          'Deve gestire tipologie di camera diverse — con letto matrimoniale, con letti singoli, con culla per famiglie con bambini — ciascuna con propria disponibilità, prezzo e capienza massima, senza che il team debba gestire manualmente le eccezioni per ogni richiesta particolare.',
          'Deve permettere di aggiungere servizi extra già durante la prenotazione — cena, degustazione, escursione guidata, transfer dalla stazione — con prezzo chiaro, invece di lasciare che l’ospite li scopra solo all’arrivo, quando è più difficile organizzarli.',
          'Deve infine restituire dati utilizzabili: quali periodi si riempiono per primi, quali camere sono più richieste, quali servizi extra vengono scelti più spesso. Senza questi dati, decidere prezzi e disponibilità futura resta più una sensazione che una decisione basata su numeri reali.',
          'Un ultimo requisito, spesso trascurato in fase di scelta, è la semplicità di gestione lato team: un sistema che richiede formazione lunga o passaggi macchinosi per bloccare una camera o aggiungere un servizio speciale finisce per essere usato male, o abbandonato del tutto dopo le prime settimane.',
        ],
      },
      {
        h2: 'Come funziona in pratica, passo dopo passo',
        paragraphs: [
          'Il primo passo è una pagina "Prenota" con calendario reale: l’ospite seleziona le date, vede subito quali camere sono disponibili e a quale prezzo, senza dover scrivere per chiedere.',
          'Il secondo passo è la selezione di camera e servizi extra nello stesso flusso di prenotazione, con caparra o pagamento richiesto al momento della conferma: un impegno concreto, anche minimo, che rende la prenotazione reale invece che provvisoria.',
          'Il terzo passo è la conferma automatica: un’email o un messaggio immediato che rassicura l’ospite, con tutte le informazioni pratiche necessarie, senza richiedere alcun intervento manuale da parte del team.',
          'Il quarto passo, spesso trascurato, è la sincronizzazione con gli altri canali ancora attivi — telefono per chi preferisce ancora chiamare, eventuali portali esterni — così che una prenotazione arrivata da un canale blocchi automaticamente la disponibilità anche per gli altri.',
        ],
      },
      {
        h2: 'Sincronizzare portali esterni e booking diretto senza perdere il controllo',
        paragraphs: [
          'Abbandonare del tutto i portali esterni raramente è la scelta giusta, soprattutto per chi ha ancora bisogno di visibilità presso un pubblico che non conosce la struttura: il punto non è scegliere tra portali e booking diretto, ma farli convivere senza rischi.',
          'Un calendario sincronizzato tra il sito diretto e i principali portali esterni evita che la stessa camera venga prenotata due volte da canali diversi — uno degli errori più costosi e più frequenti nella gestione manuale.',
          'Con il tempo, ha senso spostare gradualmente il peso verso il canale diretto — attraverso un sito curato, comunicazione sui social, ospiti che tornano — riducendo la dipendenza dai portali senza comunque rinunciarvi del tutto.',
          'Anche la coerenza dei prezzi tra canali merita attenzione: prezzi troppo diversi tra portale esterno e sito diretto generano confusione, e in alcuni casi vanno anche contro le condizioni contrattuali dei portali stessi, che spesso richiedono parità tariffaria.',
        ],
      },
      {
        h2: 'Gestire la stagionalità con intelligenza',
        paragraphs: [
          'La maggior parte degli agriturismi vive una stagionalità marcata: mesi di altissima richiesta, in cui ogni camera vale molto, e mesi più tranquilli in cui riempire anche solo una parte delle camere fa la differenza sul bilancio dell’anno.',
          'Un sistema di prenotazione ben impostato permette di adattare prezzi e disponibilità alla stagionalità in modo flessibile, senza dover riscrivere manualmente un listino ogni volta che cambia il periodo dell’anno.',
          'Nei periodi di bassa stagione, offrire pacchetti più ricchi — un soggiorno più lungo a un prezzo scontato, una cena inclusa, un’attività aggiuntiva — spesso converte meglio di un semplice sconto sul prezzo della camera, e comunica un valore più alto invece di svalutare la struttura.',
          'Anche comunicare con largo anticipo la disponibilità futura aiuta chi pianifica per tempo, specialmente per i periodi di alta stagione più richiesti: una disponibilità visibile solo per le settimane immediatamente successive esclude proprio gli ospiti più organizzati, spesso quelli con la spesa media più alta.',
        ],
      },
      {
        h2: 'L’upselling nel momento giusto',
        paragraphs: [
          'Il momento della prenotazione è quello in cui l’ospite è più propenso ad aggiungere qualcosa: colazione con prodotti locali, cena in azienda, un’attività organizzata, un pacchetto weekend più ricco rispetto al semplice pernottamento.',
          '**Ogni servizio aggiunto durante la prenotazione, invece che offerto all’arrivo, ha una probabilità di conversione molto più alta** — l’ospite lo sta già valutando insieme al soggiorno, non deve decidere sul momento davanti alla reception, magari con la valigia ancora in mano.',
          'Anche piccoli suggerimenti, proposti al momento giusto nel flusso di prenotazione, aumentano il valore medio del soggiorno senza risultare invadenti: una degustazione di prodotti aziendali, un cesto di benvenuto, un’escursione guidata nei dintorni.',
          'L’importante è che ogni proposta sia realmente pertinente al tipo di soggiorno scelto: una famiglia con bambini piccoli e una coppia in cerca di relax hanno interessi diversi, e proporre lo stesso upsell a entrambi riduce l’efficacia della proposta invece di aumentarla.',
        ],
      },
      {
        h2: 'Le comunicazioni automatiche prima e dopo il soggiorno',
        paragraphs: [
          'Un’email di benvenuto con informazioni pratiche — come arrivare, orari di check-in, cosa portare, indicazioni sull’ultimo tratto di strada non sempre segnalato bene dai navigatori — riduce le domande ripetitive che altrimenti arrivano nei giorni precedenti l’arrivo.',
          'Un promemoria inviato uno o due giorni prima dell’arrivo, con gli stessi dettagli pratici, riduce ulteriormente le incertezze e prepara l’ospite, specialmente se la struttura si trova in una zona rurale poco servita dalla segnaletica stradale.',
          '> Automatizzare le comunicazioni non significa renderle impersonali: significa assicurarsi che le informazioni giuste arrivino sempre, senza dipendere dal fatto che qualcuno ricordi di scriverle a mano ogni volta.',
          'Dopo il checkout, un messaggio di ringraziamento, insieme a un invito a tornare con un piccolo vantaggio per la prossima prenotazione diretta, mantiene viva la relazione con l’ospite ben oltre la singola visita.',
        ],
      },
      {
        h2: 'Il ruolo del sito e delle immagini prima ancora del booking',
        paragraphs: [
          'Prima ancora di arrivare alla pagina di prenotazione, l’ospite si forma un’idea della struttura guardando le foto e leggendo la descrizione: se quella prima impressione non trasmette con chiarezza cosa aspettarsi, difficilmente arriva a cliccare su "Prenota", indipendentemente da quanto sia ben fatto il sistema di booking.',
          'Foto scattate con luce naturale, che mostrano le camere così come sono davvero, comunicano più fiducia di immagini patinate ma generiche: chi prenota un agriturismo cerca autenticità, non solo comodità, ed è quello che le immagini devono raccontare.',
          'Anche i testi contano più di quanto sembri: descrivere cosa rende diverso quel soggiorno — i prodotti dell’azienda, il paesaggio, le attività disponibili — aiuta l’ospite a capire perché scegliere proprio quella struttura invece di un’alternativa nella stessa zona con prezzi simili.',
          'Un sito che carica lentamente su smartphone, dove la maggior parte delle ricerche di viaggio oggi comincia, perde ospiti prima ancora che vedano il calendario di disponibilità: la velocità del sito è parte della stessa esperienza di prenotazione, anche se raramente viene percepita come tale.',
        ],
      },
      {
        h2: 'Chi si occupa della gestione quotidiana del sistema',
        paragraphs: [
          'Anche il sistema più semplice richiede che qualcuno, in azienda, se ne senta responsabile: aggiornare la disponibilità nei periodi di chiusura straordinaria, verificare che le comunicazioni automatiche partano correttamente, rispondere alle richieste che comunque arrivano fuori dal flusso standard di prenotazione.',
          'Non serve una figura dedicata a tempo pieno, soprattutto nelle strutture più piccole: spesso basta che una persona del team dedichi un momento fisso ogni settimana a controllare che tutto funzioni come previsto, invece di scoprire un problema solo quando un ospite si lamenta.',
          'Con il tempo, la gestione quotidiana diventa un’abitudine che richiede sempre meno attenzione: la parte più impegnativa è quasi sempre l’avvio, quando il sistema viene impostato e il team impara a usarlo, non la gestione ordinaria una volta a regime.',
        ],
      },
      {
        h2: 'Le recensioni post-soggiorno',
        paragraphs: [
          'Una richiesta di recensione automatica nei giorni successivi al checkout, quando l’esperienza è ancora fresca nella memoria dell’ospite, genera molte più risposte di una richiesta inviata settimane dopo — o mai inviata affatto.',
          'Le recensioni, in un settore dove la scelta si basa molto sulla fiducia costruita dalle esperienze di altri ospiti, pesano quanto o più delle foto sul sito: pochi recensori con un’esperienza raccontata bene valgono più di una descrizione scritta dalla struttura stessa.',
          'Automatizzare la richiesta non significa renderla impersonale: un messaggio breve, che fa riferimento a un dettaglio specifico del soggiorno — la camera scelta, la cena degustata — ottiene una risposta più spesso di una richiesta generica identica per ogni ospite.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'In un caso concept ispirato a progetti reali di agriturismo — come quello raccontato nel case study di Podere La Vite, esempio illustrativo che unisce booking, ristorazione e degustazioni in un’unica esperienza — il punto di partenza era simile a quello di molte strutture di dimensioni medie: prenotazioni gestite quasi solo per telefono, nessuna visibilità reale sulla disponibilità delle camere, servizi extra proposti solo all’arrivo.',
          'La soluzione ha unito un motore di prenotazione integrato al sito, con calendario reale per le camere, possibilità di aggiungere cena e degustazioni già in fase di prenotazione, e comunicazioni automatiche prima e dopo il soggiorno.',
          'Nell’esempio, l’effetto più immediato non è stato solo un aumento delle prenotazioni dirette, ma anche una riduzione sensibile del tempo speso al telefono a rispondere alle stesse domande su disponibilità e prezzi — tempo che il team ha potuto restituire alla cura dell’accoglienza.',
          'L’altro elemento che ha fatto la differenza, nell’esempio concettuale, è stato proprio l’upsell integrato nella prenotazione: proporre cena e degustazioni nello stesso momento in cui l’ospite sceglieva la camera ha aumentato in modo evidente la quota di soggiorni che includevano anche la ristorazione, invece di lasciarla come decisione separata da prendere solo all’arrivo.',
        ],
      },
      {
        h2: 'Misurare i risultati e migliorare nel tempo',
        paragraphs: [
          'Una volta attivo, un sistema di prenotazione diretto genera dati che prima semplicemente non esistevano: da dove arrivano le richieste, quanto tempo passa tra la prima visita al sito e la prenotazione effettiva, quali servizi extra vengono scelti più spesso.',
          'Questi dati permettono di aggiustare il tiro nel tempo: se un servizio extra viene scelto raramente, forse va comunicato meglio o proposto in un momento diverso del flusso di prenotazione; se un certo tipo di camera si riempie sempre per prima, forse merita un prezzo più alto nei periodi di punta.',
          'Vale la pena rivedere periodicamente anche il tasso di conversione tra chi visita la pagina di prenotazione e chi la completa: un calo evidente in quel passaggio segnala quasi sempre un problema nel flusso — troppi campi da compilare, un prezzo poco chiaro, un passaggio tecnico che non funziona bene su mobile.',
          'Con il tempo, la quota di prenotazioni dirette rispetto a quelle arrivate dai portali esterni diventa un indicatore utile di quanto la struttura si stia rendendo indipendente dalle commissioni di terze parti — un numero che vale la pena tracciare stagione dopo stagione.',
        ],
      },
      {
        h2: 'Errori comuni da evitare',
        paragraphs: [
          'Non avere alcun sistema di prenotazione diretto, e dipendere solo da chiamate o da piattaforme esterne, è l’errore più comune e quello con l’impatto maggiore sul fatturato che resta sul tavolo.',
          'Foto di scarsa qualità che non comunicano l’esperienza reale del soggiorno riducono drasticamente la conversione, anche con un sistema di booking tecnicamente perfetto: l’ospite decide anche, se non soprattutto, con gli occhi.',
          'Nessun follow-up dopo il soggiorno lascia sul tavolo l’occasione più semplice per costruire un ospite che torna o che consiglia l’agriturismo ad altri — è spesso il passaggio più economico da automatizzare e quello più trascurato.',
          'Impostare prezzi diversi tra portali esterni e sito diretto senza una logica chiara genera confusione nell’ospite e, in alcuni casi, problemi contrattuali con i portali stessi: la coerenza tariffaria tra canali va pianificata fin dall’inizio, non aggiustata dopo.',
        ],
      },
      {
        h2: 'Domande frequenti sul booking online per agriturismi',
        paragraphs: [
          '**Conviene abbandonare del tutto i portali come Booking.com?** Raramente è la scelta giusta, soprattutto per chi ha ancora bisogno di visibilità verso chi non conosce la struttura: meglio farli convivere con un canale diretto forte, spostando gradualmente il peso verso quest’ultimo nel tempo.',
          '**Serve davvero far pagare una caparra per confermare una prenotazione?** In molti casi sì, anche una cifra contenuta: rende l’impegno concreto e riduce le mancate presentazioni, oltre a filtrare le richieste meno serie.',
          '**Un sistema di booking online funziona anche per un agriturismo con poche camere?** Sì: anche con un numero ridotto di camere, evita gli errori di gestione manuale e libera un tempo che, su una struttura piccola gestita da poche persone, pesa proporzionalmente ancora di più.',
          '**Quanto tempo richiede impostare un sistema di prenotazione completo?** Dipende dalla complessità dei servizi offerti, ma nella maggior parte dei casi non serve partire da un progetto enorme: rendere prenotabili online le camere è il primo passo, da cui poi si allarga gradualmente a servizi extra e automazioni.',
          '**Le comunicazioni automatiche rischiano di far sembrare la struttura impersonale?** Non se scritte con cura: automatizzare l’invio non significa rinunciare al tono caldo che ci si aspetta da un agriturismo. Il rischio opposto — nessuna comunicazione strutturata, domande che restano senza risposta per giorni — pesa molto di più sulla percezione dell’ospite.',
          '**Cosa succede alle prenotazioni già esistenti sui portali quando si attiva un sistema diretto?** Restano valide e vengono semplicemente sincronizzate nel nuovo calendario: attivare un canale diretto non richiede di cancellare o rinegoziare le prenotazioni già confermate altrove.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve sostituire tutti i canali esistenti: **il primo passo è offrire un modo diretto e semplice per prenotare sul proprio sito**, così da recuperare le richieste che oggi si perdono nell’attesa di una risposta manuale, e ridurre gradualmente la dipendenza dai portali esterni.',
          'Realizziamo sistemi di booking per agriturismi, con gestione camere, servizi extra e comunicazioni automatiche pre e post soggiorno. [Scopri il software su misura per agriturismi →](/software/hospitality)',
        ],
      },
    ],
  },
  {
    slug: 'chatbot-cantina-ai-customer-service',
    title: 'Chatbot per Cantine: 5 Casi d’Uso Concreti per Vendite e Assistenza Clienti',
    seoTitle: 'Chatbot cantina: casi d’uso per vendite e assistenza',
    excerpt:
      'Un chatbot ben progettato risponde ai clienti fuori orario, qualifica i lead e libera tempo al team. Ecco cinque casi d’uso concreti per una cantina, e come impostarli senza perdere il controllo delle risposte.',
    date: '2026-08-01',
    readingMinutes: 8,
    category: 'Tecnologie',
    featuredImage: '/images/blog/chatbot-cantina-ai-customer-service.jpg',
    imageAlt: 'Interfaccia di un chatbot AI che risponde a un cliente di una cantina',
    tags: ['Chatbot', 'AI', 'Customer Service', 'Automazione'],
    keywords: ['chatbot cantina', 'chatbot AI vino', 'automazione customer service vino', 'risposte automatiche clienti', 'chatbot e-commerce vino'],
    relatedSlugs: ['software-frantoi-gestione-ordini-crm', 'agriturismo-booking-online-prenotazioni'],
    relatedLinks: [
      { href: '/servizi/software-ai-su-misura', label: 'Servizio: Software & agenti AI su misura' },
      { href: '/software', label: 'Software su misura per l’agroalimentare' },
      { href: '/portfolio/wine-club-pro', label: 'Case study: Wine Club Pro' },
    ],
    body: [
      {
        h2: 'Che problema risolve davvero un chatbot',
        paragraphs: [
          'I clienti fanno domande fuori dagli orari di apertura: la sera, nel weekend, durante una fiera in cui nessuno è alla scrivania a rispondere alle email. **Un chatbot ben progettato colma esattamente quel vuoto**, senza sostituire il rapporto umano dove conta davvero.',
          'Il valore non è "avere un chatbot": è ridurre il tempo che il team perde su domande ripetitive, e non far perdere lead solo perché sono arrivati fuori orario. Chi scrive un messaggio a un’azienda si aspetta oggi una risposta rapida, indipendentemente dall’ora o dal giorno della settimana in cui l’ha inviato.',
          'Per una cantina questo problema pesa più che in altri settori: gli acquisti, in molti casi, non sono impulsivi come per altri prodotti da e-commerce. Chi cerca un vino specifico, chiede informazioni su una spedizione o vuole prenotare una degustazione sta spesso valutando una decisione, e ogni ora di silenzio è un’occasione in cui quella decisione può andare altrove.',
          'Il punto di partenza corretto non è "vogliamo un chatbot perché lo hanno tutti", ma "quali domande ripetitive stanno consumando il tempo del team, e quali contatti si stanno perdendo perché nessuno risponde in tempo". Da lì nasce un progetto utile, non un esperimento tecnologico fine a sé stesso.',
        ],
      },
      {
        h2: 'Come sta cambiando il modo in cui i clienti contattano una cantina',
        paragraphs: [
          'Fino a pochi anni fa, chi voleva informazioni su una cantina telefonava o scriveva un’email, e accettava implicitamente di aspettare una risposta entro qualche giorno. Oggi quell’aspettativa è cambiata: un numero crescente di persone si aspetta un riscontro quasi immediato, sullo stesso canale su cui ha scritto, che sia il sito, i social o una app di messaggistica.',
          'Questo cambiamento non riguarda solo i settori digitali per natura: riguarda anche l’agroalimentare, un comparto che per anni ha comunicato soprattutto attraverso canali tradizionali. Chi visita oggi il sito di una cantina lo fa spesso da smartphone, magari fuori orario, e si aspetta di trovare le stesse risposte rapide che ottiene da qualsiasi altro sito che frequenta abitualmente.',
          'Nella maggior parte dei casi, le domande che arrivano a una cantina sono prevedibili e si ripetono quasi identiche nel tempo: orari di apertura, disponibilità di un vino, tempi e costi di spedizione, come funziona una degustazione. Sono esattamente il tipo di domande che un sistema automatico ben progettato può gestire senza difficoltà, lasciando alle persone le conversazioni che richiedono davvero un giudizio umano.',
          'C’è anche un cambiamento meno visibile ma altrettanto rilevante: un numero crescente di contatti arriva da fuori regione o dall’estero, in fuso orario diverso da quello italiano. Una cantina che risponde solo negli orari di ufficio italiani, senza rendersene conto, sta escludendo proprio una parte del pubblico più disposto a spendere per un’esperienza o un acquisto diretto.',
        ],
      },
      {
        h2: 'Il costo nascosto delle domande senza risposta',
        paragraphs: [
          'Il primo costo, il più diretto, è il contatto che si perde: un visitatore che scrive fuori orario, non riceve risposta in tempi ragionevoli, e nel frattempo trova altrove ciò che cercava. Non lo si vede mai in un report di vendita, ma è comunque una vendita mancata.',
          'Il secondo costo è il tempo del team, speso a rispondere manualmente alle stesse domande più volte al giorno: dove siete, quando siete aperti, spedite in questa regione, quanto costa la spedizione. Sono domande legittime, ma rispondere una per una, sempre alle stesse, sottrae tempo a compiti che richiedono davvero attenzione umana.',
          'Il terzo costo, spesso il più trascurato, è la percezione che l’azienda trasmette a chi scrive e resta senza risposta per giorni: anche se il prodotto e l’accoglienza in cantina sono eccellenti, un lungo silenzio comunica un’organizzazione meno curata di quella reale, e questa impressione condiziona tutto il resto del rapporto con il cliente.',
          'C’è infine un costo di opportunità: senza uno strumento che qualifichi e raccolga informazioni dai primi contatti, il team scopre solo a posteriori — quando va bene — chi erano davvero le persone interessate, cosa cercavano, e quante di quelle richieste sono rimaste senza seguito perché nessuno aveva il tempo di gestirle tutte una per una.',
        ],
      },
      {
        h2: 'Chatbot a regole rigide e agenti AI conversazionali: non sono la stessa cosa',
        paragraphs: [
          'I primi chatbot diffusi in commercio erano sistemi a regole rigide: un menu di opzioni predefinite, pulsanti da cliccare in sequenza, risposte preconfezionate che funzionavano solo se la domanda dell’utente coincideva esattamente con uno degli scenari previsti in fase di progettazione. Chi ha provato uno di questi sistemi ricorda probabilmente la frustrazione di restare bloccato in un menu che non prevedeva la propria domanda.',
          'Gli agenti AI conversazionali di generazione più recente funzionano in modo diverso: comprendono il linguaggio naturale, quindi una domanda scritta con parole proprie, in modo colloquiale, con eventuali errori di battitura, senza che l’utente debba adattarsi a un menu rigido. La differenza percepita da chi scrive è enorme, anche se dal punto di vista tecnico entrambi restano "chatbot" nel senso più generico del termine.',
          '**Questa distinzione è il primo elemento da chiarire prima di valutare un progetto**: un chatbot a regole rigide, mal progettato, può fare più danni che benefici, perché genera frustrazione in chi lo usa e rafforza l’idea che "i chatbot non funzionano". Un agente AI conversazionale, impostato correttamente sui contenuti reali dell’azienda, risolve gran parte di questi limiti.',
          'Non significa che gli agenti AI conversazionali siano perfetti o infallibili: restano strumenti che vanno progettati con cura, testati e corretti nel tempo. La differenza rispetto alla generazione precedente non è l’assenza di limiti, ma la capacità di gestire un numero molto più ampio di formulazioni diverse della stessa domanda, e di riconoscere quando è il caso di passare la conversazione a una persona.',
        ],
      },
      {
        h2: 'Cosa può fare davvero, e cosa no, un chatbot AI per una cantina',
        paragraphs: [
          'Un chatbot AI ben progettato gestisce con affidabilità le domande frequenti e prevedibili: orari di apertura, disponibilità di un prodotto nel catalogo, tempi e costi di spedizione, come funziona una prenotazione, cosa include un pacchetto degustazione. Sono richieste che si ripetono in modo pressoché identico da un cliente all’altro, e su cui il margine di errore, se il sistema è impostato bene, resta basso.',
          'Non è invece realistico aspettarsi che un chatbot gestisca da solo situazioni delicate o fuori standard: un reclamo su un ordine danneggiato, una richiesta commerciale complessa, una trattativa su una fornitura importante, una domanda che richiede una valutazione personale del vino da parte di chi lo conosce davvero. In questi casi il passaggio a una persona non è un fallimento del sistema: è parte del suo corretto funzionamento.',
          '**Nessun chatbot, per quanto ben progettato, dovrebbe presentarsi come infallibile o come sostituto completo di chi lavora in cantina**: la promessa realistica è ridurre il carico delle domande ripetitive e velocizzare le risposte prevedibili, non eliminare il bisogno di persone che si occupino di vendita e assistenza.',
        ],
      },
      {
        h2: 'Caso d’uso 1: qualificazione dei primi contatti',
        paragraphs: [
          'Un visitatore sul sito chiede se la cantina spedisce nella sua zona, o quali sono i tempi di consegna. Il chatbot risponde subito e, se il contatto sembra davvero interessato, raccoglie le informazioni utili — cosa cerca, quale quantità, per quale occasione — prima di passarlo a una persona.',
          'Il vantaggio non è eliminare il contatto umano: è arrivare a quel contatto con le informazioni già raccolte, invece di ripartire da zero con un "buongiorno, come posso aiutarla" generico che allunga inutilmente la conversazione.',
          'Questo caso d’uso è spesso il punto di partenza migliore per una cantina che non ha mai usato un chatbot: è il più facile da misurare (quanti contatti qualificati arrivano al team ogni settimana) ed è quello con l’impatto più immediato sul lavoro quotidiano di chi gestisce le prime richieste.',
        ],
      },
      {
        h2: 'Caso d’uso 2: suggerimenti sui vini legati al catalogo',
        paragraphs: [
          'Un cliente descrive cosa cerca — un vino rosso per una cena importante, un abbinamento per un piatto specifico, un regalo per chi non conosce bene i vini — e il chatbot, collegato al catalogo reale dell’e-commerce, propone alcune referenze con link diretto all’acquisto, invece di lasciarlo a cercare da solo tra decine di prodotti.',
          'Questo caso d’uso richiede un’integrazione più stretta con il catalogo rispetto ad altri: il chatbot deve conoscere davvero cosa è disponibile in quel momento, a quale prezzo, e non proporre un vino esaurito o fuori produzione. Senza questa integrazione, il rischio è generare frustrazione invece di aiuto.',
          'Vale la pena restare realistici su quanto in profondità un chatbot possa sostituire il consiglio di un sommelier o di chi conosce personalmente ogni annata: per un consiglio semplice, legato a un’occasione o a un abbinamento comune, funziona bene; per una scelta più sofisticata, il passaggio a una persona resta spesso la strada migliore, ed è giusto che il chatbot lo riconosca e lo proponga.',
        ],
      },
      {
        h2: 'Caso d’uso 3: presentazione e iscrizione al wine club',
        paragraphs: [
          'Il chatbot spiega come funziona il wine club, i tier disponibili e cosa include ciascuno, rispondendo alle domande più comuni — quanto costa, con che frequenza arrivano le spedizioni, come si disdice — senza che il visitatore debba cercare queste informazioni sparse in più pagine del sito.',
          'Se il visitatore mostra interesse concreto, il chatbot raccoglie il contatto per un follow-up automatico o lo indirizza direttamente alla pagina di iscrizione, senza che nessuno debba seguire manualmente ogni singola richiesta informativa arrivata fuori orario.',
          'Questo caso d’uso si integra naturalmente con una strategia di wine club già avviata: il chatbot diventa un canale in più per intercettare l’interesse nel momento in cui nasce, invece di lasciare che si raffreddi nell’attesa di una risposta manuale che magari arriva il giorno dopo, quando l’entusiasmo iniziale è già scemato.',
        ],
      },
      {
        h2: 'Caso d’uso 4: assistenza post-acquisto e spedizioni',
        paragraphs: [
          'Domande come "dov’è il mio ordine?" o "quando arriva la spedizione?" sono tra le più frequenti dopo una vendita online, in qualsiasi settore. Un chatbot collegato al sistema di tracking può rispondere istantaneamente, riducendo il numero di email ripetitive che finiscono nella casella dell’assistenza clienti.',
          'Anche domande più semplici — come cambiare l’indirizzo di consegna prima della spedizione, o richiedere una fattura — possono essere gestite direttamente dal chatbot in molti casi, riducendo ulteriormente il carico su chi si occupa dell’assistenza clienti.',
          'Per i casi più delicati — un pacco danneggiato in transito, un ordine mai arrivato, una richiesta di rimborso — il chatbot dovrebbe riconoscere il limite e passare la conversazione a una persona, con il contesto già raccolto: numero ordine, descrizione del problema, eventuali foto già inviate dal cliente. È esattamente il tipo di passaggio di consegne che fa la differenza tra un cliente insoddisfatto e uno che, nonostante il problema, resta con un’impressione positiva della gestione.',
        ],
      },
      {
        h2: 'Caso d’uso 5: gestione delle richieste di prenotazione visite e degustazioni',
        paragraphs: [
          'Un visitatore chiede quando può venire per una degustazione. Il chatbot mostra la disponibilità, spiega i pacchetti disponibili e guida verso la prenotazione, invece di rimandare la richiesta a un’email a cui si risponderà il giorno dopo, quando magari il visitatore ha già trovato un’alternativa.',
          'Anche le domande pratiche che accompagnano una richiesta di visita — quanto dura la degustazione, se è adatta a bambini, se c’è un parcheggio, come raggiungere la cantina — possono essere gestite direttamente dal chatbot, riducendo lo scambio di email necessario prima di arrivare a una prenotazione confermata.',
          'In questo caso d’uso il chatbot funziona bene soprattutto come primo filtro e primo canale di risposta rapida: la prenotazione vera e propria, con calendario e pagamento, resta compito di un sistema di booking dedicato, a cui il chatbot indirizza il visitatore una volta chiarite le domande preliminari.',
          '> Ogni caso d’uso ha lo stesso principio di fondo: rispondere subito a una domanda prevedibile, e coinvolgere una persona solo quando la conversazione lo richiede davvero — non prima, per non sprecare tempo umano su domande ripetitive, e non dopo, per non lasciare un cliente frustrato davanti a un sistema che non sa aiutarlo.',
        ],
      },
      {
        h2: 'Come si implementa in pratica, passo dopo passo',
        paragraphs: [
          'Il primo passo è raccogliere e organizzare le informazioni reali su cui il chatbot dovrà rispondere: FAQ già esistenti, orari, politiche di spedizione, descrizione del catalogo, informazioni sul wine club e sulle degustazioni. Un chatbot vale quanto le informazioni su cui è impostato: partire da contenuti incompleti o disordinati produce risposte incomplete o disordinate.',
          'Il secondo passo è definire con chiarezza il perimetro: quali domande il chatbot può gestire da solo, e quali devono sempre passare a una persona. Questo confine va deciso a monte, non lasciato all’improvvisazione del sistema, ed è probabilmente la decisione più importante di tutto il progetto.',
          'Il terzo passo è l’integrazione con i sistemi reali della cantina: il catalogo dell’e-commerce, il sistema di tracking delle spedizioni, il calendario delle degustazioni. Un chatbot che risponde solo con informazioni statiche, senza collegamento ai dati reali e aggiornati, perde gran parte del suo valore pratico e rischia di fornire informazioni non più corrette.',
          'Il quarto passo è un periodo di test con traffico reale, ma limitato — ad esempio solo su una pagina del sito, o solo per un caso d’uso alla volta — prima di un lancio completo. Osservare le conversazioni reali in questa fase permette di correggere risposte imprecise o di individuare domande frequenti non ancora previste, prima che diventino un problema visibile su larga scala.',
        ],
      },
      {
        h2: 'Come si costruisce senza perdere il controllo',
        paragraphs: [
          'Un chatbot ben progettato viene impostato sulle informazioni reali della cantina — FAQ, orari, catalogo, politiche di spedizione — e passa a una persona ogni volta che la richiesta esce dal perimetro di ciò che può gestire con sicurezza, invece di provare a rispondere comunque a costo di sbagliare.',
          '**Non sostituisce chi vende il vino**: gestisce il primo livello di domande ripetitive, così chi lavora in cantina può dedicare il proprio tempo alle conversazioni che contano davvero — quelle in cui la relazione personale, la conoscenza diretta del prodotto e la sensibilità commerciale fanno davvero la differenza.',
          'Mantenere il controllo significa anche poter rivedere e correggere nel tempo le risposte del chatbot: quando emerge una domanda a cui ha risposto in modo impreciso, quella lacuna va corretta rapidamente, non lasciata ripetersi con altri clienti. Un chatbot che nessuno rivede periodicamente tende a peggiorare nel tempo, man mano che cambiano il catalogo, i prezzi o le politiche aziendali.',
          'Un buon progetto prevede fin dall’inizio un modo semplice per il team di consultare le conversazioni gestite dal chatbot, segnalare risposte da correggere, e aggiungere nuove informazioni quando cambia qualcosa in azienda — senza dover coinvolgere ogni volta chi ha sviluppato il sistema per una semplice modifica di contenuto.',
        ],
      },
      {
        h2: 'Quando ha senso un chatbot, e quando non ne vale la pena',
        paragraphs: [
          'Un chatbot ha senso quando il volume di domande ripetitive è già sufficiente a pesare sul tempo del team, o quando una parte significativa dei contatti arriva fuori dagli orari di apertura, magari da un fuso orario diverso, e resta oggi senza risposta tempestiva.',
          'Per una cantina molto piccola, con pochissimo traffico sul sito e un numero limitato di contatti settimanali, un chatbot rischia di essere uno strumento sproporzionato rispetto al problema reale: il tempo e il budget investiti nel progetto potrebbero avere un ritorno più immediato se destinati altrove, ad esempio a migliorare il sito o la presenza sui social.',
          '**La domanda giusta da porsi non è "un chatbot fa bene all’immagine dell’azienda", ma "quante domande ripetitive stiamo gestendo ogni settimana, e quante di queste si perdono perché arrivano fuori orario"**: se la risposta è "poche", probabilmente non è ancora il momento; se la risposta è "molte, e spesso arriva un cliente insoddisfatto per il tempo di attesa", è il momento di valutarlo seriamente.',
          'Vale anche la pena considerare la fase di crescita dell’azienda: una cantina che sta per lanciare un nuovo e-commerce, un wine club, o un programma di enoturismo più strutturato, può impostare il chatbot fin dall’inizio come parte del progetto complessivo, invece di aggiungerlo in un secondo momento come toppa su un problema già cronico.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'In un caso concept ispirato a progetti reali di cantine con e-commerce attivo (esempio illustrativo, non riferito a un singolo cliente), il punto di partenza era una casella di posta dell’assistenza clienti sommersa da domande ripetitive: disponibilità di specifiche annate, tempi di spedizione verso l’estero, stato di ordini già effettuati, informazioni sul wine club appena lanciato.',
          'La soluzione ha previsto un agente AI conversazionale collegato al catalogo dell’e-commerce e al sistema di tracking delle spedizioni, impostato per rispondere direttamente alle domande più frequenti e per raccogliere i contatti qualificati sulle richieste più commerciali, passandole poi a una persona con il contesto già raccolto.',
          'Nell’esempio, l’effetto più immediato non è stato un singolo numero isolato, ma un cambiamento nella distribuzione del lavoro: le domande ripetitive sono state assorbite in gran parte dal chatbot, mentre il team ha potuto concentrarsi sulle conversazioni commerciali più delicate e sui casi di assistenza che richiedevano davvero un giudizio umano, come reclami o richieste personalizzate.',
          'Un elemento chiave del progetto concettuale è stato il tempo dedicato, nelle prime settimane, a rivedere le conversazioni reali gestite dal chatbot: alcune risposte iniziali si sono rivelate troppo generiche o imprecise su dettagli specifici del catalogo, e sono state corrette rapidamente prima che diventassero un problema diffuso. È un passaggio che, nell’esempio, ha fatto più differenza della configurazione tecnica iniziale.',
        ],
      },
      {
        h2: 'Errori comuni da evitare',
        paragraphs: [
          'Il primo errore è impostare il chatbot su informazioni generiche o non aggiornate, invece che sui contenuti reali e attuali della cantina: un chatbot che propone un vino esaurito o cita un prezzo sbagliato genera più danno che beneficio, perché il cliente scopre l’errore proprio nel momento in cui si aspettava una risposta affidabile.',
          'Il secondo è non prevedere un passaggio chiaro a una persona per i casi complessi: un chatbot che continua a rispondere in modo generico a una domanda che non sa gestire, invece di riconoscere il limite e coinvolgere il team, frustra il cliente molto più di quanto farebbe l’assenza totale del chatbot.',
          'Il terzo è lanciare il chatbot e non rivederlo mai più: senza un controllo periodico delle conversazioni reali, gli errori si accumulano nel tempo, e nessuno se ne accorge finché non arriva un cliente insoddisfatto a segnalarlo, magari pubblicamente su una recensione.',
          'Il quarto errore, meno evidente ma altrettanto costoso, è promettere al chatbot capacità che non ha davvero: presentarlo come un consulente esperto in grado di rispondere a qualunque domanda genera aspettative che nessun sistema attuale può mantenere in modo affidabile, e il primo caso in cui delude quell’aspettativa rischia di rovinare la fiducia costruita fino a quel momento.',
        ],
      },
      {
        h2: 'Domande frequenti sui chatbot per cantine',
        paragraphs: [
          '**Un chatbot AI può sbagliare risposta?** Sì, come qualunque sistema che gestisce linguaggio naturale. Per questo un buon progetto prevede sempre un perimetro chiaro di cosa il chatbot può gestire da solo, una revisione periodica delle conversazioni, e un passaggio a una persona per tutto ciò che esce da quel perimetro.',
          '**Serve un catalogo enorme perché un chatbot collegato all’e-commerce abbia senso?** No: anche un catalogo di dimensioni contenute beneficia dell’integrazione, perché evita al cliente di dover cercare da solo tra le pagine del sito. Quello che conta è che le informazioni siano sempre aggiornate, non che il catalogo sia grande.',
          '**Un chatbot sostituisce il servizio clienti telefonico o via email?** No, e non dovrebbe: la maggior parte delle cantine che lo adottano lo affianca agli altri canali, usandolo per assorbire le domande ripetitive e lasciando telefono ed email per le conversazioni che richiedono davvero un contatto umano diretto.',
          '**Quanto tempo serve per impostare un chatbot funzionante?** Dipende dalla quantità di informazioni da organizzare e dal numero di sistemi da integrare (catalogo, tracking, calendario prenotazioni), ma nella maggior parte dei casi non serve partire con tutti i casi d’uso insieme: si può iniziare con uno o due, e allargare dopo aver verificato che funzionano bene.',
          '**È rischioso per l’immagine della cantina, se percepito come "freddo" o impersonale?** Il rischio esiste se il chatbot è progettato male, con risposte generiche e nessun passaggio a una persona quando serve. Progettato con cura, e con un tono coerente con quello della cantina, tende invece a essere percepito come un servizio in più, non come un ostacolo alla relazione umana.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve partire con tutti i casi d’uso insieme: **il modo più sicuro è scegliere quello che risolve il problema più urgente oggi** — spesso la qualificazione dei primi contatti o l’assistenza post-acquisto — e allargare da lì, man mano che il team verifica cosa funziona davvero nella pratica quotidiana.',
          'Costruiamo agenti AI e chatbot su misura per l’agroalimentare, collegati al vostro catalogo e ai vostri processi reali, con un perimetro chiaro tra ciò che gestisce l’automazione e ciò che resta sempre affidato a una persona. [Scopri Software & agenti AI su misura →](/servizi/software-ai-su-misura)',
        ],
      },
    ],
  },
  {
    slug: 'seo-locale-agroalimentare-google-maps',
    title: 'SEO Locale: Come Farsi Trovare su Google Maps per Cantine, Frantoi e Agriturismi',
    seoTitle: 'SEO locale agroalimentare: farsi trovare su Google Maps',
    excerpt:
      'Chi cerca "cantina vicino a me" o "agriturismo Umbria" ha già intenzione di visitare o comprare. Ecco come impostare il profilo Google Business e le recensioni per comparire davvero in quelle ricerche.',
    date: '2026-08-01',
    readingMinutes: 10,
    category: 'SEO',
    featuredImage: '/images/blog/seo-locale-agroalimentare-google-maps.jpg',
    imageAlt: 'Ricerca locale su Google Maps di attività agroalimentari nel territorio',
    tags: ['SEO', 'Local SEO', 'Google Maps', 'Agroalimentare'],
    keywords: ['SEO locale', 'Google Maps agroalimentare', 'farsi trovare Google territorio', 'SEO cantine', 'local search agroalimentare'],
    relatedSlugs: ['seo-geo-farsi-trovare-ai', 'storytelling-vino-marketing-vendite'],
    relatedLinks: [
      { href: '/servizi/siti-web-contatti', label: 'Servizio: Siti web che generano contatti' },
      { href: '/geo', label: 'Dove lavoriamo in Italia' },
      { href: '/metodo/strategia-di-settore', label: 'Metodo: Strategia di settore' },
    ],
    body: [
      {
        h2: 'Perché le ricerche locali valgono più di quanto sembri',
        paragraphs: [
          '"Cantina vicino a me", "agriturismo Umbria", "olio biologico Toscana": chi digita ricerche come queste sta già valutando una visita o un acquisto, non sta solo raccogliendo informazioni generiche. **È tra le ricerche con intenzione più alta che un’azienda agroalimentare possa intercettare.**',
          'Se la tua attività non compare in quelle ricerche, non significa che quel cliente rinunci: nella maggior parte dei casi sceglie semplicemente chi appare al posto tuo, spesso senza nemmeno accorgersi di aver scartato un’alternativa migliore che semplicemente non ha visto.',
          'Il paradosso è che molte aziende agroalimentari investono tempo ed energie nel migliorare il sito, i contenuti, i social, ma trascurano proprio il canale attraverso cui una parte consistente dei clienti reali le trova per la prima volta: la ricerca locale su Google, spesso attraverso Google Maps prima ancora che attraverso i risultati organici classici.',
          'Capire questa dinamica cambia anche il modo di pensare al proprio marketing digitale: non si tratta solo di farsi conoscere in generale, ma di **essere presenti nel momento esatto in cui qualcuno, nella propria zona o in una zona che sta per visitare, decide dove andare**. È un tipo di visibilità diverso da quello di una campagna pubblicitaria, perché intercetta una decisione già quasi presa.',
        ],
      },
      {
        h2: 'La differenza tra cercare online e cercare "vicino a me"',
        paragraphs: [
          'Chi cerca un’informazione generica sul vino, sull’olio o sull’agriturismo in Italia sta spesso solo raccogliendo idee, senza un’intenzione immediata di visitare o acquistare. Chi aggiunge "vicino a me", il nome di una regione o di un comune, sta facendo qualcosa di diverso: sta restringendo la ricerca a un’azione concreta che vuole compiere a breve.',
          'Questa distinzione è centrale per capire dove investire le energie. Una ricerca generica su un argomento porta traffico, ma non sempre porta clienti pronti ad agire. Una ricerca locale, invece, arriva quasi sempre da una persona che ha già superato la fase di curiosità e sta valutando l’opzione concreta più vicina o più adatta al proprio piano.',
          'Per questo motivo, la SEO locale non va trattata come una versione "minore" della SEO nazionale, da sistemare quando ci sarà tempo. È spesso il canale che porta il traffico più qualificato in assoluto per un’attività che, come una cantina, un frantoio o un agriturismo, vive di visite fisiche e non solo di vendite a distanza.',
        ],
      },
      {
        h2: 'Come è cambiato il modo in cui le persone cercano un’attività locale',
        paragraphs: [
          'Negli ultimi anni il comportamento di ricerca si è spostato in modo sempre più marcato verso lo smartphone, e con esso è cresciuto il peso delle ricerche fatte in movimento, spesso mentre si è già in viaggio o si sta pianificando un’uscita nel weekend.',
          'Un numero crescente di persone, quando cerca un’attività locale, non scorre più una lista di risultati testuali: apre direttamente la mappa, confronta le opzioni vicine per distanza, valutazione e foto, e sceglie senza mai visitare un sito web prima di decidere se contattare o meno l’attività.',
          'Questo comportamento rende il profilo Google Business, più che il sito stesso, il primo vero "biglietto da visita" digitale per molte attività agroalimentari. Non sostituisce il sito — che resta fondamentale per approfondire, raccontare e convertire — ma è spesso il primo filtro attraverso cui un’attività viene presa in considerazione o scartata.',
          'In molti casi, chi valuta più opzioni nella stessa zona decide già a colpo d’occhio, guardando solo la mappa, quali due o tre attività meritano un secondo sguardo. Le altre restano semplicemente fuori dalla considerazione, anche se offrono un prodotto o un servizio del tutto comparabile.',
        ],
      },
      {
        h2: 'Perché l’agroalimentare è particolarmente esposto a questo cambiamento',
        paragraphs: [
          'Una cantina, un frantoio o un agriturismo non vendono solo un prodotto: vendono un’esperienza legata a un luogo fisico preciso, che il cliente deve raggiungere di persona. Questo rende la componente geografica della ricerca ancora più decisiva rispetto a settori dove l’acquisto avviene interamente online.',
          'Chi cerca "degustazione vino Chianti" o "frantoio visitabile Umbria" sta quasi sempre pianificando uno spostamento reale, magari nel giro di pochi giorni. La finestra temporale tra la ricerca e la decisione è spesso breve, ed è per questo che comparire al momento giusto, con le informazioni giuste, pesa più che in altri settori dove la decisione matura più lentamente.',
          'C’è anche un effetto stagionale da considerare: nei periodi di alta stagione turistica, vendemmia, raccolta delle olive o eventi locali, il volume di queste ricerche tende a crescere in modo evidente, e un profilo ben curato può assorbire una parte molto più ampia di quella domanda rispetto a un profilo trascurato o incompleto.',
        ],
      },
      {
        h2: 'Il problema tipico: un’attività reale, invisibile online',
        paragraphs: [
          'Molte aziende agroalimentari hanno un prodotto solido, una storia autentica, magari anche un buon passaparola locale, ma restano poco visibili proprio nel canale che oggi intercetta la maggior parte delle decisioni di visita o acquisto: la ricerca locale su Google.',
          'Il motivo, quasi sempre, non è la mancanza di qualità del prodotto o del servizio, ma la mancanza di attenzione dedicata al profilo Google Business e agli elementi che lo circondano: recensioni, coerenza dei dati, foto, contenuti geolocalizzati sul sito.',
          'In molti casi il profilo esiste già — a volte è stato creato in automatico da Google stesso, o da un cliente attraverso una recensione — ma non è mai stato rivendicato, verificato o curato attivamente dal titolare dell’attività. È come avere una vetrina sulla strada principale del paese e non allestirla mai.',
        ],
      },
      {
        h2: 'SEO nazionale e SEO locale non sono la stessa cosa',
        paragraphs: [
          '**Ottimizzare un sito per essere trovato a livello nazionale e ottimizzarlo per essere trovato localmente sono due lavori diversi**, anche se in parte si sovrappongono. La SEO nazionale punta a farsi trovare da chiunque, ovunque si trovi, per un argomento o un prodotto. La SEO locale punta a farsi trovare da chi, in una determinata zona geografica, sta cercando qualcosa che tu offri lì, sul posto.',
          'Per un’attività agroalimentare che vive soprattutto di visite fisiche — degustazioni, vendita diretta in cantina, pernottamenti in agriturismo — la componente locale conta spesso più di quella nazionale, anche se entrambe hanno un ruolo. Un articolo di blog che parla in generale di un vitigno può portare traffico e autorevolezza, ma raramente porta qualcuno a bussare alla porta della cantina il weekend successivo.',
          'Confondere le due strategie porta spesso a investire tempo nella direzione sbagliata: contenuti pensati per un pubblico nazionale generico, mentre il profilo Google Business — lo strumento più direttamente collegato a chi è pronto a visitare — resta trascurato e incompleto.',
        ],
      },
      {
        h2: 'Come funziona il posizionamento su Google Maps',
        paragraphs: [
          'Google valuta il profilo dell’attività (Google Business Profile) insieme a diversi segnali: pertinenza rispetto alla ricerca, distanza dal luogo di ricerca, e reputazione — misurata soprattutto attraverso il numero e la qualità delle recensioni.',
          'A differenza del posizionamento sul sito web, qui il profilo Google conta quanto — a volte di più — del sito stesso: è spesso la prima cosa che un potenziale cliente vede prima ancora di cliccare, e in molti casi determina da solo se quel clic arriverà mai.',
          'La pertinenza dipende da quanto chiaramente il profilo comunica cosa fa l’attività: categoria scelta, parole usate nella descrizione, servizi elencati. La distanza è in gran parte fuori dal controllo diretto dell’azienda, ma può essere in parte compensata da una pertinenza e una reputazione più forti, che spingono Google a mostrare un’attività anche a chi si trova leggermente più lontano.',
          'La reputazione, infine, non è solo un numero medio di stelle: Google considera anche la quantità di recensioni, la loro frequenza nel tempo, e in parte anche il contenuto testuale — se menziona termini coerenti con ciò che l’attività offre, questo rafforza ulteriormente la pertinenza percepita.',
        ],
      },
      {
        h2: 'I tre pilastri della visibilità locale',
        paragraphs: [
          'Semplificando, la visibilità locale su Google poggia su tre pilastri che vale la pena tenere sempre presenti: un profilo Google Business completo e curato, una reputazione costruita attraverso recensioni reali e gestite con attenzione, e una coerenza dei dati identificativi (nome, indirizzo, telefono) ovunque l’attività compare online.',
          'A questi tre si aggiunge un quarto elemento, spesso sottovalutato: la presenza di contenuti geolocalizzati sul sito web stesso, che rafforzano agli occhi di Google il legame tra l’attività e il territorio in cui opera, e che aiutano anche le persone a capire subito se quel luogo corrisponde a ciò che stanno cercando.',
          'Nessuno di questi elementi, da solo, garantisce un buon posizionamento. È la combinazione coerente di tutti e quattro, mantenuta nel tempo, a fare la differenza tra un’attività che compare tra le prime opzioni e una che resta invisibile anche a pochi chilometri di distanza da chi la sta cercando.',
        ],
      },
      {
        h2: 'Impostare il profilo Google Business in modo corretto',
        paragraphs: [
          'Il nome dell’attività dovrebbe descrivere davvero cosa fate e dove, non essere un nome generico: una cantina che si presenta chiaramente come tale, con indicazione del territorio nella descrizione, comunica meglio sia agli utenti che a Google.',
          'La scelta della categoria principale, e delle categorie secondarie, merita più attenzione di quanta ne riceva di solito: una cantina che vende anche olio o prodotti tipici dovrebbe indicarlo chiaramente tra i servizi, così da comparire anche nelle ricerche più specifiche legate a quei prodotti, non solo in quelle generiche sul vino.',
          'Foto reali e numerose — cantina, vigneto, degustazioni, prodotti — contano più di quanto si pensi: un profilo con poche foto generiche trasmette meno affidabilità di uno curato con immagini autentiche, e spesso è il primo elemento che una persona confronta tra due attività simili prima ancora di leggere una singola recensione.',
          'Orari di apertura sempre aggiornati e una descrizione dei servizi (degustazioni, vendita diretta, visite) completano un profilo che Google può abbinare correttamente alle ricerche pertinenti. Anche piccoli dettagli come le domande e risposte nella sezione dedicata del profilo, o gli attributi specifici (accessibilità, parcheggio, animali ammessi) contribuiscono a un quadro più completo e affidabile.',
        ],
      },
      {
        h2: 'L’importanza delle foto reali sulla scheda Maps',
        paragraphs: [
          'Tra tutti gli elementi di un profilo Google Business, le foto sono quello che influenza più immediatamente la decisione di chi guarda: prima ancora di leggere una descrizione o una recensione, una persona valuta a colpo d’occhio se quel luogo sembra curato, autentico, coerente con quello che sta cercando.',
          'Foto professionali o comunque ben fatte del vigneto, della cantina, degli spazi per le degustazioni, dei prodotti — meglio ancora se con persone reali al lavoro — comunicano un livello di cura che nessuna descrizione testuale riesce a trasmettere con la stessa immediatezza.',
          'Vale la pena aggiornare le foto nel tempo, non limitarsi a caricarne alcune all’apertura del profilo e dimenticarsene: foto recenti, magari legate alla stagione in corso (la vendemmia, la raccolta delle olive, un evento specifico), segnalano un’attività viva e presente, non un profilo abbandonato dopo la creazione iniziale.',
          'Anche incoraggiare i clienti a caricare le proprie foto, ad esempio dopo una visita positiva, aiuta: le foto caricate da utenti reali sono percepite come particolarmente autentiche, e aggiungono varietà di prospettive che un’azienda da sola difficilmente riesce a coprire con le sole foto ufficiali.',
        ],
      },
      {
        h2: 'Il ruolo delle recensioni',
        paragraphs: [
          '**Le recensioni pesano su due livelli**: aiutano il posizionamento, e influenzano direttamente la decisione di chi sta valutando se contattarvi o andare altrove. Un profilo con poche recensioni, anche se positive, trasmette meno fiducia di uno con un numero maggiore di recensioni recenti e articolate.',
          'Chiedere una recensione dopo una visita o un acquisto positivo — con un messaggio semplice, non invasivo — è il modo più efficace per farle crescere nel tempo. Un promemoria via email o un breve invito verbale al momento del pagamento, magari accompagnato da un link diretto che porta subito alla pagina per scrivere la recensione, riduce l’attrito e aumenta sensibilmente la probabilità che venga effettivamente lasciata.',
          'Rispondere a tutte le recensioni, comprese quelle negative, segnala a chi legge (e a Google) che l’attività è presente e attenta. Una risposta educata e concreta a una recensione critica, che riconosce il problema senza toni difensivi, spesso lascia un’impressione migliore su chi la legge rispetto a un profilo che ha solo recensioni a cinque stelle e nessuna risposta del titolare.',
          'Vale la pena evitare due errori opposti: chiedere recensioni in modo troppo insistente, che rischia di infastidire il cliente, e non chiederle affatto, lasciando che arrivino solo per iniziativa spontanea di chi è particolarmente entusiasta o particolarmente insoddisfatto — con il rischio che il profilo rifletta solo le esperienze estreme, non quella della maggior parte dei clienti.',
        ],
      },
      {
        h2: 'Coerenza dei dati su tutto il web',
        paragraphs: [
          'Nome, indirizzo e numero di telefono (i cosiddetti dati NAP) dovrebbero essere identici ovunque compaiano online — sito, directory, social, piattaforme di prenotazione. **Incoerenze in questi dati confondono sia gli utenti che i motori di ricerca**, e possono indebolire il posizionamento locale anche con un profilo Google ben curato.',
          'Un errore comune, ad esempio, è avere un numero di telefono diverso tra il sito e il profilo Google, magari perché nel frattempo l’azienda ha cambiato operatore o numero di riferimento, senza aggiornare tutte le piattaforme in cui compariva quello vecchio. Anche piccole variazioni nella scrittura dell’indirizzo (l’uso o meno dell’abbreviazione "Via", numeri civici scritti in modo diverso) possono creare confusione.',
          'Registrarsi su directory di settore e locali (piattaforme turistiche, elenchi regionali, portali dedicati al vino o all’agroalimentare) aiuta a costruire ulteriori riferimenti coerenti verso l’attività, rafforzando agli occhi di Google la fondatezza dei dati presenti sul profilo principale.',
          'Vale la pena, periodicamente, fare una verifica di tutte le piattaforme su cui l’attività compare — anche quelle create anni prima e ormai dimenticate — per assicurarsi che i dati siano ancora corretti e coerenti tra loro. È un lavoro poco appariscente, ma che elimina in modo silenzioso uno degli ostacoli più comuni a un buon posizionamento locale.',
        ],
      },
      {
        h2: 'Contenuti geolocalizzati sul sito',
        paragraphs: [
          'Oltre al profilo Google Business, anche il sito web gioca un ruolo nella SEO locale, se costruito tenendo conto del territorio in cui l’attività opera. Menzionare esplicitamente la zona, la regione, i comuni vicini nelle pagine del sito aiuta Google ad associare correttamente l’attività a quel territorio, rafforzando la pertinenza per le ricerche locali.',
          'Una pagina dedicata a "come raggiungerci", con indicazioni chiare, punti di riferimento nella zona e magari una mappa integrata, non è solo utile per chi deve organizzare la visita: è anche un segnale di contesto geografico che il sito comunica ai motori di ricerca.',
          'Anche i contenuti del blog possono essere pensati con un taglio locale: un articolo che racconta un evento del territorio, una collaborazione con un’altra attività della zona, o semplicemente descrive cosa rende speciale la propria area geografica, aiuta a costruire nel tempo un profilo di contenuti coerente con l’identità territoriale dell’attività.',
          'È importante che questi contenuti restino autentici e utili, non un semplice esercizio di ripetizione del nome della zona in ogni pagina: Google riconosce sempre più facilmente contenuti scritti solo per ottimizzare le parole chiave, senza offrire reale valore a chi legge, e tende a penalizzarli piuttosto che premiarli.',
        ],
      },
      {
        h2: 'Come implementare tutto questo, passo dopo passo',
        paragraphs: [
          'Il primo passo pratico è verificare se il profilo Google Business esiste già (spesso sì, creato automaticamente da Google) e rivendicarlo formalmente, completando ogni sezione disponibile: categoria, descrizione, orari, servizi, foto.',
          'Il secondo passo è impostare un piccolo processo, anche semplice, per raccogliere recensioni con regolarità: un messaggio standard da inviare dopo ogni visita o acquisto, con un link diretto, evita di dover reinventare la richiesta ogni volta e rende la raccolta delle recensioni parte della routine, non un’attività occasionale.',
          'Il terzo passo è fare una verifica dei dati NAP su tutte le piattaforme dove l’attività compare, correggendo eventuali incoerenze trovate, e registrandosi sulle directory di settore più rilevanti per il proprio territorio se non è già stato fatto.',
          'Il quarto passo, più graduale, è arricchire il sito con contenuti geolocalizzati — una pagina dedicata al territorio, articoli con un taglio locale, indicazioni chiare per raggiungere la sede fisica — costruendo nel tempo un sito che comunica con chiarezza non solo cosa fate, ma anche dove, e perché quel dove ha importanza per chi vi legge.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'In un caso concept ispirato a progetti reali di SEO locale per l’agroalimentare (esempio illustrativo, non riferito a un singolo cliente), il punto di partenza era un profilo Google Business esistente ma mai curato attivamente: poche foto datate, nessuna risposta alle recensioni presenti, orari non aggiornati da tempo.',
          'Il lavoro impostato ha previsto la revisione completa del profilo — descrizione, categorie, foto nuove e rappresentative degli spazi e dei prodotti — insieme a un processo semplice per chiedere recensioni dopo ogni visita, con un messaggio automatico inviato pochi giorni dopo l’acquisto o la degustazione.',
          'In parallelo è stata verificata la coerenza dei dati su tutte le piattaforme in cui l’attività compariva, correggendo un numero di telefono ormai obsoleto rimasto su alcune directory dimenticate, e sono state aggiunte al sito alcune pagine con un chiaro riferimento al territorio, comprese indicazioni dettagliate per raggiungere la sede.',
          'Il cambiamento più evidente, nei mesi successivi a questo tipo di intervento, non è quasi mai un singolo numero isolato, ma un insieme di segnali che si rafforzano a vicenda: più recensioni recenti, un profilo più completo, dati coerenti ovunque, e un sito che comunica con chiarezza il legame con il territorio — tutti elementi che, insieme, tendono a tradursi in una presenza più solida nelle ricerche locali nel tempo.',
        ],
      },
      {
        h2: 'Errori comuni che indeboliscono la visibilità locale',
        paragraphs: [
          'Un profilo incompleto — poche foto, descrizione generica, orari non aggiornati — è l’errore più diffuso e più facile da correggere, eppure resta il più comune anche tra attività che hanno investito tempo e budget in altre forme di marketing digitale.',
          'Non avere alcuna strategia per raccogliere recensioni, lasciando che arrivino solo per iniziativa spontanea del cliente, rallenta molto la crescita della reputazione online, e rischia di lasciare il profilo con poche recensioni, magari sbilanciate verso le esperienze più estreme, positive o negative che siano.',
          'Non rispondere alle recensioni, specialmente quelle negative, trasmette l’impressione di un’attività poco presente o poco attenta — anche quando, nella realtà quotidiana, non è affatto così.',
          'Un altro errore frequente è trascurare la coerenza dei dati NAP dopo un cambiamento — un trasferimento della sede, un nuovo numero di telefono, un cambio di ragione sociale — aggiornando solo il sito o solo il profilo Google, e lasciando le altre piattaforme disallineate per mesi o anni senza accorgersene.',
        ],
      },
      {
        h2: 'Domande frequenti sulla SEO locale',
        paragraphs: [
          '**Serve un sito web se ho già un buon profilo Google Business?** Sì: il profilo Google Business è spesso il primo punto di contatto, ma è il sito a permettere di raccontare la storia dell’attività, mostrare il catalogo o le esperienze in modo approfondito, e convertire chi è già interessato in un contatto o un acquisto. I due strumenti lavorano meglio insieme che da soli.',
          '**Quanto tempo serve prima di vedere risultati concreti?** Dipende dalla situazione di partenza e dalla costanza con cui si applicano le pratiche descritte, ma nella maggior parte dei casi i primi segnali di miglioramento (più visualizzazioni del profilo, più richieste di indicazioni stradali) emergono nel giro di alcuni mesi di lavoro continuativo, non da un singolo intervento isolato.',
          '**Conviene rispondere anche alle recensioni positive, non solo a quelle negative?** Sì, anche se richiede più tempo: rispondere a tutte le recensioni, non solo a quelle critiche, rafforza l’impressione di un’attività presente e attenta, e in alcuni casi contribuisce anch’esso alla pertinenza percepita dal profilo.',
          '**Un’attività in una zona molto piccola o rurale può comunque beneficiare della SEO locale?** Sì, spesso ancora di più: in territori con meno concorrenza diretta online, un profilo ben curato può distinguersi con relativa facilità rispetto a contesti urbani dove molte attività competono per le stesse ricerche.',
          '**Le recensioni false o comprate aiutano davvero?** No, e comportano un rischio concreto: Google individua sempre più spesso pattern sospetti di recensioni, e un profilo penalizzato per questo motivo può perdere visibilità in modo molto più grave di quanto avrebbe fatto partendo semplicemente con poche recensioni ma tutte autentiche.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il primo passo, prima di qualunque altra ottimizzazione, è verificare che il profilo Google Business esista, sia verificato e completo. **È la base su cui si costruisce tutto il resto della visibilità locale.**',
          'Da lì, i passi successivi — recensioni raccolte con regolarità, dati coerenti su tutte le piattaforme, contenuti geolocalizzati sul sito — sono lavori progressivi, non un intervento da fare una volta sola e dimenticare: la visibilità locale si costruisce e si mantiene nel tempo, con piccole azioni costanti più che con un singolo grande sforzo iniziale.',
          'Realizziamo siti e strategie SEO locale pensate per il territorio in cui operate, con un’attenzione specifica alle esigenze di chi, come una cantina, un frantoio o un agriturismo, deve essere trovato da chi è pronto a raggiungerlo di persona. [Scopri Siti web che generano contatti →](/servizi/siti-web-contatti)',
        ],
      },
    ],
  },
  {
    slug: 'storytelling-vino-marketing-vendite',
    title: 'Storytelling del Vino: Come Raccontare la Tua Cantina e Vendere di Più',
    seoTitle: 'Storytelling del vino: raccontare la cantina e vendere',
    excerpt:
      'A parità di qualità, il vino che si vende meglio è spesso quello con la storia più chiara dietro l’etichetta. Ecco come raccontare la propria cantina in modo che aiuti davvero a vendere, non solo a intrattenere.',
    date: '2026-08-01',
    readingMinutes: 9,
    category: 'Strategia',
    featuredImage: '/images/blog/storytelling-vino-marketing-vendite.jpg',
    imageAlt: 'Vigneto storico che racconta la tradizione di una cantina familiare',
    tags: ['Storytelling', 'Marketing Vino', 'Content Marketing', 'Brand'],
    keywords: ['storytelling vino', 'marketing cantina', 'narrazione brand wine', 'content marketing vino', 'brand building agroalimentare'],
    relatedSlugs: ['wine-club-revenue-ricorrente-fedelta', 'seo-locale-agroalimentare-google-maps'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/chi-sono', label: 'Chi sono' },
      { href: '/portfolio/tenuta-monteverdi', label: 'Case study: Tenuta Monteverdi' },
    ],
    body: [
      {
        h2: 'Perché la storia conta quanto il vino',
        paragraphs: [
          'A parità di qualità — e in un mercato dove la qualità media è alta — **le persone scelgono spesso il vino di cui capiscono la storia**, non necessariamente quello oggettivamente "migliore". Il vitigno, il metodo di produzione, l’annata sono dati tecnici; è il racconto attorno a quei dati che li rende memorabili.',
          'Non significa inventare una storia: significa mettere in parole quello che nella maggior parte delle cantine esiste già, ma resta implicito — nella testa di chi ci lavora, mai scritto per chi non c’è mai stato.',
          'Il problema non è quasi mai la mancanza di materiale. È che quel materiale vive in conversazioni informali, in aneddoti raccontati durante le visite in cantina, in decisioni che sembrano ovvie a chi le ha prese e che quindi non vengono mai messe per iscritto. Chi visita il sito o legge una scheda prodotto, però, non ha accesso a nessuna di quelle conversazioni.',
          'Lo storytelling, in questo senso, non è un esercizio creativo aggiuntivo da affidare a un copywriter esterno una tantum: è un lavoro di traduzione. Prendere quello che esiste già nella memoria di chi lavora in cantina e renderlo leggibile, coerente e riutilizzabile su ogni canale — dal sito alle etichette, dai social alle schede prodotto dell’e-commerce.',
        ],
      },
      {
        h2: 'Cosa sta cambiando nel modo in cui si sceglie il vino',
        paragraphs: [
          'Negli ultimi anni il comportamento di chi acquista vino, sia in cantina che online, è cambiato in modo evidente anche solo osservando il tempo che le persone dedicano a una scheda prodotto prima di decidere. In molti casi non si limitano più a guardare il prezzo o l’annata: cercano informazioni su chi produce quel vino, su come viene fatto, su cosa lo rende diverso da un’etichetta simile sullo stesso scaffale.',
          'Questo non significa che la qualità tecnica sia diventata meno importante — resta la base imprescindibile — ma che, a parità di qualità percepita, la maggior parte delle persone tende a scegliere ciò che riesce a comprendere e a cui riesce ad affezionarsi più rapidamente. Un racconto chiaro accorcia quella distanza.',
          'Un numero crescente di cantine, soprattutto quelle di dimensioni medio-piccole che non possono competere sul prezzo con i grandi produttori, ha iniziato a investire proprio su questo: non tanto in budget pubblicitari, quanto in tempo dedicato a raccogliere e strutturare i contenuti narrativi che già possiedono. È un investimento a basso costo economico ma che richiede metodo, altrimenti si disperde in post social sporadici senza un filo conduttore.',
          'Vale la pena essere chiari su un punto: non esistono numeri precisi e universali su quanto lo storytelling incida sulle vendite di un singolo produttore, e diffidare di chi promette percentuali esatte è quasi sempre una buona idea. Quello che si osserva con costanza, però, è che le cantine con una narrazione coerente tendono ad avere una relazione più solida con i propri clienti, tempi di fidelizzazione più lunghi e una percezione di valore che permette di sostenere prezzi meno legati alla sola guerra sul listino.',
        ],
      },
      {
        h2: 'Il problema che vive chi ha una cantina',
        paragraphs: [
          'Chi gestisce una cantina, specialmente se di dimensioni familiari, si trova spesso in una posizione paradossale: conosce la propria storia meglio di chiunque altro, ma fatica a raccontarla a chi non la conosce affatto. Quello che per il produttore è ovvio — perché quella vigna è stata piantata proprio lì, perché si è scelto di convertire al biologico, perché una certa etichetta porta il nome di un nonno — per chi visita il sito per la prima volta non lo è per niente.',
          'Il risultato è un sito, un e-commerce o un profilo social che parla soprattutto di caratteristiche tecniche: gradazione alcolica, vitigno, abbinamenti gastronomici. Informazioni corrette e necessarie, ma che da sole non distinguono una cantina dalle centinaia di altre che vendono un prodotto di livello comparabile nella stessa fascia di prezzo.',
          'C’è poi un secondo problema, più sottile: molte cantine hanno effettivamente provato a fare storytelling, magari con una pagina "Chi siamo" scritta anni fa e mai più aggiornata, o con qualche post social occasionale. Ma senza una struttura alle spalle, questi tentativi restano isolati — non si parlano tra loro, non rimandano l’uno all’altro, e chi naviga il sito non riesce a costruirsi un’immagine coerente della cantina nel tempo che dedica alla visita.',
          'Il rischio concreto, in entrambi i casi, è che il potenziale cliente finisca per decidere sulla base dell’unico criterio rimasto facilmente confrontabile: il prezzo. Ed è proprio la leva su cui una piccola cantina fatica di più a competere con produttori più grandi e strutturati.',
        ],
      },
      {
        h2: 'Storytelling come leva di vendita, non solo di immagine',
        paragraphs: [
          'È importante distinguere subito lo storytelling che aiuta davvero le vendite da quello che serve solo a "fare bella figura". Un racconto che non è collegato in nessun modo al momento in cui una persona sta decidendo se comprare o meno resta un esercizio letterario fine a se stesso, per quanto ben scritto.',
          'Lo storytelling che funziona per le vendite ha una caratteristica precisa: **riduce l’incertezza nel momento della decisione d’acquisto**. Quando una persona è indecisa tra due bottiglie di prezzo simile, un contesto chiaro — chi ha fatto quel vino, con quale intenzione, per quale occasione — le dà un motivo concreto per scegliere una rispetto all’altra, oltre alla semplice etichetta o al punteggio di una guida.',
          'Questo significa che la narrazione non può vivere solo in una pagina isolata del sito, per quanto ben scritta: deve arrivare fino al punto in cui la decisione viene presa davvero, che sia la scheda prodotto dell’e-commerce, l’etichetta stessa sullo scaffale, o la conversazione con chi vende in cantina durante una degustazione.',
          'In pratica, lo storytelling efficace collega tre livelli che spesso restano separati: il racconto lungo e approfondito (la pagina "La nostra storia", un articolo di blog, un video), il racconto sintetico nel punto di vendita o acquisto (poche righe nella scheda prodotto, un elemento distintivo sull’etichetta), e il racconto frammentato ma continuativo sui social e in newsletter, che mantiene viva la relazione anche quando non c’è un acquisto imminente.',
        ],
      },
      {
        h2: 'Le storie che una cantina ha già, senza saperlo',
        paragraphs: [
          'Prima di pensare a "come" raccontare, vale la pena mappare "cosa" c’è già da raccontare. Nella maggior parte dei casi il materiale esiste, semplicemente non è mai stato messo per iscritto in modo organico.',
          'La storia delle origini: come è nata la cantina, chi l’ha fondata, cosa l’ha spinta a partire proprio da quel terreno. Spesso c’è un momento preciso — una scelta di famiglia, un’eredità, una decisione controcorrente rispetto a quello che si faceva prima in quella zona — che da sola vale più di qualsiasi slogan.',
          'La storia della produzione: le scelte fatte — biologico, fermentazione naturale, un metodo tramandato, la decisione di lavorare solo con determinate varietà autoctone — e perché sono state fatte, non solo cosa sono tecnicamente. Il "perché" è quasi sempre più interessante del "cosa" per chi non è del settore.',
          'La storia di chi beve il vino: le occasioni in cui viene scelto, i clienti che tornano anno dopo anno, il tipo di persona a cui quella bottiglia parla di più. Anche piccoli dettagli — un ristorante che lo serve da anni, una richiesta ricorrente durante le vendemmie aperte al pubblico — sono materiale narrativo prezioso, spesso trascurato perché sembra "troppo piccolo" per meritare attenzione.',
        ],
      },
      {
        h2: 'Il territorio come parte della storia',
        paragraphs: [
          'Un elemento che molte cantine sottovalutano è il legame con il territorio in senso più ampio: non solo la vigna, ma il paesaggio, il clima, le tradizioni locali, perfino i rapporti con altri produttori della zona. Chi acquista vino online o visita una cantina spesso non conosce affatto quella zona geografica, e un breve contesto territoriale aiuta a collocare il prodotto in un’immagine più ricca.',
          'Non serve trasformarsi in una guida turistica: bastano pochi elementi ricorrenti — l’esposizione della vigna, un microclima particolare, una tradizione enologica locale — richiamati con costanza nei contenuti, in modo che diventino parte riconoscibile dell’identità del brand nel tempo.',
          'Questo lavoro ha anche un effetto collaterale utile: collegare la cantina al territorio rafforza in parallelo la visibilità nelle ricerche locali e geolocalizzate, un tema che si intreccia da vicino con il lavoro di posizionamento sui motori di ricerca e sulle mappe.',
        ],
      },
      {
        h2: 'Come raccontare senza scadere nel tecnico',
        paragraphs: [
          'Una scheda prodotto che dice "Sangiovese, 30 ettari, dal 1994" comunica dati, non una storia. **Il potere è nel dettaglio umano**: chi ha piantato quella vigna, perché proprio lì, cosa è cambiato in trent’anni.',
          'Non serve scrivere un romanzo per ogni bottiglia: bastano poche righe scritte con cura, che diano al lettore un motivo per ricordare quella cantina invece di una qualsiasi altra.',
          'Un modo pratico per verificare se un testo racconta davvero qualcosa, o si limita a descrivere, è chiedersi: questa frase potrebbe essere scritta identica da qualunque altra cantina della zona? Se la risposta è sì, probabilmente manca ancora il dettaglio specifico che la rende unica a quella famiglia, a quella vigna, a quella scelta.',
          'Il linguaggio tecnico non va eliminato — chi cerca informazioni enologiche specifiche deve trovarle — ma va accompagnato, non sostituito, dal contesto umano. Un buon equilibrio è mettere il dato tecnico a disposizione di chi lo cerca (magari in una sezione dedicata o in una scheda tecnica scaricabile) e lasciare che il racconto guidi il resto del testo.',
        ],
      },
      {
        h2: 'Dove usare lo storytelling',
        paragraphs: [
          'Sul sito, una pagina "La nostra storia" ben scritta è spesso una delle più lette da chi valuta se comprare o prenotare una visita. È il punto in cui chi è già interessato approfondisce, e merita quindi il livello di dettaglio più alto tra tutti i contenuti del sito.',
          'Nelle schede prodotto dell’e-commerce, dove una riga di contesto trasforma un elenco di caratteristiche in un motivo per scegliere proprio quel vino. Non serve ripetere l’intera storia della cantina su ogni prodotto: basta un collegamento specifico tra quella bottiglia e un elemento della storia più ampia — l’annata particolare, la vigna da cui proviene, l’occasione per cui è pensata.',
          'Sull’etichetta e nel packaging, dove lo spazio è limitatissimo ma l’impatto è enorme perché è l’unico contenuto che accompagna fisicamente il prodotto anche dopo l’acquisto. Una frase breve, un simbolo ricorrente, un rimando visivo coerente con il resto della narrazione può fare la differenza tra un’etichetta anonima e una riconoscibile.',
          'Nei contenuti social e nelle newsletter, dove piccoli frammenti — un momento della vendemmia, un dettaglio del lavoro quotidiano — costruiscono familiarità nel tempo, senza bisogno di essere sempre promozionali. È qui che la coerenza con la storia raccontata altrove conta di più: se il tono o i temi cambiano troppo da un canale all’altro, chi segue la cantina fatica a costruirsi un’immagine unitaria.',
        ],
      },
      {
        h2: 'Coerenza tra i canali: il collante che spesso manca',
        paragraphs: [
          'Uno degli errori più diffusi non riguarda la qualità dei singoli contenuti, ma la loro coerenza reciproca. Molte cantine hanno un sito con un certo tono, un profilo Instagram con un tono diverso, un’etichetta pensata anni prima senza nessun collegamento con quanto viene raccontato online. Il risultato è un’identità frammentata, dove chi visita più canali fatica a riconoscere che sta parlando con lo stesso brand.',
          'Costruire coerenza non significa ripetere identiche le stesse parole ovunque — anzi, ogni canale ha un formato e un ritmo diversi — ma mantenere fermi alcuni elementi ricorrenti: gli stessi temi centrali (le origini, il territorio, il metodo), lo stesso registro linguistico, gli stessi dettagli distintivi richiamati in modo naturale in contesti diversi.',
          'Un modo pratico per verificarlo è mettere fianco a fianco la homepage del sito, l’ultima newsletter inviata e gli ultimi post social: se un cliente li leggesse tutti nello stesso giorno, percepirebbe la stessa cantina, o gli sembrerebbe di trovarsi davanti a due attività diverse? Questo semplice esercizio, ripetuto periodicamente, aiuta a individuare le incoerenze prima che diventino un’abitudine consolidata.',
        ],
      },
      {
        h2: 'Una struttura semplice che funziona',
        paragraphs: [
          'Partire da una condizione iniziale (un terreno trascurato, una tradizione da recuperare), raccontare la scelta fatta per cambiarla, e mostrare il risultato di oggi: questa struttura, semplice e onesta, funziona meglio di qualunque slogan elaborato.',
          '> Ogni bottiglia che vendete porta con sé una scelta fatta anni prima. Raccontarla è spesso la parte più semplice — e più trascurata — del marketing di una cantina.',
          'Questa struttura a tre tempi — situazione iniziale, scelta, risultato — funziona bene perché rispecchia il modo naturale in cui le persone raccontano e ricordano le storie, anche fuori dal contesto del vino. Non richiede competenze narrative particolari: richiede solo di individuare, per ogni contenuto, quale di questi tre momenti si sta raccontando, ed essere sicuri che il lettore capisca da dove si parte e dove si arriva.',
          'Vale la pena notare che questa struttura si applica bene sia a un racconto lungo (la storia dell’intera cantina) sia a un racconto brevissimo (poche righe su una singola etichetta): cambia la scala, non la logica di fondo.',
        ],
      },
      {
        h2: 'Come raccogliere le storie che esistono già in cantina',
        paragraphs: [
          'Il primo passo pratico, prima ancora di scrivere qualunque testo, è raccogliere il materiale grezzo. Spesso il modo più efficace è una conversazione registrata — non un’intervista formale, ma una chiacchierata guidata da poche domande semplici — con chi ha vissuto le decisioni più importanti della cantina: chi l’ha fondata, chi gestisce la produzione, chi si occupa dell’accoglienza dei visitatori.',
          'Le domande più utili non riguardano quasi mai i dati tecnici, che si possono recuperare facilmente in un secondo momento: riguardano i "perché" e i momenti di svolta. Perché avete scelto questo territorio? Cosa vi ha fatto cambiare un metodo di lavorazione? Qual è la richiesta più frequente che ricevete dai visitatori? Qual è l’aneddoto che raccontate più spesso quando qualcuno vi chiede della cantina?',
          'Da questa raccolta iniziale nasce quello che si può chiamare un archivio narrativo: un documento, anche semplice, dove si annotano gli episodi, le frasi ricorrenti, i dettagli emersi. Non tutto finirà online subito, ma avere questo materiale organizzato permette di attingervi nel tempo per contenuti diversi — un post social, una scheda prodotto, un paragrafo del sito — senza dover reinventare ogni volta il racconto da zero.',
          'Un ultimo passaggio pratico, spesso sottovalutato: dare a ogni storia raccolta un "luogo naturale" dove vivere. Non tutte le storie meritano la homepage: alcune sono perfette per una scheda prodotto specifica, altre per un singolo post social legato a un momento stagionale, altre ancora per la pagina "La nostra storia". Distribuire il materiale nei punti giusti evita sia di sovraccaricare un’unica pagina, sia di sprecare contenuti validi in canali dove nessuno li leggerà.',
        ],
      },
      {
        h2: 'Un esempio illustrativo',
        paragraphs: [
          'Per rendere concreto il ragionamento, può essere utile un caso concept ispirato a dinamiche osservate in diversi progetti reali di cantine familiari — è un esempio illustrativo, non riferito a un singolo cliente specifico.',
          'Immaginiamo una cantina a conduzione familiare, arrivata alla terza generazione, con un catalogo di vini di buon livello ma un sito che si limitava a elencare le etichette con scheda tecnica e prezzo. Le vendite online erano modeste e concentrate quasi solo su chi già conosceva la cantina di persona, magari perché l’aveva visitata durante una vacanza in zona.',
          'Il lavoro è partito da una raccolta di interviste informali con i tre membri della famiglia coinvolti nella produzione, da cui sono emersi elementi mai raccontati prima: la ragione specifica per cui il nonno aveva scelto quel terreno collinare invece di un appezzamento più pianeggiante e facile da lavorare, il motivo dietro la conversione al biologico avvenuta una decina d’anni prima, e un aneddoto ricorrente legato a una particolare vendemmia difficile che era diventata quasi un racconto di famiglia.',
          'Questi elementi sono stati riorganizzati in una pagina "La nostra storia" più ricca, in brevi paragrafi di contesto aggiunti alle schede prodotto più rappresentative del catalogo, e in una serie di contenuti social distribuiti nel corso di alcuni mesi, ciascuno legato a uno dei temi emersi. Il risultato osservato in casi simili è stato un aumento del tempo medio trascorso sulle pagine prodotto e un numero maggiore di richieste dirette con riferimenti specifici alla storia raccontata — un segnale, per quanto qualitativo e non riducibile a una singola metrica, che la narrazione stava effettivamente influenzando la decisione d’acquisto.',
        ],
      },
      {
        h2: 'Storytelling autentico contro marketing vuoto',
        paragraphs: [
          'Uno dei rischi più concreti, quando si inizia a lavorare sulla narrazione, è scivolare in un linguaggio che suona bene ma non dice nulla di specifico: "passione", "tradizione", "eccellenza" sono parole che compaiono ormai su quasi ogni sito di settore, e proprio per questo hanno smesso di comunicare qualcosa di distintivo.',
          'La differenza tra storytelling autentico e marketing vuoto sta quasi sempre nel livello di dettaglio. "Da generazioni coltiviamo con passione" è una frase che potrebbe stare su qualunque etichetta. "Mio nonno ha rifiutato di vendere questo appezzamento negli anni Settanta, quando quasi tutti i vicini lo stavano facendo, perché pensava che quella collina avrebbe dato frutti migliori nel tempo" racconta la stessa idea, ma con un dettaglio che nessun’altra cantina può replicare.',
          'Questo non significa che le parole più generiche vadano bandite del tutto — a volte servono come collante tra un dettaglio e l’altro — ma che non possono essere il contenuto principale di un racconto. Se un testo, tolte le parole d’atmosfera, non lascia nessun fatto specifico e verificabile, probabilmente sta intrattenendo senza costruire davvero fiducia.',
          'Un altro segnale utile per riconoscere lo storytelling autentico è la sua coerenza nel tempo: una storia vera non cambia versione a seconda del canale o della campagna del momento. Se il racconto delle origini della cantina è diverso sul sito rispetto a quello raccontato durante una degustazione in loco, chi nota la discrepanza perde fiducia molto più rapidamente di quanto l’avrebbe guadagnata con un buon racconto.',
        ],
      },
      {
        h2: 'Errori comuni nello storytelling del vino',
        paragraphs: [
          'Un linguaggio troppo tecnico, che comunica competenza ma non emozione: "fermentazione malolattica in acciaio inox" dice poco a chi non è del settore, e rischia di allontanare proprio i clienti meno esperti che avrebbero più bisogno di un contesto accessibile per orientarsi nella scelta.',
          'Una narrazione incoerente, diversa a seconda del canale — sito, social, etichetta — che confonde invece di costruire un’identità riconoscibile. Spesso nasce non da una scelta deliberata, ma dal fatto che canali diversi vengono gestiti da persone diverse, in momenti diversi, senza un riferimento condiviso a cui attenersi.',
          'Contenuti troppo superficiali, una frase generica invece di un racconto vero: la differenza tra i due si nota subito, e influisce su quanto quella pagina viene letta fino in fondo.',
          'Aggiornare la narrazione una volta sola e poi dimenticarla per anni: una cantina cambia, cresce, prende nuove decisioni, e la storia raccontata online dovrebbe evolvere di conseguenza. Un sito con una pagina "Chi siamo" ferma a un momento passato comunica, magari senza volerlo, un’immagine statica di un’attività che invece è viva.',
          'Affidare tutto lo storytelling a un unico contenuto, di solito la pagina del sito, senza portarlo fino al punto vendita o alla scheda prodotto: è probabilmente l’errore più costoso in termini di vendite, perché lascia scoperto proprio il momento in cui la decisione d’acquisto viene presa.',
        ],
      },
      {
        h2: 'Domande frequenti sullo storytelling del vino',
        paragraphs: [
          '**Serve per forza uno scrittore professionista per fare storytelling efficace?** Non necessariamente. Aiuta avere qualcuno che sappia strutturare il materiale e scrivere in modo chiaro, ma la parte più importante — la raccolta delle storie vere, dei dettagli specifici, degli aneddoti — deve arrivare da chi vive la cantina ogni giorno. Nessun copywriter esterno può inventare quel materiale al posto del produttore.',
          '**Quanto tempo richiede iniziare a costruire uno storytelling efficace?** La raccolta iniziale del materiale — conversazioni con chi lavora in cantina, individuazione dei temi ricorrenti — può richiedere solo alcuni incontri concentrati. La parte più lunga è distribuire quel materiale in modo coerente su tutti i canali, un lavoro che si fa progressivamente nel corso di alcuni mesi, non tutto insieme.',
          '**Ha senso investire in storytelling anche per una cantina molto piccola, senza e-commerce?** Sì, probabilmente ancora di più: una cantina piccola spesso vive soprattutto di vendita diretta e di relazione personale con i clienti, ed è proprio in quel contesto — visite, degustazioni, conversazioni al banco — che un racconto ben strutturato ha l’impatto più immediato sulla decisione d’acquisto.',
          '**Come si misura se lo storytelling sta funzionando davvero?** Non esistono metriche uniche e definitive, ma alcuni segnali sono osservabili con relativa facilità: il tempo trascorso sulle pagine con contenuto narrativo, le domande dei clienti che fanno riferimento a dettagli raccontati online o sui social, e in alcuni casi un aumento del valore medio dell’ordine quando le schede prodotto includono un contesto più ricco.',
          '**È rischioso raccontare anche le difficoltà, non solo i successi della cantina?** Al contrario, spesso è uno degli elementi più efficaci: un’annata difficile superata, una scelta rischiosa che all’inizio non convinceva tutti in famiglia, un errore corretto nel tempo — questi episodi, raccontati con onestà, costruiscono più fiducia di un racconto fatto solo di successi lineari, perché risultano più credibili e più vicini all’esperienza reale di chi ascolta.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve un ufficio marketing per iniziare: **basta mettere per iscritto le storie che già esistono in cantina**, partendo da quella delle origini, e trovare i punti del sito e dei canali social dove hanno più senso.',
          'Il passo successivo, una volta raccolto il materiale, è costruire una struttura che porti quella narrazione fino al momento della decisione d’acquisto — non solo su una pagina isolata del sito, ma nelle schede prodotto, nell’etichetta, nei contenuti ricorrenti sui social — mantenendo coerenza tra tutti i canali nel tempo.',
          'Aiutiamo cantine a definire contenuti e narrazione di brand come parte della strategia digitale complessiva, collegando lo storytelling agli obiettivi concreti di vendita e non solo all’immagine. [Scopri Consulenza strategica →](/servizi/consulenza-strategica)',
        ],
      },
    ],
  },
  {
    slug: 'bandi-incentivi-digitalizzazione-agroalimentare',
    title: 'Bandi e Incentivi per la Digitalizzazione: Come Cercarli Senza Perdere Tempo',
    seoTitle: 'Bandi digitalizzazione agroalimentare: come cercarli',
    excerpt:
      'Esistono davvero bandi e incentivi per chi investe in digitale, ma cambiano spesso per importo, requisiti e scadenze. Ecco dove cercarli sulle fonti ufficiali, e come riconoscere un’occasione reale da una perdita di tempo.',
    date: '2026-08-01',
    readingMinutes: 8,
    category: 'Strategia',
    featuredImage: '/images/blog/bandi-incentivi-digitalizzazione-agroalimentare.jpg',
    imageAlt: 'Documentazione e scrivania per la ricerca di bandi e incentivi alla digitalizzazione',
    tags: ['Bandi', 'Incentivi', 'Finanziamenti PMI', 'Strategia'],
    keywords: ['bandi digitalizzazione agroalimentare', 'incentivi digitale PMI', 'finanziamenti innovazione agroalimentare', 'agevolazioni digitalizzazione', 'bandi regionali innovazione'],
    relatedSlugs: ['scegliere-partner-digitale-checklist', 'seo-locale-agroalimentare-google-maps'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/software', label: 'Software su misura per l’agroalimentare' },
      { href: '/contatti', label: 'Contatti' },
    ],
    body: [
      {
        h2: 'Perché vale la pena informarsi prima di investire',
        paragraphs: [
          'In Italia esistono, in modo continuativo negli anni, bandi e incentivi — nazionali, regionali e camerali — rivolti alle PMI che investono in digitalizzazione, innovazione o transizione tecnologica. **Cambiano spesso per nome, importo e requisiti**, quindi qualunque elenco specifico rischia di essere superato nel giro di pochi mesi.',
          'Quello che resta stabile è dove cercarli, e come valutare rapidamente se un bando è davvero pertinente per un investimento in sito, e-commerce o software, prima di perdere tempo in una domanda che poi risulta non idonea.',
          'Questo articolo non elenca bandi specifici con importi o percentuali: qualunque elenco di questo tipo, per quanto accurato al momento della scrittura, rischierebbe di essere superato o addirittura sbagliato nel momento in cui lo leggi. Trovi invece un metodo — dove cercare, come leggere un bando, come evitare gli errori più comuni — che resta valido indipendentemente da quali misure siano attive in un dato momento.',
          'È una scelta editoriale deliberata: un articolo che elenca bandi specifici sembra più utile a prima vista, ma diventa fuorviante nel giro di poche settimane o mesi, quando quei bandi chiudono o vengono sostituiti da nuove misure. Un metodo per orientarsi, invece, resta valido molto più a lungo — ed è quello che vale davvero la pena imparare una volta per tutte.',
        ],
      },
      {
        h2: 'Il panorama cambia spesso, le fonti restano stabili',
        paragraphs: [
          'I bandi per la digitalizzazione delle PMI, in Italia, si muovono su tre livelli che coesistono e si alternano nel tempo: misure nazionali, misure regionali, e contributi camerali locali. Nessuno di questi livelli è stabile nei contenuti — nomi, importi, requisiti e scadenze cambiano con una frequenza che rende inutile qualsiasi elenco statico.',
          'Quello che invece resta costante, anno dopo anno, è **la struttura del sistema**: esiste sempre un ente nazionale di riferimento per gli incentivi alle imprese, esistono sempre le Regioni con propri strumenti dedicati allo sviluppo economico del territorio, ed esistono sempre le Camere di Commercio con contributi più piccoli ma spesso più accessibili. Imparare a muoversi in questa struttura vale più di qualunque elenco di bandi attivi in un preciso momento.',
          'Anche i settori target cambiano periodicamente: in alcuni momenti alcune misure danno priorità esplicita al settore agroalimentare o alla filiera enogastronomica, in altri momenti sono aperte in modo trasversale a tutte le PMI. Questo è un motivo ulteriore per verificare sempre la formulazione esatta del bando in corso, invece di dare per scontato che il proprio settore sia sempre incluso o sempre escluso.',
          'Un numero crescente di imprenditori agroalimentari, negli ultimi anni, ha iniziato a considerare la digitalizzazione — sito, e-commerce, software gestionale — come un investimento strutturale e non più opzionale. Questo ha reso il tema dei bandi più rilevante, ma anche più affollato di informazioni approssimative o non aggiornate che circolano online, complicando proprio a chi ne avrebbe più bisogno il compito di orientarsi tra fonti diverse e spesso contraddittorie.',
        ],
      },
      {
        h2: 'Il vero problema: tempo perso dietro informazioni inaffidabili',
        paragraphs: [
          'Il problema più comune non è la mancanza di bandi disponibili, ma il tempo speso a inseguire informazioni che si rivelano scadute, imprecise o non applicabili al proprio caso. Articoli di blog, post sui social o newsletter di terzi spesso riportano dettagli di bandi già chiusi, o li generalizzano in modo che sembrino applicabili a chiunque quando in realtà hanno requisiti molto specifici.',
          'Un secondo problema, più subdolo, è la tentazione di **rimandare un investimento necessario in attesa di un bando** che potrebbe non arrivare mai, o arrivare con condizioni che alla fine non si applicano alla propria azienda. Aspettare un incentivo incerto per fare qualcosa che serve comunque — un sito che funziona, un e-commerce che vende, un software che fa risparmiare tempo — è spesso una scelta più costosa del procedere comunque e valutare l’eventuale bando come un aiuto successivo, non come un prerequisito.',
          'Questo tipo di attesa ha un costo che raramente viene calcolato: ogni mese senza un sito che genera contatti, o senza un e-commerce che vende, è un mese di fatturato mancato che nessun bando futuro potrà mai recuperare retroattivamente. Il bando, quando arriva, riduce il costo dell’investimento — non lo sostituisce, e soprattutto non recupera il tempo già perso in attesa.',
          'Un terzo problema riguarda la qualità delle informazioni trovate: non tutte le fonti online sono aggiornate o affidabili allo stesso modo, e distinguere una fonte ufficiale da un riassunto di terzi (magari corretto al momento della pubblicazione, ma non più oggi) richiede un metodo, non solo buona volontà.',
        ],
      },
      {
        h2: 'Un metodo, non un elenco',
        paragraphs: [
          'La soluzione a questo problema non è un elenco di bandi — che invecchia in pochi mesi — ma un metodo ripetibile per cercarli, valutarli e capire se vale la pena investire tempo in una domanda. Il metodo si basa su tre pilastri: sapere dove cercare le fonti ufficiali, sapere cosa verificare prima di iniziare a preparare una domanda, e sapere come organizzare la documentazione in modo da non perdere l’occasione per un dettaglio formale.',
          '**Il punto di partenza è sempre la fonte ufficiale**, mai un riassunto di terzi: il testo integrale del bando, pubblicato dall’ente che lo emette, è l’unico documento che conta davvero ai fini della domanda. Riassunti, articoli o post sui social possono aiutare a scoprire che un bando esiste, ma non vanno mai usati come base per decidere se e come presentare domanda.',
        ],
      },
      {
        h2: 'Dove cercare bandi affidabili',
        paragraphs: [
          'Il portale nazionale di riferimento per gli incentivi alle imprese è **Invitalia** (invitalia.it), che raccoglie e aggiorna le misure attive a livello nazionale.',
          'A livello regionale, ogni Regione pubblica i propri bandi sul sito istituzionale (assessorato allo sviluppo economico o simile): utile cercare periodicamente "bandi digitalizzazione" seguito dal nome della propria regione.',
          'Anche le Camere di Commercio locali pubblicano spesso voucher o contributi specifici per le imprese del proprio territorio, con importi più contenuti ma requisiti generalmente più semplici da soddisfare.',
          'Vale la pena anche verificare se esistono consorzi o associazioni di categoria del settore agroalimentare a cui la propria azienda è iscritta: spesso raccolgono e diffondono ai propri associati le opportunità più rilevanti, filtrando già una parte del rumore informativo online.',
        ],
      },
      {
        h2: 'Cosa guardare per capire se un bando è davvero utile',
        paragraphs: [
          'La prima cosa da verificare è **se la propria azienda rientra nei requisiti dimensionali e settoriali** richiesti — molti bandi sono aperti solo a determinate categorie di PMI o a determinati codici ATECO.',
          'La seconda è cosa finanzia esattamente: alcuni bandi coprono solo determinate voci di spesa (es. e-commerce, non software gestionale, o viceversa), quindi va verificato che il proprio progetto rientri davvero nel perimetro previsto.',
          'La terza è capire il meccanismo di erogazione: la maggior parte dei bandi funziona a rimborso — l’azienda anticipa la spesa e viene rimborsata solo dopo — quindi va messo in conto che serve comunque la liquidità iniziale.',
          'La quarta è la finestra temporale: alcuni bandi si aprono e chiudono in poche settimane, altri restano attivi fino a esaurimento fondi con procedura "a sportello" (chi presenta prima ha più probabilità). Sapere in anticipo quale meccanismo si applica cambia radicalmente i tempi con cui organizzarsi.',
        ],
      },
      {
        h2: 'Fondo perduto, rimborso o credito d’imposta: differenze da conoscere',
        paragraphs: [
          'Senza entrare nel dettaglio di misure specifiche (che cambiano troppo spesso per essere elencate qui in modo affidabile), è utile conoscere le categorie generali in cui rientrano quasi tutti gli incentivi disponibili per le imprese.',
          'Un contributo **a fondo perduto** non richiede restituzione, ma quasi sempre prevede un meccanismo a rimborso: l’azienda spende prima, con fondi propri o un finanziamento ponte, e riceve il contributo solo dopo aver rendicontato la spesa secondo le modalità richieste.',
          'Un **credito d’imposta** funziona diversamente: non è un contributo diretto, ma una riduzione delle imposte dovute, calcolata su una parte della spesa sostenuta. Va verificato con il proprio commercialista come e quando può essere effettivamente utilizzato, perché le modalità di compensazione variano da misura a misura.',
          'Esistono anche strumenti di **finanziamento agevolato** (tassi di interesse ridotti rispetto al mercato), che restano comunque un debito da restituire, seppure a condizioni più favorevoli. Va sempre chiaro, prima di fare domanda, in quale di queste categorie rientra la misura a cui si sta pensando di accedere, perché cambia completamente l’impatto sulla liquidità aziendale.',
        ],
      },
      {
        h2: 'Come funziona in pratica una domanda',
        paragraphs: [
          'Si parte leggendo con attenzione il bando ufficiale, non un riassunto di terzi, per verificare requisiti e scadenze esatte.',
          'Si raccoglie la documentazione richiesta — spesso preventivi dettagliati del fornitore, visura camerale, dichiarazioni sui requisiti — prima di presentare la domanda, non dopo.',
          'Si segue l’iter previsto (spesso tramite portale telematico dedicato), e si conservano tutte le fatture e ricevute relative alla spesa, necessarie per il rendiconto finale.',
          'Un passaggio spesso sottovalutato è la richiesta di un preventivo dettagliato al proprio fornitore digitale (agenzia, sviluppatore, consulente) coerente con quanto richiesto dal bando: voci di spesa generiche o non allineate alla terminologia del bando sono una causa frequente di richieste di integrazione o, nei casi peggiori, di esclusione.',
        ],
      },
      {
        h2: 'Un esempio del processo (caso illustrativo)',
        paragraphs: [
          'Un caso illustrativo utile a capire il metodo, non un cliente reale: un’azienda agroalimentare di piccole dimensioni valuta di investire in un e-commerce e in un sistema di gestione ordini. Prima di cercare un bando, definisce con chiarezza il progetto — cosa vuole costruire, quale fornitore ha già individuato, quale preventivo ha ricevuto.',
          'Solo a quel punto verifica sul portale Invitalia e sul sito della propria Regione se esistono misure attive compatibili con quel tipo di spesa. Trova una misura regionale potenzialmente pertinente, legge il testo ufficiale del bando (non un riassunto trovato altrove), e verifica con il proprio commercialista se l’azienda rientra nei requisiti dimensionali e settoriali richiesti.',
          'Il punto centrale di questo processo non è il risultato economico (che dipende da una misura specifica, in un momento specifico, e quindi non è generalizzabile), ma **l’ordine delle operazioni**: prima si definisce il progetto e il suo fornitore, poi si verifica se esiste un bando compatibile — mai il contrario. Partire dal bando e cercare di adattarci un progetto porta quasi sempre a un investimento meno efficace di quello che l’azienda avrebbe fatto comunque.',
          'Se non trova alcuna misura compatibile al momento della verifica, l’azienda dell’esempio procede comunque con l’investimento pianificato, continuando a monitorare periodicamente le fonti ufficiali nei mesi successivi: se un bando compatibile si apre più avanti, potrà comunque valutarlo per un investimento successivo, senza aver perso tempo commerciale nel frattempo.',
        ],
      },
      {
        h2: 'Il ruolo del commercialista e dei consulenti specializzati',
        paragraphs: [
          'Verificare da soli tutti i dettagli tecnici e fiscali di un bando è possibile, ma richiede tempo ed esperienza specifica che la maggior parte dei titolari di piccole aziende agroalimentari non ha, né dovrebbe necessariamente sviluppare internamente. Il commercialista aziendale resta il punto di riferimento più affidabile per valutare se una misura è realmente applicabile, e come impatta fiscalmente sull’azienda.',
          'Esistono anche consulenti specializzati proprio nella ricerca e gestione di bandi, che possono avere senso per progetti di importo più rilevante. Vale però la pena diffidare di chi promette risultati garantiti ("ti faccio ottenere il finanziamento sicuro") prima ancora di conoscere il progetto: nessun consulente serio può garantire l’esito di una domanda che dipende da graduatorie, requisiti e disponibilità di fondi che non controlla.',
          'Un segnale d’allarme comune è la richiesta di compensi elevati calcolati come percentuale del contributo ottenuto, chiesti in anticipo prima ancora dell’esito della domanda: è una pratica che va valutata con attenzione, chiarendo sempre in anticipo cosa succede se la domanda non viene accolta.',
          'Un buon consulente su bandi, al contrario, è trasparente sui limiti del proprio ruolo: aiuta a individuare misure pertinenti, a preparare la documentazione correttamente, e a gestire l’iter di presentazione, ma non può controllare l’esito finale, che dipende da fattori esterni come il numero di domande ricevute o la disponibilità residua di fondi.',
        ],
      },
      {
        h2: 'Organizzare la documentazione prima ancora di cercare un bando',
        paragraphs: [
          'Uno degli errori più costosi è iniziare a cercare un bando senza avere già pronta la documentazione di base dell’azienda: la maggior parte delle misure richiede visura camerale aggiornata, situazione contributiva regolare (DURC), e a volte bilanci degli ultimi esercizi. Recuperare questi documenti all’ultimo momento, magari a ridosso di una scadenza, è una delle cause più comuni di domande presentate in ritardo o con errori formali.',
          'Anche sul lato del progetto vale la stessa logica: avere già un preventivo dettagliato del fornitore digitale, con voci di spesa chiare (sviluppo sito, e-commerce, software gestionale, formazione del personale), permette di rispondere rapidamente quando si trova un bando compatibile, invece di dover richiedere tutto da capo con il rischio di perdere la finestra temporale.',
          'Un fascicolo digitale organizzato con questi documenti, aggiornato periodicamente, è un investimento di poche ore che si ripaga ogni volta che emerge un’opportunità con scadenza ravvicinata — situazione più comune di quanto si pensi, dato che molte misure restano aperte solo per poche settimane.',
          'Vale la pena anche tenere traccia delle scadenze di validità dei singoli documenti (una visura camerale o un DURC hanno validità limitata nel tempo): un documento scaduto al momento della presentazione della domanda è un errore facilmente evitabile, ma che capita più spesso di quanto ci si aspetterebbe proprio perché sembra un dettaglio secondario fino a quando non blocca l’intera domanda.',
        ],
      },
      {
        h2: 'Pianificare l’investimento indipendentemente dal bando',
        paragraphs: [
          'Il modo più solido di affrontare il tema bandi è ribaltare l’ordine con cui la maggior parte delle aziende lo affronta: invece di aspettare un incentivo per decidere se investire, si pianifica l’investimento sulla base del proprio bisogno reale — un sito che genera contatti, un e-commerce che vende, un software che fa risparmiare ore di lavoro manuale — e si valuta un bando, se disponibile, come un’opportunità che riduce il costo di qualcosa che si sarebbe fatto comunque.',
          'Questo approccio ha due vantaggi concreti. Il primo è che l’azienda non perde tempo commerciale in attesa di un finanziamento che potrebbe non arrivare mai, o arrivare con condizioni non compatibili. Il secondo è che, quando un bando compatibile effettivamente si presenta, l’azienda è già pronta — progetto definito, fornitore scelto, preventivo in mano — e può rispondere rapidamente invece di partire da zero sotto la pressione di una scadenza.',
          'Chi invece struttura tutta la propria strategia digitale intorno all’attesa di un bando specifico rischia di rimandare indefinitamente un investimento che, nel frattempo, i concorrenti più organizzati stanno già facendo con risorse proprie.',
        ],
      },
      {
        h2: 'Come distinguere una fonte affidabile da una che non lo è',
        paragraphs: [
          'Con la crescita dell’interesse verso i bandi digitali, è aumentato anche il numero di contenuti online — articoli, video, post sui social — che ne parlano senza sempre essere aggiornati o accurati. Un criterio semplice ma efficace: se un contenuto non cita la fonte ufficiale con un link diretto al bando (non alla home page generica di un ente, ma al testo specifico della misura), va trattato con cautela.',
          'Un secondo criterio utile è la data: un articolo che parla di un bando senza indicare quando è stato scritto, o che non specifica se la misura discussa è ancora attiva, andrebbe verificato direttamente sulla fonte primaria prima di basarci qualunque decisione.',
          'Un terzo criterio, meno ovvio ma altrettanto utile, è verificare se il contenuto specifica chiaramente a chi è rivolto il bando (dimensione aziendale, settore, territorio): una descrizione troppo generica ("bandi per tutte le PMI italiane") è spesso il segnale di un riassunto poco accurato, perché la stragrande maggioranza delle misure reali ha requisiti più circoscritti.',
          'Infine, diffidare di chi presenta un bando come "garantito" o "sicuro al 100%": la maggior parte delle misure prevede una valutazione, spesso con graduatoria o esaurimento fondi, e nessuna fonte seria può garantire in anticipo l’esito di una domanda specifica.',
        ],
      },
      {
        h2: 'Errori comuni che fanno perdere l’occasione',
        paragraphs: [
          'Affidarsi a informazioni non aggiornate trovate su articoli vecchi o social media, invece di verificare direttamente sulla fonte ufficiale del bando.',
          'Non verificare i requisiti prima di iniziare la spesa, scoprendo solo dopo che il progetto non rientra nel perimetro finanziabile.',
          'Documentazione incompleta o fatture non coerenti con quanto dichiarato nella domanda, che è tra le cause più comuni di esclusione in fase di rendicontazione.',
          'Aspettare un bando incerto prima di avviare un investimento necessario, perdendo mesi o anni di opportunità commerciale nel frattempo — quando nella maggior parte dei casi ha più senso pianificare l’investimento comunque, e valutare un eventuale bando come aiuto successivo.',
          'Firmare accordi con consulenti o intermediari senza aver chiarito in anticipo costi, tempistiche e cosa succede in caso di esito negativo della domanda.',
        ],
      },
      {
        h2: 'Come si integra con il resto della strategia digitale',
        paragraphs: [
          'Un bando ottenuto senza una strategia digitale coerente rischia di finanziare un progetto che non produce risultati: un e-commerce senza un piano di acquisizione clienti, o un sito senza contenuti che generano traffico, restano investimenti poco efficaci indipendentemente da quanto siano stati agevolati economicamente.',
          'Per questo motivo, prima ancora di cercare un bando, ha senso avere chiaro il quadro complessivo: cosa serve davvero all’azienda (sito, e-commerce, software gestionale, wine club, CRM), in quale ordine ha senso implementarlo, e quale valore atteso porta ciascun elemento. Un consulente che conosce sia la parte tecnica che quella strategica può aiutare a costruire questo quadro prima ancora di iniziare a cercare un incentivo specifico.',
        ],
      },
      {
        h2: 'Domande frequenti sui bandi per la digitalizzazione',
        paragraphs: [
          '**Dove trovo l’elenco aggiornato dei bandi attivi?** Non esiste un unico elenco sempre aggiornato e affidabile al 100%: il modo più sicuro resta controllare periodicamente il portale Invitalia, il sito della propria Regione e quello della Camera di Commercio locale, che sono le fonti primarie.',
          '**Conviene aspettare un bando prima di investire in digitale?** Nella maggior parte dei casi no: un sito, un e-commerce o un software che servono all’azienda vanno valutati sulla base del proprio ritorno atteso, non sulla base di un incentivo incerto. Un bando, se arriva, va trattato come un aiuto in più, non come condizione per procedere.',
          '**Serve per forza un consulente specializzato in bandi?** Non sempre. Per misure semplici (es. voucher camerali) spesso basta seguire le istruzioni ufficiali con il supporto del proprio commercialista. Per misure più complesse o importi più rilevanti, un consulente specializzato può far risparmiare tempo, ma va scelto con attenzione.',
          '**Cosa succede se la domanda viene respinta?** Dipende dalla misura e dal motivo del rigetto: a volte è possibile correggere e ripresentare, altre volte no. È uno dei motivi per cui verificare con attenzione i requisiti prima di investire tempo nella domanda è più importante che presentarla in fretta.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          '**Il modo più concreto per iniziare è controllare periodicamente il portale Invitalia e il sito della propria Regione**, e valutare con il proprio commercialista o consulente se un bando specifico è realmente applicabile prima di avviare qualunque spesa in vista di un rimborso.',
          'Se stai valutando un investimento in sito, e-commerce o software e vuoi capire cosa ha senso fare prima e cosa può eventualmente rientrare in un incentivo, ne parliamo in una call. [Scopri Consulenza strategica →](/servizi/consulenza-strategica)',
        ],
      },
    ],
  },
  {
    slug: 'scegliere-partner-digitale-checklist',
    title: 'Come Scegliere il Partner Digitale per la Tua Cantina, Frantoio o Agriturismo: la Checklist Completa',
    seoTitle: 'Scegliere partner digitale cantina: checklist completa',
    excerpt:
      'Scegliere il partner sbagliato costa più del progetto stesso: tempo perso, un sito da rifare, un rapporto che finisce male. Ecco le domande da fare, i segnali positivi e negativi da riconoscere, e cosa mettere nero su bianco prima di firmare.',
    date: '2026-08-01',
    readingMinutes: 13,
    category: 'Strategia',
    featuredImage: '/images/blog/scegliere-partner-digitale-checklist.jpg',
    imageAlt: 'Incontro di lavoro per valutare un partner digitale per un progetto agroalimentare',
    tags: ['Partner Digitale', 'Freelancer', 'Web Agency', 'Consulenza'],
    keywords: ['scegliere partner digitale cantina', 'freelancer vs agenzia web', 'consulente digitale agroalimentare', 'scegliere sviluppatore sito vino', 'partner tecnologico agroalimentare'],
    relatedSlugs: ['specialista-digitale-vs-web-agency-agroalimentare', 'bandi-incentivi-digitalizzazione-agroalimentare'],
    relatedLinks: [
      { href: '/chi-sono', label: 'Chi sono' },
      { href: '/metodo', label: 'Il metodo' },
      { href: '/portfolio', label: 'Portfolio' },
    ],
    body: [
      {
        h2: 'Perché la scelta del partner pesa più del budget',
        paragraphs: [
          'Un progetto digitale fatto male non costa solo i soldi spesi: costa il tempo perso, la fiducia bruciata verso il digitale in generale, e spesso la necessità di rifare tutto da capo con qualcun altro — pagando due volte per lo stesso risultato. **Il criterio di scelta più importante non è quasi mai il prezzo più basso**: è la probabilità che il progetto funzioni davvero per il caso specifico dell’azienda.',
          'Per una cantina, un frantoio o un agriturismo questo pesa più che in altri settori, perché i cicli sono spesso stagionali: una vendemmia, una campagna olearia, un’estate di prenotazioni. Se il progetto slitta o va rifatto, non si perde solo tempo generico — si perde una finestra commerciale che magari non si ripresenta prima dell’anno successivo.',
          'Chi affida un progetto digitale per la prima volta tende a confrontare i preventivi guardando soprattutto il numero finale. È comprensibile, ma è anche il modo più veloce per scegliere male: due preventivi identici nel prezzo possono nascondere due processi di lavoro completamente diversi, con esiti altrettanto diversi a sei mesi dal lancio.',
          '> Il costo reale di un partner sbagliato non si vede nel preventivo iniziale: si vede sei mesi dopo, quando il sito non converte, nessuno sa più chi contattare per una modifica, e si ricomincia daccapo.',
        ],
      },
      {
        h2: 'Cosa succede davvero quando la scelta è sbagliata',
        paragraphs: [
          'Il primo sintomo, quasi sempre, non è che "il sito non funziona" in senso tecnico: il sito si carica, i colori sono quelli giusti, il logo è al posto giusto. Il problema è più sottile — non genera contatti, non spiega bene cosa rende l’azienda diversa dalle altre, o non risolve il problema pratico per cui era stato commissionato (prenotazioni, vendite online, presenza sui motori di ricerca).',
          'Il secondo sintomo arriva quando serve una modifica: cambiare un prezzo, aggiungere un prodotto, aggiornare gli orari. Se il partner non è più raggiungibile, o ogni piccola modifica richiede settimane e un preventivo a parte, il progetto smette di essere uno strumento di lavoro e diventa un peso da gestire.',
          'Il terzo, più costoso, è quando l’azienda decide di ripartire da zero con un nuovo partner: a quel punto si paga di nuovo l’intero progetto, spesso senza nemmeno recuperare i contenuti (testi, foto, struttura) prodotti la prima volta, perché non erano stati consegnati in un formato riutilizzabile.',
          'Nessuno di questi tre scenari dipende dalla tecnologia scelta in sé — dipende quasi sempre dal processo con cui il progetto è stato impostato fin dall’inizio, ed è per questo che la scelta del partner conta più della scelta della piattaforma o del framework.',
        ],
      },
      {
        h2: 'Il freelancer singolo: quando ha senso',
        paragraphs: [
          'Un freelancer singolo è spesso l’opzione più economica e più flessibile: si parla direttamente con chi lavora al progetto, senza passaggi intermedi, e i tempi di risposta possono essere molto rapidi su progetti piccoli.',
          'Il limite principale è strutturale, non di competenza: **il progetto dipende da una sola persona**. Se si ammala, cambia priorità, prende troppi clienti contemporaneamente o semplicemente smette di essere raggiungibile, non c’è un team di backup a cui rivolgersi.',
          'È un’opzione ragionevole per progetti piccoli e ben definiti — un sito vetrina semplice, una modifica puntuale — dove il rischio di dipendenza da una singola persona è limitato dal fatto che, in caso di problemi, il lavoro da rifare non è enorme.',
          'Diventa più rischiosa quando il progetto è centrale per il business (un e-commerce che genera fatturato, un sistema di prenotazioni da cui dipende l’intera stagione): in quei casi, il costo potenziale di un’interruzione supera facilmente il risparmio iniziale sul prezzo.',
        ],
      },
      {
        h2: 'L’agenzia generica: cosa offre e cosa manca',
        paragraphs: [
          'Un’agenzia web generica offre in genere un team più strutturato rispetto a un freelancer: più persone coinvolte, processi più definiti, e in teoria meno rischio che il progetto si fermi se una persona è assente.',
          'Il limite, in questo caso, non è la struttura ma la specializzazione: la maggior parte delle agenzie lavora su settori molto diversi tra loro — ristoranti, studi professionali, negozi, aziende manifatturiere — e applica processi pensati per essere generici, perché non possono permettersi di conoscere in profondità le esigenze di ognuno.',
          'Per un’azienda agroalimentare questo si traduce spesso in scelte tecniche superficiali: un e-commerce vino trattato come un e-commerce qualsiasi, senza considerare spedizioni fragili, stagionalità delle vendite o tracciabilità del prodotto; un sito per agriturismo che si ferma a un form di contatto invece di integrare un sistema di prenotazione reale.',
          'Non significa che un’agenzia generica non possa fare un buon lavoro tecnico — spesso lo fa. Significa che il tempo di analisi che un partner specializzato avrebbe già risparmiato in partenza, con un’agenzia generica va messo in conto come parte del progetto, chiedendo esplicitamente più tempo dedicato a capire il settore prima di iniziare a costruire.',
        ],
      },
      {
        h2: 'Il partner specializzato nel settore: perché fa la differenza',
        paragraphs: [
          'Un partner specializzato nel settore agroalimentare conosce già, prima ancora della prima riunione, buona parte delle domande da porsi: come vengono gestite oggi le spedizioni del vino o dell’olio, se esiste già un canale di vendita diretta o si dipende solo da distributori, come sono strutturate oggi le prenotazioni di degustazioni o pernottamenti.',
          'Questo non significa che la fase di analisi sparisca — significa che parte da un punto più avanti, e si concentra sulle specificità dell’azienda invece che sulle basi del settore, che il partner ha già visto in altri progetti simili.',
          '**Il vantaggio si vede soprattutto nelle decisioni tecniche meno visibili**: quale corriere gestisce meglio spedizioni fragili e sensibili alla temperatura, come strutturare un catalogo di prodotti stagionali, come far convivere booking, ristorazione ed esperienze in un unico sistema senza sovrapposizioni.',
          'Il compromesso, quando esiste, è che un partner molto specializzato in una nicchia ristretta può avere meno "brand recognition" rispetto a un’agenzia generica più grande e conosciuta. Per una PMI che deve scegliere in base ai risultati concreti, questo compromesso vale quasi sempre la pena.',
        ],
      },
      {
        h2: 'Le domande da fare prima di scegliere',
        paragraphs: [
          'Prima di firmare qualunque preventivo, ha senso porre le stesse domande a più partner potenziali, e confrontare non solo il prezzo ma la qualità delle risposte.',
          '**Ha già lavorato con aziende del vostro settore, o sareste il suo primo progetto agroalimentare?** Non è un requisito assoluto, ma chi ha già affrontato problemi simili (spedizioni del vino, stagionalità delle prenotazioni, tracciabilità di filiera) li riconosce più in fretta e li anticipa invece di scoprirli a metà progetto.',
          '**Chi si occupa del sito o del software dopo il lancio?** Se la risposta è "da quel momento in poi sarete autonomi", va bene solo se l’azienda ha davvero qualcuno interno pronto a gestirlo. In caso contrario, è un problema che si presenterà alla prima modifica necessaria.',
          '**Il progetto parte da un’analisi reale della vostra situazione, o da un pacchetto standard applicato a chiunque?** Un preventivo identico proposto a chiunque, senza domande preliminari sul business, è quasi sempre un segnale che il lavoro sarà altrettanto standardizzato.',
          '**È possibile parlare con un cliente precedente, o vedere esempi concreti di progetti simili?** Chi lavora bene di solito è disposto a mostrarlo; chi evita la domanda, o risponde in modo vago, merita più attenzione.',
          '**Qual è la metodologia di lavoro proposta?** Una risposta chiara, con fasi definite (analisi, strategia, design, sviluppo), vale molto più di una descrizione generica come "ci mettiamo al lavoro e vediamo".',
          '**Cosa succede se durante il progetto emergono nuove esigenze?** Un buon partner ha già un processo per gestire richieste aggiuntive senza far saltare la timeline né trasformarle in sorprese di prezzo a fine progetto.',
        ],
      },
      {
        h2: 'Segnali negativi a cui prestare attenzione',
        paragraphs: [
          '**Chi promette risultati garantiti** — primo posto su Google, numeri di vendita specifici, un certo numero di prenotazioni al mese — senza conoscere ancora nulla del business, sta vendendo una promessa che non può controllare. Nessun partner serio può garantire risultati che dipendono da troppe variabili esterne.',
          'Chi non ha un portfolio verificabile, o mostra solo progetti molto diversi dal settore agroalimentare, difficilmente conosce davvero i problemi specifici che l’azienda dovrà affrontare durante il progetto.',
          'L’assenza totale di contratto o di condizioni scritte è un segnale da non ignorare, per quanto la trattativa iniziale sembri semplice: senza un accordo chiaro su cosa è incluso, cosa succede in caso di ritardo diventa una questione di buona volontà, non di impegno formale.',
          'Una comunicazione vaga fin dalla prima conversazione — risposte generiche, tempi di risposta lenti, difficoltà a spiegare come funzionerebbe concretamente il progetto — è spesso un anticipo di come sarà comunicare durante tutto il resto del rapporto, non un’eccezione dovuta alla fase iniziale.',
          'Anche un prezzo sensibilmente più basso di tutti gli altri preventivi ricevuti merita una domanda in più: a volte significa solo margini più bassi, ma spesso significa che alcune fasi del lavoro (analisi, test, revisioni) sono state tagliate per contenere i costi.',
        ],
      },
      {
        h2: 'Segnali positivi da cercare',
        paragraphs: [
          'Chi pone domande specifiche sulla situazione dell’azienda già nella prima conversazione — come vengono gestite oggi le spedizioni, esiste già un canale diretto di vendita, come sono strutturate le prenotazioni — sta probabilmente valutando il progetto sul serio, non applicando un copione generico.',
          'Una proposta personalizzata, che fa riferimento a dettagli concreti emersi durante la prima chiamata, vale molto più di un preventivo con lo stesso testo per chiunque, cambiato solo nel nome dell’azienda.',
          'Trasparenza su prezzo e tempistiche fin dall’inizio, anche quando la risposta non è quella che si vorrebbe sentire ("questo tipo di progetto richiede più tempo di quanto pensavate"), è un segnale di affidabilità più forte di una promessa ottimistica che poi non viene rispettata.',
          'Un supporto post-lancio definito con chiarezza — cosa include, per quanto tempo, cosa costa oltre quel periodo — è uno dei segnali più concreti di un partner che pensa al progetto come a una relazione continuativa, non a una vendita isolata.',
        ],
      },
      {
        h2: 'Come si svolge una prima call fatta bene',
        paragraphs: [
          'Una prima call ben condotta assomiglia più a un colloquio conoscitivo che a una presentazione commerciale: chi la conduce dovrebbe fare più domande di quante ne riceva, cercando di capire davvero come funziona oggi l’azienda prima di proporre qualunque soluzione.',
          'Domande utili da aspettarsi: come arrivano oggi i clienti (passaparola, distributori, ricerca online), cosa succede quando qualcuno chiede informazioni fuori orario, quali strumenti digitali sono già in uso e quali funzionano male o per niente.',
          'Se la call si conclude con un preventivo generico inviato entro poche ore, senza che siano state approfondite queste domande, è probabile che il preventivo sia stato preparato prima ancora di ascoltare le risposte — un segnale di processo standardizzato più che di analisi reale.',
          'Al contrario, un partner che al termine della prima call propone un secondo incontro più mirato, o chiede di vedere dati e materiali esistenti prima di formulare una proposta, sta investendo tempo in un’analisi che si tradurrà in un progetto più aderente alle esigenze reali.',
        ],
      },
      {
        h2: 'Cosa mettere nero su bianco prima di iniziare',
        paragraphs: [
          'Cosa è incluso nel progetto e cosa no, con una timeline realistica, non ottimistica — una fonte frequente di conflitto è la differenza tra ciò che il cliente pensava fosse incluso e ciò che il partner intendeva davvero consegnare.',
          'Quante revisioni sono previste e cosa succede oltre quel numero: un dettaglio spesso trascurato in fase di trattativa, che diventa fonte di attrito quando le revisioni "gratuite" finiscono e nessuno lo aveva chiarito prima.',
          'Cosa succede dopo il lancio: supporto incluso, per quanto tempo, e con quali tempi di risposta garantiti in caso di problema — non basta sapere che "il supporto è incluso", serve sapere per quanto e cosa copre esattamente.',
          'A chi appartiene il codice, il dominio e i contenuti del sito una volta consegnato: un punto che sembra scontato finché non emerge un disaccordo, ed è molto più semplice chiarirlo per iscritto prima di iniziare che negoziarlo dopo un eventuale conflitto.',
          'Cosa succede se una delle due parti vuole interrompere il rapporto prima della fine del progetto: quali costi restano dovuti, cosa viene consegnato del lavoro già svolto, in che tempi.',
        ],
      },
      {
        h2: 'Un esempio di cosa cambia in pratica',
        paragraphs: [
          'Nei case study concept in portfolio, ogni progetto parte da un problema specifico del settore — dipendenza dai grossisti, prenotazioni gestite a mano su agenda cartacea, un e-commerce che generava traffico ma non vendite — non da un template applicato indistintamente a chiunque.',
          'La differenza pratica si vede già nella prima fase di lavoro: invece di partire da un catalogo di funzionalità standard, l’analisi parte dalla domanda "qual è il problema che, se risolto, cambia davvero i numeri di questa azienda", e costruisce il resto del progetto attorno a quella risposta.',
          '> Un partner che conosce il settore non riduce il lavoro di analisi: lo rende più veloce e più mirato, perché parte già sapendo quali domande contano davvero e quali sono solo dettagli secondari.',
        ],
      },
      {
        h2: 'Errori comuni che si pagano dopo la firma',
        paragraphs: [
          'Il primo errore è scegliere in base al prezzo più basso senza confrontare cosa è realmente incluso: due preventivi con la stessa cifra possono comprendere un numero molto diverso di ore di analisi, revisioni o supporto post-lancio.',
          'Il secondo è non chiedere referenze o esempi concreti perché "sembra scortese": è una domanda del tutto normale in qualsiasi rapporto professionale, e chi lavora bene la accoglie senza problemi.',
          'Il terzo è firmare senza aver letto con attenzione cosa succede in caso di ritardi o di richieste aggiuntive durante il progetto — dettagli che sembrano irrilevanti in fase di entusiasmo iniziale, ma che determinano come si risolverà un eventuale imprevisto.',
          'Il quarto è affidarsi solo alla prima impressione della prima call, senza confrontare almeno due o tre alternative: anche quando la prima conversazione va bene, un confronto aiuta a capire se le domande fatte erano lo standard del settore o un caso isolato particolarmente curato.',
          'Il quinto, forse il più costoso nel tempo, è non chiedere fin da subito chi gestirà il progetto dopo il lancio: molte aziende scoprono solo mesi dopo di essere rimaste senza un punto di riferimento per le modifiche più semplici.',
        ],
      },
      {
        h2: 'Quanto dovrebbe costare davvero un progetto digitale',
        paragraphs: [
          'Non esiste un prezzo "giusto" uguale per tutti: dipende dalla complessità del progetto, dal settore, e da quanto lavoro di analisi e personalizzazione è davvero necessario per il caso specifico. Diffidare tanto del prezzo più basso quanto di quello più alto, senza aver prima capito cosa comprende, porta quasi sempre a una scelta poco informata.',
          'Un modo più utile di valutare un preventivo è chiedersi: questo prezzo include un’analisi reale della mia situazione, o solo l’esecuzione di un pacchetto standard? Include supporto dopo il lancio, o si ferma alla consegna? Include revisioni sufficienti a correggere il tiro, o ogni modifica successiva sarà fatturata a parte?',
          'Un progetto che sembra economico in partenza può diventare più costoso nel tempo se ogni piccola modifica successiva richiede un preventivo separato; un progetto più costoso in partenza può risultare più conveniente se include un rapporto continuativo che evita di dover ripartire da zero un anno dopo.',
          'Vale anche la pena ricordare che, per alcuni investimenti digitali, esistono bandi e incentivi regionali o nazionali che possono coprire parte della spesa: prima di scartare un’opzione solo per il prezzo, ha senso verificare se il progetto rientra tra quelli finanziabili.',
        ],
      },
      {
        h2: 'Come valutare il rapporto nel tempo, non solo al lancio',
        paragraphs: [
          'Il momento del lancio è solo l’inizio del rapporto con un partner digitale, non la fine: un sito o un e-commerce hanno bisogno di aggiornamenti, piccoli aggiustamenti e, nel tempo, nuove funzionalità man mano che l’azienda cresce o cambia strategia.',
          'Vale la pena chiedere, già in fase di scelta, come funziona il rapporto dopo i primi mesi: c’è un canale diretto per segnalare problemi, quanto tempo passa in media prima di una risposta, chi decide le priorità quando ci sono più richieste contemporaneamente.',
          'Un partner che continua a proporre miglioramenti basati sui dati reali del sito (cosa funziona, cosa no, dove si perdono i visitatori) sta lavorando come un alleato di lungo periodo, non come un fornitore che considera il progetto chiuso alla consegna.',
          'Al contrario, un rapporto che si esaurisce completamente dopo il pagamento finale, senza alcun follow-up, è un segnale che vale la pena notare fin dalla trattativa iniziale — chiedendo esplicitamente cosa succede "dopo", prima di firmare.',
        ],
      },
      {
        h2: 'Domande frequenti sulla scelta del partner digitale',
        paragraphs: [
          '**Conviene sempre scegliere il partner più specializzato nel proprio settore?** Nella maggior parte dei casi sì, soprattutto per progetti complessi (e-commerce, booking, automazioni). Per un progetto molto semplice e isolato, la specializzazione conta meno del prezzo e della disponibilità.',
          '**Quanto tempo richiede in media un progetto digitale completo?** Varia molto in base alla complessità, ma un progetto che comprende analisi, strategia, design e sviluppo richiede quasi sempre più tempo di quanto sembri all’inizio: diffidare di chi promette tempi molto più brevi della media senza spiegare come li ottiene.',
          '**Vale la pena firmare con il primo partner che sembra convincente?** Meglio confrontare almeno due o tre alternative, anche solo per capire se le domande fatte nella prima call erano lo standard o un caso isolato particolarmente curato.',
          '**Cosa fare se il rapporto con il partner scelto peggiora durante il progetto?** Rileggere l’accordo scritto iniziale per capire cosa è previsto in caso di disaccordo, e affrontare il problema direttamente e per iscritto prima che si trasformi in una rottura totale.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Prima di firmare qualunque preventivo, **vale la pena fare almeno una call conoscitiva** con più di un partner potenziale, e confrontare non solo il prezzo ma le domande che ciascuno fa, la chiarezza delle risposte, e cosa è previsto dopo il lancio.',
          'Il metodo con cui lavoriamo parte sempre da un’analisi reale della situazione, non da un pacchetto standard: puoi vederne i passaggi nella pagina dedicata. [Scopri il metodo →](/metodo)',
          'Se vuoi capire come lavoriamo prima di decidere, la prima call è gratuita e senza impegno. [Scopri chi siamo →](/chi-sono)',
        ],
      },
    ],
  },
  {
    slug: 'degustazioni-cantina-trasformare-visite-vendite',
    title: 'Degustazioni in Cantina: Come Trasformare le Visite in Vendite Dirette',
    seoTitle: 'Degustazioni cantina: trasformare le visite in vendite',
    excerpt:
      'Molti visitatori assaggiano il vino, chiacchierano, e se ne vanno senza comprare. Il problema raramente è il vino: è come è strutturata la degustazione.',
    date: '2026-08-04',
    readingMinutes: 6,
    category: 'Wine Tech',
    featuredImage: '/images/blog/degustazioni-cantina-trasformare-visite-vendite.jpg',
    imageAlt: 'Degustazione di vino in cantina con bicchieri allineati sul tavolo',
    tags: ['Enoturismo', 'Vendita Diretta', 'Wine Tech'],
    keywords: ['degustazione vino vendite', 'aumentare vendite in cantina', 'tasting room conversione', 'enoturismo vendita diretta'],
    relatedSlugs: ['storytelling-vino-marketing-vendite', 'ecommerce-vino-margini-vendita-diretta'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/portfolio/tasting-flow', label: 'Case study: Tasting Flow' },
      { href: '/settori/wine-viticulture', label: 'Settore Wine & Viticulture' },
    ],
    body: [
      {
        h2: 'Il problema non è il vino, è il percorso',
        paragraphs: [
          'Un visitatore entra in cantina, assaggia tre o quattro vini, fa qualche domanda, ringrazia e se ne va senza comprare nulla. Succede spesso, e la reazione istintiva è pensare che il vino non abbia convinto abbastanza. Nella maggior parte dei casi il problema è un altro: **la degustazione non aveva nessun percorso**, era solo una sequenza di assaggi senza una direzione.',
          'Una degustazione senza struttura tratta ogni visitatore come uno spettatore. Una degustazione pensata come percorso lo tratta come un cliente potenziale, e lo accompagna verso una decisione — che poi scelga di comprare o no.',
        ],
      },
      {
        h2: 'Una sequenza che guida, non che intrattiene soltanto',
        paragraphs: [
          'L’ordine con cui si presentano i vini non è un dettaglio: partire dai vini più semplici e leggeri per arrivare ai più strutturati aiuta il palato a percepire la differenza, e rende naturale l’idea che il meglio arrivi alla fine — che è spesso anche il vino con il margine più alto.',
          'Ogni assaggio dovrebbe essere accompagnato da un contesto breve: da dove viene quel vino, cosa lo rende diverso, con cosa si abbina. Non serve un monologo da sommelier: bastano trenta secondi che colleghino il bicchiere a qualcosa di concreto — il vigneto, l’annata, una scelta produttiva specifica.',
        ],
      },
      {
        h2: 'L’upsell che non sembra un upsell',
        paragraphs: [
          'Il momento peggiore per proporre un acquisto è alla fine, quando il visitatore sta già pensando a uscire. Il momento migliore è durante la degustazione, quando il vino che ha appena apprezzato è ancora sul tavolo: “questo è il vino che sta bevendo ora, se le è piaciuto lo trova anche in confezione regalo” è una frase naturale, non una vendita forzata.',
          '> Il visitatore compra quando la decisione sembra sua, non quando gli viene chiesta.',
          'Suggerire una bottiglia in più, una confezione mista, o un abbinamento con un prodotto complementare (olio, formaggi, un distillato della stessa azienda) funziona meglio come proposta naturale che come richiesta esplicita di acquisto.',
        ],
      },
      {
        h2: 'Cosa succede dopo che il visitatore se n’è andato',
        paragraphs: [
          'La degustazione non finisce quando il visitatore esce dalla cantina. Se non è stata raccolta almeno un’email o un contatto, quella persona è persa dal punto di vista commerciale, anche se ha apprezzato molto la visita.',
          'Un follow-up semplice — un’email di ringraziamento con il link ai vini assaggiati, magari uno sconto sul primo ordine online — trasforma una visita positiva ma isolata in una possibilità concreta di vendita nei giorni successivi, quando l’entusiasmo della giornata è ancora fresco.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve reinventare tutta l’accoglienza in una volta: basta scegliere un solo elemento — l’ordine di servizio, una frase di upsell durante l’assaggio, o un’email di follow-up — e testarlo per qualche settimana prima di aggiungerne altri.',
          'Se vuoi capire dove la tua cantina perde più visitatori lungo il percorso, [prenota una call gratuita](/prenota-call): guardiamo insieme il flusso attuale e cosa ha senso cambiare per primo.',
        ],
      },
    ],
  },
  {
    slug: 'pos-cassa-cantina-vendita-degustazione',
    title: 'Punto Cassa per Cantine: Perché un Registratore Generico Non Basta Più',
    seoTitle: 'POS per cantine: perché un registratore generico non basta',
    excerpt:
      'Molte cantine usano ancora il registratore di cassa pensato per un bar. Ecco cosa manca davvero, e cosa cambia con un punto cassa pensato per il vino.',
    date: '2026-08-04',
    readingMinutes: 7,
    category: 'Tecnologie',
    featuredImage: '/images/blog/pos-cassa-cantina-vendita-degustazione.jpg',
    imageAlt: 'Punto cassa digitale in un’enoteca durante una vendita',
    tags: ['Tecnologie', 'Punto Vendita', 'Wine Tech'],
    keywords: ['pos cantina', 'punto cassa vino', 'gestione punto vendita cantina', 'software cassa enoteca'],
    relatedSlugs: ['software-frantoi-gestione-ordini-crm', 'ecommerce-vino-margini-vendita-diretta'],
    relatedLinks: [
      { href: '/servizi/software-ai-su-misura', label: 'Servizio: Software & agenti AI su misura' },
      { href: '/servizi/ai-integration', label: 'Servizio: Integrazioni AI' },
      { href: '/portfolio/azienda-rossi', label: 'Case study: Azienda Rossi' },
    ],
    body: [
      {
        h2: 'Un registratore di cassa non è un sistema di vendita',
        paragraphs: [
          'Molte cantine gestiscono la vendita in loco con lo stesso registratore di cassa che potrebbe trovarsi in un bar o in un negozio di alimentari: batte lo scontrino, incassa, stampa. Fa quello per cui è nato, ma non è stato pensato per il modo in cui si vende il vino.',
          'Il problema si vede soprattutto in due momenti: quando un cliente torna a distanza di mesi e nessuno ricorda cosa aveva comprato, e quando bisogna capire quali vini si vendono meglio in enoteca rispetto a quelli venduti online o all’ingrosso.',
        ],
      },
      {
        h2: 'Cosa manca davvero in un POS generico',
        paragraphs: [
          'Un registratore generico non collega la vendita al cliente: non sa se la persona alla cassa è alla prima visita o è un habitué che torna ogni estate. Non distingue tra vendita al dettaglio in enoteca, vendita B2B a un ristorante, o vendita in occasione di un evento.',
          'Non gestisce sconti strutturati per acquisti ripetuti o per quantità, e quasi mai si integra con il magazzino: sapere quante bottiglie di un’annata specifica restano davvero disponibili richiede spesso un controllo manuale separato.',
        ],
      },
      {
        h2: 'Cosa cambia con un punto cassa pensato per una cantina',
        paragraphs: [
          'Un punto cassa pensato per una cantina collega ogni vendita a un profilo cliente (anche solo email o numero di telefono), tiene traccia dell’inventario in tempo reale, e distingue automaticamente i canali di vendita — enoteca, eventi, B2B — per capire davvero da dove arriva il fatturato.',
          'Con questi dati diventa possibile applicare sconti mirati a chi torna, segnalare quando un’annata sta per esaurirsi, e collegare la cassa fisica con lo stesso sistema che gestisce l’e-commerce, invece di tenere due mondi separati che non si parlano.',
        ],
      },
      {
        h2: 'Non è solo tecnologia, è margine',
        paragraphs: [
          'Conoscere il cliente che sta comprando permette di proporre l’upsell giusto al momento giusto — una confezione regalo, l’iscrizione al wine club — invece di trattare ogni vendita come un evento isolato.',
          '> Un sistema che ricorda i clienti fa il lavoro che un tempo faceva la memoria del titolare: solo che funziona anche quando il titolare non è in cantina.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il primo passo non è cambiare tutto il sistema di cassa: è collegare quello che già usi con un modo per registrare i clienti che tornano, anche solo un’email raccolta a ogni vendita.',
          'Se vuoi capire come integrare punto vendita, magazzino e e-commerce in un solo sistema, [parliamone in una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'gestione-fiscale-ecommerce-vino-iva-fatturazione',
    title: 'Gestione Fiscale per l’E-commerce del Vino: Automatizzare IVA e Fatturazione',
    seoTitle: 'E-commerce vino: gestire IVA e fatturazione senza errori',
    excerpt:
      'Vendere vino online significa gestire aliquote diverse per paese, documenti di trasporto e fatturazione ricorrente. Farlo a mano è dove nascono la maggior parte degli errori.',
    date: '2026-08-04',
    readingMinutes: 8,
    category: 'E-commerce',
    featuredImage: '/images/blog/gestione-fiscale-ecommerce-vino-iva-fatturazione.jpg',
    imageAlt: 'Fatture e documenti fiscali su una scrivania accanto a un laptop',
    tags: ['E-commerce', 'Fiscalità', 'Wine Tech'],
    keywords: ['iva ecommerce vino', 'fatturazione vino online', 'fiscalità vendita vino estero', 'gestione fiscale cantina'],
    relatedSlugs: ['ecommerce-vino-margini-vendita-diretta', 'ecommerce-vino-vendite-dirette'],
    relatedLinks: [
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/portfolio/podere-la-vite', label: 'Case study: Podere La Vite' },
    ],
    body: [
      {
        h2: 'Perché il vino è più complicato di un prodotto qualunque',
        paragraphs: [
          'Vendere una maglietta online e vendere vino online sembrano operazioni simili, ma non lo sono dal punto di vista fiscale. Il vino ha un’aliquota IVA agevolata in Italia, aliquote diverse in ogni paese UE in cui si spedisce, e regole aggiuntive quando si esce dall’Unione Europea o si vende sfuso.',
          'A questo si aggiunge il wine club, se la cantina lo offre: ogni spedizione ricorrente genera una fattura, spesso con importi o composizioni leggermente diverse da un mese all’altro.',
        ],
      },
      {
        h2: 'Dove nascono davvero gli errori',
        paragraphs: [
          'La maggior parte degli errori non nasce da negligenza, ma dal fatto che questi calcoli vengono fatti a mano, uno alla volta, da chi non ha tempo per verificarli con calma: un’aliquota sbagliata, un documento di trasporto mancante, una fattura duplicata o dimenticata.',
          'Sono errori che sembrano piccoli finché non arriva una verifica, un cliente che chiede un duplicato che non si trova più, o un rimborso da gestire manualmente perché nessun sistema lo traccia automaticamente.',
        ],
      },
      {
        h2: 'Cosa significa automatizzare, in pratica',
        paragraphs: [
          'Automatizzare la parte fiscale non significa eliminare il controllo umano, significa spostarlo da “calcolare ogni volta” a “verificare che il sistema abbia calcolato bene”. In pratica: l’aliquota IVA corretta si applica da sola in base alla destinazione della spedizione, la fattura si genera automaticamente all’ordine, e i documenti di trasporto si compilano con gli stessi dati già presenti nel sistema, senza doverli ricopiare.',
          'Per un wine club, questo significa che ogni rinnovo genera la sua fattura senza intervento manuale, e che a fine anno esiste un riepilogo ordinato invece di dover ricostruire dodici mesi di vendite da fogli sparsi.',
        ],
      },
      {
        h2: 'Il commercialista resta necessario, cambia il suo lavoro',
        paragraphs: [
          'Un sistema automatizzato non sostituisce il commercialista: gli dà dati puliti invece di uno scatolone di scontrini e fatture da riordinare. **Il lavoro del commercialista si sposta dalla ricostruzione dei dati alla loro verifica**, il che riduce sia il tempo che gli errori su entrambi i lati.',
          'Vale anche per le scadenze: un buon sistema segnala in anticipo obblighi come il registro degli acquisti o le comunicazioni periodiche, invece di scoprirli all’ultimo momento.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il primo passo realistico non è automatizzare tutto subito, ma partire dal punto più a rischio: di solito è il calcolo dell’IVA sulle spedizioni internazionali, o la fatturazione del wine club, se esiste.',
          'Se vuoi capire come strutturare questa parte per il tuo e-commerce, [scopri il servizio e-commerce Shopify](/servizi/ecommerce-shopify) o [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'cross-selling-upselling-cantina-scontrino-medio',
    title: 'Cross-selling e Upselling in Cantina: Aumentare lo Scontrino Medio senza Snaturare l’Esperienza',
    seoTitle: 'Cross-selling in cantina: aumentare lo scontrino medio',
    excerpt:
      'Non serve vendere di più a ogni cliente in modo aggressivo. Serve proporre la cosa giusta al momento giusto, quando ha già senso per chi acquista.',
    date: '2026-08-04',
    readingMinutes: 6,
    category: 'Strategia',
    featuredImage: '/images/blog/cross-selling-upselling-cantina-scontrino-medio.jpg',
    imageAlt: 'Confezione regalo di bottiglie di vino pronta per la vendita',
    tags: ['Strategia', 'Vendita Diretta', 'Wine Tech'],
    keywords: ['cross selling vino', 'upselling cantina', 'aumentare scontrino medio vino', 'vendita diretta cantina'],
    relatedSlugs: ['wine-club-revenue-ricorrente-fedelta', 'storytelling-vino-marketing-vendite'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/portfolio/wine-club-pro', label: 'Case study: Wine Club Pro' },
      { href: '/settori/wine-viticulture', label: 'Settore Wine & Viticulture' },
    ],
    body: [
      {
        h2: 'La differenza tra vendere di più e vendere meglio',
        paragraphs: [
          'Aumentare lo scontrino medio non significa convincere ogni cliente a comprare di più a ogni costo. Significa notare quando una seconda proposta ha senso per quello specifico cliente, in quel momento specifico — e quando invece non ce l’ha, e va lasciato in pace.',
          'La differenza tra le due cose si sente: un cliente che compra una bottiglia in più perché gli è stata suggerita al momento giusto torna volentieri. Un cliente a cui è stato insistito troppo, anche se compra, spesso non torna.',
        ],
      },
      {
        h2: 'Cross-selling: cosa sta bene insieme a cosa',
        paragraphs: [
          'Il cross-selling funziona quando i prodotti proposti sono legati da un motivo reale: un olio della stessa azienda da abbinare al vino, un formaggio locale, una grappa prodotta con le stesse vinacce. Non è una vendita a caso, è completare un’esperienza che il cliente ha già iniziato ad apprezzare.',
          'Funziona meglio quando viene proposto come un’informazione — “molti che comprano questo rosso lo abbinano a…” — piuttosto che come una richiesta diretta.',
        ],
      },
      {
        h2: 'Upselling: la versione superiore, non quella più cara',
        paragraphs: [
          'L’upselling ben fatto non spinge verso il prodotto più caro in assoluto, ma verso la versione che il cliente avrebbe scelto comunque se ne fosse stato a conoscenza: la riserva invece dell’annata base, la confezione regalo invece della bottiglia singola, il formato magnum per un’occasione speciale che il cliente ha già menzionato.',
          '> Il miglior upsell è quello che il cliente avrebbe chiesto da solo, se solo avesse saputo che esisteva.',
        ],
      },
      {
        h2: 'Il rischio di esagerare',
        paragraphs: [
          'Il rischio più concreto è trasformare ogni interazione in un tentativo di vendita. Un team che propone upsell a ogni singolo cliente, senza leggere se il momento è giusto, ottiene l’effetto opposto: il cliente si sente in una trattativa invece che in una degustazione, e la fiducia — che è quello che davvero fa vendere il vino — si incrina.',
          'Vale la regola opposta di un buon venditore: proporre una volta, chiaramente, e lasciare che sia il cliente a decidere, senza insistere una seconda volta nella stessa visita.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il modo più semplice per iniziare è scegliere due o tre abbinamenti naturali tra i prodotti che già vendi, e provare a proporli in modo discreto nelle prossime settimane, osservando come reagiscono i clienti prima di strutturare qualcosa di più ampio.',
          'Se vuoi ragionare insieme su come impostarlo per la tua cantina, [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'ridurre-no-show-prenotazioni-cantina-promemoria',
    title: 'No-Show nelle Visite in Cantina: Come Ridurli con Conferme e Promemoria Automatici',
    seoTitle: 'No-show in cantina: ridurli con conferme automatiche',
    excerpt:
      'Un gruppo prenotato che non si presenta costa tempo, personale organizzato invano, e spesso un altro visitatore che nel frattempo non ha potuto prenotare.',
    date: '2026-08-04',
    readingMinutes: 6,
    category: 'E-commerce',
    featuredImage: '/images/blog/ridurre-no-show-prenotazioni-cantina-promemoria.jpg',
    imageAlt: 'Calendario di prenotazioni con notifiche su uno smartphone',
    tags: ['Enoturismo', 'Prenotazioni', 'E-commerce'],
    keywords: ['no show cantina', 'promemoria prenotazione visita cantina', 'ridurre disdette cantina', 'gestione prenotazioni enoturismo'],
    relatedSlugs: ['enoturismo-prenotazioni-online-vendite-dirette', 'agriturismo-booking-online-prenotazioni'],
    relatedLinks: [
      { href: '/servizi/software-ai-su-misura', label: 'Servizio: Software & agenti AI su misura' },
      { href: '/portfolio/tasting-flow', label: 'Case study: Tasting Flow' },
      { href: '/settori/wine-hospitality-agriturismi', label: 'Settore Wine Hospitality & Agriturismi' },
    ],
    body: [
      {
        h2: 'Un problema che sembra piccolo e non lo è',
        paragraphs: [
          'Un gruppo di otto persone prenota una visita per sabato pomeriggio, e sabato pomeriggio non si presenta nessuno. È già successo in quasi ogni cantina che gestisce prenotazioni via telefono o email: sembra un fastidio isolato, ma su base annua significa personale organizzato per niente, un tavolo rimasto vuoto, e magari un altro gruppo che nel frattempo aveva chiesto la stessa fascia oraria e si era sentito rispondere che era tutto occupato.',
          'Il problema non è la mancanza di puntualità delle persone: è l’assenza di un sistema che tenga viva la prenotazione fino al giorno stesso.',
        ],
      },
      {
        h2: 'Perché succede, quasi sempre',
        paragraphs: [
          'Quando una prenotazione viene presa per telefono e confermata solo a voce, non c’è nessun promemoria che arrivi al visitatore nei giorni successivi. Con il passare del tempo la visita smette di essere una priorità nell’agenda di chi ha prenotato, soprattutto se ha organizzato tutto con settimane di anticipo.',
          'Succede più spesso nei weekend e con i gruppi più numerosi, proprio le prenotazioni che, se disdette all’ultimo, sono più difficili da rimpiazzare.',
        ],
      },
      {
        h2: 'Cosa cambia con conferme e promemoria automatici',
        paragraphs: [
          'Un sistema di conferma automatica interviene in due momenti: subito dopo la prenotazione, con un’email o un SMS che riepiloga data, ora e cosa aspettarsi dalla visita; e nei giorni immediatamente precedenti, con un promemoria che chiede una conferma esplicita, non solo la ricorda.',
          'Chi non conferma entro un termine ragionevole può essere ricontattato, o il posto può essere liberato per qualcun altro. Non elimina del tutto le disdette dell’ultimo minuto, ma riduce sensibilmente quelle dovute semplicemente a dimenticanza.',
        ],
      },
      {
        h2: 'La lista d’attesa, l’alternativa a cui pochi pensano',
        paragraphs: [
          'Molte cantine, quando un gruppo disdice, si limitano a segnare la fascia oraria come libera e sperano che qualcuno chieda proprio quella data. Un sistema con lista d’attesa fa il percorso inverso: chi non ha trovato posto in una data specifica viene avvisato automaticamente appena si libera, invece di doverlo scoprire per caso.',
          '> Ogni posto liberato all’ultimo momento senza un modo per rimpiazzarlo è una visita — e una vendita potenziale — persa due volte: quella di chi ha disdetto, e quella di chi non ha mai saputo che si era liberato un posto.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve un sistema complesso per iniziare: bastano una conferma automatica alla prenotazione e un promemoria uno o due giorni prima. Sono due automazioni semplici che quasi sempre valgono lo sforzo già dal primo mese.',
          'Se vuoi capire come impostarle per la tua cantina o il tuo agriturismo, [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'vendita-internazionale-vino-dtc-export-estero',
    title: 'Vendere Vino all’Estero Online: Cosa Serve Davvero per l’Export Diretto',
    seoTitle: 'Export vino online: cosa serve per vendere all’estero',
    excerpt:
      'Aprire le vendite online a un mercato estero non è solo tradurre il sito. Dogana, corrieri, resi e assistenza cambiano completamente rispetto al mercato interno.',
    date: '2026-08-04',
    readingMinutes: 8,
    category: 'E-commerce',
    featuredImage: '/images/blog/vendita-internazionale-vino-dtc-export-estero.jpg',
    imageAlt: 'Scatole di vino pronte per la spedizione internazionale',
    tags: ['E-commerce', 'Export', 'Wine Tech'],
    keywords: ['vendere vino online estero', 'export diretto vino', 'dtc vino internazionale', 'spedire vino all’estero'],
    relatedSlugs: ['ecommerce-vino-margini-vendita-diretta', 'ecommerce-vino-vendite-dirette'],
    relatedLinks: [
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/portfolio/frantoi-san-lorenzo', label: 'Case study: Frantoi San Lorenzo' },
    ],
    body: [
      {
        h2: 'Perché non basta tradurre il sito in un’altra lingua',
        paragraphs: [
          'Tradurre il sito in inglese e aggiungere una tariffa di spedizione internazionale non è ancora vendere all’estero: è solo renderlo tecnicamente possibile. La parte che fa davvero la differenza — e che spesso viene sottovalutata — riguarda dogana, corrieri, resi e assistenza post-vendita in un fuso orario diverso.',
          'Il vino, in particolare, non è un prodotto qualunque da spedire: è pesante, fragile, soggetto a normative doganali specifiche e, fuori dall’Unione Europea, a documentazione che varia da paese a paese.',
        ],
      },
      {
        h2: 'Le tre complessità che cambiano davvero le cose',
        paragraphs: [
          'La prima è doganale: fuori dalla UE servono documenti di esportazione corretti, e ogni paese ha le proprie regole su etichettatura, dazi e limiti di importazione per l’alcol. Anche dentro l’UE, ogni paese applica la propria aliquota IVA, che va gestita correttamente in fase di vendita.',
          'La seconda è logistica: il vino è pesante e fragile, quindi il costo di spedizione incide molto di più che su altri prodotti, e serve un corriere che gestisca bene il trasporto internazionale di bottiglie senza rotture o ritardi eccessivi.',
          'La terza è l’assistenza: un cliente dall’altra parte del mondo che ha un problema con l’ordine si aspetta una risposta in tempi ragionevoli, non giorni di attesa per il fuso orario o la lingua.',
        ],
      },
      {
        h2: 'Cosa verificare prima di aprire un mercato',
        paragraphs: [
          'Prima di aprire un mercato specifico conviene verificare tre cose: se esiste già una domanda reale per il tuo vino in quel paese (fiere, richieste ricevute, presenza di altri produttori italiani), quali sono i costi doganali e di spedizione effettivi — non stimati — per quel mercato, e se hai la capacità, anche solo in termini di tempo, di gestire l’assistenza clienti in quella lingua o fascia oraria.',
          'Partire da un solo mercato alla volta, invece di aprire la vendita a tutto il mondo contemporaneamente, permette di capire cosa funziona senza disperdere energie su troppi fronti.',
        ],
      },
      {
        h2: 'Il margine è più alto, ma solo se i costi nascosti sono chiari da subito',
        paragraphs: [
          'Vendere direttamente all’estero, saltando importatori e distributori, permette di mantenere un margine più alto rispetto alla filiera tradizionale — ma solo se i costi nascosti (dogana, resi, assistenza) sono stati calcolati prima, non scoperti dopo.',
          '> Il margine più alto dell’export diretto vale la pena solo se non viene eroso da problemi che si potevano prevedere.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il modo più sicuro per iniziare è scegliere un solo mercato test — spesso Germania, Svizzera o Regno Unito per un produttore italiano, per vicinanza logistica e domanda già esistente — e verificare margini e operatività reali prima di allargare ad altri paesi.',
          'Se vuoi valutare se e come ha senso per la tua cantina, [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'multi-canale-cantina-getyourguide-viator-ota',
    title: 'Multi-Canale per Cantine: Farsi Trovare su GetYourGuide e Viator Senza Perdere il Cliente',
    seoTitle: 'Cantine su GetYourGuide e Viator: farsi trovare senza perdere il cliente',
    excerpt:
      'Le piattaforme di prenotazione turistica portano visitatori, ma la relazione resta loro. Ecco come usarle senza dipenderne completamente.',
    date: '2026-08-04',
    readingMinutes: 7,
    category: 'Strategia',
    featuredImage: '/images/blog/multi-canale-cantina-getyourguide-viator-ota.jpg',
    imageAlt: 'Turisti che consultano un’app di prenotazione viaggi su uno smartphone',
    tags: ['Strategia', 'Enoturismo', 'E-commerce'],
    keywords: ['getyourguide cantina', 'viator vino', 'ota enoturismo', 'prenotazioni turistiche cantina'],
    relatedSlugs: ['enoturismo-prenotazioni-online-vendite-dirette', 'agriturismo-booking-online-prenotazioni'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/portfolio/tasting-flow', label: 'Case study: Tasting Flow' },
      { href: '/settori/wine-hospitality-agriturismi', label: 'Settore Wine Hospitality & Agriturismi' },
    ],
    body: [
      {
        h2: 'Perché le OTA sono attraenti, e cosa costano davvero',
        paragraphs: [
          'Piattaforme come GetYourGuide o Viator portano visitatori che altrimenti la cantina non avrebbe mai raggiunto: turisti che pianificano il viaggio da un’app, non da una ricerca specifica sul produttore. Il vantaggio è reale, e per molte cantine rappresenta una parte importante delle visite guidate.',
          'Il costo, in cambio, è una commissione che va messa in conto nel prezzo dell’esperienza venduta su quel canale.',
        ],
      },
      {
        h2: 'Il vero costo non è solo la commissione',
        paragraphs: [
          'La commissione, però, non è il costo più alto. Il costo più alto è che **la relazione con quel visitatore resta della piattaforma**, non della cantina. Il turista prenota su Viator, paga su Viator, e nella sua testa quell’esperienza appartiene a Viator, non a chi l’ha realmente ospitato.',
          'Questo significa che, senza un intervento intenzionale, quel visitatore non entrerà mai nella newsletter della cantina, non riceverà un follow-up personalizzato, e difficilmente tornerà a comprare online direttamente dal produttore.',
        ],
      },
      {
        h2: 'Come restare presenti senza perdere il cliente',
        paragraphs: [
          'La soluzione non è abbandonare le OTA, ma usarle in modo consapevole: sincronizzare il calendario tra il proprio sito e la piattaforma per evitare doppie prenotazioni, e nel momento stesso della visita — non prima — iniziare a costruire una relazione diretta con quella persona.',
          'In pratica significa raccogliere l’email durante l’accoglienza, offrire un piccolo vantaggio a chi si iscrive alla newsletter durante la visita, e inserire quel contatto nello stesso flusso di follow-up usato per chi prenota direttamente.',
        ],
      },
      {
        h2: 'Il sito proprio resta il centro',
        paragraphs: [
          'Il sito proprio della cantina resta lo strumento che genera più valore nel tempo, perché è l’unico canale su cui non si paga una commissione ricorrente e su cui la relazione col cliente resta interamente della cantina. Le OTA vanno trattate come un canale di acquisizione, non come il canale principale.',
          '> Un visitatore trovato tramite OTA è un cliente nuovo. Un visitatore convertito in contatto diretto dopo la visita è un cliente che può tornare a comprare per anni, senza commissione.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il primo passo pratico è verificare se il calendario delle visite è già sincronizzato tra sito proprio e OTA, ed è già presente un modo semplice per raccogliere l’email dei visitatori che arrivano da quei canali. Se manca, è il punto da cui iniziare.',
          'Se vuoi impostare questo flusso per la tua cantina, [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'formazione-team-accoglienza-cantina-vendite',
    title: 'Formazione del Team di Accoglienza: Come Cambia la Spesa Media dei Visitatori',
    seoTitle: 'Formazione team accoglienza cantina: spesa media visitatori',
    excerpt:
      'Due gruppi identici, guidati da due persone diverse, possono spendere cifre molto diverse in cantina. La differenza sta quasi sempre in come vengono accolti.',
    date: '2026-08-04',
    readingMinutes: 6,
    category: 'Strategia',
    featuredImage: '/images/blog/formazione-team-accoglienza-cantina-vendite.jpg',
    imageAlt: 'Membro dello staff di una cantina che accoglie un gruppo di visitatori',
    tags: ['Strategia', 'Enoturismo', 'Formazione'],
    keywords: ['formazione staff cantina', 'accoglienza visitatori vino', 'aumentare spesa media enoturismo', 'training team degustazione'],
    relatedSlugs: ['storytelling-vino-marketing-vendite', 'degustazioni-cantina-trasformare-visite-vendite'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/portfolio/tasting-flow', label: 'Case study: Tasting Flow' },
      { href: '/metodo/strategia-di-settore', label: 'Metodo: Strategia di settore' },
    ],
    body: [
      {
        h2: 'La variabile che conta più del vino stesso',
        paragraphs: [
          'Chi gestisce più punti vendita della stessa azienda nota spesso un pattern scomodo: a parità di vino, di prezzo e di visitatori, alcuni membri del team fanno vendere sistematicamente di più di altri. La variabile non è la conoscenza tecnica del vino — spesso la conoscono tutti allo stesso modo — è come viene gestita l’accoglienza.',
          'Chi accoglie bene crea una connessione prima ancora di versare il primo bicchiere: fa domande, ascolta le risposte, e costruisce la degustazione attorno a quello che la persona di fronte sembra cercare.',
        ],
      },
      {
        h2: 'Cosa distingue un’accoglienza che vende da una che intrattiene soltanto',
        paragraphs: [
          'Un’accoglienza che vende ha alcune caratteristiche riconoscibili: personalizza il percorso in base a chi ha davanti (un gruppo di amici in gita ha bisogno di un tono diverso da una coppia in visita speciale), non lascia mai il visitatore da solo troppo a lungo, e trasforma le informazioni tecniche in racconto invece che in un elenco di dati.',
          'Un’accoglienza che si limita a intrattenere, invece, tratta ogni visita allo stesso modo, ripete le stesse frasi indipendentemente da chi ascolta, e non nota mai il momento in cui proporre qualcosa in più avrebbe senso.',
        ],
      },
      {
        h2: 'Formare non significa dare uno script da recitare',
        paragraphs: [
          'Dare al team uno script rigido da ripetere parola per parola raramente funziona: si sente artificiale, e chi lo recita senza crederci lo trasmette. Quello che funziona meglio è dare una struttura flessibile — quali domande fare, quali informazioni raccontare, in che ordine — lasciando che ogni persona la adatti al proprio stile.',
          'Serve anche allineare il team su cosa proporre e quando: la stessa confezione regalo o lo stesso invito al wine club, presentati in modo coerente da chiunque accolga i visitatori, invece che lasciati alla sensibilità del singolo.',
        ],
      },
      {
        h2: 'Misurare, non solo formare',
        paragraphs: [
          'Formare il team senza poi misurare cosa cambia rende difficile capire se sta funzionando. Anche un indicatore semplice — la spesa media per visitatore, tracciata per singolo membro del team o per fascia oraria — aiuta a capire dove la formazione sta avendo effetto e dove serve rinforzarla.',
          '> Quello che non si misura, difficilmente migliora in modo consapevole: si migliora per caso, o non migliora affatto.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il primo passo realistico è osservare, per qualche settimana, come il team attuale gestisce l’accoglienza — senza cambiare nulla — e annotare dove le visite si trasformano in vendite e dove invece si fermano prima. Da lì si capisce cosa formare per primo.',
          'Se vuoi una mano a strutturare questo percorso, [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'comunicare-sostenibilita-cantina-marketing-vendite',
    title: 'Sostenibilità in Cantina: Come Comunicarla Senza Sembrare Greenwashing',
    seoTitle: 'Sostenibilità cantina: comunicarla senza greenwashing',
    excerpt:
      'Molte cantine coltivano in biologico o riducono gli sprechi, ma non lo raccontano perché temono di sembrare furbe. Il problema è più spesso come viene detto, non se dirlo.',
    date: '2026-08-04',
    readingMinutes: 7,
    category: 'Strategia',
    featuredImage: '/images/blog/comunicare-sostenibilita-cantina-marketing-vendite.jpg',
    imageAlt: 'Filare di vigneto coltivato in regime biologico al tramonto',
    tags: ['Strategia', 'Marketing', 'Sostenibilità'],
    keywords: ['sostenibilità cantina marketing', 'comunicare biologico vino', 'greenwashing vino', 'marketing sostenibile agroalimentare'],
    relatedSlugs: ['storytelling-vino-marketing-vendite', 'seo-locale-agroalimentare-google-maps'],
    relatedLinks: [
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
      { href: '/settori/wine-viticulture', label: 'Settore Wine & Viticulture' },
      { href: '/portfolio/tenuta-monteverdi', label: 'Case study: Tenuta Monteverdi' },
    ],
    body: [
      {
        h2: 'Il problema non è comunicare la sostenibilità, è farlo in modo vago',
        paragraphs: [
          'Molte cantine coltivano in regime biologico, riducono l’uso di pesticidi, gestiscono l’acqua con attenzione, o hanno investito in packaging più leggero — e non lo comunicano quasi mai, per timore che sembri un’operazione di marketing più che una scelta reale.',
          'Il rischio esiste, ma nasce quasi sempre da come viene raccontata la sostenibilità, non dal fatto di raccontarla. Un cliente che cerca informazioni oggi si aspetta di trovarle, e il silenzio non viene letto come modestia: viene semplicemente letto come assenza dell’informazione.',
        ],
      },
      {
        h2: 'Cosa distingue una comunicazione onesta da un greenwashing',
        paragraphs: [
          'Il greenwashing nasce da affermazioni vaghe e non verificabili: “amiamo la natura”, “rispettiamo l’ambiente”, frasi che non dicono nulla di concreto e che, proprio per questo, suonano false anche quando dietro c’è del vero.',
          'Una comunicazione onesta è specifica: “coltiviamo in regime biologico certificato dal [anno]” è verificabile, linkabile, e molto più credibile di un’affermazione generica. Spiegare perché è stata fatta quella scelta — meno pesticidi, protezione delle falde acquifere, biodiversità del vigneto — aggiunge contesto reale invece di uno slogan.',
        ],
      },
      {
        h2: 'Dove raccontarlo, senza forzare il messaggio ovunque',
        paragraphs: [
          'Non serve costruire una sezione “sostenibilità” separata e mai più aggiornata: funziona meglio integrare il racconto dove ha senso — una pagina dedicata sul sito con le certificazioni, un paragrafo nella scheda di ogni vino prodotto in biologico, un accenno durante la degustazione quando si parla del vigneto.',
          'Anche i contenuti sui social funzionano meglio quando mostrano il processo reale — la vendemmia, una certificazione, una scelta specifica fatta in vigna — piuttosto che immagini generiche accompagnate da hashtag ambientali senza contesto.',
        ],
      },
      {
        h2: 'Il prezzo: dirlo apertamente, non nasconderlo',
        paragraphs: [
          'Se un vino prodotto in biologico costa di più da produrre, non c’è motivo di nasconderlo nel prezzo finale. Spiegare che il costo aggiuntivo riflette scelte produttive più onerose — rese più basse, più lavoro manuale, certificazioni — è più efficace che far finta che il prezzo più alto non abbia una ragione.',
          '> Un cliente disposto a spendere di più per un prodotto sostenibile vuole sapere perché costa di più, non solo che lo è.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il primo passo è fare un elenco onesto di cosa la cantina già fa in termini di sostenibilità — anche cose piccole — e verificare quali sono facilmente verificabili o certificabili. Da lì si costruisce una comunicazione concreta, non generica.',
          'Se vuoi una mano a strutturarla nel sito e nei materiali di vendita, [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'email-marketing-sequenze-automatiche-cantina-visitatori',
    title: 'Email Marketing per Cantine: la Sequenza che Trasforma un Visitatore in Cliente',
    seoTitle: 'Email marketing cantina: sequenza da visitatore a cliente',
    excerpt:
      'Raccogliere l’email di un visitatore non serve a molto se poi riceve solo una newsletter generica ogni tanto. Serve una sequenza pensata per portarlo all’acquisto.',
    date: '2026-08-04',
    readingMinutes: 7,
    category: 'Strategia',
    featuredImage: '/images/blog/email-marketing-sequenze-automatiche-cantina-visitatori.jpg',
    imageAlt: 'Sequenza di email automatiche mostrata su uno schermo di laptop',
    tags: ['Strategia', 'Email Marketing', 'Vendita Diretta'],
    keywords: ['email marketing cantina', 'sequenza automatica vino', 'newsletter vino conversione', 'follow up visita cantina'],
    relatedSlugs: ['degustazioni-cantina-trasformare-visite-vendite', 'wine-club-revenue-ricorrente-fedelta'],
    relatedLinks: [
      { href: '/servizi/software-ai-su-misura', label: 'Servizio: Software & agenti AI su misura' },
      { href: '/portfolio/wine-club-pro', label: 'Case study: Wine Club Pro' },
      { href: '/servizi/consulenza-strategica', label: 'Servizio: Consulenza strategica' },
    ],
    body: [
      {
        h2: 'Il problema della newsletter generica',
        paragraphs: [
          'Un visitatore lascia l’email dopo la degustazione, felice della visita. Nei mesi successivi riceve una newsletter mensile uguale per tutti — un’offerta generica, qualche foto della vendemmia — e con il tempo smette di aprirla, o si cancella. L’occasione di trasformarlo in cliente si esaurisce senza che nessuno se ne accorga.',
          'Il problema non è la newsletter in sé, è che tratta un contatto caldo — qualcuno che ha appena visitato la cantina — come se fosse un contatto qualsiasi, senza sfruttare il momento in cui l’interesse era più alto.',
        ],
      },
      {
        h2: 'Una sequenza ha un obiettivo, una newsletter no',
        paragraphs: [
          'Una newsletter comunica quando ha qualcosa da dire. Una sequenza automatica comunica secondo un piano, con un obiettivo preciso: portare quella persona specifica, che ha vissuto un’esperienza specifica, verso il primo acquisto online.',
          'Questo significa che ogni email della sequenza ha un ruolo diverso — non sono variazioni della stessa newsletter, ma passaggi di un percorso che si costruisce nel tempo.',
        ],
      },
      {
        h2: 'Come costruire la sequenza, passo per passo',
        paragraphs: [
          'Una sequenza semplice può funzionare così: la prima email, inviata subito dopo la visita, ringrazia e ricorda quali vini sono stati assaggiati, con il link diretto per acquistarli online. Una seconda email, qualche giorno dopo, racconta la storia di uno di quei vini — il vigneto, l’annata, il metodo di lavorazione — senza chiedere nulla, solo costruendo interesse.',
          'Una terza email, una o due settimane dopo, può includere un piccolo incentivo per chi non ha ancora ordinato — uno sconto sul primo acquisto, o la spedizione gratuita — e un’ultima email, verso la fine del mese, chiude la sequenza con un invito più diretto, magari verso il wine club per chi si è mostrato interessato.',
        ],
      },
      {
        h2: 'L’automazione non toglie personalità, se è scritta bene',
        paragraphs: [
          'Automatizzare non significa scrivere email fredde: significa scriverle una volta, con cura, e lasciare che vengano inviate al momento giusto per ogni singolo visitatore, invece di doversi ricordare manualmente di scrivere a ognuno.',
          '> La sequenza funziona perché arriva quando l’interesse è ancora vivo, non quando qualcuno in cantina trova il tempo di scrivere una newsletter.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Il modo più semplice per iniziare è scrivere solo la prima email — quella di ringraziamento post-visita con il link ai vini assaggiati — e automatizzarla. È il passaggio con il rapporto più alto tra sforzo e risultato, e la base su cui costruire il resto della sequenza in un secondo momento.',
          'Se vuoi una mano a impostarla, [prenota una call gratuita](/prenota-call).',
        ],
      },
    ],
  },
  {
    slug: 'siti-web-per-cantine',
    title: 'Siti Web per Cantine: Come Trasformare i Visitatori in Clienti',
    seoTitle: 'Siti Web per Cantine: Guida per Vendere Vino Online',
    excerpt:
      'La maggior parte dei siti per cantine è una vetrina che nessuno usa per comprare. Ecco cosa deve avere davvero un sito pensato per generare contatti e vendite dirette.',
    date: '2026-08-05',
    readingMinutes: 9,
    category: 'SEO',
    featuredImage: '/images/blog/siti-web-per-cantine.jpg',
    imageAlt: 'Sito web moderno per una cantina, con e-commerce e storytelling del vigneto',
    tags: ['Siti Web', 'Cantine', 'Web Design', 'E-commerce Vino'],
    keywords: ['siti web per cantine', 'siti web aziende vitivinicole', 'web design cantine', 'siti web cantine ecommerce'],
    relatedSlugs: ['specialista-digitale-vs-web-agency-agroalimentare', 'ecommerce-vino-vendite-dirette'],
    relatedLinks: [
      { href: '/servizi/siti-web-contatti', label: 'Servizio: Siti web che generano contatti' },
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/settori/wine-viticulture', label: 'Settore Wine & Viticulture' },
      { href: '/portfolio/tenuta-monteverdi', label: 'Case study concept: Tenuta Monteverdi' },
    ],
    body: [
      {
        h2: 'Perché il sito di una cantina non può essere un sito qualsiasi',
        paragraphs: [
          'Chi cerca online "siti web per cantine" di solito ha già un sito, e sospetta che qualcosa non funzioni. Non è un caso: un sito per un’azienda vitivinicola ha un compito diverso da quello di uno studio legale o di un consulente. Chi arriva sulla pagina di una cantina non vuole solo capire chi sei: vuole decidere, nel giro di pochi secondi, se il tuo vino merita fiducia e se vale la pena comprarlo senza averlo mai assaggiato.',
          'Questo cambia la struttura del sito. **Non basta raccontare la storia della cantina**: serve mostrare i vini con foto e informazioni chiare, rendere possibile l’acquisto — o la prenotazione di una degustazione — senza dover scrivere una email, e dare al visitatore un motivo per tornare, non solo per comprare una volta.',
          'Un sito generico, costruito da chi non ha mai lavorato nel settore vinicolo, tratta quasi sempre questi aspetti come dettagli estetici. Il risultato è quasi sempre lo stesso: bello da vedere, ma incapace di trasformare un visitatore in un cliente.',
        ],
      },
      {
        h2: 'Gli errori che affondano la maggior parte dei siti di cantine e frantoi',
        paragraphs: [
          'Il primo errore è pensare al sito come a una vetrina, non a un canale di vendita. Le bottiglie che si vendono bene offline avrebbero spesso un margine più alto vendute direttamente online, senza intermediari — ma solo se il sito permette davvero di comprare, e non si limita a un numero di telefono in fondo alla pagina.',
          'Il secondo è affidarsi a un’agenzia generalista che non ha mai gestito un catalogo vino, una spedizione fragile o le domande che si fa davvero chi compra online — annata, provenienza, note di degustazione. Il sito verrà bello. Raramente venderà.',
          'Il terzo è ignorare cosa succede dopo la prima visita. **Chi guarda il tuo sito la domenica sera, con un bicchiere in mano, il lunedì ha già altre dieci cose in testa**: senza un follow-up, anche solo una email ben scritta, quella visita si perde.',
          'Il quarto è scegliere la piattaforma più economica possibile, ignorando che un sito lento perde visitatori prima ancora che arrivino a vedere il catalogo. Il quinto è il fai-da-te senza le competenze per farlo bene: non è sbagliato in assoluto, ma richiede tempo e attenzione che chi gestisce una cantina spesso non ha.',
        ],
      },
      {
        h2: 'Cosa deve avere un sito che vende vino, non solo lo racconta',
        paragraphs: [
          'Un sito efficace per una cantina si costruisce attorno a poche funzioni essenziali, non a decine di pagine. Serve una prima schermata che comunichi in un colpo d’occhio cosa vendi e perché è diverso da un vino qualsiasi. Serve un catalogo con foto di qualità, annata, note di degustazione e prezzo visibile, perché chi compra vino online decide sulla base di dettagli che offline chiederebbe a voce.',
          'Serve anche una sezione che racconti il territorio e la storia della cantina, ma posizionata **dopo** aver mostrato cosa si vende, non prima: chi arriva da una ricerca su Google vuole prima capire se può comprare, poi eventualmente approfondire chi sei.',
          'Nel caso concept di Tenuta Monteverdi — esempio illustrativo che trovi nel nostro portfolio, non un cliente reale — il problema di partenza era tipico: sito statico, nessun e-commerce, prenotazioni delle degustazioni gestite solo per telefono. La cantina perdeva vendite dirette senza nemmeno accorgersene, semplicemente perché non aveva un canale per intercettarle. La soluzione ha unito e-commerce, gestione delle degustazioni e un wine club ricorrente in un unico sistema, non funzionalità isolate.',
          '> Un sito che vende non è più pagine. È meno attrito tra "voglio questo vino" e "l’ho comprato".',
        ],
      },
      {
        h2: 'E-commerce, wine club e tracciabilità: cosa serve oltre al carrello',
        paragraphs: [
          'Aggiungere un carrello a un sito esistente non basta a farne un canale di vendita vero. Il vino ha vincoli che un e-commerce generico ignora: peso e fragilità nella spedizione, costi che cambiano per zona e quantità, limiti di età per la vendita in alcuni paesi. Se questi dettagli non sono configurati correttamente, il cliente li scopre al checkout — ed è lì che la maggior parte degli ordini si abbandona.',
          'Un meccanismo di ricorrenza, tipicamente un wine club in abbonamento, trasforma un acquisto isolato in una relazione che dura nel tempo: spedizioni programmate, comunicazione personalizzata, e un motivo per continuare a comprare da te invece che dal solito rivenditore.',
          'La tracciabilità di lotto, quando ha senso per il posizionamento del brand, aggiunge un argomento di vendita in più: un QR code sull’etichetta che mostra provenienza, annata e certificazioni comunica trasparenza — un elemento che pesa nella decisione di chi acquista da un produttore che non ha mai visitato di persona.',
        ],
      },
      {
        h2: 'Velocità, mobile e SEO: i dettagli tecnici che decidono chi resta e chi se ne va',
        paragraphs: [
          'Tre aspetti tecnici, spesso trascurati, incidono più di qualsiasi scelta grafica sul fatto che un visitatore diventi cliente. Il primo è la velocità: un sito che impiega diversi secondi a caricare perde una parte dei visitatori prima ancora che vedano il catalogo, e Google penalizza nel ranking i siti lenti.',
          'Il secondo è il mobile: la maggior parte delle ricerche legate al vino avviene da smartphone, spesso dopo una visita in cantina o durante una degustazione. Se il sito non è pensato prima di tutto per il mobile, aggiungere un vino al carrello diventa frustrante, e il cliente abbandona.',
          'Il terzo è la SEO di base fatta bene: titolo di pagina e meta description scritti per chi cerca davvero — "siti web per cantine", "vino [zona] acquisto online", non termini generici — testo alternativo delle immagini, e collegamenti interni tra le pagine del sito. Sono dettagli che non si vedono, ma che decidono se compari nei primi risultati o resti invisibile.',
        ],
      },
      {
        h2: 'Quanto costa un sito per una cantina e come valutare se si ripaga',
        paragraphs: [
          'Il costo di un sito per cantina varia molto in base a cosa deve fare davvero: un sito vetrina con modulo di contatto costa meno di un e-commerce completo con wine club e gestione delle degustazioni integrata. Diffida di chi promette una cifra fissa prima di aver capito cosa ti serve, ed è ancora più prudente diffidare di chi promette percentuali di crescita garantite: nessuno può saperlo prima di conoscere il punto di partenza.',
          'Il modo corretto di valutare l’investimento non è una percentuale astratta, ma un confronto concreto: quanto vale oggi ogni vendita diretta che il tuo sito attuale non riesce a intercettare, e quante di quelle vendite un sito costruito per convertire potrebbe recuperare nei primi mesi. Un e-commerce ben fatto, un wine club ricorrente e una gestione automatica delle prenotazioni sono le tre leve che più spesso spostano davvero questo numero.',
          'Un sito economico che nessuno usa per comprare non è un risparmio: è un costo che si paga ogni mese, sotto forma di vendite che continuano a passare solo da distributori e intermediari.',
        ],
      },
      {
        h2: 'Domande frequenti sui siti web per cantine',
        paragraphs: [
          '**Posso usare lo stesso sito per vendere vino, olio e per l’enoturismo?** Sì, ma con sezioni distinte e ben separate — shop online, prenotazione degustazioni, eventuale frantoio — così il visitatore non deve capire da solo dove trovare cosa.',
          '**Quanto tempo prima di vedere i primi risultati?** Per l’e-commerce, le prime vendite arrivano spesso già nelle prime settimane se il sito è promosso correttamente. Per il posizionamento organico su Google servono in genere alcuni mesi, perché la SEO premia la costanza, non la novità.',
          '**Mi serve un hosting particolare per vendere vino online?** No: basta un hosting veloce e affidabile, non necessariamente il più costoso sul mercato. Quello che conta è come il sito è costruito, non solo dove è ospitato.',
          '**Cosa succede se non aggiorno il sito per qualche mese?** Nulla di grave nell’immediato, ma Google tende a premiare i siti aggiornati con regolarità: anche un solo contenuto nuovo al mese — un articolo, un aggiornamento del catalogo — aiuta a mantenere la posizione raggiunta.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve rifare tutto insieme. **Il punto di partenza più utile è capire dove il sito attuale sta facendo perdere vendite**: nessun e-commerce, prenotazioni gestite solo per telefono, o semplicemente un sito troppo lento per chi lo visita da mobile.',
          'Progettiamo siti ed e-commerce per cantine, frantoi e aziende vitivinicole pensati per vendere, non solo per essere belli. [Scopri il servizio →](/servizi/siti-web-contatti)',
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-per-cantine',
    title: 'E-commerce per Cantine: Come Costruirne uno che Vende Davvero',
    seoTitle: 'E-commerce per Cantine: Guida Pratica per Vendere Vino Online',
    excerpt:
      'Aggiungere un carrello al sito non basta a vendere vino online. Ecco cosa serve davvero — dalla scheda prodotto al checkout — perché un e-commerce per cantina converta.',
    date: '2026-08-05',
    readingMinutes: 8,
    category: 'Wine Tech',
    featuredImage: '/images/blog/ecommerce-per-cantine.jpg',
    imageAlt: 'Bottiglie di vino pronte per la spedizione da un e-commerce di cantina',
    tags: ['E-commerce', 'Vino', 'Shopify', 'Vendita Online'],
    keywords: ['e-commerce per cantine', 'e-commerce vino', 'vendere vino online', 'e-commerce aziende vitivinicole'],
    relatedSlugs: ['ecommerce-vino-vendite-dirette', 'ecommerce-vino-margini-vendita-diretta'],
    relatedLinks: [
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/software', label: 'Software: automazioni e CRM per cantine' },
      { href: '/blog/siti-web-per-cantine', label: 'Guida: siti web per cantine' },
      { href: '/portfolio/azienda-rossi', label: 'Case study concept: Azienda Rossi' },
    ],
    body: [
      {
        h2: 'Perché il carrello di un e-commerce vino si comporta diversamente',
        paragraphs: [
          'Chi acquista vino online non lo fa come acquista una scarpa o un accessorio: sta decidendo di fidarsi di un prodotto che non può assaggiare prima di pagare. Questo rende l’acquisto più lento e più esposto ai dubbi — annata giusta, provenienza, come arriverà la bottiglia — e ogni frizione nel percorso, anche piccola, ha più probabilità di far abbandonare il carrello rispetto a un e-commerce generico.',
          'Per questo un e-commerce per cantina non si valuta solo su quanto è bello: si valuta su quanto riduce l’attrito tra "voglio questo vino" e "l’ho comprato", mantenendo comunque lo spazio per raccontare cosa rende quel vino diverso.',
        ],
      },
      {
        h2: 'Gli errori tecnici che affondano la maggior parte degli e-commerce vino',
        paragraphs: [
          'Il primo errore è scegliere una piattaforma pensata per prodotti semplici, senza considerare i vincoli reali del vino: peso, fragilità, limiti di età per la vendita, costi di spedizione che cambiano per zona. Quando questi dettagli non sono configurati, il cliente li scopre al checkout — e spesso è lì che l’ordine si perde.',
          'Il secondo è un checkout troppo lungo: ogni passaggio in più tra il carrello e il pagamento è un’occasione per ripensarci, soprattutto da mobile, dove la maggior parte delle visite avviene oggi.',
          'Il terzo è non fare nulla quando un carrello viene abbandonato. **Un carrello abbandonato non è un cliente perso**, è un cliente che ha bisogno di un piccolo promemoria al momento giusto — ma solo se qualcuno ha impostato quel promemoria.',
          'Il quarto è non collegare i dati di acquisto a nulla: senza sapere cosa ha comprato un cliente, non si può proporgli il vino successivo con criterio, e ogni vendita resta un evento isolato invece di costruire una relazione.',
        ],
      },
      {
        h2: 'Cosa deve avere la scheda prodotto di un vino, oltre al bottone "aggiungi al carrello"',
        paragraphs: [
          'La scheda prodotto è dove si decide la vendita, non la homepage. Serve una foto che comunichi qualità, non solo l’etichetta leggibile: annata, note di degustazione, abbinamenti gastronomici e provenienza sono le informazioni che chi compra vino online cerca prima di decidere, perché sostituiscono le domande che farebbe a voce in un’enoteca.',
          'Il prezzo deve essere visibile e chiaro fin da subito, senza obbligare a passare al carrello per scoprirlo: la trasparenza sul prezzo costruisce fiducia più di qualsiasi sconto mostrato dopo.',
        ],
      },
      {
        h2: 'Checkout, spedizioni e cross-sell: i dettagli che decidono se l’ordine si chiude',
        paragraphs: [
          'Le spedizioni vanno configurate per zona e per quantità prima del lancio, non scoperte a ordini in corso: un costo di spedizione che appare solo all’ultimo passaggio è una delle cause più comuni di abbandono del carrello nel settore vino.',
          'Il cross-sell funziona quando si basa su cosa comprano davvero insieme i clienti, non su ipotesi: proporre un secondo vino coerente con quello nel carrello, al momento giusto, aumenta il valore medio dell’ordine senza sembrare invasivo.',
          'Nel caso concept di Azienda Rossi — esempio illustrativo nel nostro portfolio, non un cliente reale — la cantina non aveva alcuna struttura digitale: vendite affidate solo a social e fiere. La soluzione ha unito un e-commerce con un club a membership e spedizioni ricorrenti, arrivando a un flusso regolare di ordini online mensili invece di vendite concentrate in pochi eventi l’anno.',
        ],
      },
      {
        h2: 'Quale piattaforma scegliere: builder generico, Shopify o soluzione su misura',
        paragraphs: [
          'Un builder generico (tipo Wix o simili) può bastare per iniziare con pochi vini e volumi bassi, ma diventa un limite appena servono regole di spedizione più complesse, integrazioni con un CRM o un wine club strutturato.',
          'Shopify è oggi la scelta più solida per la maggior parte delle cantine: velocità, affidabilità e un ecosistema di app pensate anche per prodotti con vincoli come il vino, senza dover costruire tutto da zero.',
          'Una soluzione su misura ha senso quando il volume o la complessità lo giustificano davvero — più canali di vendita da collegare, un wine club con logiche particolari, integrazioni profonde con altri sistemi — non come primo passo per una cantina che sta ancora testando la domanda online.',
        ],
      },
      {
        h2: 'La checklist prima di lanciare (o rilanciare) il tuo e-commerce vino',
        paragraphs: [
          'Prima del lancio vale la pena verificare alcuni punti concreti: le foto dei prodotti sono professionali e non solo scatti di fretta con il telefono; le spedizioni sono configurate per zona con costi chiari già nel carrello; sono attivi almeno due metodi di pagamento comuni, incluso uno pensato per mobile.',
          'Vale anche la pena controllare che esista una politica di reso chiara, che ci sia almeno una email automatica dopo l’acquisto, che il sito sia stato provato davvero da uno smartphone e non solo da laptop, e che ci sia un sistema minimo di analytics per capire quali vini convertono di più.',
          'Non serve avere tutto perfetto al lancio, ma sapere quali di questi punti mancano evita di scoprire i problemi solo quando i primi ordini iniziano ad arrivare.',
        ],
      },
      {
        h2: 'Domande frequenti sull’e-commerce per cantine',
        paragraphs: [
          '**Posso vendere vino online in tutta Italia senza vincoli particolari?** In generale sì, ma vanno verificati i limiti di età all’acquisto e le regole di spedizione di alcool, che vanno configurate correttamente nella piattaforma scelta.',
          '**Serve un CRM separato per gestire i clienti dell’e-commerce?** Non necessariamente da subito: molte piattaforme e-commerce già raccolgono lo storico ordini. Un CRM diventa utile quando si vuole automatizzare follow-up e segmentazione in modo più sofisticato.',
          '**Quanto tempo serve per vedere i primi ordini online?** Se il sito è promosso correttamente — email alla propria lista, social, eventuale advertising — i primi ordini arrivano spesso già nelle prime settimane; il traffico organico da SEO richiede invece più tempo.',
          '**Ha senso vendere anche tramite marketplace oltre al proprio e-commerce?** Può avere senso per la visibilità, ma ogni marketplace prende una commissione e non costruisce una relazione diretta con il cliente: il canale proprio resta quello con il margine più alto.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve partire con tutte le funzionalità insieme. **Il primo passo è avere un catalogo con foto e informazioni corrette e un checkout che funziona bene da mobile**: è la base su cui poi si costruiscono cross-sell, automazioni e wine club.',
          'Costruiamo e-commerce Shopify per cantine e aziende vitivinicole pensati per convertire, non solo per mostrare il catalogo. [Scopri il servizio →](/servizi/ecommerce-shopify)',
        ],
      },
    ],
  },
  {
    slug: 'software-per-cantine',
    title: 'Software per Cantine: Come Scegliere (o Costruire) Quello Giusto',
    seoTitle: 'Software per Cantine: Guida alla Scelta del Gestionale',
    excerpt:
      'Un CRM, un tool per le prenotazioni, un foglio Excel per il team: più strumenti separati usi, più dati si perdono tra un sistema e l’altro. Ecco cosa cercare in un gestionale per cantina, e quando conviene farlo su misura.',
    date: '2026-08-05',
    readingMinutes: 9,
    category: 'Agribusiness AI',
    featuredImage: '/images/blog/software-per-cantine.jpg',
    imageAlt: 'Dashboard di una piattaforma software per la gestione di una cantina',
    tags: ['Software', 'CRM', 'Gestionale', 'Agribusiness'],
    keywords: ['software per cantine', 'software aziende vitivinicole', 'crm per cantine', 'gestionale cantine', 'software gestione cantina'],
    relatedSlugs: ['software-frantoi-gestione-ordini-crm', 'agenti-ai-processo-commerciale'],
    relatedLinks: [
      { href: '/software/vitivinicolo', label: 'Software su misura per cantine' },
      { href: '/software', label: 'Software su misura per l’agroalimentare' },
      { href: '/portfolio/tasting-flow', label: 'Case study concept: Tasting Flow' },
    ],
    body: [
      {
        h2: 'Perché usare 4 o 5 strumenti diversi ti costa più di quanto pensi',
        paragraphs: [
          'Molte cantine, frantoi e agriturismi finiscono per gestire l’attività con una combinazione di strumenti scelti in momenti diversi e senza un piano: un foglio Excel per gli ordini, WhatsApp per i clienti, un calendario cartaceo per le degustazioni, magari un CRM che quasi nessuno usa davvero. Ognuno di questi strumenti funziona da solo, ma nessuno parla con gli altri.',
          'Il costo reale non è il prezzo di ogni singolo strumento: è il tempo che qualcuno spende ogni giorno a copiare un dato da un sistema all’altro, e gli errori che nascono proprio in quel passaggio manuale — un ordine dimenticato, un follow-up che non parte, un cliente che scrive due volte perché la prima richiesta si è persa.',
          '**Più uno strumento resta isolato, più diventa un punto dove i dati si perdono**, non un punto dove si guadagna tempo.',
        ],
      },
      {
        h2: 'Gli errori più comuni nella scelta del software',
        paragraphs: [
          'Il primo errore è scegliere in base alla notorietà del nome, non a quanto lo strumento si adatta davvero a una cantina. Un ERP pensato per la grande industria porta con sé una complessità — moduli, permessi, configurazioni — che una cantina media non userà mai, e tempi di attivazione che si misurano in mesi, non in giorni.',
          'Il secondo è scegliere un software verticale sul vino ma pensato solo per un’area: un buon CRM che però non gestisce il team, o non si collega alle prenotazioni, costringe comunque a tenere in piedi uno strumento separato per tutto il resto.',
          'Il terzo è continuare ad aggiungere strumenti man mano che servono, uno alla volta: ogni nuovo strumento isolato aumenta il numero di posti dove un dato può disallinearsi, invece di ridurlo.',
        ],
      },
      {
        h2: 'Cosa deve avere davvero un software per cantine, frantoi e agriturismi',
        paragraphs: [
          'Un software completo per questo settore copre in un solo posto le aree che altrimenti restano separate: gestione di contatti e vendite, prenotazioni di visite e degustazioni, organizzazione del team con turni e task, e una vista d’insieme su come sta andando l’azienda — senza dover chiedere a tre persone diverse per avere un quadro completo.',
          'Altrettanto importante è che queste funzioni comunichino tra loro: un ordine che genera automaticamente un contatto nel CRM, una prenotazione che aggiorna il calendario di tutto il team, un follow-up che parte da solo dopo una visita, senza che qualcuno debba ricordarsene manualmente.',
        ],
      },
      {
        h2: 'Gestionale già pronto o su misura? Come decidere',
        paragraphs: [
          'Un gestionale già pronto ha senso quando i tuoi processi sono abbastanza standard da entrare nelle funzioni che il fornitore ha già costruito: se gestisci solo vendita diretta con listini semplici, spesso basta.',
          'Il su misura ha senso quando la tua cantina ha una combinazione specifica — wine club con regole proprie, listini differenziati per canale, un flusso di degustazioni particolare — che un prodotto standard non copre, o copre solo forzando il tuo modo di lavorare dentro il suo.',
          'Prima di firmare con un fornitore, qualunque esso sia, chiedi: i miei dati restano esportabili se cambio idea? Cosa succede se ho bisogno di una funzione che oggi non esiste nel prodotto? Chi mi forma il team e quanto costa l’assistenza dopo il primo anno?',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Nel caso concept di Tasting Flow — software su misura sviluppato per la tasting room di una cantina toscana, esempio illustrativo nel nostro portfolio e non un cliente reale — il problema di partenza era la gestione manuale delle prenotazioni di degustazione su un foglio di calcolo, senza alcun follow-up dopo la visita.',
          'La soluzione ha automatizzato prenotazioni, schede di degustazione per il sommelier e follow-up post-visita: il tipo di risultato che progettiamo quando prenotazioni e CRM lavorano insieme invece che su strumenti separati.',
        ],
      },
      {
        h2: 'Domande frequenti sul software per cantine',
        paragraphs: [
          '**Quanto tempo serve per passare da un altro software?** Dipende da quanti dati vanno migrati; con un progetto su misura, il primo pezzo utilizzabile arriva in genere prima della fine del progetto, non solo alla consegna finale.',
          '**Se cambio idea dopo qualche mese, i miei dati restano bloccati?** Non dovrebbero mai restarlo: chiedilo esplicitamente a qualunque fornitore prima di firmare.',
          '**Serve costruire tutto fin da subito?** No, si può iniziare dall’area che oggi fa perdere più tempo — tipicamente CRM o prenotazioni — e aggiungere il resto in un secondo momento.',
          '**Un gestionale già pronto può bastare per una piccola cantina?** Spesso sì, se i processi sono semplici. Conviene valutarlo prima di investire in qualcosa di su misura.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve sostituire tutti gli strumenti che usi oggi in un colpo solo. **Il punto di partenza più utile è capire quale singola area — vendite, prenotazioni o gestione del team — fa perdere più tempo oggi**, e partire da lì.',
          'Progettiamo CRM e gestionali su misura per cantine che vogliono smettere di gestire il lavoro tra strumenti sparsi. [Scopri il software su misura per cantine →](/software/vitivinicolo)',
        ],
      },
    ],
  },
  {
    slug: 'siti-web-per-agriturismi',
    title: 'Siti Web per Agriturismi: Come Trasformare i Visitatori in Prenotazioni',
    seoTitle: 'Siti Web per Agriturismi: Guida per Più Prenotazioni Online',
    excerpt:
      'Un sito per agriturismo non vende camere: vende un’esperienza. Ecco cosa deve avere davvero per trasformare chi naviga in chi prenota, senza passare da email e telefonate.',
    date: '2026-08-05',
    readingMinutes: 9,
    category: 'SEO',
    featuredImage: '/images/blog/siti-web-per-agriturismi.jpg',
    imageAlt: 'Terrazza di un agriturismo tra le colline, tavolo apparecchiato all’aperto',
    tags: ['Agriturismo', 'Siti Web', 'Booking Online', 'Hospitality'],
    keywords: ['siti web per agriturismi', 'web design agriturismi', 'sito web agriturismo', 'prenotazioni online agriturismo'],
    relatedSlugs: ['agriturismo-booking-online-prenotazioni', 'specialista-digitale-vs-web-agency-agroalimentare'],
    relatedLinks: [
      { href: '/servizi/siti-web-contatti', label: 'Servizio: Siti web che generano contatti' },
      { href: '/settori/wine-hospitality-agriturismi', label: 'Settore Wine Hospitality & Agriturismi' },
      { href: '/software/hospitality', label: 'Software su misura per agriturismi' },
      { href: '/portfolio/podere-la-vite', label: 'Case study concept: Podere La Vite' },
    ],
    body: [
      {
        h2: 'Perché un sito per agriturismo non vende camere, vende un’esperienza',
        paragraphs: [
          'Chi cerca "agriturismo [zona]" raramente sta solo confrontando prezzi per notte. Sta decidendo se quel posto merita il weekend che ha in testa — colline, silenzio, una cena diversa dal solito. Un sito che si limita a elencare camere e servizi, come farebbe un hotel qualsiasi, non risponde a questa domanda.',
          '**Il compito del sito non è informare, è far immaginare**: mostrare cosa si vive lì, non solo cosa si affitta. Solo dopo aver comunicato questo ha senso mostrare disponibilità e prezzo.',
          'Un template generico da hotel comunica esattamente il contrario — camera, prezzo, prenota — senza lasciare spazio al racconto di cosa rende quell’agriturismo diverso da un altro a pochi chilometri di distanza.',
        ],
      },
      {
        h2: 'Gli errori che tengono le prenotazioni al telefono invece che online',
        paragraphs: [
          'Il primo errore è non avere affatto una prenotazione diretta online: chi visita il sito la sera, incuriosito, deve aspettare il giorno dopo una risposta via email — e nel frattempo spesso prenota altrove, dove può farlo subito.',
          'Il secondo è usare un template pensato per hotel generici, che comunica solo camere e prezzo senza lasciare spazio al racconto dell’esperienza: la colazione fatta in casa, il silenzio della sera, la vista che cambia con la luce.',
          'Il terzo è affidarsi a un sito lento o non pensato per il mobile: **la maggior parte di chi cerca un agriturismo lo fa da telefono, spesso di sera**, e un sito scomodo da questo dispositivo perde la prenotazione prima ancora che arrivi al calendario.',
          'Il quarto è vendere solo l’alloggio, senza integrare le esperienze — cene, degustazioni, escursioni — che spesso hanno un margine più alto delle camere stesse e che un ospite già convinto è ben disposto ad aggiungere.',
        ],
      },
      {
        h2: 'Cosa deve avere davvero il sito, oltre alle foto delle camere',
        paragraphs: [
          'Serve una prima schermata che comunichi l’atmosfera prima dei dettagli tecnici: un’immagine o un breve video che dia l’idea di cosa si vive lì, non l’elenco dei servizi. Serve poi un racconto autentico di chi gestisce il posto — la storia, il territorio, cosa rende quell’agriturismo diverso — perché chi prenota un’esperienza vuole sapere con chi ha a che fare.',
          'Serve un calendario di disponibilità visibile e aggiornato, con un prezzo trasparente per notte, e la possibilità di prenotare e pagare direttamente, senza dover scrivere per sapere se ci sono ancora posti.',
          'Serve infine la possibilità di aggiungere esperienze durante la prenotazione — una cena, una degustazione, un’escursione — proposte al momento giusto, non nascoste in una pagina separata che quasi nessuno visita.',
        ],
      },
      {
        h2: 'Come funziona un percorso di prenotazione che non perde l’ospite',
        paragraphs: [
          'Chi arriva sul sito la sera, magari da mobile, deve poter fare tutto senza uscire dal sito: vedere la disponibilità reale per le date che ha in mente, capire subito cosa è incluso nel prezzo, e prenotare in pochi passaggi.',
          'Dopo la prenotazione, una comunicazione automatica — non manuale — fa la differenza tra un ospite che arriva informato e uno che scrive dieci messaggi nei giorni prima: informazioni sul check-in, cosa portare, cosa aspettarsi dal soggiorno.',
          'Nel caso concept di Podere La Vite — agriturismo toscano con 8 camere e ristorazione, esempio illustrativo nel nostro portfolio e non un cliente reale — il problema di partenza era un sito su template generico, con prenotazioni gestite solo per telefono. La soluzione ha unito un sito che racconta l’esperienza per sequenza (colazione, degustazione, cena, pernottamento) con un booking engine collegato anche a Booking.com e Airbnb, portando a un aumento del 35% nell’occupazione delle camere e del 50% nelle prenotazioni di cena dirette.',
        ],
      },
      {
        h2: 'Perché conviene vendere anche esperienze, non solo l’alloggio',
        paragraphs: [
          'Le esperienze — cene a tema, degustazioni, escursioni guidate — hanno spesso un margine più alto delle camere, e un ospite che ha già deciso di prenotare è nella posizione migliore per accettare di aggiungerle, se proposte al momento giusto nel percorso di prenotazione, non dopo con un’email separata che raramente viene letta.',
          'Questo richiede che il sito tratti le esperienze come un prodotto vero, con foto, descrizione e prezzo, non come una nota a piè di pagina nella pagina "chi siamo".',
        ],
      },
      {
        h2: 'Quanto costa un sito per agriturismo e come valutare se si ripaga',
        paragraphs: [
          'Anche qui il costo varia in base a cosa deve fare davvero: un sito vetrina con form di contatto costa meno di un sito con booking engine integrato, sincronizzazione con OTA come Booking.com e Airbnb, e vendita di esperienze. Diffida di chi promette una cifra fissa prima di aver capito cosa ti serve davvero, ed è ancora più prudente diffidare di chi promette percentuali di crescita garantite in anticipo.',
          'Il modo corretto di valutare l’investimento non è una percentuale astratta, ma un confronto concreto: quante richieste oggi si perdono perché non c’è modo di prenotare subito, e quanto valgono le notti che restano vuote per mancanza di visibilità online.',
          'Un sito che comunica bene l’esperienza ma non permette di prenotare direttamente lascia sul tavolo esattamente le prenotazioni che qualcuno decide di fare la sera, d’impulso — il momento in cui la decisione va colta, non rimandata a un’email il giorno dopo.',
        ],
      },
      {
        h2: 'Domande frequenti sui siti web per agriturismi',
        paragraphs: [
          '**Posso mantenere Booking.com e Airbnb insieme a un booking diretto sul sito?** Sì, spesso ha senso mantenerli come canali aggiuntivi mentre cresce quello diretto, che ha il margine più alto perché non paga commissioni.',
          '**Serve vendere anche esperienze fin dal primo giorno, o si può aggiungere dopo?** Si può aggiungere in un secondo momento: il punto di partenza più utile è avere un booking diretto funzionante per le camere, poi ampliare.',
          '**Quanto tempo serve per vedere i primi risultati?** Le prime prenotazioni dirette spesso arrivano già nelle prime settimane se il sito viene promosso; il posizionamento organico su Google richiede invece alcuni mesi.',
          '**Cosa succede alle prenotazioni già gestite su Booking.com durante il passaggio al nuovo sito?** Restano attive: il nuovo sito si aggiunge come canale, non sostituisce le prenotazioni già in corso sulle altre piattaforme.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve costruire tutto insieme. **Il primo passo è avere un booking diretto funzionante per le camere**, con calendario e prezzo visibili: è la base su cui poi si aggiungono esperienze, sincronizzazione con le OTA e comunicazione automatica.',
          'Progettiamo siti per agriturismi pensati per trasformare chi naviga in chi prenota, non solo per mostrare belle foto. [Scopri il servizio →](/servizi/siti-web-contatti)',
        ],
      },
    ],
  },
  {
    slug: 'software-per-agriturismi',
    title: 'Software per Agriturismi: Come Scegliere (o Costruire) Quello Giusto',
    seoTitle: 'Software per Agriturismi: Guida alla Scelta del Gestionale',
    excerpt:
      'Un software di sole prenotazioni non basta se poi CRM, team ed email restano su strumenti separati. Ecco cosa cercare in un gestionale pensato per chi vende esperienze, non solo camere, e quando conviene costruirlo su misura.',
    date: '2026-08-05',
    readingMinutes: 9,
    category: 'Agribusiness AI',
    featuredImage: '/images/blog/software-per-agriturismi.jpg',
    imageAlt: 'Dashboard di gestione prenotazioni per un agriturismo',
    tags: ['Software', 'Agriturismo', 'CRM', 'Gestionale'],
    keywords: ['software per agriturismi', 'crm per agriturismi', 'gestionale agriturismi', 'pms agriturismi'],
    relatedSlugs: ['siti-web-per-agriturismi', 'software-per-cantine'],
    relatedLinks: [
      { href: '/software/hospitality', label: 'Software su misura per agriturismi' },
      { href: '/software', label: 'Software su misura per l’agroalimentare' },
      { href: '/portfolio/podere-la-vite', label: 'Case study concept: Podere La Vite' },
    ],
    body: [
      {
        h2: 'Perché un software di sole prenotazioni non basta a un agriturismo',
        paragraphs: [
          'Un agriturismo non vende solo notti in camera: vende colazioni fatte in casa, cene, degustazioni, escursioni. Un software pensato solo per gestire il calendario delle camere — un PMS generico da hotel — tratta tutto questo come un dettaglio, non come parte del prodotto.',
          'Il risultato è che le prenotazioni restano isolate dal resto: nessun modo semplice per sapere chi ha già soggiornato, cosa ha apprezzato, chi è pronto per tornare. Ogni area — booking, contatti, team — finisce su uno strumento diverso, e nessuno parla con gli altri.',
          '**Il problema non è la mancanza di software, è la mancanza di una piattaforma che li unisca.**',
        ],
      },
      {
        h2: 'Gli errori più comuni nella scelta del software',
        paragraphs: [
          'Il primo errore è scegliere un PMS pensato per hotel o case vacanza generiche: gestisce bene il calendario delle camere, ma non ha modo di proporre un’esperienza durante la prenotazione, né di distinguere un ospite di passaggio da uno che torna ogni anno.',
          'Il secondo è affidarsi a un semplice channel manager, che sincronizza la disponibilità tra Airbnb, Booking e simili, pensando che basti: risolve il problema dell’overbooking, ma non gestisce CRM, team o automazioni, che restano comunque su altri strumenti.',
          'Il terzo è scegliere un ERP pensato per grandi strutture alberghiere, con una complessità e un tempo di attivazione che un agriturismo con poche camere non userà mai davvero.',
        ],
      },
      {
        h2: 'Cosa deve avere davvero un software per agriturismi',
        paragraphs: [
          'Serve prima di tutto un motore di prenotazione che permetta di proporre esperienze — cene, degustazioni, escursioni — nello stesso percorso in cui l’ospite prenota la camera, non in una pagina separata che quasi nessuno visita.',
          'Serve un CRM che tenga traccia di ogni ospite — quando è stato, cosa ha prenotato, se è un cliente ricorrente — collegato direttamente alle prenotazioni, non su un foglio a parte. Serve anche una gestione del team che assegni i task legati a ogni soggiorno, chi prepara la camera e chi cucina la cena, senza doverlo coordinare a voce o su WhatsApp.',
          'Tutto questo ha senso solo se i moduli comunicano tra loro: una prenotazione che genera automaticamente il contatto nel CRM e i task per il team, non tre inserimenti manuali separati.',
        ],
      },
      {
        h2: 'Gestionale già pronto o su misura? Come decidere',
        paragraphs: [
          'Un PMS già pronto ha senso quando basta gestire camere e disponibilità in modo standard, senza esperienze da vendere insieme al soggiorno e senza un team numeroso da coordinare.',
          'Il su misura ha senso quando vuoi proporre esperienze — cene, degustazioni, escursioni — nello stesso percorso di prenotazione della camera, o quando hai bisogno che booking, CRM ospiti e turni del team lavorino sugli stessi dati invece che su strumenti separati.',
          'Prima di scegliere un fornitore, qualunque esso sia, chiedi: posso vendere esperienze insieme alla camera o solo come nota a parte? Cosa succede ai miei dati ospiti se cambio strumento? Chi mi assiste dopo l’attivazione, e a che condizioni?',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Nel caso concept di Podere La Vite — agriturismo toscano con 8 camere e ristorazione, esempio illustrativo nel nostro portfolio e non un cliente reale — le prenotazioni erano gestite manualmente per telefono, con un template generico che non comunicava l’esperienza reale della struttura.',
          'La soluzione ha unito un booking engine collegato a Booking.com e Airbnb con automazioni WhatsApp per gli ospiti e un programma loyalty per chi torna, portando a un aumento del 35% nell’occupazione delle camere e del 50% nelle prenotazioni di cena dirette, oltre a un ingresso nel top 5% delle strutture su Booking.com.',
        ],
      },
      {
        h2: 'Domande frequenti sul software per agriturismi',
        paragraphs: [
          '**Posso continuare a usare Booking.com e Airbnb insieme al gestionale?** Sì, la sincronizzazione con i principali canali evita l’overbooking mentre il canale diretto cresce.',
          '**Quanto tempo serve per passare da un altro software?** Dipende da quanti dati vanno migrati; con un progetto su misura, il primo pezzo utilizzabile arriva in genere prima della fine del progetto.',
          '**Ha senso anche per un B&B con poche camere?** Dipende da quanto sono standard i tuoi processi: se un PMS già pronto copre già ciò che ti serve, spesso conviene partire da quello.',
          '**Serve formazione per il team?** Sì, va inclusa nel progetto fin dal preventivo; l’interfaccia è pensata per essere usata senza competenze tecniche.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve sostituire tutti gli strumenti che usi oggi in un colpo solo. **Il punto di partenza più utile è capire quale area — prenotazioni, contatti o gestione del team — fa perdere più tempo oggi**, e partire da lì.',
          'Progettiamo CRM e gestionali su misura per agriturismi che vogliono smettere di gestire il lavoro tra strumenti sparsi. [Scopri il software su misura per agriturismi →](/software/hospitality)',
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-per-frantoi',
    title: 'E-commerce per Frantoi: Come Vendere Olio Extravergine Online',
    seoTitle: 'E-commerce per Frantoi: Guida per Vendere Olio Online',
    excerpt:
      'Un e-commerce che vende solo la bottiglia singola lascia sul tavolo la parte più redditizia del mercato dell’olio online. Ecco cosa serve davvero per costruirne uno che converte.',
    date: '2026-08-05',
    readingMinutes: 8,
    category: 'Shopify',
    featuredImage: '/images/blog/ecommerce-per-frantoi.jpg',
    imageAlt: 'Bottiglie di olio extravergine pronte per la vendita online',
    tags: ['E-commerce', 'Olio', 'Frantoi', 'Shopify'],
    keywords: ['e-commerce per frantoi', 'e-commerce per oleifici', 'vendere olio online', 'e-commerce olio extravergine'],
    relatedSlugs: ['software-frantoi-gestione-ordini-crm', 'ecommerce-vino-margini-vendita-diretta'],
    relatedLinks: [
      { href: '/servizi/ecommerce-shopify', label: 'Servizio: E-commerce Shopify performanti' },
      { href: '/settori/oleifici-food-tech', label: 'Settore Oleifici & Food Tech' },
      { href: '/software/frantoi', label: 'Software su misura per frantoi' },
      { href: '/portfolio/frantoi-san-lorenzo', label: 'Case study concept: Frantoi San Lorenzo' },
    ],
    body: [
      {
        h2: 'Perché vendere solo la bottiglia singola lascia soldi sul tavolo',
        paragraphs: [
          'Un e-commerce che si limita a mostrare la bottiglia e il prezzo tratta l’olio come una merce qualsiasi, mentre chi cerca olio extravergine di qualità online sta valutando anche altro: la raccolta, la varietà, la provenienza, la certificazione DOP o biologica. Senza questo racconto, il prezzo resta l’unico criterio di scelta, e un prezzo più alto diventa difficile da giustificare.',
          '**Il margine più alto non sta nella singola bottiglia, sta in cosa si aggiunge intorno**: un formato regalo, un abbonamento con consegna ricorrente, un piccolo assortimento di varietà da provare.',
        ],
      },
      {
        h2: 'Gli errori più comuni nell’e-commerce olio',
        paragraphs: [
          'Il primo errore è affidarsi a una piattaforma lenta o datata: se il caricamento richiede diversi secondi, una parte dei visitatori se ne va prima ancora di vedere il catalogo, e questo pesa sulla conversione più di qualsiasi scelta grafica.',
          'Il secondo è vendere solo il prodotto singolo senza alcuna proposta di acquisto più ampia — un assortimento di varietà, un formato regalo, un abbonamento — che spesso ha margini migliori della bottiglia da sola.',
          'Il terzo è non fare nulla dopo l’acquisto: senza un follow-up, un cliente che ha appena scoperto un olio che gli è piaciuto non ha alcun promemoria quando la bottiglia sta per finire, e semplicemente ne compra un’altra altrove.',
          'Il quarto è limitare le spedizioni alla sola Italia, quando l’olio extravergine italiano di qualità ha una domanda reale anche fuori dai confini nazionali — un mercato che resta inesplorato se la logistica non è configurata per gestirlo.',
        ],
      },
      {
        h2: 'Cosa deve avere la scheda prodotto di un olio, oltre al prezzo',
        paragraphs: [
          'Serve indicare varietà, metodo e tempo di raccolta, ed eventuali certificazioni (DOP, biologico): sono le informazioni che permettono a chi non è un esperto di capire perché un olio costa più di un altro, e che sostituiscono le domande che farebbe di persona in un negozio specializzato.',
          'Serve anche un suggerimento d’uso concreto — con cosa si abbina meglio, per quali piatti — perché chi acquista un olio premium spesso non sa ancora come valorizzarlo, e questo dettaglio aiuta a giustificare il prezzo più di un elenco di caratteristiche tecniche.',
        ],
      },
      {
        h2: 'Assortimenti, abbonamenti e tracciabilità: dove sta il margine migliore',
        paragraphs: [
          'Un piccolo assortimento di varietà da provare insieme, o un formato regalo curato, aumenta il valore medio dell’ordine più facilmente di uno sconto sulla bottiglia singola, perché risponde a un’esigenza diversa — scoprire, regalare — non solo comprare.',
          'Un abbonamento con consegna ricorrente trasforma un acquisto isolato in una relazione che dura nel tempo, ed è particolarmente adatto a un prodotto come l’olio, che si consuma con regolarità e finisce in tempi prevedibili.',
          'La tracciabilità di lotto, tramite QR code sull’etichetta che mostra provenienza e data di raccolta, è un argomento di vendita in più oltre che una richiesta di trasparenza sempre più comune da chi acquista prodotti alimentari online.',
        ],
      },
      {
        h2: 'Un esempio dal settore',
        paragraphs: [
          'Nel caso concept di Frantoi San Lorenzo — oleificio storico in Umbria, esempio illustrativo nel nostro portfolio e non un cliente reale — l’80% del fatturato dipendeva da grossisti, con margini compressi e nessuna vendita diretta online.',
          'La soluzione ha unito un e-commerce con abbonamento ricorrente all’olio, un catalogo che racconta il processo di raccolta e frangitura, tracciabilità di lotto tramite QR code e un’integrazione con un marketplace di settore, portando a un aumento del 200% nella vendita diretta rispetto al periodo pre-digitale e oltre 300 clienti regolari nell’abbonamento.',
        ],
      },
      {
        h2: 'Quale piattaforma scegliere e quanto costa',
        paragraphs: [
          'Anche per l’olio vale lo stesso principio visto per il vino: una piattaforma e-commerce moderna converte meglio di un sito costruito su tecnologie datate, semplicemente perché è più veloce e più semplice da usare da mobile, dove avviene la maggior parte delle visite.',
          'Il costo varia in base a cosa deve fare l’e-commerce: un catalogo semplice con checkout costa meno di uno con abbonamento ricorrente, tracciabilità di lotto e integrazione con un marketplace di settore. Diffida di chi promette una percentuale di crescita fissa prima di aver capito cosa ti serve davvero.',
        ],
      },
      {
        h2: 'Domande frequenti sull’e-commerce per frantoi',
        paragraphs: [
          '**Ha senso vendere anche tramite un marketplace di settore, oltre al proprio e-commerce?** Può avere senso per la visibilità e per raggiungere clienti che altrimenti non si troverebbero, ma resta un canale complementare: il proprio e-commerce ha il margine più alto perché non paga commissioni.',
          '**Serve un abbonamento fin da subito?** No, si può partire da un catalogo con checkout funzionante e aggiungere l’abbonamento in un secondo momento, quando c’è già una base di clienti che riacquista.',
          '**Posso vendere all’estero senza problemi particolari?** In generale sì, ma le spedizioni internazionali vanno configurate correttamente per dazi e costi, che cambiano da paese a paese.',
          '**Quanto tempo serve per vedere i primi risultati?** Le prime vendite dirette spesso arrivano già nelle prime settimane se l’e-commerce viene promosso; il posizionamento organico su Google richiede invece più tempo.',
        ],
      },
      {
        h2: 'Da dove iniziare',
        paragraphs: [
          'Non serve costruire tutto insieme. **Il primo passo è avere un catalogo con schede prodotto complete e un checkout che funziona bene da mobile**: è la base su cui poi si costruiscono assortimenti, abbonamento e tracciabilità.',
          'Costruiamo e-commerce Shopify per frantoi e oleifici pensati per convertire, non solo per mostrare il catalogo. [Scopri il servizio →](/servizi/ecommerce-shopify)',
        ],
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function slugifyTag(tag) {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getAllTags() {
  const map = new Map();
  posts.forEach((p) => {
    (p.tags || []).forEach((tag) => {
      const slug = slugifyTag(tag);
      if (!map.has(slug)) map.set(slug, { tag, slug, count: 0 });
      map.get(slug).count += 1;
    });
  });
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export function getPostsByTagSlug(tagSlug) {
  return posts.filter((p) => (p.tags || []).some((t) => slugifyTag(t) === tagSlug));
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
