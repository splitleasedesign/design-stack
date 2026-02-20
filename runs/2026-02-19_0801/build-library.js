const fs = require('fs');
const path = require('path');

const runDir = path.join(__dirname);
const data = JSON.parse(fs.readFileSync(path.join(runDir, 'layer-8/ui-elements.json'), 'utf8'));
const elements = data.elements;

function escapeAttr(str) {
  return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const categories = [...new Set(elements.map(e => e.category))];
const phases = [...new Set(elements.map(e => e.phase))];

let cards = '';
elements.forEach((el) => {
  const htmlSnippet = el.html_css || '';
  cards += `
  <div class="lib-card" data-category="${el.category}" data-phase="${el.phase}" data-priority="${el.priority}" data-name="${el.name.toLowerCase()}">
    <div class="lib-card__preview">
      <iframe srcdoc="${escapeAttr(htmlSnippet)}" sandbox="allow-same-origin" scrolling="no" loading="lazy"></iframe>
    </div>
    <div class="lib-card__info">
      <div class="lib-card__badges">
        <span class="badge badge--category">${el.category}</span>
        <span class="badge badge--phase">${el.phase.replace(/_/g, ' ')}</span>
        <span class="badge badge--priority badge--${el.priority}">${el.priority}</span>
      </div>
      <h3 class="lib-card__title">${el.name}</h3>
      <p class="lib-card__id">${el.id}</p>
      <p class="lib-card__desc">${el.description}</p>
      <div class="lib-card__principles">
        <span class="label">Implements:</span> ${el.implements_principles.join(', ')}
      </div>
      <details class="lib-card__details">
        <summary>Behavioral Notes &amp; Emotional Intent</summary>
        <p><strong>Behavior:</strong> ${el.behavioral_notes}</p>
        <p><strong>Emotion:</strong> ${el.emotional_intent}</p>
        <p><strong>Test:</strong> ${el.test_criteria}</p>
      </details>
    </div>
  </div>`;
});

const catOptions = categories.map(c => `<option value="${c}">${c}</option>`).join('');
const phaseOptions = phases.map(p => `<option value="${p}">${p.replace(/_/g, ' ')}</option>`).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Library of Elements - Run 2026-02-19_0801</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@500;700&display=swap" rel="stylesheet">
<style>
:root {
  --primary: #31135D;
  --secondary: rgb(109,49,194);
  --accent: rgb(140,104,238);
  --bg: #f9fafb;
  --surface: #ffffff;
  --text: #1a1a1a;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  --border: #e5e7eb;
  --radius: 12px;
  --shadow: 0 2px 8px rgba(0,0,0,0.06);
}
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Inter',sans-serif; background:var(--bg); color:var(--text); }
.header { background:var(--primary); color:#fff; padding:32px 40px; }
.header h1 { font-family:'DM Sans',sans-serif; font-size:28px; font-weight:700; margin-bottom:4px; }
.header p { font-size:14px; color:rgba(255,255,255,0.7); }
.controls { padding:16px 40px; background:var(--surface); border-bottom:1px solid var(--border); display:flex; gap:12px; align-items:center; flex-wrap:wrap; position:sticky; top:0; z-index:10; }
.controls input, .controls select { height:40px; padding:0 12px; border:1px solid var(--border); border-radius:8px; font-family:'Inter',sans-serif; font-size:13px; }
.controls input { flex:1; min-width:200px; }
.controls select { min-width:140px; }
.grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(440px,1fr)); gap:24px; padding:24px 40px; }
.lib-card { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow); transition:box-shadow 0.2s ease; }
.lib-card:hover { box-shadow:0 4px 16px rgba(49,19,93,0.12); }
.lib-card__preview { height:320px; overflow:hidden; border-bottom:1px solid var(--border); background:#f3f4f6; }
.lib-card__preview iframe { width:118%; height:118%; border:none; transform:scale(0.85); transform-origin:top left; pointer-events:none; }
.lib-card__info { padding:20px; }
.lib-card__badges { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px; }
.badge { padding:3px 10px; border-radius:100px; font-size:11px; font-weight:600; }
.badge--category { background:rgba(109,49,194,0.1); color:var(--secondary); }
.badge--phase { background:#f3f4f6; color:var(--text-secondary); }
.badge--priority { font-weight:700; }
.badge--P0 { background:rgba(220,53,69,0.1); color:#DC3545; }
.badge--P1 { background:rgba(193,122,40,0.1); color:#C4841D; }
.badge--P2 { background:#f3f4f6; color:var(--text-muted); }
.lib-card__title { font-size:18px; font-weight:700; color:var(--primary); margin-bottom:4px; }
.lib-card__id { font-size:11px; color:var(--text-muted); font-family:monospace; margin-bottom:10px; }
.lib-card__desc { font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:12px; }
.lib-card__principles { font-size:12px; color:var(--text-muted); margin-bottom:12px; }
.lib-card__principles .label { font-weight:600; color:var(--text-secondary); }
.lib-card__details { font-size:13px; color:var(--text-secondary); }
.lib-card__details summary { cursor:pointer; font-weight:600; color:var(--secondary); padding:8px 0; }
.lib-card__details p { margin:8px 0; line-height:1.6; }
.stats { padding:16px 40px; display:flex; gap:16px; flex-wrap:wrap; }
.stat { padding:12px 20px; background:var(--surface); border:1px solid var(--border); border-radius:8px; text-align:center; }
.stat__value { font-size:24px; font-weight:700; color:var(--primary); }
.stat__label { font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; }
.hidden { display:none !important; }
@media(max-width:600px) { .grid { grid-template-columns:1fr; padding:16px; } .header,.controls,.stats { padding-left:16px; padding-right:16px; } }
</style>
</head>
<body>
<div class="header">
  <h1>Library of Elements</h1>
  <p>Run 2026-02-19_0801 | Guest Journey | William Romano + Refactoring UI | ${elements.length} UI Elements</p>
</div>
<div class="stats">
  <div class="stat"><div class="stat__value">${elements.length}</div><div class="stat__label">Elements</div></div>
  <div class="stat"><div class="stat__value">${elements.filter(e=>e.priority==='P0').length}</div><div class="stat__label">P0 Critical</div></div>
  <div class="stat"><div class="stat__value">${elements.filter(e=>e.priority==='P1').length}</div><div class="stat__label">P1 Important</div></div>
  <div class="stat"><div class="stat__value">${categories.length}</div><div class="stat__label">Categories</div></div>
</div>
<div class="controls">
  <input type="text" id="search" placeholder="Search elements..." />
  <select id="filter-category"><option value="">All Categories</option>${catOptions}</select>
  <select id="filter-phase"><option value="">All Phases</option>${phaseOptions}</select>
  <select id="filter-priority"><option value="">All Priorities</option><option value="P0">P0 Critical</option><option value="P1">P1 Important</option><option value="P2">P2 Nice-to-have</option></select>
</div>
<div class="grid" id="grid">
${cards}
</div>
<footer style="text-align:center;padding:32px;color:var(--text-muted);font-size:12px;">
  SplitLease Design Stack v2.0 | Run 2026-02-19_0801 | Generated 2026-02-19
</footer>
<script>
const searchEl = document.getElementById('search');
const catEl = document.getElementById('filter-category');
const phaseEl = document.getElementById('filter-phase');
const prioEl = document.getElementById('filter-priority');
const cards = document.querySelectorAll('.lib-card');
function filter() {
  const q = searchEl.value.toLowerCase();
  const cat = catEl.value;
  const phase = phaseEl.value;
  const prio = prioEl.value;
  cards.forEach(card => {
    const matchSearch = !q || card.dataset.name.includes(q) || card.textContent.toLowerCase().includes(q);
    const matchCat = !cat || card.dataset.category === cat;
    const matchPhase = !phase || card.dataset.phase === phase;
    const matchPrio = !prio || card.dataset.priority === prio;
    card.classList.toggle('hidden', !(matchSearch && matchCat && matchPhase && matchPrio));
  });
}
searchEl.addEventListener('input', filter);
catEl.addEventListener('change', filter);
phaseEl.addEventListener('change', filter);
prioEl.addEventListener('change', filter);
</script>
</body>
</html>`;

fs.writeFileSync(path.join(runDir, 'report/library-of-elements.html'), html);
console.log('Library written, size:', html.length);
