# Nova Taxi Website - PRD (Product Requirements Document)

## Original Problem Statement
Migrate and rebrand the existing "Taxiturlihof" website to a new modern Next.js 14 website for "Nova Taxi" (www.nova-taxi.com) with premium dark theme, gold accents, and comprehensive SEO optimization.

## Core Requirements
1. **Rebrand & Design:** Modern, premium, dark-themed website for "Nova Taxi"
2. **Technology:** Next.js 14+ (App Router) and React
3. **Core Pages:** Homepage, services, info pages, legal pages
4. **SEO & Locations:** Unique, SEO-optimized pages for ~28 cities and 3 cantons
5. **Internationalization (i18n):** German (default) and English (/en/ path)
6. **Performance:** Optimized for Google PageSpeed Insights
7. **Analytics:** Google Analytics 4 integration

## User Personas
- **Tourists:** International visitors needing airport/station transfers
- **Business Travelers:** Corporate clients requiring professional taxi service
- **Locals:** Central Switzerland residents for daily transportation
- **Hotels/Businesses:** Partners needing reliable transportation services

---

## Completed Features

### Phase 1: Core Website (COMPLETED)
- [x] Next.js 14 project setup with App Router
- [x] Modern dark theme with gold/yellow accents
- [x] Responsive design for all devices
- [x] All core pages (Homepage, Services, About, Contact, Gallery, Prices)
- [x] Service pages (Flughafentransfer, Business, Kurierfahrten)

### Phase 2: Internationalization (COMPLETED)
- [x] German as default language
- [x] English version under /en/ path
- [x] Language switcher in header/footer
- [x] Middleware for i18n routing

### Phase 3: Location Pages (COMPLETED)
- [x] Dynamic city pages (/ort/[slug]) for 28+ locations
- [x] generateStaticParams for static generation
- [x] Unique content per city
- [x] English versions for all city pages

### Phase 4: Canton Pages (COMPLETED - Dec 2025)
- [x] /kanton/luzern - Canton Lucerne page with 10 cities
- [x] /kanton/schwyz - Canton Schwyz page with 6 cities
- [x] /kanton/zug - Canton Zug page with 7 cities
- [x] English versions: /en/kanton/luzern, /en/kanton/schwyz, /en/kanton/zug
- [x] Airport transfer sections per canton
- [x] Train station transfer sections per canton
- [x] Tourist attractions (Lucerne-specific)
- [x] Business focus (Zug-specific)
- [x] Internal linking to city pages
- [x] Cross-canton navigation

### Phase 5: SEO Optimization (COMPLETED)
- [x] Dynamic meta titles and descriptions
- [x] JSON-LD LocalBusiness schema
- [x] TaxiService schema for city pages
- [x] Sitemap with all pages (static + dynamic + canton + legal)
- [x] hreflang alternates for i18n
- [x] robots.txt configuration
- [x] Favicon set (including 512px for Google)
- [x] Google Analytics 4 integration

### Phase 7: Legal Pages (COMPLETED - Dec 2025)
- [x] /impressum - Imprint (DE)
- [x] /datenschutz - Privacy Policy (DE)
- [x] /agb - Terms & Conditions (DE)
- [x] /en/impressum - Imprint (EN)
- [x] /en/datenschutz - Privacy Policy (EN)
- [x] /en/agb - Terms & Conditions (EN)

### Phase 8: Google Ads Landing Pages (COMPLETED - Feb 2025)
- [x] /Taxi/Arth-goldau - Arth-Goldau landing page
- [x] /Taxi/Schwyz - Schwyz landing page
- [x] /Taxi/Luzern - Luzern landing page
- [x] /Taxi/Zug - Zug landing page
- [x] /Taxi/Goldau - Goldau landing page
- [x] All pages optimized for Google Ads with CTA buttons
- [x] Added to sitemap

### Phase 6: Performance (COMPLETED)
- [x] Local WebP images (hero, gallery)
- [x] Aggressive browser caching (1 year)
- [x] LCP image preloading
- [x] Accessibility improvements (contrast, tap targets)

---

## Current Status

### What's Working
- All pages rendering correctly in both languages
- Canton pages with full content and city links
- City pages with canton breadcrumbs and internal links
- Sitemap includes all 60+ URLs
- Build process completes successfully

### What Needs User Deployment
User must deploy to Vercel via "Save to GitHub" to see live changes.

---

## Backlog / Future Tasks

### P0 (Critical)
- None currently

