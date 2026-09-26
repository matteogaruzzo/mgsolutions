# AGRIA — Prompt 13: Pagine servizio definitive

**Data:** 2026-09-25
**Branch:** `agria/redesign`
**Modello:** concept v6 (descritta nel prompt); stile di riferimento elevenlabs.io e openai.com.
**Natura del lavoro:** rifacimento completo delle quattro pagine servizio: template comune per `/servizi/digital-presence`, `/servizi/digital-commerce` e `/servizi/digital-automation`, struttura propria per l'indice `/servizi`, set di icone SVG. Nessuna pagina settore, azienda o contatti; nessun redirect né rimozione di pagine legacy; nessuna pagina `/en`; `main` non è stato toccato.

---

## 1. Commit

| Commit | Contenuto |
|---|---|
| `0572325 feat(agria): template e set di icone delle pagine servizio` | Set di icone, template `ServiceAreaPage` e sezioni, `PageHero` con seconda CTA, demo delle icone in `/design-system` |
| `a54b672 feat(agria): pagine Digital Presence, Commerce e Automation` | Le tre pagine sul nuovo template, copy in `content/agria/servizi-aree.js`; rimosso il template del Prompt 12 (`ServicePage`) |
| `e2f4b72 feat(agria): indice dei servizi` | Indice `/servizi` con blocchi alternati, selettore "Da dove si parte", quattro passi e CTA finale; rimosso `AreaCards` (Prompt 12) |

Nota: il messaggio del primo commit indica 45 icone; il set ne contiene **47** (§3).

---

## 2. Template delle pagine area — `components/agria/service/ServiceAreaPage.jsx`

Una pagina area è `<ServiceAreaPage area={serviceAreas.presence} others={…} sectorLabels={SECTOR_LABELS} />`: il template non contiene testi, tutto il copy è in `content/agria/servizi-aree.js`.

| # | Sezione | Componente | Fondo | Interazione |
|---|---|---|---|---|
| 1 | Hero | `PageHero` | scuro, scena dei filari ridotta | Etichetta, h1, sottotitolo, CTA di pagina + "Vedi il metodo" (→ `#metodo`), pill |
| 2 | Diagnosi | `Diagnosis` | bianco | Tre card (icona, problema, conseguenza) in `HoverGroup`; CTA secondaria |
| 3 | Cosa costruiamo | `BuildSelector` | off-white | Schede verticali (WAI-ARIA Tabs, attivazione automatica): cursore, focus, frecce ↑↓ e tocco cambiano l'anteprima (schema di interfaccia con fotografia e tre riquadri) |
| 4 | AI | `AiSection` | bianco, "AI" in filigrana | Quattro card su fondo scuro in `HoverGroup`; CTA centrale |
| 5 | Metodo | `MethodTimeline` | scuro, ancora `#metodo` | Linea temporale a quattro passi: cursore, focus o tocco aprono la descrizione (il primo è aperto) |
| 6 | Deliverable | `Deliverables` | bianco | Sei righe (numero, descrizione, categoria) con evidenziazione al passaggio |
| 7 | Verticali | `Verticals` | off-white | Tre schede (Hospitality, Cantine, Frantoi), griglia di quattro voci con icona |
| 8 | Fotografia e mercati | `MarketsPhoto` | bianco | Testo e CTA; fotografia con angoli arrotondati e ingrandimento al passaggio (`ZoomImage`) |
| 9 | FAQ | `FaqAccordion` | off-white | Sei domande a fisarmonica (pulsante con `aria-expanded`), CTA a fianco |
| 10 | CTA finale | `FinalCta` | scuro | Due CTA; sotto, i rimandi interni (§6) |
| — | CTA fissa | `StickyCta` | — | In basso a sinistra, testo diverso per pagina; compare dopo 160 px di scorrimento, sparisce quando entra la CTA finale; nascosta non è focalizzabile |

