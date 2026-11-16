# Candidate metric: endpoint protection coverage and effectiveness

## Decision question
Are applicable systems protected, healthy, and reporting security data consistently, particularly those supporting priority services?

## Inputs
Authoritative eligible inventory, EDR agent enrollment, health, sensor last-seen, policy state, excluded/unsupported platforms, deployment ownership, asset criticality.

## Proposed measures
- Agent deployment coverage = enrolled eligible devices / all eligible devices.
- Healthy reporting coverage = eligible devices both enrolled and meeting agreed health and freshness checks / all eligible devices.
- Duration of missing endpoint telemetry for critical assets.
- Resolution time for repeated sensor-health faults.

## Caveats
Enrollment is not effectiveness. Devices not in the platform inventory may be invisible; never divide only by platform-reported devices and call it enterprise coverage. Policy configuration may not imply actual blocking or detectability.

## Decision path
Separate unowned asset inventory gaps from installation failures, platform support limitations, and operational exceptions. Escalate persistent common constraints to shared-service owners.

## Example executive wording
'Coverage cannot yet be confirmed across the full agency fleet. Agency and endpoint teams are reconciling the authoritative device population before recommending investments.'