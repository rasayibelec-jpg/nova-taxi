export const BASE_FEE_CHF = 6.60;
export const PER_KM_CHF = 4.20;

export function calculatePrice(distanceMeters) {
  const km = distanceMeters / 1000;
  const price = BASE_FEE_CHF + km * PER_KM_CHF;
  return Math.round(price * 20) / 20;
}

export async function fetchDistance(origin, destination) {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) {
    const err = new Error("GOOGLE_MAPS_API_KEY missing");
    err.code = "KEY_MISSING";
    throw err;
  }

  const url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
  url.searchParams.set("origins", origin);
  url.searchParams.set("destinations", destination);
  url.searchParams.set("mode", "driving");
  url.searchParams.set("region", "ch");
  url.searchParams.set("language", "de");
  url.searchParams.set("key", key);

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) {
    const err = new Error(`Distance Matrix HTTP ${res.status}`);
    err.code = "HTTP_ERROR";
    err.httpStatus = res.status;
    throw err;
  }
  const data = await res.json();

  // Top-level API errors (REQUEST_DENIED, INVALID_REQUEST, OVER_QUERY_LIMIT ...)
  if (data.status && data.status !== "OK") {
    const err = new Error(
      `Google Maps: ${data.status}${data.error_message ? " - " + data.error_message : ""}`
    );
    err.code = data.status;
    err.googleMessage = data.error_message || null;
    throw err;
  }

  const element = data?.rows?.[0]?.elements?.[0];
  if (!element || element.status !== "OK") {
    const err = new Error(`Distance not available (${element?.status || "NO_ELEMENT"})`);
    err.code = element?.status || "NO_ELEMENT";
    throw err;
  }

  return {
    distanceMeters: element.distance.value,
    distanceText: element.distance.text,
    durationSeconds: element.duration.value,
    durationText: element.duration.text,
  };
}
