# AGRIA — Prompt 01: Audit del sito attuale (sola lettura)

**Data audit:** 2026-09-17
**Repository:** `matteogaruzzo/mgsolutions` — working directory `C:\Users\Utente\Desktop\agriasystem`
**Commit di riferimento:** `66fe61f` (branch `main`, allineato a `origin/main`)
**Natura del lavoro:** sola lettura. Nessun file esistente è stato modificato, rinominato o eliminato da questo audit.

> Nota successiva: il PC su cui è stato eseguito questo audit si è rotto. Il lavoro prosegue da `C:\dev\agriasystem` sul branch `agria/redesign`. Lo stato Git descritto al §1 (54 cancellazioni, asset non tracciati, `.gitignore` modificato) non è più attuale. Il resto dell'audit resta valido.

---

## Riepilogo (15 righe)

1. Next.js **14.2.5**, **App Router**, JavaScript (no TypeScript), Tailwind 3.4.6, deploy Vercel, dominio `matteogaruzzo.com`.
2. **Il working tree NON è pulito**: 54 immagini legacy risultano cancellate e 9 asset AGRIA sono non tracciati (lavoro tuo, già avviato, non committato).
3. `.gitignore` risulta modificato (`+.env*`): causato dal comando `vercel link` eseguito da me durante il setup di oggi, **non** è lavoro preesistente.
4. **3 immagini referenziate dal codice mancano su disco** (logo header, hero, OG image): il working tree renderizzerebbe immagini rotte; la produzione da Git è intatta.
5. Route totali: **~155**, di cui 32 articoli blog, 71 tag, 16 regioni GEO, 7 servizi, 6 case study, 4 step metodo.
6. Tutti i contenuti vivono in **`lib/data.js` (4.957 righe)** + `lib/geo-data.js` + `lib/pricing-data.js`. Nessun CMS.
7. **I 6 case study sono dichiaratamente `concept: true`**: progetti illustrativi, non clienti reali, con disclaimer visibili in pagina.
8. **Tutte le metriche del sito sono inventate** e riferite a quei concept (+40%, +200%, 85% retention, €450 LTV…), riprese in home, servizi e pagine settore.
9. **Prezzi pubblici presenti e centralizzati** in `lib/pricing-data.js` (16 voci, da €79 a €2.940): in conflitto diretto con la regola Agria "nessun prezzo pubblico".
10. SEO tecnica solida: helper centralizzato `lib/seo.js`, canonical su ogni pagina, sitemap generata, robots.txt, JSON-LD su 33 file.
11. **Sito monolingua IT** (`<html lang="it">`): nessuna infrastruttura i18n, nessun hreflang. IT+EN è da costruire da zero.
12. **Nessun analytics attivo** (no GA4, no GTM, no pixel). Unico script esterno: widget Calendly, caricato solo con consenso.
13. Cookie banner **custom** (localStorage, 3 categorie, scadenza 90 giorni), nessun provider esterno tipo Iubenda/Cookiebot.
14. **Il form contatti non invia nulla a un server**: apre WhatsApp con testo precompilato, senza checkbox privacy. Il form quiz invece salva su DB + Supabase + email Resend.
15. Legacy pervasivo: **54 occorrenze "MG Solutions"**, "Chi Sono" con prima persona singolare, frasi vietate dal tone of voice ("niente fuffa", "non siamo un'agenzia"), 118 MB di immagini con 45 file oltre 500 KB.

---

## 1. Git e ambiente

### 1.1 Branch, remote, stato

| Voce | Valore |
|---|---|
| Branch corrente | `main` |
| Branch locali | `main` (unico) |
| Branch remoti | `remotes/origin/main`, `remotes/origin/HEAD -> origin/main` |
| Remote `origin` (fetch/push) | `https://github.com/matteogaruzzo/mgsolutions.git` |
| Allineamento | `Your branch is up to date with 'origin/main'` |

### 1.2 `git status` — modifiche non committate (SEGNALATE, NON TOCCATE)

Il working tree **non è pulito**. Tre gruppi distinti, con origini diverse:

**Gruppo A — `.gitignore` modificato (causato da me, non è lavoro preesistente)**

```
 M .gitignore
```

Diff verificato:

```diff
@@ -10,3 +10,4 @@ npm-debug.log*
 .vercel
 .idea
 *.swp
+.env*
```

Questa riga è stata aggiunta automaticamente dal comando `vercel link` che ho eseguito durante il setup delle credenziali, prima dell'inizio di questo audit. Lo stesso comando ha creato due file locali, entrambi ignorati da Git:

- `.env.local` (token OIDC Vercel) — presente su disco, non tracciato;
- `.vercel/` (`project.json`, `README.txt`) — presente su disco, non tracciato.

**Decisione per te:** questa modifica a `.gitignore` è innocua ma non richiesta dall'audit. Puoi tenerla (è una protezione in più contro il commit accidentale di `.env`) o annullarla con `git checkout .gitignore`. Non l'ho toccata.

**Gruppo B — 54 immagini legacy cancellate (lavoro tuo, non committato)**

Cancellazioni non staged, tutte sotto `public/images/`:

| Cartella | File cancellati | Contenuto |
|---|---|---|
| `brand/` | 2 | logo Matteo Garuzzo, `mg-logo-mark.png` |
| `loghi/` | 9 | loghi tecnologie (Shopify, WordPress, React, Next.js, Vercel, Angular, MySQL, PostgreSQL, Claude) |
| `matteo/` | 4 | foto personali, `og-image.png` |
| `projects/AURORA DISTRICT/` | 9 | progetto legacy non agroalimentare |
| `projects/COREX/` | 6 | progetto legacy CRM enterprise |
| `projects/GOCLEAN/` | 8 | progetto legacy app mobile |
| `projects/RISTORANTINO DELLA CARNE/` | 2 | progetto legacy ristorazione |
| `projects/VINT/` | 6 | progetto legacy e-commerce |
| `testimonials/` | 7 | badge partner + foto testimonianze |
| root `images/` | 1 | `og-image-default.png` |
| **Totale** | **54** | |

Nota: le cartelle `projects/` (AURORA DISTRICT, COREX, GOCLEAN, RISTORANTINO DELLA CARNE, VINT) e `testimonials/` **non sono referenziate da nessun file di codice** — erano già asset orfani prima della cancellazione. Vedi §10.

**Gruppo C — asset AGRIA non tracciati (lavoro tuo, nuovo)**

```
?? public/images/brand/agria-logo-homepage.svg
?? public/images/brand/agria-logo-white-gradient.svg
?? public/images/brand/favicon/   (7 file: apple-touch-icon.png, favicon-96x96.png,
                                   favicon.ico, favicon.svg, site.webmanifest,
                                   web-app-manifest-192x192.png, web-app-manifest-512x512.png)
```

Nessuno di questi è ancora referenziato dal codice.

### 1.3 Conseguenza critica delle cancellazioni

Tre immagini **referenziate dal codice risultano assenti su disco**:

| Immagine mancante | Referenziata in | Impatto |
|---|---|---|
| `/images/brand/mg-logo-mark.png` | `components/Nav.jsx:139` (logo header), `app/layout.jsx:62` (JSON-LD `logo` Organization) | Logo rotto in header su **tutte** le pagine |
| `/images/matteo/og-image.png` | `lib/seo.js:11` (`OG_IMAGE`, default Open Graph), `app/layout.jsx:41,47` | Anteprima social rotta su **tutte** le pagine |
| `/images/matteo/matteo-hero-nobg.png` | homepage | Immagine rotta in home |

**Importante:** questo riguarda solo il working tree locale. La produzione su Vercel deploya da Git, dove i file esistono ancora. Il problema si manifesterebbe **solo al momento del commit** di queste cancellazioni.

### 1.4 Ultimi 15 commit

| Hash | Data | Messaggio |
|---|---|---|
| `66fe61f` | 2026-08-15 | fix: riordina i servizi nel mega-menu Cosa Facciamo |
| `65c4d4c` | 2026-08-15 | fix: risolto overflow del mega-menu Cosa Facciamo su desktop |
| `415c1f2` | 2026-08-15 | feat: aggiunta pagina servizio Brand Identity |
| `88998fb` | 2026-08-15 | feat: aggiunta pagina servizio SEO & GEO Strategy |
| `bb181e3` | 2026-08-06 | fix: allinea slug automazioni-ai in quiz/link e aggiorna foto servizi/software |
| `2b56142` | 2026-08-06 | refactor: centralizza i prezzi in lib/pricing-data.js e applica il nuovo listino |
| `392e7ef` | 2026-08-06 | fix: immagini servizi mancanti + card prezzi trasparenti |
| `bef2b85` | 2026-08-06 | refactor: template unico a 9 blocchi per le pagine servizi |
| `4c7b481` | 2026-08-06 | refactor: software da prodotto SaaS a sviluppo su misura |
| `3414705` | 2026-08-05 | Fix: sostituita immagine hero vuota nella pagina Software per Cantine |
| `7118d7f` | 2026-08-05 | Feature: immagine hero nelle pagine software per settore |
| `437a58e` | 2026-08-05 | Fix: dropdown Software mostra solo i 3 settori e i prezzi |
| `33c556b` | 2026-08-05 | Feature: espansione contenuti pagine software per settore |
| `417a0e8` | 2026-08-05 | Feature: segmentazione per settore nella pagina prezzi |
| `632a5c2` | 2026-08-05 | Feature: pagine software dedicate per settore (cantine, agriturismi, frantoi) |

Ultimo commit: **15 agosto 2026** — il repository è fermo da circa un mese.

### 1.5 File di configurazione e ambiente

| File | Stato |
|---|---|
| `.gitignore` | Presente (modificato, vedi §1.2) |
| `.env.example` | Presente e tracciato |
| `.env.local` | Presente su disco, ignorato da Git (creato da `vercel link` oggi) |
| `vercel.json` | **Assente** — nessuna configurazione Vercel versionata |
| `middleware.js` / `.ts` | **Assente** |
| `.github/` (CI) | **Assente** — nessuna pipeline CI |
| `.eslintrc*` | **Assente** (config ESLint solo via `eslint-config-next` in `package.json`) |
| `jsconfig.json` | Presente — alias `@/*` → `./*` |
| `.vercel/` | Presente su disco, ignorato da Git (creato da `vercel link` oggi) |

### 1.6 Variabili d'ambiente (solo NOMI, nessun valore)

Dichiarate in `.env.example`:

| Variabile | Usata in | Scopo dichiarato nei commenti |
|---|---|---|
| `DATABASE_URL` | `lib/db.js:11`, `prisma/schema.prisma` | Postgres per i lead del quiz |
| `DIRECT_URL` | `prisma/schema.prisma` | Connessione session-mode per `prisma migrate` |
| `RESEND_API_KEY` | `lib/quiz/email.js:4` | Invio email cliente + notifica team |
| `RESEND_FROM_EMAIL` | `lib/quiz/email.js:6` | Mittente (dominio verificato Resend) |
| `TEAM_NOTIFICATION_EMAIL` | `lib/quiz/email.js:7` | Destinatario notifica nuovo lead |

**Usate nel codice ma NON documentate in `.env.example`** (lacuna da colmare):

| Variabile | Usata in |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `lib/supabase.js:3` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `lib/supabase.js:4` |
| `SUPABASE_SERVICE_ROLE_KEY` | `lib/supabase.js:5` (bypassa Row Level Security) |

Nessun valore di segreto è stato letto o riportato in questo report.

---

## 2. Stack tecnico

### 2.1 Versioni e linguaggio

| Voce | Valore | Prova |
|---|---|---|
| Next.js | **14.2.5** (pinned, no caret) | `package.json:15` |
| React / React DOM | **18.3.1** (pinned) | `package.json:17-18` |
| Router | **App Router** puro | esistenza `app/layout.jsx`, `app/page.jsx`, `app/**/page.jsx`; nessuna cartella `pages/` |
| Linguaggio | **JavaScript** (`.js` / `.jsx`) | nessun `.ts`/`.tsx`, nessun `tsconfig.json`, presente `jsconfig.json` |
| Versione Node richiesta | **Non dichiarata** in `package.json` (nessun campo `engines`) | Vercel usa Node **24.x** (impostazione di progetto) |
| Styling | **Tailwind CSS 3.4.6** + `@layer components` in `app/globals.css` | `package.json:26`, `tailwind.config.js` |
| Font | **Poppins** via `next/font/google` | `app/layout.jsx:11-16` |
| Libreria UI | **Nessuna** (no shadcn, no MUI, no Radix) | assenti da `package.json` |
| Libreria animazioni | **Nessuna** (no Framer Motion) — animazioni in CSS puro | `app/globals.css:167-176`, `components/Reveal.jsx` |
| Icone | **SVG inline scritti a mano** | `components/icons/ServiceIcons.jsx`, `components/icons/WineIcons.jsx` |

### 2.2 Dipendenze e uso effettivo

**Dependencies**

| Pacchetto | Versione | Uso effettivo verificato |
|---|---|---|
| `next` | 14.2.5 | Framework |
| `react` / `react-dom` | 18.3.1 | Framework |
| `@prisma/client` | ^5.22.0 | `lib/db.js` — client Postgres per i lead |
| `prisma` | ^5.22.0 | CLI, invocata da `build` e `postinstall` |
| `@supabase/supabase-js` | ^2.110.8 | `lib/supabase.js` — log quiz + newsletter |
| `resend` | ^6.18.0 | `lib/quiz/email.js` — email transazionali |

**DevDependencies**

