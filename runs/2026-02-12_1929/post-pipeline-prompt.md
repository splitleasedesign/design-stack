You are generating a Library of Elements HTML page for a design pipeline run.

IMPORTANT: Output ONLY the complete HTML document. No commentary, no markdown fences. Just raw HTML starting with <!DOCTYPE html>.

## Task
Create a browsable Library of Elements HTML page (Dribbble-style cards with live iframe previews, search, filtering by category/phase/priority, compare mode, detail modals with live preview first).

## Design Requirements
- Apply the production style guide: purple palette (#31135D primary), Inter/DM Sans fonts
- Cards should have live iframe previews of the HTML/CSS snippets
- Search by name/description
- Filter by category, phase, priority
- Detail modal with full specs on click
- Responsive layout
- Self-contained single HTML file (inline CSS/JS)

## UI Elements Data
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "ui-001",
      "name": "Onboarding Context Bridge",
      "implements_principles": ["works-005", "communicates-001"],
      "category": "layout",
      "journey_phases": ["onboarding"],
      "priority": "high",
      "description": "Hero section that immediately connects phone call context to platform entry, showing Drew's specific property details as discussed with Bryant",
      "before": "Generic welcome screen with no conversation reference, forcing hosts to mentally bridge call context to platform",
      "after": "Personalized welcome showing specific property details mentioned in call, agent name, and immediate continuation of conversation",
      "visual_spec": {
        "colors": "--primary-purple, --bg-white, --text-dark",
        "typography": "--font-inter 28px --font-weight-bold for heading, --font-inter 16px --font-weight-normal for body",
        "spacing": "--spacing-4xl top/bottom, --spacing-2xl left/right",
        "border_radius": "--rounded-xl"
      },
      "interaction_spec": {
        "default_state": "Immediate recognition elements visible with conversation context",
        "hover_state": "Continue button shows subtle shadow lift",
        "active_state": "Button press feedback with 100ms confirmation",
        "transition": "0.2s ease-in-out"
      },
      "copy_spec": {
        "headline": "Your Chelsea 1BR apartment",
        "body": "As discussed with Bryant - $2,000/month, available for 4+ months",
        "cta": "Continue setup"
      },
      "html_css": "<div style=\"background: var(--bg-white); padding: var(--spacing-4xl) var(--spacing-2xl); border-radius: var(--rounded-xl); box-shadow: var(--shadow-sm);\"><h1 style=\"font-family: var(--font-inter); font-size: var(--text-2xl); font-weight: var(--font-weight-bold); color: var(--primary-purple); margin: 0 0 var(--spacing-md) 0;\">Your Chelsea 1BR apartment</h1><p style=\"font-family: var(--font-inter); font-size: var(--text-md); color: var(--text-gray); margin: 0 0 var(--spacing-2xl) 0;\">As discussed with Bryant - $2,000/month, available for 4+ months</p><button style=\"background: var(--secondary-purple); color: var(--white); font-family: var(--font-inter); font-size: var(--text-base); font-weight: var(--font-weight-semibold); padding: var(--spacing-md) var(--spacing-2xl); border: none; border-radius: var(--rounded-pill); cursor: pointer; transition: background var(--transition-fast) var(--easing-ease);\">Continue setup</button></div>"
    },
    {
      "id": "ui-002",
      "name": "Rapid Property Input",
      "implements_principles": ["works-005", "communicates-002"],
      "category": "form",
      "journey_phases": ["listing_creation"],
      "priority": "high", 
      "description": "Single-line natural language input that captures property details as quickly as Drew can speak them",
      "before": "Multi-step form with separate fields for type, bedrooms, bathrooms, location requiring multiple inputs",
      "after": "Smart input that parses 'Chelsea 1BR 1BA $2000' and auto-structures into proper fields with immediate visual confirmation",
      "visual_spec": {
        "colors": "--bg-white, --border-color, --secondary-purple, --success-green",
        "typography": "--font-inter 16px --font-weight-medium",
        "spacing": "--spacing-lg padding, --spacing-sm between confirmations",
        "border_radius": "--rounded-lg"
      },
      "interaction_spec": {
        "default_state": "Large input field with placeholder showing example format",
        "hover_state": "Border color shifts to purple",
        "active_state": "Real-time parsing with green confirmations appearing as typed",
        "transition": "100ms for confirmation appearance"
      },
      "copy_spec": {
        "headline": "Describe your space",
        "body": "Type naturally: 'Chelsea 1BR 1BA $2000/month'",
        "cta": "Parse details"
      },
      "html_css": "<div style=\"background: var(--bg-white); padding: var(--spacing-2xl); border-radius: var(--rounded-lg);\"><h3 style=\"font-family: var(--font-inter); font-size: var(--text-lg); font-weight: var(--font-weight-semibold); color: var(--text-dark); margin: 0 0 var(--spacing-md) 0;\">Describe your space</h3><input type=\"text\" placeholder=\"Type naturally: 'Chelsea 1BR 1BA $2000/month'\" style=\"width: 100%; height: var(--input-height-lg); padding: var(--spacing-lg); font-family: var(--font-inter); font-size: var(--text-md); border: var(--border-width-thin) solid var(--border-color); border-radius: var(--rounded-lg); transition: border-color var(--transition-fast) var(--easing-ease);\"><div style=\"display: flex; gap: var(--spacing-sm); margin-top: var(--spacing-md); flex-wrap: wrap;\"><span style=\"background: var(--success-green); color: var(--white); padding: var(--spacing-xs) var(--spacing-sm); border-radius: var(--rounded-sm); font-size: var(--text-sm); font-weight: var(--font-weight-medium);\">✓ Chelsea</span><span style=\"background: var(--success-green); color: var(--white); padding: var(--spacing-xs) var(--spacing-sm); border-radius: var(--rounded-sm); font-size: var(--text-sm); font-weight: var(--font-weight-medium);\">✓ 1 Bedroom</span><span style=\"background: var(--success-green); color: var(--white); padding: var(--spacing-xs) var(--spacing-sm); border-radius: var(--rounded-sm); font-size: var(--text-sm); font-weight: var(--font-weight-medium);\">✓ $2,000</span></div></div>"
    },
    {
      "id": "ui-003",
      "name": "Accommodation Response Panel",
      "implements_principles": ["works-006", "communicates-003"],
      "category": "form",
      "journey_phases": ["proposal_mgmt"],
      "priority": "medium",
      "description": "Proposal response interface that makes accommodation the prominent, natural choice with collaborative language",
      "before": "Binary approve/decline buttons of equal visual weight, suggesting rejection is as appropriate as acceptance",
      "after": "Accommodation options prominently displayed with collaborative language, decline option secondary and less prominent",
      "visual_spec": {
        "colors": "--secondary-purple, --accent-purple, --text-gray, --bg-light-gray",
        "typography": "--font-inter 18px --font-weight-semibold for primary, --font-inter 14px --font-weight-medium for secondary",
        "spacing": "--spacing-2xl between options, --spacing-lg padding",
        "border_radius": "--rounded-xl for container, --rounded-pill for buttons"
      },
      "interaction_spec": {
        "default_state": "Accommodation options visually prominent, decline option subtle",
        "hover_state": "Primary options show purple gradient on hover",
        "active_state": "Selected option shows confirmation feedback",
        "transition": "0.2s ease-in-out for color changes"
      },
      "copy_spec": {
        "headline": "Guest Request: 4-month lease with extension option",
        "body": "Ariel and Amber would love to start with 4 months",
        "cta": "That works perfectly"
      },
      "html_css": "<div style=\"background: var(--bg-white); padding: var(--spacing-2xl); border-radius: var(--rounded-xl); box-shadow: var(--shadow-sm);\"><h3 style=\"font-family: var(--font-inter); font-size: var(--text-lg); font-weight: var(--font-weight-semibold); color: var(--text-dark); margin: 0 0 var(--spacing-md) 0;\">Guest Request: 4-month lease with extension option</h3><p style=\"font-family: var(--font-inter); font-size: var(--text-base); color: var(--text-gray); margin: 0 0 var(--spacing-2xl) 0;\">Ariel and Amber would love to start with 4 months</p><div style=\"display: flex; flex-direction: column; gap: var(--spacing-lg);\"><button style=\"background: var(--secondary-purple); color: var(--white); font-family: var(--font-inter); font-size: var(--text-lg); font-weight: var(--font-weight-semibold); padding: var(--spacing-lg) var(--spacing-2xl); border: none; border-radius: var(--rounded-pill); cursor: pointer; transition: background var(--transition-base) var(--easing-ease); width: 100%;\">That works perfectly</button><button style=\"background: var(--bg-light-gray); color: var(--secondary-purple); font-family: var(--font-inter); font-size: var(--text-base); font-weight: var(--font-weight-medium); padding: var(--spacing-md) var(--spacing-xl); border: var(--border-width-thin) solid var(--secondary-purple); border-radius: var(--rounded-pill); cursor: pointer; transition: background var(--transition-base) var(--easing-ease); width: 100%;\">I can make that work if...</button><button style=\"background: transparent; color: var(--text-gray); font-family: var(--font-inter); font-size: var(--text-sm); font-weight: var(--font-weight-medium); padding: var(--spacing-sm); border: none; cursor: pointer; margin-top: var(--spacing-md);\">I need to decline this request</button></div></div>"
    },
    {
      "id": "ui-004",
      "name": "Asset Drag Upload Zone", 
      "implements_principles": ["works-007", "feels-003"],
      "category": "form",
      "journey_phases": ["listing_creation", "retention"],
      "priority": "medium",
      "description": "Encouraging photo upload area that maintains Drew's enthusiasm for sharing additional assets",
      "before": "Technical upload interface with file format requirements and multi-step approval process",
      "after": "Warm, collaborative upload zone with immediate preview and encouraging copy about guest impact",
      "visual_spec": {
        "colors": "--bg-off-white, --secondary-purple, --accent-purple, --text-dark",
        "typography": "--font-inter 16px --font-weight-medium for encouragement, --font-inter 14px --font-weight-normal for instructions",
        "spacing": "--spacing-4xl padding, --spacing-lg between elements",
        "border_radius": "--rounded-xl"
      },
      "interaction_spec": {
        "default_state": "Welcoming upload zone with soft dashed border",
        "hover_state": "Border becomes solid purple, background slightly lighter",
        "active_state": "Immediate preview appears with upload progress",
        "transition": "0.3s ease-out for state changes"
      },
      "copy_spec": {
        "headline": "Your photos help guests fall in love with your space",
        "body": "Drag photos here or click to browse",
        "cta": "Add photos"
      },
      "html_css": "<div style=\"background: var(--bg-off-white); border: 2px dashed var(--secondary-purple); border-radius: var(--rounded-xl); padding: var(--spacing-4xl); text-align: center; cursor: pointer; transition: all var(--transition-slow) var(--easing-ease-out);\"><div style=\"margin-bottom: var(--spacing-lg);\"><svg width=\"48\" height=\"48\" style=\"color: var(--secondary-purple);\"><path d=\"M12 4V2C12 0.9 11.1 0 10 0S8 0.9 8 2V4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4H16V2C16 0.9 15.1 0 14 0S12 0.9 12 2V4Z\" fill=\"currentColor\"/></svg></div><h3 style=\"font-family: var(--font-inter); font-size: var(--text-lg); font-weight: var(--font-weight-semibold); color: var(--text-dark); margin: 0 0 var(--spacing-sm) 0;\">Your photos help guests fall in love with your space</h3><p style=\"font-family: var(--font-inter); font-size: var(--text-base); color: var(--text-gray); margin: 0 0 var(--spacing-lg) 0;\">Drag photos here or click to browse</p><button style=\"background: var(--secondary-purple); color: var(--white); font-family: var(--font-inter); font-size: var(--text-base); font-weight: var(--font-weight-semibold); padding: var(--spacing-md) var(--spacing-2xl); border: none; border-radius: var(--rounded-pill); cursor: pointer;\">Add photos</button></div>"
    },
    {
      "id": "ui-005",
      "name": "Speed Progress Indicator",
      "implements_principles": ["works-005", "communicates-002"],
      "category": "notification",
      "journey_phases": ["listing_creation", "pricing"],
      "priority": "high",
      "description": "Progress tracker that emphasizes speed and efficiency, showing time saved compared to phone alternatives",
      "before": "Generic progress bar with step numbers, no reference to speed or efficiency perception",
      "after": "Progress indicator with time estimates and efficiency messaging that reinforces platform speed advantages",
      "visual_spec": {
        "colors": "--secondary-purple, --accent-purple, --bg-light-gray, --text-gray",
        "typography": "--font-inter 14px --font-weight-semibold for time, --font-inter 12px --font-weight-medium for labels",
        "spacing": "--spacing-lg padding, --spacing-sm between steps",
        "border_radius": "--rounded-lg"
      },
      "interaction_spec": {
        "default_state": "Current step highlighted, completed steps with checkmarks",
        "hover_state": "No hover interaction needed",
        "active_state": "Real-time updates as user progresses",
        "transition": "0.4s ease-in-out for progress advancement"
      },
      "copy_spec": {
        "headline": "90 seconds saved",
        "body": "vs phone call",
        "cta": "Property details ✓"
      },
      "html_css": "<div style=\"background: var(--bg-white); padding: var(--spacing-lg); border-radius: var(--rounded-lg); box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: space-between;\"><div style=\"display: flex; align-items: center; gap: var(--spacing-md);\"><div style=\"font-family: var(--font-inter); font-size: var(--text-sm); font-weight: var(--font-weight-semibold); color: var(--secondary-purple);\">90 seconds saved</div><div style=\"font-family: var(--font-inter); font-size: var(--text-xs); color: var(--text-gray);\">vs phone call</div></div><div style=\"display: flex; gap: var(--spacing-sm); align-items: center;\"><div style=\"display: flex; align-items: center; gap: var(--spacing-xs);\"><div style=\"width: 20px; height: 20px; background: var(--secondary-purple); border-radius: var(--rounded-full); display: flex; align-items: center; justify-content: center; color: var(--white); font-size: var(--text-xs);\">✓</div><span style=\"font-family: var(--font-inter); font-size: var(--text-xs); color: var(--text-gray);\">Property details</span></div><div style=\"width: 40px; height: 2px; background: var(--bg-light-gray);\"></div><div style=\"width: 20px; height: 20px; background: var(--accent-purple); border-radius: var(--rounded-full); display: flex; align-items: center; justify-content: center; color: var(--white); font-size: var(--text-xs);\">2</div></div></div>"
    },
    {
      "id": "ui-006",
      "name": "Pricing Confidence Slider",
      "implements_principles": ["works-005", "feels-001"],
      "category": "form",
      "journey_phases": ["pricing"],
      "priority": "medium",
      "description": "Price input that matches Drew's immediate pricing certainty with visual confidence cues",
      "before": "Empty price input field requiring typed entry and validation, no confidence reinforcement",
      "after": "Slider pre-set to conversation price with immediate visual confirmation and confidence messaging",
      "visual_spec": {
        "colors": "--secondary-purple, --accent-purple, --bg-light-gray, --text-dark",
        "typography": "--font-inter 24px --font-weight-bold for price, --font-inter 14px --font-weight-medium for labels",
        "spacing": "--spacing-2xl padding, --spacing-lg between elements",
        "border_radius": "--rounded-lg"
      },
      "interaction_spec": {
        "default_state": "Slider positioned at conversation price, immediate confirmation visible",
        "hover_state": "Slider handle grows slightly on hover",
        "active_state": "Real-time price updates with confidence messaging",
        "transition": "0.1s linear for smooth slider movement"
      },
      "copy_spec": {
        "headline": "$2,000/month",
        "body": "Perfect! This matches your conversation with Bryant",
        "cta": "Confirm pricing"
      },
      "html_css": "<div style=\"background: var(--bg-white); padding: var(--spacing-2xl); border-radius: var(--rounded-lg); box-shadow: var(--shadow-sm);\"><div style=\"text-align: center; margin-bottom: var(--spacing-xl);\"><div style=\"font-family: var(--font-inter); font-size: var(--text-4xl); font-weight: var(--font-weight-bold); color: var(--primary-purple);\">$2,000</div><div style=\"font-family: var(--font-inter); font-size: var(--text-lg); color: var(--text-gray);\">per month</div></div><div style=\"position: relative; margin: var(--spacing-xl) 0;\"><input type=\"range\" min=\"1000\" max=\"4000\" value=\"2000\" style=\"width: 100%; height: 8px; background: var(--bg-light-gray); border-radius: var(--rounded-sm); outline: none; -webkit-appearance: none;\"><div style=\"width: 12px; height: 12px; background: var(--secondary-purple); border-radius: var(--rounded-full); position: absolute; top: -2px; left: 33%; box-shadow: var(--shadow-md);\"></div></div><div style=\"text-align: center; padding: var(--spacing-md); background: var(--bg-light); border-radius: var(--rounded-md);\"><div style=\"font-family: var(--font-inter); font-size: var(--text-base); font-weight: var(--font-weight-medium); color: var(--secondary-purple);\">✓ Perfect! This matches your conversation with Bryant</div></div></div>"
    },
    {
      "id": "ui-007",
      "name": "Immediate Input Acknowledgment",
      "implements_principles": ["behaves-001", "looks-001"],
      "category": "form",
      "journey_phases": ["evaluation", "listing_creation"],
      "priority": "high",
      "description": "Real-time input confirmation that matches conversational acknowledgment speed with visual feedback",
      "before": "Form fields with no feedback until submission, creating uncertainty about input reception",
      "after": "Instant visual confirmation appearing within 100ms of each input, mimicking conversational 'Got it' responses",
      "visual_spec": {
        "colors": "--success-green, --secondary-purple, --text-gray",
        "typography": "--font-inter 14px --font-weight-medium",
        "spacing": "--spacing-sm for confirmation badges",
        "border_radius": "--rounded-sm for badges"
      },
      "interaction_spec": {
        "default_state": "Input field ready with subtle purple border",
        "hover_state": "Border intensifies to active purple",
        "active_state": "Green checkmark appears immediately upon valid input",
        "transition": "0.1s ease-out for confirmation appearance"
      },
      "copy_spec": {
        "headline": "Location",
        "body": "Enter neighborhood or address",
        "cta": "✓ Got it"
      },
      "html_css": "<div style=\"position: relative;\"><label style=\"font-family: var(--font-inter); font-size: var(--text-base); font-weight: var(--font-weight-medium); color: var(--text-dark); display: block; margin-bottom: var(--spacing-xs);\">Location</label><input type=\"text\" placeholder=\"Enter neighborhood or address\" value=\"Chelsea\" style=\"width: 100%; height: var(--input-height); padding: var(--spacing-md); font-family: var(--font-inter); font-size: var(--text-base); border: var(--border-width-thin) solid var(--secondary-purple); border-radius: var(--rounded-md); transition: border-color var(--transition-fast) var(--easing-ease);\"><div style=\"position: absolute; right: var(--spacing-md); top: 50%; transform: translateY(-50%); background: var(--success-green); color: var(--white); padding: var(--spacing-xs) var(--spacing-sm); border-radius: var(--rounded-sm); font-size: var(--text-xs); font-weight: var(--font-weight-medium);\">✓ Got it</div></div>"
    },
    {
      "id": "ui-008",
      "name": "Accommodation Success Celebration",
      "implements_principles": ["feels-002", "behaves-002"],
      "category": "notification",
      "journey_phases": ["proposal_mgmt", "active_lease"],
      "priority": "medium",
      "description": "Positive reinforcement message that celebrates Drew's accommodating behavior and shows guest impact",
      "before": "Generic 'Proposal accepted' confirmation with no recognition of accommodation behavior",
      "after": "Warm celebration message that acknowledges flexibility and shows positive guest response",
      "visual_spec": {
        "colors": "--secondary-purple, --bg-off-white, --accent-purple, --text-dark",
        "typography": "--font-inter 18px --font-weight-semibold for headline, --font-inter 14px --font-weight-normal for details",
        "spacing": "--spacing-2xl padding, --spacing-lg between elements",
        "border_radius": "--rounded-xl"
      },
      "interaction_spec": {
        "default_state": "Celebratory card with soft shadow and warm background",
        "hover_state": "No interaction needed, static celebration",
        "active_state": "Appears with gentle fade-in animation",
        "transition": "0.6s ease-out for appearance"
      },
      "copy_spec": {
        "headline": "Thanks for being flexible with Ariel and Amber!",
        "body": "Your accommodation made their day. They're excited to move in.",
        "cta": "View details"
      },
      "html_css": "<div style=\"background: var(--bg-off-white); padding: var(--spacing-2xl); border-radius: var(--rounded-xl); box-shadow: var(--shadow-md); border-left: 4px solid var(--secondary-purple);\"><div style=\"display: flex; align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-lg);\"><div style=\"width: 40px; height: 40px; background: var(--secondary-purple); border-radius: var(--rounded-full); display: flex; align-items: center; justify-content: center; color: var(--white); font-size: var(--text-lg);\">🎉</div><h3 style=\"font-family: var(--font-inter); font-size: var(--text-lg); font-weight: var(--font-weight-semibold); color: var(--text-dark); margin: 0;\">Thanks for being flexible with Ariel and Amber!</h3></div><p style=\"font-family: var(--font-inter); font-size: var(--text-base); color: var(--text-gray); margin: 0 0 var(--spacing-lg) 0;\">Your accommodation made their day. They're excited to move in.</p><button style=\"background: var(--secondary-purple); color: var(--white); font-family: var(--font-inter); font-size: var(--text-sm); font-weight: var(--font-weight-medium); padding: var(--spacing-sm) var(--spacing-lg); border: none; border-radius: var(--rounded-pill); cursor: pointer;\">View details</button></div>"
    },
    {
      "id": "ui-009",
      "name": "Asset Impact Preview",
      "implements_principles": ["works-007", "looks-003"],
      "category": "card",
      "journey_phases": ["listing_creation", "retention"],
      "priority": "medium",
      "description": "Live preview showing how uploaded photos improve listing appearance, maintaining upload enthusiasm",
      "before": "Static upload confirmation with no visual impact demonstration",
      "after": "Dynamic before/after preview showing listing enhancement with encouraging metrics",
      "visual_spec": {
        "colors": "--bg-white, --secondary-purple, --accent-purple, --text-gray",
        "typography": "--font-inter 16px --font-weight-semibold for metrics, --font-inter 14px --font-weight-normal for descriptions",
        "spacing": "--spacing-lg padding, --spacing-md between preview elements",
        "border_radius": "--rounded-lg"
      },
      "interaction_spec": {
        "default_state": "Side-by-side before/after preview with improvement metrics",
        "hover_state": "Photos show subtle zoom effect on hover",
        "active_state": "Metrics animate in after photo upload",
        "transition": "0.4s ease-in-out for metric animations"
      },
      "copy_spec": {
        "headline": "Your photos made a huge difference!",
        "body": "Guests spend 3x longer viewing listings with multiple photos",
        "cta": "Add more photos"
      },
      "html_css": "<div style=\"background: var(--bg-white); padding: var(--spacing-lg); border-radius: var(--rounded-lg); box-shadow: var(--shadow-sm);\"><h3 style=\"font-family: var(--font-inter); font-size: var(--text-lg); font-weight: var(--font-weight-semibold); color: var(--secondary-purple); margin: 0 0 var(--spacing-md) 0;\">Your photos made a huge difference!</h3><div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md); margin-bottom: var(--spacing-lg);\"><div><div style=\"font-size: var(--text-xs); color: var(--text-gray); margin-bottom: var(--spacing-xs);\">Before</div><div style=\"width: 100%; height: 120px; background: var(--bg-light-gray); border-radius: var(--rounded-md); display: flex; align-items: center; justify-content: center; color: var(--text-gray);\">📷</div></div><div><div style=\"font-size: var(--text-xs); color: var(--text-gray); margin-bottom: var(--spacing-xs);\">After</div><div style=\"width: 100%; height: 120px; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); border-radius: var(--rounded-md); position: relative; overflow: hidden;\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNGI0N2NlIi8+PC9zdmc+\" style=\"width: 100%; height: 100%; object-fit: cover;\"></div></div></div><div style=\"background: var(--bg-off-white); padding: var(--spacing-md); border-radius: var(--rounded-md);\"><p style=\"font-family: var(--font-inter); font-size: var(--text-sm); color: var(--text-gray); margin: 0 0 var(--spacing-sm) 0;\">Guests spend <strong style=\"color: var(--secondary-purple);\">3x longer</strong> viewing listings with multiple photos</p><button style=\"background: var(--secondary-purple); color: var(--white); font-family: var(--font-inter); font-size: var(--text-sm); font-weight: var(--font-weight-medium); padding: var(--spacing-xs) var(--spacing-md); border: none; border-radius: var(--rounded-pill); cursor: pointer;\">Add more photos</button></div></div>"
    },
    {
      "id": "ui-010",
      "name": "Conversational Response Options",
      "implements_principles": ["communicates-003", "behaves-002"],
      "category": "button",
      "journey_phases": ["proposal_mgmt"],
      "priority": "medium",
      "description": "Response buttons that mirror Drew's natural conversational style with collaborative language patterns",
      "before": "Binary Approve/Decline buttons with formal, transactional language",
      "after": "Multiple response options using Drew's natural language patterns and collaborative tone",
      "visual_spec": {
        "colors": "--secondary-purple, --accent-purple, --text-gray, --bg-light-gray",
        "typography": "--font-inter 16px --font-weight-medium for primary responses, --font-inter 14px --font-weight-normal for alternatives",
        "spacing": "--spacing-lg between options, --spacing-md padding",
        "border_radius": "--rounded-pill"
      },
      "interaction_spec": {
        "default_state": "Primary accommodation responses prominent, alternatives available but secondary",
        "hover_state": "Options show subtle lift effect with shadow increase",
        "active_state": "Selected option shows immediate confirmation",
        "transition": "0.2s ease-in-out"
      },
      "copy_spec": {
        "headline": "Sounds good",
        "body": "I can make that work if...",
        "cta": "Not possible, but here's an alternative"
      },
      "html_css": "<div style=\"display: flex; flex-direction: column; gap: var(--spacing-md); width: 100%;\"><button style=\"background: var(--secondary-purple); color: var(--white); font-family: var(--font-inter); font-size: var(--text-md); font-weight: var(--font-weight-medium); padding: var(--spacing-lg) var(--spacing-2xl); border: none; border-radius: var(--rounded-pill); cursor: pointer; transition: all var(--transition-base) var(--easing-ease); box-shadow: var(--shadow-sm);\">Sounds good</button><button style=\"background: var(--bg-white); color: var(--secondary-purple); font-family: var(--font-inter); font-size: var(--text-base); font-weight: var(--font-weight-medium); padding: var(--spacing-md) var(--spacing-xl); border: var(--border-width-thin) solid var(--secondary-purple); border-radius: var(--rounded-pill); cursor: pointer; transition: all var(--transition-base) var(--easing-ease);\">I can make that work if...</button><button style=\"background: transparent; color: var(--text-gray); font-family: var(--font-inter); font-size: var(--text-sm); font-weight: var(--font-weight-medium); padding: var(--spacing-sm) var(--spacing-lg); border: none; border-radius: var(--rounded-pill); cursor: pointer; transition: color var(--transition-fast) var(--easing-ease);\">Not possible, but here's an alternative</button></div>"
    },
    {
      "id": "ui-011",
      "name": "Speed Confidence Loader",
      "implements_principles": ["behaves-001", "feels-001"],
      "category": "notification",
      "journey_phases": ["evaluation", "onboarding"],
      "priority": "high",
      "description": "Loading state that maintains conversational confidence with progress messaging that reinforces speed",
      "before": "Generic spinner or blank screen during processing, breaking conversational flow",
      "after": "Confidence-maintaining progress indicator with time estimates and positive messaging",
      "visual_spec": {
        "colors": "--secondary-purple, --accent-purple, --text-gray, --bg-white",
        "typography": "--font-inter 16px --font-weight-medium for status, --font-inter 14px --font-weight-normal for estimates",
        "spacing": "--spacing-2xl padding, --spacing-md between elements",
        "border_radius": "--rounded-lg"
      },
      "interaction_spec": {
        "default_state": "Smooth progress animation with confidence messaging",
        "hover_state": "No interaction during loading",
        "active_state": "Real-time progress updates with encouraging copy",
        "transition": "0.3s linear for progress bar"
      },
      "copy_spec": {
        "headline": "Setting up your listing...",
        "body": "Almost done (15 seconds faster than phone call)",
        "cta": "Processing"
      },
      "html_css": "<div style=\"background: var(--bg-white); padding: var(--spacing-2xl); border-radius: var(--rounded-lg); box-shadow: var(--shadow-sm); text-align: center;\"><div style=\"width: 40px; height: 40px; margin: 0 auto var(--spacing-lg) auto; border: 3px solid var(--bg-light-gray); border-top: 3px solid var(--secondary-purple); border-radius: var(--rounded-full); animation: spin 1s linear infinite;\"></div><h3 style=\"font-family: var(--font-inter); font-size: var(--text-lg); font-weight: var(--font-weight-medium); color: var(--text-dark); margin: 0 0 var(--spacing-sm) 0;\">Setting up your listing...</h3><p style=\"font-family: var(--font-inter); font-size: var(--text-base); color: var(--text-gray); margin: 0;\">Almost done (15 seconds faster than phone call)</p><div style=\"width: 100%; height: 4px; background: var(--bg-light-gray); border-radius: var(--rounded-sm); margin-top: var(--spacing-lg); overflow: hidden;\"><div style=\"width: 75%; height: 100%; background: var(--secondary-purple); border-radius: var(--rounded-sm); transition: width 0.3s ease;\"></div></div></div><style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>"
    },
    {
      "id": "ui-012",
      "name": "Asset Upload Success Card",
      "implements_principles": ["feels-003", "behaves-003"],
      "category": "card",
      "journey_phases": ["listing_creation", "retention"],
      "priority": "medium",
      "description": "Celebratory confirmation that amplifies Drew's upload enthusiasm with impact metrics and encouragement",
      "before": "Simple 'Upload complete' message with no enthusiasm reinforcement or impact demonstration",
      "after": "Warm success celebration with listing improvement metrics and encouragement for additional uploads",
      "visual_spec": {
        "colors": "--bg-off-white, --secondary-purple, --accent-purple, --text-dark",
        "typography": "--font-inter 18px --font-weight-semibold for celebration, --font-inter 14px --font-weight-normal for metrics",
        "spacing": "--spacing-2xl padding, --spacing-lg between elements",
        "border_radius": "--rounded-xl"
      },
      "interaction_spec": {
        "default_state": "Celebratory card with photos displayed and metrics visible",
        "hover_state": "Uploaded photos show subtle scale effect",
        "active_state": "Appears with spring animation from upload action",
        "transition": "0.6s cubic-bezier(0.34, 1.56, 0.64, 1) for appearance"
      },
      "copy_spec": {
        "headline": "Beautiful! Your space looks amazing",
        "body": "Photos added successfully. Listings with 5+ photos get 40% more interest.",
        "cta": "Add a video tour?"
      },
      "html_css": "<div style=\"background: var(--bg-off-white); padding: var(--spacing-2xl); border-radius: var(--rounded-xl); box-shadow: var(--shadow-lg); border: 1px solid var(--secondary-purple); position: relative;\"><div style=\"position: absolute; top: var(--spacing-lg); right: var(--spacing-lg); background: var(--secondary-purple); color: var(--white); padding: var(--spacing-xs) var(--spacing-sm); border-radius: var(--rounded-pill); font-size: var(--text-xs); font-weight: var(--font-weight-semibold);\">✓ Success</div><h2 style=\"font-family: var(--font-inter); font-size: var(--text-xl); font-weight: var(--font-weight-semibold); color: var(--secondary-purple); margin: 0 0 var(--spacing-md) 0;\">Beautiful! Your space looks amazing</h2><div style=\"display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-sm); margin-bottom: var(--spacing-lg);\"><div style=\"aspect-ratio: 1; background: linear-gradient(45deg, #e0e0e0, #f0f0f0); border-radius: var(--rounded-md);\"></div><div style=\"aspect-ratio: 1; background: linear-gradient(135deg, #e0e0e0, #f0f0f0); border-radius: var(--rounded-md);\"></div><div style=\"aspect-ratio: 1; background: linear-gradient(225deg, #e0e0e0, #f0f0f0); border-radius: var(--rounded-md);\"></div></div><p style=\"font-family: var(--font-inter); font-size: var(--text-base); color: var(--text-gray); margin: 0 0 var(--spacing-lg) 0;\">Photos added successfully. Listings with <strong style=\"color: var(--secondary-purple);\">5+ photos</strong> get <strong style=\"color: var(--secondary-purple);\">40% more interest</strong>.</p><button style=\"background: var(--accent-purple); color: var(--white); font-family: var(--font-inter); font-size: var(--text-base); font-weight: var(--font-weight-medium); padding: var(--spacing-md) var(--spacing-xl); border: none; border-radius: var(--rounded-pill); cursor: pointer; transition: background var(--transition-base) var(--easing-ease);\">Add a video tour?</button></div>"
    }
  ]
}

## Style Guide CSS Variables
Use these exact production variables:

```css
:root {
  --primary-purple: #31135D;
  --primary-purple-hover: #251047;
  --secondary-purple: rgb(109, 49, 194);
  --accent-purple: rgb(140, 104, 238);
  --text-dark: #1a1a1a;
  --text-gray: #6b7280;
  --bg-white: #ffffff;
  --bg-light: #f9fafb;
  --bg-off-white: rgb(252, 250, 255);
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
  --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-dm: 'DM Sans', sans-serif;
  --rounded-lg: 8px;
  --rounded-xl: 12px;
}
```

## Output Instructions
Output the COMPLETE HTML document. It must be a self-contained single file with inline CSS and JS. Start with <!DOCTYPE html> and end with </html>.
