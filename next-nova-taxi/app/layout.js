import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-Q4HZJQJCME";

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
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Nova Taxi Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Taxi | Ihr Taxi in Schwyz, Luzern & Zug – 24/7 Service",
    description:
      "Nova Taxi ist Ihr zuverlässiger Partner in der Zentralschweiz. Flughafentransfer Zürich, Business-Fahrten und Stadt-Taxi.",
  },
  alternates: {
    canonical: "https://www.nova-taxi.com",
    languages: {
      'de': 'https://www.nova-taxi.com',
      'en': 'https://www.nova-taxi.com/en',
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.nova-taxi.com",
    "name": "Nova Taxi",
    "description": "Ihr professioneller Taxiservice für die Regionen Schwyz, Luzern und Zug. Spezialisiert auf Flughafentransfers nach Zürich, Geschäftstermine und komfortable Stadtfahrten. 24/7 für Sie erreichbar.",
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
      "latitude": "47.0500",
      "longitude": "8.5200"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "CHF",
    "areaServed": [
      { "@type": "City", "name": "Schwyz" },
      { "@type": "City", "name": "Luzern" },
      { "@type": "City", "name": "Zug" },
      { "@type": "City", "name": "Arth-Goldau" },
      { "@type": "City", "name": "Küssnacht am Rigi" },
      { "@type": "City", "name": "Brunnen" },
      { "@type": "City", "name": "Einsiedeln" },
      { "@type": "City", "name": "Baar" },
      { "@type": "City", "name": "Cham" },
      { "@type": "City", "name": "Kriens" },
      { "@type": "City", "name": "Emmen" },
      { "@type": "City", "name": "Horw" }
    ],
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flughafentransfer Zürich",
            "description": "Direkter Transfer zum Flughafen Zürich aus der Zentralschweiz"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Transfer",
            "description": "VIP und Business Fahrten zu Meetings und Hotels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kurierdienst",
            "description": "Schnelle und sichere Kurierfahrten"
          }
        }
      ]
    }
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