| Pacchetto | Versione | Uso |
|---|---|---|
| `tailwindcss` | 3.4.6 | Styling |
| `postcss` | 8.4.39 | Pipeline Tailwind |
| `autoprefixer` | 10.4.19 | Pipeline Tailwind |
| `eslint` | 8.57.0 | Lint (script `next lint`) |
| `eslint-config-next` | 14.2.5 | Lint |

**Nessuna dipendenza risulta inutilizzata.** Tutte e 6 le dependencies hanno un punto d'uso verificato nel codice.

Nota architetturale: sono presenti **due sistemi di persistenza in parallelo** — Prisma/Postgres (fonte primaria dei lead) e Supabase (log grezzo non critico + newsletter). Da valutare nel passo 7.

### 2.3 Script disponibili

| Script | Comando | Note |
|---|---|---|
| `dev` | `next dev` | |
| `build` | `prisma generate && next build` | Il build dipende da Prisma |
| `postinstall` | `prisma generate` | |
| `start` | `next start` | |
| `lint` | `next lint` | |

### 2.4 Configurazioni

**`next.config.js`** (19 righe)

- `reactStrictMode: true`
- `images.remotePatterns`: `[{ protocol: 'https', hostname: '**' }]` — **wildcard totale**, qualunque host HTTPS può essere ottimizzato da `next/image` (vedi §13, rischio).
- `redirects()`: 6 redirect 301 permanenti (elencati in §6.6).

**`tailwind.config.js`** (51 righe) — vedi §4 per il dettaglio dei token.

**`postcss.config.js`** — standard (`tailwindcss` + `autoprefixer`).

**`jsconfig.json`** — solo alias `@/*`.

**Assenti:** `middleware`, `vercel.json`, config ESLint dedicata, `tsconfig.json`.

---

## 3. Architettura e componenti

### 3.1 Albero delle cartelle principali

| Cartella | Descrizione |
|---|---|
| `app/` | App Router: 36 file tra pagine, layout, route API, sitemap e opengraph-image |
| `app/api/` | 3 route handler POST (newsletter, quiz lead, analisi sito) |
| `components/` | 51 componenti `.jsx` (di cui 23 client component) |
| `components/Quiz/` | 7 componenti del flusso quiz |
| `components/blog/` | 6 componenti dell'area blog |
| `components/icons/` | 2 file di icone SVG inline |
| `components/servizi/`, `components/software/`, `components/geo/` | Template specifici di sezione |
| `lib/` | Contenuti, SEO helper, consent, DB, motore quiz (15 file) |
| `lib/quiz/` | 6 file: catalogo, email, domande, motore regole, analisi sito, validatori |
| `prisma/` | Schema + 1 migration (`20260727120713_init`) |
| `public/images/` | 111 file immagine, 118 MB totali |
| `scripts/` | 3 script Node + 1 JSON per il fetch immagini da Unsplash |
| `docs/` | 1 documento legacy: `AUDIT-STRATEGIA-MG-SOLUTIONS.md` (367 righe) |

### 3.2 Layout globale, header, footer

**`app/layout.jsx`** (99 righe) — root layout unico:

- `<html lang="it">` con variabile font Poppins;
- `metadata` globale con `metadataBase: https://matteogaruzzo.com`, title template `%s · MG Solutions`, keywords (include `'Matteo Garuzzo'`), Open Graph, Twitter, `robots: {index:true, follow:true}`, verifica Bing (`msvalidate.01`);
- JSON-LD `Organization` iniettato in `<body>` con `founder: Person "Matteo Garuzzo"`, telefono, email, indirizzo postale completo, `sameAs` LinkedIn/Instagram;
- Composizione fissa: `<Nav />` → `<main>{children}</main>` → `<Footer />` → `<QuizFloatingButton />` → `<QuizPopup />` → `<CookieConsentBanner />`.

**`components/Nav.jsx`** (301 righe, client component):

- Header fisso, 8 voci di menu, di cui **4 con mega-menu** su hover/focus: Cosa Facciamo (7 servizi, 2 colonne), I Tre Settori (3, 3 colonne), Software (3, 3 colonne, allineato a destra), Contatti (3, 3 colonne, allineato a destra).
- I mega-menu sono costruiti **dinamicamente** dagli array `servizi` e `sectors` di `lib/data.js`; l'ordine di visualizzazione dei servizi è forzato da `SERVIZI_MENU_ORDER` (`Nav.jsx:29-37`).
- Menu mobile: pannello a scomparsa con accordion per le voci mega (`Nav.jsx:233-298`).
- Logo: `<Image src="/images/brand/mg-logo-mark.png" alt="" />` + testo `MG SOLUTIONS`.
- Il Master Plan (cap. 5) vieta esplicitamente i mega menu: **l'header attuale è integralmente da rifare**.

**`components/Footer.jsx`** (121 righe, client component):

- 4 colonne: brand + contatti, Servizi (5 link), Risorse (6 link), Azienda (4 link legali + pulsante "Preferenze cookie");
- include `<NewsletterFooter />`;
- barra finale: `© {anno} MG Solutions | P.IVA IT04006460549` e `Made with ❤️ by Matteo Garuzzo`.

### 3.3 Componenti riutilizzabili principali

| Componente | Usato in |
|---|---|
| `BookingForm` | home, `/chi-sono`, `/contatti`, `SectorPageTemplate` (4 punti) |
| `SectorPageTemplate` | le 3 pagine settore |
| `ServicePageTemplate` | pagine `/servizi/[slug]` (template legacy) |
| `servizi/ServiceLandingTemplate` | 6 dei 7 servizi (`LANDING_TEMPLATE_SLUGS`) |
| `software/SoftwareSectorTemplate` | le 3 pagine `/software/*` |
| `MethodStepTemplate` | le 4 pagine `/metodo/[slug]` |
| `PortfolioGrid` | `/portfolio` |
| `FAQAccordion`, `Reveal`, `CountUp`, `StatNumber` | trasversali |
| `TestimonialCarousel` | home / pagine settore |
| `CookieConsentBanner`, `ReopenConsentButton` | layout + footer |
| `Quiz/*` (7 componenti) | flusso `/quiz` e `QuizPopup` |
| `blog/*` (6 componenti) | area blog |

**Componenti mai importati: nessuno.** Verificato includendo sia gli import con alias `@/components/...` sia quelli relativi (`./Question`). Tutti i 51 componenti hanno almeno un punto d'uso.

### 3.4 Gestione dei contenuti

**Non esiste CMS.** Tutto è hardcoded in moduli JavaScript:

| File | Righe | Contenuto |
|---|---|---|
| `lib/data.js` | **4.957** | `site`, 7 `servizi`, 3 `sectors`, 6 `caseStudies`, 32 `posts`, 4 `metodoSteps`, `team`, `testimonials`, `faqs`, `heroStats`, `referenceNumbers`, `problemPoints`, `forWho`, `notForWho`, `whyMG`, `sectorPageContent`, `techRationale`, `softwareCustom`, `softwareOngoing` |
| `lib/geo-data.js` | 154 | 16 regioni italiane |
| `lib/pricing-data.js` | 46 | 16 voci di prezzo + helper di formattazione |
| `lib/quiz/questions.js` | 74 | domande del quiz |
| `lib/quiz/catalog.js` | 29 | catalogo servizi per il motore regole |

Nessun file Markdown/MDX di contenuto, nessun fetch esterno per i contenuti editoriali. Il testo dei 32 articoli del blog è interamente dentro `lib/data.js` (righe 1262-4481, ~3.200 righe) in forma di blocchi strutturati renderizzati da `lib/richtext.js`.

### 3.5 Pattern delle pagine dinamiche

Tutte le route dinamiche usano `generateStaticParams()` + `generateMetadata()` e leggono da `lib/data.js` o `lib/geo-data.js`:

| Route | Sorgente dati | Funzione lookup |
|---|---|---|
| `/servizi/[slug]` | `servizi` | `getServizio(slug)` |
| `/portfolio/[slug]` | `caseStudies` | `getCaseStudy(slug)` |
| `/metodo/[slug]` | `metodoSteps` | `getMetodoStep(slug)` |
| `/blog/[slug]` | `posts` | `getPost(slug)` |
| `/blog/tag/[tag]` | derivato da `posts` | `getAllTags()`, `getPostsByTagSlug()` |
| `/geo/[regione]` | `regions` (`lib/geo-data.js`) | lookup per slug |
| `/proposta/[id]` | **database Postgres** via Prisma | `prisma.lead.findUnique` — unica route `force-dynamic` |

---

## 4. Design system attuale

### 4.1 Colori (`tailwind.config.js:6-38`)

**Brand principale**

| Token | Valore | Note |
|---|---|---|
| `ink` | `#1a1a1a` | Testo principale |
| `paper` | `#FFFFFF` | Sfondo |
| `paper-dim` | `#F5F5F5` | Sezioni alternate |
| `muted` | `#666666` | Testo secondario |
| `line` | `#E5E5E5` | Bordi |
| `primary` | `#008b47` | Verde brand |
| `primary-deep` | `#00713a` | Verde scuro |
| `forest` | `#008b47` | **Alias storico** di `primary` — è questo che il markup usa realmente |
| `forest-deep` | `#00713a` | **Alias storico** di `primary-deep` |
| `brass` | `#D4A574` | Accento ottone |

**Palette per settore** (3 set separati)

| Settore | accent | gold | bg |
|---|---|---|---|
| `wine` | `#6B3D6F` | `#D4A574` | `#F5F0F8` |
| `olio` | `#8B6914` | `#D4AF37` | `#FAF7F2` |
| `hospitality` | `#8B5A3C` | `#D4A574` | `#F9F5F0` |

**Osservazione:** il verde attuale `#008b47` **non è** il verde Agria del Master Plan (`#4F8F57`). La palette a 3 settori con toni caldi/rustici (ottone, oro, marrone) è l'opposto della direzione "tecnologica, niente immaginario rustico" richiesta.

### 4.2 Tipografia

- **Un solo font: Poppins** (pesi 400, 600, 700), caricato con `next/font/google`, `display: 'swap'`, esposto come `--font-poppins`.
- In `tailwind.config.js:39-44` **tutte e quattro** le famiglie (`sans`, `display`, `body`, `mono`) puntano a Poppins. Non esiste un vero font monospace: le classi `font-mono` usate nell'header e nel footer rendono comunque Poppins.
- Il Master Plan (cap. 5) segnala Poppins come da rivalutare: coincide con quanto trovato.
- **Non esiste una scala tipografica definita a token**: le dimensioni sono utility Tailwind ad hoc per pagina (`text-3xl md:text-4xl`, `text-[13px]`, `text-[11px]`…).

### 4.3 Componenti base definiti (`app/globals.css:46-136`)

| Classe | Definizione |
|---|---|
| `.eyebrow` | `font-semibold text-xs tracking-[0.2em] uppercase text-forest/70` |
| `.btn` | base: `rounded-full px-6 py-3 text-sm font-semibold` |
| `.btn-solid` | `.btn` + `bg-forest text-paper hover:bg-forest-deep` |
| `.btn-ghost` | `.btn` + `border border-ink/25` con hover invertito |
| `.display`, `.h2`, `.h3`, `.body-strong` | varianti tipografiche |
| `.rule`, `.section-divider`, `.card-leaf-top` | divisori decorativi |
| `.bg-texture-*` (5 varianti) | texture CSS: wood, vine, linen, paper, leaf |

**Solo 2 varianti di bottone.** Nessun sistema di card, badge, form o sezione formalizzato a token: sono composizioni di utility ripetute pagina per pagina.

### 4.4 Spaziature, breakpoint, raggi, animazioni

- **Breakpoint:** solo quelli di default Tailwind. Uso effettivo: `md:` 242 occorrenze, `sm:` 116, `lg:` 50, `xl:`/`2xl:` **mai usati**.
- **Unica estensione di spazio:** `maxWidth.edge = 78rem` (container standard `max-w-edge mx-auto px-6`).
- **Raggi:** nessun token; valori ad hoc (`rounded-full`, `rounded-2xl`, `rounded-xl`, `rounded-lg`).
- **Ombre:** solo utility Tailwind (`shadow-sm`, `shadow-lg`) e una custom inline nel cookie banner.
- **Animazioni:** `.reveal` (opacity + translateY 18px, 0.7s ease) e transizioni utility. Presente `@media (prefers-reduced-motion: reduce)` che azzera tutto — buona pratica già in essere.

### 4.5 Incoerenze del design system

1. **Doppia nomenclatura colore:** `primary`/`primary-deep` sono definiti ma il markup usa ovunque gli alias `forest`/`forest-deep`. Due nomi per lo stesso valore.
2. **`font-mono` che non è mono:** tutte le famiglie risolvono su Poppins; la classe è usata come "stile etichetta" ma semanticamente mente.
3. **Colori hardcoded nel JSX**, fuori dai token: `style={{ '--sector-divider': '#008b47' }}` (`BookingForm.jsx:64`), `'#8B5A3C'` (`settori/wine-hospitality-agriturismi/page.jsx:49`), e i `brand.primary/accent/bg` di ogni case study in `lib/data.js` (18 valori esadecimali).
4. **Valori RGBA duplicati** nelle texture di `globals.css` invece che derivati dai token.
5. **Tre palette di settore** che moltiplicano per 3 ogni decisione cromatica.

### 4.6 Dark mode

**Assente.** Nessun `darkMode` in `tailwind.config.js`, nessuna media query `prefers-color-scheme`, nessun attributo `data-theme`. Il `body` ha sfondo bianco fisso (`globals.css:28`).

---

## 5. Inventario route e pagine

### 5.1 Pagine statiche

