"use client";

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/41766113131?text=Hallo%20Nova%20Taxi,%20ich%20m%C3%B6chte%20eine%20Fahrt%20buchen."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-xs md:text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-colors"
    >
      WhatsApp
    </a>
  );
}
