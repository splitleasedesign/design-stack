# Reverse Benchmark — Run 4: Booking.com Reviews × Hooked (Hook Model)
# Engine: Claude Opus 4.6
# Focus: Review Volume for Long-Term Shared Housing

You are running the **reverse-benchmark** process from the Split Lease Design Stack.

## Paths

```
STACK_DIR = C:\Users\igor\OneDrive\Documents\design-stack
```

## Process Definition

Read the process definition at: `STACK_DIR/processes/reverse-benchmark/process.json`

This is a **6-layer pipeline** that analyzes a competitor's UX to find overlooked disappointment gaps — what they've completely ignored that Split Lease can own.

## The Core Problem This Run Solves

Split Lease leases are **long-term: minimum 3 months**. A property that hosts 3-month tenants gets **at most 4 reviews per year**. Compare that to an Airbnb averaging 50+ reviews/year from short stays. This creates a structural trust deficit — new guests see empty review sections and bounce.

**The question**: How do you generate meaningful review volume from long-term stays without making hosts and guests do extra work?

**The hypothesis**: Every platform treats reviews as a single post-checkout event. But a 3-month stay is not a single event — it's an ongoing relationship with multiple reviewable moments (move-in, first maintenance request, mid-stay, renewal decision, move-out). The Hook Model shows how to turn each of these moments into a low-friction micro-review loop that accumulates into rich, trustworthy signal — without burdening anyone.

## This Run's Lens

- **Competitor**: Booking.com
- **Book**: `Hooked-How-to-Build-Habit-Forming-Products-_Nir-Eyal_.pdf`
- **Book location**: `STACK_DIR/Agents-data-source/Books/Books/`
- **Chapters to focus on**: The full Hook Model (Chapters 1-5)
  - Ch 1: The Habit Zone — why habit-forming review systems win (first-to-mind, unprompted engagement, defensible review volume)
  - Ch 2: Trigger — external triggers (post-event nudges) vs. internal triggers (the urge to share after a meaningful moment). How to move from push notifications to intrinsic motivation
  - Ch 3: Action — Fogg Behavior Model (motivation × ability × trigger). How to make leaving a review as easy as tapping a reaction emoji. The six simplicity factors applied to review UX
  - Ch 4: Variable Reward — rewards of the tribe (social validation from host response), rewards of the hunt (seeing your review impact listing trust score), rewards of the self (completion/mastery of "trusted reviewer" status). Why predictable "thanks for your review" fails
  - Ch 5: Investment — how each micro-review the user leaves improves their next experience (better matching, host responsiveness, reviewer reputation). The stored value that makes switching costly
