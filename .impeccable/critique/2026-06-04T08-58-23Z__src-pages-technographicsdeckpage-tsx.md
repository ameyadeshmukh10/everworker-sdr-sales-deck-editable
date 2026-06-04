---
target: technographics deck slides 1-10 (narrative)
total_score: 32
p0_count: 0
p1_count: 1
timestamp: 2026-06-04T08-58-23Z
slug: src-pages-technographicsdeckpage-tsx
---
# Critique — Technographics deck, narrative slides 1–10 (appendix out of scope)

Scope: the 10-slide live narrative only (slides 11–21 appendix excluded per request).

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Progress bar + section label good, but the counter reads "N / 21" — it advertises the 11-slide appendix to the room and undercuts the lean-10 story. |
| 2 | Match System / Real World | 4 | Buyer-native language; real vendor names, real email, real JSON. |
| 3 | User Control & Freedom | 3 | Keyboard nav fine; no visible jump-to-section, acceptable for a linear aid. |
| 4 | Consistency & Standards | 4 | Type, icons, radii, eyebrows consistent; gradient-text correctly confined to 1/5/10. |
| 5 | Error Prevention | 3 | Low surface; the "/21" counter is the one place a confused-room question starts. |
| 6 | Recognition vs Recall | 3 | Slide 4 (2 pipelines) → slide 5 (4 signals) mapping is implicit, not shown. |
| 7 | Flexibility & Efficiency | 3 | Slide 8 JSON is an efficiency cost for non-technical viewers. |
| 8 | Aesthetic & Minimalist | 4 | Genuinely restrained, one idea per slide, mint as accent not fill. The strongest dimension. |
| 9 | Error Recovery | 2 | The 10-slide story vs the "/21" shown count is an unrecovered inconsistency. |
| 10 | Help & Documentation | 3 | Eyebrow labels are adequate in-deck signposting. |
| **Total** | | **32/40** | **Strong / professional** (top of the realistic band). |

## Anti-Patterns Verdict — does this look AI-generated?

**Low slop overall** — a skeptical buyer would not immediately say "AI made this," because the diagrams (4, 5), the real `selection.testkube.json` (8), and the personalized email (9) are too specific to be template output.

