# AGRIA — Prompt 04: Design foundations

**Data:** 2026-09-22
**Branch:** `agria/redesign`
**Natura del lavoro:** additivo. Nessuna pagina, componente, token o asset legacy è stato rimosso, rinominato o modificato nell'aspetto. `main` non è stato toccato.

---

## 1. File creati e modificati

### Modificati (additivi, nessuna riga esistente toccata o rimossa)

| File | Modifica |
|---|---|
| `app/globals.css` | Aggiunte 7 variabili colore Agria in `:root`, come canali RGB (per abilitare i modificatori di opacità Tailwind, es. `bg-agria-green/10`). Nessuna riga esistente toccata. |
| `tailwind.config.js` | Aggiunto namespace `agria.*` in `theme.extend`: `colors`, `fontFamily`, `fontSize` (scala tipografica), `borderRadius`, `spacing`. Nessuna chiave legacy toccata. |
| `app/layout.jsx` | Caricati Inter e IBM Plex Mono via `next/font/google`, esposti come variabili CSS su `<html>` insieme a Poppins. Il `body` continua a usare esplicitamente `var(--font-poppins)`: il font di default non è cambiato. |

### Creati

| File | Contenuto |
|---|---|
| `components/agria/ui/Container.jsx` | Contenitore centrato, max 1200px |
| `components/agria/ui/Section.jsx` | Sezione con varianti sfondo bianco/off-white, spaziatura verticale fluida |
| `components/agria/ui/Eyebrow.jsx` | Etichetta di sezione, IBM Plex Mono |
| `components/agria/ui/Heading.jsx` | Titoli display/h1/h2/h3, tag HTML indipendente dallo stile |
| `components/agria/ui/Text.jsx` | Testo lg/body/sm, variante `muted` |
| `components/agria/ui/Button.jsx` | Bottone pillola, varianti primary/secondary/ghost |
| `components/agria/ui/TextLink.jsx` | Link con freccia animata |
| `components/agria/ui/Card.jsx` | Card con etichetta, titolo, testo, azione opzionale |
| `components/agria/ui/Tabs.jsx` | Tabs accessibili (ARIA, navigazione da tastiera) |
| `components/agria/ui/HeroBackdrop.jsx` | Gradiente radiale verde leggerissimo per l'hero |
| `components/agria/ui/form/Field.jsx` | Wrapper label + errore per i campi form |
| `components/agria/ui/form/Input.jsx` | Campo testo |
| `components/agria/ui/form/Textarea.jsx` | Area di testo |
| `components/agria/ui/form/Select.jsx` | Menu a tendina |
| `components/agria/ui/form/Checkbox.jsx` | Checkbox con label |
| `components/agria/ui/index.js` | Barrel export di tutti i componenti |
| `app/design-system/page.jsx` | Pagina di anteprima (gate dev/env, `noindex`) |
| `app/design-system/contrast.js` | Calcolo contrasti WCAG 2.1 dai token reali |
| `app/design-system/layout.jsx` | Layout annidato: font Inter/IBM Plex Mono di default, sfondo bianco Agria, testo agria-graphite. Vedi nota architetturale in §8 |
| `docs/agria/04-design-foundations.md` | Questo report |

### Non toccati (confermato)

- Nessun componente legacy in `components/` (fuori da `components/agria/`).
- `app/sitemap.js` — non referenzia `/design-system`, nessuna modifica necessaria.
- Nessuna pagina esistente importa `components/agria/*` o linka `/design-system` (verificato con `grep`).
- Nessuna nuova dipendenza in `package.json`.

---

## 2. Token

### Colori (canali RGB in `app/globals.css` → namespace `agria` in `tailwind.config.js`)

