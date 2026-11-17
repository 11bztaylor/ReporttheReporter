# Logical evidence and history contracts

These are proposed *logical* entities, not production schemas.

| Entity | Minimum fields |
|---|---|
| Reporting Unit | agency_id, name, reporting scope, business owner, effective dates |
| Applicable population | metric_id, agency_id, cohort_id, eligibility policy version, denominator, inventory_source, observed_at |
| Source evidence | evidence_id, agency_id, source_system, source_record_id, asset_id, event_time, source_update_time, ingested_at, evidence_state, integrity metadata |
| Metric definition | metric_id, definition_version, formula, inputs, units, target, applicability, approval state, effective dates |
| Measurement snapshot | measurement_id, agency_id, metric_id/version, as_of, computed_at, published_at, numerator, denominator, value, coverage, confidence, limitations, evidence_set_id |
| Challenge | challenge_id, snapshot_id, submitted_at, challenger, claim, evidence_ref, status, resolution, reviewer, revised_snapshot_id |
| Decision and action | decision_id, finding_id, authority, chosen option, owner, due_at, decision_at, evidence_set_id, outcome_review_at, status |
| Audit history | entity_id, revision, actor, timestamp, old/new change type, reason and immutable reference |

## Historical semantics
- Treat **measurement time** and **knowledge/processing time** separately (late-arriving evidence matters).
- Use source-native IDs plus an Reporting Unit-qualified key to avoid cross-Reporting Unit collisions.
- Version formulas and denominator policies. A methodology revision can create a trend break even when no environment changed.
- Preserve corrections, disputes and published baselines. A corrected figure must link to its predecessor.
- Retention and deletion policies must comply with public records, Reporting Unit contracts and approved data lifecycle policies.
- Mark the difference between **observed remediated**, **scanner-confirmed remediation**, and **not checked recently**.
- Avoid assuming 'missing finding in today's extract' equals fixed; it may mean missing scan.

## Example
A Monday scan finds a vulnerability. A Tuesday verified rescan closes it. A Wednesday report presenting Monday's snapshot must say **'as of Monday'** and, if the new evidence is integrated, flag that closure has since been verified. The historical Monday measurement remains a valid record of what was known then.

## Metric data quality interface
`{ value, numerator, denominator, eligible_population_ref, as_of, computed_at, source_freshness, coverage, confidence, definition_version, evidence_set_id, caveats }`

The exact confidence rubric and retention policy require program approval.