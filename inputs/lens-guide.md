# Lens Selection Guide

## What is a Lens?

A lens = **one call transcript** + **one book extract**. Each run of the design stack analyzes the entire journey through this specific lens. Different lenses reveal different patterns. Running many lenses builds a high-confidence element library.

## How to Select a Lens

### Step 1: Pick a Call Transcript

Choose based on what you want to learn. Each call reveals different aspects of the journey.

**Host Calls** (`Agents-data-source/Customer calls Analysis/02-call-transcripts/host/`):

| Call | Profile | Best For |
|------|---------|----------|
| `andreas-call.txt` | Investor, 2 units, Washington Heights, found via Craigslist | Trust concerns, multi-unit workflow, comparison to alternatives |

**Guest Calls** (`Agents-data-source/Customer calls Analysis/02-call-transcripts/guest/`):

| Call | Suggested Starting Points |
|------|--------------------------|
| `nneka-call.txt` | Start here — likely has clear journey narrative |
| `zella-myers-call.txt` | Good second lens — different perspective |
| `Customer call Tom.txt` | Early adopter perspective |
| `Customer call- Vince.txt` | Another angle on guest needs |
| `Frederick_s Customer Call with Vale.txt` | Agent-mediated experience |
| `William Romano.txt` | Guest concerns and expectations |

*Read each transcript before selecting. Pick calls where the person describes their full experience, not just a single complaint or question.*

### Step 2: Pick a Book Extract

Choose based on the **analytical framework** you want to apply to the call.

**Book Extracts** (`Agents-data-source/Books/extracts/`):

| Extract | Framework | Best Paired With |
|---------|-----------|-----------------|
| `kahneman-part1-two-systems.txt` | System 1/2, cognitive ease, ego depletion | Calls where user seems overwhelmed or makes quick decisions |
| `kahneman-part2-heuristics-biases.txt` | Anchoring, availability, representativeness | Calls about pricing, risk perception, comparison |
| `kahneman-part4-choices-prospect-theory.txt` | Loss aversion, framing, prospect theory | Calls about pricing decisions, fear of loss |
| `cialdini-intro-reciprocity.txt` | Reciprocity principle | Calls where agent relationship matters |
| `cialdini-commitment-socialproof.txt` | Commitment, social proof | Calls about trust, seeing others use the platform |
| `cialdini-authority-liking-scarcity.txt` | Authority, liking, scarcity | Calls about agent credibility, urgency |
| `donnorman-affordances-signifiers-feedback.txt` | Affordances, signifiers, feedback loops | Calls mentioning UI confusion or "I didn't know I could..." |
| `dontmakemethink-usability-laws.txt` | Krug's usability laws | Calls with usability friction, "it was confusing" |
| `hooked-hook-model.txt` | Trigger → Action → Reward → Investment | Calls about retention, coming back, engagement |
| `nudge-choice-architecture.txt` | Choice architecture, defaults, framing | Calls about decision paralysis, too many options |
| `microinteractions-rules-feedback.txt` | Micro-interactions, feedback design | Calls mentioning "it didn't feel responsive" |
| `refactoringui-hierarchy-spacing-color.txt` | Visual hierarchy, spacing, color | Calls about "it looked cluttered" or first impressions |
| `refactoringui-forms-buttons-components.txt` | Form design, button patterns | Calls about filling out forms, creating listings/proposals |
| `coldstart-network-effects.txt` | Cold start, network effects | Calls from early users, marketplace dynamics |
| `coldstart-tipping-point.txt` | Tipping points, growth dynamics | Calls about platform adoption, word of mouth |
| `inspired-product-discovery.txt` | Product discovery methods | Calls revealing unmet needs, feature requests |
| `leanux-hypothesis-driven-design.txt` | Hypothesis-driven design, experiments | Calls that suggest testable assumptions |
| `zerotoone-monopoly-secrets.txt` | Monopoly thinking, contrarian truths | Calls revealing what makes Split Lease unique |
| `playbigger-category-design.txt` | Category design, market framing | Calls where user compares to other platforms |
| `wisdomofcrowds-collective-intelligence.txt` | Collective intelligence | Calls involving community aspects |
| `100things-attention-memory-decisions.txt` | Attention, memory, decision patterns | Calls about information overload, forgetting steps |
| `articulatingdesign-severity-framework.txt` | Design severity framework | Calls with clear pain points to prioritize |
| `creativeacts-dschool-exercises.txt` | Creative problem solving | When you want divergent thinking applied |

## Recommended Lens Combinations

### For Guest Journey — Start Here

1. **Guest discovery lens**: `nneka-call.txt` + `kahneman-part1-two-systems.txt`
   - Why: System 1/2 framework reveals how guests make snap trust judgments about the platform

2. **Guest trust lens**: `zella-myers-call.txt` + `cialdini-commitment-socialproof.txt`
   - Why: Social proof and commitment patterns for a guest deciding to commit money

3. **Guest usability lens**: `Customer call Tom.txt` + `dontmakemethink-usability-laws.txt`
   - Why: Where the guest journey has friction and confusion

4. **Guest pricing lens**: `Customer call- Vince.txt` + `kahneman-part4-choices-prospect-theory.txt`
   - Why: How guests perceive pricing, loss aversion in committing to a lease

### For Host Journey — Next Runs

5. **Host with different book**: `andreas-call.txt` + `cialdini-authority-liking-scarcity.txt`
   - Why: Same host call, different framework — reveals authority/liking dynamics with agent

6. **Host with usability**: `andreas-call.txt` + `donnorman-affordances-signifiers-feedback.txt`
   - Why: Reveals where the listing creation flow lacks proper signifiers

## Running a Lens

### Host Journey
```bash
cd ~/Documents/design-stack
bash scripts/run.sh --journey host "andreas-call.txt" "kahneman-part1-two-systems.txt"
```

### Guest Journey
```bash
cd ~/Documents/design-stack
bash scripts/run.sh --journey guest "nneka-call.txt" "kahneman-part1-two-systems.txt"
```

### Or via Claude Code
```
act as the orchestrator
cd ~/Documents/design-stack
run the design stack for GUEST journey with "nneka-call.txt" and "cialdini-commitment-socialproof.txt"
```

## Building Confidence

Elements gain confidence through **lens count** — how many different lenses independently discover the same pattern. The library merge tracks this:

- `lens_count: 1` → Single lens, pending review
- `lens_count: 2-3` → Multiple lenses agree, gaining confidence
- `lens_count: 4+` → High confidence, ready for implementation

**Strategy**: Run 3-4 different lenses per journey type, using different book frameworks each time. Patterns that emerge across multiple lenses are your highest-value design elements.
