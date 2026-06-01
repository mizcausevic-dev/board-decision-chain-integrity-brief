# Architecture

Board Decision Chain Integrity Brief is a static-friendly TypeScript executive-intelligence surface for showing where decision handoffs, chain breaks, escalation gaps, coverage weakness, and board confidence erosion are making the next board cycle unsafe.

## Routes

- `/`
- `/chain-map`
- `/integrity-gaps`
- `/intervention-posture`
- `/verification`
- `/docs`

## Data Flow

1. Sample decision-chain-integrity items are modeled in `src/data/sampleVerticalBrief.ts`.
2. `src/analyze.ts` scores handoff pressure, chain breaks, escalation gaps, coverage, decision clarity, and board confidence.
3. `src/services/verticalBriefService.ts` shapes the board-readable chain-integrity packet plus the JSON payload routes.
4. `src/services/render.ts` turns those outputs into static-friendly HTML.
5. `scripts/prerender.ts` writes the routes and JSON payloads into `site/`.
