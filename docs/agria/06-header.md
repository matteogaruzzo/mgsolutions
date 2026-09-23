# AGRIA — Prompt 06: Header e navigazione globale

**Data:** 2026-09-23
**Branch:** `agria/redesign`
**Natura del lavoro:** primo cambiamento visibile del redesign. Il menu MG Solutions (`components/Nav.jsx`) sparisce da tutte le pagine del sito e viene sostituito dall'header AGRIA. `Nav.jsx` resta nel repository, inutilizzato, fino al Prompt 15. `main` non è stato toccato.

---

## 1. File creati

| File | Contenuto |
|---|---|
| `components/agria/Header.jsx` | Orchestratore: pillola flottante, logo, nav centrale, selettore lingua, CTA, toggle mobile. Gestisce scroll, stato pannelli, click esterno, `Esc`, chiusura al cambio pagina. |
| `components/agria/HeaderPanel.jsx` | Pannello a tendina riutilizzabile per Servizi/Settori: hover (con delay anti-flicker) + click, tastiera (`ArrowDown` apre e sposta il focus, `Esc` chiude e ritorna il focus al trigger). |
| `components/agria/MobileMenu.jsx` | Pannello mobile a tutta altezza, accordion per Servizi/Settori, blocco scroll del `body`, focus trap semplice (Tab/Shift+Tab ciclano dentro il pannello), chiusura con `Esc`. |
| `components/agria/LanguageSwitcher.jsx` | Selettore IT/EN, nascosto dietro `NEXT_PUBLIC_SHOW_LOCALE_SWITCH` (assente/`false` oggi). Usa `locales`/`defaultLocale` da `lib/i18n`, già pronto per pagine `/en` future. |
| `components/agria/nav-data.js` | Dati dei pannelli (voci, href, descrizioni neutre di una riga) e della CTA, separati dalla logica dei componenti. |

## 2. File modificati

| File | Modifica |
|---|---|
| `app/(site)/layout.jsx` | `<Nav />` → `<Header />`. Rimossi `<QuizFloatingButton />` e `<QuizPopup />` (import e uso). Footer, cookie banner, metadata, JSON-LD invariati. |
| `components/agria/ui/Text.jsx` | Aggiunta prop `measure` (default `true`): applica `max-w-prose` (65ch, ~600px) ai testi. Disattivabile con `measure={false}`. |
| `app/(design-system)/design-system/page.jsx` | Ridotto lo spazio tra blocchi interni alle sezioni (`gap-10`/`gap-8` → `gap-6` sui `Container` di primo livello), lasciato invariato lo spazio tra sezioni (`py-agria-section`, su `Section`). Rimosso `max-w-2xl` ridondante nell'hero (ora gestito da `Text`). Aggiunte tre righe alla lista "Forme e spazi" che documentano il nuovo ritmo verticale e `max-w-prose`. |

**Non toccati:** `components/Nav.jsx`, la route `/quiz` e tutto `components/Quiz/`, `Footer.jsx`, `CookieConsentBanner.jsx`, contenuti, metadata, route, redirect.

---

## 3. Struttura e comportamento

### Desktop
- Pillola flottante: `fixed top-4`, staccata dai bordi, sfondo `agria-white/95` con `backdrop-blur`, bordo `agria-border`, ombra che passa da `shadow-sm` a `shadow-md` dopo 8px di scroll (`transition-shadow`, rispetta `motion-reduce`).
- Sinistra: logo (`agria-logo-black-centered.svg`, solo icona) + "AGRIA" in Inter 500, tracking leggero, `agria-graphite`.
- Centro: Servizi e Settori come pannelli (`HeaderPanel`), Azienda come link diretto a `/azienda`.
- Destra: `LanguageSwitcher` (nascosto oggi) + CTA "Parliamo del progetto" (pillola `agria-green-dark`, hover `agria-graphite`, → `/contatti`).
- Pannelli: si aprono su hover (150ms di delay alla chiusura per tollerare il passaggio del mouse tra trigger e pannello) e su click/`Enter`; tre voci per pannello, titolo + descrizione di una riga.
- Stato attivo: voce del pannello evidenziata (`font-medium text-agria-graphite`) quando l'URL corrente inizia con uno dei suoi `href`; link diretto Azienda con `aria-current="page"` quando attivo.

### Mobile (< 768px, breakpoint `md` di Tailwind)
- Pillola compatta con solo logo e bottone hamburger (`aria-label`, `aria-expanded`, `aria-controls`).
- Pannello a tutta altezza (`role="dialog"`, `aria-modal`), accordion nativo per Servizi/Settori, link Azienda e CTA in fondo.
- `document.body.style.overflow = 'hidden'` mentre il menu è aperto; ripristinato alla chiusura.
- Focus trap: Tab/Shift+Tab restano dentro il pannello finché è aperto; focus iniziale sul primo elemento interattivo all'apertura.

