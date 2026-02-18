You are running Layer 8 (Element Factory) of the SplitLease Design Stack v2.

This is the final layer. You synthesize ALL elements from Layers 1-7 into concrete, buildable UI element specifications with production-ready HTML/CSS.

## Journey Context
- **Journey type**: guest
- **Journey phases**: discovery → search → listing_evaluation → proposal_creation → negotiation → acceptance → move_in → active_lease

## Your Inputs (read ALL of these)
- Layer 0: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-0/journey-context.json`
- Layer 1: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-1/works-elements.json`
- Layer 2: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-2/communicates-elements.json`
- Layer 3: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-3/looks-elements.json`
- Layer 4: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-4/behaves-elements.json`
- Layer 5: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-5/feels-elements.json`
- Layer 6: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-6/coherence-report.json`
- Layer 7: `C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-7/tests-elements.json`
- Style guide: `C:/Users/igor/OneDrive/Documents/design-stack/Agents-data-source/Style-guide.md`
- Design tokens: `C:/Users/igor/OneDrive/Documents/design-stack/library/tokens.json`
- Element library: `C:/Users/igor/OneDrive/Documents/design-stack/library/elements.json` (read first 200 lines for context)

## Production Style Guide (CRITICAL)
All HTML/CSS must use the production purple palette:
- **Primary purple**: #31135D
- **Secondary purple**: rgb(109, 49, 194)
- **Accent purple**: rgb(140, 104, 238)
- **Fonts**: Inter (UI headings/labels), DM Sans (body text)
- **Border radius**: 8px (small), 12px (medium), 20px (large)
- **Shadows**: Purple-tinted shadows
Read the full style guide for complete tokens.

## Your Task

For each high-priority element cluster identified across Layers 1-7, produce a concrete UI element specification with:
1. A clear name and description
2. Which journey phases it serves
3. Which principles from Layers 1-5 it implements
4. A complete, self-contained HTML/CSS snippet that renders in an iframe
5. Copy guidelines and interaction specs

## Required Output: ui-elements.json

```json
{
  "lens": {
    "guest_call": "Susan  Bryant customer call.txt",
    "book_extract": "donnorman-affordances-signifiers-feedback.txt"
  },
  "synthesis_summary": "<one paragraph: what this run's elements collectively achieve>",
  "elements": [
    {
      "id": "ds-ui-001",
      "name": "<clear element name>",
      "category": "card|form|navigation|feedback|modal|badge|section|overlay",
      "journey_phases": ["<phase1>", "<phase2>"],
      "priority": "high|medium|low",
      "implements_principles": ["works-001", "communicates-002", "looks-001", "behaves-001", "feels-001"],
      "problem_it_solves": "<one sentence>",
      "description": "<2-3 sentences>",
      "visual_spec": {
        "layout": "<flexbox/grid description>",
        "background": "<color>",
        "border": "<style>",
        "border_radius": "<from style guide>",
        "typography": {
          "heading": "<font, size, weight, color>",
          "body": "<font, size, weight, color>",
          "accent": "<font, size, weight, color>"
        },
        "spacing": {"padding": "...", "gap": "..."},
        "color_usage": "<which colors and why>"
      },
      "interaction_spec": {
        "default_state": "<what user sees>",
        "hover": "<hover behavior>",
        "click": "<click action>",
        "animation": "<transitions>",
        "responsive": "<mobile adaptation>"
      },
      "copy_spec": {
        "primary_text": "<real Split Lease copy>",
        "secondary_text": "<supporting>",
        "micro_copy": "<buttons, tooltips>",
        "voice": "<tone in 3-5 words>"
      },
      "html_css": "<FULL self-contained HTML document with DOCTYPE, style tag with @import for Google Fonts, CSS variables for the purple palette, and component markup with real Split Lease copy. Must render correctly in an iframe.>",
      "test_strategy": "<from Layer 7 — how to validate>",
      "coherence_notes": "<from Layer 6 — reinforcements or gaps>"
    }
  ]
}
```

### HTML/CSS Template
Each element's html_css must be a complete document:
```html
<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500&display=swap');
  :root {
    --primary-purple: #31135D;
    --primary-purple-hover: #251047;
    --secondary-purple: rgb(109, 49, 194);
    --accent-purple: rgb(140, 104, 238);
    --text-dark: #1a1a1a;
    --text-gray: #6b7280;
    --bg-white: #ffffff;
    --bg-light: #f9fafb;
    --border-color: #e5e7eb;
  }
  body { font-family: 'DM Sans', sans-serif; margin: 0; padding: 24px; background: var(--bg-light); }
  /* Component styles here */
</style>
</head>
<body>
  <!-- Component with REAL Split Lease copy, not Lorem ipsum -->
</body>
</html>
```

### Rules
- Aim for 5-10 UI elements that synthesize the strongest signals across all layers
- Each element must trace to specific principles from Layers 1-5
- Use REAL Split Lease copy (real property names, real prices, real dates)
- HTML/CSS must be production-quality
- Prioritize elements that fill coverage gaps identified in Layer 6
- Every element must have a clear test strategy from Layer 7

## Output Instructions
Save output as valid JSON to: C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-17_1830/layer-8/ui-elements.json
Use the Write tool. Output must be valid JSON only.
