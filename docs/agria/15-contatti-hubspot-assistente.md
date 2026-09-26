# AGRIA — Prompt 15: Parliamo del progetto, HubSpot e assistente

**Data:** 2026-09-26
**Branch:** `agria/redesign`
**Stato:** fasi A, B e C completate. Invio reale verso HubSpot da verificare in locale.
**Natura del lavoro:** pagina `/contatti` con modulo nativo a passi, pagina `/contatti/prenota`, integrazione HubSpot lato server con creazione della trattativa, assistente con risposte curate su tutte le pagine. Nessun widget, script, stile o iframe del modulo HubSpot nel frontend; nessun token nel frontend; `main` non è stato toccato.

---

## 1. Commit

| Commit | Contenuto |
|---|---|
| `1713cb7 feat(agria): pagina contatti con form nativo a passi` | Fase A |
| `93bb99e feat(agria): integrazione HubSpot lato server con creazione trattativa` | Fase B, con la prima versione di questo report |
| `feat(agria): assistente con risposte curate e passaggio a WhatsApp` | Fase C e report completo |

---

## 2. Pagina `/contatti`

Testi in `content/agria/contatti.js`, componenti in `components/agria/contatti/`, campi e regole in `lib/contact/fields.js`.

| # | Sezione | Fondo | Interazione |
|---|---|---|---|
| 1 | Hero *Parliamo del progetto.* | ink con scena dei filari | — |
| 2 | Modulo a passi + colonna *Risponde una persona · Nessun impegno · Dati trattati con cura* | bianco, modulo sovrapposto all'hero | modulo a tre passi (sotto) |
| 3 | Altri modi per parlarci | off-white | email, telefono, WhatsApp con messaggio precompilato, sede con mappa, orari; tre card sopra e due sotto |
| 4 | Cosa succede dopo | ink | **quattro tappe che avanzano da sole**: barra a tempo, pausa al passaggio del cursore, al focus e con pulsante (WCAG 2.2.2); testi sempre visibili |
| 5 | Domande frequenti | bianco | **schede apribili** su due colonne (`details`/`summary` nativi) |
| 6 | Chiusura | off-white | rimando alle tre aree e all'indice dei servizi |

### Modulo
- **Passi:** L'azienda (settore, azienda) · Il progetto (servizio, tempistica, messaggio facoltativo) · I contatti (nome, cognome, email, telefono con prefisso, preferenza, consenso).
- **Scelte:** radio nativi dentro card, pill e opzioni: frecce e Tab funzionano senza codice di tastiera. Valori inviati esattamente come nel prompt.
- **Comportamento:** validazione per passo, errori sotto il campo, focus sul primo campo errato; titolo del passo a fuoco al cambio; barra di avanzamento; riepilogo delle scelte fatte con *Modifica*; transizioni tra i passi disattivate con movimento ridotto.
- **Invio:** pulsante disabilitato con stato di caricamento; blocco del doppio clic nel browser e sul server; identificativo della richiesta; campo trappola.
- **Consenso privacy:** casella non preselezionata, link a `/privacy-policy`; senza spunta il modulo non parte. Nessuna iscrizione a newsletter.
- **Configuratore della homepage:** con `?moduli=` il messaggio viene precompilato con i moduli scelti.
- **Senza JavaScript:** i tre passi sono visibili uno sotto l'altro, i pulsanti non compaiono, un avviso rimanda a email e WhatsApp.

