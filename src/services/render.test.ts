import { describe, expect, it } from "vitest";
import {
  renderChainMap,
  renderDocs,
  renderInterventionPosture,
  renderChainIntegrityOverview,
  renderIntegrityGaps,
  renderVerification
} from "./render.js";

describe("render", () => {
  it("includes the product title in the overview", () => {
    expect(renderChainIntegrityOverview()).toContain("Board Decision Chain Integrity Brief");
  });

  it("renders the chain map route", () => {
    expect(renderChainMap()).toContain("/chain-map");
  });

  it("renders the integrity gaps route", () => {
    expect(renderIntegrityGaps()).toContain("/integrity-gaps");
  });

  it("renders the intervention posture route", () => {
    expect(renderInterventionPosture()).toContain("Composite chain risk");
  });

  it("renders verification notes", () => {
    expect(renderVerification()).toContain("Synthetic decision-chain-integrity data only");
  });

  it("renders docs payload guidance", () => {
    expect(renderDocs()).toContain("/api/payload");
  });
});
