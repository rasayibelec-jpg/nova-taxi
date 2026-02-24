import { allLocationSlugs } from "@/config/locations";

export default function sitemap() {
  const baseUrl = "https://www.nova-taxi.com";
  const lastModified = new Date().toISOString();

  // Canton slugs
  const cantonSlugs = ["luzern", "schwyz", "zug"];

  // German (default) routes
  const staticRoutesDE = [
    "",
    "/flughafentransfer",
    "/business",
    "/kurierfahrten",
    "/preise",
    "/galerie",
    "/kontakt",
    "/ueber-uns",
    "/impressum",
    "/datenschutz",
    "/agb"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    alternates: {
      languages: {
        de: `${baseUrl}${route}`,
        en: `${baseUrl}/en${route || ''}`,
      },
    },
  }));

  // English routes
  const staticRoutesEN = [
    "/en",
    "/en/flughafentransfer",
    "/en/business",
    "/en/kurierfahrten",
    "/en/preise",
    "/en/galerie",
    "/en/kontakt",
    "/en/ueber-uns",
    "/en/impressum",
    "/en/datenschutz",
    "/en/agb"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));

  // German canton routes
  const cantonRoutesDE = cantonSlugs.map((slug) => ({
    url: `${baseUrl}/kanton/${slug}`,
    lastModified,
    alternates: {
      languages: {
        de: `${baseUrl}/kanton/${slug}`,
        en: `${baseUrl}/en/kanton/${slug}`,
      },
    },
  }));

  // English canton routes
  const cantonRoutesEN = cantonSlugs.map((slug) => ({
    url: `${baseUrl}/en/kanton/${slug}`,
    lastModified,
  }));

  // German location routes
  const locationRoutesDE = allLocationSlugs.map((slug) => ({
    url: `${baseUrl}/ort/${slug}`,
    lastModified,
    alternates: {
      languages: {
        de: `${baseUrl}/ort/${slug}`,
        en: `${baseUrl}/en/ort/${slug}`,
      },
    },
  }));

  // English location routes
  const locationRoutesEN = allLocationSlugs.map((slug) => ({
    url: `${baseUrl}/en/ort/${slug}`,
    lastModified,
  }));

  return [
    ...staticRoutesDE, 
    ...staticRoutesEN, 
    ...cantonRoutesDE, 
    ...cantonRoutesEN,
    ...locationRoutesDE, 
    ...locationRoutesEN
  ];
}
