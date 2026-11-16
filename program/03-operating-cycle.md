# Continuous operating cycle

1. **Start with a decision question:** e.g., Do recurring remediation misses require a shared patch service, policy change, or capacity intervention?
2. **Register scope and applicability:** agency, relevant services, authoritative eligible inventory, exclusions, participation model.
3. **Define measure:** formula, numerator, denominator, severity context, source, latency, retention, thresholds and intended decision.
4. **Acquire continuously:** automated, minimally privileged collection where feasible; preserve collection time and source update time separately.
5. **Validate:** ownership, duplicates, stale records, asset identities, tool coverage, missingness and disputes.
6. **Interpret trends:** look at persistence, exposure duration, remediation targets, critical assets, uncertainty and baseline shifts.
7. **Route:** monitor, correct data, request agency action, or escalate to enterprise; emergency response operates independently.
8. **Record a decision:** decision-maker, date, evidence version, action, responsible owner, due date, rationale and exceptions.
9. **Evaluate outcomes:** review later using stable metric versions; annotate policy/tool/asset-scope changes.
10. **Revise responsibly:** version calculations and approvals; restate historical results when appropriate, never silently rewrite prior published facts.

## Cadence (proposal, not NIST mandated)
- Continuous/daily: ingestion and health checks; operational escalation as needed.
- Weekly: metric quality, exceptions, agency review.
- Monthly: agency performance and action review.
- Quarterly: cross-agency strategic decisions and outcome review.
- Annually: governance, metric portfolio, applicability and thresholds.

## Reporting contract
Each view has **As of (event)**, **Collected at**, **Published at**, **Coverage**, **Quality/confidence**, **Methodology version**, and **Known limitations**. Mark changed or remediated-since-snapshot findings when current evidence is available. A metric can be accurate *as of* yesterday without claiming the same status today.

## Decision-grade vs operational
An urgent high-impact threat may need immediate escalation; normal day-to-day spikes should not translate automatically into budget recommendations. A persistent gap is a prompt for root-cause analysis, **not** proof of a particular purchase.

See [decision path](04-decision-and-escalation.md).