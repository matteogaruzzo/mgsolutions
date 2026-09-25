# AGRIA — Prompt 12: Pagine dei servizi

**Data:** 2026-09-25
**Branch:** `agria/redesign`
**Natura del lavoro:** indice `/servizi` e tre pagine area (`/servizi/digital-presence`, `/servizi/digital-commerce`, `/servizi/digital-automation`) su un template comune. Copy del Prompt 12. Le pagine legacy `/servizi/[slug]` restano (migration map: Prompt 14); nessun redirect, nessuna pagina settore, azienda o contatti, nessuna pagina `/en`; `main` non è stato toccato.

---

## 1. Fase 0 — Conteggio route

"41 route" (report 11) e "170 pagine" sono due misure diverse, entrambe invariate dal Prompt 10: **41** sono le voci della tabella delle route di `next build` (una route dinamica come `/blog/[slug]` conta una volta), **170** le pagine del passaggio "Generating static pages". Build di verifica prima di ogni modifica: **170 pagine**, nessun gruppo perso.

| Gruppo | Pagine |
|---|---|
| Articoli del blog `/blog/[slug]` | 32 |
| Tag del blog `/blog/tag/*` | 71 |
| Geo, regioni `/geo/[regione]` | 16 |
| Servizi legacy `/servizi/*` (7 da `[slug]` + `wine-club`) | 8 |
| Settori legacy `/settori/*` | 3 |
| Software legacy `/software/*` | 3 |
| Portfolio `/portfolio/[slug]` | 6 |
| Metodo `/metodo/[slug]` | 4 |
| Statiche (home, indici, legali, contatti, `/design-system`…) | 18 |
| `robots.txt`, `sitemap.xml` | 2 |
| **Prerenderizzate (`prerender-manifest.json`)** | **163** |
| `/_not-found` | 1 |
| Route che Next prova e marca come dinamiche (3 API, `/blog`, 2 immagini OG) | 6 |
| **Totale "Generating static pages"** | **170** |

**Dopo il Prompt 12: 173 pagine** (166 prerenderizzate): le tre pagine area in più; `/servizi` sostituisce l'indice legacy allo stesso indirizzo.

---

## 2. Commit

| Commit | Contenuto |
|---|---|
| `7d49a20 feat(agria): pagina indice dei servizi` | Indice `/servizi`, `PageHero`, `AreaCards`, `agriaPageMetadata`, link "Tutti i servizi" nel menu |
| `9d143ef feat(agria): pagine Digital Presence, Commerce e Automation` | Template `ServicePage`, contenuti delle tre aree, `ArticleCards`, sitemap |

---

## 3. Indice `/servizi`

| Sezione | Fondo | Contenuto |
|---|---|---|
| Hero compatto (`PageHero`) | scuro, scena dei filari ridotta | `Servizi` · h1 **Tre aree, un solo sistema.** · sottotitolo |
| Tre aree (`AreaCards`) | bianco | Card grandi (h2): etichetta dell'area, titolo, testo della homepage, `Approfondisci` |
| Come lavoriamo (`MethodSection` della homepage) | off-white | Analisi, Progetto, Sviluppo ed evoluzione |
| CTA finale (`ClosingCta`) | blocco scuro | **Raccontateci come lavorate oggi.** · `Parliamo del progetto` |

**Menu:** il pannello Servizi portava solo alle tre aree. Su scelta del committente il link della card di evidenza è ora "Tutti i servizi" → `/servizi` (prima "Come lavoriamo" → `/#come-lavoriamo`). Poiché la card compare solo da `lg`, lo stesso link (e "Tutti i settori" per il pannello Settori) compare anche in fondo al pannello tra 768 e 1024 px e nel menu mobile.

---

## 4. Template delle pagine area — `components/agria/service/ServicePage.jsx`

Una pagina area è `<ServicePage area={areaPages.presence} />`; tutto il copy è in `content/agria/servizi.js` (`areaPages`, `serviceSections`).

