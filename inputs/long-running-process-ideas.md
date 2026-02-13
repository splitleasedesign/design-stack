# Long-Running Process Ideas

Based on Rory Sutherland transcript (Waymo, Texas Culture, Airline Lounges, OpenAI & Uber Eats) and existing Design Stack capabilities.

---

## Idea 1: Reverse Benchmarking Pipeline

**Concept:** Rory's core idea — don't benchmark against competitors' strengths, find what they've *completely overlooked* and double down on that. The 11 Madison Park story: instead of copying the #1 restaurant, find what was *disappointing* about it (mediocre coffee, beer drinkers as second-class citizens) and make that your signature.

**Applied to Split Lease:**

Every competitor in the shared housing/roommate/subletting space (Airbnb, SpareRoom, Craigslist, Roomi) has specific areas they've neglected. Instead of benchmarking our UI against theirs, we run an AI pipeline that:

1. **Layer 0 — Competitor Experience Mapping**: Agent analyzes a competitor's UX (from screenshots, user reviews, walkthrough transcripts) and maps their journey phases
2. **Layer 1 — Disappointment Mining**: Agent reads competitor reviews (App Store, Trustpilot, Reddit threads) looking specifically for what's *disappointing* — not broken, just mediocre. "The coffee wasn't disgusting, it was just nothing interesting about it."
3. **Layer 2 — Cross-reference with our call transcripts**: Agent reads our host/guest call transcripts looking for moments where users mention competitor experiences — what they expected vs what they got
4. **Layer 3 — Opportunity Identification**: Using the book extracts (Cialdini, Kahneman, Krug, Don Norman), the agent identifies which disappointment gaps map to behavioral frameworks — which overlooked areas would have the highest psychological impact if we nailed them
5. **Layer 4 — Element Specification**: Produces concrete UI elements that address each gap — the "beer sommelier" equivalent for Split Lease
6. **Layer 5 — Coherence check** against existing element library

**Data we already have:** 48 host calls, 20+ guest calls, 23 book extracts, 5 completed design stack runs. We'd need to add competitor review data (scrapeable from public sources).

**Output:** A "Reverse Benchmark Report" per competitor — not "how to copy them" but "what they've completely ignored that we can own."

---

## Idea 2: Transcript Idea Extraction Pipeline (from Rory + similar thinkers)

**Concept:** This single Rory transcript contains at least 8-10 actionable ideas directly applicable to Split Lease. There are likely dozens more transcripts, podcasts, and talks from behavioral scientists, UX thinkers, and product strategists sitting in folders. The pipeline mines them for ideas and maps them to our journey.

**Specific ideas from THIS transcript alone:**

| Rory Idea | Split Lease Application |
|-----------|------------------------|
| **Waymo social calculus** — humans cooperate on roads because of reciprocity + guilt. Remove the human, remove the cooperation. | Host-guest communication has no reciprocity signals. When a guest sends a message, there's no "thank you" equivalent. No micro-acknowledgments. The platform strips the social calculus from the relationship. |
| **Screen vs face-to-face ordering changes behavior** — McDonald's: males order 2 burgers on screen because no judgment. | Guests configure proposals on screen. They might ask for bolder terms (longer stays, lower prices) than they would face-to-face. The proposal UI should anticipate and normalize this — "Most guests request 8-12 weeks" (social proof). |
| **Option vs Obligation** — parking apps started as an option, became the only way. Things that start convenient become mandatory traps. | Split Lease features should never feel like obligations. The Date Change Tool, House Manual, Reviews — each should feel like an option that delights, not a chore. If it starts feeling mandatory, it becomes the parking app problem. |
| **Air fryer vs sleeping bag girlfriend** — some products underpromise and overdeliver (air fryer), others overpromise and underdeliver (sleeping bag). | Split Lease's listing pages risk being "sleeping bag" — photos look great, reality disappoints. The House Manual + cleaning photos + stay reviews create the "air fryer" effect: the experience is better than the promise. |
| **Repeat purchase as the real metric** — not how many bought it, but how many who bought it *rebought*. | Track host retention rate (re-listed after lease ends) and guest return rate (booked again). Surface this as social proof: "87% of hosts list again after their first lease." |
| **Secret shortcuts / Easter eggs** — airports could have hidden efficient routes known only to frequent flyers. | Power users of Split Lease (repeat hosts, multi-property owners) should discover hidden efficiencies — bulk date management, template proposals, quick-relist. Don't advertise them; let them be discovered. |
| **Disarming candor** — McLaren salesman: "Don't need ceramic brakes, let me save you $20K." Downselling builds trust. | During proposal creation, if a guest selects dates that historically have low acceptance rates, tell them: "Hosts in this area prefer weekday stays — switching to Tue-Thu could save you $200/month." Honest constraint = trust. |
| **The Moxy ground floor** — invest in communal areas, not rooms. Make checkout not feel homeless. | The "active lease" phase is our ground floor. Most platforms abandon you after booking. Invest in the Leases page, Stays Manager, House Manual — make the post-acceptance experience the signature. |

**Pipeline structure:**

1. **Ingest transcript** (we have Rory, could add more: behavioral economics talks, UX conference talks, product podcasts)
2. **Agent extracts ideas** — each idea gets: concept, original context, behavioral principle, applicable journey phase
3. **Agent maps to Split Lease journey** — which phase, which user (host/guest), what specific UI/UX change
4. **Agent checks against existing library** — reinforcement or new element?
5. **Agent produces element specifications** — concrete UI specs with HTML/CSS, same as Layer 8
6. **Output:** Idea-to-element report, merged into library

**What makes this a long-running process:** We have a `Rory Sutherland Ideas` folder that probably contains multiple transcripts. Each transcript takes ~30-60 mins to process through 6 layers. We could queue them up and run overnight.

---

## Existing Data Assets

- **48 host call transcripts** (`Agents-data-source/Customer calls Analysis/02-call-transcripts/host/`)
- **20+ guest call transcripts** (`Agents-data-source/Customer calls Analysis/02-call-transcripts/guest/`)
- **23 book extracts** (`Agents-data-source/Books/extracts/`)
- **5 completed design stack runs** (3 host, 2 guest) with 59 UI elements
- **Rory Sutherland transcripts** (`Agents-data-source/Rory Sutherland Ideas/`)
- **Usability test data** (`Agents-data-source/Usability-test/`)
- **Production style guide + design tokens**