### Tastiera (verificato via estensione Chrome)
- `Tab` raggiunge logo, Servizi, Settori, Azienda, selettore lingua (se attivo), CTA, hamburger, in ordine; anello di focus (`focus-visible:ring-2 ring-agria-green-dark`) sempre visibile.
- `ArrowDown` su un trigger di pannello lo apre e sposta il focus sulla prima voce.
- `Esc` chiude il pannello aperto (desktop) o il menu mobile e ritorna il focus al trigger.
- Click fuori dall'header chiude qualsiasi pannello aperto.

---

## 4. URL collegate dal menu non ancora esistenti

Come previsto dal prompt (creazione nei Prompt 09/10), questi link **danno 404 in locale** oggi:

- `/servizi/digital-presence`, `/servizi/digital-commerce`, `/servizi/digital-automation`
- `/settori/hospitality`, `/settori/vino`, `/settori/olio`
- `/azienda`

Non sono state create pagine segnaposto, come richiesto.

---

## 5. Aggiustamenti alle fondamenta

- **`Text` — larghezza massima:** prop `measure` (default `true`) applica `max-w-prose` (65ch ≈ 600px, Tailwind core, non sovrascritto nel progetto). Disattivabile per casi dove il testo deve occupare tutta la larghezza disponibile (`measure={false}`). Impatto contenuto: `Text` è oggi importato solo da `/design-system` (verificato con grep) — nessuna altra pagina cambia aspetto.
- **Ritmo verticale:** lo spazio tra il blocco etichetta/titolo (`gap-3`) e il blocco di contenuto di una sezione era `gap-8`/`gap-10`, ora `gap-6` su tutti i `Container` di primo livello in `/design-system`. Lo spazio *tra* sezioni diverse (`py-agria-section`, sul componente `Section`) non è stato toccato. Un solo `gap-8` è rimasto intenzionalmente: è lo spazio tra le righe della lista "Tipografia" (contenuto, non struttura header/blocco), fuori dal perimetro di questo aggiustamento.

---

## 6. Esito validazione

- `npm run build` → **riuscito**, 170 route generate (stesso numero di prima).
- `npm run dev`: header AGRIA verificato su homepage, `/settori/wine-viticulture`, `/blog/shopify-velocita-conversioni`, `/privacy-policy` — sempre presente, nessun riferimento visibile a "MG Solutions" nell'header (verificato via screenshot e via markup: la classe/span specifici del vecchio brand in `Nav.jsx` non compaiono più nell'HTML).
- `/quiz` risponde ancora 200; nessun pulsante fluttuante del quiz e nessun popup quiz presenti su nessuna pagina testata.
- Tastiera: verificata via estensione Chrome (vedi §3) — Tab, `ArrowDown`, `Esc`, focus visibile, ritorno del focus al trigger.
- Mobile (375px): verificato tramite un iframe di test a 375×700px iniettato nella pagina (il resize diretto della finestra del browser non ha funzionato in questa sessione, vedi nota sotto) — menu apribile/chiudibile via click ed `Esc`, nessuno scroll orizzontale (`document.documentElement.scrollWidth === clientWidth`), CTA raggiungibile in fondo al pannello.
- Contrasto testo: nessuna combinazione colore nuova introdotta — l'header riusa `agria-graphite`/`agria-grey`/`agria-green-dark` su `agria-white`, già validati ≥4.5:1 nel report della fase 04 (`docs/agria/04-design-foundations.md`, §4).

**Non verificato in questo passaggio:**
- Il resize diretto della finestra Chrome via estensione non ha avuto effetto in questa sessione (bug/limite dell'ambiente, non dell'header); la verifica mobile è stata comunque completata con un iframe di test a viewport fisso, equivalente ai fini della verifica dei media query e del comportamento del menu, ma non testato su un vero touch screen.
- Non è stato eseguito un controllo con screen reader reale (solo ruoli/attributi ARIA verificati nel codice e nel DOM).

---

## 7. Nota operativa

Durante la verifica, `npm run build` (produzione) è stato eseguito mentre `npm run dev` era attivo sulla stessa cartella `.next`, corrompendo la cache del dev server (`SyntaxError: Unexpected end of JSON input`). Per risolvere è stato necessario terminare i processi Node e ripulire `.next` prima di riavviare `npm run dev`. Nessun impatto sul codice sorgente o sui file versionati: build e dev server condividono `.next` per progetto, è sufficiente non farli girare in parallelo nelle prossime fasi.
