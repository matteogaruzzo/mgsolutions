# AGRIA — Prompt 11: Homepage definitiva

**Data:** 2026-09-25
**Branch:** `agria/redesign`
**Riferimenti:** `docs/agria/concept/agria-concept-v3.html` (stile), standard di `docs/agria/09-interazioni.md`, concept v4 (descritta nel prompt), elevenlabs.io e bipsync.com come riferimenti esterni.
**Natura del lavoro:** scena 3D dei filari come componente di libreria, homepage rifatta per intero (struttura, copy, tre moduli interattivi, fotografie, news), footer sul modello bipsync. Nessuna route creata o rimossa, nessuna modifica a migration map, redirect o sitemap, nessuna pagina `/en`; `main` non è stato toccato.

---

## 1. Commit

| Commit | Contenuto |
|---|---|
| `bbc77c8 feat(agria): scena 3D dei filari, interattiva e riutilizzabile` | `FieldScene`: campo in prospettiva su colline leggere, nodi luminosi, inclinazione e parallasse |
| `bba3513 feat(agria): pianura malleabile al cursore e scena dei filari nel footer` | Richiesta intermedia: via i nodi, terreno che cede sotto il cursore, footer scuro con la scena |
| `d4062d3 feat(agria): homepage definitiva con moduli interattivi e news` | Nuova sequenza, tre moduli, foto dei settori, news, banda territoriale, header non fisso |
| `0392723 feat(agria): footer con scena 3D e social` | Riga finale con lockup, dati fiscali, link legali e social (commentati, vedi §9) |

---

## 2. Sequenza finale delle sezioni

| # | Sezione (ragione) | Fondo | Componente |
|---|---|---|---|
| 1 | Hero (chi siamo, in una frase) | scuro, scena 3D | `HomeHero` + `FieldScene` |
| 2 | Fatti (credibilità immediata) | bianco, striscia sovrapposta | `FactStrip` |
| 3 | Il problema (modulo 1) | bianco | `ProblemSwitch` |
| 4 | Servizi (la risposta) | off-white | `ServiceCards` |
| 5 | Componete il vostro sistema (modulo 2) | bianco | `SystemComposer` |
| 6 | Settori (per chi) | off-white, fotografie | `SectorCards` |
| 7 | Anteprima per settore (modulo 3) | bianco | `SectorPreview` |
| 8 | Come lavoriamo (metodo) | off-white | `MethodSection` |
| 9 | Chiarezza e ricerca (posizionamento) | bianco, due colonne | `ClaritySection` |
| 10 | News (competenza dimostrata) | off-white | `NewsSection` |
| 11 | Banda territoriale (dove operiamo) | fotografia con velo scuro | `TerritoryBand` |
| 12 | CTA finale | bianco con blocco scuro (invariata) | `ClosingCta` |
| — | Footer | scuro, scena 3D tenue | `Footer` |

Mai più di due sezioni bianche consecutive (standard 1 del report 09): l'unica coppia è Fatti + Problema, subito dopo l'hero scuro.

Eliminata la sezione "Dai dati alle decisioni" (`DataSection.jsx` rimosso; `GradientSection` e `HighlightCard` restano in libreria). L'header non è più fisso: scorre via con la pagina (`relative z-50`, sopra il velo dei pannelli).

---

## 3. Componenti creati

### `FieldScene` — `components/agria/motion/FieldScene.jsx` (+ `fieldGeometry.js`, `FieldScene.module.css`)
| Proprietà | Tipo | Default | Note |
|---|---|---|---|
| `variant` | `'hero' \| 'subtle'` | `'hero'` | `subtle`: linee e alone più tenui, terreno più alto (footer) |
| `interactive` | bool | `true` | Parallasse dell'alone che segue il cursore |
| `malleable` | bool | `true` | Il terreno cede dove passa il cursore |
| `lazy` | bool | `false` | Terreno disegnato solo quando la scena si avvicina alla parte visibile |
| `className` | string | | |

