// Scarica N candidate per slot come thumbnail locali da rivedere manualmente
// (con lo strumento Read/un visualizzatore immagini) prima di sceglierne una
// e bloccarla per ID in scripts/unsplash-map.json. Ogni file è nominato
// <slot>__<unsplash-id>.jpg cosi' l'ID scelto e' subito leggibile dal nome.
//
// Uso:
//   node --env-file=.env.local scripts/unsplash-candidates.js <outDir> "<slot>=<query>" ["<slot>=<query>" ...]
//
// Esempio:
//   node --env-file=.env.local scripts/unsplash-candidates.js /tmp/provino \
//     "wine-club-cambia=wine cellar barrels aging"

const fs = require('fs');
const path = require('path');

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const OUT_DIR = process.argv[2];
const PER_SLOT = 5;

const slots = process.argv.slice(3).map((arg) => {
  const [slot, ...rest] = arg.split('=');
  return { slot, query: rest.join('=') };
});

async function main() {
  if (!ACCESS_KEY) {
    console.error('Manca UNSPLASH_ACCESS_KEY');
    process.exit(1);
  }
  if (!OUT_DIR || slots.length === 0) {
    console.error('Uso: node --env-file=.env.local scripts/unsplash-candidates.js <outDir> "<slot>=<query>" ...');
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const { slot, query } of slots) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${PER_SLOT}&orientation=landscape&content_filter=high`;
    const res = await fetch(url, { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } });
    if (!res.ok) {
      console.error(`${slot}: HTTP ${res.status}`);
      continue;
    }
    const { results } = await res.json();
    for (const photo of results) {
      const imgRes = await fetch(`${photo.urls.raw}&w=500&h=350&fit=crop&q=60&fm=jpg`);
      const buf = Buffer.from(await imgRes.arrayBuffer());
      const dest = path.join(OUT_DIR, `${slot}__${photo.id}.jpg`);
      fs.writeFileSync(dest, buf);
    }
    console.log(`✓ ${slot}: ${results.length} candidate scaricate (query: "${query}")`);
    await new Promise((r) => setTimeout(r, 300));
  }
}

main();
