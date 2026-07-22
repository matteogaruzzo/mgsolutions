# MG Solutions — Audit strategico e proposta di posizionamento

Documento di lavoro. Nessuna modifica al sito è stata effettuata: questo file risponde punto per punto alle richieste delle sezioni 15 e 29 del brief, basandosi sul contenuto **reale** oggi in `lib/data.js` e nelle pagine `app/*`, non su ipotesi.

Indice rapido: 1. Diagnosi critica · 2. Contraddizioni · 3. Posizionamento · 4. Value proposition · 5. Hero (3 opzioni) · 6. Architettura offerta · 7. Sitemap · 8. Home · 9. Template Settore · 10. Template Servizio · 11. Pagina Software · 12. Pagina Continuità · 13. Pagina Chi Sono · 14. Stack pubblico · 15. Sezione AI · 16. Metodologia · 17. Experience & Media strategy · 18. Media checklist · 19. Performance budget · 20. Piano editoriale · 21. Primi 10 articoli · 22. Roadmap · 23. Decisioni richieste a te

---

## 1. Diagnosi critica del posizionamento (stato attuale reale)

Il sito attuale (Next.js, `lib/data.js` come CMS statico) è **onesto e già scritto bene frase per frase**, ma è un sito "di servizi", non ancora un sito "di sistema". Punto per punto:

- **La frase guida esiste già ed è già in home** ("Davanti c'è una persona. Dietro, lavora la macchina.") — non va inventata, va solo estesa oltre l'hero: oggi vive solo lì e in Chi Sono, da nessun'altra parte.
- **Matteo è presentato come freelance**, non come guida di un sistema. Il claim "Un freelance che ci mette la faccia" (H1 di Chi Sono) è in diretta tensione con l'ambizione del brief di far percepire MG Solutions come struttura capace di reggere progetti importanti, non un "one-man-band con due amici".
- **I servizi sono 6 card piatte allo stesso livello** (Software AI, Shopify, Web, Restyling, AI integration, Consulenza). Non esiste gerarchia, non esiste raggruppamento in pilastri, e soprattutto **manca completamente il terzo pilastro** (SEO/GEO/analytics/tracciamento/CRO continuativa) come categoria di offerta — oggi non è venduto né nominato da nessuna parte sul sito, se non come menzione en passant ("SEO tecnica" dentro il body di "Restyling").
- **I settori sono trattati come 4 opzioni equivalenti.** Nessuna gerarchia, nessuna priorità al vitivinicolo. La sezione home li presenta in ordine: vitivinicolo, ristorazione, servizi professionali, retail — un ordine che *implica* priorità solo per posizione, mai dichiarata.
- **Le pagine settore sono un template minimo** (hero + lista deliverable + un risultato + CTA): 4 blocchi contro i 10 richiesti dal brief. Non c'è spazio per problemi tipici, casi d'uso AI specifici, processo, case study, FAQ.
- **`/software` ha già prezzi pubblicati e un flusso di acquisto implicito** ("Richiedi accesso →", toggle mensile/annuale, "−2 mesi"), cioè il sito comunica un prodotto SaaS maturo e commercializzabile. Il brief chiede il contrario: distinguere disponibile / in sviluppo / su misura / prossimamente, e non fissare prezzi finché non definiamo la struttura dei piani. Questo è il punto di maggiore attrito tra "ciò che il sito dice oggi" e "ciò che è vero oggi" — va risolto per primo perché è una promessa commerciale in produzione.
- **Chi Sono non distingue le tre aree di competenza** (Commerce & Experience / Full-Stack & Integration / Applied AI & Automation) richieste dal brief: oggi è un blocco di testo + uno stack a lista puntata unica, senza gerarchia né spiegazione del "perché" di ogni tecnologia.
- **Il team è sotto-raccontato rispetto al brief.** Le bio attuali di De Pilla ("Integra strumenti AI nei processi digitali...") e Poponi ("Cerca opportunità commerciali...") sono più generiche e meno specifiche di quanto descritto nel brief (automazioni/workflow/progettazione sistemi AI per De Pilla; lead generation assistita da AI e strategia commerciale per Poponi).
- **Non esiste alcuna traccia di "continuità post-lancio"** (manutenzione, Care/Growth/AI&Scale) né di "Metodo" come pagina o sezione autonoma — il metodo non è raccontato da nessuna parte, solo implicito nel copy di Chi Sono ("Parli con chi costruisce").
- **Cosa invece è già solido e va preservato**: tono di voce (diretto, senza superlativi vuoti — coerente col brief §14), portfolio già onestamente etichettato con `concept: true/false` (nessun cliente inventato), blog già impostato con struttura SEO/GEO-ready e senza claim numerici inventati, componente `AgentField` in hero già coerente con l'idea "dietro lavora la macchina", identità visiva (mono/display type, palette ink/paper/forest/brass) già distintiva e non "template da agenzia".

