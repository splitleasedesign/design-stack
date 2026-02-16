You are generating a Library of Elements HTML page for a design pipeline run.

IMPORTANT: You are running in print mode (-p). You have NO tools — no Write, no Read, no Bash. Your ONLY output is stdout. Print the complete HTML directly. No commentary, no markdown code fences. Your entire response must be a complete HTML document starting with <!DOCTYPE html>.

## Task
Create a beautiful, browsable Library of Elements page (Dribbble-style card grid) from the UI elements JSON below. Requirements:

1. **Card grid layout** with live iframe previews of each element's HTML/CSS
2. **Search bar** to filter by name, category, phase
3. **Filter chips** for category (works/communicates/looks/behaves/feels) and phase and priority
4. **Detail modal** when clicking a card — shows live preview first, then specs (visual, interaction, copy), rationale, before/after
5. **Compare mode** — select 2+ cards and see them side-by-side
6. **Production style guide**: Use the purple palette (#31135D base, #4A2580 secondary), Inter + DM Sans fonts, clean white cards with subtle shadows
7. **Fully self-contained** — all CSS inline, no external dependencies except Google Fonts
8. **Responsive** — works on desktop and tablet


## UI Elements Data
{
  "run_id": "2026-02-12_1929",
  "layer": "element-factory",
  "element_count": 15,
  "elements": [
    {
      "id": "ui-001",
      "name": "Self-Evidence Phase Entry Header",
      "category": "works",
      "source_elements": [
        "works-001",
        "communicates-001",
        "communicates-002",
        "feels-001"
      ],
      "phase": "onboarding",
      "priority": "high",
      "visual_spec": {
        "colors": {
          "heading": "#31135D",
          "subtext": "#6b7280",
          "background": "#ffffff",
          "agent_badge_bg": "rgb(252, 250, 255)",
          "agent_badge_border": "#e5e7eb"
        },
        "typography": {
          "heading_family": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          "heading_size": "28px",
          "heading_weight": "700",
          "heading_line_height": "1.2",
          "subtext_family": "'Inter', sans-serif",
          "subtext_size": "14px",
          "subtext_weight": "400",
          "subtext_line_height": "1.5"
        },
        "spacing": {
          "heading_margin_bottom": "8px",
          "subtext_margin_bottom": "32px",
          "agent_badge_padding": "8px 12px",
          "section_padding": "32px 24px"
        },
        "layout": "Vertical stack: agent attribution badge at top, then heading anchored to host's property and guest names, then subtext with context. The heading is the largest, boldest element on the page — 2x the size of body text."
      },
      "interaction_spec": {
        "states": {
          "default": "Static display — no interactive elements in the header itself",
          "loading": "Heading-shaped skeleton placeholder at 28px height, subtext skeleton at 14px. Agent badge shows agent avatar placeholder.",
          "error": "If data fails to load, heading becomes: 'We couldn't load your details — try refreshing' with a Retry link"
        },
        "transitions": "Content fades in over 150ms with cubic-bezier(0.16, 1, 0.3, 1) easing. Skeleton placeholders hold exact position to prevent layout shift.",
        "micro_interactions": "None — the header is a static anchor. No hover effects, no animations. Confidence comes from stillness."
      },
      "copy_spec": {
        "headline": "Hey Drew — here's your Chelsea apartment",
        "body": "Bryant set this up from your call. Let's confirm the details.",
        "cta": "",
        "tone": "Warm, personal, direct. Uses the host's first name and property location. References the agent by name. Frames the action as confirmation, not creation."
      },
      "html_css": "<div class=\"phase-entry-header\"><div class=\"agent-badge\"><div class=\"agent-avatar\">B</div><span class=\"agent-name\">From your call with Bryant</span></div><h1 class=\"anchor-heading\">Hey Drew — here's your Chelsea apartment</h1><p class=\"anchor-subtext\">Bryant set this up from your call. Let's confirm the details.</p></div><style>.phase-entry-header{padding:32px 24px;background:#ffffff;max-width:640px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.agent-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:rgb(252,250,255);border:1px solid #e5e7eb;border-radius:20px;margin-bottom:16px;font-size:13px;color:#6b7280}.agent-avatar{width:24px;height:24px;border-radius:50%;background:#31135D;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600}.anchor-heading{font-size:28px;font-weight:700;color:#31135D;line-height:1.2;margin:0 0 8px 0;letter-spacing:-0.01em}.anchor-subtext{font-size:14px;color:#6b7280;line-height:1.5;margin:0 0 32px 0}</style>",
      "before_after": {
        "before": "Generic dashboard header: 'Welcome to Split Lease! Complete your onboarding to get started.' No personalization, no agent reference, no property context. Host must navigate to find their listing.",
        "after": "Personalized continuation of the call: 'Hey Drew — here's your Chelsea apartment. Bryant set this up from your call.' Host sees recognition, not discovery. The first screen answers 'What is this?' and 'Why am I here?' within 2 seconds."
      },
      "rationale": "Krug's First Law demands self-evidence at every phase entry. Drew's call ends with momentum ('can we maybe move on?') — the first platform screen must sustain this by showing recognition (his name, his property, his agent) rather than requiring orientation. The agent badge provides provenance; the heading uses call vocabulary; the subtext frames the action as confirmation."
    },
    {
      "id": "ui-002",
      "name": "Billboard Proposal Card",
      "category": "communicates",
      "source_elements": [
        "communicates-001",
        "communicates-003",
        "communicates-004",
        "works-002"
      ],
      "phase": "proposal_mgmt",
      "priority": "high",
      "visual_spec": {
        "colors": {
          "card_bg": "#ffffff",
          "card_border": "#e5e7eb",
          "guest_section_bg": "#ffffff",
          "financial_section_bg": "rgb(252, 250, 255)",
          "action_section_bg": "#ffffff",
          "amount_color": "#31135D",
          "label_color": "#6b7280",
          "section_label_color": "#9ca3af"
        },
        "typography": {
          "guest_name": "20px / 700 / Inter",
          "guest_context": "14px / 400 / Inter",
          "amount": "24px / 600 / 'IBM Plex Mono', monospace",
          "amount_label": "12px / 400 / Inter",
          "section_label": "11px / 600 / Inter / uppercase / letter-spacing 0.05em"
        },
        "spacing": {
          "card_padding": "0",
          "section_padding": "24px",
          "section_gap": "0",
          "inner_gap": "8px"
        },
        "layout": "Three vertically stacked areas within a single card, separated by 1px borders. Area 1 (The Guests): guest name + context. Area 2 (Your Earnings): guaranteed amount in mono font on tinted background. Area 3 (Your Decision): Accept button prominent, Counter/Decline subordinate."
      },
      "interaction_spec": {
        "states": {
          "default": "Card displays all three areas. Accept button is primary (filled purple). Counter and Decline are text links below.",
          "hover": "Card does not respond to hover (it is not a clickable card). Only the Accept button has a hover state: background darkens to #251047.",
          "loading": "Three-area skeleton with guest avatar placeholder, amount placeholder, and button placeholder. Structure renders in 200ms, data fills in 500ms.",
          "success": "On Accept click, button transforms to checkmark with 'Confirmed' label. Card border shifts to subtle purple accent. Spring animation (150ms overshoot)."
        },
        "transitions": "Optimistic confirmation: success state appears immediately on click. No loading spinner. Server sync in background.",
        "micro_interactions": "Accept button scales to 0.98 on press (100ms), then springs to checkmark on release. The checkmark uses cubic-bezier(0.34, 1.56, 0.64, 1) for a satisfying settle."
      },
      "copy_spec": {
        "headline": "Ariel & Amber",
        "body": "Connecticut residents · Work in Manhattan · Weekday pied-à-terre · 4 months starting early March",
        "cta": "Accept this proposal",
        "tone": "Factual, scannable, no persuasion. Guest information uses Bryant's exact description from the call. Financial amount is stated as fact, not estimate."
      },
      "html_css": "<div class=\"proposal-card\"><div class=\"proposal-section guests\"><span class=\"section-label\">The Guests</span><div class=\"guest-header\"><div class=\"guest-avatar\">A</div><div><div class=\"guest-name\">Ariel & Amber</div><div class=\"guest-context\">Connecticut · Work in Manhattan · Weekday pied-à-terre</div></div></div></div><div class=\"proposal-section earnings\"><span class=\"section-label\">Your Earnings</span><div class=\"amount-row\"><span class=\"amount\">$2,000</span><span class=\"amount-label\">/mo · guaranteed · 4 months</span></div><div class=\"amount-total\">$8,000 total</div></div><div class=\"proposal-section actions\"><button class=\"accept-btn\">Accept this proposal</button><div class=\"secondary-actions\"><a href=\"#\" class=\"action-link\">Counter</a><span class=\"action-divider\">·</span><a href=\"#\" class=\"action-link\">Decline</a></div></div></div><style>.proposal-card{max-width:480px;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#fff}.proposal-section{padding:24px}.proposal-section+.proposal-section{border-top:1px solid #e5e7eb}.section-label{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#9ca3af;margin-bottom:12px}.guests{background:#fff}.guest-header{display:flex;align-items:center;gap:12px}.guest-avatar{width:48px;height:48px;border-radius:50%;background:#31135D;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:600;flex-shrink:0}.guest-name{font-size:20px;font-weight:700;color:#1a1a1a;margin-bottom:4px}.guest-context{font-size:14px;color:#6b7280;line-height:1.5}.earnings{background:rgb(252,250,255)}.amount-row{display:flex;align-items:baseline;gap:6px;margin-bottom:4px}.amount{font-family:'IBM Plex Mono',monospace;font-size:24px;font-weight:600;color:#31135D}.amount-label{font-size:13px;color:#6b7280}.amount-total{font-size:13px;color:#6b7280}.actions{text-align:center}.accept-btn{width:100%;padding:14px 24px;background:rgb(109,49,194);color:#fff;border:none;border-radius:20px;font-size:16px;font-weight:600;cursor:pointer;transition:background 0.1s ease}.accept-btn:hover{background:#251047}.secondary-actions{margin-top:12px;font-size:13px}.action-link{color:#6b7280;text-decoration:none}.action-link:hover{color:rgb(109,49,194);text-decoration:underline}.action-divider{color:#e5e7eb;margin:0 8px}</style>",
      "before_after": {
        "before": "Proposal page shows a data table with columns: Guest Name, Start Date, End Date, Monthly Rate, Total, Status. Accept/Decline/Counter buttons have equal visual weight. No visual hierarchy — financial data competes with guest identity for attention.",
        "after": "Three clearly defined areas ('The Guests,' 'Your Earnings,' 'Your Decision') that pass the $25,000 Pyramid test. Guest identity is Tier 1, financials on tinted background are Tier 2, Accept is the dominant action with Counter/Decline as subordinate text links. Drew scans top-to-bottom: who → how much → accept."
      },
      "rationale": "Krug's billboard hierarchy demands that Drew's scanning eye land on the primary information within 2 seconds. The three-area layout mirrors Bryant's disclosure order in the call: guests first (01:32), guarantee second (03:44), terms third (05:18). The $25,000 Pyramid test passes because each area is visually self-contained and nameable at a glance."
    },
    {
      "id": "ui-003",
      "name": "Confirmation Pricing Card",
      "category": "looks",
      "source_elements": [
        "looks-004",
        "works-006",
        "communicates-006",
        "feels-006"
      ],
      "phase": "pricing",
      "priority": "high",
      "visual_spec": {
        "colors": {
          "card_bg": "rgb(252, 250, 255)",
          "amount_color": "#31135D",
          "provenance_color": "#9ca3af",
          "confirm_btn_bg": "rgb(109, 49, 194)",
          "confirm_btn_text": "#ffffff",
          "change_link_color": "#6b7280"
        },
        "typography": {
          "amount": "28px / 600 / 'IBM Plex Mono', monospace",
          "period": "16px / 400 / Inter",
          "provenance": "13px / 400 / Inter",
          "change_link": "12px / 400 / Inter"
        },
        "spacing": {
          "card_padding": "32px 24px",
          "amount_margin_bottom": "4px",
          "provenance_margin_bottom": "24px",
          "button_padding": "14px 32px",
          "change_margin_top": "12px"
        },
        "layout": "Centered vertical stack: large mono amount at top, period label beside it, provenance annotation below, Confirm button, then 'Change' text link. No editable fields. The card communicates 'this is settled — just sign off.'"
      },
      "interaction_spec": {
        "states": {
          "default": "Read-only display with Confirm button. No input fields, no editable text. The amount is presented as fact, not as input.",
          "hover": "Confirm button darkens to #251047. 'Change' link gains underline on hover.",
          "active": "Confirm button scales to 0.98 on press.",
          "success": "Button transforms to '✓ Confirmed' with spring animation (150ms). Card border shifts to subtle purple left accent.",
          "editing": "If host clicks 'Change', the amount transforms into an editable field with a focused border. Save/Cancel buttons replace the Confirm button."
        },
        "transitions": "Optimistic confirmation: success state appears instantly on click. The mono amount remains visible throughout — it is the anchoring fact. Editing mode transition uses 200ms fade.",
        "micro_interactions": "Provenance text fades in 200ms after the amount appears on page load, creating a subtle one-two: value → source. This mirrors Bryant's pattern: '$2,000 a month... I think is what it's listed here.'"
      },
      "copy_spec": {
        "headline": "$2,000",
        "body": "/month · from your call with Bryant",
        "cta": "Confirm",
        "tone": "Precise, authoritative, calming. The mono font signals financial data. The provenance annotation signals 'this isn't a guess.' No persuasion, no explanation of how pricing works."
      },
      "html_css": "<div class=\"pricing-confirm\"><div class=\"pricing-amount-row\"><span class=\"pricing-amount\">$2,000</span><span class=\"pricing-period\">/month</span></div><p class=\"pricing-provenance\">From your call with Bryant · Guaranteed</p><button class=\"pricing-confirm-btn\">Confirm</button><a href=\"#\" class=\"pricing-change\">Need to change this?</a></div><style>.pricing-confirm{max-width:400px;background:rgb(252,250,255);border-radius:12px;padding:32px 24px;text-align:center;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.pricing-amount-row{display:flex;align-items:baseline;justify-content:center;gap:4px;margin-bottom:4px}.pricing-amount{font-family:'IBM Plex Mono',monospace;font-size:28px;font-weight:600;color:#31135D}.pricing-period{font-size:16px;color:#31135D;font-weight:400}.pricing-provenance{font-size:13px;color:#9ca3af;margin:0 0 24px 0}.pricing-confirm-btn{padding:14px 48px;background:rgb(109,49,194);color:#fff;border:none;border-radius:20px;font-size:16px;font-weight:600;cursor:pointer;transition:background 0.1s ease}.pricing-confirm-btn:hover{background:#251047}.pricing-change{display:block;margin-top:12px;font-size:12px;color:#6b7280;text-decoration:none}.pricing-change:hover{color:rgb(109,49,194);text-decoration:underline}</style>",
      "before_after": {
        "before": "Pricing wizard step with an editable text input field showing '$2,000', a nightly rate calculator, a fee breakdown table, and a Submit button. The editable field suggests the amount is negotiable. The fee breakdown reveals deductions before confirming the guarantee.",
        "after": "Read-only confirmation card with mono-font amount, provenance annotation ('from your call with Bryant'), single Confirm button, and subordinate Change link. Communicates 'this is settled fact' through typography (mono = data/trust) and layout (no input affordances). Drew confirms in under 5 seconds."
      },
      "rationale": "Drew confirms his price in 3 seconds on the call (00:52: 'That's right.'). An editable field invites deliberation where none is needed. The mono font signals precision per the taste model ('Mono for data/trust'). The provenance annotation earns Drew's satisficing — he accepts the default because it's attributed to a verified source. The tinted background (rgb(252,250,255)) visually distinguishes this confirmation card from editable form areas."
    },
    {
      "id": "ui-004",
      "name": "Conversational Wizard Step with Compressed Summary",
      "category": "behaves",
      "source_elements": [
        "behaves-003",
        "feels-004",
        "looks-007",
        "works-005"
      ],
      "phase": "listing_creation",
      "priority": "high",
      "visual_spec": {
        "colors": {
          "completed_summary_bg": "#f9fafb",
          "completed_check": "rgb(109, 49, 194)",
          "completed_text": "#6b7280",
          "active_step_bg": "#ffffff",
          "active_border_left": "rgb(109, 49, 194)",
          "progress_completed": "rgb(109, 49, 194)",
          "progress_pending": "#e5e7eb",
          "progress_active": "#31135D"
        },
        "typography": {
          "summary_text": "13px / 500 / Inter",
          "step_heading": "20px / 700 / Inter",
          "step_body": "14px / 400 / Inter",
          "progress_label": "12px / 600 / Inter"
        },
        "spacing": {
          "summary_padding": "12px 16px",
          "summary_gap": "8px",
          "active_step_padding": "24px",
          "step_gap": "4px",
          "progress_bar_margin": "0 0 24px 0"
        },
        "layout": "Vertical stack: thin progress bar at top, then compressed summaries of completed steps, then the active step at full size. Completed steps are single-line summaries with checkmarks. The active step has a left purple border accent to signal 'you are here.'"
      },
      "interaction_spec": {
        "states": {
          "default": "Active step shows its form/content at full size. Completed steps above are compressed to single-line summaries. Future steps are not visible.",
          "transitioning": "On step completion, the outgoing step compresses upward (300ms, out easing) while the incoming step expands from below (300ms, spring easing). The progress bar fills the next segment simultaneously.",
          "completed_summary_hover": "Compressed summary lines are tappable — on hover, a subtle expand icon appears. Clicking expands the summary back to full step size for editing.",
          "error": "If a step fails validation, it remains expanded. Error indicator appears with warm border (not red). Completed summaries above remain visible and accessible."
        },
        "transitions": "Compression uses cubic-bezier(0.16, 1, 0.3, 1). Expansion uses cubic-bezier(0.34, 1.56, 0.64, 1) for a settling overshoot. Total transition: 300ms. Screen never goes blank between steps.",
        "micro_interactions": "Completed step checkmark appears with a quick scale-up (100ms). Progress bar segment fills with a smooth animation (200ms). The overall feel is cards being filed — each step snaps into a compact summary as the next arrives."
      },
      "copy_spec": {
        "headline": "Add your photos",
        "body": "These help guests picture themselves in your space.",
        "cta": "Next: Review & publish",
        "tone": "Forward-looking, concise. Each step's CTA previews the next step to maintain momentum. 'Next: your photos' not 'Step 5 of 6 complete.'"
      },
      "html_css": "<div class=\"wizard-flow\"><div class=\"progress-bar\"><div class=\"progress-fill\" style=\"width:66%\"></div></div><div class=\"completed-step\"><span class=\"step-check\">✓</span><span class=\"step-summary\">1BR · Chelsea · $2,000/mo</span></div><div class=\"completed-step\"><span class=\"step-check\">✓</span><span class=\"step-summary\">Furnished · Washer/dryer · Doorman</span></div><div class=\"completed-step\"><span class=\"step-check\">✓</span><span class=\"step-summary\">Flexible lease · Weekday stays</span></div><div class=\"active-step\"><h2 class=\"step-heading\">Add your photos</h2><p class=\"step-body\">These help guests picture themselves in your space. You mentioned having more pictures ready.</p><div class=\"upload-zone\"><span class=\"upload-text\">Drop photos here or browse</span></div><button class=\"step-next-btn\">Next: Review & publish</button></div></div><style>.wizard-flow{max-width:540px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.progress-bar{height:4px;background:#e5e7eb;border-radius:4px;margin-bottom:24px;overflow:hidden}.progress-fill{height:100%;background:rgb(109,49,194);border-radius:4px;transition:width 0.3s cubic-bezier(0.16,1,0.3,1)}.completed-step{display:flex;align-items:center;gap:8px;padding:10px 16px;background:#f9fafb;border-radius:8px;margin-bottom:4px;font-size:13px;color:#6b7280;cursor:pointer;transition:background 0.15s ease}.completed-step:hover{background:#f3f4f6}.step-check{color:rgb(109,49,194);font-weight:700;font-size:14px;flex-shrink:0}.step-summary{font-weight:500}.active-step{border-left:3px solid rgb(109,49,194);padding:24px;margin-top:16px;background:#fff;border-radius:0 12px 12px 0}.step-heading{font-size:20px;font-weight:700;color:#1a1a1a;margin:0 0 8px 0}.step-body{font-size:14px;color:#6b7280;margin:0 0 20px 0;line-height:1.5}.upload-zone{border:2px dashed #e5e7eb;border-radius:12px;padding:40px 24px;text-align:center;margin-bottom:20px;transition:border-color 0.15s ease;cursor:pointer}.upload-zone:hover{border-color:rgb(109,49,194)}.upload-text{font-size:14px;color:#9ca3af}.step-next-btn{width:100%;padding:14px 24px;background:rgb(109,49,194);color:#fff;border:none;border-radius:20px;font-size:16px;font-weight:600;cursor:pointer;transition:background 0.1s ease}.step-next-btn:hover{background:#251047}</style>",
      "before_after": {
        "before": "Traditional multi-step wizard with 'Step 4 of 6' counter, hard cuts between steps (screen goes blank, new form appears), no visible trail of prior answers. Each step feels like starting over. Drew can't see how much he's done or how much remains.",
        "after": "Conversational flow with compressed summaries stacking above the active step. Drew sees his prior answers accumulating ('1BR · Chelsea · $2,000/mo ✓'). Progress is visible and tangible. The active step feels like the next beat in a conversation, not a new form. Pre-filled steps took 3 seconds each, so by Step 4, Drew has invested under 15 seconds."
      },
      "rationale": "Bryant's call flows as continuous conversation with no hard breaks between topics. Krug warns that users 'muddle through, making up plausible stories' — Drew's story is 'the platform should guide me like Bryant did.' Compressed summaries maintain context across steps (Drew sees what he's confirmed). The spring-easing expansion creates a 'settling in' feel that signals 'here's the next thing' without feeling like starting over."
    },
    {
      "id": "ui-005",
      "name": "Guaranteed Rent Status Display",
      "category": "feels",
      "source_elements": [
        "feels-003",
        "looks-006",
        "communicates-006"
      ],
      "phase": "active_lease",
      "priority": "high",
      "visual_spec": {
        "colors": {
          "card_bg": "rgb(252, 250, 255)",
          "amount_color": "#31135D",
          "status_color": "rgb(109, 49, 194)",
          "label_color": "#6b7280",
          "cumulative_color": "#374151"
        },
        "typography": {
          "amount": "32px / 700 / 'IBM Plex Mono', monospace",
          "status_label": "13px / 600 / Inter",
          "date_text": "14px / 400 / Inter",
          "cumulative": "16px / 600 / 'IBM Plex Mono', monospace"
        },
        "spacing": {
          "card_padding": "24px",
          "amount_margin_bottom": "4px",
          "status_margin_bottom": "16px",
          "divider_margin": "16px 0"
        },
        "layout": "Centered card: large mono amount at top, 'Paid on Feb 1' status below with subtle check icon, thin divider, then cumulative total ('$6,000 earned since March'). No fee deductions visible — guarantee-first framing."
      },
      "interaction_spec": {
        "states": {
          "default": "Shows the most recent guaranteed payment as settled fact. No 'pending' or 'processing' language.",
          "hover": "Card does not respond to hover. 'See details' link underlines on hover.",
          "expanded": "Clicking 'See details' reveals a collapsible section with payment history and fee breakdown — but the guaranteed total remains the dominant element."
        },
        "transitions": "Amount appears without animation — it's just there, like a bank balance. Details section expands with 200ms ease-out.",
        "micro_interactions": "None on the amount itself. Financial data should feel settled and still — no counting animations, no rolling digits."
      },
      "copy_spec": {
        "headline": "$2,000",
        "body": "Paid on Feb 1 · Your guaranteed rent",
        "cta": "See payment details",
        "tone": "Precise, authoritative, calming. Uses 'guaranteed' as an adjective. States payment as past-tense fact ('Paid') not process ('Processing'). No uncertainty words."
      },
      "html_css": "<div class=\"rent-status\"><div class=\"rent-amount\">$2,000</div><div class=\"rent-status-line\"><span class=\"status-check\">✓</span><span class=\"status-text\">Paid on Feb 1 · Your guaranteed rent</span></div><div class=\"rent-divider\"></div><div class=\"rent-cumulative\"><span class=\"cumulative-amount\">$6,000</span><span class=\"cumulative-label\"> earned since March</span></div><a href=\"#\" class=\"rent-details-link\">See payment details</a></div><style>.rent-status{max-width:400px;background:rgb(252,250,255);border-radius:12px;padding:24px;text-align:center;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.rent-amount{font-family:'IBM Plex Mono',monospace;font-size:32px;font-weight:700;color:#31135D;margin-bottom:4px}.rent-status-line{display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:16px}.status-check{color:rgb(109,49,194);font-weight:700}.status-text{font-size:13px;color:#6b7280;font-weight:500}.rent-divider{height:1px;background:#e5e7eb;margin:16px 0}.rent-cumulative{margin-bottom:12px}.cumulative-amount{font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:600;color:#374151}.cumulative-label{font-size:14px;color:#6b7280}.rent-details-link{font-size:12px;color:#6b7280;text-decoration:none}.rent-details-link:hover{color:rgb(109,49,194);text-decoration:underline}</style>",
      "before_after": {
        "before": "Payment dashboard showing: 'Monthly breakdown: Base rent $2,000.00 | Split Lease fee -$150.00 | Net payout: $1,850.00 | Status: Processing (3-5 business days).' The first thing Drew sees is a deduction and uncertainty.",
        "after": "Guarantee-first display: '$2,000 · Paid on Feb 1 · Your guaranteed rent.' The first thing Drew sees is his full amount, confirmed as paid. Deductions are available via 'See details' but never compete with the guarantee for visual dominance. Cumulative earnings reinforce the value: '$6,000 earned since March.'"
      },
      "rationale": "Drew accepts the guarantee in four words ('Okay. Okay. Okay. Alright.'). Bryant delivered it as settled fact. The platform must sustain this calm certainty at every financial touchpoint. Mono typography signals precision and trust per the taste model. 'Paid' (past tense) eliminates the question mark that 'Processing' creates. Showing deductions first would trigger loss aversion (Kahneman) where Bryant's framing triggered calm acceptance."
    },
    {
      "id": "ui-006",
      "name": "Mindless Choice Binary Selector",
      "category": "communicates",
      "source_elements": [
        "communicates-007",
        "works-003"
      ],
      "phase": "listing_creation",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "option_bg": "#ffffff",
          "option_border": "#e5e7eb",
          "option_selected_bg": "rgb(252, 250, 255)",
          "option_selected_border": "rgb(109, 49, 194)",
          "question_color": "#1a1a1a",
          "option_label_color": "#1a1a1a",
          "option_desc_color": "#6b7280"
        },
        "typography": {
          "question": "18px / 600 / Inter",
          "option_label": "16px / 600 / Inter",
          "option_desc": "13px / 400 / Inter"
        },
        "spacing": {
          "question_margin_bottom": "16px",
          "option_padding": "16px 20px",
          "option_gap": "8px"
        },
        "layout": "Single question with 2-3 large tappable option cards stacked vertically. Each option is a full-width card with label and one-line description. No dropdowns, no radio buttons — the options ARE the buttons."
      },
      "interaction_spec": {
        "states": {
          "default": "Options display as outlined cards with equal visual weight.",
          "hover": "Hovered option gets a subtle background tint (rgb(252,250,255)) and border color shift.",
          "selected": "Selected option gets tinted background + purple border + check icon. Other options fade to 50% opacity.",
          "disabled": "Not applicable — all options are always available."
        },
        "transitions": "Selection is instant (no animation delay). The selected state appears in 100ms. Other options fade over 150ms. The flow auto-advances to the next question after 300ms.",
        "micro_interactions": "Check icon scales in with spring easing on selection. The overall feel is 'tap and move on' — each choice takes under 2 seconds."
      },
      "copy_spec": {
        "headline": "Is this the whole apartment?",
        "body": "",
        "cta": "",
        "tone": "Conversational, yes/no framing. Mirrors how Bryant asked questions in the call: 'And this is an entire apartment, is that right?' (01:03). No jargon, no multi-option complexity."
      },
      "html_css": "<div class=\"binary-choice\"><h3 class=\"choice-question\">Is this the whole apartment?</h3><div class=\"choice-options\"><button class=\"choice-option selected\"><span class=\"option-check\">✓</span><div class=\"option-content\"><span class=\"option-label\">Yes, the entire place</span><span class=\"option-desc\">Guests have the whole apartment to themselves</span></div></button><button class=\"choice-option\"><div class=\"option-content\"><span class=\"option-label\">Just a room</span><span class=\"option-desc\">Guests use a private room in a shared space</span></div></button></div></div><style>.binary-choice{max-width:480px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.choice-question{font-size:18px;font-weight:600;color:#1a1a1a;margin:0 0 16px 0}.choice-options{display:flex;flex-direction:column;gap:8px}.choice-option{display:flex;align-items:center;gap:12px;padding:16px 20px;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;cursor:pointer;text-align:left;transition:all 0.1s ease;width:100%}.choice-option:hover{background:rgb(252,250,255);border-color:rgb(140,104,238)}.choice-option.selected{background:rgb(252,250,255);border-color:rgb(109,49,194)}.option-check{color:rgb(109,49,194);font-weight:700;font-size:16px;flex-shrink:0}.option-content{display:flex;flex-direction:column;gap:2px}.option-label{font-size:16px;font-weight:600;color:#1a1a1a}.option-desc{font-size:13px;color:#6b7280}</style>",
      "before_after": {
        "before": "A dropdown labeled 'Property Type' with 8 options: Entire Apartment, Private Room, Shared Room, Studio, Loft, Townhouse, House, Other. Drew must click the dropdown, scan 8 options, and select one. Krug's 'Animal, vegetable, or mineral?' principle violated.",
        "after": "A single conversational question ('Is this the whole apartment?') with 2 large tappable options. Drew taps one in under 2 seconds. The question mirrors Bryant's phrasing from the call. No dropdown, no scrolling, no deliberation."
      },
      "rationale": "Krug Ch. 4: 'Why users like mindless choices.' Bryant asks binary questions in the call ('And this is an entire apartment, is that right?'). The platform must decompose complex property-type selections into the same conversational yes/no questions. Each question is answerable without reading the description — the description is insurance, not instruction."
    },
    {
      "id": "ui-007",
      "name": "Inline Field Validation with Warm Warning",
      "category": "behaves",
      "source_elements": [
        "behaves-004",
        "works-003"
      ],
      "phase": "listing_creation",
      "priority": "high",
      "visual_spec": {
        "colors": {
          "default_border": "#e5e7eb",
          "focus_border": "rgb(109, 49, 194)",
          "focus_glow": "rgba(109, 49, 194, 0.1)",
          "warn_border": "#c17a28",
          "warn_text": "#92620E",
          "warn_bg": "#fef3e2",
          "valid_border": "#e5e7eb"
        },
        "typography": {
          "input_text": "14px / 400 / Inter",
          "label": "13px / 600 / Inter",
          "warn_message": "12px / 400 / Inter",
          "placeholder": "14px / 400 / Inter"
        },
        "spacing": {
          "input_padding": "12px 16px",
          "label_margin_bottom": "6px",
          "warn_margin_top": "6px"
        },
        "layout": "Standard form field with label above, input below, and validation message appearing below the input on blur. Validation message has a warm-toned background strip, not a harsh red alert."
      },
      "interaction_spec": {
        "states": {
          "default": "Input with light border (#e5e7eb). No validation indicators visible.",
          "focus": "Border shifts to purple (rgb(109,49,194)) with subtle glow. This signals 'you're editing here.'",
          "valid": "On blur with valid input, border returns to default. No green checkmark — absence of error IS success.",
          "warning": "On blur with invalid/empty required input, border shifts to warm amber (#c17a28). A single-line message appears below: 'We need this to create your listing.' Fade-in over 150ms.",
          "disabled": "Opacity 0.5, no cursor interaction."
        },
        "transitions": "Warning indicator fades in with 150ms ease-out on blur. Fades out with 150ms ease-out when the host corrects the value. No shaking animations, no harsh color changes.",
        "micro_interactions": "If the host clicks Submit with errors, the page scrolls to the first error field and the warning message pulses twice (300ms each) to draw attention."
      },
      "copy_spec": {
        "headline": "",
        "body": "",
        "cta": "",
        "tone": "Conversational and helpful, not punitive. 'We need this to create your listing' rather than 'Error: Required field.' 'What would you like to call your place?' as placeholder rather than 'Enter listing title.'"
      },
      "html_css": "<div class=\"form-field\"><label class=\"field-label\">Listing title</label><input type=\"text\" class=\"field-input\" placeholder=\"e.g., Comfortable Chelsea 1BR\" value=\"\"><div class=\"field-warning\"><span class=\"warning-icon\">!</span><span class=\"warning-text\">We need this to create your listing</span></div></div><div class=\"form-field valid\"><label class=\"field-label\">Monthly rent</label><input type=\"text\" class=\"field-input\" value=\"$2,000\"><p class=\"field-provenance\">From your call with Bryant</p></div><style>.form-field{max-width:480px;margin-bottom:20px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.field-label{display:block;font-size:13px;font-weight:600;color:#1a1a1a;margin-bottom:6px}.field-input{width:100%;padding:12px 16px;border:1.5px solid #e5e7eb;border-radius:8px;font-size:14px;color:#1a1a1a;background:#fff;transition:border-color 0.15s ease,box-shadow 0.15s ease;box-sizing:border-box}.field-input:focus{outline:none;border-color:rgb(109,49,194);box-shadow:0 0 0 3px rgba(109,49,194,0.1)}.field-warning{display:flex;align-items:center;gap:6px;margin-top:6px;padding:6px 10px;background:#fef3e2;border-radius:6px;animation:fadeIn 0.15s ease-out}.warning-icon{color:#c17a28;font-weight:700;font-size:13px}.warning-text{font-size:12px;color:#92620E}.form-field.valid .field-input{border-color:#e5e7eb}.field-provenance{font-size:12px;color:#9ca3af;margin:6px 0 0 0}@keyframes fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}</style>",
      "before_after": {
        "before": "Form validates only on submit. Drew fills out 6 fields, clicks Submit, and sees a red banner at the top: 'Error: Please fix 2 errors before submitting.' He must scroll to find which fields are wrong. Red borders and exclamation marks make the form feel hostile.",
        "after": "Inline validation on blur: when Drew leaves a required field empty, a warm amber message appears immediately below it: 'We need this to create your listing.' The tone is helpful, not punitive. Pre-filled fields from the call show provenance ('From your call with Bryant'). No validation fires on submit — errors are caught in real time."
      },
      "rationale": "Drew satisfices — he won't review the form before submitting (Krug Ch. 2). Post-submission errors force him to re-find and re-contextualize problems in a form he barely looked at. Inline on-blur validation catches errors at the moment of maximum relevance. The warm amber tone (not red) maintains the guided, non-punitive feel of Bryant's conversation. The provenance annotation on pre-filled fields earns Drew's trust in the defaults."
    },
    {
      "id": "ui-008",
      "name": "Bryant Escape Hatch Button",
      "category": "behaves",
      "source_elements": [
        "behaves-005",
        "feels-005"
      ],
      "phase": "listing_creation",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "avatar_bg": "#31135D",
          "avatar_text": "#ffffff",
          "panel_bg": "#ffffff",
          "panel_shadow": "0 4px 16px rgba(49, 19, 93, 0.35)",
          "input_border": "#e5e7eb",
          "send_btn_bg": "rgb(109, 49, 194)"
        },
        "typography": {
          "label": "13px / 500 / Inter",
          "input": "14px / 400 / Inter",
          "context_hint": "12px / 400 / Inter"
        },
        "spacing": {
          "avatar_size": "48px",
          "panel_padding": "16px",
          "panel_width": "320px"
        },
        "layout": "Fixed position bottom-right corner. Small circular avatar (48px) in resting state. Expands upward to reveal a message panel with pre-filled context and text input. Panel overlays content with backdrop dim."
      },
      "interaction_spec": {
        "states": {
          "default": "Small avatar circle with 'B' initial. Subtle shadow. Visually recessive — present but not competing with content.",
          "hover": "Avatar gains a slightly larger shadow and a tooltip: 'Message Bryant'",
          "expanded": "Panel opens upward from the avatar with spring easing (200ms). Shows context line ('You're on: Listing Photos') and message input. Backdrop dims slightly.",
          "sending": "Avatar shows a thin progress ring. Message input shows 'Sending...' briefly.",
          "sent": "Avatar shows a checkmark for 2 seconds, then returns to 'B'. Message input clears."
        },
        "transitions": "Expansion: cubic-bezier(0.34, 1.56, 0.64, 1) over 200ms. Collapse: cubic-bezier(0.16, 1, 0.3, 1) over 150ms. The expansion bounces slightly — friendly, not transactional.",
        "micro_interactions": "During onboarding (first visit), the avatar subtly pulses once after 5 seconds on the page, with a tooltip: 'Bryant is here if you need help.' After Drew's first successful platform action, the pulse stops permanently."
      },
      "copy_spec": {
        "headline": "",
        "body": "You're on: Listing Photos · Drew's Chelsea apartment",
        "cta": "Send to Bryant",
        "tone": "Quick and casual — like starting a text thread. The context pre-fill tells Bryant exactly where Drew is and what he's working on, reducing back-and-forth."
      },
      "html_css": "<div class=\"bryant-escape\"><div class=\"bryant-panel\"><div class=\"panel-context\">You're on: Listing Photos</div><div class=\"panel-input-row\"><input type=\"text\" class=\"panel-input\" placeholder=\"Ask Bryant anything...\"><button class=\"panel-send\">Send</button></div></div><button class=\"bryant-avatar\">B</button></div><style>.bryant-escape{position:fixed;bottom:24px;right:24px;z-index:999;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.bryant-avatar{width:48px;height:48px;border-radius:50%;background:#31135D;color:#fff;border:none;font-size:18px;font-weight:600;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.15);transition:box-shadow 0.15s ease,transform 0.15s ease}.bryant-avatar:hover{box-shadow:0 4px 16px rgba(49,19,93,0.35);transform:scale(1.05)}.bryant-panel{position:absolute;bottom:56px;right:0;width:320px;background:#fff;border-radius:12px;box-shadow:0 4px 16px rgba(49,19,93,0.35);padding:16px;display:flex;flex-direction:column;gap:12px}.panel-context{font-size:12px;color:#9ca3af;padding-bottom:8px;border-bottom:1px solid #f3f4f6}.panel-input-row{display:flex;gap:8px}.panel-input{flex:1;padding:10px 12px;border:1.5px solid #e5e7eb;border-radius:8px;font-size:14px}.panel-input:focus{outline:none;border-color:rgb(109,49,194)}.panel-send{padding:10px 16px;background:rgb(109,49,194);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap}.panel-send:hover{background:#251047}</style>",
      "before_after": {
        "before": "No in-platform escape hatch. When Drew gets confused, he must leave the platform entirely, open his phone, find Bryant's contact, compose a text, and wait for a response. By the time Bryant replies, Drew has forgotten what he was doing.",
        "after": "Persistent Bryant avatar in the corner — always one tap away. Opens a quick message panel pre-filled with Drew's current screen context. Drew asks his question without leaving the platform. Bryant receives a message that includes 'Drew is on: Listing Photos for his Chelsea apartment' — zero back-and-forth needed."
      },
      "rationale": "Drew's call ends with Bryant offering himself as fallback: 'you can feel free to text me or email me' (05:38). Krug Ch. 2 warns that 'if we find something that works, we stick to it' — if texting Bryant outside the platform works, Drew will never use the platform. The in-context escape hatch must be easier than texting to prevent permanent platform bypass. The context pre-fill reduces friction for both Drew and Bryant."
    },
    {
      "id": "ui-009",
      "name": "Area-Separated Dashboard Sections",
      "category": "communicates",
      "source_elements": [
        "communicates-004",
        "looks-003",
        "feels-005"
      ],
      "phase": "active_lease",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "area_1_bg": "#ffffff",
          "area_2_bg": "rgb(252, 250, 255)",
          "area_3_bg": "#ffffff",
          "section_label_color": "#9ca3af",
          "heading_color": "#1a1a1a",
          "body_color": "#6b7280",
          "status_active": "rgb(109, 49, 194)"
        },
        "typography": {
          "section_label": "11px / 600 / Inter / uppercase / letter-spacing 0.05em",
          "area_heading": "16px / 600 / Inter",
          "area_body": "14px / 400 / Inter",
          "status_badge": "12px / 600 / Inter"
        },
        "spacing": {
          "area_padding": "24px",
          "area_gap": "4px",
          "inner_gap": "12px"
        },
        "layout": "Three vertically stacked areas with alternating backgrounds (white, tinted, white). Each area has a small uppercase section label, content, and clear visual boundaries. Areas are nameable at a glance: 'Who's Staying,' 'Am I Getting Paid,' 'What's Coming Up.'"
      },
      "interaction_spec": {
        "states": {
          "default": "All three areas visible simultaneously. No collapse/expand — the dashboard is the overview.",
          "hover": "Individual items within areas (guest name, payment amount) can be hovered to reveal a detail tooltip.",
          "loading": "Each area shows its own skeleton. Data fills per-area — partial loads are fine."
        },
        "transitions": "Data appears without entrance animation on return visits. The platform should feel like it was waiting for Drew, already showing his information.",
        "micro_interactions": "Status badges (Active, Paid) have a subtle purple dot animation on first page load only — a quiet signal that data is live, not cached."
      },
      "copy_spec": {
        "headline": "Your Chelsea apartment · Ariel & Amber · Month 3",
        "body": "",
        "cta": "",
        "tone": "Contextual, specific, quietly attentive. Opens with Drew's specific data, not generic navigation. Time-aware: 'Month 3 of 4' not 'Active Lease.'"
      },
      "html_css": "<div class=\"dashboard\"><h1 class=\"dash-heading\">Your Chelsea apartment</h1><p class=\"dash-subheading\">Ariel & Amber · Month 3 of 4</p><div class=\"dash-area area-guests\"><span class=\"area-label\">Who's Staying</span><div class=\"guest-row\"><div class=\"guest-dot active\"></div><span class=\"guest-name-text\">Ariel — checked in</span></div><div class=\"guest-row\"><div class=\"guest-dot active\"></div><span class=\"guest-name-text\">Amber — checked in</span></div></div><div class=\"dash-area area-payments\"><span class=\"area-label\">Am I Getting Paid</span><div class=\"payment-row\"><span class=\"payment-amount\">$2,000</span><span class=\"payment-status\">✓ Paid Feb 1</span></div><div class=\"payment-cumulative\">$6,000 earned since March · guaranteed</div></div><div class=\"dash-area area-upcoming\"><span class=\"area-label\">What's Coming Up</span><div class=\"upcoming-item\">Next payment: Mar 1</div><div class=\"upcoming-item\">Lease ends: Jun 30</div></div></div><style>.dashboard{max-width:540px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.dash-heading{font-size:24px;font-weight:700;color:#1a1a1a;margin:0 0 4px 0}.dash-subheading{font-size:14px;color:#6b7280;margin:0 0 24px 0}.dash-area{padding:20px;border-radius:12px;margin-bottom:4px}.area-guests{background:#fff;border:1px solid #e5e7eb}.area-payments{background:rgb(252,250,255)}.area-upcoming{background:#fff;border:1px solid #e5e7eb}.area-label{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#9ca3af;margin-bottom:12px}.guest-row{display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:14px;color:#374151}.guest-dot{width:8px;height:8px;border-radius:50%}.guest-dot.active{background:rgb(109,49,194)}.payment-row{display:flex;align-items:baseline;gap:8px;margin-bottom:8px}.payment-amount{font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:600;color:#31135D}.payment-status{font-size:13px;color:rgb(109,49,194);font-weight:500}.payment-cumulative{font-size:13px;color:#6b7280}.upcoming-item{font-size:14px;color:#374151;margin-bottom:6px;padding-left:16px;position:relative}.upcoming-item::before{content:'→';position:absolute;left:0;color:#9ca3af}</style>",
      "before_after": {
        "before": "Generic navigation-focused dashboard: 'Dashboard — Your Listings (1) · Payments · Messages · Settings.' Forces Drew to choose where to go before seeing any information. Feels like a filing cabinet.",
        "after": "Data-focused dashboard with three clearly defined areas that pass the $25,000 Pyramid test. Drew can point at each area and name it: 'Who's staying,' 'Am I getting paid,' 'What's coming up.' His specific data is the first thing he sees — not navigation chrome. Feels like a personal briefing."
      },
      "rationale": "Krug's $25,000 Pyramid test demands nameable areas. Drew's return visits need instant recognition — 'somebody knows me.' The three areas map to Drew's three recurring questions as an active host: guests? money? timeline? Alternating backgrounds (white/tinted/white) create visual boundaries without heavy borders. The dashboard opens with Drew's specific context, not generic labels."
    },
    {
      "id": "ui-010",
      "name": "Optimistic Accept Button with Spring Checkmark",
      "category": "behaves",
      "source_elements": [
        "behaves-001",
        "works-006"
      ],
      "phase": "proposal_mgmt",
      "priority": "high",
      "visual_spec": {
        "colors": {
          "default_bg": "rgb(109, 49, 194)",
          "hover_bg": "#251047",
          "success_bg": "rgb(109, 49, 194)",
          "text_color": "#ffffff",
          "check_color": "#ffffff"
        },
        "typography": {
          "button_text": "16px / 600 / Inter",
          "confirmed_text": "16px / 600 / Inter"
        },
        "spacing": {
          "padding": "14px 32px",
          "border_radius": "20px"
        },
        "layout": "Full-width pill button. Transforms in-place from text label to checkmark + confirmed label on click."
      },
      "interaction_spec": {
        "states": {
          "default": "Purple pill button with white text: 'Accept this proposal'",
          "hover": "Background darkens to #251047. Cursor: pointer.",
          "active": "Button scales to 0.98 for 100ms (press feedback).",
          "success": "INSTANT on click: button text fades, checkmark scales in with spring easing (cubic-bezier(0.34, 1.56, 0.64, 1), 150ms), text becomes '✓ Confirmed'. No loading spinner. Server sync happens in background.",
          "error_rollback": "If server rejects (rare), checkmark gently morphs to attention icon. Inline message: 'Something went wrong — [Try again]'. No modal dialog."
        },
        "transitions": "Default → Success: 0ms perceived latency. The success state renders on the same frame as the click event. The spring animation provides haptic-like feedback.",
        "micro_interactions": "The checkmark overshoots slightly (1.56 spring factor) then settles — creating a satisfying 'landed' feeling. The button is disabled after first click to prevent double-submission."
      },
      "copy_spec": {
        "headline": "",
        "body": "",
        "cta": "Accept this proposal → ✓ Confirmed",
        "tone": "Action-oriented, then reassuring. The transformation from 'Accept' to 'Confirmed' mirrors Drew's call pattern: action → acknowledgment with no gap."
      },
      "html_css": "<div class=\"accept-demo\"><button class=\"accept-btn-demo\" onclick=\"this.classList.add('confirmed');this.disabled=true\"><span class=\"btn-label\">Accept this proposal</span><span class=\"btn-confirmed\">✓ Confirmed</span></button></div><style>.accept-demo{max-width:400px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.accept-btn-demo{width:100%;padding:14px 32px;background:rgb(109,49,194);color:#fff;border:none;border-radius:20px;font-size:16px;font-weight:600;cursor:pointer;transition:background 0.1s ease,transform 0.1s ease;position:relative;overflow:hidden}.accept-btn-demo:hover{background:#251047}.accept-btn-demo:active{transform:scale(0.98)}.accept-btn-demo .btn-confirmed{display:none}.accept-btn-demo.confirmed{background:rgb(109,49,194);cursor:default;animation:confirmPulse 0.3s cubic-bezier(0.34,1.56,0.64,1)}.accept-btn-demo.confirmed .btn-label{display:none}.accept-btn-demo.confirmed .btn-confirmed{display:inline}@keyframes confirmPulse{0%{transform:scale(0.95)}50%{transform:scale(1.02)}100%{transform:scale(1)}}</style>",
      "before_after": {
        "before": "Click Accept → Loading spinner for 1-2 seconds → 'Are you sure?' confirmation dialog → Click Yes → Another loading spinner → Success page. Total: 5-8 seconds with 2 question marks ('Is it working?' and 'Am I sure?').",
        "after": "Click Accept → Instant checkmark with spring animation → 'Confirmed'. Total: 0 seconds perceived latency. Zero question marks. The UI moves at the speed of Drew's certainty — he already decided during the call."
      },
      "rationale": "Drew confirms the lease term in 14 seconds on the call (05:18-05:32) with 'Okay. Okay. Sounds good.' His certainty is 100%. A loading spinner after clicking Accept contradicts this certainty — it's a question mark where Drew has no question. Krug Ch. 1: 'every question mark adds to our cognitive workload.' Optimistic UI eliminates the question mark by showing the outcome at the speed of the decision."
    },
    {
      "id": "ui-011",
      "name": "Clickability-Isolated Action Area",
      "category": "looks",
      "source_elements": [
        "looks-002",
        "communicates-005",
        "behaves-006"
      ],
      "phase": "proposal_mgmt",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "primary_btn_bg": "rgb(109, 49, 194)",
          "primary_btn_hover": "#251047",
          "primary_btn_text": "#ffffff",
          "secondary_link_color": "#6b7280",
          "secondary_link_hover": "rgb(109, 49, 194)",
          "info_text_color": "#374151",
          "area_bg": "#ffffff"
        },
        "typography": {
          "primary_btn": "16px / 600 / Inter",
          "secondary_link": "13px / 400 / Inter",
          "info_label": "14px / 400 / Inter"
        },
        "spacing": {
          "area_padding": "24px",
          "btn_margin_bottom": "12px",
          "isolation_margin_top": "24px"
        },
        "layout": "Dedicated action area at the bottom of a content card. Only the primary button and secondary text links are interactive. All other elements in the area are informational. The purple fill appears ONLY on the button — nowhere else in the area."
      },
      "interaction_spec": {
        "states": {
          "default": "Primary button: filled purple pill. Secondary links: gray text, no underline until hover. Info text: no hover response, no cursor change.",
          "hover_button": "Background darkens to #251047, cursor: pointer.",
          "hover_link": "Color shifts to purple, underline appears, cursor: pointer.",
          "hover_info": "NO response. Cursor remains default. No color change. Static content is static."
        },
        "transitions": "Hover on button: instant entry, 150ms fade-out. The consistency of hover behavior across ALL interactive elements builds Drew's muscle memory.",
        "micro_interactions": "Focus ring (2px solid rgb(109,49,194)) on keyboard tab navigation. Never suppressed."
      },
      "copy_spec": {
        "headline": "",
        "body": "",
        "cta": "Accept this proposal",
        "tone": "The action area speaks through visual affordances, not words. The purple-filled button says 'click me' through shape and color alone."
      },
      "html_css": "<div class=\"action-area\"><div class=\"action-info\"><span class=\"info-item\">4 months · Starting early March</span></div><button class=\"action-primary\">Accept this proposal</button><div class=\"action-secondary\"><a href=\"#\" class=\"action-text-link\">Counter with different terms</a><span class=\"link-sep\">·</span><a href=\"#\" class=\"action-text-link\">Decline</a></div></div><style>.action-area{max-width:480px;padding:24px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;text-align:center;border-top:1px solid #e5e7eb}.action-info{margin-bottom:16px}.info-item{font-size:14px;color:#374151}.action-primary{width:100%;padding:14px 32px;background:rgb(109,49,194);color:#fff;border:none;border-radius:20px;font-size:16px;font-weight:600;cursor:pointer;transition:background 0.1s ease,transform 0.1s ease}.action-primary:hover{background:#251047}.action-primary:active{transform:scale(0.98)}.action-primary:focus-visible{outline:2px solid rgb(109,49,194);outline-offset:2px}.action-secondary{margin-top:12px;font-size:13px}.action-text-link{color:#6b7280;text-decoration:none;transition:color 0.1s ease}.action-text-link:hover{color:rgb(109,49,194);text-decoration:underline}.link-sep{color:#e5e7eb;margin:0 8px}</style>",
      "before_after": {
        "before": "Proposal footer with three buttons of equal size and color: [Accept] [Counter] [Decline]. All three are purple-filled pills competing for attention. The info text '4 months starting March' uses the same purple color as the buttons, creating false clickability signals (Krug's Hatch problem).",
        "after": "Clear clickability isolation: only the Accept button is purple-filled (the primary action). Counter and Decline are gray text links — available but visually subordinate. Info text is plain #374151 with no hover response. Drew's scanning eye finds exactly one 'click me' signal: the Accept button. No ambiguity."
      },
      "rationale": "Krug Ch. 3: 'it's important to make it obvious what's clickable and what's not.' The Hatch problem (all text colored, no clickability signal) maps directly to the Split Lease purple palette risk. By restricting the filled-purple treatment exclusively to primary interactive buttons and using gray for secondary links, the visual system creates an unambiguous mapping: purple fill = click me, everything else = read me."
    },
    {
      "id": "ui-012",
      "name": "Renewal Extension Card",
      "category": "feels",
      "source_elements": [
        "feels-007",
        "works-006"
      ],
      "phase": "retention",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "card_bg": "#ffffff",
          "card_border": "#e5e7eb",
          "track_record_bg": "rgb(252, 250, 255)",
          "earnings_color": "#31135D",
          "metric_label_color": "#6b7280",
          "extend_btn_bg": "rgb(109, 49, 194)"
        },
        "typography": {
          "heading": "20px / 700 / Inter",
          "earnings": "24px / 700 / 'IBM Plex Mono', monospace",
          "metric": "14px / 600 / Inter",
          "metric_label": "12px / 400 / Inter",
          "extend_btn": "16px / 600 / Inter"
        },
        "spacing": {
          "card_padding": "24px",
          "metrics_gap": "16px",
          "btn_margin_top": "20px"
        },
        "layout": "Card with heading, track-record strip (tinted bg) showing 3 metrics, and single 'Extend' button. Framed as continuation, not re-commitment. Evidence precedes the ask."
      },
      "interaction_spec": {
        "states": {
          "default": "Card shows track record and extend button. No urgency indicators, no countdown timers.",
          "hover": "Extend button darkens. Card does not hover — it's not a link.",
          "success": "On click, button transforms to '✓ Extended' with spring animation. Card heading updates to 'Extended through October.'"
        },
        "transitions": "Card appears with a calm entrance (200ms fade-in, ease-out). No pop-up, no alert — it settles into the dashboard like a new section.",
        "micro_interactions": "The earnings figure may count up gently (800ms) on first view to make accumulated value emotionally tangible. Only once — subsequent views show the static number."
      },
      "copy_spec": {
        "headline": "Ariel & Amber want to stay",
        "body": "$8,000 earned · 4 months · Zero issues",
        "cta": "Extend 4 months",
        "tone": "Reflective, evidence-based, gently encouraging. Uses 'extend' (Drew's word from the call, not 'renew'). Leads with earned outcomes, not the decision. The CTA feels small and natural — like pressing Play, not signing a contract."
      },
      "html_css": "<div class=\"renewal-card\"><h2 class=\"renewal-heading\">Ariel & Amber want to stay</h2><div class=\"renewal-track\"><div class=\"track-metric\"><span class=\"metric-value\">$8,000</span><span class=\"metric-label\">earned</span></div><div class=\"track-metric\"><span class=\"metric-value\">4 months</span><span class=\"metric-label\">completed</span></div><div class=\"track-metric\"><span class=\"metric-value\">Zero</span><span class=\"metric-label\">issues</span></div></div><button class=\"renewal-extend\">Extend 4 months</button><a href=\"#\" class=\"renewal-details\">Review terms first</a></div><style>.renewal-card{max-width:480px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;text-align:center;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.renewal-heading{font-size:20px;font-weight:700;color:#1a1a1a;margin:0 0 16px 0}.renewal-track{display:flex;justify-content:center;gap:24px;padding:16px;background:rgb(252,250,255);border-radius:8px;margin-bottom:20px}.track-metric{display:flex;flex-direction:column;align-items:center;gap:4px}.metric-value{font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:700;color:#31135D}.metric-label{font-size:12px;color:#6b7280}.renewal-extend{width:100%;padding:14px 32px;background:rgb(109,49,194);color:#fff;border:none;border-radius:20px;font-size:16px;font-weight:600;cursor:pointer;transition:background 0.1s ease}.renewal-extend:hover{background:#251047}.renewal-details{display:block;margin-top:12px;font-size:12px;color:#6b7280;text-decoration:none}.renewal-details:hover{color:rgb(109,49,194);text-decoration:underline}</style>",
      "before_after": {
        "before": "Formal renewal process: 'Your lease expires June 30. To renew, please review the updated Split Lease Host Agreement (v3.2), confirm your rental rate, and digitally sign the new lease document.' Multiple steps, legal language, re-evaluation triggered.",
        "after": "Continuation card: 'Ariel & Amber want to stay. $8,000 earned · 4 months · Zero issues. Extend 4 months?' One button. Evidence before the ask. Drew's word ('extend') used instead of 'renew.' The track record resolves 'maybe' into 'obviously yes.'"
      },
      "rationale": "Drew's call establishes 'maybe the ability to extend' (05:32) — openness without commitment. At retention, the platform must convert 'maybe' to 'yes' through evidence, not through process. Krug's sunk cost observation supports this: 'I've waited ten minutes for this bus already.' The $8,000 earned is Drew's bus wait — making it emotionally salient through prominent display tips the decision toward continuation. The one-click 'Extend' button makes the action as effortless as Drew's verbal 'Sounds good.'"
    },
    {
      "id": "ui-013",
      "name": "Pre-Filled Confirmation Field with Provenance",
      "category": "feels",
      "source_elements": [
        "feels-006",
        "works-003",
        "looks-004"
      ],
      "phase": "listing_creation",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "field_bg": "rgb(252, 250, 255)",
          "field_border": "transparent",
          "value_color": "#1a1a1a",
          "provenance_color": "#9ca3af",
          "change_link_color": "#6b7280"
        },
        "typography": {
          "value": "16px / 600 / Inter",
          "provenance": "12px / 400 / Inter",
          "label": "13px / 600 / Inter",
          "change": "12px / 400 / Inter"
        },
        "spacing": {
          "field_padding": "14px 16px",
          "label_margin_bottom": "6px",
          "provenance_margin_top": "4px"
        },
        "layout": "Tinted background field (not white like editable inputs). No visible input border. Value displayed as text, not in an input element. Small provenance annotation below. 'Change' link at right. Visually distinct from editable form fields."
      },
      "interaction_spec": {
        "states": {
          "default": "Read-only display with tinted background. No cursor change on hover. Visually communicates 'this is already done.'",
          "editing": "Clicking 'Change' transforms the field: background becomes white, border appears, value becomes editable. Save/Cancel buttons appear.",
          "saved": "After saving an edit, field returns to read-only display with updated value."
        },
        "transitions": "Read-only → Editing: 200ms fade transition. The transformation is deliberate — the host must explicitly choose to edit.",
        "micro_interactions": "Provenance annotation fades in 200ms after the value appears, creating the Bryant-like one-two: 'Here's the value... and here's where it came from.'"
      },
      "copy_spec": {
        "headline": "",
        "body": "From your call with Bryant",
        "cta": "Change",
        "tone": "Transparent, attributive. The provenance annotation earns the host's satisficing — they accept the default because it's attributed to a verified source, not because they're lazy."
      },
      "html_css": "<div class=\"prefilled-field\"><label class=\"pf-label\">Location</label><div class=\"pf-display\"><div class=\"pf-value-row\"><span class=\"pf-value\">Chelsea, New York</span><a href=\"#\" class=\"pf-change\">Change</a></div><span class=\"pf-provenance\">From your call with Bryant</span></div></div><div class=\"prefilled-field\"><label class=\"pf-label\">Security deposit</label><div class=\"pf-display\"><div class=\"pf-value-row\"><span class=\"pf-value\">$1,000</span><a href=\"#\" class=\"pf-change\">Change</a></div><span class=\"pf-provenance\">Your preference, confirmed</span></div></div><style>.prefilled-field{max-width:480px;margin-bottom:16px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.pf-label{display:block;font-size:13px;font-weight:600;color:#1a1a1a;margin-bottom:6px}.pf-display{background:rgb(252,250,255);border-radius:8px;padding:14px 16px}.pf-value-row{display:flex;justify-content:space-between;align-items:center}.pf-value{font-size:16px;font-weight:600;color:#1a1a1a}.pf-change{font-size:12px;color:#6b7280;text-decoration:none}.pf-change:hover{color:rgb(109,49,194);text-decoration:underline}.pf-provenance{display:block;font-size:12px;color:#9ca3af;margin-top:4px}</style>",
      "before_after": {
        "before": "Standard editable text input with blinking cursor: 'Location: [ Chelsea, NY ]'. Looks identical to empty fields. The editable styling signals 'you should change this' and introduces a question mark: 'Is this right? Should I type something different?'",
        "after": "Tinted read-only display: 'Chelsea, New York' on a warm background with no input border. 'From your call with Bryant' provenance below. 'Change' as a small subordinate link. The visual treatment signals 'this is already done — just move on.' Drew recognizes his data and feels relief: 'they already know this.'"
      },
      "rationale": "Drew satisfices on every default (Krug Ch. 2). The provenance annotation ('from your call with Bryant') transforms satisficing from lazy acceptance into informed confirmation. The tinted background visually distinguishes pre-filled fields from editable inputs — Drew's eye can instantly tell 'which fields need my input (white) and which are already done (tinted).' This maps to the taste model's 'Warm, not cold' through the purple-tinted background."
    },
    {
      "id": "ui-014",
      "name": "Scan-Speed Skeleton Loading Pattern",
      "category": "behaves",
      "source_elements": [
        "behaves-002",
        "works-001"
      ],
      "phase": "proposal_mgmt",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "skeleton_bg": "#f3f4f6",
          "skeleton_shimmer": "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
          "page_bg": "#ffffff"
        },
        "typography": {},
        "spacing": {
          "skeleton_gap": "12px",
          "heading_skeleton_height": "28px",
          "body_skeleton_height": "14px",
          "button_skeleton_height": "48px"
        },
        "layout": "Three-area skeleton matching the proposal card layout: guest area skeleton, financial area skeleton, action area skeleton. The structure renders in 200ms. Data fills into the exact skeleton positions without layout shift."
      },
      "interaction_spec": {
        "states": {
          "loading": "Skeleton structure renders immediately on navigation. Heading-shaped placeholder (28px tall), body-shaped placeholder (14px tall × 2 lines), button-shaped placeholder (48px tall, rounded). All in #f3f4f6 with shimmer animation.",
          "loaded": "Data fades into skeleton positions over 150ms with ease-out. No layout shift — the skeleton holds exact dimensions.",
          "slow_load": "After 2 seconds without data, skeleton elements gain a gentle pulse animation to signal 'still loading, not broken.'",
          "error": "Skeleton transforms to error state: heading placeholder becomes 'We couldn't load this — [Try again]' in the same position."
        },
        "transitions": "Skeleton → Data: 150ms fade-in with cubic-bezier(0.16, 1, 0.3, 1). Content appears like ink on a pre-printed form — the structure is already there.",
        "micro_interactions": "Shimmer animation runs at 1.5s cycle. Pulse animation (for slow loads) uses opacity 0.6-1.0 at 1s cycle."
      },
      "copy_spec": {
        "headline": "",
        "body": "",
        "cta": "",
        "tone": "No copy in the skeleton state itself. The skeleton's shape IS the communication: 'content is coming, and it will look like this.'"
      },
      "html_css": "<div class=\"skeleton-proposal\"><div class=\"skel-area\"><div class=\"skel-line skel-heading\"></div><div class=\"skel-line skel-body\"></div><div class=\"skel-line skel-body short\"></div></div><div class=\"skel-area tinted\"><div class=\"skel-line skel-amount\"></div><div class=\"skel-line skel-body\"></div></div><div class=\"skel-area\"><div class=\"skel-line skel-button\"></div></div></div><style>.skeleton-proposal{max-width:480px;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;font-family:'Inter',sans-serif}.skel-area{padding:24px}.skel-area+.skel-area{border-top:1px solid #e5e7eb}.skel-area.tinted{background:rgb(252,250,255)}.skel-line{background:#f3f4f6;border-radius:6px;animation:shimmer 1.5s ease-in-out infinite;background-size:200% 100%;background-image:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%)}.skel-heading{height:24px;width:60%;margin-bottom:12px}.skel-body{height:14px;width:90%;margin-bottom:8px}.skel-body.short{width:50%}.skel-amount{height:28px;width:40%;margin-bottom:8px}.skel-button{height:48px;width:100%;border-radius:20px}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}</style>",
      "before_after": {
        "before": "Full-page loading spinner centered on a blank white screen. Drew sees nothing for 1-2 seconds. Then the entire page renders at once, causing a jarring 'flash' of content. Drew must re-orient after the flash.",
        "after": "Billboard structure renders in 200ms: three-area layout with skeleton placeholders matching the exact dimensions of the final content. Drew's eye can already identify the areas ('that's where the guests go, that's the money, that's the button'). Data fills in smoothly within 500ms. No layout shift, no blank screen, no re-orientation needed."
      },
      "rationale": "Krug Ch. 2: users scan pages 'like a billboard at 60 mph.' Drew's scan starts the instant the page appears. If the page is still blank, Drew scans nothing — and may click away. The skeleton renders the billboard structure immediately, letting Drew's eye settle on the right areas before data arrives. Drew's impatience ('can we maybe move on?') means every millisecond of blank screen trains him to prefer texting Bryant over using the platform."
    },
    {
      "id": "ui-015",
      "name": "Convention-Matching Photo Upload Zone",
      "category": "works",
      "source_elements": [
        "works-004",
        "behaves-006"
      ],
      "phase": "listing_creation",
      "priority": "medium",
      "visual_spec": {
        "colors": {
          "zone_border": "#e5e7eb",
          "zone_border_hover": "rgb(109, 49, 194)",
          "zone_bg": "#ffffff",
          "zone_bg_hover": "rgb(252, 250, 255)",
          "icon_color": "#9ca3af",
          "text_color": "#6b7280",
          "link_color": "rgb(109, 49, 194)"
        },
        "typography": {
          "prompt": "16px / 600 / Inter",
          "hint": "13px / 400 / Inter",
          "link": "14px / 500 / Inter"
        },
        "spacing": {
          "zone_padding": "48px 24px",
          "text_gap": "8px"
        },
        "layout": "Large dashed-border drop zone centered in the step. Upload icon (from Feather Icons), prompt text, 'browse' link. Follows the universal drag-and-drop convention Drew has seen on every other site. No surprises."
      },
      "interaction_spec": {
        "states": {
          "default": "Dashed border, centered icon and text. Large click/tap target (full zone is clickable).",
          "hover": "Border color shifts to purple. Background gains subtle tint. 'Drop photos here' text becomes bolder.",
          "dragging": "Border becomes solid purple, 2px. Background becomes distinctly tinted. 'Drop to upload' text replaces default text.",
          "uploading": "Each dropped file shows as a thumbnail with a circular progress indicator overlaid. Zone remains available for additional drops.",
          "complete": "Thumbnails display in a grid below the zone. Each has a remove (×) button. Zone shrinks but remains visible for additional uploads."
        },
        "transitions": "Drag enter/exit: 150ms border transition. Upload progress: continuous animation. Thumbnail appearance: 200ms fade-in with ease-out.",
        "micro_interactions": "On successful upload, thumbnail appears with a subtle scale-up (0.95 → 1.0, 200ms, spring easing). The zone text updates: '3 photos uploaded — add more?'"
      },
      "copy_spec": {
        "headline": "Drop photos here or browse",
        "body": "You mentioned having more pictures ready — JPG or PNG, up to 10MB each",
        "cta": "browse",
        "tone": "Encouraging, references the call ('You mentioned having more pictures'). Uses conventional upload language ('drop here or browse') that every web user recognizes."
      },
      "html_css": "<div class=\"upload-zone-demo\"><div class=\"upload-icon\">📷</div><div class=\"upload-prompt\">Drop photos here or <a href=\"#\" class=\"upload-browse\">browse</a></div><div class=\"upload-hint\">You mentioned having more pictures ready</div></div><style>.upload-zone-demo{max-width:480px;border:2px dashed #e5e7eb;border-radius:12px;padding:48px 24px;text-align:center;cursor:pointer;transition:all 0.15s ease;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}.upload-zone-demo:hover{border-color:rgb(109,49,194);background:rgb(252,250,255)}.upload-icon{font-size:36px;margin-bottom:12px;filter:grayscale(1);opacity:0.5}.upload-prompt{font-size:16px;font-weight:600;color:#374151;margin-bottom:8px}.upload-browse{color:rgb(109,49,194);text-decoration:none;font-weight:600}.upload-browse:hover{text-decoration:underline}.upload-hint{font-size:13px;color:#9ca3af}</style>",
      "before_after": {
        "before": "Custom upload interface with a small 'Select Files' button (looks like a form element, not a drop zone), a separate 'Add from URL' option, and a 'Request from photographer' link. Three competing interaction models. Drew must choose between them.",
        "after": "Universal drag-and-drop zone that matches what Drew has seen on Airbnb, StreetEasy, and every file-sharing site. Dashed border = drop zone (convention). 'Browse' link = file picker (convention). The hint references the call: 'You mentioned having more pictures ready.' Drew doesn't need to learn anything — this is the pattern he already knows."
      },
      "rationale": "Krug Ch. 3: 'conventions are your friends.' Drew offered to send photos during the call (04:38: 'I have more pictures and I can send you'). The upload step should capitalize on this readiness with the most conventional upload pattern available. Every deviation from the drag-and-drop convention adds a question mark. The hint text ('You mentioned having more pictures ready') bridges from the call to the platform, maintaining conversational continuity."
    }
  ]
}
## Style Guide Reference
# Split Lease Design System
## Official Production Style Guide v2.0

