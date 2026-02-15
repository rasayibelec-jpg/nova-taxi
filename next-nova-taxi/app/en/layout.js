import "../globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import HeaderEN from "@/components/layout/HeaderEN";
import FooterEN from "@/components/layout/FooterEN";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-Q4HZJQJCME";

export const metadata = {
  metadataBase: new URL("https://www.nova-taxi.com"),
  title: {
    default: "Nova Taxi | Premium Taxi Service in Central Switzerland",
    template: "%s | Nova Taxi",
  },
  description:
    "Nova Taxi – modern premium taxi service in Central Switzerland. Airport transfers, business rides, courier services and more. Available 24/7 at 076 611 31 31.",
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
    locale: "en",
    siteName: "Nova Taxi",
    title: "Nova Taxi | Premium Taxi Service in Central Switzerland",
    description:
      "Nova Taxi – modern premium taxi service in Central Switzerland. Airport transfers, business rides, courier services and more.",
    url: "https://www.nova-taxi.com/en",
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
    title: "Nova Taxi | Premium Taxi Service in Central Switzerland",
    description:
      "Nova Taxi – modern premium taxi service in Central Switzerland. Airport transfers, business rides, courier services and more.",
  },
  alternates: {
    canonical: "https://www.nova-taxi.com/en",
    languages: {
      'de': 'https://www.nova-taxi.com',
      'en': 'https://www.nova-taxi.com/en',
    },
  },
};

export default function EnglishLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vXdvhwRPp_NCnB9FQ_mAH7vaisRgFKQjNQpcRMBrhQY"
        />
        <meta name="theme-color" content="#0a0f1a" />
      </head>
      <body className={`${inter.className} bg-nova-bg text-white`}>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-en" strategy="afterInteractive">
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
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <HeaderEN />
          <main id="main-content" role="main">{children}</main>
          <FooterEN />
          <WhatsAppFloating />
        </div>
      </body>
    </html>
  );
}
