# DECK.md — how the SDR sales deck works

Everything you need to present, edit, and extend the `/deck` presentation.

## Run

```bash
npm install && npm run dev
# open http://localhost:8080/deck
```

Nav: `→`/`Space` next · `←` back · `Home`/`End` ends · `F` fullscreen · click a progress dot to
jump. The bottom chrome shows "Section · n / total" and auto-hides on idle.

## Architecture

The deck is a fixed-canvas slideshow. Every slide is authored against a **1280 × 720** canvas and
the shell scales that canvas to fit any screen (letterboxed), so layouts are deterministic.

- **`src/components/deck/DeckShell.tsx`** — the stage. Scales the 1280×720 canvas to the viewport,
  handles keyboard nav, and renders the bottom chrome: progress dots **grouped by section**, the
  "Section · n / total" counter, prev/next, and a fullscreen toggle. Reads a `slides: Slide[]`.
- **`src/components/deck/primitives.tsx`** — shared building blocks:
  - `SlideFrame` (`tone="light"` warm mesh background, default; `tone="dark"` deep-emerald panel)
  - `Kicker` (the small uppercase eyebrow above each headline)
  - `BRAND` = `{ emerald: "#22826F", mint: "#52FEBF", ink: "#0F1C18" }`
- **`src/pages/DeckPage.tsx`** — the **slide registry**. This is the one file you edit to add,
  remove, or reorder slides.
- **`src/components/deck/slides/*.tsx`** — one component per slide.
- **`src/index.css`** — Gilroy `@font-face`, the brand CSS variables, and the deck keyframes
  (`deck-flow`, `deck-breathe`, `deck-orbit`, `deck-dash`), with a `prefers-reduced-motion` block
  that freezes the looping ones.

### Add or reorder a slide

1. Create `src/components/deck/slides/MySlide.tsx` (copy the shape of an existing one; wrap in
   `<SlideFrame>`, use `Kicker` + a headline, author within the 1280×720 canvas).
2. In `src/pages/DeckPage.tsx`: import it and add an entry to `slides[]`:
   ```ts
   { id: "my-slide", title: "My slide", section: "Results", render: () => <MySlide /> },
   ```
   Order in the array = order in the deck. `section` controls the dot grouping and the counter
   label; keep same-section slides contiguous.

## The 17 slides (order + sections)

| # | Section | Slide |
|---|---------|-------|
| 1 | Open | Cover — "Double your pipeline. This quarter." |
| 2 | Open | End-to-end flow (Signals → … → Meetings) |
| 3 | Signals | Signal intelligence (in-market feed) |
| 4 | Signals | Contact enrichment (account → buying group) |
| 5 | Signals | Research & personalization (→ personalized draft) |
| 6 | Outreach | Email payoff ("Lands in the primary inbox") |
| 7 | Outreach | LinkedIn payoff ("2x the replies, safely scaled") |
| 8 | System | Multi-agent system (architecture) |
| 9 | System | Autonomous loop ("0 human time") |
| 10 | Results | Best practices ("The playbook, built in", 287%) |
| 11 | Results | Team multiplier ("3 to 5x more pipeline. Same team.") |
| 12 | Results | Memgraph case study ($2.7M / 90 days) |
| 13 | Infrastructure | Email infrastructure (done for you) |
| 14 | Infrastructure | LinkedIn infrastructure (done for you) |
| 15 | Rollout | Implementation (Week 1-5) |
| 16 | Rollout | Packaging & pricing (3 tiers) |
| 17 | Rollout | Closing CTA ("Ready to 2x your meetings?") |

Narrative arc: find & prep (signals → enrichment → research) → it works (outreach payoffs) →
it's an autonomous system → why it's better + proof (best practices → 3-5x → case study) →
done-for-you infrastructure → rollout & pricing → CTA. One contact, "Sarah Kim @ Acme," threads
from the signal feed (3) through enrichment (4), research (5), to her reply in the inbox (6).

## Conventions

- **Type:** Gilroy (loaded in `index.css`, files in `public/fonts/`). Headlines bold/tight tracking.
- **Color:** one emerald accent (`#22826F`) + mint glow (`#52FEBF`) on warm near-white / near-black
  ink. Dark "peak" slides for rhythm (best-practices banner, case study, closing).
- **Gradient text** (`hero-gradient-text`) is **reserved for 3 peak slides only**: Cover, Case
  study, Closing. Every other headline uses weight contrast in solid ink (`font-medium` lead +
  `font-extrabold` key phrase). Don't add the gradient elsewhere.
- **Motion:** framer-motion entrance (fade + slide-up), ease `[0.22, 0.61, 0.36, 1]`. Looping
  effects via the `deck-*` CSS keyframes. No bounce.
- **Real brand marks** (Microsoft, Gmail, LinkedIn) come from `react-icons` (`FaMicrosoft`,
  `SiGmail`, `FaLinkedin`).
- **No em dashes** in copy.

## Gotchas (save yourself the debugging)

- **`Counter` in `src/components/ui/animated-counter.tsx` is janky for large numbers** (it ticks
  ~1/sec, so 600 would take minutes). The deck uses **static styled stats** instead. Don't wire
  big metrics through `Counter`.
- **framer-motion `scale` overrides inline `transform`.** If a `motion.div` animates `scale` and
  you also set `transform: "translate(-50%,-50%)"` in `style`, framer wins and your centering is
  silently dropped. Center such elements with `left`/`top` offsets (e.g. `left: cx - w/2`) instead.
  (This bit us on the autonomous-loop badge/nodes.)
- **Placeholder data to replace before external use:**
  - "Acme Corp" / "Sarah Kim" and the other prospect names are fictional sample data.
  - The **Memgraph case study** (slide 12): the Axel Goransson quote and the numbers ($2.7M, 600
    replies, 60 deals, 45k contacts) are **drafted samples** — confirm/replace with approved data.
  - The **Enrichment slide** (slide 4) data-provider "logos" are grayscale **wordmark text chips**,
    not real logos (network wasn't available to fetch them). To use real logos: drop files into
    `src/assets/logos/` and, in `src/components/deck/slides/EnrichmentSlide.tsx`, replace the
    `PROVIDERS` string array + the chip `<span>` with `<img>` tags.

## Verify a change

```bash
npx tsc --noEmit -p tsconfig.app.json   # types
npm run build                            # production build
npm run dev                              # then eyeball http://localhost:8080/deck
```
