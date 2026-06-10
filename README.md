# Board Decision Chain Integrity Brief

Board-ready chain-integrity brief for tracking whether a decision path stays intact, legible, and board-safe across the executive estate.

- Live: `https://integrity.kineticgain.com/`
- Repo: `mizcausevic-dev/board-decision-chain-integrity-brief`

## Why this matters

Leaders need more than named owners. They need one brief that shows where the decision chain itself is intact, where handoffs are breaking, and which lanes are too fragile for another board cycle.

## What it includes

- TypeScript executive-intelligence surface for chain-integrity scoring with modeled executive lanes, handoff drift, integrity thresholds, and board-safe intervention posture
- synthetic executive lanes across AI, identity, revenue, FinTech, biotech, procurement, and public-sector readiness
- reusable outputs for chain-integrity lanes, handoff scorecards, intervention packets, and board-ready operating memos
- prerendered static site, JSON payloads, screenshots, and docs

## Product depth

This is not a generic dashboard shell. It is a board-decision product for teams that need to prove whether a strategic decision can survive the handoffs between executives, committees, operators, vendors, and evidence owners.

- **Buyer value:** gives CEOs, CFOs, CROs, CISOs, and operating partners a short way to see where decisions are losing integrity before the next board cycle.
- **Technical proof:** turns synthetic decision-chain records into scored lanes, integrity-gap tables, intervention posture, JSON payloads, static routes, and screenshot-ready proof.
- **GTM story:** frames Kinetic Gain as an executive intelligence layer for decision quality, not a page factory or a loose collection of demos.

## What these repos have in common

The Kinetic Gain executive-intelligence repos share the same pattern: one board-facing question, one modeled operating dataset, one scoring layer, one evidence packet, and one static/public surface that non-technical buyers can read without opening code.

- **Risk becomes legible:** handoff drift, chain breaks, escalation gaps, and confidence erosion become explicit operating signals.
- **Ownership stays attached:** each route keeps the accountable owner, audience, required evidence, and next move visible.
- **Proof is reusable:** generated HTML, JSON payloads, fixtures, tests, and screenshots all describe the same decision packet.

## Operating workflow

1. Model the decision lanes and chain-integrity signals in fixtures.
2. Score handoffs, chain breaks, escalation gaps, evidence coverage, decision clarity, and board confidence.
3. Render the board packet as static HTML plus machine-readable JSON.
4. Verify tests, coverage, smoke routes, prerendered output, and README proof assets before publishing.
5. Use the public surface as a lightweight due-diligence, board-prep, or portfolio-benchmark artifact.

## Routes

- `/`
- `/chain-map`
- `/integrity-gaps`
- `/intervention-posture`
- `/verification`
- `/docs`

## Local run

```bash
 cd board-decision-chain-integrity-brief
npm install
npm run verify
npm run prerender
npm run render:assets
```

## CLI

```bash
npx board-decision-chain-integrity-brief fixtures/board-decision-chain-integrity-brief.json --format summary
npx board-decision-chain-integrity-brief fixtures/board-decision-chain-integrity-brief-clean.json --format json
```

## Docs

- [Architecture](docs/architecture.md)
- [Origin](docs/ORIGIN.md)
- [Kinetic Gain Embedded](docs/KINETIC_GAIN_EMBEDDED.md)

## Screenshots

![Overview](screenshots/01-overview-proof.png)
![Chain map](screenshots/02-chain-map-proof.png)
![Integrity gaps](screenshots/03-integrity-gaps-proof.png)
![Intervention posture](screenshots/04-intervention-posture-proof.png)