*Updated by Paula Scher | February 3, 2026*

---

## Overview

This style guide is the **authoritative reference** for Split Lease's visual language, derived directly from the production codebase (`app/src/styles/variables.css`). All design tokens documented here are the exact CSS variables used in the live application.

**Design Philosophy**: Clean, modern interfaces with a distinctive purple palette that conveys trust and sophistication. The system prioritizes clarity, accessibility, and consistent visual rhythm through a well-defined token system.

---

## Complete CSS Variables Reference

Copy this entire `:root` block to use all production design tokens:

```css
:root {
  /* ========================================
     COLOR VARIABLES
     ======================================== */

  /* Primary Colors
     Usage Guide:
     - primary-purple (#31135D): Brand color, headings, important UI
     - primary-purple-hover (#251047): Hover state for primary
     - secondary-purple (#4B47CE): Interactive buttons, links, CTAs
     - accent-purple (#8C68EE): Hover state for secondary, highlights
     - chat-purple (#4B47CE): Day badges, chat elements
  */
  --primary-purple: #31135D;
  --primary-purple-hover: #251047;
  --primary-purple-dark: #1f0a3d;
  --secondary-purple: rgb(109, 49, 194);
  --accent-purple: rgb(140, 104, 238);
  --selected-purple: rgb(79, 48, 151);
  --text-purple: rgb(82, 31, 147);
  --chat-purple: rgb(75, 71, 206);

  /* Secondary Colors */
  --accent-blue: #4A90E2;
  --accent-blue-hover: #357ABD;

  /* Status Colors */
  --success-green: #4B47CE;
  --success-teal: #4B47CE;

  /* Text Colors */
  --text-dark: #1a1a1a;
  --text-gray: #6b7280;
  --text-light-gray: #9ca3af;
  --text-medium-gray: #666666;
  --text-description: #374151;

  /* Background Colors */
  --bg-white: #ffffff;
  --bg-light: #f9fafb;
  --bg-light-gray: #f3f4f6;
  --bg-lighter-gray: #f5f5f5;
  --bg-off-white: rgb(252, 250, 255);

  /* Border Colors */
  --border-color: #e5e7eb;
  --border-light: #f3f4f6;
  --border-gray: rgba(107, 107, 107, 0.7);
  --border-gray-light: #e0e0e0;
  --border-gray-lighter: #ddd;

  /* Neutral Colors */
  --white: rgb(255, 255, 255);
  --black: rgb(0, 0, 0);
  --off-white: rgb(252, 250, 255);

  /* Info/Link Colors */
  --info-blue: #2196F3;
  --info-indigo: #6366F1;
  --info-indigo-hover: #3b82f6;
  --bg-info: #f0f7ff;

  /* Subtle/Overlay Colors */
  --overlay-dark: rgba(0, 0, 0, 0.7);
  --overlay-light: rgba(255, 255, 255, 0.9);
  --overlay-light-blur: rgba(255, 255, 255, 0.2);

  /* Gradient Colors */
  --gradient-purple-primary: linear-gradient(135deg, #31135D 0%, #5a2d8f 100%);
  --gradient-purple-button: linear-gradient(135deg, #4B47CE 0%, #7C3AED 100%);
  --gradient-purple-hover: linear-gradient(135deg, #5B2AA5 0%, #6D28D9 100%);
  --gradient-purple-dark: linear-gradient(135deg, rgba(47, 20, 91, 0.85), rgba(109, 49, 194, 0.75));
  --gradient-purple-dark-hover: linear-gradient(135deg, rgba(47, 20, 91, 0.9), rgba(109, 49, 194, 0.8));

  /* ========================================
     FONT VARIABLES
     ======================================== */

  /* Font Families */
  --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-dm: 'DM Sans', sans-serif;
  --font-primary: 'Helvetica', Arial, sans-serif;
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Font Sizes */
  --text-xs: 11px;
  --text-sm: 12px;
  --text-sm-md: 13px;
  --text-base: 14px;
  --text-md: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 28px;
  --text-3xl: 32px;
  --text-4xl: 36px;

  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.8;

  /* Letter Spacing */
  --letter-spacing-normal: normal;
  --letter-spacing-small: 0.5px;
  --letter-spacing-medium: 0.05em;

  /* ========================================
     SPACING VARIABLES
     ======================================== */

  /* Padding & Margin */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;
  --spacing-2xl: 24px;
  --spacing-3xl: 28px;
  --spacing-4xl: 32px;
  --spacing-5xl: 2rem;
  --spacing-6xl: 2.5rem;
  --spacing-7xl: 3rem;

  /* Component Spacing */
  --gap-sm: 0.5rem;
  --gap-md: 0.75rem;
  --gap-lg: 1rem;
  --gap-xl: 1.5rem;
  --gap-2xl: 2rem;
  --gap-3xl: 2.5rem;

  /* Padding */
  --padding-sm: 0.5rem;
  --padding-md: 0.75rem;
  --padding-lg: 1rem;
  --padding-xl: 1.5rem;
  --padding-2xl: 2rem;

  /* ========================================
     BORDER RADIUS VARIABLES
     ======================================== */

  --rounded-sm: 4px;
  --rounded-md: 6px;
  --rounded-lg: 8px;
  --rounded-xl: 12px;
  --rounded-2xl: 16px;
  --rounded-full: 50%;
  --rounded-pill: 20px;

  /* ========================================
     BREAKPOINT VARIABLES
     ======================================== */

  --breakpoint-sm: 600px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1080px;
  --breakpoint-2xl: 1200px;
  --breakpoint-3xl: 1280px;
  --breakpoint-max: 1440px;

  /* ========================================
     SHADOW VARIABLES
     ======================================== */

  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 4px 16px rgba(49, 19, 93, 0.35);
  --shadow-2xl: 0 6px 24px rgba(49, 19, 93, 0.5);
  --shadow-purple-sm: 0 2px 4px rgba(49, 19, 93, 0.2);
  --shadow-purple-md: 0 4px 8px rgba(49, 19, 93, 0.15);
  --shadow-purple-lg: 0 6px 20px rgba(109, 49, 194, 0.35);
  --shadow-dark-sm: 0 2px 6px rgba(0, 0, 0, 0.2);
  --shadow-dark-md: 0 4px 8px rgba(0, 0, 0, 0.25);

  /* ========================================
     TRANSITION & ANIMATION VARIABLES
     ======================================== */

  --transition-fast: 0.1s;
  --transition-base: 0.2s;
  --transition-slow: 0.3s;
  --transition-slower: 0.4s;

  --easing-ease: ease;
  --easing-ease-in: ease-in;
  --easing-ease-out: ease-out;
  --easing-ease-in-out: ease-in-out;
  --easing-linear: linear;

  --animation-duration: 1.5s;

  /* ========================================
     SIZING VARIABLES
     ======================================== */

  /* Icon Sizes */
  --icon-xs: 16px;
  --icon-sm: 20px;
  --icon-md: 24px;
  --icon-lg: 28px;
  --icon-xl: 32px;
  --icon-2xl: 36px;
  --icon-3xl: 60px;

  /* Avatar Sizes */
  --avatar-sm: 36px;
  --avatar-md: 48px;
  --avatar-lg: 80px;

  /* Container Sizes */
  --container-sm: 640px;
  --container-md: 900px;
  --container-lg: 1280px;
  --container-max: 1440px;
  --container-width: 95vw;

  /* Form Input Sizes */
  --input-height: 42px;
  --input-height-lg: 48px;
  --input-height-sm: 36px;

  /* ========================================
     Z-INDEX VARIABLES
     ======================================== */

  --z-dropdown: 100;
  --z-sticky: 500;
  --z-floating: 999;
  --z-modal: 10000;

  /* ========================================
     OPACITY VARIABLES
     ======================================== */

  --opacity-disabled: 0.5;
  --opacity-hover: 0.8;
  --opacity-focus: 0.9;

  /* ========================================
     BORDER VARIABLES
     ======================================== */

  --border-width-thin: 1px;
  --border-width-md: 1.5px;
  --border-width-thick: 2px;

  /* ========================================
     MAX-WIDTH VARIABLES
     ======================================== */

  --max-width-sidebar: 380px;
  --max-width-modal: 400px;
  --max-width-map: 100%;

  /* ========================================
     FAVORITES PAGE REDESIGN TOKENS
     ======================================== */

  /* Primary Colors */
  --favorites-purple: #6B4EE6;
  --favorites-purple-light: #F0EBFF;
  --favorites-purple-dark: #5A3ED5;
  --favorites-purple-gradient: linear-gradient(135deg, #6B4EE6 0%, #8B6CF5 100%);

  /* Text Colors */
  --favorites-text-dark: #1a1a2e;
  --favorites-text-medium: #64748B;
  --favorites-text-light: #94A3B8;

  /* Background & Border */
  --favorites-bg: #FAFBFC;
  --favorites-border: #E8ECF0;
  --favorites-card-bg: #ffffff;

  /* Status Colors */
  --favorites-success: #4B47CE;
  --favorites-heart: #FF6B5B;
  --favorites-heart-hover: #e55a4a;

  /* ========================================
     POPUP REPLICATION PROTOCOL TOKENS
     Monochromatic purple design system
     STRICT: NO GREEN, NO YELLOW
     ======================================== */

  /* Protocol Colors */
  --protocol-primary: #31135D;
  --protocol-action: #5B5FCF;
  --protocol-action-hover: #4A4EBF;
  --protocol-action-disabled: #B8BAE0;
  --protocol-secondary: #4B47CE;
  --protocol-surface: #F7F2FA;
  --protocol-danger: #DC3545;
  --protocol-danger-hover: rgba(220, 53, 69, 0.1);
  --protocol-white: #FFFFFF;
  --protocol-overlay: rgba(0, 0, 0, 0.5);
  --protocol-border: #E5E7EB;
  --protocol-border-light: #E7E0EC;
  --protocol-text-muted: #6B7280;
  --protocol-text-secondary: #49454F;

  /* Protocol Spacing (STRICT: 8px, 16px, 24px only) */
  --protocol-space-sm: 8px;
  --protocol-space-md: 16px;
  --protocol-space-lg: 24px;

  /* Protocol Radii */
  --protocol-radius-button: 100px;
  --protocol-radius-card: 8px;
  --protocol-radius-modal: 16px;
  --protocol-radius-modal-mobile: 24px;

  /* Protocol Transitions */
  --protocol-transition: 0.2s ease;
  --protocol-transition-slow: 0.3s ease-out;
}
```

