const fs = require('fs');
const path = require('path');

const jsonData = fs.readFileSync(
  path.join(__dirname, 'runs/2026-02-11_2118/layer-8/ui-elements.json'),
  'utf8'
);

// Build HTML using array join to avoid template literal escaping issues
const parts = [];

parts.push(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Element Marketplace — SplitLease Design Stack</title>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Outfit:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
/* ========================================
   RESET & BASE
   ======================================== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #f6f4f0;
  --bg-deep: #eae7e1;
  --surface: #ffffff;
  --surface-warm: #fdfcfa;
  --ink: #1a1714;
  --ink-soft: #4a4640;
  --ink-muted: #8a857e;
  --ink-ghost: #bdb8b0;
  --accent: #2d5a3d;
  --accent-light: #e8f0eb;
  --accent-bright: #3a7a52;
  --signal-warn: #c17a28;
  --signal-warn-bg: #fef3e2;
  --signal-danger: #b83a3a;
  --signal-danger-bg: #fde8e8;
  --signal-info: #2d5a8a;
  --signal-info-bg: #e8f0fa;
  --border: #e2dfd9;
  --border-strong: #ccc8c0;
  --shadow-sm: 0 1px 3px rgba(26,23,20,0.06);
  --shadow-md: 0 2px 8px rgba(26,23,20,0.08);
  --shadow-lg: 0 8px 30px rgba(26,23,20,0.10);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --font-serif: 'Instrument Serif', serif;
  --font-sans: 'Outfit', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--ink);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ========================================
   LAYOUT
   ======================================== */
.marketplace {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

/* ========================================
   HEADER
   ======================================== */
.market-header {
  padding: 48px 0 0;
  margin-bottom: 32px;
}

.market-header__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.market-header__label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 8px;
}

.market-header__title {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 400;
  color: var(--ink);
  line-height: 1.15;
  margin-bottom: 6px;
}

.market-header__subtitle {
  font-size: 16px;
  font-weight: 400;
  color: var(--ink-soft);
  max-width: 520px;
}

/* ========================================
   STATS BAR
   ======================================== */
.stats-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
}

.stat-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-soft);
  box-shadow: var(--shadow-sm);
}

.stat-chip__count {
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--ink);
  font-size: 14px;
}

.stat-chip--total {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.stat-chip--total .stat-chip__count { color: #fff; }
.stat-chip--high { border-color: var(--accent); }
.stat-chip--medium { border-color: var(--signal-warn); }
.stat-chip--low { border-color: var(--signal-info); }

/* ========================================
   TOOLBAR
   ======================================== */
.toolbar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
}

.toolbar__row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  min-width: 260px;
  height: 44px;
  padding: 0 16px 0 42px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--ink);
  transition: border-color 0.15s;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%238a857e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 14px center;
}

.search-input::placeholder { color: var(--ink-ghost); }
.search-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(45,90,61,0.08); }

.filter-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-right: 2px;
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  background: var(--surface);
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.15s var(--ease-out);
  white-space: nowrap;
  user-select: none;
}

.filter-pill:hover {
  border-color: var(--border-strong);
  background: var(--bg-deep);
}

.filter-pill.active {
  background: var(--accent-light);
  color: var(--accent);
  border-color: var(--accent);
  font-weight: 600;
}

/* View toggle */
.view-toggle {
  display: inline-flex;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.view-toggle__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 34px;
  background: var(--surface);
  border: none;
  cursor: pointer;
  color: var(--ink-muted);
  transition: all 0.15s;
}

.view-toggle__btn:first-child { border-right: 1px solid var(--border); }
.view-toggle__btn.active { background: var(--accent); color: #fff; }
.view-toggle__btn:hover:not(.active) { background: var(--bg-deep); }
.view-toggle__btn svg { width: 16px; height: 16px; }

.compare-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.15s;
}

.compare-toggle:hover { border-color: var(--border-strong); }
.compare-toggle.active { background: var(--signal-info-bg); color: var(--signal-info); border-color: var(--signal-info); }
.compare-toggle svg { width: 15px; height: 15px; }

.results-count {
  font-size: 13px;
  color: var(--ink-muted);
  font-weight: 500;
  margin-bottom: 16px;
}

.results-count span {
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--ink-soft);
}

/* ========================================
   COMPARE BAR (bottom sticky)
   ======================================== */
.compare-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  box-shadow: 0 -4px 20px rgba(26,23,20,0.08);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  z-index: 100;
  transform: translateY(100%);
  transition: transform 0.35s var(--ease-out);
}

.compare-bar.visible { transform: translateY(0); }

.compare-bar__items { display: flex; gap: 8px; align-items: center; }

.compare-bar__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: var(--accent-light);
  color: var(--accent);
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 600;
}

.compare-bar__chip-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(45,90,61,0.15);
  border: none;
  cursor: pointer;
  color: var(--accent);
  font-size: 14px;
  line-height: 1;
  padding: 0;
}

.compare-bar__chip-remove:hover { background: rgba(45,90,61,0.25); }

