# PAC Africa

Marketing site for PAC Africa, a management consulting firm. Built with Next.js App Router.

## Tech stack

- Next.js (App Router, Turbopack)
- React + TypeScript
- Tailwind CSS
- Framer Motion for animation
- Supabase (`@supabase/ssr`) for the contact form submission
- shadcn-style UI primitives in `src/components/ui`
- `next-themes` for light/dark mode (class-based, toggle in the header)

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

- `src/app` — routes (`/`, `/about`, `/services`, `/insights`, `/insights/[slug]`, `/events`, `/events/[slug]`, `/contact`, `/privacy-policy`, `/terms-of-service`) and root layout. Each top-level page is a thin server `page.tsx` (exports `metadata`) wrapping a `*Content.tsx` client component in the same folder. Also includes `sitemap.ts`, `robots.ts`, `icon.png`, `opengraph-image.tsx`, `not-found.tsx`, and `error.tsx`.
- `src/data` — static content data (`insights.ts` the real blog articles, `events.ts` the real workshops/certifications and speaker bios, both ported from the legacy site)
- `src/components/layout` — `Header`, `ThemeProvider`, `ThemeToggle`
- `src/components/sections` — page sections (`Hero`, `Footer`, `ContactForm`, `WhyChooseUs`, `CTASection`, cards)
- `src/components/ui` — reusable primitives (`Button`, `Card`, `Input`, `Textarea`, `Label`)
- `src/lib` — shared utilities (`cn` helper, Supabase folder)

## Design reference

`jb-design.md` in the repo root is the token/style brief this site's claymorphism direction and typography (Instrument Sans) are derived from. All colors, radii, and clay shadow layers (`--shadow-clay*`) live as CSS custom properties in `src/app/globals.css`, with a `.dark` override block so components built on `var(--color-*)`/`var(--shadow-clay*)` adapt automatically — most components need no `dark:` utility classes.

## Legacy content

Four `pacafric_*.sql` files in the repo root are MySQL dumps from the old WordPress site and related internal tools. Only `pacafric_pacmain.sql` is the marketing site; see [`docs/content-migration.md`](docs/content-migration.md) for what's usable, what's spam, and what's out of scope.
