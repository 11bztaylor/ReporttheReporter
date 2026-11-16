# Metric catalog — candidate measurements

**These are proposed examples**, not NIST-prescribed KPIs or live agency results. Each must have an approved metric specification before executive publication.

| Candidate measure | Operational evidence / source | Decision-level interpretation | Critical caveat |
|---|---|---|---|
| Vulnerability discovery, closure, overdue duration | Scanner/vulnerability platform + asset inventory | Are high-consequence exposures persistently exceeding target? | Scope, severity, exposure path, and rescans |
| Scan coverage | Eligible inventory joined to successful authenticated scans | How much can we actually measure? | Inventory denominator may be wrong |
| Endpoint detection protection/health | Defender endpoint inventory + authoritative devices | Are priority endpoints consistently monitored? | Enrolled != healthy; exclusions |
| Security log onboarding and freshness | Expected log source registry + Sentinel/ADX | Which critical systems are blind spots? | Volume != usefulness; outage/latency |
| Security incident triage/containment timing | SIEM incidents + case management | Can operations act within agreed objectives? | Case clock normalization and severity |
| Control configuration compliance | Configuration management | How consistently are baselines enforced? | Exception management and applicability |
| Privileged identity and unauthorized access findings | Identity provider + investigations | Are key access controls producing expected outcomes? | Raw failed-login count is misleading |
| Recovery test results | Backup and DR owners | Can prioritized services recover within objectives? | Need tested, business-owned results |
| Security training completion | HR/training platform | Is required training executed? | Training != behavior or risk reduction |

## Pick measures based on decisions
For every candidate:
1. State **specific leadership question**.
2. Name authorized decision owner and expected response options.
3. Define eligible population and **denominator** before numerator.
4. Confirm collection coverage and quality.
5. Define time window, threshold, and persistence trigger.
6. Record interpretation limits and how outcomes will be evaluated.

Use the [metric specification template](../templates/metric-specification.md).

## Four practical classes of measurement (NIST 800-55 concepts)
- **Implementation:** Is a safeguard deployed?
- **Effectiveness:** Does it work as intended?
- **Efficiency:** How many resources/time are required?
- **Impact:** Is the result improving security or mission outcomes?

Metrics can inform decisions without earning a single composite grade.

## Detailed examples
- [Vulnerability remediation](vulnerability-remediation.md)
- [Security telemetry coverage](security-telemetry-coverage.md)
- [Endpoint protection coverage](endpoint-coverage.md)