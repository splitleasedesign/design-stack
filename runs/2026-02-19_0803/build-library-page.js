const fs = require('fs');
const path = require('path');

const RUN_DIR = __dirname;
const uiElements = JSON.parse(fs.readFileSync(path.join(RUN_DIR, 'layer-8', 'ui-elements.json'), 'utf8'));

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function extractPreviewHtml(htmlCss) {
  // Extract the body content from the full HTML for iframe preview
  return htmlCss;
}

const cards = uiElements.map((el, idx) => {
  const phases = (el.phase || []).map(p => `<span class="phase-tag">${p}</span>`).join('');
  const compoundsOn = (el.compounds_on || []).map(id => `<span class="compound-tag">${id}</span>`).join('');

  return `
    <div class="library-card" id="card-${el.id}">
      <div class="card-preview">
        <iframe srcdoc="${escapeHtml(el.html_css)}" sandbox="allow-scripts" scrolling="no" loading="lazy"></iframe>
        <div class="card-overlay">
          <button class="view-btn" onclick="openPreview('${el.id}')">View Full Size</button>
        </div>
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span class="card-id">${el.id}</span>
          <span class="card-priority ${el.priority}">${el.priority}</span>
        </div>
        <h3 class="card-title">${el.name}</h3>
        <p class="card-desc">${el.description.substring(0, 180)}${el.description.length > 180 ? '...' : ''}</p>
        <div class="card-phases">${phases}</div>
        <div class="card-section">
          <span class="section-label">Fills gap:</span>
          <span class="section-value">${el.fills_gap ? el.fills_gap.split(' -- ')[0].substring(0, 80) : 'N/A'}</span>
        </div>
        <div class="card-section">
          <span class="section-label">Compounds on:</span>
          <div class="compound-tags">${compoundsOn}</div>
        </div>
        <div class="card-section">
          <span class="section-label">Emotional intent:</span>
          <span class="section-value">${(el.emotional_intent || '').substring(0, 120)}${(el.emotional_intent || '').length > 120 ? '...' : ''}</span>
        </div>
      </div>
    </div>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UI Element Library — Run 2026-02-19_0803</title>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Outfit:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #f6f4f0;
      --bg-deep: #eae7e1;
      --surface: #ffffff;
      --surface-warm: #fdfcfa;
      --ink: #1a1714;
      --ink-soft: #4a4640;
      --ink-muted: #8a857e;
      --ink-ghost: #bdb8b0;
      --accent: #31135D;
      --accent-light: rgba(49,19,93,0.06);
      --accent-mid: rgb(109, 49, 194);
      --border: #e2dfd9;
      --border-strong: #ccc8c0;
      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 16px;
      --shadow-sm: 0 1px 3px rgba(26,23,20,0.06);
      --shadow-md: 0 2px 8px rgba(26,23,20,0.08);
      --shadow-lg: 0 8px 24px rgba(26,23,20,0.12);
      --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Outfit', sans-serif; color: var(--ink); background: var(--bg); line-height: 1.6; }

    .page-header {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 32px 40px;
    }
    .page-header h1 {
      font-family: 'Instrument Serif', serif;
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 4px;
    }
    .page-header .subtitle {
      font-size: 15px;
      color: var(--ink-soft);
      margin-bottom: 12px;
    }
    .header-meta {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      color: var(--ink-muted);
      font-size: 12px;
      font-family: 'IBM Plex Mono', monospace;
    }
    .header-meta .stat {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .header-meta .stat-value {
      font-weight: 600;
      color: var(--accent);
    }

    .grid-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 32px 40px;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 24px;
    }

    .library-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: box-shadow 300ms var(--ease-out), transform 300ms var(--ease-out);
    }
    .library-card:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-2px);
    }

    .card-preview {
      position: relative;
      height: 320px;
      overflow: hidden;
      background: #f9fafb;
      border-bottom: 1px solid var(--border);
    }
    .card-preview iframe {
      width: 200%;
      height: 200%;
      border: none;
      transform: scale(0.5);
      transform-origin: top left;
      pointer-events: none;
    }
    .card-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 200ms ease;
    }
    .card-overlay .view-btn {
      opacity: 0;
      transform: translateY(4px);
      transition: all 200ms var(--ease-out);
      padding: 10px 20px;
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 8px;
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    .library-card:hover .card-overlay {
      background: rgba(0,0,0,0.3);
    }
    .library-card:hover .view-btn {
      opacity: 1;
      transform: translateY(0);
    }
    .view-btn:hover {
      background: var(--accent-mid);
    }

    .card-info {
      padding: 20px 24px;
    }
    .card-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .card-id {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: var(--ink-muted);
    }
    .card-priority {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 9999px;
    }
    .card-priority.P0 { background: rgba(220,53,69,0.08); color: #b83a3a; }
    .card-priority.P1 { background: rgba(193,122,40,0.1); color: #c17a28; }
    .card-priority.P2 { background: var(--bg-deep); color: var(--ink-muted); }

    .card-title {
      font-family: 'Instrument Serif', serif;
      font-size: 19px;
      font-weight: 400;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .card-desc {
      font-size: 13px;
      color: var(--ink-soft);
      line-height: 1.5;
      margin-bottom: 12px;
    }

    .card-phases {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }
    .phase-tag {
      padding: 2px 8px;
      border-radius: var(--radius-sm);
      font-size: 10px;
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 500;
      background: var(--accent-light);
      color: var(--accent);
    }

    .card-section {
      margin-bottom: 8px;
    }
    .section-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--ink-muted);
      font-family: 'IBM Plex Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .section-value {
      font-size: 12px;
      color: var(--ink-soft);
      display: block;
      margin-top: 2px;
    }
    .compound-tags {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      margin-top: 4px;
    }
    .compound-tag {
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-family: 'IBM Plex Mono', monospace;
      background: rgba(109,49,194,0.06);
      color: var(--accent-mid);
      font-weight: 500;
    }

    /* Modal */
    .modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.7);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .modal-backdrop.open { display: flex; }
    .modal-content {
      background: #fff;
      border-radius: 16px;
      width: 90vw;
      max-width: 800px;
      height: 85vh;
      overflow: hidden;
      position: relative;
    }
    .modal-content iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    .modal-close {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0,0,0,0.6);
      color: #fff;
      border: none;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    @media (max-width: 768px) {
      .page-header, .grid-container { padding-left: 16px; padding-right: 16px; }
      .cards-grid { grid-template-columns: 1fr; }
    }
    @media print {
      .card-overlay { display: none; }
      .library-card { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <header class="page-header">
    <h1>UI Element Library</h1>
    <div class="subtitle">Run 2026-02-19_0803 — Theodore Matthews + Articulating Design Decisions (Guest Journey)</div>
    <div class="header-meta">
      <div class="stat"><span>Elements:</span> <span class="stat-value">${uiElements.length}</span></div>
      <div class="stat"><span>P0:</span> <span class="stat-value">${uiElements.filter(e => e.priority === 'P0').length}</span></div>
      <div class="stat"><span>P1:</span> <span class="stat-value">${uiElements.filter(e => e.priority === 'P1').length}</span></div>
      <div class="stat"><span>Gaps filled:</span> <span class="stat-value">${uiElements.filter(e => e.fills_gap).length}</span></div>
    </div>
  </header>

  <div class="grid-container">
    <div class="cards-grid">
      ${cards}
    </div>
  </div>

  <div class="modal-backdrop" id="previewModal">
    <div class="modal-content">
      <button class="modal-close" onclick="closePreview()">&times;</button>
      <iframe id="modalFrame" sandbox="allow-scripts"></iframe>
    </div>
  </div>

  <footer style="text-align:center;padding:32px;color:var(--ink-ghost);font-size:12px;font-family:'IBM Plex Mono',monospace;">
    SplitLease Design Stack v2.0 — Element Library
  </footer>

  <script>
    const elements = ${JSON.stringify(uiElements)};

    function openPreview(id) {
      const el = elements.find(e => e.id === id);
      if (!el) return;
      const modal = document.getElementById('previewModal');
      const frame = document.getElementById('modalFrame');
      frame.srcdoc = el.html_css;
      modal.classList.add('open');
    }

    function closePreview() {
      document.getElementById('previewModal').classList.remove('open');
      document.getElementById('modalFrame').srcdoc = '';
    }

    document.getElementById('previewModal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closePreview();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePreview();
    });
  </script>
</body>
</html>`;

const outDir = path.join(RUN_DIR, 'report');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'library-of-elements.html'), html, 'utf8');

console.log('Library page built successfully.');
console.log(`Output: ${path.join(outDir, 'library-of-elements.html')}`);
console.log(`Elements: ${uiElements.length}`);
