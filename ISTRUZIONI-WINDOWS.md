# 🪟 Istruzioni per Windows — leggi solo questo

Segui i passi in ordine. Ogni comando: **copia, incolla nel terminale, premi Invio.**

---

## Passo 1 — Apri il progetto in VS Code

1. Hai scaricato il file `mg-solutions.zip` → **estrailo** (tasto destro → "Estrai tutto").
2. Apri **VS Code**.
3. `File` → `Apri cartella…` → scegli la cartella **mg-solutions** appena estratta.

---

## Passo 2 — Apri il terminale dentro VS Code

In VS Code, menu in alto: `Terminale` → `Nuovo terminale`.
Si apre una riga di comando in basso. È lì che incolli i comandi.

---

## Passo 3 — Installa e avvia (i primi 2 comandi)

Incolla questo e premi Invio (la prima volta ci mette 1-2 minuti):

```
npm install
```

Quando finisce, incolla questo:

```
npm run dev
```

Vedrai una riga tipo `Local: http://localhost:3000`.

👉 Apri il browser e vai su **http://localhost:3000**

**Vedi il sito? Perfetto, funziona.** 🎉
(Per fermarlo: clicca nel terminale e premi `Ctrl + C`.)

---

## Passo 4 — Personalizza le tue cose (2 minuti)

Apri il file **`lib/data.js`** in VS Code. In cima trovi i tuoi dati:

- `email`, `phone`, `location` → i tuoi contatti
- `calendly` → **importante**: metti qui il tuo link Calendly vero
  (crealo gratis su calendly.com, poi copia il link tipo
  `https://calendly.com/tuonome/call`)

Salva (`Ctrl + S`). Il sito nel browser si aggiorna da solo.

Tutto il resto (servizi, prezzi software, settori, articoli blog) è sempre lì
dentro `lib/data.js`: cambi il testo, salvi, fatto.

---

## Passo 5 — Metti il sito online (GitHub + Vercel)

### 5a. Carica su GitHub

Nel terminale, uno alla volta (sostituisci `TUO-USERNAME` col tuo username GitHub):

```
git init
git add .
git commit -m "Sito MG Solutions"
git branch -M main
```

Ora vai su **github.com** → in alto a destra `+` → `New repository`
→ nome: `mg-solutions` → **Create repository** (non aggiungere README).

GitHub ti mostra una riga con l'URL. Torna nel terminale e incolla:

```
git remote add origin https://github.com/TUO-USERNAME/mg-solutions.git
git push -u origin main
```

(Se chiede login, usa il tuo account GitHub.)

### 5b. Deploy su Vercel

1. Vai su **vercel.com** → `Add New…` → `Project`.
2. Trovi `mg-solutions` nella lista → **Import**.
3. Non toccare niente → **Deploy**.
4. Aspetta ~2 minuti.

**Il sito è ONLINE.** Vercel ti dà un link tipo `mg-solutions.vercel.app`.

Da ora, ogni volta che vuoi aggiornare il sito:

```
git add .
git commit -m "aggiornamento"
git push
```

Vercel rimette online la nuova versione da solo.

---

## Passo 6 (facoltativo) — Usare matteogaruzzo.com

Su Vercel: apri il progetto → `Settings` → `Domains` → aggiungi
`matteogaruzzo.com`. Vercel ti dice quali record DNS mettere; li aggiungi
dove hai comprato il dominio. In 24-48h il sito risponde sul tuo dominio.

---

## 🆘 Se qualcosa non va

Copiami **il testo esatto dell'errore** e dimmi a che passo sei.
Errori comuni:

- `npm non riconosciuto` → Node non installato bene, reinstalla da nodejs.org (versione LTS) e riavvia VS Code.
- `git non riconosciuto` → installa Git da git-scm.com, poi riavvia VS Code.
- Pagina bianca su localhost → guarda il terminale, di solito dice qual è il file con l'errore.

---

## ⏭️ Fase 2 (quando vuoi, con me)

Queste cose servono infrastruttura extra, le aggiungiamo dopo:
- **Pagamenti veri** per i software/contenuti (Stripe + account utenti)
- **Blog gestito da pannello** (invece che dentro `data.js`)
- **Form che manda email reali** dalla waitlist e dai contatti

Per ora il sito è completo, professionale e online. Le vendite le chiudi tu in call.
