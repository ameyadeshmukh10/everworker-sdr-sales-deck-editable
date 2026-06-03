# EverWorker — SDR AI Worker site + sales deck

A Vite + React + TypeScript + Tailwind app (forked from the EverWorker marketing site) that also
hosts a **17-slide, full-screen sales presentation** for the SDR AI Worker at the `/deck` route.

The deck is the main attraction here. It's a presenter aid for a live sales call: 16:9 slides,
keyboard navigation, diagram/UI-led, light on text. See **[DECK.md](./DECK.md)** for how it's
built and how to extend it.

## Run it

```bash
npm install
npm run dev
```

Then open:

- **The deck:** http://localhost:8080/deck
- The marketing site: http://localhost:8080/

**Presenting the deck:** `→` / `Space` next · `←` back · `Home` / `End` jump to ends ·
`F` fullscreen · click a progress dot to jump to any section. The bottom chrome shows your
section + position (e.g. "Outreach · 7 / 17") and auto-hides when the mouse is idle.

## Where the deck lives

| Path | What |
|------|------|
| `src/pages/DeckPage.tsx` | The slide registry (`slides[]`) — add/reorder slides here |
| `src/components/deck/DeckShell.tsx` | The 16:9 stage, keyboard nav, section-grouped progress dots |
| `src/components/deck/primitives.tsx` | `SlideFrame`, `Kicker`, `BRAND` tokens shared by slides |
| `src/components/deck/slides/*.tsx` | One file per slide (17 of them) |
| `src/index.css` | Gilroy `@font-face`, brand CSS variables, deck keyframes |
| `src/App.tsx` | The `/deck` route |
| `src/assets/`, `public/fonts/` | Logos, badges, Gilroy fonts |

## Design context

- **[DECK.md](./DECK.md)** — architecture, slide-by-slide map, conventions, and gotchas. Start here.
- **[EVERWORKER_BRAND.md](./EVERWORKER_BRAND.md)** — the distilled Everworker design system.
- **[PRODUCT.md](./PRODUCT.md)** / **[DESIGN.md](./DESIGN.md)** — context files used by the
  `impeccable` design skill (see below).
- `.impeccable/critique/` — saved design-review snapshots.

## A note on the `impeccable` skill

This deck was built and iterated with the third-party **`impeccable`** Claude Code skill. That
skill is **not** included in this repo (it lives outside any project, in `~/.claude/skills/`).
This repo only carries its *outputs* (PRODUCT.md, DESIGN.md, the critique snapshots). If you want
to keep iterating with `/impeccable`, install the skill separately on your machine; otherwise the
deck is plain React and edits like any other component.

## Heads-up: sample data

Several slides use **placeholder** content: "Acme Corp" / "Sarah Kim" are fictional, the Memgraph
case-study quote and numbers are drafted samples, and the data-provider "logos" on the Enrichment
slide are styled wordmarks (not real logo files). Swap in real content before using externally.
See DECK.md for exactly where.