- Campo lavorato in prospettiva: 93 filari che convergono con moderazione (il bordo lontano resta largo), colline leggere di ~25-35 px, 8 linee trasversali tenui che ne disegnano il profilo. Geometria calcolata una volta a livello di modulo, identica su server e client: il terreno è SVG nell'HTML.
- **Pianura malleabile** (richiesta dopo la prima versione): con cursore fine, dove passa il cursore il terreno si abbassa e si allarga lateralmente, poi torna piano con un piccolo rimbalzo (molla smorzata su una griglia filari × campioni; la pressione svanisce ~0,2 s dopo che il cursore si ferma). Lo spostamento laterale serve perché i filari centrali sono quasi verticali sullo schermo e un abbassamento puro non si vedrebbe.
- Prestazioni: un solo `requestAnimationFrame`, attivo solo durante il movimento e fermo fuori schermo; i filari sono divisi in 6 tratti di profondità e un tratto viene riscritto solo se cambia al pixel; tracciati in coordinate relative per un HTML leggero.
- Touch, `prefers-reduced-motion`, assenza di JavaScript: scena statica.
- Il genitore deve essere `position: relative; overflow: hidden`; la scena segue il cursore sopra il genitore.
- Demo in `/design-system` → "Libreria di interazioni" → FieldScene.

