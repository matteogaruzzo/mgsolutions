export const locales = ['it', 'en'];
export const defaultLocale = 'it';

export function isValidLocale(locale) {
  return locales.includes(locale);
}
