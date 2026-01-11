export const metadata = {
  title: "Contact | Nova Taxi",
  description:
    "Contact Nova Taxi – available 24/7 for rides, inquiries and offers in Central Switzerland.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en/kontakt",
    languages: {
      'de': 'https://www.nova-taxi.com/kontakt',
      'en': 'https://www.nova-taxi.com/en/kontakt',
    },
  },
};

export default function ContactPageEN() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            How to reach Nova Taxi.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Whether immediate ride, planned booking or general inquiry – we're
            happy to help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Contact Options
            </h2>
            <p>
              <strong>Phone:</strong> 076 611 31 31
            </p>
            <p>
              <strong>Email:</strong> info@nova-taxi.com
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              Nova Taxi
              <br />
              Türlihof 4
              <br />
              6414 Oberarth, Schwyz
            </p>
          </div>

          <div className="space-y-3 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Email Inquiry
            </h2>
            <p>
              For booking requests, you can provide us with the following
              information:
            </p>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>• Date and time</li>
              <li>• Pickup and destination</li>
              <li>• Number of passengers</li>
              <li>• Special requirements (e.g., lots of luggage, child seat, etc.)</li>
            </ul>
            <p className="text-xs text-gray-400 pt-2">
              We'll get back to you as soon as possible with a response or
              price estimate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