---

## 1. Color Palette

### Primary Purple Family

| Variable | Value | Usage |
|----------|-------|-------|
| `--primary-purple` | `#31135D` | Brand color, headings, important UI elements, header backgrounds |
| `--primary-purple-hover` | `#251047` | Hover state for primary purple elements |
| `--primary-purple-dark` | `#1f0a3d` | Darkest purple for maximum contrast |
| `--secondary-purple` | `rgb(109, 49, 194)` | Interactive buttons, links, CTAs |
| `--accent-purple` | `rgb(140, 104, 238)` | Hover state for secondary, highlights, accents |
| `--selected-purple` | `rgb(79, 48, 151)` | Selected/active states |
| `--text-purple` | `rgb(82, 31, 147)` | Purple text for emphasis |
| `--chat-purple` | `rgb(75, 71, 206)` | Day badges, chat elements, messaging UI |

### Secondary Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--accent-blue` | `#4A90E2` | Secondary accent, links in certain contexts |
| `--accent-blue-hover` | `#357ABD` | Hover state for accent blue |

### Status Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--success-green` | `#4B47CE` | Success states, confirmations, positive indicators |
| `--success-teal` | `#4B47CE` | Alternative success color, progress indicators |

### Text Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--text-dark` | `#1a1a1a` | Primary text, headlines, critical content |
| `--text-gray` | `#6b7280` | Secondary text, descriptions |
| `--text-light-gray` | `#9ca3af` | Tertiary text, placeholders, disabled text |
| `--text-medium-gray` | `#666666` | Medium emphasis text |
| `--text-description` | `#374151` | Body text for descriptions and paragraphs |

