# 05 — Infrastruttura

Report della fase invisibile di preparazione tecnica (Prompt 05): route group, dominio parametrizzato, fondamenta i18n, contenuti modulari, lint e CI. Nessun cambiamento di URL pubblico, di contenuto o di aspetto (eccetto l'isolamento voluto di `/design-system` dal layout legacy, già annunciato in fase A).

Branch: `agria/redesign`. Cinque commit, uno per fase:

| Fase | Commit | Oggetto |
|---|---|---|
| A | `f77b018` | route group per sito e anteprima design system |
| B | `76a2bdb` | dominio parametrizzato via `NEXT_PUBLIC_SITE_URL` |
| C | `3729e0f` | fondamenta i18n per italiano e inglese |
| D | `6986de4` | contenuti divisi in moduli, dati invariati |
| E | (questo commit) | configurazione ESLint e controllo automatico |

---

## Fase A — Route group

**Prima:** `app/layout.jsx` era il root layout unico di tutto l'app dir: `/design-system` (pagina di anteprima interna, noindex) ereditava Nav, Footer, Quiz e CookieConsentBanner del sito legacy, senza modo di rimuoverli (limite documentato in `docs/agria/04-design-foundations.md` §8).

**Dopo:** due route group, ciascuno con root layout proprio (`<html>`/`<body>` indipendenti):

```
app/
  (site)/           ← root layout invariato (Nav, Footer, Quiz, CookieConsentBanner,
    layout.jsx         metadata, JSON-LD, font Poppins/Inter/IBM Plex Mono)
    page.jsx, not-found.jsx, blog/, chi-sono/, contatti/, cookie-policy/,
    crediti-immagini/, geo/, metodo/, portfolio/, prenota-call/,
    privacy-policy/, proposta/, quiz/, referral/, risorse/, servizi/,
    settori/, software/, termini-e-condizioni/
  (design-system)/
    design-system/  ← root layout indipendente: niente Nav/Footer/Quiz/
      layout.jsx        CookieConsentBanner, solo font Inter + IBM Plex Mono
      page.jsx, contrast.js
  api/              ← invariato (route handler, nessun layout)
  globals.css, sitemap.js, robots.js  ← invariati/aggiornati in fase B
```

**File spostati:** 34 file (tutte le route esistenti) con `git mv` in `app/(site)/`; 3 file (`contrast.js`, `layout.jsx` riscritto, `page.jsx`) in `app/(design-system)/design-system/`. Nessuna directory vuota residua.

**Validazione:** `npm run build` → stesse 169 route (poi 170 dopo la fase B, vedi sotto). Verificato via dev server che `/`, una pagina settore, un articolo blog, `/sitemap.xml` e una route API rispondono come prima; `/design-system` non eredita più Nav/Footer legacy (unico cambiamento visivo, voluto e annunciato).

---

## Fase B — Dominio parametrizzato

**Prima:** 6 riferimenti hardcoded a `https://matteogaruzzo.com` (audit §6.7): `app/layout.jsx` (metadataBase, JSON-LD url, JSON-LD logo), `lib/seo.js` (`SITE_URL`), `app/sitemap.js`, `public/robots.txt`.

**Dopo:** `NEXT_PUBLIC_SITE_URL` (fallback `https://matteogaruzzo.com`) letta una sola volta in `lib/seo.js`; tutti gli altri punti importano `SITE_URL` da lì. **Trovato e corretto un settimo punto non rilevato dall'audit:** `app/(site)/geo/[regione]/page.jsx` (JSON-LD `LocalBusiness.url`), stessa causa.

`public/robots.txt` (statico) convertito in `app/robots.js` (Next Metadata Route), stesso contenuto testuale (`User-Agent: *` / `Allow: /` / riga `Sitemap:`); unica differenza è il fine riga (CRLF del file statico → LF generato da Next), irrilevante per i parser robots.txt.

**Confronto output:**
- `/sitemap.xml` e l'HTML di ogni pagina producono gli stessi URL assoluti di prima (`https://matteogaruzzo.com...`).
- Build con `NEXT_PUBLIC_SITE_URL=https://agriasystem.com` produce correttamente tutti gli URL assoluti sul nuovo dominio (testato su `sitemap.xml`) — la migrazione futura richiederà solo di impostare questa variabile d'ambiente su Vercel, senza toccare codice.

---

## Fase C — Fondamenta i18n

Nessuna libreria proposta o aggiunta: l'approccio manuale richiesto dal prompt ("semplice e senza middleware") copre il bisogno attuale (nessuna pagina `/en` ancora esistente).

**Aggiunto:**
- `lib/i18n/` — `locales = ['it', 'en']`, `defaultLocale = 'it'`, `getDictionary(locale)`, `localizedHref(path, locale)`, `getLocaleFromPathname(pathname)`, `stripLocale(pathname)`.
- `content/i18n/{it,en}.json` — solo stringhe di interfaccia comuni (nav, CTA, footer, form), estratte dai valori italiani già presenti in `Nav.jsx`, `Footer.jsx`, `BookingForm.jsx`. Nessun testo di pagina.
- `lib/seo.js` — due helper **additivi**, non collegati a `pageMetadata`: `localeAlternates(path)` (hreflang) e `ogLocale(locale)`.
- `app/(site)/layout.jsx` — `<html lang="it">` diventa `<html lang={defaultLocale}>`: stesso output oggi, pronto per un futuro layout `/en` che userà lo stesso helper con `locale="en"`.

**Esempio d'uso** (per il Prompt 06 in poi, una futura `app/en/servizi/page.jsx`):

```js
import { pageMetadata } from '@/lib/seo';
import { localeAlternates } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';

export function generateMetadata() {
  return {
    ...pageMetadata({ title: '...', description: '...', path: '/servizi' }),
    alternates: { canonical: '/en/servizi', languages: localeAlternates('/servizi') },
  };
}

const t = getDictionary('en');
// t.nav.contatti === 'Contact'
```

**Validazione:** build riuscito; nessun file esistente importa gli helper nuovi (verificato con grep) → zero differenze nell'HTML delle pagine esistenti.

---

## Fase D — Contenuti modulari

**Prima:** `lib/data.js`, 4.957 righe, un unico file con tutti i contenuti del sito.

**Dopo:** moduli per dominio sotto `content/`:

| Modulo | Contenuto |
|---|---|
| `content/site.js` | `site` |
| `content/servizi.js` | `servizi`, `getServizio` |
| `content/settori.js` | `sectors`, `getSector` (spostata qui dalla sua posizione originale, lontana dai dati) |
| `content/software.js` | `softwareCustom`, `softwareOngoing` |
| `content/portfolio.js` | `caseStudies`, `techRationale`, `getCaseStudy` |
| `content/team.js` | `team` |
| `content/blog/index.js` + `content/blog/posts/<slug>.js` | 32 articoli, un file ciascuno, aggregati nello stesso ordine originale, più `getPost`/`slugifyTag`/`getAllTags`/`getPostsByTagSlug` |
| `content/metodo.js` | `metodoSteps`, `getMetodoStep` |
| `content/numbers.js` | `heroStats`, `referenceNumbers` |
| `content/home.js` | `problemPoints`, `forWho`, `notForWho` |
| `content/testimonials.js` | `testimonials` |
| `content/faqs.js` | `faqs` |
| `content/settori-pagine.js` | `whyMG`, `sectorPageContent` |

`lib/data.js` è ora un barrel che ri-esporta tutto con gli stessi nomi: **nessun import esistente nel resto del codebase è stato modificato.**

**Confronto dati prima/dopo:** script Node (`node --experimental-loader` con un loader che risolve l'alias `@/`) che carica la versione precedente di `lib/data.js` (da `git show HEAD` prima del commit) e quella nuova, confronta ogni export con `JSON.stringify` a chiavi ordinate e chiama ogni funzione (`getServizio`, `getSector`, `getCaseStudy`, `getMetodoStep`, `getPost`, `getAllTags`, `getPostsByTagSlug`, `slugifyTag`) su tutti gli slug/tag reali. **144 controlli, 0 differenze.**

**Validazione:** `npm run build` → 170 pagine generate (stesso numero della fase B; l'incremento 169→170 viene da `app/robots.js`, non da questa fase).

---

## Fase E — Lint e CI

**Aggiunto:** `.eslintrc.json` (`{"extends": "next/core-web-vitals"}`) — nessuna nuova dipendenza: `eslint` ed `eslint-config-next` erano già in `devDependencies`, semplicemente senza configurazione versionata.

**Effetto collaterale scoperto e corretto:** senza una configurazione ESLint versionata, `next build` non eseguiva alcun controllo lint (nessun file di config = step saltato). Con `.eslintrc.json` aggiunto, `next build` ha iniziato a eseguire ESLint al suo interno e a **fallire** (`Failed to compile.`) sui 16 errori preesistenti sotto — il che avrebbe rotto ogni build/deploy Vercel, contraddicendo il requisito "build riuscito" di tutte le fasi precedenti. Corretto disaccoppiando lint e build in `next.config.js` (`eslint: { ignoreDuringBuilds: true }`): `next build` torna a ignorare il lint (come prima di questa fase), mentre `npm run lint` e il job CI continuano a eseguirlo e a riportarlo, senza bloccare nulla.

**Risultato di `npm run lint` sul codice esistente** (non corretto, come da regola):

| Categoria | Errori | Warning | File |
|---|---|---|---|
| `react/no-unescaped-entities` (virgolette `"` non escapate in JSX) | 16 | 0 | `app/(site)/servizi/page.jsx` (10), `app/(site)/servizi/wine-club/page.jsx` (6) |
| **Totale** | **16** | **0** | 2 file |

Nessun'altra categoria di errore o warning rilevata sul resto del codebase (incluso `content/`, `lib/`, tutte le altre pagine).

**Workflow CI** (`.github/workflows/ci.yml`): su pull request verso `main` e su push di `agria/redesign` — checkout, Node 20, `npm ci`, `npm run lint` (**non bloccante**, `continue-on-error: true`) e `npm run build` (bloccante).

**Perché il lint è non bloccante:** gli errori preesistenti (16, categoria unica, correzione banale ma fuori scope di questa fase per regola esplicita del prompt) non devono impedire il merge finché non vengono sistemati in una fase dedicata. La build resta il gate reale della pull request.

---

## Rischi aperti

- **Lint non bloccante lascia visibile ma non enforced** un debito di 16 errori (tutti `react/no-unescaped-entities`, correzione banale: sostituire `"` con `&quot;`/`&rdquo;` in due file). Da sistemare in una fase dedicata; solo allora vale la pena rimuovere `eslint.ignoreDuringBuilds` da `next.config.js` e lasciare che `next build` torni a validare il lint.
- **`app/(design-system)/design-system/layout.jsx`** duplica l'import di `globals.css` e i font Inter/IBM Plex Mono già presenti in `app/(site)/layout.jsx`: due bundle CSS/font separati per i due root layout. Accettabile per una pagina di anteprima interna non pubblica, ma da tenere a mente se `/design-system` dovesse mai diventare pubblico.
- **Fine riga CRLF→LF**: i nuovi file (`content/`, `lib/i18n/`, `app/robots.js`, ecc.) sono stati scritti in LF; `core.autocrlf=true` locale li normalizza al checkout, coerente con il resto del repo — nessuna azione richiesta, ma segnalato per chiarezza.
- **Nessuna pagina `/en` esiste ancora**: le fondamenta i18n (Fase C) sono infrastruttura pronta ma non verificata end-to-end su una pagina reale finché il Prompt 06 non ne crea una.
- **Workflow CI mai eseguito su GitHub** in questa sessione (nessun push effettuato): la sintassi è stata scritta e rivista manualmente ma non testata da un run reale di GitHub Actions.
