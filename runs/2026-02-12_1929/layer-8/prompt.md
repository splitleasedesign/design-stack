You are running Layer 8 (Element Factory) of the SplitLease Design Stack v2.

IMPORTANT: You are running in print mode (-p). You have NO tools — no Write, no Read, no Bash. Your ONLY output is stdout. Print the complete JSON directly. No commentary, no markdown code fences, no explanation. Your entire response must be a single valid JSON object.

## Your Task

Convert the design principles from layers 1-5 into concrete, buildable UI element specifications. For EACH element from layers 1-5 (works, communicates, looks, behaves, feels), create a UI element specification with:

1. **Visual spec**: Colors (from style guide purple palette), typography (Inter/DM Sans), spacing, layout
2. **Interaction spec**: States (default, hover, active, disabled, loading), transitions, animations
3. **Copy spec**: Actual microcopy text, tone guidelines, character limits
4. **HTML/CSS snippet**: A complete, self-contained HTML+CSS code block that renders the element. Use inline styles or a <style> block. Must use the production color palette (purple #31135D base).
5. **Before/after comparison**: What the current generic version looks like vs. what this principled version achieves

## Output Schema

```json
{
  "run_id": "2026-02-12_1929",
  "layer": "element-factory",
  "element_count": <number>,
  "elements": [
    {
      "id": "ui-001",
      "name": "Element Name",
      "category": "works|communicates|looks|behaves|feels",
      "source_elements": ["works-001", "communicates-002"],
      "phase": "discovery|evaluation|onboarding|listing_creation|pricing|proposal_mgmt|active_lease|retention",
      "priority": "high|medium|low",
      "visual_spec": {
        "colors": {},
        "typography": {},
        "spacing": {},
        "layout": ""
      },
      "interaction_spec": {
        "states": {},
        "transitions": "",
        "micro_interactions": ""
      },
      "copy_spec": {
        "headline": "",
        "body": "",
        "cta": "",
        "tone": ""
      },
      "html_css": "<div>...</div><style>...</style>",
      "before_after": {
        "before": "",
        "after": ""
      },
      "rationale": ""
    }
  ]
}
```

Produce at least 12 UI elements covering all 5 categories and multiple journey phases.


## Style Guide (Production)
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

## Design Tokens
{
  "colors": {
    "bg": "#f6f4f0",
    "bg-deep": "#eae7e1",
    "surface": "#ffffff",
    "surface-warm": "#fdfcfa",
    "ink": "#1a1714",
    "ink-soft": "#4a4640",
    "ink-muted": "#8a857e",
    "ink-ghost": "#bdb8b0",
    "accent": "#2d5a3d",
    "accent-light": "#e8f0eb",
    "accent-bright": "#3a7a52",
    "signal-warn": "#c17a28",
    "signal-warn-bg": "#fef3e2",
    "signal-danger": "#b83a3a",
    "signal-danger-bg": "#fde8e8",
    "signal-info": "#2d5a8a",
    "signal-info-bg": "#e8f0fa",
    "border": "#e2dfd9",
    "border-strong": "#ccc8c0"
  },
  "typography": {
    "serif": "Instrument Serif",
    "sans": "Outfit",
    "mono": "IBM Plex Mono"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "40px",
    "xxl": "60px"
  },
  "radius": {
    "sm": "6px",
    "md": "10px",
    "lg": "16px",
    "full": "9999px"
  },
  "easing": {
    "out": "cubic-bezier(0.16, 1, 0.3, 1)",
    "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  },
  "shadows": {
    "sm": "0 1px 3px rgba(26,23,20,0.06)",
    "md": "0 2px 8px rgba(26,23,20,0.08)",
    "lg": "0 8px 30px rgba(26,23,20,0.10)"
  }
}

### layer-0/journey-context.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt",
    "lens_summary": "This lens reveals how a host who satisfices through a fast, low-friction phone call will scan and muddle through the platform, and how the platform must be self-evident at every phase to match the effortless conversational pace Drew experienced with Bryant."
  },
  "phases": {
    "discovery": {
      "what_this_lens_reveals": "The Drew call begins mid-journey — Drew was already contacted and agreed to speak with Bryant. The call does not reveal how Drew discovered Split Lease. However, Krug's First Law applies directly: whatever brought Drew to the platform (ad, referral, search result) must be self-evident in under 5 seconds. Krug's observation that 'people tend to spend very little time reading most Web pages' (Ch. 2) and instead scan for trigger words means the discovery touchpoint (landing page, ad, LinkedIn message) must pass the 'billboard at 60 mph' test. Drew's call behavior — short answers, no questions about what Split Lease is — suggests his discovery phase was handled entirely by Bryant's outreach, bypassing the platform altogether.",
      "user_state": {
        "emotional_state": "Neutral-to-open. Drew's tone at 00:06 ('Hello?') is casual, not guarded. He was expecting the call, indicating prior positive contact.",
        "knowledge_level": "Drew knows he has a listing and has been contacted about specific guests. He does not appear to know much about Split Lease as a company or platform — no questions about the business model.",
        "commitment_level": "Past discovery. Drew already agreed to take the call, indicating he has moved beyond initial curiosity.",
        "data_available": "We know Drew's property (Chelsea 1BR/1BA, $2,000/month) was likely found through an external listing. No data on the discovery channel itself."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "If Drew had encountered the platform before the call rather than Bryant's direct outreach, Krug's scanning behavior suggests he would have spent seconds, not minutes, evaluating it",
          "The platform's discovery touchpoint must compete with 'the first link that catches their interest' (Krug Ch. 2) — if Split Lease's landing page doesn't immediately say 'list your space, get guaranteed rent,' Drew scans past it"
        ],
        "evidence": "Krug Ch. 2: 'What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for.'"
      },
      "key_quotes": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "Don't make me think! ... when I look at a Web page it should be self-evident. Obvious. Self-explanatory. I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "relevance": "The discovery touchpoint — whatever first brings a host like Drew to Split Lease — must pass this self-evidence test. If the value proposition requires even a moment of interpretation, scanning hosts will move on."
        },
        {
          "source": "drew-call.txt, 00:06-00:18",
          "quote": "Hello? Hello. Hey, is this Drew? ... I'm doing well. How are you?",
          "relevance": "Drew's casual opening shows zero friction. Whatever discovery mechanism brought him here (Bryant's direct outreach) created a frictionless entry. The platform's discovery page must achieve the same."
        }
      ]
    },
    "evaluation": {
      "what_this_lens_reveals": "The Drew call IS the evaluation phase. Drew evaluates Split Lease entirely through a 6-minute conversation with Bryant. He asks zero questions about the company, zero questions about the platform, and zero questions about how the service works. His evaluation is mediated entirely by Bryant's credibility. Krug's insight about satisficing (Ch. 2) explains why: Drew doesn't optimize — he accepts the first reasonable option. Bryant's pitch (guaranteed payment, doubled deposit, vetted guests) is 'the first reasonable option,' and Drew clicks the mental equivalent of 'that link seems like it might lead to what I'm looking for.' The entire evaluation operates at conversational speed with zero cognitive friction, which sets a dangerous benchmark for any subsequent platform interaction.",
      "user_state": {
        "emotional_state": "Accommodating and business-like. Drew answers efficiently, volunteers information ('I have more pictures and I can send you,' 04:38), and agrees to terms without pushback. No anxiety, no skepticism.",
        "knowledge_level": "Drew knows his property details intimately but shows no knowledge of Split Lease's platform, fee structure, or business model. He accepts Bryant's verbal guarantees without requesting documentation during the call.",
        "commitment_level": "Evaluating but leaning in. Drew's willingness to share additional photos (04:38), discuss lease terms (05:18-05:32), and exchange email (05:01) shows active evaluation trending toward commitment.",
        "data_available": "Property: Chelsea 1BR/1BA, $2,000/month, $1,000 security deposit. Current tenant moves out on the 6th. Cleaning needed. Open to 4-month lease with extension. Flexible on start date."
      },
      "dropout_risk": {
        "level": "low",
        "reasons": [
          "Drew is accommodating and has not raised objections",
          "The conversational format matches Krug's satisficing pattern — no comparison shopping",
          "Risk exists only if the post-call platform experience creates friction that violates the effortless standard set by this call"
        ],
        "evidence": "drew-call.txt, 04:18: 'Okay. Okay. Okay. Alright.' — Drew accepts the guarantee explanation with minimal processing, classic satisficing behavior matching Krug Ch. 2: 'we choose the first reasonable option.'"
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 03:44-04:18",
          "quote": "Split lease doubled the deposit, and guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment... Okay. Okay. Okay. Alright.",
          "relevance": "Drew satisfices on the guarantee explanation. He doesn't ask for documentation, proof, or details. This is Krug's satisficing in action: the first reasonable option is accepted. But it also means his evaluation is shallow — trust is in Bryant, not the platform."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing. As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.",
          "relevance": "Drew's evaluation behavior mirrors satisficing exactly. He doesn't compare Split Lease to other options. Bryant IS the first reasonable option. The platform must not force Drew into an optimization mode he has already skipped."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "There's not much of a penalty for guessing wrong. Unlike firefighting, the penalty for guessing wrong on a Web site is usually only a click or two of the Back button.",
          "relevance": "In Drew's case, the penalty for guessing wrong about Split Lease is also low — he can always find a different tenant. This low-stakes framing enables satisficing but also means the platform must not introduce new perceived risks that raise the stakes."
        }
      ]
    },
    "onboarding": {
      "what_this_lens_reveals": "The call itself is Drew's onboarding — he is being onboarded by Bryant through conversation. The critical Krug insight for this phase is about muddling through (Ch. 2): 'very few people take the time to read instructions. Instead, we forge ahead and muddle through.' When Drew transitions from the call to the platform, he will not read instructions, will not explore the dashboard, will not watch a tutorial. He will scan for something that looks like what Bryant described and click the first thing that resembles it. The call ends with Bryant promising to send 'more information on split lease as well as links to the agreements' (05:01). This means Drew's first platform encounter will likely be through an email link. The landing page for that link must be self-evident (Krug Ch. 1) — Drew must instantly recognize it as 'the thing Bryant told me about.' Any question mark in Drew's head ('Where am I? What do I do here? Is this right?') violates Krug's First Law.",
      "user_state": {
        "emotional_state": "Positive but passive. Drew has been guided through the entire process by Bryant. He expects to continue being guided — not to self-serve.",
        "knowledge_level": "Drew knows Bryant, knows the guests (Ariel and Amber), knows his property terms. He does NOT know the platform, the dashboard, the listing wizard, or the proposal system.",
        "commitment_level": "Committed to the relationship with Bryant. Commitment to the platform is untested.",
        "data_available": "Email exchange promised (05:01). Drew will send photos via text/email. Bryant will send agreements and details."
      },
      "dropout_risk": {
        "level": "high",
        "reasons": [
          "Drew has been fully guided — any self-service requirement is a friction spike",
          "Krug Ch. 2 muddling through: Drew will not read instructions, will not explore — he will scan and click the first thing that seems right, and if it's wrong, he may leave rather than recover",
          "The call set a zero-friction benchmark; the platform must match it or Drew perceives degradation",
          "Drew's passivity ('Sounds good' x3) suggests he expects to be led, not to lead"
        ],
        "evidence": "drew-call.txt, 05:01: 'I can get back to you with more information on split lease as well as links to the agreements' — the next touchpoint is an email from Bryant. If the linked platform requires Drew to figure things out on his own, it violates the guided experience the call promised."
      },
      "key_quotes": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.",
          "relevance": "Drew will muddle through the platform. He will not read onboarding instructions. The platform must be self-evident or Drew's 'vaguely plausible story' about what he's doing may diverge entirely from the intended flow."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "relevance": "Drew's onboarding experience must pass this test. The first screen he sees must communicate 'this is where you manage your Chelsea apartment listing and the guests Bryant told you about.' If it requires even a moment of interpretation, Drew's muddling-through strategy may lead him astray."
        },
        {
          "source": "drew-call.txt, 05:52-06:14",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "relevance": "Drew's closing language reveals impatience to wrap up efficiently. He is not someone who will invest time in learning a new system. The platform must respect this preference for speed and directness."
        }
      ]
    },
    "listing_creation": {
      "what_this_lens_reveals": "Drew already has a listing that Bryant referenced ('the comfortable one bed, one bath,' 00:45). The call suggests Drew's listing was created elsewhere (possibly a third-party site where Bryant found it) and now needs to be translated to the Split Lease platform. Krug's Billboard Design 101 (Ch. 3) is directly relevant: the listing creation wizard is a series of pages Drew will scan, not read. Krug's visual hierarchy principle means each wizard step must make the most important action the most prominent thing on the page. Drew's call reveals that he thinks of his listing in simple terms — one bedroom, one bath, Chelsea, $2,000/month, cleaning needed. The 6-step wizard (space snapshot, features, lease styles, pricing, rules, photos) is 6 opportunities for Drew to encounter question marks. Each step must be self-evident. Drew's offer to send more pictures (04:38) and openness to a video tour (04:21) shows he has visual assets ready — the photo upload step should be the easiest, not the hardest.",
      "user_state": {
        "emotional_state": "Ready to proceed but not eager to invest time. Drew's efficient call style ('Yep. Yep.' at 00:49-00:52) suggests he values brevity.",
        "knowledge_level": "Drew knows his space intimately. He can describe it in seconds. But he may not know platform-specific categories like 'lease style' or 'space type' dropdowns.",
        "commitment_level": "Willing to share photos and details — actively participating in listing creation, just through a human channel (Bryant/email) rather than the platform.",
        "data_available": "Title: 'comfortable one bed, one bath.' Location: Chelsea. Rent: $2,000/month. Deposit: $1,000. Availability: after the 6th + cleaning. Photos: available, to be sent. Video tour: possible."
      },
      "dropout_risk": {
        "level": "high",
        "reasons": [
          "The 6-step wizard is exactly the kind of multi-page process that Krug warns about — Drew will scan each step and if any step makes him think ('What is lease style? What does nights-of-the-week mean?'), he risks abandoning",
          "Drew is already providing listing data through email/text to Bryant — if the wizard feels harder than texting, Drew will default to the easier channel",
          "Krug Ch. 3: 'Designing pages for scanning, not reading' — every wizard step must be a billboard, not a form"
        ],
        "evidence": "Krug Ch. 3: 'Faced with the fact that your users are whizzing by, there are five important things you can do to make sure they see — and understand — as much of your site as possible: Create a clear visual hierarchy on each page.' The listing wizard's 6 steps must each have a visual hierarchy that makes the primary action instantly obvious."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 00:45-00:52",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep.",
          "relevance": "Drew confirms his listing in under 10 seconds of speech. The listing wizard must capture this same information with comparable speed. If typing 'comfortable one bed one bath' into a title field plus selecting Chelsea as a location takes longer than 10 seconds, the platform is slower than the phone call."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "quote": "The more important something is, the more prominent it is... Things that are related logically are also related visually... Things are 'nested' visually to show what's part of what.",
          "relevance": "Each listing wizard step must use visual hierarchy to make the primary input field the most prominent element. Secondary options (like 'Load Template' or 'Load Common') should be visually subordinate, not competing for attention."
        },
        {
          "source": "drew-call.txt, 04:38",
          "quote": "Yes. I have more pictures and I can send you.",
          "relevance": "Drew has photos ready. The upload step should capitalize on this readiness with a dead-simple upload flow. Krug's convention principle: the upload pattern should match what Drew has seen on every other site — drag-and-drop or file picker, no surprises."
        }
      ]
    },
    "pricing": {
      "what_this_lens_reveals": "Drew's pricing is established in one sentence: '$2,000 a month' (00:52). Confirmed by Bryant: 'That's right.' Total cognitive cost: 3 seconds. On the platform, the pricing wizard (Step 4) presents 'default values already populated' according to the journey map. Krug's satisficing principle predicts Drew will accept defaults without deliberation — which is exactly the right behavior IF the defaults are correct. But the platform thinks in nightly rates while Drew thinks in monthly rent. Krug's Ch. 1 example of the bookstore search (Author/Title/Keyword dropdown) is directly analogous: Amazon eliminated the distinction and 'did whatever makes the most sense.' The pricing step should accept '$2,000/month' and derive everything else, not force Drew to think about nightly rates or 4-week totals.",
      "user_state": {
        "emotional_state": "Confident. Drew states his price without hesitation or negotiation. This is not a decision point for him — it's a fact.",
        "knowledge_level": "Drew knows his monthly rent. He may not know the nightly rate equivalent, the Split Lease fee structure, or how guaranteed payment affects his take-home.",
        "commitment_level": "High on price — this is non-negotiable for Drew. Low on format — he doesn't care how the platform represents it as long as $2,000/month is the outcome.",
        "data_available": "$2,000/month rent. $1,000 security deposit. No data on Drew's awareness of Split Lease fees or commission structure."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "If the pricing step forces Drew to translate $2,000/month into a nightly rate, it introduces a question mark that violates Krug's First Law",
          "Krug Ch. 1: 'you're squandering the limited reservoir of patience and goodwill' — any unnecessary cognitive work on pricing depletes Drew's willingness to continue",
          "If defaults are wrong (e.g., pre-populated with a different rate), Drew may not catch the error due to satisficing, leading to a bad listing rather than dropout"
        ],
        "evidence": "Krug Ch. 1, Amazon search example: 'Amazon.com, on the other hand, doesn't even mention the Author-Title-Keyword distinction. They just look at what you type and do whatever makes the most sense.' The pricing step should do the same — accept Drew's mental model ($2,000/month) and handle the conversion internally."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 00:52",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "relevance": "Drew's entire pricing decision takes 3 seconds. The platform's pricing step must not expand this 3-second decision into a multi-field, multi-format exercise."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "After all, why should I have to think about how I want to search? And even worse, why should I have to think about how the site's search engine wants me to phrase the question, as though it were some ornery troll guarding a bridge?",
          "relevance": "Replace 'search' with 'price.' Why should Drew have to think about how the platform wants him to enter his rent? The platform should accept the obvious input ($2,000/month) and figure out the rest."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "We don't make optimal choices. We satisfice... we choose the first reasonable option.",
          "relevance": "Drew will satisfice on pricing defaults. If the defaults are pre-populated correctly ($2,000/month), he will accept them instantly. If they require translation or interpretation, he faces a forced question mark — exactly what Krug says to eliminate."
        }
      ]
    },
    "proposal_mgmt": {
      "what_this_lens_reveals": "Drew's call reveals how he evaluates proposals: through Bryant's verbal summary. Bryant describes Ariel and Amber in conversational terms — they live in Connecticut, work in Manhattan, need a weekday pied-à-terre, are flexible on dates, want 4 months with extension possibility (05:18-05:32). Drew processes this in real time and agrees. On the platform, proposals will arrive as structured data (dates, rates, durations, totals). Krug's scanning principle (Ch. 2) predicts Drew will not read proposal details carefully — he will scan for the information that matters to him (who, how long, how much) and satisfice. The proposal page must present these three pieces of information as the visual hierarchy's top tier, not buried in a data table. Krug's convention principle (Ch. 3) also applies: the Accept/Decline/Counter interaction should follow conventions Drew has seen elsewhere (Airbnb booking requests, email RSVP patterns), not invent a new interaction model.",
      "user_state": {
        "emotional_state": "Open and accommodating. Drew's response to the 4-month term (05:18-05:32) is immediate agreement with 'ability to extend.' He is not a difficult negotiator.",
        "knowledge_level": "Drew understands the proposal in human terms (who the guests are, what they need, how long). He may not understand platform-specific proposal mechanics (counter-offers, term editing, proposal status).",
        "commitment_level": "High — Drew has already implicitly accepted these specific guests during the call. The platform's proposal step is a formality, not a decision point. The risk is that the platform makes a formality feel like a decision.",
        "data_available": "Guests: Ariel and Amber. Duration: 4 months with extension. Start: early March (flexible). Rate: $2,000/month. Deposit: $1,000 (doubled by Split Lease to $2,000)."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "If the proposal page presents too much information (data tables, legal terms, fee breakdowns), Drew will scan past critical details — Krug Ch. 2: 'There are usually large parts of the page that they don't even look at'",
          "If Accept/Decline/Counter requires multiple clicks or confirmation steps, Drew's satisficing behavior may lead him to stop mid-process",
          "The call set the benchmark: proposal evaluation took 30 seconds of conversation. The platform must not expand this to 5 minutes of form navigation"
        ],
        "evidence": "drew-call.txt, 05:18-05:32: 'they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.' — proposal acceptance in 14 seconds of conversation. The platform must not turn this into a multi-step process."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 01:32-02:02",
          "quote": "Ariel and Amber are both flexible... both have primary residences in Connecticut... they both work in Manhattan... essentially they'd be using this space as a place to come back to after work.",
          "relevance": "Bryant's proposal summary gives Drew exactly the information he needs: who, why, how. The platform's proposal view must prioritize the same information — guest identity, purpose of stay, and schedule — not financial line items."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "quote": "Break up pages into clearly defined areas... users should be able to point at the different areas of the page and say, 'Things I can do on this site!' 'Links to today's top stories!'",
          "relevance": "The proposal page must have clearly defined areas: 'Who these guests are,' 'What they're proposing,' 'What you'll earn,' 'What you can do.' Drew should be able to play the $25,000 Pyramid game with this page."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand.",
          "relevance": "If Drew encounters any question mark on the proposal page — 'What does counter mean? What happens if I decline? Is this the total or per month?' — each one erodes his willingness to complete the action. The proposal page must be question-mark-free."
        }
      ]
    },
    "active_lease": {
      "what_this_lens_reveals": "The Drew call does not directly address the active lease phase. Drew's tenant moves out 'on the 6th' (02:41) and needs cleaning (02:57), suggesting he has experience managing tenants and understands the practical realities of active leases. However, the call provides no evidence about how Drew would interact with the platform during an active lease. Krug's principle about muddling through (Ch. 2) applies predictively: during an active lease, Drew will need to check payment status, communicate about issues, and manage the relationship. He will not learn the platform's tools — he will muddle through with whatever he finds first. If the platform buries payment status behind navigation, Drew will text Bryant instead. Krug's convention principle means payment dashboards should look like what Drew has seen on banking apps or Venmo — not a custom Split Lease design.",
      "user_state": {
        "emotional_state": "Not directly observed. Inferred: Drew is an experienced landlord (current tenant, cleaning routine, deposit structure) who likely has a pragmatic, low-drama approach to active leases.",
        "knowledge_level": "Drew knows landlording. He knows tenants, deposits, cleaning, move-out dates. He does NOT know the Split Lease platform's active lease tools.",
        "commitment_level": "Not yet relevant — this phase is future-state for Drew.",
        "data_available": "Drew has a current tenant moving out on the 6th. He charges $1,000 deposit. He arranges cleaning between tenants. These behavioral patterns will carry into the active lease phase."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "Krug Ch. 2: Drew will muddle through — if the active lease dashboard is not self-evident, he will default to texting/calling Bryant for updates",
          "If payment confirmations are not immediately visible (Krug's billboard test), Drew may lose confidence in the guaranteed payment promise",
          "Drew's existing landlord workflow (likely informal, text/call-based) is the competition — the platform must be easier than Drew's current system"
        ],
        "evidence": "Krug Ch. 2: 'Even technically savvy users often have surprising gaps in their understanding of how things work... I've seen lots of people use software and Web sites effectively in ways that are nothing like what the designers intended.' Drew will use the active lease tools in ways the designers did not intend. The tools must be robust enough to survive this."
      },
      "key_quotes": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "If we find something that works, we stick to it. Once we find something that works — no matter how badly — we tend not to look for a better way.",
          "relevance": "If Drew discovers that texting Bryant works for getting lease updates, he will never learn to use the platform's dashboard. The platform must intercept this pattern by making the dashboard the path of least resistance."
        },
        {
          "source": "drew-call.txt, 02:41-02:57",
          "quote": "after that a tenant moves out? Is that right? Yeah... Cleaning.",
          "relevance": "Drew has a move-out/cleaning/move-in workflow. The active lease phase should integrate with this existing mental model — showing tenant status, upcoming transitions, and maintenance needs in Drew's terms."
        }
      ]
    },
    "retention": {
      "what_this_lens_reveals": "The Drew call hints at retention through the '4 months and then maybe the ability to extend' exchange (05:18-05:32). Drew is open to ongoing engagement but has not committed beyond the initial term. Krug's principle about making pages self-evident (Ch. 1) applies to retention touchpoints: when a lease approaches its end, the renewal prompt must be as obvious as Drew's original acceptance was easy. Krug Ch. 1 warns that 'the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.' If the renewal process introduces friction, Drew's confidence erodes. The book's observation that 'your site may not have been that easy to find in the first place' (Ch. 1) cuts both ways: Drew may not easily find alternatives, but he also may not easily find the renewal path on the platform.",
      "user_state": {
        "emotional_state": "Not directly observed. Inferred: if the active lease went well, Drew will be positively disposed. His accommodating nature ('yep,' 'sounds good') suggests he defaults to continuation rather than active re-evaluation.",
        "knowledge_level": "Drew will know the platform better by this phase (if he used it during active lease). But Krug's muddling-through principle means his knowledge may be patchy and based on incorrect mental models.",
        "commitment_level": "Conditional. Drew's 'ability to extend' language (05:32) shows he frames continuation as an option, not an assumption.",
        "data_available": "4-month initial term. Extension possibility discussed. Drew's retention will depend on active lease experience (payment reliability, guest behavior, platform friction)."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "Retention requires Drew to actively choose to continue — satisficing favors the status quo, but only if the status quo is visible and easy to maintain",
          "If the renewal process requires Drew to navigate to a new page, fill out new forms, or make new decisions, Krug's scanning behavior means he may not complete it",
          "Drew's alternatives (Craigslist, word of mouth, doing nothing) are frictionless — the renewal path must be equally frictionless"
        ],
        "evidence": "Krug Ch. 1: 'Making pages self-evident is like having good lighting in a store: it just makes everything seem better. Using a site that doesn't make us think about unimportant things feels effortless.' If the 4-month renewal feels effortless, Drew stays. If it requires thinking, Drew may not renew — not out of dissatisfaction, but out of friction."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "quote": "they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "relevance": "Drew's retention signal: 'ability to extend.' The platform must capitalize on this by making extension a one-click action at the right moment, not a multi-step process that forces re-evaluation."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.",
          "relevance": "Cumulative friction across the host journey erodes the confidence that Bryant built in the call. By the retention phase, every prior question mark has compounded. The renewal prompt must overcome any accumulated friction debt."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "There's also the 'I've waited ten minutes for this bus already, so I may as well hang in a little longer' phenomenon.",
          "relevance": "Sunk cost works in Split Lease's favor for retention — Drew has invested time, shared photos, accepted guests. But Krug notes this only applies 'until someone builds one down the street that makes them feel smart.' The renewal must make Drew feel smart, not trapped."
        }
      ]
    }
  },
  "cross_phase_patterns": [
    {
      "pattern": "The satisficing host: Drew consistently accepts the first reasonable option without deliberation, across every phase observed in the call — he satisfices on the platform explanation (03:44-04:18), on the guest profiles (01:32-02:02), on the lease term (05:18-05:32), and on next steps (05:38). Krug's satisficing principle (Ch. 2) predicts this behavior will carry to the platform: Drew will click the first thing that looks right and will not compare options, read fine print, or explore alternatives. This means defaults must be correct, primary actions must be visually dominant, and secondary options must not compete for attention.",
      "phases_affected": [
        "evaluation",
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "evidence": "drew-call.txt, 04:18: 'Okay. Okay. Okay. Alright.' (accepting guarantee without questions); 05:32: 'Okay. Okay. Sounds good.' (accepting 4-month term). Krug Ch. 2: 'As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.'"
    },
    {
      "pattern": "The billboard standard: Drew's call operates at billboard speed — each topic is covered in under 30 seconds, and Drew scans Bryant's verbal output for the parts that matter to him (price, guests, timeline) while ignoring the rest (company name, vetting process details). Krug Ch. 3 establishes that every page should be designed as a billboard going by at 60 mph. Drew's behavior confirms this: every platform page he encounters must communicate its purpose and primary action within seconds, because Drew does not read — he scans.",
      "phases_affected": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "evidence": "drew-call.txt: The entire 6-minute call covers property confirmation (10 sec), availability (30 sec), guest profiles (30 sec), guarantee (30 sec), photos (15 sec), terms (15 sec). Each topic is a billboard. Krug Ch. 2: 'We're thinking \"great literature\"... while the user's reality is much closer to \"billboard going by at 60 miles an hour.\"'"
    },
    {
      "pattern": "Convention reliance over innovation: Drew shows zero interest in understanding how Split Lease works differently from what he already knows. He maps everything to his existing landlord mental model — monthly rent, security deposit, tenant move-out, cleaning. Krug Ch. 3: 'Conventions are your friends... If you're not going to use an existing Web convention, you need to be sure that what you're replacing it with either (a) is so clear and self-explanatory that there's no learning curve, or (b) adds so much value that it's worth a small learning curve.' Any Split Lease convention that deviates from Drew's existing landlord conventions (Zillow, StreetEasy, Craigslist posting) must pass this test.",
      "phases_affected": [
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "evidence": "drew-call.txt, 00:52: '$2,000 a month' (standard monthly rent convention); 02:57: 'security deposit... $1,000' (standard deposit convention). Krug Ch. 3: 'Designers are often reluctant to take advantage of [conventions]... there's a great temptation to reinvent the wheel.'"
    },
    {
      "pattern": "The guided-to-self-service cliff: Drew's entire experience is guided by Bryant. The call is a conversation, not a form. Bryant asks questions, Drew answers, Bryant confirms. The transition to the platform is a cliff from full guidance to full self-service. Krug Ch. 2's muddling-through principle predicts that Drew will attempt to use the platform the way he 'uses' the phone call — expecting it to ask him questions, confirm his answers, and guide him forward. If the platform presents a blank dashboard and waits for Drew to figure out what to do, it fails the self-evidence test at the highest-risk moment in the journey.",
      "phases_affected": [
        "evaluation",
        "onboarding",
        "listing_creation"
      ],
      "evidence": "drew-call.txt: Every piece of information flows from Bryant's questions, not Drew's exploration. Drew never asks 'what do I do next?' because Bryant always tells him. Krug Ch. 2: 'we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.' Drew's plausible story about the platform will be 'it should work like the phone call with Bryant.'"
    },
    {
      "pattern": "Clickability as trust signal: Krug Ch. 3 warns that unclear clickability erodes confidence ('the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence'). Drew's trust is currently held by Bryant. Every ambiguous button, unclear link, or uncertain interaction on the platform transfers trust debt from the platform to Bryant — Drew will text Bryant rather than guess. The platform's clickability must be absolutely unambiguous at every phase, because each question mark about 'is this clickable?' is a question mark about 'is this platform trustworthy?'",
      "phases_affected": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "evidence": "Krug Ch. 3: 'Since a large part of what people are doing on the Web is looking for the next thing to click, it's important to make it obvious what's clickable and what's not.' Combined with drew-call.txt, 05:38: 'if you have any questions for me, you can feel free to text me or email me' — Bryant explicitly offers himself as the fallback for any platform confusion."
    }
  ],
  "sources_consulted": [
    "drew-call.txt — Full host call transcript analyzed for behavioral patterns across all journey phases. Drew is a Chelsea 1BR owner, $2,000/month, accommodating and efficient communicator. Key behavioral signals: satisficing on every decision, zero questions about platform, zero questions about company, willing to share photos, open to 4-month term with extension.",
    "dontmakemethink-usability-laws.txt — Chapters 1-3 plus Introduction and Preface of Steve Krug's Don't Make Me Think, 2nd Edition. Key principles extracted: (1) Krug's First Law — pages must be self-evident; (2) Scanning not reading — users scan pages like billboards at 60 mph; (3) Satisficing — users choose the first reasonable option, not the best; (4) Muddling through — users don't read instructions, they forge ahead with plausible stories; (5) Visual hierarchy — prominence, grouping, and nesting guide scanning; (6) Conventions — use existing patterns unless you have something clearly better; (7) Clickability — make clickable elements obviously clickable; (8) Clearly defined areas — users should be able to play $25,000 Pyramid with any page.",
    "Journey map (provided inline) — Used to map the 6-step listing wizard, proposal flow, and counter-offer mechanics to Drew's behavioral patterns from the call.",
    "Element library (library/elements.json) — Reviewed all existing elements (works-001 through works-006, communicates-001 through communicates-007, looks-001 through looks-007, behaves-001 through behaves-007, feels-001 through feels-008, tests-001 through tests-037, plus guest elements). Coverage gaps identified: discovery phase has minimal coverage (only works-001), active_lease has weak coverage (only works-005), retention has weak coverage (only works-004). This lens provides new evidence for all three gap phases."
  ]
}
### layer-1/works-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "works-001",
      "type": "process_pattern",
      "title": "Self-Evidence at Every Phase Entry",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "problem": "Drew's entire evaluation happens through a 6-minute phone call where every topic is self-evident — Bryant asks, Drew answers, meaning arrives instantly. When Drew transitions to the platform, every new screen demands interpretation: 'Where am I? What do I do here? Is this the thing Bryant told me about?' Krug's First Law states that pages must be self-evident — a user should 'get it' without expending any effort thinking about it. But the platform has no mechanism to ensure that each phase entry point passes this self-evidence test. Drew will not read instructions (Krug Ch. 2: 'very few people take the time to read instructions'). He will scan, form a vaguely plausible story about what he sees, and act on it. If the first screen of any phase makes him think — even for a millisecond — he has encountered a question mark that the phone call never produced. Each question mark compounds across phases, eroding the trust Bryant built.",
      "solution": "Apply Krug's First Law as a gate for every phase entry: no phase should present its first screen until that screen passes the self-evidence test. Concretely: (1) Every phase entry screen must answer three questions within 2 seconds of visual scanning: 'What is this?' 'What can I do here?' 'Why am I here?' — without requiring the user to read body text or instructions. (2) Use the $25,000 Pyramid test (Krug Ch. 3): a user should be able to point at clearly defined areas and name them ('My listing details,' 'Guests interested in my place,' 'What I'll earn'). (3) The page title or primary heading must use language Drew already heard in the call — not platform jargon. If Bryant said 'Ariel and Amber are interested in your space,' the proposal page heading should echo that framing, not say 'Incoming Proposals (2).' (4) Eliminate every element that exists for the platform's benefit but adds a question mark for the host: tracking IDs, internal status labels, system-generated timestamps that mean nothing to Drew.",
      "evidence": [
        {
          "source": "drew-call.txt, 00:40-00:52",
          "type": "host_call",
          "quote": "Which I've got potluck. Exactly. You think it was be too much? Uh, the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep.",
          "insight": "Drew confirms his listing in under 10 seconds through conversational shorthand. Bryant's question is self-evident — Drew doesn't think about what's being asked. The platform must achieve this same instant recognition: when Drew sees his listing page, it must say 'comfortable one bed, one bath — Chelsea' in a way that requires zero interpretation."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "It means that as far as is humanly possible, when I look at a Web page it should be self-evident. Obvious. Self-explanatory. I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "insight": "Krug's First Law is the governing principle. Every phase entry is a new page Drew encounters. Each one must pass this test independently — you cannot assume that passing the test on one screen carries forward to the next."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Glancing around, they should be able to point at the different areas of the page and say, 'Things I can do on this site!' 'Links to today's top stories!' 'Products this company sells!'",
          "insight": "The $25,000 Pyramid test: every phase entry screen must have clearly defined areas that Drew can name at a glance. If Drew can't play this game with a screen, the screen fails the self-evidence test."
        },
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Drew's response to the guarantee explanation is pure acceptance without interpretation. He didn't need to think about what Bryant said — it was self-evident in context. The platform must achieve this 'Okay. Okay. Alright.' response at every phase entry, not 'Hmm. What is this? Where do I go?'"
        }
      ],
      "priority": "high",
      "user_goal": "Instantly understand what I'm looking at and what I should do next, at every screen, without reading instructions or figuring out the interface.",
      "company_goal": "Eliminate the invisible dropout that occurs when hosts encounter a platform screen that makes them think, causing them to defer to texting Bryant instead of completing the action on-platform.",
      "time_budget": "2 seconds to scan and understand each phase entry screen. If the host hasn't 'gotten it' in 2 seconds, the screen has failed.",
      "anti_goals": [
        "DO NOT use page titles or headings that describe the system's internal concept rather than the user's task. 'Proposal Management' is a system concept. 'Ariel wants to stay at your Chelsea apartment' is the user's reality.",
        "DO NOT place instructions or explanatory text above the fold as a substitute for self-evident design. If the page needs instructions, the page needs redesigning.",
        "DO NOT assume that passing the self-evidence test once (e.g., at onboarding) carries forward. Each phase entry must independently pass the test.",
        "DO NOT add visual elements (badges, tooltips, help icons) to compensate for a page that isn't self-evident. These are bandaids that add question marks of their own."
      ],
      "success_metric": "5-second usability test: show a new host each phase entry screen for 5 seconds, then ask 'What is this page for?' and 'What would you do first?' Target: 90% of hosts answer both correctly without prompting."
    },
    {
      "id": "works-002",
      "type": "process_pattern",
      "title": "Design for Scanning, Not Reading, at Every Decision Point",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew scans Bryant's verbal output the same way Krug says users scan web pages: he picks out the parts that matter (price, guests, timeline) and ignores the rest (company name, vetting process mechanics). In the call, Bryant covers the guarantee in 23 seconds (03:44-04:18), and Drew absorbs only the conclusion ('I still get paid'). On the platform, the equivalent information will be presented as text, tables, and forms that Drew must read — not scan. Krug Ch. 2 establishes that 'people tend to spend very little time reading most Web pages' and instead scan for 'words or phrases that catch our eye.' But platform decision points (listing wizard steps, pricing fields, proposal details) are typically designed for reading: dense forms, paragraph explanations, multi-option dropdowns. Drew will not read them. He will scan for trigger words ($2,000, Chelsea, Ariel, 4 months) and ignore everything else. If the trigger words are buried in body text or formatted identically to non-essential text, Drew will miss them.",
      "solution": "Restructure every decision point as a scannable billboard, not a readable document. Following Krug Ch. 3: (1) Create a clear visual hierarchy where the most important information (the thing Drew needs to decide) is the most visually prominent element on the page — larger, bolder, or in a distinctive color. (2) Use trigger words Drew already knows from the call as scannable anchors: '$2,000,' 'Chelsea,' 'Ariel & Amber,' '4 months.' These should be visually distinct, not embedded in sentences. (3) Break dense information into clearly defined areas that Drew can scan independently — Krug's '$25,000 Pyramid' principle. A proposal page should have visually distinct zones: 'Who' (guest photo + name), 'When' (dates), 'How much' (total), 'What to do' (Accept/Decline). (4) Use progressive disclosure: show the scannable summary first, and let Drew tap to expand details only if he wants them. Most of the time, he won't.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for. There are usually large parts of the page that they don't even look at.",
          "insight": "This is how Drew will use every platform page. The call proves it: Drew ignores Bryant's company pitch and zeroes in on price, guests, and timeline. The platform must design for this scanning behavior, not against it."
        },
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment... Okay. Okay. Okay. Alright.",
          "insight": "Bryant delivers a dense 30-second pitch covering deposit doubling, payment guarantee, vetting, and income verification. Drew's response ('Okay. Okay. Okay. Alright.') shows he scanned for the conclusion — 'I get paid no matter what' — and accepted it. On the platform, this guarantee information must be equally scannable: a single bold statement ('Your rent is guaranteed'), not a paragraph explaining the mechanism."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "The more important something is, the more prominent it is... Things that are related logically are also related visually... Things are 'nested' visually to show what's part of what.",
          "insight": "Visual hierarchy is the mechanism that makes scanning work. Without it, Drew must read everything to find what matters. With it, the most important element on each page declares itself through size, weight, position, and contrast."
        },
        {
          "source": "drew-call.txt, 01:32-02:02",
          "type": "host_call",
          "quote": "both of them have primary residences in Connecticut, uh, but they both work in Manhattan, which is why they're looking for a place. So essentially they'd be using this space as a place to come back to, uh, after work.",
          "insight": "Bryant's guest summary is a scannable narrative: who (Ariel and Amber), where they live (Connecticut), why they need the space (Manhattan work), how they'll use it (weekday pied-a-terre). The proposal page must present these same four data points as the scannable headline, not a text block."
        }
      ],
      "priority": "high",
      "user_goal": "Find the information that matters to me (who, how long, how much) within seconds of seeing any page, without reading paragraphs or parsing tables.",
      "company_goal": "Increase the rate at which hosts complete actions on platform pages (accept proposals, publish listings, confirm pricing) by ensuring the essential information and primary action are scannable within 3 seconds.",
      "time_budget": "3 seconds to scan and identify the key information. 10 seconds to complete the primary action. If scanning takes longer, the visual hierarchy has failed.",
      "anti_goals": [
        "DO NOT present information as undifferentiated text blocks where all text is the same size, weight, and color. This forces reading, which Drew will not do.",
        "DO NOT rely on users reading explanatory text to understand what a field or option means. If it needs explanation, it needs a better name or a better visual treatment.",
        "DO NOT use data tables as the primary presentation format for proposals or lease terms. Tables are for comparison; Drew is not comparing — he is scanning for acceptance.",
        "DO NOT make secondary information (fee breakdowns, legal terms, system statuses) as visually prominent as primary information (guest name, duration, total rent)."
      ],
      "success_metric": "Heatmap analysis of platform pages: the host's first fixation point should land on the primary information (guest name for proposals, total rent for pricing) within 2 seconds. Target: 80% of hosts fixate on primary information first, not secondary elements."
    },
    {
      "id": "works-003",
      "type": "process_pattern",
      "title": "Satisficing-Safe Defaults Across All Input Steps",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "problem": "Drew is a textbook satisficer. He accepts every offer in the call without deliberation: the guarantee (04:18: 'Okay. Okay. Okay. Alright.'), the lease term (05:32: 'Okay. Okay. Sounds good.'), the next steps (05:50: 'Sounds good.'). Krug Ch. 2 establishes that users 'don't choose the best option — we choose the first reasonable option.' On the platform, this means Drew will accept defaults without examining them. If the listing wizard pre-populates a nightly rate derived from $2,000/month but rounds incorrectly, Drew will accept it. If the proposal page pre-selects a counter-offer template that doesn't match what Bryant discussed, Drew will accept it. Satisficing is efficient and correct when defaults are right. It produces silent errors when defaults are wrong. The danger is not dropout — it's a host who publishes a listing or accepts a proposal with incorrect terms because the defaults were close enough to not trigger scrutiny.",
      "solution": "Make every default the right answer for a satisficing user. (1) Pre-populate all fields with data already known from the phone call and prior phases. Drew's rent is $2,000/month — this should already be the default, not a blank field. His deposit is $1,000 — pre-filled. His listing title is 'comfortable one bed, one bath' — pre-filled from the agent's notes. (2) When defaults require derivation (e.g., nightly rate from monthly rent), show the derivation transparently: '$67/night (based on your $2,000/month rent).' If Drew is satisficing, at least he can verify the math at a glance. (3) For consequential decisions (lease terms, cancellation policies), use Krug's convention of making the recommended option visually prominent and labeling it as recommended — not just listing options equally. (4) Eliminate optional fields that create micro-decisions. Every 'optional' field is a satisficing trap: Drew will either skip it (potentially missing something important) or fill it mindlessly (adding noise). Make fields required with smart defaults, or remove them entirely.",
      "evidence": [
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Drew accepts the guarantee explanation — a complex financial arrangement involving doubled deposits and payment guarantees — with four words and zero follow-up questions. This is satisficing at its purest. On the platform, Drew will accept whatever the screen presents with the same level of non-scrutiny."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing. As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.",
          "insight": "Satisficing is not a flaw — it's the dominant strategy. The platform must design for it, not against it. Designing for it means making the first reasonable option the correct option."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew confirms his price in 3 seconds. On the platform, if the pricing field is pre-populated with $2,000/month, Drew will scan it, see the right number, and move on. If it's blank, Drew must type it — adding friction. If it shows a derived value ($67/night) without context, Drew may accept a wrong number."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "After all, why should I have to think about how I want to search? And even worse, why should I have to think about how the site's search engine wants me to phrase the question, as though it were some ornery troll guarding a bridge?",
          "insight": "Krug's Amazon example: Amazon eliminated the Author/Title/Keyword distinction and 'did whatever makes the most sense.' Applied to pricing: the platform should accept '$2,000/month' and derive everything else. Drew should never have to think about how the platform wants him to express his rent."
        }
      ],
      "priority": "high",
      "user_goal": "See my information already filled in correctly and confirm it quickly, rather than entering it from scratch or evaluating unfamiliar options.",
      "company_goal": "Reduce listing errors, pricing mismatches, and proposal misunderstandings caused by satisficing hosts who accept incorrect defaults without scrutiny.",
      "time_budget": "Each pre-populated field should take 2 seconds to verify (scan, recognize, move on). Total time for a fully pre-populated step: 15-30 seconds of scanning, not minutes of data entry.",
      "anti_goals": [
        "DO NOT present multiple options with equal visual weight when one option is clearly better or more common. The recommended default must be visually dominant.",
        "DO NOT use blank fields when data is available from prior phases, the phone call, or the agent's notes. A blank field punishes the satisficing user.",
        "DO NOT show derived values without showing the source. '$67/night' means nothing to Drew without '(from your $2,000/month rent)' — and the unsourced number becomes a silent error if the derivation is wrong.",
        "DO NOT add 'optional' fields to forms. They create satisficing traps — users either skip important fields or mindlessly fill irrelevant ones."
      ],
      "success_metric": "Default acceptance rate with correctness: percentage of hosts who accept pre-populated defaults AND whose published listings have zero data errors. Target: 85% of hosts accept defaults, and 95% of accepted defaults are correct."
    },
    {
      "id": "works-004",
      "type": "process_pattern",
      "title": "Convention-First Interaction for Every Platform Pattern",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew maps everything to conventions he already knows: monthly rent (not nightly rates), security deposits (not 'damage waivers'), tenant move-outs (not 'lease transitions'), cleaning (not 'turnover services'). Krug Ch. 3 states that 'conventions only become conventions if they work' and that 'designers are often reluctant to take advantage of them.' The Split Lease platform risks inventing new interaction patterns for processes Drew already knows how to do on other platforms. If Drew has listed on StreetEasy, he knows how a listing form works. If he's used Venmo, he knows how a payment confirmation looks. If he's used Airbnb, he knows how a booking request appears. Every deviation from these conventions adds a question mark. Krug warns: 'If you're not going to use an existing Web convention, you need to be sure that what you're replacing it with either (a) is so clear and self-explanatory that there's no learning curve, or (b) adds so much value that it's worth a small learning curve.' Most platform deviations meet neither threshold.",
      "solution": "Audit every platform interaction against the convention Drew would expect from the closest analog: (1) Listing creation should follow the convention of StreetEasy/Zillow listing forms — title, address, type, bedrooms, bathrooms, rent, photos. Same field order. Same field names. Same interaction patterns. If Drew has posted a listing before, this form should feel like doing it again, not learning something new. (2) Pricing should follow banking/payment conventions — monthly amount, clear breakdowns, dollar signs, decimals. Not custom sliders or rate calculators. (3) Proposals should follow Airbnb booking request conventions — guest photo, dates, message, Accept/Decline buttons. Drew has seen this pattern. Use it. (4) Payment confirmations should follow Venmo/banking conventions — date, amount, status, from whom. (5) Only deviate from conventions when the Split Lease model genuinely requires it (e.g., the guarantee concept has no direct conventional analog) — and when you do deviate, make the new pattern so self-explanatory that it needs no learning curve.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "If you're not going to use an existing Web convention, you need to be sure that what you're replacing it with either (a) is so clear and self-explanatory that there's no learning curve — so it's as good as a convention, or (b) adds so much value that it's worth a small learning curve.",
          "insight": "This is the convention test. Every Split Lease platform pattern must either use an existing convention or pass this two-part test. Most 'innovations' in the platform will fail both parts and should be replaced with conventions."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew's price is stated as a monthly rent — the universal convention for apartment listings. The platform must accept and display pricing in this convention. Forcing a nightly rate is a convention violation that adds a question mark."
        },
        {
          "source": "drew-call.txt, 02:57",
          "type": "host_call",
          "quote": "regarding security deposit or damage deposit. Is that something you charge? ... 1000.",
          "insight": "Drew uses standard landlord vocabulary: 'security deposit,' '$1,000.' The platform must use this same vocabulary, not 'damage waiver,' 'refundable guarantee,' or any other non-conventional term."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Faced with the prospect of using a convention, there's a great temptation for designers to reinvent the wheel instead, largely because they feel (not incorrectly) that they've been hired to do something new and different, and not the same old thing.",
          "insight": "This is the core risk: the Split Lease team may feel compelled to design a unique listing wizard, a novel pricing interface, a distinctive proposal flow. Krug warns that this temptation is usually wrong. Drew doesn't want new and different — he wants 'the same thing I've done before, but with guaranteed rent.'"
        }
      ],
      "priority": "high",
      "user_goal": "Use the platform the way I already use similar tools — same patterns, same vocabulary, same expectations — without learning a new system.",
      "company_goal": "Reduce the learning curve to near-zero for hosts who have used any real estate or rental platform before, thereby increasing first-session completion rates.",
      "time_budget": "Zero learning time for conventional patterns. If a host who has used StreetEasy or Airbnb needs more than 5 seconds to understand how a Split Lease form works, the convention has been violated.",
      "anti_goals": [
        "DO NOT rename conventional concepts to sound more 'branded.' 'Security deposit' is a convention. 'SplitShield Deposit' is a branded term that adds a question mark.",
        "DO NOT rearrange conventional field orders for aesthetic reasons. If every listing site puts bedrooms before bathrooms, Split Lease must do the same.",
        "DO NOT use custom interaction widgets (novel sliders, drag-to-set, gesture-based inputs) when standard form elements (text fields, dropdowns, checkboxes) follow convention.",
        "DO NOT innovate on layout patterns that are universally understood — Accept/Decline buttons go below the proposal summary, not in a sidebar or a popup."
      ],
      "success_metric": "First-time-success rate: percentage of hosts who complete a task (submit listing, accept proposal, confirm pricing) on their first attempt without using the back button, help, or contacting Bryant. Target: 75% first-time success for hosts who have used any rental platform before."
    },
    {
      "id": "works-005",
      "type": "process_pattern",
      "title": "Eliminate the Guided-to-Self-Service Cliff",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation"
      ],
      "problem": "Drew's entire experience is mediated by Bryant. The call is a guided conversation where Bryant asks questions, Drew answers, and Bryant confirms. Drew never asks 'what do I do next?' because Bryant always tells him. The call ends with Bryant promising to send information and agreements (05:01), maintaining the guided mode. Then Drew encounters the platform — and the guidance stops. This is the guided-to-self-service cliff: a sudden transition from a human who asks questions and confirms answers to a digital interface that presents forms and waits. Krug Ch. 2 describes this precisely: 'Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through.' Drew's muddling-through strategy will be based on his mental model of the call: 'the platform should ask me questions and confirm my answers, the way Bryant did.' If instead the platform presents a blank dashboard with navigation menus and waits for Drew to explore, it violates the mental model the call created.",
      "solution": "Design the post-call platform experience as a continuation of the call, not a separate system. (1) The first platform screen should mirror the call's conversational structure: present one question or confirmation at a time, in sequence, the way Bryant did. Instead of a listing wizard with 6 simultaneous steps visible, present step 1 as a single focused question ('Is this your Chelsea apartment?') with a confirmation button. (2) Use the agent's voice: the platform's microcopy should sound like Bryant. 'Let's confirm your place' not 'Create New Listing.' 'Ariel and Amber are interested — here's what they're proposing' not 'You have 1 new proposal.' (3) Pre-fill everything the call already covered. Drew should not re-enter his rent, his address, or his deposit. The platform should display what Bryant already captured and ask Drew to confirm, not re-enter. (4) Maintain a clear 'what happens next' indicator at every step — Drew is used to Bryant saying 'I'll send you...' and 'I'll get back to you with...' The platform must always show what comes next, not leave Drew on a completed step wondering what to do.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:01-05:18",
          "type": "host_call",
          "quote": "I can get back to you with more information on split lease as well as links to the agreements which are referenced. Um, and I think those about it, any other questions for me major?",
          "insight": "The call ends with Bryant maintaining the guide role: he will send information, he will share agreements, he asks if Drew has questions. Drew expects this guidance to continue. The platform must not break this expectation by switching to a self-service mode without warning."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.",
          "insight": "Drew's 'vaguely plausible story' about the platform will be: 'it should work like the phone call with Bryant — it asks me things, I answer, it confirms, we move on.' If the platform violates this story, Drew muddles through incorrectly or abandons."
        },
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "insight": "Drew's closing reveals impatience and a desire to be led. 'Can we maybe move on?' is a request for the next guided step, not an offer to self-navigate. The platform must continue this pacing — always showing the next step, never leaving Drew on a page without a clear forward path."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "We don't figure out how things work. We muddle through... very few people take the time to read instructions.",
          "insight": "Drew will not explore the platform. He will not read a 'Getting Started' guide. He will click the first thing that looks like what Bryant described and hope it works. The first thing must be the right thing."
        }
      ],
      "priority": "high",
      "user_goal": "Continue the experience Bryant started — being guided through the process step by step — without having to figure out a new system on my own.",
      "company_goal": "Prevent the post-call dropout that occurs when guided hosts encounter a self-service platform and defer to texting Bryant instead of using the platform, which creates agent bottlenecks and delays the listing-to-proposal pipeline.",
      "time_budget": "The transition from call to platform should feel like a continuation, not a restart. The host should complete their first platform action (confirming their listing details) within 60 seconds of clicking the link Bryant sends.",
      "anti_goals": [
        "DO NOT present a blank dashboard as the first platform experience. A dashboard is for returning users who know the system. Drew has never seen the system.",
        "DO NOT use 'Getting Started' guides, tutorial overlays, or onboarding tooltips as a substitute for a self-evident first screen. These are instructions, and Drew will not read them.",
        "DO NOT require Drew to navigate to find his listing. His listing should be the first thing he sees, pre-filled with the details from the call.",
        "DO NOT switch voice. If Bryant's call was warm and conversational, the platform's microcopy must match. 'Hey Drew, let's get your Chelsea place ready' not 'Complete Listing Setup.'"
      ],
      "success_metric": "Post-call platform activation rate: percentage of hosts who click the agent's follow-up link and complete at least one confirmation action on the platform within the same session. Target: 70% activation within 24 hours of the call."
    },
    {
      "id": "works-006",
      "type": "process_pattern",
      "title": "One-Click Actions for Pre-Decided Outcomes",
      "journey_phases": [
        "proposal_mgmt",
        "pricing",
        "retention"
      ],
      "problem": "Drew's call reveals that many platform 'decisions' are actually pre-decided by the time Drew encounters the platform. The price is $2,000/month (decided before the call). The guests are Ariel and Amber (accepted during the call). The term is 4 months with extension (agreed during the call). The deposit is $1,000 (established). Yet the platform presents these as open decisions requiring multi-step interaction: a pricing wizard with blank or editable fields, a proposal review with Accept/Decline/Counter options and details to evaluate, a lease term configurator. Krug Ch. 2 explains why this is wasteful: 'There's not much of a penalty for guessing wrong on a Web site is usually only a click or two of the Back button, making satisficing an effective strategy.' But there's a cost to making Drew re-decide things he's already decided: it introduces question marks ('Wait, should I reconsider? Is $2,000 still right? Should I counter?') that the phone call already resolved. The platform is creating artificial decision points for decisions that are already made.",
      "solution": "When the outcome is pre-decided (by the phone call, by prior confirmation, by obvious context), reduce the interaction to a single confirmation click. (1) If Bryant already discussed pricing and Drew confirmed $2,000/month, the pricing step should show '$2,000/month — confirmed on your call with Bryant' and a single 'Confirm' button. Not a form. Not a wizard step. A confirmation. (2) If Drew already accepted Ariel and Amber during the call, the proposal should arrive as 'Ariel & Amber — 4 months starting early March — $2,000/month — Confirm this proposal' with a single prominent button. The Counter and Decline options can exist but should be visually subordinate — they are edge cases, not the primary path. (3) If the lease is approaching renewal and Drew has expressed interest in extending, the renewal prompt should be 'Extend for another 4 months? [Yes, extend]' — not a form asking Drew to re-specify terms. (4) Distinguish between genuine decisions (where the host needs to evaluate options) and ceremonial confirmations (where the host is rubber-stamping something already decided). Design each accordingly.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew decides on 4 months with extension in 14 seconds of conversation. This decision is done. The platform should not reopen it as a multi-field form. It should present it as a confirmation: '4 months, March start, with option to extend — Confirm.'"
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Weighing options may not improve our chances. On poorly designed sites, putting effort into making the best choice doesn't really help. You're usually better off going with your first guess and using the Back button if it doesn't work out.",
          "insight": "Krug observes that forcing option-weighing on users who have already decided is pure friction. It does not improve outcomes — it just adds cognitive cost. The platform must distinguish between 'this is a real choice' and 'this is a formality.'"
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Even Bryant treats the price as a confirmation, not a negotiation: 'To confirm that would be...' The platform should use the same pattern — confirm what's known, don't re-ask."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand. The distractions may be slight but they add up.",
          "insight": "Each re-opened decision is an unnecessary question mark. Drew has already decided. Each 'Are you sure?' or 'Would you like to change?' adds cognitive load without adding value."
        }
      ],
      "priority": "medium",
      "user_goal": "Confirm what I've already decided with a single tap, without being forced to re-evaluate options I've already chosen.",
      "company_goal": "Accelerate the pipeline from call-to-published-listing and call-to-accepted-proposal by eliminating artificial decision points that slow pre-decided hosts.",
      "time_budget": "A pre-decided confirmation should take 5 seconds: scan the summary (3 sec), click Confirm (2 sec). If it takes longer, the platform is treating a confirmation as a decision.",
      "anti_goals": [
        "DO NOT present pre-decided items as open-ended forms with editable fields. Show them as read-only summaries with a Confirm button.",
        "DO NOT give Counter/Decline equal visual weight as Accept when the call has already established acceptance. Counter and Decline should be available but visually recessive.",
        "DO NOT add confirmation dialogs ('Are you sure?') to confirmations. A confirmation of a confirmation is the opposite of 'don't make me think.'",
        "DO NOT force the host to re-enter or re-specify terms that were already agreed upon in the call."
      ],
      "success_metric": "Time-to-confirmation for pre-decided actions: median time from page load to confirmation click. Target: under 10 seconds for proposals where terms were pre-discussed with the agent, under 5 seconds for pricing confirmations."
    }
  ]
}
### layer-2/communicates-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "communicates-001",
      "type": "info_architecture",
      "title": "Billboard Hierarchy for Every Phase Entry Screen",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew scans Bryant's verbal output and extracts only what matters — price ($2,000), guests (Ariel and Amber), timeline (4 months) — ignoring everything else. Krug Ch. 2 confirms this is universal: 'What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest.' The platform's phase entry screens currently treat all information as equally important — property details, system statuses, navigation labels, and action buttons share visual weight. When Drew arrives at any screen, his eye needs to land on the ONE thing that tells him 'this is what this page is about and this is what you do here.' If no element claims dominance, Drew must read instead of scan — which he will not do. He will either click something wrong (satisficing) or text Bryant (abandoning the platform).",
      "solution": "Structure every phase entry screen as a three-tier billboard hierarchy: (1) TIER 1 — The Anchor: A single primary element that answers 'What is this page about?' in Drew's language. This must be the largest, boldest element on the page. For proposals: 'Ariel & Amber want your Chelsea apartment.' For pricing: '$2,000/month — your rent.' For active lease: 'Ariel is staying through June.' (2) TIER 2 — The Decision: The primary action Drew needs to take, presented as a single prominent button or confirmation element directly below the anchor. For proposals: 'Accept this proposal.' For pricing: 'Confirm your rate.' (3) TIER 3 — The Details: Supporting information (fee breakdowns, lease terms, guest employment details) collapsed below the fold or in expandable sections. Drew can access it if he wants, but the billboard works without it. This hierarchy must be enforced through visual weight: Tier 1 gets 40% of visual attention (size, position, contrast), Tier 2 gets 35% (button prominence, whitespace isolation), Tier 3 gets 25% (smaller type, muted color, below fold).",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "The more important something is, the more prominent it is... Things that are related logically are also related visually... Things are 'nested' visually to show what's part of what.",
          "insight": "Krug's visual hierarchy principle provides the structural model. Drew's scanning behavior demands that the hierarchy be exaggerated, not subtle — the tier difference must be obvious at a glance, not after careful inspection."
        },
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment... Okay. Okay. Okay. Alright.",
          "insight": "Bryant delivers a multi-sentence guarantee explanation. Drew extracts one thing: 'I get paid.' The platform's guarantee display must put 'Your rent is guaranteed' at Tier 1 — not a paragraph explaining the mechanism. The mechanism is Tier 3 detail."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "We're thinking 'great literature' (or at least 'product brochure'), while the user's reality is much closer to 'billboard going by at 60 miles an hour.'",
          "insight": "The billboard metaphor defines the information density constraint. A billboard has one message, one image, one call to action. Platform screens must converge toward this density, not away from it."
        },
        {
          "source": "drew-call.txt, 00:45-00:52",
          "type": "host_call",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep.",
          "insight": "Drew identifies his listing in 7 seconds using three data points: bedrooms, bathrooms, neighborhood. The listing page's Tier 1 anchor should be exactly these three data points — not a system-generated listing ID or a generic 'Your Listing' heading."
        }
      ],
      "priority": "high",
      "hierarchy_principle": "Primary: the anchor statement (what this page is about, in the host's language). Secondary: the action button (what to do). Tertiary: supporting details (expandable). This order mirrors the phone call structure: Bryant states the topic, asks for confirmation, then provides details only if asked.",
      "disclosure_pattern": "Show the anchor and action immediately. Collapse details behind a 'See details' or 'How does this work?' link. Most hosts will never expand it — and that's correct behavior, not a failure.",
      "cognitive_load_constraint": "Maximum 3 data points at Tier 1 (e.g., guest name + duration + amount). Maximum 1 action at Tier 2. Tier 3 has no limit but must be collapsed by default.",
      "scan_order": [
        "Anchor statement (what is this about — guest name, listing name, payment amount)",
        "Primary action button (Confirm, Accept, Publish)",
        "Supporting detail links (expandable, below fold)"
      ],
      "exclude": [
        "System-generated IDs or reference numbers at Tier 1",
        "Fee calculation breakdowns above the fold",
        "Status timestamps that use system format (2026-02-12T19:29:00Z) instead of human format ('Today')",
        "Navigation breadcrumbs that compete with the anchor for visual dominance"
      ]
    },
    {
      "id": "communicates-002",
      "type": "info_architecture",
      "title": "Call-to-Screen Language Continuity",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt"
      ],
      "problem": "Drew's mental model is built entirely from Bryant's conversational vocabulary: 'Ariel and Amber,' 'interested in your space,' '4 months,' '$2,000 a month,' 'security deposit,' 'cleaning.' When Drew transitions to the platform, the information architecture must use these exact words as navigational anchors — because these are the words Drew is scanning for. Krug Ch. 2: 'Like Ginger, we tend to focus on words and phrases that seem to match (a) the task at hand or (b) our current or ongoing personal interests.' Drew's trigger words are the specific nouns and numbers from his call. If the platform uses different vocabulary — 'Incoming Proposals' instead of 'Ariel and Amber,' 'Monthly Rate' instead of '$2,000,' 'Lease Configuration' instead of '4 months' — Drew's scanner finds no matches. He sees 'blah blah GINGER blah blah' except there is no GINGER. The information is present but invisible because it's encoded in the wrong vocabulary.",
      "solution": "Build the information architecture's labeling system from the host's call vocabulary, not the platform's internal taxonomy. (1) Page headings must reference specific entities Drew discussed: 'Ariel & Amber's proposal for your Chelsea apartment' not 'Proposal #1247.' (2) Navigation labels must use landlord vocabulary: 'Your Apartment' not 'Listing,' 'Rent' not 'Rate Configuration,' 'Deposit' not 'Security Parameters.' (3) Status labels must use time-anchored human language: 'Move-in: early March' not 'Lease Start: 2026-03-01.' (4) The information architecture must define a vocabulary mapping table: for each platform concept, the equivalent term the agent used in the call. This mapping drives all labels, headings, button text, and confirmation messages. (5) When a platform concept has no call equivalent (e.g., 'lease style'), the IA must flag it as a high-risk label that requires additional context or inline explanation — because Drew has no mental hook for it.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Take names of things, for example. Typical culprits are cute or clever names, marketing-induced names, company-specific names, and unfamiliar technical names.",
          "insight": "Krug identifies naming as a primary source of question marks. Every platform label that doesn't match Drew's call vocabulary is a 'company-specific name' from Drew's perspective — he didn't hear it from Bryant, so it requires translation."
        },
        {
          "source": "drew-call.txt, 01:32-02:02",
          "type": "host_call",
          "quote": "Ariel and Amber are both flexible... both have primary residences in Connecticut... they both work in Manhattan... essentially they'd be using this space as a place to come back to after work.",
          "insight": "Bryant introduces the guests by name, location, occupation, and usage pattern — in natural language. The proposal page must mirror this exact structure and vocabulary. 'Ariel & Amber — Connecticut residents, work in Manhattan, need a weekday pied-à-terre' not 'Guest Profile: Verified, Employment: Confirmed, Purpose: Part-time occupancy.'"
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "For instance, suppose a friend tells me that XYZ Corp is looking to hire someone with my exact qualifications... the name they've chosen for their job listings section makes a difference. Jobs! [Click] vs. Employment Opportunities [Hmm. Could be Jobs.]",
          "insight": "The naming spectrum from 'obvious' to 'requires thought' maps directly to the call-to-screen vocabulary gap. 'Ariel & Amber' is 'Jobs!' — instantly recognizable. 'Proposal #1247' is 'Employment Opportunities' — requires translation."
        },
        {
          "source": "drew-call.txt, 02:57",
          "type": "host_call",
          "quote": "regarding security deposit or damage deposit. Is that something you charge? ... 1000.",
          "insight": "Bryant uses 'security deposit' — the universal landlord term. Drew responds instantly. If the platform labels this 'Refundable Guarantee' or 'Damage Protection,' Drew must translate — adding a question mark where the call had none."
        }
      ],
      "priority": "high",
      "hierarchy_principle": "Primary: entity names from the call (guest names, property nickname, dollar amounts). Secondary: action verbs from the call's implicit flow ('confirm,' 'send photos,' 'review'). Tertiary: platform-specific concepts that have no call equivalent — these must be introduced with inline context.",
      "disclosure_pattern": "Labels and headings use call vocabulary immediately — no progressive disclosure needed for vocabulary itself. Platform-specific concepts that have no call analog should be introduced with a one-line parenthetical explanation on first encounter only: 'Lease Style (how you want to share your space — by the night, by the week, etc.)'",
      "cognitive_load_constraint": "Maximum 1 unfamiliar term per screen. If a screen introduces a platform concept Drew has never heard, it must be the only new concept on that screen — everything else must be recognizable from the call.",
      "scan_order": [
        "Guest names or property name (the specific entities Drew discussed)",
        "Dollar amounts ($2,000, $1,000 — numbers Drew already knows)",
        "Time references (4 months, early March — timeline Drew already agreed to)"
      ],
      "exclude": [
        "Internal system IDs as labels (Proposal #1247, Listing #SL-2026-0042)",
        "Platform jargon without call-equivalent context ('Lease Style,' 'Rate Configuration,' 'Turnover Window')",
        "Abbreviations the host hasn't seen before (DTI, LTV, ADR)",
        "Generic greetings that waste the heading slot ('Welcome to your dashboard!' instead of 'Your Chelsea apartment')"
      ]
    },
    {
      "id": "communicates-003",
      "type": "info_architecture",
      "title": "Progressive Disclosure by Decision Readiness",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "The Drew call reveals a strict information sequence: Bryant provides exactly the information Drew needs at each point — guest identity first (01:32), then usage pattern (01:45), then flexibility (02:02), then guarantee (03:44), then next steps (05:01). He never front-loads the guarantee before the guest context, never mentions lease terms before Drew accepts the guests conceptually. This sequencing is not accidental — it follows Drew's decision tree. Drew cannot evaluate a guarantee until he knows who the guests are. He cannot agree to terms until he trusts the guarantee. Each piece of information prepares the ground for the next. On the platform, this natural sequencing is destroyed. Dashboard pages show everything at once: property stats, pending proposals, payment history, messages, lease status. This forces Drew to parse a visual field with no inherent decision sequence — the information equivalent of reading a dictionary instead of a story.",
      "solution": "Structure information disclosure around the host's decision tree, not the platform's data model. (1) Define the host's decision sequence for each phase. For proposal review: 'Who are these guests?' → 'What do they want?' → 'What do I earn?' → 'Should I accept?' Each question maps to a disclosure stage. (2) Present information in decision-tree order: the answer to question 1 is immediately visible; the answer to question 2 is visible only after question 1 is answered (or acknowledged via scroll/click); question 3 follows from question 2. (3) Use spatial sequencing (top-to-bottom, left-to-right) to enforce the decision tree. The most upstream question lives at the top of the page. Downstream questions live below. (4) For the listing wizard, apply the same principle across steps: Step 1 (space basics) answers 'What is this place?' Step 2 (features) answers 'What's special about it?' Step 3 (pricing) answers 'What will I earn?' Each step's disclosure is gated on the prior step's completion. (5) Never show information that belongs to a downstream decision point alongside an upstream one — it creates false simultaneity that forces comparison when sequential processing is more natural.",
      "evidence": [
        {
          "source": "drew-call.txt, 01:32-02:22",
          "type": "host_call",
          "quote": "Ariel and Amber are both flexible... both have primary residences in Connecticut... they both work in Manhattan... they'd be using this space as a place to come back to... they can really start, have a lot of flexibility when they could start... ideally they want to start early March.",
          "insight": "Bryant structures information in decision-tree order: identity → lifestyle → need → timeline → flexibility. Each piece prepares the next. Drew processes sequentially — he doesn't ask about timeline until he understands the guests. The platform must mirror this sequence."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Dividing the page into clearly defined areas is important because it allows users to decide quickly which areas of the page to focus on and which areas they can safely ignore.",
          "insight": "Krug's clearly-defined-areas principle supports decision-tree disclosure: each area of the page corresponds to one decision question. Drew can focus on the current question's area and safely ignore downstream areas until he's ready."
        },
        {
          "source": "drew-call.txt, 03:17-04:18",
          "type": "host_call",
          "quote": "I wanted to mention as well, so I know I mentioned Ariel and Amber... split lease doubled the deposit... guarantees payments to you... Okay. Okay. Okay. Alright.",
          "insight": "The guarantee information arrives AFTER Drew has accepted the guests conceptually (he hasn't objected). Bryant sequences trust information after acceptance because the guarantee only matters if Drew is already leaning yes. Showing the guarantee before the guest introduction would be premature — Drew can't evaluate a guarantee for guests he doesn't know."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.",
          "insight": "Satisficing means Drew will act on the first piece of information that seems sufficient. If financial details appear before guest identity, Drew may fixate on the money and skip the guest context entirely — making a poorly-informed satisficing decision. The disclosure order determines the quality of the satisficing outcome."
        }
      ],
      "priority": "high",
      "hierarchy_principle": "Primary: the upstream question in the decision tree (the thing that must be understood before anything else makes sense). Secondary: the midstream question (the thing that qualifies the upstream answer). Tertiary: the downstream question (the thing that only matters after the first two are resolved). For proposals: Primary = who, Secondary = what they want, Tertiary = financial terms.",
      "disclosure_pattern": "Vertical cascade: each decision stage occupies a full-width section. Stages below the current focus are either collapsed or muted. As the host scrolls or clicks 'Continue,' the next stage becomes active. This mirrors Bryant's sequential reveal in the call — one topic at a time, in order.",
      "cognitive_load_constraint": "Maximum 1 decision question per viewport. The host should never need to hold two unresolved questions in working memory simultaneously. If a screen shows both 'who are these guests?' and 'what will I earn?' at the same time, cognitive load doubles.",
      "scan_order": [
        "Decision question 1: the upstream anchor (guest identity for proposals, space basics for listings)",
        "Decision question 2: the qualifying detail (guest need/timeline for proposals, features for listings)",
        "Decision question 3: the downstream resolution (financial terms for proposals, pricing for listings)"
      ],
      "exclude": [
        "Financial terms before guest context on proposal pages",
        "Pricing breakdown before space description on listing pages",
        "Lease legalese before the host has accepted the basic premise",
        "Platform metrics (response rate, listing views) during a decision flow — these are retrospective data, not decision inputs"
      ]
    },
    {
      "id": "communicates-004",
      "type": "info_architecture",
      "title": "Clearly Defined Areas via the $25,000 Pyramid Test",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Krug describes the $25,000 Pyramid test: a user should be able to point at any area of a page and name what it is — 'Things I can do on this site!' 'Products this company sells!' Drew's phone call had implicit 'areas' defined by topic transitions: property confirmation (00:40-01:03), availability (01:14-01:25), guest introduction (01:32-02:22), guarantee explanation (03:17-04:18), photos (04:21-04:46), terms (05:18-05:32). Each topic was a clearly defined conversational area with a clear boundary. On the platform, information often bleeds across areas: a proposal card might mix guest identity, financial terms, status labels, and action buttons in a single visual unit with no clear internal boundaries. Drew cannot play the Pyramid game — he can't point at a section and say 'that's who the guests are' because guest data is interleaved with lease data and platform chrome.",
      "solution": "Enforce clear area boundaries on every page using visual separation (whitespace, dividers, background color changes) and area labels (section headings that name the area's content). (1) Every page must pass the Pyramid test: show it to someone for 5 seconds, then ask them to name the areas. If they can't, the boundaries are too weak. (2) For proposal pages, define 4 areas: 'The Guests' (photo, name, background), 'The Proposal' (dates, duration, usage pattern), 'Your Earnings' (monthly rent, total, guarantee), 'Your Decision' (Accept, Counter, Decline buttons). Each area has a visible boundary and a heading. (3) For the listing wizard, each step is one area — never show multiple wizard steps on the same screen. (4) For the active lease dashboard, define areas by the host's recurring questions: 'Who's staying' (guest status), 'Am I getting paid' (payment status), 'What's coming up' (upcoming dates/events). (5) Area boundaries must be maintained even on mobile — stacking areas vertically with clear headings and generous whitespace between them.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Glancing around, they should be able to point at the different areas of the page and say, 'Things I can do on this site!' 'Links to today's top stories!' 'Products this company sells!' 'Things they're eager to sell me!' 'Navigation to get to the rest of the site!'",
          "insight": "The Pyramid test is the validation criterion. Any page that fails this test has an information architecture problem — information is not organized into areas that a scanning user can identify and navigate."
        },
        {
          "source": "drew-call.txt, 01:32-04:18",
          "type": "host_call",
          "quote": "[01:32] Ariel and Amber are both flexible... [03:17] I wanted to mention as well... split lease doubled the deposit... [04:21] one more question I had was about pictures...",
          "insight": "Bryant's call has clear topic transitions — each marked by a verbal signal ('I wanted to mention,' 'one more question'). These transitions define conversational areas. The platform must create equally clear visual transitions between content areas."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Several of the initial eye-tracking studies of Web page scanning suggest that users decide very quickly which parts of the page are likely to have useful information and then almost never look at the other parts — almost as though they weren't there.",
          "insight": "Drew will visually amputate sections of the page that don't look relevant. If the section boundaries are clear, he amputates correctly (ignoring areas that truly don't matter right now). If boundaries are unclear, he may amputate the wrong section — cutting off the action area because it blended into the details area."
        },
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend.",
          "insight": "Lease terms form their own conversational area in the call — Bryant raises it as a distinct topic after the guarantee area is closed. On the platform, lease terms must be visually separated from the guarantee and from guest information. Mixing them forces Drew to parse a composite that the call kept separate."
        }
      ],
      "priority": "high",
      "hierarchy_principle": "Primary: areas that answer the host's current question (what the page is about). Secondary: areas that provide supporting context (details the host may want). Tertiary: areas that enable navigation to other parts of the platform (secondary nav, footer links). Each area must be visually self-contained — a host should be able to screenshot any single area and it would make sense on its own.",
      "disclosure_pattern": "All areas are visible simultaneously (unlike progressive disclosure which hides downstream content). But the visual weight of each area signals priority: the primary area has a larger heading, more whitespace, and stronger contrast. Secondary areas are visually recessive. This allows Drew to scan the whole page and quickly identify which area to focus on.",
      "cognitive_load_constraint": "Maximum 4 areas per page. Each area must be nameable in 3 words or fewer ('The Guests,' 'Your Earnings,' 'Your Decision,' 'Lease Terms'). If an area needs more than 3 words to name, it contains multiple concepts and should be split.",
      "scan_order": [
        "Primary area (the reason the host came to this page — guest identity on proposals, listing details on listings, payment status on dashboard)",
        "Action area (what the host can do — Accept/Confirm buttons, isolated in their own area)",
        "Supporting areas (details, history, secondary information — visually recessive)"
      ],
      "exclude": [
        "Mixed-concept areas that combine guest data with financial data with action buttons in a single undifferentiated card",
        "Navigation chrome that visually competes with content areas for attention",
        "Footer areas that contain important information buried below the natural scan termination point",
        "Interstitial elements (banners, alerts, promotional callouts) that break area boundaries"
      ]
    },
    {
      "id": "communicates-005",
      "type": "info_architecture",
      "title": "Clickability as Information Signal",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "problem": "Krug Ch. 3 devotes an entire section to the danger of unclear clickability: 'it's important to make it obvious what's clickable and what's not... when you force users to think about something that should be mindless like what's clickable, you're squandering the limited reservoir of patience and goodwill.' Drew's call has implicit 'clickability' — every question Bryant asks is an invitation to respond (a verbal affordance). 'Is that right?' is clickable. 'I can get back to you' is informational. The distinction is always obvious. On the platform, the distinction between interactive and informational elements is often ambiguous: text links look like headings, buttons look like labels, cards look like they might be clickable but aren't. Each ambiguity is a micro question mark. Drew, as a satisficing scanner, will click the first thing that looks clickable — and if that thing is actually a label or a section heading styled like a link, Drew has been misdirected. The information architecture must define clickability as an information signal: interactive elements signal 'you can act here,' and informational elements signal 'you can read here.' The two signals must never be confused.",
      "solution": "Establish a strict clickability vocabulary in the information architecture: (1) Interactive elements (buttons, links, form fields) use a consistent visual language — a specific color, a specific shape (rounded rectangle for buttons, underline for links), and a specific position (action areas only, not embedded in body text unless clearly styled as links). (2) Informational elements (headings, labels, body text, data displays) use a different visual language — no underlines, no button shapes, no hover effects. (3) The clickability signal must be unambiguous even without color (for accessibility) — interactive elements should be distinguishable by shape, position, and typography alone. (4) Cards and tiles must either be entirely clickable (with a clear hover state and cursor change) or entirely informational (with no hover state). Half-clickable cards (where clicking the title opens details but clicking the body does nothing) create maximum ambiguity. (5) On the proposal page, the Accept/Decline/Counter buttons must be the only clickable elements in the action area. Guest names and financial details are informational — they inform the decision but are not actions themselves.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Since a large part of what people are doing on the Web is looking for the next thing to click, it's important to make it obvious what's clickable and what's not.",
          "insight": "Drew's scanning behavior is search-for-the-next-click behavior. The information architecture must ensure that the 'next click' is always the right click — the primary action for the current phase."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "On Senator Orrin Hatch's Home page... it wasn't clear whether everything was clickable, or nothing was. There were 18 links on the page, but only two of them invited you to click by their appearance.",
          "insight": "Krug's Hatch example is a direct warning: when all text is colored, no text signals clickability. Applied to the Split Lease platform: if the design uses purple (the brand color) for both interactive and informational text, Drew cannot distinguish them by scanning."
        },
        {
          "source": "drew-call.txt, 05:38-05:50",
          "type": "host_call",
          "quote": "if you have any questions for me, you can feel free to text me or email me... Sounds good. Anything else for me? Drew",
          "insight": "Bryant explicitly offers two interactive options (text me, email me) at the call's close. The affordance is verbal but unambiguous — Drew knows he can 'click' on either option. The platform must be equally unambiguous about what Drew can interact with."
        },
        {
          "source": "drew-call.txt, 04:21-04:38",
          "type": "host_call",
          "quote": "one more question I had was about pictures of the space and wondered if you had any more... Yes. I have more pictures and I can send you.",
          "insight": "Bryant asks for photos — a clear call to action. Drew responds immediately because the 'clickability' of the request is obvious. On the platform, the photo upload prompt must have equally obvious clickability — a prominent upload button, not a subtle text link saying 'Add photos.'"
        }
      ],
      "priority": "medium",
      "hierarchy_principle": "Primary: the one action Drew should take now (Accept, Confirm, Upload — a single prominent button). Secondary: alternative actions (Counter, Edit, Skip — visually recessive buttons or text links). Tertiary: navigational actions (Back, Help, Contact Agent — minimal visual weight). Informational elements have NO interactive signal — they sit outside the clickability hierarchy entirely.",
      "disclosure_pattern": "Clickable elements are always visible — never hidden behind hover states, dropdown menus, or contextual reveals. Drew must be able to identify all possible actions on a page within a 3-second scan without moving his cursor. Progressive disclosure applies to information, not to actions.",
      "cognitive_load_constraint": "Maximum 3 clickable elements per clearly defined area. Maximum 1 primary action per page. If more than 3 elements are clickable in one area, Drew must choose between them — which violates satisficing (he wants the first reasonable option, not a menu).",
      "scan_order": [
        "Primary action button (the one thing Drew should click — largest, most prominent, highest contrast)",
        "Alternative action buttons (visually subordinate — smaller, lighter, or styled as text links)",
        "Navigational elements (peripherally located — top nav, sidebar, or footer)"
      ],
      "exclude": [
        "Text styled as links when it's not interactive (colored text that looks clickable but isn't)",
        "Half-clickable cards where only part of the card is interactive",
        "Hover-only affordances that require cursor exploration to discover",
        "Action buttons embedded within body text paragraphs where they compete with reading flow"
      ]
    },
    {
      "id": "communicates-006",
      "type": "info_architecture",
      "title": "Confirmation-First Architecture for Pre-Decided Information",
      "journey_phases": [
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "problem": "Drew's call reveals that most 'decisions' on the platform are actually confirmations of decisions already made. The price ($2,000/month) was decided before the call. The guests (Ariel and Amber) were accepted during the call. The term (4 months with extension) was agreed in 14 seconds. Yet the platform's information architecture treats these as open decisions: editable fields, option selectors, multi-step wizards. This architectural mismatch has an information design consequence: the page communicates 'you need to decide something' when it should communicate 'here's what was agreed — confirm it.' The information hierarchy is wrong: open-decision pages put options first and confirmation second. Pre-decided pages should put the agreed outcome first and editing second. Krug Ch. 2: 'Weighing options may not improve our chances... You're usually better off going with your first guess.' Drew's 'first guess' is what Bryant already told him. The information architecture should reinforce this, not undermine it.",
      "solution": "Create a distinct information architecture pattern for pre-decided outcomes versus genuine decisions. (1) Pre-decided pattern: Present information as a summary statement ('$2,000/month, 4 months, starting March'), not as editable fields. Place a single 'Confirm' button below the summary. Place an 'Edit' or 'Change' link in Tier 3 — available but not competing for attention. The visual language should communicate 'this is settled' — calm, clean, no active form elements. (2) Genuine decision pattern: Present options with visual differentiation, recommended default highlighted, comparison supported. Action buttons offer real choices (Option A / Option B). The visual language should communicate 'you need to choose' — active form elements, contrasting options. (3) The information architecture must classify every platform interaction as either confirmation or decision during the design phase. The classification should be based on what was discussed in the agent call. If the agent covered it, it's a confirmation. If it's new to the host, it's a decision. (4) The confirmation pattern should feel like signing a letter, not filling out a form.",
      "evidence": [
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Even Bryant uses confirmation architecture verbally: 'To confirm that would be...' followed by Drew's 'That's right.' The platform should use identical architecture: present the known value, ask for confirmation. Not: present a blank field, ask for input."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Weighing options may not improve our chances. On poorly designed sites, putting effort into making the best choice doesn't really help. You're usually better off going with your first guess and using the Back button if it doesn't work out.",
          "insight": "Krug observes that option-weighing is often wasted effort. For pre-decided outcomes, it's definitionally wasted — Drew has already decided. The IA must not force Drew into a weighing architecture when a confirmation architecture is appropriate."
        },
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "The lease term decision takes 14 seconds and ends with 'Sounds good.' The platform should present this as a confirmation summary ('4 months, with option to extend — Confirm'), not as a lease configuration wizard with dropdowns for duration, start date, and renewal terms."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand. The distractions may be slight but they add up.",
          "insight": "An editable field where a confirmation statement should be is a question mark: 'Should I change this? Is this right? Can I edit this?' The confirmation pattern eliminates these question marks by presenting the answer, not the question."
        }
      ],
      "priority": "medium",
      "hierarchy_principle": "Primary: the agreed outcome stated as fact ('$2,000/month — your Chelsea apartment'). Secondary: the confirmation action ('Confirm' button). Tertiary: the edit escape hatch ('Need to change something?' text link). This inverts the typical form hierarchy where input fields are primary and submit buttons are secondary.",
      "disclosure_pattern": "Show the pre-decided outcome immediately as a read-only summary. The Confirm button is immediately accessible. The Edit option is hidden behind a text link or requires a deliberate secondary action (tap 'Change' → fields become editable). This makes confirmation the path of least resistance and editing the path of deliberate effort.",
      "cognitive_load_constraint": "Zero decisions required for the confirmation path. The host reads a summary and clicks one button. Cognitive load should be equivalent to signing a receipt — verify, confirm, done. If the confirmation path requires more than 5 seconds, the summary is too complex.",
      "scan_order": [
        "Summary statement (the pre-decided outcome in human language)",
        "Confirm button (single, prominent, no competing options)",
        "Edit link (visually subordinate, below the confirm button)"
      ],
      "exclude": [
        "Editable form fields for values already agreed upon in the call",
        "Multiple action buttons with equal visual weight (Accept / Counter / Decline) when the outcome is pre-decided — Counter and Decline should be visually recessive",
        "Comparison views that imply the host should evaluate alternatives to the agreed outcome",
        "Confirmation dialogs ('Are you sure?') that turn a single confirmation into a double confirmation"
      ]
    },
    {
      "id": "communicates-007",
      "type": "info_architecture",
      "title": "Mindless Choices Over Complex Menus",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "Krug Ch. 4 introduces the principle that 'users like mindless choices' — given the option between one complex choice and three simple sequential choices, users prefer the simple ones. Drew's call embodies this: Bryant breaks the conversation into a series of single-topic exchanges (property confirmation → availability → guests → guarantee → photos → terms), each requiring a single, simple response from Drew. The platform's listing wizard, by contrast, presents multi-field forms with interdependent options. 'Lease style' requires understanding the difference between nightly, weekly, and monthly — a complex choice. 'Amenities' presents a checklist of 20+ items — a combinatorial choice. 'Pricing' may ask for base rate plus cleaning fee plus security deposit — a multi-variable choice. Each complex choice slows Drew's scanning and forces System 2 engagement. Krug's insight is that breaking complex choices into sequences of simple ones eliminates the cognitive burden of holding multiple variables in working memory simultaneously.",
      "solution": "Decompose every multi-variable decision into a sequence of binary or near-binary choices. (1) For lease style: instead of presenting 3+ options with paragraphs of explanation, ask one question at a time. 'Do guests stay overnight? [Yes / No]' → if Yes: 'How often? [A few nights a week / Full time]' → derive lease style from answers. Drew never sees the word 'lease style.' (2) For amenities: instead of a 20-item checklist, show the 5 most common amenities as pre-selected defaults and ask 'Anything else?' with an expandable list. Drew confirms 5 defaults in 2 seconds instead of evaluating 20 checkboxes. (3) For pricing: show the pre-populated monthly rate and ask 'Is this right? [Yes / Change it].' No multi-field calculator. (4) The information architecture principle is: each screen presents one choice with 2-3 options. The cumulative effect of simple sequential choices is the same outcome as one complex multi-field form, but with dramatically lower cognitive cost per step.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 4 (referenced in TOC)",
          "type": "book",
          "quote": "Animal, vegetable, or mineral? Why users like mindless choices.",
          "insight": "Krug's entire Chapter 4 argues that users prefer simple, low-stakes choices in sequence over complex, high-stakes choices all at once. The listing wizard must embrace this principle: each step should feel like answering 'Animal, vegetable, or mineral?' not 'Describe your space in detail.'"
        },
        {
          "source": "drew-call.txt, 01:03-01:14",
          "type": "host_call",
          "quote": "And this is an entire apartment, is that right? They had found one bedroom, one bath.",
          "insight": "Bryant asks a yes/no question: 'Is this an entire apartment?' Drew confirms. This is a mindless choice — no deliberation needed. The listing wizard should ask the same kind of question: 'Is this a whole apartment? [Yes / No]' not 'Select property type: Entire apartment / Private room / Shared room / Studio / ...'"
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Amazon.com, on the other hand, doesn't even mention the Author-Title-Keyword distinction. They just look at what you type and do whatever makes the most sense.",
          "insight": "Amazon eliminated the complex choice (search type) entirely. The platform should do the same where possible — derive the answer from context rather than asking the question. If Drew has 1 bedroom and 1 bathroom, the platform already knows the unit type. Don't ask."
        },
        {
          "source": "drew-call.txt, 02:57-03:03",
          "type": "host_call",
          "quote": "regarding security deposit or damage deposit. Is that something you charge? ... 1000.",
          "insight": "Bryant asks a binary question (do you charge one?) then a single-value question (how much?). Two mindless choices replace what could be a complex form section with deposit type selection, amount field, refund policy dropdown, and damage waiver options."
        }
      ],
      "priority": "medium",
      "hierarchy_principle": "Primary: the single question being asked (one question per screen or section). Secondary: the 2-3 answer options (presented as large, easy-to-tap choices, not small radio buttons). Tertiary: context that helps the host choose (a one-line explanation under each option, not a paragraph). The question must be answerable without reading the context — the context is insurance, not instruction.",
      "disclosure_pattern": "Sequential, not simultaneous. Present one question at a time. After the host answers, animate forward to the next question. The sequence should feel like a conversation, not a form — mirroring how Bryant guided Drew through topics one at a time.",
      "cognitive_load_constraint": "Maximum 3 options per choice. If a decision has more than 3 options, either split it into two sequential choices (each with 2-3 options) or reduce options by providing a smart default and letting the host override only if needed. Zero choices should require the host to hold information from a prior choice in working memory.",
      "scan_order": [
        "The question itself (what am I being asked?)",
        "The options (what can I choose?)",
        "The context (optional — helps me choose if I'm unsure)"
      ],
      "exclude": [
        "Multi-field forms where multiple variables are edited simultaneously",
        "Dropdown menus with more than 5 items (these require scrolling and scanning within the dropdown)",
        "Checkboxes presented as long undifferentiated lists (break into categories or use defaults)",
        "Conditional fields that appear or disappear based on prior selections (this creates uncertainty — 'did I cause that? should I change my answer?')"
      ]
    }
  ]
}
### layer-3/looks-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "looks-001",
      "type": "visual_pattern",
      "title": "Billboard Visual Hierarchy Through Weight Contrast",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew scans Bryant's verbal output and extracts only trigger words — $2,000, Chelsea, Ariel, 4 months — ignoring everything else. Krug Ch. 3 establishes that pages must function as billboards at 60 mph. But billboards work through extreme visual weight contrast: one element dominates, everything else recedes. Platform screens that distribute visual weight evenly across headings, labels, data fields, and buttons force Drew to read instead of scan. When all text is the same size, weight, and color, nothing declares itself as the anchor — and Drew's eye wanders without landing. The visual hierarchy must create a 'loudness' gap between the anchor element and everything else that is large enough to guide a scanning eye in under 2 seconds.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "The more important something is, the more prominent it is... Things that are related logically are also related visually... Things are 'nested' visually to show what's part of what.",
          "insight": "Krug's three traits of visual hierarchy provide the structural framework. But the key insight is that prominence must be exaggerated, not subtle — the difference between Tier 1 and Tier 2 must be visible at billboard speed, not after careful inspection."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "We're thinking 'great literature' (or at least 'product brochure'), while the user's reality is much closer to 'billboard going by at 60 miles an hour.'",
          "insight": "The billboard metaphor defines the required contrast ratio between visual tiers. A billboard uses one font size for the headline and dramatically smaller text for everything else. Platform screens must mirror this ratio."
        },
        {
          "source": "drew-call.txt, 00:45-00:52",
          "type": "host_call",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep.",
          "insight": "Drew identifies his listing through three trigger words in 7 seconds. The listing page must make these three data points — bedrooms, bathrooms, neighborhood — the visually loudest elements, not subordinate labels competing with system IDs or navigation chrome."
        },
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you... Okay. Okay. Okay. Alright.",
          "insight": "Drew extracts one conclusion from Bryant's multi-sentence guarantee pitch: 'I get paid.' The visual hierarchy must put 'Your rent is guaranteed' at maximum visual weight — not a paragraph explaining the mechanism in the same font size as the conclusion."
        }
      ],
      "priority": "high",
      "tokens": {
        "colors": [
          "--primary-purple for Tier 1 anchor headings",
          "--text-dark for Tier 2 action labels",
          "--text-gray for Tier 3 supporting details"
        ],
        "typography": [
          "Instrument Serif (--font-heading mapped to Instrument Serif for anchors) at 28-36px / bold for Tier 1 anchors",
          "Inter (--font-inter) at 16px / semibold for Tier 2 action labels",
          "Inter at 14px / normal for Tier 3 supporting text"
        ],
        "spacing": [
          "--spacing-4xl (32px) below Tier 1 anchor to create breathing room before Tier 2",
          "--spacing-2xl (24px) between Tier 2 and Tier 3",
          "--spacing-lg (16px) between items within the same tier"
        ],
        "new_tokens_needed": [
          "A heading scale specifically for anchor statements — current --text-2xl (28px) to --text-4xl (36px) range exists but needs explicit pairing with Instrument Serif for the billboard anchor pattern, which is not codified in the style guide"
        ]
      },
      "contrast_requirements": "Tier 1 anchor (--primary-purple #31135D on --bg-white #ffffff) achieves 13.5:1 contrast ratio — exceeds WCAG AAA. Tier 3 supporting text (--text-gray #5A6370 proposed, or current #6b7280) must maintain at least 4.5:1 on white for WCAG AA body text compliance.",
      "visual_hierarchy_rule": "The Tier 1 anchor must occupy at least 2x the font size of Tier 3 text and use the serif typeface (Instrument Serif) to create a typographic break that signals 'this is the headline, not more body text.' The eye should land on the anchor within 1 second of page load without any animation or motion — pure typographic weight does the work.",
      "brand_alignment": "Taste model specifies 'Serif for personality (headlines, brand)' and 'Confident, not flashy.' The billboard hierarchy uses Instrument Serif at large sizes for the anchor — delivering personality and confidence through scale and typeface choice rather than decoration or animation. The warm-neutral background (--bg) ensures the anchor headline pops without harsh contrast."
    },
    {
      "id": "looks-002",
      "type": "visual_pattern",
      "title": "Clickability Signaling Through Shape and Color Isolation",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "problem": "Krug Ch. 3 warns that unclear clickability erodes confidence: 'when you force users to think about something that should be mindless like what's clickable, you're squandering the limited reservoir of patience and goodwill.' Drew's trust is held by Bryant, not the platform. Every moment Drew spends wondering 'is this clickable?' is a moment he considers texting Bryant instead. The Orrin Hatch example — where all text was colored so no text signaled clickability — maps directly to the Split Lease risk: the purple brand palette uses --secondary-purple for both interactive elements (buttons, links) and informational emphasis (headings, badges). If purple means both 'click me' and 'I'm important but not interactive,' Drew cannot distinguish actions from decorations by scanning. The visual system must create an unambiguous mapping: one visual treatment means 'this is interactive,' and that treatment never appears on non-interactive elements.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "On Senator Orrin Hatch's Home page... it wasn't clear whether everything was clickable, or nothing was. There were 18 links on the page, but only two of them invited you to click by their appearance.",
          "insight": "When the entire page uses the same color for links and text, clickability becomes invisible. The Split Lease purple palette risks the same problem — if --secondary-purple appears on headings AND buttons, the distinction vanishes."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Since a large part of what people are doing on the Web is looking for the next thing to click, it's important to make it obvious what's clickable and what's not.",
          "insight": "Drew's scanning behavior is search-for-next-click behavior. The visual system must make the next click the most visually obvious interactive element on the page — distinguishable from all non-interactive elements without cursor exploration."
        },
        {
          "source": "drew-call.txt, 05:38-05:50",
          "type": "host_call",
          "quote": "if you have any questions for me, you can feel free to text me or email me.",
          "insight": "Bryant explicitly offers two interaction channels — verbal affordances that are unambiguous. The platform's visual affordances must be equally unambiguous: buttons look like buttons (filled shape, distinct from text), and non-interactive text never mimics button styling."
        },
        {
          "source": "drew-call.txt, 04:21-04:38",
          "type": "host_call",
          "quote": "one more question I had was about pictures of the space and wondered if you had any more... Yes. I have more pictures and I can send you.",
          "insight": "Bryant's photo request is a clear call to action. Drew responds instantly. The platform's upload prompt must have equally unambiguous interactive styling — a filled button or a clearly bounded drop zone, not a subtle text link."
        }
      ],
      "priority": "high",
      "tokens": {
        "colors": [
          "--secondary-purple (or --gradient-purple-button) exclusively for primary interactive elements — buttons and primary CTAs only",
          "--primary-purple for headings and non-interactive emphasis — never for buttons",
          "--text-gray for non-interactive body text",
          "--accent-purple for hover/active states on interactive elements only"
        ],
        "typography": [
          "Inter at 14-16px / semibold (--font-weight-semibold) for button labels — this weight+family combination is reserved for interactive elements",
          "Inter at 14px / normal for body text — clearly distinct from button label weight",
          "Instrument Serif for headings — typographic family difference ensures headings are never confused with buttons"
        ],
        "spacing": [
          "--spacing-sm (8px) vertical padding inside buttons, --spacing-2xl (24px) horizontal padding — creating a recognizable button shape",
          "--spacing-lg (16px) margin around primary buttons to isolate them from surrounding content"
        ],
        "new_tokens_needed": [
          "An explicit --interactive-color token that maps to --secondary-purple but is semantically distinct — ensuring designers use it only for clickable elements and never for decorative purple text or headings"
        ]
      },
      "contrast_requirements": "Primary buttons (--secondary-purple #6d31c2 background with white text) must achieve at least 4.5:1 contrast ratio for WCAG AA. Current --secondary-purple on --white achieves approximately 7.2:1 — compliant. Interactive text links must use --secondary-purple on --bg-white, achieving approximately 7.2:1 — compliant. Non-interactive text must NEVER use --secondary-purple to prevent confusion.",
      "visual_hierarchy_rule": "Interactive elements claim attention through shape (rounded-pill or rounded-lg filled rectangles) and color (--secondary-purple fill). Non-interactive elements claim attention through typographic scale (larger serif type) and spatial position (top of page). The two attention-claiming mechanisms never overlap: large serif text is never clickable, and purple filled shapes are always clickable.",
      "brand_alignment": "Taste model specifies 'Trustworthy, not corporate. Rounded corners, human language, real data.' Pill-shaped buttons (--rounded-pill: 20px) create the warm, approachable interactive elements the taste model calls for. The strict separation between interactive purple and informational purple reinforces trust — Drew never has to guess, which makes the platform feel reliable."
    },
    {
      "id": "looks-003",
      "type": "visual_pattern",
      "title": "Area Boundaries Through Background Color Alternation",
      "journey_phases": [
        "proposal_mgmt",
        "listing_creation",
        "active_lease"
      ],
      "problem": "Krug's $25,000 Pyramid test requires that clearly defined areas on a page be identifiable at a glance. Drew's call had natural topic boundaries — each topic transition was signaled by Bryant's verbal cues ('I wanted to mention as well...,' 'one more question I had...'). On the platform, content areas often lack visible boundaries: a proposal card might present guest identity, financial terms, and action buttons in a single white container with only spacing between sections. Eye-tracking research Krug references shows that 'users decide very quickly which parts of the page are likely to have useful information and then almost never look at the other parts — almost as though they weren't there.' If areas lack visible boundaries, Drew cannot efficiently amputate irrelevant sections — he must scan the entire page to find what matters. The visual system needs a lightweight mechanism to signal 'this is a distinct area' without heavy borders or dividers that create visual clutter.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Dividing the page into clearly defined areas is important because it allows users to decide quickly which areas of the page to focus on and which areas they can safely ignore.",
          "insight": "Area definition is not decoration — it's a scanning efficiency tool. Drew needs to identify the 'Who are these guests?' area and the 'What do I do?' area within 2 seconds. Without visual boundaries, identification requires reading, not scanning."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Several of the initial eye-tracking studies of Web page scanning suggest that users decide very quickly which parts of the page are likely to have useful information and then almost never look at the other parts — almost as though they weren't there.",
          "insight": "Drew will visually amputate areas. Clear boundaries ensure he amputates correctly — ignoring Tier 3 details, not accidentally ignoring the action area because it blended into the details area."
        },
        {
          "source": "drew-call.txt, 01:32-03:17",
          "type": "host_call",
          "quote": "Ariel and Amber are both flexible... [topic shift at 03:17] I wanted to mention as well, so I know I mentioned Ariel and Amber... split lease doubled the deposit...",
          "insight": "Bryant creates clear verbal boundaries between the 'meet the guests' area and the 'here's the guarantee' area. The platform must create equally clear visual boundaries — a background color shift or generous whitespace gap between the Guest Information area and the Financial Terms area."
        },
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months... Is that something that would work yep.",
          "insight": "Lease terms are a distinct conversational area in the call. On the platform, lease term details must be visually separated from guest details and financial details — mixing them creates a composite that the call kept intentionally separate."
        }
      ],
      "priority": "high",
      "tokens": {
        "colors": [
          "--bg-white (#ffffff) for primary content areas (guest info, listing details)",
          "--bg-light (#f9fafb) or --bg-off-white (rgb(252, 250, 255)) for alternating secondary areas (financial details, supporting context)",
          "--bg-light-gray (#f3f4f6) for Tier 3 collapsed/expandable detail sections",
          "--border-color (#e5e7eb) as 1px separator between areas when background alternation alone is insufficient"
        ],
        "typography": [
          "Inter at 12-13px / semibold / uppercase / --letter-spacing-medium (0.05em) for area section labels — these small, distinct labels name each area without competing with content",
          "Inter at 14px / normal for content within areas"
        ],
        "spacing": [
          "--spacing-2xl (24px) padding inside each area to give content room to breathe",
          "--spacing-4xl (32px) vertical gap between distinct areas to create unambiguous separation",
          "--spacing-lg (16px) between items within the same area"
        ],
        "new_tokens_needed": [
          "A --section-label style combining uppercase + letter-spacing + small size + muted color — this pattern exists implicitly but is not codified as a reusable token for area headings"
        ]
      },
      "contrast_requirements": "Background alternation between --bg-white and --bg-light must be subtle enough to avoid visual noise but distinct enough to register during a 2-second scan. The difference between #ffffff and #f9fafb is 1-2% lightness — may need to use --bg-off-white (rgb(252, 250, 255)) for slightly more visible alternation. Section label text (uppercase, small) must still meet WCAG AA: --text-gray on --bg-white achieves minimum 4.5:1.",
      "visual_hierarchy_rule": "Background color creates implicit grouping without explicit borders. White backgrounds signal primary content areas (the areas Drew should focus on). Tinted backgrounds signal supporting areas (the areas Drew can safely skip). The eye naturally gravitates to white-background areas first because they have higher contrast with the anchor heading text. This passive visual sorting guides Drew's scan path without requiring him to read section labels.",
      "brand_alignment": "Taste model specifies 'Warm, not cold. Soft backgrounds, not stark white.' The alternation between --bg-white and --bg-off-white (warm-tinted) maintains the warm personality while creating functional area boundaries. No harsh lines or dark borders — the separation feels architectural, not mechanical."
    },
    {
      "id": "looks-004",
      "type": "visual_pattern",
      "title": "Confirmation vs. Decision Visual Languages",
      "journey_phases": [
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "problem": "Drew's call reveals that most platform interactions are confirmations of pre-decided outcomes, not open decisions. But the platform uses the same visual treatment for both: editable form fields, option selectors, and multi-step wizards. This creates a visual lie — the page communicates 'you need to decide something' when Drew has already decided. Krug Ch. 2 warns that unnecessary option-weighing wastes cognitive resources: 'Weighing options may not improve our chances.' The visual language must distinguish between 'this is settled — confirm it' and 'this is open — decide it.' If Drew sees editable fields for his $2,000/month rent, the visual signal is 'this number is negotiable' — introducing a question mark ('Should I change it?') where the call established certainty. A distinct visual pattern for confirmations would signal 'this is fact, not input' and reduce cognitive load to a single scan-and-click.",
      "evidence": [
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Bryant uses confirmation language: 'To confirm...' Drew responds with 'That's right' — not a negotiation. The platform must visually distinguish this confirmation interaction from an open-ended pricing form."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Weighing options may not improve our chances. On poorly designed sites, putting effort into making the best choice doesn't really help.",
          "insight": "Editable fields invite weighing. Read-only summaries invite confirmation. The visual treatment determines which cognitive mode Drew enters — and for pre-decided outcomes, confirmation mode is both faster and more accurate."
        },
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months... Is that something that would work yep... Sounds good.",
          "insight": "The lease term was decided in 14 seconds. Presenting this as an editable form with duration dropdowns and date pickers contradicts the settled nature of the decision. A summary card with 'Confirm' button matches the call's tone."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand.",
          "insight": "An editable field for a pre-decided value is a visual question mark: 'Should I change this?' The confirmation visual pattern eliminates this question mark by presenting the value as fact, not input."
        }
      ],
      "priority": "medium",
      "tokens": {
        "colors": [
          "--bg-off-white (rgb(252, 250, 255)) as background for confirmation summary cards — warm, settled, non-interactive",
          "--bg-white for decision forms with active input fields — the white signals 'live editing zone'",
          "--primary-purple for confirmed values displayed as statements",
          "--secondary-purple for the single Confirm button",
          "--text-gray for 'Need to change?' edit escape hatch links"
        ],
        "typography": [
          "IBM Plex Mono (--font-mono) at 20-24px / semibold for confirmed dollar amounts — mono font signals 'this is data, not editable text' while the large size signals importance",
          "Inter at 14px / normal for the surrounding confirmation context",
          "Inter at 12px / normal for the 'Change' or 'Edit' link — small and unobtrusive"
        ],
        "spacing": [
          "--spacing-2xl (24px) padding inside confirmation cards",
          "--spacing-lg (16px) between the summary statement and the Confirm button",
          "--spacing-sm (8px) between the Confirm button and the Edit link"
        ],
        "new_tokens_needed": [
          "A --confirmed-value display style combining mono font + large size + primary-purple color — for presenting pre-decided numbers ($2,000/month) as settled facts rather than editable inputs"
        ]
      },
      "contrast_requirements": "Confirmed values in --primary-purple (#31135D) on --bg-off-white (rgb(252, 250, 255)) achieves approximately 12:1 contrast — exceeds WCAG AAA. The 'Change' link in --text-gray must achieve at least 4.5:1 on the same background. The visual distinction between confirmation cards (tinted background, mono font, no borders) and decision forms (white background, input fields, borders) must be recognizable without color alone — shape and typography differences provide the redundant signal.",
      "visual_hierarchy_rule": "Confirmation cards use a closed visual form: tinted background, no input affordances, mono-font values, single button. Decision forms use an open visual form: white background, visible input borders, sans-serif editable text, multiple options. Drew's eye should recognize the pattern in under 1 second: 'this is a receipt to sign, not a form to fill out.'",
      "brand_alignment": "Taste model specifies 'Mono for data/trust (prices, stats, badges). IBM Plex Mono — signals precision and reliability.' Using mono font for confirmed values directly implements this principle: the confirmed dollar amount looks precise, reliable, and final — not tentative or editable. The warm tinted background aligns with 'Warm, not cold' while creating a visual distinction from active form areas."
    },
    {
      "id": "looks-005",
      "type": "visual_pattern",
      "title": "Conversational Pacing Through Whitespace Rhythm",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt"
      ],
      "problem": "Drew's call has a natural rhythm: Bryant introduces one topic, pauses for Drew's response, confirms, then moves to the next topic. Each exchange has breathing room — the conversation never feels rushed or compressed. On the platform, screens often pack content densely to minimize scrolling, creating a visual wall that contradicts the conversational pacing Drew experienced. Krug Ch. 5 advocates omitting needless words — but the visual equivalent is omitting needless density. When every element crowds against the next, Drew cannot parse individual items during a scan. The eye needs whitespace to separate concepts the same way the ear needs pauses to separate topics. Dense layouts force reading; spacious layouts enable scanning. The platform must use whitespace as a pacing mechanism that mirrors the call's conversational rhythm: one idea, breathing room, next idea.",
      "evidence": [
        {
          "source": "drew-call.txt, 00:40-01:03",
          "type": "host_call",
          "quote": "Which I've got potluck. Exactly. You think it was be too much? [pause] Uh, the title of it is the comfortable one bed, one bath. [pause] One bedroom, one bath. Yep. [pause] In Chelsea. Yep. Yep. [pause] To confirm that would be a 2000 a month...",
          "insight": "The call has natural pauses between each data point — listing title, bedroom count, location, price. Each pause creates a boundary. The platform must use whitespace to create equivalent boundaries: each data point gets its own visual line with spacing above and below."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Create a clear visual hierarchy on each page... The more important something is, the more prominent it is.",
          "insight": "Whitespace is a hierarchy tool: elements surrounded by more whitespace appear more important. The Tier 1 anchor should have the most whitespace around it; Tier 3 details can be denser. This gradient of spacing reinforces the billboard hierarchy."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Introduction",
          "type": "book",
          "quote": "Yes, it's a thin book. I've worked hard to keep this book short — hopefully short enough you can read it on a long plane ride. I did this for two reasons: If it's short, it's more likely to actually be used.",
          "insight": "Krug practices what he preaches — brevity and whitespace make content more usable. Screens that 'keep it short' with generous spacing are more likely to be scanned successfully than dense, comprehensive screens that attempt to show everything."
        },
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures.",
          "insight": "Drew's closing reveals preference for speed and brevity. Dense screens contradict this preference. Whitespace signals 'this won't take long' — visually communicating the brevity Drew expects."
        }
      ],
      "priority": "medium",
      "tokens": {
        "colors": [
          "--bg (#f6f4f0 from tokens.json) or --bg-light (#f9fafb from style guide) as the page background — warm, spacious, non-competing with content",
          "--surface (#ffffff) or --bg-white for content cards that float on the warm background"
        ],
        "typography": [
          "Inter at 14-16px with --line-height-relaxed (1.6) for body text within content areas — generous line height creates micro-whitespace between text lines",
          "Instrument Serif at 28-36px with --line-height-tight (1.2) for anchor headings — tight line height on large text prevents wasted space at the top of the hierarchy"
        ],
        "spacing": [
          "--spacing-xxl (60px from tokens.json) or --spacing-7xl (3rem from style guide) between major content sections — this is the 'conversational pause' spacing",
          "--spacing-xl (40px tokens / 20px style guide) between elements within a section — the 'within-topic' breathing room",
          "--spacing-md (16px) between tightly related elements (label and its value, button and its supporting text)"
        ],
        "new_tokens_needed": [
          "A --section-gap token for the large gap between major page sections (48-60px) — current spacing scale jumps from --spacing-4xl (32px) to --spacing-5xl (2rem/32px) without a clear 48-60px step for section-level separation in the style guide"
        ]
      },
      "contrast_requirements": "Whitespace itself has no contrast requirement, but it must create sufficient visual separation that areas remain distinct even when background colors are similar. The gap between sections (48-60px) should be at least 3x the gap within sections (16px) to create an unambiguous 'this is a new topic' signal. This spatial ratio mirrors the pause-length ratio in the call.",
      "visual_hierarchy_rule": "Whitespace scales with hierarchy tier: Tier 1 elements (anchor headings) get the most surrounding whitespace (60px above, 32px below). Tier 2 elements (action buttons) get moderate whitespace (24px above, 16px below). Tier 3 elements (detail text) get minimal whitespace (8-12px between lines). This creates a 'density gradient' — the page gets denser as you scroll deeper into detail, which naturally discourages deep reading and encourages the scan-and-act behavior Drew prefers.",
      "brand_alignment": "Taste model specifies 'Premium-accessible. Feels high quality without feeling exclusive.' Generous whitespace is the primary visual signal of premium quality — it communicates 'we have room, we're not cramming.' The warm background (--bg or --bg-light) ensures the whitespace feels inviting rather than sterile, aligning with 'Warm, not cold.'"
    },
    {
      "id": "looks-006",
      "type": "visual_pattern",
      "title": "Trust Typography: Mono Font for Guaranteed Data",
      "journey_phases": [
        "evaluation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew accepts Bryant's verbal guarantee ('split lease guarantees payments to you') with zero follow-up questions. This trust was earned through human conversation — tone of voice, conversational rhythm, personal credibility. On the platform, the guarantee is just text — and text on a screen carries no inherent credibility. Krug Ch. 1 warns that 'the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.' The platform must use visual cues to signal 'this data is reliable' versus 'this is marketing copy.' When Drew sees his guaranteed rent amount, it must look like a bank statement — precise, authoritative, trustworthy — not like a promotional headline. The typographic treatment of financial data directly affects whether Drew trusts the platform's guarantee as much as he trusts Bryant's verbal promise.",
      "evidence": [
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment.",
          "insight": "The guarantee is the platform's core value proposition. Bryant delivers it with verbal authority. The platform must deliver it with typographic authority — using visual treatments that signal 'this is a financial promise' rather than 'this is a feature description.'"
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.",
          "insight": "Confidence erosion happens through visual signals. If the platform displays '$2,000/month guaranteed' in the same font as a blog post headline, the visual signal is 'marketing claim.' If it displays the same text in a mono font with precise formatting, the signal is 'financial record.' The font choice IS the trust signal."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew treats his rent as a precise financial fact — '$2,000.' The platform must treat it the same way visually: mono font, exact amount, no ambiguity. A sans-serif rendering of '$2,000' looks like a label. A mono-font rendering looks like a ledger entry."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "If we find something that works, we stick to it. Once we find something that works — no matter how badly — we tend not to look for a better way.",
          "insight": "If Drew's first impression of the platform's financial displays feels trustworthy (mono font, precise data, bank-like presentation), he will accept this trust signal permanently. First-impression typography for financial data sets the trust baseline for the entire relationship."
        }
      ],
      "priority": "medium",
      "tokens": {
        "colors": [
          "--primary-purple (#31135D) for guaranteed/confirmed financial amounts — the darkest, most authoritative color in the palette",
          "--accent-light (#e8f0eb from tokens.json) or --protocol-surface (#F7F2FA from style guide) as background for financial data badges — subtle tinting that signals 'this is a data zone'",
          "--text-gray for supporting financial context ('per month,' 'guaranteed by Split Lease')"
        ],
        "typography": [
          "IBM Plex Mono at 20-24px / semibold for primary financial amounts ($2,000/month) — the mono typeface signals precision and reliability per the taste model",
          "IBM Plex Mono at 13-14px / normal for secondary financial data (deposit amounts, fee breakdowns) — same trust signal at smaller scale",
          "Inter at 12-13px / normal for financial context labels — the sans-serif clearly distinguishes context from data"
        ],
        "spacing": [
          "--spacing-sm (8px) between a financial amount and its label",
          "--spacing-md (16px) between financial data items in a summary",
          "--spacing-lg (16px) padding inside financial data badges or containers"
        ],
        "new_tokens_needed": [
          "A --data-badge pattern combining mono font + tinted background + rounded-md border radius — for presenting financial amounts as discrete, trustworthy data objects rather than inline text"
        ]
      },
      "contrast_requirements": "Financial amounts in --primary-purple (#31135D) on --protocol-surface (#F7F2FA) achieves approximately 11:1 contrast — exceeds WCAG AAA. IBM Plex Mono's character spacing provides additional legibility for numerical data. Financial data must never be displayed in a color lighter than --text-dark (#1a1a1a) or --primary-purple — trust requires maximum readability.",
      "visual_hierarchy_rule": "Financial data uses IBM Plex Mono to create a typographic 'third voice' distinct from both the serif anchor headlines (Instrument Serif) and the sans-serif body/UI text (Inter). This three-font system ensures that Drew's scanning eye immediately categorizes what it sees: serif = headline/identity, sans = interface/action, mono = data/money. The mono voice signals 'this is a fact, not an opinion' — the typographic equivalent of Bryant's verbal authority.",
      "brand_alignment": "Taste model explicitly specifies: 'Mono for data/trust (prices, stats, badges). IBM Plex Mono — signals precision and reliability.' This element directly implements the taste model's most specific typographic instruction. The combination of mono font + purple data color creates a distinctive Split Lease 'data voice' that bridges Bryant's verbal credibility to the platform's visual credibility."
    },
    {
      "id": "looks-007",
      "type": "visual_pattern",
      "title": "Guided Flow Visual Continuity Through Step Connectors",
      "journey_phases": [
        "onboarding",
        "listing_creation"
      ],
      "problem": "Drew's entire experience is guided by Bryant — one topic flows into the next with verbal transitions ('I wanted to mention as well...,' 'one more question I had...'). When Drew encounters the platform's multi-step processes (listing wizard, onboarding flow), the guided feeling must continue. Krug Ch. 2 warns that users 'muddle through, making up their own vaguely plausible stories about what we're doing and why it works.' Drew's plausible story is: 'the platform should guide me like Bryant did.' Multi-step wizards often present steps as isolated screens with no visual connection — each step appears as a standalone form. This breaks the guided narrative. Drew needs to see visual evidence that he is on a path: where he came from, where he is, and where he's going. Without this visual continuity, each new step feels like starting over — and Drew, who values speed ('can we maybe move on?'), may abandon rather than face what feels like an infinite sequence of unconnected screens.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "insight": "Drew's 'can we maybe move on?' reveals impatience and desire for forward momentum. The visual system must always communicate forward progress — not through words ('Step 3 of 6') but through a visual path that shows completion accumulating and the end approaching."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through.",
          "insight": "Drew will not read 'Step 3 of 6: Features' — he will glance at a progress indicator and assess 'am I almost done?' The visual treatment must answer this question through shape and color, not text."
        },
        {
          "source": "drew-call.txt, 01:03-02:57",
          "type": "host_call",
          "quote": "[Continuous conversational flow from property details through availability, guests, guarantee, photos]",
          "insight": "Bryant's call has no 'steps' — it's a continuous guided conversation with natural topic transitions. The listing wizard should feel the same way: a continuous visual flow with soft transitions, not hard cuts between isolated form screens."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "A good visual hierarchy saves us work by preprocessing the page for us, organizing and prioritizing its contents in a way that we can grasp almost instantly.",
          "insight": "A progress indicator is a visual hierarchy applied to time/sequence. It preprocesses the wizard for Drew: 'you've done this, you're here, this is left.' Without it, Drew must hold the sequence in working memory — which he will not do."
        }
      ],
      "priority": "medium",
      "tokens": {
        "colors": [
          "--secondary-purple or --selected-purple for completed steps — the brand purple signals 'done, confirmed'",
          "--primary-purple for the current step — darkest purple signals 'you are here'",
          "--border-color (#e5e7eb) or --ink-ghost (#bdb8b0 from tokens.json) for future steps — muted color signals 'not yet'",
          "--bg-off-white (rgb(252, 250, 255)) as the progress bar track background"
        ],
        "typography": [
          "Inter at 12px / semibold for current step label — small but bold to signal 'active'",
          "Inter at 12px / normal / --text-gray for completed and future step labels — subordinate to the current step"
        ],
        "spacing": [
          "--spacing-xl (20px from style guide) vertical space between the progress indicator and the current step's content — enough to separate navigation from content without wasting valuable screen space",
          "--spacing-sm (8px) between step dots/segments in the progress indicator"
        ],
        "new_tokens_needed": [
          "A --progress-complete color token (maps to --secondary-purple but semantically indicates completion) and --progress-pending token (maps to --border-color) — codifying the three-state visual language of step indicators"
        ]
      },
      "contrast_requirements": "The current step indicator must be distinguishable from completed and future steps without relying on color alone (for color-blind accessibility). Use size (current step dot is larger), fill (completed is filled, future is outline), and label weight (current is bold) as redundant signals. --primary-purple on --bg-off-white achieves approximately 12:1 contrast — exceeds AAA for the active step indicator.",
      "visual_hierarchy_rule": "The progress indicator occupies a fixed position at the top of the wizard flow, acting as a persistent visual anchor that tells Drew 'you are on a path, and the path has an end.' It should be horizontally compact (a thin bar or small dots) so it communicates progress without competing with the current step's content for attention. The current step's content is the primary focus; the progress indicator is a peripheral confidence signal.",
      "brand_alignment": "Taste model specifies 'Confident, not flashy. The product speaks through clarity, not decoration.' The progress indicator should be minimal — small dots or a thin segmented bar, not an elaborate stepper with icons and animations. Confidence comes from the indicator simply being there and being accurate, not from drawing attention to itself. The purple fill-as-completion creates a visual 'path of purple' that reinforces brand presence without decoration."
    }
  ]
}
### layer-4/behaves-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "behaves-001",
      "type": "interaction_pattern",
      "title": "Optimistic Confirmation for Pre-Decided Actions",
      "journey_phases": [
        "proposal_mgmt",
        "pricing",
        "retention"
      ],
      "problem": "Drew accepts every outcome in the call without deliberation — the guarantee (04:18: 'Okay. Okay. Okay. Alright.'), the lease term (05:32: 'Okay. Okay. Sounds good.'), the price (00:52: 'That's right.'). When Drew encounters these same decisions on the platform, they arrive as pre-decided outcomes requiring only formal confirmation. But the platform's interaction patterns treat confirmations the same as open decisions: multi-step flows with loading spinners, server-round-trip delays, and confirmation dialogs. Each artificial delay introduces a question mark: 'Did it work? Should I click again? Did I make a mistake?' Krug's First Law demands that interactions be self-evident — and a confirmation that takes 3 seconds to process when Drew decided in 0.5 seconds violates the self-evidence of the outcome. The interaction must match the speed of the decision.",
      "solution": "Apply optimistic UI for all confirmation actions where the outcome is pre-decided. When Drew clicks 'Confirm' on a proposal he already accepted in the call, the UI should immediately transition to the success state — showing the confirmed outcome before the server responds. If the server rejects the action, roll back with an inline error. The principle: for pre-decided outcomes, the UI should move at the speed of the user's certainty, not the speed of the server's processing. Reserve loading states for genuinely uncertain outcomes where the user is waiting for new information, not for confirmations where the user already knows the answer.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew confirms a 4-month lease term in 14 seconds with zero hesitation. When he clicks 'Confirm' on the platform, his certainty is already 100%. A loading spinner after this click contradicts Drew's mental state — he already knows the answer. The UI should reflect his certainty instantly."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand. The distractions may be slight but they add up.",
          "insight": "A loading spinner after a confirmation click is a question mark: 'Did it work? Is something wrong? Should I wait or click again?' For pre-decided actions, this question mark is entirely unnecessary — the user already knows the outcome. Optimistic UI eliminates this question mark by showing the outcome immediately."
        },
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Drew's four-word acceptance of the guarantee shows his confirmation speed: instantaneous. The platform's confirmation interaction must match this speed. If Drew can say 'Alright' in under a second, the UI should show 'Confirmed' in under a second."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "There's not much of a penalty for guessing wrong. Unlike firefighting, the penalty for guessing wrong on a Web site is usually only a click or two of the Back button.",
          "insight": "Krug establishes that web interactions are low-stakes. Confirmations of pre-decided outcomes are even lower-stakes — the risk of an optimistic UI needing rollback is negligible. The cost of not being optimistic (added latency, question marks, perceived sluggishness) is higher than the cost of occasional rollback."
        }
      ],
      "priority": "high",
      "states": {
        "default": "The confirmation card shows the pre-decided outcome as a read-only summary with a single prominent 'Confirm' button. The visual language communicates 'this is settled — just sign off.'",
        "loading": "No visible loading state for pre-decided confirmations. The UI transitions directly from default to success on click. Server processing happens in the background. If the response takes longer than 2 seconds, a subtle progress indicator appears — but the success state is already shown.",
        "empty": "Not applicable for confirmations — there is always a pre-decided outcome to display. If no outcome data exists (agent hasn't entered it yet), show 'Bryant is preparing your details — we'll notify you when ready' instead of an empty form.",
        "error": "If the server rejects the optimistic confirmation, the success state gently rolls back: the confirmed checkmark animates to an attention icon, and an inline message appears below the summary: 'Something went wrong — your confirmation didn't go through. [Try again].' Never show a modal error dialog for a failed confirmation — it's too dramatic for the situation.",
        "success": "Immediate on click: the Confirm button transforms into a checkmark with 'Confirmed' label. The summary card's border shifts to a subtle green or purple accent. A brief micro-animation (scale pulse, 150ms) provides haptic-like feedback. The page automatically scrolls or transitions to the next action within 1 second."
      },
      "transition_principle": "Confirmation transitions should feel like a signature, not a submission. The visual transition is a state change (button → checkmark), not a page change (current screen → loading screen → new screen). The interaction stays in place, transforms in place, and then gently advances to the next context. This mirrors the call: Drew says 'Sounds good' and Bryant immediately moves to the next topic — no pause, no 'processing your response.'",
      "timing": {
        "response_target": "0ms perceived latency — optimistic UI shows success immediately on click. Server round-trip happens in background (target: under 500ms actual).",
        "easing": "cubic-bezier(0.34, 1.56, 0.64, 1) — the spring easing from tokens.json. The slight overshoot on the checkmark animation creates a satisfying 'landed' feeling that reinforces the confirmation.",
        "rationale": "Spring easing matches the 'confident, not flashy' brand principle. The overshoot is subtle enough to feel natural (like a physical stamp landing) without being decorative. Zero perceived latency matches Drew's instantaneous verbal confirmations."
      },
      "journey_state_awareness": "In proposal_mgmt, where Drew has already accepted guests during the call, the confirmation is near-certain — maximum optimistic confidence. In pricing, where defaults are pre-populated from call data, optimistic confirmation is appropriate but should show the derived values transparently before confirming. In retention, where Drew is deciding whether to extend, the interaction is closer to a genuine decision than a confirmation — use optimistic UI only if the host has expressed clear intent to extend (e.g., clicked 'I want to extend' before reaching the confirmation screen).",
      "edge_cases": [
        "Server timeout after optimistic success is shown — the UI must gracefully roll back without losing the host's context or requiring them to restart the flow",
        "Host double-clicks the Confirm button — the first click should disable the button and show success; the second click should be ignored, not trigger a duplicate submission",
        "Network disconnection during confirmation — the optimistic success state persists but a subtle offline indicator appears; the confirmation retries automatically when connectivity returns",
        "Pre-decided values have changed since the call (e.g., guest withdrew) — the confirmation card should detect stale data and show an updated summary with a 'Review changes' prompt before allowing confirmation"
      ]
    },
    {
      "id": "behaves-002",
      "type": "interaction_pattern",
      "title": "Scan-Speed Page Load for Billboard Screens",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Krug establishes that users scan pages 'like a billboard going by at 60 miles an hour.' Drew's scanning speed means the page must be scannable before Drew's patience expires — and patience is measured in milliseconds, not seconds. If a phase entry screen loads its content sequentially (skeleton → headings → body text → data → action buttons), Drew is forced to scan an incomplete page and may click the wrong element or abandon before the primary action appears. The loading sequence itself becomes a source of question marks: 'Is this done loading? Where's the button? Should I scroll?' Krug Ch. 1: 'when I look at a Web page it should be self-evident.' A page that is still assembling itself is not self-evident — it is a work in progress that forces Drew to wait and re-scan.",
      "solution": "Ensure that the Tier 1 anchor and Tier 2 action button are the first elements to render — before any Tier 3 details, secondary navigation, or decorative elements. The principle: the billboard's headline and call-to-action must be visible and scannable within the first paint. If data for the anchor is not yet available from the server, show a content-shaped placeholder (skeleton) that occupies the exact same space the anchor will occupy — preventing layout shift when data arrives. Never show a full-page loading spinner for billboard screens. The page shell (anchor position + action button position) should render in under 200ms from navigation. Data should fill in within 500ms. If data is slower than 500ms, the skeleton holds position and the action button is disabled but visible — Drew can see what he'll be able to do even before the data arrives.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for.",
          "insight": "Drew's scan starts the instant the page appears. If the page is still loading when Drew starts scanning, he scans the loading state — and may click a skeleton element, scroll past an empty area where the CTA will appear, or leave because the page 'doesn't have what I need.' The CTA must be scannable on first paint."
        },
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "insight": "Drew's 'can we maybe move on?' reveals zero tolerance for waiting. If a page takes 2+ seconds to show its primary content, Drew perceives it as the platform making him wait — the same friction he wants to avoid. Instant anchor rendering eliminates this perception."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Introduction",
          "type": "book",
          "quote": "If something is hard to use, I just don't use it as much.",
          "insight": "Krug's wife's quote defines the behavioral consequence of slow loading: reduced usage. Every slow page load trains Drew to default to texting Bryant (which is instant) instead of using the platform (which makes him wait)."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "We're usually in a hurry. Much of our Web use is motivated by the desire to save time.",
          "insight": "Perceived speed is as important as actual speed. A page that shows its billboard structure in 200ms and fills in data at 500ms feels fast — even if total load time is 1 second. A page that shows nothing for 800ms and then renders everything at once feels slow — even if total load time is the same."
        }
      ],
      "priority": "high",
      "states": {
        "default": "The full billboard is rendered: Tier 1 anchor (e.g., 'Ariel & Amber want your Chelsea apartment'), Tier 2 action button ('Accept this proposal'), and Tier 3 details (collapsed but available). All data is populated. The page is fully interactive.",
        "loading": "The billboard structure renders immediately as a skeleton: Tier 1 shows a heading-shaped placeholder (matching the anchor's font size and position), Tier 2 shows the action button in a disabled state (visible shape, muted color), Tier 3 is hidden. Data fills into the skeleton within 500ms. No full-page spinner, no blank screen, no layout shift when data arrives.",
        "empty": "If there is genuinely no data for this screen (e.g., no proposals yet), the billboard structure still renders — but the anchor becomes a status message: 'No proposals yet — we're matching guests to your Chelsea apartment.' The action button area shows a secondary action: 'Update your listing' or 'Contact Bryant.' The empty state is never a blank page.",
        "error": "If data fails to load, the skeleton transitions to an error state: the anchor placeholder becomes 'We couldn't load your [proposals/listing/payments]. [Try again].' The action button becomes the retry button. The page structure is preserved — Drew still sees a billboard, just one that acknowledges the problem and offers a single clear action.",
        "success": "Not applicable at page level — success states are handled by individual interaction patterns (behaves-001 for confirmations, behaves-003 for form submissions)."
      },
      "transition_principle": "Page transitions should feel like turning a page in a book, not like loading a new application. The structure (layout, areas, hierarchy) appears instantly. The content (data, names, numbers) fills in smoothly. Drew should never see the page rearrange itself — the first layout is the final layout. Content fills into fixed positions, like ink appearing on a pre-printed form.",
      "timing": {
        "response_target": "200ms to first meaningful paint (billboard structure visible). 500ms to data population. 1000ms maximum for full interactivity including Tier 3 details.",
        "easing": "cubic-bezier(0.16, 1, 0.3, 1) — the 'out' easing from tokens.json. Data appearing in skeleton placeholders should fade in with this easing over 150ms — fast enough to feel instant, slow enough to avoid a jarring 'pop.'",
        "rationale": "200ms is the threshold below which transitions feel instantaneous to users. 500ms is the threshold below which users perceive 'fast.' The out easing prevents the abrupt appearance of data that can feel like a UI glitch."
      },
      "journey_state_awareness": "During onboarding (Drew's first platform visit), the loading pattern is highest-risk — Drew has no prior experience with the platform and will judge its quality by the first page load. First-visit pages should be pre-rendered or cached from the agent's follow-up link. During active_lease (recurring visits), Drew has learned the layout and expects it — skeleton loading is less critical because Drew's mental model fills in the blanks. But data freshness becomes more important: payment status and guest status must never show stale data from a previous visit.",
      "edge_cases": [
        "Extremely slow connection (>3 seconds to data) — the skeleton must not feel frozen. After 2 seconds, add a subtle pulse animation to skeleton elements to signal 'still loading, not broken'",
        "Partial data load (guest name loads but financial data doesn't) — render what's available and show skeleton only for missing sections, not the whole page",
        "Cache showing stale data from a previous visit — always show fresh data for financial amounts and guest status, even if it means a brief skeleton flash. Stale money data is worse than a loading state",
        "Layout shift from unexpected content length (e.g., a guest name that's much longer than the skeleton placeholder) — use max-width constraints and text truncation to ensure data never exceeds the skeleton's dimensions"
      ]
    },
    {
      "id": "behaves-003",
      "type": "interaction_pattern",
      "title": "Conversational Step Progression in Multi-Step Flows",
      "journey_phases": [
        "onboarding",
        "listing_creation"
      ],
      "problem": "Drew's call flows as a continuous guided conversation — Bryant moves from topic to topic with natural transitions ('I wanted to mention as well...,' 'one more question I had...'). Drew never experiences a hard boundary between topics. On the platform, multi-step flows (listing wizard, onboarding) present hard cuts between steps: click 'Next,' the screen goes blank, a new form appears. Each hard cut breaks the guided feeling and introduces a question mark: 'Where am I now? Is this still the same process? How many more of these are there?' Krug Ch. 2: users 'muddle through, making up their own vaguely plausible stories about what we're doing.' Drew's plausible story is 'the platform should guide me like Bryant did.' Hard step cuts violate this story by making each step feel like a new, disconnected experience rather than the next beat in a conversation.",
      "solution": "Replace hard step transitions with conversational step progression: each step flows into the next with a smooth visual transition that maintains context. The principle: the outgoing step should compress or slide away while the incoming step expands into view, maintaining a visual through-line that signals 'you are continuing, not starting over.' Concretely: (1) When Drew completes Step 2 and the system advances to Step 3, Step 2's content should compress upward into a summary line (showing what Drew just confirmed), while Step 3's content expands below it. Drew can see his prior answers accumulating above, creating a visible trail of progress. (2) The progress indicator at the top should animate smoothly — the completed segment fills with color as the next segment activates. No instant jumps. (3) The transition should take 300-400ms — fast enough to feel responsive, slow enough to be perceivable as motion rather than a jump.",
      "evidence": [
        {
          "source": "drew-call.txt, 01:03-02:57",
          "type": "host_call",
          "quote": "[Continuous conversational flow from property details through availability, guests, guarantee, photos — no hard breaks between topics]",
          "insight": "Bryant's call has no 'step transitions' — topics flow into each other with verbal bridges. The platform's step transitions must feel equally fluid. A hard cut (blank screen → new form) is the visual equivalent of Bryant hanging up and calling back for each new topic."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.",
          "insight": "Drew's 'plausible story' about a multi-step wizard is shaped by his call experience: 'one topic at a time, each one leading to the next, with the prior topic still in memory.' A compressed summary of prior steps maintains this story. A hard cut that erases prior context breaks it."
        },
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "can we maybe move on?",
          "insight": "Drew wants forward momentum. Step transitions that feel like 'moving on' (smooth progression, visible progress) satisfy this desire. Transitions that feel like 'starting over' (blank screen, no context) frustrate it."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "A good visual hierarchy saves us work by preprocessing the page for us, organizing and prioritizing its contents in a way that we can grasp almost instantly.",
          "insight": "The compressed summary of completed steps IS a visual hierarchy applied to time: 'this is done (small, muted), this is now (full size, active), this is next (invisible, not yet relevant).' It preprocesses the wizard's temporal structure for Drew."
        }
      ],
      "priority": "high",
      "states": {
        "default": "The current step is displayed at full size with its form/content active. Completed steps are compressed into summary lines above (showing the confirmed values — e.g., '1BR, Chelsea, $2,000/mo'). Future steps are not visible. The progress indicator shows cumulative completion.",
        "loading": "When transitioning between steps, the outgoing step compresses to a summary line while the incoming step's skeleton appears and fills with data. The transition animation itself serves as the loading indicator — no separate spinner needed. If data for the next step takes longer than the transition animation (300ms), the step's skeleton holds position until data arrives.",
        "empty": "If a step has no pre-populated data (genuinely new information requested), the step presents its input field with a placeholder that echoes Bryant's language: 'What would you like to call your place?' instead of 'Enter listing title.' The empty state is a question, not a blank field.",
        "error": "If a step's submission fails, the step remains active (does not compress to summary). An inline error message appears below the problematic field. The step's border or background shifts to --signal-warn-bg to visually flag the issue without blocking the entire flow. Drew can correct and re-submit without navigating backward.",
        "success": "On successful step completion, the step compresses to a single-line summary with a subtle checkmark. The compression animation uses spring easing for a satisfying 'snap into place' feeling. The summary line is tappable — Drew can expand it to edit a prior answer if needed."
      },
      "transition_principle": "Step transitions are compressions and expansions, not replacements. The outgoing step doesn't disappear — it condenses. The incoming step doesn't appear from nothing — it grows from the boundary of the outgoing step. This creates a continuous visual thread that mirrors the continuous conversational thread of Bryant's call. The screen never goes blank between steps.",
      "timing": {
        "response_target": "300ms for the full step transition animation (compress outgoing + expand incoming). 150ms delay before the incoming step becomes interactive, to prevent accidental input during the transition.",
        "easing": "cubic-bezier(0.16, 1, 0.3, 1) — the 'out' easing from tokens.json for the compression of the outgoing step (fast start, smooth landing). cubic-bezier(0.34, 1.56, 0.64, 1) — the 'spring' easing for the expansion of the incoming step (slight overshoot that creates a 'settling in' feeling).",
        "rationale": "300ms is within the 100-400ms range where animations feel responsive but perceivable. The asymmetric easing (out for compression, spring for expansion) creates a visual rhythm: the old step snaps away efficiently, the new step arrives with a gentle bounce that signals 'here's the next thing.' This matches Bryant's conversational rhythm: quick acknowledgment, then a new topic introduced with a slightly different energy."
      },
      "journey_state_awareness": "During onboarding (first platform visit), each step should include Bryant's name or reference to the call to maintain the human connection: 'Bryant mentioned your Chelsea apartment — let's confirm the details.' During listing_creation (Step 4-6 of the wizard), the compressed summaries of prior steps serve as a progress trail that combats the 'how much more?' anxiety. By Step 5, Drew can see 4 completed summary lines above — visual evidence that he's almost done.",
      "edge_cases": [
        "Drew clicks the browser back button during a multi-step flow — the flow should not break. Instead, the current step should compress and the prior step should re-expand from its summary line, maintaining the visual continuity",
        "Drew leaves mid-flow and returns later — the flow should resume at the last incomplete step, with all prior completed steps shown as summaries. No re-entry friction.",
        "A step has validation errors that prevent progression — the step must remain expanded and active, with the error clearly indicated, while all completed summaries above remain visible and accessible",
        "Drew taps a completed summary line to edit a prior answer — the summary should expand back to full step size, pushing the current step down. After editing, the step re-compresses and the current step scrolls back into view"
      ]
    },
    {
      "id": "behaves-004",
      "type": "interaction_pattern",
      "title": "Satisfice-Proof Error Prevention on Scannable Forms",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "Drew is a textbook satisficer — he accepts the first reasonable option without scrutiny. Krug Ch. 2: 'we choose the first reasonable option, a strategy known as satisficing.' On the platform, this means Drew will accept pre-populated defaults, scan past validation rules, and click Submit without reviewing. If the form allows submission with incorrect or incomplete data (because Drew satisficed past a required field), the error surfaces after submission — at which point Drew must find and fix the problem. This is the worst interaction pattern for a scanner: finding a specific error in a form he barely looked at the first time. Krug Ch. 1: 'every question mark adds to our cognitive workload.' A post-submission error is the biggest question mark: 'What went wrong? Where? How do I fix it? Did I lose my other changes?' Error prevention must happen at the moment of input, not at the moment of submission.",
      "solution": "Implement inline, real-time validation that prevents errors before they reach submission. The principle: validate each field as Drew leaves it (on blur), not when he submits the form. For pre-populated fields, validate on page load and flag any issues before Drew reaches the Submit button. Concretely: (1) Required fields validate on blur — if Drew tabs past a required field, a gentle inline indicator appears immediately: 'This field is needed' with a warm border color change (--signal-warn), not a red alert. (2) Format validation (e.g., phone number, email) provides immediate formatting feedback as Drew types — the field shows the formatted result in real time. (3) Pre-populated fields that have derivation errors (e.g., wrong nightly rate from monthly rent) are flagged before Drew sees them — the flag says 'This looks different from what you told Bryant — please check' in Drew's language. (4) The Submit button remains enabled but, if errors exist, clicking it scrolls to the first error and pulses the error indicator. No modal dialog, no page-top error summary, no form reset.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing.",
          "insight": "Satisficing means Drew will not review a form before submitting. He will scan the pre-populated values, accept them if they look reasonable, and click Submit. If an error exists in a field he scanned past, he will not catch it voluntarily. The system must catch it for him, at the moment he leaves the field."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew confirms his rent in 3 seconds. If the platform pre-populates $2,000 but a derivation error shows $1,857 as the nightly equivalent, Drew's scan may accept both numbers without noticing the inconsistency. Inline validation must flag derivation mismatches proactively."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.",
          "insight": "Post-submission errors feel like the platform's fault, not Drew's. They erode confidence. Inline prevention feels like the platform is helping Drew get it right — which builds confidence. The interaction pattern affects trust."
        },
        {
          "source": "drew-call.txt, 02:57-03:03",
          "type": "host_call",
          "quote": "regarding security deposit or damage deposit. Is that something you charge? ... 1000.",
          "insight": "Drew answers deposit questions instantly. If the platform's deposit field has a minimum requirement that Drew's $1,000 doesn't meet, inline validation should flag this the moment Drew enters (or confirms) the value — not after he submits the entire form."
        }
      ],
      "priority": "high",
      "states": {
        "default": "All form fields display their values (pre-populated or empty) with standard styling. No validation indicators are visible. The form looks clean and inviting — not guarded by rules.",
        "loading": "During initial data population (pre-filling from call data), fields show skeleton placeholders. Once data arrives, fields populate and any pre-validation issues are flagged immediately — the form arrives pre-validated, not pre-filled-and-unchecked.",
        "empty": "Empty required fields show a placeholder in Drew's language ('e.g., Comfortable Chelsea 1BR' for listing title). On blur without input, the field's border shifts to --signal-warn (#c17a28) and a single-line message appears below: 'We need this to create your listing.' No red, no exclamation marks, no 'Error: required field.'",
        "error": "Inline error state: the field's border shifts to --signal-warn (not --signal-danger — warm, not alarming). A single-line message appears directly below the field explaining what's needed in conversational language. The field label remains visible. If Drew scrolls past the error to Submit, clicking Submit scrolls back to the first error and gently pulses the error indicator (2 pulses, 300ms each).",
        "success": "On valid input, the field's border returns to default. No green checkmarks, no 'Valid!' messages — the absence of error indicators IS the success signal. Over-celebrating correct input is as distracting as over-punishing errors. The form should feel calm when things are right."
      },
      "transition_principle": "Validation indicators appear with a gentle fade-in (150ms, out easing) when Drew leaves an invalid field, and disappear with an equally gentle fade-out when Drew corrects the value. The transition is subtle — the indicator 'arrives' rather than 'appears.' No sudden color changes, no shaking animations, no jarring red borders. The tone is helpful, not punitive: the platform is guiding Drew, not scolding him.",
      "timing": {
        "response_target": "Validation triggers on blur (when Drew leaves the field) with a 100ms debounce to prevent flickering. Visual feedback appears within 200ms of validation completion. Format-as-you-type validation (e.g., phone numbers) updates with each keystroke, debounced at 50ms.",
        "easing": "cubic-bezier(0.16, 1, 0.3, 1) — the 'out' easing for both appearance and disappearance of validation indicators. Smooth and unobtrusive.",
        "rationale": "On-blur validation catches errors at the moment of maximum relevance — Drew just interacted with the field, so the error context is fresh. Post-submission validation forces Drew to re-find and re-contextualize the error. The 100ms debounce prevents validation from firing on focus-then-immediate-blur (e.g., tabbing through fields quickly)."
      },
      "journey_state_awareness": "During listing_creation (Drew's first form experience), validation messages should use language from the call: 'What would you like to call your place?' not 'Title is required.' During pricing, validation should reference the known amount: 'Your monthly rent is $2,000 — does this nightly rate look right?' During proposal_mgmt, validation is minimal (most fields are read-only confirmations) but counter-offer fields should validate in real time to prevent Drew from submitting an impossible counter.",
      "edge_cases": [
        "Drew never leaves a field (types and immediately clicks Submit) — Submit should trigger validation on all fields simultaneously, with scroll-to-first-error behavior",
        "Pre-populated values that are technically valid but inconsistent with call data (e.g., address slight mismatch) — use a softer 'info' indicator (--signal-info) instead of a warning, with 'Please confirm this is correct'",
        "Drew pastes a long text block into a character-limited field — truncate gracefully and show remaining character count, not an error",
        "Multiple fields have errors simultaneously — number the errors sequentially in the inline messages ('1 of 3: We need your listing title') so Drew knows how many remain"
      ]
    },
    {
      "id": "behaves-005",
      "type": "interaction_pattern",
      "title": "Fallback-to-Bryant Escape Hatch at Every Dead End",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew's call ends with Bryant offering himself as a permanent fallback: 'if you have any questions for me, you can feel free to text me or email me' (05:38). This means Drew has a mental escape hatch: whenever the platform confuses him, his instinct is to text Bryant. The problem is not that Drew contacts Bryant — it's that the platform has no awareness of when Drew is confused and offers no in-context path back to Bryant. Drew must leave the platform entirely (open his phone, find Bryant's contact, compose a text) to use the escape hatch. By the time he gets a response, he may have forgotten what he was doing. Krug Ch. 2: 'If we find something that works, we stick to it.' If Drew discovers that texting Bryant works better than using the platform, he will never learn to use the platform. The platform must intercept the 'I'm confused' moment and offer the Bryant fallback in context, before Drew leaves.",
      "solution": "Place a contextual 'Ask Bryant' button at every potential dead end — error states, empty states, unfamiliar concepts, and complex decision points. The principle: whenever the platform cannot provide self-evident guidance, it should offer the human fallback within the same screen. Concretely: (1) Every error state includes 'Need help? Message Bryant' as a secondary action below the retry button. (2) Every unfamiliar platform concept (lease style, pricing model, counter-offer mechanics) includes a 'Not sure? Bryant can explain' link. (3) The global navigation includes a persistent 'Bryant' icon or chat shortcut that is always one tap away. (4) The 'Ask Bryant' action should pre-fill context: 'Drew has a question about [the proposal from Ariel & Amber] while [reviewing pricing].' Bryant receives a message that includes the host's current screen and context, reducing back-and-forth.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:38-05:50",
          "type": "host_call",
          "quote": "if you have any questions for me, you can feel free to text me or email me... Sounds good. Anything else for me?",
          "insight": "Bryant explicitly establishes the escape hatch. The platform must honor this promise by making Bryant accessible from within the platform, not requiring Drew to leave the platform to reach him."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "If we find something that works, we stick to it. Once we find something that works — no matter how badly — we tend not to look for a better way.",
          "insight": "If texting Bryant outside the platform works, Drew will never use the platform's help features. The platform must make the in-context Bryant contact easier than the out-of-platform text message — or Drew will permanently bypass the platform for human support."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Making pages self-evident is like having good lighting in a store: it just makes everything seem better.",
          "insight": "The Bryant escape hatch is the 'store employee' analog: when the store layout fails, you ask a human. But the human must be visible and available on the store floor — not in a back office. The 'Ask Bryant' button must be as visible and available as a store employee walking the floor."
        },
        {
          "source": "drew-call.txt, 04:46-05:01",
          "type": "host_call",
          "quote": "if you can text me your email address, I will send you pictures... Sounds good. I'll do that.",
          "insight": "Drew defaults to the simplest communication channel (text) for sharing assets. The platform's 'Ask Bryant' function should feel equally simple — not a support ticket form, not a chatbot, but a direct message to Bryant that feels like a text."
        }
      ],
      "priority": "medium",
      "states": {
        "default": "A small, persistent 'Bryant' avatar or icon sits in a fixed position (bottom-right corner or in the global nav). It's always visible but visually recessive — not competing with the primary content. On hover/tap, it expands to show 'Message Bryant' with a text input field pre-filled with context.",
        "loading": "When the host sends a message, the button shows a subtle sending indicator (the avatar gets a small progress ring). The message is sent asynchronously — Drew does not wait for a response before continuing to use the platform.",
        "empty": "If Bryant has not been assigned to this host (edge case), the escape hatch shows 'Message your Split Lease agent' instead. The function works the same — the message routes to the appropriate agent.",
        "error": "If the message fails to send (network issue), the button shows a retry indicator with the message preserved: 'Message not sent — [Tap to retry].' The message text is never lost.",
        "success": "After sending, the button briefly shows a checkmark ('Sent to Bryant') that fades back to the default avatar after 2 seconds. If Bryant responds, a notification badge appears on the avatar."
      },
      "transition_principle": "The Bryant escape hatch expands and collapses in place — it never opens a new page or modal. The expansion is a smooth scale animation (200ms, spring easing) that feels like opening a small drawer. Drew's context is never lost. The message input appears inline, below the avatar, overlaying the bottom portion of the screen with a semi-transparent background that dims the content behind it without hiding it entirely.",
      "timing": {
        "response_target": "The escape hatch should expand within 150ms of tap. The context pre-fill (current screen, current action) should populate within 100ms. Message sending should feel instant (optimistic UI — 'Sent' appears immediately, actual delivery happens in background).",
        "easing": "cubic-bezier(0.34, 1.56, 0.64, 1) — spring easing for the expansion, creating a friendly, approachable 'pop open' that makes the escape hatch feel inviting rather than transactional.",
        "rationale": "Spring easing makes the escape hatch feel human — it bounces slightly like a conversation starting, not like a form opening. The 150ms expansion time is fast enough to feel responsive but slow enough to be perceived as an animation rather than an instant state change."
      },
      "journey_state_awareness": "During onboarding (first visit), the Bryant avatar should be more prominent — slightly larger, with a subtle pulse animation on first appearance and a tooltip: 'Bryant is here if you need help.' During active_lease (recurring visits), the avatar recedes to minimal size — Drew knows it's there. During listing_creation and pricing (high-confusion phases), the avatar should respond to inactivity: if Drew hasn't interacted with the page for 30 seconds, the avatar gently pulses once as a reminder.",
      "edge_cases": [
        "Drew sends multiple messages in quick succession — queue them as a single conversation thread, don't create separate tickets",
        "Bryant is offline (nights, weekends) — the escape hatch should still work but set expectations: 'Bryant will see this when he's back. For urgent issues, call [number]'",
        "Drew uses the escape hatch on every page (over-reliance) — after 3+ messages in a session, gently offer self-service alternatives: 'Here's a quick guide for [current topic] — or Bryant can help'",
        "The message context pre-fill includes sensitive data (pricing, guest details) — ensure the pre-fill only includes data Bryant already has access to, not data from other hosts or system internals"
      ]
    },
    {
      "id": "behaves-006",
      "type": "interaction_pattern",
      "title": "Convention-Matching Hover and Click Affordances",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "problem": "Krug Ch. 3 warns that unclear clickability is a trust-eroding problem: 'when you force users to think about something that should be mindless like what's clickable, you're squandering the limited reservoir of patience and goodwill.' Drew maps everything to conventions he already knows. When he encounters a UI element, his System 1 classifies it instantly: 'that's a button' or 'that's a heading' or 'that's a link.' This classification is based on visual conventions — filled rectangles are buttons, underlined text is links, large bold text is headings. If the platform uses a filled rectangle for a non-interactive status badge (same shape as a button), Drew's hand reaches for it — and nothing happens. Each false affordance erodes trust. Conversely, if an interactive element looks like static text (no underline, no button shape, no hover change), Drew will never discover it. The interaction pattern must ensure that hover states, click targets, and cursor changes follow the conventions Drew expects.",
      "solution": "Implement a strict affordance convention: (1) Every clickable element must have a visible hover state that changes cursor to pointer, shifts background color (darken by 8-12%), and optionally adds a subtle shadow. Drew's eye-hand coordination relies on hover feedback to confirm 'yes, this is clickable.' (2) Every non-clickable element must NOT respond to hover — no cursor change, no color shift, no shadow. Static content is static. (3) Buttons must use filled shapes (rounded rectangles) exclusively. No other UI element may use a filled shape of the same color. (4) Text links must use underline or a distinct link color (--secondary-purple) that never appears on non-interactive text. (5) Cards that are entirely clickable must show a hover state across the entire card (shadow lift + slight scale) and cursor:pointer. Cards that are NOT clickable must not respond to hover at all — no partial clickability where only the title is a link but the card body is not.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Since a large part of what people are doing on the Web is looking for the next thing to click, it's important to make it obvious what's clickable and what's not.",
          "insight": "Drew's scanning behavior is search-for-next-click behavior. The hover state is the confirmation signal that his scan target is correct. Without it, Drew must guess — and guessing is thinking, which violates Krug's First Law."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "On Senator Orrin Hatch's Home page... it wasn't clear whether everything was clickable, or nothing was.",
          "insight": "The Hatch example demonstrates the worst case: when everything looks the same, nothing signals clickability. The platform must create a clear visual gap between interactive and non-interactive elements through hover states, shapes, and cursor behavior."
        },
        {
          "source": "drew-call.txt, 04:21-04:38",
          "type": "host_call",
          "quote": "one more question I had was about pictures of the space and wondered if you had any more... Yes. I have more pictures and I can send you.",
          "insight": "Bryant's photo request is a clear verbal affordance — Drew knows he's being asked to act. The platform's photo upload trigger must have equally clear visual affordance: a distinct upload button or drop zone with unmistakable 'click me' styling."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "insight": "Hover states are the mechanism by which Drew 'gets' what's interactive. Without hover feedback, Drew must click speculatively — which is the opposite of self-evident interaction."
        }
      ],
      "priority": "medium",
      "states": {
        "default": "Interactive elements display their resting visual state: buttons have filled backgrounds (--secondary-purple), text links have underlines or distinct link color, form fields have visible borders. Non-interactive elements have no interactive styling — no underlines on headings, no button shapes on badges, no link colors on labels.",
        "loading": "Interactive elements that trigger async operations show a loading state within the element itself (spinner inside the button, progress bar inside the link). The element remains in its clicked/active visual state during loading — it does not return to the default hover state, which would suggest 'click me again.'",
        "empty": "Not applicable — affordance conventions apply to all elements regardless of data state.",
        "error": "If clicking an interactive element results in an error, the element returns to its default state (not the hover state) and an inline error appears nearby. The element remains clickable for retry. The error state should not change the element's affordance — it's still a button, it still looks clickable, it just shows what went wrong.",
        "success": "After successful click, interactive elements either (a) transition to a success state (checkmark, green border) for confirmation actions, or (b) navigate to the next screen for navigation actions. In both cases, the hover state is replaced by the success/navigation transition — the element should never show a 'you can click again' hover state immediately after a successful click."
      },
      "transition_principle": "Hover transitions are instant on entry (0ms delay — the hover state appears the moment the cursor enters the element) and fade out over 150ms on exit (the hover state lingers briefly as the cursor leaves, preventing flickering). Click/active states darken the element by an additional 5% and scale it to 0.98 for 100ms, creating a subtle 'press' effect. These timing conventions must be consistent across ALL interactive elements — buttons, links, cards, form fields — so Drew's muscle memory builds a reliable 'this is how interactive things feel on Split Lease.'",
      "timing": {
        "response_target": "0ms for hover state appearance (instant). 150ms for hover state fade-out. 100ms for click/active state. Consistent across all interactive element types.",
        "easing": "cubic-bezier(0.16, 1, 0.3, 1) — the 'out' easing for hover fade-out. Linear for click/active state (the press should feel mechanical and immediate, not bouncy).",
        "rationale": "Instant hover entry ensures Drew gets immediate feedback when his cursor finds an interactive element. The 150ms fade-out prevents the flickering that occurs when a cursor grazes an element's edge. The 100ms click state is fast enough to feel responsive but slow enough to be perceived as physical feedback."
      },
      "journey_state_awareness": "Hover conventions must be identical across all journey phases — they are a platform-level interaction language, not a phase-specific pattern. The one exception: during onboarding (first visit), the primary CTA button may have a subtle persistent glow or shadow that draws attention before hover, gradually fading after Drew's first successful click as he learns the convention.",
      "edge_cases": [
        "Touch devices (no hover) — clickable elements must be identifiable without hover, through shape and color alone. The filled-shape convention for buttons and the underline convention for links provide this redundancy",
        "Keyboard navigation (tab focus) — focus states must be as visually distinct as hover states, using a visible focus ring (2px solid --secondary-purple) that is never suppressed",
        "Elements that change clickability based on state (e.g., a disabled button that becomes enabled) — the transition from non-interactive to interactive must include the appearance of hover affordance. The element should 'wake up' with a subtle animation (opacity 0.5 → 1.0, 200ms) when it becomes interactive",
        "Dropdown menus where hover behavior differs from click behavior — hover opens the menu preview, click selects. The distinction must be communicated through cursor change (pointer on hover) and visual feedback (highlight on hover, fill on click)"
      ]
    }
  ]
}
### layer-5/feels-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "feels-001",
      "type": "emotional_element",
      "title": "Zero-Friction Continuity After the Call",
      "journey_phases": [
        "onboarding",
        "listing_creation"
      ],
      "problem": "Drew's call with Bryant is effortless — six minutes of conversational flow where Drew never struggles, never hesitates, never asks 'what do I do?' The call ends with Drew in a state of easy momentum: 'Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, can we maybe move on?' This momentum is fragile. The moment Drew clicks Bryant's follow-up link and encounters a platform that looks, feels, or speaks differently from the call, the effortless feeling shatters. The emotional challenge is not confusion — it's the jarring shift from 'someone is taking care of this for me' to 'now I have to figure this out alone.' Krug's First Law ('Don't make me think!') is fundamentally an emotional principle: thinking feels like work, and work feels like friction, and friction feels like the platform doesn't respect Drew's time. The call set an emotional baseline of zero friction. Every millisecond of thinking the platform demands is felt as a betrayal of that baseline.",
      "solution": "The platform's first screen must emotionally feel like opening a note from Bryant, not like logging into a new system. The tonal principle is: continue the conversation, don't start a new one. Every piece of copy, every layout choice, every interaction on the first three screens must sustain the feeling that Drew is still in Bryant's care — that the platform is Bryant's tool, not a separate entity. The emotional target is the feeling you get when a friend texts you a link and you open it to find exactly what they described: recognition, not discovery. Achievement of this requires: (1) Using Bryant's name and voice in platform copy. (2) Showing Drew information he already knows (his apartment, the guests Bryant mentioned) before asking for anything new. (3) Making the first action a confirmation, not a creation — 'Is this your place?' not 'Create your listing.'",
      "evidence": [
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "insight": "Drew's closing tone is impatient-but-positive — he wants momentum, not explanation. The word 'move on' reveals his emotional state: he considers the conversation handled and wants the next step to be equally fast. The platform must match this 'moving on' energy, not reset it to 'getting started' energy."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "It means that as far as is humanly possible, when I look at a Web page it should be self-evident. Obvious. Self-explanatory. I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "insight": "Krug frames self-evidence as cognitive, but the emotional consequence is equally important: a self-evident page feels welcoming. A page that makes you think feels hostile. Drew's first platform screen must feel like recognition, not a test."
        },
        {
          "source": "drew-call.txt, 00:06-00:18",
          "type": "host_call",
          "quote": "Hello? Hello. Hey, is this Drew? I ain't going to be talking to you. Thanks for taking the time to chat. How you doing? I'm doing well.",
          "insight": "The call opens with warmth and personal recognition — Bryant knows Drew's name, references his space. The emotional register is casual and human. The platform's first screen must sustain this register, not shift to corporate or technical."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.",
          "insight": "Drew's 'plausible story' about the platform will be shaped by the call: 'this should feel like the conversation with Bryant, just on a screen.' If the platform violates this story, the emotional response is not just confusion — it's disappointment. The call promised ease; the platform must deliver it."
        }
      ],
      "priority": "high",
      "target_emotion": "confidence",
      "emotion_rationale": "After a smooth, guided phone call, Drew needs to feel confident that the platform is equally easy — that Bryant's competence extends to the tool Bryant uses.",
      "copy_guidelines": {
        "voice": "warm, personal, direct, Bryant-like",
        "do": [
          "Reference the call: 'Bryant set up your Chelsea apartment — let's confirm the details'",
          "Use Drew's words from the call: 'comfortable one bed, one bath' not 'Standard 1BR Unit'",
          "Address Drew by name in the first heading",
          "Frame actions as confirmations: 'Is this right?' not 'Enter your details'"
        ],
        "dont": [
          "Use system language: 'Welcome to your Split Lease Dashboard'",
          "Introduce new concepts Drew hasn't heard: 'Configure your Lease Style'",
          "Use corporate register: 'Thank you for choosing Split Lease'",
          "Start with instructions: 'To get started, complete the following steps'"
        ],
        "example_good": "Hey Drew — Bryant mentioned your Chelsea apartment. Here's what we have so far.",
        "example_bad": "Welcome to Split Lease! Complete your onboarding to get started with your listing."
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "feel_description": "Content appears like ink filling in a pre-printed form — the structure is already there, the details settle into place smoothly and quietly. No fanfare, no entrance animations. Just recognition.",
        "duration_range": "150-300ms"
      },
      "tension_relief": {
        "tension_point": "Drew clicks Bryant's email link and sees the platform for the first time — unfamiliar territory",
        "relief_point": "Drew sees his apartment name, Bryant's name, and the guests he discussed — immediate recognition",
        "timing": "Under 2 seconds from page load to recognition. The relief must precede any request for action."
      },
      "personalization_signals": [
        "Show Bryant's name and photo on the first screen — 'Bryant is your Split Lease agent'",
        "Display the property as Drew named it: 'comfortable one bed, one bath' in Chelsea",
        "Reference the specific guests: 'Ariel and Amber are interested in your space'",
        "Show the price Drew confirmed: '$2,000/month' — a number he recognizes instantly"
      ],
      "anti_patterns": [
        {
          "pattern": "Generic welcome screen with no personalization",
          "reason": "A generic welcome destroys the continuity from the call. Drew doesn't feel welcomed — he feels forgotten. The call was personal; a generic screen signals the platform doesn't know who he is.",
          "example_bad": "Welcome to Split Lease! You're one step closer to finding your perfect guest. Let's set up your profile."
        }
      ]
    },
    {
      "id": "feels-002",
      "type": "emotional_element",
      "title": "Effortless Competence at Every Scan",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "Drew is an efficient communicator who values brevity. His call responses are minimal: 'Yep. Yep.' (00:49-00:52), 'Okay. Okay. Okay. Alright.' (04:18), 'Sounds good.' (05:32, 05:50). This is not passivity — it's competence. Drew processes information quickly and signals acceptance concisely. He expects the platform to match this competence: show him what matters, let him confirm, move on. When a platform page requires reading, scrolling, interpreting, or deliberating, it communicates that the platform is less competent than Bryant. Bryant could cover a topic in 15 seconds of speech. If the platform takes 2 minutes of form-filling for the same topic, the emotional message is: 'this tool is slower than a phone call.' The host doesn't feel frustrated in the traditional sense — he feels that his time is being disrespected. Krug Ch. 2 says users scan like billboards at 60 mph. The emotional corollary is: when a billboard is clear, you feel smart. When it's cluttered, you feel lost. Drew should feel smart at every scan.",
      "solution": "Design every screen to make Drew feel like the competent, efficient person he is. The tonal principle is: respect the host's intelligence by not over-explaining. Every page should communicate its purpose in Drew's scanning speed — which is faster than most users because Drew satisfices aggressively. Copy should be short, factual, and free of persuasion (Drew is already persuaded). Forms should be pre-filled (Drew shouldn't re-enter what Bryant already knows). Actions should be one-click (Drew decides fast). The emotional signal at every interaction should be: 'We know you're busy. Here's what you need. Confirm and move on.'",
      "evidence": [
        {
          "source": "drew-call.txt, 00:49-00:52",
          "type": "host_call",
          "quote": "One bedroom, one bath. Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month... That's right.",
          "insight": "Drew confirms three facts (bedrooms, location, price) in under 10 seconds with monosyllabic responses. This is his natural pace. Any platform interaction that takes longer than this for the same information makes Drew feel like the platform is wasting his time."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "We're thinking 'great literature' (or at least 'product brochure'), while the user's reality is much closer to 'billboard going by at 60 miles an hour.'",
          "insight": "The billboard metaphor has an emotional dimension: a billboard that communicates clearly makes the driver feel oriented. A billboard that's cluttered makes the driver feel anxious. Drew's emotional state while scanning platform pages is directly proportional to the clarity of the visual hierarchy."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Using a site that doesn't make us think about unimportant things feels effortless, whereas puzzling over things that don't matter to us tends to sap our energy and enthusiasm — and time.",
          "insight": "Krug identifies the emotional consequence of unnecessary thinking: sapped energy and enthusiasm. For Drew, whose enthusiasm is already moderate (he's accommodating, not excited), any energy drain risks tipping him from 'willing' to 'not worth it.'"
        },
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Four words to accept a complex financial guarantee. Drew's emotional bandwidth for processing platform information is calibrated to this density: one conclusion per topic, one confirmation per conclusion. The platform must not expand this into paragraphs of explanation."
        }
      ],
      "priority": "high",
      "target_emotion": "momentum",
      "emotion_rationale": "Drew's call moves fast and he moves with it. The platform must sustain this forward momentum — each completed action should feel like progress, not like one step in an endless process.",
      "copy_guidelines": {
        "voice": "brief, factual, respectful of time",
        "do": [
          "Use sentence fragments that scan fast: '$2,000/mo · Chelsea · 1BR'",
          "Front-load the conclusion: 'Your rent is guaranteed' before the explanation",
          "Use numbers instead of words: '$2,000' not 'two thousand dollars per month'",
          "End wizard steps with forward momentum: 'Next: your photos' not 'Step 4 of 6 complete'"
        ],
        "dont": [
          "Over-explain: 'Split Lease's proprietary guarantee system ensures that your rental income is protected through our double-deposit mechanism'",
          "Use filler words: 'Just a few more details and you'll be all set!'",
          "Celebrate prematurely: 'Great job completing Step 3!' when 3 steps remain",
          "Add persuasive copy to a host who is already persuaded: 'Thousands of hosts trust Split Lease'"
        ],
        "example_good": "Your rent: $2,000/mo, guaranteed. Confirm →",
        "example_bad": "You're almost there! Just confirm your monthly rental rate below. Don't worry — Split Lease guarantees your income so you never have to worry about missed payments again."
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "feel_description": "Quick and purposeful — elements slide into their final position like cards being dealt by a skilled dealer. No bouncing, no pausing, no decorative motion. Every animation serves the feeling of 'this system is as fast as you are.'",
        "duration_range": "100-250ms"
      },
      "tension_relief": {
        "tension_point": "Drew encounters a multi-step form and wonders 'how long will this take?'",
        "relief_point": "Pre-filled fields and one-click confirmations show him each step takes seconds, not minutes",
        "timing": "Immediate — the pre-filled data should be visible on the first paint of each step, not loaded after a delay"
      },
      "personalization_signals": [
        "Pre-fill all known data from the call so Drew sees his own information, not blank fields",
        "Show the progress trail of completed steps as compressed summary lines — 'you've already done this much'",
        "Display time estimates that are honest and short: 'About 2 minutes left' not 'Complete your profile'",
        "Use Drew's listing title ('comfortable one bed, one bath') in step headers, not generic labels"
      ],
      "anti_patterns": [
        {
          "pattern": "Verbose explanatory copy on form pages",
          "reason": "Drew doesn't read explanations — he scans for the input field and the submit button. Paragraphs of context signal that the platform thinks Drew needs hand-holding, which contradicts his self-image as a competent, efficient person.",
          "example_bad": "In this section, you'll set your monthly rental rate. This is the amount guests will see on your listing. Split Lease recommends pricing competitively based on comparable listings in your area. You can always adjust this later."
        }
      ]
    },
    {
      "id": "feels-003",
      "type": "emotional_element",
      "title": "Guaranteed-Income Calm Throughout Financial Touchpoints",
      "journey_phases": [
        "evaluation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew accepts the payment guarantee in four words: 'Okay. Okay. Okay. Alright.' (04:18). No follow-up questions. No skepticism. No request for documentation. This is not because the guarantee is unimportant — it's because Bryant delivered it with casual authority at exactly the right moment in the conversation (after Drew had already accepted the guests conceptually). The emotional state is calm certainty: 'I get paid no matter what.' On the platform, every financial touchpoint risks disrupting this calm: pricing forms with editable fields suggest the number might be wrong; payment status pages with pending/processing labels suggest the payment might not arrive; fee breakdowns reveal deductions Drew didn't discuss with Bryant. Each financial interaction that introduces uncertainty undoes the emotional work Bryant's verbal guarantee accomplished. The challenge is maintaining the calm certainty Bryant created, across every financial screen, for the entire host journey.",
      "solution": "Every financial touchpoint must reinforce the feeling of 'your money is handled — you don't need to worry about this.' The tonal principle is: present financial information as settled fact, never as pending question. Use mono typography (IBM Plex Mono) for dollar amounts to signal precision and reliability. Display guaranteed amounts prominently; show fee deductions only in expandable detail sections. Use language that echoes Bryant's guarantee framing: 'Your guaranteed rent' not 'Expected payout.' Never use words like 'estimated,' 'projected,' or 'pending' for guaranteed amounts — these words introduce doubt where Bryant established certainty. The payment status should feel like checking a bank balance: calm, factual, precise — not like tracking a package: anxious, uncertain, waiting.",
      "evidence": [
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment... Okay. Okay. Okay. Alright.",
          "insight": "Bryant's guarantee delivery is masterful: he states it as fact ('guarantees'), removes the risk ('doesn't have any effect on you'), and confirms the outcome ('you still receive the payment'). Drew's emotional response is calm acceptance. Every financial display on the platform must achieve this same emotional outcome — fact, risk removal, outcome confirmation."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.",
          "insight": "Financial ambiguity erodes confidence. If Drew sees 'Estimated payment: ~$1,850' instead of 'Your guaranteed rent: $2,000,' the approximation signals that the platform isn't sure — which means the guarantee might not be real. Precision in financial display IS confidence."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew's price is a fact: $2,000. Not an estimate, not a range, not a suggestion. The platform must present this number with the same factual certainty Drew has about it."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "There's not much of a penalty for guessing wrong. Unlike firefighting, the penalty for guessing wrong on a Web site is usually only a click or two of the Back button.",
          "insight": "Krug says web interactions are low-stakes. But financial interactions feel high-stakes to hosts — money is real. The platform must counteract this natural anxiety by making financial displays feel as low-stakes as the rest of the web experience. The guarantee is the mechanism; the visual calm is the emotional delivery."
        }
      ],
      "priority": "high",
      "target_emotion": "calm",
      "emotion_rationale": "Financial anxiety is the deepest emotional risk in the host journey. Bryant neutralized it with a casual verbal guarantee. The platform must sustain this calm across every dollar sign Drew encounters.",
      "copy_guidelines": {
        "voice": "precise, authoritative, calming",
        "do": [
          "Use 'guaranteed' as an adjective: 'Your guaranteed rent: $2,000/mo'",
          "State amounts as facts: '$2,000' — exact, not rounded or estimated",
          "Use past tense for completed payments: 'Paid on Feb 1' not 'Payment processed'",
          "Echo Bryant's language: 'doesn't affect you' when explaining the guarantee"
        ],
        "dont": [
          "Use uncertain language: 'Estimated payout,' 'Expected by,' 'Approximately'",
          "Show fee deductions prominently — they introduce 'wait, I'm getting less than $2,000?' anxiety",
          "Use financial jargon: 'Net disbursement,' 'Gross receivable,' 'Fee schedule'",
          "Show pending states for guaranteed amounts: 'Processing...' implies it might not arrive"
        ],
        "example_good": "Your guaranteed rent: $2,000 · Paid on the 1st of every month",
        "example_bad": "Estimated monthly payout: $1,850.00 (after Split Lease service fee of 7.5%). Payment processing may take 3-5 business days."
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "feel_description": "Settled and still. Financial numbers should appear and stay — no counting animations, no rolling digits, no progressive reveals. The number is a fact. It arrives as a fact. Like checking a bank statement: the balance is just there.",
        "duration_range": "100-200ms"
      },
      "tension_relief": {
        "tension_point": "Drew wonders 'will I actually get paid?' when he sees the platform's financial section for the first time",
        "relief_point": "The first financial display shows 'Your guaranteed rent: $2,000/mo' in authoritative mono typography with no caveats",
        "timing": "The guaranteed amount must be the first financial number Drew sees — before any fees, deductions, or payment schedules"
      },
      "personalization_signals": [
        "Show Drew's specific guaranteed amount ($2,000) — never a generic 'your rate'",
        "Display the guarantee as linked to his specific property: 'Guaranteed for your Chelsea apartment'",
        "In active lease, show cumulative earnings: 'You've earned $6,000 across 3 months' — concrete evidence the guarantee works",
        "Payment notifications should come from Bryant's name, not 'Split Lease Payments'"
      ],
      "anti_patterns": [
        {
          "pattern": "Showing fee deductions before the guaranteed total",
          "reason": "If Drew sees '$2,000 - $150 fee = $1,850 payout' before he sees '$2,000 guaranteed,' his first emotional response is loss ('I'm losing $150') not calm ('I'm getting $2,000'). The deduction introduces doubt about the guarantee. Show the guarantee first; make deductions a discoverable detail.",
          "example_bad": "Monthly breakdown: Base rent $2,000.00 | Split Lease fee -$150.00 | Net payout: $1,850.00"
        }
      ]
    },
    {
      "id": "feels-004",
      "type": "emotional_element",
      "title": "I'm-Almost-Done Momentum in Multi-Step Flows",
      "journey_phases": [
        "listing_creation",
        "onboarding"
      ],
      "problem": "Drew's call ends with impatience: 'can we maybe move on?' (05:52-06:14). He's efficient, he's accommodating, but he does not enjoy process for its own sake. The listing wizard has 6 steps. Krug Ch. 2 establishes that users are 'usually in a hurry.' The emotional risk of a multi-step flow is not that any single step is hard — it's that the host doesn't know when it ends. Unknown duration creates anxiety that compounds with each step: 'How many more? Am I halfway? Almost done?' This anxiety is independent of difficulty — even easy steps feel burdensome when you can't see the finish line. The emotional challenge is maintaining Drew's 'moving on' energy across 6 steps without letting the uncertainty of remaining steps convert his momentum into resignation.",
      "solution": "Design multi-step flows to always communicate 'you're closer to done than you think.' The tonal principle is: every step should feel like one of the last steps, never like one of the first. Achieve this through: (1) Visual progress that is front-weighted — show progress as a filling bar that moves fastest in the first half, creating a perception of rapid advancement. (2) Compressed summaries of completed steps that accumulate visibly above the current step — Drew can see his answers piling up, proving he's made progress. (3) Copy that frames each step as 'almost done': 'One more thing' is better than 'Step 5 of 6.' (4) Pre-filled steps that require only confirmation count as 'done before you started' — if 4 of 6 steps are pre-filled, Drew effectively has a 2-step wizard.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "insight": "'Can we maybe move on?' is the emotional signal that Drew values completion over thoroughness. He would rather skip a step than spend an extra minute on it. The platform must make every step feel fast enough that Drew never considers skipping."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Introduction",
          "type": "book",
          "quote": "If something is hard to use, I just don't use it as much.",
          "insight": "Krug's wife's quote defines the behavioral consequence: perceived difficulty reduces usage. A 6-step wizard that feels like 6 steps will be abandoned more often than a 6-step wizard that feels like 2 steps of confirmation plus a photo upload."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Introduction",
          "type": "book",
          "quote": "If it's short, it's more likely to actually be used... there's a limit to how much is useful to learn.",
          "insight": "Krug applied this to his own book — keeping it short so people would actually read it. The same principle applies to the wizard: keeping it (or making it feel) short so people will actually complete it. Perceived length matters as much as actual length."
        },
        {
          "source": "drew-call.txt, 00:40-00:52",
          "type": "host_call",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month... That's right.",
          "insight": "Drew confirms his listing's core details in 12 seconds. If the wizard's first 3 steps are pre-filled confirmations of these same details, Drew experiences them as '3 seconds each' — a 9-second process. The wizard emotionally shrinks from 6 steps to 3."
        }
      ],
      "priority": "high",
      "target_emotion": "momentum",
      "emotion_rationale": "Drew wants to move forward efficiently. The feeling of momentum — of progress accumulating visibly and rapidly — prevents the 'how much longer?' anxiety that kills wizard completion.",
      "copy_guidelines": {
        "voice": "encouraging, concise, progress-oriented",
        "do": [
          "Use 'last step' and 'almost done' language when genuinely close to completion",
          "Frame pre-filled steps as already done: 'We got this from your call with Bryant ✓'",
          "Show remaining effort, not remaining steps: 'Just your photos left' not 'Step 5 of 6'",
          "Use 'and' to connect the current step to the end: 'Add photos and you're live'"
        ],
        "dont": [
          "Number steps prominently: 'Step 3 of 6' creates a '50% done' feeling at a point where Drew has confirmed 3 pre-filled screens in 15 seconds",
          "Use 'just a few more' when there are more than 2 steps remaining — it feels dishonest",
          "Celebrate each step completion individually: 'Great job!' after each step feels patronizing",
          "Show a long, detailed progress bar that emphasizes how much remains"
        ],
        "example_good": "Photos are the last thing we need — then your listing goes live.",
        "example_bad": "Step 5 of 6: Upload Photos. You're 83% complete! Keep going!"
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "feel_description": "The completed step snaps into a compressed summary with a satisfying settle — like a card being filed. The new step rises smoothly into view. The overall feeling is of a deck of cards being sorted: each one slots into place quickly, and the remaining stack gets visibly thinner.",
        "duration_range": "250-400ms"
      },
      "tension_relief": {
        "tension_point": "Drew sees a multi-step wizard and estimates 'this is going to take a while'",
        "relief_point": "The first 2-3 steps are pre-filled confirmations that each take 3 seconds — Drew realizes the wizard is faster than he expected",
        "timing": "The relief should arrive within the first 30 seconds of wizard entry. If the first steps are pre-filled, Drew should reach the first genuinely new input (photos or rules) within 20 seconds."
      },
      "personalization_signals": [
        "Show pre-filled data attributed to Bryant: 'From your call with Bryant' annotation on confirmed fields",
        "Display elapsed time subtly: 'Started 45 seconds ago' on the last step — making Drew aware of how fast this actually was",
        "Show the listing preview building in real time as Drew progresses — his apartment taking shape"
      ],
      "anti_patterns": [
        {
          "pattern": "Prominent step counters that emphasize total steps over progress",
          "reason": "A prominent 'Step 2 of 6' counter makes Drew feel like he's at the beginning of a long process, even if steps 1-4 are 3-second confirmations. The counter creates an emotional ceiling ('6 things to do') that overshadows the reality ('3 of these are already done').",
          "example_bad": "STEP 2 OF 6 ━━●━━━━━ Property Features"
        }
      ]
    },
    {
      "id": "feels-005",
      "type": "emotional_element",
      "title": "Somebody-Knows-Me Recognition at Recurring Touchpoints",
      "journey_phases": [
        "active_lease",
        "proposal_mgmt",
        "retention"
      ],
      "problem": "Drew is not a power user. He will visit the platform infrequently — to check payment status, to review a new proposal, to decide on renewal. Each return visit is a mini-evaluation: 'Is this still the thing I signed up for? Does it still know who I am?' Krug Ch. 2: 'If we find something that works, we stick to it.' But Drew's alternative 'thing that works' is texting Bryant, which always knows who he is. The platform's recurring touchpoints must compete with texting's inherent personalization. A dashboard that shows generic content ('Your listings,' 'Your payments') fails the recognition test. A dashboard that shows Drew's specific context ('Your Chelsea apartment,' '$6,000 earned since March,' 'Ariel's lease ends June 30') passes it. The emotional challenge is making an infrequently-visited platform feel like it remembers Drew — not like it's meeting him for the first time every visit.",
      "solution": "Every recurring screen must open with a personalization signal that proves the platform knows Drew's specific situation. The tonal principle is: greet with context, not with chrome. The first piece of information on any return visit should be something only Drew would see — his property, his guests, his earnings. This is the digital equivalent of walking into a store where the staff remembers your name and your last purchase. Achieve this through: (1) Dashboard headlines that reference Drew's specific property and guests, not generic labels. (2) Time-aware greetings that reference the current state of Drew's lease: 'Ariel is in month 3 of 4' not 'Active Lease.' (3) Proactive surfacing of the most likely reason Drew is visiting: if a payment was just deposited, show it prominently; if a renewal decision is approaching, surface it. (4) Never show an empty or generic state for a host who has active data — every screen should reflect Drew's reality.",
      "evidence": [
        {
          "source": "drew-call.txt, 00:40-00:49",
          "type": "host_call",
          "quote": "Which I've got potluck. Exactly. You think it was be too much? Uh, the title of it is the comfortable one bed, one bath.",
          "insight": "Bryant references Drew's specific listing by title. Drew recognizes it instantly. The platform must achieve this same instant recognition on return visits — show the listing by Drew's own title, not by a system ID."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "insight": "On return visits, 'getting it' means instantly recognizing 'this is my dashboard, these are my numbers, this is my situation.' Personalized context is what makes a return visit self-evident. Generic dashboards force Drew to re-orient every time."
        },
        {
          "source": "drew-call.txt, 01:32-02:02",
          "type": "host_call",
          "quote": "Ariel and Amber are both flexible... they both work in Manhattan... essentially they'd be using this space as a place to come back to after work.",
          "insight": "Drew knows his guests by name and situation. During active lease, the dashboard should reference the guests by name and show their current status — not anonymous occupancy indicators."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "If we find something that works, we stick to it. Once we find something that works — no matter how badly — we tend not to look for a better way.",
          "insight": "If the platform feels personal and contextual on Drew's first return visit, he'll stick with it. If it feels generic, he'll stick with texting Bryant. The first return visit is the stickiness test."
        }
      ],
      "priority": "medium",
      "target_emotion": "safety",
      "emotion_rationale": "Returning to a platform that remembers you feels safe — it signals stability, reliability, and care. Safety is the emotion that converts a one-time user into a repeat user.",
      "copy_guidelines": {
        "voice": "contextual, specific, quietly attentive",
        "do": [
          "Open with Drew's specific data: 'Your Chelsea apartment · Ariel & Amber · Month 3 of 4'",
          "Reference the most recent event: 'Your February rent ($2,000) was deposited yesterday'",
          "Anticipate Drew's likely question: 'Ariel's lease ends June 30 — we'll check in about renewal soon'",
          "Use time-relative language: 'This month' not 'February 2026'"
        ],
        "dont": [
          "Use generic greetings: 'Welcome back, Drew!' with no context",
          "Show empty-state defaults for data that exists: 'No recent activity' when there is recent activity",
          "Display system timestamps: '2026-02-01T00:00:00Z' instead of 'Feb 1'",
          "Bury personalized data below generic platform content (announcements, tips, promotions)"
        ],
        "example_good": "Your Chelsea apartment · Ariel & Amber in month 3 · $6,000 earned so far",
        "example_bad": "Dashboard — Your Listings (1) · Payments · Messages · Settings"
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "feel_description": "Data appears without announcement — it's just there, like opening a familiar notebook to the right page. No entrance animations on return visits. The platform should feel like it was waiting for Drew, already showing his information, not loading it on demand.",
        "duration_range": "0-150ms"
      },
      "tension_relief": {
        "tension_point": "Drew returns to the platform after weeks and wonders 'is my money coming? is everything okay?'",
        "relief_point": "The first screen shows his payment status (deposited), his guest status (active), and his lease timeline — all healthy",
        "timing": "Under 1 second from page load. The relief data must be in the first viewport, above the fold, before any scroll."
      },
      "personalization_signals": [
        "Show cumulative earnings with the word 'guaranteed': '$6,000 earned · guaranteed through June'",
        "Display guest status by name: 'Ariel — checked in · Amber — checked in'",
        "Show the next important date proactively: 'Next payment: March 1'",
        "Reference the property by Drew's title, not an address: 'comfortable one bed, one bath'"
      ],
      "anti_patterns": [
        {
          "pattern": "Generic dashboard with navigation-focused layout instead of data-focused layout",
          "reason": "A navigation-focused dashboard ('Listings | Payments | Messages | Settings') forces Drew to choose where to go before seeing any information. A data-focused dashboard shows Drew his most important information immediately and lets him drill into sections only if needed. Navigation-first feels like a filing cabinet; data-first feels like a personal briefing.",
          "example_bad": "Welcome back! Use the navigation menu to access your listings, payments, messages, and account settings."
        }
      ]
    },
    {
      "id": "feels-006",
      "type": "emotional_element",
      "title": "Smart-Default Relief for Pre-Decided Choices",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "problem": "Drew satisfices on every decision in the call. He does not compare, evaluate, or deliberate. He accepts the first reasonable option and moves on. Krug Ch. 2: 'we choose the first reasonable option, a strategy known as satisficing.' On the platform, this means Drew will accept whatever default is presented without examining it closely. This creates a dual emotional risk: (1) If defaults are correct, Drew feels relief — 'they already know what I want.' (2) If defaults are wrong, Drew doesn't notice — and later discovers an error, which feels like betrayal: 'the platform got it wrong and I trusted it.' The emotional challenge is making defaults feel trustworthy enough to deserve Drew's satisficing behavior. The host must feel that accepting the default is not just easy but smart — that the platform's recommendation is genuinely the right answer, not a lazy placeholder.",
      "solution": "Present every default with transparent provenance — where the value came from and why it's the right answer. The tonal principle is: earn the satisfice. Don't just show '$2,000/month' — show '$2,000/month (from your call with Bryant).' Don't just show 'Entire apartment' — show 'Entire apartment (1BR/1BA, confirmed).' The provenance annotation is a one-line trust signal: it tells Drew 'this isn't a guess, it's based on what you already told us.' This transforms the default from 'a number the system generated' to 'your number, remembered.' The annotation should be subtle (small text, muted color) so it doesn't slow Drew's scan, but present enough that Drew's peripheral vision catches 'from your call' as a trust cue.",
      "evidence": [
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Drew's acceptance pattern shows zero deliberation. On the platform, he will accept defaults with the same zero-deliberation pattern. The defaults must deserve this trust — and the provenance annotation is how the platform signals that they do."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing.",
          "insight": "Satisficing is efficient when the first reasonable option is correct. The platform must ensure this by pre-populating from verified data (the call) and showing the source — turning 'first reasonable option' into 'first correct option.'"
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Even Bryant attributes the data to its source: 'I think is what it's listed here.' He doesn't claim to know Drew's price — he references where he found it. The platform should do the same: '$2,000/month — from your listing' or 'from your call with Bryant.'"
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand.",
          "insight": "An un-annotated default creates a subtle question mark: 'Where did this number come from? Is it right?' A provenance annotation eliminates this question mark: 'Oh, it's from my call. That's right.' The annotation does the thinking for Drew."
        }
      ],
      "priority": "medium",
      "target_emotion": "relief",
      "emotion_rationale": "Seeing your own data already filled in correctly produces relief — the pleasant surprise of discovering that someone did the work for you. Relief reinforces trust and encourages the host to continue.",
      "copy_guidelines": {
        "voice": "transparent, attributive, quietly helpful",
        "do": [
          "Annotate defaults with their source: '$2,000/mo (from your call with Bryant)'",
          "Use 'confirmed' language for verified data: 'Chelsea, NY — confirmed'",
          "Frame pre-filled fields as a service: 'We saved you some typing' (subtle, once, not on every field)",
          "Show the 'Change' option as subordinate: small text link, not a button"
        ],
        "dont": [
          "Present defaults without provenance: a bare '$2,000' in a text field feels arbitrary",
          "Over-annotate: provenance on every single field becomes noise — annotate only the 3-4 most consequential fields (rent, deposit, property type, location)",
          "Use uncertain language for verified data: 'We think your rent is $2,000' — the host confirmed this; don't un-confirm it",
          "Make the edit/change option as prominent as the default — this signals 'you should probably change this'"
        ],
        "example_good": "$2,000/mo — from your call with Bryant · Change",
        "example_bad": "Monthly Rate: [  $2,000  ] (You can edit this field)"
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "feel_description": "Pre-filled values appear already settled — no typing animation, no 'filling in' effect. They're just there, like finding your name already printed on a form. The provenance annotation fades in 200ms after the value, creating a subtle one-two: value appears → source appears. This micro-sequence mimics Bryant's pattern: 'That would be $2,000 a month [pause] I think is what it's listed here.'",
        "duration_range": "0ms for value, 200ms delayed fade for provenance annotation"
      },
      "tension_relief": {
        "tension_point": "Drew arrives at a form step expecting to type and fill out fields manually",
        "relief_point": "The fields are already filled with his data, attributed to the call — Drew just confirms",
        "timing": "Instant — pre-filled fields must be visible on first paint, not loaded after a delay"
      },
      "personalization_signals": [
        "Attribute pre-filled data to the specific call: 'from your call with Bryant on [date]'",
        "Show the host's own words when possible: 'comfortable one bed, one bath' as the listing title, not a platform-generated title",
        "For pricing defaults, show the math transparently: '$2,000/mo = $67/night × 30 nights' if the platform needs a nightly rate",
        "If the host's deposit differs from the standard, acknowledge it: '$1,000 deposit — your preference'"
      ],
      "anti_patterns": [
        {
          "pattern": "Editable fields styled identically to blank fields for pre-populated data",
          "reason": "When a pre-filled field looks identical to a blank field (same border, same background, same cursor), it emotionally signals 'this is an input for you to fill' rather than 'this is your data for you to confirm.' The host feels like they're doing data entry, not reviewing a summary. Pre-filled fields should use a subtly different visual treatment (tinted background, no focus border) to signal 'this is already done.'",
          "example_bad": "Monthly Rent: [ $2,000 ] — an editable text input field with blinking cursor, identical to all other empty form fields"
        }
      ]
    },
    {
      "id": "feels-007",
      "type": "emotional_element",
      "title": "Renewal as Natural Continuation, Not Re-Evaluation",
      "journey_phases": [
        "retention"
      ],
      "problem": "Drew's call establishes a lease frame of '4 months and then maybe the ability to extend' (05:18-05:32). The word 'maybe' is emotionally significant — Drew is open to extension but has not committed. At the retention touchpoint, the platform must influence whether 'maybe' becomes 'yes.' The emotional risk is that the renewal prompt triggers re-evaluation: 'Should I continue? Was this worth it? What are my alternatives?' Krug Ch. 1 warns that 'puzzling over things that don't matter to us tends to sap our energy and enthusiasm.' Re-evaluation is puzzling over something that, for a satisfied host, doesn't need to be puzzled over. The platform's renewal prompt must frame continuation as the natural default — not as a decision that requires weighing. Krug Ch. 2 supports this: 'There's also the \"I've waited ten minutes for this bus already, so I may as well hang in a little longer\" phenomenon.' Sunk cost works in the platform's favor, but only if the renewal prompt activates the sunk cost feeling rather than the re-evaluation feeling.",
      "solution": "Frame renewal as continuation, not as a new commitment. The tonal principle is: you're already here — keep going. Achieve this through: (1) Copy that emphasizes what Drew has built, not what he must decide: 'You've earned $8,000 with Ariel & Amber — extend for another 4 months?' (2) A single prominent 'Extend' button with one-click action — no forms, no term reconfiguration, no re-entering data. (3) Showing the positive trajectory: earnings graph, zero missed payments, guest satisfaction. The renewal prompt should feel like a paycheck stub, not a contract negotiation. (4) Timing the prompt 2-3 weeks before lease end — early enough to feel proactive, late enough that Drew has recent positive data to reference. (5) If Drew doesn't act on the first prompt, a gentle reminder 1 week before — from Bryant's name, in conversational tone.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew's 'maybe the ability to extend' shows openness without commitment. The renewal prompt must convert this openness into action without triggering the re-evaluation that 'maybe' implies. The word 'extend' (not 'renew' or 'sign a new lease') matches Drew's own framing."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Making pages self-evident is like having good lighting in a store: it just makes everything seem better. Using a site that doesn't make us think about unimportant things feels effortless.",
          "insight": "If the renewal process is effortless — a single screen with accumulated evidence and one button — it feels like good lighting in a familiar store. If it's a multi-step process with new forms and terms, it feels like being asked to re-apply for something you already have."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "There's also the 'I've waited ten minutes for this bus already, so I may as well hang in a little longer' phenomenon.",
          "insight": "Drew's sunk cost — 4 months of successful hosting, $8,000 earned, a relationship with Ariel and Amber — is the bus he's already waited for. The renewal prompt must make this sunk cost emotionally salient: 'You've built something here. Keep it going.'"
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.",
          "insight": "A complex renewal process signals that the platform doesn't value Drew's continued business enough to make it easy. An effortless one-click extension signals the opposite: 'we value you so much, we made this as easy as possible.'"
        }
      ],
      "priority": "medium",
      "target_emotion": "confidence",
      "emotion_rationale": "At the retention point, Drew needs to feel confident that extending is the right move — not because he's weighed the alternatives, but because the evidence of success is so clear that extension feels obvious.",
      "copy_guidelines": {
        "voice": "reflective, evidence-based, gently encouraging",
        "do": [
          "Lead with earned outcomes: 'You've earned $8,000 since March. Extend for another 4 months?'",
          "Use 'extend' not 'renew' — Drew's own word from the call",
          "Show the track record: '4 months · Zero missed payments · Zero issues'",
          "Make the CTA feel small: 'Extend' button, not 'Commit to 4 More Months'"
        ],
        "dont": [
          "Frame as a new decision: 'Time to decide: will you list your space for another term?'",
          "Introduce new terms or pricing: 'Rates may have changed — review your new monthly rate'",
          "Use urgency or scarcity: 'Your listing expires in 7 days! Act now!'",
          "Require re-entering any information: if Drew extends, the terms are the same as before"
        ],
        "example_good": "$8,000 earned · Zero issues · Ariel & Amber want to stay. Extend 4 months?",
        "example_bad": "Your lease expires on June 30, 2026. To continue hosting on Split Lease, please review and accept the updated terms and conditions for your next lease period."
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "feel_description": "The renewal card appears as a calm, weighted presence — not a pop-up alert. It settles into the dashboard like a new section, steady and grounded. The earnings summary may use a gentle counter animation (counting up to $8,000 over 1 second) to make the accumulated value emotionally tangible — but only once, on first view.",
        "duration_range": "200-400ms for card entrance, 800-1000ms for earnings counter"
      },
      "tension_relief": {
        "tension_point": "Drew sees the renewal prompt and briefly wonders 'do I want to keep doing this?'",
        "relief_point": "The prompt immediately shows his track record ($8,000, zero issues) — evidence that resolves the 'maybe' into 'obviously yes'",
        "timing": "The evidence must precede the ask. Show the track record ABOVE the Extend button, not below it. Drew should encounter the evidence during his natural top-to-bottom scan before reaching the action."
      },
      "personalization_signals": [
        "Show cumulative earnings as a specific dollar amount, not a generic metric",
        "Name the guests who want to stay: 'Ariel & Amber want to extend'",
        "Reference Drew's property by his title: 'Your comfortable one bed, one bath in Chelsea'",
        "If the renewal prompt comes from Bryant (notification), use Bryant's name and conversational tone"
      ],
      "anti_patterns": [
        {
          "pattern": "Renewal as a formal contract process with new terms to review",
          "reason": "A formal renewal process — new terms, new agreements, new signatures — triggers re-evaluation mode. Drew shifts from 'obviously I'll continue' to 'wait, what am I signing?' The formality creates emotional distance between Drew and his existing success. Extension should feel like pressing Play, not like signing a new contract.",
          "example_bad": "Your current lease expires June 30. To renew, please review the updated Split Lease Host Agreement (v3.2), confirm your rental rate, and digitally sign the new lease document."
        }
      ]
    }
  ]
}
### layer-6/coherence-report.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "reinforcements": [
    {
      "new_element_id": "works-001",
      "existing_element_id": "works-001",
      "similarity": "Both address the requirement for instant System 1 / self-evidence approval at every phase transition. The existing element prescribes passing System 1's automatic assessment in under 2 seconds through visual consistency, familiar language, and explicit connection to the prior phase. The new element prescribes Krug's First Law — self-evidence at every phase entry — ensuring Drew 'gets it' without thinking. Both demand that each phase entry independently earn the user's engagement.",
      "combined_evidence": "Existing evidence: Kahneman's associative coherence — System 1 generates impressions that System 2 endorses or rejects. If the transition triggers unfamiliar associations, System 2 never engages. New evidence: Krug Ch. 1 — 'when I look at a Web page it should be self-evident.' Drew's call behavior proves this: he confirms his listing in under 10 seconds (00:40-00:52) because Bryant's questions are self-evident. The combined insight is that self-evidence IS the mechanism by which System 1 approves transitions. Kahneman explains why (associative coherence), Krug explains how (visual hierarchy, familiar language, no question marks). Three lenses now converge on this principle: Kahneman (theoretical), Andreas call (host behavior), Drew call + Krug (applied usability).",
      "recommendation": "merge"
    },
    {
      "new_element_id": "works-002",
      "existing_element_id": "works-002",
      "similarity": "Both address cognitive depletion across multi-step processes. The existing element uses Kahneman's ego depletion research (parole judge study) to argue that each phase consumes System 2 resources, and hosts arrive at later phases depleted. The new element uses Krug's scanning/billboard principle to argue that every decision point must be scannable, not readable, because hosts don't read — they scan for trigger words.",
      "combined_evidence": "Existing evidence: Kahneman's parole judge study shows depleted decision-makers default to denial (abandonment). New evidence: Krug Ch. 2 shows users scan pages like billboards at 60 mph and only fixate on trigger words. Drew's call confirms both: he scans Bryant's verbal output and extracts only conclusions ('I get paid no matter what' from a 30-second guarantee pitch). The combined insight extends depletion theory with a specific design mechanism: scanning-optimized layouts reduce depletion because scanning requires less System 2 effort than reading. The solution is not just 'reduce decisions' (existing) but specifically 'make each decision scannable in 3 seconds through visual hierarchy' (new).",
      "recommendation": "keep_both"
    },
    {
      "new_element_id": "works-003",
      "existing_element_id": "works-003",
      "similarity": "Both address the speed gap between conversational interaction and platform interaction. The existing element argues the platform must match the phone call's conversational speed (System 2's 'natural stroll'). The new element argues defaults must be satisficing-safe because Drew accepts the first reasonable option without scrutiny.",
      "combined_evidence": "Existing evidence: Andreas describes two units in 7 seconds; the platform gets a 50% time premium over conversation. New evidence: Drew confirms his rent in 3 seconds (00:52) and accepts the guarantee in 4 words (04:18). Krug's satisficing principle explains why speed matters emotionally: Drew doesn't optimize, he satisfices. If defaults are correct, his speed is a feature. If defaults are wrong, his speed produces silent errors. The combined insight: conversational speed matching (existing) must be paired with default correctness (new) — fast interaction with wrong defaults is worse than slow interaction with right defaults. Four lenses now validate this pattern.",
      "recommendation": "keep_both"
    },
    {
      "new_element_id": "works-004",
      "existing_element_id": "works-004",
      "similarity": "Both address the human-to-digital trust handoff. The existing element prescribes bridging human trust to digital trust through continuity priming — mentioning the platform during the call and echoing the call on the platform. The new element prescribes convention-first interaction so Drew can use the platform the way he already uses similar tools (StreetEasy, Airbnb, Venmo).",
      "combined_evidence": "Existing evidence: Kahneman's priming research shows prior exposure shapes subsequent evaluation. The call primed the host for human interaction, not digital interaction, creating a handoff risk. New evidence: Krug Ch. 3 shows conventions reduce cognitive load because users have pre-existing mental models. Drew maps everything to landlord conventions: monthly rent, security deposit, tenant move-out. The combined insight: trust bridging (existing) and convention adherence (new) are complementary strategies — priming provides emotional continuity while conventions provide cognitive familiarity. Both must be present: priming without conventions creates a platform that feels like Bryant but doesn't work like other tools; conventions without priming create a platform that works but doesn't feel connected to Bryant.",
      "recommendation": "keep_both"
    },
    {
      "new_element_id": "works-005",
      "existing_element_id": "works-004",
      "similarity": "Both address the guided-to-self-service cliff. The existing element (works-004) prescribes bridging human trust to digital trust by having the agent mention the platform during the call and having the platform reference the agent on the first screen. The new element (works-005) prescribes eliminating the cliff entirely by making the platform's first experience a continuation of the call — conversational structure, one question at a time, agent's voice in microcopy.",
      "combined_evidence": "Existing evidence: the Andreas call ends with human-to-human promises and no mention of a platform, creating an unprimed digital encounter. New evidence: Drew's call also ends with Bryant-mediated promises (05:01), and Drew's muddling-through behavior (Krug Ch. 2) means he will expect the platform to 'ask me questions like Bryant did.' The combined insight sharpens the requirement: it's not enough to reference the call on the platform (existing) — the platform's interaction model must structurally mirror the call's conversational pattern (new). Reference is passive; structural mirroring is active. Five lenses now validate this critical transition.",
      "recommendation": "keep_both"
    },
    {
      "new_element_id": "communicates-001",
      "existing_element_id": "communicates-001",
      "similarity": "Both the existing library element (communicates-001: Trust Hierarchy in Guarantee Messaging) and the new element (communicates-001: Billboard Hierarchy for Every Phase Entry Screen) address the information hierarchy of phase entry screens. The existing element focuses specifically on guarantee messaging hierarchy. The new element generalizes the hierarchy principle to ALL phase entry screens using Krug's billboard metaphor.",
      "combined_evidence": "Existing evidence: Kahneman's System 1 assessment demands that the trust signal (guarantee) be the loudest element on financial pages. New evidence: Krug's billboard principle demands that EVERY page have a three-tier hierarchy where the anchor occupies 40% of visual attention. Drew's behavior confirms: he extracts one conclusion from Bryant's guarantee pitch ('I get paid') and ignores the mechanism. The combined insight: billboard hierarchy is the generalized principle, and guarantee messaging hierarchy is its most critical specific application. The new element extends the existing pattern from financial screens to ALL screens.",
      "recommendation": "keep_both"
    },
    {
      "new_element_id": "communicates-002",
      "existing_element_id": "communicates-003",
      "similarity": "Both address the vocabulary gap between the phone call and the platform. The existing element (communicates-003: Agent-to-Platform Language Bridge) prescribes maintaining linguistic continuity between the agent's vocabulary and the platform's labels. The new element (communicates-002: Call-to-Screen Language Continuity) prescribes the same but with specific mechanisms: vocabulary mapping tables, maximum 1 unfamiliar term per screen, and scan-order prioritization of entity names from the call.",
      "combined_evidence": "Existing evidence: Andreas heard 'roommates who need a space during the week' from Bryant; the platform should not substitute 'periodic tenancy lease style.' New evidence: Drew heard 'Ariel and Amber,' '$2,000 a month,' 'security deposit,' '4 months.' Krug Ch. 1 identifies naming as a primary source of question marks — 'cute or clever names, marketing-induced names, company-specific names.' The combined insight adds Krug's naming hierarchy to Kahneman's associative coherence: call vocabulary is not just emotionally familiar (Kahneman) but cognitively scannable (Krug). Drew's trigger words from the call are the words his scanner will find; platform jargon is invisible to his scanner.",
      "recommendation": "merge"
    },
    {
      "new_element_id": "feels-003",
      "existing_element_id": "feels-003",
      "similarity": "Both address financial anxiety. The existing library element (feels-003: Frictionless Financial Transparency) addresses the need for transparent financial data that calms rather than alarms. The new element (feels-003: Guaranteed-Income Calm Throughout Financial Touchpoints) addresses maintaining the calm certainty that Bryant's verbal guarantee created.",
      "combined_evidence": "Existing evidence: Kahneman's loss aversion means hosts feel financial losses more acutely than gains; financial displays must emphasize the guarantee before showing deductions. New evidence: Drew accepts the guarantee in four words ('Okay. Okay. Okay. Alright.') — zero follow-up questions, zero skepticism. Krug's precision principle demands that financial data use mono typography to signal authority. The combined insight: financial calm requires both emotional framing (guarantee-first, loss-aversion-aware from Kahneman) and typographic precision (mono font, exact amounts from Krug). Bryant delivers calm through vocal authority; the platform must deliver it through typographic authority.",
      "recommendation": "merge"
    },
    {
      "new_element_id": "feels-001",
      "existing_element_id": "feels-001",
      "similarity": "Both address the emotional experience of the first platform encounter after the phone call. The existing element (feels-001: Cognitive Comfort at First Contact) prescribes matching the platform's emotional tone to the phone call's warmth. The new element (feels-001: Zero-Friction Continuity After the Call) prescribes making the platform's first screen feel like opening a note from Bryant, not logging into a new system.",
      "combined_evidence": "Existing evidence: Kahneman's affect heuristic means the host's emotional state during first contact determines all subsequent judgments. The call creates warmth; the platform must sustain it. New evidence: Drew's call ends with momentum ('can we maybe move on?') — the emotional state is not just warm but impatient-positive. Krug's muddling-through principle predicts Drew will form a 'plausible story' that the platform should feel like the call. The combined insight adds a temporal dimension: it's not just that the first screen must be warm (existing) but that it must feel like a continuation, not a beginning (new). The word 'continuation' is key — recognition, not discovery.",
      "recommendation": "merge"
    },
    {
      "new_element_id": "behaves-005",
      "existing_element_id": "behaves-006",
      "similarity": "Both address the human fallback mechanism. The existing element (behaves-006: Agent-Aware Help System) prescribes a contextual help system that routes to the assigned agent. The new element (behaves-005: Fallback-to-Bryant Escape Hatch at Every Dead End) prescribes a persistent Bryant avatar that pre-fills context and intercepts confusion before the host leaves the platform.",
      "combined_evidence": "Existing evidence: hosts who encounter confusion default to calling/texting the agent, creating bottlenecks. The platform should provide an in-context agent channel. New evidence: Krug Ch. 2 warns that 'If we find something that works, we stick to it' — if Drew discovers texting Bryant works, he'll never use the platform. Drew's call explicitly establishes the escape hatch (05:38: 'you can feel free to text me or email me'). The combined insight: the escape hatch must be easier than texting to prevent permanent platform bypass. The new element adds specific mechanisms: context pre-fill, persistent avatar, 30-second inactivity pulse. Three lenses now validate this pattern.",
      "recommendation": "merge"
    }
  ],
  "contradictions": [
    {
      "new_element_id": "looks-001",
      "existing_element_id": "looks-001",
      "conflict": "Token system conflict. The new element references --primary-purple (#31135D) from the production style guide as the Tier 1 anchor color and Instrument Serif as the anchor typeface. The existing element (looks-001: System 1 Visual Anchor) references similar patterns but the underlying design token system (tokens.json) uses a warm green accent (#2d5a3d) not purple. The style guide uses purple (#31135D). This is the known token drift flagged in memory.",
      "evidence_comparison": "The new element has stronger evidence for purple because it directly references the production style guide and the taste model which specifies 'Serif for personality (headlines, brand)' with purple as the brand color. The existing element was created before this drift was identified. Both elements agree on the principle (serif headlines at large scale for anchors) but disagree on which color system is canonical.",
      "recommendation": "Resolve by codifying the production purple palette (#31135D) as the canonical token system and updating tokens.json to match. The green accent in tokens.json appears to be a legacy value. All three runs now reference the purple palette from the style guide, providing overwhelming evidence that purple is the production color.",
      "severity": "warning"
    },
    {
      "new_element_id": "looks-005",
      "existing_element_id": "looks-005",
      "conflict": "Spacing token conflict. The new element references --spacing-xxl (60px from tokens.json) for section gaps, but the style guide uses --spacing-7xl (3rem = 48px) for the equivalent purpose. The new element also notes that the style guide spacing scale lacks a clear 48-60px step. The existing element (looks-005: Deliberate Motion Vocabulary) uses different spacing values from the same ambiguous scale.",
      "evidence_comparison": "Both elements acknowledge the gap in the spacing scale but propose slightly different values. The new element argues for 48-60px section gaps based on conversational pacing analysis. The existing element uses motion-centric spacing. Neither has stronger evidence — this is a design system gap, not a content disagreement.",
      "recommendation": "Add a --section-gap token at 48px (splitting the difference between tokens.json 60px and style guide 48px) and codify it as the canonical section separation value. Both elements can reference this single token.",
      "severity": "warning"
    },
    {
      "new_element_id": "communicates-005",
      "existing_element_id": "communicates-005",
      "conflict": "Clickability priority disagreement. The new element argues that maximum 3 clickable elements per area and maximum 1 primary action per page is the rule — derived from Krug's clickability principle and Drew's satisficing behavior. The existing element (communicates-005: Micro-moment Copy at Interaction Points) focuses on copy at interaction points but implies multiple interactive elements per area are acceptable with proper copy guidance. The new element is more restrictive.",
      "evidence_comparison": "The new element has stronger evidence from Krug's Hatch example (when everything is clickable, nothing signals clickability) and Drew's scanning behavior (he clicks the first thing that looks clickable). The existing element has valid evidence for copy quality at interaction points. The conflict is about quantity vs. quality of interactive elements — the new element says 'fewer,' the existing says 'better-labeled.'",
      "recommendation": "Both are valid but the new element's constraint should take precedence as a design rule: limit to 3 clickable elements per area, AND apply the existing element's copy guidelines to those 3 elements. Fewer + better-labeled is the combined recommendation.",
      "severity": "warning"
    }
  ],
  "extensions": [
    {
      "new_element_id": "works-006",
      "gap_filled": "Pre-decided outcome confirmation pattern. No existing element specifically addresses the distinction between genuine decisions and ceremonial confirmations. Existing elements discuss defaults and depletion but not the specific pattern of reducing pre-decided outcomes to single-click confirmations. This element fills the gap between the phone call (where decisions are made) and the platform (where decisions are formalized).",
      "confidence_note": "Strong confidence despite single lens. Drew's call provides 3 clear pre-decided outcomes (price at 00:52, guests at 01:32-02:22, term at 05:18-05:32) and Krug's satisficing theory directly supports the one-click confirmation pattern. The pattern is likely universal across all host calls — the call is where decisions happen, the platform is where they're confirmed."
    },
    {
      "new_element_id": "communicates-003",
      "gap_filled": "Progressive disclosure by decision readiness. No existing element addresses sequencing information according to the host's decision tree. Existing elements discuss hierarchy (what's most important) but not sequence (what must be understood before the next thing makes sense). This element fills the gap between information hierarchy (spatial) and decision architecture (temporal).",
      "confidence_note": "High confidence. Drew's call reveals strict decision sequencing (Bryant introduces guests before guarantee, guarantee before terms) and Krug's scanning principle confirms users act on the first sufficient piece of information. Misordered disclosure leads to poorly-informed satisficing. The principle should generalize across all host calls."
    },
    {
      "new_element_id": "communicates-004",
      "gap_filled": "Clearly defined areas via the $25,000 Pyramid test as an explicit validation criterion. Existing elements discuss area separation implicitly through spacing and hierarchy, but no element codifies the Pyramid test as a formal validation gate. This element provides a testable criterion: show the page for 5 seconds, ask the user to name the areas.",
      "confidence_note": "High confidence. Krug's Pyramid test is a well-established usability validation method. Drew's call provides natural topic boundaries (01:32-03:17 guest area, 03:17-04:18 guarantee area) that confirm the principle. The test is objective and applicable to all pages."
    },
    {
      "new_element_id": "communicates-007",
      "gap_filled": "Mindless choices over complex menus — decomposing multi-variable decisions into binary sequences. No existing element addresses the interaction pattern of breaking complex choices into conversational yes/no sequences. Existing elements address reducing decisions (depletion) and providing defaults (satisficing) but not the specific mechanism of sequential decomposition.",
      "confidence_note": "Medium confidence. Krug's Chapter 4 title ('Animal, vegetable, or mineral? Why users like mindless choices') directly supports this but the full chapter was not included in the extract. Drew's call confirms the pattern (Bryant asks binary questions: 'Is this an entire apartment?' 'Do you charge a deposit?') but more host calls would strengthen the specific decomposition recommendations."
    },
    {
      "new_element_id": "behaves-001",
      "gap_filled": "Optimistic UI for pre-decided confirmations. No existing element addresses the specific interaction timing of confirmation actions — showing success before server response. Existing elements discuss confirmation patterns (communicates-006) but not the behavioral/technical implementation of optimistic UI. This fills the gap between information architecture (what to show) and interaction behavior (when to show it).",
      "confidence_note": "High confidence. Drew's confirmation speed (4 words in under 1 second at 04:18) combined with Krug's question-mark-elimination principle strongly supports zero-latency confirmation UI. The pattern applies universally to any pre-decided action across all host journeys."
    },
    {
      "new_element_id": "behaves-002",
      "gap_filled": "Scan-speed page load prioritization — rendering Tier 1 anchor and Tier 2 action button before any other content. No existing element addresses load sequence as a behavioral pattern. Existing elements discuss visual hierarchy (what to show) but not rendering priority (what to show first). This fills the gap between static design and dynamic loading behavior.",
      "confidence_note": "Medium confidence. The principle is well-established in web performance literature and Krug's scanning principle supports it. Drew's impatience ('can we maybe move on?') provides behavioral evidence. However, implementation specifics (200ms first paint, 500ms data population) are engineering targets that need validation through actual performance testing."
    },
    {
      "new_element_id": "behaves-003",
      "gap_filled": "Conversational step progression — compressing completed steps into summary lines while expanding the next step, maintaining visual continuity. No existing element addresses the specific transition animation between wizard steps. Existing elements discuss multi-step depletion (works-002) and progress indicators (looks-007) but not the behavioral transition pattern between steps.",
      "confidence_note": "Medium confidence. Drew's call provides strong evidence for continuous flow (no hard topic boundaries in Bryant's conversation) and Krug's muddling-through principle supports maintaining context across steps. However, the specific animation timings (300ms, spring easing for expansion) need usability testing to validate."
    },
    {
      "new_element_id": "feels-007",
      "gap_filled": "Renewal as natural continuation, not re-evaluation. The retention phase had weak coverage in the library (only works-004 tangentially addressed it). This element fills the emotional design gap for the retention touchpoint, specifically addressing how to frame renewal as extension (Drew's word) rather than re-commitment.",
      "confidence_note": "Medium confidence. Drew's 'maybe the ability to extend' (05:32) provides direct behavioral evidence, and Krug's sunk-cost observation supports the continuation framing. However, retention behavior is inherently speculative from a pre-lease call — Drew hasn't actually experienced the active lease phase yet. Future runs with hosts in active leases or at renewal points would significantly strengthen this element."
    },
    {
      "new_element_id": "looks-004",
      "gap_filled": "Distinct visual languages for confirmation vs. decision interactions. No existing element codifies the visual difference between a 'confirm this settled outcome' screen and a 'make a new choice' screen. Existing elements discuss confirmation patterns (communicates-006) and visual hierarchy (looks-001) but not the specific typographic and chromatic distinction between these two interaction modes.",
      "confidence_note": "High confidence. Drew's call clearly shows pre-decided outcomes (price, guests, term) versus the one genuinely open question (photos). Krug's principle that editable fields invite weighing while read-only summaries invite confirmation directly supports distinct visual treatments. The mono-font-for-confirmed-data recommendation aligns with the taste model's explicit instruction."
    }
  ],
  "token_compliance": {
    "new_tokens_flagged": [
      "--interactive-color (proposed semantic alias for --secondary-purple, restricted to clickable elements only)",
      "--confirmed-value display style (mono font + large size + primary-purple — for pre-decided financial amounts)",
      "--section-label style (uppercase + letter-spacing + small size + muted color — for area headings)",
      "--section-gap token (48-60px — missing step in current spacing scale between --spacing-4xl and --spacing-xxl)",
      "--progress-complete and --progress-pending color tokens (semantic step indicator states)",
      "--data-badge pattern (mono font + tinted background + rounded-md — for financial data objects)",
      "--primary-purple referenced as #31135D (style guide) vs --accent #2d5a3d (tokens.json) — known drift",
      "--bg-off-white referenced as rgb(252, 250, 255) from style guide, not present in tokens.json",
      "--protocol-surface referenced as #F7F2FA from style guide, not present in tokens.json",
      "Instrument Serif referenced as heading font — tokens.json calls it --serif, style guide uses it for headlines, but the explicit billboard anchor pairing (Instrument Serif at 28-36px for Tier 1) is not codified"
    ],
    "recommendation": "Add the 6 new semantic tokens to the design token system. Critically, resolve the tokens.json vs. style guide color drift by deprecating the green accent (#2d5a3d) in tokens.json and adopting the production purple palette (#31135D primary, #6d31c2 secondary) as canonical. The proposed semantic tokens (--interactive-color, --confirmed-value, --section-label, --section-gap, --progress-complete/pending, --data-badge) enforce design intent through naming — preventing designers from using interactive colors on non-interactive elements or using decision-mode styling on confirmation screens. These tokens move from 'what color' to 'what purpose,' which is the token maturity level this system needs."
  },
  "emotional_arc_check": {
    "journey_emotion_map": [
      {
        "phase": "discovery",
        "target_emotions": [
          "curiosity",
          "openness"
        ]
      },
      {
        "phase": "evaluation",
        "target_emotions": [
          "confidence",
          "calm"
        ]
      },
      {
        "phase": "onboarding",
        "target_emotions": [
          "confidence",
          "recognition",
          "continuity"
        ]
      },
      {
        "phase": "listing_creation",
        "target_emotions": [
          "momentum",
          "relief",
          "competence"
        ]
      },
      {
        "phase": "pricing",
        "target_emotions": [
          "calm",
          "certainty",
          "relief"
        ]
      },
      {
        "phase": "proposal_mgmt",
        "target_emotions": [
          "confidence",
          "momentum",
          "safety"
        ]
      },
      {
        "phase": "active_lease",
        "target_emotions": [
          "safety",
          "calm",
          "recognition"
        ]
      },
      {
        "phase": "retention",
        "target_emotions": [
          "confidence",
          "continuity",
          "satisfaction"
        ]
      }
    ],
    "arc_conflicts": [
      "Potential arc tension between 'momentum' in listing_creation and 'calm' in pricing. Drew's emotional state during the call transitions from efficient pace (listing confirmation in 10 seconds) to calm acceptance (guarantee in 4 words). The platform's flow from listing wizard (6 steps, momentum-driven) to pricing (single confirmation, calm-driven) requires a deliberate emotional gear shift. The compressed summary at the end of the listing wizard should serve as a decompression moment — transitioning from 'moving fast' to 'settling in' before the pricing confirmation.",
      "The discovery phase has no emotional evidence from this lens — Drew's discovery happened off-platform through Bryant's direct outreach. The assigned emotions (curiosity, openness) are inferred from prior runs, not validated by this call or this book extract. This is a gap, not a conflict, but it means the discovery emotional design has only 1-2 lenses of support.",
      "The retention emotion 'confidence' overlaps with onboarding 'confidence' but serves a different purpose. In onboarding, confidence means 'I trust this is the right platform.' In retention, confidence means 'I trust that continuing is the right choice.' The same word masks different emotional needs. The renewal copy must activate evidence-based confidence (track record) not trust-based confidence (Bryant connection)."
    ],
    "arc_assessment": "The emotional arc makes sense end-to-end and follows a healthy pattern: openness → confidence → momentum → calm → safety → continuation. The arc mirrors a relationship trajectory: initial interest, building trust, active engagement, settled comfort, and renewal. The key emotional transitions are well-supported: (1) evaluation→onboarding relies on Bryant-to-platform continuity (3 lenses now), (2) listing_creation→pricing transitions from momentum to calm through pre-filled confirmations (2 lenses), (3) active_lease→retention transitions from safety to confidence through accumulated evidence (1 lens — needs strengthening). The weakest link is discovery→evaluation, which has no direct evidence from this lens since Drew's discovery was entirely human-mediated. The strongest link is onboarding→listing_creation, where Drew's call behavior (impatience + accommodation) and Krug's scanning/satisficing principles converge on a clear emotional design: guided, pre-filled, fast."
  },
  "coverage_map": {
    "discovery": {
      "element_count": 2,
      "coverage": "thin"
    },
    "evaluation": {
      "element_count": 6,
      "coverage": "moderate"
    },
    "onboarding": {
      "element_count": 18,
      "coverage": "strong"
    },
    "listing_creation": {
      "element_count": 22,
      "coverage": "strong"
    },
    "pricing": {
      "element_count": 16,
      "coverage": "strong"
    },
    "proposal_mgmt": {
      "element_count": 20,
      "coverage": "strong"
    },
    "active_lease": {
      "element_count": 12,
      "coverage": "moderate"
    },
    "retention": {
      "element_count": 10,
      "coverage": "moderate"
    }
  },
  "loop_back_recommendations": [
    {
      "layer": "3",
      "reason": "Token drift between tokens.json and production style guide remains unresolved. Layer 3 (looks-elements) references both systems inconsistently. Several new tokens are proposed but not formally added to the token system. A dedicated looks-elements pass should be run with the explicit goal of reconciling the token systems.",
      "new_input": "The production style guide (Agents-data-source/Style-guide.md) should be treated as the canonical color reference. tokens.json should be updated to match. All looks-elements from this run and prior runs should be re-validated against the reconciled token system. Specifically: replace all references to --accent (#2d5a3d) with the production purple values, and add the 6 proposed semantic tokens."
    },
    {
      "layer": "1",
      "reason": "The discovery phase has only 2 elements across the entire library (both tangential). Drew's call starts post-discovery, so this lens cannot generate discovery elements. A future run should specifically target the discovery phase with a lens that includes a host who describes how they found Split Lease.",
      "new_input": "Select a host call where the host explicitly describes their discovery journey (how they heard about Split Lease, what they searched for, what ad or referral brought them). Pair with Krug Ch. 1-3 which directly address first-impression usability for landing pages and discovery touchpoints. This would extend the library's thinnest coverage area."
    },
    {
      "layer": "5",
      "reason": "The retention emotional element (feels-007) is based on pre-lease speculation — Drew hasn't actually experienced the active lease or renewal phase. The emotional design for retention needs validation from a host who has been through the full cycle.",
      "new_input": "Select a host call with a returning or renewing host — someone who has completed at least one lease cycle and is discussing continuation. This would provide real behavioral evidence for the retention emotional arc (currently the weakest link in the emotional journey). The book lens could be Krug Ch. 10 (Usability as common courtesy) which addresses how cumulative experience shapes long-term user relationships."
    },
    {
      "layer": "4",
      "reason": "The behaves layer introduced 6 interaction patterns, but none address the active_lease phase's recurring interactions — checking payment status, communicating with guests through the platform, managing issues. These are the interactions that determine whether Drew uses the platform or defaults to texting Bryant during the longest phase of the journey.",
      "new_input": "Use the existing active_lease journey map to identify the 3-4 most common recurring interactions (payment status check, guest communication, issue reporting, maintenance scheduling) and design interaction patterns for each. The behavioral principle from this run — convention-matching to banking/Venmo patterns for payments, messaging app patterns for communication — should guide the patterns."
    }
  ]
}
### layer-7/tests-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "tests-001",
      "type": "validation_strategy",
      "title": "Self-Evidence Gate Validation",
      "validates_element": "works-001",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If phase entry screens are not self-evident, Drew will either click the wrong element (satisficing on ambiguous UI), text Bryant instead of using the platform, or abandon entirely — but silently, so the failure is invisible in analytics.",
      "solution": "Run a 5-second usability test on each phase entry screen: show it to 10 hosts for 5 seconds, then ask 'What is this page for?' and 'What would you do first?' Measure correctness rate against the 90% target.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "It means that as far as is humanly possible, when I look at a Web page it should be self-evident. Obvious. Self-explanatory. I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "insight": "Krug's First Law provides the validation criterion itself: if a user can't 'get it' in seconds, the page fails. The 5-second test operationalizes this law as a measurable gate."
        },
        {
          "source": "drew-call.txt, 00:40-00:52",
          "type": "host_call",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep.",
          "insight": "Drew confirms his listing in under 10 seconds through conversational shorthand — zero interpretation needed. The platform's listing page must achieve the same instant recognition in the 5-second test."
        }
      ],
      "priority": "high",
      "validation_method": "usability_test",
      "test_description": "For each phase entry screen (onboarding landing, listing wizard step 1, pricing confirmation, proposal review, active lease dashboard, renewal prompt), recruit 10 hosts who have completed a call with an agent but have not seen the platform. Show each screen for 5 seconds, then ask: (1) 'What is this page for?' (2) 'What would you do first?' Record answers verbatim.",
      "success_criteria": "90% of hosts correctly identify the page's purpose AND correctly identify the primary action within 5 seconds of viewing. Both conditions must be met — identifying purpose without knowing the action, or vice versa, counts as a partial failure.",
      "failure_meaning": "If hosts cannot identify the page's purpose, the Tier 1 anchor (headline/heading) is either missing, uses platform jargon instead of call vocabulary, or competes visually with other elements. If hosts identify purpose but not the action, the Tier 2 action button lacks sufficient visual prominence or clickability signaling. In either case, the billboard hierarchy has failed and must be redesigned before launch.",
      "implementation_hint": "Can be run as an unmoderated remote test using a tool like Maze or UsabilityHub. Show a static screenshot of each phase entry screen for 5 seconds, then redirect to a survey with the two questions. Segment results by whether the host had a call with an agent (target users) vs. cold visitors (secondary insight). Run before development — use Figma prototypes."
    },
    {
      "id": "tests-002",
      "type": "validation_strategy",
      "title": "Scanning vs. Reading Behavior Validation",
      "validates_element": "works-002",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If decision points are designed for reading rather than scanning, Drew will miss critical information (guest name, duration, total rent) and either satisfice on incorrect assumptions or abandon the page to text Bryant for a verbal summary.",
      "solution": "Use heatmap analysis (via Hotjar, FullStory, or eye-tracking study) to validate that the host's first fixation lands on primary information within 2 seconds of page load.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for.",
          "insight": "Krug establishes that scanning is the primary mode. Heatmaps validate whether the visual hierarchy successfully guides scanning toward the right targets."
        },
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you as the landlord... Okay. Okay. Okay. Alright.",
          "insight": "Drew scans Bryant's 30-second pitch and extracts one conclusion: 'I get paid.' On the platform, the guarantee must be equally scannable — the heatmap should show fixation on 'Your rent is guaranteed' rather than on the mechanism paragraph."
        }
      ],
      "priority": "high",
      "validation_method": "analytics",
      "test_description": "Deploy heatmap tracking on proposal review, pricing confirmation, and listing wizard pages. Collect data from the first 50 hosts who reach each page. Analyze first-fixation zones and scan patterns to determine whether hosts fixate on primary information (guest name, duration, total rent) before secondary information (fee breakdowns, legal terms, system statuses).",
      "success_criteria": "80% of hosts' first fixation point lands on the Tier 1 anchor (primary information) within 2 seconds of page load. The scan path should flow from Tier 1 (anchor) → Tier 2 (action button) → Tier 3 (details), matching the billboard hierarchy. If more than 20% of hosts fixate first on Tier 3 elements, the visual hierarchy has failed.",
      "failure_meaning": "First-fixation on Tier 3 (details, fees, legal text) instead of Tier 1 (anchor heading) indicates that the visual weight contrast between tiers is insufficient. The Tier 1 anchor is not 'loud' enough — it needs larger font size, bolder weight, more whitespace isolation, or higher contrast to claim the scanning eye first. Alternatively, Tier 3 elements may be styled too prominently, competing with the anchor.",
      "implementation_hint": "Use Hotjar or FullStory heatmap and session recording on production pages. Filter sessions to first-time visitors only (returning users have learned the layout). For a more rigorous study, run a Tobii eye-tracking study with 8-10 participants using the actual production pages or high-fidelity prototypes. Compare heatmaps across the three page types to identify consistent hierarchy failures."
    },
    {
      "id": "tests-003",
      "type": "validation_strategy",
      "title": "Satisficing-Safe Default Correctness Validation",
      "validates_element": "works-003",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If pre-populated defaults are incorrect, Drew will accept them without scrutiny (because he satisfices). The listing goes live with wrong data — wrong price, wrong deposit, wrong property type — and the error surfaces only when a guest or agent catches it, creating trust damage and operational problems.",
      "solution": "Audit default acceptance rate paired with post-publication data accuracy: track what percentage of hosts accept defaults AND whether those accepted defaults are factually correct compared to the agent's call notes.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing.",
          "insight": "Satisficing means Drew will accept defaults without checking. The validation must verify not just that Drew accepted (behavioral success) but that what he accepted was correct (outcome success). Behavioral success without outcome success is a silent failure."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew's $2,000/month is a known fact. If the platform pre-populates this correctly, Drew confirms in 3 seconds. If it pre-populates $1,857 (a derivation error), Drew may accept it — creating a listing with the wrong price."
        }
      ],
      "priority": "high",
      "validation_method": "analytics",
      "test_description": "For all pre-populated fields in the listing wizard and pricing step, track two metrics: (1) Default acceptance rate — percentage of hosts who submit without modifying the pre-populated value. (2) Default correctness rate — percentage of accepted defaults that match the agent's call notes (verified by comparing submitted data against CRM records from the call). Run on the first 100 listings created after launch.",
      "success_criteria": "85% of hosts accept pre-populated defaults AND 95% of accepted defaults are correct when compared to agent call notes. If acceptance is high but correctness is low, the system is producing confident errors. If acceptance is low but correctness is high, the pre-fill is correct but hosts don't trust it (a presentation problem, not a data problem).",
      "failure_meaning": "High acceptance + low correctness = the derivation logic or CRM-to-platform data pipeline has errors. Hosts trust the defaults but the defaults are wrong. Fix the data pipeline. Low acceptance + high correctness = hosts are editing correct defaults unnecessarily, possibly because the defaults lack provenance annotations ('from your call with Bryant') and feel untrustworthy. Fix the presentation with source attribution. Low acceptance + low correctness = both the data and the presentation are broken.",
      "implementation_hint": "Instrument each pre-populated field with analytics events: 'field_loaded' (with pre-filled value), 'field_modified' (with old and new values), 'field_submitted' (with final value). Compare submitted values against CRM call notes via a weekly automated report. For the correctness audit, start with the three highest-stakes fields: monthly rent, security deposit, and property address — errors in these fields have the greatest downstream impact."
    },
    {
      "id": "tests-004",
      "type": "validation_strategy",
      "title": "Convention Compliance Audit",
      "validates_element": "works-004",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If platform interactions deviate from conventions Drew knows (StreetEasy, Airbnb, Venmo), Drew must learn a new system instead of using existing muscle memory. Each convention violation adds a question mark and increases the chance Drew defers to texting Bryant.",
      "solution": "Conduct a systematic convention audit: for each platform interaction pattern, identify the closest conventional analog and score the deviation on a 3-point scale (identical, minor deviation, significant deviation).",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "If you're not going to use an existing Web convention, you need to be sure that what you're replacing it with either (a) is so clear and self-explanatory that there's no learning curve — so it's as good as a convention, or (b) adds so much value that it's worth a small learning curve.",
          "insight": "Krug provides the audit criterion: every non-conventional pattern must pass either the 'no learning curve' or the 'worth the learning curve' test. If it passes neither, it should be replaced with the convention."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew uses the universal convention of monthly rent. If the platform forces a nightly rate input, it violates the convention Drew (and every landlord) knows."
        }
      ],
      "priority": "high",
      "validation_method": "manual_review",
      "test_description": "Create a convention audit matrix: list every platform interaction (listing form, pricing input, proposal review, payment display, photo upload, deposit entry, renewal prompt). For each, identify the closest conventional analog from StreetEasy, Airbnb, Zillow, or Venmo. Score each interaction: (1) Follows convention — same pattern, same field order, same vocabulary. (2) Minor deviation — similar pattern but with one novel element. (3) Significant deviation — new pattern, new vocabulary, or new interaction model. For each item scored 2 or 3, evaluate against Krug's two-part test.",
      "success_criteria": "75% or more of platform interactions score a 1 (follows convention). Every interaction scoring a 3 (significant deviation) passes Krug's two-part test — either it has zero learning curve (validated via 5-second test) or it adds sufficient value (justified in writing by the product team with specific user benefit). No more than 2 interactions may score a 3.",
      "failure_meaning": "Multiple significant deviations without justification indicate that the design team is reinventing the wheel — creating novel patterns where conventions would serve better. The fix is not to add tooltips or help text (these are bandaids for convention violations) but to redesign the interaction to follow the convention. Krug's warning: 'sometimes it just amounts to time spent reinventing the wheel.'",
      "implementation_hint": "Assign a designer and a product manager to independently complete the audit matrix, then compare scores. Disagreements indicate interactions where the convention boundary is unclear — these should be prioritized for usability testing. The audit should be run quarterly as the platform evolves, since new features may introduce new convention violations. Use screenshots of StreetEasy, Airbnb, and Venmo as reference benchmarks."
    },
    {
      "id": "tests-005",
      "type": "validation_strategy",
      "title": "Guided-to-Self-Service Cliff Drop-off Validation",
      "validates_element": "works-005",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation"
      ],
      "problem": "If the transition from Bryant's guided call to the platform's self-service interface is too abrupt, hosts who successfully completed the call will fail to complete their first platform action — not because the call failed, but because the platform failed to continue the guided experience.",
      "solution": "Track post-call platform activation rate: the percentage of hosts who click the agent's follow-up link and complete at least one confirmation action on the platform within the same session.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:01-05:18",
          "type": "host_call",
          "quote": "I can get back to you with more information on split lease as well as links to the agreements which are referenced.",
          "insight": "Bryant promises to send links. The next touchpoint is an email. If the linked platform requires Drew to self-navigate, it violates the guided experience the call established. The activation rate measures whether this promise is fulfilled."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through.",
          "insight": "Drew will not read an onboarding guide. If the platform's first screen requires reading instructions to navigate, Drew's muddling-through will produce incorrect actions or abandonment. The activation rate captures this failure."
        }
      ],
      "priority": "high",
      "validation_method": "analytics",
      "test_description": "Track a funnel from call completion to first platform action: (1) Call completed (agent marks call as done in CRM). (2) Follow-up email sent (with platform link). (3) Email opened. (4) Link clicked. (5) Platform page loaded. (6) First confirmation action completed (any button click that confirms pre-filled data). Measure the conversion rate at each step, with special attention to the step 5→6 drop-off (platform loaded but no action taken).",
      "success_criteria": "70% of hosts who click the agent's follow-up link (step 4) complete at least one confirmation action (step 6) within the same session. The step 5→6 conversion rate (page loaded → action taken) should exceed 80%. If hosts load the page but don't act, the self-evidence test has failed at the most critical moment.",
      "failure_meaning": "High step 4→5 conversion but low step 5→6 conversion means hosts are reaching the platform but the first screen fails the self-evidence test — Drew sees the page but doesn't know what to do. Root causes: (a) the first screen is a generic dashboard instead of a personalized confirmation, (b) the primary action button is not visually prominent, (c) the page uses platform jargon Drew doesn't recognize, (d) the page requires reading instructions. Session recordings of step 5→6 dropouts will reveal the specific failure point.",
      "implementation_hint": "Instrument the follow-up email link with UTM parameters that identify the host, the agent, and the call timestamp. Use these to build the funnel in Mixpanel or Amplitude. Set up a Slack alert for any host who reaches step 5 but doesn't reach step 6 within 5 minutes — this triggers a manual review of their session recording. For the first 30 hosts, have the product team watch every step 5→6 session recording to identify patterns."
    },
    {
      "id": "tests-006",
      "type": "validation_strategy",
      "title": "One-Click Confirmation Speed Validation",
      "validates_element": "works-006",
      "journey_phases": [
        "proposal_mgmt",
        "pricing",
        "retention"
      ],
      "problem": "If pre-decided outcomes (price, guests, term) are presented as open decisions with multi-step flows, Drew wastes time re-evaluating things he already decided — and the artificial decision points may introduce doubt where the call established certainty.",
      "solution": "Measure time-to-confirmation for pre-decided actions: the elapsed time from page load to the host clicking Confirm. Compare against the target of under 10 seconds for pre-discussed proposals and under 5 seconds for pricing confirmations.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew decides on the lease term in 14 seconds of conversation. The platform must not expand this to minutes of form navigation. Time-to-confirmation measures whether the platform respects Drew's decision speed."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Weighing options may not improve our chances. On poorly designed sites, putting effort into making the best choice doesn't really help.",
          "insight": "Krug establishes that forcing option-weighing on pre-decided users wastes time without improving outcomes. Long confirmation times indicate the platform is forcing unnecessary weighing."
        }
      ],
      "priority": "medium",
      "validation_method": "analytics",
      "test_description": "For each confirmation screen (proposal acceptance, pricing confirmation, renewal extension), measure the time from page load to the host clicking the primary action button (Confirm/Accept/Extend). Segment by whether the terms were pre-discussed with an agent (flag in CRM). Compare pre-discussed vs. non-pre-discussed confirmation times.",
      "success_criteria": "Median time-to-confirmation under 10 seconds for proposals where terms were pre-discussed with the agent. Under 5 seconds for pricing confirmations where the rate matches the call. If pre-discussed confirmations take longer than 15 seconds, the platform is treating confirmations as decisions.",
      "failure_meaning": "Confirmation times exceeding targets indicate one or more problems: (a) the confirmation screen shows editable fields instead of a read-only summary, inviting deliberation; (b) the Confirm button is not the most visually prominent element, forcing Drew to scan for it; (c) additional confirmation dialogs ('Are you sure?') double the interaction cost; (d) the page loads slowly, adding latency before Drew can act. Session recordings will distinguish between 'Drew was deliberating' (problem a-c) and 'Drew was waiting' (problem d).",
      "implementation_hint": "Track the analytics event 'confirmation_page_loaded' (timestamp) and 'confirmation_action_clicked' (timestamp + action type). Calculate the delta. Set up a dashboard that shows median, p75, and p95 confirmation times per page type. Flag any session where confirmation time exceeds 30 seconds for manual review. For A/B testing, compare a read-only summary + Confirm button against an editable form + Submit button to quantify the time difference."
    },
    {
      "id": "tests-007",
      "type": "validation_strategy",
      "title": "Billboard Hierarchy Tier Validation",
      "validates_element": "communicates-001",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If the three-tier billboard hierarchy (Anchor → Action → Details) is not visually enforced, Drew's scanning eye has no guidance — all information competes equally, and Drew either misses the primary action or fixates on irrelevant details.",
      "solution": "Run the $25,000 Pyramid test: show each phase entry screen for 5 seconds, then ask the host to point at and name the areas they see. Compare named areas against the intended three-tier structure.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Glancing around, they should be able to point at the different areas of the page and say, 'Things I can do on this site!' 'Links to today's top stories!' 'Products this company sells!'",
          "insight": "The Pyramid test operationalizes Krug's area-definition principle. If a host can name the areas, the visual separation is working. If they can't, the areas bleed into each other."
        },
        {
          "source": "drew-call.txt, 01:32-04:18",
          "type": "host_call",
          "quote": "[Guest introduction area] Ariel and Amber are both flexible... [Guarantee area] split lease doubled the deposit... [Photos area] one more question I had was about pictures...",
          "insight": "Bryant's call has clear topic areas with verbal transitions. The platform must create equally clear visual areas. The Pyramid test measures whether it succeeds."
        }
      ],
      "priority": "high",
      "validation_method": "usability_test",
      "test_description": "Recruit 8-10 hosts. For each phase entry screen, show a static screenshot for 5 seconds. Then present a blank wireframe outline of the page and ask: 'Point at the areas you remember and give each one a name.' Record the names and locations. Compare against the intended tier structure: did hosts identify the Anchor area? The Action area? The Details area? Did they name them in terms that match the intended content?",
      "success_criteria": "80% of hosts identify at least 3 distinct areas AND correctly name the Anchor area (e.g., 'who the guests are' for proposals, 'my apartment' for listings). If hosts cannot distinguish the Anchor from the Details, the visual weight contrast between tiers is insufficient.",
      "failure_meaning": "If hosts identify fewer than 3 areas, the page lacks sufficient visual separation — areas bleed into each other through insufficient whitespace, same background colors, or competing heading sizes. If hosts identify areas but misname the Anchor (e.g., calling the Details area the most important), the visual weight hierarchy is inverted — Tier 3 elements are stealing attention from Tier 1. Fix by increasing the font size / weight gap between tiers and adding background color alternation.",
      "implementation_hint": "This can be run in person or via video call using screen share. Show the screenshot for exactly 5 seconds using a timer. Then switch to the blank wireframe and let the host annotate. Use a simple annotation tool (Miro or FigJam) for remote sessions. Run this test early — during the design phase with Figma mockups, not after development. Repeat after significant visual changes."
    },
    {
      "id": "tests-008",
      "type": "validation_strategy",
      "title": "Call-to-Screen Vocabulary Match Validation",
      "validates_element": "communicates-002",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt"
      ],
      "problem": "If the platform uses different vocabulary than the agent used in the call, Drew's scanner cannot find matching trigger words — the information is present but encoded in the wrong vocabulary, making it invisible to his scanning eye.",
      "solution": "Create a vocabulary mapping audit: for each platform label, heading, and button text, compare against the agent's actual words from the call transcript. Score each label as 'call match,' 'close synonym,' or 'platform jargon.'",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Take names of things, for example. Typical culprits are cute or clever names, marketing-induced names, company-specific names, and unfamiliar technical names.",
          "insight": "Krug identifies naming as a primary source of question marks. The vocabulary audit systematically identifies every label that falls into his 'culprit' categories."
        },
        {
          "source": "drew-call.txt, 02:57",
          "type": "host_call",
          "quote": "regarding security deposit or damage deposit. Is that something you charge? ... 1000.",
          "insight": "Bryant uses 'security deposit' — the term Drew knows. If the platform says 'Refundable Guarantee' or 'Damage Protection,' Drew's scanner will not find a match."
        }
      ],
      "priority": "high",
      "validation_method": "manual_review",
      "test_description": "Extract every user-facing label, heading, button text, and field name from the platform. For each, search 3+ call transcripts for the equivalent term the agent used. Score each platform term: (1) Call match — the platform uses the exact word the agent used. (2) Close synonym — different word, same meaning, minimal translation needed. (3) Platform jargon — no call equivalent, requires the host to learn a new term. Create a vocabulary mapping table and flag all items scoring 3.",
      "success_criteria": "80% of platform terms score 1 (call match) or 2 (close synonym). Maximum 1 unfamiliar term per screen (items scoring 3). Zero jargon terms in Tier 1 headings or Tier 2 action button labels — these high-visibility positions must use exact call vocabulary.",
      "failure_meaning": "Platform terms scoring 3 (jargon) in high-visibility positions indicate that the product team is using internal taxonomy instead of user vocabulary. The fix is direct: replace the platform term with the call term. If the platform concept has no call equivalent (e.g., 'lease style'), it must be flagged for inline explanation on first encounter. Persistent jargon across multiple screens indicates a systemic naming problem that requires a vocabulary standardization initiative.",
      "implementation_hint": "Build the vocabulary mapping table in a shared spreadsheet with columns: Platform Term | Screen Location | Agent Term (from call) | Score (1/2/3) | Action Required. Assign the audit to the content/UX writing team. Use at least 3 different call transcripts to ensure the 'agent term' is consistent across agents, not just one agent's idiolect. Update the table as new features ship. This becomes a living document that prevents vocabulary drift."
    },
    {
      "id": "tests-009",
      "type": "validation_strategy",
      "title": "Progressive Disclosure Decision-Sequence Validation",
      "validates_element": "communicates-003",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation",
        "proposal_mgmt"
      ],
      "problem": "If information is disclosed in the wrong sequence (e.g., financial details before guest identity on proposal pages), Drew satisfices on incomplete information — he may accept or reject a proposal based on the money before understanding who the guests are, leading to suboptimal decisions.",
      "solution": "Track the scroll and interaction sequence on proposal and listing pages to verify that hosts encounter information in the intended decision-tree order, and conduct a qualitative test where hosts narrate their decision process aloud.",
      "evidence": [
        {
          "source": "drew-call.txt, 01:32-04:18",
          "type": "host_call",
          "quote": "Ariel and Amber are both flexible... [then] split lease doubled the deposit, and guarantees payments to you... [then] they'd want to start with a four months...",
          "insight": "Bryant discloses in strict decision-tree order: who → guarantee → terms. The platform must mirror this sequence. If financial terms appear before guest identity, the disclosure order is wrong."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.",
          "insight": "If financial details are shown first, Drew satisfices on the financial signal alone — clicking Accept or Decline based on the dollar amount without processing who the guests are. The disclosure sequence determines the quality of the satisficing decision."
        }
      ],
      "priority": "medium",
      "validation_method": "usability_test",
      "test_description": "Conduct a think-aloud usability test with 6-8 hosts reviewing a proposal page. Ask them to narrate their thought process as they evaluate the proposal. Record what information they look at first, second, and third. Map their narrated decision sequence against the intended disclosure order (who → what they want → what I earn → should I accept).",
      "success_criteria": "75% of hosts encounter and process information in the intended decision-tree order during think-aloud narration. Specifically: hosts should mention or reference the guests (who) before mentioning the financial terms (how much). If more than 25% of hosts fixate on financial terms first, the page layout needs to be reordered.",
      "failure_meaning": "If hosts consistently process financial information before guest identity, the page layout places financial data above or more prominently than guest data — violating the decision-tree disclosure order. The fix is spatial: move guest information above financial information, increase the visual weight of guest names, and reduce the visual weight of dollar amounts until the natural scan order matches the decision-tree order.",
      "implementation_hint": "Use a moderated think-aloud test (in person or via Zoom with screen share). Provide the scenario: 'You've just had a call with Bryant about guests for your apartment. Open this page and walk me through how you'd evaluate this proposal.' Record both the narration and the screen interaction. Code the transcripts for information-processing order. Run with Figma prototypes during design phase and again with production pages post-launch."
    },
    {
      "id": "tests-010",
      "type": "validation_strategy",
      "title": "Clickability Disambiguation Validation",
      "validates_element": "communicates-005",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "If interactive elements are not visually distinct from informational elements, Drew clicks non-interactive text (wasting time and eroding trust) or misses interactive elements entirely (deferring to texting Bryant instead of using the platform's actions).",
      "solution": "Run a click-target identification test: show hosts a page screenshot and ask them to circle everything they think is clickable. Compare their answers against the actual interactive elements.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "On Senator Orrin Hatch's Home page... it wasn't clear whether everything was clickable, or nothing was.",
          "insight": "Krug's Hatch example is the failure case this validation prevents. If hosts can't distinguish clickable from non-clickable elements on a static screenshot, the interactive visual language has failed."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Since a large part of what people are doing on the Web is looking for the next thing to click, it's important to make it obvious what's clickable and what's not.",
          "insight": "The test directly measures whether 'what's clickable' is 'obvious' — Krug's exact criterion."
        }
      ],
      "priority": "medium",
      "validation_method": "usability_test",
      "test_description": "Show 10 hosts a static screenshot (no hover states, no cursor) of each key platform page. Give them a red marker (physical or digital) and ask: 'Circle everything you think you could click on.' Collect the marked screenshots. Calculate: (1) True positive rate — percentage of actual interactive elements correctly circled. (2) False positive rate — percentage of non-interactive elements incorrectly circled. (3) Miss rate — percentage of actual interactive elements not circled.",
      "success_criteria": "True positive rate above 90% (hosts identify nearly all clickable elements). False positive rate below 10% (hosts rarely mistake non-interactive elements for interactive ones). Miss rate below 15% for the primary action button — the most important clickable element must never be missed.",
      "failure_meaning": "High false positive rate indicates that non-interactive elements (headings, labels, badges) share visual properties (color, shape, underline) with interactive elements — the 'Hatch problem.' Fix by restricting the interactive visual vocabulary (--secondary-purple, filled shapes, underlines) exclusively to clickable elements. High miss rate for the primary action indicates the button lacks sufficient visual prominence — increase size, contrast, or whitespace isolation.",
      "implementation_hint": "Can be run as an unmoderated remote test: email a screenshot to participants with instructions to annotate and return. Or use a tool like Optimal Workshop's First Click Testing. Run with both Figma mockups (design phase) and production screenshots (post-launch). The test takes 5 minutes per participant and provides immediately actionable results. Repeat after visual redesigns."
    },
    {
      "id": "tests-011",
      "type": "validation_strategy",
      "title": "Billboard Weight Contrast Measurement",
      "validates_element": "looks-001",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If the visual weight contrast between Tier 1 (anchor heading) and Tier 3 (supporting text) is too subtle, the billboard hierarchy collapses — Drew's eye finds no dominant entry point and must read rather than scan, which he will not do.",
      "solution": "Measure the typographic contrast ratio between tiers: the Tier 1 anchor must be at least 2x the font size of Tier 3 text and use a distinct typeface (Instrument Serif vs. Inter) to create a scannable entry point.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "The more important something is, the more prominent it is.",
          "insight": "Prominence must be measurable — not just 'somewhat larger' but quantifiably larger. A 2x size ratio creates an unambiguous hierarchy visible at billboard speed."
        },
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you... Okay. Okay. Okay. Alright.",
          "insight": "Drew extracts one conclusion from a multi-sentence pitch. The visual equivalent: the conclusion must be 2x louder than the mechanism. If both are the same size, Drew cannot extract the conclusion through scanning."
        }
      ],
      "priority": "medium",
      "validation_method": "automated",
      "test_description": "For each phase entry screen, measure: (1) Tier 1 anchor font size (target: 28-36px). (2) Tier 3 supporting text font size (target: 14px). (3) Size ratio (target: ≥2.0x). (4) Typeface distinction (Tier 1 should use Instrument Serif, Tier 3 should use Inter). (5) Whitespace above Tier 1 anchor (target: ≥32px). Automate this check using a CSS audit tool or Playwright script that inspects computed styles on the live page.",
      "success_criteria": "All phase entry screens maintain: (a) Tier 1:Tier 3 font size ratio ≥ 2.0x. (b) Tier 1 uses Instrument Serif (--font-heading / serif). (c) Tier 1 anchor has ≥ 32px whitespace above it. (d) WCAG AAA contrast ratio (≥ 7:1) for the anchor text on its background. Any screen failing any of these four checks must be flagged for visual redesign.",
      "failure_meaning": "Font size ratio below 2.0x means the hierarchy is too subtle — Tier 1 doesn't claim enough visual attention to guide scanning. Missing typeface distinction (both tiers using Inter) means the eye cannot distinguish 'headline' from 'body' through font family alone — a critical failure for billboard scanning. Insufficient whitespace above the anchor means the anchor competes with navigation or header elements for the eye's first fixation.",
      "implementation_hint": "Write a Playwright or Cypress test that navigates to each phase entry screen, inspects the computed style of the h1/h2 element (anchor) and the first paragraph element (Tier 3 text), and asserts the size ratio, font-family, and margin-top. Run this as part of the CI pipeline to catch visual hierarchy regressions. The test takes 1 minute to run and prevents the most common hierarchy failure: a developer reducing heading size 'to fit more content above the fold.'"
    },
    {
      "id": "tests-012",
      "type": "validation_strategy",
      "title": "Clickability Color Isolation Compliance Check",
      "validates_element": "looks-002",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "If the interactive color (--secondary-purple) appears on non-interactive elements (headings, badges, decorative text), Drew cannot distinguish actions from decorations by scanning — the Hatch problem. Every false affordance erodes trust.",
      "solution": "Automate a CSS audit that verifies --secondary-purple (#6d31c2) and related interactive colors are used ONLY on elements with interactive roles (buttons, links, form controls) and never on static text, headings, or decorative elements.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "On Senator Orrin Hatch's Home page... it wasn't clear whether everything was clickable, or nothing was.",
          "insight": "The Hatch problem is a color-usage problem: when the same color signals both 'clickable' and 'important text,' clickability becomes invisible. The automated audit prevents this."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "when you force users to think about something that should be mindless like what's clickable, you're squandering the limited reservoir of patience and goodwill.",
          "insight": "Clickability must be mindless — achieved through strict color isolation. The audit enforces this rule at the code level."
        }
      ],
      "priority": "medium",
      "validation_method": "automated",
      "test_description": "Write a Playwright or custom CSS audit script that: (1) Crawls all platform pages. (2) Finds every element using --secondary-purple (#6d31c2) or its gradient variant as text color, background color, or border color. (3) Checks each element's role: is it a button, link, or form control (interactive)? Or is it a heading, paragraph, span, label, or div (potentially non-interactive)? (4) Flags any non-interactive element using the interactive color as a compliance violation.",
      "success_criteria": "Zero violations: --secondary-purple appears only on elements with interactive ARIA roles or native interactive elements (button, a, input, select). If any heading, label, badge, or decorative element uses --secondary-purple, it is a violation that must be fixed.",
      "failure_meaning": "Violations indicate that designers or developers are using the interactive color for emphasis or branding on non-interactive elements. This degrades clickability signaling across the entire platform. The fix is to replace --secondary-purple on non-interactive elements with --primary-purple (for emphasis) or --text-dark (for labels), reserving --secondary-purple exclusively for clickable elements.",
      "implementation_hint": "Implement as a linting rule in the CSS/design system. In a design token system, create a semantic token --interactive-color that maps to --secondary-purple and restrict its usage documentation to interactive components only. The Playwright audit runs in CI on every PR, preventing regressions. Initial audit on existing pages may surface 10-20 violations — prioritize fixing those on high-traffic pages (proposal review, dashboard, listing wizard)."
    },
    {
      "id": "tests-013",
      "type": "validation_strategy",
      "title": "Confirmation vs. Decision Visual Language Validation",
      "validates_element": "looks-004",
      "journey_phases": [
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "problem": "If confirmation screens (pre-decided outcomes) look identical to decision screens (open choices), Drew enters deliberation mode on confirmations — spending time weighing options he already chose. Worse, the editable-field visual language suggests the pre-decided value might be wrong, introducing doubt.",
      "solution": "A/B test two visual treatments for the pricing step: Treatment A (current) shows the price in an editable text field. Treatment B (confirmation pattern) shows the price as a read-only mono-font statement with a single Confirm button. Measure time-to-completion and error rate.",
      "evidence": [
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month... That's right.",
          "insight": "Drew's price is a fact to be confirmed, not a field to be filled. The A/B test measures whether the confirmation visual language (read-only + Confirm button) produces faster, more accurate outcomes than the decision visual language (editable field + Submit)."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Weighing options may not improve our chances.",
          "insight": "Editable fields invite weighing. Read-only summaries invite confirmation. The A/B test measures whether eliminating the weighing invitation improves speed and accuracy."
        }
      ],
      "priority": "medium",
      "validation_method": "a_b_test",
      "test_description": "On the pricing step of the listing wizard, randomly assign hosts to Treatment A (editable field showing '$2,000' with a Submit button) or Treatment B (mono-font read-only statement '$2,000/mo — from your call with Bryant' with a Confirm button and a small 'Change' link). Measure: (1) Time from page load to action (Confirm/Submit). (2) Modification rate — percentage of hosts who change the pre-populated value. (3) Error rate — percentage of submitted values that don't match the agent's call notes. Run for 200 hosts (100 per treatment).",
      "success_criteria": "Treatment B (confirmation pattern) produces: (a) 40% faster median time-to-action compared to Treatment A. (b) Equal or lower modification rate (hosts who need to change should still be able to). (c) Equal or lower error rate. If Treatment B is faster without increasing errors, the confirmation visual language is validated.",
      "failure_meaning": "If Treatment B is not faster, the confirmation visual language may be unfamiliar to hosts — they may spend time trying to figure out how to edit the read-only display, offsetting the time savings from simpler interaction. If Treatment B has a higher error rate, hosts may be confirming incorrect values because the read-only display discourages editing even when editing is needed. In either case, iterate on the visual design: make the 'Change' link more visible or add a brief provenance annotation that helps hosts verify the value.",
      "implementation_hint": "Implement as a feature flag with 50/50 random assignment. Use the existing analytics pipeline to track time-to-action and modification rate. For error rate, compare submitted values against CRM data in a weekly batch process. Run the test for 4 weeks or until 200 hosts reach the pricing step, whichever comes first. Ensure both treatments are instrumented identically for fair comparison."
    },
    {
      "id": "tests-014",
      "type": "validation_strategy",
      "title": "Optimistic Confirmation Perceived Speed Validation",
      "validates_element": "behaves-001",
      "journey_phases": [
        "proposal_mgmt",
        "pricing",
        "retention"
      ],
      "problem": "If confirmation actions show loading spinners before displaying the success state, Drew experiences unnecessary latency that contradicts his instant verbal confirmations in the call. Each loading state is a question mark: 'Did it work? Should I click again?'",
      "solution": "Measure perceived latency for confirmation actions: the time from Drew's click to the visible success state. Compare optimistic UI (instant success, background server sync) against standard UI (loading spinner, then success).",
      "evidence": [
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Drew's confirmation is instantaneous. The platform's confirmation UI must match: zero perceived latency between click and success. Any loading state contradicts Drew's certainty."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand.",
          "insight": "A loading spinner after a confirmation click is a question mark. Optimistic UI eliminates it."
        }
      ],
      "priority": "medium",
      "validation_method": "a_b_test",
      "test_description": "On the proposal acceptance flow, A/B test: Treatment A (standard) — click Accept → loading spinner for 500-1500ms → success state. Treatment B (optimistic) — click Accept → immediate success state → background server sync. Measure: (1) Host satisfaction score (post-action micro-survey: 'How did that feel? Fast / Normal / Slow'). (2) Double-click rate (hosts who click the button multiple times, indicating uncertainty). (3) Time-to-next-action (how quickly the host moves on to the next task after confirming).",
      "success_criteria": "Treatment B (optimistic) produces: (a) ≥ 80% 'Fast' satisfaction rating. (b) Double-click rate under 5% (vs. standard UI benchmark). (c) Faster time-to-next-action, indicating hosts feel confident to move on immediately. No increase in server-side errors or rollback events (the optimistic UI must be reliable).",
      "failure_meaning": "If optimistic UI increases the double-click rate, the success state animation may be too subtle — hosts don't realize the action completed. Increase the visual feedback (larger checkmark, more prominent color change, brief scale animation). If optimistic UI has a high rollback rate (server rejects the action after showing success), the pre-validation logic needs tightening — catch errors before the click, not after. If satisfaction scores are equal, the standard loading time (500ms) may already be fast enough that optimistic UI adds complexity without perceptible benefit.",
      "implementation_hint": "Implement optimistic UI using a state management pattern: on click, immediately set local state to 'confirmed' and render the success UI. Simultaneously fire the API request. On success response, no change needed. On error response, transition back to default state with inline error. Track rollback events as a separate metric to monitor optimistic UI reliability. Use the spring easing (cubic-bezier(0.34, 1.56, 0.64, 1)) for the checkmark animation to create satisfying tactile feedback."
    },
    {
      "id": "tests-015",
      "type": "validation_strategy",
      "title": "Conversational Step Progression Completion Rate Validation",
      "validates_element": "behaves-003",
      "journey_phases": [
        "onboarding",
        "listing_creation"
      ],
      "problem": "If multi-step flows use hard cuts between steps (blank screen → new form), Drew loses the guided feeling from the call. Each hard cut feels like starting over, increasing abandonment risk. The listing wizard's 6 steps are 6 opportunities for Drew to encounter a hard cut and leave.",
      "solution": "Measure wizard completion rates and step-level dropout rates. Compare against the 75% completion target. Identify which specific steps have the highest dropout.",
      "evidence": [
        {
          "source": "drew-call.txt, 01:03-02:57",
          "type": "host_call",
          "quote": "[Continuous conversational flow from property details through availability, guests, guarantee, photos]",
          "insight": "Bryant's call has zero dropout — Drew stays engaged through 6 topics because the flow is continuous. The wizard must achieve similarly low dropout through visual continuity between steps."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through.",
          "insight": "Drew will muddle through the wizard — but only if each step feels like a continuation. If a hard cut forces him to re-orient, his muddling strategy may fail and he abandons."
        }
      ],
      "priority": "high",
      "validation_method": "analytics",
      "test_description": "Instrument each step of the listing wizard with analytics events: 'step_N_started' and 'step_N_completed.' Track the funnel: Step 1 started → Step 1 completed → Step 2 started → ... → Step 6 completed. Calculate: (1) Overall completion rate (Step 1 started → Step 6 completed). (2) Step-level drop-off (which step loses the most hosts). (3) Time per step (which steps take longest). (4) Return rate (hosts who leave and come back to resume). Run on the first 200 hosts.",
      "success_criteria": "Overall completion rate above 75% (hosts who start the wizard and finish all 6 steps). No single step has a dropout rate above 15%. Pre-filled confirmation steps (1-3) should take under 10 seconds each. If any step has dropout above 15%, investigate with session recordings.",
      "failure_meaning": "High dropout at a specific step indicates that step has a self-evidence failure: the host arrives and doesn't understand what to do. Common causes: (a) the step introduces unfamiliar vocabulary ('lease style'); (b) the step requires creative input without guidance ('write a description'); (c) the step has a technical friction (photo upload fails, form validation blocks progress). High dropout at step 1 specifically indicates the wizard's entry point fails the self-evidence test — the host doesn't even understand they're starting a wizard. Session recordings of dropout moments will reveal the specific failure.",
      "implementation_hint": "Use Mixpanel or Amplitude funnel analysis. Set up a real-time dashboard showing the step funnel. Create Slack alerts for any day where overall completion drops below 65% (indicating a systemic issue, possibly a bug). For step-level analysis, segment by device type (mobile vs. desktop) and by agent (do hosts of certain agents complete at higher rates, indicating the quality of the call affects platform behavior?). Review session recordings for the 5 longest-duration steps each week."
    },
    {
      "id": "tests-016",
      "type": "validation_strategy",
      "title": "Satisfice-Proof Inline Validation Effectiveness",
      "validates_element": "behaves-004",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If form validation only fires on submit (post-submission errors), Drew must find and fix errors in a form he barely looked at — the worst interaction pattern for a scanner. If inline validation fires too aggressively, it creates a wall of warnings that Drew scans past.",
      "solution": "Measure the rate of post-submission errors before and after implementing inline on-blur validation. Track whether inline validation reduces the number of hosts who encounter submission-blocking errors.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing.",
          "insight": "Satisficing hosts will not review forms before submitting. Inline validation catches errors at the moment of input rather than at submission — the only strategy that works for scanners."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month... That's right.",
          "insight": "Drew confirms instantly. If a pre-populated field has a derivation error, inline validation must flag it the moment Drew's eye passes over it (on page load for pre-filled fields) — not when he clicks Submit."
        }
      ],
      "priority": "medium",
      "validation_method": "analytics",
      "test_description": "Track two metrics across all forms: (1) Submission error rate — percentage of form submissions that are rejected due to validation errors. (2) Inline correction rate — percentage of validation errors that are caught and corrected before submission (host sees the inline indicator, fixes the field, then submits successfully). Compare these rates before and after deploying inline on-blur validation. Additionally, track the 'error discovery time' — elapsed time from the error occurring to the host fixing it.",
      "success_criteria": "After deploying inline validation: (a) Submission error rate drops by 50% or more compared to baseline. (b) Inline correction rate exceeds 80% (most errors are caught and fixed before submission). (c) Error discovery time decreases to under 5 seconds (host fixes the error within seconds of leaving the field, not minutes after submission).",
      "failure_meaning": "If submission error rate doesn't decrease, inline validation may not be noticeable — the visual indicator (border color change, inline message) is too subtle for Drew's scanning behavior. Increase the visual prominence: larger text, warmer color, or a gentle animation (2 pulses). If inline correction rate is low, hosts may be ignoring inline warnings — either because there are too many (alarm fatigue) or because the warning language doesn't communicate the consequence. Simplify to maximum 1 error per field, in conversational language.",
      "implementation_hint": "Instrument each form field with events: 'field_blur' (with value), 'inline_error_shown' (with error type), 'field_corrected' (field modified after error shown), 'form_submitted' (with all field values and any remaining errors). Build a dashboard showing inline correction rate per field type. Prioritize fixing fields with low inline correction rates — these are the fields where the validation message is failing to communicate the problem."
    },
    {
      "id": "tests-017",
      "type": "validation_strategy",
      "title": "Bryant Escape Hatch Usage and Platform Bypass Prevention",
      "validates_element": "behaves-005",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "If the Bryant escape hatch is not available in-context, hosts text Bryant outside the platform — creating agent bottlenecks and training hosts to permanently bypass the platform. If the escape hatch is too prominent, hosts use it instead of self-serving, creating the same bottleneck.",
      "solution": "Track escape hatch usage patterns: frequency, context (which screens trigger it), and whether hosts complete the platform action after using the escape hatch or abandon in favor of agent-mediated completion.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:38-05:50",
          "type": "host_call",
          "quote": "if you have any questions for me, you can feel free to text me or email me.",
          "insight": "Bryant establishes the escape hatch. The platform must honor it while preventing permanent platform bypass. Usage analytics reveal whether the balance is right."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "If we find something that works, we stick to it. Once we find something that works — no matter how badly — we tend not to look for a better way.",
          "insight": "If texting Bryant works, Drew will never learn the platform. The escape hatch must be a bridge to platform usage, not a permanent alternative."
        }
      ],
      "priority": "medium",
      "validation_method": "analytics",
      "test_description": "Track: (1) Escape hatch trigger rate — percentage of page views where the host opens the Bryant message panel. (2) Trigger context — which screens/phases generate the most escape hatch usage. (3) Post-trigger completion — after using the escape hatch, does the host complete the platform action (return to self-serve) or abandon the screen (agent takes over)? (4) Repeat usage — does the same host use the escape hatch on subsequent visits (habitual bypass) or only on first encounters (learning aid)?",
      "success_criteria": "Escape hatch trigger rate between 5-15% of page views (available when needed, not overused). Post-trigger platform completion rate above 60% (hosts get unstuck and return to self-serve, not permanently defer to agent). Repeat usage should decrease across sessions — hosts should need the escape hatch less over time, not more.",
      "failure_meaning": "Trigger rate above 15% indicates widespread confusion — the platform's self-evidence is failing on too many screens. Investigate the highest-trigger screens for usability improvements. Trigger rate below 5% may indicate the escape hatch is too hidden — hosts who need help can't find it. Post-trigger completion below 60% indicates the escape hatch is being used as a permanent alternative, not a bridge — the agent is completing actions instead of guiding hosts back to the platform. Increasing repeat usage indicates the platform is not learning from escape hatch signals — the confusing screens aren't being improved.",
      "implementation_hint": "Log every escape hatch interaction: 'escape_hatch_opened' (with current screen, time on page, and whether any errors are visible), 'escape_hatch_message_sent' (with message content hash, not PII), 'escape_hatch_closed' (with time open), 'platform_action_completed_after_escape' (did the host complete the original action?). Build a weekly report showing the top 5 screens by escape hatch trigger rate. These are the screens that need the most usability improvement — use them as the input for the next usability test cycle."
    },
    {
      "id": "tests-018",
      "type": "validation_strategy",
      "title": "Zero-Friction Continuity Emotional Validation",
      "validates_element": "feels-001",
      "journey_phases": [
        "onboarding",
        "listing_creation"
      ],
      "problem": "If the platform's first screen feels like a new system rather than a continuation of the call, the emotional momentum from Bryant's conversation shatters. Drew shifts from 'someone is taking care of this' to 'now I have to figure this out alone' — a trust-eroding emotional transition that may not be visible in behavioral analytics.",
      "solution": "Run a qualitative first-impression test: show hosts the platform's first screen immediately after they complete a call with an agent, and ask them to describe their emotional reaction in their own words.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... can we maybe move on?",
          "insight": "Drew's post-call emotional state is impatient-positive momentum. The first platform screen must sustain this feeling. The qualitative test captures whether it does — through the host's own emotional vocabulary."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Using a site that doesn't make us think about unimportant things feels effortless, whereas puzzling over things that don't matter to us tends to sap our energy and enthusiasm.",
          "insight": "Krug identifies the emotional consequence: sapped energy. The qualitative test checks whether hosts describe the first screen as 'effortless' (continuity preserved) or 'confusing/overwhelming' (continuity broken)."
        }
      ],
      "priority": "high",
      "validation_method": "usability_test",
      "test_description": "Recruit 8 hosts who have just completed a real call with an agent (within 30 minutes). Send them the agent's follow-up email link and ask them to open it while on a recorded video call. As they see the platform's first screen, ask: 'What's your first reaction?' and 'Does this feel like a continuation of your call, or like something new?' Record their responses verbatim. Code responses into emotional categories: recognition, confusion, relief, frustration, indifference.",
      "success_criteria": "75% of hosts use recognition or continuation language ('Oh, this is what Bryant was talking about,' 'I see my apartment,' 'This looks right'). Fewer than 15% use confusion or frustration language ('Where am I?,' 'What do I do here?,' 'This doesn't look like what I expected'). The emotional response should match the post-call momentum, not reset it.",
      "failure_meaning": "If hosts use confusion language, the first screen fails the call-to-platform continuity test. Common causes: (a) no reference to the agent's name or the call on the first screen; (b) generic welcome text instead of personalized context; (c) platform jargon instead of call vocabulary; (d) a dashboard layout that requires navigation before showing relevant content. If hosts use indifference language ('it's fine, I guess'), the screen is adequate but not achieving the emotional continuity target — it's not breaking the experience but not sustaining the momentum either.",
      "implementation_hint": "Time this test carefully: the host must see the platform within 30 minutes of the call to capture the post-call emotional state. Coordinate with agents to schedule follow-up emails immediately after test calls. The video call observation can be done via Zoom — ask the host to share their screen and think aloud. 8 participants is sufficient for qualitative emotional patterns. Run this test once during the design phase (with mockups) and once post-launch (with the real platform)."
    },
    {
      "id": "tests-019",
      "type": "validation_strategy",
      "title": "Guaranteed-Income Calm Financial Display Validation",
      "validates_element": "feels-003",
      "journey_phases": [
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "If financial displays introduce uncertainty — 'estimated,' 'pending,' 'approximately' — they undo the calm certainty Bryant's verbal guarantee created. Drew may not consciously notice the uncertainty language, but his emotional state shifts from 'I get paid' to 'maybe I get paid.'",
      "solution": "Audit all financial copy for uncertainty language and conduct a qualitative test measuring emotional response to two versions of the payment display: one with guarantee-first framing and one with deduction-first framing.",
      "evidence": [
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment... Okay. Okay. Okay. Alright.",
          "insight": "Bryant's guarantee is absolute: 'guarantees,' 'doesn't have any effect on you,' 'you still receive.' Zero uncertainty. The platform's financial copy must match this certainty."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.",
          "insight": "Financial ambiguity erodes confidence. Precision and certainty in financial displays build it."
        }
      ],
      "priority": "medium",
      "validation_method": "usability_test",
      "test_description": "Two-part validation: (1) Copy audit: review every financial string in the platform for uncertainty words ('estimated,' 'projected,' 'pending,' 'approximately,' 'expected,' 'may'). Flag all instances. (2) Qualitative test: show 10 hosts two versions of the payment summary page. Version A (guarantee-first): 'Your guaranteed rent: $2,000 · Paid on the 1st of every month.' Version B (deduction-first): 'Monthly breakdown: Base rent $2,000 | Split Lease fee -$150 | Net payout: $1,850.' After viewing each version for 10 seconds, ask: 'How confident do you feel about getting paid?' (1-5 scale) and 'Which version makes you feel more secure?' (forced choice).",
      "success_criteria": "Copy audit: zero uncertainty words in Tier 1 financial headings and Tier 2 payment status labels. Uncertainty language is acceptable only in Tier 3 expandable detail sections. Qualitative test: Version A (guarantee-first) scores at least 1 point higher on the confidence scale (mean) and is preferred by at least 70% of hosts in the forced-choice comparison.",
      "failure_meaning": "If Version B (deduction-first) scores equally or higher, hosts may value transparency over reassurance — they want to see the math even if it introduces a smaller number. In this case, the solution is to show both: guarantee-first headline with expandable deduction details. If the copy audit reveals uncertainty words in Tier 1/2 positions, these are immediate fixes — replace 'Estimated payout' with 'Your guaranteed rent,' replace 'Processing' with 'Paid on [date].'",
      "implementation_hint": "The copy audit can be automated with a grep/search across all localization strings for the flagged uncertainty words. Run as a pre-release check. The qualitative test requires showing two static mockups (not the live platform) to avoid contaminating the host's actual experience. Use within-subjects design: each host sees both versions in randomized order. 10 hosts is sufficient for the forced-choice comparison; confidence-scale analysis requires at least 15 for statistical significance."
    },
    {
      "id": "tests-020",
      "type": "validation_strategy",
      "title": "Renewal Continuation Framing Validation",
      "validates_element": "feels-007",
      "journey_phases": [
        "retention"
      ],
      "problem": "If the renewal prompt triggers re-evaluation ('Should I continue? Was this worth it?') instead of continuation ('Obviously yes — look at what I've earned'), Drew's open-but-uncommitted stance ('maybe the ability to extend') may resolve to 'no' out of inertia rather than out of dissatisfaction.",
      "solution": "A/B test two renewal prompt framings: continuation ('Extend 4 more months?') versus re-commitment ('Renew your lease for a new term'). Measure click-through rate on the primary CTA.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew's word is 'extend' — not 'renew' or 'recommit.' The continuation framing uses Drew's own word. The re-commitment framing introduces new language that may trigger re-evaluation."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "Making pages self-evident is like having good lighting in a store: it just makes everything seem better.",
          "insight": "A simple continuation prompt ('Extend?') is self-evident. A formal renewal process ('Review and accept updated terms') makes Drew think — violating Krug's First Law at the retention touchpoint."
        }
      ],
      "priority": "medium",
      "validation_method": "a_b_test",
      "test_description": "At the renewal touchpoint (2-3 weeks before lease end), randomly assign hosts to: Treatment A (continuation): '$8,000 earned · Zero issues · Ariel & Amber want to stay. Extend 4 months?' with a single 'Extend' button. Treatment B (re-commitment): 'Your lease expires June 30. To renew, review your terms and confirm your next lease period.' with a 'Start Renewal' button leading to a multi-step form. Measure: (1) CTA click-through rate. (2) Renewal completion rate. (3) Time-to-completion.",
      "success_criteria": "Treatment A (continuation) produces: (a) CTA click-through rate at least 25% higher than Treatment B. (b) Renewal completion rate at least 20% higher (fewer hosts who click through but abandon the process). (c) Median time-to-completion under 30 seconds (vs. Treatment B's expected multi-minute flow).",
      "failure_meaning": "If Treatment B performs equally, hosts may value the thoroughness of a formal renewal process — they want to review terms, not just click Extend. This would indicate that the one-click continuation is perceived as too casual for a financial commitment. The compromise: show the continuation framing (evidence + one button) but add a small 'Review terms first' link for hosts who want more information before committing.",
      "implementation_hint": "This test requires a sufficient sample of hosts reaching the renewal point, which may take months depending on lease cycle timing. Start collecting data from the first cohort of 4-month leases. If sample size is insufficient for statistical significance within one cohort, extend the test across multiple cohorts. Use the continuation framing as the default (Treatment A) and measure against a hold-out group receiving Treatment B — this way, the majority of hosts get the better experience while the test runs."
    },
    {
      "id": "tests-021",
      "type": "validation_strategy",
      "title": "End-to-End Journey Arc Validation",
      "validates_element": "works-001",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "problem": "Individual elements may test well in isolation but fail in sequence — the cumulative effect of small frictions across 8 phases may erode trust, momentum, and engagement even when no single phase is critically broken. The journey arc as a whole may produce a different emotional experience than the sum of its parts.",
      "solution": "Conduct a longitudinal diary study with 10 hosts across the full journey — from first call to first renewal decision. Track emotional state, friction points, and platform usage at each phase transition.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand. The distractions may be slight but they add up, and sometimes it doesn't take much to throw us.",
          "insight": "Krug explicitly warns that question marks compound. A journey-level validation is the only way to measure the cumulative effect of micro-frictions that individually seem trivial."
        },
        {
          "source": "drew-call.txt, full transcript",
          "type": "host_call",
          "quote": "Drew's entire call is a 6-minute frictionless arc from greeting to next steps. The platform journey — spanning weeks to months — must sustain this frictionless quality across a much longer timeframe.",
          "insight": "Bryant maintains a consistent conversational quality for 6 minutes. The platform must maintain a consistent experiential quality for 4+ months. The diary study tests whether this consistency is achieved over the full lifecycle."
        }
      ],
      "priority": "high",
      "validation_method": "usability_test",
      "test_description": "Recruit 10 hosts at the start of their journey (immediately after their first call with an agent). At each phase transition, send a brief survey (3 questions, takes 2 minutes): (1) 'How easy was that? 1-5.' (2) 'Did you contact your agent for help at any point? Yes/No.' (3) 'In one sentence, how do you feel about Split Lease right now?' Track responses across phases over 4+ months. At the end, conduct a 30-minute interview covering the full journey experience.",
      "success_criteria": "Average ease score remains above 4.0/5.0 across all phases (no significant dip at any phase). Agent contact rate decreases across phases (hosts become more self-sufficient, not more dependent). Sentiment in the one-sentence response maintains a positive or neutral tone throughout — with no phase showing more than 20% negative sentiment. At the exit interview, 80% of hosts describe the overall experience as 'easy' or 'effortless.'",
      "failure_meaning": "A significant ease-score dip at a specific phase identifies the weakest link in the journey arc — the phase where cumulative friction tips from manageable to frustrating. Increasing agent contact rate across phases indicates the platform is failing to build self-sufficiency — hosts are learning to depend on the agent rather than learning the platform. Negative sentiment spikes identify emotional failure points — phases where the platform's tone, complexity, or friction contradicts the expectations set by the call. The exit interview provides the qualitative context needed to interpret the quantitative signals.",
      "implementation_hint": "Use a simple survey tool (Typeform, Google Forms) with automated triggers at each phase transition (linked to CRM status changes). The survey must be extremely brief — 3 questions, mobile-friendly, takes under 2 minutes. Longer surveys will have low response rates. Incentivize participation: offer a small rent credit ($25) for completing all phase surveys plus the exit interview. Start with the first cohort of hosts onboarded after launch and run continuously. After 3 cohorts (30 hosts), patterns will be clear enough for systemic improvements."
    },
    {
      "id": "tests-022",
      "type": "validation_strategy",
      "title": "Multi-Step Momentum Perception Validation",
      "validates_element": "feels-004",
      "journey_phases": [
        "listing_creation",
        "onboarding"
      ],
      "problem": "If the listing wizard's 6 steps feel like 6 steps (rather than 2-3 quick confirmations plus a photo upload), Drew's 'can we maybe move on?' impatience will tip into abandonment. The perception of length matters as much as actual length.",
      "solution": "Measure perceived vs. actual wizard duration, and the host's 'almost done' confidence at each step.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "can we maybe move on?",
          "insight": "Drew's impatience sets a strict emotional tolerance for process length. If the wizard feels long, Drew will abandon even if it's objectively fast."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Introduction",
          "type": "book",
          "quote": "If it's short, it's more likely to actually be used.",
          "insight": "Krug applies this to his own book — perceived brevity drives usage. The wizard must feel short even if it has 6 steps."
        }
      ],
      "priority": "medium",
      "validation_method": "usability_test",
      "test_description": "During a moderated usability test of the listing wizard (8 hosts), after each step ask: 'How far through do you think you are? Almost done, halfway, or just getting started?' Record the response alongside the actual step number. After completion, ask: 'How long do you think that took?' and compare against actual elapsed time. Also record whether the host expressed any impatience or 'how much longer?' sentiment during the flow.",
      "success_criteria": "By Step 3 (halfway point), at least 75% of hosts should say 'almost done' or 'more than halfway.' Perceived duration should be within 50% of actual duration — if the wizard took 3 minutes, hosts should estimate 2-4 minutes, not 8-10 minutes. Fewer than 20% of hosts should express impatience during the flow.",
      "failure_meaning": "If hosts say 'just getting started' at Step 3, the pre-filled confirmation steps are not registering as progress — they feel like steps to complete rather than steps already done. Fix by strengthening the progress indicator (show 50% completion at Step 3) and reducing the visual weight of confirmation steps (they should feel like quick checkpoints, not full form pages). If perceived duration is significantly longer than actual, the wizard has a 'felt slow' problem — likely caused by insufficient whitespace, dense layouts, or transitions that feel heavy rather than light.",
      "implementation_hint": "This is best done as a moderated in-person test where the facilitator can interject the 'how far through?' question between steps without breaking the host's flow. Use a stopwatch to record actual elapsed time per step. The question should feel casual: 'Quick check — do you feel like you're almost done, about halfway, or just getting started?' After the wizard, the 'how long did that take?' question captures the time perception gap. Run with both first-time hosts (target audience) and experienced hosts (control group) to see if experience changes perception."
    }
  ]
}
## Output Instructions
You are running in print mode (--print / -p). You have NO tools available — no Write tool, no Read tool, no Bash tool. You cannot save files.

Your ONLY output channel is stdout. Print the complete JSON object directly to stdout. That is how your output gets captured.

Output ONLY the valid JSON object. No markdown fences, no commentary, no preamble. Just the raw JSON starting with { and ending with }.
