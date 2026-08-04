// ---------------------------------------------------------------------
// FONTE UNICA per i moduli di MG Business Suite. Ogni pagina o componente
// che elenca i moduli, il loro contenuto o la loro disponibilità per
// piano deve leggere da qui. Non duplicare questi dati altrove.
//
// availableInPlans elenca gli id dei piani (vedi software-plans.js) in cui
// il modulo è selezionabile. MG Control Tower aggrega i dati degli altri
// moduli attivi: per questo è incluso solo nel piano Ecosistema, dove
// tutti i moduli sono presenti insieme.
// ---------------------------------------------------------------------

export const SOFTWARE_MODULE_ORDER = [
  'lead-sales',
  'social-ai',
  'booking-experience',
  'staff-operations',
  'control-tower',
];

export const SOFTWARE_MODULES = [
  {
    slug: 'lead-sales',
    name: 'MG Lead & Sales',
    icon: 'target',
    heroImage: '/images/software/lead-sales-hero.jpg',
    tagline: 'CRM semplificato per agroalimentare e hospitality',
    problemSolved: 'Contatti e opportunità sparsi tra email, agende e WhatsApp, difficili da seguire.',
    resultForClient: 'Un unico archivio con follow-up automatici: riduce il rischio di perdere un contatto per dimenticanza.',
    whatItDoes:
      'CRM costruito specificamente per le esigenze del vostro settore. Niente complessità inutile, solo quello che serve.',
    narrative: [
      'Nella maggior parte delle cantine e delle aziende agroalimentari, i contatti commerciali vivono ovunque: email personali, agende cartacee, messaggi WhatsApp, fogli Excel passati di mano in mano. Il risultato è che qualcuno chiede un preventivo e resta senza risposta, semplicemente perché la richiesta si è persa.',
      'MG Lead & Sales centralizza ogni contatto — dal sito, dalle campagne, dai commerciali sul territorio — e lo segue lungo tutto il percorso, dalla prima richiesta alla vendita chiusa. Distingue un privato che chiede una degustazione da un distributore che valuta un ordine all’ingrosso, e tratta i due casi in modo diverso.',
      'Il team commerciale lavora su una pipeline unica, con promemoria che aiutano a non lasciare un’opportunità senza seguito.',
    ],
    useCases: ['Gestione contatti commerciali', 'Pipeline opportunità', 'Follow-up e promemoria'],
    featureCards: [
      { icon: 'target', title: 'Raccolta automatica contatti', body: 'Ogni richiesta dal sito, dalle campagne pubblicitarie e dai form finisce automaticamente in un unico posto.' },
      { icon: 'chart', title: 'Pipeline in tempo reale', body: 'Vedi lo stato di ogni opportunità, dal primo contatto alla vendita chiusa.' },
      { icon: 'compass', title: 'Segmentazione B2B e B2C', body: 'Distingue clienti privati, ristoranti, distributori e importatori.' },
      { icon: 'refresh', title: 'Follow-up e promemoria', body: 'Promemoria e messaggi di follow-up configurabili in base al processo aziendale.' },
      { icon: 'ai', title: 'Email generate con AI', body: 'L’AI propone testi di email e messaggi pronti da personalizzare e inviare.' },
      { icon: 'book', title: 'Report su contatti e vendite', body: 'Report periodici su contatti, preventivi e vendite.' },
    ],
    flow: [
      { title: 'Il contatto arriva', body: 'Da sito, campagne pubblicitarie, form o inserimento manuale del commerciale.' },
      { title: 'Segmentazione', body: 'Il sistema distingue privati, ristoranti, distributori, importatori.' },
      { title: 'Follow-up', body: 'Promemoria e messaggi aiutano a mantenere vivo ogni contatto.' },
      { title: 'Chiusura e storico', body: 'Ogni conversazione resta tracciata fino alla vendita, e oltre.' },
    ],
    caseStudy: {
      title: 'Da contatti sparsi su fogli Excel a una pipeline unica',
      narrative: 'Scenario tipico: un’azienda con più commerciali sul territorio gestiva le richieste su fogli separati, senza visibilità reale sullo stato delle trattative. Con Lead & Sales attivo, ogni richiesta — privato, ristorante o distributore — entra in un’unica pipeline segmentata, con promemoria di follow-up.',
      stats: [
        ['Pipeline unica', 'per contatti, preventivi e vendite'],
        ['Segmentazione automatica', 'privati, ristoranti, distributori'],
        ['Storico completo', 'di ogni conversazione'],
      ],
    },
    faqs: [
      { q: 'Sostituisce il CRM che uso già?', a: 'È pensato per sostituirlo con qualcosa di più specifico per il settore. Se preferisci integrarlo con uno strumento che già usi, è possibile con un’integrazione dedicata.' },
      { q: 'Posso gestire sia clienti privati che distributori nello stesso posto?', a: 'Sì: segmenta automaticamente privati, ristoranti, distributori e importatori, mantenendo un’unica pipeline.' },
      { q: 'Posso importare i contatti che ho già?', a: 'Sì, lo storico esistente viene importato in fase di attivazione.' },
      { q: 'In quali piani è incluso?', a: 'È uno dei moduli selezionabili in tutti e tre i piani: Essenziale, Crescita ed Ecosistema.' },
    ],
    features: [
      'Raccolta automatica dei contatti dal sito',
      'Tracciamento richieste di preventivo',
      'Contatti da campagne pubblicitarie',
      'Gestione contatti commerciali e distributori',
      'Pipeline delle opportunità (stato in tempo reale)',
      'Promemoria per i commerciali',
      'Follow-up',
      'Storico completo delle conversazioni',
      'Segmentazione B2B e B2C',
      'Generazione assistita di email e messaggi con AI',
      'Report su contatti, preventivi e vendite',
    ],
    benefits: [
      { title: 'Meno contatti persi', body: 'Tutti i contatti centralizzati in un unico archivio.' },
      { title: 'Follow-up puntuali', body: 'Promemoria automatici mantengono i contatti nel funnel.' },
      { title: 'Insight', body: 'Capisci quale cliente è B2B, quale privato, quale freddo.' },
    ],
    targetAudience: 'Cantine con più commerciali, frantoi che vendono sia diretta che B2B, agriturismi con prenotazioni e shop.',
    integratesWith: ['social-ai', 'booking-experience'],
    availableInPlans: ['essenziale', 'crescita', 'ecosistema'],
  },
  {
    slug: 'social-ai',
    name: 'MG Social AI',
    icon: 'chat',
    heroImage: '/images/software/social-ai-hero.jpg',
    tagline: 'Automazione intelligente dei social media per il tuo brand',
    problemSolved: 'Postare sui social con costanza richiede tempo che spesso non c’è.',
    resultForClient: 'Contenuti proposti dall’AI, tu approvi prima che escano: presenza più costante senza assumere nessuno.',
    whatItDoes: 'Pianifica, genera e organizza i contenuti social mantenendo il controllo umano prima della pubblicazione.',
    narrative: [
      'Postare sui social ogni giorno, con costanza e senza perdere la voce del brand, richiede tempo che in un’azienda agroalimentare spesso non c’è. Il risultato è quasi sempre lo stesso: si pubblica a scatti, quando capita.',
      'MG Social AI prende in carico la parte che consuma più tempo — capire cosa dire, scriverlo, disegnarlo, programmarlo — e lascia a te la parte che conta: decidere se un contenuto rappresenta davvero l’azienda. L’AI studia il tono di voce del brand, propone testi e grafiche coerenti, li mette in calendario. Tu approvi, modifichi o rifiuti prima che escano.',
    ],
    useCases: ['Pianificazione contenuti social', 'Generazione con AI', 'Revisione e approvazione umana'],
    featureCards: [
      { icon: 'ai', title: 'Analisi del brand', body: 'Capisce il tono del tuo brand da sito, foto e materiali esistenti, e lo mantiene coerente in ogni post.' },
      { icon: 'calendar', title: 'Calendario editoriale', body: 'Pianifica le pubblicazioni in un calendario sempre aggiornato.' },
      { icon: 'palette', title: 'Contenuti e grafiche brandizzate', body: 'Genera testi e template grafici coerenti con la tua identità visiva.' },
      { icon: 'lock', title: 'Approvazione prima della pubblicazione', body: 'Nessun contenuto esce senza il tuo via libera.' },
      { icon: 'compass', title: 'Pubblicazione multi-canale', body: 'Pubblica sui canali social collegati.' },
      { icon: 'chart', title: 'Report periodico', body: 'Un report ti dice cosa ha funzionato e cosa no.' },
    ],
    flow: [
      { title: 'Analisi del brand', body: 'L’AI studia sito, foto e tono di voce esistente per capire come parla l’azienda.' },
      { title: 'Generazione contenuti', body: 'Testi, grafiche e calendario editoriale proposti periodicamente.' },
      { title: 'Approvazione cliente', body: 'Ricevi la proposta, approvi o modifichi.' },
      { title: 'Pubblicazione e report', body: 'Il software pubblica sui canali scelti e misura i risultati.' },
    ],
    caseStudy: {
      title: 'Da pubblicazioni saltuarie a un calendario editoriale costante',
      narrative: 'Scenario tipico: un’azienda agroalimentare senza risorse dedicate ai social pubblicava in modo saltuario e senza una strategia riconoscibile. Con MG Social AI attivo, il calendario editoriale si riempie in automatico e la gestione si riduce a poche approvazioni.',
      stats: [
        ['Calendario automatico', 'contenuti pianificati in anticipo'],
        ['Tono coerente', 'su tutti i canali collegati'],
        ['Poche approvazioni', 'per mantenere il controllo'],
      ],
    },
    faqs: [
      { q: 'Chi decide cosa viene pubblicato?', a: 'Sempre tu. L’AI propone, tu approvi prima che esca. Niente viene pubblicato senza il tuo via libera.' },
      { q: 'Serve fornire materiale fotografico?', a: 'Aiuta, ma non è obbligatorio: l’AI può lavorare anche con i materiali che l’azienda già ha o con template grafici brandizzati.' },
      { q: 'Su quali canali pubblica?', a: 'I canali supportati vengono definiti in fase di configurazione, in base alle piattaforme che usa l’azienda.' },
      { q: 'In quali piani è incluso?', a: 'È uno dei moduli selezionabili nei piani Crescita ed Ecosistema.' },
    ],
    features: [
      'Analisi dell’identità e del tono del brand',
      'Calendario editoriale',
      'Generazione di testi e contenuti AI',
      'Template grafici brandizzati',
      'Approvazione del cliente prima della pubblicazione',
      'Pubblicazione sui canali collegati',
      'Report periodico su contenuti e risultati',
      'Archivio delle idee e dei contenuti pubblicati',
    ],
    benefits: [
      { title: 'Risparmio di tempo', body: 'Meno ore dedicate alla gestione manuale dei social.' },
      { title: 'Coerenza brand', body: 'Tono costante su tutti i canali.' },
      { title: 'Tracciamento', body: 'Vedi cosa funziona e cosa no.' },
    ],
    targetAudience: 'Cantine, agriturismi, ristoranti rurali, produttori agroalimentari che vogliono crescere online senza dedicare una persona full-time ai social.',
    integratesWith: ['lead-sales'],
    availableInPlans: ['crescita', 'ecosistema'],
  },
  {
    slug: 'booking-experience',
    name: 'MG Booking & Experience',
    icon: 'calendar',
    heroImage: '/images/software/booking-experience-hero.jpg',
    tagline: 'Da prenotazione a recensione: l’intera esperienza cliente in un posto solo',
    problemSolved: 'Prenotazioni gestite solo a telefono, con calendario confuso e richieste perse fuori orario.',
    resultForClient: 'Calendario online: il cliente prenota da solo, tu vedi tutto in un posto centralizzato.',
    whatItDoes: 'Sistema di prenotazione, upselling e recensioni, pensato per esperienze agroalimentari.',
    narrative: [
      'Ogni prenotazione gestita a telefono è un momento in cui il cliente può cambiare idea, o semplicemente non riuscire a chiamare in orario d’ufficio.',
      'MG Booking & Experience copre l’intero percorso del cliente, dalla prenotazione alla recensione finale. La disponibilità è sempre aggiornata, la caparra riduce le disdette dell’ultimo minuto, e nei momenti giusti il sistema propone upgrade e pacchetti pertinenti.',
    ],
    useCases: ['Prenotazioni degustazioni e visite', 'Prenotazioni soggiorni', 'Conferme e promemoria automatici'],
    featureCards: [
      { icon: 'calendar', title: 'Prenotazione online', body: 'Degustazioni, visite, tavoli ed esperienze prenotabili senza una telefonata.' },
      { icon: 'lock', title: 'Pagamento caparra', body: 'Riduce le assenze con il pagamento di una caparra al momento della prenotazione.' },
      { icon: 'chat', title: 'Conferme e promemoria', body: 'Messaggi di conferma e un promemoria prima della visita.' },
      { icon: 'cart', title: 'Upselling durante la prenotazione', body: 'Propone pacchetti e upgrade pertinenti nel momento giusto.' },
      { icon: 'book', title: 'Richiesta recensione', body: 'Dopo la visita, chiede automaticamente una recensione.' },
      { icon: 'refresh', title: 'Sincronizzazione con sito e CRM', body: 'Ogni prenotazione si sincronizza con il sito e con Lead & Sales.' },
    ],
    flow: [
      { title: 'Prenotazione e caparra', body: 'Il cliente prenota online e versa una caparra.' },
      { title: 'Promemoria', body: 'Un messaggio conferma l’appuntamento prima della visita.' },
      { title: 'Upselling in visita', body: 'Prima o durante l’esperienza, propone pacchetti e upgrade pertinenti.' },
      { title: 'Recensione e follow-up', body: 'Dopo la visita, chiede una recensione e mantiene il contatto.' },
    ],
    caseStudy: {
      title: 'Prenotazioni sempre aperte, meno richieste perse fuori orario',
      narrative: 'Scenario tipico: un agriturismo con prenotazioni gestite solo via telefono negli orari d’ufficio perdeva richieste arrivate la sera o nel weekend. Con Booking & Experience attivo, le prenotazioni restano aperte online, la caparra riduce le assenze dell’ultimo minuto.',
      stats: [
        ['Aperto 24/7', 'prenotazioni online senza telefonata'],
        ['Caparra integrata', 'per ridurre le disdette'],
        ['Recensione automatica', 'richiesta dopo la visita'],
      ],
    },
    faqs: [
      { q: 'Come funziona il pagamento della caparra?', a: 'Il cliente versa una caparra al momento della prenotazione tramite i metodi di pagamento collegati; le condizioni di rimborso le decidete voi in fase di attivazione.' },
      { q: 'Posso gestire anche i tavoli del ristorante, non solo le degustazioni?', a: 'Sì, il software copre prenotazioni di degustazioni, visite, tavoli ed esperienze in generale.' },
      { q: 'Cosa succede se un cliente cancella dopo aver pagato la caparra?', a: 'Le condizioni di rimborso le impostate voi: dalla caparra non rimborsabile al rimborso parziale entro una scadenza.' },
      { q: 'In quali piani è incluso?', a: 'È uno dei moduli selezionabili nei piani Crescita ed Ecosistema.' },
    ],
    features: [
      'Prenotazioni di degustazioni, visite, tavoli, esperienze',
      'Gestione disponibilità e calendario',
      'Pagamento di caparre',
      'Conferme automatiche',
      'Promemoria automatici',
      'Gestione cancellazioni',
      'Vendita di pacchetti (upgrade) durante la prenotazione',
      'Richiesta automatica di recensione dopo la visita',
      'Raccolta dati cliente',
      'Sincronizzazione con sito e CRM',
    ],
    benefits: [
      { title: 'Meno richieste perse', body: 'Prenotazioni accettate anche fuori orario.' },
      { title: 'Presenze più affidabili', body: 'Promemoria e caparra riducono le assenze.' },
      { title: 'Vendite aggiuntive', body: 'Upselling proposto nel momento giusto.' },
      { title: 'Meno lavoro amministrativo', body: 'Conferme e promemoria automatici.' },
    ],
    targetAudience: 'Cantine con enoturismo, agriturismi, wine hotel, ristoranti rurali, strutture ricettive.',
    integratesWith: ['lead-sales'],
    availableInPlans: ['crescita', 'ecosistema'],
  },
  {
    slug: 'staff-operations',
    name: 'MG Staff & Operations',
    icon: 'clock',
    heroImage: '/images/software/staff-operations-hero.jpg',
    tagline: 'Gestione operativa semplificata per team, turni e task',
    problemSolved: 'Turni e checklist gestiti a voce o su WhatsApp, con dimenticanze nei periodi di picco.',
    resultForClient: 'Turni, task e checklist in un posto solo: il team sa cosa fare senza riunioni continue.',
    whatItDoes: 'Gestione operativa per aziende agroalimentari e ricettive con personale. Non è un software HR generico.',
    narrative: [
      'Con un team stagionale che cresce e si riduce secondo la vendemmia o l’alta stagione, capire chi lavora quando e chi è disponibile per una sostituzione diventa complicato in fretta.',
      'MG Staff & Operations organizza turni, ferie e comunicazioni interne in un unico posto, pensato per aziende agroalimentari e ricettive con personale operativo. Le checklist di apertura e chiusura aiutano a non saltare i passaggi critici, anche quando il turno è gestito da chi è meno esperto.',
      'Il software resta volutamente fuori da buste paga, contributi e decisioni automatiche sul personale: attività che lasciamo a strumenti e professionisti competenti.',
    ],
    useCases: ['Pianificazione turni', 'Assegnazione task e checklist', 'Comunicazioni interne al team'],
    featureCards: [
      { icon: 'clock', title: 'Gestione turni', body: 'Pianifica i turni del team e sa sempre chi c’è e chi è in ferie o malattia.' },
      { icon: 'calendar', title: 'Richieste ferie e permessi', body: 'Il personale richiede ferie e permessi dall’app.' },
      { icon: 'pin', title: 'Timbrature', body: 'Accesso e uscita tracciati, con storico consultabile.' },
      { icon: 'book', title: 'Checklist apertura e chiusura', body: 'Checklist su misura per vigneto, cantina o agriturismo.' },
      { icon: 'gear', title: 'Task board', body: 'Assegna attività al team e segui lo stato di ognuna.' },
      { icon: 'lock', title: 'Documenti e scadenze', body: 'Certificati, formazioni e scadenze tracciati automaticamente.' },
    ],
    flow: [
      { title: 'Turni pianificati', body: 'Il team vede chi lavora, quando, e chi è disponibile per una sostituzione.' },
      { title: 'Checklist quotidiane', body: 'Apertura e chiusura seguono una checklist su misura.' },
      { title: 'Task assegnati', body: 'Le attività vengono assegnate e tracciate su una task board condivisa.' },
      { title: 'Documentazione', body: 'Timbrature, scadenze e formazioni restano storicizzate.' },
    ],
    caseStudy: {
      title: 'Meno confusione sui turni, checklist più affidabili',
      narrative: 'Scenario tipico: un’azienda con team tra vigneto, cantina e accoglienza gestiva turni e checklist a voce o su WhatsApp, con dimenticanze nei periodi di picco. Con Staff & Operations attivo, ogni turno è pianificato e ogni checklist tracciata.',
      stats: [
        ['Turni pianificati', 'sempre visibili al team'],
        ['Checklist tracciate', 'per apertura e chiusura'],
        ['Documentazione centralizzata', 'per scadenze e formazioni'],
      ],
    },
    faqs: [
      { q: 'Gestisce anche le buste paga?', a: 'No, volutamente. Buste paga, contributi e decisioni automatiche su assunzioni/licenziamenti restano fuori: le lasciamo a strumenti e professionisti dedicati.' },
      { q: 'È adatto anche a un piccolo team?', a: 'Sì, ma il vantaggio si sente soprattutto quando coordinare turni e checklist a voce diventa difficile.' },
      { q: 'Serve installare qualcosa sui dispositivi del team?', a: 'No, si usa da browser o da un link diretto su smartphone, senza installazioni.' },
      { q: 'In quali piani è incluso?', a: 'È uno dei moduli selezionabili nei piani Crescita ed Ecosistema.' },
    ],
    features: [
      'Gestione turni',
      'Disponibilità (chi c’è, chi è assente)',
      'Richieste ferie e permessi',
      'Gestione sostituzioni',
      'Timbrature (accesso/uscita)',
      'Comunicazioni interne',
      'Checklist di apertura e chiusura',
      'Assegnazione delle attività (task board)',
      'Documenti e relative scadenze',
      'Tracciamento formazione interna',
      'Storico completo delle attività completate',
    ],
    excludedForCompliance: [
      'Elaborazione delle buste paga',
      'Calcolo contributivo',
      'Selezione automatica del personale',
      'Valutazione automatica delle performance',
      'Decisioni automatiche su assunzioni/licenziamenti',
    ],
    excludedNote: 'Queste attività rientrano in categorie ad alto rischio dell’AI Act e restano volutamente fuori scope.',
    benefits: [
      { title: 'Organizzazione', body: 'Meno confusione su chi lavora quando.' },
      { title: 'Checklist affidabili', body: 'I passaggi critici restano tracciati.' },
      { title: 'Comunicazione', body: 'Il team sa cosa fare senza riunioni continue.' },
      { title: 'Documentazione pronta', body: 'Storico utile in caso di controllo.' },
    ],
    targetAudience: 'Aziende con team stagionale o strutturato (cantina, agriturismo, frantoio).',
    integratesWith: ['control-tower'],
    availableInPlans: ['crescita', 'ecosistema'],
  },
  {
    slug: 'control-tower',
    name: 'MG Control Tower',
    icon: 'chart',
    heroImage: '/images/software/control-tower-hero.jpg',
    tagline: 'La dashboard direzionale: tutto in un unico sguardo',
    problemSolved: 'Dati sparsi tra i vari strumenti: bisogna chiedere a più persone per sapere come va il mese.',
    resultForClient: 'Una dashboard che aggrega i dati degli altri moduli attivi.',
    whatItDoes: 'Dashboard direzionale che aggrega i dati degli altri moduli della suite attivi e del sito.',
    narrative: [
      'Chi guida un’azienda strutturata spesso deve chiedere a più persone diverse per sapere come sta andando il mese. I dati esistono, ma sono sparsi.',
      'MG Control Tower non è un modulo che funziona da solo: aggrega in un’unica dashboard i dati generati dagli altri moduli della suite già attivi (Lead & Sales, Booking, Social AI, Staff & Operations) e dal sito. Per questo è incluso solo nel piano Ecosistema, dove tutti i moduli sono presenti.',
      'Il report AI settimanale interpreta i numeri — segnala cali, colli di bottiglia, opportunità — in un linguaggio diretto, pensato per chi deve decidere.',
    ],
    useCases: ['Dashboard direzionale', 'Report automatizzati', 'Alert su metriche chiave'],
    featureCards: [
      { icon: 'chart', title: 'Vista unificata', body: 'Visite al sito, prenotazioni, vendite e social in un’unica dashboard.' },
      { icon: 'refresh', title: 'Confronti nel tempo', body: 'Confronta settimana su settimana, mese su mese, anno su anno.' },
      { icon: 'target', title: 'Alert automatici', body: 'Un avviso arriva quando una metrica importante cambia in modo significativo.' },
      { icon: 'ai', title: 'Report AI settimanale', body: 'Un’analisi in linguaggio semplice, con indicazioni pratiche.' },
      { icon: 'compass', title: 'Pipeline commerciale in vista', body: 'Le opportunità di vendita e la loro conversione, visibili a livello direzionale.' },
      { icon: 'clock', title: 'Attività del personale', body: 'Dati collegati agli altri moduli della suite, quando attivi.' },
    ],
    flow: [
      { title: 'I dati arrivano', body: 'Ogni modulo attivo e il sito alimentano automaticamente la dashboard.' },
      { title: 'Confronto nel tempo', body: 'I numeri si leggono in prospettiva: settimana, mese, anno.' },
      { title: 'Alert automatico', body: 'Se una metrica importante cambia, arriva un avviso.' },
      { title: 'Report AI settimanale', body: 'Un’analisi in linguaggio semplice, con un suggerimento pratico.' },
    ],
    caseStudy: {
      title: 'Un report che aiuta a decidere, non solo a osservare',
      narrative: 'Esempio illustrativo del tipo di report generato: “Questa settimana le visite al sito sono aumentate, ma le prenotazioni sono diminuite. La pagina degustazioni registra molte uscite: si consiglia di semplificare il form di prenotazione.” Il testo è un esempio del formato, non un dato reale.',
      stats: [
        ['Dashboard unica', 'per tutti i moduli attivi'],
        ['Report AI settimanale', 'in linguaggio semplice'],
        ['Alert automatici', 'su variazioni significative'],
      ],
    },
    faqs: [
      { q: 'Control Tower funziona da solo, senza altri moduli attivi?', a: 'No. Control Tower aggrega i dati degli altri moduli della suite: funziona quando almeno un altro modulo è attivo (Lead & Sales, Booking, Social AI o Staff & Operations). Per questo è incluso solo nel piano Ecosistema.' },
      { q: 'Chi riceve il report AI settimanale?', a: 'Le persone che indichi in fase di attivazione, di norma il titolare o il direttore.' },
      { q: 'Posso personalizzare quali metriche vedere per prime?', a: 'Sì, la dashboard si configura in fase di attivazione in base alle priorità dell’azienda.' },
      { q: 'In quali piani è incluso?', a: 'Solo nel piano Ecosistema, perché richiede altri moduli attivi da aggregare.' },
    ],
    features: [
      'Visite al sito (andamento)',
      'Richieste ricevute (sorgente, stato)',
      'Prenotazioni (confermate, cancellate, in sospeso)',
      'Risultati social (reach, engagement, follower)',
      'Opportunità commerciali (pipeline, conversione)',
      'Attività del personale (collegata agli altri moduli)',
      'Confronti tra periodi',
      'Alert automatici',
      'Report AI settimanale',
    ],
    benefits: [
      { title: 'Visibilità', body: 'Sai come va l’azienda senza chiedere a più persone.' },
      { title: 'Decisioni informate', body: 'Basate su dati aggregati, non su intuito.' },
      { title: 'Reattività', body: 'Gli alert segnalano i cambiamenti prima che diventino un problema.' },
    ],
    targetAudience: 'Direttori, founder, manager di aziende strutturate con più moduli della suite attivi.',
    integratesWith: ['staff-operations'],
    availableInPlans: ['ecosistema'],
  },
];

export function getModule(slug) {
  return SOFTWARE_MODULES.find((m) => m.slug === slug);
}

export function getAllModules() {
  return SOFTWARE_MODULE_ORDER.map((slug) => getModule(slug)).filter(Boolean);
}

export function getModulesByPlan(planId) {
  return SOFTWARE_MODULES.filter((m) => m.availableInPlans.includes(planId));
}
