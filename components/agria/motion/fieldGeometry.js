// Geometria della scena dei filari (FieldScene): un campo lavorato su un terreno
// ondulato, visto dall'alto in prospettiva. I filari convergono con moderazione
// (il bordo lontano resta largo, come un campo e non una strada) e le linee
// trasversali rendono leggibili le colline.
// Il terreno è una griglia filari × campioni: le posizioni di base sono
// calcolate una sola volta a livello di modulo, identiche su server e client
// (l'SVG arriva già nell'HTML); la scena aggiunge sopra un avvallamento
// `disp` (in unità di altezza, negativo = verso il basso) dove passa il cursore.

export const VIEW = { width: 1600, height: 400 };

const Z_NEAR = 1; // distanza del bordo vicino (fondo del viewBox)
const Z_FAR = 3.5; // distanza del bordo lontano: rapporto 3,5 = convergenza moderata
const FAR_Y = 30; // y del bordo lontano nel viewBox
// orizzonte e focale ricavati dai due bordi: y = HORIZON + FOCAL / z
const FOCAL = ((VIEW.height - FAR_Y) * Z_NEAR * Z_FAR) / (Z_FAR - Z_NEAR);
const HORIZON = VIEW.height - FOCAL / Z_NEAR;
const ROWS_PER_SIDE = 46; // abbastanza per coprire la larghezza anche sul bordo lontano
export const ROW_GAP = 64 / FOCAL; // 64 px tra i filari sul bordo vicino
export const ROWS = ROWS_PER_SIDE * 2 + 1;
export const SAMPLES = 24;
// linee trasversali: indici dei campioni in profondità (su filari alterni)
const CONTOUR_SAMPLES = [1, 3, 5, 8, 11, 14, 17, 20];

// Colline: ampiezza proporzionale alla distanza, quindi costante sullo
// schermo (~23 px); circa due creste lungo la profondità.
function groundHeight(x, z) {
  const amp = 0.045 * z;
  return amp * (0.6 * Math.sin(3.8 * z + 0.9 * x + 0.4) + 0.4 * Math.sin(6.5 * z - 0.7 * x + 1.7));
}

export const rowX = (i) => (i - ROWS_PER_SIDE) * ROW_GAP;
// j: 0 = bordo vicino (fondo), SAMPLES - 1 = bordo lontano
export const sampleZ = (j) => Z_NEAR + (j / (SAMPLES - 1)) * (Z_FAR - Z_NEAR);

// posizioni di base sullo schermo (viewBox), indice = i * SAMPLES + j
const BASE_X = new Float64Array(ROWS * SAMPLES);
const BASE_Y = new Float64Array(ROWS * SAMPLES);
const DEPTH = new Float64Array(ROWS * SAMPLES);
for (let i = 0; i < ROWS; i++) {
  for (let j = 0; j < SAMPLES; j++) {
    const x = rowX(i);
    const z = sampleZ(j);
    const k = i * SAMPLES + j;
    BASE_X[k] = VIEW.width / 2 + (FOCAL * x) / z;
    BASE_Y[k] = HORIZON + (FOCAL * (1 - groundHeight(x, z))) / z;
    DEPTH[k] = z;
  }
}

// Il terreno cede: si abbassa (disp) e si allarga lateralmente dove si abbassa,
// in proporzione alla pendenza dell'avvallamento tra i filari vicini. Senza lo
// spostamento laterale l'avvallamento non si vedrebbe sui filari centrali,
// quasi verticali sullo schermo.
const SPREAD = 0.2;

function screenPoint(k, disp) {
  if (!disp) return [BASE_X[k], BASE_Y[k]];
  const i = Math.floor(k / SAMPLES);
  const left = i > 0 ? disp[k - SAMPLES] : disp[k];
  const right = i < ROWS - 1 ? disp[k + SAMPLES] : disp[k];
  const shift = (SPREAD * (right - left)) / (2 * ROW_GAP);
  return [BASE_X[k] + (FOCAL * shift) / DEPTH[k], BASE_Y[k] - (FOCAL * disp[k]) / DEPTH[k]];
}

// Tracciato compatto: primo punto assoluto, poi spostamenti relativi interi
// ("l"); il segno meno fa da separatore, così l'HTML resta leggero.
function pathOf(indices, disp) {
  let d = '';
  let px = 0;
  let py = 0;
  indices.forEach((k, n) => {
    const [sx, sy] = screenPoint(k, disp);
    const x = Math.round(sx);
    const y = Math.round(sy);
    if (n === 0) d = `M${x} ${y}l`;
    else {
      const dx = x - px;
      const dy = y - py;
      d += `${n > 1 && dx >= 0 ? ' ' : ''}${dx}${dy >= 0 ? ' ' : ''}${dy}`;
    }
    px = x;
    py = y;
  });
  return d;
}

// Ogni filare è diviso in tratti di profondità: quando il cursore deforma il
// terreno cambiano solo i tratti vicini, e il browser ridisegna solo quelli.
const BAND_SAMPLES = 4;
export const BANDS = Math.ceil((SAMPLES - 1) / BAND_SAMPLES);
export const bandRange = (b) => [b * BAND_SAMPLES, Math.min((b + 1) * BAND_SAMPLES, SAMPLES - 1)];

// tratto b del filare i (i tratti condividono gli estremi, la linea è continua)
export function rowPath(i, b, disp) {
  const [j0, j1] = bandRange(b);
  const indices = [];
  for (let j = j0; j <= j1; j++) indices.push(i * SAMPLES + j);
  return pathOf(indices, disp);
}

// linea trasversale c: a distanza costante, su filari alterni
export function contourPath(c, disp) {
  const j = CONTOUR_SAMPLES[c];
  const indices = [];
  for (let i = 0; i < ROWS; i += 2) indices.push(i * SAMPLES + j);
  return pathOf(indices, disp);
}

export const CONTOURS = CONTOUR_SAMPLES.length;
// indice = i * BANDS + b
export const ROW_PATHS = Array.from({ length: ROWS * BANDS }, (_, n) => rowPath(Math.floor(n / BANDS), n % BANDS, null));
export const CONTOUR_PATHS = Array.from({ length: CONTOURS }, (_, c) => contourPath(c, null));

// Punto del viewBox → coordinate sul terreno (x laterale, z distanza), sul
// piano medio senza colline; null se il punto è fuori dal campo.
export function toGround(vx, vy) {
  if (vy <= HORIZON) return null;
  const z = FOCAL / (vy - HORIZON);
  if (z < Z_NEAR * 0.85 || z > Z_FAR) return null;
  return { x: ((vx - VIEW.width / 2) * z) / FOCAL, z };
}
