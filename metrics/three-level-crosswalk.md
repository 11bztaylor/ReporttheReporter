# One set of evidence, three decision levels

**Purpose:** Explain which proposed manager measurements and technical observations justify an executive statement. These levels are *communication and responsibility*, not software roles or database permissions. All examples are hypothetical and require local approval.

The following is the **executive-to-level narrative crosswalk**. For an exhaustive **all-46-ID mapping to executive themes**, see [complete decision-to-measure traceability](decision-to-measure-traceability.md).

## Canonical traceability matrix

| Executive question | Management explanations / measures | Technical evidence candidates | Typical decision / handoff |
|---|---|---|---|
| **E01 — What can we actually see?** | Declared vs observed vs validated scope; attribution uncertainty; open reconciliations (V01–V05) | Customer scope statement, identities in inherited observations, source freshness, dedupe, inventory attestations | Customer scope review; provider fixes faulty evidence |
| **E02 — Are our services reliable?** | Usable data, collection failures, service objectives and response bottlenecks (P01–P06) | Expected source register, data-quality tests, service incidents, notification events | Provider engineering action; commercial/service obligation review |
| **E03 — What stops an assessment?** | Missing criticality, owner, inventory, exceptions, service scope (V02/V03/G01) | Customer declaration, contract/scope summary, unresolved identities and validation requests | Assign required customer engagement, do not invent coverage |
| **E04 — Where is material mission exposure?** | Prioritized customer-confirmed scenarios, repeated gaps, compensating controls (EXP02/EXP05/R03/G04) | Exposure finding + applicable critical service + credible path + validated business consequence | Refer scenario to authorized risk owner |
| **E05 — Are exploited exposures being addressed?** | KEV relevance, exposure duration, remediation target and reassessment (EXP01–EXP04) | Verified affected assets, exposure context, KEV, case notes, validation scans | Customer remediation or shared-service improvement |
| **E06 — Can threats be detected and handled?** | Verified detection use-cases, investigation readiness, response timeliness, improvement (D01–D05) | Representative test results, source needs, case timestamps, response evidence | Provider SOC improvement / customer response coordination |
| **E07 — Is high-value access protected?** | Relevant strong-auth, privilege lifecycle and tested access conditions (I01–I04) | Approved identity inventory, policy/test evidence, revocation samples | Customer identity owner action or service change |
| **E08 — Is sensitive data exposure controlled?** | Confirmed DLP/control failures, data-owner relevance, recovery assurance (A01–A04) | Data classifications, confirmed disclosure investigations, validation and exceptions | Data-owner decisions; risk handoff when consequential |
| **E09 — Are public-facing services resilient?** | Internet exposure review, app protection exceptions, DDoS exercise outcomes (N01–N05) | Application/service register, protection policy, attack-response exercises, availability evidence | Customer and provider network/web service action |
| **E10 — Could priority services recover?** | RTO/RPO ownership, restoration tests, dependency concentration (R01–R04) | BIA, exercise evidence, restoration timestamps, critical dependency attestations | Schedule exercise or prioritize verified improvement |
| **E11 — Are shared dependencies a concentration risk?** | Material supplier weaknesses, dependency overlap, confirmed cross-customer impact (T01–T03) | Supplier review and service dependency records, customer validation | Coordinate portfolio decision; enterprise risk authority |
| **E12 — Did a decision work?** | Action ownership, completion, challenge closure, observed outcome (G01–G05) | Decision IDs, current/past comparable evidence, review notes | Sustain treatment or reopen and revise |

## Reporting example: inherited logs, unknown customer inventory

| Level | What it says | What it explicitly does **not** say |
|---|---|---|
| **Executive** | "We have inherited security observations; customer scope is unverified. We need customer-confirmed service and asset boundaries before making overall coverage claims." | "Customer is 70% protected." |
| **Manager** | "Observed identities and data-source health can be reviewed. Customer attribution and monitoring expectations need confirmation; provider-side quality exceptions are tracked separately." | "Unobserved entities are noncompliant." |
| **Technical** | "These identified source classes have recent sample records; observed identifiers need deduplication, interpretation and ownership confirmation." | "Logs are an authoritative inventory." |

## ELI5 translations

- **Source observed** = "We can see some activity from this kind of system."
- **Scope unknown** = "We don't know everything we're supposed to be watching yet."
- **Customer-reported** = "The customer told us this; we haven't checked it independently."
- **Provider-verified** = "We independently checked the statement for the stated scope and date."
- **Not assessable** = "We don't yet have enough reliable information to answer."
- **Decision required** = "Someone with authority needs to choose what happens next."

## Presentation contract

- **Executive:** condition → potential consequence → confidence/limits → choice/authority → next review.
- **Manager:** scope → trend and causes → accountable party → work in progress → next verification.
- **Technical:** raw observation → time → evidence source → transformation/validation → disagreements → replication.

A severity color is **not** a substitute for evidence confidence. A critical immediate incident follows incident protocols, not this routine approval sequence.
