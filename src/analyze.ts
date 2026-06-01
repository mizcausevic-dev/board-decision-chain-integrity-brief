import type {
  BoardDecisionChainIntegrityBriefExport,
  BoardDecisionChainIntegrityBriefItem,
  BoardDecisionChainIntegrityBriefReportItem,
  ChainIntegrityAssessment,
  ChainIntegritySeverity
} from "./types.js";

function assessDelay(
  score: number,
  healthy: number,
  pressured: number,
  healthyMessage: string,
  pressureMessage: string,
  highMessage: string
): ChainIntegrityAssessment {
  let severity: ChainIntegritySeverity = "HIGH";
  let ok = false;
  let message = highMessage;

  if (score <= healthy) {
    severity = "LOW";
    ok = true;
    message = healthyMessage;
  } else if (score <= pressured) {
    severity = "MEDIUM";
    message = pressureMessage;
  }

  return { severity, ok, message };
}

function assessStrength(
  score: number,
  strong: number,
  watch: number,
  strongMessage: string,
  watchMessage: string,
  weakMessage: string
): ChainIntegrityAssessment {
  let severity: ChainIntegritySeverity = "HIGH";
  let ok = false;
  let message = weakMessage;

  if (score >= strong) {
    severity = "LOW";
    ok = true;
    message = strongMessage;
  } else if (score >= watch) {
    severity = "MEDIUM";
    message = watchMessage;
  }

  return { severity, ok, message };
}

export function analyze(
  items: BoardDecisionChainIntegrityBriefItem[],
  options: { now?: string } = {}
): BoardDecisionChainIntegrityBriefExport {
  const generatedAt = options.now ?? new Date().toISOString();

  const reportItems: BoardDecisionChainIntegrityBriefReportItem[] = items.map((item) => {
    const handoffAssessment = assessDelay(
      item.decisionHandoffs,
      2,
      4,
      "Decision handoffs remain short enough to keep the chain intact.",
      "Decision handoffs are stretching and may soon fracture the chain.",
      "Decision handoffs are now too long to trust the current chain."
    );

    const breakAssessment = assessDelay(
      item.chainBreaks,
      0,
      1,
      "Chain breaks are controlled tightly enough to keep the path intact.",
      "Chain breaks are accumulating and may soon require intervention.",
      "Chain breaks are now too numerous to trust the path."
    );

    const escalationAssessment = assessDelay(
      item.escalationGaps,
      0,
      1,
      "Escalation gaps remain low enough to preserve the chain.",
      "Escalation gaps are starting to weaken the chain.",
      "Escalation gaps are now overwhelming the intended decision chain."
    );

    const coverageAssessment = assessStrength(
      item.chainCoverageScore,
      78,
      62,
      "Chain coverage is strong enough to back the current path.",
      "Chain coverage is uneven and may soon hide integrity failures.",
      "Chain coverage is too weak to support the current path."
    );

    const clarityAssessment = assessStrength(
      item.decisionClarityScore,
      78,
      62,
      "Decision clarity remains strong enough to keep the chain legible.",
      "Decision clarity is getting patchy and may soon weaken chain trust.",
      "Decision clarity is too weak to support the current path."
    );

    const confidenceAssessment = assessStrength(
      item.boardConfidenceScore,
      78,
      62,
      "Board confidence remains strong enough to trust the current chain.",
      "Board confidence is becoming dependent on extra chain explanation.",
      "Board confidence is too thin to trust the current path."
    );

    const compositeChainRiskScore =
      Math.round(
        ((item.decisionHandoffs * 10 +
          item.chainBreaks * 15 +
          item.escalationGaps * 12 +
          (100 - item.chainCoverageScore) +
          (100 - item.decisionClarityScore) +
          (100 - item.boardConfidenceScore)) /
          7) *
          10
      ) / 10;

    return {
      ...item,
      handoffAssessment,
      breakAssessment,
      escalationAssessment,
      coverageAssessment,
      clarityAssessment,
      confidenceAssessment,
      compositeChainRiskScore
    };
  });

  const constrainedLanes = reportItems.filter(
    (item) =>
      item.handoffAssessment.severity === "HIGH" ||
      item.breakAssessment.severity === "HIGH" ||
      item.escalationAssessment.severity === "HIGH" ||
      item.coverageAssessment.severity === "HIGH" ||
      item.clarityAssessment.severity === "HIGH" ||
      item.confidenceAssessment.severity === "HIGH"
  ).length;

  const chainPriorityLanes = reportItems.filter(
    (item) => item.action === "LOCK_PATH" || item.action === "RESTORE_CHAIN"
  ).length;

  const averageBoardConfidence =
    reportItems.length === 0
      ? 0
      : Math.round((reportItems.reduce((sum, item) => sum + item.boardConfidenceScore, 0) / reportItems.length) * 10) / 10;

  const valueAtStakeMillions = reportItems.reduce((sum, item) => sum + item.valueAtStakeMillions, 0);

  const leadingMessage =
    constrainedLanes === 0
      ? "Decision-chain integrity remains stable enough to support the current board packet."
      : constrainedLanes <= 2
        ? "A few lanes need chain repair before the next board cycle compounds handoff fragility."
        : "Decision-chain integrity is now a shared operating constraint and should be repaired across multiple board-facing lanes.";

  return {
    generatedAt,
    summary: {
      items: reportItems.length,
      constrainedLanes,
      chainPriorityLanes,
      averageBoardConfidence,
      valueAtStakeMillions,
      leadingMessage
    },
    items: reportItems
  };
}

export function toExport(items: BoardDecisionChainIntegrityBriefItem[], options: { now?: string } = {}) {
  return analyze(items, options);
}
