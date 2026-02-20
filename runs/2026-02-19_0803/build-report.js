const fs = require('fs');
const path = require('path');

const RUN_DIR = __dirname;
const STACK_DIR = path.join(RUN_DIR, '..', '..');
const TEMPLATE_PATH = path.join(STACK_DIR, 'templates', 'report-template.html');

// Read template
let html = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Read layer JSONs
const layers = {};
for (let i = 0; i <= 7; i++) {
  const layerNames = ['journey-context', 'works-elements', 'communicates-elements', 'looks-elements', 'behaves-elements', 'feels-elements', 'coherence-report', 'tests-elements'];
  const filePath = path.join(RUN_DIR, `layer-${i}`, `${layerNames[i]}.json`);
  try {
    layers[i] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`Warning: Could not read layer ${i}: ${e.message}`);
    layers[i] = {};
  }
}

// Read run config
const runConfig = JSON.parse(fs.readFileSync(path.join(RUN_DIR, 'run-config.json'), 'utf8'));

// Inject run config
html = html.replace(
  /<script id="run-config" type="application\/json">[^<]*<\/script>/,
  `<script id="run-config" type="application/json">${JSON.stringify(runConfig)}</script>`
);

// Inject layer data
for (let i = 0; i <= 7; i++) {
  const regex = new RegExp(`<script id="data-layer-${i}" type="application/json">[^<]*</script>`);
  html = html.replace(regex, `<script id="data-layer-${i}" type="application/json">${JSON.stringify(layers[i])}</script>`);
}

// Update phaseOrder for guest run
html = html.replace(
  "const phaseOrder = ['discovery','evaluation','onboarding','listing_creation','pricing','proposal_mgmt','active_lease','retention'];",
  "const phaseOrder = ['discovery','search','listing_evaluation','proposal_creation','negotiation','acceptance','move_in','active_lease'];"
);

// Update lens label for guest (change host_call to guest_call)
html = html.replace(
  "document.getElementById('lens-label').textContent = `Lens: ${lens.host_call || '?'} + ${lens.book_extract || '?'}`;",
  "document.getElementById('lens-label').textContent = `Lens: ${lens.guest_call || lens.host_call || '?'} + ${lens.book_extract || '?'}`;"
);

// Write output
const outDir = path.join(RUN_DIR, 'report');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

console.log('Report built successfully.');
console.log(`Output: ${path.join(outDir, 'index.html')}`);
console.log(`Template: ${TEMPLATE_PATH}`);
console.log(`Layers injected: ${Object.keys(layers).length}`);
