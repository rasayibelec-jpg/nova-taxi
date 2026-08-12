# Nova Taxi — Test Credentials

Admin panel:
- URL: `/admin/bookings` (also linked in header as "🔐 Admin")
- Password: `NovaTaxi2026Admin`

Notes:
- Set in `.env.local` locally. **On Vercel**, add env var `ADMIN_PASSWORD=NovaTaxi2026Admin` (Production + Preview + Development) then redeploy.
- Stored in browser `localStorage` under `novaTaxiAdminKey` after login. Use "Abmelden" to clear.
- Admin API endpoints (`/api/admin/bookings*`) reject requests without a matching `x-admin-key` header.
