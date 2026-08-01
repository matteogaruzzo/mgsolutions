// Parser minimale per enfasi inline nei paragrafi degli articoli blog:
// ***grassetto corsivo***, **grassetto**, *corsivo* o _corsivo_.
// Non introduce dipendenze da markdown/MDX: i paragrafi restano stringhe
// semplici in lib/data.js, solo un po' di markup leggero dentro al testo.

import { createElement, Fragment } from 'react';

const EMPHASIS_RE = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|_(.+?)_)/g;

export function renderRichText(text) {
  if (!text) return text;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = EMPHASIS_RE.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[2] !== undefined) {
      parts.push(createElement('strong', { key: key++, className: 'font-bold text-ink' }, createElement('em', null, match[2])));
    } else if (match[3] !== undefined) {
      parts.push(createElement('strong', { key: key++, className: 'font-bold text-ink' }, match[3]));
    } else if (match[4] !== undefined) {
      parts.push(createElement('em', { key: key++, className: 'italic' }, match[4]));
    } else if (match[5] !== undefined) {
      parts.push(createElement('em', { key: key++, className: 'italic' }, match[5]));
    }
    lastIndex = EMPHASIS_RE.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return createElement(Fragment, null, ...parts);
}

// Un paragrafo che inizia con "> " viene reso come blockquote.
export function isBlockquote(text) {
  return typeof text === 'string' && text.startsWith('> ');
}

export function stripBlockquoteMarker(text) {
  return text.slice(2);
}
