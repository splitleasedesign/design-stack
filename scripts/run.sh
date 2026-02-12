#!/bin/bash
# Usage:
#   ./scripts/run.sh --journey host "andreas-call.txt" "kahneman-part1-two-systems.txt"
#   ./scripts/run.sh --journey guest "nneka-call.txt" "cialdini-commitment-socialproof.txt"
#   ./scripts/run.sh "andreas-call.txt" "kahneman-part1-two-systems.txt"  (defaults to host)
set -e

# Parse arguments
JOURNEY_TYPE="host"
if [ "$1" = "--journey" ]; then
  JOURNEY_TYPE="$2"
  shift 2
fi

CALL_FILE="${1:?Usage: ./scripts/run.sh [--journey host|guest] \"call.txt\" \"book.txt\"}"
BOOK_EXTRACT="${2:?Usage: ./scripts/run.sh [--journey host|guest] \"call.txt\" \"book.txt\"}"

# Validate journey type
if [ "$JOURNEY_TYPE" != "host" ] && [ "$JOURNEY_TYPE" != "guest" ]; then
  echo "Error: journey type must be 'host' or 'guest', got '$JOURNEY_TYPE'"
  exit 1
fi

RUN_ID=$(date +%Y-%m-%d_%H%M)
STACK_DIR="$(cd "$(dirname "$0")/.." && pwd)"
RUN_DIR="$STACK_DIR/runs/$RUN_ID"

echo "Design Stack v2.1 Run: $RUN_ID"
echo "Journey: $JOURNEY_TYPE"
echo "Lens: $CALL_FILE + $BOOK_EXTRACT"
echo "Output: $RUN_DIR"

for i in 0 1 2 3 4 5 6 7 8; do mkdir -p "$RUN_DIR/layer-$i"; done
mkdir -p "$RUN_DIR/report"

# Determine call key name based on journey type
if [ "$JOURNEY_TYPE" = "guest" ]; then
  CALL_KEY="guest_call"
else
  CALL_KEY="host_call"
fi

cat > "$RUN_DIR/run-config.json" << EOF
{
  "run_id": "$RUN_ID",
  "journey_type": "$JOURNEY_TYPE",
  "lens": {
    "$CALL_KEY": "$CALL_FILE",
    "book_extract": "$BOOK_EXTRACT"
  },
  "started_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "status": "running"
}
EOF

echo "Launching orchestrator..."

cd "$STACK_DIR"
claude -p "You are the Design Stack Orchestrator v2.1. Read your instructions from $STACK_DIR/agents/orchestrator.md. Journey type: $JOURNEY_TYPE. Lens: call_file=$CALL_FILE, book_extract=$BOOK_EXTRACT. Run directory: $RUN_DIR. Stack directory: $STACK_DIR." --model claude-sonnet-4-20250514

echo "Run complete. Report at: $RUN_DIR/report/index.html"