### Background Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-white` | `#ffffff` | Primary background, cards |
| `--bg-light` | `#f9fafb` | Subtle background differentiation |
| `--bg-light-gray` | `#f3f4f6` | Section backgrounds, inactive states |
| `--bg-lighter-gray` | `#f5f5f5` | Lightest gray background |
| `--bg-off-white` | `rgb(252, 250, 255)` | Subtle purple-tinted background |

### Border Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--border-color` | `#e5e7eb` | Default borders, dividers |
| `--border-light` | `#f3f4f6` | Subtle borders |
| `--border-gray` | `rgba(107, 107, 107, 0.7)` | Medium emphasis borders |
| `--border-gray-light` | `#e0e0e0` | Light gray borders |
| `--border-gray-lighter` | `#ddd` | Lightest borders |

### Neutral Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--white` | `rgb(255, 255, 255)` | Pure white |
| `--black` | `rgb(0, 0, 0)` | Pure black |
| `--off-white` | `rgb(252, 250, 255)` | Warm white with purple tint |

### Info/Link Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--info-blue` | `#2196F3` | Informational elements |
| `--info-indigo` | `#6366F1` | Links, interactive text |
| `--info-indigo-hover` | `#3b82f6` | Hover state for info indigo |
| `--bg-info` | `#f0f7ff` | Info banner backgrounds |

