export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: "https://www.nova-taxi.com/sitemap.xml"
  };
}
