const fs = require('fs');
const manifestPath = 'C:/Users/igor/OneDrive/Documents/design-stack/runs/manifest.json';

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Check if this run already exists
const existing = manifest.runs.find(r => r.run_id === '2026-02-13_1250');
if (existing) {
  console.log('Run already in manifest, updating...');
  Object.assign(existing, {
    status: 'complete',
    process_type: 'reverse-benchmark',
    competitor: 'airbnb',
    lens: {
      competitor: 'airbnb',
      book: 'Influence The Psychology of Persuasion - Robert Cialdini.pdf',
      book_chapters: 'Chapters 3-4: Commitment & Consistency + Social Proof'
    },
    summary: 'Airbnb reverse benchmark through Cialdini Chapters 3-4 (Commitment & Consistency + Social Proof). Identified 10 disappointments across 3 clusters: the Commitment Architecture Gap (booking as transaction not relationship), the Similarity Blindspot (mass social proof vs. people-like-you proof), and the Identity Void (no guest self-concept). Produced 6 UI elements: Mutual Pledge Card, People-Like-You Review Filter, Pre-Arrival Conversation Guide, Post-Review Forward Commitment Bridge, Stay Purpose Selector, and Commitment Reassurance Badge. 11 reinforcements with existing library elements confirmed cross-process validation.',
    element_count: 6,
    layers: {
      'competitor-mapping': 'runs/2026-02-13_1250/layer-0/competitor-journey.json',
      'disappointment-mining': 'runs/2026-02-13_1250/layer-1/disappointments.json',
      'transcript-crossref': 'runs/2026-02-13_1250/layer-2/crossref-insights.json',
      'opportunity-identification': 'runs/2026-02-13_1250/layer-3/opportunities.json',
      'element-specification': 'runs/2026-02-13_1250/layer-4/ui-elements.json',
      'coherence': 'runs/2026-02-13_1250/layer-5/coherence-report.json'
    },
    report_url: 'runs/2026-02-13_1250/report/index.html',
    library_url: 'runs/2026-02-13_1250/report/library-of-elements.html'
  });
} else {
  manifest.runs.push({
    run_id: '2026-02-13_1250',
    process_type: 'reverse-benchmark',
    date: '2026-02-13',
    status: 'complete',
    competitor: 'airbnb',
    lens: {
      competitor: 'airbnb',
      book: 'Influence The Psychology of Persuasion - Robert Cialdini.pdf',
      book_chapters: 'Chapters 3-4: Commitment & Consistency + Social Proof'
    },
    summary: 'Airbnb reverse benchmark through Cialdini Chapters 3-4 (Commitment & Consistency + Social Proof). Identified 10 disappointments across 3 clusters: the Commitment Architecture Gap (booking as transaction not relationship), the Similarity Blindspot (mass social proof vs. people-like-you proof), and the Identity Void (no guest self-concept). Produced 6 UI elements: Mutual Pledge Card, People-Like-You Review Filter, Pre-Arrival Conversation Guide, Post-Review Forward Commitment Bridge, Stay Purpose Selector, and Commitment Reassurance Badge. 11 reinforcements with existing library elements confirmed cross-process validation.',
    element_count: 6,
    layers: {
      'competitor-mapping': 'runs/2026-02-13_1250/layer-0/competitor-journey.json',
      'disappointment-mining': 'runs/2026-02-13_1250/layer-1/disappointments.json',
      'transcript-crossref': 'runs/2026-02-13_1250/layer-2/crossref-insights.json',
      'opportunity-identification': 'runs/2026-02-13_1250/layer-3/opportunities.json',
      'element-specification': 'runs/2026-02-13_1250/layer-4/ui-elements.json',
      'coherence': 'runs/2026-02-13_1250/layer-5/coherence-report.json'
    },
    report_url: 'runs/2026-02-13_1250/report/index.html',
    library_url: 'runs/2026-02-13_1250/report/library-of-elements.html'
  });
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('Manifest updated. Total runs:', manifest.runs.length);