| # | Sezione | Fondo | Titolo (h2) | Contenuto |
|---|---|---|---|---|
| 1 | Hero compatto (`PageHero`) | scuro, scena ridotta | h1 | Etichetta dell'area, h1, sottotitolo, CTA `Parliamo del progetto`, pill delle capability |
| 2 | Il problema | bianco | Il problema | Testo breve, a destra dell'etichetta |
| 3 | Cosa comprende | off-white | Cosa comprende | Card delle capability (h3) in `HoverGroup`: 4 colonne con 7-8 voci, 3 con 6 |
| 4 | Come si applica ai tre settori | bianco | Come si applica ai tre settori | `AutoTabs` Hospitality · Cantine · Frantoi, una riga per settore |
| 5 | Come lavoriamo su questa area | off-white | Come lavoriamo su questa area | Tre passi (numero, titolo h3, testo) in `HoverGroup` |
| 6 | Cosa non facciamo | bianco | Cosa non facciamo | Testo breve, a destra dell'etichetta |
| 7 | Approfondimenti | off-white | Approfondimenti | Due articoli reali (`ArticleCards`, due colonne) |
| — | Altre aree | bianco | Servizi | Le altre due aree (`AreaCards`, titoli h3) |
| 8 | CTA finale | blocco scuro | Raccontateci come lavorate oggi. | `Parliamo del progetto` |

- I titoli di sezione sono le etichette del prompt, rese piccole (stile eyebrow) con semantica `h2`: gerarchia h1 → h2 → h3 senza salti.
- **Rimandi:** ogni pagina porta alle altre due aree (sezione "Servizi", con i testi già approvati) e ai due articoli scelti. I rimandi alle pagine settore ("Vedi il settore" in ogni scheda di `AutoTabs`) sono pronti ma spenti: si attivano con `SECTOR_PAGES_LIVE = true` in `content/agria/servizi.js` quando le pagine esisteranno.
- **CTA finale:** solo titolo e pulsante, come da copy (il testo della CTA della homepage non è previsto qui); `ClosingCta` accetta ora `text={null}`.

### Componenti riutilizzabili creati
| Componente | Uso |
|---|---|
| `components/agria/sections/PageHero.jsx` | Hero compatto delle pagine interne (servizi, in futuro settori): la scena occupa solo lo spazio libero sotto il testo (`--hero-pad-bottom` + 40 px), così nessun testo cade sul bordo lontano dei filari |
| `components/agria/sections/ArticleCards.jsx` | Card di articoli reali (2 o 3 colonne), usate anche dalla sezione News della homepage |
| `components/agria/service/AreaCards.jsx` | Card grandi delle aree, tutte o escludendo quella corrente |
| `components/agria/service/ServicePage.jsx` | Template delle pagine area |

Modifiche di supporto: `Eyebrow` inoltra le prop (serve `id` per `aria-labelledby`); `FieldScene` accetta `style`; `ClosingCta` ha contenuti configurabili.

---

## 5. Articoli scelti

| Pagina | Articolo | Motivo |
|---|---|---|
| Digital Presence | `siti-web-per-agriturismi` | Il più visto dei tre candidati (143 impressioni / 2 clic) |
| Digital Presence | `seo-locale-agroalimentare-google-maps` | Copre SEO locale e visibilità; la migration map lo indica come futura guida su SEO e motori AI |
| Digital Commerce | `ecommerce-per-frantoi` | Articolo più forte del sito (506 / 6) |
| Digital Commerce | `agriturismo-booking-online-prenotazioni` | Prenotazioni dirette: con il precedente copre e-commerce e prenotazioni, in due settori |
| Digital Automation | `software-per-agriturismi` | Il più visto dei tre candidati (380 / 1) |
| Digital Automation | `chatbot-cantina-ai-customer-service` | AI applicata ai processi |

Scartati: `siti-web-per-cantine` (Presence), `ecommerce-vino-margini-vendita-diretta` (Commerce, già in homepage), `software-per-cantine` (Automation, stesso taglio di `software-per-agriturismi`).

Gli `alt` sono scritti in `content/agria/servizi.js` perché quelli dei post non descrivono sempre la foto. L'immagine di `chatbot-cantina-ai-customer-service` è un'illustrazione 3D (fumetti di una chat), non una fotografia; è accreditata su Unsplash (kuu akura) come le altre.

---

## 6. SEO e dati strutturati