| Token Tailwind | Variabile CSS | Hex | Uso |
|---|---|---|---|
| `agria-green` | `--agria-green: 79 143 87` | `#4F8F57` | Accento: titoli grandi, icone, bordi, stati attivi, gradiente hero. Mai per testo piccolo |
| `agria-green-dark` | `--agria-green-dark: 58 110 68` | `#3A6E44` | Testi verdi, link, bottone primario |
| `agria-graphite` | `--agria-graphite: 17 17 17` | `#111111` | Testo principale, bottone secondario, superfici scure |
| `agria-white` | `--agria-white: 255 255 255` | `#FFFFFF` | Sfondo principale |
| `agria-offwhite` | `--agria-offwhite: 246 247 244` | `#F6F7F4` | Sezioni alternate, superfici secondarie |
| `agria-grey` | `--agria-grey: 107 112 108` | `#6B706C` | Testo secondario |
| `agria-border` | `--agria-border: 228 232 227` | `#E4E8E3` | Bordi, divisori |

Sintassi Tailwind: `rgb(var(--agria-*) / <alpha-value>)` → supporta i modificatori di opacità (`bg-agria-green/10`).

### Font

| Ruolo | Font | Variabile CSS | Classe Tailwind |
|---|---|---|---|
| Interfaccia e titoli | Inter | `--font-agria-sans` | `font-agria-sans` |
| Etichette e dettagli | IBM Plex Mono (400, 500) | `--font-agria-mono` | `font-agria-mono` |

Caricati in `app/layout.jsx` via `next/font/google`, esposti solo come variabili su `<html>`. Il `body` resta su Poppins.

### Scala tipografica (`tailwind.config.js` → `theme.extend.fontSize`)

| Classe | Dimensione (clamp) | Line-height | Tracking | Peso |
|---|---|---|---|---|
| `text-agria-display` | `clamp(2.75rem, 2rem + 3vw, 4.5rem)` | 1.05 | -0.02em | 300 |
| `text-agria-h1` | `clamp(2.25rem, 1.75rem + 2.2vw, 3.5rem)` | 1.1 | -0.02em | 300 |
| `text-agria-h2` | `clamp(1.75rem, 1.5rem + 1.1vw, 2.5rem)` | 1.15 | -0.01em | 400 |
| `text-agria-h3` | `clamp(1.375rem, 1.25rem + 0.5vw, 1.75rem)` | 1.25 | — | 500 |
| `text-agria-lg` | `1.25rem` (20px) | 1.6 | — | — |
| `text-agria-body` | `1.0625rem` (17px) | 1.7 | — | — |
| `text-agria-sm` | `0.875rem` (14px) | 1.5 | — | — |
| `text-agria-label` | `0.75rem` (12px) | 1.4 | 0.12em | — |

### Forme e spazi

| Token | Valore | Uso |
|---|---|---|
| `rounded-agria-card` | `1.5rem` (24px) | Raggio card |
| `py-agria-section` (spacing) | `clamp(4rem, 1.875rem + 9vw, 10rem)` | Spaziatura verticale fra sezioni: ~64px mobile → 120-160px desktop, fluida |
| Bottoni | `rounded-full` (Tailwind standard) | Pillola |
| Bordi | `border` + `border-agria-border` | 1px |

---

## 3. Componenti

| Componente | Props principali | Varianti |
|---|---|---|
| `Container` | `as`, `className` | — |
| `Section` | `as`, `background`, `className` | `background`: `white` \| `offwhite` |
| `Eyebrow` | `as`, `children` | — |
| `Heading` | `level`, `as`, `children` | `level`: `display` \| `h1` \| `h2` \| `h3` |
| `Text` | `as`, `size`, `muted`, `children` | `size`: `lg` \| `body` \| `sm` |
| `Button` | `as`, `href`, `variant`, `type`, `children` | `variant`: `primary` \| `secondary` \| `ghost` |
| `TextLink` | `as`, `href`, `children` | — |
| `Card` | `eyebrow`, `title`, `children`, `action`, `className` | — |
| `Tabs` | `items` (`{label, content, id?}[]`), `defaultIndex` | ARIA `tablist`/`tab`/`tabpanel`, frecce/Home/End |
| `HeroBackdrop` | `className` | Richiede genitore con `position: relative` |
| `Field` | `label`, `htmlFor`, `error`, `children` | Wrapper interno |
| `Input` | `label`, `error`, `id`, ...props nativi | — |
| `Textarea` | `label`, `error`, `id`, `rows`, ...props | — |
| `Select` | `label`, `error`, `id`, `children` (`<option>`), ...props | — |
| `Checkbox` | `label`, `error`, `id`, ...props | — |

