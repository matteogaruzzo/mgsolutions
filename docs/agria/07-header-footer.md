# AGRIA — Prompt 07: Header (revisione) e footer

**Data:** 2026-09-23
**Branch:** `agria/redesign`
**Riferimento visivo:** `docs/agria/concept/agria-concept-v3.html`
**Natura del lavoro:** header portato al tema scuro della concept v3, barra annuncio, nuovo footer AGRIA al posto di quello legacy, token per superfici scure. Nessun contenuto di pagina, URL, metadata o redirect modificato. `main` non è stato toccato.

---

## 1. Commit

| Commit | Contenuto |
|---|---|
| `feat(agria): token per superfici scure` | Token `agria-ink`, `agria-green-bright`, `agria-on-dark`, `agria-on-dark-muted`; sezione "Superfici scure" in `/design-system` |
| `feat(agria): header scuro e barra annuncio` | Header sticky scuro, lockup, barra annuncio configurabile, pannelli e menu mobile scuri, variante `bright` di `Button` |
| `feat(agria): footer AGRIA` | Nuovo footer, sostituito nel layout |

---

## 2. Token aggiunti

| Token | Valore | Dove |
|---|---|---|
| `agria-ink` | `#080C0A` (`--agria-ink: 8 12 10`) | Fondo di header, barra annuncio, pannelli, menu mobile; in futuro hero e chiusura |
| `agria-green-bright` | `#7AE098` (`--agria-green-bright: 122 224 152`) | **Solo su fondo scuro**: CTA, link della barra annuncio, anello di focus su scuro |
| `agria-on-dark` | bianco pieno | Testo principale su scuro |
| `agria-on-dark-muted` | bianco al 70% (valore fisso, senza modificatore di opacità) | Testo secondario e voci di menu su scuro, "System" nel lockup |

Definiti in `app/globals.css` (canali RGB, come gli altri token Agria) e in `tailwind.config.js`. `agria-ink` e `agria-green-bright` supportano i modificatori di opacità (`bg-agria-ink/[0.92]`).

---

## 3. Contrasti calcolati (WCAG 2.1)

Calcolati con la stessa funzione di `app/(design-system)/design-system/contrast.js`, visibili anche in `/design-system` → "Superfici scure".

| Combinazione | Rapporto | AA testo normale (4.5:1) |
|---|---|---|
| Bianco su ink | 19.68:1 | Passa |
| Bianco 70% su ink | 9.68:1 | Passa |
| Green-bright su ink | 12.13:1 | Passa |
| Ink su green-bright (testo della CTA) | 12.13:1 | Passa |
| Bianco su header sopra contenuto bianco (ink 92% → `#1C1F1E`) | 16.61:1 | Passa |
| Bianco 70% su header sopra contenuto bianco | 8.73:1 | Passa |
| Green-bright su header sopra contenuto bianco | 10.24:1 | Passa |
| Green-dark su ink | 3.27:1 | **Non usato su scuro**: sotto 4.5:1, su fondo scuro focus e accenti usano green-bright |

Footer (fondo bianco): nessuna combinazione nuova. Grafite 18.88:1, grey 5.05:1, green-dark 6.01:1, già validati nel report 04.

---

## 4. Componenti creati e modificati

### Creati
| File | Contenuto |
|---|---|
| `components/agria/announce.js` | **Unico punto di configurazione** della barra annuncio: `enabled`, `text`, `link { label, href }`. Con `enabled: false` la barra sparisce da tutto il sito. |
| `components/agria/AnnouncementBar.jsx` | Barra su fondo ink, testo al 70%, link green-bright. Contenuto iniziale: "Ricerca e sviluppo: stiamo costruendo strumenti propri per hospitality, vino e olio." e il link "Scopri di più" → `/azienda`. |
| `components/agria/BrandLockup.jsx` | Marchio + "**Agria** System" (500 / 300). Toni `dark` (header) e `light` (footer). Il marchio è la maschera CSS del file esistente `agria-logo-black-centered.svg` e prende il colore del testo. Il link ha `aria-label="Agria System, home"`. |
| `components/agria/Footer.jsx` | Footer AGRIA (vedi §6). |

### Modificati
| File | Modifica |
|---|---|
| `components/agria/Header.jsx` | Riscritto il layout: barra annuncio in flusso, header `sticky top-0`, fondo `ink/92` con `backdrop-blur-[16px]` e bordo `white/8%`, contenitore di 1220px come nella concept, CTA `Button variant="bright"`. Il menu mobile si apre a partire dal bordo inferiore dell'header, misurato all'apertura. Logica di pannelli, `Esc`, click esterno e cambio pagina invariata. Rimossa l'ombra legata allo scroll della pillola. |
| `components/agria/HeaderPanel.jsx` | Solo colori: trigger al 70% che diventa bianco su hover, apertura o voce attiva; pannello su ink con bordo `white/10`; focus green-bright. |
| `components/agria/MobileMenu.jsx` | Colori scuri, prop `top`, CTA con `Button variant="bright"`. Focus trap, blocco dello scroll ed `Esc` invariati. |
| `components/agria/LanguageSwitcher.jsx` | Colori scuri; sempre dietro `NEXT_PUBLIC_SHOW_LOCALE_SWITCH`. |
| `components/agria/ui/Button.jsx` | Nuova variante `bright` (solo su scuro, con sollevamento di 1px e alone su hover, disattivati con `prefers-reduced-motion`). L'anello di focus ora è definito per variante. `as` riceve `href` per qualsiasi tag diverso da `button`, così `as={Link}` funziona. |
| `app/(site)/layout.jsx` | Import di `Footer` da `@/components/agria/Footer`. `components/Footer.jsx` resta nel repository, inutilizzato. |
| `app/globals.css`, `tailwind.config.js` | Token (§2). |
| `app/(design-system)/design-system/{contrast.js,page.jsx}` | Righe di contrasto su scuro, sezione "Superfici scure", tabella dei contrasti estratta in `ContrastTable` e riusata dalle due sezioni. |