**In sintesi**: non serve reinventare tono e identità visiva, che funzionano. Serve (a) risolvere il disallineamento tra prezzi già live e strategia di pricing non ancora definita, (b) introdurre i tre pilastri come architettura reale dell'offerta con pagine proprie, (c) dare priorità esplicita al vitivinicolo, (d) espandere Chi Sono/Settori/Software/Metodo/Continuità da "sezioni" a pagine complete.

---

## 2. Contraddizioni da risolvere (elenco puntuale)

| # | Contraddizione | Dove | Decisione richiesta |
|---|---|---|---|
| 1 | Prezzi software già pubblicati vs. "non fissare prezzi ora" | `/software`, `lib/data.js` | Vedi §23 — proposta: passare a "da definire in call" finché non approviamo la struttura piani (§11) |
| 2 | "Freelance" come frame identitario vs. ambizione di struttura | Chi Sono H1 | Sostituire il frame "freelance" con "referente diretto" (persona) + "team/infrastruttura" (macchina), senza mai dire "agenzia" |
| 3 | Nessun pilastro Growth Infrastructure venduto | `services` in `lib/data.js` | Aggiungere come terzo pilastro esplicito (§6) |
| 4 | Settori trattati come equivalenti | Home, `/settori` | Vitivinicolo come settore "featured" (posizione, spazio, eventuale sezione propria in home); gli altri restano paritari tra loro |
| 5 | Team sotto-descritto rispetto al brief | `lib/data.js` → `team` | Riscrivere le tre bio (proposta in §13) |
| 6 | Nessuna pagina Metodo / Continuità / MG Solutions-Team dedicata | Sitemap | Aggiungerle (§7) |
| 7 | Blog: rischio contenuti "di attualità" senza data di verifica | `posts` in `lib/data.js` | Introdurre i campi `publishedAt`, `verifiedAt`, `status` per ogni post futuro (§20) |
| 8 | Case study reali: solo 1 progetto su 4 non è "concept" | `projects` in `lib/data.js` | Non generare risultati numerici per "Il Ristorantino della Carne" finché Matteo non li conferma |

---

## 3. Posizionamento definitivo (proposta)

> **MG Solutions progetta sistemi digitali — e-commerce, siti, software e automazioni AI — per aziende in cui prodotto, territorio ed esperienza contano quanto la tecnologia. Un referente diretto davanti, un team verticale dietro.**

Specializzazione dichiarata: **vitivinicolo** come settore distintivo; ristorazione, hospitality, retail e servizi professionali come settori secondari qualificati (non "lavoriamo con tutti").

Non-posizionamento (cosa NON siamo, da tenere come bussola interna, non necessariamente da scrivere sul sito):
- non un'agenzia generalista multi-settore;
- non un laboratorio di ricerca AI/ML;
- non un rivenditore di tool AI di terze parti senza integrazione;
- non un team anonimo — Matteo resta il volto e il responsabile tecnico.

---

## 4. Value proposition principale

> **Progettiamo siti, e-commerce e sistemi AI che trasformano visite, processi e dati in vendite, contatti e crescita — con un referente diretto davanti e un team specializzato dietro.**

Riformulazione dell'esempio del brief, agganciata alla frase guida esistente e senza promesse assolute ("più vendite" è un obiettivo di progettazione, non una garanzia — coerente col §4 del brief).

---

## 5. Tre alternative di hero (H1 + sub-headline)

**A — Persona/macchina (evoluzione diretta di quella attuale, minimo rischio)**
- H1: *"Davanti c'è una persona. Dietro, lavora la macchina."*
- Sub: *"Sono Matteo Garuzzo. Con MG Solutions progetto siti, e-commerce Shopify e sistemi AI che trasformano visite e processi in vendite, contatti e fiducia."*
- Nota: è quasi il testo già in produzione — cambia solo il posizionamento di "MG Solutions" da nota a co-protagonista, e toglie il "freelance" implicito.

