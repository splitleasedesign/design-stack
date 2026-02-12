You are running Layer 8 (Element Factory) of the SplitLease Design Stack v2.

## Journey Context
- **Journey type**: host
- **User role**: HOST journey — property owners/leaseholders listing space on Split Lease.
- **Journey phases**: discovery → evaluation → onboarding → listing_creation → pricing → proposal_mgmt → active_lease → retention

## Your Task: Element Factory

Convert the design principles from Layers 1-5 into **concrete, buildable UI element specifications**. Each element gets:
1. **Visual spec**: What it looks like (colors, typography, spacing from the style guide)
2. **Interaction spec**: How it behaves (states, transitions, animations)
3. **Copy spec**: What it says (exact copy, tone, voice)
4. **HTML/CSS snippet**: A working code snippet that demonstrates the element
5. **Before/after comparison**: What the current experience is vs. what the new element delivers

## Production Style Guide Requirements
All HTML/CSS must follow the Split Lease production style guide:
- **Purple palette**: Use --primary-purple (#31135D), --secondary-purple (rgb(109, 49, 194)), --accent-purple (rgb(140, 104, 238))
- **Fonts**: Inter for UI, DM Sans for display
- **Import fonts**: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
- **Spacing**: 4px/8px/12px/16px/20px/24px/32px scale
- **Border radius**: 4px (sm), 6px (md), 8px (lg), 12px (xl), 16px (2xl), 20px (pill)
- **Shadows**: Use purple-tinted shadows (rgba(49, 19, 93, 0.15-0.35))

## Required Output: ui-elements.json

```json
{
  "lens": {
    "host_call": "jessica-filomeno-call.txt",
    "book_extract": "cialdini-authority-liking-scarcity.txt"
  },
  "elements": [
    {
      "id": "ui-001",
      "source_elements": ["works-001", "communicates-001", "looks-001", "behaves-001", "feels-001"],
      "title": "<descriptive name>",
      "category": "trust_signal|pricing_tool|navigation|feedback|onboarding|dashboard|communication",
      "journey_phases": ["<phase1>", "<phase2>"],
      "priority": "high|medium|low",
      "visual_spec": {
        "description": "<what it looks like>",
        "colors": ["<CSS variables used>"],
        "typography": "<font choices>",
        "spacing": "<spacing values>",
        "layout": "<layout description>"
      },
      "interaction_spec": {
        "default_state": "<normal state>",
        "hover_state": "<hover behavior>",
        "active_state": "<click/active behavior>",
        "loading_state": "<loading behavior>",
        "empty_state": "<empty state>",
        "error_state": "<error behavior>",
        "transitions": "<animation/transition details>"
      },
      "copy_spec": {
        "headline": "<exact headline copy>",
        "body": "<exact body copy>",
        "cta": "<call to action text>",
        "micro_copy": ["<helper text, tooltips, etc.>"],
        "tone": "<voice description>"
      },
      "html_snippet": "<complete, self-contained HTML+CSS that renders the element>",
      "before_after": {
        "before": "<what the current experience is>",
        "after": "<what the new element delivers>"
      }
    }
  ]
}
```

## Source Materials

Read ALL layer outputs from disk:
- Layer 0: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-0\journey-context.json
- Layer 1: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-1\works-elements.json
- Layer 2: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-2\communicates-elements.json
- Layer 3: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-3\looks-elements.json
- Layer 4: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-4\behaves-elements.json
- Layer 5: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-5\feels-elements.json
- Layer 6: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-6\coherence-report.json
- Layer 7: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-7\tests-elements.json

Also read:
- Style Guide: C:\Users\Split Lease\Documents\design-stack\Agents-data-source\Style-guide.md (lines 1-500)
- Design Tokens: C:\Users\Split Lease\Documents\design-stack\library\tokens.json
- Element Library: C:\Users\Split Lease\Documents\design-stack\library\elements.json (lines 1-200)

## Rules
- Each UI element must have a COMPLETE, self-contained HTML/CSS snippet that can be rendered in a browser
- HTML snippets must use the production style guide (purple palette, Inter/DM Sans fonts)
- Include Google Fonts import in each snippet
- Every element must trace back to specific principle elements from Layers 1-5
- Focus on the highest-priority elements from the coherence report
- Aim for 8-15 UI elements that cover the key journey phases
- HTML snippets should be clean, modern, and production-ready

## Output Instructions
Save your output as valid JSON to: C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359\layer-8\ui-elements.json
Use the Write tool. Output must be valid JSON only.