- **Senza JavaScript:** elenchi di schede nascosti, tutti i pannelli visibili uno sotto l'altro (con il proprio titolo), tutte le risposte delle FAQ aperte, tutte le descrizioni del metodo aperte; la CTA fissa non compare.
- **`prefers-reduced-motion`:** nessuna transizione né animazione (cambi di scheda, linea temporale, CTA fissa, ingrandimento delle foto, scena).
- **Stili:** `components/agria/service/ServiceArea.module.css`, un solo file per tutte le sezioni.
- **Titoli che il copy non fornisce:** sezione FAQ intitolata "FAQ"; gruppi di rimandi "Servizi", "Approfondimenti" e link "Tutti i servizi" (già in uso nella navigazione). "Scrivici in due righe" porta a `/contatti`.

---

## 3. Set di icone — `components/agria/icons/Icon.jsx`

**47 icone** SVG, 20×20, tratto 1,5 px, `currentColor`, terminali e giunzioni arrotondati, definite una sola volta in un registro e usate con `<Icon name="…" />`. Decorative (`aria-hidden`): il significato sta nel testo accanto. Nel contesto delle card sono dentro `IconBadge` (riquadro 40×40, versione chiara e scura). Demo con tutti i nomi in `/design-system`.

`search, funnel, chart, target, gauge, map-pin, globe, phone, mail, chat, inbox, bell, users, user-plus, user-check, file-text, copy, pen, list, sort, layers, grid, layout, code, link, repeat, zap, sparkles, download, key, shield, badge-check, calendar, clock, cart, credit-card, coins, tag, ticket, package, truck, arrow-in, sprout, plus, minus, arrow-right, check`

37 sono usate nei contenuti (diagnosi, AI, verticali, voci di "Cosa costruiamo"); `plus`, `minus` e `arrow-right` servono all'interfaccia (FAQ, selettore, CTA fissa). Nessuna emoji nel codice delle pagine (verificato sul testo renderizzato di tutte e quattro).

---

## 4. Indice `/servizi`

| # | Sezione | Componente | Fondo |
|---|---|---|---|
| 1 | Hero: `Servizi` · **Tre aree, un solo sistema.** · sottotitolo · `Parliamo del progetto` | `PageHero` | scuro |
| 2 | Digital Presence: testo a sinistra, foto a destra | `AreaBlocks` | bianco |
| 3 | Digital Commerce: foto a sinistra, testo a destra | `AreaBlocks` | off-white |
| 4 | Digital Automation: testo a sinistra, foto a destra | `AreaBlocks` | bianco |
| 5 | Da dove si parte | `GoalSelector` | off-white |
| 6 | Come lavoriamo: Analisi, Progetto, Sviluppo, Misura | `IndexSteps` | bianco |
| 7 | CTA finale | `FinalCta` | scuro |

- **Blocchi** (decisione del committente): etichetta, h1 (qui h2) e sottotitolo della pagina area; come tre voci, le prime tre di "Cosa costruiamo" di ciascuna area con la loro icona; link `Approfondisci`.
- **Da dove si parte:** tre pill di obiettivo (WAI-ARIA Tabs); a ogni scelta compaiono etichetta e nome dell'area, la riga di motivazione fornita dal committente e `Approfondisci`. Senza JavaScript le tre risposte sono visibili, ognuna con il proprio obiettivo come titolo.
- **Come lavoriamo:** etichetta e titolo della sezione metodo della homepage, quattro passi con i testi forniti dal committente.
- **CTA finale:** titolo, testo e CTA della CTA finale della homepage.

---

## 5. Sequenza dei fondi e fotografie

| Pagina | Sequenza | Fotografie |
|---|---|---|
| Digital Presence, Commerce, Automation | scuro · bianco · off-white · bianco · scuro · bianco · off-white · bianco · off-white · scuro | sezioni 3 (anteprima) e 8 |
| `/servizi` | scuro · bianco · off-white · bianco · off-white · bianco · scuro | sezioni 2, 3 e 4 |

Mai più di due sezioni consecutive con lo stesso fondo. Il template del prompt prevede una sola sezione fotografica (8): per rispettare "una fotografia reale ogni tre o quattro sezioni" l'anteprima di "Cosa costruiamo" (3) include una fotografia per voce.

