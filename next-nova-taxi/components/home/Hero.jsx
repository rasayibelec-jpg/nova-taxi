import Image from "next/image";
import Link from "next/link";

// Blur placeholder for instant LCP
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAcI/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAQFEQYSEyExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIDESH/2gAMAwEAAhEDEEA/ALfxjlGIx3HMdYXE8izW8EUc6mJiCrowDBhv3sEj+1ZHk88s0kkrszuxLMzHZJPsknQFKVRyqW0Dn//Z";

export default function Hero() {
  return (
    <section className="relative section-padding border-b border-white/10 overflow-hidden min-h-[520px] md:min-h-[620px]">
      {/* Background - Optimized for LCP */}
      <div className="absolute inset-0 -z-20">
        {/* Local optimized image for fastest LCP */}
        <picture>
          <source 
            srcSet="/hero-bg-mobile.webp" 
            media="(max-width: 768px)" 
            type="image/webp"
          />
          <source 
            srcSet="/hero-bg.webp" 
            type="image/webp"
          />
          <img
            src="/hero-bg.jpg"
            alt=""
            width={1024}
            height={768}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </picture>
        
        {/* Video loads lazily after hero image */}
        <video
          className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-1000"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onLoadedData={(e) => e.currentTarget.style.opacity = '1'}
        >
          <source 
            src="https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/ehna9gxy_8344931-uhd_3840_2160_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center relative z-10">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Taxi Zentralschweiz – 24/7 Service
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ihr zuverlässiges Taxi in der Zentralschweiz – Schwyz, Luzern & Zug
            </h1>
            <p className="text-sm md:text-base text-gray-200 max-w-xl leading-relaxed">
              Flughafentransfer Zürich, Businessfahrten, Kurierfahrten oder die Fahrt
              nach Hause – Nova Taxi bringt Sie sicher und pünktlich ans Ziel.
              24h erreichbar, mit persönlichem Service. Taxi bestellen: 076 611 31 31
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20 hover:bg-nova-gold-soft transition-colors min-h-[48px]"
            >
              Preis & Angebote ansehen
            </Link>
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors min-h-[48px]"
            >
              Telefon: 076 611 31 31
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-200">
            <span className="inline-flex items-center gap-2 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>24h Taxi Zentralschweiz – Arth-Goldau, Luzern, Zug, Schwyz & Umgebung</span>
            </span>
            <span className="text-gray-300 py-2">
              Flughafentransfer Zürich • VIP & Business Transfer • Kurierdienst • Bahnhof Taxi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
