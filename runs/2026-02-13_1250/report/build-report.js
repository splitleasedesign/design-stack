const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..');

function load(relPath) {
  return fs.readFileSync(path.join(base, relPath), 'utf-8');
}

function safeJson(raw) {
  return raw.replace(/<\/script/gi, '<\\/script');
}

const runConfig = load('run-config.json');
const layer0 = load('layer-0/competitor-journey.json');
const layer1 = load('layer-1/disappointments.json');
const layer2 = load('layer-2/crossref-insights.json');
const layer3 = load('layer-3/opportunities.json');
const layer4 = load('layer-4/ui-elements.json');
const layer5 = load('layer-5/coherence-report.json');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reverse Benchmark Report — Airbnb \u00d7 Cialdini (Ch.3-4)</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary-purple: #31135D;
      --primary-purple-hover: #251047;
      --secondary-purple: rgb(109,49,194);
      --accent-purple: rgb(140,104,238);
      --text-dark: #1a1a1a;
      --text-gray: #6b7280;
      --text-light-gray: #9ca3af;
      --text-description: #374151;
      --bg-white: #ffffff;
      --bg-light: #f9fafb;
      --bg-off-white: rgb(252,250,255);
      --bg-light-gray: #f3f4f6;
      --border-color: #e5e7eb;
      --border-light: #f3f4f6;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
      --shadow-md: 0 2px 8px rgba(0,0,0,0.08);
      --shadow-purple-sm: 0 2px 4px rgba(49,19,93,0.2);
      --shadow-purple-md: 0 4px 8px rgba(49,19,93,0.15);
      --signal-warn: #C4841D;
      --signal-warn-bg: #FDF4E3;
      --signal-danger: #C53030;
      --signal-danger-bg: #FDE8E8;
      --signal-info: #2563EB;
      --signal-info-bg: #EFF6FF;
      --signal-success: #4B47CE;
      --signal-success-bg: #E6F5EE;
      --radius-sm: 6px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-xl: 16px;
      --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'DM Sans', sans-serif; color: var(--text-dark); background: var(--bg-light); line-height: 1.6; }
    .report-header { background: linear-gradient(135deg, #31135D 0%, rgba(109,49,194,0.9) 100%); color: white; padding: 40px 48px 36px; }
    .report-header h1 { font-family: 'Inter', sans-serif; font-size: 32px; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.01em; }
    .report-header .lens-label { font-size: 15px; opacity: 0.8; margin-bottom: 14px; }
    .report-meta { display: flex; gap: 20px; flex-wrap: wrap; font-size: 12px; font-family: 'Inter', sans-serif; font-weight: 500; opacity: 0.75; }
    .badge { display: inline-flex; align-items: center; gap: 6px; padding: 3px 12px; border-radius: 9999px; font-size: 11px; font-weight: 600; font-family: 'Inter', sans-serif; }
    .badge-complete { background: rgba(255,255,255,0.2); color: white; }
    .badge-partial { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.8); }
    .coherence-bar { background: var(--signal-warn-bg); border-bottom: 1px solid rgba(196,132,29,0.2); padding: 10px 48px; font-size: 13px; color: var(--signal-warn); display: none; align-items: center; gap: 12px; font-family: 'Inter', sans-serif; }
    .coherence-bar.has-flags { display: flex; }
    .coherence-bar .count { font-weight: 700; }
    .tab-nav { position: sticky; top: 0; z-index: 100; background: var(--bg-white); border-bottom: 1px solid var(--border-color); padding: 0 48px; display: flex; gap: 0; overflow-x: auto; box-shadow: var(--shadow-sm); }
    .tab-nav button { background: none; border: none; padding: 14px 18px; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: var(--text-gray); cursor: pointer; border-bottom: 2px solid transparent; transition: all 200ms var(--ease-out); white-space: nowrap; display: flex; align-items: center; gap: 8px; }
    .tab-nav button:hover { color: var(--text-description); }
    .tab-nav button.active { color: var(--primary-purple); border-bottom-color: var(--secondary-purple); }
    .tab-nav button .layer-num { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%; background: var(--bg-light-gray); font-size: 11px; font-family: 'Inter', sans-serif; font-weight: 600; color: var(--text-gray); }
    .tab-nav button.active .layer-num { background: var(--secondary-purple); color: white; }
    .main-content { max-width: 1200px; margin: 0 auto; padding: 32px 48px; }
    .tab-panel { display: none; animation: fadeIn 300ms var(--ease-out); }
    .tab-panel.active { display: block; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
    .element-card { background: var(--bg-white); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 28px 32px; margin-bottom: 20px; box-shadow: var(--shadow-sm); }
    .element-card-header { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--border-light); flex-wrap: wrap; }
    .element-card-header h3 { font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: var(--primary-purple); flex: 1; min-width: 200px; }
    .type-badge { padding: 3px 10px; border-radius: 9999px; font-size: 11px; font-family: 'Inter', sans-serif; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; }
    .type-mediocre_default { background: var(--signal-warn-bg); color: var(--signal-warn); }
    .type-trust_vacuum { background: var(--signal-danger-bg); color: var(--signal-danger); }
    .type-missing_delight { background: var(--signal-info-bg); color: var(--signal-info); }
    .type-invisible_labor { background: #F0EBFF; color: #6B4EE6; }
    .type-abandoned_phase { background: #FDE8E8; color: #C53030; }
    .priority-badge { padding: 3px 10px; border-radius: 9999px; font-size: 11px; font-family: 'Inter', sans-serif; font-weight: 600; }
    .priority-high { background: var(--signal-danger-bg); color: var(--signal-danger); }
    .priority-medium { background: var(--signal-warn-bg); color: var(--signal-warn); }
    .priority-low { background: var(--bg-light-gray); color: var(--text-gray); }
    .severity-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    .severity-pill { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-family: 'Inter', sans-serif; font-weight: 600; background: var(--bg-off-white); color: var(--text-gray); border: 1px solid var(--border-color); }
    .phase-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
    .phase-tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-family: 'Inter', sans-serif; font-weight: 600; background: rgba(109,49,194,0.08); color: var(--secondary-purple); }
    .ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    .ps-box { padding: 14px 16px; border-radius: var(--radius-md); font-size: 14px; line-height: 1.6; }
    .ps-box.problem { background: var(--signal-danger-bg); border-left: 3px solid var(--signal-danger); }
    .ps-box.solution { background: var(--signal-success-bg); border-left: 3px solid var(--signal-success); }
    .ps-box label { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-gray); margin-bottom: 4px; font-family: 'Inter', sans-serif; }
    @media (max-width: 700px) { .ps-grid { grid-template-columns: 1fr; } }
    .evidence-toggle { background: none; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 6px 14px; font-size: 12px; font-family: 'Inter', sans-serif; cursor: pointer; color: var(--text-gray); transition: all 150ms; }
    .evidence-toggle:hover { border-color: var(--secondary-purple); color: var(--secondary-purple); }
    .evidence-list { display: none; margin-top: 12px; }
    .evidence-list.open { display: block; }
    .evidence-item { padding: 10px 14px; margin: 6px 0; background: var(--bg-off-white); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 13px; }
    .evidence-item .source { font-family: 'Inter', sans-serif; font-size: 11px; color: var(--secondary-purple); font-weight: 600; margin-bottom: 4px; }
    .evidence-item .quote { color: var(--text-description); font-style: italic; }
    .evidence-item .insight { color: var(--text-dark); margin-top: 4px; }
    .coffee-test { margin-top: 16px; padding: 14px 16px; background: rgba(140,104,238,0.06); border: 1px solid rgba(140,104,238,0.15); border-radius: var(--radius-md); font-size: 14px; color: var(--text-description); font-style: italic; line-height: 1.6; }
    .coffee-test-label { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-purple); margin-bottom: 6px; font-style: normal; }
    .coherence-section { margin-bottom: 28px; }
    .coherence-section h3 { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: var(--primary-purple); margin-bottom: 12px; }
    .reinforcement-card { padding: 14px 16px; margin: 8px 0; border-radius: var(--radius-md); background: var(--signal-success-bg); border-left: 4px solid var(--signal-success); font-size: 14px; }
    .contradiction-card { padding: 14px 16px; margin: 8px 0; border-radius: var(--radius-md); background: var(--signal-danger-bg); border-left: 4px solid var(--signal-danger); font-size: 14px; }
    .extension-card { padding: 14px 16px; margin: 8px 0; border-radius: var(--radius-md); background: var(--signal-info-bg); border-left: 4px solid var(--signal-info); font-size: 14px; }
    .card-label { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
    .coverage-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; margin: 16px 0; }
    .coverage-cell { padding: 12px; border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border-color); }
    .coverage-cell .phase-name { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: var(--text-gray); margin-bottom: 4px; }
    .coverage-cell .count { font-size: 24px; font-weight: 700; color: var(--primary-purple); }
    .coverage-cell .level { font-size: 11px; color: var(--text-gray); }
    .coverage-none { background: var(--signal-danger-bg); }
    .coverage-thin { background: var(--signal-warn-bg); }
    .coverage-moderate { background: var(--signal-info-bg); }
    .coverage-strong { background: var(--signal-success-bg); }
    .phase-card { background: var(--bg-white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 12px; }
    .phase-card h4 { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: var(--secondary-purple); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.03em; }
    .phase-card p { font-size: 14px; color: var(--text-description); margin-bottom: 6px; line-height: 1.6; }
    .quality-badge { display: inline-flex; padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-family: 'Inter', sans-serif; font-weight: 600; margin-top: 6px; }
    .quality-excellent { background: var(--signal-success-bg); color: var(--signal-success); }
    .quality-good { background: var(--signal-info-bg); color: var(--signal-info); }
    .quality-adequate { background: var(--signal-warn-bg); color: var(--signal-warn); }
    .quality-poor { background: var(--signal-danger-bg); color: var(--signal-danger); }
    .blind-spot-card { background: linear-gradient(135deg, rgba(49,19,93,0.03) 0%, rgba(140,104,238,0.05) 100%); border: 1px solid rgba(109,49,194,0.15); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 16px; }
    .blind-spot-card h4 { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: var(--primary-purple); margin-bottom: 8px; }
    .blind-spot-card p { font-size: 14px; color: var(--text-description); line-height: 1.6; margin-bottom: 8px; }
    .sig-badge { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font-size: 11px; font-family: 'Inter', sans-serif; font-weight: 600; background: rgba(109,49,194,0.1); color: var(--secondary-purple); }
    .transcript-quote { padding: 10px 14px; margin: 8px 0; background: var(--bg-off-white); border-left: 3px solid var(--secondary-purple); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 13px; }
    .transcript-quote .speaker { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: var(--secondary-purple); margin-bottom: 3px; }
    .transcript-quote .text { color: var(--text-description); font-style: italic; line-height: 1.5; }
    .transcript-quote .connection { color: var(--text-gray); font-style: normal; margin-top: 6px; font-size: 12px; }
    .opp-card { background: var(--bg-white); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 28px 32px; margin-bottom: 20px; box-shadow: var(--shadow-sm); }
    .opp-rank { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: var(--secondary-purple); color: white; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; margin-right: 12px; }
    .opp-score-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 8px; margin: 16px 0; }
    .opp-score-cell { padding: 8px 10px; background: var(--bg-off-white); border: 1px solid var(--border-color); border-radius: var(--radius-sm); text-align: center; }
    .opp-score-cell .label { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-gray); margin-bottom: 2px; }
    .opp-score-cell .value { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: var(--primary-purple); }
    .ui-preview-card { background: var(--bg-white); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 28px 32px; margin-bottom: 20px; box-shadow: var(--shadow-sm); }
    .before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; }
    .before-after .before, .before-after .after { padding: 14px 16px; border-radius: var(--radius-md); font-size: 13px; line-height: 1.6; }
    .before-after .before { background: var(--signal-danger-bg); border-left: 3px solid var(--signal-danger); }
    .before-after .after { background: var(--signal-success-bg); border-left: 3px solid var(--signal-success); }
    .before-after label { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-gray); margin-bottom: 4px; font-family: 'Inter', sans-serif; }
    @media (max-width: 700px) { .before-after { grid-template-columns: 1fr; } }
    .stat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; margin: 16px 0; }
    .stat-card { padding: 16px; background: var(--bg-white); border: 1px solid var(--border-color); border-radius: var(--radius-md); text-align: center; }
    .stat-card .stat-value { font-family: 'Inter', sans-serif; font-size: 28px; font-weight: 700; color: var(--primary-purple); }
    .stat-card .stat-label { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-gray); margin-top: 4px; }
    .section-title { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; color: var(--primary-purple); margin-bottom: 20px; }
    .section-subtitle { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-gray); margin-bottom: 12px; }
    .narrative-block { font-size: 15px; color: var(--text-description); line-height: 1.7; margin-bottom: 20px; max-width: 800px; }
    .cluster-card { background: var(--bg-off-white); border: 1px solid rgba(109,49,194,0.12); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 16px; }
    .cluster-card h4 { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: var(--primary-purple); margin-bottom: 8px; }
    @media (max-width: 768px) { .report-header, .main-content, .tab-nav, .coherence-bar { padding-left: 16px; padding-right: 16px; } .element-card, .opp-card, .ui-preview-card { padding: 20px 16px; } }
    @media print { .tab-nav, .coherence-bar { display: none; } .tab-panel { display: block !important; page-break-inside: avoid; } body { background: white; } .report-header { background: #31135D !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
  </style>
</head>
<body>
  <script id="run-config" type="application/json">${safeJson(runConfig)}</script>
  <script id="data-layer-0" type="application/json">${safeJson(layer0)}</script>
  <script id="data-layer-1" type="application/json">${safeJson(layer1)}</script>
  <script id="data-layer-2" type="application/json">${safeJson(layer2)}</script>
  <script id="data-layer-3" type="application/json">${safeJson(layer3)}</script>
  <script id="data-layer-4" type="application/json">${safeJson(layer4)}</script>
  <script id="data-layer-5" type="application/json">${safeJson(layer5)}</script>

  <header class="report-header">
    <h1>Reverse Benchmark Report</h1>
    <div class="lens-label" id="lens-label"></div>
    <div class="report-meta">
      <span id="meta-date"></span>
      <span id="meta-run-id"></span>
      <span class="badge" id="meta-status"></span>
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

  <script>
    function loadJSON(id){try{return JSON.parse(document.getElementById(id)?.textContent||'{}');}catch(e){console.error('JSON parse error for',id,e);return {};}}
    const config=loadJSON('run-config');
    const L0=loadJSON('data-layer-0');
    const L1=loadJSON('data-layer-1');
    const L2=loadJSON('data-layer-2');
    const L3=loadJSON('data-layer-3');
    const L4=loadJSON('data-layer-4');
    const L5=loadJSON('data-layer-5');
    const lens=config.lens||L0.lens||{};
    document.getElementById('lens-label').textContent='Airbnb \\u00d7 Cialdini ('+(lens.book_chapters||'Ch.3-4')+')';
    document.getElementById('meta-date').textContent=config.started_at?new Date(config.started_at).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}):'';
    document.getElementById('meta-run-id').textContent=config.run_id||'';
    const statusEl=document.getElementById('meta-status');
    statusEl.textContent=(config.status||'pending').toUpperCase();
    statusEl.className='badge badge-'+(config.status||'partial');
    const contradictions=L5.contradictions||[];
    const reinforcements=L5.reinforcements||[];
    if(contradictions.length>0){const bar=document.getElementById('coherence-bar');bar.classList.add('has-flags');document.getElementById('coherence-count').textContent=contradictions.length+' contradiction'+(contradictions.length!==1?'s':'');document.getElementById('coherence-summary').textContent='detected \\u2014 '+reinforcements.length+' reinforcement'+(reinforcements.length!==1?'s':'')+', '+(L5.extensions||[]).length+' extension'+((L5.extensions||[]).length!==1?'s':'');}
    document.getElementById('tab-nav').addEventListener('click',(e)=>{const btn=e.target.closest('button');if(!btn)return;document.querySelectorAll('.tab-nav button').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById('panel-'+btn.dataset.tab).classList.add('active');});
    document.addEventListener('click',(e)=>{if(e.target.classList.contains('evidence-toggle')){const list=e.target.nextElementSibling;list.classList.toggle('open');e.target.textContent=list.classList.contains('open')?'Hide evidence':'Show evidence ('+list.children.length+')';}});
    function esc(s){if(!s)return'';const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

    // OVERVIEW
    (function(){
      const c=document.getElementById('content-overview');
      let h='';
      h+='<div class="element-card"><h3 class="section-title">Lens Summary</h3><p class="narrative-block">'+esc(L0.lens?.lens_summary||'')+'</p>';
      const nd=(L1.disappointments||[]).length,no=(L3.opportunities||[]).length,ne=(L4.elements||[]).length;
      const ntm=L2.transcripts_scanned?(L2.transcripts_scanned.host_transcripts?.matched||0)+(L2.transcripts_scanned.guest_transcripts?.matched||0):0;
      h+='<div class="section-subtitle">Run Statistics</div><div class="stat-grid">';
      [{v:nd,l:'Disappointments'},{v:no,l:'Opportunities'},{v:ne,l:'UI Elements'},{v:reinforcements.length,l:'Reinforcements'},{v:contradictions.length,l:'Contradictions'},{v:(L5.extensions||[]).length,l:'Extensions'},{v:ntm,l:'Transcripts Matched'},{v:L2.validation_summary?.total_unique_quotes||0,l:'Unique Quotes'}].forEach(s=>{h+='<div class="stat-card"><div class="stat-value">'+s.v+'</div><div class="stat-label">'+s.l+'</div></div>';});
      h+='</div>';
      if(L3.opportunity_thesis){h+='<div class="section-subtitle" style="margin-top:24px;">Opportunity Thesis</div><p class="narrative-block">'+esc(L3.opportunity_thesis)+'</p>';}
      if(L5.coverage_map){h+='<div class="section-subtitle" style="margin-top:24px;">Journey Phase Coverage</div><div class="coverage-grid">';Object.entries(L5.coverage_map).forEach(([phase,info])=>{const cov=info.coverage||'none';h+='<div class="coverage-cell coverage-'+cov+'"><div class="phase-name">'+esc(phase.replace(/_/g,' '))+'</div><div class="count">'+(info.element_count||0)+'</div><div class="level">'+esc(cov)+'</div></div>';});h+='</div>';}
      if(L3.strategic_narrative){h+='<div class="section-subtitle" style="margin-top:24px;">Strategic Narrative</div><p class="narrative-block">'+esc(L3.strategic_narrative)+'</p>';}
      h+='</div>';
      c.innerHTML=h;
    })();

    // LAYER 0
    (function(){
      const c=document.getElementById('content-layer-0');
      let h='<h2 class="section-title">Layer 0: Competitor Journey Map</h2>';
      const ov=L0.competitor_overview;
      if(ov){h+='<div class="element-card"><div class="element-card-header"><h3>'+esc(ov.category||'Competitor Overview')+'</h3></div><p style="font-size:14px;color:var(--text-description);margin-bottom:10px;line-height:1.6;"><strong>Primary Strength:</strong> '+esc(ov.primary_strength)+'</p><p style="font-size:14px;color:var(--text-description);margin-bottom:10px;line-height:1.6;"><strong>Business Model:</strong> '+esc(ov.business_model)+'</p><p style="font-size:14px;color:var(--text-description);margin-bottom:10px;line-height:1.6;"><strong>Brand Perception:</strong> '+esc(ov.brand_perception)+'</p></div>';}
      if(L0.phases){['discovery','search','listing_evaluation','booking_proposal','communication','active_stay','post_stay','retention'].forEach(key=>{const p=L0.phases[key];if(!p)return;h+='<div class="phase-card"><h4>'+esc(key.replace(/_/g,' '))+'</h4><span class="quality-badge quality-'+(p.quality_level||'adequate')+'">'+esc(p.quality_level||'N/A')+'</span><p style="margin-top:8px;"><strong>What they do:</strong> '+esc(p.what_they_do)+'</p><p style="margin-top:8px;"><strong>Framework Analysis:</strong> '+esc(p.framework_analysis)+'</p><div class="coffee-test" style="margin-top:10px;"><div class="coffee-test-label">What nobody in the category does</div>'+esc(p.what_nobody_in_category_does)+'</div></div>';});}
      if(L0.category_blind_spots?.length){h+='<div class="section-subtitle" style="margin-top:28px;">Category Blind Spots</div>';L0.category_blind_spots.forEach(bs=>{h+='<div class="blind-spot-card"><h4>'+esc(bs.blind_spot)+'</h4><p><strong>Why nobody tries:</strong> '+esc(bs.why_nobody_tries)+'</p><p style="margin-top:6px;"><strong>Framework insight:</strong> '+esc(bs.framework_insight)+'</p><span class="sig-badge" style="margin-top:8px;">Signature potential: '+esc(bs.signature_potential)+'</span></div>';});}
      c.innerHTML=h;
    })();

    // LAYER 1
    (function(){
      const c=document.getElementById('content-layer-1');
      let h='<h2 class="section-title">Layer 1: Disappointments <span style="font-size:14px;color:var(--text-gray);font-weight:400;">('+(L1.disappointments||[]).length+' found)</span></h2>';
      if(L1.disappointment_summary){h+='<div class="element-card"><p class="narrative-block">'+esc(L1.disappointment_summary)+'</p></div>';}
      (L1.disappointments||[]).forEach(d=>{const evi=(d.evidence||[]).map(ev=>'<div class="evidence-item"><div class="source">'+esc(ev.source)+'</div>'+(ev.observation?'<div class="quote">"'+esc(ev.observation)+'"</div>':'')+(ev.framework_interpretation?'<div class="insight">'+esc(ev.framework_interpretation)+'</div>':'')+'</div>').join('');const ec=(d.evidence||[]).length;h+='<div class="element-card"><div class="element-card-header"><h3>'+esc(d.title)+'</h3><span class="type-badge type-'+(d.type||'')+'">'+esc((d.type||'').replace(/_/g,' '))+'</span></div><div class="severity-row"><span class="severity-pill">Phase: '+esc((d.competitor_phase||'').replace(/_/g,' '))+'</span><span class="severity-pill">Who: '+esc(d.who_feels_it||'?')+'</span>'+(d.severity?'<span class="severity-pill">Frequency: '+esc((d.severity.frequency||'').replace(/_/g,' '))+'</span><span class="severity-pill">Impact: '+esc(d.severity.impact||'')+'</span><span class="severity-pill">Visibility: '+esc((d.severity.visibility||'').replace(/_/g,' '))+'</span>':'')+'</div><div class="ps-grid"><div class="ps-box problem"><label>What Happens Now</label>'+esc(d.what_happens_now)+'</div><div class="ps-box solution"><label>Why It Matters Psychologically</label>'+esc(d.why_it_matters_psychologically)+'</div></div>'+(d.the_coffee_test?'<div class="coffee-test"><div class="coffee-test-label">The Coffee Test</div>'+esc(d.the_coffee_test)+'</div>':'')+(ec>0?'<div style="margin-top:16px;"><button class="evidence-toggle">Show evidence ('+ec+')</button><div class="evidence-list">'+evi+'</div></div>':'')+'</div>';});
      if(L1.disappointment_clusters?.length){h+='<div class="section-subtitle" style="margin-top:28px;">Disappointment Clusters</div>';L1.disappointment_clusters.forEach(cl=>{h+='<div class="cluster-card"><h4>'+esc(cl.cluster_name)+'</h4><p style="font-size:13px;color:var(--text-description);line-height:1.6;margin-bottom:8px;">'+esc(cl.pattern)+'</p><span class="sig-badge">Signature potential: '+esc(cl.signature_potential)+'</span></div>';});}
      c.innerHTML=h;
    })();

    // LAYER 2
    (function(){
      const c=document.getElementById('content-layer-2');
      let h='<h2 class="section-title">Layer 2: Transcript Cross-Reference</h2>';
      const scan=L2.transcripts_scanned;
      if(scan){h+='<div class="element-card"><div class="section-subtitle">Scan Statistics</div><div class="stat-grid"><div class="stat-card"><div class="stat-value">'+(scan.host_transcripts?.total||0)+'</div><div class="stat-label">Host Transcripts</div></div><div class="stat-card"><div class="stat-value">'+(scan.host_transcripts?.matched||0)+'</div><div class="stat-label">Host Matched</div></div><div class="stat-card"><div class="stat-value">'+(scan.guest_transcripts?.total||0)+'</div><div class="stat-label">Guest Transcripts</div></div><div class="stat-card"><div class="stat-value">'+(scan.guest_transcripts?.matched||0)+'</div><div class="stat-label">Guest Matched</div></div><div class="stat-card"><div class="stat-value">'+(L2.validation_summary?.total_unique_quotes||0)+'</div><div class="stat-label">Unique Quotes</div></div><div class="stat-card"><div class="stat-value">'+(L2.validation_summary?.total_transcripts_with_evidence||0)+'</div><div class="stat-label">Files w/ Evidence</div></div></div></div>';}
      if(L2.validation_summary){const vs=L2.validation_summary;h+='<div class="element-card"><div class="section-subtitle">Validation Strength</div><div class="severity-row"><span class="severity-pill" style="background:var(--signal-success-bg);color:var(--signal-success);">Strong: '+(vs.strong||[]).length+'</span><span class="severity-pill" style="background:var(--signal-warn-bg);color:var(--signal-warn);">Moderate: '+(vs.moderate||[]).length+'</span><span class="severity-pill" style="background:var(--signal-danger-bg);color:var(--signal-danger);">Weak: '+(vs.weak||[]).length+'</span></div>'+(vs.most_validated_cluster?'<p style="font-size:13px;color:var(--text-description);margin-top:8px;"><strong>Most validated:</strong> '+esc(vs.most_validated_cluster.cluster_name)+' - '+esc(vs.most_validated_cluster.validation_strength)+'</p>':'')+'</div>';}
      (L2.validated_disappointments||[]).forEach(vd=>{const vc=vd.validation_strength==='strong'?'var(--signal-success)':vd.validation_strength==='moderate'?'var(--signal-warn)':'var(--signal-danger)';const vb=vd.validation_strength==='strong'?'var(--signal-success-bg)':vd.validation_strength==='moderate'?'var(--signal-warn-bg)':'var(--signal-danger-bg)';h+='<div class="element-card"><div class="element-card-header"><h3>'+esc(vd.title)+'</h3><span class="severity-pill" style="background:'+vb+';color:'+vc+';">'+esc(vd.validation_strength)+'</span></div>';(vd.transcript_matches||[]).forEach(tm=>{h+='<div class="transcript-quote"><div class="speaker">'+esc(tm.speaker)+' ('+esc(tm.transcript)+')'+(tm.timestamp?' @ '+esc(tm.timestamp):'')+'</div><div class="text">"'+esc(tm.quote_or_paraphrase)+'"</div><div class="connection">'+esc(tm.cialdini_connection)+'</div></div>';});if(vd.framework_reinforcement){h+='<p style="font-size:13px;color:var(--text-description);margin-top:12px;line-height:1.6;"><strong>Framework reinforcement:</strong> '+esc(vd.framework_reinforcement)+'</p>';}h+='</div>';});
      if(L2.new_discoveries?.length){h+='<div class="section-subtitle" style="margin-top:28px;">New Discoveries</div>';L2.new_discoveries.forEach(nd=>{h+='<div class="blind-spot-card"><h4>'+esc(nd.title)+'</h4><p>'+esc(nd.description)+'</p>';(nd.transcript_evidence||[]).forEach(te=>{h+='<div class="transcript-quote"><div class="speaker">'+esc(te.speaker)+' ('+esc(te.transcript)+')'+(te.timestamp?' @ '+esc(te.timestamp):'')+'</div><div class="text">"'+esc(te.quote)+'"</div></div>';});h+='<span class="sig-badge" style="margin-top:8px;">Signature potential: '+esc(nd.signature_potential)+'</span></div>';});}
      c.innerHTML=h;
    })();

    // LAYER 3
    (function(){
      const c=document.getElementById('content-layer-3');
      let h='<h2 class="section-title">Layer 3: Opportunities <span style="font-size:14px;color:var(--text-gray);font-weight:400;">('+(L3.opportunities||[]).length+' ranked)</span></h2>';
      if(L3.opportunity_thesis){h+='<div class="element-card"><p class="narrative-block">'+esc(L3.opportunity_thesis)+'</p></div>';}
      const rm={};(L3.opportunity_ranking||[]).forEach(r=>{rm[r.id]=r;});
      (L3.opportunities||[]).forEach(opp=>{const rank=rm[opp.id];const score=opp.opportunity_score||{};h+='<div class="opp-card"><div class="element-card-header"><h3>'+(rank?'<span class="opp-rank">'+rank.rank+'</span>':'')+esc(opp.title)+'</h3></div><div class="phase-tags">'+(opp.split_lease_phases||[]).map(p=>'<span class="phase-tag">'+esc(p.replace(/_/g,' '))+'</span>').join('')+'</div><p class="narrative-block" style="margin-bottom:16px;">'+esc(opp.the_signature)+'</p><div class="section-subtitle">Opportunity Score</div><div class="opp-score-grid">'+Object.entries(score).map(([k,v])=>'<div class="opp-score-cell"><div class="label">'+esc(k.replace(/_/g,' '))+'</div><div class="value">'+esc(v)+'</div></div>').join('')+'</div><div class="ps-grid" style="margin-top:16px;"><div class="ps-box problem"><label>Why Competitors Won\\'t Copy</label>'+esc(opp.why_competitors_wont_copy)+'</div><div class="ps-box solution"><label>Behavioral Framework Case</label>'+esc(opp.behavioral_framework_case)+'</div></div>'+(opp.user_evidence?'<div class="coffee-test"><div class="coffee-test-label">User Evidence</div>'+esc(opp.user_evidence)+'</div>':'')+((opp.anti_patterns||[]).length?'<div style="margin-top:12px;"><div class="section-subtitle" style="color:var(--signal-danger);">Anti-Patterns</div><ul style="padding-left:18px;font-size:13px;color:var(--text-description);line-height:1.6;">'+opp.anti_patterns.map(a=>'<li>'+esc(a)+'</li>').join('')+'</ul></div>':'')+(rank?'<p style="font-size:13px;color:var(--text-gray);margin-top:12px;line-height:1.6;"><strong>Ranking rationale:</strong> '+esc(rank.reason)+'</p>':'')+'</div>';});
      if(L3.strategic_narrative){h+='<div class="element-card"><div class="section-subtitle">Strategic Narrative</div><p class="narrative-block">'+esc(L3.strategic_narrative)+'</p></div>';}
      c.innerHTML=h;
    })();

    // LAYER 4
    (function(){
      const c=document.getElementById('content-layer-4');
      let h='<h2 class="section-title">Layer 4: UI Elements <span style="font-size:14px;color:var(--text-gray);font-weight:400;">('+(L4.elements||[]).length+' elements)</span></h2>';
      (L4.elements||[]).forEach(el=>{h+='<div class="ui-preview-card"><div class="element-card-header"><h3>'+esc(el.name)+'</h3><span class="type-badge type-mediocre_default">'+esc(el.category||'')+'</span><span class="priority-badge priority-'+(el.priority||'medium')+'">'+esc(el.priority||'medium')+'</span></div><div class="phase-tags">'+(el.journey_phases||[]).map(p=>'<span class="phase-tag">'+esc(p.replace(/_/g,' '))+'</span>').join('')+'</div><p style="font-size:14px;color:var(--text-description);line-height:1.6;margin-bottom:12px;"><strong>Problem:</strong> '+esc(el.problem_it_solves)+'</p><p style="font-size:14px;color:var(--text-description);line-height:1.6;margin-bottom:12px;"><strong>Signature:</strong> '+esc(el.why_this_is_a_signature)+'</p><p style="font-size:14px;color:var(--text-description);line-height:1.6;margin-bottom:16px;">'+esc(el.description)+'</p>';
      if(el.html_css){const blob='data:text/html;charset=utf-8,'+encodeURIComponent(el.html_css);h+='<div class="section-subtitle">Live Preview</div><iframe src="'+blob+'" sandbox="allow-scripts" loading="lazy" style="width:100%;min-height:420px;border:1px solid var(--border-color);border-radius:var(--radius-md);background:var(--bg-light);"></iframe>';}
      if(el.before_after){h+='<div class="section-subtitle" style="margin-top:16px;">Before / After</div><div class="before-after"><div class="before"><label>Before</label>'+esc(el.before_after.before)+'</div><div class="after"><label>After</label>'+esc(el.before_after.after)+'</div></div>';}
      h+='</div>';});
      c.innerHTML=h;
    })();

    // LAYER 5
    (function(){
      const c=document.getElementById('content-layer-5');
      let h='<h2 class="section-title">Layer 5: Coherence Report</h2>';
      if(L5.reinforcements?.length){h+='<div class="coherence-section"><h3>Reinforcements ('+L5.reinforcements.length+')</h3>';L5.reinforcements.forEach(r=>{h+='<div class="reinforcement-card"><div class="card-label" style="color:var(--signal-success);">Reinforcement</div><p><strong>'+esc(r.new_element_id)+'</strong> reinforces <strong>'+esc(r.existing_element_id)+'</strong> ('+esc(r.existing_element_source||'')+')</p><p style="font-size:13px;color:var(--text-description);margin-top:4px;">'+esc(r.similarity)+'</p><p style="font-size:12px;color:var(--text-gray);margin-top:4px;"><strong>Recommendation:</strong> '+esc(r.recommendation)+' | <strong>Confidence:</strong> '+esc(r.confidence_boost)+'</p></div>';});h+='</div>';}
      if(L5.contradictions?.length){h+='<div class="coherence-section"><h3>Contradictions ('+L5.contradictions.length+')</h3>';L5.contradictions.forEach(ct=>{h+='<div class="contradiction-card"><div class="card-label" style="color:var(--signal-danger);">'+esc(ct.severity||'warning')+'</div><p><strong>'+esc(ct.new_element_id)+'</strong> conflicts with <strong>'+esc(ct.existing_element_id)+'</strong></p><p style="font-size:13px;color:var(--text-description);margin-top:4px;">'+esc(ct.conflict)+'</p><p style="font-size:12px;color:var(--text-gray);margin-top:4px;"><strong>Recommendation:</strong> '+esc(ct.recommendation)+'</p></div>';});h+='</div>';}
      if(L5.extensions?.length){h+='<div class="coherence-section"><h3>Extensions ('+L5.extensions.length+')</h3>';L5.extensions.forEach(ext=>{h+='<div class="extension-card"><div class="card-label" style="color:var(--signal-info);">New Territory</div><p><strong>'+esc(ext.new_element_id)+'</strong> \\u2014 '+esc(ext.gap_filled)+'</p><p style="font-size:12px;color:var(--text-gray);margin-top:4px;">'+esc(ext.confidence_note)+'</p>'+(ext.needs_design_stack_validation?'<p style="font-size:11px;color:var(--signal-warn);margin-top:4px;font-family:Inter,sans-serif;font-weight:600;">Needs validation: '+esc(ext.needs_design_stack_validation)+'</p>':'')+'</div>';});h+='</div>';}
      if(L5.coverage_map){h+='<div class="coherence-section"><h3>Journey Coverage</h3><div class="coverage-grid">';Object.entries(L5.coverage_map).forEach(([phase,info])=>{const cov=info.coverage||'none';h+='<div class="coverage-cell coverage-'+cov+'"><div class="phase-name">'+esc(phase.replace(/_/g,' '))+'</div><div class="count">'+(info.element_count||0)+'</div><div class="level">'+esc(cov)+'</div></div>';});h+='</div></div>';}
      if(L5.cross_process_insights?.length){h+='<div class="coherence-section"><h3>Cross-Process Insights</h3>';L5.cross_process_insights.forEach(cpi=>{h+='<div class="blind-spot-card"><p style="font-size:14px;color:var(--text-description);line-height:1.6;margin-bottom:8px;">'+esc(cpi.insight)+'</p><div class="phase-tags">'+(cpi.elements_involved||[]).map(e=>'<span class="phase-tag">'+esc(e)+'</span>').join('')+'</div><p style="font-size:13px;color:var(--text-gray);margin-top:4px;"><strong>Implication:</strong> '+esc(cpi.implication)+'</p></div>';});h+='</div>';}
      if(L5.token_compliance){const tc=L5.token_compliance;h+='<div class="coherence-section"><h3>Token Compliance</h3><div class="element-card"><p style="font-size:13px;color:var(--text-description);line-height:1.6;">'+esc(tc.recommendation)+'</p>';if(tc.new_tokens_flagged?.length){h+='<div style="margin-top:12px;overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:12px;"><thead><tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left;padding:8px;font-family:Inter,sans-serif;color:var(--text-gray);">Token</th><th style="text-align:left;padding:8px;font-family:Inter,sans-serif;color:var(--text-gray);">Conflict</th></tr></thead><tbody>';tc.new_tokens_flagged.forEach(t=>{h+='<tr style="border-bottom:1px solid var(--border-light);"><td style="padding:8px;font-family:Inter,sans-serif;font-weight:600;color:var(--primary-purple);">'+esc(t.token)+'</td><td style="padding:8px;color:var(--text-description);">'+esc(t.conflict)+'</td></tr>';});h+='</tbody></table></div>';}h+='</div></div>';}
      if(L5.next_run_recommendations?.length){h+='<div class="coherence-section"><h3>Next Run Recommendations</h3>';L5.next_run_recommendations.forEach(nr=>{h+='<div class="phase-card"><h4 style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">'+esc(nr.recommendation)+' <span class="priority-badge priority-'+nr.priority+'">'+esc(nr.priority)+'</span> <span class="severity-pill">'+esc(nr.process_type)+'</span></h4><p style="font-size:13px;color:var(--text-gray);">'+esc(nr.reason)+'</p></div>';});h+='</div>';}
      c.innerHTML=h||'<div class="element-card"><p style="color:var(--text-light-gray);font-style:italic;">No coherence data.</p></div>';
    })();
  <\/script>
</body>
</html>`;

const outputPath = path.join(base, 'report', 'index.html');
fs.writeFileSync(outputPath, html, 'utf-8');
const stats = fs.statSync(outputPath);
console.log('Report written to:', outputPath);
console.log('File size:', stats.size.toLocaleString(), 'bytes');