**B — Risultato esplicito (massima chiarezza per un pubblico non tecnico)**
- H1: *"Sistemi digitali che vendono, non solo siti che si vedono."*
- Sub: *"Progettiamo e-commerce, piattaforme web e automazioni AI su misura. Un solo referente per parlare, un team tecnico per costruire."*
- Nota: più diretta commercialmente, meno "personale"; utile se in test A/B risultasse più efficace della A per conversione.

**C — Settore-first (per una landing verticale vitivinicolo, non per l'home generale)**
- H1: *"Il digitale delle cantine, progettato da chi capisce il vino quanto il codice."*
- Sub: *"E-commerce, wine club, prenotazioni ed enoturismo digitale: sistemi pensati per chi vende territorio, non solo bottiglie."*
- Nota: da riservare alla pagina settore Vitivinicolo (o a una futura landing ads), non alla home — la home deve restare orizzontale sui 3 pilastri.

**Raccomandazione**: A per l'home (continuità col brand esistente + coerenza col claim guida), C per la pagina Vitivinicolo.

---

## 6. Architettura dell'offerta — i tre pilastri

Ogni pilastro = una pagina propria (`/soluzioni/digital-experience`, `/soluzioni/ai-systems`, `/soluzioni/growth-infrastructure`), raggiunta da `/servizi` (o `/soluzioni`) come hub che introduce e rimanda, non che elenca tutto in card.

**A. Digital Experience & Commerce** — e-commerce Shopify, WordPress, piattaforme custom, siti immersivi/3D, UX/UI, CRO, sistemi di prenotazione, pagamenti. *(già coperto oggi da: Shopify, Web, Restyling)*

**B. AI Systems & Automation** — software su misura, agenti AI, assistenti commerciali/customer care, follow-up automatico, knowledge base/RAG, integrazioni API, workflow interni, reporting. *(già coperto oggi da: Software & agenti AI, AI integration)*

**C. Growth Infrastructure** — SEO tecnica e locale, GEO, GA4/Search Console, tracciamento conversioni, CRO continuativa, manutenzione, sicurezza, reportistica. *(oggi non esiste come offerta autonoma — è il gap più grande da colmare)*

`Consulenza strategica` (oggi 6° card) non è un quarto pilastro: è la porta d'ingresso trasversale (→ diventa il framing di "Metodo", non una card di servizio a sé).

---

## 7. Sitemap consigliata

```
/                              Home
/chi-sono                      Matteo Garuzzo
/mg-solutions                  Il team / la struttura (NUOVO — separa "persona" da "macchina")
/soluzioni                     Hub dei 3 pilastri
  /soluzioni/digital-experience
  /soluzioni/ai-systems
  /soluzioni/growth-infrastructure
/metodo                        Workflow operativo (NUOVO)
/software                      Prodotti AI (disponibile/in sviluppo/su misura)
/settori
  /settori/vitivinicolo
  /settori/ristorazione
  /settori/servizi-professionali
  /settori/retail-pmi
/portfolio
/continuita                    Care / Growth / AI&Scale (NUOVO)
/blog
/risorse
/prenota-call
/contatti
/privacy /cookie /termini
```

**Fusioni valutate e scartate**: unire `/chi-sono` e `/mg-solutions` sarebbe più semplice ma va contro il concetto guida stesso ("davanti una persona, dietro la macchina") — separarle *è* il posizionamento, non ridondanza. Unire `/metodo` dentro `/soluzioni` invece sì avrebbe senso content-wise, ma il brief lo vuole come pagina/sezione a sé per motivi di fiducia ("il lavoro non finisce con la pubblicazione") — la teniamo separata ma la linkiamo pesantemente da `/soluzioni` e da ogni pagina pilastro.

**Nav principale (7 voci, invariata rispetto a oggi + 1)**: Chi sono · Soluzioni · Metodo · Software · Settori · Portfolio · Blog — con "Prenota una call" come bottone, non voce di menu (comportamento già corretto oggi). `/mg-solutions`, `/continuita`, `/risorse` restano raggiungibili da footer e da link contestuali (es. da Chi Sono → "Scopri il team"; da ogni pagina pilastro → CTA continuità), non dalla nav primaria, per non sovraccaricarla.

---

## 8. Struttura della Home

1. **Hero** (opzione A, §5) — persona + claim + doppio binario AI/Shopify già esistente, da estendere a tripla se si introduce Growth Infrastructure anche lì, o tenere doppio e lasciare che il terzo pilastro emerga nella sezione 3.
2. **Risultati perseguiti** — 3 mini-blocchi: più vendite, più contatti qualificati, più fiducia (linguaggio non assoluto, come da §4 brief).
3. **I tre pilastri** — non più 6 card piatte: 3 blocchi grandi (uno per pilastro), ciascuno con link alla pagina di dettaglio.
4. **Specializzazione settoriale** — vitivinicolo in posizione ed evidenza maggiore (es. blocco proprio più grande + card per gli altri 3), non griglia 2x2 paritaria come oggi.
5. **Metodo** — anteprima delle 7 fasi con link a `/metodo`.
6. **Progetti** — invariato nella logica, corretto etichettare sempre `CONCEPT` dove concept.
7. **Software e automazioni** — anteprima da `/software` con badge di stato (disponibile/in sviluppo/su misura).
8. **Matteo e team** — teaser che rimanda sia a `/chi-sono` sia a `/mg-solutions`.
9. **Continuità post-lancio** — teaser dei 3 livelli (Care/Growth/AI&Scale).
10. **Blog/Insight** — 2-3 articoli recenti.
11. **CTA finale** — Prenota una call.

---

## 9. Template pagina Settore (10 sezioni, per tutti e 4)

1. Hero settoriale (problema + risultato ricercato + CTA)
2. Problemi tipici del settore
3. Cosa realizziamo (sito/e-commerce/prenotazioni/automazioni/software/integrazioni)
4. Come interviene l'AI (casi d'uso concreti, non generici)
5. Come generiamo vendite/contatti/fiducia (meccanismi concreti)
6. Processo operativo specifico
7. Soluzioni consigliate
8. Case study pertinenti (solo se reali e disponibili — altrimenti sezione omessa, non riempita con concept)
9. FAQ
10. CTA finale