---

## 5. Scelte dove la concept lasciava spazio

- **Marchio senza dettaglio verde.** Il logo reale (A + foglia) esiste solo come raster, senza tracciati separati: non è possibile colorare la foglia di green-bright. Deciso con il committente: marchio interamente bianco via maschera CSS. Quando arriverà un SVG con A e foglia separati basterà sostituire la maschera in `BrandLockup.jsx`. L'icona della concept (triangolo con punto verde) è un segnaposto e non è stata usata.
- **Opacità dell'header 92% invece del 74% della concept.** Il sito è quasi tutto bianco: al 74% l'header sopra contenuto chiaro appariva grigio medio invece che scuro. Al 92% resta percepibile la sfocatura e il contrasto migliora in ogni caso (§3).
- **"System" al 70% invece del 55%.** Al 55%, sopra contenuto bianco, scendeva sotto 4.5:1; il 70% coincide con il token `on-dark-muted`.
- **Sticky, non fixed.** Come nella concept: la barra annuncio scorre via e l'header resta in alto. Deciso con il committente.
- **Breakpoint desktop `md` (768px)**, come nel Prompt 06 (la concept usa 900px). A 768px lockup, navigazione e CTA entrano senza sovrapposizioni (verificato, §7).
- **Dati fiscali:** "© {anno} Agria System · P.IVA IT04006460549", testo scelto dal committente. Anno calcolato a runtime.
- **Intestazioni delle colonne del footer:** `Eyebrow` come `h2`, ogni colonna è un `nav` con etichetta propria.

---

## 6. Footer

- Colonne: **Servizi** (Digital Presence, Digital Commerce, Digital Automation, derivati da `nav-data.js` e quindi sempre allineati al menu), **Settori** (Hospitality, Vino, Olio, stessa fonte), **Azienda** (Azienda `/azienda`, Insights `/blog`, Contatti `/contatti`), **Legale** (Privacy, Cookie, Termini, Crediti immagini, Preferenze cookie).
- "Preferenze cookie" chiama il `reopenConsentBanner` esistente (`lib/consent.js`).
- Assenti: newsletter, referral, prezzi, "Prenota una call", social, MG Solutions, nome del titolare.
- 2 colonne su mobile, 4 da `md`.

**Link che oggi danno 404** (come nel menu del Prompt 06, pagine previste nei Prompt 09/10): `/servizi/digital-*`, `/settori/hospitality|vino|olio`, `/azienda` (anche il link della barra annuncio).

---

## 7. Esito della validazione

- `npm run build`: **riuscito**, 170/170 pagine generate, stesso numero del Prompt 06.
- Header, barra annuncio e footer nuovi presenti su `/`, `/settori/wine-viticulture`, `/blog/shopify-velocita-conversioni`, `/privacy-policy`, sia a 1280px sia a 375px (un solo `footer` per pagina).
- Nessuna occorrenza di "MG Solutions", nome del titolare, newsletter, referral, "Prenota una call" o "€" nel testo di header e footer, su tutte e quattro le pagine.
- Tastiera: il trigger "Servizi" apre il pannello; `Esc` lo chiude e riporta il focus sul trigger. Menu mobile: il focus entra nel pannello all'apertura, `Esc` lo chiude. Focus visibile con anello green-bright su scuro e green-dark su chiaro.
- Sticky: dopo 1500px di scroll l'header resta a `top: 0`.
- Mobile 375px: nessuno scorrimento orizzontale su nessuna delle quattro pagine; menu a partire dal bordo dell'header (`menuTop === headerBottom`); nessun elemento del footer oltre la larghezza.
- 1024px: nessuno scorrimento orizzontale. 768px: l'header entra (ultimo elemento a 713px su 753 utili), ma la homepage scorre di 9px in orizzontale per colpa del **carosello legacy della homepage** (`snap-start … md:w-[32%]`), non dell'header. Fuori perimetro, sparirà con la nuova homepage del Prompt 08.
- "Preferenze cookie": il click mostra il banner di consenso.
- Console: nessun errore o eccezione.
- `next lint` sui file toccati: nessun errore. In `app/(site)` restano errori `react/no-unescaped-entities` preesistenti in una pagina legacy, non toccata.

**Metodo e limiti:** le verifiche responsive sono state fatte con iframe a larghezza fissa nella pagina (come nel Prompt 06), non su un dispositivo touch reale. Nessun test con screen reader reale.

---

## 8. Effetto noto sulle pagine legacy

Le pagine legacy hanno un padding superiore pensato per il vecchio header `fixed`. Con barra annuncio e header in flusso, in cima a quelle pagine compare circa 100px di spazio in più. Il contenuto delle pagine non è stato toccato, come richiesto: lo spazio sparisce man mano che le pagine vengono rifatte (dal Prompt 08).
