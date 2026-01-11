"use client";

import { useState } from "react";

const BASE_PRICE = 6.6; // Base fare (example value)
const PRICE_PER_KM = 4.2; // Price per km (example value)
const NIGHT_SURCHARGE_FACTOR = 1.2; // Night / Weekend

export default function PriceCalculatorEN() {
  const [distance, setDistance] = useState(10);
  const [isNight, setIsNight] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!distance || distance <= 0) {
      setEstimatedPrice(null);
      return;
    }

    let price = BASE_PRICE + distance * PRICE_PER_KM;
    if (isNight) {
      price *= NIGHT_SURCHARGE_FACTOR;
    }

    setEstimatedPrice(Math.round(price * 20) / 20); // round to 0.05
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm md:text-base text-gray-300 space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Simple Price Calculator (Estimate)</h2>
        <p className="text-xs md:text-sm text-gray-400">
          This calculator provides a non-binding estimate based on an example
          rate structure (base fare + price per kilometer). The actual fare may
          vary depending on route, traffic and waiting time.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-200">
            Estimated Distance (km)
          </label>
          <input
            type="number"
            min="1"
            step="0.5"
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
            className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-1 focus:ring-nova-gold"
            placeholder="e.g. 12.5"
          />
        </div>

        <div className="flex items-center gap-2 text-xs md:text-sm">
          <input
            id="night"
            type="checkbox"
            checked={isNight}
            onChange={(e) => setIsNight(e.target.checked)}
            className="h-4 w-4 rounded border-white/30 bg-black/40 text-nova-gold focus:ring-nova-gold"
          />
          <label htmlFor="night" className="text-gray-200">
            Night / Weekend (surcharge)
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-nova-gold px-5 py-2 text-xs md:text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
        >
          Calculate Estimate
        </button>
      </form>

      {estimatedPrice !== null && (
        <div className="mt-2 rounded-xl bg-black/60 px-4 py-3 text-xs md:text-sm text-gray-200">
          <p className="font-medium text-white">
            Non-binding estimate: approx. CHF {estimatedPrice.toFixed(2)}
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            For a binding offer, please contact us by phone or email.
          </p>
        </div>
      )}
    </div>
  );
}
