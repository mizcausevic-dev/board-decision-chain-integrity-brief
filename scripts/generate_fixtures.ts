import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { sampleBoardDecisionChainIntegrityBrief } from "../src/data/sampleVerticalBrief.js";

const fixturesDir = path.resolve("fixtures");
mkdirSync(fixturesDir, { recursive: true });

writeFileSync(
  path.join(fixturesDir, "board-decision-chain-integrity-brief.json"),
  JSON.stringify(sampleBoardDecisionChainIntegrityBrief, null, 2)
);

writeFileSync(
  path.join(fixturesDir, "board-decision-chain-integrity-brief-clean.json"),
  JSON.stringify(
    sampleBoardDecisionChainIntegrityBrief.map(({ narrative: _narrative, currentPosture: _currentPosture, ...item }) => item),
    null,
    2
  )
);
