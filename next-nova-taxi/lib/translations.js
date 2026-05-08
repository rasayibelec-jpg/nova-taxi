// Utility to load translations
import deCommon from '@/locales/de/common.json';
import enCommon from '@/locales/en/common.json';
import enLocations from '@/locales/en/locations.json';

const translations = {
  de: deCommon,
  en: enCommon
};

const locationTranslations = {
  en: enLocations
};

export function getTranslations(locale) {
  return translations[locale] || translations.de;
}

export function getLocationTranslation(locale, slug) {
  if (locale === 'en' && locationTranslations.en[slug]) {
    return locationTranslations.en[slug];
  }
  return null; // Return null to use default German from config/locations.js
}

export function t(translations, path) {
  const keys = path.split('.');
  let result = translations;
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Return path if translation not found
    }
  }
  return result;
}
