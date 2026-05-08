import Link from "next/link";

const AREAS = [
  // Main cities
  { slug: "arth-goldau", label: "Arth-Goldau" },
  { slug: "luzern", label: "Lucerne" },
  { slug: "zug", label: "Zug" },
  { slug: "schwyz", label: "Schwyz" },
  // Canton Zug
  { slug: "baar", label: "Baar" },
  { slug: "cham", label: "Cham" },
  // Canton Schwyz
  { slug: "kuessnacht", label: "Küssnacht am Rigi" },
  { slug: "brunnen", label: "Brunnen" },
  { slug: "einsiedeln", label: "Einsiedeln" },
  // Canton Lucerne
  { slug: "kriens", label: "Kriens" },
  { slug: "emmen", label: "Emmen" },
  { slug: "horw", label: "Horw" },
];

export default function ServiceAreasStripEN() {
  return (
    <section id="areas" className="section-padding border-b border-white/10 bg-black/40">
      <div className="container space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
              Service Areas
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              On the move throughout Central Switzerland.
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Nova Taxi operates around Arth-Goldau, Lucerne, Zug and many
              other locations. Select your location for more information or
              call us directly.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/en/ort/${area.slug}`}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-gray-100 hover:border-nova-gold hover:text-nova-gold transition-colors"
            >
              {area.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
