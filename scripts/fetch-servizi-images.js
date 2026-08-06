// Scarica le immagini "problema"/"cambia" mancanti delle pagine servizio da
// Unsplash (formato WebP, richiesto direttamente all'API via `fm=webp` —
// niente sharp/dipendenze aggiuntive) e le salva in public/images/servizi.
//
// Uso:
//   node --env-file=.env.local scripts/fetch-servizi-images.js
//
// Richiede UNSPLASH_ACCESS_KEY in .env.local (mai committare la chiave:
// .env*.local e' gia' in .gitignore). Stesso pattern di fetch-blog-images.js.

const fs = require('fs');
const path = require('path');

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'servizi');
const WIDTH = 1600;
const HEIGHT = 1200;

// file = nome file di destinazione (senza estensione). Ogni query è scelta
// per corrispondere al paragrafo affiancato nella relativa pagina, non
// genericamente al servizio.
const images = [
  {
    file: 'siti-web-contatti-problema',
    query: 'vineyard dusk sunset evening',
    alt: 'Vigneto al tramonto, l’ora in cui arrivano le richieste che si perdono',
  },
  {
    file: 'siti-web-contatti-cambia',
    query: 'wine tasting glasses vineyard guests',
    alt: 'Degustazione prenotata comodamente in cantina',
  },
  {
    file: 'ecommerce-shopify-problema',
    query: 'wine bottles wholesale crates warehouse',
    alt: 'Casse di vino pronte per la distribuzione all’ingrosso',
  },
  {
    file: 'ecommerce-shopify-cambia',
    query: 'wine bottles gift box packaging',
    alt: 'Confezione regalo di vino pronta per la spedizione diretta',
  },
  {
    file: 'restyling-ottimizzazione-problema',
    query: 'old stone farmhouse window italy',
    alt: 'Vecchio casale di campagna, come un sito da rinnovare',
  },
  {
    file: 'restyling-ottimizzazione-cambia',
    query: 'renovated farmhouse windows modern italy',
    alt: 'Casale ristrutturato, l’intervento mirato che serviva',
  },
  {
    file: 'consulenza-strategica-problema',
    query: 'notebook pen vineyard planning',
    alt: 'Appunti e pianificazione in vigna, prima di decidere cosa costruire',
  },
  {
    file: 'consulenza-strategica-cambia',
    query: 'harvest crates grapes sorted',
    alt: 'Cassette di vendemmia ordinate, come le priorità dopo l’analisi',
  },
];

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exitCode = 1;
}

async function searchPhoto(query, excludeIds) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=10&orientation=landscape&content_filter=high`;
  const res = await fetch(url, { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } });
  if (!res.ok) throw new Error(`Unsplash search fallita (${res.status}): ${await res.text()}`);
  const data = await res.json();
  const candidate = (data.results || []).find((p) => !excludeIds.has(p.id));
  if (!candidate) throw new Error(`Nessun risultato utilizzabile per "${query}"`);
  return candidate;
}

async function trackDownload(photo) {
  // Richiesto dalle API Guidelines di Unsplash quando si usa una foto ottenuta via API.
  try {
    await fetch(`${photo.links.download_location}&client_id=${ACCESS_KEY}`);
  } catch {
    // Non bloccante.
  }
}

async function downloadImage(photo, destPath) {
  const url = `${photo.urls.raw}&w=${WIDTH}&h=${HEIGHT}&fit=crop&q=80&fm=webp`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download immagine fallito (${res.status})`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buffer);
  return buffer.length;
}

async function main() {
  if (!ACCESS_KEY) {
    fail('UNSPLASH_ACCESS_KEY non trovata. Esegui con: node --env-file=.env.local scripts/fetch-servizi-images.js');
    process.exit(1);
  }

  const usedIds = new Set();
  const credits = [];

  for (const img of images) {
    const destPath = path.join(OUT_DIR, `${img.file}.webp`);
    if (fs.existsSync(destPath) && !process.argv.includes('--force')) {
      console.log(`↷ ${img.file}.webp gia' presente, salto (usa --force per rigenerare)`);
      continue;
    }
    try {
      const photo = await searchPhoto(img.query, usedIds);
      usedIds.add(photo.id);

      await trackDownload(photo);
      const bytes = await downloadImage(photo, destPath);

      console.log(`✓ ${img.file}.webp (${(bytes / 1024).toFixed(0)} KB) — foto di ${photo.user.name} (@${photo.user.username})`);
      credits.push({
        slug: img.file,
        photographer: photo.user.name,
        username: photo.user.username,
        profileUrl: `${photo.user.links.html}?utm_source=mg_solutions&utm_medium=referral`,
        photoUrl: `${photo.links.html}?utm_source=mg_solutions&utm_medium=referral`,
      });
    } catch (err) {
      fail(`${img.file}: ${err.message}`);
    }
  }

  const creditsPath = path.join(OUT_DIR, 'CREDITS.json');
  let existingCredits = [];
  if (fs.existsSync(creditsPath)) {
    try {
      existingCredits = JSON.parse(fs.readFileSync(creditsPath, 'utf8'));
    } catch {
      existingCredits = [];
    }
  }
  const bySlug = new Map(existingCredits.map((c) => [c.slug, c]));
  for (const c of credits) bySlug.set(c.slug, c);
  fs.writeFileSync(creditsPath, JSON.stringify([...bySlug.values()], null, 2));
  console.log(`\nCrediti fotografi salvati in ${path.relative(process.cwd(), creditsPath)} — Unsplash richiede attribuzione visibile quando si usa la API.`);
}

main();
