---
target: technographics deck slides 1-10 (re-run)
total_score: 33
p0_count: 0
p1_count: 2
timestamp: 2026-06-04T14-32-58Z
slug: src-pages-technographicsdeckpage-tsx
---
# Critique — Technographics deck, narrative slides 1–10 (re-run; appendix out of scope)

Scope: the 10-slide live narrative only. Re-run after fixes to the counter, slide 3, slide 4, slide 9, and the cover.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | RESOLVED. Counter now reads "Section · N / 10" with 10 dots; the prior "/21" leak is gone (verified). |
| 2 | Match System / Real World | 4 | RevOps-native language, real vendors/JSON/email. |
| 3 | User Control & Freedom | 3 | Arrows + dot-jump + fullscreen; no section-jump/escape affordance. |
| 4 | Consistency & Standards | 3 | One nit: chrome section labels mix categories ("Open"/"Close" are states; "Detection"/"Activation" are sections). |
| 5 | Error Prevention | 3 | Nothing misleads; struck-through "In use" on slide 3 is clear and intentional. |
| 6 | Recognition vs Recall | 3 | Slide 5's 4 signals don't visibly map back to slide 4's 2 pipelines (recall tax at the peak). |
| 7 | Flexibility & Efficiency | 3 | Dot-jump exists; no keyboard legend. Fine. |
| 8 | Aesthetic & Minimalist | 4 | Strong restraint; mint as accent not fill; good whitespace. |
| 9 | Error Recovery | 3 | Deck never strands the viewer. |
| 10 | Help & Documentation | 3 | Chrome labels orient adequately; appendix (out of scope) carries depth. |
| **Total** | | **33/40** | **Good, ship-ready with targeted polish** (up from 32). |

## Anti-Patterns Verdict
**No true slop.** Specificity is the moat — real customer logos (7), real `selection.testkube.json` (8), a real-detection email naming Cypress/k6/Jenkins/EKS (9).
- **3-vs-6 question resolved:** slide 3 is now a "Legacy technographic report" artifact (header, struck-through text, STALE/MISSED/INFERRED pills) and reads as a *document*, no longer a twin of slide 6's card grid.
- Remaining soft spots: **slide 6** is a stock 4-up benefit grid (carried by its copy), and **cover (1) + closing (10)** share a centered-stack dark template silhouette.
- **Deterministic scan:** detector unavailable (`bundled detector not found`) → manual ban grep on all 10 files: **clean** (no em dashes, no pure `#000`/`#fff`, no side-stripes, no decorative glass; `hero-gradient-text` only on Cover/slide 5/Closing). No overlay (injector tied to the missing detector).

## Overall Impression
Materially improved (33/40). The weakest link is **no longer slop or visual** — it's the **logical/credibility layer**: an unexplained 2-pipeline→4-signal seam right at the trust peak, and the absence of any corpus-level accuracy number for a skeptical CRO. Fix those two and the deck moves from "convincing demo" to "hard to argue with."

## What's Working
1. **Specificity as the spine** — real logos, real JSON, a real-detection email. Refuses to be abstract; that's what separates it from generic AI decks.
2. **Slide 5 is an excellent argument slide** — "independent signals vote → 0.94 fused confidence" turns an abstract accuracy claim into a visual proof; gradient headline used exactly where it should be.
3. **Slide 3 is now a concrete artifact** — the legacy-report framing makes the villain visual and de-twins it from slide 6.

## Priority Issues

**[P1] The 4→5 mapping seam (now the weakest logical link).** Slide 4 establishes **2** pipelines (DNS, Web); slide 5 presents **4** signals (DNS record, Rendered global, Script src, Cookie) with nothing connecting them. A RevOps evaluator asks "where did 4 come from?" and a CRO feels an unexplained jump at the trust peak. Fix: on slide 5, group/label the 4 signals under their pipeline (DNS record + Rendered = web/DNS lineage tag, or color-code) so "2 pipelines produced these signals" is visible. *Command: `layout`.*

**[P1] No corpus-level accuracy / freshness number in 1–10.** The deck shows one detection at 0.94 and claims "confidence-scored, not guessed," but never a portfolio proof (precision/recall, false-positive rate, recrawl cadence). A CRO reads "0.94 on one example" as an anecdote. The cover's 7,528/108 measures breadth, not correctness. Fix: add one hard aggregate stat near slide 5, OR (honest alternative) show a *low-confidence → suppressed* example to prove rigor without a fabricated %. *Command: `craft` (needs a real figure or the suppressed-example approach).*

**[P2] Slide 8 JSON is not anchored to revenue for a CRO.** Impressive engineering proof, but the only business framing is a grey efficiency footer. A CRO doesn't buy config files. Fix: add a result chip tying the tuned profile to an outcome ("only accounts your reps can win" / reply-rate lift). *Command: `clarify`.*

**[P2] Cover + Closing share a template silhouette.** Slides 1 and 10 are near-identical dark centered stacks, leaving both bookends as the most generic slides and contributing to the 9→10 sameness. Fix: differentiate the closer, e.g., reprise the 0.94 or the email behind the CTA so the end is a callback to the proof, not a blank reset. *Command: `bolder`.*

**[P3] Chrome section labels mix categories.** "Open" / "Close" are states; "Detection" / "Activation" are sections. Make all four parallel. *Command: `clarify`.*

## Persona Red Flags
**Skeptical CRO:** the 4→5 seam ("where did 4 come from?"); no corpus accuracy number ("0.94 on one example, what's your accuracy across all accounts?"); slide 8 JSON un-anchored to revenue (the slide they check out on). The deck answers "is it accurate?" (5) and "is it real?" (7, 9) beautifully, but not "what will this do to my number?"
**Technical RevOps evaluator:** loves 4, 5, 8; will catch the 4→5 lineage gap and want recrawl frequency + threshold behavior — the deck only shows the happy path (0.94), never a low-confidence/suppressed case.

## Minor Observations
- Cadence 1D·2L·3L·4L·5D·6L·7D·8L·9D·10D — balanced, but 9 (dark email payoff) and 10 (dark CTA) sit in the same visual key, so the email peak slightly blurs into the close. A half-beat of contrast would sharpen the ending.
- Slide 6 headline "Know the stack, work the account" is doing heavy lifting on an otherwise generic grid.
- Slide 9 anonymization ("VP Platform · a Series B dev-tools company") + "From a real detection" tag is good credibility hygiene.

## Questions to Consider
1. If slide 5's peak rests on one 0.94 detection, what stops a skeptic assuming it's cherry-picked? Where's the aggregate proof?
2. The deck never shows a low-confidence/suppressed detection. Would showing "0.41 → we don't surface this" prove rigor better than another success?
3. Should the closer reprise the 0.94 or the email instead of resetting to a blank template?
4. Should the cover lead with an outcome stat rather than breadth (7,528 / 108)?
