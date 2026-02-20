const fs = require('fs');
const path = require('path');

const STACK_DIR = 'C:\\Users\\igor\\OneDrive\\Documents\\design-stack';
const RUN_DIR = path.join(STACK_DIR, 'runs', '2026-02-18_1000');

// Read template
let html = fs.readFileSync(path.join(STACK_DIR, 'templates', 'report-template.html'), 'utf8');

// Read run config
const config = JSON.parse(fs.readFileSync(path.join(RUN_DIR, 'run-config.json'), 'utf8'));

// Read layer outputs
const layerFiles = {
  0: 'layer-0/journey-context.json',
  1: 'layer-1/works-elements.json',
  2: 'layer-2/communicates-elements.json',
  3: 'layer-3/looks-elements.json',
  4: 'layer-4/behaves-elements.json',
  5: 'layer-5/feels-elements.json',
  6: 'layer-6/coherence-report.json',
  7: 'layer-7/tests-elements.json'
};

// Inject run config
html = html.replace(
  /<script id="run-config" type="application\/json">.*?<\/script>/s,
  `<script id="run-config" type="application/json">${JSON.stringify(config)}</script>`
);

// Inject each layer
for (const [num, file] of Object.entries(layerFiles)) {
  try {
    const data = fs.readFileSync(path.join(RUN_DIR, file), 'utf8');
    // Validate JSON
    JSON.parse(data);
    const regex = new RegExp(`<script id="data-layer-${num}" type="application/json">.*?</script>`, 's');
    html = html.replace(regex, `<script id="data-layer-${num}" type="application/json">${data}</script>`);
    console.log(`Injected layer ${num}`);
  } catch (e) {
    console.error(`Error with layer ${num}: ${e.message}`);
  }
}

// Update title
html = html.replace('<title>Design Stack v2 Report</title>', `<title>DS Report: 2026-02-18_1000 (Dana + Refactoring UI)</title>`);

// Write report
const reportDir = path.join(RUN_DIR, 'report');
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, 'index.html'), html, 'utf8');
console.log('Report saved to', path.join(reportDir, 'index.html'));
