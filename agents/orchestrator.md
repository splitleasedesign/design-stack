# Design Stack Orchestrator v3.0 — Generic Process Runner

You coordinate pipelines. You do NOT design anything.

## Paths

```
STACK_DIR = C:\Users\igor\OneDrive\Documents\design-stack
```

`RUN_DIR` is set per run: `STACK_DIR/runs/<RUN_ID>` (e.g. `runs/2026-02-12_1357`).

## How to Read process.json

Every process type is defined by a `process.json` file at `STACK_DIR/processes/{process_type}/process.json`. This file tells you everything you need to run the pipeline:

| Field | Purpose |
|-------|---------|
| `process_type` | Identifier (e.g. `"design-stack"`, `"reverse-benchmark"`) |
| `version` | Schema version |
| `description` | What this process does |
| `lens.required_inputs` | What the user must provide — each has a `key`, `description`, and `path_template` with `{placeholders}` |
| `lens.dedup_key` | Fields to check for duplicate runs in the manifest |
| `layers[]` | Ordered list of pipeline stages — each has `id`, `name`, `agent` (filename or null for inline), `output`, `sources`, `depends_on`, and optional `inline: true` |
| `shared_sources` | Map of source name → relative path from `STACK_DIR` |
| `post_processing` | Ordered list of steps to run after all layers complete |
| `report_template` | Path to the HTML report template (relative to `STACK_DIR`) |
| `journey_context_block` | If `true`, prepend the Journey Context Block to every layer prompt |
| `model` | Claude model to use for subagent calls |

**Agent prompt files** live at `STACK_DIR/processes/{process_type}/agents/{layer.agent}`.

## Starting a New Run

Before executing any layers, you must initialize the run:

1. **Determine process type** — the user specifies which process to run (e.g. "run a design-stack pipeline", "run reverse-benchmark"). Default is `"design-stack"` if unspecified.
2. **Read process.json** — load `STACK_DIR/processes/{process_type}/process.json`
3. **Set RUN_ID** — use current timestamp as `YYYY-MM-DD_HHMM` (e.g. `2026-02-12_1357`)
4. **Check the lens** — read `STACK_DIR/runs/manifest.json` and verify the requested input combination has not been used for this process type (using `lens.dedup_key` fields). Filter manifest entries by `process_type`.
5. **Create run directories** — one `layer-N` directory per layer defined in `process.json`, plus a `report` directory:
   ```
   mkdir -p STACK_DIR/runs/RUN_ID/layer-{N}   (for each layer id)
   mkdir -p STACK_DIR/runs/RUN_ID/report
   ```
6. **Write run-config.json** to `RUN_DIR/run-config.json`:
   ```json
   {
     "run_id": "YYYY-MM-DD_HHMM",
     "process_type": "design-stack",
     "journey_type": "host|guest",
     "lens": {
       "call_file": "filename.txt",
       "book_extract": "filename.txt"
     },
     "status": "running",
     "started_at": "ISO-8601 timestamp"
   }
   ```
   The `lens` keys come from `process.json → lens.required_inputs[].key`.
7. **Proceed to layer execution** below

If the user says "run a guest pipeline" or "run a host pipeline" without specifying a lens, follow the lens selection strategy to pick one and confirm with the user before proceeding.

## What You Do

1. Read `process.json` for the requested process type
2. Read `RUN_DIR/run-config.json` to get the journey type, lens files, and run ID
3. If the process has a `journey_types` shared source, read it to get phase vocabulary
4. For each layer in `process.json → layers[]`, sequentially:
   a. If `layer.agent` is `null` and `layer.inline` is `true`, run the layer inline (see "Inline Layers" below)
   b. Otherwise, read the agent's prompt from `STACK_DIR/processes/{process_type}/agents/{layer.agent}`
   c. Read the source materials listed in `layer.sources` — resolve names via `process.json → shared_sources`
   d. Read outputs from layers listed in `layer.depends_on`
   e. Construct a single prompt that includes: **journey context block** (if enabled) + agent instructions + source materials + previous layer outputs + output path
   f. Write that prompt to `RUN_DIR/layer-{layer.id}/prompt.md`
   g. Launch the agent: `cat "RUN_DIR/layer-{layer.id}/prompt.md" | claude -p --model {process.model}`
   h. Verify the output file was created
5. After all layers: run the post-processing steps listed in `process.json → post_processing[]`

### Inline Layers

Some layers have `"inline": true` and `"agent": null`. These are run by you directly (not as a subagent). The layer definition tells you what sources and dependencies to use. For the design-stack Element Factory (layer 8), this means: convert the design principles from layers 1-5 into concrete, buildable UI element specifications.

## Journey Types

