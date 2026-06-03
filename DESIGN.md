# DESIGN

Source of truth for tokens: `src/index.css` (CSS vars) + `tailwind.config.ts`.
Full distilled brand notes live at repo root: `./EVERWORKER_BRAND.md`.

## Color (HSL tokens, light mode)
- background `60 10% 98%` (warm off-white) · foreground/ink `240 10% 6%` (≈ `#0F1C18`)
- card `0 0% 100%` · secondary/muted surface `60 6% 94%` · muted text `240 5% 46%`
- **accent (brand emerald) `164 60% 32%` ≈ `#22826F`**
- **accent-light (mint, glow only) `160 99% 66%` ≈ `#52FEBF`**
- border/input `60 6% 90%` · destructive `349 100% 53%`
- section-dark bg `240 10% 6%`, fg `60 10% 96%`

Strategy: **Restrained-plus** — warm neutral surfaces, single emerald accent, mint
reserved for glows/highlights (never large fills). Dark "section-dark" panels for
contrast moments (e.g. final/closing slide).

### Signature gradients
- hero text: `linear-gradient(90deg,#1C826E,#33B690)` clipped to text (brand element)
- brand fill (chips, avatars, nodes): `linear-gradient(135deg,#22826F,#52FEBF)` + glow `0 0 28px rgba(82,254,191,.55)`
- gradient mesh bg: layered radial ellipses accent 8% / blue 6% / gold 5% on near-white
- dark panel: `radial-gradient(ellipse 60% 80% at 50% 0%, rgba(82,254,191,.35), transparent 60%), linear-gradient(180deg,#0F1C18,#1d3530)`

## Typography
- **Gilroy** (Light 300 → Heavy 900), fallback `system-ui`. Loaded via @font-face in index.css; TTFs in `public/fonts/`.
- Headings: `font-bold`, `tracking-tight`, tight leading (`leading-[0.95]`–`[1.05]`).
- Display/hero scale on slides: `clamp` up to ~`6rem`.
- Body: muted-foreground, `leading-relaxed`.
- Eyebrows/labels: 10–13px, `font-semibold`, wide tracking (`tracking-[0.2em]` uppercase), accent or 45–55% ink.

## Surfaces & elevation
- glass: `rgba(255,255,255,.6)` + `backdrop-blur(20px)` + 1px white/30% border (`.glass`, `.glass-strong`, `.glass-subtle`).
- UI cards: white gradient `linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,255,255,.88))`, blur 14px, inset top highlight + long shadow `0 18px 40px -24px rgba(15,40,32,.22)`, hairline `border-black/[0.06]`.
- Shadows are long + soft, low opacity, green-tinted (`rgba(15,40,32,…)`). Never hard black drop shadows.
- Radius: `0.75rem` (lg); CTA buttons tight `4px`.

## Components / motifs (reuse from existing site)
- Flow nodes: rounded pills, white w/ hairline border for steps, gradient-filled for the terminal "win" node; arrows between.
- Status chips: uppercase 10px semibold, accent or gradient fill w/ mint glow.
- Gradient avatars/initials (135° emerald→mint, white bold, mint glow).
- Sequence timeline: gradient progress line emerald→mint fading to faint emerald; done nodes glow.
- Logo marquee (`animate-logo-marquee`, 60s linear).

## Motion
- framer-motion: gentle fade + slide-up (`y:16–24 → 0`, 0.4–0.7s, small stagger). Ease-out.
- `shimmer-sweep` one-shot highlight. Live "running" diagrams use a single rAF phase clock (see SdrWorkerFullPage `LeadFunnelDiagram`).
- No bounce/elastic. Don't animate layout props.

## Deck-specific conventions (new, for /deck route)
- Each slide is a fixed 16:9 stage, letterboxed/centered to viewport; never scrolls.
- Keyboard nav: ArrowRight/Space next, ArrowLeft prev (and on-screen affordance).
- Generous margins; one dominant idea per slide; text minimal, diagram-led.
- Slide background: subtle `gradient-mesh`; dark panel reserved for closing/impact slides.