Tutti gli elementi interattivi (`Button`, `TextLink`, `Tabs`, campi form) hanno `focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2`.

Nessun componente contiene testi di marketing, nomi di clienti, metriche o prezzi: solo props e testi neutri passati dall'esterno.

---

## 4. Tabella contrasti (WCAG 2.1, calcolata da `app/design-system/contrast.js`)

| Combinazione | Rapporto | AA normale (4.5:1) | Uso |
|---|---|---|---|
| `#111111` su `#FFFFFF` | **18.88:1** | Passa | Testo principale |
| `#3A6E44` su `#FFFFFF` | **6.01:1** | Passa | Link, testo verde, eyebrow |
| `#6B706C` su `#FFFFFF` | **5.05:1** | Passa | Testo secondario |
| `#111111` su `#F6F7F4` | **17.56:1** | Passa | Testo principale su sezioni alternate |
| `#3A6E44` su `#F6F7F4` | **5.59:1** | Passa | Link su sezioni alternate |
| `#6B706C` su `#F6F7F4` | **4.70:1** | Passa (di poco) | Testo secondario su sezioni alternate |
| `#FFFFFF` su `#3A6E44` | **6.01:1** | Passa | Testo su bottone primario |
| `#FFFFFF` su `#111111` | **18.88:1** | Passa | Testo su bottone secondario |
| `#4F8F57` su `#FFFFFF` | **3.89:1** | Fallisce | **Non usato per testo** — solo icone, bordi, accenti, gradiente hero |

Tutte le combinazioni effettivamente usate per testo raggiungono almeno 4.5:1. `agria-green` fallisce come previsto dal Master Plan (era già noto, 3.9:1) ed è per questo escluso dal testo in ogni componente: la scelta di `agria-green-dark` per link/eyebrow/bottone primario è la mitigazione già applicata.

Il valore più vicino alla soglia è `#6B706C` su `#F6F7F4` (4.70:1): se in futuro si volesse un margine di sicurezza maggiore su quella combinazione specifica, andrebbe leggermente scurito il grey o schiarito l'off-white — non necessario oggi, ma segnalato.

---

## 5. Esito build e validazione

- `npm run build` → **riuscito**, 168 route generate, nessun errore.
- `npm run dev` → `/`, `/settori/wine-viticulture`, `/blog/shopify-velocita-conversioni` rispondono **200**, aspetto invariato (classi legacy intatte, font di default ancora Poppins — verificato leggendo `<html>` e `body` renderizzati).
- `/design-system`:
  - build di produzione **senza** `NEXT_PUBLIC_DESIGN_PREVIEW` → HTML generato con marker `id="__next_error__"` (404 reale, non un semplice redirect visivo).
  - build con `NEXT_PUBLIC_DESIGN_PREVIEW=true` → contenuto reale renderizzato staticamente.
  - `npm run dev` (NODE_ENV=development) → 200, contenuto reale.
- Sintassi dei componenti verificata compilando una pagina di prova temporanea che li importava tutti (creata, buildata con successo, poi rimossa — non è mai entrata in git).
- Contrasti: vedi tabella §4, tutti i valori usati per testo ≥4.5:1.
- **Non verificato in questo passaggio:** navigazione da tastiera e resa visiva nel browser reale — l'estensione Chrome non era connessa in questa sessione. Verificati invece via codice: ruoli ARIA (`tablist`/`tab`/`tabpanel`) e frecce/Home/End su `Tabs`, classi `focus-visible` su tutti gli elementi interattivi, struttura semantica di label/errore sui campi form. Consigliato un passaggio visivo con tastiera reale alla prima occasione.

