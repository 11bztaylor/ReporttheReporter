# Vendor-neutral terminology

This project is intended to apply across industries and organizational shapes.

| Preferred | Meaning | Avoid as a universal name |
|---|---|---|
| **Organization** | Parent enterprise, institution or governing body | State, government, corporate HQ |
| **Reporting Unit** | Scoped entity responsible for an outcome (department, division, subsidiary, agency, business line) | Agency as the default |
| **Measurement Program** | Function defining, validating and interpreting metrics | Dashboard team |
| **Technical Operations** | Security, platform, vulnerability, monitoring and system teams | One tool or operations specialty |
| **Evidence Source** | An assessment, inventory, protection, monitoring or workflow source | Product brand |
| **Historical Evidence Store** | Storage of snapshots, method versions and auditable references | Any named product |
| **Reporting / Presentation Layer** | Role-appropriate views of shared evidence | Any named visualization platform |
| **Risk Owner** | Authorized owner for assessment, acceptance and response within local governance | Whoever operates the scanner |
| **Decision Packet** | Traceable finding, limitations, context, options, authority, actions and outcome measures | Security score |

## Language rules
- Use **Reporting Unit** in templates and illustrations; identify the actual unit type during implementation.
- An entity can have both centrally provided and locally operated security controls. Record inherited, shared and local responsibilities before scoring.
- **Measurable** is not synonymous with **secure**.
- **Observed** is not synonymous with **currently open**: show timestamp, confidence and any newer verification.
- Treat a **security finding**, **risk scenario**, **decision**, and **verified outcome** as separate objects.
- Name actual platforms only in implementation-specific adapters or dedicated research notes where that context is necessary.

## Canonical levels
NIST SP 800-137 Tier 1: Organization; Tier 2: Mission/business processes; Tier 3: Information systems. The measurement program is proposed as a cross-cutting function, not a new NIST tier.

**Status:** These terms are local project conventions, not official NIST definitions.