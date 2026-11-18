# Phase 0 — inherited logs, not-yet-validated customers

**Scenario:** A new MSSP has access to the former provider's available security logs but customer relationships, validated asset inventories, business criticality, subscribed services, expected source lists and agreements have not yet been reviewed.

**Objective:** Build an honest **observation and measurement-readiness baseline** before attempting a customer posture assessment. This phase does **not** require counts, coverage percentages, rankings or target achievement.

## Long-term measures are still part of the plan

Phase 0 only limits **which conclusions we can support today**. It does **not** remove mature outcomes (recovery testing, business impact, meaningful control effectiveness) from the program. Use [the adoption roadmap](measurement-adoption-roadmap.md) to convert unavailable outcome measurements into constructive customer engagement and capability-development questions.

## Initial status board (qualitative)

| What the dashboard asks | Suggested label | Evidence to seek (examples, not prescribed tools) | What we can say today |
|---|---|---|---|
| What is actually visible? | Observed / not yet profiled | Source categories, time range, record samples, origin identifiers | "These kinds of observations are present in the inherited record." |
| Is the evidence interpretable? | Usable / partial / untested | Expected field presence, timestamp plausibility, sample validation | "The records can or cannot yet support the proposed investigative question." |
| Can observations be assigned to customers? | Confirmed / tentative / unresolved | Entity/tenant hints, naming, service documentation, human validation | "Customer mapping is unverified where indicated." |
| What should we be monitoring? | Unverified scope | Customer registers, service commitments, agreed exclusions, operational contacts | "The expected source population is not yet agreed." |
| Are observations current? | Fresh as observed / stale / unknown expectation | Source and event time, last record, clock quality | "Last seen is factual; an SLA breach needs a documented expectation." |
| Can any security outcome be assessed? | Not assessable / narrow observation | Tested detection, customer-confirmed context, valid denominators | "Broad protection and risk conclusions are premature." |
| What needs action? | Request / investigate / review | Provider data-quality issues, customer validation questions, named proposed owner | "These prerequisites would unlock a reliable next measurement." |

**No evidence of a source is not evidence the source should exist.** Without an approved expected-source list, do not call an unobserved source "missing". With only logs we can often establish evidence presence and age; we cannot infer complete asset inventory, collection health of non-reporting devices, protection effectiveness or business impact.

## First three dashboard compositions

### Executive — "what can we responsibly conclude?"
Top: **Evidence available**, **Customer boundaries unconfirmed**, **Measurement readiness**, **Decisions/confirmations requested**. Below: concise caveat and request to jointly validate scope, service expectations and criticality. Unknown metrics appear as **NOT ASSESSED**, not alarming red percentages.

### Management — "what must be clarified?"
By proposed customer and service capability: observation type, attribution state, freshness/quality questions, suspected provider fault, customer validation request, proposed owner, next review and blocker. Keep provider-owned collection checks separate from customer-owned scope responses.

### Technical — "what does the evidence demonstrate?"
By observation class: sample provenance, earliest/latest event observed, clock interpretation, parse field coverage, identifier collision/deduplication concerns, inferred source type, test feasibility and confidence in customer assignment. Explain what a query or rule would need to validate *without prescribing the platform*.

## Prioritized discovery cycle

1. **Document inherited evidence categories and boundaries** without inferring total customer scope.
2. **Test provenance, timestamp logic and usability** on representative samples.
3. **Identify plausible customer/service attribution**, marking confidence and unresolved collisions.
4. **List business questions that remain unanswerable** and the minimum customer/provider confirmations needed.
5. **Send scope and service-validation requests** via the appropriate relationship owners.
6. **Promote only justified metrics to scoped reporting** once prerequisites are validated.
7. **Revisit earlier conclusions** if later customer information changes the apparent population or context.

## Sample report (no synthetic figures)

> **Observation:** Security event records from several source categories are available for initial review.  
> **Limitation:** Customer inventories, critical service classifications and expected monitoring commitments are not yet confirmed.  
> **Conclusion:** Data availability may be assessed; overall monitoring coverage, customer protection and organizational risk are **not yet assessable**.  
> **Next decision:** Authorize customer scope confirmation and establish the provider's current monitoring obligations; review evidence-quality findings separately.

## Exit conditions for a metric (not all customers simultaneously)

A measure moves beyond phase 0 only when the **specific** customer's capability applicability, population (if a ratio is proposed), evidence reliability, decision owner, and limits have been reviewed. Different customers and measures advance at different rates. The program does not wait for all customers to be onboarded.

See [reporting rules](evidence-and-reporting-rules.md) and [executive questions](executive-decision-catalog.md).
