#!/bin/bash
# Usage: ./scripts/run.sh "Target component description"
set -e

TARGET="${1:-No target specified}"
RUN_ID=$(date +%Y-%m-%d_%H%M)
RUN_DIR=~/design-stack/runs/$RUN_ID

echo "🏗️  Design Stack Run: $RUN_ID"
echo "🎯  Target: $TARGET"
echo "📁  Output: $RUN_DIR"

mkdir -p $RUN_DIR/{layer-0,layer-1,layer-2,layer-3,layer-4,layer-5,layer-6,layer-7,report}

# Write run config
cat > $RUN_DIR/run-config.json << EOF
{
  "run_id": "$RUN_ID",
  "target": "$TARGET",
  "started_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "status": "running"
}
EOF

echo "📋  Run config created. Launching orchestrator..."

# Launch the orchestrator with Claude Code
cd ~/design-stack
claude -p "You are the Design Stack Orchestrator. Run target: $TARGET. Run directory: $RUN_DIR. Read your full instructions from agents/orchestrator.md, then execute the full pipeline." --model claude-sonnet-4-20250514

echo "✅  Run complete. Report at: $RUN_DIR/report/index.html"
