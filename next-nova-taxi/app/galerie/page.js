import Image from "next/image";

export const metadata = {
  title: "Galerie | Taxi Fotos Zentralschweiz - Nova Taxi",
  description:
    "Bildergalerie von Nova Taxi – Einblicke in unsere Fahrzeuge und Fahrten in Schwyz, Luzern, Zug und der Zentralschweiz. Professioneller Taxiservice!",
  keywords: [
    "Taxi Fotos",
    "Taxi Zentralschweiz",
    "Nova Taxi Galerie",
    "Taxifahrzeuge Schwyz",
    "Taxi Luzern Bilder"
  ],
};

const images = [
  {
    src: "/gallery/gallery-1",
    alt: "Nova Taxi Fahrzeug vor Berglandschaft in der Zentralschweiz",
    width: 800,
    height: 600,
  },
  {
    src: "/gallery/gallery-2",
    alt: "Nova Taxi Seitenansicht mit Taxischild – Flughafentransfer Zürich",
    width: 800,
    height: 600,
  },
  {
    src: "/gallery/gallery-3",
    alt: "Nova Taxi Fahrzeug mit Seeblick – Taxi am Vierwaldstättersee",
    width: 800,
    height: 600,
  },
  {
    src: "/gallery/gallery-4",
    alt: "Nova Taxi schräg von vorne mit See im Hintergrund – Taxi Luzern",
    width: 800,
    height: 600,
  },
  {
    src: "/gallery/gallery-5",
    alt: "Nova Taxi bei Nachtfahrt in Luzern – 24h Taxiservice",
    width: 800,
    height: 600,
  },
];

export default function GaleriePage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Galerie – Taxi Zentralschweiz
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Einblicke in unseren Taxi-Service
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Stimmungsvolle Eindrücke aus <strong>Luzern, Zug, Arth-Goldau, Schwyz</strong> und der
            Umgebung. Unsere gepflegten Fahrzeuge bringen Sie sicher und komfortabel 
            ans Ziel – ob <strong>Flughafentransfer Zürich</strong>, Business-Fahrten oder Stadtfahrten.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[4/3]"
            >
              <picture>
                <source srcSet={`${img.src}.webp`} type="image/webp" />
                <img
                  src={`${img.src}.jpg`}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </picture>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Taxi buchen in der Zentralschweiz
          </h2>
          <p className="text-sm text-gray-200 mb-4">
            Möchten Sie eine Fahrt mit Nova Taxi buchen? Wir bieten <strong>24/7 Taxiservice</strong> in 
            Schwyz, Luzern, Zug und der gesamten Zentralschweiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+41766113131"
              className="rounded-full bg-nova-gold px-5 py-4 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[48px] inline-flex items-center justify-center"
            >
              ☎ Jetzt anrufen: 076 611 31 31
            </a>
            <a
              href="https://wa.me/41766113131"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-500 px-5 py-4 text-center text-sm font-medium text-green-400 hover:bg-green-500/10 transition-colors min-h-[48px] inline-flex items-center justify-center"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