### Diagnosed 2026-02 — Booking price not calculating on Vercel
- Root cause candidates (all on user's Vercel/Google side, code path verified working locally):
  1. `GOOGLE_MAPS_API_KEY` env var missing on Vercel (only `NEXT_PUBLIC_...` set).
  2. Key has HTTP-referrer restrictions that block server-side calls from Vercel.
  3. Distance Matrix API not enabled on the same Google Cloud project as the key.
- Mitigations shipped: real Google status now surfaced in `/api/pricing`, structured `priceError` in `BookingModal`, `/api/pricing/diag` diagnostic endpoint.

### P1 (High Priority)
- [ ] Refactor i18n: Single components with translation keys instead of duplicate EN components

### P2 (Medium Priority)
- [ ] Real booking system with backend and payment integration
- [ ] Contact form with email notifications
- [ ] Online price calculator with accurate estimates

### P3 (Low Priority)
- [ ] Customer reviews/testimonials section
- [ ] Blog for local SEO content
- [ ] Driver profiles page

---

## Technical Architecture

```
/app/next-nova-taxi/
├── app/
│   ├── kanton/
│   │   ├── luzern/page.js    ✓ Canton Lucerne (DE)
│   │   ├── schwyz/page.js    ✓ Canton Schwyz (DE)
│   │   └── zug/page.js       ✓ Canton Zug (DE)
│   ├── ort/[slug]/page.js    ✓ 28 city pages (DE)
│   ├── en/
│   │   ├── kanton/
│   │   │   ├── luzern/page.js    ✓ Canton Lucerne (EN)
│   │   │   ├── schwyz/page.js    ✓ Canton Schwyz (EN)
│   │   │   └── zug/page.js       ✓ Canton Zug (EN)
│   │   └── ort/[slug]/page.js    ✓ 28 city pages (EN)
│   ├── sitemap.js            ✓ Dynamic sitemap
│   └── robots.js             ✓ SEO robots
├── config/locations.js       ✓ City data source
├── locales/
│   ├── de/common.json        ✓ German translations
│   └── en/common.json        ✓ English translations
└── middleware.js             ✓ i18n routing
```

## Key API Endpoints
- `/api/health` - Health check
- `/api/seo/locations` - Location data JSON
- `/api/pricing` (POST) - Distance-matrix based price calculation (CHF 6.60 base + 4.20/km)
- `/api/pricing/diag` (GET) - Diagnostic endpoint: reports env-var presence + live Google Distance Matrix probe (safe to expose, only leaks last-4 of API key)
- `/api/bookings` (POST) - Persists booking with status `pending` (Angefragt); no customer WhatsApp is sent at creation time
- `/api/bookings/[id]` (GET) - Public booking status (used by customer status page /bestellung/[id])
- `/api/bookings/[id]/confirm` (GET) - Legacy driver-link confirm flow, kept for backward compatibility
- `/api/admin/bookings` (GET) - Admin list of bookings; requires header `x-admin-key: $ADMIN_PASSWORD`. Default filter shows pending/confirmed/rejected; `?all=1` shows everything.
- `/api/admin/bookings/[id]/decision` (POST) - Admin accepts/rejects. Body: `{"action":"accept"|"reject"}`. Requires `x-admin-key`. Idempotent: returns 409 if already processed. Response includes `customerWhatsappUrl` with prefilled confirmation/rejection message.
- `/admin/bookings` - Admin UI (noindex/nofollow); localStorage-persisted login using `ADMIN_PASSWORD`.

## Integrations
- Google Analytics 4 (G-Q4HZJQJCME)
- Google Places API (client-side autocomplete) - uses NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
- Google Distance Matrix API (server-side pricing) - uses GOOGLE_MAPS_API_KEY (no NEXT_PUBLIC prefix)
- MongoDB (bookings collection)
- WhatsApp deep linking

## Environment Variables Required on Vercel
| Key | Where used | Notes |
| --- | --- | --- |
| `GOOGLE_MAPS_API_KEY` | Server (`/api/pricing`, `/api/pricing/diag`) | MUST be set on Vercel, MUST NOT have HTTP-referrer restrictions (server-side call). IP restriction OK if Vercel IPs allowlisted, else unrestricted. |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Client (Autocomplete) | Domain HTTP-referrer restrictions REQUIRED to include `*.nova-taxi.com`, `nova-taxi.com`, `*.vercel.app`. |
| `MONGO_URL` | Server (booking storage) | Production MongoDB Atlas connection string. |
| `DB_NAME` | Server | Defaults to `nova_taxi`. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Client (WhatsApp deep link) | Driver number in intl format without `+`, e.g. `41766113131`. |
| `DRIVER_CONFIRM_SECRET` | Server (booking confirm HMAC) | Any long random string. |
| `ADMIN_PASSWORD` | Server (admin bookings API) | Password required to log in at `/admin/bookings` and manage pending orders. |

---

## Notes for Next Developer
1. User prefers Turkish for communication
2. Site is deployed via GitHub -> Vercel pipeline
3. Legacy price calculator on `/preise` is a MOCK (client-side only); the real distance-matrix price lives in `/api/pricing` used by the booking modal.
4. Consider refactoring duplicate EN components to use translation keys.
5. When pricing fails on production, hit `/api/pricing/diag` on the deployed host to see env-var presence and a live Google status probe.
