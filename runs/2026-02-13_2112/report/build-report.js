const fs = require('fs');
const p = 'C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-13_2112';

const L0 = fs.readFileSync(p + '/layer-0/competitor-journey.json', 'utf-8');
const L1 = fs.readFileSync(p + '/layer-1/disappointments.json', 'utf-8');
const L2 = fs.readFileSync(p + '/layer-2/crossref-insights.json', 'utf-8');
const L3 = fs.readFileSync(p + '/layer-3/opportunities.json', 'utf-8');
const L4 = fs.readFileSync(p + '/layer-4/ui-elements.json', 'utf-8');
const L5 = fs.readFileSync(p + '/layer-5/coherence-report.json', 'utf-8');

// Read the CSS template from the reference report
const css = fs.readFileSync('C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-13_2112/report/styles.css', 'utf-8');

const jsCode = fs.readFileSync('C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-13_2112/report/render.js', 'utf-8');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reverse Benchmark Report — Zillow × Innovator's Dilemma (Ch 5-7)</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
  <script id="data-layer-0" type="application/json">${L0}</script>
  <script id="data-layer-1" type="application/json">${L1}</script>
  <script id="data-layer-2" type="application/json">${L2}</script>
  <script id="data-layer-3" type="application/json">${L3}</script>
  <script id="data-layer-4" type="application/json">${L4}</script>
  <script id="data-layer-5" type="application/json">${L5}</script>
  <header class="report-header">
    <h1>Reverse Benchmark Report</h1>
    <div class="lens-label">Zillow &times; Innovator&rsquo;s Dilemma (Ch 5-7: Managing Disruptive Technological Change)</div>
    <div class="report-meta">
      <span>February 13, 2026</span>
      <span>Run: 2026-02-13_2112</span>
      <span class="badge badge-complete">COMPLETE</span>
    </div>
  </header>
  <div class="coherence-bar" id="coherence-bar">
    <span class="count" id="coherence-count"></span>
    <span id="coherence-summary"></span>
  </div>
  <nav class="tab-nav" id="tab-nav">
    <button class="active" data-tab="overview"><span class="layer-num">*</span> Overview</button>
    <button data-tab="layer-0"><span class="layer-num">0</span> Competitor Map</button>
    <button data-tab="layer-1"><span class="layer-num">1</span> Disappointments</button>
    <button data-tab="layer-2"><span class="layer-num">2</span> Transcript Crossref</button>
    <button data-tab="layer-3"><span class="layer-num">3</span> Opportunities</button>
    <button data-tab="layer-4"><span class="layer-num">4</span> UI Elements</button>
    <button data-tab="layer-5"><span class="layer-num">5</span> Coherence</button>
  </nav>
  <main class="main-content">
    <div class="tab-panel active" id="panel-overview"><div id="content-overview"></div></div>
    <div class="tab-panel" id="panel-layer-0"><div id="content-layer-0"></div></div>
    <div class="tab-panel" id="panel-layer-1"><div id="content-layer-1"></div></div>
    <div class="tab-panel" id="panel-layer-2"><div id="content-layer-2"></div></div>
    <div class="tab-panel" id="panel-layer-3"><div id="content-layer-3"></div></div>
    <div class="tab-panel" id="panel-layer-4"><div id="content-layer-4"></div></div>
    <div class="tab-panel" id="panel-layer-5"><div id="content-layer-5"></div></div>
  </main>
  <footer style="text-align:center;padding:32px;color:var(--text-light-gray);font-size:12px;font-family:'Inter',sans-serif;font-weight:500;">
    SplitLease Reverse Benchmark Pipeline v1.0
  </footer>
  <script>${jsCode}</script>
</body>
</html>`;

fs.writeFileSync(p + '/report/index.html', html, 'utf-8');
console.log('Report written. Size:', fs.statSync(p + '/report/index.html').size, 'bytes');