| URL | File sorgente | Tipo | H1 | Scopo | Linkata da | Note |
|---|---|---|---|---|---|---|
| `/` | `app/page.jsx` | statica | "Digitalizziamo l'eccellenza agroalimentare." | Homepage | logo Nav, footer | Contiene `BookingForm`, sezione "Chi sono" in prima persona (righe 333-359) |
| `/servizi` | `app/servizi/page.jsx` | statica | "Tutto quello che serve per crescere online, in un unico posto." | Indice servizi | Nav, footer | |
| `/servizi/wine-club` | `app/servizi/wine-club/page.jsx` | statica | "L'unico modo per far tornare chi ha già comprato." | Landing wine club | home:258, `/servizi`:201 | **Non in Nav né footer**; ha `opengraph-image.jsx` dedicato |
| `/settori` | `app/settori/page.jsx` | statica | "Agribusiness di eccellenza e hospitality premium. Non facciamo altro." | Indice settori | Nav, footer | |
| `/settori/wine-viticulture` | `app/settori/wine-viticulture/page.jsx` | statica | da `sectorPageContent` | Settore vino | Nav (mega), `/settori` | H1 nel template |
| `/settori/oleifici-food-tech` | `app/settori/oleifici-food-tech/page.jsx` | statica | da `sectorPageContent` | Settore olio | Nav (mega), `/settori` | |
| `/settori/wine-hospitality-agriturismi` | `app/settori/wine-hospitality-agriturismi/page.jsx` | statica | da `sectorPageContent` | Settore ospitalità | Nav (mega), `/settori` | |
| `/software` | `app/software/page.jsx` | statica | "Il gestionale che vi serve probabilmente non esiste ancora." | Indice software | Nav, footer | |
| `/software/vitivinicolo` | `app/software/vitivinicolo/page.jsx` | statica | via `SoftwareSectorTemplate` | Software cantine | Nav (mega) | |
| `/software/hospitality` | `app/software/hospitality/page.jsx` | statica | via template | Software agriturismi | Nav (mega) | |
| `/software/frantoi` | `app/software/frantoi/page.jsx` | statica | via template | Software frantoi | Nav (mega) | |
| `/portfolio` | `app/portfolio/page.jsx` | statica | "Progetti costruiti per cantine, oleifici e agriturismi." | Indice case study | Nav, footer | Eyebrow "Progetti realizzati" in contraddizione col disclaimer sotto |
| `/blog` | `app/blog/page.jsx` | statica | "Idee chiare su AI, vendite online e crescita." | Indice blog | Nav, footer | |
| `/chi-sono` | `app/chi-sono/page.jsx` | statica | **"Non un'agenzia. Un developer che capisce il tuo mondo."** | Pagina personale | Nav, footer | Interamente legacy |
| `/metodo` | `app/metodo/page.jsx` | statica | "Come trasformiamo il tuo business digitale." | Metodo di lavoro | Nav, footer | Title SEO: "Zero Fuffa" |
| `/contatti` | `app/contatti/page.jsx` | statica | "Parliamo del tuo progetto digitale." | Contatti | Nav, footer | Mappa + `BookingForm` |
| `/prenota-call` | `app/prenota-call/page.jsx` | statica | "Prenota la tua call strategica." | Booking Calendly | Nav CTA, footer | Widget Calendly con consenso |
| `/quiz` | `app/quiz/page.jsx` | statica | "5 domande. Una proposta su misura." | Quiz lead-gen | footer, CTA varie | |
| `/geo` | `app/geo/page.jsx` | statica | **"MG Solutions in tutta Italia."** | Indice regioni | solo `blog/SidebarPromo.jsx:24` | **Non in Nav né footer** |
| `/risorse` | `app/risorse/page.jsx` | statica | via `RisorseContent` | Lead magnet | footer | |
| `/referral` | `app/referral/page.jsx` | statica | "Guadagna €200 per ogni azienda che presenti." | Programma referral | Nav (mega Contatti), footer | Ha `opengraph-image.jsx` |
| `/privacy-policy` | `app/privacy-policy/page.jsx` | statica | "Privacy Policy" | Legale | footer | |
| `/cookie-policy` | `app/cookie-policy/page.jsx` | statica | "Cookie Policy" | Legale | footer, banner cookie | |
| `/termini-e-condizioni` | `app/termini-e-condizioni/page.jsx` | statica | "Termini e Condizioni" | Legale | footer | |
| `/crediti-immagini` | `app/crediti-immagini/page.jsx` | statica | "Crediti immagini" | Attribuzioni Unsplash | footer | |
| *404* | `app/not-found.jsx` | errore | "Pagina non trovata." | 404 | — | `metadata` propria |

### 5.2 Route dinamiche espanse

**`/servizi/[slug]` — 7 slug** (`app/servizi/[slug]/page.jsx`, da `servizi`)

| URL | Titolo | seoTitle |
|---|---|---|
| `/servizi/ecommerce-shopify` | E-commerce Shopify performanti | E-commerce Shopify per Vendite Dirette |
| `/servizi/siti-web-contatti` | Siti web che generano contatti | Siti Web per Cantine, Frantoi e Agriturismi |
| `/servizi/restyling-ottimizzazione` | Restyling e ottimizzazione | Restyling e Ottimizzazione Siti Web |
| `/servizi/automazioni-ai` | AI integration nei tuoi flussi | AI Integration nei Processi Agroalimentari |
| `/servizi/consulenza-strategica` | Consulenza strategica | Consulenza Strategica Digitale Agroalimentare |
| `/servizi/seo-geo-strategy` | SEO & GEO Strategy | SEO & GEO Strategy per Cantine, Frantoi e Agriturismi |
| `/servizi/brand-identity` | Brand Identity | Brand Identity per Cantine, Frantoi e Agriturismi |

6 su 7 usano `ServiceLandingTemplate`; `automazioni-ai` usa il template legacy `ServicePageTemplate` (`app/servizi/[slug]/page.jsx:9`).

**`/portfolio/[slug]` — 6 slug** (tutti `concept: true`, dettaglio in §9)

`tenuta-monteverdi`, `azienda-rossi`, `frantoi-san-lorenzo`, `podere-la-vite`, `tasting-flow`, `wine-club-pro`

**`/metodo/[slug]` — 4 slug**

`analisi-e-obiettivi` (Analisi e obiettivi), `strategia-di-settore` (Strategia di settore), `design` (Design), `sviluppo` (Sviluppo & implementazione)

> Incoerenza: la FAQ in `lib/data.js:4755` cita "il nostro metodo in 7 step" ma gli step esistenti sono **4**.

**`/geo/[regione]` — 16 slug**

`piemonte`, `valle-daosta`, `liguria`, `lombardia`, `trentino-alto-adige`, `veneto`, `friuli-venezia-giulia`, `emilia-romagna`, `toscana`, `umbria`, `lazio`, `campania`, `basilicata`, `molise`, `sicilia`, `sardegna`

> Mancano 4 regioni italiane (Marche, Abruzzo, Puglia, Calabria). Non verificato se sia una scelta o una lacuna.

**`/blog/[slug]` — 32 articoli**

Slug verificati (righe 1262-4481 di `lib/data.js`): `agente-ai-reparto-commerciale`, `shopify-velocita-conversioni`, `seo-geo-farsi-trovare-ai`, `ecommerce-vino-vendite-dirette`, `agenti-ai-processo-commerciale`, `agriturismo-booking-online-prenotazioni`, `bandi-incentivi-digitalizzazione-agroalimentare`, `chatbot-cantina-ai-customer-service`, `comunicare-sostenibilita-cantina-marketing-vendite`, `cross-selling-upselling-cantina-scontrino-medio`, `degustazioni-cantina-trasformare-visite-vendite`, `ecommerce-per-cantine`, `ecommerce-per-frantoi`, `ecommerce-vino-margini-vendita-diretta`, `email-marketing-sequenze-automatiche-cantina-visitatori`, `enoturismo-prenotazioni-online-vendite-dirette`, `formazione-team-accoglienza-cantina-vendite`, `gestione-fiscale-ecommerce-vino-iva-fatturazione`, `multi-canale-cantina-getyourguide-viator-ota`, `pos-cassa-cantina-vendita-degustazione`, `ridurre-no-show-prenotazioni-cantina-promemoria`, `scegliere-partner-digitale-checklist`, `seo-locale-agroalimentare-google-maps`, `siti-web-per-agriturismi`, `siti-web-per-cantine`, `software-frantoi-gestione-ordini-crm`, `software-per-agriturismi`, `software-per-cantine`, `specialista-digitale-vs-web-agency-agroalimentare`, `storytelling-vino-marketing-vendite`, `vendita-internazionale-vino-dtc-export-estero`, `wine-club-revenue-ricorrente-fedelta`

(corrispondenza 1:1 con i 32 `.jpg` in `public/images/blog/`)

**`/blog/tag/[tag]` — 71 tag unici**

AI, Agribusiness, Agriturismo, Agroalimentare, Automazione, B2B, Bandi, Booking Online, Brand, CRM, CRM Agroalimentare, Cantine, Chatbot, Consulenza, Content Marketing, Conversioni, Customer Service, Degustazioni, E-commerce, E-commerce Vino, Efficienza, Email Marketing, Enoturismo, Export, Farm Stay, Finanziamenti PMI, Fiscalità, Formazione, Frantoi, Freelance, Freelancer, GEO, Gestionale, Gestione Ordini, Gestione Prenotazioni, Google Maps, Hospitality, Incentivi, Local SEO, Local Search, Loyalty, Marketing, Marketing Digitale, Marketing Vino, Olio, Partner Digitale, Performance, Prenotazioni, Pricing, Processi, Punto Vendita, Revenue Ricorrente, SEO, Shopify, Siti Web, Software, Software Frantoi, Sostenibilità, Storytelling, Strategia, Strategia Digitale, Tecnologie, Vendita Diretta, Vendita Online, Vendite, Vino, Web Agency, Web Design, Wine Club, Wine Tech, Wine Tourism

> 71 pagine tag generate automaticamente, molte con probabilmente 1-2 articoli ciascuna (es. "Freelance" e "Freelancer" duplicati concettuali). Rischio thin content — vedi §13.

**`/proposta/[id]` — dinamica pura**

`export const dynamic = 'force-dynamic'`, `robots: {index:false, follow:false}`. Legge il lead da Postgres via Prisma. **Nessun link interno**: si raggiunge solo dopo l'invio del quiz.

### 5.3 Route API

| Endpoint | File | Metodo | Cosa fa |
|---|---|---|---|
| `/api/quiz/lead` | `app/api/quiz/lead/route.js` | POST | Valida payload, scarta bot via honeypot, **ricalcola sempre la proposta lato server** (anti-manomissione), salva su Postgres via Prisma, logga su Supabase (non bloccante), invia 2 email via Resend (cliente + team), registra IP |
| `/api/quiz/analyze-site` | `app/api/quiz/analyze-site/route.js` | POST | Riceve un URL (max 300 char), chiama `analyzeSite()` per dedurre piattaforma / e-commerce / booking |
| `/api/newsletter/subscribe` | `app/api/newsletter/subscribe/route.js` | POST | Valida email con regex, inserisce in tabella Supabase `newsletter_subscribers`, gestisce duplicati (codice `23505`) |

### 5.4 Pagine orfane / poco raggiungibili

| URL | Stato |
|---|---|
| `/geo` e le 16 `/geo/[regione]` | **Fuori da Nav e footer.** Unico ingresso: `components/blog/SidebarPromo.jsx:24`. 17 pagine indicizzate ma quasi invisibili in navigazione |
| `/servizi/wine-club` | Fuori da Nav e footer; raggiungibile da home e `/servizi` |
| `/proposta/[id]` | Nessun link interno (per design), `noindex` |
| `/crediti-immagini` | Solo footer |

### 5.5 Totale route

| Tipo | Conteggio |
|---|---|
| Pagine statiche | 26 |
| `/servizi/[slug]` | 7 |
| `/portfolio/[slug]` | 6 |
| `/metodo/[slug]` | 4 |
| `/geo/[regione]` | 16 |
| `/blog/[slug]` | 32 |
| `/blog/tag/[tag]` | 71 |
| 404 | 1 |
| Route API | 3 |
| `/proposta/[id]` | dinamica (n lead) |
| **Totale pagine pubbliche** | **~163** |

---

## 6. SEO tecnica

### 6.1 Gestione metadata

Centralizzata in **`lib/seo.js`** (117 righe), con `pageMetadata({title, description, path, keywords, type, publishedTime, image})` che genera in modo uniforme: `title`, `description`, `keywords`, `alternates.canonical`, Open Graph completo, Twitter Card `summary_large_image`.

Costanti: `SITE_URL = 'https://matteogaruzzo.com'` (riga 10), `OG_IMAGE = '/images/matteo/og-image.png'` (riga 11).

**Copertura:** tutte le 26 pagine statiche e tutte le route dinamiche esportano `metadata` o `generateMetadata`. Nessuna pagina priva di metadata.

### 6.2 Tabella URL → title → description (pagine principali)

