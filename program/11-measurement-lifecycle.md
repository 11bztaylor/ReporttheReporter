# From candidate question to decision-grade measurement

**Proposed program operating method.** This is a repeatable *measurement lifecycle* for all customers and capability areas. It is not a software workflow specification, dashboard permission policy, or additional independent ISCM/CTEM program.

## Three separate axes — do not turn them into one "customer maturity score"

| Axis | Represents | Allowed states (illustrative) |
|---|---|---|
| **Long-term adoption horizon** | When a type of measurement tends to become meaningful | START · BUILD · MATURE |
| **Evidence sufficiency** | What level of claim current evidence can justify | D discovery · V validated scope · M tested/repeated measurement · R risk-owner integration |
| **Actual customer engagement/status** | What is happening for a specific customer and metric today | Not assessed · engagement requested · defining · awaiting validation/test · measured · not applicable |

A mature horizon metric can have **engagement requested** as its current status. A metric labeled START can still be unsupported for a particular customer. A metric at R does not confer a security grade.

## Proposed lifecycle

1. **Select a decision question (E01–E12).** Ask what authority could choose differently if the answer changed.
2. **Reuse candidate measures.** Select supporting IDs from the canonical catalog; do not create a new KPI because a vendor produces a slightly different grade.
3. **Check applicability and role.** Customer context, service participation, provider commitment, customer/third-party involvement. If unknown, open a clarification request.
4. **Inventory possible supporting evidence categories.** Note which are available, provisionally attributable, absent, stale, contested or outside the known scope.
5. **Choose a legitimate current claim.** Observation-only, customer-declared, independently validated scoped measure, tested outcome, or not assessed. Separate any observed security concern from the trustworthiness of its measurement.
6. **Define an enabling action.** Clarify denominator, agree service expectation, request a business owner, validate a data class, set recovery objective, conduct a safe exercise, etc.
7. **Set a minimal success condition and follow-up.** Who can answer the question; what would count as resolving it; when to check back.
8. **Promote only after validation.** Record approved formula/qualitative rubric, cohort, date, confidence, exceptions, version, decision owner and review.
9. **Communicate three audience versions** from the same evidence and limitations.
10. **Review effect and revise.** The action can fail, be declined, become inapplicable, or reveal missing evidence. Preserve history; don't silently rewrite it.

## Decision routing: proportionate handling

| Condition | Program handling | What not to claim |
|---|---|---|
| Unknown expected inventory | Customer-scope confirmation request | A numerical coverage failure |
| Provider observation quality is degraded, but contractual obligations unverified | Provider evidence-quality investigation; confirm service expectations | An established SLA breach |
| Agreed source is not delivering usable logs | Investigate with provider/customer service owners, based on agreed responsibility | Customer security failure without further context |
| Verified material vulnerability in confirmed applicable critical system | Customer remediation / risk-owner coordination under approved policy | Quantified mission loss from vulnerability score |
| Recovery objectives absent or untested | Business owner engagement, objectives/exercise planning | "Recovery test failed" |
| Material current incident | Existing emergency/incident procedures immediately | Wait for monthly KPI review |
| Repeated measures with no decision value | Redesign or retire metric | More charts equals progress |

## Measurement package review meeting (suggested)

For each selected item, answer in order:

1. What question is currently being answered, and who cares?
2. Is the statement observed, customer-reported, provider-verified, disputed, or unknown?
3. What exactly could prove it wrong?
4. What can the customer or MSSP reasonably do next?
5. Is this an evidence-quality issue, a customer outcome, a service performance issue, or a validated scenario requiring separate risk assessment?
6. What changes would make it decision-grade, and when do we review again?

**Output:** one reviewed measurement statement and, when warranted, a request/action with an owner. No requirement to invent counts or scores.

## First adoption checkpoint

From inherited logs, it is entirely legitimate to say: "We can characterize certain available event classes and their freshness, but cannot yet assess total expected monitoring coverage. We request scope and source-attribution validation."

After customer engagement, it may become: "For the approved source cohort as of [date], [numerator] of [denominator] meet documented freshness and usability checks." If the population remains unknown, retain the original limitation.

This program can **identify a need** for a customer-led capability such as recovery tests without making that activity an existing MSSP-delivered service. See [customer engagement question bank](../templates/customer-engagement-question-bank.md), [reporting pack](../templates/three-level-reporting-pack.md) and [adoption roadmap](../metrics/measurement-adoption-roadmap.md).
