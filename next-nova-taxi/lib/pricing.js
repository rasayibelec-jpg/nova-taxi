export const BASE_FEE_CHF = 6.60;
export const PER_KM_CHF = 4.20;

export function calculatePrice(distanceMeters) {
  const km = distanceMeters / 1000;
  const price = BASE_FEE_CHF + km * PER_KM_CHF;
  return Math.round(price * 20) / 20;
}

export async function fetchDistance(origin, destination) {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) throw new Error("GOOGLE_MAPS_API_KEY missing");

  const url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
  url.searchParams.set("origins", origin);
  url.searchParams.set("destinations", destination);
  url.searchParams.set("mode", "driving");
  url.searchParams.set("region", "ch");
  url.searchParams.set("language", "de");
  url.searchParams.set("key", key);

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) throw new Error(`Distance Matrix HTTP ${res.status}`);
  const data = await res.json();

  const element = data?.rows?.[0]?.elements?.[0];
  if (!element || element.status !== "OK") {
    throw new Error(`Distance not available (${element?.status || data.status})`);
  }

  return {
    distanceMeters: element.distance.value,
    distanceText: element.distance.text,
    durationSeconds: element.duration.value,
    durationText: element.duration.text,
  };
}
