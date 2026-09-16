/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const { test } = require("node:test");

require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
  });
  module._compile(outputText, filename);
};

const { createBriefPayload, formatAgentContext, formatHumanBrief, serializeBrief, validateBrief } = require("../src/lib/brief.ts");
const { CATALOG_ITEMS, EMPTY_FILTERS, filterCatalog, uniqueCatalogValues } = require("../src/lib/catalog.ts");

const values = { projectType: "web-app", stage: "working-product", clarityNeed: "navigation", timeframe: "2-4-weeks" };

test("brief requires listed answers and serializes a deterministic payload", () => {
  assert.deepEqual(validateBrief(values), {});
  assert.equal(validateBrief({ ...values, stage: "" }).stage, "Choose an option to continue.");
  assert.equal(validateBrief({ ...values, stage: "made-up" }).stage, "Choose a listed option.");
  const payload = createBriefPayload(values, "2026-09-16T00:00:00.000Z");
  assert.equal(payload.intent, "product-design-partnership");
  assert.equal(JSON.parse(serializeBrief(payload)).generatedAt, "2026-09-16T00:00:00.000Z");
  assert.match(formatHumanBrief(payload), /Product: Web app[\s\S]*Stage: Working product/);
});

test("agent package contains routing, synthetic work, and the structured brief", () => {
  const context = formatAgentContext(createBriefPayload(values, "2026-09-16T00:00:00.000Z"));
  assert.match(context, /ROUTING RULES/);
  assert.match(context, /synthetic/i);
  assert.match(context, /Atlas — A fictional dispatch tool/);
  assert.match(context, /"projectType": "web-app"/);
});

test("catalogue filters combine across dimensions and retain original data", () => {
  const matches = filterCatalog(CATALOG_ITEMS, { service: "UX strategy", industry: "Operations", outcome: "Workflow" });
  assert.deepEqual(matches.map((item) => item.id), ["atlas-ops"]);
  assert.equal(filterCatalog(CATALOG_ITEMS, { service: "Research", industry: "Finance", outcome: "Clarity" }).length, 0);
  assert.equal(filterCatalog(CATALOG_ITEMS, EMPTY_FILTERS).length, CATALOG_ITEMS.length);
  assert.deepEqual(uniqueCatalogValues(CATALOG_ITEMS, "industry"), ["Consumer", "Finance", "Healthcare", "Operations"]);
});
