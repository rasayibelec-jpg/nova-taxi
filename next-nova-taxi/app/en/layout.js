import "../globals.css";
import { Inter } from "next/font/google";
import HeaderEN from "@/components/layout/HeaderEN";
import FooterEN from "@/components/layout/FooterEN";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.nova-taxi.com"),
  title: {
    default: "Nova Taxi | Premium Taxi Service in Central Switzerland",
    template: "%s | Nova Taxi",
  },
  description:
    "Nova Taxi – modern premium taxi service in Central Switzerland. Airport transfers, business rides, courier services and more. Available 24/7 at 076 611 31 31.",
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Nova Taxi",
    title: "Nova Taxi | Premium Taxi Service in Central Switzerland",
    description:
      "Nova Taxi – modern premium taxi service in Central Switzerland. Airport transfers, business rides, courier services and more.",
    url: "https://www.nova-taxi.com/en",
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
      </head>
      <body className={`${inter.className} bg-nova-bg text-white`}>
        <div className="min-h-screen flex flex-col">
          <HeaderEN />
          <main>{children}</main>
          <FooterEN />
          <WhatsAppFloating />
        </div>
      </body>
    </html>
  );
}
