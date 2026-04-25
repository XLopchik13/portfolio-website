# Portfolio Website — Project Rules

## Stack
- **Next.js 15** (App Router, TypeScript strict)
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.ts`)
- **MDX** via `next-mdx-remote/rsc` + `gray-matter` for project content
- **Resend** for contact form (Server Action)
- **Vercel Analytics** (one-line, enabled from the start)
- `clsx` + `tailwind-merge` in `lib/cn.ts`
- **Zod** for contact form validation
- **Biome** for linting and formatting (replaces ESLint + Prettier)
- `next/font/google` for Plus Jakarta Sans + JetBrains Mono

## What We Do NOT Use
- ❌ Radix UI / shadcn/ui — roll our own accessible components
- ❌ Framer Motion — scroll-reveal via IntersectionObserver + CSS transitions only
- ❌ Dark mode
- ❌ i18n — English only
- ❌ State management libs (Redux, Zustand) — plain React hooks
- ❌ UI component libraries of any kind

## Design Language: Notion-Inspired
```
Background:   #FFFFFF / #F7F7F5
Text:         #37352F
Border:       #E7E7E5
Accent (CTA): #2383E2
Muted text:   #9B9A97
```
- **Typography:** Plus Jakarta Sans (300–700) for UI; JetBrains Mono for tags/labels/code
- Subtle hover states, no heavy animations
- Minimal borders, generous whitespace

## Architecture
```
app/
├── layout.tsx              # Root layout, fonts, metadata
├── page.tsx                # Homepage — all sections assembled here
├── opengraph-image.tsx     # OG image generation
├── projects/
│   └── [slug]/
│       └── page.tsx        # MDX project detail page
components/
├── nav/                    # Sticky nav + active link tracking
├── hero/
├── about/
├── projects/               # Accordion list + individual card
├── contact/                # Form + contact links
└── shared/                 # Button, Tag, SectionWrapper, etc.
features/
├── scroll-reveal/          # IntersectionObserver hook + wrapper component
├── active-nav/             # useActiveSection hook
└── accordion/              # useAccordion hook
lib/
├── cn.ts                   # clsx + tailwind-merge
├── constants.ts            # Nav links, social links, etc.
├── mdx.ts                  # Load + parse MDX from content/
└── validations.ts          # Zod schemas (contact form)
content/
└── projects/               # .mdx files (one per project)
public/
styles/
├── globals.css             # Tailwind v4 @import + base resets
└── design-system.css       # Typography scale, spacing, color palette
```

## Routing
- `/` — single-page with all sections (Hero, About, Projects accordion, Contact)
- `/projects/[slug]` — MDX project detail page
- No `/projects` listing page — accordion on homepage covers it

## Page Sections (in order)
1. **Nav** — fixed top bar, logo + nav links + "Get in touch" CTA, active link via IntersectionObserver
2. **Hero** — emoji, H1 name, subtitle, 2–3 para bio, primary + ghost buttons, availability callout
3. **About** — two-column: bio + Notion-style experience table (left); properties panel with emoji keys + tag chips (right)
4. **Projects** — vertical accordion. Collapsed: emoji + title + tagline + tech tags. Expanded: description, stack table, GitHub/Live links, placeholder thumbnail
5. **Contact** — two-column: headline + contact link list (left); minimal form with underlined inputs + blue focus ring (right)
6. **Footer** — copyright + "Back to top"

## Interactions
- **Scroll reveal:** fade-up (opacity + translateY) via IntersectionObserver, staggered delays, CSS transitions
- **Active nav:** tracks scroll position, highlights current section
- **Project accordion:** toggle on click, arrow rotates 90°
- **Contact form:** Zod client validation → Resend Server Action → success/error state

## Accessibility (Non-Negotiable)
- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<article>`)
- Accordion: `aria-expanded`, `aria-controls`, keyboard nav (Enter, Space)
- All interactive elements have visible focus ring (blue, `#2383E2`)
- `prefers-reduced-motion`: disable/reduce all animations
- Form labels always visible (no placeholder-only labels)
- Color contrast minimum AA (WCAG 2.1)

## SEO (MVP, Not Future)
- `generateMetadata` on every route
- `app/opengraph-image.tsx` for OG image
- JSON-LD `Person` schema in root layout
- Canonical URLs
- `robots.txt` + `sitemap.xml` via Next.js conventions

## Performance Targets
- Lighthouse score ≥ 95 (Performance, Accessibility, Best Practices, SEO)
- < 2s load on 3G (measured with Lighthouse)
- All images via `next/image` with explicit `width`/`height`
- Fonts loaded via `next/font/google` (no external font requests)
- Dynamic imports for accordion logic

## Content
- All personal data (bio, projects, experience) uses **placeholder text** — Nikita will fill it in manually
- Projects stored as `.mdx` files in `content/projects/`
- MDX frontmatter shape:
  ```yaml
  title: string
  emoji: string
  tagline: string
  description: string
  tech: string[]
  type: string
  date: string (YYYY-MM-DD)
  github: string (URL or empty)
  demo: string (URL or empty)
  featured: boolean
  ```

## Code Style
- TypeScript strict mode + `noUncheckedIndexedAccess`
- No comments unless the WHY is non-obvious
- No `any` — use `unknown` + type narrowing
- Prefer `const` functions over `function` declarations in components
- `cn()` utility for all className merging
- Server Components by default; add `"use client"` only when necessary (event handlers, hooks, browser APIs)

## Development Phases
- **Phase 1 (current):** Scaffold + config + folder structure
- **Phase 2:** Core sections (Nav, Hero, About, Projects accordion, Contact, Footer)
- **Phase 3:** MDX project detail pages + SEO
- **Phase 4:** Polish — scroll reveal, active nav, mobile responsive, a11y audit
- **Phase 5:** Performance audit (Lighthouse) + deploy to Vercel
