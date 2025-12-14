import { allLocationSlugs } from "@/config/locations";

export default function sitemap() {
  const baseUrl = "https://www.nova-taxi.com";

  const staticRoutes = [
    "",
    "/flughafentransfer",
    "/business",
    "/kurierfahrten",
    "/preise",
    "/kontakt",
    "/ueber-uns"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  const locationRoutes = allLocationSlugs.map((slug) => ({
    url: `${baseUrl}/ort/${slug}`,
    lastModified: new Date().toISOString()
  }));

  return [...staticRoutes, ...locationRoutes];
}