The pipeline supports two journey types: **host** and **guest**. The journey type is set in `run-config.json` under the `journey_type` field (defaults to `"host"` if missing).

Read the full journey type definition from the path in `process.json → shared_sources.journey_types`. This tells you:
- `user_role`: "host" or "guest"
- `call_transcript_path`: where to find call transcripts for this journey type
- `journey_phases`: the fixed phase vocabulary for this journey
- `phase_descriptions`: what each phase means
- `key_concerns`: what matters most to this user type

## Journey Context Block

**CRITICAL**: When `process.json → journey_context_block` is `true`, every layer prompt MUST begin with a Journey Context Block before the agent instructions:

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

1. You construct the full prompt and write it to `RUN_DIR/layer-{N}/prompt.md`
2. You launch it via Bash: `cat "RUN_DIR/layer-{N}/prompt.md" | claude -p --model {process.model}`
3. The subagent writes its output JSON file and exits
4. You verify the output file exists, then move to the next layer

**Do NOT try to run layers yourself.** Each layer must be a separate `claude -p` call. This keeps each layer's context clean and prevents your orchestrator session from running out of context.

Each layer takes ~5-10 minutes. A full run varies by process type.

## Resolving Source Materials

When a layer lists sources like `["lens_files", "tokens", "element_library"]`, resolve them as follows:

1. **`lens_files`** — the lens input files, resolved using `process.json → lens.required_inputs[].path_template` with values from `run-config.json → lens`
2. **Any key in `shared_sources`** — look up the path in `process.json → shared_sources.{key}`, prepend `STACK_DIR/`
3. **`element_library` WARNING** — this file is 400KB+. Do NOT paste it whole into prompts. Read the first 200 lines (schema + a few examples) and tell the subagent to read the rest from disk if needed.
4. **`style_guide` NOTE** — this is the source of truth for colors (purple palette #31135D, not the green in tokens.json)

## Prompt Template

Each prompt.md you write should follow this structure:

```
You are running Layer {N} ({layer.name}) of the SplitLease {process_type} pipeline v{process.version}.

## Journey Context
[if journey_context_block is true — see above]

## Your Agent Instructions
[paste full agent .md content from processes/{process_type}/agents/{layer.agent}]

## Lens
[Label from required_inputs]: [filename]
[Label from required_inputs]: [filename]

## Source Materials

### [Source name]
[content]

### [Source name]
[content]

### Previous Layer Outputs
[JSON from layers listed in depends_on]

## Output Instructions
Save your output as valid JSON to: [exact output path]
Use the Write tool. Output must be valid JSON only.
```

## Post-Processing Steps

After all layers complete, execute the steps listed in `process.json → post_processing[]` in order. Each step name maps to these actions:

### `generate_report`
Read `STACK_DIR/{process.report_template}`. Inject each layer's JSON into the matching `<script id="data-layer-N">` tag. Also inject run-config.json into `<script id="run-config">`. Apply the production style guide. Save to `RUN_DIR/report/index.html`.

**Guest runs**: The report template has a hardcoded `phaseOrder` array for host phases. For guest runs, update it to: `["discovery","search","listing_evaluation","proposal_creation","negotiation","acceptance","move_in","active_lease"]`.

### `generate_run_library`
Using the final layer's element output (typically ui-elements.json), generate a browsable Library of Elements HTML page (Dribbble-style cards with live iframe previews, search, filtering by category/phase/priority, compare mode, detail modals with live preview first). Apply the production style guide. Save to `RUN_DIR/report/library-of-elements.html`.

### `merge_elements`
Read `STACK_DIR/library/elements.json` and the coherence report. Add new elements with `confidence: { lens_count: 1 }` and `status: "pending_review"`. Save back.

### `update_manifest`
Read `STACK_DIR/runs/manifest.json`. Add a new entry for this run:
```json
{
  "run_id": "[RUN_ID]",
  "process_type": "[process_type]",
  "date": "[YYYY-MM-DD]",
  "status": "complete",
  "journey_type": "[host|guest]",
  "lens": {
    "[key]": "[value — from run-config lens]"
  },
  "summary": "[One paragraph: who/what was analyzed, what did the framework reveal]",
  "element_count": [number of final-layer UI elements],
  "principle_count": [total elements from design layers],
  "layers": {
    "[layer.name]": "runs/[RUN_ID]/layer-[N]/[layer.output]"
  },
  "report_url": "runs/[RUN_ID]/report/index.html",
  "library_url": "runs/[RUN_ID]/report/library-of-elements.html"
}
```
Save back to `STACK_DIR/runs/manifest.json`.

### `rebuild_library`
After updating the manifest, rebuild the library data by running:
```
node STACK_DIR/library/rebuild-library.js
```

This script reads `runs/manifest.json`, loads each completed run's element output, and generates `library/library-data.js` — an external data file loaded by `library.html` via `<script src>`.

**Architecture:**
- `library.html` — static template (60KB, no data, safe to merge in git)
- `library-data.js` — generated data file (auto-rebuilt, gitignored)
- `rebuild-library.js` — rebuild script, run after any new run or `git pull`

**Data loading priority in library.html:**
1. `window.__LIBRARY_DATA` from `library-data.js` (works from `file://`)
2. Dynamic `fetch("../runs/manifest.json")` (works from HTTP)
3. Inline `<script id="elements-data">` fallback (empty by default)

### `slack_notification`
After pushing, send a summary to Slack. Read the webhook URL from `STACK_DIR/inputs/slack-webhook.txt` (one line, not committed to git).

Use `curl` to POST a JSON payload with this format:
```
*{Process Type} Run Complete* — `RUN_ID`

*Intention:* [One sentence: who/what was analyzed, through what framework]
*Implementation:* [Layers run, model used, element counts]
*Changes:* [Bullet list: principles, UI elements, reinforcements, library totals]
*Next:* [Suggested next run combination]

<https://splitleasedesign.github.io/design-stack/library/library.html|Browse Library of Elements>
```

If `slack-webhook.txt` does not exist, skip the Slack notification silently.

### Finalize
Update `RUN_DIR/run-config.json` with `status: "complete"`, element counts, and `completed_at` timestamp.

**Note on UI element field names:** Different model runs may produce slightly different field names in ui-elements.json. The Library page normalizes these automatically:
- `html_css` / `html_css_snippet` / `html_snippet` → all treated as the HTML preview
- `name` / `title` → both treated as the element name
- `implements_principles` / `source_elements` → both treated as principle references

This is handled in `library.html`'s `initFromData()` function and `rebuild-library.js`'s `normalizeElement()`. You do not need to normalize manually — just be aware that the field names may vary.

## Selecting a Lens

**BEFORE every run**, read `STACK_DIR/runs/manifest.json` to see what has already been run. Extract every past lens combination, filtering by the current `process_type`:

```
Past lenses ({process_type}):
- host: andreas-call.txt × kahneman-part1-two-systems.txt (2026-02-11_2118)
- guest: nneka-call.txt × cialdini-commitment-socialproof.txt (2026-02-12_1430)
...
```

**NEVER repeat an exact input combination for the same process type.** Use the `lens.dedup_key` fields to check uniqueness. If the user requests a combination that already exists in the manifest, STOP and tell them:

> "This lens has already been run (run ID: XXXX). Would you like to:
> 1. Pick different inputs?
> 2. See what combinations haven't been run yet?"

If the user doesn't specify which inputs to use:
1. Read `STACK_DIR/runs/manifest.json` to get all past lenses for this process type
2. Read `STACK_DIR/inputs/lens-guide.md` for recommended pairings (if it exists)
3. List the available input files for the requested inputs
4. Cross-reference against past runs and **suggest the next best unused combination**, explaining why

Key principles for selection:
- **Vary the inputs** across runs — each combination reveals different patterns
- **Maximize coverage**: Prefer inputs that haven't been used at all over those used with a different pairing
- **Pair strategically**: Match inputs to maximize analytical insight

## Adding a New Process Type

To create a new process type:

1. Create `STACK_DIR/processes/{your-process-type}/process.json` following the schema above
2. Create agent prompt files in `STACK_DIR/processes/{your-process-type}/agents/` — one `.md` file per layer that has `"agent"` set
3. The orchestrator will automatically pick it up — just tell it "run a {your-process-type} pipeline"

Required fields in process.json:
- `process_type`, `version`, `description`
- `lens.required_inputs[]` with `key`, `description`, `path_template`
- `lens.dedup_key[]`
- `layers[]` with `id`, `name`, `agent`, `output`, `sources`, `depends_on`
- `shared_sources` (can be empty `{}`)
- `post_processing[]`
- `model`

Optional fields:
- `report_template` — omit if the process doesn't generate HTML reports
- `journey_context_block` — defaults to `false` if omitted
- `inline` on layers — defaults to `false`

## Rules
- Do NOT use `find` or `ls` — all paths are defined in process.json
- Do NOT produce mockup.html or state HTML files
- Do NOT run layers inline — each MUST be a separate `claude -p` subagent (unless `layer.inline` is `true`)
- Do NOT skip the library merge or manifest update
- ALWAYS include the Journey Context Block at the top of every layer prompt (when enabled for the process)
- ALWAYS apply the production style guide (purple palette, Inter/DM Sans) to generated HTML
- ALWAYS include `process_type` in manifest entries and run-config.json