.compare-bar__btn {
  height: 38px;
  padding: 0 22px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.compare-bar__btn:hover { background: #245231; }
.compare-bar__btn:disabled { opacity: 0.5; cursor: default; }

.compare-bar__clear {
  height: 38px;
  padding: 0 14px;
  background: transparent;
  color: var(--ink-muted);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.compare-bar__clear:hover { background: var(--bg-deep); }

/* ========================================
   GRID VIEW
   ======================================== */
.elements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;
}

.element-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.25s var(--ease-out);
  cursor: default;
  position: relative;
}

.element-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.element-card.compare-selected {
  border-color: var(--signal-info);
  box-shadow: 0 0 0 2px rgba(45,90,138,0.15);
}

.element-card__top-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.element-card__name {
  font-family: var(--font-serif);
  font-size: 19px;
  color: var(--ink);
  line-height: 1.25;
  flex: 1;
}

.element-card__badges { display: flex; gap: 5px; flex-shrink: 0; flex-wrap: wrap; justify-content: flex-end; }

.badge {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
}

.badge--category { background: var(--bg-deep); color: var(--ink-soft); }
.badge--high { background: var(--accent-light); color: var(--accent); }
.badge--medium { background: var(--signal-warn-bg); color: var(--signal-warn); }
.badge--low { background: var(--signal-info-bg); color: var(--signal-info); }

.element-card__desc {
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.element-card__phases { display: flex; flex-wrap: wrap; gap: 4px; }

.phase-tag {
  font-size: 11px;
  font-weight: 500;
  color: var(--ink-muted);
  background: var(--bg);
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

.element-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.element-card__effort {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-muted);
}

.element-card__actions { display: flex; gap: 6px; }

.btn-view {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 14px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.1s;
}

.btn-view:hover { background: #245231; }
.btn-view:active { transform: translateY(1px); }

.btn-compare {
  display: none;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--signal-info-bg);
  color: var(--signal-info);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.1s;
}

.compare-mode .btn-compare { display: flex; }
.btn-compare:hover { border-color: var(--signal-info); }
.btn-compare.selected { background: var(--signal-info); color: #fff; }
.btn-compare svg { width: 16px; height: 16px; }

/* ========================================
   LIST VIEW
   ======================================== */
.elements-grid.list-view {
  grid-template-columns: 1fr;
  gap: 6px;
}

.list-view .element-card {
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;
  gap: 16px;
}

.list-view .element-card__top-row { flex: 0 0 220px; flex-direction: column; gap: 4px; }
.list-view .element-card__name { font-size: 15px; }
.list-view .element-card__desc { flex: 1; -webkit-line-clamp: 2; font-size: 13px; }
.list-view .element-card__phases { display: none; }
.list-view .element-card__footer { flex: 0 0 auto; border-top: none; padding-top: 0; flex-direction: column; gap: 6px; }

/* ========================================
   MODAL OVERLAY
   ======================================== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26,23,20,0.5);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 24px;
  overflow-y: auto;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s var(--ease-out);
}

.modal-overlay.open { opacity: 1; pointer-events: auto; }

.modal {
  background: var(--surface);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 800px;
  box-shadow: var(--shadow-lg);
  transform: translateY(20px);
  transition: transform 0.35s var(--ease-out);
  margin-bottom: 40px;
}

.modal-overlay.open .modal { transform: translateY(0); }

.modal__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 28px 32px 20px;
  border-bottom: 1px solid var(--border);
}

.modal__header-left { flex: 1; }

.modal__title {
  font-family: var(--font-serif);
  font-size: 28px;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: 8px;
}

.modal__meta { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }

.modal__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  cursor: pointer;
  color: var(--ink-muted);
  flex-shrink: 0;
  margin-left: 16px;
  transition: all 0.1s;
}

.modal__close:hover { background: var(--bg-deep); color: var(--ink); }
.modal__close svg { width: 18px; height: 18px; }

.modal__body { padding: 24px 32px 32px; }

.modal__section { margin-bottom: 28px; }
.modal__section:last-child { margin-bottom: 0; }

.modal__section-title {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.modal__section-title svg { width: 14px; height: 14px; color: var(--accent); }

.modal__desc {
  font-size: 15px;
  color: var(--ink-soft);
  line-height: 1.65;
  margin-bottom: 12px;
}

.modal__problem {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.6;
  background: var(--bg);
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--accent);
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.spec-item {
  background: var(--bg);
  padding: 12px 14px;
  border-radius: var(--radius-sm);
}

.spec-item__label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.spec-item__value { font-size: 13px; color: var(--ink-soft); line-height: 1.5; }

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
}

.state-item {
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}

.state-item__label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 4px;
  text-transform: capitalize;
}

.state-item__value { font-size: 13px; color: var(--ink-soft); line-height: 1.45; }

.copy-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.copy-example { padding: 12px 14px; border-radius: var(--radius-sm); }
.copy-example--do { background: var(--accent-light); border-left: 3px solid var(--accent); }
.copy-example--dont { background: var(--signal-danger-bg); border-left: 3px solid var(--signal-danger); }

.copy-example__title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.copy-example--do .copy-example__title { color: var(--accent); }
.copy-example--dont .copy-example__title { color: var(--signal-danger); }

.copy-example ul { list-style: none; padding: 0; }

.copy-example li {
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.5;
  padding: 2px 0 2px 14px;
  position: relative;
}

.copy-example li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.copy-example--do li::before { background: var(--accent); }
.copy-example--dont li::before { background: var(--signal-danger); }

.copy-tone { display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }

.copy-tone__item { padding: 8px 14px; background: var(--bg); border-radius: var(--radius-sm); }

.copy-tone__label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.copy-tone__value { font-size: 14px; color: var(--ink); font-weight: 500; }

.before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

.ba-block { padding: 14px 16px; border-radius: var(--radius-sm); }
.ba-block--before { background: var(--signal-danger-bg); border-left: 3px solid var(--signal-danger); }
.ba-block--after { background: var(--accent-light); border-left: 3px solid var(--accent); }

.ba-block__label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.ba-block--before .ba-block__label { color: var(--signal-danger); }
.ba-block--after .ba-block__label { color: var(--accent); }
.ba-block__text { font-size: 13px; color: var(--ink-soft); line-height: 1.55; }

.preview-container {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--bg);
}

.preview-container__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--bg-deep);
  border-bottom: 1px solid var(--border);
}

.preview-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border-strong); }
.preview-bar-label { font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted); margin-left: 8px; }
.preview-container iframe { width: 100%; min-height: 200px; border: none; display: block; background: var(--bg); }

.principles-list { display: flex; flex-wrap: wrap; gap: 6px; }

.principle-chip {
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-soft);
}

/* ========================================
   COMPARE MODAL
   ======================================== */
.compare-modal .modal { max-width: 1100px; }

.compare-grid { display: grid; gap: 1px; background: var(--border); border-radius: var(--radius-sm); overflow: hidden; }
.compare-grid--2 { grid-template-columns: 1fr 1fr; }
.compare-grid--3 { grid-template-columns: 1fr 1fr 1fr; }

.compare-col { background: var(--surface); padding: 20px; }

.compare-col__name { font-family: var(--font-serif); font-size: 18px; color: var(--ink); margin-bottom: 8px; }
.compare-col__badges { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 16px; }
.compare-section { margin-bottom: 14px; }
.compare-section__title { font-family: var(--font-mono); font-size: 10px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 6px; }
.compare-section__text { font-size: 13px; color: var(--ink-soft); line-height: 1.5; }

.compare-preview iframe {
  width: 100%;
  min-height: 150px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg);
}

/* ========================================
   EMPTY STATE
   ======================================== */
.empty-state {
  text-align: center;
  padding: 60px 24px;
  grid-column: 1 / -1;
}

.empty-state__icon { width: 48px; height: 48px; margin: 0 auto 16px; color: var(--ink-ghost); }
.empty-state__title { font-family: var(--font-serif); font-size: 20px; color: var(--ink-soft); margin-bottom: 6px; }
.empty-state__text { font-size: 14px; color: var(--ink-muted); }

.empty-state__btn {
  margin-top: 16px;
  height: 36px;
  padding: 0 20px;
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.empty-state__btn:hover { background: var(--accent-light); }

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 800px) {
  .market-header__title { font-size: 28px; }
  .elements-grid { grid-template-columns: 1fr; }
  .list-view .element-card { flex-direction: column; }
  .list-view .element-card__top-row { flex: auto; }
  .list-view .element-card__phases { display: flex; }
  .modal { margin: 0 8px 40px; }
  .modal__header { padding: 20px 20px 16px; }
  .modal__body { padding: 20px; }
  .modal__title { font-size: 22px; }
  .spec-grid { grid-template-columns: 1fr; }
  .before-after { grid-template-columns: 1fr; }
  .copy-block { grid-template-columns: 1fr; }
  .compare-grid--2, .compare-grid--3 { grid-template-columns: 1fr; }
  .modal-overlay { padding: 20px 8px; }
}

@media (max-width: 500px) {
  .marketplace { padding: 0 16px 60px; }
  .market-header { padding-top: 32px; }
  .toolbar__row { gap: 6px; }
  .search-input { min-width: 100%; }
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--ink-ghost); }
</style>
</head>
<body>

<div class="marketplace" id="app">
  <header class="market-header">
    <div class="market-header__top">
      <div>
        <div class="market-header__label">SplitLease Design Stack &middot; Layer 8</div>
        <h1 class="market-header__title">Element Marketplace</h1>
        <p class="market-header__subtitle">Browse, search, and compare the 18 UI elements that define the SplitLease host experience.</p>
      </div>
    </div>
    <div class="stats-bar" id="statsBar"></div>
  </header>

  <div class="toolbar">
    <div class="toolbar__row">
      <input type="text" class="search-input" id="searchInput" placeholder="Search elements by name, description, or principle ID...">
      <div class="view-toggle">
        <button class="view-toggle__btn active" id="gridViewBtn" title="Grid view" data-action="view-grid">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
        </button>
        <button class="view-toggle__btn" id="listViewBtn" title="List view" data-action="view-list">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </button>
      </div>
      <button class="compare-toggle" id="compareToggle" data-action="toggle-compare">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="8" height="18" rx="1"></rect><rect x="14" y="3" width="8" height="18" rx="1"></rect></svg>
        Compare
      </button>
    </div>
    <div class="toolbar__row">
      <span class="filter-label">Category</span>
      <div class="filter-pills" id="categoryFilters"></div>
    </div>
    <div class="toolbar__row">
      <span class="filter-label">Phase</span>
      <div class="filter-pills" id="phaseFilters"></div>
    </div>
    <div class="toolbar__row">
      <span class="filter-label">Priority</span>
      <div class="filter-pills" id="priorityFilters"></div>
    </div>
  </div>

  <div class="results-count" id="resultsCount"></div>
  <div class="elements-grid" id="elementsGrid"></div>
</div>

<div class="compare-bar" id="compareBar">
  <div class="compare-bar__items" id="compareItems"></div>
  <button class="compare-bar__btn" id="compareBtn" data-action="open-compare" disabled>Compare</button>
  <button class="compare-bar__clear" data-action="clear-compare">Clear</button>
</div>

<div class="modal-overlay" id="modalOverlay">
  <div class="modal" id="modalContent"></div>
</div>

<div class="modal-overlay compare-modal" id="compareOverlay">
  <div class="modal" id="compareContent"></div>
</div>

<script id="elements-data" type="application/json">
`);

// Inject JSON data
parts.push(jsonData);

// Now the JavaScript - use a separate string to avoid template literal issues with quotes
parts.push(`
</script>

<script>
(function() {
  "use strict";

  var rawData = JSON.parse(document.getElementById("elements-data").textContent);
  var elements = rawData.elements;

  var state = {
    search: "",
    categories: {},
    phases: {},
    priorities: {},
    view: "grid",
    compareMode: false,
    compareItems: []
  };

  var ALL_CATEGORIES = [];
  var catMap = {};
  elements.forEach(function(e) { if (!catMap[e.category]) { catMap[e.category] = true; ALL_CATEGORIES.push(e.category); } });
  ALL_CATEGORIES.sort();

  var ALL_PHASES = [];
  var phMap = {};
  elements.forEach(function(e) { e.journey_phases.forEach(function(p) { if (!phMap[p]) { phMap[p] = true; ALL_PHASES.push(p); } }); });
  ALL_PHASES.sort();

  var ALL_PRIORITIES = ["high", "medium", "low"];

  var PHASE_LABELS = {
    discovery: "Discovery", evaluation: "Evaluation", onboarding: "Onboarding",
    listing_creation: "Listing Creation", pricing: "Pricing", proposal_mgmt: "Proposal Mgmt",
    active_lease: "Active Lease", retention: "Retention"
  };

  var CATEGORY_LABELS = {
    badge: "Badge", card: "Card", form: "Form", display: "Display",
    notification: "Notification", section: "Section", button: "Button", input: "Input"
  };

  function escapeHtml(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function hasActive(obj) {
    for (var k in obj) { if (obj[k]) return true; }
    return false;
  }

  // ============ STATS ============
  function renderStats() {
    var bar = document.getElementById("statsBar");
    var catCounts = {};
    var priCounts = {};
    elements.forEach(function(e) {
      catCounts[e.category] = (catCounts[e.category] || 0) + 1;
      priCounts[e.priority] = (priCounts[e.priority] || 0) + 1;
    });
    var h = '<div class="stat-chip stat-chip--total"><span class="stat-chip__count">' + elements.length + '</span> elements</div>';
    ALL_CATEGORIES.forEach(function(cat) {
      h += '<div class="stat-chip"><span class="stat-chip__count">' + (catCounts[cat] || 0) + '</span> ' + (CATEGORY_LABELS[cat] || cat) + '</div>';
    });
    h += '<div class="stat-chip stat-chip--high"><span class="stat-chip__count">' + (priCounts.high || 0) + '</span> High</div>';
    h += '<div class="stat-chip stat-chip--medium"><span class="stat-chip__count">' + (priCounts.medium || 0) + '</span> Medium</div>';
    h += '<div class="stat-chip stat-chip--low"><span class="stat-chip__count">' + (priCounts.low || 0) + '</span> Low</div>';
    bar.innerHTML = h;
  }

  // ============ FILTERS ============
  function renderFilters() {
    var catC = document.getElementById("categoryFilters");
    catC.innerHTML = ALL_CATEGORIES.map(function(c) {
      return '<button class="filter-pill" data-filter-type="category" data-filter-value="' + c + '">' + (CATEGORY_LABELS[c] || c) + '</button>';
    }).join("");

    var phC = document.getElementById("phaseFilters");
    phC.innerHTML = ALL_PHASES.map(function(p) {
      return '<button class="filter-pill" data-filter-type="phase" data-filter-value="' + p + '">' + (PHASE_LABELS[p] || p) + '</button>';
    }).join("");

    var prC = document.getElementById("priorityFilters");
    prC.innerHTML = ALL_PRIORITIES.map(function(p) {
      return '<button class="filter-pill" data-filter-type="priority" data-filter-value="' + p + '">' + p.charAt(0).toUpperCase() + p.slice(1) + '</button>';
    }).join("");
  }

  function toggleFilter(type, value) {
    var stateMap = { category: "categories", phase: "phases", priority: "priorities" };
    var s = state[stateMap[type]];
    s[value] = !s[value];
    document.querySelectorAll('[data-filter-type="' + type + '"]').forEach(function(btn) {
      btn.classList.toggle("active", !!s[btn.getAttribute("data-filter-value")]);
    });
    renderElements();
  }

  // ============ FILTERING ============
  function getFiltered() {
    return elements.filter(function(e) {
      if (state.search) {
        var searchable = (e.name + " " + e.description + " " + e.id + " " + (e.implements_principles || []).join(" ")).toLowerCase();
        if (searchable.indexOf(state.search) === -1) return false;
      }
      if (hasActive(state.categories) && !state.categories[e.category]) return false;
      if (hasActive(state.phases)) {
        var match = false;
        e.journey_phases.forEach(function(p) { if (state.phases[p]) match = true; });
        if (!match) return false;
      }
      if (hasActive(state.priorities) && !state.priorities[e.priority]) return false;
      return true;
    });
  }

  // ============ RENDER ELEMENTS ============
  function renderElements() {
    var grid = document.getElementById("elementsGrid");
    var filtered = getFiltered();

    document.getElementById("resultsCount").innerHTML = 'Showing <span>' + filtered.length + '</span> of <span>' + elements.length + '</span> elements';

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="empty-state">' +
        '<svg class="empty-state__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
        '<div class="empty-state__title">No elements match your filters</div>' +
        '<div class="empty-state__text">Try adjusting your search or filter criteria.</div>' +
        '<button class="empty-state__btn" data-action="clear-filters">Clear all filters</button>' +
        '</div>';
      return;
    }

    grid.innerHTML = filtered.map(function(e) { return renderCard(e); }).join("");

    if (state.compareMode) {
      document.getElementById("app").classList.add("compare-mode");
      state.compareItems.forEach(function(id) {
        var card = document.querySelector('[data-elem-id="' + id + '"]');
        if (card) card.classList.add("compare-selected");
        var btn = document.querySelector('[data-compare-id="' + id + '"]');
        if (btn) btn.classList.add("selected");
      });
    } else {
      document.getElementById("app").classList.remove("compare-mode");
    }
  }

  function renderCard(e) {
    var isComp = state.compareItems.indexOf(e.id) > -1;
    return '<div class="element-card' + (isComp ? ' compare-selected' : '') + '" data-elem-id="' + e.id + '">' +
      '<div class="element-card__top-row">' +
        '<div class="element-card__name">' + escapeHtml(e.name) + '</div>' +
        '<div class="element-card__badges">' +
          '<span class="badge badge--category">' + escapeHtml(e.category) + '</span>' +
          '<span class="badge badge--' + e.priority + '">' + e.priority + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="element-card__desc">' + escapeHtml(e.description) + '</div>' +
      '<div class="element-card__phases">' +
        e.journey_phases.map(function(p) { return '<span class="phase-tag">' + (PHASE_LABELS[p] || p) + '</span>'; }).join("") +
      '</div>' +
      '<div class="element-card__footer">' +
        '<span class="element-card__effort">Effort: ' + e.effort + '</span>' +
        '<div class="element-card__actions">' +
          '<button class="btn-view" data-action="open-detail" data-detail-id="' + e.id + '">View Details</button>' +
          '<button class="btn-compare' + (isComp ? ' selected' : '') + '" data-compare-id="' + e.id + '" data-action="toggle-compare-item" title="Add to compare">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // ============ VIEW TOGGLE ============
  function setView(v) {
    state.view = v;
    var grid = document.getElementById("elementsGrid");
    if (v === "list") { grid.classList.add("list-view"); } else { grid.classList.remove("list-view"); }
    document.getElementById("gridViewBtn").classList.toggle("active", v === "grid");
    document.getElementById("listViewBtn").classList.toggle("active", v === "list");
  }

  // ============ COMPARE ============
  function toggleCompareMode() {
    state.compareMode = !state.compareMode;
    document.getElementById("compareToggle").classList.toggle("active", state.compareMode);
    if (!state.compareMode) {
      state.compareItems = [];
      updateCompareBar();
    }
    renderElements();
  }

  function toggleCompareItem(id) {
    var idx = state.compareItems.indexOf(id);
    if (idx > -1) {
      state.compareItems.splice(idx, 1);
    } else if (state.compareItems.length < 3) {
      state.compareItems.push(id);
    }
    updateCompareBar();
    renderElements();
  }

  function updateCompareBar() {
    var bar = document.getElementById("compareBar");
    var items = document.getElementById("compareItems");
    var btn = document.getElementById("compareBtn");

    if (state.compareItems.length > 0 && state.compareMode) {
      bar.classList.add("visible");
      items.innerHTML = state.compareItems.map(function(id) {
        var el = elements.find(function(e) { return e.id === id; });
        return '<span class="compare-bar__chip">' + escapeHtml(el.name) +
          '<button class="compare-bar__chip-remove" data-action="remove-compare" data-remove-id="' + id + '">&times;</button></span>';
      }).join("");
      btn.disabled = state.compareItems.length < 2;
    } else {
      bar.classList.remove("visible");
    }
  }

  function clearCompare() {
    state.compareItems = [];
    updateCompareBar();
    renderElements();
  }

  // ============ DETAIL MODAL ============
  function openDetail(id) {
    var e = elements.find(function(el) { return el.id === id; });
    if (!e) return;

    var overlay = document.getElementById("modalOverlay");
    var content = document.getElementById("modalContent");

    var vs = e.visual_spec || {};
    var is_ = e.interaction_spec || {};
    var cs = e.copy_spec || {};
    var ba = e.before_after || {};

    var h = '<div class="modal__header">' +
      '<div class="modal__header-left">' +
        '<div class="modal__title">' + escapeHtml(e.name) + '</div>' +
        '<div class="modal__meta">' +
          '<span class="badge badge--category">' + e.category + '</span>' +
          '<span class="badge badge--' + e.priority + '">' + e.priority + ' priority</span>' +
          '<span class="badge" style="background:var(--bg);color:var(--ink-muted);">' + e.effort + ' effort</span>' +
          '<span class="badge" style="background:var(--bg);color:var(--ink-muted);">' + e.id + '</span>' +
        '</div>' +
      '</div>' +
      '<button class="modal__close" data-action="close-detail">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
      '</button>' +
    '</div><div class="modal__body">';

    // Description
    h += '<div class="modal__section">' +
      '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> Description</div>' +
      '<div class="modal__desc">' + escapeHtml(e.description) + '</div>';
    if (e.problem_it_solves) {
      h += '<div class="modal__problem"><strong>Problem it solves:</strong> ' + escapeHtml(e.problem_it_solves) + '</div>';
    }
    h += '</div>';

    // Journey phases + pages
    h += '<div class="modal__section">' +
      '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> Journey Phases & Pages</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">' +
      e.journey_phases.map(function(p) { return '<span class="phase-tag">' + (PHASE_LABELS[p] || p) + '</span>'; }).join("") +
      '</div>';
    if (e.pages) {
      h += '<div style="font-size:13px;color:var(--ink-muted);">Pages: ' + e.pages.map(function(p) { return escapeHtml(p); }).join(", ") + '</div>';
    }
    h += '</div>';

    // Visual spec
    if (vs && Object.keys(vs).length > 0) {
      h += '<div class="modal__section">' +
        '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> Visual Spec</div>' +
        '<div class="spec-grid">';
      Object.keys(vs).forEach(function(k) {
        h += '<div class="spec-item"><div class="spec-item__label">' + escapeHtml(k) + '</div><div class="spec-item__value">' + escapeHtml(String(vs[k])) + '</div></div>';
      });
      h += '</div></div>';
    }

    // Interaction spec
    if (is_ && Object.keys(is_).length > 0) {
      h += '<div class="modal__section">' +
        '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"></path></svg> Interaction States</div>' +
        '<div class="states-grid">';
      Object.keys(is_).forEach(function(k) {
        h += '<div class="state-item"><div class="state-item__label">' + escapeHtml(k.replace(/_/g, " ")) + '</div><div class="state-item__value">' + escapeHtml(String(is_[k])) + '</div></div>';
      });
      h += '</div></div>';
    }

    // Copy spec
    if (cs && Object.keys(cs).length > 0) {
      h += '<div class="modal__section">' +
        '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Copy Spec</div>';
      if (cs.tone) {
        h += '<div style="margin-bottom:12px;font-size:14px;color:var(--ink-soft);"><strong>Tone:</strong> ' + escapeHtml(cs.tone) + '</div>';
      }
      h += '<div class="copy-tone">';
      if (cs.primary_text) {
        h += '<div class="copy-tone__item"><div class="copy-tone__label">Primary</div><div class="copy-tone__value">' + escapeHtml(cs.primary_text) + '</div></div>';
      }
      if (cs.secondary_text) {
        h += '<div class="copy-tone__item"><div class="copy-tone__label">Secondary</div><div class="copy-tone__value">' + escapeHtml(cs.secondary_text) + '</div></div>';
      }
      h += '</div><div class="copy-block">';
      if (cs.do && cs.do.length > 0) {
        h += '<div class="copy-example copy-example--do"><div class="copy-example__title">Do</div><ul>' +
          cs.do.map(function(d) { return '<li>' + escapeHtml(d) + '</li>'; }).join("") + '</ul></div>';
      }
      if (cs.dont && cs.dont.length > 0) {
        h += '<div class="copy-example copy-example--dont"><div class="copy-example__title">Don\\x27t</div><ul>' +
          cs.dont.map(function(d) { return '<li>' + escapeHtml(d) + '</li>'; }).join("") + '</ul></div>';
      }
      h += '</div></div>';
    }

    // Live preview
    if (e.html_css) {
      h += '<div class="modal__section">' +
        '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> Live Preview</div>' +
        '<div class="preview-container">' +
          '<div class="preview-container__bar"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-bar-label">' + escapeHtml(e.name) + '</span></div>' +
          '<iframe id="preview-frame-' + e.id + '" sandbox="allow-scripts allow-same-origin" style="width:100%;min-height:200px;border:none;background:#f6f4f0;"></iframe>' +
        '</div></div>';
    }

    // Before / After
    if (ba.before || ba.after) {
      h += '<div class="modal__section">' +
        '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg> Before & After</div>' +
        '<div class="before-after">';
      if (ba.before) h += '<div class="ba-block ba-block--before"><div class="ba-block__label">Before</div><div class="ba-block__text">' + escapeHtml(ba.before) + '</div></div>';
      if (ba.after) h += '<div class="ba-block ba-block--after"><div class="ba-block__label">After</div><div class="ba-block__text">' + escapeHtml(ba.after) + '</div></div>';
      h += '</div></div>';
    }

    // Principles
    if (e.implements_principles && e.implements_principles.length > 0) {
      h += '<div class="modal__section">' +
        '<div class="modal__section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Implements Principles</div>' +
        '<div class="principles-list">' +
        e.implements_principles.map(function(p) { return '<span class="principle-chip">' + escapeHtml(p) + '</span>'; }).join("") +
        '</div></div>';
    }

    h += '</div>';

    content.innerHTML = h;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";

    // Inject preview
    if (e.html_css) {
      setTimeout(function() {
        var iframe = document.getElementById("preview-frame-" + e.id);
        if (iframe) {
          try {
            var doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();
            doc.write("<!DOCTYPE html><html><head><meta charset=\\"UTF-8\\"><style>body{margin:16px;background:#f6f4f0;font-family:sans-serif;}</style></head><body>" + e.html_css + "</body></html>");
            doc.close();
            setTimeout(function() {
              try { iframe.style.height = Math.max(200, doc.body.scrollHeight + 32) + "px"; } catch(ex){}
            }, 800);
          } catch(ex) {
            iframe.srcdoc = "<!DOCTYPE html><html><head><meta charset=\\"UTF-8\\"><style>body{margin:16px;background:#f6f4f0;font-family:sans-serif;}</style></head><body>" + e.html_css + "</body></html>";
          }
        }
      }, 150);
    }
  }

  function closeDetail() {
    document.getElementById("modalOverlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  // ============ COMPARE MODAL ============
  function openCompare() {
    if (state.compareItems.length < 2) return;

    var overlay = document.getElementById("compareOverlay");
    var content = document.getElementById("compareContent");
    var items = state.compareItems.map(function(id) { return elements.find(function(e) { return e.id === id; }); }).filter(Boolean);
    var colClass = "compare-grid--" + items.length;

    var h = '<div class="modal__header">' +
      '<div class="modal__header-left">' +
        '<div class="modal__title">Compare Elements</div>' +
        '<div class="modal__meta"><span style="font-size:14px;color:var(--ink-soft);">Comparing ' + items.length + ' elements side by side</span></div>' +
      '</div>' +
      '<button class="modal__close" data-action="close-compare">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
      '</button>' +
    '</div>' +
    '<div class="modal__body" style="padding:0;">' +
      '<div class="compare-grid ' + colClass + '">' +
      items.map(function(e) { return renderCompareCol(e); }).join("") +
      '</div></div>';

    content.innerHTML = h;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";

    // Inject previews
    setTimeout(function() {
      items.forEach(function(e) {
        if (e.html_css) {
          var iframe = document.getElementById("compare-preview-" + e.id);
          if (iframe) {
            try {
              var doc = iframe.contentDocument || iframe.contentWindow.document;
              doc.open();
              doc.write("<!DOCTYPE html><html><head><meta charset=\\"UTF-8\\"><style>body{margin:12px;background:#f6f4f0;font-family:sans-serif;}</style></head><body>" + e.html_css + "</body></html>");
              doc.close();
              setTimeout(function() {
                try { iframe.style.height = Math.max(150, doc.body.scrollHeight + 24) + "px"; } catch(ex){}
              }, 800);
            } catch(ex) {
              iframe.srcdoc = "<!DOCTYPE html><html><head><meta charset=\\"UTF-8\\"><style>body{margin:12px;background:#f6f4f0;font-family:sans-serif;}</style></head><body>" + e.html_css + "</body></html>";
            }
          }
        }
      });
    }, 150);
  }

  function renderCompareCol(e) {
    var vs = e.visual_spec || {};
    var cs = e.copy_spec || {};
    var h = '<div class="compare-col">' +
      '<div class="compare-col__name">' + escapeHtml(e.name) + '</div>' +
      '<div class="compare-col__badges">' +
        '<span class="badge badge--category">' + e.category + '</span>' +
        '<span class="badge badge--' + e.priority + '">' + e.priority + '</span>' +
        '<span class="badge" style="background:var(--bg);color:var(--ink-muted);">' + e.effort + '</span>' +
      '</div>';

    h += '<div class="compare-section"><div class="compare-section__title">Description</div>' +
      '<div class="compare-section__text">' + escapeHtml(e.description.length > 200 ? e.description.substring(0, 200) + "..." : e.description) + '</div></div>';

    h += '<div class="compare-section"><div class="compare-section__title">Phases</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:4px;">' +
      e.journey_phases.map(function(p) { return '<span class="phase-tag">' + (PHASE_LABELS[p] || p) + '</span>'; }).join("") +
      '</div></div>';

    if (vs.typography) {
      h += '<div class="compare-section"><div class="compare-section__title">Typography</div>' +
        '<div class="compare-section__text">' + escapeHtml(String(vs.typography)) + '</div></div>';
    }
    if (vs.colors) {
      h += '<div class="compare-section"><div class="compare-section__title">Colors</div>' +
        '<div class="compare-section__text">' + escapeHtml(String(vs.colors)) + '</div></div>';
    }
    if (cs.tone) {
      h += '<div class="compare-section"><div class="compare-section__title">Tone</div>' +
        '<div class="compare-section__text">' + escapeHtml(cs.tone) + '</div></div>';
    }

    if (e.implements_principles) {
      h += '<div class="compare-section"><div class="compare-section__title">Principles</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:4px;">' +
        e.implements_principles.map(function(p) { return '<span class="principle-chip" style="font-size:11px;height:22px;">' + p + '</span>'; }).join("") +
        '</div></div>';
    }

    if (e.html_css) {
      h += '<div class="compare-section"><div class="compare-section__title">Preview</div>' +
        '<div class="compare-preview"><iframe id="compare-preview-' + e.id + '" sandbox="allow-scripts allow-same-origin" style="width:100%;min-height:150px;border:1px solid var(--border);border-radius:6px;background:#f6f4f0;"></iframe></div></div>';
    }

    h += '</div>';
    return h;
  }

  function closeCompare() {
    document.getElementById("compareOverlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  // ============ CLEAR ALL ============
  function clearAllFilters() {
    state.search = "";
    state.categories = {};
    state.phases = {};
    state.priorities = {};
    document.getElementById("searchInput").value = "";
    document.querySelectorAll(".filter-pill").forEach(function(b) { b.classList.remove("active"); });
    renderElements();
  }

  // ============ EVENT DELEGATION ============
  document.addEventListener("click", function(ev) {
    var target = ev.target.closest("[data-action]");
    if (!target) {
      // Check overlay clicks
      if (ev.target === document.getElementById("modalOverlay")) closeDetail();
      if (ev.target === document.getElementById("compareOverlay")) closeCompare();
      // Check filter pill clicks
      var pill = ev.target.closest("[data-filter-type]");
      if (pill) {
        toggleFilter(pill.getAttribute("data-filter-type"), pill.getAttribute("data-filter-value"));
      }
      return;
    }

    var action = target.getAttribute("data-action");

    switch(action) {
      case "view-grid": setView("grid"); break;
      case "view-list": setView("list"); break;
      case "toggle-compare": toggleCompareMode(); break;
      case "open-detail": openDetail(target.getAttribute("data-detail-id")); break;
      case "toggle-compare-item":
        ev.stopPropagation();
        toggleCompareItem(target.getAttribute("data-compare-id"));
        break;
      case "open-compare": openCompare(); break;
      case "clear-compare": clearCompare(); break;
      case "close-detail": closeDetail(); break;
      case "close-compare": closeCompare(); break;
      case "clear-filters": clearAllFilters(); break;
      case "remove-compare":
        toggleCompareItem(target.getAttribute("data-remove-id"));
        break;
    }
  });

  document.getElementById("searchInput").addEventListener("input", function(ev) {
    state.search = ev.target.value.toLowerCase().trim();
    renderElements();
  });

  document.addEventListener("keydown", function(ev) {
    if (ev.key === "Escape") { closeDetail(); closeCompare(); }
  });

  // ============ BOOT ============
  renderStats();
  renderFilters();
  renderElements();

})();
</script>

</body>
</html>`);

const html = parts.join('');

const reportPath = path.join(__dirname, 'runs/2026-02-11_2118/report/marketplace.html');
const libraryPath = path.join(__dirname, 'library/marketplace.html');

fs.writeFileSync(reportPath, html, 'utf8');
fs.writeFileSync(libraryPath, html, 'utf8');

console.log('Written to:', reportPath);
console.log('Written to:', libraryPath);
console.log('Size:', (html.length / 1024).toFixed(1) + ' KB');