| URL | Title | Description |
|---|---|---|
| `/` | Software e Siti Web per Cantine, Frantoi e Agriturismi | Aumenta le vendite dirette con siti web, e-commerce, software CRM e AI per cantine, frantoi e agriturismi. Soluzioni su misura in tutta Italia. |
| `/servizi` | Servizi Web e Software per l'Agroalimentare | Siti web, e-commerce, CRM, AI e consulenza strategica per cantine, frantoi e agriturismi. Soluzioni su misura per aumentare vendite e visibilità. |
| `/settori` | Soluzioni Digitali per Vino, Olio e Ospitalità | Strategie su misura per cantine, oleifici e agriturismi. Software, siti web ed e-commerce pensati per i tre settori dell'agroalimentare italiano. |
| `/portfolio` | Portfolio: Progetti per l'Agroalimentare | Case study illustrativi per cantine, frantoi e agriturismi: e-commerce, wine club, booking online e software su misura, con risultati misurabili. |
| `/blog` | Blog: Strategie Digitali per l'Agroalimentare | E-commerce, AI, SEO e wine club… Articoli pratici basati su casi reali, **senza fuffa** né promesse vaghe di crescita. |
| `/software` | Software gestionali su misura per l'agroalimentare | Progettiamo CRM e gestionali su misura per cantine, agriturismi e frantoi. Partiamo dalle vostre esigenze. Prima analisi senza impegno. |
| `/chi-sono` | **Matteo Garuzzo, sviluppatore agroalimentare** | Specialista Next.js e AI per cantine, frantoi e agriturismi. Sviluppo siti, e-commerce e software su misura per aumentare le vendite dirette. |
| `/contatti` | Contatti: Prenota una Consulenza Gratuita | Parliamo di come aumentare le tue vendite dirette. Consulenza gratuita di 30 minuti su siti, e-commerce, software e AI per l'agroalimentare. |
| `/metodo` | **Il Nostro Metodo: Zero Fuffa, Crescita Reale** | Come lavoriamo: analisi del business, strategia digitale, sviluppo e supporto continuativo. Un metodo concreto per cantine, frantoi e agriturismi. |
| `/geo` | Servizi Digitali per l'Agroalimentare in Italia | Siti web, e-commerce e software per cantine, oleifici e agriturismi in tutte le regioni italiane. Trova la soluzione digitale per la tua zona. |
| `/quiz` | Scopri di cosa hai bisogno | Rispondi a poche domande e ricevi una proposta preliminare personalizzata per la tua attività, senza impegno. |
| `/risorse` | Risorse: Guide e Template per il Tuo Business | Guide, template e mini-corsi pratici su AI, Shopify, SEO e GEO per PMI agroalimentari. Iscriviti in lista per essere il primo ad accedere gratis. |
| `/referral` | **Referral Program: Guadagna €200 per ogni azienda** | Presenta una cantina, un oleificio o un agriturismo a **MG Solutions** e guadagna **€200**. Semplice, veloce, senza limiti. |
| `/prenota-call` | **Prenota una Call Gratuita con MG Solutions** | Analizziamo insieme come far crescere le tue vendite dirette online. Consulenza gratuita di 30 minuti, senza impegno, con uno specialista di settore. |
| `/servizi/wine-club` | (da `pageMetadata`) | Aiutiamo le cantine a costruire wine club esclusivi: sito dedicato, CRM e automazioni su misura, consulenza sul lancio. Revenue ricorrente, non occasionale. |
| `/settori/wine-viticulture` | (da `pageMetadata`) | Portate le vendite dirette online: e-commerce, wine club, prenotazioni esperienze. Strategie costruite su cantine vere, non su promesse generiche. |
| `/settori/oleifici-food-tech` | (da `pageMetadata`) | Vendite dirette e B2B online per oleifici. Automazione ordini, gestione bulk, CRM clienti. Scalate da vendita locale a distribuzione nazionale. |
| `/settori/wine-hospitality-agriturismi` | (da `pageMetadata`) | **Raddoppiate le prenotazioni**: sistema booking integrato, automazione email, AI per risposte clienti. Da gestione manuale a scalabilità senza sforzo. |
| `/software/vitivinicolo` | (da `pageMetadata`) | Wine club, degustazioni, vendita diretta, listini B2B. Costruiamo il gestionale attorno a come lavorate. Prima analisi gratuita. |
| `/software/hospitality` | (da `pageMetadata`) | Prenotazioni dirette, gestione ospiti, esperienze. Un gestionale costruito su come lavorate voi. Prima analisi gratuita. |
| `/software/frantoi` | (da `pageMetadata`) | Ordini privati e B2B, listini multipli, giacenze per lotto. Gestionale su misura per il settore oleario. Prima analisi gratuita. |
| `/proposta/[id]` | La tua proposta | — (`noindex, nofollow`) |

Il `title` finale in pagina riceve il suffisso `· MG Solutions` dal template in `app/layout.jsx:22`.

> Nota: `/settori/wine-hospitality-agriturismi` promette "**Raddoppiate le prenotazioni**" nella description — un risultato numerico non verificabile, in violazione della regola Agria sulle affermazioni dimostrabili.

### 6.3 Canonical

Generati **su ogni pagina** da `lib/seo.js:24` (`alternates: { canonical: path }`), risolti in assoluto da `metadataBase` in `app/layout.jsx:19`. Le pagine legali che non usano `pageMetadata` (`privacy-policy`, `cookie-policy`, `termini-e-condizioni`, `crediti-immagini`, `not-found`) definiscono `metadata` a mano: **da verificare caso per caso se includano il canonical** (non confermato in questo audit — NON VERIFICATO).

### 6.4 Sitemap

`app/sitemap.js` (102 righe) — **generata dinamicamente** da Next.js (`/sitemap.xml`). Base hardcoded: `https://matteogaruzzo.com` (riga 4).

Gruppi e priorità:

| Gruppo | URL | Priority | changeFrequency |
|---|---|---|---|
| Home | `/` | 1.0 | weekly |
| Core | `/servizi`, `/software`, `/portfolio`, `/blog`, `/settori` | 0.8 | monthly |
| Software settore | 3 URL | 0.7 | monthly |
| Secondarie | `/chi-sono`, `/servizi/wine-club`, `/metodo`, `/geo` | 0.7 | monthly |
| Utility | `/risorse`, `/referral`, `/prenota-call`, `/contatti` | 0.6 | monthly |
| Legali | `/privacy-policy`, `/cookie-policy`, `/termini-e-condizioni` | 0.2 | yearly |
| Settori | 3 (da `sectors`) | 0.7 | monthly |
| Case study | 6 (da `caseStudies`) | 0.6 | monthly |
| Metodo | 4 | 0.5 | monthly |
| Servizi | 7 | 0.7 | monthly |
| Blog | 32 | 0.6 | weekly |
| GEO | 16 | 0.5 | monthly |
| Tag | 71 | 0.3 | weekly |

**Totale in sitemap: ~155 URL.**

**Assenti dalla sitemap:** `/quiz`, `/crediti-immagini`, `/proposta/[id]` (correttamente escluso). `/quiz` e `/crediti-immagini` sono indicizzabili ma non dichiarati.

`lastModified: new Date()` per quasi tutte le URL: **la data di modifica è sempre "adesso"**, quindi priva di significato per i crawler (solo il blog usa `p.updated || p.date`).

### 6.5 `robots.txt`

`public/robots.txt` — statico, 4 righe:

```
User-Agent: *
Allow: /

Sitemap: https://matteogaruzzo.com/sitemap.xml
```

Nessun `Disallow`. Anche `/proposta/*` è crawlabile da robots.txt (protetto però dal `noindex` nel metadata).

### 6.6 Redirect esistenti

Unica fonte: `next.config.js:7-16`. Nessun `vercel.json`, nessun `middleware`.

| Da | A | Tipo |
|---|---|---|
| `/software/pricing` | `/software` | 301 |
| `/software/lead-sales` | `/software` | 301 |
| `/software/social-ai` | `/software` | 301 |
| `/software/booking-experience` | `/software` | 301 |
| `/software/staff-operations` | `/software` | 301 |
| `/software/control-tower` | `/software` | 301 |

Tutti residui della vecchia struttura "prodotto SaaS" smantellata nel commit `4c7b481`.

### 6.7 Riferimenti hardcoded a `matteogaruzzo.com`

| File | Riga | Contesto |
|---|---|---|
| `app/layout.jsx` | 19 | `metadataBase: new URL('https://matteogaruzzo.com')` |
| `app/layout.jsx` | 61 | JSON-LD Organization `url` |
| `app/layout.jsx` | 62 | JSON-LD Organization `logo` |
| `lib/seo.js` | 10 | `SITE_URL` (usata da tutti gli schema JSON-LD) |
| `app/sitemap.js` | 4 | `const base` |
| `public/robots.txt` | 4 | riga `Sitemap:` |

**6 punti da cambiare** per la migrazione di dominio. Il dominio non è parametrizzato via variabile d'ambiente.

Altri riferimenti al brand personale: `matteogaruzzo1@gmail.com` (`lib/data.js:14`), `linkedin.com/in/matteogaruzzo` (riga 25), `instagram.com/matteogaruzzo` (riga 26), `calendly.com/matteogaruzzo/30min` (riga 28).

### 6.8 Structured data (JSON-LD)

Presente in **33 file**. Helper in `lib/seo.js`: `webPageSchema`, `serviceSchema`, `breadcrumbSchema`, `faqPageSchema`, `howToSchema`.

| Schema | Dove |
|---|---|
| `Organization` | `app/layout.jsx:57-76` — **contiene `founder: Person "Matteo Garuzzo"`, telefono, email, indirizzo completo (Via Ponte Vecchio, Perugia 06135), `sameAs` LinkedIn + Instagram** |
| `Person` | `app/blog/[slug]/page.jsx:67` (`author`, con foto `matteo-garuzzo.jpg`), `app/contatti/page.jsx:71` (`founder`), `app/layout.jsx:63` |
| `LocalBusiness` | `components/SectorPageTemplate.jsx:45` — `provider: {name: 'MG Solutions', areaServed: 'IT'}` |
| `WebPage` | quasi tutte le pagine |
| `Service` | `/software`, `/servizi/wine-club`, pagine servizio |
| `FAQPage` | `/servizi`, 3 settori, 3 software, `/servizi/wine-club`, `/geo/[regione]` |
| `BreadcrumbList` | pagine settore, software, servizi |
| `HowTo` | `/servizi/wine-club`, `/referral` |
| `Organization` locale | `app/geo/[regione]/page.jsx:99` — `name: "MG Solutions - Servizi Digitali Agroalimentare {Regione}"` (16 varianti) |

**Nomi di persona presenti nei dati strutturati:** solo **Matteo Garuzzo**. Nessun nome di cliente reale è esposto in JSON-LD (i nomi nei case study sono di fantasia, vedi §9).

### 6.9 Immagini e alt text

- **Uso esclusivo di `next/image`**: 17 componenti `<Image>` in 14 file. **Zero tag `<img>` grezzi.**
- **Alt text:** tutti e 17 gli `<Image>` hanno l'attributo `alt`. Unico `alt=""` (decorativo, corretto perché affiancato dal testo "MG SOLUTIONS"): `components/Nav.jsx:139`.
- Molte immagini sono però usate come `background-image` CSS inline (case study, hero settori): **non hanno alt né equivalente testuale** perché non sono elementi `<img>`. Esempi: `app/portfolio/[slug]/page.jsx:181,292,313,317`, `components/PortfolioGrid.jsx:43`.
- `next.config.js:5` consente l'ottimizzazione di immagini da **qualunque host HTTPS** (`hostname: '**'`).

### 6.10 Favicon e manifest

| File | Presente | Note |
|---|---|---|
| `public/favicon.ico` | Sì (1.2 KB) | |
| `public/favicon.png` | Sì (962 B) | Referenziato in `app/layout.jsx:82` |
| `public/apple-touch-icon.png` | Sì (8 KB) | Referenziato in `app/layout.jsx:83` |
| `site.webmanifest` | **Solo in `public/images/brand/favicon/`** (non tracciato, non collegato) | Il nuovo set AGRIA non è ancora agganciato |
| `public/googleccbadc07cfe8a799.html` | Sì (53 B) | File di verifica proprietà Google Search Console |

Il layout usa i favicon **legacy** in `public/`. Il set AGRIA in `public/images/brand/favicon/` (7 file, untracked) **non è referenziato da nessuna parte**.

---

## 7. Lingue

| Voce | Stato |
|---|---|
| Multilingua | **No.** Sito esclusivamente in italiano |
| Libreria i18n | **Nessuna** (no `next-intl`, no `next-i18next`, no routing `[locale]`) |
| Attributo `lang` | `<html lang="it">` — hardcoded in `app/layout.jsx:80` |
| `hreflang` | **Assente** |
| `locale` Open Graph | `it_IT` hardcoded in `app/layout.jsx:39` e `lib/seo.js:30` |
| `inLanguage` JSON-LD | `it-IT` hardcoded in `lib/seo.js:51` |
| File di traduzione | **Nessuno** |

L'obiettivo IT+EN del Master Plan richiede di costruire l'infrastruttura i18n **da zero**: routing, dizionari, hreflang, `lang` dinamico, `locale` OG e sitemap multilingua. Nessun pezzo è riutilizzabile così com'è.

---

## 8. Form, lead, cookie, privacy, analytics

### 8.1 Form presenti

**A. `BookingForm` — form contatti principale**

| Voce | Dettaglio |
|---|---|
| File | `components/BookingForm.jsx` (client component) |
| Usato in | home (`app/page.jsx:144`), `/chi-sono:421`, `/contatti:265`, `SectorPageTemplate:344` |
| Campi | `nome` (required), `email` (required, type=email), `whatsapp`, `tipo` (select: Cantina/Oleificio/Agriturismo/Altro), `progetto` (select: Sito web/E-commerce/Software su misura/Consulenza strategica/Altro), `messaggio` (textarea) |
| Validazione | Solo HTML5 (`required`, `type="email"`) |
| **Dove finiscono i dati** | **Da nessuna parte lato server.** `handleSubmit` (righe 43-58) costruisce un testo e apre `https://wa.me/<numero>?text=...` in una nuova scheda |
| Antispam | **Nessuno** |
| **Checkbox consenso privacy** | **ASSENTE** — verificato: nessuna occorrenza di "privacy"/"consenso"/"checkbox" nel file |
| Prefill | `?interesse=software` precompila progetto e messaggio (righe 15-21) |

