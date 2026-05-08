import Link from "next/link";

export const metadata = {
  title: "Impressum | Nova Taxi",
  description: "Impressum und rechtliche Informationen von Nova Taxi – Ihr zuverlässiger Taxiservice in der Zentralschweiz.",
};

export default function ImpressumPage() {
  return (
    <section className="section-padding">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Rechtliches
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Impressum
          </h1>
        </div>

        <div className="space-y-6 text-gray-300">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Kontaktadresse</h2>
            <address className="not-italic">
              <p>Nova Taxi</p>
              <p>Türlihof 4</p>
              <p>6414 Oberarth</p>
              <p>Schweiz</p>
            </address>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Kontakt</h2>
            <p>Telefon: <a href="tel:+41766113131" className="text-nova-gold hover:text-nova-gold-soft">076 611 31 31</a></p>
            <p>E-Mail: <a href="mailto:info@nova-taxi.com" className="text-nova-gold hover:text-nova-gold-soft">info@nova-taxi.com</a></p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Vertretungsberechtigte Person</h2>
            <p>Inhaber: [Name auf Anfrage]</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Handelsregistereintrag</h2>
            <p>Eingetragener Firmenname: Nova Taxi</p>
            <p>Handelsregister: Kanton Schwyz</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Mehrwertsteuernummer</h2>
            <p>CHE-XXX.XXX.XXX MWST</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Haftungsausschluss</h2>
            <p className="text-sm">
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
              Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. 
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
              welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
              Informationen, durch Missbrauch der Verbindung oder durch technische Störungen 
              entstanden sind, werden ausgeschlossen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Haftung für Links</h2>
            <p className="text-sm">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres 
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten 
              abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene 
              Gefahr des Nutzers oder der Nutzerin.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Urheberrechte</h2>
            <p className="text-sm">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen 
              Dateien auf der Website gehören ausschliesslich Nova Taxi oder den speziell 
              genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die 
              schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </div>
        </div>

        <nav className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/datenschutz" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Datenschutz
            </Link>
            <Link href="/agb" className="text-gray-300 hover:text-nova-gold transition-colors">
              → AGB
            </Link>
            <Link href="/kontakt" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
