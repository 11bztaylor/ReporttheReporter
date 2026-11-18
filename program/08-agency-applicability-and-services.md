# Customer applicability, MSSP participation and shared responsibility

**Purpose:** Define **what a security measure can meaningfully cover for a particular customer**, distinguishing the customer's entire environment from subscribed/observed MSSP services. "Customer" includes government agencies, departments, business units and other contracted recipients.

## Questions before measuring a customer

| Question | Why it matters |
|---|---|
| Which customer and service does this observation belong to? | Avoid misattribution in shared or inherited telemetry |
| Is the capability subscribed, required, optional, local or out of scope? | Do not score a customer for something inapplicable |
| What is the eligible population, and who confirms it? | A numerator without a trustworthy denominator is not coverage |
| Does evidence show enrollment, operation or tested effectiveness? | These are different assurance claims |
| What exclusions and exceptions have an accountable rationale? | Avoid misleading peer comparisons |
| What is a customer-owned task versus provider-owned service failure? | Correct accountability and escalation |
| What is the observation and validation date? | Prevent stale or historical records from masquerading as current |

**Do not infer a contract, eligible population, asset criticality or service obligation from the mere presence of log events.**

## Coverage statements (separate states)

- **Applicable + validated measurement:** a defined population with adequate evidence, time and confidence.
- **Applicable + not adequately assessed:** a *measurement gap*, not proof of either compliant or insecure status.
- **Not applicable / outside agreed service:** clear rationale, not a zero and not 100% compliance.
- **Applicability not established:** no customer-specific score; request service scope or owner confirmation.
- **Customer-declared / provider-observed mismatch:** reconcile duplicates, identity and scope before calculating rates.

## Example: "We know about 70, but there may be 100"

A customer declares 70 eligible systems. Independent observations suggest 100 *identities* (not necessarily 100 distinct eligible systems). After deduplication and source/time reconciliation, customer owners confirm which are truly distinct, owned, applicable and in service scope. **Only then** may a suitable denominator and scoped monitoring result be published.

Earlier claim: "We observe events related to this customer; their full expected monitoring population is not yet confirmed."

Later claim, if validated: "For the agreed eligible cohort as of [date], [number] have usable monitoring evidence; remaining identities are categorized as unmonitored, excluded or under review."

## Multi-customer comparisons

Compare **like-for-like eligible cohorts and approved definitions**. Publish source/time/quality limitations with each comparison. Do not rank customers by incomparable vendor grades. Keep MSSP service assurance and customer security outcomes separate; a customer may have excellent reporting visibility and many issues, or few observed issues because monitoring is inadequate.

## Reporting responsibility examples

| Situation | Customer-side question/action | Provider-side question/action |
|---|---|---|
| Unverified asset population | Confirm inventory, ownership and eligibility | Share relevant observed identities and assumptions |
| Repeatedly overdue applicable vulnerability remediation | Confirm service priority and remediation plan | Validate findings and applicable service responsibilities |
| Expected critical logs not arriving | Verify source-side change or exclusion | Verify provider collection/parsing and any agreed monitoring commitment |
| Source identities mismatch | Confirm customer/service boundaries | Reconcile duplicates, shared infrastructure and historical mappings |

**Status:** Applicability, service expectations, thresholds and decision rights require local confirmation. Software access-control design does not belong in this measurement program. See [rules](../metrics/evidence-and-reporting-rules.md).
