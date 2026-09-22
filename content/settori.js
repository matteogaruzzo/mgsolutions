// ---- SETTORI -------------------------------------------------------
// slug = indirizzo pagina (/settori/wine-viticulture)
// 3 macro-settori verticali: Wine & Viticulture, Oleifici & Food Tech,
// Wine Hospitality & Agriturismi. Ogni settore ha una pagina dedicata
// completamente diversa (vedi app/settori/<slug>/page.jsx) — qui restano
// solo i contenuti testuali condivisi (indice /settori, card in home).
export const sectors = [
  {
    slug: 'wine-viticulture',
    name: 'Wine & Viticulture',
    lead: 'Cantine, vigneti e aziende vitivinicole.',
    intro:
      'Portiamo online il mondo del vino con siti che raccontano il territorio e store che vendono davvero: gestione stock, spedizioni, wine club e tracciabilità di filiera.',
    deliverables: [
      'Sito immersivo per cantina con storia, vigne e visite',
      'E-commerce vini su Shopify con gestione stock e spedizioni',
      'Wine club con ordini in abbonamento e area riservata',
      'Prenotazione degustazioni e visite in cantina',
      'Tracciabilità di lotto con QR code',
    ],
    result: 'Più vendite dirette, meno dipendenza dagli intermediari.',
  },
  {
    slug: 'oleifici-food-tech',
    name: 'Oleifici & Food Tech',
    lead: 'Frantoi, oleifici e produttori di eccellenza alimentare.',
    intro:
      'Portiamo il frantoio fuori dal circuito dei grossisti: e-commerce diretto, tracciabilità di lotto e un catalogo che racconta raccolta, frangitura e imbottigliamento.',
    deliverables: [
      'E-commerce olio EVO su Shopify con abbonamento ricorrente',
      'Catalogo immersivo con timeline di raccolta e produzione',
      'Tracciabilità di lotto con QR code',
      'Integrazione con marketplace del settore food',
    ],
    result: 'Più vendita diretta, margini più alti, meno dipendenza dai grossisti.',
  },
  {
    slug: 'wine-hospitality-agriturismi',
    name: 'Wine Hospitality & Agriturismi',
    lead: 'Wine hotel, agriturismi e ristorazione rurale.',
    intro:
      'Un’esperienza digitale immersiva quanto il soggiorno reale: gallery sequenziali, esperienze in evidenza (colazione, degustazione, cena) e prenotazione integrata, senza intermediari.',
    deliverables: [
      'Sito immersivo con gallery di esperienze e storytelling per sequenza',
      'Booking engine collegato a Booking.com / Airbnb',
      'Menù digitale e automazioni WhatsApp',
      'Loyalty program per gli ospiti abituali',
    ],
    result: 'Più occupazione camere e coperti prenotati direttamente.',
  },
];

export function getSector(slug) {
  return sectors.find((s) => s.slug === slug);
}
