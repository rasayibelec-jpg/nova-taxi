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

### Phase 9: City SEO Content Overhaul (COMPLETED - Feb 2026)
- [x] Restructured `cityContent.js` to nested per-language format `{ slug: { de, en } }`
- [x] Split content into modular files: `config/content/de_schwyz.js`, `de_luzern.js`, `de_zug.js`, `en_extras.js`
- [x] 28 unique German city pages with ~400-500 word natural prose, FAQs, features, services, mobility info
- [x] 28 unique English city pages (25 preserved + 3 added: arth-goldau, zug, rothenthurm)
- [x] Updated DE template (`/ort/[slug]/page.js`) and EN template (`/en/ort/[slug]/page.js`) to read `cityContent[slug][lang]`
- [x] FAQ JSON-LD schema rendered per city
- [x] Build verified: all 56 city routes (28 DE + 28 EN) prerendered as SSG
- [x] All pages return unique H1/H2/intro tailored to local context (Crypto Valley for Zug, Hochmoor for Rothenthurm, Kapellbrücke for Luzern, Pilger/Kloster for Einsiedeln, etc.)

### Phase 10: SEO Canonical & Schema Hardening (COMPLETED - Feb 2026)
- [x] Added per-page `alternates.canonical` + `openGraph.url` to all static DE pages: homepage, flughafentransfer, business, kurierfahrten, preise, ueber-uns, kontakt, galerie, impressum, datenschutz, agb
- [x] Added canonical to all 3 DE kanton pages (luzern, schwyz, zug) with hreflang DE/EN
- [x] Added canonical to all 5 Google Ads landing pages (`/Taxi/...`)
- [x] Root layout JSON-LD finalized per user spec: combined `["LocalBusiness", "TaxiService"]`, `priceRange: "CHF 6.60 Grundtaxe + CHF 4.20/km"`, image `og-image.jpg`, geo `47.0574, 8.5514`, areaServed simple string array, sameAs nova-taxi.com
- [x] Created `public/og-image.jpg` (copied from hero-bg.jpg) – 200 OK
- [x] FAQPage schema on `/flughafentransfer` updated to 4 questions per user spec (Was kostet…, 24h Erreichbarkeit, Voraus buchen, Gepäck)
- [x] Visible fixed-price table on `/flughafentransfer`: Arth-Goldau/Schwyz/Luzern/Zug/Küssnacht → ZRH with CHF ab 180–250.–
- [x] Verified: 89 sitemap entries, robots.txt 200, all 25+ pages return correct self-canonical
- [x] Verified hreflang DE/EN render on every page; x-default renders on dynamic /ort/* pages (Next.js 16 metadata cascading limitation on root page)

---

## Current Status

### What's Working
- All pages rendering correctly in both languages
- Canton pages with full content and city links
- City pages with canton breadcrumbs and internal links
- Sitemap includes all 60+ URLs
- Build process completes successfully (Feb 2026 verified)
- All 28 cities have unique DE + EN long-form SEO content


### What Needs User Deployment
User must deploy to Vercel via "Save to GitHub" to see live changes.

---

## Backlog / Future Tasks

### P0 (Critical)
- None currently

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

## Integrations
- Google Analytics 4 (G-Q4HZJQJCME)

---

## Notes for Next Developer
1. User prefers Turkish for communication
2. Site is deployed via GitHub -> Vercel pipeline
3. Price calculator on /preise is a MOCK (client-side only)
4. Consider refactoring duplicate EN components to use translation keys
