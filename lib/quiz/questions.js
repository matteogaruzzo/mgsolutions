export const businessOptions = [
  { value: 'wine-viticulture', label: 'Cantina / vigneto' },
  { value: 'oleifici-food-tech', label: 'Frantoio / oleificio' },
  { value: 'wine-hospitality-agriturismi', label: 'Agriturismo / hospitality' },
  { value: 'altro', label: 'Altro' },
];

export const existingToolsOptions = [
  { value: 'sito', label: 'Sito web' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'booking', label: 'Sistema di prenotazione' },
  { value: 'crm', label: 'CRM / gestionale' },
  { value: 'nessuno', label: 'Nessuno di questi' },
];

export const objectiveOptions = [
  { value: 'vendere_online', label: 'Vendere di più online' },
  { value: 'prenotazioni', label: 'Aumentare le prenotazioni dirette' },
  { value: 'automatizzare', label: 'Automatizzare processi interni' },
  { value: 'assistenza_clienti', label: 'Migliorare assistenza clienti e fidelizzazione' },
  { value: 'non_so', label: 'Non so ancora, voglio una consulenza' },
];

export const urgencyOptions = [
  { value: 'subito', label: 'Subito' },
  { value: 'entro_3_mesi', label: 'Entro 3 mesi' },
  { value: 'valutazione', label: 'Sto solo valutando' },
];

// 6 domande: multiselect/radio/url deterministici (letti dal motore regole) +
// una nota libera facoltativa. Nessuna risposta viene mai passata a un'AI:
// l'analisi del sito (se fornito) è estrazione di segnali semplice, non
// interpretazione automatica.
export const questions = [
  {
    id: 'businesses',
    type: 'multiselect',
    title: 'Quali attività gestisci?',
    options: businessOptions,
  },
  {
    id: 'existingTools',
    type: 'multiselect',
    title: 'Cosa hai già oggi?',
    options: existingToolsOptions,
  },
  {
    id: 'websiteUrl',
    type: 'url',
    title: 'Hai già un sito? (facoltativo)',
    description: 'Se ci lasci il link, diamo un’occhiata prima della proposta.',
    optional: true,
    placeholder: 'https://www.tuosito.it',
  },
  {
    id: 'objective',
    type: 'radio',
    title: 'Qual è il tuo obiettivo principale?',
    options: objectiveOptions,
  },
  {
    id: 'urgency',
    type: 'radio',
    title: 'Quanto è urgente per te?',
    options: urgencyOptions,
  },
  {
    id: 'notes',
    type: 'textarea',
    title: 'Vuoi aggiungere qualcosa? (facoltativo)',
    optional: true,
    maxLength: 300,
  },
];
