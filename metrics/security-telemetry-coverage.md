# Candidate metric: usable security monitoring coverage

## Decision question
Can security operations observe the events required to detect and investigate threats across Reporting Unit-priority services?

## Inputs
Reporting Unit expected-source register (critical devices/applications, approved logging requirement, log type, owner); actual active source evidence; event freshness; successful parser/normalization checks; alert/detection use-case coverage; exception register.

## Proposed measurements
- Expected-source onboarding = applicable sources sending valid events / expected sources.
- Timely usable telemetry = expected sources meeting freshness **and** parse/quality checks / expected sources.
- Missing monitoring days for critical sources; incident investigation failures attributable to absent telemetry.
- Time to resolve an ingestion interruption.

## Caveats
High event volume is not proof of good visibility. security monitoring platform ingestion does not automatically prove a detection exists. Denominators depend on the Reporting Unit's approved monitoring scope and participation. Retention limits and outages must be visible.

## Escalation
Persistent visibility gaps on mission-critical systems lead to an Reporting Unit review of integration constraints; cross-Reporting Unit recurring barriers may lead to shared collection/engineering investment.

## Evidence sources
security monitoring platform/central log platform/historical analytics store ingestion, source health, parser validation, agreed monitoring inventory. Adapt to the actual platform deployed.

## Example sentence
'Logging meets agreed freshness and validation requirements for X of Y applicable critical sources; N sources are not yet assessable. The proposed next step is verification of ownership and a remediation plan.'