import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-Q4HZJQJCME";

// Google Ads Conversion IDs
const GOOGLE_ADS_ID_1 = "AW-17950187146";
const GOOGLE_ADS_ID_2 = "AW-11210946531";

export const metadata = {
  metadataBase: new URL("https://www.nova-taxi.com"),
  title: {
    default: "Nova Taxi | Ihr Taxi in Schwyz, Luzern & Zug – 24/7 Service",
    template: "%s | Nova Taxi Zentralschweiz",
  },
  description:
    "Nova Taxi ist Ihr zuverlässiger Partner in der Zentralschweiz. Flughafentransfer Zürich, Business-Fahrten und Stadt-Taxi in Schwyz, Luzern & Zug. Jetzt anrufen: 076 611 31 31!",
  keywords: [
    "Taxi Zentralschweiz",
    "Taxi Schwyz",
    "Taxi Luzern",
    "Taxi Zug",
    "Flughafentransfer Zürich",
    "Flughafentaxi Zentralschweiz",
    "24h Taxi",
    "Taxi bestellen",
    "VIP Transfer",
    "Business Taxi",
    "Kurierdienst",
    "Bahnhof Taxi"
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Nova Taxi",
    title: "Nova Taxi | Ihr Taxi in Schwyz, Luzern & Zug – 24/7 Service",
    description:
      "Nova Taxi ist Ihr zuverlässiger Partner in der Zentralschweiz. Flughafentransfer Zürich, Business-Fahrten und Stadt-Taxi. Jetzt anrufen!",
    url: "https://www.nova-taxi.com/",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nova Taxi Zentralschweiz',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Taxi | Ihr Taxi in Schwyz, Luzern & Zug – 24/7 Service",
    description:
      "Nova Taxi ist Ihr zuverlässiger Partner in der Zentralschweiz. Flughafentransfer Zürich, Business-Fahrten und Stadt-Taxi.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: "https://www.nova-taxi.com",
    languages: {
      'de': 'https://www.nova-taxi.com',
      'en': 'https://www.nova-taxi.com/en',
      'x-default': 'https://www.nova-taxi.com',
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Nova Taxi",
    "image": "https://www.nova-taxi.com/og-image.jpg",
    "url": "https://www.nova-taxi.com",
    "telephone": "+41766113131",
    "email": "info@nova-taxi.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Türlihof 4",
      "addressLocality": "Oberarth",
      "addressRegion": "Schwyz",
      "postalCode": "6414",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.0574,
      "longitude": 8.5514
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "CHF 6.60 Grundtaxe + CHF 4.20/km",
    "areaServed": [
      "Schwyz",
      "Luzern",
      "Zug",
      "Arth-Goldau",
      "Küssnacht",
      "Brunnen",
      "Einsiedeln"
    ],
    "sameAs": [
      "https://www.nova-taxi.com"
    ]
  };

  return (
    <html lang="de">
      <head>
        <meta
          name="google-site-verification"
          content="vXdvhwRPp_NCnB9FQ_mAH7vaisRgFKQjNQpcRMBrhQY"
        />
        <meta name="theme-color" content="#0a0f1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Preload critical hero image for LCP - local optimized WebP */}
        <link
          rel="preload"
          href="/hero-bg.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/hero-bg-mobile.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
        />
        {/* Default x-default hreflang for international SEO */}
        <link rel="alternate" hrefLang="x-default" href="https://www.nova-taxi.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-nova-bg text-white`}>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Google Ads Tag 1 (gtag.js) - AW-17950187146 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID_1}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-1" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID_1}');
          `}
        </Script>

        {/* Google Ads Tag 2 (gtag.js) - AW-11210946531 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID_2}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID_2}');
          `}
        </Script>

        {/* Google Ads Conversion Tracking - Page View (ID 1) */}
        <Script id="google-ads-conversion-pageview-1" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': '${GOOGLE_ADS_ID_1}/gXcWCL7Zz5AcEtlQq09C'});
          `}
        </Script>

        {/* Google Ads Conversion Tracking - Termin vereinbaren (ID 2) */}
        <Script id="google-ads-conversion-termin-2" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': '${GOOGLE_ADS_ID_2}/v-TxCKnwxJAZEOPv5eEp'});
          `}
        </Script>
        
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" role="main">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </div>
      </body>
    </html>
  );
}
