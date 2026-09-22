# AGRIA — Prompt 02: Baseline tecnica del branch `agria/redesign`

**Data:** 2026-09-22
**Repository:** `matteogaruzzo/mgsolutions` — working directory `C:\dev\agriasystem`
**Branch:** `agria/redesign`

---

## 1. Stato Git

### Iniziale

```
Branch corrente: agria/redesign
Allineamento: up to date with 'origin/agria/redesign'
Working tree: pulito (nothing to commit)
```

Ultimi 5 commit:

```
4d8b9fd chore(agria): logo AGRIA e report di audit
51c4b7f chore: esclude i file .env da Git
66fe61f fix: riordina i servizi nel mega-menu Cosa Facciamo
65c4d4c fix: risolto overflow del mega-menu Cosa Facciamo su desktop
415c1f2 feat: aggiunta pagina servizio Brand Identity
```

### Anomalia durante la sessione

Durante la verifica degli asset, subito dopo il ripristino di `mg-logo-mark.png`, il working tree ha mostrato 53 ulteriori file immagine "cancellati" non presenti pochi minuti prima. Indagine svolta: nessun processo di sync cloud attivo su `C:\dev` (non è sotto OneDrive), nessun processo Dropbox/Google Drive/backup in esecuzione, nessun reparse point sulla cartella. L'utente ha confermato di aver cancellato personalmente, in parallelo a questa sessione, materiale non più necessario nella cartella `public/images/`. Cinque di questi file risultavano però ancora referenziati dal codice (vedi §2) e sono stati ripristinati; i restanti 53 sono stati confermati come asset orfani e gestiti in un commit dedicato (vedi §5).

### Finale

