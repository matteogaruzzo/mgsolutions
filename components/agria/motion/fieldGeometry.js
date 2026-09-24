// Geometria della scena dei filari (FieldScene): un campo lavorato su un terreno
// ondulato, visto dall'alto in prospettiva. I filari convergono con moderazione
// (il bordo lontano resta largo, come un campo e non una strada) e le linee
// trasversali rendono leggibili le colline.
// Calcolata una sola volta a livello di modulo, identica su server e client:
// l'SVG arriva già nell'HTML e la scena esiste anche senza JavaScript.

export const VIEW = { width: 1600, height: 400 };

const Z_NEAR = 1; // distanza del bordo vicino (fondo del viewBox)
const Z_FAR = 3.5; // distanza del bordo lontano: rapporto 3,5 = convergenza moderata
const FAR_Y = 30; // y del bordo lontano nel viewBox
// orizzonte e focale ricavati dai due bordi: y = HORIZON + FOCAL / z
const FOCAL = ((VIEW.height - FAR_Y) * Z_NEAR * Z_FAR) / (Z_FAR - Z_NEAR);
const HORIZON = VIEW.height - FOCAL / Z_NEAR;
const ROW_GAP = 64 / FOCAL; // 64 px tra i filari sul bordo vicino
const ROWS_PER_SIDE = 46; // abbastanza per coprire la larghezza anche sul bordo lontano
const SAMPLES = 18;

// Colline: ampiezza proporzionale alla distanza, quindi costante sullo
// schermo (~23 px); circa due creste lungo la profondità.
function groundHeight(x, z) {
  const amp = 0.045 * z;
  return amp * (0.6 * Math.sin(3.8 * z + 0.9 * x + 0.4) + 0.4 * Math.sin(6.5 * z - 0.7 * x + 1.7));
}

// t: 0 = bordo vicino (fondo), 1 = bordo lontano
export function project(x, t) {
  const z = Z_NEAR + t * (Z_FAR - Z_NEAR);
  const y = groundHeight(x, z);
  return {
    x: VIEW.width / 2 + (FOCAL * x) / z,
    y: HORIZON + (FOCAL * (1 - y)) / z,
    z,
  };
}

function toPath(points) {
  return points.map((p, i) => `${i ? 'L' : 'M'}${Math.round(p.x)} ${Math.round(p.y)}`).join('');
}

const ROW_XS = Array.from({ length: ROWS_PER_SIDE * 2 + 1 }, (_, i) => (i - ROWS_PER_SIDE) * ROW_GAP);

// filari: linee a x costante, dal bordo vicino a quello lontano
export const ROW_PATHS = ROW_XS.map((x) =>
  toPath(Array.from({ length: SAMPLES }, (_, i) => project(x, i / (SAMPLES - 1)))),
);

// linee trasversali tenui a distanza costante: disegnano il profilo delle colline
export const CONTOUR_PATHS = [0.06, 0.16, 0.27, 0.38, 0.5, 0.62, 0.74, 0.86].map((t) =>
  toPath(ROW_XS.filter((_, i) => i % 2 === 0).map((x) => project(x, t))),
);

// Nodi: dati che viaggiano lungo i filari. row = indice del filare (0 = centro),
// phase = posizione iniziale nel ciclo, period = secondi per percorrere il filare,
// dir = 1 verso l'osservatore, -1 verso il fondo.
export const NODES = [
  { row: -2, phase: 0.1, period: 19, dir: 1 },
  { row: 3, phase: 0.55, period: 23, dir: 1 },
  { row: -6, phase: 0.35, period: 21, dir: -1 },
  { row: 8, phase: 0.8, period: 25, dir: 1 },
  { row: 0, phase: 0.62, period: 27, dir: -1 },
  { row: -10, phase: 0.2, period: 24, dir: 1 },
  { row: 5, phase: 0.05, period: 20, dir: -1 },
  { row: -4, phase: 0.9, period: 22, dir: 1 },
  { row: 12, phase: 0.45, period: 26, dir: 1 },
];

// Posizione di un nodo al tempo `seconds`: coordinate nel viewBox, raggio
// (più grande vicino all'osservatore) e opacità (sfuma alle due estremità).
export function nodeAt(node, seconds) {
  const cycle = (node.phase + seconds / node.period) % 1;
  const t = node.dir === 1 ? 1 - cycle : cycle;
  const p = project(node.row * ROW_GAP, t);
  const r = Math.max(1.6, (0.016 * FOCAL) / p.z);
  const fade = Math.min(1, t / 0.12, (1 - t) / 0.2);
  // arrotondati: gli stessi valori vanno nell'HTML del server e nel client
  return {
    x: Math.round(p.x * 10) / 10,
    y: Math.round(p.y * 10) / 10,
    r: Math.round(r * 10) / 10,
    opacity: Math.round(Math.max(0, fade) * 100) / 100,
  };
}
