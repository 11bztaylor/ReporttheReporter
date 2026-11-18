# Phase 0 starter metric cards — four worked definitions

**Status: DRAFT / proposed.** These examples are intentionally **qualitative**. They are intended for an MSSP inheriting security logs before customer inventories and service expectations can be validated. They do *not* create live findings, authoritative scopes, SLAs or formal risk conclusions.

These four cards instantiate existing canonical candidate IDs from the [master catalog](master-metric-catalog.md), not additional metrics. The associated executive questions are **E01 visibility**, **E02 service evidence**, and **E03 customer readiness**. Suggested support examples are not mandatory tools.

## V01 — Observed evidence footprint

**Decision question:** Which *kinds* of evidence are demonstrably available to the new provider, and what is still uncharacterized?

- **Evidence examples:** Inherited record samples, source-class descriptions, event/source time, identity hints, available documentation.
- **Qualitative states:** Observed and sampled / Observed but not characterized / Unconfirmed.
- **Evidence gate:** A representative source record exists, within a stated time period, and source classification has been validated before labeling a capability.
- **Dangerous inference:** "We see web traffic" does **not** mean "all customer web traffic is monitored."
- **Proposed owner/action:** MSSP measurement lead requests source-category classification and records caveats.
- **Executive:** "We can confirm available evidence classes; completeness across customer systems remains unknown."
- **Manager:** "Classify inherited sources and identify which classes require customer or provider confirmation."
- **Technical:** "Identify representative records, timestamps, source/tenant hints and unsupported assumptions."
- **Success review:** Evidence classes are documented with dates, validation status and known limitations.

## P01 — Observed evidence recency

**Decision question:** For an inherited source we actually know about, do the visible records support a freshness statement?

- **Evidence examples:** Event time, source-reported time, most recent received record, clock-skew checks, evidence history.
- **Qualitative states:** Recent according to documented observation window / Stale observed records / Timestamp unreliable / Not assessable.
- **Evidence gate:** Specify the source and observation window; validate timestamps and preserve difference between observed silence and contractual failure.
- **Dangerous inference:** "No records arrived recently" is not a contractual service failure until an applicable expected-source obligation is established.
- **Proposed owner/action:** MSSP technical owner validates timestamp/source behavior and checks whether the source is actually expected.
- **Executive:** "Freshness has been checked for selected inherited sources; no overall service-attainment claim is made."
- **Manager:** "Review anomalous source recency and classify potential provider faults separately from unknown source expectations."
- **Technical:** "Validate event time versus availability time, clock shifts, collection boundaries and last-seen source identity."
- **Success review:** Recency claims have a traceable source and window; any service-fault assessment is appropriately scoped.

## P02 — Evidence usability for investigation

**Decision question:** Can the observed information actually support representative security analysis?

- **Evidence examples:** Sample fields needed for approved use cases, parse/semantic checks, missing context, timestamps, investigation exercises.
- **Qualitative states:** Representative question supported / Partial fields or context / Untested / Not assessable.
- **Evidence gate:** Document a specific question and demonstrate that the relevant information can answer it; do not equate "parsed" with "detectable threat."
- **Dangerous inference:** Valid JSON or large event volume does not imply useful detections or completeness.
- **Proposed owner/action:** MSSP monitoring lead documents evidence usability gaps and candidate investigative requirements.
- **Executive:** "Selected inherited evidence is usable for defined questions; broader detection effectiveness has not yet been established."
- **Manager:** "Prioritize gaps that prevent meaningful investigation and maintain a separate remediation owner."
- **Technical:** "Check field semantics, source time, identity correlation, test completeness and reproducible example records."
- **Success review:** Reviewers can reproduce an agreed investigative question against an appropriate sample.

## V02 — Customer attribution confidence

**Decision question:** Can inherited records be assigned to a customer with enough confidence for customer-specific reporting?

- **Evidence examples:** Existing customer/source maps, naming and identity metadata, service documentation, source owners and customer confirmation.
- **Qualitative states:** Validated attribution / Provisional mapping / Conflicting mapping / Unknown.
- **Evidence gate:** Evidence for the *specific* customer/source must support the claimed attribution; a naming heuristic alone is provisional.
- **Dangerous inference:** Source names, IP ranges or shared network addresses can map to the wrong customer.
- **Proposed owner/action:** Provider measurement lead tracks provisional mappings; customer representative or approved source steward validates where necessary.
- **Executive:** "Customer-specific conclusions remain limited until attribution is reviewed."
- **Manager:** "Maintain a list of customer mapping decisions needed without treating unresolved mappings as customer security failures."
- **Technical:** "Review identity collisions, shared endpoints, historic source changes and mapping evidence."
- **Success review:** Validated customer mappings carry a dated rationale; ambiguous records remain unassigned rather than guessed.

## A fifth measure that must **wait** — V03

**Customer population reconciliation** is essential *later*. If a customer says 70 systems and discovery appears to identify 100, do not immediately report 70% coverage or 30 hidden assets. First assess identity duplicates, unowned/legacy observations, applicability, time differences and contractual scope. Until then publish **"scope discrepancy under review."**

## What the four cards roll up to

| Executive theme | Source cards | Defensible Phase 0 message |
|---|---|---|
| E01 — Visibility | V01, V02 | "We know what categories we can observe, but not total customer scope." |
| E02 — Provider-side evidence | P01, P02 | "We can evaluate inherited evidence quality but not all contractual service expectations." |
| E03 — Missing customer context | V02 now; V03 after customer validation | "Customer attribution and expected population require confirmation." |

**Use [metric template](../templates/metric-specification.md) to approve and version any of these.** Values, windows, action authority and actual customer records must be determined locally; none are prescribed here.