Working tree pulito dopo i 3 commit e il push (vedi §5 per l'elenco commit).

---

## 2. Asset ripristinati

Verifica: tutti i percorsi immagine referenziati staticamente nel codice (74 percorsi) + i pattern dinamici (`` `/images/blog/${r.slug}.jpg` ``, `` `/images/case-studies/${slug}-desktop.png` ``, `` `/images/case-studies/${slug}-mobile.png` `` per i 6 case study) sono stati verificati contro il filesystem.

| Asset | Causa mancanza | Referenziato in |
|---|---|---|
| `public/images/brand/mg-logo-mark.png` | Eliminato dal commit `4d8b9fd` | `components/Nav.jsx` (logo header), `app/layout.jsx` (JSON-LD Organization) |
| `public/favicon.png` | Cancellazione manuale utente (in sessione) | `app/layout.jsx` (`<link rel="icon">`) |
| `public/apple-touch-icon.png` | Cancellazione manuale utente (in sessione) | `app/layout.jsx` (`<link rel="apple-touch-icon">`) |
| `public/images/matteo/matteo-hero-nobg.png` | Cancellazione manuale utente (in sessione) | `app/page.jsx` (hero homepage) |
| `public/images/matteo/og-image.png` | Cancellazione manuale utente (in sessione) | `lib/seo.js` (`OG_IMAGE`), `app/layout.jsx` |
| `public/images/team/matteo-garuzzo.jpg` | Cancellazione manuale utente (in sessione) | `app/blog/[slug]/page.jsx`, `app/chi-sono/page.jsx`, `components/blog/AuthorBox.jsx`, `lib/data.js` |

Tutti ripristinati con `git checkout main -- <percorso>`. Dopo il ripristino, verifica completa: **nessun asset referenziato risulta mancante su disco**.

Verificato anche via `npm run dev` (porta 3001, la 3000 era occupata da un altro processo): homepage `200 OK`, title corretto, `mg-logo-mark.png`, `matteo-hero-nobg.png` e `favicon.png` tutti serviti con `200`.

---

## 3. Asset legacy orfani rimossi (fuori scope di ripristino)

52 file cancellati manualmente dall'utente, verificati come **non referenziati da nessun file di codice** (`grep` su `app/`, `components/`, `lib/`, `scripts/`):

| Cartella | File | Note |
|---|---|---|
| `public/images/loghi/` | 9 | Loghi tecnologie (Shopify, WordPress, React, Next.js, Vercel, Angular, MySQL, PostgreSQL, Claude) |
| `public/images/matteo/` | 3 | Foto personali non referenziate (diverse da `og-image.png` e `matteo-hero-nobg.png`, ripristinate) |
| `public/images/og-image-default.png` | 1 | Non referenziato |
| `public/images/projects/AURORA DISTRICT/` | 9 | Progetto legacy non agroalimentare |
| `public/images/projects/COREX/` | 6 | Progetto legacy CRM enterprise |
| `public/images/projects/GOCLEAN/` | 8 | Progetto legacy app mobile |
| `public/images/projects/RISTORANTINO DELLA CARNE/` | 2 | Progetto legacy ristorazione |
| `public/images/projects/VINT/` | 6 | Progetto legacy e-commerce |
| `public/images/team/` (foto edited) | 1 | Diversa da `matteo-garuzzo.jpg`, non referenziata |
| `public/images/testimonials/` | 7 | Badge partner + foto testimonianze |
| **Totale** | **52** | |

Nota: `public/favicon.ico` era stato cancellato insieme agli altri ma è stato **ripristinato da `main`** su richiesta dell'utente, poiché i browser lo richiedono automaticamente a `/favicon.ico` come fallback anche se nessun file di codice lo referenzia esplicitamente.

Questo elenco coincide in larga parte con il "Gruppo B" già segnalato (in sola lettura) dall'audit `01-audit-report.md` §1.2 come asset orfani sul vecchio PC. La rimozione era originariamente pianificata per una fase dedicata; l'utente ha confermato la cancellazione intenzionale durante questa sessione e ha richiesto di committarla separatamente (vedi §5, Commit 3) per non perdere il lavoro già fatto.

---

## 4. Variabili d'ambiente

Fonte: `vercel env ls` (solo nomi ed ambienti, nessun valore letto o riportato).

| Variabile | Ambienti (Vercel) | Usata nel codice | Documentata in `.env.example` (prima) | Documentata in `.env.example` (dopo) |
|---|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Production, Preview | Sì (`lib/supabase.js`) | No | **Sì** |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production, Preview | Sì (`lib/supabase.js`) | No | **Sì** |
| `SUPABASE_SERVICE_ROLE_KEY` | Production, Preview | Sì (`lib/supabase.js`) | No | **Sì** |
| `DATABASE_URL` | Production, Preview | Sì (`lib/db.js`, `prisma/schema.prisma`) | Sì | Sì |
| `RESEND_API_KEY` | Production, Preview | Sì (`lib/quiz/email.js`) | Sì | Sì |
| `RESEND_FROM_EMAIL` | Production, Preview | Sì (`lib/quiz/email.js`) | Sì | Sì |
| `TEAM_NOTIFICATION_EMAIL` | Production, Preview | Sì (`lib/quiz/email.js`) | Sì | Sì |
| `DIRECT_URL` | **Assente su Vercel** | Sì (`prisma/schema.prisma`, richiesta da `prisma migrate`/`db push`) | Sì | Sì |

**Anomalia:** `DIRECT_URL` è dichiarata in `.env.example` e usata dallo schema Prisma, ma **non risulta configurata su Vercel** (nessun ambiente). Non blocca `npm run build` (lo script `build` esegue solo `prisma generate`, non `migrate`/`db push`), ma andrebbe verificato se serva per operazioni di migrazione contro il database di produzione.

**Nota:** nessuna variabile risulta configurata per l'ambiente **Development** su Vercel; lo sviluppo locale dipende da `.env.local` (presente su disco, ignorato da Git, non letto da questa sessione).

---

## 5. Lint e build

### `npm run lint`

**Bloccato**: `next lint` richiede una configurazione ESLint interattiva (Strict/Base/Cancel) perché **nessun file `.eslintrc*` esiste nel repository**, né su `agria/redesign` né su `main`. Non è una regressione introdotta in questa sessione: l'audit (`01-audit-report.md` §1.5) segnalava già l'assenza di configurazione ESLint dedicata. Non ho creato alcun file di configurazione (fuori scope, richiederebbe una decisione su quale preset adottare).

### `npm run build`

**Esito: successo, nessun errore.**

```
✓ Compiled successfully
✓ Generating static pages (168/168)
```

Un solo warning, preesistente e non bloccante:

```
⚠ Using edge runtime on a page currently disables static generation for that page
```

(riferito a una route con `export const runtime = 'edge'`, non modificata in questa sessione).

---

## 6. `git diff main --stat`

Al momento della stesura di questo report (prima dei commit 1–3, working tree con le modifiche descritte sopra):

```
66 files changed, 1434 insertions(+)
```

File coinvolti, per gruppo:
- `.env.example` — variabili Supabase aggiunte
- `.gitignore` — già committato (`51c4b7f`)
- `docs/agria/01-audit-report.md`, `docs/agria/02-baseline-report.md` — documentazione
- `public/images/brand/` — logo AGRIA, favicon AGRIA, `mg-logo-mark.png` ripristinato
- `public/images/loghi/`, `public/images/matteo/` (parziale), `public/images/og-image-default.png`, `public/images/projects/`, `public/images/team/` (parziale), `public/images/testimonials/` — rimozione asset orfani (§3)

Corrisponde ai criteri di validazione del prompt, con l'estensione concordata con l'utente per la rimozione degli asset orfani.

---

## 7. Rischi e anomalie

1. **File esterni al controllo di git modificati durante la sessione**: l'utente ha cancellato manualmente 58 file nella cartella `public/images/` mentre la verifica era in corso. 5 di questi erano referenziati dal codice ed è stato necessario un ripristino aggiuntivo non previsto inizialmente dal prompt (limitato a `mg-logo-mark.png`). Raccomandazione: evitare modifiche manuali concorrenti alla working directory durante sessioni di verifica automatizzata, per non invalidare i controlli di integrità.
2. **Nessuna configurazione ESLint versionata**: `npm run lint` non è eseguibile senza un setup interattivo one-time. Da decidere in una fase dedicata quale preset adottare (Strict è quello raccomandato da Next.js) e se versionarlo.
3. **`DIRECT_URL` assente su Vercel** ma dichiarata come richiesta da Prisma: verificare se sia un problema reale (es. se `prisma migrate deploy` viene eseguito manualmente o da CI esterna) o se il pooler Supabase renda la connessione diretta superflua in produzione.
4. **`public/favicon.ico`** non è referenziato esplicitamente in nessun file di codice, ma è stato mantenuto/ripristinato da `main` perché i browser lo richiedono per convenzione come fallback a `/favicon.ico`.
5. **Warning edge runtime** in build: preesistente, non bloccante, non indagato oltre (fuori scope).
