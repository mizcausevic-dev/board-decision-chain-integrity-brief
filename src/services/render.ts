import { chainMap, integrityGaps, interventionPosture, payload, riskMap, summary, verification } from "./verticalBriefService.js";

const productTitle = "Board Decision Chain Integrity Brief";
const domain = "https://integrity.kineticgain.com";
const repoUrl = "https://github.com/mizcausevic-dev/board-decision-chain-integrity-brief";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(title: string, path: string, body: string, description: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} · Kinetic Gain</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <style>
      :root {
        color-scheme: dark;
        --bg: #07111d;
        --panel: #0d1a2b;
        --panel-2: #102032;
        --border: rgba(103, 224, 190, 0.22);
        --text: #edf2ff;
        --muted: #9fb0cf;
        --accent: #67e0be;
        --accent-2: #7dc4ff;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", system-ui, sans-serif;
        background:
          radial-gradient(circle at top left, rgba(125, 196, 255, 0.12), transparent 30%),
          linear-gradient(180deg, #050c16 0%, var(--bg) 100%);
        color: var(--text);
      }
      a { color: var(--accent-2); text-decoration: none; }
      .wrap { max-width: 1180px; margin: 0 auto; padding: 32px 24px 64px; }
      .hero, .section {
        background: linear-gradient(180deg, rgba(14, 28, 45, 0.95), rgba(10, 19, 33, 0.98));
        border: 1px solid var(--border);
        border-radius: 28px;
        padding: 28px;
        box-shadow: 0 18px 60px rgba(2, 7, 16, 0.35);
      }
      .hero { margin-bottom: 24px; }
      .eyebrow {
        display: inline-block;
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: rgba(103, 224, 190, 0.08);
        color: var(--accent);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.28em;
      }
      h1, h2 { margin: 18px 0 12px; font-family: Georgia, serif; line-height: 0.95; }
      h1 { font-size: clamp(56px, 8vw, 92px); max-width: 980px; }
      h2 { font-size: clamp(36px, 4vw, 54px); }
      .lede { color: var(--muted); font-size: 20px; line-height: 1.6; max-width: 920px; }
      .nav { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 22px; }
      .nav a {
        padding: 10px 14px;
        border: 1px solid rgba(125, 196, 255, 0.18);
        border-radius: 999px;
        color: var(--muted);
      }
      .nav a.active { color: var(--text); border-color: var(--accent); background: rgba(103, 224, 190, 0.08); }
      .metrics, .grid {
        display: grid;
        gap: 18px;
      }
      .metrics { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-top: 26px; }
      .metric, .card, .table-wrap {
        background: rgba(16, 32, 50, 0.76);
        border: 1px solid rgba(125, 196, 255, 0.12);
        border-radius: 22px;
        padding: 18px;
      }
      .metric-label, .chip {
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 12px;
      }
      .metric-value { display: block; font-size: 40px; font-weight: 700; margin-top: 10px; }
      .metric-copy { margin-top: 10px; color: var(--muted); line-height: 1.5; }
      .section { margin-top: 24px; }
      .grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
      .card h3 { margin: 12px 0 10px; font-size: 30px; line-height: 1.05; }
      .card p, li { color: var(--muted); line-height: 1.6; }
      .proof-band {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
      }
      .proof-card {
        min-height: 100%;
        border: 1px solid rgba(103, 224, 190, 0.16);
        background:
          linear-gradient(135deg, rgba(103, 224, 190, 0.08), transparent 42%),
          rgba(16, 32, 50, 0.72);
      }
      .proof-card h3 { font-size: 24px; }
      .table-wrap { overflow-x: auto; }
      table { width: 100%; border-collapse: collapse; }
      th, td { text-align: left; padding: 12px; border-bottom: 1px solid rgba(125, 196, 255, 0.12); vertical-align: top; }
      th { color: var(--accent); font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; }
      ul { padding-left: 20px; }
      pre {
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        color: var(--muted);
        background: rgba(7, 17, 29, 0.75);
        border: 1px solid rgba(125, 196, 255, 0.12);
        border-radius: 18px;
        padding: 18px;
      }
      .footer {
        margin-top: 24px;
        color: var(--muted);
        font-size: 14px;
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      ${body}
      <div class="footer">
        <span>${productTitle}</span>
        <a href="${domain}">${domain.replace("https://", "")}</a>
        <a href="${repoUrl}">GitHub repo</a>
        <a href="https://portfolio.kineticgain.com/">Portfolio</a>
        <a href="https://suite.kineticgain.com/">Suite</a>
        <a href="https://www.linkedin.com/in/mirzacausevic/">LinkedIn</a>
        <a href="https://kineticgain.com/">Kinetic Gain</a>
      </div>
    </div>
  </body>
</html>`;
}

function productDepthSection() {
  return `<section class="section">
      <span class="eyebrow">Product depth</span>
      <h2>Built as a decision-integrity product, not a generic dashboard.</h2>
      <p class="lede">This surface helps executive teams see whether a strategic decision can survive the handoffs between executives, committees, operators, vendors, and evidence owners.</p>
      <div class="proof-band">
        <article class="card proof-card">
          <div class="chip">Buyer value</div>
          <h3>Where the board should intervene first.</h3>
          <p>CEOs, CFOs, CROs, CISOs, and operating partners can see which decision chains are losing integrity before the next board cycle turns them into vague status updates.</p>
        </article>
        <article class="card proof-card">
          <div class="chip">Technical proof</div>
          <h3>Scores backed by reproducible outputs.</h3>
          <p>The repo turns synthetic decision-chain records into scored lanes, integrity-gap tables, intervention posture, JSON payloads, static routes, tests, and screenshot-ready proof.</p>
        </article>
        <article class="card proof-card">
          <div class="chip">GTM story</div>
          <h3>Executive intelligence for decision quality.</h3>
          <p>The positioning is practical: Kinetic Gain turns fractured governance, revenue, identity, and platform decisions into readable board packets with owner, evidence, and next move attached.</p>
        </article>
      </div>
    </section>`;
}

function sharedPatternSection() {
  return `<section class="section">
      <span class="eyebrow">What these repos have in common</span>
      <h2>One board question, one modeled dataset, one evidence packet.</h2>
      <div class="proof-band">
        <article class="card proof-card">
          <div class="chip">Risk becomes legible</div>
          <h3>Chain fragility stops hiding in process notes.</h3>
          <p>Handoff drift, chain breaks, escalation gaps, evidence coverage, decision clarity, and board-confidence erosion become explicit operating signals.</p>
        </article>
        <article class="card proof-card">
          <div class="chip">Ownership stays attached</div>
          <h3>Every lane keeps a real audience and next move.</h3>
          <p>Routes keep owner, committee, required evidence, and intervention posture visible so the product reads as a decision surface instead of a repo screenshot.</p>
        </article>
        <article class="card proof-card">
          <div class="chip">Proof is reusable</div>
          <h3>HTML, JSON, fixtures, and tests agree.</h3>
          <p>The generated public surface, API payload, fixture data, smoke checks, and README assets describe the same board-ready chain-integrity packet.</p>
        </article>
      </div>
    </section>`;
}

function navLinks(path: string) {
  return [
    ["/", "Overview"],
    ["/chain-map", "Chain map"],
    ["/integrity-gaps", "Integrity gaps"],
    ["/intervention-posture", "Intervention posture"],
    ["/verification", "Verification"],
    ["/docs", "Docs"]
  ]
    .map(([href, label]) => {
      const active = href === path ? ' class="active"' : "";
      return `<a${active} href="${href}">${label}</a>`;
    })
    .join("");
}

export function renderChainIntegrityOverview() {
  const executiveSummary = summary();
  const lanes = chainMap().slice(0, 4);
  const findings = riskMap().slice(0, 5);
  const cards = lanes
    .map(
      (item) => `<article class="card">
        <div class="chip">${escapeHtml(item.action)}</div>
        <h3>${escapeHtml(item.owner)}</h3>
        <p><strong>Audience:</strong> ${escapeHtml(item.audience)}</p>
        <p><strong>Chain theme:</strong> ${escapeHtml(item.chainTheme)}</p>
        <p><strong>Decision handoffs:</strong> ${item.decisionHandoffs} · <strong>Chain breaks:</strong> ${item.chainBreaks}</p>
        <p><strong>Board confidence:</strong> ${item.boardConfidenceScore}</p>
        <p>${escapeHtml(item.nextMove)}</p>
      </article>`
    )
    .join("");

  const risks = findings
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.lane)}</strong> · risk ${item.compositeChainRiskScore} · confidence ${item.boardConfidenceScore} · $${item.valueAtStakeMillions}M at stake</li>`
    )
    .join("");

  return shell(
    productTitle,
    "/",
    `<section class="hero">
      <span class="eyebrow">Chain integrity</span>
      <h1>Where is the decision path too fractured for the board to trust another cycle without chain repair?</h1>
      <p class="lede">Board Decision Chain Integrity Brief turns handoff drift, chain breaks, escalation gaps, coverage weakness, and board-confidence erosion into one executive packet for chain repair and board-safe follow-through.</p>
      <div class="nav">${navLinks("/")}</div>
      <div class="metrics">
        <div class="metric"><span class="metric-label">Chain lanes</span><span class="metric-value">${executiveSummary.items}</span><div class="metric-copy">Modeled decision-chain lanes in the current executive packet.</div></div>
        <div class="metric"><span class="metric-label">Constrained lanes</span><span class="metric-value">${executiveSummary.constrainedLanes}</span><div class="metric-copy">Lanes with high handoff, break, escalation, coverage, clarity, or confidence strain.</div></div>
        <div class="metric"><span class="metric-label">Priority lanes</span><span class="metric-value">${executiveSummary.chainPriorityLanes}</span><div class="metric-copy">Lanes that already justify locking or restoring the decision chain.</div></div>
        <div class="metric"><span class="metric-label">Value at stake</span><span class="metric-value">$${executiveSummary.valueAtStakeMillions}M</span><div class="metric-copy">Modeled exposure tied to unstable decision chains and missing integrity evidence.</div></div>
      </div>
    </section>
    <section class="section">
      <h2>Chain map</h2>
      <p class="lede">${escapeHtml(executiveSummary.boardMessage)}</p>
      <div class="grid">${cards}</div>
    </section>
    <section class="section">
      <h2>Board-visible chain exposures</h2>
      <ul>${risks}</ul>
    </section>
    ${productDepthSection()}
    ${sharedPatternSection()}`,
    "Board-ready chain-integrity brief for stabilizing decision paths, repair coverage, and board-trustworthy follow-through."
  );
}

