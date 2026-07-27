import { getServizio, getSoftwareFamily } from '@/lib/data';

// Catalogo del quiz: nessun servizio o testo inventato, ogni voce rimanda a
// contenuti reali già pubblicati su /servizi/[slug] o /software/[slug].
// Niente prezzi qui, per coerenza con il resto del sito.

const SERVIZI_IDS = [
  'consulenza-strategica',
  'siti-web-contatti',
  'restyling-ottimizzazione',
  'ecommerce-shopify',
  'ai-integration',
  'software-ai-su-misura',
];

const SOFTWARE_IDS = [
  'agente-commerciale',
  'assistente-clienti-knowledge-base',
  'automazione-preventivi-processi',
  'reputation-customer-follow-up',
];

export const catalog = [
  ...SERVIZI_IDS.map((slug) => {
    const s = getServizio(slug);
    return {
      id: slug,
      kind: 'servizio',
      slug,
      name: s.title,
      benefit: s.resultNote,
      href: `/servizi/${slug}`,
    };
  }),
  ...SOFTWARE_IDS.map((slug) => {
    const f = getSoftwareFamily(slug);
    return {
      id: slug,
      kind: 'software',
      slug,
      name: f.name,
      benefit: f.pitch,
      href: `/software/${slug}`,
    };
  }),
];

export function getCatalogItem(id) {
  return catalog.find((c) => c.id === id);
}
