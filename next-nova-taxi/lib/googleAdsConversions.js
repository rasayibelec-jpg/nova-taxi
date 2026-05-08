// Google Ads Conversion Tracking Utilities
// Conversion ID 1: AW-17950187146
// Conversion ID 2: AW-11210946531

const GOOGLE_ADS_ID_1 = "AW-17950187146";
const GOOGLE_ADS_ID_2 = "AW-11210946531";

// Conversion Labels for ID 1
const CONVERSION_LABELS_1 = {
  PAGE_VIEW: "gXcWCL7Zz5AcEtlQq09C",      // Seitenaufruf
  LEAD_FORM: "GbuaCMHZz5AcEtlQq09C",       // Lead-Formular senden
  APPOINTMENT: "8EhaCMTZz5AcEtlQq09C",     // Termin vereinbaren (Telefon/WhatsApp)
  REQUEST_QUOTE: "vtBCpCMfZz5AcEtlQq09C",  // Angebot anfordern
};

// Conversion Labels for ID 2
const CONVERSION_LABELS_2 = {
  APPOINTMENT: "v-TxCKnwxJAZEOPv5eEp",     // Termin vereinbaren
};

// Track conversion event for both IDs
export function trackConversion(conversionType) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    // Track for ID 1
    const label1 = CONVERSION_LABELS_1[conversionType];
    if (label1) {
      window.gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID_1}/${label1}`,
      });
      console.log(`[Google Ads ID1] Conversion tracked: ${conversionType}`);
    }
    
    // Track for ID 2
    const label2 = CONVERSION_LABELS_2[conversionType];
    if (label2) {
      window.gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID_2}/${label2}`,
      });
      console.log(`[Google Ads ID2] Conversion tracked: ${conversionType}`);
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
