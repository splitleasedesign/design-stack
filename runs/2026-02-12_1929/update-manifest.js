const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('runs/manifest.json', 'utf8'));

const newEntry = {
  "run_id": "2026-02-12_1929",
  "date": "2026-02-12",
  "status": "complete",
  "journey_type": "host",
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "summary": "Drew — Chelsea 1BR/1BA host ($2,000/month, $1,000 deposit, 4-month term) who found Split Lease through a friend, comfortable with shared living. Analyzed through Krug's Don't Make Me Think usability framework: self-evident navigation eliminating cognitive overhead, Billboard Design for scannable listing pages, visual affordance vocabulary making clickable elements unmistakable, trunk test for page identification, and reducing happy talk in favor of actionable content at every journey phase.",
  "element_count": 15,
  "principle_count": 33,
  "layers": {
    "journey_context": "runs/2026-02-12_1929/layer-0/journey-context.json",
    "works": "runs/2026-02-12_1929/layer-1/works-elements.json",
    "communicates": "runs/2026-02-12_1929/layer-2/communicates-elements.json",
    "looks": "runs/2026-02-12_1929/layer-3/looks-elements.json",
    "behaves": "runs/2026-02-12_1929/layer-4/behaves-elements.json",
    "feels": "runs/2026-02-12_1929/layer-5/feels-elements.json",
    "coherence": "runs/2026-02-12_1929/layer-6/coherence-report.json",
    "tests": "runs/2026-02-12_1929/layer-7/tests-elements.json",
    "ui_elements": "runs/2026-02-12_1929/layer-8/ui-elements.json"
  },
  "report_url": "runs/2026-02-12_1929/report/index.html",
  "library_url": "runs/2026-02-12_1929/report/library-of-elements.html"
};

manifest.runs.push(newEntry);
fs.writeFileSync('runs/manifest.json', JSON.stringify(manifest, null, 2));
console.log('Manifest updated: ' + manifest.runs.length + ' runs');
