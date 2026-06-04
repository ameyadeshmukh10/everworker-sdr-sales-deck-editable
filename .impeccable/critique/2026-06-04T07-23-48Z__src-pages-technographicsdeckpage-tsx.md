---
target: technographics deck (/deck-technographics)
total_score: 31
p0_count: 0
p1_count: 2
timestamp: 2026-06-04T07-23-48Z
slug: src-pages-technographicsdeckpage-tsx
---
# Critique — Technographic Signal Enrichment deck (/deck-technographics, 22 slides)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Progress dots + section label + N/22 all present. |
| 2 | Match System / Real World | 4 | Real DNS records, real vendor names, Testkube example speak the evaluator's language. |
| 3 | User Control and Freedom | 3 | Keyboard nav + fullscreen present; no "jump to section", auto-hiding chrome can disorient. |
| 4 | Consistency and Standards | 3 | Type/color system tight, but card-grid layout is *too* consistent: slides 3/11/12/13/17 blur together. |
| 5 | Error Prevention | 3 | Mostly clean; slide 15's 8-grid and appendix density risk "can't read that" live. |
| 6 | Recognition Rather Than Recall | 3 | Strong on diagrams; weak on slide 8 fusion math and slide 10/16 density. |
| 7 | Flexibility and Efficiency | 3 | Serves skim + deep-dive well; no clear "skip appendix" signal for the sales-only path. |
| 8 | Aesthetic and Minimalist Design | 3 | Beautiful surface; slides 8, 10, 15 exceed "one glanceable idea". |
| 9 | Error Recovery | 2 | Little re-orientation aid if a viewer lands mid-deck cold. |
| 10 | Help and Documentation | 3 | Good footnotes (4, 8, 14); dense diagrams (8 fusion, 22 file tree) assume prior knowledge. |
| **Total** | | **31/40** | **Strong — ships well, with a monotony + density ceiling.** |

## Anti-Patterns Verdict

**Does this look AI-generated? In stretches, yes — and a savvy CRO would feel it before naming it.**

**LLM assessment:** The tell is not individual slides (most are crafted) but the **repeated soft-white rounded icon-card row** that recurs on slides 3, 11, 12, 13, and 17 — five slides of the same archetype on warm-white. Slides **13 ("Know the stack") and 17 ("Built to be right") are near-interchangeable** 4-up / 3-up icon grids and make overlapping points. That repetition, plus a kicker on every slide, is the AI fingerprint. Counterweight: the dark/light cadence, the real diagrams (2, 5, 6, 7, 8, 9, 14, 16), and the disciplined typographic system keep most of the deck on the "designed" side.

**Deterministic scan:** The bundled detector failed to load ("bundled detector not found") — deterministic auto-scan unavailable; ran a manual ban grep instead. Results: **no em dashes, no pure-black hex, no side-stripe borders, no decorative glassmorphism.** `hero-gradient-text` appears in **exactly the 3 approved peaks** (Cover, slide 9, Closing) — clean discipline. **One real finding:** pure `#FFFFFF` text is used 9x on dark panels, but the brand spec for dark-panel foreground is a warm near-white (`60 10% 96%` ≈ `#F3F6F4`), not pure white. **False-positive correction:** Assessment A suspected the appendix taxonomy counts might not total; verified they sum to **exactly 7,528**, so the math is correct, leave it.

**Visual overlays:** None available — the detector that injects the in-page overlay did not load, so there is no `[Human]` overlay tab. Findings are from direct screenshot review of all 22 rendered slides (no console/page errors).

## Overall Impression

A brand-disciplined, credible, well-paced-at-the-edges deck. It opens strong (dark gradient cover), peaks correctly in the middle (slide 9 "DNS can't be faked"), and closes strong (dark CTA) — the dark-panel cadence is the single best structural decision and most AI decks miss it entirely. The biggest opportunity: the **slides 11–17 light-card valley** drains the momentum slide 9 builds, and it is also where the deck most reads as templated. Tighten that run and the deck moves from "strong" to "bespoke."

## What's Working

1. **Dark-panel cadence is genuinely well-judged.** Dark slides land on the three right beats — stakes (1), trust-climax (9), CTA (18), with a dark accent at the illustrative account (16). Rhythm most AI decks never attempt.
2. **Slide 7 (Static vs Rendered) is the best slide.** The greyed "not detected" vs mint-check "RECOVERED" side-by-side *shows* the value instead of asserting it. Glanceable, persuasive, zero prose. The model the benefit slides should follow.
3. **Domain credibility through real artifacts.** Real DNS records, the typed-pattern schema, and the `selection.testkube.json` brief-to-output on slide 14 earn a technical evaluator's trust because they show receipts, not hand-waving.

## Priority Issues

