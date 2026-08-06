// Scarica le foto Unsplash scelte per le pagine servizio e software, per ID
// (non per ricerca): un ID è stabile e restituisce sempre la stessa identica
// foto, a differenza di /search/photos i cui risultati cambiano nel tempo.
//
// Le foto sono state scelte a mano guardandole una per una (vedi
// scripts/unsplash-candidates.js per generare nuove candidate da rivedere)
// e bloccate per ID in scripts/unsplash-map.json.
//
// Uso:
//   node --env-file=.env.local scripts/fetch-servizi-images.js [--force]
//
// Richiede UNSPLASH_ACCESS_KEY in .env.local (mai committare la chiave:
// .env*.local e' gia' in .gitignore).

const fs = require('fs');
const path = require('path');

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const MAP = require('./unsplash-map.json');
const WIDTH = 1600;
const HEIGHT = 1200;

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exitCode = 1;
}

async function fetchPhotoById(id) {
  const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
  if (!res.ok) throw new Error(`ID ${id} non valido o non raggiungibile (${res.status})`);
  return res.json();
}

async function trackDownload(photo) {
  // Richiesto dalle API Guidelines di Unsplash quando si usa una foto ottenuta via API.
  try {
    await fetch(`${photo.links.download_location}&client_id=${ACCESS_KEY}`);
  } catch {
    // Non bloccante.
  }
}

async function downloadImage(photo, destPath, ext) {
  const url = `${photo.urls.raw}&w=${WIDTH}&h=${HEIGHT}&fit=crop&q=80&fm=${ext}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download immagine fallito (${res.status})`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buffer);
  return buffer.length;
}

async function processGroup(groupName, outDir, ext) {
  const group = MAP[groupName];
  const credits = [];

  for (const [file, cfg] of Object.entries(group)) {
    const destPath = path.join(outDir, `${file}.${ext}`);
    if (fs.existsSync(destPath) && !process.argv.includes('--force')) {
      console.log(`↷ ${groupName}/${file}.${ext} gia' presente, salto (usa --force per rigenerare)`);
      continue;
    }
    try {
      const photo = await fetchPhotoById(cfg.id);
      await trackDownload(photo);
      const bytes = await downloadImage(photo, destPath, ext);
      console.log(`✓ ${groupName}/${file}.${ext} (${(bytes / 1024).toFixed(0)} KB) — foto di ${photo.user.name} (@${photo.user.username})`);
      credits.push({
        slug: file,
        photographer: photo.user.name,
        username: photo.user.username,
        profileUrl: `${photo.user.links.html}?utm_source=mg_solutions&utm_medium=referral`,
        photoUrl: `${photo.links.html}?utm_source=mg_solutions&utm_medium=referral`,
      });
    } catch (err) {
      fail(`${groupName}/${file}: ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  if (credits.length) {
    const creditsPath = path.join(outDir, 'CREDITS.json');
    let existing = [];
    if (fs.existsSync(creditsPath)) {
      try {
        existing = JSON.parse(fs.readFileSync(creditsPath, 'utf8'));
      } catch {
        existing = [];
      }
    }
    const bySlug = new Map(existing.map((c) => [c.slug, c]));
    for (const c of credits) bySlug.set(c.slug, c);
    fs.writeFileSync(creditsPath, JSON.stringify([...bySlug.values()], null, 2));
    console.log(`Crediti aggiornati in ${path.relative(process.cwd(), creditsPath)}`);
  }
}

async function main() {
  if (!ACCESS_KEY) {
    fail('UNSPLASH_ACCESS_KEY non trovata. Esegui con: node --env-file=.env.local scripts/fetch-servizi-images.js');
    process.exit(1);
  }

  await processGroup('servizi', path.join(__dirname, '..', 'public', 'images', 'servizi'), 'webp');
  await processGroup('software', path.join(__dirname, '..', 'public', 'images', 'software'), 'jpg');
}

main();
