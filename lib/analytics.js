// Eventi di conversione, pronti per GA4. Oggi nessuno strumento di analytics
// è collegato: gli eventi vanno in window.dataLayer (il formato che Google Tag
// Manager e gtag leggono) e, se gtag è già presente, direttamente a GA4.
// Mai dati personali nei parametri: solo valori di scelta.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
}

// Richiesta inviata dal modulo contatti. generate_lead è l'evento
// raccomandato da GA4 per i lead.
export function trackLead({ preference, sector, service }) {
  trackEvent('generate_lead', {
    form_name: 'contatti',
    lead_preference: preference,
    lead_sector: sector,
    lead_service: service,
  });
}