**Scostamenti dalla Fase A del prompt, con motivazione:**
- *Nodi luminosi*: tolti su richiesta del committente, sostituiti dalla pianura malleabile. Di conseguenza su dispositivi senza cursore la scena è statica (non c'è più "animazione lenta").
- *Inclinazione del terreno*: tolta. Qualunque trasformazione sul terreno lo porta su un livello composito che il browser rasterizza per intero a ogni deformazione. Misurato nel Chrome del committente: 33,3 ms per frame (30 fps) con inclinazione, 16,7 ms (60 fps) senza. Resta il parallasse dell'alone rispetto al terreno.

### `ProblemSwitch` — modulo 1, `components/agria/home/ProblemSwitch.jsx`
- Interruttore `role="switch"` con `aria-checked` e `aria-label` "Con Agria"; etichette visibili ai due lati. Tastiera: Tab, Spazio/Invio.
- Tavola a fili sottili: sei fonti sparse e ruotate → allineate ai lati di un blocco scuro "Un solo sistema · Dati collegati, decisioni chiare" (colonne da md in su, righe sopra e sotto su mobile), collegamenti che si disegnano (`pathLength` + `stroke-dashoffset`, viewBox con le proporzioni della tavola).
- Didascalia in `aria-live="polite"`: cambia con lo stato.
- Senza JavaScript: stato di partenza, interruttore nascosto. Movimento ridotto: cambio immediato.

### `SystemComposer` — modulo 2, `components/agria/home/SystemComposer.jsx`
- Vero form `GET` verso `/contatti` con sei caselle a pillola (`fieldset`, etichetta = titolo della sezione): funziona anche senza JavaScript.
- Tavola in prospettiva: un blocco con nome e area per ogni casella scelta; il legame è in CSS (`:has()`), quindi anche la tavola funziona senza JavaScript.
- Contatore "n moduli scelti" in `aria-live` (con JavaScript; "1 modulo scelto" al singolare).
- Con JavaScript l'invio usa la navigazione di Next.js senza ricaricare la pagina.

### `SectorPreview` — modulo 3, `components/agria/home/SectorPreview.jsx`
- Schede a pillola con pattern WAI-ARIA Tabs (frecce, Home, End, tabindex a rotazione), anteprima dentro un dispositivo con barra del browser, inclinato in 3D, che si raddrizza al passaggio del cursore o con il focus dentro.
- Senza JavaScript: prima anteprima (Hospitality), schede nascoste. Movimento ridotto: dispositivo diritto, nessuna animazione di cambio.

### `NewsSection`, `TerritoryBand`, `SocialIcon`
- `NewsSection` (server): tre articoli reali da `content/blog`, card con `ZoomImage` in `HoverGroup`, link esteso sul titolo, focus visibile sulla card, link finale "Tutti gli articoli".
- `TerritoryBand` (server): fotografia `next/image` a tutta larghezza, velo ink 70→78%, etichetta e frase, nessuna CTA.
- `SocialIcon` + `components/agria/social.js`: icone essenziali a tratto; profili configurati in un solo file (vedi §9).

---

## 4. Parametri passati al form

Il modulo 2 invia a `/contatti` le scelte come **parametro ripetuto** `moduli`:

```
/contatti?moduli=sito&moduli=prenotazioni-dirette&moduli=report-settimanale
```

| Valore | Modulo | Area |
|---|---|---|
| `sito` | Sito | Presence |
| `prenotazioni-dirette` | Prenotazioni dirette | Commerce |
| `e-commerce` | E-commerce | Commerce |
| `listini-b2b` | Listini B2B | Commerce |
| `automazioni` | Automazioni | Automation |
| `report-settimanale` | Report settimanale | Automation |

- Lettura lato form: `new URLSearchParams(location.search).getAll('moduli')` (o `searchParams.getAll('moduli')` in un componente server).
- Nessuna scelta: con JavaScript si va a `/contatti` senza parametri; senza JavaScript il browser invia `/contatti?` (equivalente).
- Nome del parametro, valori ed etichette sono in `content/agria/home.js` (`composer`).
- **Da fare:** l'attuale `/contatti` (legacy) non legge ancora il parametro; la precompilazione arriva con la nuova pagina contatti.

---

## 5. Articoli della sezione News

| Articolo | Settore | Etichetta (categoria del post) | Motivo |
|---|---|---|---|
| `agriturismo-booking-online-prenotazioni` | Hospitality | E-commerce | Prenotazioni dirette, il problema centrale del settore |
| `ecommerce-vino-margini-vendita-diretta` | Cantine | E-commerce | Vendita diretta; CTR più alto del sito (migration map) |
| `ecommerce-per-frantoi` | Frantoi | Shopify | Articolo più forte del sito (migration map) |

Scartati: `software-per-agriturismi` (presenta Agria come fornitore di gestionali, in contrasto con il posizionamento) e `siti-web-per-cantine` (un solo articolo per settore). Tutti e cinque i candidati sono KEEP + REWRITE nella migration map.

Gli `alt` sono scritti in `content/agria/home.js`: quelli dei post non descrivono sempre la foto (es. "Camera di un agriturismo" per una foto di casolari).

---

## 6. Immagini

| Uso | File | Dimensioni | Peso file | Servita a 1440 px | `alt` |
|---|---|---|---|---|---|
| Card Hospitality | `agria/settori/hospitality.jpg` | 4608×3072 | **1.759 KB** (oltre 500 KB) | w640, 21 KB | Camera con letto matrimoniale e lampade accese sui comodini |
| Card Cantine | `software/sector-vitivinicolo-hero.jpg` | 1600×1200 | 324 KB | w640, 30 KB | Botti di legno allineate in una cantina con volta in mattoni |
| Card Frantoi | `software/sector-frantoi-hero.jpg` | 1600×1200 | 252 KB | w640, 12 KB | Olio appena estratto che scende da un beccuccio d'acciaio |
| News 1 | `blog/agriturismo-booking-online-prenotazioni.jpg` | 1200×600 | 170 KB | w640, 33 KB | Casolari rossi lungo una strada bianca in campagna |
| News 2 | `blog/ecommerce-vino-margini-vendita-diretta.jpg` | 1200×600 | 73 KB | w640, 9 KB | Scatole di cartone aperte, pronte per la spedizione |
| News 3 | `blog/ecommerce-per-frantoi.jpg` | 1200×600 | 54 KB | w640, 8 KB | Olive su un cucchiaio sotto un filo d'olio |
| Banda | `servizi/seo-geo-strategy-hero.jpg` | 2000×1333 | **620 KB** (oltre 500 KB) | w1920, 265 KB | Strada bianca tra cipressi e vigneti al tramonto |

- **Provenienza:** Cantine, Frantoi, News e Banda sono foto Unsplash già nel repository e già accreditate in `/crediti-immagini`. `vino.jpg` e `olio.jpg` non sono mai arrivate in `public/images/agria/settori/`. Le foto `public/images/sectors/*.png` non sono state usate: non hanno crediti e non se ne può escludere l'origine AI.
- `hospitality.jpg` è entrata nel repository con questo lavoro (prima la homepage puntava ad `agriturismo.jpg`, mai committata); **manca la fonte** per i crediti. `agriturismo.jpg` non è più usata e resta fuori dal repository.
- **Peso all'apertura:** 0 KB di immagini a 1440, 768 e 375 px: tutte sotto la prima schermata e a caricamento differito (`loading="lazy"`).
- **Dopo aver scorso tutta la pagina** (cache disattivata): 378 KB a 1440 px, 106 KB a 768 px, 100 KB a 375 px. `next/image` serve varianti ridimensionate e ricompresse (es. `hospitality.jpg`: 1.759 KB → 21 KB).
- Pesi sopra 500 KB segnalati, non convertiti.

---

## 7. Contrasti

| Elemento | Colore | Sfondo (punto più chiaro) | Rapporto |
|---|---|---|---|
| Banda · frase | bianco | foto + velo, rgb(73,70,47) | **9,50:1** |
| Banda · etichetta | green-bright | foto + velo, rgb(71,67,53) | **6,13:1** |
| Footer · link e testi (minimo, riga finale) | bianco 70% | scena, rgb(27,46,32) | **7,81:1** |
| Footer · link delle colonne | bianco 70% | scena | 8,38–9,68:1 |
| Footer · etichette delle colonne | green-bright | ink | 12,13:1 |
| Footer · lockup | bianco | scena | 14,40:1 |
| Footer · icone social (non testo, soglia 3:1) | bianco 70% | scena + bordo | 5,61:1 |
| Modulo 1 · nodi | grafite | bianco | 18,88:1 |
| Modulo 1 · didascalia, etichetta inattiva | grigio | bianco | 5,05:1 |
| Modulo 1 · blocco centrale | bianco / bianco 70% | ink | 19,68 / 9,68:1 |
| Modulo 2 · pillola scelta | bianco | green-dark | 6,01:1 |
| Modulo 2 · contatore | grigio | bianco | 5,05:1 |
| Modulo 2 · area del blocco | green-dark | bianco | 6,01:1 |
| Modulo 3 · scheda inattiva, riga anteprima | grigio | off-white | 4,70:1 |
| Modulo 3 · scheda attiva | bianco | grafite | 18,88:1 |
| Modulo 3 · etichetta anteprima | green-dark | off-white | 5,59:1 |

Metodo: la banda è misurata ridisegnando la foto con lo stesso ritaglio (`object-cover`, posizione 50% 60%) e il velo, cercando il pixel più chiaro sotto ogni testo. Il footer è misurato sullo schermo reale: testo reso trasparente, screenshot, pixel più chiaro sotto ogni elemento, colore del testo miscelato con quello sfondo (il bianco 70% è semitrasparente). La deformazione del terreno sposta le linee ma non ne aumenta la luminosità: il caso peggiore è già una linea sotto il testo, compreso nella misura.

---

## 8. Esito della validazione

| Verifica | Esito |
|---|---|
| `npm run build` | Riuscito (`next build` su una copia isolata del repository, un solo worker per la poca RAM disponibile). 170 pagine, **41 route come prima**. JS iniziale della homepage 110 kB (era 102 kB prima del Prompt 11); HTML 146 KB (27 KB compresso) |
| Header non fisso | `position: relative`; dopo 700 px di scorrimento il bordo inferiore è a −560 px |
| Modulo 1 | Mouse, tastiera (Spazio) e tocco: stato, collegamenti e didascalia cambiano; focus visibile |
| Modulo 2 | Mouse, tastiera (Spazio sulla casella) e tocco; contatore e blocchi corretti; invio → `/contatti?moduli=sito&moduli=listini-b2b&moduli=automazioni` |
| Modulo 3 | Clic, frecce e tocco; focus che segue la scheda; dispositivo che si raddrizza al passaggio del cursore |
| Senza JavaScript | Tutto il testo visibile; modulo 1 nello stato di partenza, interruttore nascosto; modulo 2 funzionante come form nativo (`/contatti?moduli=sito&moduli=report-settimanale`), contatore nascosto; modulo 3 con la prima anteprima, schede nascoste; hero con la frase predefinita e scena statica; footer con il solo fondo scuro |
| `prefers-reduced-motion` | Scena statica, nessuna deformazione né parallasse; transizioni dei moduli annullate; dispositivo diritto; pill dell'hero ferme |
| Scorrimento orizzontale | Nessuno a 375, 768 e 1440 px (homepage e `/contatti`, con il footer nuovo) |
| Immagini | 0 KB all'apertura; caricamento differito su tutte (vedi §6) |
| Console | Nessun errore JavaScript. Restano i 404 dei prefetch verso le 7 pagine non ancora create (servizi, settori, azienda), già noti dal report 06 |
| Fluidità con la scena attiva | Chrome del committente (dev server, prima taratura dell'avvallamento: profondità 0,1, senza spostamento laterale), 300 frame con il cursore in movimento: deformazione nell'hero 16,7 ms mediano / 16,9 ms p95 (9 frame sopra 20 ms), nel footer 16,7 / 16,8 (5), solo parallasse 16,7 / 16,8 (1). Taratura finale (profondità 0,2 + spostamento laterale), build di produzione in headless senza GPU: 16,7 / 16,8 (5 su 239). Da ripetere nel Chrome reale sulla versione finale |
| Footer | Colonne Servizi, Settori (Hospitality, Cantine, Frantoi), Azienda, Legale; riga finale con lockup, `© 2026 Agria System · P.IVA IT04006460549`, link legali; social pronti ma non pubblicati (§9); contrasti in §7 |

Le prove sono state fatte con Edge headless pilotato via DevTools Protocol (viewport, touch e `prefers-reduced-motion` emulati) e, per la fluidità, nel Chrome del committente. Le build sono fatte su una copia isolata per non interferire con `next dev`.

---

## 9. Decisioni e punti aperti

- **Social non pubblicati.** Instagram, Facebook e LinkedIn non sono verificabili da una richiesta anonima: Instagram restituisce la stessa pagina generica per profili esistenti e inesistenti, Facebook risponde 400, LinkedIn 404 o una verifica anti-bot. Come da prompt, le tre voci sono commentate in `components/agria/social.js`: togliendo il commento a una voce, l'icona compare nella riga finale del footer (link con `target="_blank"`, `rel="noopener noreferrer"`, `aria-label`). Aspetto, focus e contrasto sono stati verificati attivandoli nella sola copia di prova.
- **Link legali due volte** nel footer: nella colonna "Legale" (come oggi) e nella riga finale (come chiesto). Si può togliere la colonna.
- **CTA finale:** invariata, blocco scuro su sezione bianca. Una sezione scura a tutta larghezza metterebbe tre fasce scure di seguito (banda, CTA, footer).
- **Copy:** contatore al singolare per 1 ("1 modulo scelto"); tolte le etichette "Chiarezza" e "Ricerca e sviluppo" e la numerazione "01 — Presence" delle card dei servizi, non previste dal copy fornito; anno del © calcolato alla build (oggi 2026).
- **Etichetta delle News:** categoria del post; per l'articolo sui frantoi è "Shopify". In alternativa il primo tag ("E-commerce").
- `SectorPattern` non è più usato in homepage (tutte le card hanno la foto) ma resta in libreria come ripiego quando una card non ha immagine.

---

## 10. Cosa resta da sostituire con materiale reale

- **Anteprime del modulo 3:** illustrative, dichiarate come tali; vanno sostituite con i progetti reali appena pubblicabili.
- **Fotografie:** le foto di Cantine, Frantoi, News e Banda sono stock Unsplash; la banda mostra un paesaggio di cipressi e vigneti non riconducibile a un luogo, da sostituire con foto del territorio in cui lavora Agria. Foto proprie per Hospitality (e fonte della foto attuale per i crediti).
- **Profili social:** da attivare in `social.js` quando esistono.
- **Pagine collegate** ancora da creare: `/servizi/digital-presence`, `/servizi/digital-commerce`, `/servizi/digital-automation`, `/settori/hospitality`, `/settori/cantine`, `/settori/frantoi`, `/azienda`.
- **Form contatti** che legga il parametro `moduli`.
- **`alt` dei post del blog** che non descrivono la foto (fuori dalla homepage).

---

## 11. Prompt 10 — riepilogo (report 10 non redatto separatamente)

| Commit | Contenuto |
|---|---|
| `28f6f6b refactor(agria): settori rinominati in Cantine e Frantoi` | Vino e Olio → **Cantine** (`/settori/cantine`, EN `/en/industries/wineries`) e **Frantoi** (`/settori/frantoi`, EN `/en/industries/olive-oil`). Aggiornati `nav-data.js` (header, pannelli, footer, menu mobile), homepage, barra annuncio, `migration-map-v1.md` (destinazioni, righe dei redirect e nota di storico con i vecchi slug), `data/url-inventory.csv`, report 03 e 06. I testi sul prodotto ("produttori di olio") sono invariati |
| `2ea825b feat(agria): overlay di messa a fuoco dietro i pannelli di navigazione` | `FocusOverlay` in libreria: velo ink 30% con dissolvenza di 0,3 s (nessuna con movimento ridotto), z-index 45 (sopra contenuto e ConciergeSlot, sotto header e banner cookie); si chiude con clic sul velo, clic esterno, `Esc` o uscendo con il cursore; non blocca lo scorrimento e non riceve il focus; da md in su (su mobile il menu resta a tutta altezza). Demo in `/design-system` |

La Fase C del Prompt 10 (foto nei settori, banda territoriale, verifica del ritmo) è confluita nel Prompt 11, sezioni 6 e 11 della homepage.