### Overlay Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--overlay-dark` | `rgba(0, 0, 0, 0.7)` | Modal overlays, dimmed backgrounds |
| `--overlay-light` | `rgba(255, 255, 255, 0.9)` | Light overlays for content |
| `--overlay-light-blur` | `rgba(255, 255, 255, 0.2)` | Frosted glass effects |

### Gradient Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--gradient-purple-primary` | `linear-gradient(135deg, #31135D 0%, #5a2d8f 100%)` | Primary brand gradient |
| `--gradient-purple-button` | `linear-gradient(135deg, #4B47CE 0%, #7C3AED 100%)` | Button gradients |
| `--gradient-purple-hover` | `linear-gradient(135deg, #5B2AA5 0%, #6D28D9 100%)` | Button hover gradients |
| `--gradient-purple-dark` | `linear-gradient(135deg, rgba(47, 20, 91, 0.85), rgba(109, 49, 194, 0.75))` | Dark overlay gradients |
| `--gradient-purple-dark-hover` | `linear-gradient(135deg, rgba(47, 20, 91, 0.9), rgba(109, 49, 194, 0.8))` | Dark overlay hover |

---

## 2. Typography

### Font Families

| Variable | Value | Usage |
|----------|-------|-------|
| `--font-inter` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Primary UI font |
| `--font-dm` | `'DM Sans', sans-serif` | Alternative display font |
| `--font-primary` | `'Helvetica', Arial, sans-serif` | Fallback system font |
| `--font-heading` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Headings |

