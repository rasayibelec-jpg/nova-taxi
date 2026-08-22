// WhatsApp Business Cloud API (Meta Graph API) sender.
// Server-only. Never expose these credentials to the browser.

const API_VERSION = process.env.WHATSAPP_API_VERSION || "v20.0";

export function isWhatsAppApiConfigured() {
  return Boolean(process.env.WHATSAPP_API_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID);
}

function normalizePhone(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (!digits) return "";
  // If it starts with 0 (Swiss local format), assume CH → prepend 41
  const intl = digits.startsWith("0") ? "41" + digits.substring(1) : digits;
  return "+" + intl;
}

async function callGraph(payload) {
  const token = process.env.WHATSAPP_API_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phoneNumberId) {
    throw new Error("WHATSAPP_API_TOKEN or WHATSAPP_PHONE_NUMBER_ID not configured");
  }
  const url = `https://graph.facebook.com/${API_VERSION}/${phoneNumberId}/messages`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(
      `WhatsApp API ${res.status}: ${data?.error?.message || JSON.stringify(data)}`
    );
    err.httpStatus = res.status;
    err.metaError = data?.error || null;
    err.metaErrorCode = data?.error?.code ?? null;
    throw err;
  }
  return data;
}

export async function sendWhatsAppText(toPhone, body) {
  const to = normalizePhone(toPhone);
  if (!to) throw new Error("Invalid recipient phone");
  return callGraph({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to,
    type: "text",
    text: { preview_url: false, body: String(body || "").slice(0, 4096) },
  });
}

export async function sendWhatsAppTemplate(toPhone, templateName, languageCode, bodyParams = []) {
  const to = normalizePhone(toPhone);
  if (!to) throw new Error("Invalid recipient phone");
  return callGraph({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to,
    type: "template",
    template: {
      name: templateName,
      language: { code: languageCode || "de" },
      components: bodyParams.length
        ? [
            {
              type: "body",
              parameters: bodyParams.map((v) => ({ type: "text", text: String(v) })),
            },
          ]
        : undefined,
    },
  });
}

/**
 * Try to send a freeform text (works within the 24h customer service window).
 * If we get error 131047 (window closed) AND a template is configured,
 * fall back to the approved template.
 * Returns { mode: "text"|"template", wamid, raw } on success; throws on failure.
 */
export async function sendCustomerMessage(toPhone, body, templateFallback = null) {
  try {
    const data = await sendWhatsAppText(toPhone, body);
    return {
      mode: "text",
      wamid: data?.messages?.[0]?.id || null,
      raw: data,
    };
  } catch (err) {
    const code = err?.metaErrorCode;
    const windowClosed = code === 131047 || code === 131026;
    if (
      windowClosed &&
      templateFallback?.name &&
      Array.isArray(templateFallback.params)
    ) {
      const data = await sendWhatsAppTemplate(
        toPhone,
        templateFallback.name,
        templateFallback.language || "de",
        templateFallback.params
      );
      return {
        mode: "template",
        wamid: data?.messages?.[0]?.id || null,
        raw: data,
      };
    }
    throw err;
  }
}
