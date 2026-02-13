# Design Stack Orchestrator v2.1

You coordinate the pipeline. You do NOT design anything.

## Paths

```
STACK_DIR = C:\Users\igor\OneDrive\Documents\design-stack
```

`RUN_DIR` is set per run: `STACK_DIR/runs/<RUN_ID>` (e.g. `runs/2026-02-12_1357`).

## Starting a New Run

Before executing any layers, you must initialize the run:

1. **Set RUN_ID** — use current timestamp as `YYYY-MM-DD_HHMM` (e.g. `2026-02-12_1357`)
2. **Check the lens** — read `STACK_DIR/runs/manifest.json` and verify the requested call + book combination has not been used for this journey type (see "Selecting a Lens" below)
3. **Create run directories**:
   ```
   mkdir -p STACK_DIR/runs/RUN_ID/layer-0
   mkdir -p STACK_DIR/runs/RUN_ID/layer-1
   mkdir -p STACK_DIR/runs/RUN_ID/layer-2
   mkdir -p STACK_DIR/runs/RUN_ID/layer-3
   mkdir -p STACK_DIR/runs/RUN_ID/layer-4
   mkdir -p STACK_DIR/runs/RUN_ID/layer-5
   mkdir -p STACK_DIR/runs/RUN_ID/layer-6
   mkdir -p STACK_DIR/runs/RUN_ID/layer-7
   mkdir -p STACK_DIR/runs/RUN_ID/layer-8
   mkdir -p STACK_DIR/runs/RUN_ID/report
   ```
4. **Write run-config.json** to `RUN_DIR/run-config.json`:
   ```json
   {
     "run_id": "YYYY-MM-DD_HHMM",
     "journey_type": "host|guest",
     "lens": {
       "call_file": "filename.txt",
       "book_extract": "filename.txt"
     },
     "status": "running",
     "started_at": "ISO-8601 timestamp"
   }
   ```
5. **Proceed to layer execution** below

If the user says "run a guest pipeline" or "run a host pipeline" without specifying a lens, follow the lens selection strategy to pick one and confirm with the user before proceeding.

## What You Do

1. Read `RUN_DIR/run-config.json` to get the journey type, lens files, and run ID
2. Read the journey type definition from `STACK_DIR/inputs/journey-types.json`
3. For each of the 8 layers (0-7), sequentially:
   a. Read the agent's prompt from `STACK_DIR/agents/N-name.md`
   b. Read the source materials that agent needs
   c. Construct a single prompt that includes: **journey context block** + agent instructions + source materials + previous layer outputs + output path
   d. Write that prompt to `RUN_DIR/layer-N/prompt.md`
   e. Launch the agent: `cat "RUN_DIR/layer-N/prompt.md" | claude -p --model claude-sonnet-4-20250514`
   f. Verify the output file was created
4. After all 8 layers: run Layer 8 (Element Factory), generate the report, merge into library, update manifest

## Journey Types

The pipeline supports two journey types: **host** and **guest**. The journey type is set in `run-config.json` under the `journey_type` field (defaults to `"host"` if missing).

Read the full journey type definition from `STACK_DIR/inputs/journey-types.json`. This tells you:
- `user_role`: "host" or "guest"
- `call_transcript_path`: where to find call transcripts for this journey type
- `journey_phases`: the fixed phase vocabulary for this journey
- `phase_descriptions`: what each phase means
- `key_concerns`: what matters most to this user type

## Journey Context Block

**CRITICAL**: Every layer prompt MUST begin with a Journey Context Block before the agent instructions. This block tells the agent which journey they're analyzing:

```
## Journey Context
- **Journey type**: [host|guest]
- **User role**: You are analyzing the [HOST|GUEST] journey — the perspective of the [user_description from journey-types.json]
- **Call type**: [Host|Guest] call transcript
- **Journey phases** (fixed vocabulary for this run):
  [phase1] → [phase2] → [phase3] → ... → [phaseN]
- **Phase definitions**:
  - [phase1]: [description]
  - [phase2]: [description]
  - ...

**IMPORTANT**: Everywhere the agent instructions say "host", read it as "[user_role]". Everywhere they say "host call", read it as "[user_role] call". The agent prompts are written in host-first language but apply equally to the guest journey when this context block is present.
```

