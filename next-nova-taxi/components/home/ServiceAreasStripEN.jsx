import Link from "next/link";

const AREAS = [
  { slug: "arth-goldau", label: "Arth-Goldau" },
  { slug: "luzern", label: "Lucerne" },
  { slug: "zug", label: "Zug" },
  { slug: "weggis", label: "Weggis" },
  { slug: "vitznau", label: "Vitznau" },
  { slug: "schwyz", label: "Schwyz" }
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