export function renderChainMap() {
  const rows = chainMap()
    .map(
      (item) => `<tr>
        <td>${escapeHtml(item.owner)}</td>
        <td>${escapeHtml(item.audience)}</td>
        <td>${escapeHtml(item.action)}</td>
        <td>${escapeHtml(item.chainTheme)}</td>
        <td>${item.decisionHandoffs}</td>
        <td>${item.chainBreaks}</td>
        <td>${item.boardConfidenceScore}</td>
      </tr>`
    )
    .join("");

  return shell(
    "Chain map",
    "/chain-map",
    `<section class="hero">
      <span class="eyebrow">Chain map</span>
      <h1>Each lane stays tied to one owner, one audience, one chain problem, and one corrective move.</h1>
      <p class="lede">The chain-map view keeps decision-path stability readable instead of hiding it behind more committee motion.</p>
      <div class="nav">${navLinks("/chain-map")}</div>
    </section>
    <section class="section table-wrap">
      <table>
        <thead><tr><th>Owner</th><th>Audience</th><th>Action</th><th>Chain theme</th><th>Handoffs</th><th>Chain breaks</th><th>Board confidence</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`,
    "Decision-chain view showing owners, actions, chain breaks, and board-confidence strength."
  );
}

export function renderIntegrityGaps() {
  const rows = integrityGaps()
    .map(
      (item) => `<tr>
        <td>${escapeHtml(item.lane)}</td>
        <td>${escapeHtml(item.chainHeadline)}</td>
        <td>${escapeHtml(item.chainSignal)}</td>
        <td>${escapeHtml(item.finalDecisionPath)}</td>
        <td>${item.decisionHandoffs}</td>
        <td>${item.escalationGaps}</td>
        <td>${escapeHtml(item.requiredEvidence.join(", "))}</td>
      </tr>`
    )
    .join("");

  return shell(
    "Integrity gaps",
    "/integrity-gaps",
    `<section class="hero">
      <span class="eyebrow">Integrity gaps</span>
      <h1>Decision-path stability, escalation gaps, and evidence weaknesses stay visible in one scorecard instead of scattering across review notes.</h1>
      <p class="lede">This view compares chain headlines, final decision paths, escalation-gap load, and the exact evidence needed to make the next board packet trustworthy.</p>
      <div class="nav">${navLinks("/integrity-gaps")}</div>
    </section>
    <section class="section table-wrap">
      <table>
        <thead><tr><th>Lane</th><th>Headline</th><th>Chain signal</th><th>Final decision path</th><th>Handoffs</th><th>Escalation gaps</th><th>Required evidence</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`,
    "Integrity-gap view showing chain headlines, decision-path stability, escalation load, and evidence needs."
  );
}

