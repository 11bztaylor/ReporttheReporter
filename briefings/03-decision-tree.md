# Visual 3 — Escalation decision tree

```mermaid
flowchart TD
 A["Technician produces metric"] --> B{"Current, valid, attributable?"}
 B -- No --> C["Fix data / log limitation"]
 B -- Yes --> D{"Adequate scope and coverage?"}
 D -- No --> E["Visibility gap with owner"]
 D -- Yes --> F{"Urgent material threat?"}
 F -- Yes --> G["Immediate SOC / incident response path"]
 F -- No --> H{"Persistent gap or policy miss?"}
 H -- No --> I["Continue monitoring"]
 H -- Yes --> J["Program and agency validate causes"]
 J --> K{"Who owns the needed decision?"}
 K -- Agency --> L["Agency action"]
 K -- Enterprise --> M["Enterprise action"]
 L --> N["Record decision and measure impact"]
 M --> N
 E --> N
 C --> O["Recheck data"]
 G --> O
 I --> O
 N --> O
 O --> A
```

**Presenter note:** This protects leaders from making funding decisions based solely on an alert spike or late scanner refresh. Urgent threats do not wait for the monthly review. Missing visibility is reported explicitly instead of being interpreted as secure.