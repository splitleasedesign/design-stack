function loadJSON(id){try{return JSON.parse(document.getElementById(id)?.textContent||'{}');}catch(e){console.error('JSON parse error for',id,e);return {};}}
const L0=loadJSON('data-layer-0');
const L1=loadJSON('data-layer-1');
const L2=loadJSON('data-layer-2');
const L3=loadJSON('data-layer-3');
const L4=loadJSON('data-layer-4');
const L5=loadJSON('data-layer-5');
const lens=L0.lens||{};
function esc(s){if(!s)return'';if(typeof s!=='string')s=String(s);const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

/* ── Coherence Bar ── */
const contradictions=L5.contradictions||[];
const reinforcements=L5.reinforcements||[];
if(contradictions.length>0){const bar=document.getElementById('coherence-bar');bar.classList.add('has-flags');document.getElementById('coherence-count').textContent=contradictions.length+' contradiction'+(contradictions.length!==1?'s':'');document.getElementById('coherence-summary').textContent='detected \u2014 '+reinforcements.length+' reinforcement'+(reinforcements.length!==1?'s':'')+', '+(L5.extensions||[]).length+' extension'+((L5.extensions||[]).length!==1?'s':'');}

/* ── Tab Navigation ── */
document.getElementById('tab-nav').addEventListener('click',(e)=>{const btn=e.target.closest('button');if(!btn)return;document.querySelectorAll('.tab-nav button').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById('panel-'+btn.dataset.tab).classList.add('active');});

/* ── Evidence Toggle ── */
document.addEventListener('click',(e)=>{if(e.target.classList.contains('evidence-toggle')){const list=e.target.nextElementSibling;list.classList.toggle('open');e.target.textContent=list.classList.contains('open')?'Hide evidence':'Show evidence ('+list.children.length+')';}});

/* ══════════════════════════ OVERVIEW ══════════════════════════ */
(function(){
  const c=document.getElementById('content-overview');
  let h='';
  h+='<div class="element-card"><h3 class="section-title">Lens Summary</h3><p class="narrative-block">'+esc(lens.lens_summary||'')+'</p>';
  const nd=(L1.disappointments||[]).length;
  const no=(L3.opportunities||[]).length;
  const ne=(L4.elements||[]).length;
  const scan=L2.transcripts_scanned||{};
  const totalScanned=scan.total_files_scanned||((scan.host_transcripts_total||0)+(scan.guest_transcripts_total||0));
  h+='<div class="section-subtitle">Run Statistics</div><div class="stat-grid">';
  [{v:nd,l:'Disappointments'},{v:no,l:'Opportunities'},{v:ne,l:'UI Elements'},{v:reinforcements.length,l:'Reinforcements'},{v:contradictions.length,l:'Contradictions'},{v:(L5.extensions||[]).length,l:'Extensions'},{v:totalScanned,l:'Transcripts Scanned'},{v:(L2.validated_disappointments||[]).length,l:'Validated'}].forEach(function(s){h+='<div class="stat-card"><div class="stat-value">'+s.v+'</div><div class="stat-label">'+s.l+'</div></div>';});
  h+='</div>';
  if(L3.opportunity_thesis){h+='<div class="section-subtitle" style="margin-top:24px;">Opportunity Thesis</div><p class="narrative-block">'+esc(L3.opportunity_thesis)+'</p>';}
  /* Coverage map in overview */
  if(L5.coverage_map&&L5.coverage_map.phases){
    h+='<div class="section-subtitle" style="margin-top:24px;">Journey Phase Coverage</div><div class="coverage-grid">';
    Object.entries(L5.coverage_map.phases).forEach(function(entry){
      var phase=entry[0], info=entry[1];
      var cov=info.coverage_status||'none';
      var dsCount=(info.DS_elements||[]).length;
      var rbzCount=(info.RB_Z_elements||[]).length;
      var rbaCount=(info.RB_A_elements||[]).length;
      var total=dsCount+rbzCount+rbaCount;
      h+='<div class="coverage-cell coverage-'+cov+'"><div class="phase-name">'+esc(phase.replace(/_/g,' '))+'</div><div class="count">'+total+'</div><div class="level">'+esc(cov.replace(/_/g,' '))+'</div></div>';
    });
    h+='</div>';
  }
  if(L3.strategic_narrative&&L3.strategic_narrative.the_beer_sommelier){h+='<div class="section-subtitle" style="margin-top:24px;">Strategic Narrative: The Beer Sommelier</div><p class="narrative-block">'+esc(L3.strategic_narrative.the_beer_sommelier)+'</p>';}
  h+='</div>';
  c.innerHTML=h;
})();

/* ══════════════════════════ LAYER 0 ══════════════════════════ */
(function(){
  const c=document.getElementById('content-layer-0');
  let h='<h2 class="section-title">Layer 0: Competitor Journey Map</h2>';
  const ov=L0.competitor_overview;
  if(ov){
    h+='<div class="element-card"><div class="element-card-header"><h3>'+esc(lens.competitor||'Competitor')+' &mdash; '+esc(ov.category||'')+'</h3></div>';
    h+='<p style="font-size:14px;color:var(--text-description);margin-bottom:10px;line-height:1.6;"><strong>Primary Strength:</strong> '+esc(ov.primary_strength)+'</p>';
    h+='<p style="font-size:14px;color:var(--text-description);margin-bottom:10px;line-height:1.6;"><strong>Business Model:</strong> '+esc(ov.business_model)+'</p>';
    h+='<p style="font-size:14px;color:var(--text-description);margin-bottom:10px;line-height:1.6;"><strong>User Base:</strong> '+esc(ov.user_base)+'</p>';
    h+='<p style="font-size:14px;color:var(--text-description);margin-bottom:10px;line-height:1.6;"><strong>Brand Perception:</strong> '+esc(ov.brand_perception)+'</p>';
    h+='</div>';
  }
  if(L0.phases){
    var phaseKeys=['discovery','search','listing_evaluation','booking_proposal','communication','active_stay','post_stay','retention'];
    phaseKeys.forEach(function(key){
      var p=L0.phases[key];
      if(!p)return;
      h+='<div class="phase-card"><h4>'+esc(key.replace(/_/g,' '))+'</h4>';
      h+='<span class="quality-badge quality-'+(p.quality_level||'adequate')+'">'+esc(p.quality_level||'N/A')+'</span>';
      h+='<p style="margin-top:8px;font-size:14px;color:var(--text-description);line-height:1.6;"><strong>What they do:</strong> '+esc(p.what_they_do)+'</p>';
      h+='<p style="margin-top:8px;font-size:14px;color:var(--text-description);line-height:1.6;"><strong>Framework Analysis:</strong> '+esc(p.framework_analysis)+'</p>';
      if(p.what_nobody_in_category_does){
        h+='<div class="coffee-test" style="margin-top:10px;"><div class="coffee-test-label">What Nobody in the Category Does</div>'+esc(p.what_nobody_in_category_does)+'</div>';
      }
      /* Evidence */
      var evi=p.evidence||[];
      if(evi.length>0){
        var eviHtml=evi.map(function(ev){
          return '<div class="evidence-item"><div class="source">'+esc(ev.source)+' <span style="font-weight:400;color:var(--text-gray);">('+esc(ev.type||'')+')</span></div>'+(ev.observation?'<div class="quote">"'+esc(ev.observation)+'"</div>':'')+(ev.framework_interpretation?'<div class="insight">'+esc(ev.framework_interpretation)+'</div>':'')+'</div>';
        }).join('');
        h+='<div style="margin-top:12px;"><button class="evidence-toggle">Show evidence ('+evi.length+')</button><div class="evidence-list">'+eviHtml+'</div></div>';
      }
      h+='</div>';
    });
  }
  if(L0.category_blind_spots&&L0.category_blind_spots.length){
    h+='<div class="section-subtitle" style="margin-top:28px;">Category Blind Spots</div>';
    L0.category_blind_spots.forEach(function(bs){
      h+='<div class="blind-spot-card"><h4>'+esc(bs.blind_spot||bs.title||'')+'</h4>';
      h+='<p><strong>Why nobody tries:</strong> '+esc(bs.why_nobody_tries||bs.explanation||'')+'</p>';
      if(bs.framework_insight){h+='<p style="margin-top:6px;"><strong>Framework insight:</strong> '+esc(bs.framework_insight)+'</p>';}
      if(bs.christensen_prediction){h+='<p style="margin-top:6px;"><strong>Christensen prediction:</strong> '+esc(bs.christensen_prediction)+'</p>';}
      if(bs.signature_potential){h+='<span class="sig-badge" style="margin-top:8px;">Signature potential: '+esc(bs.signature_potential)+'</span>';}
      h+='</div>';
    });
  }
  if(L0.split_lease_phase_mapping){
    h+='<div class="section-subtitle" style="margin-top:28px;">Split Lease Phase Mapping</div>';
    h+='<div class="element-card"><p class="narrative-block">'+esc(typeof L0.split_lease_phase_mapping==='string'?L0.split_lease_phase_mapping:JSON.stringify(L0.split_lease_phase_mapping,null,2))+'</p></div>';
  }
  c.innerHTML=h;
})();

/* ══════════════════════════ LAYER 1 ══════════════════════════ */
(function(){
  const c=document.getElementById('content-layer-1');
  let h='<h2 class="section-title">Layer 1: Disappointments <span style="font-size:14px;color:var(--text-gray);font-weight:400;">('+(L1.disappointments||[]).length+' found)</span></h2>';
  if(L1.disappointment_summary){h+='<div class="element-card"><p class="narrative-block">'+esc(L1.disappointment_summary)+'</p></div>';}
  (L1.disappointments||[]).forEach(function(d){
    var evi=(d.evidence||[]).map(function(ev){
      return '<div class="evidence-item"><div class="source">'+esc(ev.source)+'</div>'+(ev.observation?'<div class="quote">"'+esc(ev.observation)+'"</div>':'')+(ev.framework_interpretation?'<div class="insight">'+esc(ev.framework_interpretation)+'</div>':'')+'</div>';
    }).join('');
    var ec=(d.evidence||[]).length;
    var sev=d.severity||{};
    h+='<div class="element-card">';
    h+='<div class="element-card-header"><h3>'+esc(d.title)+'</h3><span class="type-badge type-'+(d.type||'')+'">'+esc((d.type||'').replace(/_/g,' '))+'</span></div>';
    h+='<div class="severity-row">';
    h+='<span class="severity-pill">Phase: '+esc((d.competitor_phase||'').replace(/_/g,' '))+'</span>';
    if(sev.frequency){h+='<span class="severity-pill">Freq: '+esc(typeof sev.frequency==='string'?sev.frequency.substring(0,60):sev.frequency)+'</span>';}
    if(sev.emotional_weight){h+='<span class="severity-pill">Impact: '+esc(typeof sev.emotional_weight==='string'?sev.emotional_weight.substring(0,40):sev.emotional_weight)+'</span>';}
    if(sev.competitive_openness){h+='<span class="severity-pill">Openness: '+esc(typeof sev.competitive_openness==='string'?sev.competitive_openness.substring(0,50):sev.competitive_openness)+'</span>';}
    h+='</div>';
    h+='<div class="ps-grid"><div class="ps-box problem"><label>What Happens Now</label>'+esc(d.what_happens_now)+'</div><div class="ps-box solution"><label>Why It Matters Psychologically</label>'+esc(d.why_it_matters_psychologically)+'</div></div>';
    if(d.why_its_not_a_bug){h+='<p style="font-size:13px;color:var(--text-description);margin-bottom:12px;line-height:1.6;"><strong>Why it\'s not a bug:</strong> '+esc(d.why_its_not_a_bug)+'</p>';}
    if(d.who_feels_it){h+='<p style="font-size:13px;color:var(--text-description);margin-bottom:12px;line-height:1.6;"><strong>Who feels it:</strong> '+esc(d.who_feels_it)+'</p>';}
    if(d.the_coffee_test){h+='<div class="coffee-test"><div class="coffee-test-label">The Coffee Test</div>'+esc(d.the_coffee_test)+'</div>';}
    if(ec>0){h+='<div style="margin-top:16px;"><button class="evidence-toggle">Show evidence ('+ec+')</button><div class="evidence-list">'+evi+'</div></div>';}
    h+='</div>';
  });
  if(L1.disappointment_clusters&&L1.disappointment_clusters.length){
    h+='<div class="section-subtitle" style="margin-top:28px;">Disappointment Clusters</div>';
    L1.disappointment_clusters.forEach(function(cl){
      h+='<div class="cluster-card"><h4>'+esc(cl.cluster_name)+'</h4>';
      if(cl.disappointment_ids){h+='<div class="phase-tags">'+cl.disappointment_ids.map(function(id){return '<span class="phase-tag">'+esc(id)+'</span>';}).join('')+'</div>';}
      h+='<p style="font-size:13px;color:var(--text-description);line-height:1.6;margin-bottom:8px;">'+esc(cl.pattern)+'</p>';
      if(cl.signature_potential){h+='<span class="sig-badge">Signature potential: '+esc(cl.signature_potential)+'</span>';}
      h+='</div>';
    });
  }
  c.innerHTML=h;
})();

/* ══════════════════════════ LAYER 2 ══════════════════════════ */
(function(){
  const c=document.getElementById('content-layer-2');
  let h='<h2 class="section-title">Layer 2: Transcript Cross-Reference</h2>';
  if(L2.crossref_summary){h+='<div class="element-card"><p class="narrative-block">'+esc(L2.crossref_summary)+'</p></div>';}
  var scan=L2.transcripts_scanned||{};
  h+='<div class="element-card"><div class="section-subtitle">Scan Statistics</div><div class="stat-grid">';
  h+='<div class="stat-card"><div class="stat-value">'+(scan.host_transcripts_total||0)+'</div><div class="stat-label">Host Transcripts</div></div>';
  h+='<div class="stat-card"><div class="stat-value">'+(scan.guest_transcripts_total||0)+'</div><div class="stat-label">Guest Transcripts</div></div>';
  h+='<div class="stat-card"><div class="stat-value">'+(scan.total_files_scanned||0)+'</div><div class="stat-label">Total Scanned</div></div>';
  h+='<div class="stat-card"><div class="stat-value">'+(scan.search_passes_conducted||0)+'</div><div class="stat-label">Search Passes</div></div>';
  h+='<div class="stat-card"><div class="stat-value">'+(scan.zillow_direct_mentions||0)+'</div><div class="stat-label">Zillow Mentions</div></div>';
  if(scan.competitor_mentions){
    var cmCount=0;
    if(typeof scan.competitor_mentions==='object'){Object.values(scan.competitor_mentions).forEach(function(v){cmCount+=v;});}else{cmCount=scan.competitor_mentions;}
    h+='<div class="stat-card"><div class="stat-value">'+cmCount+'</div><div class="stat-label">Other Competitor Mentions</div></div>';
  }
  h+='</div></div>';
  /* Validated disappointments */
  (L2.validated_disappointments||[]).forEach(function(vd){
    var vc=vd.validation_strength==='strong'?'var(--signal-success)':vd.validation_strength==='moderate'?'var(--signal-warn)':'var(--signal-danger)';
    var vb=vd.validation_strength==='strong'?'var(--signal-success-bg)':vd.validation_strength==='moderate'?'var(--signal-warn-bg)':'var(--signal-danger-bg)';
    h+='<div class="element-card"><div class="element-card-header"><h3>'+esc(vd.title||vd.disappointment_id)+'</h3><span class="severity-pill" style="background:'+vb+';color:'+vc+';">'+esc(vd.validation_strength)+' ('+esc(vd.transcript_matches)+' matches)</span></div>';
    /* Evidence items */
    (vd.evidence||[]).forEach(function(ev){
      h+='<div class="transcript-quote"><div class="speaker">'+esc(ev.transcript)+(ev.timestamp?' @ '+esc(ev.timestamp):'')+'</div><div class="text">"'+esc(ev.user_language)+'"</div><div class="connection">'+esc(ev.connection)+'</div></div>';
    });
    if(vd.synthesis){h+='<p style="font-size:13px;color:var(--text-description);margin-top:12px;line-height:1.6;"><strong>Synthesis:</strong> '+esc(vd.synthesis)+'</p>';}
    h+='</div>';
  });
  /* New discoveries */
  if(L2.new_discoveries&&L2.new_discoveries.length){
    h+='<div class="section-subtitle" style="margin-top:28px;">New Discoveries</div>';
    L2.new_discoveries.forEach(function(nd){
      h+='<div class="blind-spot-card"><h4>'+esc(nd.title||nd.id)+'</h4>';
      if(nd.why_layer_1_missed_it){h+='<p style="font-size:13px;color:var(--text-description);line-height:1.6;margin-bottom:8px;"><strong>Why Layer 1 missed it:</strong> '+esc(nd.why_layer_1_missed_it)+'</p>';}
      if(nd.christensen_connection){h+='<p style="font-size:13px;color:var(--text-description);line-height:1.6;margin-bottom:8px;"><strong>Christensen connection:</strong> '+esc(nd.christensen_connection)+'</p>';}
      (nd.evidence||[]).forEach(function(ev){
        h+='<div class="transcript-quote"><div class="speaker">'+esc(ev.transcript)+(ev.timestamp?' @ '+esc(ev.timestamp):'')+'</div><div class="text">"'+esc(ev.user_language)+'"</div></div>';
      });
      if(nd.severity){h+='<span class="sig-badge" style="margin-top:8px;">Severity: '+esc(nd.severity)+'</span> ';}
      if(nd.who_feels_it){h+='<span class="severity-pill" style="margin-top:8px;">Who: '+esc(nd.who_feels_it)+'</span>';}
      h+='</div>';
    });
  }
  /* Library connections */
  if(L2.library_connections&&L2.library_connections.length){
    h+='<div class="section-subtitle" style="margin-top:28px;">Library Connections</div>';
    L2.library_connections.forEach(function(lc){
      h+='<div class="phase-card"><p style="font-size:14px;color:var(--text-description);line-height:1.6;">'+esc(typeof lc==='string'?lc:(lc.connection||lc.description||JSON.stringify(lc)))+'</p></div>';
    });
  }
  c.innerHTML=h;
})();

/* ══════════════════════════ LAYER 3 ══════════════════════════ */
(function(){
  const c=document.getElementById('content-layer-3');
  let h='<h2 class="section-title">Layer 3: Opportunities <span style="font-size:14px;color:var(--text-gray);font-weight:400;">('+(L3.opportunities||[]).length+' ranked)</span></h2>';
  if(L3.opportunity_thesis){h+='<div class="element-card"><p class="narrative-block">'+esc(L3.opportunity_thesis)+'</p></div>';}
  /* Build ranking map using opportunity_id */
  var rm={};
  (L3.opportunity_ranking||[]).forEach(function(r){rm[r.opportunity_id||r.id]=r;});
  (L3.opportunities||[]).forEach(function(opp){
    var rank=rm[opp.id];
    var score=opp.opportunity_score||{};
    h+='<div class="opp-card"><div class="element-card-header"><h3>'+(rank?'<span class="opp-rank">'+rank.rank+'</span>':'')+esc(opp.title)+'</h3></div>';
    /* Phase tags */
    var phases=[];
    if(opp.split_lease_phases){
      if(opp.split_lease_phases.host){phases=phases.concat(opp.split_lease_phases.host.map(function(p){return 'host: '+p;}));}
      if(opp.split_lease_phases.guest){phases=phases.concat(opp.split_lease_phases.guest.map(function(p){return 'guest: '+p;}));}
    }
    if(phases.length>0){h+='<div class="phase-tags">'+phases.map(function(p){return '<span class="phase-tag">'+esc(p.replace(/_/g,' '))+'</span>';}).join('')+'</div>';}
    /* Based on */
    if(opp.based_on_disappointments&&opp.based_on_disappointments.length){h+='<div class="phase-tags" style="margin-bottom:8px;">'+opp.based_on_disappointments.map(function(d){return '<span class="severity-pill">'+esc(d)+'</span>';}).join('')+'</div>';}
    h+='<p class="narrative-block" style="margin-bottom:16px;">'+esc(opp.the_signature)+'</p>';
    /* Score grid */
    h+='<div class="section-subtitle">Opportunity Score: '+esc(score.total||'')+'/'+esc(score.max_possible||60)+'</div><div class="opp-score-grid">';
    ['signature_potential','category_gap','user_validation','framework_support','feasibility','alignment'].forEach(function(k){
      if(score[k]!==undefined){h+='<div class="opp-score-cell"><div class="label">'+esc(k.replace(/_/g,' '))+'</div><div class="value">'+esc(score[k])+'/10</div></div>';}
    });
    h+='</div>';
    if(score.score_rationale){h+='<p style="font-size:13px;color:var(--text-gray);margin-bottom:16px;line-height:1.6;">'+esc(score.score_rationale)+'</p>';}
    /* Why competitors won't copy */
    var wcc=opp.why_competitors_wont_copy;
    if(wcc){
      h+='<div class="ps-grid" style="margin-top:16px;">';
      if(typeof wcc==='string'){
        h+='<div class="ps-box problem" style="grid-column:1/-1;"><label>Why Competitors Won\'t Copy</label>'+esc(wcc)+'</div>';
      } else {
        h+='<div class="ps-box problem"><label>Why Competitors Won\'t Copy</label>';
        if(wcc.christensen_chapter){h+='<p style="font-size:12px;color:var(--signal-danger);font-weight:600;margin-bottom:6px;">'+esc(wcc.christensen_chapter)+'</p>';}
        h+=esc(wcc.structural_barrier);
        if(wcc.competitive_moat_timeline){h+='<p style="margin-top:8px;font-size:12px;color:var(--text-gray);"><strong>Moat timeline:</strong> '+esc(wcc.competitive_moat_timeline)+'</p>';}
        h+='</div>';
      }
      /* Behavioral framework */
      var bf=opp.behavioral_framework_case;
      if(bf){
        h+='<div class="ps-box solution"><label>Behavioral Framework Case</label>';
        if(typeof bf==='string'){
          h+=esc(bf);
        } else {
          if(bf.framework){h+='<p style="font-size:12px;color:var(--signal-success);font-weight:600;margin-bottom:6px;">'+esc(bf.framework)+'</p>';}
          h+=esc(bf.mechanism);
          if(bf.user_psychology){h+='<p style="margin-top:8px;font-size:12px;color:var(--text-gray);"><strong>User psychology:</strong> '+esc(bf.user_psychology)+'</p>';}
        }
        h+='</div>';
      }
      h+='</div>';
    }
    /* User evidence */
    var ue=opp.user_evidence;
    if(ue){
      h+='<div class="coffee-test"><div class="coffee-test-label">User Evidence ('+esc(ue.transcript_matches||0)+' transcript matches)</div>';
      if(ue.strongest_signals&&ue.strongest_signals.length){
        h+='<ul style="padding-left:18px;font-size:13px;color:var(--text-description);line-height:1.8;font-style:normal;">';
        ue.strongest_signals.forEach(function(sig){h+='<li>'+esc(sig)+'</li>';});
        h+='</ul>';
      }
      if(ue.discovery_channel_evidence){h+='<p style="font-size:12px;color:var(--text-gray);margin-top:8px;font-style:normal;"><strong>Discovery channel:</strong> '+esc(ue.discovery_channel_evidence)+'</p>';}
      h+='</div>';
    }
    /* Anti-patterns */
    if(opp.anti_patterns&&opp.anti_patterns.length){
      h+='<div style="margin-top:12px;"><div class="section-subtitle" style="color:var(--signal-danger);">Anti-Patterns</div>';
      opp.anti_patterns.forEach(function(a){
        if(typeof a==='string'){
          h+='<div class="evidence-item"><div class="insight">'+esc(a)+'</div></div>';
        } else {
          h+='<div class="evidence-item"><div class="source" style="color:var(--signal-danger);">'+esc(a.anti_pattern)+'</div><div class="insight">'+esc(a.why_it_fails)+'</div></div>';
        }
      });
      h+='</div>';
    }
    /* Existing library overlap */
    if(opp.existing_library_overlap){
      var elo=opp.existing_library_overlap;
      h+='<div style="margin-top:12px;"><div class="section-subtitle">Library Overlap</div>';
      h+='<div class="phase-tags">';
      if(elo.overlapping_elements){elo.overlapping_elements.forEach(function(e){h+='<span class="phase-tag">'+esc(e)+'</span>';});}
      h+='</div>';
      if(elo.gap_assessment){h+='<p style="font-size:13px;color:var(--text-description);margin-top:8px;line-height:1.6;">'+esc(elo.gap_assessment)+'</p>';}
      if(elo.coverage_level){h+='<span class="severity-pill" style="margin-top:8px;">Coverage: '+esc(elo.coverage_level)+'</span>';}
      h+='</div>';
    }
    /* Ranking rationale */
    if(rank&&rank.ranking_rationale){h+='<p style="font-size:13px;color:var(--text-gray);margin-top:12px;line-height:1.6;"><strong>Ranking rationale:</strong> '+esc(rank.ranking_rationale)+'</p>';}
    h+='</div>';
  });
  /* Strategic narrative */
  if(L3.strategic_narrative){
    var sn=L3.strategic_narrative;
    h+='<div class="element-card"><div class="section-subtitle">Strategic Narrative</div>';
    if(sn.the_beer_sommelier){h+='<div class="coffee-test" style="margin-bottom:16px;"><div class="coffee-test-label">The Beer Sommelier</div>'+esc(sn.the_beer_sommelier)+'</div>';}
    if(sn.why_zillow_cannot_respond){h+='<div class="ps-box problem" style="margin-bottom:16px;"><label>Why Zillow Cannot Respond</label>'+esc(sn.why_zillow_cannot_respond)+'</div>';}
    if(sn.execution_sequence){h+='<div class="ps-box solution" style="margin-bottom:16px;"><label>Execution Sequence</label>'+esc(sn.execution_sequence)+'</div>';}
    if(sn.the_christensen_prediction){h+='<div class="blind-spot-card"><h4>The Christensen Prediction</h4><p style="font-size:14px;color:var(--text-description);line-height:1.6;">'+esc(sn.the_christensen_prediction)+'</p></div>';}
    h+='</div>';
  }
  c.innerHTML=h;
})();

/* ══════════════════════════ LAYER 4 ══════════════════════════ */
(function(){
  const c=document.getElementById('content-layer-4');
  let h='<h2 class="section-title">Layer 4: UI Elements <span style="font-size:14px;color:var(--text-gray);font-weight:400;">('+(L4.elements||[]).length+' elements)</span></h2>';
  (L4.elements||[]).forEach(function(el){
    h+='<div class="ui-preview-card"><div class="element-card-header"><h3>'+esc(el.name)+'</h3><span class="type-badge type-'+(el.category||'')+'">'+esc(el.category||'')+'</span><span class="priority-badge priority-'+el.priority+'">P'+esc(el.priority)+'</span></div>';
    h+='<div class="phase-tags">'+(el.journey_phases||[]).map(function(p){return '<span class="phase-tag">'+esc(p.replace(/_/g,' '))+'</span>';}).join('')+'</div>';
    if(el.source_disappointments&&el.source_disappointments.length){
      h+='<div class="phase-tags" style="margin-bottom:8px;">'+el.source_disappointments.map(function(d){return '<span class="severity-pill">'+esc(d)+'</span>';}).join('')+'</div>';
    }
    h+='<p style="font-size:14px;color:var(--text-description);line-height:1.6;margin-bottom:12px;"><strong>Problem:</strong> '+esc(el.problem_it_solves)+'</p>';
    h+='<p style="font-size:14px;color:var(--text-description);line-height:1.6;margin-bottom:12px;"><strong>Signature:</strong> '+esc(el.why_this_is_a_signature)+'</p>';
    h+='<p style="font-size:14px;color:var(--text-description);line-height:1.6;margin-bottom:16px;">'+esc(el.description)+'</p>';
    /* Live preview iframe */
    if(el.html_css){
      var blob='data:text/html;charset=utf-8,'+encodeURIComponent(el.html_css);
      h+='<div class="section-subtitle">Live Preview</div><iframe src="'+blob+'" sandbox="allow-scripts" loading="lazy" style="width:100%;min-height:420px;border:1px solid var(--border-color);border-radius:var(--radius-md);background:var(--bg-light);"></iframe>';
    }
    /* Before/After */
    if(el.before_after){
      var ba=el.before_after;
      h+='<div class="section-subtitle" style="margin-top:16px;">Before / After</div><div class="before-after">';
      h+='<div class="before"><label>Before ('+esc(ba.before.platform)+')</label><p style="margin-bottom:4px;">'+esc(ba.before.experience)+'</p><p style="font-size:12px;color:var(--signal-danger);font-style:italic;">'+esc(ba.before.emotion)+'</p></div>';
      h+='<div class="after"><label>After ('+esc(ba.after.platform)+')</label><p style="margin-bottom:4px;">'+esc(ba.after.experience)+'</p><p style="font-size:12px;color:var(--signal-success);font-style:italic;">'+esc(ba.after.emotion)+'</p></div>';
      h+='</div>';
    }
    /* Implements principles */
    if(el.implements_principles&&el.implements_principles.length){
      h+='<div class="phase-tags" style="margin-top:12px;">'+el.implements_principles.map(function(p){return '<span class="phase-tag">'+esc(p)+'</span>';}).join('')+'</div>';
    }
    if(el.effort){h+='<span class="severity-pill" style="margin-top:8px;">Effort: '+esc(el.effort)+'</span>';}
    h+='</div>';
  });
  c.innerHTML=h;
})();

/* ══════════════════════════ LAYER 5 ══════════════════════════ */
(function(){
  const c=document.getElementById('content-layer-5');
  let h='<h2 class="section-title">Layer 5: Coherence Report</h2>';

  /* Reinforcements */
  if(L5.reinforcements&&L5.reinforcements.length){
    h+='<div class="coherence-section"><h3>Reinforcements ('+L5.reinforcements.length+')</h3>';
    L5.reinforcements.forEach(function(r){
      h+='<div class="reinforcement-card"><div class="card-label" style="color:var(--signal-success);">'+esc(r.reinforcement_type||'Reinforcement').replace(/_/g,' ')+'</div>';
      h+='<p><strong>'+esc(r.new_element_name||r.new_element_id)+'</strong></p>';
      if(r.library_elements_reinforced&&r.library_elements_reinforced.length){
        h+='<p style="font-size:12px;color:var(--text-gray);margin-top:4px;">Reinforces: '+r.library_elements_reinforced.map(function(e){return esc(e);}).join(', ')+'</p>';
      }
      h+='<p style="font-size:13px;color:var(--text-description);margin-top:8px;line-height:1.6;">'+esc(r.analysis)+'</p>';
      if(r.why_this_matters){h+='<p style="font-size:12px;color:var(--text-gray);margin-top:6px;line-height:1.5;"><strong>Why this matters:</strong> '+esc(r.why_this_matters)+'</p>';}
      h+='<span class="strength-badge strength-'+(r.confidence==='very_high'?'gold':'silver')+'" style="margin-top:6px;">Confidence: '+esc(r.confidence||'')+'</span>';
      h+='</div>';
    });
    h+='</div>';
  }

  /* Contradictions */
  if(L5.contradictions&&L5.contradictions.length){
    h+='<div class="coherence-section"><h3>Contradictions ('+L5.contradictions.length+')</h3>';
    L5.contradictions.forEach(function(ct){
      h+='<div class="contradiction-card"><div class="card-label" style="color:var(--signal-danger);">'+esc(ct.contradiction_type||'contradiction').replace(/_/g,' ')+'</div>';
      h+='<p><strong>'+esc(ct.new_element_name||ct.new_element_id)+'</strong></p>';
      if(ct.library_elements_in_tension&&ct.library_elements_in_tension.length){
        h+='<p style="font-size:12px;color:var(--text-gray);margin-top:4px;">In tension with: '+ct.library_elements_in_tension.map(function(e){return esc(e);}).join(', ')+'</p>';
      }
      h+='<p style="font-size:13px;color:var(--text-description);margin-top:8px;line-height:1.6;">'+esc(ct.analysis)+'</p>';
      if(ct.resolution){h+='<p style="font-size:13px;color:var(--text-description);margin-top:6px;line-height:1.6;"><strong>Resolution:</strong> '+esc(ct.resolution)+'</p>';}
      if(ct.action_required){h+='<p style="font-size:12px;color:var(--signal-danger);margin-top:6px;font-family:Inter,sans-serif;font-weight:600;">Action: '+esc(ct.action_required)+'</p>';}
      h+='<span class="strength-badge strength-'+(ct.confidence==='very_high'?'gold':'silver')+'" style="margin-top:6px;">Confidence: '+esc(ct.confidence||'')+'</span>';
      h+='</div>';
    });
    h+='</div>';
  }

  /* Extensions */
  if(L5.extensions&&L5.extensions.length){
    h+='<div class="coherence-section"><h3>Extensions ('+L5.extensions.length+')</h3>';
    L5.extensions.forEach(function(ext){
      h+='<div class="extension-card"><div class="card-label" style="color:var(--signal-info);">'+esc(ext.extension_type||'extension').replace(/_/g,' ')+'</div>';
      h+='<p><strong>'+esc(ext.new_element_name||ext.new_element_id)+'</strong></p>';
      if(ext.library_gap_filled){h+='<p style="font-size:13px;color:var(--text-description);margin-top:8px;line-height:1.6;"><strong>Gap filled:</strong> '+esc(ext.library_gap_filled)+'</p>';}
      if(ext.why_the_library_missed_it){h+='<p style="font-size:12px;color:var(--text-gray);margin-top:6px;line-height:1.5;">'+esc(ext.why_the_library_missed_it)+'</p>';}
      if(ext.integration_recommendation){h+='<p style="font-size:12px;color:var(--signal-info);margin-top:6px;font-family:Inter,sans-serif;font-weight:600;">Integration: '+esc(ext.integration_recommendation)+'</p>';}
      h+='<span class="strength-badge strength-'+(ext.confidence==='high'||ext.confidence==='very_high'?'gold':'silver')+'" style="margin-top:6px;">Confidence: '+esc(ext.confidence||'')+'</span>';
      h+='</div>';
    });
    h+='</div>';
  }

  /* Cross-process insights */
  if(L5.cross_process_insights&&L5.cross_process_insights.length){
    h+='<div class="coherence-section"><h3>Cross-Process Insights ('+L5.cross_process_insights.length+')</h3>';
    L5.cross_process_insights.forEach(function(cpi){
      h+='<div class="blind-spot-card"><h4>'+esc(cpi.title)+'</h4>';
      if(cpi.strength){h+='<span class="strength-badge strength-'+cpi.strength+'" style="margin-bottom:8px;">'+esc(cpi.strength)+'</span> ';}
      if(cpi.processes_converging&&cpi.processes_converging.length){
        h+='<div class="phase-tags" style="margin-bottom:8px;">'+cpi.processes_converging.map(function(p){return '<span class="phase-tag">'+esc(p)+'</span>';}).join('')+'</div>';
      }
      if(cpi.convergence_evidence){h+='<p style="font-size:13px;color:var(--text-description);line-height:1.6;margin-bottom:8px;"><strong>Convergence evidence:</strong> '+esc(cpi.convergence_evidence)+'</p>';}
      if(cpi.combined_insight){h+='<p style="font-size:14px;color:var(--text-dark);line-height:1.6;margin-bottom:8px;">'+esc(cpi.combined_insight)+'</p>';}
      if(cpi.action){h+='<p style="font-size:12px;color:var(--secondary-purple);margin-top:6px;font-family:Inter,sans-serif;font-weight:600;">Action: '+esc(cpi.action)+'</p>';}
      h+='</div>';
    });
    h+='</div>';
  }

  /* Token compliance */
  if(L5.token_compliance){
    var tc=L5.token_compliance;
    h+='<div class="coherence-section"><h3>Token Compliance</h3><div class="element-card">';
    h+='<div class="severity-row"><span class="severity-pill" style="background:'+(tc.overall_status==='compliant'?'var(--signal-success-bg)':'var(--signal-warn-bg)')+';color:'+(tc.overall_status==='compliant'?'var(--signal-success)':'var(--signal-warn)')+';">'+esc(tc.overall_status||'')+'</span></div>';
    h+='<p style="font-size:13px;color:var(--text-description);line-height:1.6;">'+esc(tc.summary)+'</p>';
    if(tc.specific_violations&&tc.specific_violations.length){
      h+='<div style="margin-top:12px;overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:12px;"><thead><tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left;padding:8px;font-family:Inter,sans-serif;color:var(--text-gray);">Violation</th><th style="text-align:left;padding:8px;font-family:Inter,sans-serif;color:var(--text-gray);">Token Value</th><th style="text-align:left;padding:8px;font-family:Inter,sans-serif;color:var(--text-gray);">Element Value</th><th style="text-align:left;padding:8px;font-family:Inter,sans-serif;color:var(--text-gray);">Severity</th></tr></thead><tbody>';
      tc.specific_violations.forEach(function(v){
        var sColor=v.severity==='high'?'var(--signal-danger)':v.severity==='medium'?'var(--signal-warn)':'var(--text-gray)';
        h+='<tr style="border-bottom:1px solid var(--border-light);"><td style="padding:8px;font-family:Inter,sans-serif;font-weight:600;color:var(--primary-purple);">'+esc(v.violation)+'</td><td style="padding:8px;color:var(--text-description);">'+esc(v.token_value)+'</td><td style="padding:8px;color:var(--text-description);">'+esc(v.element_value)+'</td><td style="padding:8px;color:'+sColor+';font-weight:600;">'+esc(v.severity)+'</td></tr>';
      });
      h+='</tbody></table></div>';
    }
    if(tc.recommended_process){h+='<p style="font-size:12px;color:var(--text-gray);margin-top:8px;"><strong>Recommended:</strong> '+esc(tc.recommended_process)+'</p>';}
    h+='</div></div>';
  }

  /* Coverage map */
  if(L5.coverage_map&&L5.coverage_map.phases){
    h+='<div class="coherence-section"><h3>Journey Coverage Map</h3>';
    if(L5.coverage_map.description){h+='<p style="font-size:13px;color:var(--text-gray);margin-bottom:16px;line-height:1.6;">'+esc(L5.coverage_map.description)+'</p>';}
    Object.entries(L5.coverage_map.phases).forEach(function(entry){
      var phase=entry[0], info=entry[1];
      var cov=info.coverage_status||'none';
      var bgClass='coverage-'+cov;
      h+='<div class="phase-card" style="border-left:4px solid '+(cov.indexOf('triple')>=0?'var(--signal-success)':cov.indexOf('double')>=0?'var(--signal-info)':cov==='reverse_benchmark_only'?'var(--accent-purple)':'var(--signal-warn)')+';">';
      h+='<h4 style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">'+esc(phase.replace(/_/g,' '))+' <span class="severity-pill '+bgClass+'">'+esc(cov.replace(/_/g,' '))+'</span></h4>';
      if(info.DS_elements&&info.DS_elements.length){h+='<p style="font-size:12px;color:var(--text-gray);margin-top:6px;"><strong>Design Stack:</strong> '+info.DS_elements.map(function(e){return esc(e);}).join('; ')+'</p>';}
      if(info.RB_Z_elements&&info.RB_Z_elements.length){h+='<p style="font-size:12px;color:var(--secondary-purple);margin-top:4px;"><strong>RB Zillow:</strong> '+info.RB_Z_elements.map(function(e){return esc(e);}).join('; ')+'</p>';}
      if(info.RB_A_elements&&info.RB_A_elements.length){h+='<p style="font-size:12px;color:var(--accent-purple);margin-top:4px;"><strong>RB Airbnb:</strong> '+info.RB_A_elements.map(function(e){return esc(e);}).join('; ')+'</p>';}
      if(info.gap_notes){h+='<p style="font-size:12px;color:var(--text-description);margin-top:6px;line-height:1.5;">'+esc(info.gap_notes)+'</p>';}
      h+='</div>';
    });
    if(L5.coverage_map.overall_assessment){h+='<div class="element-card"><p class="narrative-block">'+esc(L5.coverage_map.overall_assessment)+'</p></div>';}
    h+='</div>';
  }

  /* Next run recommendations */
  if(L5.next_run_recommendations&&L5.next_run_recommendations.length){
    h+='<div class="coherence-section"><h3>Next Run Recommendations</h3>';
    L5.next_run_recommendations.forEach(function(nr){
      h+='<div class="phase-card"><h4 style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">'+esc(nr.recommendation)+' <span class="priority-badge priority-'+nr.priority+'">'+esc(nr.priority)+'</span></h4>';
      h+='<p style="font-size:13px;color:var(--text-gray);line-height:1.6;">'+esc(nr.rationale)+'</p>';
      h+='</div>';
    });
    h+='</div>';
  }

  c.innerHTML=h||'<div class="element-card"><p style="color:var(--text-light-gray);font-style:italic;">No coherence data.</p></div>';
})();
