import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Nova Taxi",
  description: "Datenschutzerklärung von Nova Taxi – Informationen zum Umgang mit Ihren persönlichen Daten.",
};

export default function DatenschutzPage() {
  return (
    <section className="section-padding">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Rechtliches
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="space-y-6 text-gray-300">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address className="not-italic mt-2">
              <p>Nova Taxi</p>
              <p>Türlihof 4</p>
              <p>6414 Oberarth, Schweiz</p>
              <p>E-Mail: <a href="mailto:info@nova-taxi.com" className="text-nova-gold hover:text-nova-gold-soft">info@nova-taxi.com</a></p>
            </address>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">2. Erhebung und Verarbeitung von Daten</h2>
            <p className="text-sm">
              Beim Besuch unserer Website werden automatisch bestimmte Daten erfasst, 
              die Ihr Browser an unseren Server übermittelt (sogenannte Server-Logfiles). 
              Dies sind unter anderem: Browsertyp und -version, verwendetes Betriebssystem, 
              Referrer-URL (die zuvor besuchte Seite), Hostname des zugreifenden Rechners 
              (IP-Adresse), Uhrzeit der Serveranfrage.
            </p>
            <p className="text-sm mt-2">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen 
              ausschliesslich der statistischen Auswertung zur Verbesserung unseres Angebots.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">3. Kontaktaufnahme</h2>
            <p className="text-sm">
              Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, werden die von 
              Ihnen übermittelten Daten (z.B. Name, Telefonnummer, E-Mail-Adresse, Nachricht) 
              gespeichert, um Ihre Anfrage zu bearbeiten und eventuelle Rückfragen zu klären. 
              Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">4. Buchungsdaten</h2>
            <p className="text-sm">
              Bei der Buchung einer Fahrt erfassen wir folgende Daten:
            </p>
            <ul className="text-sm list-disc list-inside mt-2 space-y-1">
              <li>Name und Kontaktdaten (Telefonnummer, E-Mail)</li>
              <li>Abholadresse und Zieladresse</li>
              <li>Datum und Uhrzeit der Fahrt</li>
              <li>Anzahl der Passagiere</li>
              <li>Besondere Wünsche (z.B. Kindersitz)</li>
            </ul>
            <p className="text-sm mt-2">
              Diese Daten werden ausschliesslich zur Durchführung der gebuchten Dienstleistung 
              verwendet und nach Abschluss der Fahrt gemäss den gesetzlichen Aufbewahrungsfristen 
              gespeichert.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">5. Google Analytics</h2>
            <p className="text-sm">
              Diese Website nutzt Google Analytics, einen Webanalysedienst der Google LLC. 
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website 
              ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung 
              dieser Website werden in der Regel an einen Server von Google in den USA 
              übertragen und dort gespeichert.
            </p>
            <p className="text-sm mt-2">
              Wir haben die IP-Anonymisierung aktiviert, sodass Ihre IP-Adresse von Google 
              innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen 
              Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor 
              gekürzt wird.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">6. Cookies</h2>
            <p className="text-sm">
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf 
              Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Cookies richten 
              auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
            </p>
            <p className="text-sm mt-2">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
              informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von 
              Cookies für bestimmte Fälle oder generell ausschliessen sowie das automatische 
              Löschen der Cookies beim Schliessen des Browsers aktivieren.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">7. Ihre Rechte</h2>
            <p className="text-sm">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="text-sm list-disc list-inside mt-2 space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
              <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Die Löschung Ihrer Daten zu verlangen</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen</li>
              <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
              <li>Ihre Daten in einem übertragbaren Format zu erhalten</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">8. Datensicherheit</h2>
            <p className="text-sm">
              Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre 
              Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder 
              den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmassnahmen 
              werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">9. Änderung der Datenschutzerklärung</h2>
            <p className="text-sm">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets 
              den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
              Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
              Datenschutzerklärung.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">10. Kontakt bei Fragen</h2>
            <p className="text-sm">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <p className="mt-2">
              E-Mail: <a href="mailto:info@nova-taxi.com" className="text-nova-gold hover:text-nova-gold-soft">info@nova-taxi.com</a>
            </p>
            <p>
              Telefon: <a href="tel:+41766113131" className="text-nova-gold hover:text-nova-gold-soft">076 611 31 31</a>
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
