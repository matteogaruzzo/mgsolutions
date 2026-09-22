import { defaultLocale, locales } from './config';

// Costruisce l'URL per la lingua indicata a partire da un path nella lingua
// di default (es. "/servizi" + "en" => "/en/servizi"; "/servizi" + "it" =>
// "/servizi"). Non usata da nessuna pagina esistente: utility per le pagine
// /en che verranno create dal Prompt 06 in poi.
export function localizedHref(path, locale) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}

// Determina la lingua attiva a partire da una pathname (es. "/en/servizi"
// => "en", "/servizi" => "it").
export function getLocaleFromPathname(pathname) {
  const [, first] = pathname.split('/');
  return locales.includes(first) && first !== defaultLocale ? first : defaultLocale;
}

// Rimuove il prefisso di lingua da una pathname, per risalire al path nella
// lingua di default (utile per costruire i link delle altre lingue da una
// pagina già tradotta).
export function stripLocale(pathname) {
  const locale = getLocaleFromPathname(pathname);
  if (locale === defaultLocale) return pathname;
  const rest = pathname.slice(`/${locale}`.length);
  return rest === '' ? '/' : rest;
}