| Pagina | `title` | JSON-LD |
|---|---|---|
| `/servizi` | Servizi — Agria System | `WebPage`, `BreadcrumbList` (Home › Servizi) |
| `/servizi/digital-presence` | Digital Presence — siti web per agriturismi, cantine e frantoi \| Agria System | `WebPage`, `Service`, `BreadcrumbList` (Home › Servizi › Digital Presence) |
| `/servizi/digital-commerce` | Digital Commerce — e-commerce e vendita diretta per il settore \| Agria System | `WebPage`, `Service`, `BreadcrumbList` |
| `/servizi/digital-automation` | Digital Automation — automazioni e integrazioni AI \| Agria System | `WebPage`, `Service`, `BreadcrumbList` |

- `description` come da prompt. Title esatti tramite `agriaPageMetadata` (`title.absolute`: il template legacy del layout aggiungerebbe "· MG Solutions").
- Canonical con gli helper esistenti (`alternates.canonical`); il dominio viene da `NEXT_PUBLIC_SITE_URL` (oggi `https://matteogaruzzo.com`, fino al cambio di dominio della migration map).
- Open Graph: titolo e descrizione della pagina, `siteName` "Agria System", nessuna immagine (l'immagine social legacy è esclusa, come in homepage).
- `Service`: `name` (nome dell'area), `description`, `url`, `areaServed: IT`, `provider` Organization "Agria System". Nessun prezzo, offerta, valutazione o dato non presente nel copy.
- Sitemap: `/servizi` già presente (0,8); aggiunte le tre aree con priorità 0,8, `changeFrequency: monthly`.

---

## 7. Contrasti

| Elemento | Colori | Rapporto |
|---|---|---|
| Hero · etichetta | green-bright su scena | 11,9–12,1:1 |
| Hero · h1 | bianco su ink | 19,7:1 |
| Hero · sottotitolo | bianco 70% su scena | 7,4:1 (indice) · 9,7:1 (aree) |
| Hero · pill | bianco 82% su pillola vetro | 5,5–6,1:1 |
| Hero · CTA | ink su green-bright | 12,1:1 |
| Titoli di sezione | green-dark su bianco / off-white | 6,0 / 5,6:1 |
| Testo "problema" e "non facciamo" | grafite su bianco | 18,9:1 |
| Testi delle card | grigio su bianco | 5,05:1 |
| Testi secondari su off-white | grigio su off-white | 4,70:1 |
| CTA finale | bianco su ink; ink su green-bright | 19,7 / 12,1:1 |

I valori dell'hero sono misurati sui pixel reali della scena (testo reso trasparente, pixel più chiaro sotto ogni elemento). La prima versione di `PageHero` metteva il bordo lontano dei filari dietro il sottotitolo (3,2:1): corretta legando l'altezza del campo allo spazio libero sotto il testo.

---

## 8. Esito della validazione

| Verifica | Esito |
|---|---|
| `npm run build` | Riuscito (`next build` su copia isolata per non interferire con `next dev`, un worker per la RAM disponibile). **Prima: 170 pagine. Dopo: 173.** JS iniziale delle quattro pagine 105 kB (indice legacy: 115 kB) |
| Risposta HTTP | 200 per `/servizi` e le tre aree |
| Raggiungibili dal menu | Aree: pannello Servizi e menu mobile. Indice: "Tutti i servizi" (card di evidenza da `lg`, fondo del pannello tra 768 e 1024 px, menu mobile) |
| Un solo `h1`, gerarchia | Sì, su tutte e quattro; nessun salto di livello |
| Tastiera | `AutoTabs`: Tab sulla scheda attiva, frecce per cambiare scheda, focus visibile, pannello corretto; link e card con focus visibile |
| Scorrimento orizzontale | Nessuno a 375, 768 e 1440 px su tutte e quattro |
| Console | Nessun errore JavaScript (restano i 404 dei prefetch verso le pagine settore e azienda non ancora create) |
| Homepage | Invariata nell'aspetto: la sezione News usa ora `ArticleCards` (stessa struttura, stesso stile del titolo, stessi tre articoli) |

---

## 9. Da completare

- Pagine settore: poi attivare i rimandi (`SECTOR_PAGES_LIVE`).
- Migration map (Prompt 14): redirect delle pagine legacy `/servizi/*` verso le tre aree.
- Immagine Open Graph AGRIA per le pagine interne.
