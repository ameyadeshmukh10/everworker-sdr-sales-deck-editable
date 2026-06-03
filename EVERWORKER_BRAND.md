# Everworker Brand & Design System

Distilled from the forked repo `everworker-ai-sdr-website/` (Vite + React + Tailwind + shadcn/ui).
This is the authoritative design layer to feed any UI/slide work.

## Brand essence
AI Workers that drive revenue. Aesthetic: **light, airy, clean, premium**. Near-white
warm backgrounds, near-black ink, a single confident **emerald/teal** accent with a bright
mint highlight. Glassmorphism, soft long shadows, subtle gradient meshes and glowing orbs.
Square-ish corners (radius 0.75rem; CTAs use a tight 4px radius). Restrained motion.

## Color tokens (HSL, light mode)
- Background: `hsl(60 10% 98%)` — warm off-white (`#FBFCFB`-ish)
- Foreground / ink: `hsl(240 10% 6%)` — near-black (`#0F1C18` used in illustrations)
- Card: `hsl(0 0% 100%)`
- Secondary / muted surface: `hsl(60 6% 94%)`
- Muted text: `hsl(240 5% 46%)`
- **Accent (primary brand): `hsl(164 60% 32%)`** ≈ `#22826F` deep emerald
- **Accent light / mint: `hsl(160 99% 66%)`** ≈ `#52FEBF` glowing mint
- Border / input: `hsl(60 6% 90%)`
- Destructive: `hsl(349 100% 53%)`
- Radius: `0.75rem` (lg); CTA buttons override to `4px`

### Signature gradients
- **Hero gradient text:** `linear-gradient(90deg, #1C826E, #33B690)` clipped to text
- **Brand fill / chips / avatars:** `linear-gradient(135deg, #22826F, #52FEBF)` with glow `0 0 28px rgba(82,254,191,0.55)`
- **Gradient mesh (section bg):** layered radial ellipses of accent (8%), blue (6%), warm gold (5%) on near-white
- **Gradient orbs:** large blurred circles, `bg-accent/20` and `bg-blue-400/15`, `blur(80px)`, opacity 0.4

## Typography
- Font family: **Gilroy** (Light 300 → Heavy 900), fallback `system-ui, -apple-system, sans-serif`.
  TTFs live in `everworker-ai-sdr-website/public/fonts/`.
- Headings: bold, tight tracking (`tracking-tight`), tight leading (`leading-[1.05]`).
- Hero scale: `text-5xl → 7xl → 5.5rem`, `font-bold`.
- Body: `text-xl`, `text-muted-foreground`, `leading-relaxed`.
- Labels/eyebrows: tiny `10–11px`, `font-semibold`, wide tracking, often accent or 45–55% ink.

## Surfaces & effects
- **Glass:** `background: rgba(255,255,255,0.6)`, `backdrop-filter: blur(20px)`, 1px white/30% border.
  Variants: `glass-strong` (0.75 + blur24 saturate180), `glass-subtle` (0.4 + blur16).
- **Illustration cards:** white gradient `linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88))`,
  `blur(14px)`, inset top highlight + long shadow `0 18px 40px -24px rgba(15,40,32,0.22)`,
  thin `border-black/[0.06]`.
- **Illustration frames:** 3:2 aspect, square corners, radial mint glow top-right + emerald glow bottom-left
  over `linear-gradient(180deg,#FBFCFB,#F1F5F3)`, plus a faint SVG fractal-noise overlay (`mix-blend-multiply`, opacity 0.3).
- **Section dark:** bg `hsl(240 10% 6%)`, text `hsl(60 10% 96%)`.

## Components / motifs to reuse
- **Primary CTA:** dark (`bg-foreground text-background`), `rounded-[4px]`, `h-11 px-8`, with an
  animated chevron tile on the right that expands on hover (`get-started-button.tsx`).
- **Secondary CTA:** `bg-secondary`, `rounded-[4px]`, subtle hover.
- shadcn/ui button variants: default / destructive / outline / secondary / ghost / link; sizes sm/default/lg/icon.
- **Status chips:** uppercase 10px semibold, accent or gradient fill with mint glow (e.g. "PERSONALIZED", "MEETING BOOKED", "SCHEDULED").
- **Avatars/initials:** gradient `135deg #22826F→#52FEBF` square, white bold initials, mint glow.
- **Timeline / sequence:** gradient progress line `#22826F→#52FEBF` fading to faint emerald; done nodes glow.
- **Stat callouts:** big bold number, accent or ink, with tiny wide-tracked label above.
- **Logo marquee:** infinite horizontal scroll (`logo-marquee` 60s linear).
- Motion via framer-motion: gentle fade + slide-up (`y:24→0`, ~0.5–0.7s, small stagger delays). `shimmer-sweep` one-shot highlight.

## Assets available (in repo `src/assets/`)
- Logos: `everworker-logo.svg`, `everworker-mark.svg`, `everworker-logotype-black.svg`, footer logo, `ew-logomark.svg`
- Trust badges: SOC2, ISO27001, GDPR
- Customer logos: salesforce, hubspot, outreach, salesloft, twilio, sendgrid, google, linkedin, airtable, supabase, etc.
- Headshots, team photos, department imagery (sales/marketing/finance), SDR illustrations.

## Rules of thumb for new work
1. One accent only — emerald `#22826F`; reserve mint `#52FEBF` for highlights/glows, never large fills.
2. Backgrounds stay near-white and warm; never pure gray. Ink is `#0F1C18`/near-black, not `#000`.
3. Generous whitespace, thin hairline borders (black at 6%), long soft shadows — never hard drop shadows.
4. Tight tracking on big type; wide tracking on tiny uppercase labels.
5. Glass + subtle gradient mesh for depth; keep motion minimal and purposeful.
