import it from '@/content/i18n/it.json';
import en from '@/content/i18n/en.json';
import { defaultLocale, isValidLocale } from './config';

const dictionaries = { it, en };

// Carica il dizionario delle stringhe di interfaccia per la lingua indicata.
// Non collegata a nessuna pagina: usata dai layout/componenti che verranno
// creati dal Prompt 06 in poi. Su una lingua non riconosciuta ricade sulla
// lingua di default invece di generare un errore.
export function getDictionary(locale) {
  return dictionaries[isValidLocale(locale) ? locale : defaultLocale];
}
