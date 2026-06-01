import express from "express";
import {
  chainMap,
  integrityGaps,
  interventionPosture,
  payload,
  riskMap,
  summary,
  verification
} from "./services/verticalBriefService.js";
import { renderChainIntegrityOverview, renderChainMap, renderDocs, renderIntegrityGaps, renderInterventionPosture, renderVerification } from "./services/render.js";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => res.type("html").send(renderChainIntegrityOverview()));
  app.get("/chain-map", (_req, res) => res.type("html").send(renderChainMap()));
  app.get("/integrity-gaps", (_req, res) => res.type("html").send(renderIntegrityGaps()));
  app.get("/intervention-posture", (_req, res) => res.type("html").send(renderInterventionPosture()));
  app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
  app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

  app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
  app.get("/api/chain-map", (_req, res) => res.json(chainMap()));
  app.get("/api/integrity-gaps", (_req, res) => res.json(integrityGaps()));
  app.get("/api/intervention-posture", (_req, res) => res.json(interventionPosture()));
  app.get("/api/risk-map", (_req, res) => res.json(riskMap()));
  app.get("/api/verification", (_req, res) => res.json(verification()));
  app.get("/api/sample", (_req, res) => res.json(payload().sample));
  app.get("/api/payload", (_req, res) => res.json(payload()));

  return app;
}

/* c8 ignore next 5 */
if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1].replace(/\\/g, "/")}`).href) {
  const port = Number(process.env.PORT ?? 4318);
  createApp().listen(port, () => {
    console.log(`board-decision-chain-integrity-brief listening on http://127.0.0.1:${port}`);
  });
}
