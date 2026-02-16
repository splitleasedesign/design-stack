# Reverse Benchmark — Run 2: Zillow × Innovator's Dilemma (Part 2)
# Engine: Gemini 3 Pro via OpenCode

You are running the **reverse-benchmark** process from the Split Lease Design Stack.

## Paths

```
STACK_DIR = C:\Users\igor\OneDrive\Documents\design-stack
```

## Process Definition

Read the process definition at: `STACK_DIR/processes/reverse-benchmark/process.json`

This is a **6-layer pipeline** that analyzes a competitor's UX to find overlooked disappointment gaps — what they've completely ignored that Split Lease can own.

## This Run's Lens

- **Competitor**: Zillow
- **Book**: `The Innovator's Dilemma (Clayton M. Christensen)2000.pdf`
- **Book location**: `STACK_DIR/Agents-data-source/Books/Books/` (the filename contains a Unicode right single quote — use file search tools to find it, match pattern `*Innovator*Dilemma*`)
- **Chapters to focus on**: Part 2, Chapters 5-7 — "Managing Disruptive Technological Change"
  - Ch 5: Give Responsibility for Disruptive Technologies to Organizations Whose Customers Need Them
  - Ch 6: Match the Size of the Organization to the Size of the Market
  - Ch 7: Discovering New and Emerging Markets
- **Book Guide**: `STACK_DIR/Agents-data-source/Books/Book Guide/Books_Summary.md` (entry #17)
- **Analysis angle**: Zillow dominates real estate search but has ZERO presence in mid-term shared housing. Their organization is built to serve buyers/sellers and long-term renters — their processes and values (Ch 5) make it structurally impossible to pursue Split Lease's market. Their size demands large markets (Ch 6), so they'll ignore mid-term until it's too late. And they can't discover this emerging market through traditional research (Ch 7).
- **Run ID**: Use current timestamp as `YYYY-MM-DD_HHMM`

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
     "competitor": "zillow",
     "lens": {
       "competitor": "zillow",
       "book": "The Innovator's Dilemma (Clayton M. Christensen)2000.pdf",
       "book_chapters": "Part 2, Chapters 5-7: Managing Disruptive Technological Change"
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

## Your Agent Instructions
{paste full agent .md content}

## Lens
Competitor: Zillow
Book: The Innovator's Dilemma — Clayton M. Christensen
Chapters: Part 2 (Ch 5-7) — Managing Disruptive Technological Change
Analysis angle: Zillow's organizational structure, market size requirements, and traditional research methods make it structurally unable to serve mid-term shared housing.

## How to Read the Book
Read the full book PDF from disk. The file is at:
  STACK_DIR/Agents-data-source/Books/Books/

The filename contains a Unicode right single quote (U+2019). Search for files matching *Innovator*Dilemma*

Focus on Part 2, Chapters 5-7:
- Chapter 5: Give Responsibility for Disruptive Technologies to Organizations Whose Customers Need Them — create separate orgs with matching cost structures
- Chapter 6: Match the Size of the Organization to the Size of the Market — large companies need large markets; disruptive markets start small
- Chapter 7: Discovering New and Emerging Markets — you can't analyze markets that don't exist yet; discovery-driven planning vs. analytical planning

Also read the Book Guide for chapter context:
  STACK_DIR/Agents-data-source/Books/Book Guide/Books_Summary.md

## Source Materials

### [Other sources per layer]
{content}

### Previous Layer Outputs
{JSON from previous layers}

## Output Instructions
Save your output as valid JSON to: STACK_DIR/runs/{RUN_ID}/layer-{N}/{output_filename}
Use the Write tool. Output must be valid JSON only.
```

5. Execute as a subagent (see engine-specific command below)
6. Verify the output file was created

**Subagent execution command (Gemini 3 Pro via OpenCode):**
```
cat "STACK_DIR/runs/{RUN_ID}/layer-{N}/prompt.md" | opencode -p --model gemini-3-pro
```
Note: Adjust the exact model flag and command syntax to match your OpenCode installation. The prompt.md file is engine-agnostic — any model that can read files from disk and write JSON will work.

**Layer dependency table:**

| Layer | Agent File | Output File | Sources | Depends On |
|-------|-----------|-------------|---------|------------|
| 0 | 0-competitor-mapping.md | competitor-journey.json | book PDF (Ch 5-7), book guide, journey map | — |
| 1 | 1-disappointment-mining.md | disappointments.json | book PDF (Ch 5-7), book guide | 0 |
| 2 | 2-transcript-crossref.md | crossref-insights.json | book PDF (Ch 5-7), element library, host+guest call transcripts | 0, 1 |
| 3 | 3-opportunity-identification.md | opportunities.json | book PDF (Ch 5-7), element library | 0, 1, 2 |
| 4 | 4-element-specification.md | ui-elements.json | style guide, tokens, element library | 0, 1, 2, 3 |
| 5 | 5-coherence.md | coherence-report.json | element library, tokens | 0, 1, 2, 3, 4 |

**Source file locations:**
- Book PDF: `STACK_DIR/Agents-data-source/Books/Books/` — search for `*Innovator*Dilemma*`. Focus on Part 2, Ch 5-7.
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
Read these transcripts from disk. Search for mentions of "zillow", "apartments.com", real estate platforms, long-term vs mid-term rental frustrations, and keywords related to the disappointments from Layer 1.
```

### 3. Post-Processing

After all 6 layers complete:

1. **Generate Report**: Read `STACK_DIR/templates/report-template.html`. Inject layer JSONs. Save to `STACK_DIR/runs/{RUN_ID}/report/index.html`. Apply production style guide.

2. **Generate Run Library**: From layer-4 ui-elements.json, create a browsable Library of Elements page. Save to `STACK_DIR/runs/{RUN_ID}/report/library-of-elements.html`.

3. **Merge Elements**: Read `STACK_DIR/library/elements.json`. Add new elements with `confidence: { lens_count: 1 }` and `status: "pending_review"`. Save back.

4. **Update Manifest**: Add entry to `STACK_DIR/runs/manifest.json`:
   ```json
   {
     "run_id": "{RUN_ID}",
     "process_type": "reverse-benchmark",
     "date": "{YYYY-MM-DD}",
     "status": "complete",
     "competitor": "zillow",
     "lens": {
       "competitor": "zillow",
       "book": "The Innovator's Dilemma (Clayton M. Christensen)2000.pdf",
       "book_chapters": "Part 2, Chapters 5-7: Managing Disruptive Technological Change"
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

## Rules
- Do NOT use `find` or `ls` — all paths are listed above
- Do NOT run layers inline — each MUST be a separate subagent process
- Do NOT skip post-processing steps
- ALWAYS read the actual book PDF from disk — do NOT use the pre-made extracts in Books/extracts/
- ALWAYS apply production style guide (purple palette #31135D, Inter/DM Sans)
- ALWAYS include `process_type: "reverse-benchmark"` in manifest and run-config