---

## 6. Immagini usate e mancanti

**Mancano le tre foto dedicate.** In `public/images/agria/servizi/` non c'è nulla. È presente `public/images/servizi/presence.jpg` (4000×2250, 1.422 KB), fuori dalla cartella indicata: sembra un render 3D di un atrio aziendale con luce artificiale, non una fotografia di accoglienza. **Non usata**, come deciso dal committente, che la sostituirà. `commerce.jpg` e `automation.jpg` non esistono.

**Foto temporanee in uso** (tutte già nel repository e accreditate in `/crediti-immagini`, tranne `hospitality.jpg`, fonte da indicare):

| Uso | File | `alt` |
|---|---|---|
| Presence · fotografia e mercati; indice blocco 1; anteprime "Struttura ricettiva" e "Prenotazioni ed esperienze" | `agria/settori/hospitality.jpg` | Camera con letto matrimoniale e lampade accese sui comodini |
| Commerce · fotografia e mercati; indice blocco 2; anteprime "Cantina" e "Listini professionali" | `software/sector-vitivinicolo-hero.jpg` | Botti di legno allineate in una cantina con volta in mattoni |
| Automation · fotografia e mercati; indice blocco 3; anteprime "Frantoio" e "E-commerce di prodotto" | `software/sector-frantoi-hero.jpg` | Olio appena estratto che scende da un beccuccio d'acciaio |
| Anteprima "Presenza internazionale" | `servizi/seo-geo-strategy-hero.jpg` | Strada bianca tra cipressi e vigneti al tramonto |
| Anteprima "Riacquisto e fidelizzazione" | `blog/ecommerce-vino-margini-vendita-diretta.jpg` | Scatole di cartone aperte, pronte per la spedizione |
| Anteprime "Richieste in un unico flusso", "Dati sincronizzati" | `blog/pos-cassa-cantina-vendita-degustazione.jpg` | Mani su una cassa con schermo tattile e uno scontrino |
| Anteprime "Documenti trattati in automatico", "Report ricorrenti" | `blog/bandi-incentivi-digitalizzazione-agroalimentare.jpg` | Persona che legge documenti stampati a una scrivania |

Scartate: `blog/software-per-cantine.jpg` (mostra percentuali e metriche su una dashboard), `blog/gestione-fiscale-ecommerce-vino-iva-fatturazione.jpg` (logo di un marchio), `blog/software-per-agriturismi.jpg` come anteprima (nome della struttura leggibile).

Tutte le foto passano da `next/image` con `sizes` coerenti e caricamento differito (nessuna è nella prima schermata).

---

## 7. Articoli collegati

| Pagina | Articoli (nei rimandi sotto la CTA finale) |
|---|---|
| Digital Presence | `siti-web-per-agriturismi`, `seo-locale-agroalimentare-google-maps` |
| Digital Commerce | `ecommerce-per-frantoi`, `agriturismo-booking-online-prenotazioni` |
| Digital Automation | `software-per-agriturismi`, `chatbot-cantina-ai-customer-service` |

Ogni pagina area rimanda anche alle altre due aree e all'indice ("Tutti i servizi"). Scelte e motivazioni come nel report 12.

---

## 8. SEO e dati strutturati

| Pagina | `title` | JSON-LD |
|---|---|---|
| `/servizi` | Servizi — Agria System | `WebPage`, `BreadcrumbList` |
| `/servizi/digital-presence` | Digital Presence — siti web per agriturismi, cantine e frantoi \| Agria System | `WebPage`, `Service`, `BreadcrumbList`, `FAQPage` |
| `/servizi/digital-commerce` | Digital Commerce — e-commerce e vendita diretta per cantine, frantoi e hospitality \| Agria System | `WebPage`, `Service`, `BreadcrumbList`, `FAQPage` |
| `/servizi/digital-automation` | Digital Automation — automazioni e AI per hospitality, cantine e frantoi \| Agria System | `WebPage`, `Service`, `BreadcrumbList`, `FAQPage` |