---

## 6. Come aprire l'anteprima in locale

```bash
npm run dev
```

poi apri `http://localhost:3000/design-system` (la pagina è visibile automaticamente in sviluppo, senza bisogno di variabili d'ambiente).

Per vederla in una build di produzione locale:

```bash
NEXT_PUBLIC_DESIGN_PREVIEW=true npm run build && npm run start
```

Senza quella variabile, la stessa build risponde 404 su `/design-system`.

---

## 7. Proposte di aggiustamento (facoltative, da confermare)

1. `#6B706C` (agria-grey) su `#F6F7F4` (agria-offwhite) è a 4.70:1, sopra soglia ma con margine minimo: se questa combinazione verrà usata spesso per testo secondario su sezioni off-white nei prompt successivi, valutare uno scurimento leggero del grey (es. `#63676B`) per portarlo oltre 5:1 con margine più comodo.
2. Il raggio card è fissato a 24px in ogni breakpoint; se in fase di header/footer/pagine (prompt successivi) risultasse troppo pronunciato su card molto strette in mobile, si può introdurre una riduzione responsive (es. 20px sotto `sm:`) senza toccare il token, solo nel componente `Card`.
3. Nessun'altra criticità emersa: procedere con i prompt successivi (header, footer, pagine) può riusare i componenti così come sono.

---

## 8. Nota architetturale: isolamento di `/design-system` (aggiunta successiva)

Richiesta originale: escludere `Nav`, `Footer`, `QuizFloatingButton`, `QuizPopup` e `CookieConsentBanner` dalla pagina di anteprima, senza modificare `app/layout.jsx` né alcun componente esistente.

**Non è possibile ottenerlo letteralmente con questi vincoli.** In Next.js App Router esiste un solo root layout (`app/layout.jsx`), che disegna `<html>`/`<body>` e renderizza `Nav`, `{children}`, `Footer`, `QuizFloatingButton`, `QuizPopup`, `CookieConsentBanner` come **fratelli** di `{children}`, non genitori. Un layout annidato come `app/design-system/layout.jsx` può solo avvolgere `{children}`: non ha modo di rimuovere o nascondere elementi renderizzati dal genitore fuori da quell'albero.

Le uniche due strade per un'isolazione vera erano:
1. Modificare `app/layout.jsx` per saltare quei componenti sul path `/design-system` — esplicitamente escluso.
2. Usare il pattern "multiple root layouts" di Next.js: spostare tutte le route esistenti (inclusa `app/layout.jsx`) dentro un route group (es. `app/(site)/...`) e dare a `/design-system` un root layout separato. Gli URL non sarebbero cambiati e gli import con alias `@/` (root-relative) non si sarebbero rotti, ma è uno spostamento fisico di ~26 cartelle di route esistenti: una ristrutturazione ampia, sproporzionata per un'aggiunta pensata come piccola e isolata.

**Scelta concordata:** `app/design-system/layout.jsx` applica solo i default tipografici e cromatici Agria (font Inter di default, sfondo `agria-white`, testo `agria-graphite`) al contenuto della pagina. `Nav`, `Footer`, `QuizFloatingButton`, `QuizPopup` e `CookieConsentBanner` restano visibili attorno all'anteprima, invariati, esattamente come sulle altre pagine del sito. `app/layout.jsx` non è stato toccato; nessuna route esistente è stata spostata.

Verificato dopo l'aggiunta: gate produzione/sviluppo ancora attivo (`__next_error__` nell'HTML statico senza `NEXT_PUBLIC_DESIGN_PREVIEW`), contenuto reale con la variabile attiva (wrapper `bg-agria-white font-agria-sans text-agria-graphite` presente nell'HTML), `npm run build` riuscito, `/`, `/settori/wine-viticulture`, `/blog/shopify-velocita-conversioni` invariate (200, classi font Poppins intatte).