- **LLM assessment:** Two slides are the soft spots. **Slides 3 (problem) and 6 (what it unlocks) are both "rows of equal white cards"** with identical grammar (icon-top, bold title, 2-line body); they rhyme and are the deck's main slop exposure. The **cover's 3-stat triplet** (7,528 / 108 / 2) is the canonical AI-deck cover pattern, and "2 pipelines" is a weak third stat. Everything else (4, 5, 7, 8, 9) actively defeats the slop reflex.
- **Deterministic scan:** Bundled detector unavailable (`bundled detector not found`) → manual ban grep on all 10 narrative files. **Clean:** no em dashes, no pure `#000`/`#fff` (warm `#F6F6F4` held on dark panels), no side-stripe borders, no decorative glass. `hero-gradient-text` in exactly the 3 approved peaks (Cover, slide 5, Closing). No violations.
- **Visual overlays:** None available (the overlay injector is part of the detector that didn't load). Findings from direct screenshot review of all 10 slides; no console errors.

## Overall Impression
A polished, well-art-directed deck (≈32/40, up from the 31 full-deck baseline) that mostly defeats the "AI made this" reflex through real, specific product artifacts. Slide 5 ("Detection that builds a case" → independent signals → a single bold 0.94) is the standout and earns its dark/gradient peak. The 10 read as a coherent standalone story. The biggest single drag is not a slide at all: the chrome counter says **"/ 21"**, broadcasting the appendix and quietly contradicting the lean narrative the deck worked to build.

## What's Working
1. **Slide 5 is a genuinely sophisticated trust device.** Reframing a confidence score as a built legal case (independent corroborating signals → one verdict) is non-generic, and 4 plain-English rows against a single bold 0.94 is the right glanceable contrast.
2. **Real, specific proof artifacts (7, 8, 9).** Named customers with their actual signal sets, a real-looking config JSON, and an email that turns the *detected* stack (Cypress, k6, Jenkins, EKS) into an opening line. This trio proves the mechanism instead of asserting it.
3. **Disciplined brand restraint.** Gradient-text confined to 3 peaks, mint as glow only, consistent system. Looks art-directed by one person with taste.

## Priority Issues

**[P1] The chrome counter "/ 21" broadcasts the appendix and breaks the lean-10 promise.** On a live call, the footer reading "Detection 4 / 21" or "Close 10 / 21" tells the room there are 11 more slides, inviting "how long is this?" friction and contradicting the deliberate tightness. Fix: scope the counter/progress to the 10-slide main arc (show "/ 10"), or mark appendix slides so they're excluded from the main count and progress dots. *Direct DeckShell/registry fix (I can do it); closest command: `clarify`.*

**[P2] Slide 4's collector micro-labels are unreadable noise on a room screen.** `A·MX·TXT·NS·SOA·CNAME` and `script src · window globals · cookies · headers · HTML · meta` are too small to read live and pile a dense second layer onto the deck's densest slide. Fix: demote to one muted descriptor per node ("DNS records" / "rendered page") or drop on the main slide; the branch→Fusion→detections shape is the actual idea. *Command: `distill`.*

**[P2] Slides 3 and 6 are twin card-rows.** Two slides of equal white cards with identical grammar read as siblings and flatten the emotional difference between a *problem* (should feel sharp/broken) and a *benefit* (should feel expansive). Fix: make slide 3 feel like failure (a single broken/false-positive detection artifact) and keep slide 6 as the clean grid, so they no longer rhyme. *Command: `bolder` (on slide 3).*

**[P2] The cover 3-stat triplet is the deck's most template-shaped moment, and it argues breadth while the thesis is accuracy.** "7,528 / 108 / 2 pipelines" is the canonical AI cover; "2 pipelines" is a weak mechanism-detail stat; and leading with *breadth* (7,528) fights the deck's own accuracy-over-breadth thesis (slides 3, 5). Fix: keep 7,528 + 108, replace "2 pipelines" with an accuracy/confidence stat that sets up slide 5, or break the perfect three-up symmetry. *Command: `layout` / `bolder`.*

**[P3] Slide 9's "ILLUSTRATIVE" tag slightly deflates the payoff.** At the emotional payoff, the tag whispers "not a real send" and a skeptic reads "you don't have a real example." Fix: if any of it is from a real Testkube run, relabel to "From a real detection"; otherwise make the tag much quieter so it doesn't compete with the headline. *Command: `clarify` / `polish`.*

## Persona Red Flags
**Skeptical CRO:** the "/21" counter triggers "how long is this?"; slide 8 (JSON) is where they disengage with no one-line revenue anchor; slide 3's three tidy cards don't make the *pain* feel expensive (wasted reps, blown quarters); "ILLUSTRATIVE" reads as "no real example."

**Technical RevOps evaluator:** slide 4 (2 pipelines) → slide 5 (4 signals) doesn't visibly roll up, leaving a seam; the Fusion node's noisy-OR formula is half-shown and unreadable (invites "is this real?"); and across all 10 slides there's no corpus-level accuracy / freshness / false-positive figure, only the single 0.94 example.

## Minor Observations
- Slide 7's full-color customer logos on light tiles sit **well** on the dark slide; the tile treatment is the right way to place 3 different brand palettes on dark.
- Slide 2's node sublabels are the right micro-label density; slide 4 overdoes the same idea.
- Slide 6's four card bodies are the most generic copy in the deck.
- Eyebrow labels are excellent wayfinding but very uniform; the deck leans on them for slide identity.

## Questions to Consider
1. Does slide 6 (four benefit cards) earn its place between your two strongest slides (5 and 7/9)? Could its four ideas become a one-line strip to buy tempo?
2. The cover leads with "7,528 vendors" (breadth) but the whole deck argues accuracy over breadth. Is the headline stat fighting the thesis?
3. Could slides 3 and 4 merge into a single "bad guess vs corroborated verdict" before/after, hitting harder than two slides?
4. Is "ILLUSTRATIVE" on slide 9 an honesty badge or a confidence leak at the worst possible moment?
