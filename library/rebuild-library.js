#!/usr/bin/env node
/**
 * Rebuild library-data.js from all completed runs.
 *
 * Usage: node library/rebuild-library.js
 *
 * Reads runs/manifest.json, loads each run's ui-elements.json,
 * and writes library/library-data.js for the Library HTML page.
 */

const fs = require("fs");
const path = require("path");

const STACK_DIR = path.resolve(__dirname, "..");
const MANIFEST_PATH = path.join(STACK_DIR, "runs", "manifest.json");
const OUTPUT_PATH = path.join(__dirname, "library-data.js");

/**
 * Normalize element field names to canonical schema.
 * Different models produce different field names — this is the single
 * source of truth that catches all variations before they hit library.html.
 */
function normalizeElement(el) {
  // name / title → name
  if (!el.name && el.title) el.name = el.title;

  // phase (string) / journey_phase / journey_phases → journey_phases (array)
  if (!el.journey_phases && el.phase) {
    el.journey_phases = Array.isArray(el.phase) ? el.phase : [el.phase];
  }
  if (!el.journey_phases && el.journey_phase) {
    el.journey_phases = Array.isArray(el.journey_phase) ? el.journey_phase : [el.journey_phase];
  }
  if (!el.journey_phases) el.journey_phases = [];

  // html_css / html_snippet / html_css_snippet → html_css
  if (!el.html_css && el.html_snippet) el.html_css = el.html_snippet;
  if (!el.html_css && el.html_css_snippet) el.html_css = el.html_css_snippet;

  // source_elements / implements_principles → both present
  if (!el.implements_principles && el.source_elements) el.implements_principles = el.source_elements;
  if (!el.source_elements && el.implements_principles) el.source_elements = el.implements_principles;

  // effort fallback
  if (!el.effort) el.effort = el.priority === "high" ? "medium" : "small";

  // problem_it_solves fallback
  if (!el.problem_it_solves && el.before_after && el.before_after.before) {
    el.problem_it_solves = el.before_after.before;
  }

  // copy_spec normalization
  if (el.copy_spec) {
    if (!el.copy_spec.primary_text && el.copy_spec.headline) el.copy_spec.primary_text = el.copy_spec.headline;
    if (!el.copy_spec.secondary_text && el.copy_spec.body) el.copy_spec.secondary_text = el.copy_spec.body;
    if (!el.copy_spec.do && el.copy_spec.micro_copy) el.copy_spec.do = el.copy_spec.micro_copy;
    if (!el.copy_spec.dont) el.copy_spec.dont = [];
  }

  return el;
}

function main() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error("Error: manifest.json not found at", MANIFEST_PATH);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  const completed = manifest.runs.filter(r => r.status === "complete");

  console.log("Found " + completed.length + " completed runs:");

  const runs = [];
  let totalElements = 0;

  for (const run of completed) {
    const uiRelPath = run.layers.ui_elements || run.layers["element-specification"];
    if (!uiRelPath) {
      console.warn("  SKIP " + run.run_id + " — no ui_elements or element-specification layer path");
      continue;
    }
    const uiPath = path.join(STACK_DIR, uiRelPath);
    if (!fs.existsSync(uiPath)) {
      console.warn("  SKIP " + run.run_id + " — ui-elements.json not found at " + uiPath);
      continue;
    }

    const uiData = JSON.parse(fs.readFileSync(uiPath, "utf8"));
    const rawElements = uiData.elements || uiData.ui_elements || [];
    const elements = rawElements.map(normalizeElement);
    totalElements += elements.length;

    runs.push({
      run_id: run.run_id,
      process_type: run.process_type || "design-stack",
      date: run.date,
      journey_type: run.journey_type,
      lens: run.lens,
      summary: run.summary,
      element_count: run.element_count,
      principle_count: run.principle_count,
      report_url: run.report_url,
      library_url: run.library_url,
      elements: elements
    });

    console.log("  " + run.run_id + " — " + elements.length + " elements (" + (run.journey_type || run.competitor || run.process_type) + ")");
  }

  const data = {
    generated_at: new Date().toISOString(),
    total_runs: runs.length,
    total_elements: totalElements,
    runs: runs
  };

  const js = "window.__LIBRARY_DATA = " + JSON.stringify(data) + ";";
  fs.writeFileSync(OUTPUT_PATH, js, "utf8");

  console.log("\nWrote " + OUTPUT_PATH);
  console.log("  " + runs.length + " runs, " + totalElements + " elements, " + (js.length / 1024).toFixed(1) + " KB");
}

main();
