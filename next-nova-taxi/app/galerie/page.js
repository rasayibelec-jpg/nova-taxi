export const metadata = {
  title: "Galerie | Nova Taxi",
  description:
    "Bildergalerie von Nova Taxi – Einblicke in Fahrten, Fahrzeuge und Stimmungen aus der Zentralschweiz.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1453412235065-f4215c931fa1?auto=format&fit=crop&w=900&q=80",
    alt: "Taxi an der Seepromenade bei Sonnenuntergang",
  },
  {
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
    alt: "Taxi bei Nacht in der Stadt",
  },
  {
    src: "https://images.unsplash.com/photo-1478779195278-4aa1d44121d1?auto=format&fit=crop&w=900&q=80",
    alt: "Innenraum eines modernen Taxis bei Nacht",
  },
  {
    src: "https://images.unsplash.com/photo-1574849693656-04a60e794482?auto=format&fit=crop&w=900&q=80",
    alt: "Fahrzeug vor einer historischen Brücke",
  },
];

export default function GaleriePage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Galerie
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Einblicke in Fahrten mit Nova Taxi.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Stimmungsvolle Eindrücke aus Luzern, Zug, Arth-Goldau und der
            Umgebung. Die Bilder dienen als Beispiel – gerne ergänzen wir die
            Galerie später mit Ihren eigenen Fahrzeug- und Servicefotos.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