**[P1] The slides 11–17 light-card monotony valley + near-duplicate slides 13 & 17.**
- Why it matters: This is simultaneously the emotional valley after the slide-9 peak AND the primary "AI made this" tell. It is where a skeptical CRO disengages.
- Fix: Differentiate or merge 13 vs 17 (they overlap on "why knowing the stack matters"); reformat at least one of 11/12/13 out of the card-grid into a single hero visual or a dark accent beat to reset attention. Cutting one of 13/17 shortens the valley and removes the most duplicated archetype in one move.
- Suggested command: `layout` (re-rhythm the run), then `distill` (cut the redundant slide).

**[P1] The deck proves the engine is accurate, but never proves accuracy makes money — and never states an accuracy number.**
- Why it matters: For the CRO, outcome IS the purchase. There is no pipeline-lift / win-rate / hours-saved beat anywhere; it is almost all mechanism. Separately, the technical evaluator's first question is precision/recall — the deck even lists "precision vs recall" as a tuning input (slide 15) and asserts rigor (96 tests, 100% linted) but withholds the one accuracy metric they want.
- Fix: Add or repurpose one slide into an outcome beat (replace a redundant benefit card slide). Decide deliberately whether to state a precision figure or frame why it is selection-dependent.
- Suggested command: `craft` (a real outcome/proof slide).

**[P2] Over-dense mechanism slides 8 (fusion formula) and 10 (six focal regions).**
- Why it matters: These sit in the Mechanism section where the skeptic most needs to follow. Slide 8's literal `1-(1-0.85)(1-0.60)=0.94` reads as an engineer slide; slide 10 buries a strong claim ("hand-tuning wins") under two dense panels.
- Fix: On 8, make the *result* (0.94, "agreement raises certainty") the hero and demote the equation to a footnote/appendix. On 10, cut to the corroboration money-shot ("4 independent signals, one verdict") and move the curated-vs-master detail to the appendix (slides 20–22 already hold reference depth).
- Suggested command: `distill`.

**[P2] Slide 13 ("Know the stack") is the most generic slide — textbook 4-up scaffolding.**
- Why it matters: Four near-identical mint icons + heading + body, no product truth, indistinguishable from slide 17. It is the slide a critic points to and says "AI".
- Fix: Replace the four abstractions (Displacement / Qualification / Personalization / Routing) with one concrete worked example (e.g. an account where a competitor tool was detected → the rep's opening line). Show one, do not list four. Model it on slide 16.
- Suggested command: `bolder` or `craft`.

**[P3] Pure `#FFFFFF` headline text on dark panels instead of the brand's warm near-white.**
- Why it matters: Minor brand-consistency drift; DESIGN.md specifies dark-panel foreground `60 10% 96%` (≈ `#F3F6F4`), and pure white reads a touch colder than the warm system.
- Fix: Swap `#FFFFFF` for the warm near-white token on dark-slide headlines (slides 1, 9, 16, 18 and the Pipeline/WhereThisFits white text).
- Suggested command: `polish`.

## Persona Red Flags

**Skeptical CRO on a live call:** Disengages in the 11–17 light-card run; bounces off slide 8's formula ("engineer slide, not revenue slide"); registers 13/17 redundancy as padding ("didn't we just see this?"). Core gap: wants outcome/$ proof, and the deck proves accuracy, not revenue.

**Technical RevOps / data evaluator:** Well-served overall (this is the deck's sweet spot). Open questions the deck leaves: data freshness / re-crawl cadence (slide 22 says "re-import on demand" but latency is vague); and the **missing precision/recall number** despite asserting rigor — the one metric they ask for first.

## Minor Observations

- Slide 11's third card "paid · ent" breaks the metric pattern of the first two (100%, 96) — a string masquerading as a hero number; make all three the same kind of fact or restyle the third.
- Slide 17 kicker "THE WHOLE STORY" is filler over "Built to be right"; it restates nothing.
- The "two pipelines" point is made at least four times (slides 1, 5, 6/7, 17) — slightly over-repeated even for sales.
- Slide 16 (named "Northwind" account, "Strong fit" pill) is the strongest benefit slide because it is concrete; it is the model slide 13 should follow.
- Consider an explicit "Appendix — reference, not narrated" divider so slides 19–22 read as intentional depth-on-demand rather than a dense tail.
- Typographic hierarchy is consistent and correct throughout (bold punch-word per headline); no hierarchy failures.

## Questions to Consider

1. Where is the revenue proof? The deck proves the engine is accurate but never proves accuracy makes money. Should an outcome slide replace one of the redundant benefit-card slides (13 or 17)?
2. You claim "can't be faked" and "RECOVERED" but never state a precision number, while listing "precision vs recall" as a tuning input. Is omitting it a confidence signal or a tell?
3. Could slides 13 and 17 be a single slide? They answer the same question with overlapping framing.
4. Does the live deck need four appendix slides, or 2 narrated + a "full reference available" pointer, so it reads as 18 tight slides with depth-on-demand?
