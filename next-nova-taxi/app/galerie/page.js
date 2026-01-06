export const metadata = {
  title: "Galerie | Nova Taxi",
  description:
    "Bildergalerie von Nova Taxi – Einblicke in Fahrten, Fahrzeuge und Stimmungen aus der Zentralschweiz.",
};

const images = [
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/ciulzfzz_20240909_190032.jpg",
    alt: "Nova Taxi Fahrzeug vor Berglandschaft",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/cv7xlold_20240712_121113.jpg",
    alt: "Nova Taxi Seitenansicht mit Taxischild",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/65wjd89h_20240712121846_edited_1732630664532.png",
    alt: "Nova Taxi Fahrzeug mit Seeblick",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/aak66rv7_20240712_132636.jpg",
    alt: "Nova Taxi schräg von vorne mit See im Hintergrund",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/wgf1hanf_20240712_210744.jpg",
    alt: "Nova Taxi bei Regen in Luzern",
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
