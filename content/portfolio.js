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
