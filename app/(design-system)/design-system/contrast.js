// Contrasto WCAG 2.1 calcolato dai valori RGB dei token Agria (definiti in
// app/globals.css :root). Usato solo dalla pagina di anteprima interna.

// Colore risultante di un primo piano con opacità alpha sopra uno sfondo pieno.
function blend(fg, alpha, bg) {
  return fg.map((value, i) => Math.round(value * alpha + bg[i] * (1 - alpha)));
}

function toHex(rgb) {
  return `#${rgb.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

const INK = [8, 12, 10];
const WHITE = [255, 255, 255];
// Header: ink all'85% sopra contenuto bianco (caso peggiore durante lo scroll)
const HEADER_OVER_WHITE = blend(INK, 0.85, WHITE);

export const AGRIA_COLORS = {
  green: { hex: '#4F8F57', rgb: [79, 143, 87] },
  greenDark: { hex: '#3A6E44', rgb: [58, 110, 68] },
  graphite: { hex: '#111111', rgb: [17, 17, 17] },
  white: { hex: '#FFFFFF', rgb: WHITE },
  offwhite: { hex: '#F6F7F4', rgb: [246, 247, 244] },
  grey: { hex: '#6B706C', rgb: [107, 112, 108] },
  border: { hex: '#E4E8E3', rgb: [228, 232, 227] },
  ink: { hex: '#080C0A', rgb: INK },
  greenBright: { hex: '#7AE098', rgb: [122, 224, 152] },
  onDarkMuted: { hex: 'bianco 70% su ink', rgb: blend(WHITE, 0.7, INK) },
  headerOverWhite: { hex: `ink 85% su bianco (${toHex(HEADER_OVER_WHITE)})`, rgb: HEADER_OVER_WHITE },
  onDarkMutedOverWhite: { hex: 'bianco 70% su header', rgb: blend(WHITE, 0.7, HEADER_OVER_WHITE) },
};

function channelLuminance(value) {
  const c = value / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance([r, g, b]) {
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b);
}

export function contrastRatio(rgbA, rgbB) {
  const lA = relativeLuminance(rgbA);
  const lB = relativeLuminance(rgbB);
  const lighter = Math.max(lA, lB);
  const darker = Math.min(lA, lB);
  return (lighter + 0.05) / (darker + 0.05);
}

export const CONTRAST_ROWS = [
  { fg: 'graphite', bg: 'white', usage: 'Testo principale', usedForText: true },
  { fg: 'greenDark', bg: 'white', usage: 'Link, testo verde, eyebrow', usedForText: true },
  { fg: 'grey', bg: 'white', usage: 'Testo secondario', usedForText: true },
  { fg: 'graphite', bg: 'offwhite', usage: 'Testo principale su sezioni alternate', usedForText: true },
  { fg: 'greenDark', bg: 'offwhite', usage: 'Link su sezioni alternate', usedForText: true },
  { fg: 'grey', bg: 'offwhite', usage: 'Testo secondario su sezioni alternate', usedForText: true },
  { fg: 'white', bg: 'greenDark', usage: 'Testo su bottone primario', usedForText: true },
  { fg: 'white', bg: 'graphite', usage: 'Testo su bottone secondario', usedForText: true },
  {
    fg: 'green',
    bg: 'white',
    usage: 'Non usato per testo — solo icone, bordi, accenti, gradiente hero',
    usedForText: false,
  },
];

export const DARK_CONTRAST_ROWS = [
  { fg: 'white', bg: 'ink', usage: 'Testo principale su scuro (agria-on-dark)', usedForText: true },
  { fg: 'onDarkMuted', bg: 'ink', usage: 'Testo secondario su scuro (agria-on-dark-muted)', usedForText: true },
  { fg: 'greenBright', bg: 'ink', usage: 'Link ed etichette su scuro, anello di focus', usedForText: true },
  { fg: 'ink', bg: 'greenBright', usage: 'Testo sul bottone verde luminoso (CTA)', usedForText: true },
  { fg: 'white', bg: 'headerOverWhite', usage: 'Header sopra contenuto bianco: testo principale', usedForText: true },
  { fg: 'onDarkMutedOverWhite', bg: 'headerOverWhite', usage: 'Header sopra contenuto bianco: voci di menu', usedForText: true },
  { fg: 'greenBright', bg: 'headerOverWhite', usage: 'Header sopra contenuto bianco: focus e accenti', usedForText: true },
  {
    fg: 'greenDark',
    bg: 'ink',
    usage: 'Non usato su scuro — sotto 4.5:1; su fondo scuro si usa green-bright',
    usedForText: false,
  },
];