**B. `Quiz/ContactForm` — form del quiz**

| Voce | Dettaglio |
|---|---|
| File | `components/Quiz/ContactForm.jsx` |
| Campi | nome (required), email (required), telefono, azienda, **checkbox privacy (required, riga 56)** |
| Antispam | **Honeypot** — campo nascosto `name="website"` (righe 61-63); se compilato, l'API risponde "success" senza salvare (`route.js:20-22`) |
| Endpoint | `POST /api/quiz/lead` |
| Destinazione dati | Postgres (Prisma, modello `Lead`) + Supabase `quiz_responses` + 2 email Resend |
| Dati raccolti | nome, email, telefono, azienda, risposte quiz, proposta generata, **indirizzo IP** (`route.js:34`, campo `ipAddress`) |

**C. `NewsletterFooter`**

| Voce | Dettaglio |
|---|---|
| File | `components/NewsletterFooter.jsx` (nel footer di ogni pagina) |
| Campi | solo `email` (required) |
| Endpoint | `POST /api/newsletter/subscribe` |
| Destinazione | Supabase, tabella `newsletter_subscribers` (campi `email`, `source`) |
| Consenso privacy | **Nessuna checkbox**; testo: "Niente spam, no fuffa" |

### 8.2 Cookie banner e consenso

| Voce | Dettaglio |
|---|---|
| Soluzione | **Custom, sviluppata internamente.** Nessun provider esterno (no Iubenda, no Cookiebot, no CookieYes) |
| File | `components/CookieConsentBanner.jsx` (139 righe), `lib/consent.js` (70 righe), `components/ReopenConsentButton.jsx` |
| Storage | **Solo `localStorage`**, chiave `mg_cookie_consent_v1` (`lib/consent.js:7`). Nessun cookie HttpOnly, nessun endpoint server |
| Versioning | `CONSENT_VERSION = 1`; incrementandola si forza un nuovo banner |
| Scadenza | **90 giorni** (`EXPIRY_DAYS`), poi il banner ricompare |
| Categorie | `essential` (bloccata, sempre attiva), `booking` (widget Calendly), `analytics` (dichiarata ma **non collegata ad alcuno strumento**) |
| Azioni offerte | "Accetta tutti", "Rifiuta", "Personalizza" → salva preferenze / rifiuta tutto / accetta tutto |
| Riapertura | Pulsante "Preferenze cookie" nel footer (`Footer.jsx:96-103`) |

Testo mostrato all'utente nella categoria Analytics: *"Al momento non utilizziamo alcuno strumento di analytics. Se in futuro lo attiveremo, te lo chiederemo qui."* (`CookieConsentBanner.jsx:20`).

### 8.3 Privacy policy e cookie policy

Entrambe sono **pagine interne** (non link esterni a un generatore):

| Pagina | File | Note |
|---|---|---|
| `/privacy-policy` | `app/privacy-policy/page.jsx` | §1 Titolare: `site.founder` + `P.IVA IT04006460549` + indirizzo (riga 32); §4 Periodo di conservazione (riga 112); descrive il trattamento del quiz (righe 50-58: dati, finalità, base giuridica) |
| `/cookie-policy` | `app/cookie-policy/page.jsx` | Dichiara di seguire le Linee guida sui cookie; afferma l'assenza di cookie di analytics/profilazione (riga 84) |
| `/termini-e-condizioni` | `app/termini-e-condizioni/page.jsx` | |
| `/crediti-immagini` | `app/crediti-immagini/page.jsx` | Attribuzioni Unsplash |

**Dati legali** (P.IVA `IT04006460549`, indirizzo Via Ponte Vecchio, Perugia 06135) compaiono in: `lib/data.js:14-27`, `components/Footer.jsx:115`, `app/privacy-policy/page.jsx:32`, `app/layout.jsx:67-74` (JSON-LD), `app/contatti/page.jsx`.

**Lacuna:** la privacy policy documenta il trattamento del quiz, ma **non risulta documentato** il trattamento dei dati inviati tramite `BookingForm` verso WhatsApp né l'iscrizione newsletter su Supabase (NON VERIFICATO in modo esaustivo: ho letto solo le sezioni intercettate dal grep, non l'intero testo della policy).

### 8.4 Analytics e tracking

**Nessuno strumento di analytics o tracking è installato.** Ricerca con pattern precisi (`gtag(`, `googletagmanager`, `google-analytics`, `GTM-`, `G-XXXXXXXXX`, `fbq(`, `@vercel/analytics`, `hotjar`, `plausible.io`, `matomo`) su `app/`, `components/`, `lib/`: **zero risultati**.

**Unico script esterno caricato:** widget Calendly.

| Voce | Dettaglio |
|---|---|
| File | `components/CalendlyEmbed.jsx` |
| Script | `https://assets.calendly.com/assets/external/widget.js`, `strategy="lazyOnload"` (riga 70) |
| Caricamento | **Solo dopo consenso** della categoria `booking` |
| Usato in | `/prenota-call` (riga 148) |
| Listener | Ascolta `postMessage` filtrando l'origine `calendly.com` (riga 31) e intercetta `calendly.event_scheduled` (riga 32) |

Conseguenza: **non esistono dati storici di Google Analytics per questo sito.** L'unica fonte di dati di traffico è Google Search Console (proprietà verificata via `public/googleccbadc07cfe8a799.html`). Questo va tenuto presente per il punto 6 del "Momento 1: inventario" del Master Plan (cap. 8), che chiede la verifica dello storico GA.

---

## 9. Case study pubblici

### 9.1 Case study raggiungibili dalla navigazione

Tutti e 6 sono raggiungibili da `/portfolio` (linkata in Nav e footer) e sono **esplicitamente marcati `concept: true`**, cioè progetti illustrativi dichiarati come non reali.

| Titolo | URL | File dati | Settore dichiarato | Contenuti presenti | Immagini |
|---|---|---|---|---|---|
| **Tenuta Monteverdi** | `/portfolio/tenuta-monteverdi` | `lib/data.js:810-875` | Cantina · Toscana, Chianti Classico | overview, problem, solution, techStack (4), deliverables (6), results (3), roi, deepDive (metricsHuman, learnings, roadmap, impactNote), mockup e-commerce con 3 prodotti e prezzi | `tenuta-monteverdi-prima.png`, `-desktop.png`, `-mobile.png` |
| **Azienda Rossi** | `/portfolio/azienda-rossi` | `lib/data.js:876-940` | Cantina biologica · Emilia-Romagna, Lambrusco | idem | `tenuta-rossi-prima.png` *(nome non allineato allo slug)*, `azienda-rossi-desktop.png`, `-mobile.png` |
| **Frantoi San Lorenzo** | `/portfolio/frantoi-san-lorenzo` | `lib/data.js:941-1004` | Oleificio storico · Umbria, Olio DOP | idem | `frantoi-san-lorenzo-prima.png`, `-desktop.png`, `-mobile.png` |
| **Podere La Vite** | `/portfolio/podere-la-vite` | `lib/data.js:1005-1069` | Agriturismo · Toscana, 8 camere + ristorazione | idem | `podere-la-vite-prima.png`, `-desktop.png`, `-mobile.png` |
| **Tasting Flow** | `/portfolio/tasting-flow` | `lib/data.js:1070-1135` | Software su misura · tasting room (per Tenuta Monteverdi) | idem + mockup dashboard | `tasting-flow-desktop.png`, `-mobile.png` (nessuna `-prima`) |
| **Wine Club Pro** | `/portfolio/wine-club-pro` | `lib/data.js:1136-1204` | Software su misura · abbonamenti (per Azienda Rossi) | idem + mockup dashboard | `wine-club-pro-desktop.png`, `-mobile.png` |

Le immagini `-desktop.png` / `-mobile.png` sono referenziate **dinamicamente** (`url(/images/case-studies/${c.slug}-desktop.png)`) in `app/portfolio/[slug]/page.jsx:181,292,313,317`, `components/PortfolioGrid.jsx:43`, `components/ServicePageTemplate.jsx:91`, `app/servizi/page.jsx:385`, `app/settori/page.jsx:229`.

### 9.2 Metriche, percentuali e risultati numerici dichiarati

**Tutti i numeri seguenti sono inventati** (legati a progetti `concept`), ma sono **pubblicamente visibili** sul sito:

| Valore | Etichetta | File : riga | Riproposto in |
|---|---|---|---|
| `+40%` | vendite dirette (Tenuta Monteverdi) | `lib/data.js:831, 851` | home `referenceNumbers:4667`, `sectorPageContent:4852` |
| `60/mese` | prenotazioni degustazione | `lib/data.js:832, 852` | — |
| `200` | wine club members | `lib/data.js:833, 853` | `sectorPageContent:4853` |
| `80/mese` | ordini online (Azienda Rossi) | `lib/data.js:897, 916` | `sectorPageContent:4854` |
| `80` | membership attive | `lib/data.js:898, 917` | — |
| `6/anno` | workshop sold out | `lib/data.js:899, 918` | `sectorPageContent:4855` |
| `+200%` | vendita diretta (Frantoi San Lorenzo) | `lib/data.js:962, 980` | `referenceNumbers:4668`, `sectorPageContent:4898` |
| `300+` | clienti regolari | `lib/data.js:963, 981` | `sectorPageContent:4899` |
| `€5.000/mese` | fatturato da marketplace | `lib/data.js:964, 982` | `sectorPageContent:4900` |
| `+35%` | occupazione camere (Podere La Vite) | `lib/data.js:1026, 1045` | `sectorPageContent:4943` |
| `+50%` | prenotazioni cena | `lib/data.js:1027, 1046` | `sectorPageContent:4944` |
| `Top 5%` | strutture su Booking.com | `lib/data.js:1028, 1047` | `sectorPageContent:4945` |
| `+25%` | conversione tasting → wine club (Tasting Flow) | `lib/data.js:1085, 1095, 1113` | — |
| `-15h/mese` | lavoro amministrativo | `lib/data.js:1096, 1114` | `referenceNumbers:4670` |
| `85%` | retention M1→M12 (Wine Club Pro) | `lib/data.js:1151, 1161, 1180` | `referenceNumbers:4669` |
| `3%` | churn rate | `lib/data.js:1152, 1162, 1181` | — |
| `€450` | LTV medio per membro | `lib/data.js:1163, 1182` | — |
| `85 su 100 … contro una media di settore più vicina al 60%` | affermazione di benchmark di settore | `lib/data.js:1187` | — |

**`heroStats` in homepage** (`lib/data.js:4655-4660`): `3` settori verticali, `6` case study illustrativi, `5+` anni di esperienza, `100%` trasparenza sui risultati.

**Prezzi visibili nei mockup dei case study:** €28, €42, €19 (Monteverdi); €14, €16, €15 (Rossi); €18, €26, €22 (San Lorenzo); "da €140/notte" (Podere La Vite).

### 9.3 Disclaimer attualmente in pagina

Il sito è **onesto e coerente** nel dichiarare la natura illustrativa:

| Punto | File : riga | Testo |
|---|---|---|
| Badge CONCEPT | `app/portfolio/[slug]/page.jsx:200-202`, `app/page.jsx:473-475` | "CONCEPT" |
| Disclaimer case study | `app/portfolio/[slug]/page.jsx:208` | "Case study illustrativo — esempio di progetto tipo per il settore, non un cliente reale." |
| Disclaimer portfolio | `app/portfolio/page.jsx:52-53` | "I case study sono illustrativi: esempi realistici di ciò che sappiamo costruire per ciascun settore, non clienti reali." |
| Disclaimer home | `app/page.jsx:430, 443-445` | "Numeri presi dai nostri progetti illustrativi… non un aggregato di fatturato reale di MG Solutions." |
| Disclaimer servizi | `app/servizi/page.jsx:302, 315, 380` | idem |
| Disclaimer geo | `app/geo/[regione]/page.jsx:232` | idem |
| Disclaimer metodo | `app/metodo/page.jsx:248` | idem |

**Contraddizione rilevata:** `app/portfolio/page.jsx:42` mostra l'eyebrow **"Portfolio · Progetti realizzati"** dieci righe sopra il disclaimer che dice che non sono progetti reali.

### 9.4 Testimonianze (illustrative)

4 testimonianze in `lib/data.js:4704-4741`, tutte con `concept: true`, legate ai case study:

| Nome | Ruolo dichiarato | Case study |
|---|---|---|
| Andrea | Titolare, Tenuta Monteverdi | `tenuta-monteverdi` |
| Maria | Titolare, Frantoi San Lorenzo | `frantoi-san-lorenzo` |
| Luca | Titolare, Podere La Vite | `podere-la-vite` |
| Giulia | Fondatrice, Azienda Rossi | `azienda-rossi` |

Riferimenti a `testimonialName` anche nei singoli servizi (es. `lib/data.js:4644`).

### 9.5 Progetti/clienti presenti nel repository ma NON raggiungibili pubblicamente

Elencati senza valutazione, come richiesto:

