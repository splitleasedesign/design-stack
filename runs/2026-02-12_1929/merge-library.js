const fs = require('fs');
const RUN = 'runs/2026-02-12_1929';

// Read current library
const library = JSON.parse(fs.readFileSync('library/elements.json', 'utf8'));
const coherence = JSON.parse(fs.readFileSync(RUN + '/layer-6/coherence-report.json', 'utf8'));

// Get reinforced element IDs from coherence report
const reinforcedIds = new Set();
if (coherence.reinforcements) {
  coherence.reinforcements.forEach(r => {
    if (r.existing_element_id) reinforcedIds.add(r.existing_element_id);
    if (r.library_element_id) reinforcedIds.add(r.library_element_id);
  });
}

// Collect new elements from layers 1-5
const layerFiles = [
  { file: RUN + '/layer-1/works-elements.json', category: 'works' },
  { file: RUN + '/layer-2/communicates-elements.json', category: 'communicates' },
  { file: RUN + '/layer-3/looks-elements.json', category: 'looks' },
  { file: RUN + '/layer-4/behaves-elements.json', category: 'behaves' },
  { file: RUN + '/layer-5/feels-elements.json', category: 'feels' }
];

let newCount = 0, reinforcedCount = 0;

// Update reinforced elements
if (library.elements) {
  library.elements.forEach(el => {
    if (reinforcedIds.has(el.id)) {
      if (!el.confidence) el.confidence = { lens_count: 1 };
      el.confidence.lens_count = (el.confidence.lens_count || 1) + 1;
      reinforcedCount++;
    }
  });
}

// Add new elements
const existingIds = new Set(library.elements ? library.elements.map(e => e.id) : []);
layerFiles.forEach(({ file, category }) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const elements = data.elements || [];
  elements.forEach(el => {
    if (!existingIds.has(el.id)) {
      el.status = 'pending_review';
      el.confidence = { lens_count: 1 };
      el.source_run = '2026-02-12_1929';
      if (!el.category) el.category = category;
      if (!library.elements) library.elements = [];
      library.elements.push(el);
      existingIds.add(el.id);
      newCount++;
    }
  });
});

fs.writeFileSync('library/elements.json', JSON.stringify(library, null, 2));
console.log('Library: ' + newCount + ' new, ' + reinforcedCount + ' reinforced, ' + library.elements.length + ' total');
