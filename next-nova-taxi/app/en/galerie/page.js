export const metadata = {
  title: "Gallery | Nova Taxi",
  description:
    "Photo gallery of Nova Taxi – insights into rides, vehicles and atmosphere from Central Switzerland.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en/galerie",
    languages: {
      'de': 'https://www.nova-taxi.com/galerie',
      'en': 'https://www.nova-taxi.com/en/galerie',
    },
  },
};

const images = [
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/ciulzfzz_20240909_190032.jpg",
    alt: "Nova Taxi vehicle in front of mountain landscape",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/cv7xlold_20240712_121113.jpg",
    alt: "Nova Taxi side view with taxi sign",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/65wjd89h_20240712121846_edited_1732630664532.png",
    alt: "Nova Taxi vehicle with lake view",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/aak66rv7_20240712_132636.jpg",
    alt: "Nova Taxi from front angle with lake in background",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/wgf1hanf_20240712_210744.jpg",
    alt: "Nova Taxi in Lucerne on a rainy day",
  },
];

export default function GalleryPageEN() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Gallery
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Insights into rides with Nova Taxi.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Atmospheric impressions from Lucerne, Zug, Arth-Goldau and the
            surrounding area. The images serve as examples – we'd be happy to
            add your own vehicle and service photos to the gallery later.
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
