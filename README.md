# PAC Africa

Marketing site for PAC Africa, a management consulting firm. Built with Next.js App Router.

## Tech stack

- Next.js (App Router, Turbopack)
- React + TypeScript
- Tailwind CSS
- Framer Motion for animation
- Supabase (`@supabase/ssr`) for the contact form submission
- shadcn-style UI primitives in `src/components/ui`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Create `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Used by `ContactForm` (`src/components/sections/ContactForm.tsx`) to insert submissions into a `contact_submissions` table. The Supabase client is created lazily on submit, so the app builds and renders fine even without real credentials set.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — serve the production build

## Project structure

- `src/app` — routes (`/`, `/about`, `/services`, `/case-studies`, `/contact`) and root layout
- `src/components/layout` — `Header`
- `src/components/sections` — page sections (`Hero`, `Footer`, `ContactForm`, `WhyChooseUs`, `CTASection`, cards)
- `src/components/ui` — reusable primitives (`Button`, `Card`, `Input`, `Textarea`, `Label`)
- `src/lib` — shared utilities (`cn` helper, Supabase folder)
