# Legacy content migration (WordPress → Next.js)

Source: four MySQL dumps in the repo root (`pacafric_pacmain.sql`, `pacafric_hr.sql`, `pacafric_CRM.sql`, `pacafric_survey.sql`). Only `pacafric_pacmain.sql` is the marketing website (WordPress + Elementor + WooCommerce + Event Tickets New + iThemes Security). The other three are internal business systems — see "Not in scope" below.

No media files (`wp-content/uploads`) were included, only the database. Legacy images/logos are not portable — anything visual needs to be resourced.

## Security note

The old site was compromised. Confirmed SEO-spam injections found directly inside real page content:
- About Us page: a sentence promoting "replica rolex for sale" mid-paragraph.
- Services page: a stray non-sequitur sentence ("Her speech is rich in content...").
- Outsourced Services page: an injected link to `band.us` (unrelated Korean social app).
- A whole spam blog post: "Unveiling the Marketing Strategies of Replica Rolex Submariner".

None of this should be ported verbatim. Every paragraph pulled from the dump needs a human read-through before it goes on the new site.

## What's usable

### Pages (`wpxe_posts`, post_type=page, status=publish)
| Legacy page | Notes |
|---|---|
| Home | Confirms our current 6 services (Innovation, Organization Development, Strategy, HR Support, Transformation, Mobility) are accurate — already correctly ported. |
| About Us | Real founding info: est. 2014, staff IHRM-certified. Contains the Rolex spam injection — needs cleanup before reuse. |
| Services | Much richer than our current placeholder copy: Strategic Planning, Holistic Organization Development, Governance & Risk Management, Human Capital Advisory & Training, Payroll Processing (NHIF/NSSF/PAYE/NITA/HELB — Kenya-specific statutory detail), HR Audit, Performance Management, HR Administration. |
| Outsourced Services | Overlaps with Services; largely payroll/HR-admin detail duplicated. |
| Contact | Real office copy: Nairobi (Jasmine Centre, Pio Gama Pinto Rd, Westlands), Dar es Salaam (Sinza Kivulini Raha Street), Kampala (Plot 11, Archer Road, Lower Kololo Terrace) — **3 offices**, not 4 (our current site invents a Kigali office). Nav was Home / About / Services / Insights / Events / Careers / Contact. Contact form fields were Name / Email / Subject (General, Services, Partnership, Careers) / Message — no Company/Phone fields like our current form. Real email found: `info@pacconsulting.co.ke` (our scaffold invented `info@pacafrica.com`). Phone numbers are the same `+254/255/256 700 000 000` placeholder pattern we already use — not real numbers. |
| Privacy Policy | Two versions exist (default WP boilerplate + a PAC-specific one). Also carries the Rolex spam injection — needs cleanup. |
| Blog (archive) | Just the WordPress post-list template, no unique copy. |

### Blog posts → "Insights" (`wpxe_posts`, post_type=post)
13 legitimate published articles, all under one flat "Blog" category (no sub-taxonomy needed):
- The Talent Imperative: Why Companies Must Source External Expertise to Thrive
- The AI Takeover: Will Machines Rob You of Your Job?
- Does Your Company's Mission Inspire Passion in Your Team?
- Leveraging Data and Analytics for Smarter Hiring Decisions
- The New Playbook: Business Strategy for the Digital World
- Change: a Powerful Leadership Tool
- The Rising Importance of Organizational Culture
- Embracing an Adaptive Approach to Strategy
- Understanding Employee Burnout: Causes and Remedies
- Leading Through Stories: How Narratives Drive Strategy
- The Talent Revolution: Building Future-Proof Workforces
- Think "Team Development," Not "Team Building"
- (4 drafts, unpublished — e.g. "The Hallmarks of Exceptional Leadership", "Introducing SquaddlyHR: Revolutionizing HR Management")

**1 spam post excluded**: "Unveiling the Marketing Strategies of Replica Rolex Submariner" (hack artifact, do not port).

Our current `/case-studies` route is filled with fabricated placeholder entries. These 12-13 real articles are a much better fit — recommend renaming the section "Insights" (matches legacy nav) and swapping in this real content instead of invented case studies.

### Events (Event Tickets New plugin: `etn`, `etn-speaker` post types)
PAC ran named events/workshops — evidence of a programs/certifications business line not represented on the new site at all:
- Organisational Culture Certification Programme
- CEO's Breakfast Roundtable
- Organization Change Management Workshop
- Leadership (Culture Architects) Immersion Workshop
- Fundamentals of Corporate Culture Transformation
- Governance, Risk & Compliance (workshop)
- ASK: The CEO's Program

Named speakers: Michael Davids, Mike Eldon, Wavi Mungala, Catherine Musakali, Dr. Kevin Rombosia, Mary Mulili.

