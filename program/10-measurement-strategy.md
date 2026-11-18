# MSSP measurement and decision-support strategy

**Status: PROPOSED reference design (18 November 2026).** This is a vendor-neutral *measurement program*, not a dashboard implementation project, a customer security rating, or a replacement for incident response or customer risk governance.

## Operating model

The MSSP serves multiple **Customers** (a department, agency, operating company, business unit, or other contracted service recipient). Customer systems, coverage expectations, business impact and responsibilities differ. We may possess substantial inherited log evidence **before** customer inventory, agreed service scope, asset ownership or mission priorities have been validated.

**Mission:** Convert what can be responsibly measured into useful, understandable and followed-up decisions, while making our limits of knowledge visible.

The product is **one** integrated program drawing on complementary guidance—not four separately administered initiatives:

| Reference discipline | Use it for | Do not build |
|---|---|---|
| NIST SP 800-55 Vol. 1–2 | Choosing, specifying, reviewing and governing measures | Separate overlapping metric systems |
| NIST SP 800-137 (ISCM) | Continuous observation, reassessment and feedback | A second monitoring program ledger |
| NIST CSF 2.0 / CISA CDM | Outcome taxonomy and multi-organization visibility lessons | An implied agency-wide compliance score |
| NIST IR 8286 series | Handoff from measured condition to authorized business-risk decisions | A shadow risk register or unapproved risk quantification |
| CTEM concepts | Exposure discovery, validation, prioritization and response | A mandatory stand-alone CTEM program |

**NIST CSF** organizes desired cybersecurity outcomes. **NIST 800-55** supplies measurement practice. **ISCM** supplies the continuous operating rhythm. **CDM** offers useful federal multi-agency lessons. **CTEM** informs exposure-specific workflows; none is a substitute for the other three or a compulsory separate program.

## One evidence chain, three presentations

1. **Technical view — Is it true?** Source observations, scopes, freshness, validation, discrepancies, counterexamples and limitations.
2. **Technical management view — What is happening and who can act?** Reliable measurements, customer context, causes, trends, service-delivery obligations, owners and follow-up.
3. **Executive view — Which decisions matter?** Critical services and plausible consequences, material conditions, confidence, options, action authority and whether prior decisions worked.

Information *summarizes upward*. Decisions, requests for validation, remediations and follow-up *flow downward*. Never require a metric to be an executive KPI merely because a vendor can export it.

## Three distinct lenses (must never merge)

- **Customer security outcomes:** Observable condition of customer-owned services and protections. May need customer confirmation of criticality, applicability and inventory.
- **Provider service assurance:** What the MSSP has agreed to perform and whether its monitoring, response, communication and support are functioning. A provider failure belongs here even if customer risks are downstream.
- **Measurement trust / visibility:** Whether any conclusion has justified scope, a credible population, fresh supporting observations and clear provenance. Unknown is not an automatic pass or fail.

Vendor scores are **inputs to examine**, not outputs to average. A DDoS attack count, web security rating, phishing score and scanner grade cannot be aggregated into one security percentage.

## Reporting levels are audiences, not application permissions

Program documentation defines what executives, managers, technical teams and customer representatives should *understand* and *decide*. Identity systems, dashboard permissions, tenancy architecture, software integrations, database schemas, and access control enforcement are **deliberately out of scope** here. The existing implementation folder is optional supporting material, not a prerequisite to adopting this program.

## Program work products (single source of truth)

| Work product | Purpose |
|---|---|
| [Executive decision catalog](../metrics/executive-decision-catalog.md) | Choose the outcomes leadership actually needs |
| [Metric adoption roadmap](../metrics/measurement-adoption-roadmap.md) | Preserve long-term executive ambition while showing customer engagement and measurable readiness separately |
| [Master candidate metric catalog](../metrics/master-metric-catalog.md) | Inventory measures across capabilities with illustrative evidence and decisions |
| [Three-level crosswalk](../metrics/three-level-crosswalk.md) | Trace an executive question to manager measures and technical evidence |
| [Evidence and language rules](../metrics/evidence-and-reporting-rules.md) | Keep scope, confidence, uncertainty and claims honest |
| [Inherited-logs starting baseline](../metrics/phase-0-observation-baseline.md) | What can be said before customers or denominators are validated |
| [Metric specification template](../templates/metric-specification.md) | One approved definition per operational metric |
| [Existing decision / risk documents](07-risk-to-decision-bridge.md) | Authorized decision handoff and outcome checking |

## Decision-grade promotion gates

A candidate is **not** promoted to an executive KPI until:
1. It answers an identified decision question and names a decision authority.
2. The applicable customer / capability / critical-service scope is known and suitable for the claim.
3. Its numerator, denominator (when applicable), cohort, observation window, and freshness are defensible.
4. Evidence provenance, independence, validation, gaps and counterevidence are explicit.
5. Trends remain comparable across time and customer changes; thresholds are agreed, not invented.
6. Communication includes limits and a proportionate action, with a later review of results.

An executive *qualitative* decision brief can be valid without numeric coverage when its uncertainty and authority are explicit. A critical incident follows incident-response rules immediately.

## Work in stages; do not wait for a perfect inventory

- **D — Discovery:** Inherited logs only. Map observed capabilities, attribution confidence, evidence usability and customer questions. No fleet percentages or security ranking.
- **V — Validated scope:** Customers/agreements confirm relevant assets, services, owners, exclusions, and expectations. Begin scoped coverage measures.
- **M — Mature measurement:** Stable trends, tested controls, incident / remediation / resilience outcomes and approved targets.
- **R — Risk integration:** Customer business impact and authorized risk owners assess documented scenarios and strategic treatment decisions.

Not every measure must advance to R. Not all customers subscribe to all capabilities.

## Review and stewardship (suggested cadence)

Weekly measurement-quality and unresolved-question review; monthly customer and service performance review; quarterly decision/outcome review; annual metric retirement and redefinition. These are proposals subject to approval. Avoid changing denominator rules silently; preserve the date and basis of each published conclusion.

**Design challenge:** A high-quality unknown can be a *more useful* report than a fabricated percentage. It tells the executive exactly what the provider cannot yet warrant and which validation decision will unlock better measurement.

## What success looks like

Leaders can distinguish measured security outcomes from service commitments and visibility gaps; technical teams can reproduce findings; managers can assign and follow up work; customers can correct the scope; material decisions reference the evidence available at the time; later reviews show what changed.

Research basis: [source review](../references/measurement-source-review-2026-11-18.md). All catalog IDs, priorities, phase assignments and terminology rules below are **local design proposals**, not NIST/CISA prescribed metrics.