| Elemento | Dove | Stato |
|---|---|---|
| **AURORA DISTRICT** | `public/images/projects/AURORA DISTRICT/` (9 file) | Cartella immagini, **nessun riferimento nel codice**. Attualmente cancellata nel working tree (non committato) |
| **COREX** | `public/images/projects/COREX/` (6 file) | Idem. Nomi file citano "CRM Platform", "Enterprise Intelligence" |
| **GOCLEAN** | `public/images/projects/GOCLEAN/` (8 file) | Idem. Nomi file citano "app mobile" |
| **RISTORANTINO DELLA CARNE** | `public/images/projects/RISTORANTINO DELLA CARNE/` (2 file) | Idem |
| **VINT** | `public/images/projects/VINT/` (6 file) | Idem. Nomi file citano "Shop Shopify", "E-commerce" |
| **Testimonianze reali** | `public/images/testimonials/` (7 file) | Include `alessandro ristorantino della carne (1).png`, badge Google Partner, Shopify Partner, TechPartner. **Nessun riferimento nel codice** |
| `azienda-rossi-second-daaggiungere.png` | `public/images/case-studies/` | Immagine con nome "da aggiungere", non referenziata |
| `preview-sites/tenuta-monteverdi/` | 3 file (bottle, cantina-interior, tasting-table) | Cartella mai referenziata nel codice |
| `docs/AUDIT-STRATEGIA-MG-SOLUTIONS.md` | 367 righe | Documento strategico legacy, non pubblicato sul sito |
| Pagine software rimosse | `/software/{pricing,lead-sales,social-ai,booking-experience,staff-operations,control-tower}` | Solo come redirect 301; i relativi hero (`*-hero.jpg/png`, 9 file) restano in `public/images/software/` |

**Nota importante:** nessuno di questi nomi (AURORA DISTRICT, COREX, GOCLEAN, RISTORANTINO DELLA CARNE, VINT) compare in pagine, JSON, metadata, JSON-LD, alt text, sitemap o componenti. Esistono **solo come file immagine** in `public/`. La ricerca testuale su tutto il repository per questi nomi nel codice dà **zero risultati**.

---

## 10. Audit legacy

### 10.1 Riferimenti al brand "MG Solutions"

**54 occorrenze in 22 file.**

| File : riga | Contesto |
|---|---|
| `lib/data.js:12` | `site.name = 'MG Solutions'` — **sorgente di quasi tutte le altre occorrenze** |
| `lib/data.js:766, 4664, 4819` | commenti |
| `lib/seo.js:13` | commento |
| `components/Nav.jsx:141` | testo logo header |
| `components/Nav.jsx:87` | descrizione mega-menu referral |
| `components/Footer.jsx:42` | testo brand footer |
| `components/Footer.jsx:115` | copyright + P.IVA |
| `components/SectorPageTemplate.jsx:45` | JSON-LD `LocalBusiness.name` |
| `components/SectorPageTemplate.jsx:291, 296` | sezione "Perché MG Solutions." |
| `components/servizi/ServiceLandingTemplate.jsx:213` | intestazione colonna tabella comparativa |
| `app/page.jsx:333` | alt immagine: "Matteo Garuzzo, fondatore di MG Solutions" |
| `app/page.jsx:350` | "Ho fondato MG Solutions quando…" |
| `app/page.jsx:445` | disclaimer numeri |
| `app/chi-sono/page.jsx:24, 73, 74, 318` | keywords, timeline, "Il team dietro MG Solutions." |
| `app/contatti/page.jsx:391, 399` | titolo mappa, intestazione indirizzo |
| `app/geo/page.jsx:29` | H1 "MG Solutions in tutta Italia." |
| `app/geo/[regione]/page.jsx:99, 155` | JSON-LD name (×16 regioni), testo |
| `app/referral/page.jsx:21, 54, 68, 85, 97, 129, 262` | 7 occorrenze |
| `app/referral/opengraph-image.jsx:4, 25` | alt + testo immagine OG |
| `app/prenota-call/page.jsx:12` | title SEO |
| `app/privacy-policy/page.jsx:135` | testo |
| `app/termini-e-condizioni/page.jsx:6` | description |
| `app/blog/[slug]/page.jsx:139` | alt fallback: `${p.title} — MG Solutions` |
| `app/blog/tag/[tag]/page.jsx:18, 32` | description (×71 pagine tag) |
| `app/servizi/wine-club/page.jsx:280` | tabella comparativa |
| `app/servizi/wine-club/opengraph-image.jsx:4, 25` | immagine OG |
| `ISTRUZIONI-WINDOWS.md:70` | documentazione |
| `docs/AUDIT-STRATEGIA-MG-SOLUTIONS.md` | **nome del file** + 8 occorrenze interne |

**`mgsolutions`** (minuscolo): 3 occorrenze in 2 file (URL repo in `ISTRUZIONI-WINDOWS.md`, nome file doc).

### 10.2 "Matteo Garuzzo" / "matteogaruzzo" come brand

**12 occorrenze di "Matteo Garuzzo" in 6 file; 14 di "matteogaruzzo" in 8 file.**

**Uso come BRAND (da rimuovere):**

| File : riga | Contesto |
|---|---|
| `lib/data.js:13` | `site.founder = 'Matteo Garuzzo'` |
| `lib/data.js:1242-1245` | `team[0]`: "Matteo Garuzzo — Web Developer & Founder" |
| `app/chi-sono/page.jsx` (metadata) | title: "Matteo Garuzzo, sviluppatore agroalimentare" |
| `app/page.jsx:333` | alt: "Matteo Garuzzo, fondatore di MG Solutions" |
| `app/page.jsx:348-350` | "Sono **Matteo**…", "Ho fondato MG Solutions…" |
| `app/layout.jsx:33` | keyword `'Matteo Garuzzo'` |
| `app/layout.jsx:63`, `app/contatti/page.jsx:71` | JSON-LD `founder: Person` |
| `app/blog/[slug]/page.jsx:67` | JSON-LD `author: Person` con foto |
| `components/Footer.jsx:116` | "Made with ❤️ by Matteo Garuzzo" |
| `lib/data.js:28` | `calendly: 'https://calendly.com/matteogaruzzo/30min'` |
| `lib/data.js:25-26` | LinkedIn + Instagram personali |
| `lib/data.js:14` | `email: 'matteogaruzzo1@gmail.com'` |
| Nomi file immagine | `matteo-garuzzo.jpg`, `matteo-hero-nobg.png`, cartella `public/images/matteo/` |

**Uso LEGALE / di contatto (da mantenere, riformulato come "marchio di" secondo il Master Plan):**

| File : riga | Contesto |
|---|---|
| `app/privacy-policy/page.jsx:32` | Titolare del trattamento + P.IVA IT04006460549 |
| `components/Footer.jsx:115` | P.IVA nel copyright |
| `lib/data.js:17-23` | indirizzo postale |

**Dominio** `matteogaruzzo.com`: 6 punti hardcoded (vedi §6.7).

### 10.3 "Chi Sono" e linguaggio in prima persona singolare

**26 occorrenze di "Chi Sono" in 7 file; 13 di "chi-sono" in 8 file.**

| Elemento | Dove |
|---|---|
| Pagina dedicata | `app/chi-sono/page.jsx` — **H1: "Non un'agenzia. Un developer che capisce il tuo mondo."** |
| Voce di menu | `components/Nav.jsx:94` — prima voce del menu |
| Voce footer | `components/Footer.jsx:11` — prima voce colonna Servizi |
| Sitemap | `app/sitemap.js:17` — priority 0.7 |
| Sezione in homepage | `app/page.jsx:330-359` |

**Prima persona singolare rilevata:**

| File : riga | Testo |
|---|---|
| `app/page.jsx:348` | "Non sono un'agenzia che osserva dall'esterno. **Sono Matteo**…" |
| `app/page.jsx:350` | "…cinque anni. **Ho fondato** MG Solutions quando **mi sono accorto** che le cantine e i…" |
| `app/page.jsx:359` | "**Sono** un web developer prima di tutto. **Non delego mai** lo…" |
| `app/prenota-call/page.jsx:43` | "Parliamo del tuo progetto. **Io ascolto** più di quanto parlo." |
| `app/chi-sono/page.jsx:74` | "**Fondo** formalmente MG Solutions con Matteo De Pilla… Da freelance diventato strutturato" |
| `app/contatti/page.jsx:28, 43` | "…**ti mando** una proposta scritta…" (×2) |
| `app/prenota-call/page.jsx:38` | "…**ti mando** un documento con passi e costo indicativo." |

### 10.4 Frasi vietate dal tone of voice (Master Plan cap. 7)

**"fuffa" — 5 occorrenze:**

| File : riga | Testo |
|---|---|
| `app/metodo/page.jsx:11` | title SEO: "Il Nostro Metodo: **Zero Fuffa**, Crescita Reale" |
| `app/blog/page.jsx:17` | description: "…**senza fuffa** né promesse vaghe…" |
| `app/blog/page.jsx:64` | "**Niente fuffa**: solo cose che aiutano davvero…" |
| `components/NewsletterFooter.jsx:50` | "Niente spam, **no fuffa**." |
| `lib/data.js:403` | "**Niente fuffa**, solo priorità chiare." |

**"non siamo un'agenzia" / "non un'agenzia" — 7 occorrenze:**