No RSVP/attendee personal data should be ported (privacy) — only the event names/descriptions/speaker bios as potential content for a new "Events" or "Programs" section.

### Not usable / not found
- **No testimonials** — the 139 "testimonial" hits in the dump are all Elementor's bundled template-library metadata, not real client testimonials. Nothing to port.
- **No real client/partner logos found** — our current About page's partner list (Safaricom, KCB, Equity Bank, etc.) is placeholder invention, not sourced from the dump. Needs either removal or real client sign-off before publishing logos.
- **WooCommerce (Shop/Cart/Checkout)** — set up but the Shop page itself has zero content. Not a real e-commerce line; skip.

## Not in scope (internal systems, not the marketing site)
- `pacafric_hr.sql` — an HR/payroll SaaS schema (employees, contracts, attendance, payroll). Internal tool, not public site content.
- `pacafric_CRM.sql` — a Perfex-style CRM schema (clients, contracts, invoices, credits). Contains real client/contact business data — should stay internal, not be ported to a public repo.
- `pacafric_survey.sql` — a survey tool schema.

If there's a future need to integrate any of these (e.g. a client portal), that's a separate, much bigger project — flagging but not acting on it here.

## Decisions (resolved)
1. **Brand name** — legal name is "Priority Activator Consulting", trading as "PAC Africa". Use both: legal name in footer/legal copy, "PAC Africa" as the visible brand everywhere else.
2. **Offices** — drop the invented Kigali office. Real 3: Nairobi (HQ), Dar es Salaam, Kampala.
3. **Navigation** — rename "Case Studies" → "Insights", backed by the 12 real blog articles (not fabricated case studies). Add a new "Events" / "Programs" page for the workshops/certifications found in the dump.
4. **Careers** — not a page on this site. Link out to the jobs board at `jobs.pac.africa` (a separate app — this is what `jb-design.md`'s dark dashboard design brief is for, now it's clear why that file exists in this repo).
5. **Contact email** — resolved: using a new `info@pac.africa` address (not the legacy `info@pacconsulting.co.ke`). Confirmed by the dump itself — the legacy Privacy Policy page already references `info@pac.africa` / `www.pac.africa`, so this is the real intended domain.
6. **Contact form fields** — resolved: keeping the current richer Name/Email/Company/Phone/Service/Message shape (better for a B2B lead form than the legacy Name/Email/Subject/Message).

## Build plan status

Done (this round):
1. **Content cleanup + Insights section** — re-parsed `pacafric_pacmain.sql` for the 12 real, non-spam posts, stripped WordPress/Elementor/Gutenberg markup, and re-checked each for spam-injection artifacts (none found beyond the already-excluded Rolex post). Stored as `src/data/insights.ts`. Renamed `/case-studies` → `/insights`, replaced the fabricated `BlogCard` entries with the real articles, added an `/insights/[slug]` detail page rendering each article's cleaned body.
2. **Services page rewrite** — folded the richer legacy detail into the existing 6 categories: Payroll Processing (NHIF/NSSF/PAYE/NITA/HELB) and HR Audit & Administration under HR Support; Governance & Risk Management under Organization Development. Categories themselves were already correct.
3. **Contact page** — swapped the invented 4th office (Kigali) for the real 3 (Nairobi HQ, Dar es Salaam, Kampala) with their real addresses from the dump; updated to the resolved `info@pac.africa` email.
4. **Brand pass** — footer copyright now reads "Priority Activator Consulting, trading as PAC Africa"; fixed the placeholder `pacafrica.com` domain to `pac.africa` in OpenGraph metadata and all email references.
5. **Careers** — footer "Careers" link now points to `https://jobs.pac.africa` (external, new tab) instead of `/contact`.
6. **Events/Programs page** — new `/events` route: re-parsed the legacy Event Tickets New (`etn`) plugin data for the 7 real published events (Culture Certification Programme, C-Suite Breakfast, Change Management Workshop, Leadership Immersion Workshop, and others) and 5 real speaker bios, stripped stale/expired promotional content (passed dates, dead pricing) and dead brochure-PDF links, and built `/events` (grid) + `/events/[slug]` (detail) routes from `src/data/events.ts`. Added to `Header`/`Footer` nav. Repointed the real Insights articles' `pac.africa/Events/...` references from the `/contact` placeholder to their actual `/events/[slug]` destinations.
7. **Testimonials/partner logos** — dropped the invented "Our Partners" section (Safaricom, KCB, Equity Bank, etc.) from the About page entirely; nothing in the legacy dump backs it up and no real client sign-off is available. No testimonials existed to port (the dump's "testimonial" hits were all Elementor template metadata).

All 8 originally documented migration steps are now done.

Each of these is a separate, reviewable change — tackle one at a time rather than a single sweeping PR.
