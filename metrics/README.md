# MSSP measurement catalog

**Primary register:** [46 candidate metrics](master-metric-catalog.md), organized across visibility, service assurance, exposure, detection/response, identity, internet/network, data/application, resilience, third parties and governance.

**Do not use this directory as a checklist to score customers.** Metrics are candidates until scoped, defined, evidence-validated and tied to a decision. All headings, measure IDs and adoption phases are local proposals.

## Work backward from the decision

| Step | Program artifact |
|---|---|
| What does an executive need to decide? | [12 executive decision themes](executive-decision-catalog.md) |
| Which of the 46 measures primarily supports which executive question? | [Full decision-to-measure map](decision-to-measure-traceability.md) |
| Which management and technical measurements support it? | [Three-level crosswalk](three-level-crosswalk.md) |
| How does each metric progress from introductory to mature? | [Adoption roadmap](measurement-adoption-roadmap.md) |
| What might we measure or use as evidence? | [Master catalog](master-metric-catalog.md) |
| What may we truthfully claim? | [Evidence / reporting rules](evidence-and-reporting-rules.md) |
| How do we start with logs but without customer scope? | [Phase 0 observation baseline](phase-0-observation-baseline.md) |
| What would make one measure operational? | [Metric specification template](../templates/metric-specification.md) |

## Three distinct kinds of reporting

1. **Customer security outcomes:** condition of customer controls and services *within validated scope*.
2. **MSSP service assurance:** whether we reliably meet agreed monitoring, investigation and communication expectations.
3. **Measurement trust:** whether evidence, population, attribution, freshness and validation actually support a published statement.

Vendor scores (web, DDoS, endpoint, phishing, vulnerabilities, SIEM, etc.) are **supporting observations**, not directly comparable enterprise KPIs. Normalize underlying outcomes and applicability, not vendor grade scales.

## Existing worked examples (retain for reference)

- [Vulnerability discovery, coverage and verified remediation](vulnerability-remediation.md).
- [Expected versus usable security monitoring evidence](security-telemetry-coverage.md).
- [Endpoint enrollment versus verified healthy protection](endpoint-coverage.md).

These examples are *conditional*: they require a validated eligible customer population and evidence appropriate to the calculation. They should not be shown as numeric customer posture indicators during Phase 0.

**When inventing a new metric, ask:** Which decision does it enable, who can make that decision, and what evidence would disprove our conclusion?