### Font Sizes

| Variable | Value | Usage |
|----------|-------|-------|
| `--text-xs` | `11px` | Smallest text, labels, badges |
| `--text-sm` | `12px` | Small text, captions |
| `--text-sm-md` | `13px` | Between small and base |
| `--text-base` | `14px` | Base body text |
| `--text-md` | `16px` | Medium body text |
| `--text-lg` | `18px` | Large body text, small headings |
| `--text-xl` | `20px` | Section headings |
| `--text-2xl` | `28px` | Page headings |
| `--text-3xl` | `32px` | Large headings |
| `--text-4xl` | `36px` | Hero headings |

### Font Weights

| Variable | Value | Usage |
|----------|-------|-------|
| `--font-weight-normal` | `400` | Regular body text |
| `--font-weight-medium` | `500` | Emphasized text, links |
| `--font-weight-semibold` | `600` | Buttons, labels, subheadings |
| `--font-weight-bold` | `700` | Headings, strong emphasis |

### Line Heights

| Variable | Value | Usage |
|----------|-------|-------|
| `--line-height-tight` | `1.2` | Headings, compact text |
| `--line-height-normal` | `1.5` | Body text default |
| `--line-height-relaxed` | `1.6` | Readable body text |
| `--line-height-loose` | `1.8` | Spacious, comfortable reading |

