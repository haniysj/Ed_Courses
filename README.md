# EduSphere — Online Educational Courses Platform

A full-stack platform for browsing, scheduling, and booking online courses, with a complete admin dashboard.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Prisma + SQLite** (swap `DATABASE_URL` in `.env` for PostgreSQL later — same schema)
- **NextAuth** (credentials login, role-based access: `ADMIN` / `LEARNER`)
- **Tailwind CSS**, **Recharts** for dashboard charts, **Zod** for validation

## Getting Started

```bash
npm install
npm run db:push      # create the SQLite schema
npm run db:seed      # populate demo data (6 courses, 4 instructors, schedules)
npm run dev          # http://localhost:3000
```

To wipe and reseed at any time:

```bash
npm run db:reset
```

## Demo Accounts

| Role    | Email                  | Password    |
|---------|-------------------------|-------------|
| Admin   | admin@edusphere.om      | Admin@123   |
| Learner | learner@edusphere.om    | Learner@123 |

## Key Areas

- **Public site**: `/`, `/courses`, `/courses/[slug]`, `/instructors`, `/instructors/[slug]`, `/about`, `/contact`
- **Booking flow**: course page → select schedule → fill details → `/bookings/[id]` confirmation
- **Learner account**: `/login`, `/register`, `/my-bookings`
- **Admin dashboard** (`/admin`, requires `ADMIN` role): stats + charts, Courses, Instructors, Schedules, Bookings, Learners, Settings

## Core Business Rules

- **Dynamic pricing**: `Total Price = Hourly Rate × Duration`, calculated live everywhere (`src/lib/pricing.ts`). Admins cannot override the total directly.
- **Historical price snapshot**: every booking stores `hourlyRateSnapshot` / `durationHoursSnapshot` / `totalPriceSnapshot` at booking time. Changing a course's price later never alters existing bookings (see `prisma/schema.prisma` `Booking` model).
- **Schedule conflict prevention**: creating a schedule blocks overlapping times for the same instructor, and booking capacity is enforced transactionally to prevent double-booking (`src/app/api/schedules/route.ts`, `src/app/api/bookings/route.ts`).
- **Role protection**: `/admin/*` is gated by `src/middleware.ts` plus a server-side `requireAdminPage`/`requireAdminApi` check on every admin page and API route.

## Not Yet Wired (by design, per spec section 30)

Payment gateway, email/SMS notifications, and reviews have data fields/architecture in place (`paymentStatus`, `Review` model) but no live integration — these are documented extension points, not gaps in the current scope.
