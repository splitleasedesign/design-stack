const fs = require('fs');
const libPath = 'C:/Users/igor/OneDrive/Documents/design-stack/library/elements.json';
const newPath = 'C:/Users/igor/OneDrive/Documents/design-stack/runs/2026-02-13_1250/layer-4/ui-elements.json';

const library = JSON.parse(fs.readFileSync(libPath, 'utf8'));
const newData = JSON.parse(fs.readFileSync(newPath, 'utf8'));

const existingIds = new Set((library.elements || []).map(e => e.id));
let added = 0;

(newData.elements || []).forEach(el => {
  if (existingIds.has(el.id)) {
    console.log('Skipped (exists):', el.id);
    return;
  }
  el.confidence = { lens_count: 1 };
  el.status = 'pending_review';
  el.source_process = 'reverse-benchmark';
  el.source_run = '2026-02-13_1250';
  el.source_lens = {
    competitor: 'airbnb',
    book: 'Influence The Psychology of Persuasion - Robert Cialdini.pdf',
    book_chapters: 'Chapters 3-4: Commitment & Consistency + Social Proof'
  };
  library.elements.push(el);
  added++;
  console.log('Added:', el.id, '-', el.name);
});

fs.writeFileSync(libPath, JSON.stringify(library, null, 2), 'utf8');
console.log('Total elements now:', library.elements.length, '| Added:', added);