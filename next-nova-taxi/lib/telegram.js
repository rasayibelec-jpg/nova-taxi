// Telegram Bot API sender for admin notifications.
// Server-only. Uses the REST API directly (no SDK).

export function isTelegramApiConfigured() {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
}

/**
 * Send a plain-text message to the configured Telegram chat.
 * @param {string} text  message body (Telegram allows up to 4096 chars)
 * @param {object} [options]
 * @param {"HTML"|"MarkdownV2"} [options.parseMode]
 * @param {boolean} [options.disableWebPagePreview]
 * @param {string} [options.chatId]  override default chat id
 */
export async function sendTelegramMessage(text, options = {}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const defaultChat = process.env.TELEGRAM_CHAT_ID;
  if (!token) throw new Error("TELEGRAM_BOT_TOKEN not configured");
  const chatId = options.chatId || defaultChat;
  if (!chatId) throw new Error("TELEGRAM_CHAT_ID not configured");

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: String(text || "").slice(0, 4096),
    disable_web_page_preview: options.disableWebPagePreview ?? false,
  };
  if (options.parseMode) payload.parse_mode = options.parseMode;

  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 10_000);
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: ac.signal,
    });
  } finally {
    clearTimeout(timer);
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data?.ok === false) {
    const err = new Error(
      `Telegram ${res.status}: ${data?.description || data?.error_code || JSON.stringify(data)}`
    );
    err.httpStatus = res.status;
    err.telegramError = data;
    throw err;
  }
  return { messageId: data?.result?.message_id || null, raw: data };
}
