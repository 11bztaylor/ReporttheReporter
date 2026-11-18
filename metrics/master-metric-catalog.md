# Master MSSP candidate metric catalog

**Working draft; illustrative, vendor-neutral, not an approved risk model or vendor-independent security score.** This is the single canonical *candidate list*. Each ID can be promoted to an approved [metric specification](../templates/metric-specification.md) only after checking its purpose, eligible scope and evidence limitations.

**Phases:** **D** inherited-log discovery (no validated customer population); **V** customer-validated scope/service expectations; **M** mature tests/trends; **R** authorized business-risk context. Phase is the *earliest* credible point, not an automatic approval. For a given customer and metric, an inapplicable capability is **not applicable**, not a failure.

The list deliberately includes **provider assurance**, **customer security outcomes**, and **measurement governance** as *separate lenses*. Codes are local identifiers, not NIST control identifiers.

| ID | Theme | Question | Candidate measurement | Possible supporting evidence (examples, not required products) | Earliest | Key limitation / likely next action |
|---|---|---|---|---|---|---|
| V01 | Visibility | What entities can we identify in inherited evidence? | Observed distinct entity classes and attribution state | Time-stamped log metadata, source IDs, network/service references | D | Observation is not a complete inventory; request attribution review |
| V02 | Visibility | Do observed records have a plausible customer owner? | Customer attribution validation status | Routing context, naming conventions, registration hints, customer confirmation | D | A guessed owner is not verified |
| V03 | Visibility | What expected customer environment is in scope? | Inventory reconciliation state | Customer inventories, discovery observations, service scope agreements | V | Without an authoritative denominator do not calculate fleet coverage |
| V04 | Visibility | Are important sources producing usable evidence? | Expected-source usable coverage | Expected-source register, timestamps, parsing tests, exception list | V | Ingestion volume alone does not prove usable coverage |
| V05 | Visibility | Do source observations conflict with declared scope? | Unreconciled asset or service identities | Declared asset list, discovered identities, dedupe/ownership validation | V | Discovery-only items may be outside scope or duplicates |
| P01 | Provider assurance | Can we establish inherited source health? | Observed evidence freshness by known source | Source last seen, source errors, time skew, valid schema samples | D | No promise or SLA inferred from observed logs |
| P02 | Provider assurance | Can observed data support investigation? | Evidence parsing and completeness state | Sample records, field completeness, test queries or investigative checks | D | Parsing does not prove detection coverage |
| P03 | Provider assurance | Are existing detection functions demonstrably active? | Detection rule inventory and validation state | Alert definitions, test evidence, run history, investigations | D | Alert counts are not detection effectiveness |
| P04 | Provider assurance | Are committed monitoring services delivered? | Provider service objective attainment | Agreed service schedule, expected sources, service incidents, resolution notes | V | Requires verified commitments and exclusions |
| P05 | Provider assurance | Are material provider-side collection faults resolved? | Time to identify and resolve service-impacting faults | Provider issue records, source outage timeline, restoration validation | V | Do not attribute customer-caused outages to provider without analysis |
| P06 | Provider assurance | Can the provider respond and communicate as promised? | Notification / escalation timeliness against agreed obligations | Incident timeline, acknowledgment, notifications, service agreements | V | Different customer terms require separate cohorts |
| E01 | Exposure | Where are known exploited issues on relevant assets? | Validated KEV-related exposure pending response | Confirmed affected assets, KEV status, exposure context, closure evidence | V | KEV or EPSS alone is not quantified customer risk |
| E02 | Exposure | How long are material exposures left untreated? | Exposure age and overdue state on eligible priority cohort | Verified open/close events, targets, priority/ownership, scan history | V | Stale scan cannot prove current open status |
| E03 | Exposure | Can the environment be assessed for vulnerabilities? | Successful assessment coverage of eligible assets | Validated asset population, scan success, authentication/recency state | V | Unscanned does not equal clean |
| E04 | Exposure | Does treatment actually reduce exposure? | Validated remediation / re-exposure trend | Finding first/last seen, rescan validation, reopen history | M | Retest required; disappearance may be collection failure |
| E05 | Exposure | Are high-consequence exposure paths being validated? | Priority attack path / compensating control validation | Architecture context, test findings, current mitigations, business impact | M | Modelled path is not necessarily exploitable |
| D01 | Detect & respond | Is monitoring evidence suitable for investigations? | Investigation evidence readiness | Required event classes, timeliness, parse usability, case review | D | Tool onboarding is not a verified detection |
| D02 | Detect & respond | Are high-priority scenarios actually detectable? | Validated detection-use-case coverage | Approved use cases, controlled tests, source requirements, test results | V | Existence of a rule proves little about effectiveness |
| D03 | Detect & respond | Are incidents acknowledged in time? | Time-to-triage for eligible incidents | Timestamped case workflow, priority definitions, agreed response target | V | Detection-to-triage clock must be normalized |
| D04 | Detect & respond | Are incidents contained in time? | Time-to-contain for validated incidents | Incident milestones, responder authority, containment proof | M | Customer-controlled response delays must be distinguished |
| D05 | Detect & respond | What is learned from material incidents? | Corrective action completion and validation | After-action findings, owners, changes, verification checks | M | Closure of a ticket is not proof of improved detection |
| I01 | Identity | Are privileged identities properly protected? | Eligible privileged account strong-auth coverage | Authoritative privilege register, authentication policy, exceptions, validations | V | Failed sign-ins do not describe posture |
| I02 | Identity | Are high-risk access paths reviewed? | Privileged and third-party access recertification | Account owners, review decisions, revocation evidence | V | A recorded review without action may be weak evidence |
| I03 | Identity | Are dormant or unmanaged identities addressed? | Verified stale access exposure and resolution | Directory/account lifecycle evidence, owner attestations, sign-in context | V | Lack of sign-in events is not itself an inactive account |
| I04 | Identity | Does access protection resist representative misuse? | Tested access control outcomes | Controlled access tests, policy effects, incident follow-up | M | Policy enabled ≠ effective control |
| N01 | Internet / network | Are relevant edge services within the agreed protection scope? | Edge protection applicability and validation | Customer-confirmed services, observed traffic metadata, protection inventory | V | High blocked traffic does not equal higher risk |
| N02 | Internet / network | Can critical online services withstand disruptive traffic? | DDoS protection and response exercise outcomes | Service architecture, drill results, availability tests, mitigations | M | Attack attempts blocked ≠ availability guaranteed |
| N03 | Internet / network | Are high-priority web apps protected as intended? | Validated web/app control coverage and material exceptions | Applicable app inventory, policy checks, test outcomes, exceptions | V | Vendor threat scores not comparable across products |
| N04 | Internet / network | Do network protections enforce intended paths? | Validated relevant segmentation and control exceptions | Network policy intent, representative tests, approved changes | M | Flow volume is not segmentation effectiveness |
| N05 | Internet / network | Are material internet-facing services known? | Customer-confirmed exposure / external service inventory reconciliation | Declared domains and services, observed endpoints, ownership confirmation | V | Unknown exposed asset ownership requires validation |
| A01 | Data / application | Do priority applications meet critical protection expectations? | Application security gap and remediation state | App owners, approved baseline, tests, exception/risk notes | V | Not all applications share same applicable controls |
| A02 | Data / application | Are sensitive information protections effective? | Validated harmful data disclosures / control gaps | Classification scope, DLP findings, confirmed incidents, exception handling | V | Blocked events and false positives are not actual loss |
| A03 | Data / application | Is sensitive data recovery and integrity tested? | Data restoration and integrity test outcome | Data owner objectives, test result, scope, integrity validation | M | Backup success does not prove recoverability |
| A04 | Data / application | Are consequential cloud configurations corrected? | Customer-validated material misconfiguration outcome | Configuration assessments, policy applicability, owner validation, change proof | V | Vendor compliance grades lack customer-specific risk context |
| R01 | Resilience | Which priority services have defined recovery expectations? | Critical service recovery objective validation status | Business impact analysis, service owners, recovery plans | V | Cannot declare service resilience from infrastructure alerts |
| R02 | Resilience | Can critical services be recovered within objectives? | Tested recovery time/data loss against owner-approved targets | Exercise timestamps, restoration tests, RTO/RPO, issues | M | Predicted RTO without test ≠ assured RTO |
| R03 | Resilience | Are major single points of failure understood? | Critical dependency and concentration exposure | Dependency inventory, tabletop findings, shared provider mapping | V | Customer impact requires business validation |
| R04 | Resilience | Were significant disruptions preventable or better handled? | Follow-up completion for resilience corrective actions | Post-incident actions, repeated tests, service outcomes | M | A closed item may not remove underlying cause |
| T01 | Third-party | Which material dependencies are in assessment scope? | Critical third-party and shared service validation state | Customer service dependency owner attestations, supplier info | V | An absent supplier report does not mean no dependency |
| T02 | Third-party | Are consequential third-party issues being resolved? | Verified remediation of material dependency concerns | Supplier assurance evidence, exceptions, responsible owners | M | Supplier self-report is not independent verification |
| T03 | Third-party | Can cross-customer provider dependencies cause concentrated loss? | Validated shared-service concentration scenarios | Common dependencies, outage impact, customer business validation | R | Do not sum multiple customers' exposure as one risk number |
| G01 | Governance / outcome | Are significant assessment questions resolved? | Scope/evidence disputes with reviewed outcomes | Challenge register, resolution reasoning, source evidence | D | Do not label disagreement as customer failure |
| G02 | Governance / outcome | Do leadership findings result in a decision? | Decision readiness and recorded disposition | Decision record, authority, rationale, observation reference | D | Decision-to-monitor can be a valid outcome |
| G03 | Governance / outcome | Are assigned actions verified as effective? | Outcome review completion and result | Action register, due dates, before/after evidence, validation | M | Action closure is not automatically risk reduction |
| G04 | Governance / outcome | Are material conditions assessed by risk authorities? | Validated scenario / risk-treatment status | Mission owner context, risk criteria, documented scenario and decision | R | Measured vulnerability count ≠ formal risk rating |
| G05 | Governance / outcome | Is the reporting program itself improving? | Decision-useful metric retirement and manual effort trends | Metric review log, manual effort records, stakeholder validation | M | More measures and prettier charts do not equal success |

