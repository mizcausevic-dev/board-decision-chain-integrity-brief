import { describe, expect, it } from "vitest";
import { analyze, toExport } from "../src/analyze.js";
import { sampleBoardDecisionChainIntegrityBrief } from "../src/data/sampleVerticalBrief.js";
import type { BoardDecisionChainIntegrityBriefItem } from "../src/types.js";

describe("analyze", () => {
  it("preserves the item count", () => {
    const report = analyze(sampleBoardDecisionChainIntegrityBrief, { now: "2026-06-01T00:00:00Z" });
    expect(report.items.length).toBe(sampleBoardDecisionChainIntegrityBrief.length);
  });

  it("counts constrained lanes", () => {
    const report = analyze(sampleBoardDecisionChainIntegrityBrief, { now: "2026-06-01T00:00:00Z" });
    expect(report.summary.constrainedLanes).toBeGreaterThan(0);
  });

  it("counts chain-priority lanes", () => {
    const report = analyze(sampleBoardDecisionChainIntegrityBrief, { now: "2026-06-01T00:00:00Z" });
    expect(report.summary.chainPriorityLanes).toBeGreaterThan(0);
  });

  it("sums value at stake", () => {
    const report = analyze(sampleBoardDecisionChainIntegrityBrief, { now: "2026-06-01T00:00:00Z" });
    expect(report.summary.valueAtStakeMillions).toBe(141);
  });

  it("calculates a leading board message", () => {
    const report = analyze(sampleBoardDecisionChainIntegrityBrief, { now: "2026-06-01T00:00:00Z" });
    expect(report.summary.leadingMessage.length).toBeGreaterThan(20);
  });

  it("handles an empty estate", () => {
    const report = analyze([], { now: "2026-06-01T00:00:00Z" });
    expect(report.summary.items).toBe(0);
    expect(report.summary.averageBoardConfidence).toBe(0);
    expect(report.summary.leadingMessage).toContain("remains stable enough");
  });

  it("hits low and medium integrity branches explicitly", () => {
    const fixtures: BoardDecisionChainIntegrityBriefItem[] = [
      {
        id: "low-branch",
        lane: "Low branch lane",
        track: "PROCUREMENT",
        action: "LOCK_PATH",
        chainTheme: "Low strain chain.",
        boardQuestion: "Can the chain stay intact?",
        owner: "Trust owner",
        audience: "Board growth committee",
        currentPosture: "Stable.",
        chainHeadline: "Low branch is healthy.",
        chainSignal: "Path is intact.",
        finalDecisionPath: "Owner -> reviewer -> packet",
        requiredEvidence: ["path log"],
        relatedSurfaces: ["procurement.kineticgain.com"],
        companyTags: ["Google"],
        decisionHandoffs: 2,
        chainBreaks: 0,
        escalationGaps: 0,
        chainCoverageScore: 82,
        decisionClarityScore: 80,
        boardConfidenceScore: 79,
        valueAtStakeMillions: 5,
        headline: "Healthy path.",
        narrative: "Low branch test.",
        nextMove: "Keep the path locked."
      },
      {
        id: "medium-branch",
        lane: "Medium branch lane",
        track: "IDENTITY",
        action: "REDUCE_BREAKS",
        chainTheme: "Medium strain chain.",
        boardQuestion: "Where are the first fractures?",
        owner: "Security owner",
        audience: "Audit committee",
        currentPosture: "Watch state.",
        chainHeadline: "Medium branch is watch-listed.",
        chainSignal: "Breaks are building.",
        finalDecisionPath: "Owner -> audit -> security -> packet",
        requiredEvidence: ["gap log"],
        relatedSurfaces: ["certs.kineticgain.com"],
        companyTags: ["Okta"],
        decisionHandoffs: 4,
        chainBreaks: 2,
        escalationGaps: 1,
        chainCoverageScore: 70,
        decisionClarityScore: 68,
        boardConfidenceScore: 65,
        valueAtStakeMillions: 7,
        headline: "Watch the chain.",
        narrative: "Medium branch test.",
        nextMove: "Reduce breaks."
      }
    ];

    const report = analyze(fixtures, { now: "2026-06-01T00:00:00Z" });
    expect(report.items[0].handoffAssessment.severity).toBe("LOW");
    expect(report.items[0].coverageAssessment.severity).toBe("LOW");
    expect(report.items[1].handoffAssessment.severity).toBe("MEDIUM");
    expect(report.items[1].breakAssessment.severity).toBe("HIGH");
    expect(report.items[1].coverageAssessment.severity).toBe("MEDIUM");
    expect(report.summary.leadingMessage).toContain("A few lanes need chain repair");
  });

  it("exports through toExport", () => {
    const report = toExport(sampleBoardDecisionChainIntegrityBrief, { now: "2026-06-01T00:00:00Z" });
    expect(report.summary.items).toBe(sampleBoardDecisionChainIntegrityBrief.length);
  });
});
