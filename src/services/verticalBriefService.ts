import { analyze } from "../analyze.js";
import { sampleBoardDecisionChainIntegrityBrief } from "../data/sampleVerticalBrief.js";

const report = analyze(sampleBoardDecisionChainIntegrityBrief, { now: "2026-06-01T00:00:00Z" });

export function summary() {
  return {
    ...report.summary,
    generatedAt: report.generatedAt,
    boardMessage:
      "Lock the AI and biotech decision paths first, reduce identity chain breaks second, restore revenue chain integrity third, and tighten the FinTech handoff route before it compounds."
  };
}

export function chainMap() {
  return sampleBoardDecisionChainIntegrityBrief.map((item) => ({
    lane: item.lane,
    action: item.action,
    owner: item.owner,
    audience: item.audience,
    chainTheme: item.chainTheme,
    boardConfidenceScore: item.boardConfidenceScore,
    nextMove: item.nextMove,
    decisionHandoffs: item.decisionHandoffs,
    chainBreaks: item.chainBreaks
  }));
}

export function integrityGaps() {
  return sampleBoardDecisionChainIntegrityBrief.map((item) => ({
    lane: item.lane,
    chainHeadline: item.chainHeadline,
    chainSignal: item.chainSignal,
    finalDecisionPath: item.finalDecisionPath,
    requiredEvidence: item.requiredEvidence,
    decisionHandoffs: item.decisionHandoffs,
    escalationGaps: item.escalationGaps
  }));
}

export function interventionPosture() {
  return report.items.map((item) => ({
    lane: item.lane,
    action: item.action,
    compositeChainRiskScore: item.compositeChainRiskScore,
    handoffs: item.handoffAssessment,
    chainBreaks: item.breakAssessment,
    escalationGaps: item.escalationAssessment,
    coverage: item.coverageAssessment,
    clarity: item.clarityAssessment,
    boardConfidence: item.confidenceAssessment
  }));
}

export function riskMap() {
  return report.items.map((item) => ({
    lane: item.lane,
    track: item.track,
    valueAtStakeMillions: item.valueAtStakeMillions,
    compositeChainRiskScore: item.compositeChainRiskScore,
    boardConfidenceScore: item.boardConfidenceScore,
    companyTags: item.companyTags
  }));
}

export function verification() {
  return [
    "Synthetic decision-chain-integrity data only - no live board packets, actual committee paths, or real escalation histories are included.",
    "Scores are modeled to show how Kinetic Gain can turn handoff drift, chain breaks, and escalation fragility into board-readable chain repairs.",
    "All routes are read-only and demonstrate decision-chain packaging, not production workflow automation."
  ];
}

export function payload() {
  return {
    report,
    chainMap: chainMap(),
    integrityGaps: integrityGaps(),
    interventionPosture: interventionPosture(),
    riskMap: riskMap(),
    verification: verification(),
    sample: sampleBoardDecisionChainIntegrityBrief
  };
}