### Letter Spacing

| Variable | Value | Usage |
|----------|-------|-------|
| `--letter-spacing-normal` | `normal` | Default spacing |
| `--letter-spacing-small` | `0.5px` | Slightly expanded |
| `--letter-spacing-medium` | `0.05em` | Uppercase labels |

---

## 3. Spacing System

### Core Spacing Scale

| Variable | Value | Usage |
|----------|-------|-------|
| `--spacing-xs` | `4px` | Tight gaps, inline spacing |
| `--spacing-sm` | `8px` | Small gaps between related elements |
| `--spacing-md` | `12px` | Standard component padding |
| `--spacing-lg` | `16px` | Section padding, card padding |
| `--spacing-xl` | `20px` | Larger component padding |
| `--spacing-2xl` | `24px` | Section margins |
| `--spacing-3xl` | `28px` | Major section separations |
| `--spacing-4xl` | `32px` | Page section margins |
| `--spacing-5xl` | `2rem` | Large vertical rhythm |
| `--spacing-6xl` | `2.5rem` | Major page sections |
| `--spacing-7xl` | `3rem` | Maximum spacing |

### Gap Variables (for Flexbox/Grid)

| Variable | Value | Usage |
|----------|-------|-------|
| `--gap-sm` | `0.5rem` | Tight gaps in flex/grid |
| `--gap-md` | `0.75rem` | Standard gaps |
| `--gap-lg` | `1rem` | Comfortable gaps |
| `--gap-xl` | `1.5rem` | Generous gaps |
| `--gap-2xl` | `2rem` | Large gaps |
| `--gap-3xl` | `2.5rem` | Maximum gaps |

### Padding Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--padding-sm` | `0.5rem` | Compact padding |
| `--padding-md` | `0.75rem` | Standard padding |
| `--padding-lg` | `1rem` | Comfortable padding |
| `--padding-xl` | `1.5rem` | Generous padding |
| `--padding-2xl` | `2rem` | Maximum padding |

---

## 4. Border Radius

| Variable | Value | Usage |
|----------|-------|-------|
| `--rounded-sm` | `4px` | Subtle rounding, inputs |
| `--rounded-md` | `6px` | Standard rounding |
| `--rounded-lg` | `8px` | Cards, larger elements |
| `--rounded-xl` | `12px` | Prominent cards |
| `--rounded-2xl` | `16px` | Large cards, modals |
| `--rounded-full` | `50%` | Circles, avatars |
| `--rounded-pill` | `20px` | Pill-shaped buttons, badges |

---

## 5. Breakpoints

| Variable | Value | Usage |
|----------|-------|-------|
| `--breakpoint-sm` | `600px` | Mobile breakpoint |
| `--breakpoint-md` | `768px` | Tablet breakpoint |
| `--breakpoint-lg` | `1024px` | Desktop small |
| `--breakpoint-xl` | `1080px` | Desktop standard |
| `--breakpoint-2xl` | `1200px` | Desktop large |
| `--breakpoint-3xl` | `1280px` | Wide desktop |
| `--breakpoint-max` | `1440px` | Maximum width |

### Responsive Patterns

```css
/* Mobile-first approach */
@media (min-width: 600px) { /* Tablet */ }
@media (min-width: 768px) { /* Desktop small */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Desktop large */ }
@media (min-width: 1440px) { /* Maximum */ }
```

---

## 6. Shadows

### Standard Shadows

| Variable | Value | Usage |
|----------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.05)` | Subtle elevation |
| `--shadow-md` | `0 2px 8px rgba(0, 0, 0, 0.08)` | Card elevation |
| `--shadow-lg` | `0 4px 12px rgba(0, 0, 0, 0.15)` | Dropdown, popover |
| `--shadow-xl` | `0 4px 16px rgba(49, 19, 93, 0.35)` | Modal, emphasized cards |
| `--shadow-2xl` | `0 6px 24px rgba(49, 19, 93, 0.5)` | Maximum elevation |

### Purple-Tinted Shadows

| Variable | Value | Usage |
|----------|-------|-------|
| `--shadow-purple-sm` | `0 2px 4px rgba(49, 19, 93, 0.2)` | Subtle purple glow |
| `--shadow-purple-md` | `0 4px 8px rgba(49, 19, 93, 0.15)` | Medium purple glow |
| `--shadow-purple-lg` | `0 6px 20px rgba(109, 49, 194, 0.35)` | Strong purple glow |

### Dark Shadows

| Variable | Value | Usage |
|----------|-------|-------|
| `--shadow-dark-sm` | `0 2px 6px rgba(0, 0, 0, 0.2)` | Subtle dark shadow |
| `--shadow-dark-md` | `0 4px 8px rgba(0, 0, 0, 0.25)` | Medium dark shadow |

---

## 7. Transitions & Animation

### Transition Durations

| Variable | Value | Usage |
|----------|-------|-------|
| `--transition-fast` | `0.1s` | Micro-interactions, hover |
| `--transition-base` | `0.2s` | Standard transitions |
| `--transition-slow` | `0.3s` | Deliberate animations |
| `--transition-slower` | `0.4s` | Long animations |

### Easing Functions

| Variable | Value | Usage |
|----------|-------|-------|
| `--easing-ease` | `ease` | General purpose |
| `--easing-ease-in` | `ease-in` | Elements entering |
| `--easing-ease-out` | `ease-out` | Elements exiting |
| `--easing-ease-in-out` | `ease-in-out` | Smooth both ways |
| `--easing-linear` | `linear` | Constant speed |

### Animation

| Variable | Value | Usage |
|----------|-------|-------|
| `--animation-duration` | `1.5s` | Standard animation length |

### Usage Patterns

```css
/* Button hover */
.btn {
  transition: background var(--transition-fast) var(--easing-ease),
              transform var(--transition-fast) var(--easing-ease);
}

/* Card hover */
.card {
  transition: box-shadow var(--transition-base) var(--easing-ease-in-out);
}

/* Modal entrance */
.modal {
  transition: opacity var(--transition-slow) var(--easing-ease-out),
              transform var(--transition-slow) var(--easing-ease-out);
}
```

---

## 8. Sizing Variables

### Icon Sizes

| Variable | Value | Usage |
|----------|-------|-------|
| `--icon-xs` | `16px` | Inline icons |
| `--icon-sm` | `20px` | Small icons |
| `--icon-md` | `24px` | Standard icons |
| `--icon-lg` | `28px` | Emphasized icons |
| `--icon-xl` | `32px` | Large icons |
| `--icon-2xl` | `36px` | Very large icons |
| `--icon-3xl` | `60px` | Hero icons |

### Icon Library Policy

- Use only icons from `https://feathericons.com/`
- Do not mix Feather with any other icon packs in Split Lease UI
- If an icon is missing, pick the closest Feather icon and document the mapping

### Avatar Sizes

| Variable | Value | Usage |
|----------|-------|-------|
| `--avatar-sm` | `36px` | Inline avatars, lists |
| `--avatar-md` | `48px` | Standard avatars |
| `--avatar-lg` | `80px` | Profile avatars |

### Container Sizes

| Variable | Value | Usage |
|----------|-------|-------|
| `--container-sm` | `640px` | Narrow content |
| `--container-md` | `900px` | Standard content |
| `--container-lg` | `1280px` | Wide content |
| `--container-max` | `1440px` | Maximum width |
| `--container-width` | `95vw` | Responsive width |

### Form Input Sizes

| Variable | Value | Usage |
|----------|-------|-------|
| `--input-height` | `42px` | Standard inputs |
| `--input-height-lg` | `48px` | Large inputs |
| `--input-height-sm` | `36px` | Compact inputs |

---

## 9. Z-Index Scale

| Variable | Value | Usage |
|----------|-------|-------|
| `--z-dropdown` | `100` | Dropdowns, tooltips |
| `--z-sticky` | `500` | Sticky headers, navigation |
| `--z-floating` | `999` | Floating elements |
| `--z-modal` | `10000` | Modals, overlays |

---

## 10. Opacity Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--opacity-disabled` | `0.5` | Disabled elements |
| `--opacity-hover` | `0.8` | Hover transparency |
| `--opacity-focus` | `0.9` | Focus states |

---

## 11. Border Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--border-width-thin` | `1px` | Standard borders |
| `--border-width-md` | `1.5px` | Medium emphasis |
| `--border-width-thick` | `2px` | Strong emphasis |

---

## 12. Max-Width Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--max-width-sidebar` | `380px` | Sidebar panels |
| `--max-width-modal` | `400px` | Modal dialogs |
| `--max-width-map` | `100%` | Map containers |

---

## 13. Favorites Page Tokens

These tokens are used specifically for the Favorites page redesign.

### Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--favorites-purple` | `#6B4EE6` | Primary accent |
| `--favorites-purple-light` | `#F0EBFF` | Light background |
| `--favorites-purple-dark` | `#5A3ED5` | Hover/active states |
| `--favorites-purple-gradient` | `linear-gradient(135deg, #6B4EE6 0%, #8B6CF5 100%)` | Gradient accents |

### Text

| Variable | Value | Usage |
|----------|-------|-------|
| `--favorites-text-dark` | `#1a1a2e` | Primary text |
| `--favorites-text-medium` | `#64748B` | Secondary text |
| `--favorites-text-light` | `#94A3B8` | Tertiary text |

### Backgrounds & Borders

| Variable | Value | Usage |
|----------|-------|-------|
| `--favorites-bg` | `#FAFBFC` | Page background |
| `--favorites-border` | `#E8ECF0` | Card borders |
| `--favorites-card-bg` | `#ffffff` | Card backgrounds |

### Status

| Variable | Value | Usage |
|----------|-------|-------|
| `--favorites-success` | `#4B47CE` | Success indicators |
| `--favorites-heart` | `#FF6B5B` | Heart icon fill |
| `--favorites-heart-hover` | `#e55a4a` | Heart icon hover |

---

## 14. Protocol Tokens

These tokens define the **Popup Replication Protocol** - a strict monochromatic purple design system. **IMPORTANT: NO GREEN, NO YELLOW colors allowed in protocol components.**

### Protocol Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--protocol-primary` | `#31135D` | Primary brand |
| `--protocol-action` | `#5B5FCF` | Action buttons |
| `--protocol-action-hover` | `#4A4EBF` | Action hover |
| `--protocol-action-disabled` | `#B8BAE0` | Disabled actions |
| `--protocol-secondary` | `#4B47CE` | Secondary elements |
| `--protocol-surface` | `#F7F2FA` | Surface backgrounds |
| `--protocol-danger` | `#DC3545` | Danger/destructive |
| `--protocol-danger-hover` | `rgba(220, 53, 69, 0.1)` | Danger hover bg |
| `--protocol-white` | `#FFFFFF` | White |
| `--protocol-overlay` | `rgba(0, 0, 0, 0.5)` | Modal overlays |
| `--protocol-border` | `#E5E7EB` | Standard borders |
| `--protocol-border-light` | `#E7E0EC` | Light borders |
| `--protocol-text-muted` | `#6B7280` | Muted text |
| `--protocol-text-secondary` | `#49454F` | Secondary text |

### Protocol Spacing

**STRICT RULE**: Only use 8px, 16px, or 24px spacing in protocol components.

| Variable | Value |
|----------|-------|
| `--protocol-space-sm` | `8px` |
| `--protocol-space-md` | `16px` |
| `--protocol-space-lg` | `24px` |

### Protocol Radii

| Variable | Value | Usage |
|----------|-------|-------|
| `--protocol-radius-button` | `100px` | Pill buttons |
| `--protocol-radius-card` | `8px` | Cards |
| `--protocol-radius-modal` | `16px` | Modal desktop |
| `--protocol-radius-modal-mobile` | `24px` | Modal mobile |

### Protocol Transitions

| Variable | Value |
|----------|-------|
| `--protocol-transition` | `0.2s ease` |
| `--protocol-transition-slow` | `0.3s ease-out` |

---

## Component Usage Examples

### Primary Button

