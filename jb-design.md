# Pan African Jobs

## Mission
Create implementation-ready, token-driven UI guidance for Pan African Jobs that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: Pan African Jobs
- URL: https://jobs.pac.africa/
- Audience: authenticated users and operators
- Product surface: dashboard web app

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Instrument Sans`, `font.family.stack=Instrument Sans, Instrument Sans Fallback, system-ui, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=24px`, `font.size.2xl=72px`
- Color palette: `color.text.primary=#8a8a8a`, `color.text.secondary=#f5f5f0`, `color.text.tertiary=#e8532e`, `color.text.inverse=#6e6e6e`, `color.surface.base=#000000`, `color.surface.muted=#1a1a1a`, `color.surface.raised=#0a0a0a`, `color.border.default=#e5e7eb`, `color.border.muted=#ffffff`
- Spacing scale: `space.1=4px`, `space.2=6px`, `space.3=8px`, `space.4=10px`, `space.5=12px`, `space.6=16px`, `space.7=20px`, `space.8=24px`
- Radius/shadow/motion tokens: `radius.xs=16px`, `radius.sm=9999px` | `shadow.1=rgba(0, 0, 0, 0.6) 8px 8px 16px 0px, rgba(255, 255, 255, 0.03) -4px -4px 10px 0px`, `shadow.2=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`, `shadow.3=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.6) 8px 8px 16px 0px, rgba(255, 255, 255, 0.03) -4px -4px 10px 0px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (19), inputs (6), buttons (5), cards (2), navigation (2), lists (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
