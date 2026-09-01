# EverWorker Sales Decks as Code

**A GTM engineering project: the entire sales-enablement asset library for EverWorker's
Pipeline Generation AI Solution, rebuilt solo in weeks as coded web experiences — with a
repeatable, scripted pipeline that turns every deck into a one-file interactive experience
and a PDF leave-behind.**

This repo is both a working product and a proof of method. The method is **design
engineering applied to sales enablement**: instead of building decks in Gamma, Canva,
PowerPoint, or Figma, I forked the EverWorker branded website code and built sales decks
and assets *out of the website itself* — same design system, same components, same brand
fidelity — then wrote a build pipeline so any deck exports on demand into the two formats
reps actually need.

## Why build decks this way

Sales assets are traditionally the slowest artifact in GTM. A high-fidelity deck takes
months, a designer, and a review loop; once shipped it is hard to share, hard to change,
and drifts off-brand the first time a rep edits it. Every tool in the usual lineup trades
away something that matters:

| Tool | What you give up |
|------|------------------|
| PowerPoint / Google Slides | Brand fidelity, animation quality, any real design system |
| Canva / Gamma | Control, product-grade diagrams, versioning, programmatic reuse |
| Figma | Interactivity, and every export is a manual designer task |
| All of them | Git history, code review, componentization, AI-assisted editing |

Treating decks as code flips each of those:

- **Pixel-perfect brand fidelity for free.** The decks are built from the actual
  EverWorker website codebase — its Tailwind tokens, Gilroy typography, gradient system,
  and shadcn/ui components. A slide can't drift off-brand because it's rendered by the
  brand's own design system.
- **Web-grade presentation quality.** Framer-motion entrance choreography, animated
  diagrams, live UI mockups inside slides — things no slide tool produces — presented
  full-screen with keyboard navigation like a native presentation app.
- **Distribution is a build artifact, not a project.** One command produces a
  self-contained HTML file (open it from an email attachment, fully offline, animations
  intact) and a PDF leave-behind. No hosting, no licenses, no "can you export that for me."
- **Reps can customize with AI.** Because every slide is a typed React component behind a
  one-file registry, a rep can point Claude Code at the repo and say "swap the case study
  for [prospect]'s industry" and get an on-brand variant in minutes.
- **It compounds.** Every new deck reuses the shell, the primitives, the export scripts,
  and the documented conventions. The second deck in this repo shipped as a config file
  plus slides.

The result: the entire sales-enablement and artifact library for the EverWorker Pipeline
Generation AI Solution — first-call deck, technical deep-dive, product one-pagers, and
CMS-ready site assets — rebuilt by one person, in weeks, at a fidelity level that
previously required a design team and a quarter.

## What's in the repo

### 1. The SDR AI Worker sales deck — `/deck`

The flagship first-call deck for the Pipeline Generation AI Solution: **17 full-screen
16:9 slides in 6 sections**, built for a live sales call — diagram-led, light on text,
heavy on motion.

The narrative arc is engineered, not assembled: *find & prep* (signal intelligence →
contact enrichment → research & personalization) → *it works* (email and LinkedIn
payoffs) → *it's an autonomous multi-agent system* → *why it's better + proof* (built-in
playbook, 3–5x team multiplier, case study) → *done-for-you infrastructure* → *rollout,
pricing, CTA*. A single fictional prospect ("Sarah Kim @ Acme") threads from the signal
feed through enrichment and research all the way to her reply landing in the inbox — the
deck demos the product's flow by *being* the product's flow.

- Slide registry: `src/pages/DeckPage.tsx` (order, sections — the one file to edit)
- Slides: `src/components/deck/slides/*.tsx`, one component each
- Full slide-by-slide map, conventions, and gotchas: **[DECK.md](./DECK.md)**

### 2. The Technographic Signal Intelligence deck — `/deck-technographics`

The late-stage / technical-evaluation companion: a deep dive into the signal-detection
layer behind the SDR Worker. **10 narrative slides + an 11-slide reference appendix**
(DNS and web detection pipelines, confidence scoring & fusion, corroboration, guardrails,
coverage, taxonomy map, schema reference).

It's one deck serving two audiences: the narrative slides carry a sales motion, the
appendix survives a technical buyer's scrutiny. The framework's `appendix: true` flag
keeps appendix slides out of the progress dots and slide counter — and, downstream, out
of the PDF — so the leave-behind stays a tight 10 pages while the live deck can field any
"how does that actually work?" question on the spot.

