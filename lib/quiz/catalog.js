import { getServizio } from '@/lib/data';

// Catalogo del quiz: nessun servizio o testo inventato, ogni voce rimanda a
// contenuti reali già pubblicati su /servizi/[slug].
// Niente prezzi qui, per coerenza con il resto del sito.

const SERVIZI_IDS = [
  'consulenza-strategica',
  'siti-web-contatti',
  'restyling-ottimizzazione',
  'ecommerce-shopify',
  'automazioni-ai',
];

export const catalog = SERVIZI_IDS.map((slug) => {
  const s = getServizio(slug);
  return {
    id: slug,
    kind: 'servizio',
    slug,
    name: s.title,
    benefit: s.resultNote,
    href: `/servizi/${slug}`,
  };
});

export function getCatalogItem(id) {
  return catalog.find((c) => c.id === id);
}
