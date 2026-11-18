# Executive decision catalog — what should leaders understand?

**Proposal, not a live report or mandated checklist.** Start with *decisions and consequence*, not vendor dashboard widgets. The column marked "start" distinguishes **D** discovery from **V** validated scope, **M** mature measurement, and **R** business-risk integration.

| ID | Decision theme / executive question | Candidate headline outcome | What a leader might decide | Earliest responsible start |
|---|---|---|---|---|
| E01 | **Visibility:** What do we know well enough to assess? | State of source evidence, scope validation and unresolved visibility limitations | Request customer inventory validation or service-discovery work | D |
| E02 | **Service assurance:** Are we delivering the monitoring we can substantiate? | Observed source health, evidence usability, later agreed monitoring commitments | Correct provider fault, fund a recurring common-service constraint | D (observed only), V (commitment) |
| E03 | **Customer readiness:** What prevents a trustworthy customer assessment? | Outstanding scope, ownership, criticality, applicability and exception confirmations | Establish a customer validation plan | D |
| E04 | **Critical mission exposure:** Where might priority services experience consequential security failure? | Customer-validated, unresolved high-consequence exposure scenarios | Prioritize assessment or propose approved treatment | R |
| E05 | **Exploited vulnerability exposure:** Are known exploited issues persisting on priority assets? | Validated overdue, relevant exploited exposures and time at exposure | Authorize remediation capacity or escalation | V/M |
| E06 | **Detection and response:** Can priority threats be identified and handled within agreed expectations? | Tested detection and case-response effectiveness / service objectives | Address capability, process or staffing shortfall | V/M |
| E07 | **Identity & privilege:** Are the highest-value access paths appropriately controlled? | Confirmed protection of eligible privileged and sensitive access | Fund strong access controls, correct ownership gap | V/M |
| E08 | **Data protection:** Can the organization identify and reduce meaningful sensitive-data exposure? | Validated data protection failures / recovery from exposure | Prioritize data owner and control actions | V/M |
| E09 | **Public-facing resilience:** Do internet-facing and critical online services have appropriate protection? | Scoped availability, DDoS, web/application controls and tested response | Address material service exposure or protections | V/M |
| E10 | **Recovery readiness:** Can priority services recover within approved objectives? | Customer-confirmed recovery test success versus required objectives | Request exercise, improvement or investment | V/M |
| E11 | **Shared and third-party dependencies:** Can a common provider or dependency impair multiple customers? | Validated material shared dependency concerns | Coordinate enterprise-level contingency and action | V/R |
| E12 | **Action and improvement:** Did an authorized decision lead to the intended result? | Material actions closed with independently checked outcomes | Change treatment, sustain, or stop an ineffective activity | D/M |

## Adoption horizon — does not reduce the end-state

Every executive theme stays in this catalog **from the beginning**. The stage at which it becomes a reliable *outcome* varies by customer and metric. [See the adoption roadmap](measurement-adoption-roadmap.md) for introductory conversations, customer-engagement prerequisites, and mature outcomes—including recovery testing that cannot be expected from inherited logs.

**Do not remove E04–E11 just because the inherited data can't measure them.** Display them separately as planned development or customer-engagement topics. "Not assessable" is a *reporting status*, not an argument that the topic has no value.

## The first executive presentation (when we only inherited logs)

**Present E01, E02 (observed evidence health only), E03 and E12 (measurement-program follow-through only).** Mark E04–E11 **"not yet assessable"** unless a specific supported observation warrants a narrow, correctly worded notification. Do not manufacture zeros, targets, 100% availability or "secure" labels.

The executive page answers, in order:
1. **What can we substantiate right now?** Observed evidence types and quality, as-of date, caveats.
2. **What can we *not* substantiate?** Unconfirmed customer boundaries, population, services, inventory and impact.
3. **What is our provider-side responsibility?** Identified collection/measurement faults versus unknown commitments.
4. **What decision or cooperation do we need next?** Named request, proposed owner, next review.
5. **What changed since the last review?** Only compare like-for-like validated observations.

## Suggested initial executive layout (no counts)

~~~text
┌─────────────────────────────────────────────────────────────┐
│ MSSP ASSURANCE / DISCOVERY BASELINE      As of: [date]      │
├───────────────────────┬─────────────────────────────────────┤
│ Evidence observed     │ Customer scope                      │
│ [Observed / partial]  │ [Unverified]                        │
├───────────────────────┼─────────────────────────────────────┤
│ Evidence usability    │ Service commitments                │
│ [Validation needed]   │ [Not yet confirmed]                │
├───────────────────────┴─────────────────────────────────────┤
│ Attention needed: customer confirmations / provider fixes  │
│ Decision requested: authorize scope-validation outreach    │
│ Next review: [date / owner]                                 │
└─────────────────────────────────────────────────────────────┘
~~~

This is a *narrative/status* executive view, not a claim of customer cybersecurity posture. See [discovery baseline](phase-0-observation-baseline.md).

## Publishing policy

- Lead with **decision, consequence, affected customer/service, owner**, then evidence and limits.
- Do not equate absence of alerts with safety; count of blocked attacks with control effectiveness; tool enrollment with healthy protection; or monitoring existence with full scope.
- Separate provider faults from customer-owned remediation, and confirmed facts from assumptions.
- If business impact is unknown, say "impact not yet validated" rather than inventing a severe-risk rating.
- Use source/vendor scores for context only; publish our own well-defined measures if the evidence actually supports them.

Evidence examples and candidate supporting measures are in [master catalog](master-metric-catalog.md). Reporting crosswalk: [technical ⇢ management ⇢ executive](three-level-crosswalk.md).
