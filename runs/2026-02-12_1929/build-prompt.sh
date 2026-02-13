#!/bin/bash
# Build prompt for a given layer
# Usage: bash build-prompt.sh <layer_number>

LAYER=$1
STACK_DIR="C:/Users/igor/OneDrive/Documents/design-stack"
RUN_DIR="$STACK_DIR/runs/2026-02-12_1929"
CALL_FILE="$STACK_DIR/Agents-data-source/Customer calls Analysis/02-call-transcripts/host/drew-call.txt"
BOOK_FILE="$STACK_DIR/Agents-data-source/Books/extracts/dontmakemethink-usability-laws.txt"

JOURNEY_CONTEXT_BLOCK='## Journey Context
- **Journey type**: host
- **User role**: You are analyzing the HOST journey — the perspective of a property owner or leaseholder who lists their space on Split Lease to find guests for shared living arrangements.
- **Call type**: Host call transcript
- **Journey phases** (fixed vocabulary for this run):
  discovery → evaluation → onboarding → listing_creation → pricing → proposal_mgmt → active_lease → retention
- **Phase definitions**:
  - discovery: Host first hears about Split Lease (referral, ad, search). Deciding whether to explore.
  - evaluation: Host researches the platform. Compares to Craigslist, Airbnb, roommate apps. Reads about guarantees.
  - onboarding: Host signs up, verifies identity, connects with their assigned agent (e.g., Bryant). First call happens here.
  - listing_creation: Host creates their listing: photos, description, amenities, house rules, availability calendar.
  - pricing: Host sets nightly/weekly rates. Understands the payment model, guaranteed income, Split Lease fee structure.
  - proposal_mgmt: Host receives guest proposals, reviews them, counters terms, accepts or declines.
  - active_lease: Guest is living in the space. Host manages the ongoing relationship, payments, and any issues.
  - retention: Lease ends or renews. Host decides whether to list again, refer others, or leave the platform.'

# Map layer to agent file, output file, and sources needed
case $LAYER in
  1)
    AGENT_FILE="$STACK_DIR/agents/1-works.md"
    OUTPUT_FILE="works-elements.json"
    PREV_LAYERS="layer-0/journey-context.json"
    EXTRA_SOURCES=""
    ;;
  2)
    AGENT_FILE="$STACK_DIR/agents/2-communicates.md"
    OUTPUT_FILE="communicates-elements.json"
    PREV_LAYERS="layer-0/journey-context.json layer-1/works-elements.json"
    EXTRA_SOURCES=""
    ;;
  3)
    AGENT_FILE="$STACK_DIR/agents/3-looks.md"
    OUTPUT_FILE="looks-elements.json"
    PREV_LAYERS="layer-0/journey-context.json layer-1/works-elements.json layer-2/communicates-elements.json"
    EXTRA_SOURCES="tokens taste-model style-guide"
    ;;
  4)
    AGENT_FILE="$STACK_DIR/agents/4-behaves.md"
    OUTPUT_FILE="behaves-elements.json"
    PREV_LAYERS="layer-0/journey-context.json layer-1/works-elements.json layer-2/communicates-elements.json layer-3/looks-elements.json"
    EXTRA_SOURCES="tokens"
    ;;
  5)
    AGENT_FILE="$STACK_DIR/agents/5-feels.md"
    OUTPUT_FILE="feels-elements.json"
    PREV_LAYERS="layer-0/journey-context.json layer-1/works-elements.json layer-2/communicates-elements.json layer-3/looks-elements.json layer-4/behaves-elements.json"
    EXTRA_SOURCES=""
    ;;
  6)
    AGENT_FILE="$STACK_DIR/agents/6-coherence.md"
    OUTPUT_FILE="coherence-report.json"
    PREV_LAYERS="layer-0/journey-context.json layer-1/works-elements.json layer-2/communicates-elements.json layer-3/looks-elements.json layer-4/behaves-elements.json layer-5/feels-elements.json"
    EXTRA_SOURCES="tokens"
    ;;
  7)
    AGENT_FILE="$STACK_DIR/agents/7-tests.md"
    OUTPUT_FILE="tests-elements.json"
    PREV_LAYERS="layer-0/journey-context.json layer-1/works-elements.json layer-2/communicates-elements.json layer-3/looks-elements.json layer-4/behaves-elements.json layer-5/feels-elements.json layer-6/coherence-report.json"
    EXTRA_SOURCES=""
    ;;
  *)
    echo "Unknown layer: $LAYER"
    exit 1
    ;;
