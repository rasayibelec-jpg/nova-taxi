"use client";

import { useBooking } from "./BookingProvider";

export default function BookingButton({
  label = "Online Taxi bestellen",
  variant = "primary",
  prefillPickup,
  prefillDestination,
  className = "",
  testId = "booking-open-button",
}) {
  const { openBooking } = useBooking();

  const base =
    variant === "compact"
      ? "rounded-full bg-nova-gold px-5 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[44px] inline-flex items-center"
      : "inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20 hover:bg-nova-gold-soft transition-colors min-h-[48px]";

  return (
    <button
      type="button"
      onClick={() => openBooking({ pickup: prefillPickup, destination: prefillDestination })}
      className={`${base} ${className}`.trim()}
      data-testid={testId}
    >
      {label}
    </button>
  );
}
