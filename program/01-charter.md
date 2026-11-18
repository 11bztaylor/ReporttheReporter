# Program charter — draft for sponsorship

## Working name
**Managed Cybersecurity Assurance & Performance Program (Report the Reporter).** Proposed public, vendor-neutral MSSP measurement and decision-support framework.

## Mission
Give a centralized security service provider and its customers consistent ways to understand **what is observable**, **how reliable the observation is**, **what actions are justified**, **who owns them**, and **whether they worked**. Support cross-customer decisions without blending vendor scores or pretending unlike customer environments are directly comparable.

## Problem
Multiple security vendors export incomparable grades and incident/traffic counts. The MSSP may inherit rich log streams before it knows each customer's authoritative inventory, contracted services, system criticality, risk acceptance, exclusions or even complete source expectations. A polished dashboard that presents these data as a comprehensive security score would mislead leadership.

## Program outcomes
1. **Decision usefulness:** every promoted executive measure answers a decision with a named authority and plausible action.
2. **Evidence discipline:** preserve observed vs customer-declared vs provider-verified vs unknown, with time, provenance, population and limitations.
3. **Clear accountability:** separate MSSP service-delivery issues from customer security decisions and jointly owned questions.
4. **Comparable meaning:** common definitions where appropriate, customer-specific applicability and documented exceptions. No universal score.
5. **Continuous follow-through:** validated trends, decision history, and checking whether an intervention improved an intended outcome.
6. **Reduced duplication:** one measurement catalog and process drawing from NIST SP 800-55, ISCM, CSF/CDM lessons and risk-management guidance.

## Scope
**In:** executive question catalog; candidate metric register and governed specifications; evidence requirements *by category*; measurement-readiness criteria; customer applicability; service assurance; reporting language at executive, management and technical levels; review/feedback/decision handoff; a staged discovery-to-mature baseline.

**Out of scope:** operational software and dashboard coding, customer portal/access controls, RBAC, platform configuration, API integrations, connector engineering, data warehousing and internal inventory storage design. These are separate implementation decisions. This program does not conduct an enterprise-wide risk certification, override customer authority or replace incident response.

## Intended operating phases
- **Phase 0 — Discover/observe:** inherited logs; no unverified fleet/security percentages.
- **Phase 1 — Validate scope:** customer confirmation of monitoring expectations, inventories, exclusions and critical services.
- **Phase 2 — Mature measurements:** verified quality, effectiveness, remediation, resilience and response metrics with repeatable time trends.
- **Phase 3 — Risk decision integration:** material measured conditions connected to customer-approved impact scenarios and authorized risk action.

Phase applies **per customer and metric**, not globally.

## Initial priorities
Present decision questions for **evidence visibility (E01)**, **observed MSSP data quality (E02)**, **missing customer scope prerequisites (E03)** and **program follow-through (E12)**. Additional decision questions become publishable as their individual prerequisites are established. See [executive catalog](../metrics/executive-decision-catalog.md) and [master measures](../metrics/master-metric-catalog.md).

## Success checks for a first pilot
- A clear register of observed inherited evidence classes and **unknowns**, without made-up coverage.
- Three to five selected decision questions with reviewed evidence requirements and owners.
- An explicit distinction between provider-fixable measurement faults and customer-scope questions.
- At least one documented validation request or decision, and a scheduled outcome check.
- Consistent executive, manager and technical language for the same condition.
- Local stakeholders can challenge evidence; corrections and limitations are retained.

## Decision authority
The measurement function validates the **claim**. The customer validates mission and asset context. The provider owns its own service obligations. Authorized organizational leaders, risk authorities and customer owners make **treatment, investment and risk acceptance** decisions under their governing policies. Program reporting is not unilateral customer security certification.

## Program references
[Measurement strategy](10-measurement-strategy.md) · [MSSP applicability](08-agency-applicability-and-services.md) · [Risk handoff](07-risk-to-decision-bridge.md) · [Reporting rules](../metrics/evidence-and-reporting-rules.md) · [Sources](../references/measurement-source-review-2026-11-18.md).
