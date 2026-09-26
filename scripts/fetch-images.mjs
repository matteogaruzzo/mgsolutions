#!/usr/bin/env node
// =====================================================================
//  Pipeline immagini Unsplash (Prompt 14)
//
//  Conforme alle Unsplash API Guidelines: le foto NON vengono salvate nel
//  sito ma usate con hotlinking (gli URL `photo.urls` restituiti dall'API),
//  il download viene registrato su `photo.links.download_location` e
//  l'attribuzione (fotografo + Unsplash, con utm) è generata dal manifest.
//
//  Per ogni voce di scripts/images.config.json: cerca, sceglie il primo
//  risultato orizzontale e adatto, registra il download, verifica il peso
//  della versione JPEG a 1600 px (sotto 500 KB, abbassando la qualità se
//  serve) e scrive content/agria/image-credits.json.
//
//  Uso:
//    node scripts/fetch-images.mjs                      voci nuove
//    node scripts/fetch-images.mjs --only=servizi/presence
//    node scripts/fetch-images.mjs --force=servizi/presence   riseleziona
//    node scripts/fetch-images.mjs --force                    riseleziona tutto
//
//  Richiede UNSPLASH_ACCESS_KEY in .env.local (mai committata).
// =====================================================================

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG_PATH = join(ROOT, 'scripts', 'images.config.json');
const MANIFEST_PATH = join(ROOT, 'content', 'agria', 'image-credits.json');
const API = 'https://api.unsplash.com';
const WIDTH = 1600;
const MAX_BYTES = 500 * 1024;
const QUALITIES = [80, 72, 64, 56, 48];

// --- argomenti --------------------------------------------------------
const args = process.argv.slice(2);
const flag = (name) => args.find((a) => a === `--${name}` || a.startsWith(`--${name}=`));
const listOf = (name) => {
  const f = flag(name);
  if (!f) return null;
  return f.includes('=') ? f.split('=')[1].split(',').filter(Boolean) : [];
};
const only = listOf('only');
const force = listOf('force'); // [] = tutte, [chiavi] = solo quelle

// --- chiave da .env.local (senza dipendenze) --------------------------
function loadKey() {
  if (process.env.UNSPLASH_ACCESS_KEY) return process.env.UNSPLASH_ACCESS_KEY;
  const envPath = join(ROOT, '.env.local');
  if (!existsSync(envPath)) return null;
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*UNSPLASH_ACCESS_KEY\s*=\s*(.*)\s*$/);
    if (m) return m[1].replace(/^['"]|['"]$/g, '');
  }
  return null;
}

const KEY = loadKey();
if (!KEY) {
  console.error('✗ UNSPLASH_ACCESS_KEY mancante: aggiungila a .env.local (vedi .env.example).');
  process.exit(1);
}

async function api(path) {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Client-ID ${KEY}`, 'Accept-Version': 'v1' },
  });
  const remaining = res.headers.get('x-ratelimit-remaining');
  if (!res.ok) {
    const hint = res.status === 403 && remaining === '0' ? ' (limite orario raggiunto: riprova tra un\'ora)' : '';
    throw new Error(`${path.split('?')[0]} → HTTP ${res.status}${hint}`);
  }
  return { data: await res.json(), remaining };
}

// primo risultato orizzontale e adatto: largo almeno WIDTH, non Unsplash+,
// non escluso a mano nella configurazione
function suitable(photo, entry) {
  if ((entry.exclude || []).includes(photo.id)) return false;
  if (photo.premium || photo.plus || photo.sponsorship) return false;
  if (photo.width < WIDTH || photo.width / photo.height < 1.2) return false;
  return true;
}

async function choose(entry) {
  if (entry.id) return (await api(`/photos/${entry.id}`)).data;
  const params = new URLSearchParams({
    query: entry.query,
    orientation: entry.orientation || 'landscape',
    per_page: '20',
    content_filter: 'high',
  });
  const { data } = await api(`/search/photos?${params}`);
  const photo = data.results.find((p) => suitable(p, entry));
  if (!photo) throw new Error(`nessun risultato adatto per "${entry.query}"`);
  return photo;
}

// peso della versione JPEG a WIDTH px: il caso peggiore (il sito chiede
// formati moderni, più leggeri). Abbassa la qualità finché sta sotto soglia.
async function measure(raw) {
  for (const q of QUALITIES) {
    const res = await fetch(`${raw}&w=${WIDTH}&q=${q}&fm=jpg&fit=max`);
    if (!res.ok) throw new Error(`immagine non raggiungibile (HTTP ${res.status})`);
    const bytes = (await res.arrayBuffer()).byteLength;
    if (bytes <= MAX_BYTES) return { quality: q, bytes, underLimit: true };
    if (q === QUALITIES.at(-1)) return { quality: q, bytes, underLimit: false };
  }
  return null;
}

const utm = (url, source) => `${url}?utm_source=${source}&utm_medium=referral`;

// --- esecuzione -------------------------------------------------------
const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
const manifest = existsSync(MANIFEST_PATH)
  ? JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
  : { images: {} };
const utmSource = config.utmSource || 'agria_system';
const report = [];

for (const entry of config.images) {
  if (only && !only.includes(entry.key)) continue;
  const forced = force && (force.length === 0 || force.includes(entry.key));
  if (manifest.images[entry.key] && !forced) {
    // l'alt si aggiorna comunque dalla configurazione
    manifest.images[entry.key].alt = entry.alt;
    report.push({ key: entry.key, stato: 'già presente, saltata' });
    continue;
  }
  try {
    const photo = await choose(entry);
    // registra il download (richiesto dalle API Guidelines quando si sceglie una foto)
    await api(photo.links.download_location.replace(API, ''));
    const raw = photo.urls.raw;
    const size = await measure(raw);
    manifest.images[entry.key] = {
      key: entry.key,
      destination: entry.destination,
      id: photo.id,
      src: raw,
      width: photo.width,
      height: photo.height,
      color: photo.color,
      alt: entry.alt,
      quality: size.quality,
      bytes: size.bytes,
      photographer: {
        name: photo.user.name,
        username: photo.user.username,
        profileUrl: utm(photo.user.links.html, utmSource),
      },
      photoUrl: utm(photo.links.html, utmSource),
      unsplashUrl: utm('https://unsplash.com/', utmSource),
      query: entry.query || null,
      date: new Date().toISOString().slice(0, 10),
    };
    report.push({
      key: entry.key,
      stato: forced ? 'riselezionata' : 'scaricata',
      foto: photo.id,
      fotografo: photo.user.name,
      dimensioni: `${photo.width}×${photo.height}`,
      peso: `${Math.round(size.bytes / 1024)} KB a ${WIDTH}px, qualità ${size.quality}${size.underLimit ? '' : ' — OLTRE 500 KB'}`,
    });
  } catch (error) {
    report.push({ key: entry.key, stato: 'errore', dettaglio: error.message });
    process.exitCode = 1;
  }
}

manifest._nota =
  'Generato da scripts/fetch-images.mjs: non modificare a mano. Foto Unsplash usate con hotlinking (API Guidelines); crediti mostrati in /crediti-immagini e sotto le foto.';
manifest.images = Object.fromEntries(Object.entries(manifest.images).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);

console.log('\nRiepilogo immagini');
for (const row of report) {
  console.log(`  ${row.key.padEnd(22)} ${row.stato}`);
  for (const [k, v] of Object.entries(row)) if (!['key', 'stato'].includes(k)) console.log(`  ${''.padEnd(22)} ${k}: ${v}`);
}
console.log(`\nManifest: ${MANIFEST_PATH.replace(ROOT, '.')}`);
