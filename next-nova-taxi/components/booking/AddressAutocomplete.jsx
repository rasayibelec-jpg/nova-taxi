"use client";

import { useEffect, useRef, useState } from "react";

export default function AddressAutocomplete({ value, onChange, placeholder, testId }) {
  const inputRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (!loaded || !inputRef.current) return;
    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: ["ch", "de", "at", "li"] },
      fields: ["formatted_address", "name", "geometry"],
      types: ["geocode", "establishment"],
    });
    const listener = ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      const label = place.formatted_address || place.name || inputRef.current.value;
      if (label) onChange(label);
    });
    return () => window.google?.maps?.event?.removeListener?.(listener);
  }, [loaded, onChange]);

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
