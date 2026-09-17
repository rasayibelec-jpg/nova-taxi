// Shared server-side helpers for admin authentication and HTML escaping.
// Uses timing-safe comparison to avoid side-channel leaks.

import { timingSafeEqual } from "crypto";

export function isAdminAuthorized(req) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  const provided = req.headers.get("x-admin-key") || "";
  return timingSafeEq(provided, expected);
}

/**
 * Constant-time string comparison. Length mismatch still runs a compare to
 * avoid short-circuit timing differences.
 */
export function timingSafeEq(a, b) {
  const aBuf = Buffer.from(String(a || ""));
  const bBuf = Buffer.from(String(b || ""));
  // Pad the shorter buffer so lengths match; result must still be false if lengths differ
  const len = Math.max(aBuf.length, bBuf.length, 1);
  const aPad = Buffer.alloc(len);
  const bPad = Buffer.alloc(len);
  aBuf.copy(aPad);
  bBuf.copy(bPad);
  const eq = timingSafeEqual(aPad, bPad);
  return eq && aBuf.length === bBuf.length;
}

/** Escape HTML special characters for safe interpolation into email/HTML. */
export function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