- **Book Guide**: `STACK_DIR/Agents-data-source/Books/Book Guide/Books_Summary.md` (entry #6)
- **Analysis angle**: Booking.com has the most sophisticated review system among travel platforms (7 independent subcategories, recency-weighted scoring at 85/10/5, automated post-stay invitations). Yet their entire review architecture assumes SHORT stays: one form, one moment, post-checkout. For long-term stays (3+ months), every phase of Booking.com's review flow breaks:
  1. **Trigger failure**: The only trigger fires at checkout — 90+ days after the experiences worth reviewing. Memory decay destroys review quality and completion rate
  2. **Action failure**: The review form demands ratings across 7 dimensions + free text — high friction that works for a 3-night hotel stay (vivid recent memory) but not for a 3-month tenancy (blurred, averaged memory)
  3. **Reward failure**: The reviewer gets nothing back. No response from the host, no impact visibility, no identity. For short stays this doesn't matter (one-and-done). For long-term housing where the guest may renew or refer friends, this is a massive missed loop
  4. **Investment failure**: Zero stored value from reviewing. A guest who reviews 3 properties on Booking.com has the same status as a first-timer. No reviewer reputation, no trust badge, no better matching. No reason to review again
  - **Split Lease's opportunity**: Build the first review system designed as a **habit loop for long-term housing** — a system where micro-reviews accumulate naturally throughout the stay, creating 10-20x the signal density of any competitor without increasing user effort per interaction

- **Run ID**: Use current timestamp as `YYYY-MM-DD_HHMM`

## Key Research Context for All Layers

Feed this research into the appropriate layers. These are **verified industry patterns** the agents should build on, not replace:

### Proven Patterns from the Industry
| Pattern | Platform | Key Data |
|---------|----------|----------|
| Binary input (thumbs up/down) | Netflix | 200% increase in rating activity vs. 5-star |
| Blocking prompt (rate before next action) | Uber | Near-universal participation |
| Reciprocity nudge (host reviews first) | Airbnb | Highest organic review-back rate |
| Recency weighting (85/10/5) | Booking.com | Incentivizes continuous review solicitation |
| Conditional depth (more Qs only on low ratings) | Uber | Reduces friction for satisfied users |
| Tiered badges (levels + category badges) | TripAdvisor | Longer, more positive reviews from badge holders |
| Conversational review flow | Hotel chatbots (Tars, Landbot) | No major platform has shipped this natively |
| Mid-stay pulse | No platform | Major whitespace opportunity |
| Passive signals (rebooking, referrals) | Airbnb | Captures loyalty dimensions reviews miss |
| Photo reviews | Google Reviews | 35% more engagement than text-only |

### The Long-Term Rental Review Challenge
No platform has solved these structural problems:
1. **Temporal spread**: A 3-month stay has a beginning, middle, and end. A single review collapses this arc
2. **Relationship dynamics**: Reviewing while still living there feels risky. Reviewing months later feels stale
3. **Volume deficit**: Max 4 reviews/year vs. 50+ for short-term
4. **Different dimensions**: For long stays, maintenance responsiveness, lease flexibility, and utility reliability matter more than cleanliness and check-in accuracy
5. **Review timing paradox**: The guest who stays longest has the most to say but the least incentive to say it (they're already committed)

### Micro-Review Moment Map for Long-Term Stays
These are natural trigger moments in a 3+ month stay that could each generate a micro-review without extra effort:
1. **Move-in day** (accuracy, communication, condition)
2. **First week** (neighborhood, amenities working, roommate compatibility)
3. **First maintenance request** (host responsiveness, resolution speed)
4. **Month 1 check-in** (overall satisfaction pulse)
5. **Mid-stay milestone** (would you recommend? binary)
6. **Renewal decision point** (strongest signal — are they staying or leaving?)
7. **Any host interaction** (message response time, helpfulness — auto-captured)
8. **Move-out** (full structured review with temporal context from all micro-reviews)

## What You Do

### 1. Initialize the Run

1. Set RUN_ID from current timestamp (YYYY-MM-DD_HHMM format)
2. Read `STACK_DIR/runs/manifest.json` — verify this combination hasn't been run (check `process_type` = `"reverse-benchmark"`)
3. Create run directories:
   ```
   mkdir -p STACK_DIR/runs/{RUN_ID}/layer-0
   mkdir -p STACK_DIR/runs/{RUN_ID}/layer-1
   mkdir -p STACK_DIR/runs/{RUN_ID}/layer-2
   mkdir -p STACK_DIR/runs/{RUN_ID}/layer-3
   mkdir -p STACK_DIR/runs/{RUN_ID}/layer-4
   mkdir -p STACK_DIR/runs/{RUN_ID}/layer-5
   mkdir -p STACK_DIR/runs/{RUN_ID}/report
   ```
4. Write `STACK_DIR/runs/{RUN_ID}/run-config.json`:
   ```json
   {
     "run_id": "{RUN_ID}",
     "process_type": "reverse-benchmark",
     "competitor": "booking.com",
     "focus": "reviews",
     "lens": {
       "competitor": "booking.com",
       "book": "Hooked-How-to-Build-Habit-Forming-Products-_Nir-Eyal_.pdf",
       "book_chapters": "Chapters 1-5: The Complete Hook Model (Trigger, Action, Variable Reward, Investment)"
     },
     "status": "running",
     "started_at": "{ISO-8601 timestamp}"
   }
   ```

### 2. Run Layers Sequentially

For each layer (0 through 5), read the agent prompt, build a full prompt.md, and execute as a subagent.

**Layer execution pattern:**

For each layer:
1. Read the agent prompt from `STACK_DIR/processes/reverse-benchmark/agents/{layer.agent}`
2. Read the source materials the layer needs (see table below)
3. Read outputs from previous layers (per `depends_on`)
4. Construct `STACK_DIR/runs/{RUN_ID}/layer-{N}/prompt.md` with this structure:

```
You are running Layer {N} ({layer_name}) of the SplitLease reverse-benchmark pipeline v1.0.

## SPECIAL FOCUS: REVIEWS

This run is specifically focused on the REVIEW SYSTEM. Every analysis, disappointment, opportunity, and element you produce must be about HOW REVIEWS WORK (or fail to work) for long-term shared housing.

The core problem: Split Lease leases are 3+ months. A property gets max 4 reviews/year. We need to generate meaningful review volume without burdening hosts and guests. The Hook Model (Trigger → Action → Variable Reward → Investment) is our analytical lens.

## Your Agent Instructions
{paste full agent .md content}

## Lens
Competitor: Booking.com
Book: Hooked: How to Build Habit-Forming Products — Nir Eyal
Chapters: 1-5 (The Complete Hook Model)
Analysis angle: Booking.com's review system is built for short stays — one form, one moment, post-checkout. Every phase of the Hook Model breaks for long-term housing. Split Lease can build the first review system designed as a habit loop.

## How to Read the Book
Read the full book PDF from disk. The file is at:
  STACK_DIR/Agents-data-source/Books/Books/Hooked-How-to-Build-Habit-Forming-Products-_Nir-Eyal_.pdf

Focus on Chapters 1-5:
- Chapter 1: The Habit Zone — why review habits create competitive moats
- Chapter 2: Trigger — external vs internal triggers for review behavior
- Chapter 3: Action — Fogg Behavior Model applied to review friction reduction
- Chapter 4: Variable Reward — what makes reviewing feel rewarding (tribe, hunt, self)
- Chapter 5: Investment — how reviews create stored value that keeps users in the loop

Also read the Book Guide for chapter context:
  STACK_DIR/Agents-data-source/Books/Book Guide/Books_Summary.md (entry #6)

## Key Research Context
{include the industry patterns table and micro-review moment map from the run definition}

## Source Materials

### [Other sources per layer]
{content}

### Previous Layer Outputs
{JSON from previous layers}

## Output Instructions
Save your output as valid JSON to: STACK_DIR/runs/{RUN_ID}/layer-{N}/{output_filename}
Use the Write tool. Output must be valid JSON only.
```

5. Execute: `cat "STACK_DIR/runs/{RUN_ID}/layer-{N}/prompt.md" | claude -p --model claude-opus-4-6`
6. Verify the output file was created

**Layer dependency table:**

| Layer | Agent File | Output File | Sources | Depends On | Review Focus |
|-------|-----------|-------------|---------|------------|--------------|
| 0 | 0-competitor-mapping.md | competitor-journey.json | book PDF (Ch 1-5), book guide, journey map | — | Map Booking.com's REVIEW journey specifically: when/how they prompt, the form UX, what happens after submission, host response flow, scoring mechanics |
| 1 | 1-disappointment-mining.md | disappointments.json | book PDF (Ch 1-5), book guide | 0 | Mine disappointments in Booking.com's review system through the Hook Model lens: broken triggers, high-friction actions, missing rewards, zero investment loops |
| 2 | 2-transcript-crossref.md | crossref-insights.json | book PDF (Ch 1-5), element library, host+guest call transcripts | 0, 1 | Search transcripts for: review mentions, trust concerns, "how do I know if it's good", reputation, social proof, references, word-of-mouth, credibility signals |
| 3 | 3-opportunity-identification.md | opportunities.json | book PDF (Ch 1-5), element library | 0, 1, 2 | Identify opportunities for habit-forming micro-review systems: milestone triggers, binary inputs, passive signals, conversational flows, accumulated trust scores |
| 4 | 4-element-specification.md | ui-elements.json | style guide, tokens, element library | 0, 1, 2, 3 | Specify UI elements for: micro-review cards, review accumulation timelines, trust score badges, mid-stay pulse widgets, host response nudges, reviewer reputation |
| 5 | 5-coherence.md | coherence-report.json | element library, tokens | 0, 1, 2, 3, 4 | Validate that all review elements form a coherent habit loop (T→A→R→I cycle) |

**Source file locations:**
- Book PDF: `STACK_DIR/Agents-data-source/Books/Books/Hooked-How-to-Build-Habit-Forming-Products-_Nir-Eyal_.pdf` — read full chapters 1-5
- Book Guide: `STACK_DIR/Agents-data-source/Books/Book Guide/Books_Summary.md`
- Journey map: `STACK_DIR/Agents-data-source/split-lease-journey-map.md`
- Element library: `STACK_DIR/library/elements.json` — **WARNING: 400KB+. Read first 200 lines and tell subagent to read from disk.**
- Tokens: `STACK_DIR/library/tokens.json`
- Style guide: `STACK_DIR/Agents-data-source/Style-guide.md` — **source of truth for colors (purple palette #31135D)**
- Host transcripts: `STACK_DIR/Agents-data-source/Customer calls Analysis/02-call-transcripts/host/` (48 files)
- Guest transcripts: `STACK_DIR/Agents-data-source/Customer calls Analysis/02-call-transcripts/guest/` (20+ files)

**For Layer 2 (transcript-crossref):** Include DIRECTORY PATHS so the subagent reads from disk:
```
Host call transcripts directory: STACK_DIR/Agents-data-source/Customer calls Analysis/02-call-transcripts/host/
Guest call transcripts directory: STACK_DIR/Agents-data-source/Customer calls Analysis/02-call-transcripts/guest/

Read these transcripts from disk. Search for mentions of:
- "review", "reviews", "rating", "ratings", "stars", "feedback"
- "trust", "trustworthy", "credible", "legitimate", "legit", "scam", "sketchy"
- "how do I know", "references", "word of mouth", "recommendation", "recommend"
- "booking.com", "booking", "hotel reviews", "airbnb reviews"
- "reputation", "verified", "proof", "social proof"
- Any mention of wanting to see what other people experienced
- Any mention of nervousness about renting from someone unknown
- Any mention of host/guest vetting, screening, or credibility
```

### 3. Post-Processing

After all 6 layers complete:

1. **Generate Report**: Read `STACK_DIR/templates/report-template.html`. Inject layer JSONs. Save to `STACK_DIR/runs/{RUN_ID}/report/index.html`. Apply production style guide. Add a special "Review Habit Loop" section that visualizes the T→A→R→I cycle with the proposed micro-review moments mapped onto it.

2. **Generate Run Library**: From layer-4 ui-elements.json, create a browsable Library of Elements page. Save to `STACK_DIR/runs/{RUN_ID}/report/library-of-elements.html`.

3. **Merge Elements**: Read `STACK_DIR/library/elements.json`. Add new elements with `confidence: { lens_count: 1 }` and `status: "pending_review"`. Save back.

4. **Update Manifest**: Add entry to `STACK_DIR/runs/manifest.json`:
   ```json
   {
     "run_id": "{RUN_ID}",
     "process_type": "reverse-benchmark",
     "date": "{YYYY-MM-DD}",
     "status": "complete",
     "competitor": "booking.com",
     "focus": "reviews",
     "lens": {
       "competitor": "booking.com",
       "book": "Hooked-How-to-Build-Habit-Forming-Products-_Nir-Eyal_.pdf",
       "book_chapters": "Chapters 1-5: The Complete Hook Model"
     },
     "summary": "{one paragraph summary}",
     "element_count": {N},
     "layers": {
       "competitor-mapping": "runs/{RUN_ID}/layer-0/competitor-journey.json",
       "disappointment-mining": "runs/{RUN_ID}/layer-1/disappointments.json",
       "transcript-crossref": "runs/{RUN_ID}/layer-2/crossref-insights.json",
       "opportunity-identification": "runs/{RUN_ID}/layer-3/opportunities.json",
       "element-specification": "runs/{RUN_ID}/layer-4/ui-elements.json",
       "coherence": "runs/{RUN_ID}/layer-5/coherence-report.json"
     },
     "report_url": "runs/{RUN_ID}/report/index.html",
     "library_url": "runs/{RUN_ID}/report/library-of-elements.html"
   }
   ```

5. **Rebuild Library**: Run `node STACK_DIR/library/rebuild-library.js`

6. **Slack Notification**: Read webhook from `STACK_DIR/inputs/slack-webhook.txt`. Skip silently if not found.

7. **Finalize**: Update run-config.json with `status: "complete"` and `completed_at` timestamp.

## Expected Element Types

Based on the analysis angle, expect the pipeline to produce elements in these categories:

### Micro-Review Capture Elements
- **Move-In Pulse Card** — binary "as expected?" + optional photo within 24h of move-in
- **Maintenance Response Rating** — auto-triggered after any maintenance ticket closes. 1-tap rating + conditional depth on low scores
- **Monthly Check-In Widget** — 3-question pulse survey appearing in the Stays Manager on the 1st of each month during active lease
- **Renewal Signal Card** — at the renewal decision point, capture the strongest review signal: are they staying or leaving? Why?

### Passive Review Signal Elements
- **Host Response Time Badge** — auto-calculated from message data, no user action required
- **Renewal Rate Display** — "80% of guests renew" displayed on listing, computed from platform data
- **Referral-as-Review** — when a guest refers a friend, that referral itself is a trust signal displayed publicly

### Review Habit Loop Elements
- **Reviewer Trust Badge** — accumulated status from consistent micro-reviews (TripAdvisor-style but for housing)
- **Review Impact Visibility** — show the reviewer how their feedback changed listing scores or host behavior
- **Host Response to Review** — enable structured host responses that close the loop and trigger the next cycle
- **Review Timeline** — aggregate all micro-reviews into a temporal narrative ("Move-in: 5/5, Month 1: 4/5, Maintenance: 5/5") that tells the story of the stay

### Conversational Review Elements
- **Chat-Style Post-Stay Review** — conversational flow that asks one question at a time instead of a form
- **Pre-Filled Review Draft** — based on micro-review data accumulated during the stay, generate a draft the guest just needs to approve/edit

## Rules
- Do NOT use `find` or `ls` — all paths are listed above
- Do NOT run layers inline — each MUST be a separate `claude -p` subagent
- Do NOT skip post-processing steps
- ALWAYS read the actual book PDF from disk — do NOT use the pre-made extracts in Books/extracts/
- ALWAYS apply production style guide (purple palette #31135D, Inter/DM Sans)
- ALWAYS include `process_type: "reverse-benchmark"` in manifest and run-config
- EVERY element must answer: "How does this generate review signal without making the user do extra work?"
- EVERY element must map to at least one phase of the Hook Model (Trigger, Action, Variable Reward, or Investment)
- PREFER passive/automatic review signals over active user effort
- DESIGN for the specific cadence of 3+ month stays, NOT short-term rental patterns
