// Indice degli articoli: un file per articolo sotto ./posts, stesso ordine
// dell'array `posts` originale in lib/data.js.
import post0 from './posts/agente-ai-reparto-commerciale';
import post1 from './posts/shopify-velocita-conversioni';
import post2 from './posts/seo-geo-farsi-trovare-ai';
import post3 from './posts/ecommerce-vino-vendite-dirette';
import post4 from './posts/agenti-ai-processo-commerciale';
import post5 from './posts/specialista-digitale-vs-web-agency-agroalimentare';
import post6 from './posts/ecommerce-vino-margini-vendita-diretta';
import post7 from './posts/wine-club-revenue-ricorrente-fedelta';
import post8 from './posts/enoturismo-prenotazioni-online-vendite-dirette';
import post9 from './posts/software-frantoi-gestione-ordini-crm';
import post10 from './posts/agriturismo-booking-online-prenotazioni';
import post11 from './posts/chatbot-cantina-ai-customer-service';
import post12 from './posts/seo-locale-agroalimentare-google-maps';
import post13 from './posts/storytelling-vino-marketing-vendite';
import post14 from './posts/bandi-incentivi-digitalizzazione-agroalimentare';
import post15 from './posts/scegliere-partner-digitale-checklist';
import post16 from './posts/degustazioni-cantina-trasformare-visite-vendite';
import post17 from './posts/pos-cassa-cantina-vendita-degustazione';
import post18 from './posts/gestione-fiscale-ecommerce-vino-iva-fatturazione';
import post19 from './posts/cross-selling-upselling-cantina-scontrino-medio';
import post20 from './posts/ridurre-no-show-prenotazioni-cantina-promemoria';
import post21 from './posts/vendita-internazionale-vino-dtc-export-estero';
import post22 from './posts/multi-canale-cantina-getyourguide-viator-ota';
import post23 from './posts/formazione-team-accoglienza-cantina-vendite';
import post24 from './posts/comunicare-sostenibilita-cantina-marketing-vendite';
import post25 from './posts/email-marketing-sequenze-automatiche-cantina-visitatori';
import post26 from './posts/siti-web-per-cantine';
import post27 from './posts/ecommerce-per-cantine';
import post28 from './posts/software-per-cantine';
import post29 from './posts/siti-web-per-agriturismi';
import post30 from './posts/software-per-agriturismi';
import post31 from './posts/ecommerce-per-frantoi';

export const posts = [
  post0,
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
  post13,
  post14,
  post15,
  post16,
  post17,
  post18,
  post19,
  post20,
  post21,
  post22,
  post23,
  post24,
  post25,
  post26,
  post27,
  post28,
  post29,
  post30,
  post31,
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function slugifyTag(tag) {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getAllTags() {
  const map = new Map();
  posts.forEach((p) => {
    (p.tags || []).forEach((tag) => {
      const slug = slugifyTag(tag);
      if (!map.has(slug)) map.set(slug, { tag, slug, count: 0 });
      map.get(slug).count += 1;
    });
  });
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export function getPostsByTagSlug(tagSlug) {
  return posts.filter((p) => (p.tags || []).some((t) => slugifyTag(t) === tagSlug));
}
