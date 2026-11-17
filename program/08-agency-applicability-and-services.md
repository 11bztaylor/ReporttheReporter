# Reporting Unit applicability and service participation model

**Purpose:** Comparable *definitions*, not forced comparable *scores*. State organizations operate different missions with different technology and service adoption. Distinguish controls they own from central services they subscribe to.

## Minimum participation registry (proposed)
| Field | Why it matters |
|---|---|
| agency_id / legal and operational owner | Governance, data access |
| service_id + subscribed capabilities | Whether centralized SOC has visibility and responsibility |
| service effective_start/end | Honest historical trend despite onboarding/offboarding |
| asset cohort (server, workstation, critical service etc.) | Appropriate denominator |
| applicable security outcome | Avoid scoring inapplicable requirements |
| inventory source and steward | Independent denominator, coverage proof |
| data owner + incident/risk owner | Correct handoff |
| inherited/shared/local control responsibility | Prevent assigning centrally owned gaps to an Reporting Unit |
| exceptions + expiry + approved authority | Traceable deviations |
| data entitlement classification | Isolation and sharing limits |

## Three reported states (never collapse them)
- **Applicable + measured:** a scoped result with quality and coverage.
- **Applicable + not adequately measured:** visibility gap; report separately with action owner.
- **Not applicable / outside subscribed service:** documented rationale and scope. Never treat as zero or as fully compliant.

## Cross-Reporting Unit comparison rules
- Only compare like-for-like measures and eligible cohorts.
- Always show numerator, denominator, coverage and Reporting Unit context.
- Segment enterprise results by a *common applicable cohort*; exclude unsupported peer rankings.
- Measure the central service separately: onboarding lead time, ingestion reliability, coverage of commitments, incident service delivery and Reporting Unit engagement.
- Avoid self-assessment conflict: the SOC can report service performance, but independent review/risk owners validate consequential conclusions.

## Two-dimensional view
**Reporting Unit security outcome** (where measurable) × **service/evidence coverage**. You may have an Reporting Unit with many known findings but excellent visibility, and another with few findings and inadequate monitoring; neither situation justifies a confident 'secure' label.

## Example responsibility distinction
| Observation | Possible Reporting Unit action | Possible enterprise service action |
|---|---|---|
| Vulnerabilities persist beyond agreed target | Schedule patch windows, remediate owned system | Shared engineering/contract capacity where demonstrated |
| Sensor missing on owned endpoints | Confirm assets and installation change | Correct onboarding/tool support fault |
| Critical logs absent | Confirm source and credentials | Investigate central collector, parser or retention issue |
| Inventory denominator uncertain | Validate authoritative asset registry | Provide standardized asset-reconciliation process |

**Status:** Registry fields and ownership rules require local approval; do not infer service subscriptions from tool ingestion alone.