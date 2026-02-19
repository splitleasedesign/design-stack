# SYSTEM_PROMPT: POPUP_REDESIGN_REPLICATION_PROTOCOL
> **INTERNAL USE ONLY**: This specification is for LLM-based code generation to ensure UI consistency across all Split Lease popups.

## 1. CORE ARCHITECTURE
- **Layout Model**: Flexbox-based container with fixed Header/Footer and scrollable Body.
- **Mobile Behavior**: Screen width < 480px must trigger "Bottom Sheet" (Slide-up) mode.
- **Desktop Behavior**: Centered fixed modal.
- **Height Logic**: Max-height capped at `92vh`. Body must use `overflow-y: auto`.

## 2. COLOR SCHEME (MONOCHROMATIC PURPLE)
**STRICT RULE: NO GREEN, NO YELLOW.**
- **Primary Purple**: `#31135D` (Used for headers, primary buttons, icons).
- **Positive/Action Purple**: `#5B5FCF` (Replaces all Green/Success states).
- **Secondary Purple**: `#6D31C2` (Used for accents/Pro features).
- **Light Purple Background**: `#F7F2FA` (Used for banners, previews, and button hovers).
- **Emergency Red**: `#DC3545` (**OUTLINED ONLY**). Backgrounds must be white or transparent.

## 3. ICONOGRAPHY (FEATHER ICONS)
- **Source**: All icons must strictly follow [Feather Icons](https://feathericons.com/) patterns.
- **Styling**: 
  - Icons must be monochromatic (Stroke: `#31135D`, No Fill).
  - Default weight: `stroke-width: 2`.
  - Header icon size: `24px` (Desktop) / `20px` (Mobile).
  - Internal element icon size: `24px`.

## 4. COMPONENT SPECIFICATIONS

### A. MODAL HEADER
- **Height**: Reduced by 25% from legacy versions.
- **Mobile Typography**: Title size `18px`, Weight `400` (NOT BOLD).
- **Alignment**: Icon and Title must be aligned via `flex: center`.
- **Handle**: Mobile view must include a top grab handle (`36x4px`, `#E7E0EC`).

### B. BUTTON VARIANTS
- **Radius**: Always `100px` (Pill-shaped).
- **Primary**: Background `#31135D`, Text White.
- **Secondary**: Transparent, Border `#31135D`, Text `#31135D`.
- **Danger**: Transparent, Border `#DC3545`, Text `#DC3545`.
- **Ghost**: Transparent, Border `1px solid #E7E0EC`, Text `#49454F`.
- **Accent**: Background `#6D31C2`, Text White.

### C. INFO BANNERS (WARNING/INFO)
- **Style**: Simplified box, background `#F7F2FA`, border `1px solid #E7E0EC`.
- **Icon**: Solid purple circle (`24px`) with white exclamation mark icon.
- **Padding**: `12px` padding, `12px` gap.

### D. ITEM PREVIEWS
- **Icon Box**: `48x48px` white square with `8px` radius.
- **Typography**: Title `14px` Medium, Subtitle `12px` Regular.

### E. VERTICAL RHYTHM & SPACING
**STRICT RULE: Use consistent spacing scale (8px, 16px, 24px) for visual balance.**

- **Spacing Scale**: All vertical gaps must use `8px`, `16px`, or `24px` increments only.
- **Header/Footer Balance**: Header padding and footer padding must be equal (`16px` top/bottom).
- **Section Gaps**:
  - Between form sections: `8px` (tight rhythm).
  - First section top padding: `16px`.
  - Last section before info banner: `8px` bottom padding.
- **Info Banner Margins**:
  - Equal top and bottom margins (`16px` both) to prevent "floating" appearance.
  - When footer is present, remove bottom margin from info banner (footer border provides separation).
- **Footer Spacing**:
  - Desktop: `16px` padding (matches header).
  - Mobile: `12px` top, `20px` bottom (extra for safe area).

**Common Mistakes to Avoid:**
- ❌ Arbitrary gaps that don't follow the 8/16/24 scale.
- ❌ Unequal top/bottom padding on modal container.
- ❌ Large gap between info banner and footer button.
- ❌ Different padding values for header vs footer.

## 5. REPLICATION SCRIPT (CSS RECAP)
```css
/* Core structure to maintain fixed/scrollable logic */
.modal { display: flex; flex-direction: column; max-height: 92vh; }
.modal-header { flex-shrink: 0; }
.modal-body { overflow-y: auto; flex-grow: 1; -webkit-overflow-scrolling: touch; }
.modal-footer { flex-shrink: 0; }

/* Mobile Slide-up */
@media (max-width: 480px) {
    .modal-overlay { align-items: flex-end; padding: 0; }
    .modal { border-radius: 24px 24px 0 0; animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
}
```
