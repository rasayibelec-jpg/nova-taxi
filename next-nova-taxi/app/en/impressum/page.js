import Link from "next/link";

export const metadata = {
  title: "Imprint | Nova Taxi",
  description: "Imprint and legal information of Nova Taxi – Your reliable taxi service in Central Switzerland.",
};

export default function ImprintPage() {
  return (
    <section className="section-padding">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Imprint
          </h1>
        </div>

        <div className="space-y-6 text-gray-300">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Contact Address</h2>
            <address className="not-italic">
              <p>Nova Taxi</p>
              <p>Türlihof 4</p>
              <p>6414 Oberarth</p>
              <p>Switzerland</p>
            </address>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>Phone: <a href="tel:+41766113131" className="text-nova-gold hover:text-nova-gold-soft">+41 76 611 31 31</a></p>
            <p>Email: <a href="mailto:info@nova-taxi.com" className="text-nova-gold hover:text-nova-gold-soft">info@nova-taxi.com</a></p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Authorized Representative</h2>
            <p>Owner: [Name on request]</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Commercial Register Entry</h2>
            <p>Registered Company Name: Nova Taxi</p>
            <p>Commercial Register: Canton Schwyz</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">VAT Number</h2>
            <p>CHE-XXX.XXX.XXX VAT</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Disclaimer</h2>
            <p className="text-sm">
              The author assumes no warranty for the correctness, accuracy, timeliness, 
              reliability and completeness of the information. Liability claims against 
              the author for material or immaterial damages resulting from access to or 
              use or non-use of the published information, through misuse of the connection 
              or through technical failures are excluded.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Liability for Links</h2>
            <p className="text-sm">
              References and links to third party websites are outside our area of 
              responsibility. Any responsibility for such websites is rejected. Access 
              to and use of such websites is at the user's own risk.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Copyrights</h2>
            <p className="text-sm">
              The copyright and all other rights to content, images, photos or other files 
              on the website belong exclusively to Nova Taxi or the specifically named 
              rights holders. Written consent from the copyright holders must be obtained 
              in advance for the reproduction of any elements.
            </p>
          </div>
        </div>

        <nav className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/en/datenschutz" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Privacy Policy
            </Link>
            <Link href="/en/agb" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Terms & Conditions
            </Link>
            <Link href="/en/kontakt" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Contact
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
