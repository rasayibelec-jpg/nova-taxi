import Link from "next/link";

export const metadata = {
  robots: { index: false, follow: false },
  title: "Setup Guide – Nova Taxi Admin",
};

export default function AdminSetupPage() {
  return (
    <div className="section-padding">
      <div className="container max-w-3xl mx-auto py-10 space-y-8" data-testid="admin-setup-page">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Setup Guide</h1>
          <Link
            href="/admin/bookings"
            className="text-xs text-gray-400 hover:text-white border border-white/10 rounded-full px-3 py-2"
          >
            ← Zurück zum Panel
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Diese Anleitung zeigt Schritt für Schritt, wie Sie die drei fehlenden Meta / WhatsApp-Zugänge
          einrichten. Danach werden Bestätigungen automatisch aus der Nova&nbsp;Taxi WhatsApp-Business-Nummer versendet.
        </p>

        {/* Section 1: Meta Business + WhatsApp */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">1. WhatsApp Business Cloud API aktivieren</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-200 marker:text-nova-gold">
            <li>
              Öffnen Sie{" "}
              <a
                href="https://developers.facebook.com/apps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nova-gold underline"
              >
                developers.facebook.com/apps
              </a>{" "}
              und klicken Sie auf <strong>„Create App"</strong>.
            </li>
            <li>
              Wählen Sie den Anwendungsfall <strong>„Other"</strong> → App-Typ{" "}
              <strong>„Business"</strong>. Vergeben Sie einen Namen wie <code>Nova Taxi Prod</code>.
            </li>
            <li>
              Unter „Add products to your app" wählen Sie <strong>WhatsApp</strong> → <strong>Set up</strong>.
            </li>
            <li>
              Wählen Sie das WhatsApp Business Account (WABA) aus – oder erstellen Sie eines.
            </li>
            <li>
              Öffnen Sie in der linken Seitenleiste <strong>WhatsApp → API Setup</strong>. Notieren Sie:
              <ul className="list-disc list-inside ml-6 mt-1 text-gray-400">
                <li><strong>Phone number ID</strong> (nicht die sichtbare Nummer!)</li>
                <li><strong>WhatsApp Business Account ID</strong> (WABA ID)</li>
              </ul>
            </li>
            <li>
              Verifizieren Sie die Business-Telefonnummer per SMS oder Anruf.
            </li>
          </ol>
        </section>

        {/* Section 2: Permanent token */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">2. Dauerhaften API-Token erstellen</h2>
          <p className="text-sm text-gray-400">
            Der Test-Token aus dem Dashboard läuft nach 24 h ab. Für den Live-Betrieb brauchen Sie einen
            <strong> System-User-Token</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-200 marker:text-nova-gold">
            <li>
              Öffnen Sie{" "}
              <a
                href="https://business.facebook.com/settings/system-users"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nova-gold underline"
              >
                Business Settings → System Users
              </a>{" "}
              → <strong>„Add"</strong> → Name z.B. <code>nova-taxi-api</code>, Rolle <strong>Admin</strong>.
            </li>
            <li>
              Beim erstellten System-User: <strong>„Add Assets"</strong> → <strong>Apps</strong> →
              Nova Taxi App auswählen → <strong>„Manage app"</strong> aktivieren.
            </li>
            <li>
              Wieder bei „Add Assets" → <strong>WhatsApp Accounts</strong> → Ihr WABA auswählen →
              <strong>„Manage phone numbers" + „Manage WhatsApp business account"</strong> aktivieren.
            </li>
            <li>
              Beim System-User oben: <strong>„Generate New Token"</strong> → App auswählen →
              <strong> Token expiration: Never</strong> → Berechtigungen anhaken:
              <ul className="list-disc list-inside ml-6 mt-1 text-gray-400">
                <li><code>whatsapp_business_messaging</code></li>
                <li><code>whatsapp_business_management</code></li>
              </ul>
              → <strong>Generate</strong> → Token <em>sofort</em> kopieren (wird nur einmal angezeigt).
            </li>
          </ol>
        </section>

        {/* Section 3: Vercel env vars */}
        <section className="rounded-2xl border border-nova-gold/40 bg-nova-gold/5 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">3. Auf Vercel eintragen</h2>
          <p className="text-sm text-gray-300">
            <strong>Vercel Dashboard</strong> → Nova Taxi → <strong>Settings → Environment Variables</strong>.
            Für jede Variable auf <strong>Add New</strong> klicken, Production+Preview+Development ankreuzen:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 border-b border-white/10">
                <tr>
                  <th className="py-2 pr-4">Key</th>
                  <th className="py-2">Value</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 [&_td]:py-2 [&_td]:pr-4 [&_code]:text-nova-gold">
                <tr className="border-b border-white/5">
                  <td><code>WHATSAPP_API_TOKEN</code></td>
                  <td className="text-gray-400">der System-User-Token aus Schritt 2</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td><code>WHATSAPP_PHONE_NUMBER_ID</code></td>
                  <td className="text-gray-400">15-16-stellige ID aus Schritt 1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td><code>WHATSAPP_BUSINESS_ACCOUNT_ID</code></td>
                  <td className="text-gray-400">WABA-ID aus Schritt 1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td><code>WHATSAPP_WEBHOOK_VERIFY_TOKEN</code></td>
                  <td className="text-gray-400">frei wählbarer Random-String, z.B. <code>nova-webhook-2026</code></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td><code>WHATSAPP_APP_SECRET</code> <span className="text-[10px] text-gray-500">(empfohlen)</span></td>
                  <td className="text-gray-400">App-Secret aus <strong>App Settings → Basic</strong> (Meta App-Dashboard). Absichert Webhook gegen gefälschte Anfragen.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td><code>WHATSAPP_TEMPLATE_NAME</code> <span className="text-[10px] text-gray-500">(optional)</span></td>
                  <td className="text-gray-400"><code>nova_taxi_decision</code> (siehe Schritt 4)</td>
                </tr>
                <tr>
                  <td><code>WHATSAPP_TEMPLATE_LANGUAGE</code> <span className="text-[10px] text-gray-500">(optional)</span></td>
                  <td className="text-gray-400"><code>de</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Danach: <strong>Deployments → ⋯ → Redeploy</strong> (Use existing Build Cache <em>deaktivieren</em>).
          </p>
        </section>

        {/* Section 5: Resend email */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">5. Email-Benachrichtigungen via Resend</h2>
          <p className="text-sm text-gray-400">
            Damit Sie bei jeder neuen Bestellung <strong>auch per E-Mail</strong> an <code>info@nova-taxi.com</code> benachrichtigt werden:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-200 marker:text-nova-gold">
            <li>
              Auf{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nova-gold underline"
              >
                resend.com
              </a>{" "}
              registrieren (kostenloser Plan: 3'000 Mails/Monat).
            </li>
            <li>
              <strong>API Keys → Create API Key</strong> → Name z.B. <code>nova-taxi-prod</code> →
              Permission <strong>„Sending access"</strong> → <strong>Add</strong>. Den Schlüssel
              (<code>re_…</code>) sofort kopieren.
            </li>
            <li>
              <strong>Domains → Add Domain → nova-taxi.com</strong>. Resend zeigt Ihnen 3 DNS-Records
              (MX/SPF + 2× DKIM). Fügen Sie diese im DNS-Panel Ihres Domain-Anbieters ein und warten
              Sie 5-15 min auf „Verified" (grüner Haken).
            </li>
            <li>
              <strong>Auf Vercel</strong> → Environment Variables → hinzufügen (Prod+Preview+Dev):
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-sm">
                  <tbody className="text-gray-200 [&_td]:py-1.5 [&_td]:pr-4 [&_code]:text-nova-gold">
                    <tr>
                      <td><code>RESEND_API_KEY</code></td>
                      <td className="text-gray-400">der <code>re_…</code>-Schlüssel</td>
                    </tr>
                    <tr>
                      <td><code>ADMIN_EMAIL</code></td>
                      <td className="text-gray-400"><code>info@nova-taxi.com</code></td>
                    </tr>
                    <tr>
                      <td><code>SENDER_EMAIL</code></td>
                      <td className="text-gray-400">
                        <code>Nova Taxi &lt;no-reply@nova-taxi.com&gt;</code> (nach Verifizierung)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <strong>Redeploy</strong>. Danach unter <a href="/api/pricing/diag" target="_blank" rel="noopener noreferrer" className="text-nova-gold underline">/api/pricing/diag</a>{" "}
              prüfen: <code>RESEND_API_KEY_present: true</code>.
            </li>
          </ol>
          <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-3 text-xs text-amber-200">
            <strong>Tipp:</strong> Zum Test vor der Domain-Verifizierung können Sie
            {" "}<code>SENDER_EMAIL</code> weglassen — dann sendet Resend über
            {" "}<code>onboarding@resend.dev</code>. Aber Achtung: In diesem Sandbox-Modus kommen die
            Mails nur bei der E-Mail-Adresse an, mit der Sie sich bei Resend registriert haben.
          </div>
        </section>

        {/* Section 4: Webhook + template */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Webhook + Template (empfohlen)
          </h2>
          <p className="text-sm text-gray-400">
            Ohne diese zwei Punkte funktioniert der Auto-Versand innerhalb 24 h nach Kundenkontakt, aber:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 marker:text-nova-gold">
            <li>
              <strong>Webhook</strong> → App-Dashboard → <strong>WhatsApp → Configuration → Callback URL</strong>:
              <br />
              <code className="text-nova-gold break-all">
                https://www.nova-taxi.com/api/whatsapp/webhook
              </code>
              <br />
              <strong>Verify token</strong>: derselbe Wert wie <code>WHATSAPP_WEBHOOK_VERIFY_TOKEN</code>.
              <br />
              Danach unter „Webhook fields" <strong>messages</strong> abonnieren – dann sehen Sie im Admin-Panel
              <strong> „✓✓ zugestellt / gelesen"</strong> statt nur <strong>„✓ akzeptiert"</strong>.
            </li>
            <li>
              <strong>Template</strong> → WhatsApp Manager → <strong>Message Templates → Create Template</strong>:
              <ul className="list-disc list-inside ml-6 text-gray-400 mt-1">
                <li>Name: <code>nova_taxi_decision</code></li>
                <li>Category: <strong>Utility</strong></li>
                <li>Language: <strong>Deutsch (de)</strong></li>
                <li>
                  Body: <code className="text-nova-gold">{`{{1}}`}</code> (ein einziger Text-Parameter)
                </li>
                <li>Sample: <code>Nova Taxi – Ihre Bestellung wurde bestätigt.</code></li>
              </ul>
              Nach Meta-Freigabe (ca. 15-30 min) unter Vercel-Env <code>WHATSAPP_TEMPLATE_NAME=nova_taxi_decision</code> eintragen.
            </li>
          </ul>
        </section>

        {/* Section 5: verification */}
        <section className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6 space-y-3">
          <h2 className="text-xl font-semibold text-white">5. Verifizieren</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-200 marker:text-emerald-400">
            <li>
              Öffnen Sie{" "}
              <a
                href="/api/pricing/diag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nova-gold underline"
              >
                /api/pricing/diag
              </a>{" "}
              – <code>WHATSAPP_API_TOKEN_present</code> und <code>WHATSAPP_PHONE_NUMBER_ID_present</code> müssen <strong>true</strong> sein.
            </li>
            <li>Eine Test-Bestellung aufgeben.</li>
            <li>
              Im Panel <strong>✓ Annehmen</strong> klicken → grüner Toast „automatisch gesendet" erscheint und der Kunde bekommt die Nachricht direkt aus der Business-Nummer.
            </li>
          </ol>
        </section>

        <p className="text-xs text-gray-500 text-center pt-4">
          Bei Problemen: {"/api/pricing/diag"}-Ausgabe teilen — die Diagnose zeigt genau, was fehlt.
        </p>
      </div>
    </div>
  );
}
