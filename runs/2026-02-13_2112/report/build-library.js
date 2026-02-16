const fs = require('fs');
const p = 'C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-13_2112';
const L4 = fs.readFileSync(p + '/layer-4/ui-elements.json', 'utf-8');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Library of Elements — Zillow × Innovator's Dilemma (Ch 5-7)</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
:root{--primary-purple:#31135D;--secondary-purple:rgb(109,49,194);--accent-purple:rgb(140,104,238);--text-dark:#1a1a1a;--text-gray:#6b7280;--text-light-gray:#9ca3af;--text-description:#374151;--bg-white:#ffffff;--bg-light:#f9fafb;--bg-off-white:rgb(252,250,255);--bg-light-gray:#f3f4f6;--border-color:#e5e7eb;--border-light:#f3f4f6;--shadow-sm:0 1px 3px rgba(0,0,0,0.05);--shadow-md:0 2px 8px rgba(0,0,0,0.08);--shadow-purple-sm:0 2px 4px rgba(49,19,93,0.2);--signal-warn:#C4841D;--signal-warn-bg:#FDF4E3;--signal-danger:#C53030;--signal-danger-bg:#FDE8E8;--signal-info:#2563EB;--signal-info-bg:#EFF6FF;--signal-success:#4B47CE;--signal-success-bg:#E6F5EE;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--ease-out:cubic-bezier(0.16,1,0.3,1)}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'DM Sans',sans-serif;color:var(--text-dark);background:var(--bg-light);line-height:1.6}
.report-header{background:linear-gradient(135deg,#31135D 0%,rgba(109,49,194,0.9) 100%);color:white;padding:40px 48px 36px}
.report-header h1{font-family:'Inter',sans-serif;font-size:32px;font-weight:700;margin-bottom:6px;letter-spacing:-0.01em}
.report-header .lens-label{font-size:15px;opacity:0.8;margin-bottom:14px}
.report-meta{display:flex;gap:20px;flex-wrap:wrap;font-size:12px;font-family:'Inter',sans-serif;font-weight:500;opacity:0.75}
.badge{display:inline-flex;align-items:center;gap:6px;padding:3px 12px;border-radius:9999px;font-size:11px;font-weight:600;font-family:'Inter',sans-serif}
.badge-complete{background:rgba(255,255,255,0.2);color:white}
.main-content{max-width:1200px;margin:0 auto;padding:32px 48px}
.section-title{font-family:'Inter',sans-serif;font-size:22px;font-weight:700;color:var(--primary-purple);margin-bottom:20px}
.toc{background:var(--bg-white);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:24px 28px;margin-bottom:32px;box-shadow:var(--shadow-sm)}
.toc h3{font-family:'Inter',sans-serif;font-size:16px;font-weight:700;color:var(--primary-purple);margin-bottom:12px}
.toc-item{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border-light);cursor:pointer;transition:all 150ms}
.toc-item:last-child{border-bottom:none}
.toc-item:hover{color:var(--secondary-purple)}
.toc-item .num{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:var(--secondary-purple);color:white;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;flex-shrink:0}
.toc-item .name{font-family:'Inter',sans-serif;font-size:14px;font-weight:600;color:var(--primary-purple);flex:1}
.toc-item .cat{padding:2px 10px;border-radius:9999px;font-size:11px;font-family:'Inter',sans-serif;font-weight:600;background:rgba(109,49,194,0.08);color:var(--secondary-purple)}
.toc-item .pri{padding:2px 10px;border-radius:9999px;font-size:11px;font-family:'Inter',sans-serif;font-weight:600}
.pri-1,.pri-2,.pri-3{background:var(--signal-danger-bg);color:var(--signal-danger)}
.pri-4,.pri-5{background:var(--signal-warn-bg);color:var(--signal-warn)}
.pri-6,.pri-7{background:var(--bg-light-gray);color:var(--text-gray)}
.el-card{background:var(--bg-white);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:32px;margin-bottom:28px;box-shadow:var(--shadow-sm);scroll-margin-top:20px}
.el-card-header{display:flex;align-items:flex-start;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border-light);flex-wrap:wrap}
.el-card-header h3{font-family:'Inter',sans-serif;font-size:20px;font-weight:700;color:var(--primary-purple);flex:1;min-width:200px}
.type-badge{padding:3px 10px;border-radius:9999px;font-size:11px;font-family:'Inter',sans-serif;font-weight:600;text-transform:uppercase;letter-spacing:0.03em;background:rgba(109,49,194,0.08);color:var(--secondary-purple)}
.priority-badge{padding:3px 10px;border-radius:9999px;font-size:11px;font-family:'Inter',sans-serif;font-weight:600}
.phase-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
.phase-tag{padding:2px 8px;border-radius:var(--radius-sm);font-size:11px;font-family:'Inter',sans-serif;font-weight:600;background:rgba(109,49,194,0.08);color:var(--secondary-purple)}
.severity-pill{padding:2px 10px;border-radius:9999px;font-size:11px;font-family:'Inter',sans-serif;font-weight:600;background:var(--bg-off-white);color:var(--text-gray);border:1px solid var(--border-color)}
.section-subtitle{font-family:'Inter',sans-serif;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-gray);margin-bottom:12px;margin-top:20px}
.before-after{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0}
.before-after .before,.before-after .after{padding:14px 16px;border-radius:var(--radius-md);font-size:13px;line-height:1.6}
.before-after .before{background:var(--signal-danger-bg);border-left:3px solid var(--signal-danger)}
.before-after .after{background:var(--signal-success-bg);border-left:3px solid var(--signal-success)}
.before-after label{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-gray);margin-bottom:4px;font-family:'Inter',sans-serif}
@media(max-width:700px){.before-after{grid-template-columns:1fr}.main-content{padding:20px 16px}.report-header{padding:28px 16px}.el-card{padding:20px 16px}}
@media print{body{background:white}.el-card{page-break-inside:avoid;box-shadow:none;border:1px solid #ddd}iframe{display:none}.report-header{background:#31135D!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style>
</head>
<body>
  <script id="data-layer-4" type="application/json">${L4}</script>
  <header class="report-header">
    <h1>Library of Elements</h1>
    <div class="lens-label">Zillow &times; Innovator&rsquo;s Dilemma (Ch 5-7: Managing Disruptive Technological Change)</div>
    <div class="report-meta">
      <span>February 13, 2026</span>
      <span>Run: 2026-02-13_2112</span>
      <span>7 UI Elements</span>
      <span class="badge badge-complete">COMPLETE</span>
    </div>
  </header>
  <main class="main-content">
    <div id="toc-container"></div>
    <div id="elements-container"></div>
  </main>
  <footer style="text-align:center;padding:32px;color:var(--text-light-gray);font-size:12px;font-family:'Inter',sans-serif;font-weight:500;">
    SplitLease Reverse Benchmark Pipeline v1.0
  </footer>
  <script>
    function esc(s){if(!s)return'';if(typeof s!=='string')s=String(s);var d=document.createElement('div');d.textContent=s;return d.innerHTML;}
    var data;try{data=JSON.parse(document.getElementById('data-layer-4').textContent);}catch(e){data={};}
    var elements=data.elements||[];

    /* Table of Contents */
    var tocHtml='<div class="toc"><h3>Elements ('+elements.length+')</h3>';
    elements.forEach(function(el,i){
      var priClass='pri-'+el.priority;
      tocHtml+='<div class="toc-item" onclick="document.getElementById(\\'el-'+el.id+'\\').scrollIntoView({behavior:\\'smooth\\',block:\\'start\\'})">';
      tocHtml+='<span class="num">'+(i+1)+'</span>';
      tocHtml+='<span class="name">'+esc(el.name)+'</span>';
      tocHtml+='<span class="cat">'+esc(el.category)+'</span>';
      tocHtml+='<span class="pri '+priClass+'">P'+el.priority+'</span>';
      tocHtml+='</div>';
    });
    tocHtml+='</div>';
    document.getElementById('toc-container').innerHTML=tocHtml;

    /* Element Cards */
    var html='';
    elements.forEach(function(el){
      html+='<div class="el-card" id="el-'+esc(el.id)+'">';
      html+='<div class="el-card-header"><h3>'+esc(el.name)+'</h3>';
      html+='<span class="type-badge">'+esc(el.category)+'</span>';
      var priClass='pri-'+el.priority;
      html+='<span class="priority-badge '+priClass+'">P'+esc(el.priority)+'</span>';
      html+='</div>';

      /* Phase tags */
      if(el.journey_phases&&el.journey_phases.length){
        html+='<div class="phase-tags">'+el.journey_phases.map(function(p){return '<span class="phase-tag">'+esc(p.replace(/_/g,' '))+'</span>';}).join('')+'</div>';
      }

      /* Source disappointments */
      if(el.source_disappointments&&el.source_disappointments.length){
        html+='<div class="phase-tags">'+el.source_disappointments.map(function(d){return '<span class="severity-pill">'+esc(d)+'</span>';}).join('')+'</div>';
      }

      /* Problem + Description */
      html+='<div class="section-subtitle">Problem It Solves</div>';
      html+='<p style="font-size:14px;color:var(--text-description);line-height:1.7;margin-bottom:16px;">'+esc(el.problem_it_solves)+'</p>';

      html+='<div class="section-subtitle">Why This Is a Signature</div>';
      html+='<p style="font-size:14px;color:var(--text-description);line-height:1.7;margin-bottom:16px;">'+esc(el.why_this_is_a_signature)+'</p>';

      html+='<div class="section-subtitle">Description</div>';
      html+='<p style="font-size:14px;color:var(--text-description);line-height:1.7;margin-bottom:16px;">'+esc(el.description)+'</p>';

      /* Live preview */
      if(el.html_css){
        html+='<div class="section-subtitle">Live Preview</div>';
        var blob='data:text/html;charset=utf-8,'+encodeURIComponent(el.html_css);
        html+='<iframe src="'+blob+'" sandbox="allow-scripts" loading="lazy" style="width:100%;min-height:480px;border:1px solid var(--border-color);border-radius:var(--radius-lg);background:var(--bg-light);margin-bottom:16px;"></iframe>';
      }

      /* Before / After */
      if(el.before_after){
        var ba=el.before_after;
        html+='<div class="section-subtitle">Before / After</div>';
        html+='<div class="before-after">';
        html+='<div class="before"><label>Before ('+esc(ba.before.platform)+')</label>';
        html+='<p style="margin-bottom:6px;">'+esc(ba.before.experience)+'</p>';
        html+='<p style="font-size:12px;color:var(--signal-danger);font-style:italic;">'+esc(ba.before.emotion)+'</p></div>';
        html+='<div class="after"><label>After ('+esc(ba.after.platform)+')</label>';
        html+='<p style="margin-bottom:6px;">'+esc(ba.after.experience)+'</p>';
        html+='<p style="font-size:12px;color:var(--signal-success);font-style:italic;">'+esc(ba.after.emotion)+'</p></div>';
        html+='</div>';
      }

      /* Implements principles */
      if(el.implements_principles&&el.implements_principles.length){
        html+='<div class="section-subtitle">Implements Principles</div>';
        html+='<div class="phase-tags">'+el.implements_principles.map(function(p){return '<span class="phase-tag">'+esc(p)+'</span>';}).join('')+'</div>';
      }

      /* Effort */
      if(el.effort){
        html+='<span class="severity-pill" style="margin-top:12px;display:inline-flex;">Effort: '+esc(el.effort)+'</span>';
      }

      html+='</div>';
    });
    document.getElementById('elements-container').innerHTML=html;
  </script>
</body>
</html>`;

fs.writeFileSync(p + '/report/library-of-elements.html', html, 'utf-8');
console.log('Library written. Size:', fs.statSync(p + '/report/library-of-elements.html').size, 'bytes');