## How to use the catalog

1. Choose a decision question from the [executive catalog](executive-decision-catalog.md).
2. Locate 1–3 supporting candidate measures here. **Do not publish everything as an executive KPI.**
3. Select the customer(s), subscribed capability, critical cohort and appropriate owner.
4. Decide what evidence *could* be used; then assess actual availability separately (available / partial / absent / not applicable / not yet validated).
5. Create one approved definition per chosen measure: formula or qualitative rubric, scope, timestamps, quality gates, exceptions, owner, decision trigger and success check.
6. Use the [three-level crosswalk](three-level-crosswalk.md) and [language rules](evidence-and-reporting-rules.md) to write accurate technical, management and executive narratives.

**Do not infer:** asset totals from observed logs; current vulnerability status from historical scans; complete customer protection from a subscribed service; severity or loss probability from vendor scores; missing source failure without an expected source agreement. Unknown values remain explicitly unknown.

## Example metric hierarchy

**Executive:** "Are material internet-facing services appropriately protected?"

**Management:** app inventory confirmed? applicable web security service subscribed? material exceptions remediated? validation tests performed?

**Technical:** observed app/service references + customer service register + control test results + approved exceptions, all with timestamp and provenance.

One source observation can support multiple approved measures. It is *not* counted multiple times toward a fictitious blended score.
