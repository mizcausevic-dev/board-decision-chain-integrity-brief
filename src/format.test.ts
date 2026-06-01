import { describe, expect, it } from "vitest";
import { formatSummary } from "./format.js";

describe("formatSummary", () => {
  it("renders the chain integrity summary lines", () => {
    const output = formatSummary({
      items: 6,
      constrainedLanes: 5,
      chainPriorityLanes: 4,
      averageBoardConfidence: 58.7,
      valueAtStakeMillions: 141,
      leadingMessage: "Decision-chain integrity needs repair."
    });

    expect(output).toContain("Board Decision Chain Integrity Brief");
    expect(output).toContain("Chain-priority lanes: 4");
    expect(output).toContain("Value at stake: $141M");
  });
});
