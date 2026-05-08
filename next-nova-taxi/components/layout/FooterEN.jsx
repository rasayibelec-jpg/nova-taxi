import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function FooterEN() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container py-10 grid gap-8 md:grid-cols-4 text-sm text-gray-300">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Nova Taxi
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Modern taxi service focused on punctuality, comfort and personal
            service throughout Central Switzerland.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Contact
          </h3>
          <div className="space-y-1 text-xs">
            <p>Nova Taxi</p>
            <p>Türlihof 4</p>
            <p>6414 Oberarth, Schwyz</p>
            <a
              href="tel:+41766113131"
              className="block hover:text-white transition-colors"
            >
              Phone: 076 611 31 31
            </a>
            <a
              href="mailto:info@nova-taxi.com"
              className="block hover:text-white transition-colors"
            >
              Email: info@nova-taxi.com
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Legal
          </h3>
          <div className="flex flex-col space-y-1 text-xs">
            <Link href="/en/impressum" className="hover:text-white transition-colors">
              Imprint
            </Link>
            <Link href="/en/datenschutz" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/en/agb" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Language
          </h3>
          <LanguageSwitcher currentLocale="en" />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-[11px] text-center text-gray-500">
        © {new Date().getFullYear()} Nova Taxi. All rights reserved.
      </div>
    </footer>
  );
}
