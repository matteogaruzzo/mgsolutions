# AGRIA — Prompt 03: Verifica della migration map (sola lettura)

**Data:** 2026-09-22
**Ambito:** solo lettura. Nessun file di codice, route, redirect o sitemap è stato modificato.

---

## Riepilogo

La migration map v1 è **strutturalmente completa e corretta**: ogni URL reale (codice + sitemap + redirect + Search Console) ha esattamente una voce nella mappa, e nessuna voce della mappa punta a uno slug inesistente. I conteggi dichiarati per i gruppi (16 regioni, 71 tag) coincidono con quelli reali. Le 32 pagine di blog sono classificate una sola volta ciascuna, nessuna destinazione MERGE/301 punta a una pagina che a sua volta viene rimossa o reindirizzata (nessuna catena, nessun loop), e i 6 redirect già presenti in `next.config.js` sono esplicitamente riconciliati nella mappa (da 301→`/software` a DELETE diretto, per evitare una catena quando `/software` sparisce).

L'unica categoria di problema reale trovata è **quantitativa, non di copertura**: quasi tutti i numeri di impressioni/click riportati nella mappa sono leggermente inferiori a quelli del file `gsc-pagine-2026-09-22.csv` effettivamente presente nel repository (25 righe su ~85 confrontabili), con uno scarto sistematico dello stesso segno (mappa sempre ≤ CSV). La mappa dichiara di usare proprio questo export, quindi i numeri vanno risincronizzati prima di considerare il capitolo 8 del Master Plan definitivo. Questo non cambia nessuna decisione KEEP/MERGE/301/DELETE, perché le decisioni si basano su priorità relativa e intento, non su cifre assolute.

Nessuna anomalia tecnica bloccante (URL scoperte, catene di redirect, loop, destinazioni inesistenti).

---

## Numeri

| Metrica | Valore |
|---|---|
| URL da codice (route statiche + dinamiche espanse, esclusa `/proposta/[id]`) | 161 |
| di cui in `app/sitemap.js` | 159 |
| Route dinamica non enumerabile (`/proposta/[id]`, `force-dynamic`, noindex) | 1 |
| Redirect già attivi in `next.config.js` | 6 (tutti → `/software`) |
| URL uniche in Search Console (30 lug–19 set 2026, export 22/09) | 105 |
| di cui non più presenti nel codice (legacy) | 2 (`/servizi/software-ai-su-misura`, `/blog/ecommerce-for-frantoi`) |
| **Totale URL/route reali nell'inventario** | **169** (+ 1 famiglia `/proposta/[id]`) |
| Voci nella migration map (gruppi espansi: 16 regioni + 71 tag) | 170 |
| **URL non coperte dalla mappa** | **0** |
| **Voci di mappa senza URL reale corrispondente** | **0** |
| **Catene di redirect / loop rilevati** | **0** |
| **Destinazioni MERGE/301 non valide** (non KEEP, non nuova pagina) | **0** |
| Blog: articoli classificati (32/32), uno per categoria | 13 KEEP+REWRITE / 16 MERGE+301 (+1 legacy 301) / 3 DELETE |
| Tag (`/blog/tag/*`): dichiarati 71, reali | 71 — OK |
| Regioni (`/geo/*`): dichiarate 16, reali | 16 — OK |
| **Anomalie quantitative (impr./click mappa ≠ CSV)** | **25 righe su ~85 confrontabili** |
| Stato HTTP: pagine KEEP+REWRITE con codice ≠ 200 | 0 |
| Stato HTTP: URL non raggiungibili durante il check | 0 |

---

## Tabella per sezione

Legenda esito: **OK** = copertura e coerenza verificate; per lo stato HTTP "200" = pagina viva oggi (atteso per KEEP/MERGE/301/DELETE pre-migrazione); "308" = redirect esistente rilevato; "404" = pagina già assente oggi. Il dettaglio riga-per-riga di tutte le 169 URL è in `docs/agria/data/url-inventory.csv`.

### Pagine principali

