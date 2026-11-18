# MSSP measurement program governance and decision responsibilities

**Scope:** Who validates evidence, provides context, makes decisions and follows up. This is *not* a dashboard access-control or technical multi-tenancy plan.

## Decision and assurance responsibilities (proposed)

| Role | Program responsibility | Must not claim |
|---|---|---|
| Executive sponsor / enterprise leadership | Approve program priorities and cross-customer service investments; make decisions within authority | Own all customer risk by default |
| MSSP measurement lead | Keep metric definitions, evidence quality, reporting language, history and outcomes consistent | Assert business impact without customer/risk authority |
| MSSP technical/security teams | Produce and validate observations; explain collection limits, test findings and provider service gaps | Equate source volume or tool scores with customer security |
| MSSP service owner | Clarify and deliver verified MSSP service commitments; own provider-caused shortfalls | Infer the entire customer's environment from contracted scope |
| Customer technical / business owners | Confirm inventory, service applicability, criticality, exceptions, constraints and customer actions | Treat unverified self-report as provider validation |
| Customer / authorized risk authorities | Assess consequential risk scenarios; approve response or risk acceptance under policy | Derive formal risk solely from a metric or vendor grade |
| Program reviewer / governance representative | Review disputes, thresholds, metric usefulness and methodology changes | Change published evidence silently |

## Reporting — three connected views

1. **Executive:** material condition, potential customer/mission consequence, evidence limits, required decision and tested outcome.
2. **Technical manager:** affected customer/capability, validated trend, competing explanations, responsibility, actions and next review.
3. **Technical:** what was observed, at what time, from what evidence, with what quality controls, disagreements and reproducible checks.

The three are **presentations of one evidence chain**, not separate metric stores. Customer validation and risk approvals are *handoffs*, not a fourth executive-dashboard level or an extra NIST organizational tier.

## Proposed decision path

Observation → evidence/quality check → applicability and customer context → provider-owned fix or customer-owned action → optional authorized risk assessment → decision → verified outcome.

A scope disagreement becomes an evidence-validation issue, not automatically a customer performance failure. A source failure requires establishing that a corresponding source was **expected** before an SLA failure claim. A critical incident bypasses routine reporting review and uses established incident procedures.

## RACI principles rather than invented local assignments

- The **provider** is accountable for its contractually defined service-delivery quality.
- The **customer** is typically accountable for its inventory, owned systems and mission context.
- **Shared responsibilities** must be written and reviewed rather than silently assigned.
- **Risk acceptance** belongs to the authority designated in approved policy.
- The **measurement program** verifies what can be concluded and preserves decision/outcome history; it does not automatically own the resulting risk.

Ratify specific roles, escalations and thresholds in the pilot. Access enforcement, portal roles and connector architecture are separate engineering work.

See [charter](01-charter.md), [strategy](10-measurement-strategy.md), [applicability model](08-agency-applicability-and-services.md), and [risk bridge](07-risk-to-decision-bridge.md).
