import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Nova Taxi",
  description: "General Terms and Conditions of Nova Taxi – Taxi service in Central Switzerland.",
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-6 text-gray-300">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">1. Scope</h2>
            <p className="text-sm">
              These General Terms and Conditions apply to all transportation services 
              provided by Nova Taxi (hereinafter "Company"). By booking a ride, the 
              passenger accepts these conditions.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">2. Scope of Services</h2>
            <p className="text-sm">
              The Company provides passenger transportation services within the taxi 
              industry. These include in particular:
            </p>
            <ul className="text-sm list-disc list-inside mt-2 space-y-1">
              <li>City and regional rides</li>
              <li>Airport transfers (Zurich, Basel)</li>
              <li>Train station transfers</li>
              <li>Business rides and VIP service</li>
              <li>Courier services</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">3. Booking and Contract</h2>
            <p className="text-sm">
              A booking can be made by phone, email or WhatsApp. The transportation 
              contract is concluded when the booking is confirmed by the Company.
            </p>
            <p className="text-sm mt-2">
              For advance bookings, the following information is required: name, phone 
              number, pickup address, destination, date and time.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">4. Prices and Payment</h2>
            <p className="text-sm">
              Prices are based on the distance traveled, time of day and special 
              requirements. For advance bookings, a fixed price can be agreed upon 
              on request.
            </p>
            <p className="text-sm mt-2">
              Accepted payment methods: Cash, credit cards (Visa, Mastercard), debit 
              cards, Twint. Corporate clients can pay by invoice (by arrangement).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">5. Cancellation and Changes</h2>
            <p className="text-sm">
              Bookings can be cancelled free of charge up to 2 hours before the 
              scheduled pickup time. For later cancellations or no-shows, a 
              cancellation fee may be charged.
            </p>
            <p className="text-sm mt-2">
              Changes to the booking (e.g. time, address) will be accommodated where 
              possible and should be communicated as early as possible.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">6. Waiting Time</h2>
            <p className="text-sm">
              For advance bookings, the driver waits up to 15 minutes after the agreed 
              pickup time. For airport pickups, we wait for the actual arrival time of 
              the flight (flight monitoring). Longer waiting times may be charged 
              additionally.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">7. Luggage</h2>
            <p className="text-sm">
              Normal travel luggage is included in the fare. Bulky or unusually large 
              luggage must be specified when booking. The Company reserves the right to 
              refuse to transport items that could damage the vehicle.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">8. Child Seats</h2>
            <p className="text-sm">
              Child seats are available on request and should be specified when booking. 
              The responsibility for correctly securing children lies with the 
              accompanying adult.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">9. Liability</h2>
            <p className="text-sm">
              The Company is liable for damages occurring during transportation due to 
              gross negligence or intent. Liability for slight negligence is excluded 
              to the extent permitted by law.
            </p>
            <p className="text-sm mt-2">
              No liability is assumed for items left in the vehicle. Found items will 
              be kept where possible and can be collected.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">10. Behavior in the Vehicle</h2>
            <p className="text-sm">
              Smoking is prohibited in the vehicle. The consumption of alcohol and 
              other substances is not permitted. The driver is entitled to exclude 
              passengers from transportation in case of inappropriate behavior.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">11. Vehicle Damage</h2>
            <p className="text-sm">
              In case of damage or contamination of the vehicle by the passenger, 
              cleaning or repair costs will be charged.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">12. Data Protection</h2>
            <p className="text-sm">
              The collection and processing of personal data is carried out in accordance 
              with our <Link href="/en/datenschutz" className="text-nova-gold hover:text-nova-gold-soft">Privacy Policy</Link>.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">13. Applicable Law and Jurisdiction</h2>
            <p className="text-sm">
              Swiss law applies. The place of jurisdiction is Schwyz.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">14. Severability Clause</h2>
            <p className="text-sm">
              Should individual provisions of these Terms and Conditions be or become 
              invalid, this does not affect the validity of the remaining provisions.
            </p>
          </div>

          <p className="text-xs text-gray-500 pt-4">
            Last updated: February 2025
          </p>
        </div>

        <nav className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/en/impressum" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Imprint
            </Link>
            <Link href="/en/datenschutz" className="text-gray-300 hover:text-nova-gold transition-colors">
              → Privacy Policy
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
