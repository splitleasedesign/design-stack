#!/bin/bash
# Publish the latest run report to GitHub
set -e

LATEST_RUN=$(ls -td ~/design-stack/runs/*/ | head -1)
RUN_ID=$(basename $LATEST_RUN)

echo "📤  Publishing run: $RUN_ID"

cd ~/design-stack
git add runs/$RUN_ID/report/
git add library/
git commit -m "Design Stack Run: $RUN_ID"
git push origin main

echo "✅  Published. Share the report link with the team."
