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
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/ciulzfzz_20240909_190032.jpg",
    alt: "Nova Taxi Fahrzeug vor Berglandschaft in der Zentralschweiz",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/cv7xlold_20240712_121113.jpg",
    alt: "Nova Taxi Seitenansicht mit Taxischild – Flughafentransfer Zürich",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/65wjd89h_20240712121846_edited_1732630664532.png",
    alt: "Nova Taxi Fahrzeug mit Seeblick – Taxi am Vierwaldstättersee",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/aak66rv7_20240712_132636.jpg",
    alt: "Nova Taxi schräg von vorne mit See im Hintergrund – Taxi Luzern",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/wgf1hanf_20240712_210744.jpg",
    alt: "Nova Taxi bei Nachtfahrt in Luzern – 24h Taxiservice",
  },
];

export default function GaleriePage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Galerie – Taxi Zentralschweiz
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Einblicke in unseren Taxi-Service
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Stimmungsvolle Eindrücke aus <strong>Luzern, Zug, Arth-Goldau, Schwyz</strong> und der
            Umgebung. Unsere gepflegten Fahrzeuge bringen Sie sicher und komfortabel 
            ans Ziel – ob <strong>Flughafentransfer Zürich</strong>, Business-Fahrten oder Stadtfahrten.
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

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Taxi buchen in der Zentralschweiz
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Möchten Sie eine Fahrt mit Nova Taxi buchen? Wir bieten <strong>24/7 Taxiservice</strong> in 
            Schwyz, Luzern, Zug und der gesamten Zentralschweiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+41766113131"
              className="rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
            >
              ☎ Jetzt anrufen: 076 611 31 31
            </a>
            <a
              href="https://wa.me/41766113131"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-500 px-5 py-3 text-center text-sm font-medium text-green-400 hover:bg-green-500/10 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
