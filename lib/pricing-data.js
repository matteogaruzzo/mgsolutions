// =====================================================================
//  UNICA FONTE DEI PREZZI — modifica QUI, non nel JSX delle pagine.
//  Ogni pagina che mostra un prezzo legge da questo file.
// =====================================================================

// Number.prototype.toLocaleString('it-IT') non raggruppa le migliaia in
// questo ambiente (ICU limitata): formattiamo a mano.
export function formatEuro(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const pricing = {
  restylingMirato: { name: 'Restyling mirato', price: 690, installments: 3, installmentAmount: 230 },
  primaAutomazione: { name: 'Prima automazione', price: 690, installments: 3, installmentAmount: 230 },
  sitoEssenziale: { name: 'Sito essenziale', price: 1290, installments: 3, installmentAmount: 430 },
  wineClub: { name: 'Wine club / club olio', price: 1470, installments: 3, installmentAmount: 490 },
  sitoPrenotazioni: { name: 'Sito + prenotazioni', price: 2190, installments: 3, installmentAmount: 730, featured: true },
  ecommerce: { name: 'E-commerce', price: 2490, installments: 3, installmentAmount: 830 },
  crm: { name: 'CRM su misura', price: 2940, installments: 6, installmentAmount: 490 },
  consulenzaOrientamento: { name: 'Consulenza orientamento', price: 290 },
  consulenzaCompleta: { name: 'Consulenza completa', price: 490, featured: true },
  percorso3Mesi: { name: 'Percorso 3 mesi', price: 1470, installments: 3, installmentAmount: 490 },
  assistenzaMensile: { name: 'Assistenza mensile', price: 79, period: 'mese' },
};

// Frase standard sotto ogni prezzo a rate.
export function installmentLine(plan) {
  if (!plan.installments) return null;
  return `oppure ${plan.installments} rate mensili da ${formatEuro(plan.installmentAmount)}€, senza interessi`;
}

// Variante riservata a cantine e frantoi (solo dove le rate sono 3: la
// frase è fissa, non generalizza ad altri numeri di rate).
export const HARVEST_INSTALLMENT_LINE = 'oppure 3 rate senza interessi, anche distribuite dopo la vendemmia';

// Messaggio WhatsApp precompilato: nome del piano e cifra esatta, mai
// scritti a mano nelle pagine.
export function pricingWhatsappHref(phone, offerName, price) {
  const waNumber = phone.replace(/[^\d]/g, '');
  const text = `Ciao Matteo, vi scrivo per il servizio "${offerName}" (${formatEuro(price)}€). Ho una cantina/agriturismo/frantoio, possiamo sentirci?`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
}
