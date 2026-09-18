# EduSphere — Bilingual Online Educational Academy

A full-stack platform for browsing, scheduling, and booking online courses, with a complete admin dashboard, Arabic/English bilingual UI, dark mode, and an adaptive English placement test.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Prisma + PostgreSQL** (Neon) — swap `DATABASE_URL` for any Postgres provider
- **NextAuth** (credentials login, role-based access: `ADMIN` / `LEARNER`)
- **Tailwind CSS** (`darkMode: "class"`), **next-themes**, **Recharts**, **Zod**, **qrcode**, **jspdf** + **html2canvas**

## Getting Started

```bash
npm install
npm run db:push      # create the schema
npm run db:seed      # demo data: courses, instructors, schedules, 79 placement questions, 5 test versions
npm run dev          # http://localhost:3000
```

To wipe and reseed at any time (⚠ this also wipes the shared production DB if `DATABASE_URL` points at it):

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
- **Placement test**: `/placement` → `/placement/test` (no login required) → `/placement/result/[attemptId]` → `/verify/[reference]`
- **Admin dashboard** (`/admin`, requires `ADMIN` role): stats + charts, Courses, Instructors, Schedules, Bookings, Learners, Settings, Placement Tests (dashboard, question bank, versions)

## Core Business Rules

- **Dynamic pricing**: `Total Price = Hourly Rate × Duration`, calculated live everywhere (`src/lib/pricing.ts`). Admins cannot override the total directly.
- **Historical price snapshot**: every booking stores `hourlyRateSnapshot` / `durationHoursSnapshot` / `totalPriceSnapshot` at booking time. Changing a course's price later never alters existing bookings.
- **Schedule conflict prevention**: creating a schedule blocks overlapping times for the same instructor; booking capacity is enforced transactionally to prevent double-booking.
- **Role protection**: `/admin/*` is gated by `src/middleware.ts` plus a server-side `requireAdminPage`/`requireAdminApi` check on every admin page and API route.

## Bilingual UI & Theming

- Arabic is the default locale (`DEFAULT_LOCALE` in `src/lib/i18n/config.ts`), with a visible `العربية | English` switcher in the header. Locale is stored in a cookie for guests and synced to `User.locale` for logged-in accounts (restored automatically on a new device via `src/components/preference-sync.tsx`).
- `dir="rtl"`/`dir="ltr"` is set on `<html>` per locale; logical Tailwind utilities (`start-`, `end-`) are used where layout direction matters.
- Dark/light mode via `next-themes`, persisted the same way as locale. Styling is centralized in `globals.css` component classes (`.card`, `.btn-*`, `.input`) with `dark:` variants, so most of the app inherits theme support without per-page work.
- Translation strings live in `src/lib/i18n/dictionaries/{ar,en}.ts`. Coverage is thorough on the learner-facing site and the placement test; some deeper admin form field labels remain English-only in this pass.

## English Placement Test

- **No account required** — a visitor can start, complete, and get a result anonymously; name/email are optional, collected before or after the test.
- **Question bank**: 79 hand-authored questions tagged by CEFR level (Pre-A1–C1), skill (Grammar/Vocabulary/Reading/Listening), difficulty, and topic (`prisma/placement-questions.ts`).
- **Staged adaptive delivery**: each attempt runs in 3 stages (~40%/35%/25% of the question count); after each stage, the target CEFR level shifts up or down based on that stage's accuracy (`src/lib/placement/adaptive.ts`). This is an honest, simplified adaptive model — not a full IRT/Rasch psychometric engine.
- **Listening section** uses the browser's Web Speech API (`speechSynthesis`) to read prompts aloud client-side, rather than hosted audio files.
- **Scoring** (`src/lib/placement/scoring.ts`) computes a per-skill CEFR estimate and an overall level + band position ("Strong X" / "approaching Y"), never a falsely-precise decimal score.
- **Headway mapping** (`src/lib/placement/headway.ts`) follows the published 5th-edition level ranges, with sub-recommendations based on band position (e.g. "Headway Elementary — late stage").
- **Results**: CEFR level, skill profile, Headway recommendation, printable certificate with QR code linking to `/verify/[reference]`, PDF download (client-side, `jspdf`/`html2canvas`), and course recommendations tied to the resulting level.
- **Retake policy**: enforced server-side for logged-in users via `PlatformSettings.placementRetakeCooldownDays`; shown as guidance (not a hard block) for anonymous learners, since there's no reliable identity to enforce against.
- **Admin tooling**: `/admin/placement` (stats + level-distribution chart), `/admin/placement/questions` (CRUD), `/admin/placement/versions` (CRUD — each version configures question count, time limit, and CEFR range).

## Not Yet Wired (by design)

Payment gateway, email/SMS notifications, and reviews have data fields/architecture in place (`paymentStatus`, `Review` model) but no live integration. Placement test writing/speaking sections are not auto-scored (flagged as "Not assessed automatically" in the skill profile, per spec).

## Free English Lessons (mini-LMS)

A registered-learner section at `/free-lessons`: six levels (Beginner → Advanced) × four categories
(Grammar, Vocabulary, Writing, Reading), each lesson split into **LESSON** and **PRACTICE** panels.

- **Content**: 48 original lessons / 274 exercises in `prisma/free-lessons/*.ts`. Coursebooks (Headway 5th ed.,
  Cutting Edge 3rd ed.) are used only as curriculum references; nothing is copied from them.
- **Seeding**: `npm run db:seed:lessons` creates missing lessons (safe to re-run; admin edits are never overwritten).
  `npm run db:seed:lessons -- --force` overwrites seeded lessons by slug.
- **Database**: models `FreeLesson`, `FreeLessonExercise`, `FreeLessonProgress`, `FreeLessonAttempt`, plus
  `User.freeLessonLevel`. Apply with `npx prisma db push`.
- **Grading** happens on the server (`/api/free-lessons/[slug]/check`); answer keys are never sent to the browser.
- **Recommendations** (`src/lib/free-lessons/recommend.ts`): placement skill results → start level and weakness per
  category → next uncompleted, prerequisite-satisfied lesson (boosted by missed placement themes) → existing paid course.
- **Admin**: `/admin/free-lessons` (create, edit, publish, duplicate, reorder, delete) and `/admin/free-lessons/analytics`.