```css
.btn-primary {
  background: var(--secondary-purple);
  color: var(--white);
  font-family: var(--font-inter);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-sm) var(--spacing-2xl);
  border-radius: var(--rounded-pill);
  border: none;
  cursor: pointer;
  transition: background var(--transition-fast) var(--easing-ease);
}

.btn-primary:hover {
  background: var(--accent-purple);
}
```

### Card Component

```css
.card {
  background: var(--bg-white);
  border: var(--border-width-thin) solid var(--border-color);
  border-radius: var(--rounded-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base) var(--easing-ease-in-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```

### Form Input

```css
.input {
  width: 100%;
  height: var(--input-height);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-family: var(--font-inter);
  font-size: var(--text-base);
  color: var(--text-dark);
  background: var(--bg-white);
  border: var(--border-width-thin) solid var(--border-color);
  border-radius: var(--rounded-md);
  transition: border-color var(--transition-fast) var(--easing-ease);
}

.input:focus {
  outline: none;
  border-color: var(--secondary-purple);
  box-shadow: 0 0 0 3px rgba(109, 49, 194, 0.1);
}
```

### Day Badge (Split Lease Signature Component)

```css
.day-badge {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--rounded-full);
  font-size: var(--text-sm-md);
  font-weight: var(--font-weight-semibold);
  background: var(--bg-light-gray);
  color: var(--text-light-gray);
  transition: all var(--transition-fast) var(--easing-ease);
}

.day-badge.active {
  background: var(--chat-purple);
  color: var(--white);
}
```

---

## Accessibility Requirements

### Minimum Touch Targets

All interactive elements must meet 48px minimum touch target:

```css
.interactive {
  min-height: var(--input-height-lg); /* 48px */
  min-width: var(--input-height-lg);
}
```

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--secondary-purple);
  outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation Checklist

When building Split Lease interfaces, verify:

- [ ] Colors use CSS variables from this guide (no hardcoded hex values)
- [ ] Typography uses defined font sizes and weights
- [ ] Spacing follows the spacing scale
- [ ] Border radius uses defined tokens
- [ ] Shadows use defined shadow variables
- [ ] Transitions use defined timing and easing
- [ ] Z-index follows the defined scale
- [ ] Touch targets meet 48px minimum
- [ ] Focus states are visible on all interactive elements
- [ ] Reduced motion preferences are respected
- [ ] Protocol components use ONLY protocol tokens (no green/yellow)

---

*"Design within constraints is not compromise - it's discipline."* - Paula Scher

---

---

# PROPOSED COLOR REVISIONS

## Paula Scher Recommendations | February 3, 2026

> **STATUS**: PROPOSED - NOT YET IN PRODUCTION
>
> The following color adjustments are recommendations based on a comprehensive audit of the current palette. These changes require team review and approval before implementation.

---

## Rationale Summary

The current palette suffers from three primary issues:

1. **Purple Proliferation**: 10+ purple variants that are visually indistinguishable
2. **Missing Warmth**: No warm accent color to balance the cool purple
3. **Accessibility Gaps**: Several colors fail WCAG AA contrast requirements

---

## Proposed Primary Purple Family (Consolidated)

**Goal**: Reduce from 10+ purples to 5 distinct, purposeful variants.

| Variable | Current Value | Proposed Value | Change |
|----------|---------------|----------------|--------|
| `--primary-purple` | `#31135D` | `#31135D` | No change - excellent brand anchor |
| `--primary-purple-hover` | `#251047` | `#1E0D42` | Slightly darker for clearer differentiation |
| `--secondary-purple` | `rgb(109, 49, 194)` | `#6B35C9` | Warmer, more saturated for CTAs |
| `--secondary-purple-hover` | `rgb(140, 104, 238)` | `#5A2AAD` | **CRITICAL**: Darker hover, not lighter |
| `--selected-purple` | `rgb(79, 48, 151)` | `#7B4DBA` | Warmer, more distinct from secondary |

### Variables to ELIMINATE

| Variable | Current Value | Replacement |
|----------|---------------|-------------|
| `--primary-purple-dark` | `#1f0a3d` | Use `--primary-purple-hover` |
| `--text-purple` | `rgb(82, 31, 147)` | Use `--secondary-purple` |
| `--chat-purple` | `rgb(75, 71, 206)` | Use `--secondary-purple` for badges |
| `--accent-purple` | `rgb(140, 104, 238)` | Use new `--secondary-purple-hover` |

---

## Proposed Warm Accent Colors (NEW)

**Goal**: Add warmth and urgency to balance the cool purple palette.

```css
/* NEW: Warm Accent Colors */
--accent-gold: #D4A853;
--accent-gold-light: #F5E6C3;
--accent-gold-dark: #B8923F;

--accent-coral: #E85D4C;
--accent-coral-hover: #D64C3C;
--accent-coral-light: #FCE8E6;
```

### Usage Guidelines

| Color | Use For |
|-------|---------|
| `--accent-gold` | Premium badges, highlights, "featured" indicators |
| `--accent-gold-light` | Callout backgrounds, promotional sections |
| `--accent-coral` | Hearts/favorites, urgency ("Limited Availability"), action items |
| `--accent-coral-hover` | Hover state for coral elements |

---

## Proposed Status Colors (WCAG AA Compliant)

**Goal**: Ensure all status colors meet accessibility requirements.

### Current Problems

| Color | Current Contrast | Required | Status |
|-------|------------------|----------|--------|
| `--success-green` (#4B47CE) | ~3.0:1 | 4.5:1 | FAIL |
| `--success-teal` (#4B47CE) | ~3.0:1 | 4.5:1 | FAIL |
| Warning | Not defined | - | MISSING |
| Error | Not defined at root | - | MISSING |

### Proposed Status Palette

```css
/* Success */
--status-success: #4B47CE;           /* Updated per requested palette */
--status-success-light: #E6F5EE;     /* Background for success states */
--status-success-text: #4B47CE;      /* Updated per requested palette */

/* Warning */
--status-warning: #C4841D;           /* 4.6:1 contrast - AA compliant */
--status-warning-light: #FDF4E3;     /* Background for warning states */
--status-warning-text: #92620E;      /* Text on light warning background */

/* Error */
--status-error: #C53030;             /* 6.1:1 contrast - AA compliant */
--status-error-light: #FDE8E8;       /* Background for error states */
--status-error-text: #9B2C2C;        /* Text on light error background */

/* Info (keep existing, add light variant) */
--status-info: #2563EB;              /* Standardized info blue */
--status-info-light: #EFF6FF;        /* Background for info states */
```

---

## Proposed Text Color Adjustments

**Goal**: Improve contrast for secondary and tertiary text.

| Variable | Current | Proposed | Contrast on White |
|----------|---------|----------|-------------------|
| `--text-dark` | `#1a1a1a` | `#1a1a1a` | 16.1:1 (no change) |
| `--text-gray` | `#6b7280` | `#5A6370` | 5.9:1 (improved from 4.6:1) |
| `--text-light-gray` | `#9ca3af` | `#8891A0` | 4.5:1 (improved from 2.6:1) |
| `--text-placeholder` | (new) | `#A8B0BC` | 3.2:1 (for placeholder only) |

---

## Proposed Border Consolidation

**Goal**: Reduce from 5 border colors to 3.

### Current Border Chaos

```css
/* Current - 5 redundant variables */
--border-color: #e5e7eb;
--border-light: #f3f4f6;
--border-gray: rgba(107, 107, 107, 0.7);
--border-gray-light: #e0e0e0;
--border-gray-lighter: #ddd;
```

### Proposed Border System

```css
/* Proposed - 3 purposeful variables */
--border-subtle: #F0F1F3;      /* Barely visible, section dividers */
--border-default: #E2E4E8;     /* Standard borders, cards, inputs */
--border-emphasis: #C8CBD0;    /* Strong borders, active states */
```

---

## Proposed Day Badge Colors

**Goal**: Unify day badges with brand purple instead of blue-leaning chat purple.

### Current (Disconnected from Brand)

```css
/* Current - blue-leaning */
--chat-purple: rgb(75, 71, 206);  /* Used for day badges */
```

### Proposed (Brand-Aligned)

```css
/* Day Badge States */
--day-badge-inactive-bg: #E8E5F0;      /* Purple-tinted gray */
--day-badge-inactive-text: #6B7280;    /* Muted text */
--day-badge-selected-bg: #6B35C9;      /* Brand CTA purple */
--day-badge-selected-text: #FFFFFF;    /* White for contrast */
--day-badge-hover-bg: #F3F0F8;         /* Subtle hover for inactive */
```

---

## Proposed CSS Variables Block

Copy this block to replace/augment the current color variables:

```css
:root {
  /* ========================================
     PROPOSED COLOR SYSTEM - Paula Scher Review
     ======================================== */

  /* Primary Purple Family (Consolidated) */
  --primary-purple: #31135D;
  --primary-purple-hover: #1E0D42;
  --secondary-purple: #6B35C9;
  --secondary-purple-hover: #5A2AAD;
  --selected-purple: #7B4DBA;

  /* Warm Accent Colors (NEW) */
  --accent-gold: #D4A853;
  --accent-gold-light: #F5E6C3;
  --accent-gold-dark: #B8923F;
  --accent-coral: #E85D4C;
  --accent-coral-hover: #D64C3C;
  --accent-coral-light: #FCE8E6;

  /* Status Colors (WCAG AA Compliant) */
  --status-success: #4B47CE;
  --status-success-light: #E6F5EE;
  --status-success-text: #4B47CE;
  --status-warning: #C4841D;
  --status-warning-light: #FDF4E3;
  --status-warning-text: #92620E;
  --status-error: #C53030;
  --status-error-light: #FDE8E8;
  --status-error-text: #9B2C2C;
  --status-info: #2563EB;
  --status-info-light: #EFF6FF;

  /* Text Colors (Improved Contrast) */
  --text-dark: #1a1a1a;
  --text-gray: #5A6370;
  --text-light-gray: #8891A0;
  --text-placeholder: #A8B0BC;
  --text-description: #374151;

  /* Border Colors (Consolidated) */
  --border-subtle: #F0F1F3;
  --border-default: #E2E4E8;
  --border-emphasis: #C8CBD0;

  /* Day Badge System */
  --day-badge-inactive-bg: #E8E5F0;
  --day-badge-inactive-text: #6B7280;
  --day-badge-selected-bg: #6B35C9;
  --day-badge-selected-text: #FFFFFF;
  --day-badge-hover-bg: #F3F0F8;

  /* Background Colors (Keep Existing) */
  --bg-white: #ffffff;
  --bg-light: #f9fafb;
  --bg-light-gray: #f3f4f6;
  --bg-off-white: rgb(252, 250, 255);

  /* Gradients (Updated to use new purples) */
  --gradient-purple-primary: linear-gradient(135deg, #31135D 0%, #5a2d8f 100%);
  --gradient-purple-button: linear-gradient(135deg, #6B35C9 0%, #7B4DBA 100%);
  --gradient-purple-hover: linear-gradient(135deg, #5A2AAD 0%, #6B35C9 100%);
}
```

---

## Dark Mode Preparation

If implementing dark mode, use these mappings:

| Light Mode | Dark Mode | Notes |
|------------|-----------|-------|
| `--primary-purple` (#31135D) | `#9B7FD1` | Lightened for dark bg |
| `--secondary-purple` (#6B35C9) | `#A385E0` | Maintains saturation |
| `--bg-white` (#FFFFFF) | `#1A1625` | Deep purple-black |
| `--text-dark` (#1a1a1a) | `#F5F3F7` | Off-white with purple tint |
| `--accent-gold` (#D4A853) | `#E8C77B` | Desaturated for dark bg |
| `--accent-coral` (#E85D4C) | `#F07B6C` | Lighter for visibility |
| `--status-success` (#4B47CE) | `#4B47CE` | Brighter for dark bg |
| `--status-warning` (#C4841D) | `#FBBF24` | Brighter for dark bg |
| `--status-error` (#C53030) | `#F87171` | Brighter for dark bg |

---

## Implementation Checklist

### Phase 1: Critical Fixes (Week 1)

- [ ] Change secondary-purple hover from lighter to darker
- [ ] Add `--status-warning` and `--status-error` to root variables
- [ ] Update day badge colors to use brand purple

### Phase 2: Warmth Addition (Weeks 2-3)

- [ ] Implement `--accent-gold` system
- [ ] Elevate `--accent-coral` from favorites to primary accent
- [ ] Update premium features to use gold accent

### Phase 3: Consolidation (Weeks 3-4)

- [ ] Migrate components from eliminated purple variables
- [ ] Consolidate border colors from 5 to 3
- [ ] Update text colors for improved contrast

### Phase 4: Polish (Month 2)

- [ ] Audit all components for new color usage
- [ ] Remove deprecated color variables
- [ ] Document dark mode color mappings

---

## Comparison: Before & After

### Brand Palette Simplification

| Before (10+ purples) | After (5 purples) |
|---------------------|-------------------|
| primary-purple | primary-purple |
| primary-purple-hover | primary-purple-hover |
| primary-purple-dark | (eliminated) |
| secondary-purple | secondary-purple |
| accent-purple | secondary-purple-hover |
| selected-purple | selected-purple |
| text-purple | (eliminated) |
| chat-purple | (eliminated) |
| favorites-purple | (use secondary-purple) |
| protocol colors | (use core purples) |

### Emotional Temperature Shift

| Aspect | Before | After |
|--------|--------|-------|
| Primary Emotion | Clinical, corporate | Sophisticated, aspirational |
| Warmth Level | Cold (purple only) | Balanced (purple + gold + coral) |
| Urgency | Low (no warm accents) | Appropriate (coral for action) |
| Trustworthiness | Present | Enhanced (gold = premium) |

---

*"The problem isn't that we use purple. The problem is that we use purple without direction. Direction comes from contrast, hierarchy, and restraint."* - Paula Scher

---

**Version**: 2.0
**Last Updated**: February 3, 2026
**Source**: `app/src/styles/variables.css`
**Maintained by**: Split Lease Design Team
**Color Review by**: Paula Scher (simulated)

## Output
Output the COMPLETE HTML document. No markdown fences. Just raw HTML starting with <!DOCTYPE html> and ending with </html>.
