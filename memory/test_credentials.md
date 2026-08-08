# Nova Taxi — Test Credentials

Admin panel (order approval workflow):
- URL: `/admin/bookings`
- Password: value of `ADMIN_PASSWORD` env var
  - Local (.env.local): `nova-admin-2026`
  - Vercel production: MUST be set as an environment variable by the site owner. Any value; enter the same value on the login screen.

Notes:
- Password is stored in browser `localStorage` under key `novaTaxiAdminKey` after login; use "Abmelden" to clear.
- The admin API endpoints (`/api/admin/bookings*`) reject requests without a matching `x-admin-key` header.
