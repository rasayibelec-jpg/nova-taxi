import Link from "next/link";

const AREAS = [
  { slug: "arth-goldau", label: "Arth-Goldau" },
  { slug: "luzern", label: "Luzern" },
  { slug: "zug", label: "Zug" },
  { slug: "weggis", label: "Weggis" },
  { slug: "vitznau", label: "Vitznau" },
  { slug: "schwyz", label: "Schwyz" }
];

export default function ServiceAreasStrip() {
  return (
    <section id="areas" className="section-padding border-b border-white/10 bg-black/40">
      <div className="container space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
              Servicegebiete
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Unterwegs in der ganzen Zentralschweiz.
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Nova Taxi ist rund um Arth-Goldau, Luzern, Zug und an vielen
              weiteren Orten im Einsatz. Wählen Sie Ihren Ort für weitere
              Informationen oder rufen Sie uns direkt an.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/ort/${area.slug}`}
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