### Dopo l'invio
- **Fissare una videocall** → `/contatti/prenota` (header, footer, branding Agria, fuori dall'indice): *Scegliete il momento che preferite* e la riga sul collegamento via email, calendario in un riquadro.
- **Ricevere maggiori informazioni** → il modulo lascia il posto a *Richiesta ricevuta* nello stesso riquadro.
- **Conversione:** evento `generate_lead` in `window.dataLayer` (e `gtag`, se presente) con preferenza, settore e servizio; nessun dato personale. Pronto per GA4 via Google Tag Manager.

### Calendario
L'incorporamento documentato da HubSpot richiede il loro script (`MeetingsEmbedCode.js`), escluso dalle regole. Soluzione adottata: iframe della pagina di prenotazione con `?embed=true`, altezza fissa (760 px da tablet, 1180 px su mobile), **caricato solo con il consenso della categoria "calendario prenotazioni"** (imposta cookie di terze parti); collegamento diretto sempre visibile sotto il riquadro. Limiti: l'altezza non si adatta al contenuto e il sito non riceve l'evento di prenotazione confermata.

---

## 3. Integrazione HubSpot — architettura

```
browser (modulo) ──token reCAPTCHA v3, action contact_form──┐
        │ POST /api/contact (JSON)                          │
        ▼                                                   │
app/api/contact/route.js                                    │
  1. dimensione e formato della richiesta                   │
  2. campo trappola → risposta di successo, nessuna chiamata│
  3. limite per IP (5 richieste in 10 minuti)               │
  4. validazione di tutti i campi e dei valori ammessi      │
  5. doppio invio: stesso identificativo → stessa risposta  │
  6. reCAPTCHA: success, action, hostname, punteggio ◄──────┘
     (fallita → rifiuto, HubSpot non viene contattato)
  7. Forms API: submission con consenso al trattamento
  8. CRM: contatto per email (aggiorna o crea)
  9. CRM: azienda per dominio affidabile o per nome (riusa o crea)
 10. associazione contatto-azienda
 11. trattativa con associazioni a contatto e azienda
  → risposta: { ok, next: 'prenota' | 'grazie' } oppure { ok: false, message }
```

File: `lib/contact/config.js` (identificativi e costanti), `http.js` (timeout, ripetizione, registro), `guards.js` (limite per IP, doppio invio), `recaptcha.js`, `hubspot.js`, `notify.js` (segnalazione al team).

### Campi inviati alla Forms API
| Campo | Oggetto | Valore |
|---|---|---|
| `firstname`, `lastname`, `email` | contatto (0-1) | dal modulo |
| `phone` | contatto (0-1) | prefisso + numero, es. `+393331234567` |
| `name` | azienda (0-2) | nome dell'azienda |
| `settore_agria` | contatto (0-1) | `Hospitality`, `Cantina / Vitivinicolo`, `Frantoio / Olivicolo`, `Altro` |
| `servizio_di_interesse_sito` | contatto (0-1) | uno dei cinque servizi |
| `tempistica_progetto` | contatto (0-1) | una delle cinque tempistiche |
| `message` | contatto (0-1) | messaggio, se presente |
| `tipo_richiesta_sito` | contatto (0-1) | `Fissare una videocall` o `Ricevere maggiori informazioni` |

`legalConsentOptions.consent`: `consentToProcess: true`, testo esatto della casella, `communications: []` (nessun consenso di marketing). `context`: `pageUri`, `pageName`, `ipAddress`, `hutk` se presente.

### CRM
- **Contatto:** `GET /crm/v3/objects/contacts/{email}?idProperty=email` → `PATCH` se esiste, altrimenti `POST`; un `409` (contatto appena creato dalla submission) viene risolto con l'ID esistente. Proprietà: email, nome, cognome, telefono, azienda.
- **Azienda:** ricerca per dominio dell'email (esclusi i domini personali, es. gmail.com, libero.it) o per nome; se esiste si riusa, altrimenti si crea con `name`, `settore_agria` e `domain`.
- **Associazione contatto-azienda:** `PUT /crm/v4/objects/contact/{id}/associations/default/company/{id}`.
- **Trattativa:** `[AZIENDA] — Opportunità da qualificare`, pipeline `default`, fase `6062102776`, proprietario `37994989`, `fonte` = `Sito web`, `servizio_di_interesse` mappato (sito web → Digital Presence, E-commerce → Digital Commerce, AI → Digital Automation, Software → Software / Products, Non ancora definito → Non ancora definito). Associazioni nella creazione: contatto (tipo 3) e azienda principale (tipo 5).

### Duplicati ed errori
| Caso | Comportamento |
|---|---|
| Doppio clic | Il browser blocca il secondo invio; il server riconosce lo stesso identificativo e restituisce la stessa risposta senza nuove chiamate |
| Secondo invio su un'altra istanza | La trattativa con lo stesso nome creata negli ultimi 15 minuti viene riusata |
| Errore temporaneo (rete, timeout 8 s, 429, 5xx) | Una sola ripetizione |
| Forms API: 404 su `api.hsforms.com` | Una ripetizione su `api-eu1.hsforms.com` |
| Campo non presente nel modulo HubSpot | Una ripetizione senza quel campo, registrata |
| Proprietà `fonte` o `servizio_di_interesse` inesistente | Trattativa creata senza, registrata |
| 403 ambito mancante | Registrati endpoint e ambiti richiesti; segnalazione al team |
| Submission riuscita, trattativa o azienda fallite | Esito positivo per il visitatore; registro + email al team (Resend) con i dati della richiesta |
| Submission e contatto entrambi falliti | Errore al visitatore, con rimando a email e WhatsApp |
| reCAPTCHA fallito | *Non siamo riusciti a verificare la richiesta. Riprova tra qualche istante.* L'esito non viene ricordato: si può riprovare |

**Registro:** una riga JSON per evento con identificativo della richiesta, passaggio, esito, codici e ambiti. Mai nomi, email, telefoni, messaggi o token (verificato nel registro dei test).

---

## 4. Variabili d'ambiente (Vercel)

| Variabile | Uso | Obbligatoria |
|---|---|---|
| `HUBSPOT_PRIVATE_APP_TOKEN` | API CRM, solo server | Sì |
| `RECAPTCHA_SECRET_KEY` | verifica reCAPTCHA, solo server | Sì |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA nel browser (pubblica per natura) | Sì |
| `RECAPTCHA_MIN_SCORE` | soglia del punteggio | No, predefinita 0.5 |
| `RESEND_API_KEY`, `TEAM_NOTIFICATION_EMAIL`, `RESEND_FROM_EMAIL` | segnalazione al team di una richiesta non completata nel CRM | Consigliate, già previste per il quiz |

Portale, modulo, pipeline, fase, proprietario, regione e mappature restano costanti in `lib/contact/config.js`: non sono segreti. Hostname reCAPTCHA ammessi: `agriasystem.com`, `www.agriasystem.com`, `localhost`.

---

## 5. Differenze rispetto alla documentazione HubSpot

La documentazione ufficiale non è raggiungibile da questo ambiente: le verifiche usano copie datate marzo 2026 delle pagine ufficiali, l'SDK ufficiale HubSpot e la libreria ufficiale di Google.

1. **Host EU della Forms API:** le pagine ufficiali mostrano solo `api.hsforms.com`; community HubSpot e molti progetti indicano che i portali `eu1` devono usare `api-eu1.hsforms.com`. Si usa l'endpoint indicato nel prompt e, su 404, quello EU.
2. **Search CRM:** il limite attuale è di 5 richieste al secondo (non 4); gli oggetti appena creati compaiono nella ricerca dopo qualche istante (per questo il doppio invio è gestito prima, in memoria).
3. **Associations v4:** la guida mostra ora percorsi datati (`/crm/objects/2026-03/...`); i percorsi `/crm/v4/...` usati qui restano supportati fino a marzo 2027 secondo il changelog.
4. **403:** gli ambiti mancanti arrivano in `errors[].context.requiredGranularScopes` (non più `requiredScopes`); il codice legge entrambi.
5. **Proprietà `fonte`:** non esiste una proprietà standard con questo nome; il codice usa `fonte` e, se il portale non la ha, crea la trattativa senza e lo registra. Da confermare il nome interno.
6. **`settore_agria` e campi del modulo:** ogni campo inviato deve esistere nel modulo HubSpot (`FIELD_NOT_IN_FORM_DEFINITION`); il codice li invia come proprietà di contatto (0-1) e il nome azienda come azienda (0-2). Se il modulo li definisce diversamente, vengono scartati e registrati.
7. **Modulo HubSpot con CAPTCHA attivo:** la submission via API fallirebbe (`FORM_HAS_RECAPTCHA_ENABLED`); il CAPTCHA del modulo HubSpot va lasciato disattivo, la protezione è reCAPTCHA v3 sul sito.
8. **Fase e pipeline:** la fase `6062102776` deve appartenere alla pipeline `default`.

---

## 6. Esito della validazione

| Verifica | Esito |
|---|---|
| `npm run build` | Riuscito, **175 pagine** (`/contatti`, `/contatti/prenota`, `/api/contact` dinamico) |
| Token nel bundle | Build con token e chiave segreta di prova: nessuna traccia in `.next`; la chiave pubblica reCAPTCHA è solo nel codice della pagina contatti |
| Segreti nei file tracciati | Nessuno; `.env.example` solo con i nomi |
| HubSpot nel frontend | Nessuno script, stile, iframe o riferimento del modulo HubSpot; l'unico elemento HubSpot è il calendario nel riquadro di `/contatti/prenota` |
| Invio completo (API simulate) | 20 scenari: invio informazioni e videocall, consenso mancante, valori non ammessi, lunghezze, trappola, reCAPTCHA con punteggio basso, action errata, hostname errato, token assente, doppio invio simultaneo e successivo, azienda riusata per dominio, host EU di riserva, campo rifiutato, proprietà rifiutata, 403, trattativa non creata, CRM irraggiungibile, tutto irraggiungibile, limite per IP |
| Chiamate a HubSpot con reCAPTCHA fallito | Nessuna |
| Doppio invio | Una sola trattativa |
| Consenso privacy | Senza spunta nessuna richiesta parte (browser) e il server rifiuta |
| Tastiera | Passi, card, pill, opzioni, prefisso, consenso, riepilogo e pausa delle tappe usabili da tastiera, focus visibile |
| Senza JavaScript | Tre passi leggibili, avviso, domande apribili, tappe tutte accese |
| Scorrimento orizzontale | Nessuno a 375, 768 e 1440 px su `/contatti` e `/contatti/prenota` |
| Console | Nessun errore |
| Invio reale verso HubSpot | Da eseguire in locale: questo ambiente non raggiunge HubSpot né Google |

### Contrasti
| Elemento | Rapporto |
|---|---|
| Grigio su bianco / off-white (descrizioni, note) | 5,05 / 4,70:1 |
| Green-dark su bianco (link, icone, numeri) | 6,01:1 |
| Errori rosso 700 su bianco | 6,47:1 |
| Bianco 70% su ink (tappe) | 9,68:1 |
| Titoli delle tappe non raggiunte, bianco 72% su ink | 10,1:1 |
| Ink su green-bright (tappa attiva) | 12,13:1 |

---

## 7. Da confermare
- Orari indicativi: *Lunedì-venerdì, 9:00-18:00*.
- Tempo di risposta nelle domande: *di norma entro un giorno lavorativo*.
- Nome interno della proprietà "fonte" della trattativa.
- Etichetta della categoria cookie "Calendario prenotazioni (Calendly)": da aggiornare con le pagine legali.

## 8. Note per le pagine legali
L'informativa privacy e la cookie policy dovranno coprire: invio dei dati del modulo a HubSpot (contatto, azienda, trattativa), reCAPTCHA v3 di Google caricato sulla pagina contatti, calendario HubSpot nel riquadro di prenotazione (cookie di terze parti, categoria calendario), caricamento delle foto dal CDN di Unsplash.

---

## 9. Assistente

File: `components/agria/assistant/Assistant.jsx` (interfaccia), `lib/assistant/match.js` (scelta della risposta), `content/agria/assistente.js` (**tutti i testi**). Montato nel punto di innesto `ConciergeSlot` del layout: presente su tutte le pagine.

### Funzionamento
- **Nessun modello AI e nessun servizio esterno.** La domanda viene normalizzata (minuscole, senza accenti né punteggiatura) e confrontata con le parole chiave di ogni risposta; vince quella con più corrispondenze, e le frasi lunghe pesano di più.
- **Nessuna corrispondenza** → *Su questo non ho una risposta preparata, e preferisco non improvvisare.* e le due vie: **Scrivi su WhatsApp** (`+39 366 344 5417`, messaggio precompilato) e **Apri il form** (`/contatti`).
- **Richiesta esplicita di una persona** (parlare con qualcuno, operatore, chiamare, WhatsApp, videocall…) → stesse due vie.
- **Dati personali** (email o numero di telefono nel messaggio) → il messaggio non viene mostrato né conservato; l'assistente invita a usare il modulo.
- **Dichiarato automatico:** sotto il nome, *Assistente automatico, non un operatore. Risposte preparate dal team.*, e nel primo messaggio.
- **Nessuna registrazione:** la conversazione vive solo in memoria; nel browser si salva soltanto lo stato aperto/chiuso (`sessionStorage`).

### Risposte curate
| id | Suggerimento | Argomento |
|---|---|---|
| `chi-siete` | Chi siete? | technology company a Perugia, sviluppo interno |
| `cosa-fate` | **Cosa fate esattamente?** | le tre aree, con link |
| `settori` | **Lavorate col mio settore?** | hospitality, cantine, frantoi; altri settori valutati nella prima analisi |
| `come-si-inizia` | Come si inizia? | prima analisi, ricontatto, proposta; senza costi né impegni |
| `tempi` | **Quanto tempo serve?** | nessun tempo standard: si definisce nella proposta |
| `costi` | Quanto costa? | nessun listino: investimento nella proposta |
| `cosa-non-fate` | Cosa non fate? | lavori spot, gestionali non mantenuti, subappalti, pacchetti, social, grafica per la stampa |
| `ai` | Usate l'intelligenza artificiale? | metodo di lavoro, applicazioni misurabili |
| `dove` | Dove siete? | Via Ponte Vecchio, 06135 Perugia; tutta Italia; versioni in inglese |
| `dati` | Come trattate i dati? | chat senza registrazione, dati del modulo solo per la risposta, proprietà del cliente |
| `persona` | **Voglio parlare con qualcuno** | passaggio a WhatsApp e al modulo |
| `saluto`, `grazie` | — | cortesia |

In grassetto i quattro suggerimenti iniziali (`assistant.suggestions`); un suggerimento già usato sparisce.

### Come modificarle
In `content/agria/assistente.js`: cambiare `text` per il contenuto, `keywords` per le domande che la attivano (minuscole, senza accenti; un frammento come `prenotazion` copre prenotazione e prenotazioni; spazi ai bordi, come `' social '`, per una parola isolata), `links` per i rimandi, `handoff: true` per proporre WhatsApp e modulo. Una nuova risposta è un nuovo oggetto nell'elenco; un nuovo suggerimento iniziale è il suo `id` in `assistant.suggestions`. Nessun altro file da toccare.

### Comportamento e accessibilità
- Pulsante a pillola in basso a destra (*Domande?* da 768 px, solo icona da 48 px su mobile) con etichetta accessibile *Apri l'assistente* e `aria-expanded`.
- Riquadro `role="dialog"` non modale con titolo; focus sul campo all'apertura, di nuovo sul campo dopo ogni domanda; **Esc** chiude e riporta il focus sul pulsante; risposte annunciate (`aria-live`); focus visibile su ogni controllo.
- Chiuso di default; lo stato aperto o chiuso resta durante la navigazione e dopo un ricaricamento; seguire un link dell'assistente lo chiude, per lasciare libera la pagina.
- Non compare mentre il banner dei cookie è aperto e si nasconde se viene riaperto.
- Mobile: chiuso occupa 48×48 px; aperto, 343 px di larghezza e al massimo il 70% dell'altezza. Lo slot passa da `z-index` 40 a 35, così il menu mobile (40) lo copre invece di esserne coperto.
- Senza JavaScript non compare; con movimento ridotto nessuna animazione.

### Validazione dell'assistente
| Verifica | Esito |
|---|---|
| Suggerimenti, domande libere, risposta mancante, dati personali | Corretti (20 domande di prova, tutte con la risposta attesa o con il passaggio a una persona) |
| Dati personali salvati nel browser | Nessuno |
| Tastiera | Apertura con Invio, focus sul campo, Esc chiude e riporta il focus |
| Stato tra le pagine | Aperto ricordato, chiuso ricordato |
| Banner cookie | Assistente nascosto finché il banner è aperto |
| Menu mobile | Copre l'assistente |
| Scorrimento orizzontale | Nessuno a 375, 768 e 1440 px |
| Console | Nessun errore |

### Contrasti
| Elemento | Rapporto |
|---|---|
| Grafite su bianco (messaggi dell'assistente) | 18,9:1 |
| Bianco su grafite (messaggi del visitatore) | 18,9:1 |
| Bianco 72% su ink (avviso "assistente automatico") | 10,2:1 |
| Bianco su green-dark (WhatsApp, invio) | 6,01:1 |
| Green-dark su bianco (link) | 6,01:1 |
| Segnaposto grigio su bianco | 5,05:1 |