| URL | Fonti | HTTP | Redirect att. | Azione mappa | Destinazione | Esito |
|---|---|---|---|---|---|---|
| / | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | / | OK |
| /servizi | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | /servizi | OK |
| /settori | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | /settori | OK |
| /contatti | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | /contatti | OK |
| /blog | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | /blog | OK |
| /privacy-policy | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | /privacy-policy | OK |
| /cookie-policy | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | /cookie-policy | OK |
| /termini-e-condizioni | codice+sitemap+GSC | 200 | — | KEEP+REWRITE | /termini-e-condizioni | OK |
| /chi-sono | codice+sitemap+GSC | 200 | — | 301 | /azienda (nuova) | OK |
| /metodo | codice+sitemap+GSC | 200 | — | MERGE | /azienda | OK |
| /metodo/analisi-e-obiettivi | codice+sitemap+GSC | 200 | — | MERGE | /azienda | OK |
| /metodo/strategia-di-settore | codice+sitemap+GSC | 200 | — | MERGE | /azienda | OK |
| /metodo/design | codice+sitemap+GSC | 200 | — | MERGE | /azienda | OK |
| /metodo/sviluppo | codice+sitemap+GSC | 200 | — | MERGE | /azienda | OK |
| /prenota-call | codice+sitemap+GSC | 200 | — | 301 | /contatti | OK |
| /quiz | codice+GSC | 200 | — | 301 | /contatti | OK |
| /proposta/[id] | codice (dynamic) | n/a | — | DELETE | route rimossa | OK |
| /risorse | codice+sitemap+GSC | 200 | — | DELETE | — | OK |
| /referral | codice+sitemap+GSC | 200 | — | DELETE (aperta) | — | OK — decisione aperta, già segnalata nella mappa |
| /crediti-immagini | codice | 200 | — | Da decidere | — | OK — decisione aperta, già segnalata nella mappa |
| /geo | codice+sitemap+GSC | 200 | — | DELETE (gruppo) | — | OK |
| /geo/{16 regioni} | codice+sitemap+GSC(12/16) | 200×16 | — | DELETE (gruppo, 16/16) | — | OK — conteggio regioni corretto; **impressioni gruppo da correggere, vedi Anomalie** |

### Servizi

| URL | Fonti | HTTP | Redirect att. | Azione mappa | Destinazione | Esito |
|---|---|---|---|---|---|---|
| /servizi/ecommerce-shopify | codice+sitemap+GSC | 200 | — | 301 | /servizi/digital-commerce (nuova) | OK |
| /servizi/wine-club | codice+sitemap | 200 | — | 301 | /servizi/digital-commerce | OK |
| /servizi/siti-web-contatti | codice+sitemap+GSC | 200 | — | 301 | /servizi/digital-presence (nuova) | OK |
| /servizi/restyling-ottimizzazione | codice+sitemap+GSC | 200 | — | 301 | /servizi/digital-presence | OK |
| /servizi/consulenza-strategica | codice+sitemap+GSC | 200 | — | 301 | /servizi/digital-presence | OK |
| /servizi/seo-geo-strategy | codice+sitemap | 200 | — | 301 | /servizi/digital-presence | OK |
| /servizi/brand-identity | codice+sitemap | 200 | — | 301 | /servizi/digital-presence | OK |
| /servizi/automazioni-ai | codice+sitemap+GSC | 200 | — | 301 | /servizi/digital-automation (nuova) | OK |
| /servizi/software-ai-su-misura | **solo GSC** (non nel codice) | **404** | — | 301 | /servizi/digital-automation | OK — oggi 404 senza redirect: il 301 è **da creare**, non da correggere |

### Settori

| URL | Fonti | HTTP | Redirect att. | Azione mappa | Destinazione | Esito |
|---|---|---|---|---|---|---|
| /settori/wine-viticulture | codice+sitemap+GSC | 200 | — | 301 | /settori/vino (nuova) | OK |
| /settori/oleifici-food-tech | codice+sitemap+GSC | 200 | — | 301 | /settori/olio (nuova) | OK |
| /settori/wine-hospitality-agriturismi | codice+sitemap+GSC | 200 | — | 301 | /settori/hospitality (nuova) | OK |

### Software

| URL | Fonti | HTTP | Redirect att. | Azione mappa | Destinazione | Esito |
|---|---|---|---|---|---|---|
| /software/hospitality | codice+sitemap+GSC | 200 | — | MERGE | /blog/software-per-agriturismi | OK |
| /software/vitivinicolo | codice+sitemap+GSC | 200 | — | MERGE | /blog/software-per-cantine | OK |
| /software/frantoi | codice+sitemap+GSC | 200 | — | 301 | /settori/olio (nuova) | OK |
| /software | codice+sitemap+GSC | 200 | — | DELETE | — | OK |
| /software/pricing | redirect+GSC | **308→/software** | /software | DELETE | — | OK — mappa già prevede l'aggiornamento del redirect per evitare la catena |
| /software/lead-sales | redirect+GSC | **308→/software** | /software | DELETE | — | OK — idem |
| /software/social-ai | redirect+GSC | **308→/software** | /software | DELETE | — | OK — idem |
| /software/booking-experience | redirect+GSC | **308→/software** | /software | DELETE | — | OK — idem |
| /software/staff-operations | redirect | **308→/software** | /software | DELETE | — | OK — idem |
| /software/control-tower | redirect | **308→/software** | /software | DELETE | — | OK — idem |

### Portfolio

