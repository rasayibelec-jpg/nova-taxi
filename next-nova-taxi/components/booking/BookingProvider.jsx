"use client";

import { createContext, useCallback, useContext, useState } from "react";
import BookingModal from "./BookingModal";

const BookingCtx = createContext(null);

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [prefillPickup, setPrefillPickup] = useState("");
  const [prefillDestination, setPrefillDestination] = useState("");

  const openBooking = useCallback((opts = {}) => {
    setPrefillPickup(opts.pickup || "");
    setPrefillDestination(opts.destination || "");
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => setOpen(false), []);

  return (
    <BookingCtx.Provider value={{ open, openBooking, closeBooking }}>
      {children}
      <BookingModal open={open} onClose={closeBooking} prefillPickup={prefillPickup} prefillDestination={prefillDestination} />
    </BookingCtx.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
