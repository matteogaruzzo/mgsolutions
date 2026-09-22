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
