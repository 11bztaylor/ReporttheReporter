# Evidence, measurement readiness and reporting language

**Goal:** Make honest reporting possible when customer inventories and contracts are not yet confirmed, when vendors use incomparable scorecards, and when the MSSP is assessing its own service quality.

## 1. Five independent questions for every proposed measure

1. **Applies?** Is this capability and asset/service cohort applicable to this customer?
2. **Expected?** Do we have an approved basis for knowing what *should* exist (including denominator)?
3. **Observed?** What does currently available evidence establish, and as of when?
4. **Validated?** Has the observation been independently checked or customer-attested as appropriate?
5. **Actionable?** Who can correct a gap, confirm scope, or authorize an informed decision?

A **customer assertion** and a **provider verification** are different kinds of evidence, not automatically competing scores. Source evidence may be incomplete, stale, contradictory or duplicated.

## 2. Separate reporting dimensions, not a single grade

| Dimension | Example states | Meaning |
|---|---|---|
| Applicability | Applicable; not applicable; not determined | Whether the claim belongs to the service/customer |
| Scope basis | Customer-declared; provider-observed; reconciled; unconfirmed | How the eligible population was established |
| Evidence quality | Validated; provisional; conflicting; stale; unavailable | How much confidence the specific observation warrants |
| Measurement readiness | Candidate; discovery-only; scoped; decision-grade; paused | Whether publishing the intended calculation is justified |
| Action ownership | Customer; MSSP; shared; risk authority; pending clarification | Who can resolve the *specific* question |

**Never compress these five into a universal 0–100 risk / security score.** A qualitative status like "not assessable" is an accurate, useful output.

## 3. Provider versus customer attribution

- When the customer hasn't furnished an authoritative inventory, show **denominator unknown**, not 100% of observed sources.
- When a provider-managed collector fails on an agreed source, report a **provider service issue**, even if downstream customer security visibility is impaired.
- When ownership, eligibility or subscribed service is disputed, report **scope pending validation**, not a customer control failure.
- When a customer supplies an inventory but we cannot independently discover other assets, say **customer-declared scope** and describe the verification limit; do not claim full-environment assurance.
- When independently discovered identities exceed the customer declaration, report **possible scope discrepancy** pending identity matching, duplicate removal and exclusions. Extra observed identities might be shared infrastructure, legacy records, NAT, non-assets or outside service scope.

## 4. Numerator, denominator and time discipline

If a ratio is used, state its numerator, its **eligible** denominator, the time period, exclusions, and provenance. A zero numerator with an **unknown denominator** yields *not assessable*, not 0%. If no observations exist, distinguish "zero events observed in known working scope" from "data unavailable."

Timestamp statements should distinguish observation/event time, source-updated or scan time, validation time and publication time. Confirmed closure must be supported by appropriate follow-up evidence; absence from a later export is not confirmation.

When coverage expands, annotate apparent metric deterioration due to newly observed assets. Do not compare unlike customer cohorts or different vendor definitions as one trend.

## 5. Language ladder — what can safely be said?

| Evidence condition | Safe wording | Avoid |
|---|---|---|
| Source records exist; scope unknown | "We observe records from [source class] as of [date]. Coverage against the customer's total environment has not been established." | "Customer is monitored." |
| Customer reports a population | "Customer-declared population is [value]; independent completeness validation is pending." | "Verified asset population is [value]." |
| Observed identities exceed declared items | "Potential discrepancy requires deduplication, ownership and applicability review." | "Customer hid assets." |
| Source appears silent; no expectation exists | "No recent records observed in available evidence; expected operation and scope are not confirmed." | "Logging is broken." |
| Validated expected source is silent | "Agreed monitoring source [category] is not meeting the documented freshness requirement." | "Customer systems are insecure." |
| Risk impact not validated | "A control condition has been observed; business significance requires customer risk-owner assessment." | "Critical enterprise risk." |
| Vendor blocks many threats | "A vendor reports mitigation events; protection effectiveness requires scope and outcome validation." | "The customer is safe because attacks were blocked." |
| Case closed | "The action is recorded as completed; outcome validation is [pending/completed]." | "Risk eliminated." |

## 6. Colors mean different things only when paired with text

- **Green — VERIFIED:** a specified fact/check actually passed within stated scope and date; not a blanket "secure" customer.
- **Amber — CAUTION:** partial, provisional, disputed or stale evidence requiring review.
- **Red — BLOCKED:** measurement cannot be made due to a material missing prerequisite; separate a confirmed critical operational incident from a measurement blocker.
- **Blue — INFO/PROPOSED:** explanatory context, candidate metrics, or not-yet-approved actions.
- **Gray — NOT APPLICABLE / NOT ASSESSED:** inapplicability or a deliberate absence of assessment, clearly labeled.

These are *suggested communication conventions*, not a vendor security scale or approved risk-rating standard.

## 7. Example response to leadership

**Executive:** "We have inherited multiple types of security log evidence. We can begin validating data health, but cannot yet claim fleet-wide monitoring completeness or customer security posture. We request customer scope and service confirmation."

**Manager:** "The next review will categorize observed evidence by source class and attribution confidence; track collection-quality questions as MSSP work and scope/criticality requests as customer collaboration."

**Technical:** "Profile time stamps, schema usability, observed identifiers and duplicates for inherited sources; preserve original evidence references and log unresolved customer mappings."

**Success condition:** both customer and MSSP understand which claim has become defensible, which remains unknown, and who owns each next action.

## 8. Decision promotion and disputes

Publish a metric as *decision-grade* only after its owner, scope and formula/qualitative rubric, provenance, freshness, limitations and owner have been reviewed. Preserve challenges and their resolutions. If criticality or a business consequence is needed, request it from the customer; the measurement program must not silently assign that judgment.

A vendor grade can remain a source annotation in a metric record. If we normalize across vendors, normalize **the underlying outcome and eligible population**, *not the scores*. See [candidate catalog](master-metric-catalog.md).