| File : riga | Testo |
|---|---|
| `app/chi-sono/page.jsx:158` | "**Non un'agenzia.**" (parte dell'H1) |
| `app/metodo/page.jsx:222` | eyebrow: "Perché **non siamo un'agenzia** web standard" |
| `app/page.jsx:348` | "**Non sono un'agenzia** che osserva dall'esterno." |
| `app/servizi/page.jsx:354` | eyebrow: "Perché **non siamo un'agenzia** web standard" |
| `app/settori/page.jsx:161` | "**Non siamo un'agenzia** web. Siamo specialisti agribusiness." |
| `components/SectorPageTemplate.jsx:295` | eyebrow: "Perché **non siamo un'agenzia** web standard" (×3 pagine settore) |
| `app/page.jsx:359` | "**Non delego mai** lo sviluppo…" |

### 10.5 Prezzi, importi, listini

**Sorgente unica:** `lib/pricing-data.js` (46 righe) — 16 voci di prezzo:

| Voce | Prezzo | Rate |
|---|---|---|
| Restyling mirato | €690 | 3 × €230 |
| Prima automazione | €690 | 3 × €230 |
| Sito essenziale | €1.290 | 3 × €430 |
| Wine club / club olio | €1.470 | 3 × €490 |
| Sito + prenotazioni | €2.190 | 3 × €730 |
| E-commerce | €2.490 | 3 × €830 |
| CRM su misura | €2.940 | 6 × €490 |
| Consulenza orientamento | €290 | — |
| Consulenza completa | €490 | — |
| Percorso 3 mesi | €1.470 | 3 × €490 |
| Assistenza mensile | €79/mese | — |
| Audit SEO & GEO | €490 | — |
| SEO & GEO continuativo | €350/mese | — |
| Brand refresh | €990 | 3 × €330 |
| Brand identity completa | €1.890 | 3 × €630 |

**File che mostrano prezzi (12 file con simbolo €):**

| File | Occorrenze € | Contesto |
|---|---|---|
| `lib/data.js` | 17 | blocchi `investment` dei 7 servizi + mockup case study |
| `app/referral/page.jsx` | 14 | €200 di premio referral |
| `lib/pricing-data.js` | 2 | formattazione |
| `app/referral/opengraph-image.jsx` | 2 | immagine OG "guadagna €200" |
| `components/PricingBlock.jsx` | 1 | componente prezzi |
| `components/ServicePageTemplate.jsx` | 1 | |
| `components/software/SoftwareSectorTemplate.jsx` | 1 | |
| `components/StatNumber.jsx` | 1 | |
| `components/Nav.jsx` | 1 | mega-menu: "€200 per ogni azienda, senza limite" |
| `components/Footer.jsx` | 1 | "Guadagna con noi (€200)" |
| `app/software/page.jsx` | 1 | |
| `app/servizi/wine-club/page.jsx` | 1 | |

**Formula "Prezzi pubblicati":** 12 occorrenze in `lib/data.js` (righe 101, 119, 199, 215, 230, 308, 323, 453, 559, 573, 663, 677, 691) e in `components/PricingBlock.jsx:29`, `app/servizi/wine-club/page.jsx:342`.

**Frase rate post-vendemmia:** `lib/pricing-data.js:38` — "oppure 3 rate senza interessi, anche distribuite dopo la vendemmia".

**Messaggio WhatsApp precompilato con prezzo:** `lib/pricing-data.js:42-46`.

> **Contraddizione interna già presente:** le FAQ dichiarano "Non pubblichiamo un listino" (`lib/data.js:4751, 4859, 4951`) mentre le pagine servizio mostrano prezzi espliciti sotto l'etichetta "Prezzi pubblicati".

### 10.6 Servizi CRM, gestionali, ERP, software custom

Il Master Plan esclude esplicitamente CRM, ERP, PMS custom e gestionali su misura da Digital Automation. Nel sito attuale questi sono **un'intera sezione di primo livello**:

| Elemento | Dove |
|---|---|
| Voce di menu "Software" con mega-menu | `components/Nav.jsx:110-117` |
| `/software` | H1: "Il gestionale che vi serve probabilmente non esiste ancora." |
| `/software/vitivinicolo` | "CRM, wine club e prenotazioni degustazioni" (`Nav.jsx:64`) |
| `/software/hospitality` | "Prenotazioni, esperienze e gestione team" (`Nav.jsx:65`) |
| `/software/frantoi` | "Ordini B2B, clienti olio e gestione team" (`Nav.jsx:66`) |
| `softwareCustom` | `lib/data.js:771-781` — "Software AI su misura" |
| `softwareOngoing` | `lib/data.js:784-799` — gestione continuativa |
| Prezzo "CRM su misura" €2.940 | `lib/pricing-data.js:19` |
| Case study software | `tasting-flow`, `wine-club-pro` (2 dei 6 case study) |
| Menzioni CRM in metadata | home, `/servizi`, `/settori/oleifici-food-tech`, `/servizi/wine-club` |
| FAQ | `lib/data.js:4758` — "Potete integrare il mio gestionale o CRM esistente?" |

### 10.7 Nomi di clienti o aziende cliente

**Ricerca "Corti Calzature": 0 occorrenze** in tutto il repository.

**Nomi di aziende presenti nel codice:** solo i 6 nomi di fantasia dei case study concept (Tenuta Monteverdi, Azienda Rossi, Frantoi San Lorenzo, Podere La Vite, Tasting Flow, Wine Club Pro) + i domini fittizi associati (`tenutamonteverdi.it`, `aziendarossi.it`, `frantoisanlorenzo.it`, `poderelavite.it`, `app.tastingflow.io`, `app.wineclubpro.io`).

**Nomi di persone reali nel codice:** `lib/data.js:1240-1259` (array `team`):

| Nome | Ruolo | Foto |
|---|---|---|
| Matteo Garuzzo | Web Developer & Founder | `/images/team/matteo-garuzzo.jpg` |
| Matteo De Pilla | AI Specialist | `/images/team/matteo-de-pilla.png` |
| Alessandro Poponi | Marketing & Lead Generation | `/images/team/alessandro-poponi.jpg` |

**Nomi di clienti reali in `public/`** (solo nomi file, mai nel codice): AURORA DISTRICT, COREX, GOCLEAN, RISTORANTINO DELLA CARNE, VINT + `alessandro ristorantino della carne (1).png` in `testimonials/`.

### 10.8 Asset in `public/` non referenziati

Verifica incrociata: 111 file immagine su disco, 75 riferimenti unici nel codice (inclusi quelli costruiti dinamicamente).

**Asset orfani confermati — 24 file:**

| File | Peso | Nota |
|---|---|---|
| `images/brand/agria-logo-homepage.svg` | — | Nuovo AGRIA, non ancora agganciato |
| `images/brand/agria-logo-white-gradient.svg` | — | Nuovo AGRIA |
| `images/brand/favicon/*` (5 file + `site.webmanifest`) | — | Nuovo set AGRIA, non collegato al layout |
| `images/case-studies/ChatGPT Image 26 lug 2026, 23_27_07.png` | 2.003 KB | **Immagine generata con AI** |
| `images/case-studies/azienda-rossi-second-daaggiungere.png` | 1.854 KB | Nome "da aggiungere" |
| `images/matteo/Gemini_Generated_Image_ji4cwuji4cwuji4c_edited.png` | 3.811 KB | **Immagine generata con AI** |
| `images/matteo/foto-copertina.png` | 3.926 KB | |
| `images/matteo/foto copertina (1).png` | 3.926 KB | **Duplicato esatto** del precedente |
| `images/preview-sites/tenuta-monteverdi/bottle.png` | 3.192 KB | Cartella mai referenziata |
| `images/preview-sites/tenuta-monteverdi/cantina-interior.png` | 2.703 KB | |
| `images/preview-sites/tenuta-monteverdi/tasting-table.png` | 2.259 KB | |
| `images/software/agente-commerciale-hero.png` | 2.059 KB | Residuo pagine software rimosse |
| `images/software/assistente-clienti-hero.png` | 2.038 KB | Idem |
| `images/software/automazione-preventivi-hero.png` | 2.326 KB | Idem |
| `images/software/reputation-followup-hero.png` | 2.677 KB | Idem |
| `images/software/booking-experience-hero.jpg` | — | Corrisponde a route ora 301 |
| `images/software/control-tower-hero.jpg` | — | Idem |
| `images/software/lead-sales-hero.jpg` | — | Idem |
| `images/software/social-ai-hero.jpg` | — | Idem |
| `images/software/staff-operations-hero.jpg` | — | Idem |
| `images/team/Matteo Garuzzo - Web e Ecommerce Developer…_edited.jpg` | 2.416 KB | **Duplicato** di `matteo-garuzzo.jpg` |
| `images/team/alessandro poponi marketing specialist.jpg` | 2.720 KB | **Duplicato** di `alessandro-poponi.jpg` |
| `images/team/matteo de pilla ai specialist.png` | — | Duplicato |

**Più le 54 immagini già cancellate nel working tree** (cartelle `projects/`, `testimonials/`, `loghi/`), anch'esse mai referenziate.

### 10.9 Riepilogo conteggi legacy

| Categoria | Conteggio |
|---|---|
| Occorrenze "MG Solutions" / "MG SOLUTIONS" | **54** in 22 file |
| Occorrenze "MG-Solutions" | 15 in 4 file |
| Occorrenze "mgsolutions" | 3 in 2 file |
| Occorrenze "Matteo Garuzzo" | **12** in 6 file |
| Occorrenze "matteogaruzzo" (email/social/dominio) | **14** in 8 file |
| Occorrenze "Chi Sono" | **26** in 7 file |
| Occorrenze "chi-sono" (slug/link) | 13 in 8 file |
| Occorrenze "fuffa" | **5** |
| Occorrenze "non siamo/sono un'agenzia" | **7** |
| File con prezzi in € | **12** |
| Voci di listino | **16** |
| Metriche inventate pubblicate | **18** valori distinti |
| Testimonianze illustrative | **4** |
| Case study concept | **6** |
| Punti hardcoded `matteogaruzzo.com` | **6** |
| Asset orfani in `public/` | **24** (+54 già cancellati nel working tree) |
| Nomi di progetti legacy in `public/` | **5** cartelle |

---

## 11. Responsive e accessibilità (analisi statica)

### 11.1 Approccio responsive

- **Mobile-first** con utility Tailwind. Breakpoint di default, nessuna personalizzazione.
- Uso effettivo: `md:` **242** occorrenze, `sm:` **116**, `lg:` **50**, `xl:` e `2xl:` **mai usati**.
- Container standard: `max-w-edge mx-auto px-6` (78rem = 1248px).
- Il breakpoint di rottura principale è `md:` (768px): sotto quella soglia si passa al menu mobile (`Nav.jsx:148` `hidden md:flex`, `Nav.jsx:225` `md:hidden`).

### 11.2 Menu mobile

| Voce | Dettaglio |
|---|---|
| Presente | Sì (`components/Nav.jsx:233-298`) |
| Attivazione | Pulsante `☰ MENU` / `✕ CHIUDI` con `aria-label="Menu"` (riga 227) |
| Comportamento | Pannello a scomparsa, `max-h-[calc(100vh-4rem)] overflow-y-auto` |
| Sotto-menu | Accordion per le 4 voci con mega-menu, toggle `▾`/`▴` con `aria-label={"Espandi " + label}` (riga 251) |
| Chiusura | `onClick={() => setOpen(false)}` su ogni link |

### 11.3 Gerarchia heading

**Un solo `<h1>` per pagina su tutte le pagine verificate.** 28 file con esattamente 1 `<h1>`; le 9 pagine che non ne contengono uno direttamente lo ereditano da un template che ne ha esattamente 1 (`SectorPageTemplate`, `SoftwareSectorTemplate`, `ServiceLandingTemplate`, `ServicePageTemplate`, `MethodStepTemplate`, `RisorseContent`).

**Osservazione:** le classi `.h2` e `.h3` in `globals.css` sono puramente visuali e vengono applicate anche a `<p>` (es. `components/Footer.jsx`, `app/contatti/page.jsx:399` usa `<p className="h3">`). Non c'è un disallineamento semantico grave, ma la nomenclatura è ambigua.

### 11.4 Elementi interattivi e semantica

- **Bottoni:** uso corretto di `<button type="button">` per le azioni (cookie banner, accordion mobile, riapertura consenso). Nessun `<div onClick>` rilevato nei file esaminati.
- **Link:** uso di `next/link` ovunque.
- **Focus visibile:** **nessun override** di `outline` o `focus-visible` in `globals.css` → restano gli stili di default del browser. I mega-menu usano `group-focus-within:` (`Nav.jsx:160`), quindi sono **raggiungibili da tastiera**.
- **`prefers-reduced-motion`:** rispettato (`globals.css:139-145`).

### 11.5 Label dei form

| Form | Stato |
|---|---|
| `BookingForm` | **NON VERIFICATO in dettaglio** — gli `<input>` hanno `required`/`type`, ma non ho verificato la presenza di `<label>` associate o `aria-label` su tutti i campi |
| `Quiz/ContactForm` | Presente almeno una `<label>` wrapper per la checkbox privacy (riga 56) |
| `NewsletterFooter` | **NON VERIFICATO** — input email con `required`, label non confermata |

### 11.6 Contrasto colori (calcolato dai valori WCAG 2.1)

| Combinazione | Rapporto | AA normale (4.5:1) | AA large (3:1) |
|---|---|---|---|
| `ink` #1a1a1a su bianco | **17.4:1** | Passa | Passa |
| `forest-deep` #00713a su bianco | **6.13:1** | Passa | Passa |
| `muted` #666666 su bianco | **5.74:1** | Passa | Passa |
| `text-ink/70` (≈#5F5F5F) su bianco | **6.38:1** | Passa | Passa |
| **`forest` #008b47 su bianco** | **4.39:1** | **FALLISCE** (di poco) | Passa |
| **Bianco su `forest` #008b47** (`.btn-solid`) | **4.39:1** | **FALLISCE** — il testo bottone è `text-sm` (14px), non "large" | Passa |
| **`text-ink/55` (≈#818181) su bianco** | **3.89:1** | **FALLISCE** — usato per le descrizioni del mega-menu a **11px** (`Nav.jsx:178, 192`) | Passa |
| **`text-ink/50` (≈#8C8C8C) su bianco** | **3.36:1** | **FALLISCE** | Passa |
| **`.eyebrow` = `text-forest/70` (≈#4DAE7E) su bianco** | **2.74:1** | **FALLISCE gravemente** — usato a `text-xs` (12px) uppercase su tutto il sito | **FALLISCE** |

Il Master Plan (cap. 5) segnalava già il problema per il verde Agria `#4F8F57` (3.9:1). **Il verde attuale `#008b47` ha lo stesso identico problema** (4.39:1): serve comunque una variante scura per testo, link e bottoni. `forest-deep` #00713a (6.13:1) è già un candidato valido.

---

## 12. Performance (analisi statica)

### 12.1 Immagini pesanti

**`public/images` pesa 118 MB in 111 file.** 45 file superano i 500 KB:

| Peso | File |
|---|---|
| 4.784 KB | `images/sectors/olio-hero.png` |
| 4.737 KB | `images/sectors/hospitality-vigneto.png` |
| 3.926 KB | `images/matteo/foto-copertina.png` |
| 3.926 KB | `images/matteo/foto copertina (1).png` *(duplicato)* |
| 3.811 KB | `images/matteo/Gemini_Generated_Image_ji4cwuji4cwuji4c_edited.png` |
| 3.555 KB | `images/sectors/wine-hero.png` |
| 3.403 KB | `images/sectors/hospitality-camera.png` |
| 3.337 KB | `images/sectors/hospitality-tavola.png` |
| 3.192 KB | `images/preview-sites/tenuta-monteverdi/bottle.png` |
| 3.159 KB | `images/sectors/hospitality-arrivo.png` |
| 3.014 KB | `images/sectors/hospitality-hero.png` |
| 2.720 KB | `images/team/alessandro-poponi.jpg` |
| 2.720 KB | `images/team/alessandro poponi marketing specialist.jpg` *(duplicato)* |
| 2.708 KB | `images/hero/home-hero.png` |
| 2.703 KB | `images/preview-sites/tenuta-monteverdi/cantina-interior.png` |
| 2.677 KB | `images/software/reputation-followup-hero.png` *(orfano)* |
| 2.416 KB | `images/team/matteo-garuzzo.jpg` |
| 2.416 KB | `images/team/Matteo Garuzzo - Web e Ecommerce Developer…_edited.jpg` *(duplicato)* |
| 2.329 KB | `images/case-studies/podere-la-vite-mobile.png` |
| 2.326 KB | `images/software/automazione-preventivi-hero.png` *(orfano)* |
| 2.279 KB | `images/case-studies/podere-la-vite-desktop.png` |
| 2.259 KB | `images/preview-sites/tenuta-monteverdi/tasting-table.png` *(orfano)* |
| 2.141 KB | `images/servizi/hero-servizi-main.png` |
| 2.090 KB | `images/case-studies/tenuta-rossi-prima.png` |
| 2.059 KB | `images/software/agente-commerciale-hero.png` *(orfano)* |
| 2.054 KB | `images/case-studies/tenuta-monteverdi-desktop.png` |
| 2.038 KB | `images/software/assistente-clienti-hero.png` *(orfano)* |
| 2.035 KB | `images/case-studies/azienda-rossi-mobile.png` |
| 2.003 KB | `images/case-studies/ChatGPT Image 26 lug 2026, 23_27_07.png` *(orfano, AI)* |
| 1.994 KB | `images/case-studies/podere-la-vite-prima.png` |
| 1.980 KB | `images/case-studies/frantoi-san-lorenzo-desktop.png` |
| 1.971 KB | `images/case-studies/tenuta-monteverdi-prima.png` |
| 1.903 KB | `images/case-studies/azienda-rossi-desktop.png` |
| 1.898 KB | `images/case-studies/frantoi-san-lorenzo-prima.png` |
| 1.884 KB | `images/case-studies/frantoi-san-lorenzo-mobile.png` |
| 1.854 KB | `images/case-studies/azienda-rossi-second-daaggiungere.png` *(orfano)* |
| 1.819 KB | `images/case-studies/tenuta-monteverdi-mobile.png` |
| 1.812 KB | `images/case-studies/wine-club-pro-mobile.png` |
| 1.681 KB | `images/case-studies/wine-club-pro-desktop.png` |
| 1.645 KB | `images/case-studies/tasting-flow-desktop.png` |
| 1.640 KB | `images/case-studies/tasting-flow-mobile.png` |
| 1.307 KB | `images/servizi/brand-identity-hero.jpg` |
| 863 KB | `images/blog/formazione-team-accoglienza-cantina-vendite.jpg` |
| 620 KB | `images/servizi/seo-geo-strategy-hero.jpg` |

**Aggravante:** le immagini dei case study e degli hero di settore sono usate come `background-image` CSS inline, quindi **bypassano completamente l'ottimizzazione di `next/image`** e vengono servite alla dimensione originale. Una pagina settore può caricare 3-5 PNG da 3 MB ciascuno.

### 12.2 Librerie pesanti lato client

**Nessuna.** Il bundle client non include librerie di terze parti significative: niente Framer Motion, niente librerie di grafici, niente UI kit. Le icone sono SVG inline, le animazioni sono CSS.

Unico script esterno: **widget Calendly** (`assets.calendly.com`), caricato con `strategy="lazyOnload"` e **solo dopo consenso**.

### 12.3 Uso di `"use client"`

**23 file su 77 `.jsx`** (30%).

**Nessuna delle 31 pagine in `app/` è un client component:** tutte le `page.jsx` sono Server Component. L'interattività è isolata in componenti foglia — architettura corretta per l'App Router.

I client component sono: `BookingForm`, `CalendlyEmbed`, `CookieConsentBanner`, `CountUp`, `FAQAccordion`, `Footer`, `HospitalityExperience`, `Nav`, `NewsletterFooter`, `PortfolioGrid`, `Quiz/ContactForm`, `Quiz/Question`, `Quiz/QuizFlow`, `QuizFloatingButton`, `QuizPopup`, `ReopenConsentButton`, `Reveal`, `RisorseContent`, `StatNumber`, `TestimonialCarousel`, `blog/CategoryFilter`, `blog/ProgressBar`, `blog/ShareArticle`.

**Osservazione:** `Nav` (301 righe) e `Footer` sono client component presenti su **ogni** pagina. `Footer` è client solo per il pulsante "Preferenze cookie" (`reopenConsentBanner`): potrebbe essere ridotto a Server Component estraendo quel pulsante (esiste già `ReopenConsentButton`, non usato nel footer).

### 12.4 Altre osservazioni

- `app/proposta/[id]` è `force-dynamic`: ogni richiesta interroga il database. Corretto per il caso d'uso.
- Il `build` dipende da `prisma generate`: senza `DATABASE_URL` valida il deploy può fallire. I moduli `lib/db.js` e `lib/supabase.js` hanno guardie esplicite proprio per evitare che una env var mancante faccia fallire il build (commenti alle righe 6-10 di entrambi).
- 71 pagine tag generate staticamente: costo di build non trascurabile per pagine a basso valore.

---

## 13. Rischi rilevati (ordinati per gravità)

### CRITICI

**R1 — Immagini referenziate mancanti nel working tree**
3 immagini usate dal codice (`mg-logo-mark.png`, `og-image.png`, `matteo-hero-nobg.png`) sono state cancellate ma sono ancora referenziate in `Nav.jsx:139`, `layout.jsx:41,47,62`, `lib/seo.js:11`. Se queste cancellazioni venissero committate così come sono, andrebbero in produzione: logo header rotto su tutte le pagine e anteprima social rotta su tutte le condivisioni. **Da risolvere prima di qualunque commit.**

**R2 — Conflitto frontale tra prezzi pubblici e regole Agria**
16 voci di listino in `lib/pricing-data.js`, 12 file che mostrano prezzi, formula "Prezzi pubblicati" ripetuta 14 volte. Il Master Plan vieta qualunque prezzo pubblico, anche "a partire da". Non è una rimozione cosmetica: i blocchi `investment` sono parte strutturale del template dei 7 servizi (`ServiceLandingTemplate`, `PricingBlock`) e vanno riprogettati, non solo svuotati.

**R3 — Metriche inventate diffuse su tutto il sito**
18 valori numerici di fantasia (+40%, +200%, 85%, €450 LTV, "Top 5% su Booking.com", "contro una media di settore più vicina al 60%") non restano confinati nel portfolio: sono ripresi in homepage (`referenceNumbers`), nelle 3 pagine settore (`statNumbers`) e in `/servizi`. Il sito li dichiara onestamente come illustrativi, ma la regola Agria è "nessun KPI inventato" — vanno rimossi, non solo meglio etichettati. Rimuoverli svuota diverse sezioni che andranno riprogettate.

### ALTI

**R4 — Nessuna infrastruttura multilingua**
IT+EN al lancio richiede di costruire da zero: routing per locale, dizionari, `lang` dinamico, hreflang, `locale` OG, sitemap multilingua. Oggi `lang="it"`, `it_IT` e `it-IT` sono hardcoded in 4 punti. È il singolo lavoro tecnico più grosso della Fase 1.

**R5 — Il form contatti principale non raccoglie consenso privacy**
`BookingForm` (presente in 4 punti del sito, inclusa la homepage) raccoglie nome, email, telefono e messaggio e li trasmette via WhatsApp **senza alcuna checkbox di consenso**. Anche `NewsletterFooter` salva email su Supabase senza consenso esplicito. Il quiz invece è a posto (checkbox required + honeypot). Da sanare a prescindere dal rebranding.

**R6 — `/proposta/[id]` espone dati personali senza autenticazione**
La pagina legge il lead dal database e mostra nome, azienda e risposte a chiunque possieda l'URL. Protetta solo da `noindex` e dall'imprevedibilità del CUID. Nessun token di accesso, nessuna scadenza.

**R7 — Dominio hardcoded in 6 punti**
`matteogaruzzo.com` non è parametrizzato. La migrazione ad `agriasystem.com` tocca `layout.jsx` (×3), `lib/seo.js`, `app/sitemap.js`, `public/robots.txt`. Facile da sbagliare parzialmente, lasciando canonical o sitemap che puntano al vecchio dominio.

**R8 — Nessun dato storico di Google Analytics**
Non esiste alcun analytics installato: nessuno storico di traffico, conversioni o comportamento. L'unica baseline pre-migrazione disponibile è Search Console. Il punto 6 del "Momento 1" del Master Plan (verifica storico GA) si chiude con "non disponibile".

**R9 — 118 MB di immagini, in gran parte non ottimizzate**
45 file oltre 500 KB, picchi di 4,7 MB. Le immagini più pesanti (hero di settore, case study) sono servite come `background-image` CSS, quindi **fuori dall'ottimizzazione `next/image`**. Impatto diretto su Core Web Vitals e quindi sul posizionamento.

### MEDI

**R10 — Contrasto insufficiente su elementi ricorrenti**
`.eyebrow` (2.74:1) è usato come etichetta di sezione su tutto il sito a 12px. `text-ink/55` (3.89:1) è usato a 11px nei mega-menu. I bottoni `.btn-solid` (4.39:1) mancano l'AA per poco. Non è un problema del solo verde: è sistemico e va risolto nel design system del passo 6.

**R11 — 71 pagine tag a rischio thin content**
Generate automaticamente, molte con 1-2 articoli. Presenti duplicati concettuali ("Freelance"/"Freelancer", "SEO"/"Local SEO"/"Local Search", "CRM"/"CRM Agroalimentare"). Tutte in sitemap con priority 0.3. Da valutare una a una nella migration map.

**R12 — 17 pagine GEO indicizzate ma fuori dalla navigazione**
`/geo` e le 16 regioni sono in sitemap ma non compaiono né in Nav né in footer: unico link interno da `blog/SidebarPromo.jsx`. Struttura SEO orfana, da decidere se recuperare o ritirare con 301.

**R13 — Nessuna pipeline CI e nessun `vercel.json`**
Nessun controllo automatico su lint, build o test prima del deploy. Ogni push su `main` va direttamente in produzione. La configurazione del progetto Vercel vive solo nel dashboard, non nel repository.

**R14 — 24 asset orfani + duplicati esatti in `public/`**
Include 2 immagini generate con AI (`Gemini_Generated_Image_*.png`, `ChatGPT Image 26 lug 2026*.png`) — il Master Plan vieta le immagini AI per clienti, progetti e team. E 3 coppie di duplicati esatti (foto copertina, alessandro-poponi, matteo-garuzzo).

**R15 — `next.config.js` permette immagini remote da qualunque host**
`remotePatterns: [{ protocol: 'https', hostname: '**' }]` consente di usare il servizio di ottimizzazione immagini del sito come proxy per qualunque URL HTTPS esterno. Da restringere agli host effettivamente necessari.

### BASSI

**R16 — Incoerenze di contenuto già presenti**
"il nostro metodo in 7 step" (`lib/data.js:4755`) contro 4 step reali. "Portfolio · Progetti realizzati" (`portfolio/page.jsx:42`) contro il disclaimer "non clienti reali" dieci righe sotto. "Non pubblichiamo un listino" (FAQ) contro "Prezzi pubblicati" (pagine servizio).

**R17 — Doppia persistenza Prisma + Supabase**
Due database in parallelo per lo stesso flusso lead. Aumenta superficie di manutenzione e punti di fallimento. Le variabili Supabase non sono neppure documentate in `.env.example`.

**R18 — `lastModified: new Date()` in sitemap**
Quasi tutte le URL dichiarano "modificata adesso" a ogni build: il segnale è inutile per i crawler.

**R19 — `lib/data.js` da 4.957 righe**
Un unico file contiene contenuti di natura completamente diversa (servizi, case study, 32 articoli di blog, FAQ, testimonianze). Difficile da mantenere e da tradurre in due lingue.

**R20 — Mancano 4 regioni nelle pagine GEO**
Presenti 16 regioni su 20: assenti Marche, Abruzzo, Puglia, Calabria. Non verificato se sia intenzionale.

---

## 14. Domande aperte

1. **Le 54 immagini cancellate e i 9 asset AGRIA non tracciati:** vuoi che restino così (lavoro in corso), che li committiamo, o che li ripristiniamo? Prima di committare vanno comunque risolti i 3 riferimenti rotti del rischio R1.

2. **La modifica a `.gitignore` (`+.env*`) l'ho causata io con `vercel link`:** la tengo o la annullo?

3. **Storico Google Analytics:** confermi che non è mai stato installato alcun analytics su questo sito? Se esistesse una proprietà GA4 configurata solo lato Google (senza tag nel codice), non avrebbe comunque raccolto dati. In tal caso l'unica baseline è Search Console.

4. **Le 17 pagine GEO** (`/geo` + 16 regioni) sono fuori dalla navigazione ma in sitemap. Hanno prodotto traffico? I dati di Search Console che mi hai fornito serviranno a deciderlo nel passo 3, ma voglio sapere se erano un esperimento abbandonato o una scelta.

5. **Le 71 pagine tag del blog:** erano intenzionali o un effetto collaterale della struttura dati? Incidono sulla migration map.

6. **I 32 articoli del blog:** il Master Plan dice che Insights esce dal menu al lancio ma che "infrastruttura e pagine SEO utili" vanno preservate. Gli articoli attuali sono scritti in prima persona plurale e citano prezzi/servizi legacy: vanno migrati, riscritti o archiviati con 301?

7. **`/servizi/wine-club`:** è una landing SEO dedicata con OG image propria, fuori dalla navigazione. Rientra come capability di Digital Commerce, resta come landing, o si redirige?

8. **Le 3 pagine `/software/*` e la sezione Software:** il Master Plan esclude CRM/ERP/gestionali custom. Queste URL vanno redirette verso Digital Automation, o mantenute come landing SEO?

9. **I 6 case study concept:** vanno tutti rimossi (nessuno è un cliente reale) o qualcuno resta come "concept" dichiarato? Il Master Plan dice che il portfolio riparte dai "case study oggi pubblici, da confermare uno per uno" — ma qui tutti e 6 sono dichiaratamente fittizi. Va chiarito se la base di partenza sia quindi **zero**.

10. **Team:** l'array `team` contiene 3 persone reali con foto. Alessandro Poponi e Matteo De Pilla restano nella pagina Azienda di Agria? Le foto attuali sono utilizzabili o si attende lo shooting?

11. **P.IVA e dati legali:** `IT04006460549` e l'indirizzo di Perugia restano invariati nel footer Agria, riformulati come "marchio di"? Confermi la formula esatta con il commercialista?

12. **Calendly:** il Master Plan dice "nessun calendario pubblico" e CTA verso un form di qualificazione. Confermi che `/prenota-call` e il widget Calendly vanno eliminati, e che `BookingForm` va sostituito dal nuovo form?

13. **Newsletter e quiz:** il quiz (`/quiz`, `/proposta/[id]`, motore regole, Prisma, Supabase, Resend) è un'infrastruttura consistente. Sopravvive in Agria, viene sostituita dal form di qualificazione del Master Plan, o convivono?

14. **Provider privacy/cookie:** oggi è una soluzione custom in localStorage, senza provider esterno. Il Master Plan chiede di verificarlo prima di cambiarlo: verificato, è interno. Confermi che si può estendere (Consent Mode v2 per GA4) invece di sostituirlo?

15. **Dominio:** `agriasystem.com` è già stato acquistato? La checklist pre-lancio lo elenca come dipendenza esterna aperta.

---

*Fine report. Nessun file esistente è stato modificato durante questo audit. Unico file creato: `docs/agria/01-audit-report.md`.*
