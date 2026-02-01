import Image from "next/image";
import Link from "next/link";

export default function HeroEN() {
  return (
    <section className="relative section-padding border-b border-white/10 overflow-hidden min-h-[520px] md:min-h-[620px]">
      {/* Background - Optimized for LCP */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Preload poster image for faster LCP */}
        <Image
          src="https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/d7vtjiwn_2224057D-3241-432A-AA5B-D7EABEF441A0_1_105_c.jpeg"
          alt="Nova Taxi Background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          quality={75}
        />
        {/* Video loads after image - lazy loaded */}
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/d7vtjiwn_2224057D-3241-432A-AA5B-D7EABEF441A0_1_105_c.jpeg"
        >
          <source 
            src="https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/ehna9gxy_8344931-uhd_3840_2160_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center relative z-10">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Premium Taxi Service – 24/7
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Nova Taxi – Modern rides throughout Central Switzerland.
            </h1>
            <p className="text-sm md:text-base text-gray-200 max-w-xl leading-relaxed">
              Airport transfers, business trips, courier services or just a ride
              home – Nova Taxi takes you safely and punctually to your destination.
              Available 24/7 with personal service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20 hover:bg-nova-gold-soft transition-colors min-h-[48px]"
            >
              View Prices & Services
            </Link>
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors min-h-[48px]"
            >
              Phone: 076 611 31 31
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-200">
            <span className="inline-flex items-center gap-2 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Immediately available in Arth-Goldau, Lucerne, Zug & area</span>
            </span>
            <span className="text-gray-300 py-2">
              Airport Transfer • Business • Courier • Local
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