export function renderInterventionPosture() {
  const rows = interventionPosture()
    .map(
      (item) => `<tr>
        <td>${escapeHtml(item.lane)}</td>
        <td>${escapeHtml(item.action)}</td>
        <td>${item.compositeChainRiskScore}</td>
        <td>${escapeHtml(item.handoffs.severity)}</td>
        <td>${escapeHtml(item.chainBreaks.severity)}</td>
        <td>${escapeHtml(item.escalationGaps.severity)}</td>
        <td>${escapeHtml(item.coverage.severity)}</td>
        <td>${escapeHtml(item.clarity.severity)}</td>
        <td>${escapeHtml(item.boardConfidence.severity)}</td>
      </tr>`
    )
    .join("");

  return shell(
    "Intervention posture",
    "/intervention-posture",
    `<section class="hero">
      <span class="eyebrow">Intervention posture</span>
      <h1>Composite chain risk stays tied to the exact weakness creating board-trust erosion.</h1>
      <p class="lede">This intervention view keeps handoff strain, chain breaks, escalation gaps, coverage, clarity, and board confidence in one board-readable posture instead of separate ops narratives.</p>
      <div class="nav">${navLinks("/intervention-posture")}</div>
    </section>
    <section class="section table-wrap">
      <table>
        <thead><tr><th>Lane</th><th>Action</th><th>Risk</th><th>Handoffs</th><th>Chain breaks</th><th>Escalation gaps</th><th>Coverage</th><th>Clarity</th><th>Board confidence</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`,
    "Intervention posture view for chain risk, handoff integrity, escalation fragility, and board-confidence severity."
  );
}

