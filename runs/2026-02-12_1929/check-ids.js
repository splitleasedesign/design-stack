const fs = require('fs');
const RUN = 'runs/2026-02-12_1929';
const files = ['layer-1/works-elements.json','layer-2/communicates-elements.json','layer-3/looks-elements.json','layer-4/behaves-elements.json','layer-5/feels-elements.json'];
const newIds = [];
files.forEach(f => {
  const d = JSON.parse(fs.readFileSync(RUN+'/'+f,'utf8'));
  (d.elements||[]).forEach(e => newIds.push(e.id));
});
console.log('New run IDs (' + newIds.length + '):', newIds.join(', '));

const lib = JSON.parse(fs.readFileSync('library/elements.json','utf8'));
const libIds = new Set((lib.elements||[]).map(e => e.id));
const overlap = newIds.filter(id => libIds.has(id));
const unique = newIds.filter(id => !libIds.has(id));
console.log('Overlap:', overlap.length, '-', overlap.join(', '));
console.log('Unique:', unique.length, '-', unique.join(', '));
