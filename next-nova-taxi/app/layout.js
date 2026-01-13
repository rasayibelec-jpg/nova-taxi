import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Nova Taxi",
    title: "Nova Taxi | Ihr Taxi in Schwyz, Luzern & Zug – 24/7 Service",
    description:
      "Nova Taxi ist Ihr zuverlässiger Partner in der Zentralschweiz. Flughafentransfer Zürich, Business-Fahrten und Stadt-Taxi. Jetzt anrufen!",
    url: "https://www.nova-taxi.com/",
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
  return (
    <html lang="de">
      <head>
        <meta
          name="google-site-verification"
          content="vXdvhwRPp_NCnB9FQ_mAH7vaisRgFKQjNQpcRMBrhQY"
        />
      </head>
      <body className={`${inter.className} bg-nova-bg text-white`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloating />
        </div>
      </body>
    </html>
  );
}