export function renderVerification() {
  const notes = verification().map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  return shell(
    "Verification",
    "/verification",
    `<section class="hero">
      <span class="eyebrow">Verification</span>
      <h1>How this decision-chain packet is modeled and what it is safe to infer from it.</h1>
      <p class="lede">The verification layer keeps synthetic assumptions and safe-use boundaries visible before anyone mistakes the sample for a live board chain-integrity brief.</p>
      <div class="nav">${navLinks("/verification")}</div>
    </section>
    <section class="section">
      <ul>${notes}</ul>
      <pre>${escapeHtml(JSON.stringify(payload().report.summary, null, 2))}</pre>
    </section>`,
    "Verification notes for the Board Decision Chain Integrity Brief sample and modeled outputs."
  );
}

export function renderDocs() {
  return shell(
    "Docs",
    "/docs",
    `<section class="hero">
      <span class="eyebrow">Docs</span>
      <h1>Board Decision Chain Integrity Brief docs</h1>
      <p class="lede">This surface packages board-readable decision-chain signals into reproducible routes and JSON outputs.</p>
      <div class="nav">${navLinks("/docs")}</div>
    </section>
    <section class="section">
      <ul>
        <li><code>/chain-map</code> keeps owner, audience, action, and chain-break pressure attached.</li>
        <li><code>/integrity-gaps</code> compares chain signals, final decision paths, and evidence needs.</li>
        <li><code>/intervention-posture</code> scores handoffs, chain breaks, escalation gaps, coverage, clarity, and board-confidence strain.</li>
        <li><code>/api/payload</code> exposes the reproducible decision-chain packet.</li>
      </ul>
    </section>
    ${productDepthSection()}
    ${sharedPatternSection()}`,
    "Product documentation for Board Decision Chain Integrity Brief and its board-ready routes."
  );
}
