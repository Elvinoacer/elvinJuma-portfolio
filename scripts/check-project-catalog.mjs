import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

// Compare the site catalogue with the supplied review document, rather than
// keeping a second hard-coded list of expected repositories in this script.
// Usage: node scripts/check-project-catalog.mjs /path/to/portfolio-review.md
const reviewPath = process.argv[2];
assert.ok(reviewPath, "Pass the complete portfolio review Markdown file as the first argument.");
const review = readFileSync(reviewPath, "utf8");
const start = review.indexOf("## Complete project catalogue");
const end = review.indexOf("## Portfolio presentation", start);
assert.ok(start !== -1 && end > start, "Complete catalogue section not found in the review.");

const reviewedRows = review
  .slice(start, end)
  .split("\n")
  .filter((line) => line.startsWith("| **") && line.includes("https://github.com/Elvinoacer/"))
  .map((line) => {
    const cells = line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
    const repository = cells[0].match(/\[([^\]]+)\]\(https:\/\/github\.com\/Elvinoacer\/([^/)]+)\)/);
    assert.ok(repository, `Invalid repository row: ${cells[0]}`);
    assert.equal(repository[1], repository[2], "Repository label and exact slug differ.");
    return { repo: repository[2], period: cells[1], scopeText: cells[2] };
  });

const moduleCache = new Map();
function loadDataModule(path) {
  if (moduleCache.has(path)) return moduleCache.get(path);
  const source = readFileSync(path, "utf8");
  const parsed = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  assert.equal(parsed.parseDiagnostics.length, 0, `TypeScript syntax error in ${path}`);
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const dataModule = { exports: {} };
  moduleCache.set(path, dataModule.exports);
  vm.runInNewContext(output, {
    module: dataModule,
    exports: dataModule.exports,
    require: (specifier) => {
      assert.equal(specifier, "./project-domains", "Unexpected data-module dependency.");
      return loadDataModule(resolve(dirname(path), "project-domains.ts"));
    },
  }, { filename: path });
  return dataModule.exports;
}

const dataPath = fileURLToPath(new URL("../src/data/project-catalog.ts", import.meta.url));
const { projectCatalog, projectDomains, projectScopes, portfolioRepositoryCount } = loadDataModule(dataPath);
const sourceRepos = reviewedRows.map((row) => row.repo);
const catalogRepos = projectCatalog.map((entry) => entry.repo);
assert.equal(reviewedRows.length, 107, "The source review must account for all 107 repositories.");
assert.equal(new Set(sourceRepos).size, sourceRepos.length, "Duplicate repository in source review.");
assert.equal(new Set(catalogRepos).size, catalogRepos.length, "Duplicate repository in site catalogue.");
assert.equal(projectCatalog.length, portfolioRepositoryCount, "Repository count metadata is stale.");
assert.equal(portfolioRepositoryCount, sourceRepos.length, "Catalogue and reviewed inventory counts differ.");
assert.deepEqual([...catalogRepos].sort(), [...sourceRepos].sort(), "Missing, unexpected, or incorrectly cased repository slug.");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function isoDate(value) {
  const [day, month, year] = value.split(" ");
  const monthNumber = months.indexOf(month) + 1;
  assert.ok(monthNumber, `Invalid source month: ${month}`);
  return `${year}-${String(monthNumber).padStart(2, "0")}-${day}`;
}

const domains = new Set(projectDomains.map((domain) => domain.id));
const scopes = new Set(projectScopes.map((scope) => scope.id));
const expectedScopes = ["flagship", "application", "website", "service", "study", "starter", "fork"];
assert.deepEqual([...scopes], expectedScopes, "Scope navigation must cover every supported scope in presentation order.");
const sourceByRepo = new Map(reviewedRows.map((row) => [row.repo, row]));
let previousScopeIndex = -1;
for (const entry of projectCatalog) {
  const source = sourceByRepo.get(entry.repo);
  const dates = source.period.match(/\d{2} [A-Z][a-z]{2} \d{4}/g);
  assert.ok(dates?.length, `No source date for ${entry.repo}`);
  assert.equal(entry.period, source.period, `Timeline label changed for ${entry.repo}`);
  assert.equal(entry.startDate, isoDate(dates[0]), `Incorrect creation date for ${entry.repo}`);
  assert.equal(entry.startYear, Number(entry.startDate.slice(0, 4)), `Incorrect year filter for ${entry.repo}`);
  if (dates.length === 2) {
    assert.equal(entry.endDate, isoDate(dates[1]), `Incorrect latest-push date for ${entry.repo}`);
    assert.ok(entry.endDate >= entry.startDate, `Reversed repository window for ${entry.repo}`);
  } else {
    assert.equal(entry.endDate, undefined, `Unstated latest-push date added for ${entry.repo}`);
  }
  assert.ok(domains.has(entry.domain), `Unknown domain: ${entry.domain}`);
  assert.ok(scopes.has(entry.scope), `Unknown scope: ${entry.scope}`);
  for (const field of ["title", "summary", "significance", "status"]) {
    assert.ok(typeof entry[field] === "string" && entry[field].trim(), `Missing ${field} for ${entry.repo}`);
  }
  if (entry.parentRepo) {
    assert.ok(sourceByRepo.has(entry.parentRepo), `Unknown parent repository for ${entry.repo}`);
    assert.notEqual(entry.parentRepo, entry.repo, "Repository cannot be its own supporting parent.");
  }
  if (source.scopeText.startsWith("**Empty repository.")) {
    assert.equal(entry.scope, "starter", `Empty repository promoted as an application: ${entry.repo}`);
    assert.equal(entry.status, "Empty repository");
  }
  if (source.scopeText.startsWith("**Fork of")) {
    assert.equal(entry.scope, "fork", "Upstream repository must be identified as a fork.");
    assert.equal(entry.endDate, undefined, "Inherited upstream push must not become authored development activity.");
  }
  assert.equal(entry.scope === "flagship", source.scopeText.startsWith("**Flagship"), `Flagship classification differs from review: ${entry.repo}`);
  const scopeIndex = expectedScopes.indexOf(entry.scope);
  assert.ok(scopeIndex >= previousScopeIndex, "Catalogues must present major systems before supporting and archive work.");
  previousScopeIndex = scopeIndex;
}

for (const domain of projectDomains) {
  assert.equal(domain.count, projectCatalog.filter((entry) => entry.domain === domain.id).length, `Stale count for ${domain.id}`);
  assert.ok(/^#[\da-f]{6}$/i.test(domain.accent), `Invalid navigation accent for ${domain.id}`);
}
assert.equal(projectDomains.reduce((sum, domain) => sum + domain.count, 0), portfolioRepositoryCount);

console.log(`Catalogue verified: ${projectCatalog.length} exact repositories; no missing, extra, or duplicate entries.`);
console.table(projectDomains.map(({ id, count }) => ({ domain: id, repositories: count })));
console.table(projectScopes.map(({ id }) => ({ scope: id, repositories: projectCatalog.filter((entry) => entry.scope === id).length })));
