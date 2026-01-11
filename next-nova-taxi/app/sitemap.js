import { allLocationSlugs } from "@/config/locations";

export default function sitemap() {
  const baseUrl = "https://www.nova-taxi.com";
  const lastModified = new Date().toISOString();

  // German (default) routes
  const staticRoutesDE = [
    "",
    "/flughafentransfer",
    "/business",
    "/kurierfahrten",
    "/preise",
    "/galerie",
    "/kontakt",
    "/ueber-uns"
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
    "/en/ueber-uns"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
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

  return [...staticRoutesDE, ...staticRoutesEN, ...locationRoutesDE, ...locationRoutesEN];
}
