# Decision and escalation rules

```mermaid
flowchart TD
 A["Measurement arrives"] --> B{"Valid, current, attributable?"}
 B -- No --> C["Correct evidence / investigate data"]
 B -- Yes --> D{"Adequate applicable coverage?"}
 D -- No --> E["Visibility gap: owner + verification plan"]
 D -- Yes --> F{"Immediate high-impact threat?"}
 F -- Yes --> G["Operational incident escalation now"]
 F -- No --> H{"Meaningful persistent deviation?"}
 H -- No --> I["Continue monitoring"]
 H -- Yes --> J["Verify Reporting Unit context and root cause"]
 J --> K{"Who can authorize remedy?"}
 K -- Reporting Unit --> L["Reporting Unit decision and action"]
 K -- Enterprise --> M["Enterprise policy/funding decision"]
 E --> N["Track gap and correction"]
 L --> N
 M --> N
 N --> O["Measure outcome"]
 C --> O
 I --> O
 O --> A
```

## Guardrails
- **Do not** give missing or unmeasured data a numeric score of zero risk.
- **Do not** equate vendor scoring with an enterprise-approved risk assessment.
- **Do not** trigger executive escalations solely on raw counts.
- **Do** record denominator, exclusion rationale and participation rates.
- **Do** correlate duration, service criticality, exposure, compensating controls and confidence.
- **Do** let urgent operational incidents bypass routine program queues.
- **Do** show timestamps and possible changed-since-report status.
- **Do** have a documented feedback/appeal path.

## Escalation packet
Observation → evidence confidence → mission/business context → options and uncertainty → recommended owner/decision authority → deadline/trigger → follow-up metric.

No requested purchase is justified simply by a scanner backlog; first investigate why backlog persists.