| URL | Fonti | HTTP | Redirect att. | Azione mappa | Destinazione | Esito |
|---|---|---|---|---|---|---|
| /portfolio | codice+sitemap+GSC | 200 | — | 301 | /settori | OK |
| /portfolio/tenuta-monteverdi | codice+sitemap+GSC | 200 | — | 301 | /settori/vino | OK |
| /portfolio/azienda-rossi | codice+sitemap+GSC | 200 | — | DELETE | — | OK |
| /portfolio/podere-la-vite | codice+sitemap+GSC | 200 | — | DELETE | — | OK |
| /portfolio/frantoi-san-lorenzo | codice+sitemap+GSC | 200 | — | DELETE | — | OK |
| /portfolio/tasting-flow | codice+sitemap+GSC | 200 | — | DELETE | — | OK |
| /portfolio/wine-club-pro | codice+sitemap | 200 | — | DELETE | — | OK |

### Blog — KEEP + REWRITE (13/13)

Tutte codice+sitemap+GSC, HTTP 200, destinazione = stesso slug. Esito OK per tutte: ecommerce-per-frantoi, software-per-agriturismi, software-per-cantine, siti-web-per-agriturismi, gestione-fiscale-ecommerce-vino-iva-fatturazione, siti-web-per-cantine, vendita-internazionale-vino-dtc-export-estero, agriturismo-booking-online-prenotazioni, degustazioni-cantina-trasformare-visite-vendite, ecommerce-vino-margini-vendita-diretta, storytelling-vino-marketing-vendite, chatbot-cantina-ai-customer-service, seo-locale-agroalimentare-google-maps.

### Blog — MERGE / 301 (17/17)

Tutte codice+sitemap+GSC (tranne `ecommerce-for-frantoi`, solo GSC), HTTP 200 (tranne `ecommerce-for-frantoi`, HTTP 404, coerente con "non più nel codice"). Ogni destinazione MERGE ricade in un articolo KEEP+REWRITE; ogni destinazione 301 è un articolo KEEP+REWRITE o una pagina nuova dichiarata. Nessuna catena. Esito OK per tutte e 17.

### Blog — DELETE (3/3)

specialista-digitale-vs-web-agency-agroalimentare, scegliere-partner-digitale-checklist, bandi-incentivi-digitalizzazione-agroalimentare — tutte codice+sitemap+GSC, HTTP 200, esito OK.

### Tag (`/blog/tag/*`, 71/71) e Geo (`/geo/*`, 16/16)

Conteggi reali coincidenti con quelli dichiarati (71 tag unici derivati da `getAllTags()`, 16 regioni da `lib/geo-data.js`). Tutti HTTP 200 in produzione. Copertura OK per l'intero gruppo. Dettaglio riga-per-riga in `url-inventory.csv`.

---

## Varianti di dominio/protocollo (solo homepage, come richiesto)

| Richiesta | Risposta |
|---|---|
| `http://matteogaruzzo.com/` | 308 → `https://matteogaruzzo.com/` |
| `https://www.matteogaruzzo.com/` | 308 → `https://matteogaruzzo.com/` |
| `http://www.matteogaruzzo.com/` | 308 → `https://www.matteogaruzzo.com/` (poi, in un secondo hop, → apex) |

Non è un errore della mappa (è comportamento standard del dominio su Vercel), ma è un **punto aperto tecnico per il Prompt 14**: `http://www.matteogaruzzo.com/*` fa già 2 hop prima di qualunque redirect di dominio verso agriasystem.com. Se il redirect di dominio (Regola 2 della mappa) viene aggiunto come hop aggiuntivo invece che a livello di configurazione dominio Vercel, alcuni URL arriverebbero a 3 hop.

---

## Anomalie (per gravità)

### 1. Impressioni/click della mappa non coincidono con l'export CSV presente nel repository (severità: media)

La mappa dichiara di usare l'export `docs/agria/data/gsc-pagine-2026-09-22.csv` ("Export aggiornato al 22 settembre"), ma **25 righe su ~85 confrontabili** hanno cifre diverse da quelle nel CSV. Lo scarto è sempre nello stesso senso (valore in mappa ≤ valore nel CSV), compatibile con l'uso di uno snapshot leggermente precedente. Esempi:

| URL | Mappa (impr/click) | CSV (impr/click) |
|---|---|---|
| / | 5.830 / 11 | 6.091 / 11 |
| /blog/ecommerce-per-frantoi | 506 / 6 | 544 / 7 |
| /blog/software-per-agriturismi | 380 / 1 | 395 / 1 |
| /software/hospitality | 311 / 1 | 312 / 1 |
| /geo e 16 regioni (totale gruppo) | 73 | **83** (somma reale delle 16 righe + /geo) |
| /blog/gestione-fiscale-ecommerce-vino-iva-fatturazione | 132 / 3 | 134 / 4 |
| /settori/wine-hospitality-agriturismi | 16 / 1 | 20 / 1 |

