const window = {};
eval(require('fs').readFileSync('library/library-data.js','utf8'));
const run = window.__LIBRARY_DATA.runs.find(r => r.run_id === '2026-02-12_1929');
const el = run.elements[0];
console.log('name:', el.name);
console.log('journey_phases:', el.journey_phases);
console.log('html_css present:', el.html_css ? 'yes' : 'no');
