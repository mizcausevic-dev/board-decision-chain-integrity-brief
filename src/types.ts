export type DecisionChainIntegrityTrack =
  | "AI_GOVERNANCE"
  | "IDENTITY"
  | "REVENUE_SYSTEMS"
  | "FINTECH"
  | "PROCUREMENT"
  | "BIOTECH";

export type ChainIntegrityAction = "LOCK_PATH" | "RESTORE_CHAIN" | "REDUCE_BREAKS" | "TIGHTEN_HANDOFFS";

export type ChainIntegritySeverity = "LOW" | "MEDIUM" | "HIGH";

export interface BoardDecisionChainIntegrityBriefItem {
  id: string;
  lane: string;
  track: DecisionChainIntegrityTrack;
  action: ChainIntegrityAction;
  chainTheme: string;
  boardQuestion: string;
  owner: string;
  audience: string;
  currentPosture: string;
  chainHeadline: string;
  chainSignal: string;
  finalDecisionPath: string;
  requiredEvidence: string[];
  relatedSurfaces: string[];
  companyTags: string[];
  decisionHandoffs: number;
  chainBreaks: number;
  escalationGaps: number;
  chainCoverageScore: number;
  decisionClarityScore: number;
  boardConfidenceScore: number;
  valueAtStakeMillions: number;
  headline: string;
  narrative: string;
  nextMove: string;
}

export interface ChainIntegrityAssessment {
  severity: ChainIntegritySeverity;
  ok: boolean;
  message: string;
}

export interface BoardDecisionChainIntegrityBriefReportItem extends BoardDecisionChainIntegrityBriefItem {
  handoffAssessment: ChainIntegrityAssessment;
  breakAssessment: ChainIntegrityAssessment;
  escalationAssessment: ChainIntegrityAssessment;
  coverageAssessment: ChainIntegrityAssessment;
  clarityAssessment: ChainIntegrityAssessment;
  confidenceAssessment: ChainIntegrityAssessment;
  compositeChainRiskScore: number;
}

export interface BoardDecisionChainIntegrityBriefSummary {
  items: number;
  constrainedLanes: number;
  chainPriorityLanes: number;
  averageBoardConfidence: number;
  valueAtStakeMillions: number;
  leadingMessage: string;
}

export interface BoardDecisionChainIntegrityBriefExport {
  generatedAt: string;
  summary: BoardDecisionChainIntegrityBriefSummary;
  items: BoardDecisionChainIntegrityBriefReportItem[];
}

export interface BoardDecisionChainIntegrityBriefPayload {
  report: BoardDecisionChainIntegrityBriefExport;
  chainMap: ReturnType<typeof import("./services/verticalBriefService.js").chainMap>;
  integrityGaps: ReturnType<typeof import("./services/verticalBriefService.js").integrityGaps>;
  interventionPosture: ReturnType<typeof import("./services/verticalBriefService.js").interventionPosture>;
  riskMap: ReturnType<typeof import("./services/verticalBriefService.js").riskMap>;
  verification: string[];
  sample: BoardDecisionChainIntegrityBriefItem[];
}