- `description` come da prompt; title esatti con `agriaPageMetadata` (canonical, Open Graph "Agria System", nessuna immagine social legacy).
- `FAQPage` costruito dalle sei FAQ reali di ciascuna pagina (`faqPageSchema`). `Service`: nome dell'area, descrizione, url, `areaServed: IT`, fornitore "Agria System"; nessun prezzo o dato inventato.
- Sitemap: le quattro pagine presenti (indice e aree, priorità 0,8), invariata rispetto al Prompt 12.

---

## 9. Contrasti

| Elemento | Colori | Rapporto |
|---|---|---|
| Hero · etichetta / h1 / sottotitolo | green-bright, bianco, bianco 70% su scena | 11,6–12,1 / 19,7 / 9,7:1 |
| Hero · pill | bianco 82% su pillola vetro | 5,3–6,1:1 |
| Hero · CTA / "Vedi il metodo" | ink su green-bright / bianco su scena | 12,1 / 7,5:1 |
| Testi delle card e FAQ | grigio su bianco / su off-white | 5,05 / 4,70:1 |
| Card AI e metodo | bianco 70% su ink | ≈9,4–9,7:1 |
| Numeri del metodo | green-bright su ink | 12,1:1 |
| Categorie dei deliverable | green-dark su bianco | 6,0:1 |
| Schede selezionate, pill di obiettivo, CTA fissa | bianco su grafite | 18,9:1 |
| Icone (non testo, soglia 3:1) | green-dark su off-white / green-bright su ink | 5,6 / 12,1:1 |

I valori dell'hero sono misurati sui pixel reali (testo reso trasparente, pixel più chiaro sotto ogni elemento); gli altri sono calcolati sui token.

---

## 10. Esito della validazione

| Verifica | Esito |
|---|---|
| `npm run build` | Riuscito (`next build` su copia isolata per non interferire con `next dev`). **173 pagine**, 166 prerenderizzate (invariato: le quattro pagine sostituiscono quelle del Prompt 12). JS iniziale: aree 111 kB, indice 107 kB |
| Un solo `h1`, gerarchia | Sì su tutte e quattro; nessun salto (h1 → h2 → h3 → h4 nei verticali) |
| Emoji | Nessuna; tutte le icone sono del set |
| Mouse | Selettore (passaggio), linea temporale (passaggio), schede, FAQ, pill di obiettivo |
| Tastiera | Frecce su selettore, schede e obiettivi; Tab sui passi del metodo; Invio sulle FAQ; focus sempre visibile |
| Tocco (375 px) | Selettore, linea temporale, schede, FAQ, obiettivi |
| CTA fissa | Nascosta in cima, visibile a metà pagina, nascosta sulla CTA finale; testo diverso per pagina |
| Senza JavaScript | Pannelli dei selettori e dei verticali tutti visibili (7/7), sei risposte FAQ aperte, descrizioni del metodo aperte, risposte "Da dove si parte" visibili con il proprio obiettivo; nessuna sezione vuota |
| `prefers-reduced-motion` | Nessuna transizione o animazione |
| Scorrimento orizzontale | Nessuno a 375, 768 e 1440 px su tutte e quattro |
| Console | Nessun errore JavaScript. In sviluppo compare un avviso di Next.js che segnala una foto dell'anteprima come elemento più grande dopo lo scorrimento automatico della prova (al caricamento l'elemento più grande è l'h1); restano i 404 dei prefetch verso le pagine settore e azienda non ancora create |

---

## 11. Da completare

- Foto dedicate `presence.jpg`, `commerce.jpg`, `automation.jpg` in `public/images/agria/servizi/`: poi aggiornare `markets.image` in `content/agria/servizi-aree.js` (e di conseguenza i blocchi dell'indice) ed eventualmente le anteprime del selettore.
- Fonte di `hospitality.jpg` per `/crediti-immagini`.
- Migration map (Prompt 14): redirect delle pagine legacy `/servizi/*` verso le tre aree.
- Immagine Open Graph AGRIA per le pagine interne.