**Approfondimenti specifici per settore** (dai §8 del brief, da usare come brief di contenuto quando scriveremo il copy):
- **Vitivinicolo** (prioritario): storytelling territoriale, e-commerce vino, vendita diretta, wine club, enoturismo, degustazioni/prenotazioni, export, schede prodotto, tracciabilità, CRM, follow-up post-acquisto, newsletter, agenti commerciali, supporto a distributori/importatori.
- **Ristorazione**: prenotazioni, menu digitale, eventi, recensioni, acquisizione locale/Google, automazioni WhatsApp/email, lead per gruppi/eventi, fidelizzazione.
- **Retail & PMI**: e-commerce, cataloghi, stock, lead, preventivi, CRM, assistenza clienti, automazioni commerciali.
- **Servizi professionali**: autorevolezza/fiducia, lead qualificati, prenotazione consulenze, gestione documenti, knowledge base, follow-up, automazione richieste.

---

## 10. Template pagina Servizio (le 3 pagine pilastro)

1. Hero di pilastro (cosa risolve, in linguaggio non tecnico)
2. Cosa comprende (elenco concreto, non badge di tecnologie)
3. Come lavoriamo su questo pilastro (estratto del Metodo, contestualizzato)
4. Esempi/output tipici (mockup, screenshot reali quando disponibili — mai inventati)
5. Come si integra con gli altri due pilastri (cross-link — es. da Digital Experience a Growth Infrastructure: "un e-commerce veloce serve a poco senza tracciamento delle conversioni")
6. Cosa è incluso nel progetto iniziale vs. cosa è continuativo (link a `/continuita`)
7. FAQ specifiche di pilastro
8. CTA

---

## 11. Proposta pagina Software

**Tassonomia** (come da brief §9): software su misura (per un cliente) vs. soluzioni preconfigurate (moduli configurabili per più clienti). Ogni prodotto mostrato con uno stato esplicito e visibile — badge, non nota a piè di pagina:

`Disponibile` · `In sviluppo` · `Progetto personalizzato` · `Prossimamente`

Sui 3 prodotti attuali in `lib/data.js`: **nessuno ha oggi uno `status` esplicito** — tutti appaiono acquistabili ("Richiedi accesso →"). Prima correzione di contenuto necessaria (in attesa di approvazione): assegnare uno stato reale a ciascuno.

