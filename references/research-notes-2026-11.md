# Research findings — 2026-11-16

## What changed in this review

1. **Added NIST IR 8286 Rev. 1 (Dec 2025) and companion series** as the explicit bridge from technical measurements to agency and enterprise risk registers and risk decisions. The initial repo had measurement and monitoring standards but lacked this intermediate risk translation.
2. **Added NIST SP 1308 (Mar 2026)** as optional guidance when evidence reveals a shared workforce/capacity problem. A new tool purchase should not be the default conclusion.
3. **Clarified NIST CSF Organizational Profiles vs NIST SP 800-137 tiers vs CSF Tiers.** These are distinct constructs.
4. **Clarified CIS Controls Assessment Specification's scope:** Its current assessments focus on *whether safeguards are implemented* (Level 1), not full verification of *how well safeguards reduce risk* (Level 2).
5. **Added documented government lessons:** a 2025 GAO review found **20 of 23** selected agencies reported data integration/quality difficulties in CISA CDM; **16 of 23** reported hardware inventory challenges. These are lessons for our design, not evidence of our own agencies' quality.
6. **Explicit multi-tenant security requirement:** Microsoft notes Power BI RLS applies only to Viewer users, not Admin/Member/Contributor workspace roles. Platform and data-layer permissions require testing.
7. **Separated technical metric / agency impact / risk scenario / decision and outcome** instead of converting vendor scores straight into executive risk.
8. **Added program health measures:** decisions with owners, outcomes checked, quality exceptions, and reduced reporting churn.

## Primary sources
- NIST, SP 800-55 Vols. 1–2 announcement (Dec 2024): https://www.nist.gov/news-events/news/2024/12/measurement-guide-information-security-nist-releases-volumes-1-and-2-sp-800
- NIST, SP 800-137: https://csrc.nist.gov/pubs/sp/800/137/final
- NIST, IR 8286 Rev. 1 (Dec 2025): https://csrc.nist.gov/pubs/ir/8286/r1/final
- NIST, IR 8286B Update 1: https://csrc.nist.gov/pubs/ir/8286/b/upd1/final
- NIST, SP 1308 (Mar 2026): https://csrc.nist.gov/pubs/sp/1308/final
- NIST, SP 1301 Organizational Profiles: https://csrc.nist.gov/pubs/sp/1301/final
- NIST, SP 1302 CSF Tiers: https://csrc.nist.gov/pubs/sp/1302/final
- GAO-25-107470, CDM monitoring program challenges (2025): https://www.gao.gov/products/gao-25-107470
- CIS Controls Assessment Specification v8.1 purpose and methods: https://cas.docs.cisecurity.org/en/latest/source/About%20the%20CIS%20Controls%20Assessment%20Specification/
- Microsoft, Sentinel MSSP scale management: https://learn.microsoft.com/en-us/azure/lighthouse/how-to/manage-sentinel-workspaces
- Microsoft, Power BI RLS limitations: https://learn.microsoft.com/en-us/power-bi/service-admin-rls

## Sources vs local design decisions
- **Standards-supported:** continuous monitoring, metrics with uncertainty/data quality, CSF outcomes, risk registers supporting enterprise ERM.
- **Locally proposed:** program name, 90-day pilot, 3 initial metrics, colors, thresholds, confidence labels, platform choices, review cadence and governance assignments.
- **Requires validation:** agency inventory authority, real vendor licenses and interfaces, accepted risk appetite, staffing, delegation, records retention, approved sharing scope, all metric formulas and NIST subcategory mapping.

These notes are not compliance certification or a claim of organizational authorization.