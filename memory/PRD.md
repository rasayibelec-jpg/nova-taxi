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
- [x] Sitemap with all pages (static + dynamic + canton)
- [x] hreflang alternates for i18n
- [x] robots.txt configuration
- [x] Favicon set (including 512px for Google)
- [x] Google Analytics 4 integration

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
