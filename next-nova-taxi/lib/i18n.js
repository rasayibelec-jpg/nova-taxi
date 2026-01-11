export const locales = ['de', 'en'];
export const defaultLocale = 'de';

export function getLocaleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (locales.includes(segments[0])) {
    return segments[0];
  }
  return defaultLocale;
}

export function getPathWithoutLocale(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (locales.includes(segments[0])) {
    return '/' + segments.slice(1).join('/') || '/';
  }
  return pathname;
}

export function getLocalizedPath(pathname, locale) {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  if (locale === defaultLocale) {
    return pathWithoutLocale;
  }
  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
}
