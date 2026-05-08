"use client";

import { trackPhoneCall } from "@/lib/googleAdsConversions";

export default function PhoneButton({ 
  children, 
  className = "",
  variant = "primary" 
}) {
  const handleClick = () => {
    trackPhoneCall();
  };

  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors min-h-[48px]";
  
  const variants = {
    primary: "bg-nova-gold px-7 py-4 text-sm text-black hover:bg-nova-gold-soft",
    secondary: "border-2 border-white/40 px-7 py-4 text-sm text-white hover:bg-white/10",
    large: "bg-nova-gold px-8 py-5 text-lg font-bold text-black hover:bg-nova-gold-soft min-h-[56px]",
  };

  return (
    <a
      href="tel:+41766113131"
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      data-testid="phone-button"
    >
      {children || "076 611 31 31"}
    </a>
  );
}
