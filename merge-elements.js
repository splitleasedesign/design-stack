const fs = require('fs');
const path = require('path');

// Read files
const library = JSON.parse(fs.readFileSync('./library/elements.json', 'utf8'));
const coherence = JSON.parse(fs.readFileSync('./runs/2026-02-12_1359/layer-6/coherence-report.json', 'utf8'));

const layer1 = JSON.parse(fs.readFileSync('./runs/2026-02-12_1359/layer-1/works-elements.json', 'utf8'));
const layer2 = JSON.parse(fs.readFileSync('./runs/2026-02-12_1359/layer-2/communicates-elements.json', 'utf8'));
const layer3 = JSON.parse(fs.readFileSync('./runs/2026-02-12_1359/layer-3/looks-elements.json', 'utf8'));
const layer4 = JSON.parse(fs.readFileSync('./runs/2026-02-12_1359/layer-4/behaves-elements.json', 'utf8'));
const layer5 = JSON.parse(fs.readFileSync('./runs/2026-02-12_1359/layer-5/feels-elements.json', 'utf8'));

// Process reinforcements - increment lens_count for merged elements
coherence.reinforcements.forEach(r => {
  if (r.recommendation && r.recommendation.includes('merge')) {
    const existingEl = library.elements.find(el => {
      const existingIdBase = el.id.split(' (')[0];
      const targetIdBase = r.existing_element_id.split(' (')[0];
      return existingIdBase === targetIdBase;
    });

    if (existingEl) {
      if (!existingEl.confidence) {
        existingEl.confidence = { lens_count: 1 };
      }
      existingEl.confidence.lens_count = (existingEl.confidence.lens_count || 1) + 1;
      console.log(`Incremented lens_count for ${existingEl.id}: ${existingEl.confidence.lens_count}`);
    }
  }
});

// Collect extension element IDs
const extensionIds = coherence.extensions.map(ext => {
  // Extract the ID from strings like "works-005 (jessica run): Communication Channel Preference Capture"
  const match = ext.new_element_id.match(/^([a-z]+-\d+)/);
  return match ? match[1] : null;
}).filter(Boolean);

console.log('Extension IDs to add:', extensionIds);

// Process extensions - add new elements
const newElements = [];
[layer1, layer2, layer3, layer4, layer5].forEach(layer => {
  if (layer.elements) {
    layer.elements.forEach(el => {
      if (extensionIds.includes(el.id)) {
        el.confidence = {
          lens_count: 1,
          run_id: '2026-02-12_1359'
        };
        el.status = 'pending_review';
        newElements.push(el);
        console.log(`Adding new element: ${el.id}`);
      }
    });
  }
});

// Add new elements to library
library.elements.push(...newElements);

// Write updated library
fs.writeFileSync('./library/elements.json', JSON.stringify(library, null, 2));

console.log('\n=== Library Merge Complete ===');
console.log(`Reinforcements processed: ${coherence.reinforcements.length}`);
console.log(`New elements added: ${newElements.length}`);
console.log(`Total elements in library: ${library.elements.length}`);
