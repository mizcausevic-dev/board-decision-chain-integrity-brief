import { describe, expect, it } from "vitest";
import { chainMap, integrityGaps, interventionPosture, payload, summary, verification } from "./verticalBriefService.js";

describe("verticalBriefService", () => {
  it("returns the chain integrity summary", () => {
    expect(summary().items).toBeGreaterThan(0);
  });

  it("returns the chain map view", () => {
    expect(chainMap().length).toBeGreaterThan(0);
  });

  it("returns the integrity gaps view", () => {
    expect(integrityGaps().length).toBeGreaterThan(0);
  });

  it("returns the intervention posture view", () => {
    expect(interventionPosture().length).toBeGreaterThan(0);
  });

  it("returns verification notes", () => {
    expect(verification().length).toBeGreaterThan(0);
  });

  it("returns the payload", () => {
    expect(payload().report.summary.items).toBeGreaterThan(0);
  });
});
