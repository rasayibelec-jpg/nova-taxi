// Google review CTA. Uses the official four-color Google "G" mark as inline SVG.
// Docs: https://about.google/brand-resource-center/logos-list/

export default function GoogleReview() {
  return (
    <section
      className="section-padding border-t border-white/10"
      aria-labelledby="google-review-heading"
      data-testid="google-review-section"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-10 text-center space-y-5">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-widest text-gray-400">
            <GoogleGLogo className="h-3.5 w-3.5" />
            <span>Google Bewertungen</span>
          </div>

          <h2
            id="google-review-heading"
            className="text-2xl md:text-3xl font-semibold text-white"
          >
            Ihre Zufriedenheit ist uns wichtig.
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Wenn Sie mit unserem Service zufrieden waren, freuen wir uns über Ihre Bewertung auf Google.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href="https://g.page/r/CdkJvf_A19bmEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm md:text-base font-semibold text-[#3c4043] shadow-lg shadow-black/30 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nova-gold transition-colors min-h-[48px]"
              data-testid="google-review-button"
              aria-label="Google Bewertung abgeben – öffnet in neuem Tab"
            >
              <GoogleGLogo className="h-5 w-5" />
              <span>⭐ Google Bewertung abgeben</span>
            </a>
          </div>

          <p className="text-[11px] text-gray-500 pt-1">
            Der Link öffnet in einem neuen Tab und führt direkt zum Bewertungsfenster von Google.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Official four-color Google "G" mark. */
function GoogleGLogo({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}
