// Resend transactional email sender.
// Server-only. Uses REST API directly (no SDK dependency).

export function isEmailApiConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendEmail({ to, subject, html, text, replyTo }) {
  const token = process.env.RESEND_API_KEY;
  if (!token) {
    throw new Error("RESEND_API_KEY not configured");
  }

  // Sender: use verified domain if configured, otherwise Resend sandbox.
  // NOTE: Resend sandbox (`onboarding@resend.dev`) can ONLY deliver to the
  // email you used to sign up. For real production, verify nova-taxi.com in
  // Resend dashboard and set SENDER_EMAIL to e.g. "no-reply@nova-taxi.com".
  const from = process.env.SENDER_EMAIL || "Nova Taxi <onboarding@resend.dev>";

  const recipients = Array.isArray(to) ? to : [to];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject,
      html,
      text,
      reply_to: replyTo,
    }),
    cache: "no-store",
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(`Resend ${res.status}: ${data?.message || JSON.stringify(data)}`);
    err.httpStatus = res.status;
    err.resendError = data;
    throw err;
  }
  return { id: data?.id || null, raw: data };
}
