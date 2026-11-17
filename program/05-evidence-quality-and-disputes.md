# Evidence validity, comparability, challenges

## Five validity checks
1. **Applicability:** should this measure apply to this Reporting Unit, system class, and service model?
2. **Coverage:** are all eligible assets/accounts/log sources counted, including *unknown/unscanned*?
3. **Freshness:** event time, ingestion time, source last-confirmed, snapshot time, publication time; enforce staleness limits by source.
4. **Integrity:** deduplication, asset identity joins, versioned logic, provenance, source errors.
5. **Interpretation:** does the metric establish the claimed outcome? An alert count is not a detection effectiveness measure by itself.

## Reporting Unit challenge workflow
1. Reporting Unit opens challenge against a specific metric/snapshot version with rationale and evidence.
2. Program acknowledges and marks **under review** without deleting original published measurement.
3. Technical owner validates source, tool configuration, scope, timestamps, denominator.
4. Reporting Unit confirms operational facts/asset ownership; GRC resolves any policy or applicability question.
5. Program publishes **confirmed / corrected / not measurable / unresolved**, reason, approver, date and revision link.
6. Revised metric appears as new version or corrected snapshot with retained audit history; materially impacted decisions are reopened.

## Measurement confidence (proposed)
Avoid fake precision. Start with **High / Limited / Insufficient** based on transparent evidence rules, not an arbitrary percentage.
- **High:** adequate coverage, recent verified data, clear denominator, validated source and applicable control.
- **Limited:** meaningful gaps or latency; report cautiously, avoid rankings.
- **Insufficient:** cannot substantiate the claimed conclusion; publish a coverage/action gap instead.

Confidence is *not* the same as security posture. A gap can be both high confidence (known absent telemetry) and high concern.

## Cross-Reporting Unit comparisons
Only compare compatible, approved scopes with disclosed denominators and similar definitions. Segment by control applicability, mission-critical assets, service adoption and risk context. Otherwise show separate Reporting Unit panels, not a league table.

## Snapshot integrity
Persist original evidence and source timestamps, metric rules/version, publication time, corrected status and Reporting Unit response. Recompute trend for restatements with explicit annotations; never replace history silently.

## Information handling
No production secrets, personal data, sensitive detections, IP inventories or security weakness details in this public template repository. Apply Reporting Unit–specific data governance and RBAC in production.