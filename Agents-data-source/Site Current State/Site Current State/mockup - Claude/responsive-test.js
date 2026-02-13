/**
 * Responsive Screenshot Capture Script
 * Uses Playwright to capture the Split Lease mockup at multiple viewports.
 *
 * Usage:
 *   Full capture:    node responsive-test.js
 *   Single page:     node responsive-test.js --page page-explore
 *   Single viewport: node responsive-test.js --viewport 375
 *   Combined:        node responsive-test.js --page page-explore --viewport 375
 *   Before/after:    node responsive-test.js --label before
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// --- Configuration ---

const HTML_FILE = path.join(__dirname, 'version-b - responsiveness.html');
const OUTPUT_BASE = path.join(__dirname, 'responsive-screenshots');

const VIEWPORTS = [
  { width: 320,  height: 568,  name: '320-iphoneSE1' },
  { width: 375,  height: 812,  name: '375-iphoneSE3' },
  { width: 428,  height: 926,  name: '428-iphoneProMax' },
  { width: 768,  height: 1024, name: '768-ipadPortrait' },
  { width: 1024, height: 768,  name: '1024-ipadLandscape' },
  { width: 1280, height: 800,  name: '1280-laptop' },
  { width: 1440, height: 900,  name: '1440-desktop' },
];

const PAGES = [
  'page-home',
  'page-explore',
  'page-listing-detail',
  'page-guest-proposals',
  'page-host-proposals',
  'page-host-overview',
  'page-favorites',
  'page-messages',
  'page-profile',
  'page-listing-dashboard',
  'page-create-listing',
  'page-leases',
];

// Element-specific screenshots for key components
const ELEMENT_CAPTURES = {
  'page-explore':         ['.listing-card', '.filter-bar'],
  'page-listing-detail':  ['.detail-sidebar', '.bento-gallery, .detail-gallery'],
  'page-guest-proposals': ['.proposal-card'],
  'page-host-overview':   ['.ho-stats-row', '.listing-card-host'],
  'page-favorites':       ['.fav-card'],
  'page-host-proposals':  ['.host-proposal-card, .proposal-card'],
};

// --- CLI Argument Parsing ---

const args = process.argv.slice(2);
function getArg(flag) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null;
}

const filterPage = getArg('--page');
const filterViewport = getArg('--viewport');
const label = getArg('--label') || 'current';

// --- Main ---

async function captureAll() {
  const outputDir = path.join(OUTPUT_BASE, label);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n=== Responsive Screenshot Capture ===`);
  console.log(`HTML:   ${HTML_FILE}`);
  console.log(`Output: ${outputDir}`);
  console.log(`Label:  ${label}`);
  if (filterPage) console.log(`Filter: page=${filterPage}`);
  if (filterViewport) console.log(`Filter: viewport=${filterViewport}`);
  console.log('');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Load the HTML file
  const fileUrl = 'file:///' + HTML_FILE.replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });
  console.log('Page loaded.\n');

  const viewportsToCapture = filterViewport
    ? VIEWPORTS.filter(v => String(v.width) === filterViewport)
    : VIEWPORTS;

  const pagesToCapture = filterPage
    ? PAGES.filter(p => p === filterPage)
    : PAGES;

  let totalScreenshots = 0;

  for (const vp of viewportsToCapture) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    console.log(`--- Viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);

    for (const pageId of pagesToCapture) {
      try {
        // Navigate to the page within the mockup
        await page.evaluate((id) => {
          if (typeof navigateTo === 'function') navigateTo(id);
        }, pageId);
        await page.waitForTimeout(400); // Let transitions and animations settle

        // Full-page screenshot
        const filename = `${vp.name}--${pageId}.png`;
        await page.screenshot({
          path: path.join(outputDir, filename),
          fullPage: true,
        });
        totalScreenshots++;
        console.log(`  [OK] ${filename}`);

        // Element-specific screenshots
        const selectors = ELEMENT_CAPTURES[pageId];
        if (selectors) {
          for (const selector of selectors) {
            try {
              // Try each selector (comma-separated means "try first, then fallback")
              const selectorParts = selector.split(',').map(s => s.trim());
              let element = null;
              let usedSelector = '';

              for (const sel of selectorParts) {
                element = await page.$(sel);
                if (element) {
                  usedSelector = sel;
                  break;
                }
              }

              if (element) {
                const cleanName = usedSelector.replace(/[^a-zA-Z0-9-]/g, '');
                const elemFilename = `${vp.name}--${pageId}--${cleanName}.png`;
                await element.screenshot({
                  path: path.join(outputDir, elemFilename),
                });
                totalScreenshots++;
                console.log(`  [OK] ${elemFilename} (element)`);
              }
            } catch (elemErr) {
              // Element not visible or not in viewport — skip silently
            }
          }
        }
      } catch (pageErr) {
        console.log(`  [SKIP] ${pageId} — ${pageErr.message}`);
      }
    }
    console.log('');
  }

  await browser.close();
  console.log(`=== Done! ${totalScreenshots} screenshots saved to ${outputDir} ===\n`);
}

captureAll().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
