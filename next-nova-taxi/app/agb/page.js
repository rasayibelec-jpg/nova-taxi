import Link from "next/link";

export const metadata = {
  title: "AGB | Nova Taxi",
  description: "Allgemeine Geschäftsbedingungen von Nova Taxi – Taxiservice in der Zentralschweiz.",
  alternates: {
    canonical: "https://www.nova-taxi.com/agb",
    languages: {
      de: "https://www.nova-taxi.com/agb",
      en: "https://www.nova-taxi.com/en/agb",
    },
  },
  openGraph: {
    title: "AGB – Nova Taxi",
    description: "Allgemeine Geschäftsbedingungen von Nova Taxi.",
    url: "https://www.nova-taxi.com/agb",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
  },
};

export default function AGBPage() {
  return (
    <section className="section-padding">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Rechtliches
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
        </div>

        <div className="space-y-6 text-gray-300">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">1. Geltungsbereich</h2>
            <p className="text-sm">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Beförderungsleistungen, 
              die von Nova Taxi (nachfolgend "Unternehmen") erbracht werden. Mit der Buchung 
              einer Fahrt akzeptiert der Fahrgast diese Bedingungen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">2. Leistungsumfang</h2>
            <p className="text-sm">
              Das Unternehmen erbringt Personenbeförderungsleistungen im Rahmen des 
              Taxigewerbes. Dazu gehören insbesondere:
            </p>
            <ul className="text-sm list-disc list-inside mt-2 space-y-1">
              <li>Stadtfahrten und Regionalfahrten</li>
              <li>Flughafentransfers (Zürich, Basel)</li>
              <li>Bahnhoftransfers</li>
              <li>Geschäftsfahrten und VIP-Service</li>
              <li>Kurierfahrten</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">3. Buchung und Vertragsabschluss</h2>
            <p className="text-sm">
              Eine Buchung kann telefonisch, per E-Mail oder WhatsApp erfolgen. Der 
              Beförderungsvertrag kommt mit der Bestätigung der Buchung durch das 
              Unternehmen zustande.
            </p>
            <p className="text-sm mt-2">
              Bei Vorausbuchungen ist die Angabe von Name, Telefonnummer, Abholadresse, 
              Zielort sowie Datum und Uhrzeit erforderlich.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">4. Preise und Zahlung</h2>
            <p className="text-sm">
              Die Preise richten sich nach der gefahrenen Strecke, der Tageszeit und 
              besonderen Anforderungen. Bei Vorausbuchungen kann auf Wunsch ein Festpreis 
              vereinbart werden.
            </p>
            <p className="text-sm mt-2">
              Akzeptierte Zahlungsmittel: Bargeld, Kreditkarten (Visa, Mastercard), 
              Debitkarten, Twint. Firmenkunden können auf Rechnung zahlen (nach Vereinbarung).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">5. Stornierung und Änderung</h2>
            <p className="text-sm">
              Buchungen können bis zu 2 Stunden vor der geplanten Abholzeit kostenlos 
              storniert werden. Bei späteren Stornierungen oder Nichterscheinen kann 
              eine Aufwandsentschädigung erhoben werden.
            </p>
            <p className="text-sm mt-2">
              Änderungen der Buchung (z.B. Uhrzeit, Adresse) sind nach Möglichkeit zu 
              berücksichtigen und sollten so früh wie möglich mitgeteilt werden.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">6. Wartezeit</h2>
            <p className="text-sm">
              Bei Vorausbuchungen wartet der Fahrer bis zu 15 Minuten nach der vereinbarten 
              Abholzeit. Bei Flughafenabholungen wird auf die effektive Ankunftszeit des 
              Fluges gewartet (Flugüberwachung). Längere Wartezeiten können zusätzlich 
              berechnet werden.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">7. Gepäck</h2>
            <p className="text-sm">
              Normales Reisegepäck ist im Fahrpreis inbegriffen. Sperrige oder 
              ungewöhnlich grosse Gepäckstücke müssen bei der Buchung angegeben werden. 
              Das Unternehmen behält sich vor, die Beförderung von Gegenständen 
              abzulehnen, die das Fahrzeug beschädigen könnten.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">8. Kindersitze</h2>
            <p className="text-sm">
              Kindersitze sind auf Anfrage verfügbar und sollten bei der Buchung 
              angegeben werden. Die Verantwortung für die korrekte Sicherung von 
              Kindern liegt beim begleitenden Erwachsenen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">9. Haftung</h2>
            <p className="text-sm">
              Das Unternehmen haftet für Schäden, die während der Beförderung durch 
              grobe Fahrlässigkeit oder Vorsatz entstehen. Die Haftung für leichte 
              Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig.
            </p>
            <p className="text-sm mt-2">
              Für im Fahrzeug vergessene Gegenstände wird keine Haftung übernommen. 
              Gefundene Gegenstände werden nach Möglichkeit aufbewahrt und können 
              abgeholt werden.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">10. Verhalten im Fahrzeug</h2>
            <p className="text-sm">
              Im Fahrzeug gilt ein Rauchverbot. Der Konsum von Alkohol und anderen 
              Substanzen ist nicht gestattet. Der Fahrer ist berechtigt, Fahrgäste 
              bei unangemessenem Verhalten von der Beförderung auszuschliessen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">11. Beschädigung des Fahrzeugs</h2>
            <p className="text-sm">
              Bei Beschädigungen oder Verschmutzungen des Fahrzeugs durch den Fahrgast 
              werden die Reinigungs- bzw. Reparaturkosten in Rechnung gestellt.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">12. Datenschutz</h2>
            <p className="text-sm">
              Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäss 
              unserer <Link href="/datenschutz" className="text-nova-gold hover:text-nova-gold-soft">Datenschutzerklärung</Link>.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">13. Anwendbares Recht und Gerichtsstand</h2>
            <p className="text-sm">
              Es gilt schweizerisches Recht. Gerichtsstand ist Schwyz.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">14. Salvatorische Klausel</h2>
            <p className="text-sm">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
              berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
            </p>
          </div>

          <p className="text-xs text-gray-500 pt-4">
            Stand: Februar 2025
          </p>
        </div>

        <nav className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/impressum" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Datenschutz
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