Elenco completo delle 25 righe disponibile su richiesta (derivato programmaticamente, non trascritto qui per brevità). **Non cambia nessuna classificazione KEEP/MERGE/301/DELETE** (le decisioni sono per intento e priorità relativa, non per cifra esatta), ma va corretto prima che il capitolo 8 del Master Plan sia considerato definitivo, perché la mappa cita esplicitamente questo file come fonte.

### 2. Redirect verso `/software` da riscrivere come DELETE diretto (severità: bassa — già prevista dalla mappa)

I 6 redirect in `next.config.js` (`/software/pricing`, `/lead-sales`, `/social-ai`, `/booking-experience`, `/staff-operations`, `/control-tower`) puntano tutti a `/software` (308, verificato in produzione). Poiché `/software` diventa DELETE, questi andranno riscritti come DELETE diretto (410/404) per non creare una catena verso una pagina rimossa. La mappa lo segnala già esplicitamente ("Oggi 301 → /software: aggiornare, niente catene" / "Idem"): nessuna azione richiesta ora, resta da eseguire nel Prompt 14.

### 3. Due decisioni esplicitamente aperte nella mappa stessa (severità: bassa — non un errore)

`/referral` (DELETE, "decisione aperta") e `/crediti-immagini` ("Da decidere") sono correttamente segnalate come non finalizzate dalla mappa stessa. Nessuna azione da parte mia; le riporto solo perché il prompt chiede di segnalare ogni URL con impression/click che non finisce chiaramente in DELETE: `/referral` ha 1 impressione e finirebbe comunque in DELETE se confermata.

### 4. Variante `http://www.matteogaruzzo.com/` a 2 hop prima del redirect di dominio (severità: bassa, nota tecnica)

Vedi sezione dedicata sopra. Da tenere presente nell'implementazione del Prompt 14, non un errore della mappa attuale.

---

## Correzioni proposte alla migration map

1. **Risincronizzare tutte le colonne Impr./click con `gsc-pagine-2026-09-22.csv`** — 25 valori divergono dall'export citato come fonte. Motivazione: la mappa dichiara esplicitamente di usare questo file; i numeri attuali sembrano provenire da uno snapshot leggermente precedente.
2. **Correggere il totale del gruppo "/geo e 16 regioni" da 73 a 83 impressioni** — somma reale delle 16 righe regione + la riga `/geo` stessa nel CSV. Motivazione: coerenza interna con il resto della tabella (il gruppo tag, invece, è già corretto: 38 = 38).
3. **Aggiungere una nota esplicita per i 2 URL legacy** (`/servizi/software-ai-su-misura`, `/blog/ecommerce-for-frantoi`) che il loro 301 è un **redirect nuovo da creare** (oggi rispondono 404, senza alcun redirect esistente), non un redirect da modificare. Motivazione: evita ambiguità in fase di implementazione (Prompt 14) su cosa "aggiornare" vs "creare".
4. **(Facoltativo) Annotare esplicitamente nella sezione Software** che i redirect di `/software/staff-operations` e `/software/control-tower` non hanno mai avuto traffico misurato in Search Console (0 impressioni, assenti dal CSV) — coerente con "Idem" ma reso più esplicito per chi legge solo la tabella.

Nessuna correzione riguarda la copertura URL, le classificazioni KEEP/MERGE/301/DELETE o le destinazioni: su questi tre punti la mappa è risultata corretta al 100%.

---

## Domande aperte

1. Confermate la correzione dei numeri di impression/click (punti 1–2 sopra) prima di considerare il capitolo 8 del Master Plan definitivo, o preferite rigenerare un nuovo export GSC più recente e usare quello?
2. `/referral` e `/crediti-immagini`: qual è la decisione finale? Servono per pianificare in modo completo il Prompt 14.
3. Per il redirect di dominio matteogaruzzo.com → agriasystem.com (Regola 2), verrà implementato a livello di configurazione dominio (Vercel) o come regola applicativa in `next.config.js`? Incide sul numero di hop per le varianti `www`/`http` (vedi nota tecnica).

---

## Metodologia

- Inventario URL costruito da: `app/**/page.jsx` (route statiche), `generateStaticParams()` di ogni route dinamica (`lib/data.js`: `posts`, `servizi`, `sectors`, `caseStudies`, `metodoSteps`, `getAllTags()`; `lib/geo-data.js`: `regions`), `app/sitemap.js`, `next.config.js` (`redirects()`), e `docs/agria/data/gsc-pagine-2026-09-22.csv`.
- Verifica HTTP: richieste `HEAD`, `--max-redirs 0`, pausa ≥350ms tra le richieste, nessun invio di form/POST. 169 URL controllate (169/169, nessun timeout).
- Confronto conteggi eseguito con script Node.js scartati dopo l'uso (non presenti nel repository); il file consegnato è solo `docs/agria/data/url-inventory.csv`.
