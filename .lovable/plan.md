## Goal

Fix four mobile-only issues on `src/pages/SdrLeadResponsePage.tsx` without changing the (working) desktop layout.

## 1. "Lead-to-meeting, on rails." wrap (line ~1712)

Current heading is one line on mobile. Insert a mobile-only break so it reads:

```
Lead-to-meeting,
on rails.
```

Implementation: split into two spans with `<br className="md:hidden" />` between, or wrap "on rails." in a span with `block md:inline`. Desktop remains a single line.

## 2. QuoteImageCard mobile caption / overlay placement (lines ~1633-1699)

Symptom on mobile: white overlay headline is pushed up off the dark area and the black caption visually overlaps the photo, so the quotation-mark/tail look is lost.

Cause: the card uses `aspect-[1054/1132]` so at ~358px wide the card is only ~385px tall. At that height, `text-xl` headline + `text-base` caption (which wraps to 2-3 lines on a narrow card) consume more vertical room than the 11.56% bottom band / 9.63% tail allow, so things break out of their bands.

Fix (mobile only — preserve desktop classes/percentages):
- Headline: keep `text-xl sm:text-2xl lg:text-3xl` but tighten `tracking-tight` and add a tiny `leading-tight` to keep it inside the dark band.
- Caption: change `text-sm sm:text-base` so mobile uses `text-xs` (`text-xs sm:text-base`), keep `max-w-xs`, and tighten `leading-tight` so the 2-line caption fits within the 9.63% tail whitespace.
- Slightly raise the headline on mobile by adding a mobile-only bottom override (e.g. inline style on a wrapper using `clamp` or a CSS variable). Simplest: split into two stacked absolute-position blocks gated by `sm:` so mobile uses `bottom: 13%` for the headline and `top: calc(96% - 4px)` for the caption, while `sm:` and above keep the existing `bottom: 11.56%` / `top: calc(94% - 6px)` values exactly.

Net result on mobile: same speech-bubble proportions, headline sits just above the tail, caption sits centered in the tail whitespace — visually matching desktop, just stacked.

## 3. "Live on your GTM stack, in days." wrap (line ~2029)

Current markup:

```
Live on your GTM stack,
<br />
<span class="hero-gradient-text">in days.</span>
```

Add a mobile-only break after "Live on your" so mobile renders three lines:

```
Live on your
GTM stack,
in days.
```

Implementation: insert `<br className="sm:hidden" />` between "Live on your" and "GTM stack,". Desktop (`sm:` and up) keeps the existing two-line layout.

## 4. Mobile scale-down for SpeedSceneStage and ResearchDraftStage (lines ~141, ~1221)

The two animation containers (the `StageFrame` blocks below "Respond in seconds" and "Reject generic AI outreach") are authored at desktop dimensions and overflow / smash on mobile. Mirror the `ScaleToFit` pattern already proven on `SdrWorkerFullPage.tsx` (lines 741-790).

Steps:

1. Inline a small `ScaleToFit` helper into `SdrLeadResponsePage.tsx` (copy of the one in SdrWorkerFullPage). It wraps children at a fixed `designWidth` and applies `transform: scale(parentWidth / designWidth)` from `top left`, with a `ResizeObserver`.
2. Add a `useIsMobile()` check (existing `src/hooks/use-mobile.tsx`) inside `SpeedSceneStage` and `ResearchDraftStage`.
3. When mobile, wrap the existing `<StageFrame>{...}</StageFrame>` content's inner children in `<ScaleToFit designWidth={720} aspect="16 / 10">`. The frame itself (border, glow, gradient) stays full-width; only the inner composition scales. `designWidth=720` is roughly the smallest desktop breakpoint where the layouts already fit cleanly; it can be tuned per stage if one needs `760` vs `680`.
4. Do NOT change desktop behavior — `ScaleToFit` is only mounted on the mobile branch.

This preserves all internal layout math (px-based widths like `max-w-[380px]`, `max-w-[440px]`, `max-w-[560px]`, the px gaps in the chip strip at line ~1458, etc.) — they render at desktop size in an off-screen 720px-wide canvas, then the whole thing is uniformly downscaled to fit the mobile viewport. Same trick already used on the SDR Worker Full page.

## Out of scope

- No desktop changes.
- No copy changes other than the heading break-points listed above.
- No changes to the three promise callouts, integration section, hero, navbar, or footer.
- No new dependencies.

## Files touched

- `src/pages/SdrLeadResponsePage.tsx` (only)