- Registry: `src/pages/TechnographicsDeckPage.tsx`
- Slides: `src/components/deck/slides/Tech*.tsx`

### 3. The deck framework — `src/components/deck/`

The reusable presentation engine both decks (and every deck built after this repo) run on:

- **`DeckShell.tsx`** — a fixed **1280×720 authoring canvas** scaled to any viewport
  (letterboxed), so layouts are deterministic on every screen and in every export.
  Keyboard navigation (`→`/`Space`, `←`, `Home`/`End`, `F` for fullscreen),
  section-grouped progress dots, a "Section · n / total" counter, and presenter chrome
  that auto-hides when the mouse idles. First-class appendix-slide support.
- **`primitives.tsx`** — `SlideFrame` (light warm-mesh / dark deep-emerald tones),
  `Kicker`, and the `BRAND` color tokens, shared by every slide.
- **`src/index.css`** — Gilroy `@font-face`, brand CSS variables, and the deck keyframe
  animations, with a `prefers-reduced-motion` fallback.

### 4. The export pipeline — the "repeatable scripted skill"

Each deck ships as **two artifacts from one command**:

```bash
npm run export:deck        # SDR deck  → export-deck/
npm run export:deck-tech   # Technographics deck → export-deck-technographics/
```

**Artifact 1 — a single self-contained interactive HTML file** (~2.7 MB).
A dedicated Vite build target per deck (`vite.config.deck.ts` +
`deck-export.html` → `src/deck-main.tsx`) bundles *only* the deck through
`vite-plugin-singlefile`: all JS, CSS, all 7 Gilroy font weights, and every image are
inlined as base64. The output opens from a double-click — no server, no install, no
internet — with the full keyboard nav and animation experience of the dev route. Email
it, drop it in Slack or Drive, done. (`scripts/finalize-deck.mjs` renames it to its
shareable name, e.g. `EverWorker-SDR-Deck.html`.)

**Artifact 2 — a PDF leave-behind**, one landscape 16:9 page per slide.
`scripts/export-deck-pdf.mjs` drives the standalone HTML with headless Chromium
(Playwright) at the deck's native 1280×720 canvas at 2x pixel density: it reads the slide
count from the deck's own on-screen counter (so it needs no hardcoded slide list and
automatically excludes appendix slides), advances slide by slide with keypresses, waits
for the framer-motion entrances to settle and the presenter chrome to auto-hide, captures
each frame, and assembles the pages with `pdf-lib`. Animations freeze at their final
frame, so the PDF looks like the deck at its best moment.

