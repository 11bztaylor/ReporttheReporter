# Governance, audiences and accountability

**Important:** NIST 800-137's organizational tiers are **Tier 1 organization**, **Tier 2 mission/business processes**, and **Tier 3 information systems**. The **measurement program** below is a proposed cross-cutting function, *not* an additional official NIST tier.

| Role | Responsibility | Typical output |
|---|---|---|
| Executive sponsor / enterprise risk authority | Sponsor program, approve strategic priorities, authorize enterprise investment or risk decisions | Decision and funding direction |
| Program owner / measurement lead | Approve cadence, coordinate definitions, quality review, cross-Reporting Unit comparisons, and decision register | Validated interpretation |
| Security operations / security monitoring / vulnerability engineers | Supply source evidence, denominator and collection limitations; investigate technical anomalies | Technical facts and evidence refs |
| Reporting Unit system/asset owners and SMEs | Confirm inventory, scope, criticality, service participation, remediation and local context | Reporting Unit validation |
| Risk/GRC/CISO function | Set policy thresholds, risk criteria, exceptions, appeals and acceptance authorities | Decision rules |
| Reporting Unit IT and business leaders | Prioritize local remediation, allocate resources within authority; escalate enterprise dependencies | Local actions and impacts |
| Data/BI engineering | Maintain ingestion, historical snapshots, metric versions, RBAC and presentation | Trusted data products |

## RACI (proposed; ratify in pilot)
**R** responsible; **A** accountable; **C** consulted; **I** informed.

| Activity | Sponsor | Program lead | Technical team | Reporting Unit | Risk/GRC |
|---|---|---|---|---|---|
| Approve charter | A | R | C | C | C |
| Define calculation + evidence | I | A | R | C | C |
| Validate Reporting Unit scope / criticality | I | R | C | A | C |
| Approve thresholds / escalations | C | R | C | C | A |
| Produce measurements | I | A | R | C | C |
| Interpret Reporting Unit mission impact | I | R | C | A | C |
| Enterprise investment decision | A | R | C | C | C |
| Formal risk acceptance | I | C | C | R | A* |
| Maintain decision / outcome record | I | A | R | R | C |

*Risk acceptance authority must follow approved organizational policy; risk/GRC may advise or coordinate rather than personally accept risk.

## Presentation by level
1. **Tier 3 / technicians:** evidence rows, timestamps, vulnerabilities, sensors, raw event and inventory joins, errors.
2. **Measurement program (cross-cutting):** verified numerator/denominator, trends, coverage, confidence, methodology, exceptions, candidate decisions.
3. **Tier 2 / Reporting Unit leaders:** mission/service exposure, obstacles, available remediation options, local accountability.
4. **Tier 1 / executives:** portfolio patterns, high-consequence exposure, blind spots, requested policy/funding decisions, outcomes.

Every summary links back to the same underlying evidence using least-privilege permissions. Separate Reporting Unit visibility and centralized reporting access. See [visual](../briefings/01-evidence-to-decision.md).