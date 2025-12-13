import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.nova-taxi.com"),
  title: {
    default: "Nova Taxi | Premium Taxi-Service in der Zentralschweiz",
    template: "%s | Nova Taxi"
  },
  description:
    "Nova Taxi – moderner Premium Taxi-Service in der Zentralschweiz. Flughafentransfer, Businessfahrten, Kurierfahrten und mehr. 24/7 erreichbar unter 076 611 31 31.",
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Nova Taxi",
    title: "Nova Taxi | Premium Taxi-Service in der Zentralschweiz",
    description:
      "Nova Taxi – moderner Premium Taxi-Service in der Zentralschweiz. Flughafentransfer, Businessfahrten, Kurierfahrten und mehr.",
    url: "https://www.nova-taxi.com/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Taxi | Premium Taxi-Service in der Zentralschweiz",
    description:
      "Nova Taxi – moderner Premium Taxi-Service in der Zentralschweiz. Flughafentransfer, Businessfahrten, Kurierfahrten und mehr."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-nova-bg text-white`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
