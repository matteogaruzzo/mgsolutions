// ---------------------------------------------------------------------
// FONTE UNICA per prezzi e limiti di MG Business Suite. Ogni pagina o
// componente che mostra un prezzo, un setup fee, un limite di moduli/
// utenti/sedi/integrazioni o una CTA verso un piano deve leggere da qui.
// Non duplicare questi valori altrove.
// ---------------------------------------------------------------------

export const SOFTWARE_PLAN_ORDER = ['essenziale', 'crescita', 'ecosistema'];

export const SOFTWARE_PLANS = {
  essenziale: {
    id: 'essenziale',
    name: 'MG Essenziale',
    tagline: 'Per iniziare',
    description: 'Per aziende che vogliono risolvere un processo prioritario.',
    monthlyPrice: 89,
    setupPrice: 249,
    setupDescription:
      'Una sola volta, per attivare e configurare la piattaforma secondo le vostre esigenze.',
    trialDays: 30,
    moduleLimit: 1,
    moduleLimitLabel: '1 modulo a scelta',
    userLimit: 3,
    userLimitLabel: 'Fino a 3 utenti',
    siteLimit: 1,
    siteLimitLabel: '1 sede',
    integrationLimit: 2,
    integrationLimitLabel: '2 integrazioni',
    supportLabel: 'Supporto via email',
    automations: false,
    controlTower: false,
    features: [
      '1 modulo a scelta',
      'Fino a 3 utenti',
      '1 sede',
      '2 integrazioni',
      'Supporto via email',
      'Aggiornamenti della piattaforma inclusi',
    ],
    idealFor: ['Piccole cantine', 'Frantoi in avvio', 'Agriturismo singolo'],
    highlighted: false,
    badge: null,
    cta: 'Scopri il piano Essenziale',
    ctaHref: '/contatti?interesse=mg-business-suite&plan=essenziale',
  },
  crescita: {
    id: 'crescita',
    name: 'MG Crescita',
    tagline: 'Per collegare processi',
    description: 'Per aziende che gestiscono più aree e vogliono automazioni.',
    monthlyPrice: 179,
    setupPrice: 449,
    setupDescription:
      'Una sola volta, per attivare e configurare la piattaforma secondo le vostre esigenze.',
    trialDays: 45,
    moduleLimit: 3,
    moduleLimitLabel: 'Fino a 3 moduli a scelta',
    userLimit: 10,
    userLimitLabel: 'Fino a 10 utenti',
    siteLimit: 2,
    siteLimitLabel: '2 sedi',
    integrationLimit: 6,
    integrationLimitLabel: '6 integrazioni',
    supportLabel: 'Supporto prioritario',
    automations: true,
    controlTower: false,
    features: [
      'Fino a 3 moduli a scelta',
      'Fino a 10 utenti',
      '2 sedi',
      '6 integrazioni',
      'Automazioni tra moduli',
      'Supporto prioritario',
      'Verifica trimestrale',
    ],
    idealFor: ['Cantine medie', 'Frantoi in crescita', 'Agriturismi con prenotazioni'],
    highlighted: true,
    badge: 'Più scelto',
    cta: 'Scopri il piano Crescita',
    ctaHref: '/contatti?interesse=mg-business-suite&plan=crescita',
  },
  ecosistema: {
    id: 'ecosistema',
    name: 'MG Ecosistema',
    tagline: "Per l'intera organizzazione",
    description: 'Per aziende strutturate con visione strategica.',
    monthlyPrice: 249,
    setupPrice: 699,
    setupDescription:
      'Una sola volta, per attivare e configurare la piattaforma secondo le vostre esigenze.',
    trialDays: 60,
    moduleLimit: 'all',
    moduleLimitLabel: 'Tutti i moduli inclusi',
    userLimit: null,
    userLimitLabel: 'Utenti illimitati',
    siteLimit: 5,
    siteLimitLabel: 'Fino a 5 sedi',
    integrationLimit: 12,
    integrationLimitLabel: '12 integrazioni',
    supportLabel: 'Supporto prioritario + telefonico',
    automations: true,
    controlTower: true,
    features: [
      'Tutti i moduli inclusi',
      'Utenti illimitati',
      'Fino a 5 sedi',
      '12 integrazioni',
      'MG Control Tower',
      'Automazioni avanzate',
      'Referente dedicato MG Solutions',
    ],
    idealFor: ['Aziende strutturate', 'Reti di aziende', 'Holding multi-settore'],
    highlighted: false,
    badge: null,
    cta: 'Scopri il piano Ecosistema',
    ctaHref: '/contatti?interesse=mg-business-suite&plan=ecosistema',
  },
};

export function getPlan(id) {
  return SOFTWARE_PLANS[id];
}

export function getAllPlans() {
  return SOFTWARE_PLAN_ORDER.map((id) => SOFTWARE_PLANS[id]);
}

export function pricePerDay(monthlyPrice) {
  return monthlyPrice / 30;
}