The whole pipeline is self-calibrating against the deck it exports: add, remove, or
reorder slides in the registry and both artifacts stay correct with zero script changes.
Adding a whole new deck to the pipeline is a five-file recipe (see
[Adding another deck](#adding-another-deck) below).

### 5. Static site + CMS exports — `export/`

Deck engineering was only half the asset library. The same design-engineering pass also
produced dependency-free, hand-tuned static HTML versions of the entire EverWorker
marketing surface, ready to paste into any CMS:

- **`export/index.html` + `export/pages/*.html`** — 20+ standalone pages (homepage,
  department pages, every AI Worker page, the full SDR long-form page, nav, modals, FAQ)
  as pure HTML/CSS/JS with the brand's tokens and scroll-reveal animations rebuilt
  inline — no React, no build step.
- **`export/hubspot-homepage.html`** — the homepage as a HubSpot Design Manager
  **HubL template**, with in-file setup instructions (theme folder layout, asset
  uploads, `get_asset_url` font wiring).
- **`export/sdr-3-part/`** — the SDR page factored into HubSpot's preferred
  three-file structure (HubL template + external CSS + JS).

### 6. The design-engineering layer

The docs that make the system operable by anyone (human or AI) who didn't build it:

- **[DECK.md](./DECK.md)** — deck architecture, the slide-by-slide map, authoring
  conventions (where gradient text is allowed, motion easing, no em dashes), and
  hard-won gotchas.
- **[EVERWORKER_BRAND.md](./EVERWORKER_BRAND.md)** — the distilled EverWorker design
  system: tokens, gradients, typography, voice.
- **[DESIGN.md](./DESIGN.md)** / **[PRODUCT.md](./PRODUCT.md)** — machine-readable design
  and product context consumed by AI design tooling (the third-party `impeccable` Claude
  Code skill, installed separately) during iteration.
- **`.impeccable/critique/`** — saved AI design-review snapshots from the build process.

These files are why "reps customize decks with Claude Code" works in practice: an AI
agent dropped into this repo has the brand system, the conventions, and the pitfalls in
context before it touches a slide.

## How reps use it

1. **Present live** — open the single-file HTML (or run `/deck` locally) and present
   full-screen: a web experience with animation and fidelity no slide tool matches.
2. **Customize per deal** — ask Claude Code to tailor slides (swap the case study,
   adjust the pricing tier, re-theme a diagram for the prospect's stack). Typed
   components + a one-file registry + the docs above make this a minutes-long, on-brand
   edit instead of a designer request.
3. **Leave behind** — export and send the PDF after the call, or send the interactive
   HTML file itself for a wow moment in the follow-up thread.

## What grew out of this

The pattern in this repo became the production line for EverWorker's deck work beyond
pipeline generation (each descendant lives in its own repo):

- **Late-stage / ABM sales decks** — account-specific decks built for named deals,
  including the **Branch**, **Tena**, **ZenQMS**, and **Bites** decks.
- **Implementation & solution decks** — the deck format carried into delivery, used to
  present implementations and solution designs.
- **Internal decks** — the **investor deck**, board presentations, and the
  **repeatable-process** decks documenting the GTM machine itself.

Same framework, same export pipeline, new registry + slides per deck. That's the point:
the first deck was an engineering project; every deck after it was content.

## Quickstart

```bash
npm install
npm run dev
```

Then open:

- **SDR sales deck:** http://localhost:8080/deck
- **Technographics deck:** http://localhost:8080/deck-technographics
- The marketing site itself: http://localhost:8080/

**Presenting:** `→` / `Space` next · `←` back · `Home` / `End` jump to ends ·
`F` fullscreen · click a progress dot to jump to a section. The bottom chrome shows your
position (e.g. "Outreach · 7 / 17") and auto-hides when the mouse is idle.

### Export commands

| Command | Output |
|---------|--------|
| `npm run export:deck` | SDR deck: standalone HTML **and** PDF → `export-deck/` |
| `npm run build:deck` | SDR deck HTML only |
| `npm run export:pdf` | SDR deck PDF only (needs the HTML built first) |
| `npm run export:deck-tech` | Technographics deck: HTML **and** PDF → `export-deck-technographics/` |
| `npm run build:deck-tech` / `npm run export:pdf-tech` | Its individual halves |

Output directories are git-ignored — they're regenerated build artifacts. None of the
export machinery touches the live site or the dev routes.

### Verify a change

```bash
npx tsc --noEmit -p tsconfig.app.json   # types
npm run build                            # production build
npm run test                             # vitest
```

## Extending

**Add or reorder a slide:** create `src/components/deck/slides/MySlide.tsx` (copy an
existing one; wrap in `<SlideFrame>`, author against the 1280×720 canvas) and add one
entry to the deck's registry array. Array order = deck order. Details in
[DECK.md](./DECK.md).

### Adding another deck

The repeatable recipe, exactly as the technographics deck was added:

1. A registry page (`src/pages/MyDeckPage.tsx`) rendering `<DeckShell slides={...} />`,
   plus a route in `src/App.tsx` — this alone gives you the live presentable deck.
2. An export entry point: `deck-mydeck-export.html` → `src/deck-mydeck-main.tsx`
   (mounts just the deck, no router).
3. A Vite config: copy `vite.config.deck.ts`, change the input and `outDir`.
4. Finalize + PDF scripts: copy the two files in `scripts/`, change the filenames.
5. Three npm scripts in `package.json` (`build:*`, `export:pdf-*`, `export:*`).

Steps 2–5 are mechanical copies; the framework and pipeline need no changes.

## Heads-up: sample data

Several slides carry **placeholder** content: "Acme Corp" / "Sarah Kim" are fictional,
the case-study quote and numbers are drafted samples, and the data-provider "logos" on
the Enrichment slide are styled wordmarks rather than real logo files. Swap in approved
content before external use — [DECK.md](./DECK.md) lists exactly where.

## Stack

Vite · React 18 · TypeScript · Tailwind (+ shadcn/ui, Radix) · framer-motion ·
`vite-plugin-singlefile` · Playwright · `pdf-lib` · Gilroy type system.
