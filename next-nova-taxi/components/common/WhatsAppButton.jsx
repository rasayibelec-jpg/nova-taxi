"use client";

import { trackWhatsAppClick } from "@/lib/googleAdsConversions";

export default function WhatsAppButton({ 
  children, 
  className = "",
  message = "Hallo, ich möchte eine Fahrt buchen.",
  variant = "primary" 
}) {
  const handleClick = () => {
    trackWhatsAppClick();
  };

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/41766113131?text=${encodedMessage}`;

  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors min-h-[48px]";
  
  const variants = {
    primary: "bg-green-600 px-7 py-4 text-sm text-white hover:bg-green-500",
    large: "bg-green-600 px-8 py-5 text-lg font-bold text-white hover:bg-green-500 min-h-[56px]",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      data-testid="whatsapp-button"
    >
      {children || "WhatsApp"}
    </a>
  );
}
