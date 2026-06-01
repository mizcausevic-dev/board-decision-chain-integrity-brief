import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  renderChainIntegrityOverview,
  renderChainMap,
  renderDocs,
  renderIntegrityGaps,
  renderInterventionPosture,
  renderVerification
} from "../src/services/render.js";
import { chainMap, integrityGaps, interventionPosture, payload, riskMap, summary, verification } from "../src/services/verticalBriefService.js";

const root = path.resolve("site");
rmSync(root, { recursive: true, force: true });
mkdirSync(root, { recursive: true });

if (existsSync("CNAME")) {
  writeFileSync(path.join(root, "CNAME"), readFileSync("CNAME", "utf8").trim() + "\n");
}

const htmlRoutes = new Map<string, [string, string]>([
  ["/", ["index.html", renderChainIntegrityOverview()]],
  ["/chain-map", ["chain-map/index.html", renderChainMap()]],
  ["/integrity-gaps", ["integrity-gaps/index.html", renderIntegrityGaps()]],
  ["/intervention-posture", ["intervention-posture/index.html", renderInterventionPosture()]],
  ["/verification", ["verification/index.html", renderVerification()]],
  ["/docs", ["docs/index.html", renderDocs()]]
]);

for (const [, [target, html]] of htmlRoutes) {
  const filePath = path.join(root, target);
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
}

writeFileSync(path.join(root, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://integrity.kineticgain.com/sitemap.xml\n");
writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://integrity.kineticgain.com/</loc></url><url><loc>https://integrity.kineticgain.com/chain-map/</loc></url><url><loc>https://integrity.kineticgain.com/integrity-gaps/</loc></url><url><loc>https://integrity.kineticgain.com/intervention-posture/</loc></url><url><loc>https://integrity.kineticgain.com/verification/</loc></url><url><loc>https://integrity.kineticgain.com/docs/</loc></url></urlset>`
);

const api = {
  "api/dashboard/summary.json": summary(),
  "api/chain-map.json": chainMap(),
  "api/integrity-gaps.json": integrityGaps(),
  "api/intervention-posture.json": interventionPosture(),
  "api/risk-map.json": riskMap(),
  "api/verification.json": verification(),
  "api/sample.json": payload().sample,
  "api/payload.json": payload()
};

for (const [target, data] of Object.entries(api)) {
  const filePath = path.join(root, target);
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2));
}
