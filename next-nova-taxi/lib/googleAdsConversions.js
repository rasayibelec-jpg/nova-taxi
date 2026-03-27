// Google Ads Conversion Tracking Utilities
// Conversion ID: AW-17950187146

const GOOGLE_ADS_ID = "AW-17950187146";

// Conversion Labels
const CONVERSION_LABELS = {
  PAGE_VIEW: "gXcWCL7Zz5AcEtlQq09C",      // Seitenaufruf
  LEAD_FORM: "GbuaCMHZz5AcEtlQq09C",       // Lead-Formular senden
  APPOINTMENT: "8EhaCMTZz5AcEtlQq09C",     // Termin vereinbaren (Telefon/WhatsApp)
  REQUEST_QUOTE: "vtBCpCMfZz5AcEtlQq09C",  // Angebot anfordern
};

// Track conversion event
export function trackConversion(conversionType) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const label = CONVERSION_LABELS[conversionType];
    if (label) {
      window.gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${label}`,
      });
      console.log(`[Google Ads] Conversion tracked: ${conversionType}`);
    }
  }
}

// Track phone call (Termin vereinbaren)
export function trackPhoneCall() {
  trackConversion("APPOINTMENT");
}

// Track WhatsApp click (Termin vereinbaren)
export function trackWhatsAppClick() {
  trackConversion("APPOINTMENT");
}

// Track lead form submission
export function trackLeadFormSubmit() {
  trackConversion("LEAD_FORM");
}

// Track quote request
export function trackQuoteRequest() {
  trackConversion("REQUEST_QUOTE");
}

export default {
  trackConversion,
  trackPhoneCall,
  trackWhatsAppClick,
  trackLeadFormSubmit,
  trackQuoteRequest,
};
