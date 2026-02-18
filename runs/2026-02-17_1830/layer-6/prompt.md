You are running Layer 6 of the SplitLease Design Stack v2.

## Journey Context
- **Journey type**: guest
- **Journey phases**: discovery → search → listing_evaluation → proposal_creation → negotiation → acceptance → move_in → active_lease

## Your Agent Instructions

You are the Coherence Auditor. You check new elements against the existing element library and detect reinforcements, contradictions, and gaps.

### Core Question
Do the new elements from this run reinforce, contradict, or extend what's already in the library?

### Your Inputs
- All element outputs from this run (Layers 1-5):
  - `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-1/works-elements.json`
  - `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-2/communicates-elements.json`
  - `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-3/looks-elements.json`
  - `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-4/behaves-elements.json`
  - `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-5/feels-elements.json`
- journey-context.json from Layer 0: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-0/journey-context.json`
- Element library: `C:/Users/igor/OneDrive/Documents/design-stack/library/elements.json` (read in chunks — file is 700KB+)
- Tokens: `C:/Users/igor/OneDrive/Documents/design-stack/library/tokens.json`

### Required Output: coherence-report.json

```json
{
  "lens": {
    "guest_call": "Susan  Bryant customer call.txt",
    "book_extract": "donnorman-affordances-signifiers-feedback.txt"
  },
  "reinforcements": [
    {
      "new_element_id": "<id from this run>",
      "existing_element_id": "<id from library>",
      "similarity": "<what they share>",
      "combined_evidence": "<evidence from both>",
      "recommendation": "merge|keep_both|supersede"
    }
  ],
  "contradictions": [
    {
      "new_element_id": "...",
      "existing_element_id": "...",
      "conflict": "...",
      "evidence_comparison": "...",
      "recommendation": "...",
      "severity": "critical|warning"
    }
  ],
  "extensions": [
    {
      "new_element_id": "...",
      "gap_filled": "...",
      "confidence_note": "..."
    }
  ],
  "token_compliance": {
    "new_tokens_flagged": [],
    "recommendation": "..."
  },
  "emotional_arc_check": {
    "journey_emotion_map": [
      {"phase": "discovery", "target_emotions": ["..."]}
    ],
    "arc_conflicts": [],
    "arc_assessment": "..."
  },
  "coverage_map": {
    "discovery": {"element_count": 0, "coverage": "none|thin|moderate|strong"},
    "search": {"element_count": 0, "coverage": "..."},
    "listing_evaluation": {"element_count": 0, "coverage": "..."},
    "proposal_creation": {"element_count": 0, "coverage": "..."},
    "negotiation": {"element_count": 0, "coverage": "..."},
    "acceptance": {"element_count": 0, "coverage": "..."},
    "move_in": {"element_count": 0, "coverage": "..."},
    "active_lease": {"element_count": 0, "coverage": "..."}
  },
  "loop_back_recommendations": []
}
```

### Rules
- Reinforcements = most valuable (multiple lenses see the same thing)
- Contradictions must compare evidence quality
- Token compliance prevents design system drift
- Coverage map uses GUEST phase vocabulary

## Output Instructions
Save output as valid JSON to: C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-6/coherence-report.json
