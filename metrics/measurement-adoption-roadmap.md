# Measurement adoption roadmap — introductory to mature (without shrinking the destination)

**Status: Proposed addition to the existing 12 executive themes and 46 candidate measures.** The end-state remains the same. This overlay makes the path to that end state explicit for a new MSSP inheriting logs but lacking customer input.

## The essential difference

A metric may be **strategically important today** but **unreportable as an outcome today**. That distinction is not a defect in the metric or the customer.

| Label | Why it exists | A realistic early output | Later substantive measurement |
|---|---|---|---|
| **START — Introduce** | We can explore the question with inherited records or a provider-side process | Observed evidence class; unknown scope; proposed validation request | Validated source or customer measure |
| **BUILD — Establish** | Requires agreed scope, definitions, business owners or service expectations | Customer engagement request and readiness/definition status | Defensible scoped coverage and process results |
| **MATURE — Demonstrate** | Requires exercises, corroborated history, repeated validations, business context or authorized decisions | Plan and ownership for establishing the capability | Tested effectiveness, trend and consequence-based decisions |

**These are measurement-adoption horizons, not customer security grades, maturity certifications or mandatory milestones.** A mature outcome can be discussed and planned in an introductory meeting; customer engagement can start before the measurement has a valid numerator or denominator.

### Four separate concepts to keep distinct

1. **End-state relevance:** Is this a meaningful decision area for the particular customer and subscribed service?
2. **Adoption horizon:** Start, build or mature—what kind of participation/practice will enable it?
3. **Evidence readiness:** D = discovery; V = validated scope; M = repeated/tested outcome; R = authorized risk interpretation. These are the **existing** catalog phase tags, not replaced by this overlay.
4. **Current customer status:** Not assessed, engagement requested, scope being validated, measurement established, or not applicable. A missing test result is **not** a failed recovery test.

The *end-state program* should not be limited to the data we already have. Inherited logs are an entry point, not the ceiling for the metric catalog.

## Executive themes: what can be introduced now vs established later

| Theme | Introduction or current MSSP observation | Enabling customer/provider conversation | Mature outcome (when applicable) |
|---|---|---|---|
| **E01 Visibility** | Identify inherited evidence classes and attribution uncertainty | Confirm inventory and expected source scope | Verified monitoring coverage and remaining blind spots |
| **E02 Service assurance** | Describe usable evidence and known source freshness | Confirm service objectives and provider/customer boundaries | Service commitment attainment and repeatable restoration results |
| **E03 Customer readiness** | Identify unanswered questions about ownership, services and impact | Hold scope review and assign stewards | Validated scopes, managed exceptions and transparent revisions |
| **E04 Mission exposure** | Record that mission criticality cannot be inferred from logs | Engage business/critical-service owners on plausible scenarios | Authorized, evidence-linked risk treatment decisions |
| **E05 Exploited vulnerabilities** | Note possible relevant exposure evidence only when supported | Confirm affected assets, maintenance constraints and targets | Verified remediation and persistent exposure trends |
| **E06 Detection/response** | Validate investigation-ready observations, not tool alert volume | Agree key use cases, notification objectives and response authority | Tested detection performance and incident outcomes |
| **E07 Identity/privilege** | Describe identity-related observations without fleet completeness claims | Confirm privileged population, safeguards and ownership | Validated protection and lifecycle effectiveness |
| **E08 Data protection** | Identify potential data-protection evidence and limits | Agree data classes, owners, and applicable controls | Verified significant leakage prevention, response and corrective outcomes |
| **E09 Public-facing resilience** | Identify available internet/web/DDoS *evidence classes* | Confirm critical applications and protection scope | Tested service protection and continuity outcomes |
| **E10 Recovery readiness** | **Start the question, not an RTO metric:** which services and recovery owners are known? | Invite owners to establish priorities, recovery objectives and an exercise plan | Tested recovery time and data-loss results against approved objectives |
| **E11 Shared dependencies** | Identify possible shared-source or shared-service observations | Validate suppliers, service dependencies and owner accountability | Reviewed concentration scenarios and tested mitigations |
| **E12 Decision outcomes** | Record validation questions and accountable next actions | Establish consistent decision and verification process | Show whether actions produced the intended change |

The middle column is a **constructive engagement opportunity**. It is not a demand that every customer provide everything immediately or that every service requirement apply universally.

## Recovery time: the distinction that matters

| Stage | Defensible program question | Example supporting evidence | Suitable report |
|---|---|---|---|
| **Introductory** | Do we know which customer-owned services are considered critical and who is responsible for recovery? | Customer conversations, service descriptions or explicitly missing context | "Recovery readiness cannot yet be assessed; service prioritization and ownership need confirmation." |
| **Build** | Has the customer established and approved a recovery time objective (RTO), recovery point objective (RPO), recovery approach and test plan? | Business impact assessment, approved objectives, recovery exercise plan | "Recovery objectives and test planning are [confirmed / being developed / unknown]." |
| **Mature** | Have priority services *actually* recovered within those objectives in an exercise or event? | Timed restorations, integrity checks, exercise results, exceptions | "For the defined and tested service cohort, observed recovery performance [met/did not meet] approved objectives [as of date]." |

**Important challenge:** No log event proves a complete recovery test, and the MSSP should not assume it owns business continuity simply because it monitors security logs. The program can **surface the need**, offer relevant evidence where available, and invite the correct customer/business owner to establish the process. A customer without established RTOs is not automatically "failing"; report **unestablished/unknown objective**, not an invented recovery-time percentage.

## What actually appears on the dashboards

- **Executive:** Keep mature themes visible under **"Future / customer engagement needed"** instead of displaying made-up values or red failure badges. A concise narrative should explain why the theme matters and what next decision/partnership would unlock it.
- **Manager:** For each chosen outcome show *current adoption horizon*, *data currently available*, *customer prerequisite*, *proposed owner*, and *next review*, separate from observed security status.
- **Technical:** Show observable evidence now; specify which missing evidence type, test, owner confirmation, or validation is required for the future measure. Do not force a calculation prematurely.

### Suggested status language

| Program state | Recommended wording | Do not say |
|---|---|---|
| Metric is in the end-state catalog, not yet initiated | **Planned — not assessed** | "Customer failed metric" |
| Discussion or request has been initiated | **Engagement requested** | "Overdue noncompliance" without an applicable requirement |
| Owner is defining goals/eligibility | **Definition in progress** | "Coverage is zero" |
| Definition and evidence criteria approved but test not done | **Awaiting validation/test** | "Failed test" |
| Appropriate evidence validates the outcome | **Measured — scope and date stated** | "Customer is secure" |
| Unrelated to subscribed service/customer | **Not applicable — rationale documented** | "Green / compliant" |

## How to select work without lowering ambition

Use the existing 46-metric catalog as the **north star** and select a smaller *active development portfolio*. Promote work when a business decision is meaningful and the next enabling step is feasible—not merely because a vendor produces a convenient graph. An optional customer can move directly into mature measurements if they already have tested evidence; another can remain in discovery while the provider improves inherited source quality.

**Steelmanned limitation:** The program should help customers identify useful security and resilience practices, but it does not have authority to impose recovery objectives, define mission criticality or assign risk acceptance across customers. Applicability and real authority must be determined locally.

[Executive decision catalog](executive-decision-catalog.md) · [Master catalog](master-metric-catalog.md) · [Phase 0 starting baseline](phase-0-observation-baseline.md) · [Evidence language rules](evidence-and-reporting-rules.md)
