"use client";

import { useEffect, useRef, useState } from "react";

// Static mock suggestions for development (avoids billable Google API calls).
// Enable with NEXT_PUBLIC_MOCK_PLACES=1
const MOCK_SUGGESTIONS = [
  "Bahnhof Arth-Goldau, 6410 Goldau, Schweiz",
  "Bahnhof Luzern, 6003 Luzern, Schweiz",
  "Flughafen Zürich, 8058 Zürich-Flughafen, Schweiz",
  "Bahnhof Zug, 6300 Zug, Schweiz",
  "Bahnhof Schwyz, 6440 Schwyz, Schweiz",
  "Türlihof 4, 6414 Oberarth, Schweiz",
  "Weggis, 6353 Weggis, Schweiz",
  "Vitznau, 6354 Vitznau, Schweiz",
];

export default function AddressAutocomplete({ value, onChange, placeholder, testId }) {
  const inputRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [mockOpen, setMockOpen] = useState(false);

  const useMock = process.env.NEXT_PUBLIC_MOCK_PLACES === "1";

  // Load the Google Maps Places script once (skipped in mock mode)
  useEffect(() => {
    if (useMock) return;
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!key) return;

    if (window.google?.maps?.places) {
      setLoaded(true);
      return;
    }

    const existing = document.getElementById("google-maps-places-script");
    if (existing) {
      existing.addEventListener("load", () => setLoaded(true));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-places-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&language=de&region=CH`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, [useMock]);

  // Attach Autocomplete widget with cost-optimised fields (Basic Data tier only).
  //
  // Cost notes:
  // - fields limited to Basic Data ONLY: formatted_address, geometry, place_id.
  //   We intentionally drop `name`, opening_hours, photos, rating, reviews, etc.
  //   (those move billing into the Atmosphere/Contact tiers ~6× more expensive).
  // - The widget automatically manages the Autocomplete session token,
  //   bundling predictions + the (implicit) details fetch into ONE billable
  //   session, provided the requested fields stay in Basic Data.
  useEffect(() => {
    if (useMock) return;
    if (!loaded || !inputRef.current) return;
    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: ["ch", "de", "at", "li"] },
      fields: ["formatted_address", "geometry", "place_id"],
      types: ["geocode"],
    });
    const listener = ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      const label = place.formatted_address || inputRef.current.value;
      if (label) onChange(label);
    });
    return () => window.google?.maps?.event?.removeListener?.(listener);
  }, [loaded, onChange, useMock]);

  // --- Mock mode (development only) --------------------------------------
  if (useMock) {
    const q = (value || "").toLowerCase().trim();
    const filtered = q.length >= 2
      ? MOCK_SUGGESTIONS.filter((s) => s.toLowerCase().includes(q))
      : MOCK_SUGGESTIONS;

    return (
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setMockOpen(true);
          }}
          onFocus={() => setMockOpen(true)}
          onBlur={() => setTimeout(() => setMockOpen(false), 150)}
          placeholder={placeholder}
          data-testid={testId}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-2 focus:ring-nova-gold/30"
          style={{ color: "#000000", backgroundColor: "#FFFFFF" }}
          autoComplete="off"
        />
        {mockOpen && filtered.length > 0 && (
          <ul className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg max-h-60 overflow-auto">
            {filtered.slice(0, 6).map((s) => (
              <li
                key={s}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange(s);
                  setMockOpen(false);
                }}
                className="px-3 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
              >
                {s}
              </li>
            ))}
            <li className="px-3 py-1 text-[10px] text-gray-400 border-t border-gray-100 italic">
              MOCK MODE (NEXT_PUBLIC_MOCK_PLACES=1)
            </li>
          </ul>
        )}
      </div>
    );
  }

  // --- Real Google Autocomplete ------------------------------------------
  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      data-testid={testId}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-2 focus:ring-nova-gold/30"
      style={{ color: "#000000", backgroundColor: "#FFFFFF" }}
      autoComplete="off"
    />
  );
}
