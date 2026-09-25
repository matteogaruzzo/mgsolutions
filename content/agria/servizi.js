// =====================================================================
//  PAGINE SERVIZI AGRIA — copy approvato (Prompt 12). Modificare qui i
//  testi, non nei componenti. Nessun testo va aggiunto senza approvazione.
// =====================================================================

import { services } from './home';

const CTA = { label: 'Parliamo del progetto', href: '/contatti' };

// Tre aree: nome, indirizzo e testo della card (lo stesso della homepage),
// etichetta usata come eyebrow della card e della pagina dell'area.
const AREA_LABELS = {
  presence: '01 — Presence',
  commerce: '02 — Commerce',
  automation: '03 — Automation',
};

export const areas = services.items.map((item) => ({
  key: item.key,
  label: AREA_LABELS[item.key],
  title: item.title,
  href: item.href,
  text: item.text,
}));

// Indice /servizi
export const servicesIndex = {
  meta: {
    title: 'Servizi — Agria System',
    description:
      'Digital Presence, Digital Commerce e Digital Automation: siti, e-commerce e automazioni per agriturismi, hotel, cantine e frantoi.',
    path: '/servizi',
  },
  eyebrow: 'Servizi',
  title: 'Tre aree, un solo sistema.',
  lead: 'Non vendiamo pacchetti. Partiamo da come lavorate oggi e costruiamo quello che serve, integrato con gli strumenti che già usate.',
  linkLabel: services.linkLabel,
};

// CTA finale di tutte le pagine servizi
export const serviceClosing = {
  title: 'Raccontateci come lavorate oggi.',
  cta: CTA,
};
