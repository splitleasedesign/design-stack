# SplitLease Design Stack

Overnight AI design process that produces compound component specifications.

## How It Works

7 specialized agents run sequentially, each building on the previous output:

| Layer | Agent | Question |
|-------|-------|----------|
| 0 | Journey Context | Where is the user right now? |
| 1 | Process Architect | Why does this element exist? |
| 2 | Information Architect | How should info be structured? |
| 3 | Visual Designer | What does it look like? |
| 4 | Interaction Engineer | What happens when state changes? |
| 5 | Experience Tuner | What should the user feel? |
| 6 | Coherence Auditor | Does it fit the system? |
| 7 | Test Designer | How do we verify it works? |

## Running

```bash
./scripts/run.sh "Host Onboarding — Earnings Estimator"
```

## Reports

Each run produces an HTML report in `runs/<date>/report/index.html`. Reports are pushed to GitHub for team review.

## Inputs

Add source materials to the `inputs/` folder:
- `books/` — PDF reference books
- `customer-calls/` — Call transcripts
- `usability-tests/` — Test transcripts + screenshots
- `site-screenshots/` — Current live site state
- `taste-model.md` — Brand design guide

## Library

Accepted components accumulate in `library/`. The token system in `library/tokens.json` is the source of truth for all visual decisions.
