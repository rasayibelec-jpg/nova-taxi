// In-memory sliding-window rate limiter.
// NOTE: Vercel serverless can spin up multiple isolated instances,
// so this is a best-effort per-instance limit. For strict global limits,
// swap in Upstash/Redis. Sufficient to blunt casual scripting/abuse.

const buckets = new Map();

/**
 * @param {string} key - identity key (e.g. IP address)
 * @param {number} limit - max requests within the window
 * @param {number} windowMs - window duration in milliseconds
 * @returns {{allowed: boolean, remaining: number, retryAfterMs: number}}
 */
export function rateLimit(key, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const arr = buckets.get(key) || [];
  const fresh = arr.filter((t) => now - t < windowMs);
  if (fresh.length >= limit) {
    const retryAfterMs = windowMs - (now - fresh[0]);
    buckets.set(key, fresh);
    return { allowed: false, remaining: 0, retryAfterMs };
  }
  fresh.push(now);
  buckets.set(key, fresh);
  // Cheap periodic cleanup to avoid unbounded growth
  if (buckets.size > 5_000) {
    for (const [k, v] of buckets) {
      if (v.every((t) => now - t >= windowMs)) buckets.delete(k);
    }
  }
  return { allowed: true, remaining: limit - fresh.length, retryAfterMs: 0 };
}

export function getClientIp(req) {
  const xf = req.headers.get("x-forwarded-for") || "";
  const ip = xf.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
  return ip;
}