**Architettura tecnica compatibile con un modello cloud multi-tenant** (per quando si passerà all'implementazione):

- **Auth**: provider gestito (es. Clerk/Auth.js) con SSO opzionale per clienti enterprise: separa identità utente da identità tenant.
- **Multi-tenancy**: un `tenant_id` su ogni riga rilevante (isolamento logico in un unico database Postgres) è il punto di partenza più economico e sufficiente fino a una scala medio-alta; database fisicamente separati solo per clienti enterprise/on-premise, non come default.
- **Ruoli e permessi**: RBAC semplice per tenant (owner/editor/viewer) più eventuali permessi granulari per feature (es. chi può vedere i costi API, chi può editare la knowledge base).
- **Billing ricorrente**: Stripe Billing (o equivalente) con piani a metered/seat-based ibrido, dato che i costi variabili principali (token AI, conversazioni) non sono seat-based.
- **Feature flags**: per differenziare i piani senza deploy separati (es. LaunchDarkly o soluzione interna semplice via config per tenant).
- **Limiti di utilizzo**: quota per tenant su lead gestiti/conversazioni/automazioni al mese, enforced lato API prima della chiamata al modello (per controllo costi).
- **Logging e monitoraggio**: log per tenant (privacy — nessuna fuga cross-tenant), + monitoraggio aggregato per costi API e uptime.
- **Aggiornamenti centralizzati**: essendo cloud/browser-based, deploy singolo aggiorna tutti i tenant — coerente con la preferenza del brief per un modello ospitato, non installato localmente.

**Struttura piani (dimensioni di differenziazione, senza prezzi)**: numero utenti, numero lead/conversazioni gestite al mese, numero automazioni attive, integrazioni disponibili, spazio documenti/knowledge base, livello di assistenza, personalizzazioni, reportistica, accesso API diretto.

**Costi operativi da considerare prima di fissare i prezzi**:
- API dei modelli AI (costo variabile per token/conversazione — il più critico da monitorare e limitare per piano);
- hosting applicativo (Vercel o simile) e database (Postgres gestito);
- servizi di terze parti: email transazionale, WhatsApp Business API/messaggistica, storage documenti;
- supporto/assistenza umana (tempo, non solo infrastruttura);
- monitoraggio/osservabilità e sicurezza (secret management, backup);
- eventuale costo di onboarding/configurazione per cliente (non ricorrente ma va coperto dal setup fee o dal primo mese).

Non propongo cifre: prima va deciso il posizionamento di prezzo (value-based sul risparmio generato vs. cost-plus sui costi API) — è una decisione commerciale, non tecnica.

---

## 12. Proposta pagina Continuità e Crescita

Nome proposto: **"Continuità e crescita"** (più chiaro di "Growth Partnership" per un pubblico che include cantine/ristoranti non anglofoni nel B2B tech).

| | **Care** | **Growth** | **AI & Scale** |
|---|---|---|---|
| Hosting, sicurezza, backup, bugfix | ✓ | ✓ | ✓ |
| Assistenza essenziale | ✓ | ✓ | ✓ |
| Analytics, report | | ✓ | ✓ |
| SEO continuativa, CRO mensile | | ✓ | ✓ |
| Nuove landing page | | ✓ | ✓ |
| Automazioni, integrazioni | | | ✓ |
| Evoluzione software/agenti AI | | | ✓ |
| Monitoraggio costi API e knowledge base | | | ✓ |

Sezione esplicita e permanente sulla pagina: **cosa è del progetto iniziale / cosa è nel piano / cosa richiede nuovo preventivo** — per evitare l'ambiguità che oggi non esiste da nessuna parte sul sito (perché la pagina non esiste).

---

## 13. Proposta pagina Chi Sono

**Struttura** (7 blocchi, come da brief §17): Hero personale → Evoluzione professionale → Cosa fa oggi (3 aree) → Approccio → Team (teaser, rimanda a `/mg-solutions`) → CTA.

**Bio sintetica** (per hero/meta description, ~180 caratteri):
> Full-Stack Developer e AI Systems Specialist. Progetto e-commerce Shopify, piattaforme web e sistemi AI che uniscono codice, esperienza utente e automazione.

**Bio estesa** (per il blocco "Evoluzione professionale"):
> Nasco come sviluppatore web ed e-commerce, con una specializzazione precisa su Shopify e WordPress. Negli anni il lavoro si è esteso dalla realizzazione di siti alla progettazione di sistemi digitali completi: esperienza utente, integrazioni, automazioni e — sempre di più — intelligenza artificiale applicata ai processi aziendali. Non ho abbandonato lo sviluppo per l'AI: è il contrario. È lo sviluppo full-stack a permettermi di integrare l'AI davvero nei prodotti, non di limitarmi a collegare strumenti già pronti. Con MG Solutions coordino un piccolo team verticale — automazioni AI e marketing/lead generation — restando il referente diretto e responsabile tecnico di ogni progetto.

**Team (bio riviste, coerenti col brief)**:
- *Matteo De Pilla — AI Specialist*: "Progetta automazioni, workflow e sistemi AI applicati ai processi aziendali: dalla qualificazione dei lead all'integrazione tra strumenti, fino alla gestione della conoscenza interna."
- *Alessandro Poponi — Marketing & Lead Generation*: "Costruisce strategia commerciale e acquisizione clienti, con il supporto dell'AI per l'analisi di mercato e la generazione di contatti qualificati."

---

## 14. Stack tecnologico pubblico

**Capability matrix interna** (per decidere cosa pubblicare — da validare con Matteo prima della pubblicazione):

- **Frequenti/dimostrabili**: React, Next.js, TypeScript, Tailwind, JavaScript/HTML/CSS, Shopify Liquid, Node.js, PHP, WordPress/WooCommerce, API REST, Postgres/MySQL, Vercel, GitHub, OpenAI/Anthropic API.
- **Occasionali**: Google Gemini API, CMS headless, MongoDB (solo se realmente usato in un progetto consegnato), Cloudflare.
- **Note ma non centrali / da non pubblicare finché non confermate da Matteo**: Angular, Vue, Laravel, Symfony, Redis, AWS, GitLab, Docker, TensorFlow/PyTorch/scikit-learn, CNN/RNN, ML predittivo, fine-tuning.

**Pagina pubblica** — titolo proposto: *"Tecnologie con cui costruisco"* (non "Stack completo"). Raggruppare per capacità + beneficio, non come lista di badge:

- **Frontend & Experience** — Next.js, React, TypeScript, Tailwind, Shopify Liquid → *"Per costruire interfacce rapide, scalabili e ottimizzate per l'indicizzazione."*
- **Backend & Integration** — Node.js, PHP, API REST, webhook, pagamenti → *"Per collegare il sito a ciò che serve davvero: pagamenti, gestionali, strumenti esterni."*
- **Commerce & CMS** — Shopify, WordPress, WooCommerce → *"Per vendere online con una piattaforma solida e gestibile in autonomia."*
- **Data & Infrastructure** — Postgres, Vercel, Cloudflare, GitHub → *"Per un sito veloce, sicuro e sempre aggiornabile."*
- **AI Application Layer** — OpenAI/Anthropic/Gemini API, RAG, tool calling, automazioni → *"Per collegare l'intelligenza artificiale ai processi reali dell'azienda, non solo alla chat."*

---

## 15. Sezione AI — posizionamento come AI Specialist

Distinzione esplicita da comunicare (brief §19): MG Solutions **non addestra modelli fondamentali**, **integra e orchestra** modelli esistenti nei processi aziendali. Formula da usare in pagina:

> "Non addestriamo modelli fondamentali da zero. Costruiamo il sistema applicativo che permette alla tua azienda di usare i migliori modelli AI disponibili all'interno dei suoi processi reali."

Competenze da mostrare, sempre agganciate a un caso d'uso comprensibile (mai il termine tecnico da solo):
- **RAG e knowledge base** → "Colleghiamo l'assistente AI ai documenti reali dell'azienda: listini, procedure, cataloghi, così risponde solo con informazioni approvate."
- **Tool calling / agenti** → "L'AI non si limita a rispondere: prenota, aggiorna un CRM, invia un preventivo."
- **Human-in-the-loop** → "Le automazioni più affidabili prevedono ancora un controllo umano nei punti critici."
- **Controllo costi/logging/valutazione** → "Monitoriamo cosa fa l'AI e quanto costa, non la lasciamo scollegata dal risultato economico."

---

## 16. Metodologia (snella, coerente con un team di 3 persone)

7 fasi (Analisi → Architettura → Prototipo → Sviluppo → Test → Lancio → Evoluzione), linguaggio orientato al beneficio per ogni fase tecnica (es. non "Implementiamo GA4" ma "Misuriamo quali pagine e pulsanti generano davvero richieste, prenotazioni o vendite"). Strumenti (Git/GitHub, PR, preview deploy su Vercel, Notion) menzionati in secondo piano, senza dichiarare una pipeline DevOps enterprise che non esiste.

---

## 17. Experience & Media Strategy

**Gerarchia del movimento (3 livelli)**:
1. **Narrativo** — animazione principale dell'hero (persona → interfacce/flussi che si compongono dietro), poche per sito.
2. **Funzionale** — transizioni che aiutano a capire navigazione/processo (es. le 7 fasi del Metodo che si susseguono in scroll).
3. **Microinterazione** — hover, bottoni, card (già presenti oggi via `Reveal.jsx`).

**Concetto visivo hero**: Matteo in primo piano (foto o video breve), alle sue spalle si compongono progressivamente interfacce/flussi/dati — interpretazione diretta del claim. Richiede: fallback statico per mobile/reduced-motion/connessioni lente (già un requisito tecnico, non solo estetico).

**Librerie pesanti (Three.js/R3F/GSAP)**: da introdurre solo dopo aver risposto per iscritto, per ciascuna: perché serve, cosa aggiunge rispetto a CSS/SVG animato, peso in KB, impatto mobile, alternativa più leggera scartata e perché. Non le aggiungo di default.

---

## 18. Media checklist (sintesi — dettaglio completo da tracciare in `MEDIA-PLAN.md` in fase di implementazione)

**Brand**: logo MG Solutions (verticale+orizzontale), icona/favicon, Open Graph image, eventuale motion logo.
**Matteo**: ritratto professionale, foto "al lavoro" non artificiosa, video breve di presentazione (anche smartphone di qualità va bene per iniziare).
**Team**: foto coerenti di De Pilla e Poponi.
**Portfolio**: screenshot reali e registrazioni schermo dei progetti non-concept; per i concept, materiale già presumibilmente disponibile da chi li ha disegnati.
**Settori**: immagini autentiche (cantine/vigne per il vitivinicolo in primis) — **da NON sostituire con stock generico**, coerente col brief §22.

Ogni asset avrà, in fase di implementazione, uno stato: *da fornire / da registrare / da progettare / disponibile*. Questo file resta la lista sintetica; il tracking dettagliato va in un file dedicato quando iniziamo a popolare i contenuti.

---

## 19. Performance budget

LCP < 2.5s · CLS < 0.1 · INP < 200ms. Hero mobile mai dipendente da un video pesante come unico contenuto (poster image + fallback statico sempre presenti). Nessun asset decorativo blocca il contenuto principale (lazy-load per tutto ciò che è sotto la piega, `prefers-reduced-motion` rispettato ovunque ci sia animazione narrativa).

---

## 20. Piano editoriale — 6 cluster

Distribuzione consigliata: 40% evergreen alta intenzione commerciale, 25% verticale vitivinicolo/settori, 20% guide tecniche accessibili, 10% case study/dietro le quinte, 5% news/confronti modelli.

Protocollo per contenuti "di attualità" (nuovi modelli, prezzi API, bandi, normative): ogni articolo di questo tipo avrà nei dati `publishedAt`, `verifiedAt`, `sources`, `status` (bozza/da verificare/verificato/da aggiornare) — nessun dato, percentuale, prezzo o funzionalità inventata.

---

## 21. Primi 10 articoli in ordine di priorità

Criterio: valore commerciale × coerenza col posizionamento (vitivinicolo e i 2 servizi core oggi più maturi: Shopify e AI applicata) × difficoltà di produzione (bassa prima, per validare il formato).

1. **Quanto costa davvero realizzare un e-commerce Shopify professionale?** — cluster Shopify, intento commerciale altissimo, pubblico: chi sta valutando un preventivo. CTA → `/soluzioni/digital-experience` + prenota call.
2. **Come dovrebbe essere il sito di una cantina nel 2026** — cluster Vitivinicolo, ancora il pilastro di differenziazione, alta priorità per SEO di posizionamento. CTA → `/settori/vitivinicolo`.
3. **Agente AI o chatbot: quale serve davvero alla tua azienda?** — cluster AI per imprese, chiarisce un concetto spesso confuso, aggancia `/software`. CTA → `/software`.
4. **Perché il tuo e-commerce riceve visite ma non vende** — cluster Shopify, intento commerciale, aggancia CRO/Growth Infrastructure. CTA → `/soluzioni/growth-infrastructure`.
5. **E-commerce del vino: gli errori che bloccano la vendita diretta** — cluster Vitivinicolo, verticale forte, CTA → `/settori/vitivinicolo`.
6. **Quanto costa integrare un agente AI in una PMI?** — cluster AI per imprese, intento commerciale, prepara il terreno alla futura pagina prezzi software. CTA → `/software`.
7. **RAG per aziende: come far rispondere l'AI usando i tuoi documenti** — cluster AI, spiega un concetto tecnico con beneficio chiaro (coerente §19 brief). CTA → `/soluzioni/ai-systems`.
8. **Tema Shopify o sviluppo custom: come scegliere senza sprecare budget** — cluster Shopify, guida decisionale, bassa competizione probabile. CTA → prenota call.
9. **Wine club digitale: come trasformare un acquisto in una relazione** — cluster Vitivinicolo, differenziante, aggancia continuità (§12, follow-up post-acquisto). CTA → `/continuita`.
10. **Come progettiamo un sito: dall'analisi al lancio** — cluster Case study/dietro le quinte, aggancia direttamente `/metodo`, utile anche come contenuto "hub" linkato da più pagine servizio. CTA → `/metodo`.

Per ognuno, in fase di scrittura, si definirà keyword principale, struttura H2/H3 e servizio collegato — non li anticipo qui per non produrre contenuto prima dell'approvazione del piano.

---

## 22. Roadmap di implementazione (a fasi, dopo tua approvazione)

- **Fase 0 — Decisioni** (tu): approvare posizionamento/sitemap/architettura offerta; sciogliere il nodo prezzi `/software` (§23); confermare bio team; indicare quali asset reali sono già disponibili.
- **Fase 1 — Fondamenta contenuti**: aggiornare `lib/data.js` con la nuova architettura a 3 pilastri, stati prodotto software, bio team riviste, dati settore ampliati per il template a 10 sezioni (partendo da Vitivinicolo).
- **Fase 2 — Nuove pagine strutturali**: `/mg-solutions`, `/metodo`, `/continuita`, hub `/soluzioni` + 3 pagine pilastro.
- **Fase 3 — Home e Chi Sono**: implementare la nuova sequenza home (§8) e la nuova Chi Sono (§13), con motion hierarchy di livello 1-2 solo dove già ci sono asset reali.
- **Fase 4 — Settori**: portare tutti e 4 i settori al template a 10 sezioni, a partire da Vitivinicolo.
- **Fase 5 — Editoriale**: pubblicare i primi 10 articoli secondo la priorità in §21.
- **Fase 6 — QA, performance, lancio**: verifica performance budget (§19), accessibilità, SEO tecnica, poi eventuale introduzione di elementi 3D/motion avanzati solo se il budget performance lo consente.

Nessuna fase parte senza tua approvazione esplicita del contenuto di questo documento.

---

## 23. Decisioni che servono da te prima di procedere

1. **Prezzi `/software`**: li teniamo live così come sono, o li sostituiamo temporaneamente con "su richiesta / parliamone in call" finché non definiamo insieme la struttura piani (§11)? È l'unico punto realmente "in produzione con un contenuto commerciale non ancora approvato dalla nuova strategia".
2. **Conferma priorità vitivinicolo**: la tratto come settore "featured" con più spazio ovunque (home, nav se necessario, primo articolo blog verticale) — confermi?
3. **Il progetto "Il Ristorantino della Carne"** (unico non-concept oggi): posso citarlo in un case study reale nella pagina Ristorazione? Servono risultati reali (numeri, se disponibili) o resta solo descrittivo?
4. **Bio team**: approvi le riscritture in §13 per De Pilla e Poponi, o preferisci che siano loro a validarle prima?
5. **Asset reali disponibili ora**: foto di Matteo, foto team, materiale cantine/ristoranti dei progetti reali, logo in versione definitiva — cosa esiste già e cosa va prodotto?
6. **Nome pagina continuità**: confermi "Continuità e crescita" o preferisci un'altra delle opzioni del brief?