## How Subagents Work

Each layer runs as a **separate Claude process**, not inline in your session. The pattern is:

1. You construct the full prompt and write it to `RUN_DIR/layer-N/prompt.md`
2. You launch it via Bash: `cat "RUN_DIR/layer-N/prompt.md" | claude -p --model claude-sonnet-4-20250514`
3. The subagent writes its output JSON file and exits
4. You verify the output file exists, then move to the next layer

**Do NOT try to run layers yourself.** Each layer must be a separate `claude -p` call. This keeps each layer's context clean and prevents your orchestrator session from running out of context.

Each layer takes ~5-10 minutes. A full run (layers 0-8 + post-processing) takes ~60-90 minutes total.

## File Locations

All source files live under `STACK_DIR`. Use the Read tool to read them — do NOT use `find` or `ls`.

**Lens files:**
- Host call transcripts: `STACK_DIR/Agents-data-source/Customer calls Analysis/02-call-transcripts/host/CALL_FILE`
- Guest call transcripts: `STACK_DIR/Agents-data-source/Customer calls Analysis/02-call-transcripts/guest/CALL_FILE`
- Book extracts: `STACK_DIR/Agents-data-source/Books/extracts/BOOK_EXTRACT`

**Baseline sources:**
- Journey map: `STACK_DIR/Agents-data-source/split-lease-journey-map.md`
- Journey types: `STACK_DIR/inputs/journey-types.json`
- Taste model: `STACK_DIR/inputs/taste-model.md`
- Lens guide: `STACK_DIR/inputs/lens-guide.md`
- Element library: `STACK_DIR/library/elements.json` — **WARNING: this file is 400KB+. Do NOT paste it whole into prompts. Read the first 200 lines (schema + a few examples) and tell the subagent to read the rest from disk if needed.**
- Design tokens: `STACK_DIR/library/tokens.json`
- Style guide: `STACK_DIR/Agents-data-source/Style-guide.md` — **this is the source of truth for colors (purple palette #31135D, not the green in tokens.json)**

**Agent prompts:**
- `STACK_DIR/agents/0-journey-context.md`
- `STACK_DIR/agents/1-works.md`
- `STACK_DIR/agents/2-communicates.md`
- `STACK_DIR/agents/3-looks.md`
- `STACK_DIR/agents/4-behaves.md`
- `STACK_DIR/agents/5-feels.md`
- `STACK_DIR/agents/6-coherence.md`
- `STACK_DIR/agents/7-tests.md`

**Layer outputs:**
- `RUN_DIR/layer-0/journey-context.json`
- `RUN_DIR/layer-1/works-elements.json`
- `RUN_DIR/layer-2/communicates-elements.json`
- `RUN_DIR/layer-3/looks-elements.json`
- `RUN_DIR/layer-4/behaves-elements.json`
- `RUN_DIR/layer-5/feels-elements.json`
- `RUN_DIR/layer-6/coherence-report.json`
- `RUN_DIR/layer-7/tests-elements.json`
- `RUN_DIR/layer-8/ui-elements.json`

## Layer Dependencies

What to include in each layer's prompt:

| Layer | Agent File | Output File | Sources Needed | Previous Layers |
|-------|-----------|-------------|---------------|----------------|
| 0 | 0-journey-context.md | journey-context.json | lens files, journey map, element library | — |
| 1 | 1-works.md | works-elements.json | lens files, element library | 0 |
| 2 | 2-communicates.md | communicates-elements.json | lens files, element library | 0, 1 |
| 3 | 3-looks.md | looks-elements.json | lens files, tokens, taste model, style guide, element library | 0, 1, 2 |
| 4 | 4-behaves.md | behaves-elements.json | lens files, tokens, element library | 0, 1, 2, 3 |
| 5 | 5-feels.md | feels-elements.json | lens files, element library | 0, 1, 2, 3, 4 |
| 6 | 6-coherence.md | coherence-report.json | element library, tokens | 0, 1, 2, 3, 4, 5 |
| 7 | 7-tests.md | tests-elements.json | element library | 0, 1, 2, 3, 4, 5, 6 |
| 8 | (inline — Element Factory) | ui-elements.json | style guide, tokens, element library | 0, 1, 2, 3, 4, 5, 6, 7 |

## Prompt Template

Each prompt.md you write should be:

```
You are running Layer N of the SplitLease Design Stack v2.

## Journey Context
- **Journey type**: [host|guest]
- **User role**: You are analyzing the [HOST|GUEST] journey — the perspective of the [user_description]
- **Call type**: [Host|Guest] call transcript
- **Journey phases** (fixed vocabulary for this run):
  [phase1] → [phase2] → ... → [phaseN]
- **Phase definitions**:
  - [phase1]: [description]
  - ...

**IMPORTANT**: Everywhere the agent instructions say "host", read it as "[user_role]". Everywhere they say "host call", read it as "[user_role] call".

## Your Agent Instructions
[paste full agent .md content]

## Lens
[User_role] call: [filename]
Book extract: [filename]

## Source Materials

### [User_Role] Call Transcript
[content]

### Book Extract
[content]

### [Other baseline sources this layer needs]
[content]

### Previous Layer Outputs
[JSON from previous layers]

## Output Instructions
Save your output as valid JSON to: [exact output path]
Use the Write tool. Output must be valid JSON only.
```

## After All Layers (0-7)

### Layer 8: Element Factory
Run an additional layer that converts the design principles from layers 1-5 into concrete, buildable UI element specifications. Each element gets: visual spec, interaction spec, copy spec, HTML/CSS snippet, before/after comparison. Output to `RUN_DIR/layer-8/ui-elements.json`.

The Element Factory prompt should include all previous layer outputs plus the style guide and design tokens. Elements must follow the production style guide (purple palette, Inter/DM Sans fonts).

### Generate Report
Read `STACK_DIR/templates/report-template.html`. Inject each layer's JSON into the matching `<script id="data-layer-N">` tag. Also inject run-config.json into `<script id="run-config">`. Apply the production style guide. Save to `RUN_DIR/report/index.html`.

**Guest runs**: The report template has a hardcoded `phaseOrder` array for host phases. For guest runs, you must update it to: `["discovery","search","listing_evaluation","proposal_creation","negotiation","acceptance","move_in","active_lease"]`.

### Generate Per-Run Library of Elements
Using the layer-8 ui-elements.json, generate a browsable Library of Elements HTML page (Dribbble-style cards with live iframe previews, search, filtering by category/phase/priority, compare mode, detail modals with live preview first). Apply the production style guide. Save to `RUN_DIR/report/library-of-elements.html`.

### Merge Elements into Library
Read `STACK_DIR/library/elements.json` and the coherence report. Add new elements with `confidence: { lens_count: 1 }` and `status: "pending_review"`. Save back.

### Update Manifest
Read `STACK_DIR/runs/manifest.json`. Add a new entry for this run:
```json
{
  "run_id": "[RUN_ID]",
  "date": "[YYYY-MM-DD]",
  "status": "complete",
  "journey_type": "[host|guest]",
  "lens": {
    "host_call": "[or guest_call — filename]",
    "book_extract": "[filename]"
  },
  "summary": "[One paragraph: who was the caller, what did the book framework reveal]",
  "element_count": [number of layer-8 UI elements],
  "principle_count": [total elements from layers 1-5],
  "layers": {
    "journey_context": "runs/[RUN_ID]/layer-0/journey-context.json",
    "works": "runs/[RUN_ID]/layer-1/works-elements.json",
    "communicates": "runs/[RUN_ID]/layer-2/communicates-elements.json",
    "looks": "runs/[RUN_ID]/layer-3/looks-elements.json",
    "behaves": "runs/[RUN_ID]/layer-4/behaves-elements.json",
    "feels": "runs/[RUN_ID]/layer-5/feels-elements.json",
    "coherence": "runs/[RUN_ID]/layer-6/coherence-report.json",
    "tests": "runs/[RUN_ID]/layer-7/tests-elements.json",
    "ui_elements": "runs/[RUN_ID]/layer-8/ui-elements.json"
  },
  "report_url": "runs/[RUN_ID]/report/index.html",
  "library_url": "runs/[RUN_ID]/report/library-of-elements.html"
}
```
Save back to `STACK_DIR/runs/manifest.json`.

### Update Library
After updating the manifest, rebuild the library data by running:

```
node STACK_DIR/library/rebuild-library.js
```

This script reads `runs/manifest.json`, loads each completed run's `layer-8/ui-elements.json`, and generates `library/library-data.js` — an external data file loaded by `library.html` via `<script src>`.

**Why this step exists:** Per-run `library-of-elements.html` pages only show that run's elements. The Library (`library/library.html`) is the master aggregation page where designers browse ALL elements across ALL runs, filter by run/category/phase/priority, and compare elements side-by-side.

**Architecture:**
- `library.html` — static template (60KB, no data, safe to merge in git)
- `library-data.js` — generated data file (auto-rebuilt, gitignored)
- `rebuild-library.js` — rebuild script, run after any new run or `git pull`

**Data loading priority in library.html:**
1. `window.__LIBRARY_DATA` from `library-data.js` (works from `file://`)
2. Dynamic `fetch("../runs/manifest.json")` (works from HTTP)
3. Inline `<script id="elements-data">` fallback (empty by default)

### Finalize
Update `RUN_DIR/run-config.json` with `status: "complete"`, element counts, and `completed_at` timestamp.

**Note on UI element field names:** Different model runs may produce slightly different field names in ui-elements.json. The Library page normalizes these automatically:
- `html_css` / `html_css_snippet` / `html_snippet` → all treated as the HTML preview
- `name` / `title` → both treated as the element name
- `implements_principles` / `source_elements` → both treated as principle references

This is handled in `library.html`'s `initFromData()` function. You do not need to normalize manually — just be aware that the field names may vary.

## Selecting a Lens

**BEFORE every run**, read `STACK_DIR/runs/manifest.json` to see what has already been run. Extract every past lens combination:

```
Past lenses:
- host: andreas-call.txt × kahneman-part1-two-systems.txt (2026-02-11_2118)
- guest: nneka-call.txt × cialdini-commitment-socialproof.txt (2026-02-12_1430)
...
```

**NEVER repeat an exact call + book combination for the same journey type.** If the user requests a combination that already exists in the manifest, STOP and tell them:

> "This lens has already been run (run ID: XXXX). Would you like to:
> 1. Pick a different book extract (same call)?
> 2. Pick a different call (same book)?
> 3. See what combinations haven't been run yet?"

If the user doesn't specify which call + book to use:
1. Read `STACK_DIR/runs/manifest.json` to get all past lenses
2. Read `STACK_DIR/inputs/lens-guide.md` for recommended pairings
3. List the available call transcripts for the requested journey type
4. List the available book extracts
5. Cross-reference against past runs and **suggest the next best unused combination**, explaining why

Key principles for selection:
- **Vary the book framework** across runs — each book reveals different patterns
- **Vary the caller** — different people surface different journey pain points
- **For guest runs**: Use call transcripts from `guest/` directory
- **For host runs**: Use call transcripts from `host/` directory
- **Maximize coverage**: Prefer calls that haven't been used at all over calls used with a different book
- **Pair strategically**: Match book frameworks to caller profiles (e.g., a confused caller pairs well with usability books, a price-sensitive caller pairs with prospect theory)

## Rules
- Do NOT use `find` or `ls` — all paths are listed above
- Do NOT produce mockup.html or state HTML files
- Do NOT run layers inline — each MUST be a separate `claude -p` subagent
- Do NOT skip the library merge or manifest update
- ALWAYS include the Journey Context Block at the top of every layer prompt
- ALWAYS apply the production style guide (purple palette, Inter/DM Sans) to generated HTML