esac

PROMPT_FILE="$RUN_DIR/layer-$LAYER/prompt.md"

# Header
cat > "$PROMPT_FILE" << EOF
You are running Layer $LAYER of the SplitLease Design Stack v2.

IMPORTANT: You are running in print mode (-p). You have NO tools — no Write, no Read, no Bash. Your ONLY output is stdout. Print the complete JSON directly. No commentary, no markdown code fences, no explanation. Your entire response must be a single valid JSON object matching the schema in your agent instructions.

$JOURNEY_CONTEXT_BLOCK

## Your Agent Instructions

EOF

# Agent instructions
cat "$AGENT_FILE" >> "$PROMPT_FILE"

# Lens info
cat >> "$PROMPT_FILE" << 'EOF'

## Lens
Host call: drew-call.txt
Book extract: dontmakemethink-usability-laws.txt

## Source Materials

### Host Call Transcript
EOF
cat "$CALL_FILE" >> "$PROMPT_FILE"

echo "" >> "$PROMPT_FILE"
echo "### Book Extract" >> "$PROMPT_FILE"
cat "$BOOK_FILE" >> "$PROMPT_FILE"

# Extra sources based on layer
for src in $EXTRA_SOURCES; do
  echo "" >> "$PROMPT_FILE"
  case $src in
    tokens)
      echo "### Design Tokens" >> "$PROMPT_FILE"
      cat "$STACK_DIR/library/tokens.json" >> "$PROMPT_FILE"
      ;;
    taste-model)
      echo "### Taste Model" >> "$PROMPT_FILE"
      cat "$STACK_DIR/inputs/taste-model.md" >> "$PROMPT_FILE"
      ;;
    style-guide)
      echo "### Style Guide" >> "$PROMPT_FILE"
      cat "$STACK_DIR/Agents-data-source/Style-guide.md" >> "$PROMPT_FILE"
      ;;
  esac
done

# Element library excerpt
echo "" >> "$PROMPT_FILE"
echo "### Element Library (first 200 lines)" >> "$PROMPT_FILE"
head -200 "$STACK_DIR/library/elements.json" >> "$PROMPT_FILE"
echo "" >> "$PROMPT_FILE"
echo "... (truncated — full library has 400KB+ of elements)" >> "$PROMPT_FILE"

# Previous layer outputs
echo "" >> "$PROMPT_FILE"
echo "## Previous Layer Outputs" >> "$PROMPT_FILE"
for prev in $PREV_LAYERS; do
  echo "" >> "$PROMPT_FILE"
  echo "### $prev" >> "$PROMPT_FILE"
  if [ -f "$RUN_DIR/$prev" ]; then
    cat "$RUN_DIR/$prev" >> "$PROMPT_FILE"
  else
    echo "(file not yet available)" >> "$PROMPT_FILE"
  fi
done

# Output instructions
cat >> "$PROMPT_FILE" << EOF

## Output Instructions
You are running in print mode (--print / -p). You have NO tools available — no Write tool, no Read tool, no Bash tool. You cannot save files.

Your ONLY output channel is stdout. Print the complete JSON object directly to stdout. That is how your output gets captured.

Output ONLY the valid JSON object matching the ${OUTPUT_FILE%.json} schema from your agent instructions above. No markdown fences, no commentary, no preamble, no explanation. Just the raw JSON object starting with { and ending with }.
EOF

echo "Layer $LAYER prompt built: $(wc -c < "$PROMPT_FILE") bytes, $(wc -l < "$PROMPT_FILE") lines"
