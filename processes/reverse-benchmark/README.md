# Reverse Benchmarking Process

## What is this?

**Normal benchmarking**: Look at what competitors do well, try to copy it.

**Reverse benchmarking**: Look at what competitors *don't even try to do well*, and make that your thing.

---

## The Story

11 Madison Park was the #1 restaurant in the world. A guy named Rory Sutherland noticed something: their coffee was mediocre. Not bad — just... fine. Nobody complained because nobody goes to a fine dining restaurant expecting great coffee.

So a different restaurant hired a **beer sommelier**. No fine dining restaurant had one. Beer drinkers were always treated as second-class citizens everywhere. By making beer service *excellent* in a space where nobody even tried, they created something people talked about more than the actual food.

**The question is: what's Split Lease's beer sommelier?**

---

## What the Process Does

You give it two inputs:
1. **A competitor** (e.g. Airbnb)
2. **A behavioral science book** (e.g. Cialdini's *Influence*, focused on Commitment & Social Proof)

The book is the analytical lens. It changes *what you see*. Looking at Airbnb through Cialdini reveals missing trust signals and social proof gaps. Looking at Airbnb through Kahneman reveals cognitive friction and decision fatigue. Same competitor, completely different blind spots.

The process then runs **6 analysis layers**, one after another:

### Layer 0 — Map the Competitor
*"How does Airbnb's experience actually work, step by step?"*

An AI agent reads the full book PDF (the specific chapters you chose) and maps Airbnb's entire user journey — from discovery through active stay to retention. For each phase, it rates the quality: excellent, good, adequate, weak, or absent. The key field is **"what nobody in the category even tries"** — the mediocre coffee.

### Layer 1 — Mine the Disappointments
*"Where is their experience just... fine?"*

A second AI agent takes the competitor map and digs deeper into the "adequate" zones. It classifies each disappointment: mediocre defaults, missing delights, broken promises, abandoned phases, invisible labor, trust vacuums. Not bugs — nobody files a support ticket about these. They just... aren't great.

Each disappointment gets a **"coffee test"**: would excellence here genuinely surprise users because nobody expects it?

### Layer 2 — Cross-Reference Our Users
*"Do our actual customers confirm this?"*

A third AI agent scans all 48 host call transcripts and 20+ guest call transcripts looking for evidence. It searches for direct competitor mentions ("on Airbnb I had to..."), parallel frustrations, workarounds people built, and emotional moments. When a real user independently describes the same disappointment, it goes from hypothesis to **validated insight**.

### Layer 3 — Identify Signature Opportunities
*"Which gaps could become OUR thing?"*

A fourth AI agent ranks the validated disappointments and identifies which ones could become Split Lease signatures — features so surprisingly good in areas competitors ignore that they become reasons to choose us. Each opportunity gets scored on: signature potential, whether the whole category ignores it, user validation strength, behavioral science support, feasibility, and brand alignment.

The key question: **why can't competitors easily copy this?** If Amazon could build it in a sprint, it's not a signature.

### Layer 4 — Design the Elements
*"What does this actually look like?"*

A fifth AI agent takes the top opportunities and produces concrete, buildable UI element specifications: visual specs, interaction specs, copy specs, and a full HTML/CSS snippet you can open in a browser. Each element follows the Split Lease production style guide (purple palette, Inter/DM Sans fonts).

### Layer 5 — Coherence Check
*"Does this fit with everything else we know?"*

A sixth AI agent cross-checks the new elements against the existing library of 59+ elements from previous design-stack runs. It finds three things:
- **Reinforcements** — a different analysis independently found the same need (strongest signal)
- **Contradictions** — the new element conflicts with something existing (needs human review)
- **Extensions** — the new element fills a gap nothing else has covered

---

## How the AI Pipeline Works Under the Hood

```
You (human)
  │
  │  "Run reverse-benchmark: Airbnb × Cialdini Ch 3-4"
  │
  ▼
Orchestrator (Claude Opus 4.6)
  │
  │  Reads processes/reverse-benchmark/process.json
  │  Creates run directory with layer folders
  │  Checks manifest to prevent duplicate runs
  │
  │  For each of the 6 layers:
  │
  │    1. Reads the agent prompt file (.md)
  │    2. Reads the book PDF from disk (specific chapters)
  │    3. Reads source files (journey map, transcripts, library)
  │    4. Reads previous layers' JSON output
  │    5. Combines everything into one prompt file
  │    6. Launches a SEPARATE Claude session to run it
  │    7. Waits for output, verifies it, moves to next layer
  │
  ├──→ Layer 0 agent (Claude Opus 4.6) → competitor-journey.json
  ├──→ Layer 1 agent (Claude Opus 4.6) → disappointments.json
  ├──→ Layer 2 agent (Claude Opus 4.6) → crossref-insights.json
  ├──→ Layer 3 agent (Claude Opus 4.6) → opportunities.json
  ├──→ Layer 4 agent (Claude Opus 4.6) → ui-elements.json
  ├──→ Layer 5 agent (Claude Opus 4.6) → coherence-report.json
  │
  │  After all layers:
  │    - Generates HTML report
  │    - Merges new elements into the master library
  │    - Updates the run manifest
  │    - Rebuilds the Library of Elements page
  │    - Sends Slack notification
  │
  ▼
Done. New elements in library, report viewable in browser.
```

### Why Separate Sessions?

Each layer runs as its own Claude process (`claude -p`), not inside the orchestrator's conversation. This matters because:

- **Context stays clean** — each agent gets only what it needs, not the entire history of all previous layers crammed into one conversation
- **The book PDF is large** — Cialdini's *Influence* is hundreds of pages. Each agent reads the relevant chapters fresh from disk
- **The orchestrator doesn't run out of memory** — it just coordinates, it doesn't hold all the content
- **Layers can focus** — Layer 1 only thinks about disappointments. Layer 4 only thinks about UI design. Specialization produces better output.

### The Prompt Assembly

For each layer, the orchestrator builds a single prompt file (`prompt.md`) that contains:

```
┌─────────────────────────────────────┐
│  Agent Instructions                 │  ← from agents/1-disappointment-mining.md
│  (what this layer does, output      │     tells the AI its role, rules, and
│   JSON schema, rules)               │     exact output format
├─────────────────────────────────────┤
│  Lens                               │  ← competitor name + book + chapters
│  (what to analyze through)          │
├─────────────────────────────────────┤
│  Book (read from disk)              │  ← tells the AI to read the actual PDF
│  (the behavioral framework)         │     from the file system, specific chapters
├─────────────────────────────────────┤
│  Source Materials                   │  ← journey map, element library, etc.
│  (data the agent needs)            │     varies per layer
├─────────────────────────────────────┤
│  Previous Layer Outputs             │  ← JSON from completed layers
│  (what earlier agents found)        │     builds on prior work
├─────────────────────────────────────┤
│  Output Instructions                │  ← exact file path to save to
│  (where to write the result)        │     e.g. runs/2026-02-13_1430/layer-1/
└─────────────────────────────────────┘
```

This prompt gets piped to a fresh Claude Opus 4.6 session. The agent reads the book, does the analysis, writes its JSON output to disk, and exits. Then the orchestrator reads that output and feeds it to the next layer.

---

## The Combinatorial Matrix

The process is **repeatable with different inputs**, like a testing matrix:

| | Cialdini (Commitment) | Cialdini (Scarcity) | Kahneman (System 1/2) | Krug (Usability) | Norman (Affordances) |
|---|---|---|---|---|---|
| **Airbnb** | Run 1 | Run 2 | Run 3 | ... | ... |
| **SpareRoom** | Run 4 | Run 5 | ... | ... | ... |
| **Craigslist** | ... | ... | ... | ... | ... |
| **Roomi** | ... | ... | ... | ... | ... |
| **Zillow** | ... | ... | ... | ... | ... |

**6 competitors × ~20 book/chapter combos = ~120 unique runs.**

Each run finds different blind spots because the behavioral framework changes what you see. Run #10 knows what runs #1-9 already found, because the coherence layer cross-checks against the full library.

Over time, when multiple runs independently identify the same gap — say Airbnb × Cialdini AND Craigslist × Kahneman both find that "nobody in the category acknowledges your effort after booking" — that becomes a **high-confidence signature opportunity**.

---

## How It Connects to the Design Stack

The **design-stack** process analyzes Split Lease from the inside out:
> "What do our users need?" (call transcripts × book frameworks → UI elements)

The **reverse-benchmark** process analyzes competitors from the outside in:
> "What do competitors ignore?" (competitor UX × book frameworks → UI elements)

Both produce elements that go into the **same library**. When an inside-out element and an outside-in element independently point to the same thing, that's the strongest possible signal: our users need it AND nobody else is doing it.

---

## Running It

Open a terminal and run:

```bash
cat "C:\Users\igor\OneDrive\Documents\design-stack\processes\reverse-benchmark\test-run-prompt.md" | claude -p --model claude-opus-4-6
```

This launches the orchestrator, which reads the process definition, creates the run, and executes all 6 layers sequentially. Takes roughly 60-90 minutes end to end.

---

## One-Liner

> Instead of copying what Airbnb does well, we find what *nobody in the category even tries to do well*, and we make that the reason people choose Split Lease.
