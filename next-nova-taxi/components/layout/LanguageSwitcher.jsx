"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ currentLocale }) {
  const pathname = usePathname();
  
  // Get the path without locale prefix
  const getPathWithoutLocale = () => {
    if (pathname.startsWith('/en/')) {
      return pathname.substring(3);
    } else if (pathname === '/en') {
      return '/';
    }
    return pathname;
  };
  
  const pathWithoutLocale = getPathWithoutLocale();
  
  // Generate links for each language
  const deLink = pathWithoutLocale === '/' ? '/' : pathWithoutLocale;
  const enLink = pathWithoutLocale === '/' ? '/en' : `/en${pathWithoutLocale}`;
  
  return (
    <div className="flex items-center gap-2 text-xs">
      <Link
        href={deLink}
        className={`px-2 py-1 rounded transition-colors ${
          currentLocale === 'de'
            ? 'bg-nova-gold text-black font-semibold'
            : 'text-gray-300 hover:text-white border border-white/20 hover:border-white/40'
        }`}
      >
        DE
      </Link>
      <Link
        href={enLink}
        className={`px-2 py-1 rounded transition-colors ${
          currentLocale === 'en'
            ? 'bg-nova-gold text-black font-semibold'
            : 'text-gray-300 hover:text-white border border-white/20 hover:border-white/40'
        }`}
      >
        EN
      </Link>
    </div>
  );
}
