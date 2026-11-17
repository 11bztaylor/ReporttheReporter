# Decision Wizard (optional HTML component)

**This component supports the program; it does not replace the program documentation.** The [program charter](../../program/01-charter.md), [measurement program](../../program/03-operating-cycle.md), [risk translation guidance](../../program/07-risk-to-decision-bridge.md), and [briefing visuals](../../briefings/README.md) remain the primary references.

## Run it
Open [index.html](index.html) in a browser after downloading or cloning the repository. No installation, build system or backend is required. For GitHub Pages, the relative URL is `/components/decision-wizard/` **if Pages is enabled by the repository owner**. GitHub's normal HTML file preview does not execute the wizard.

## What the prototype demonstrates
1. Define a **Reporting Unit**, decision question and measurement owner.
2. Enter sample evidence and evaluate applicability, coverage, timestamps and denominator validity.
3. Apply basic decision routing: data-quality correction, monitoring, urgent operational escalation or leadership review.
4. Generate role-appropriate drafts for technicians, the measurement function, Reporting Unit leaders and enterprise leaders.
5. Export a sample JSON decision packet or print the executive view.

### Important constraints
- No vendor connections, real-time telemetry, external requests, server storage or authentication.
- Input remains in current browser memory only; export is a user-initiated local download.
- The wizard makes *suggestions*, not risk ratings or automatic acceptance decisions.
- Evidence is **user-provided and not independently verified**. Human review and approved organizational criteria are required.
- Use only fictional or approved non-sensitive data. This repository may be publicly visible.
- No personal data, vulnerability details, credentials, asset inventories or confidential findings.

## Neutral glossary
| Term | Meaning |
|---|---|
| Organization | The overarching enterprise or governing body |
| Reporting Unit | Any scoped department, division, business unit, operating company or agency being measured |
| Measurement Program | The coordinating function that validates and interprets evidence; **not** an additional NIST tier |
| Source category | Type of evidence provider (e.g., assessment, monitoring or asset inventory) without brand lock-in |
| Decision owner | Person or role authorized under local policy to direct an action |
| Outcome review | Scheduled reassessment of whether the chosen response helped |

## Files
- `index.html`: accessible guided user interface
- `styles.css`: responsive layout and print styling
- `app.js`: local inputs, basic evaluation, draft outputs and JSON export

## Future implementation
If this becomes an operational application, use organizational identity, access controls, data isolation, approvals, a versioned decision ledger, event histories and secure evidence references. Avoid storing sensitive source data in a browser-only prototype.

**Reminder:** The HTML component is a guided demonstration, not a deployed measurement/risk management system.
## ELI5 mode (plain-language walkthrough)

Switch **ELI5 mode** on using the toggle in the top toolbar. It changes the instructions, field labels, dropdown wording, results, and audience briefings **without changing the underlying evidence or rules**. Switching off restores the technical wording and preserves entered values.

To see the beginner example, turn on ELI5 and click **Load easy 10-computer example**:

- Ten work computers are eligible to be checked.
- Seven have confirmed working protection (shown in **green**).
- Three did not meet the check (shown in **amber**); they need investigation, but are not automatically compromised or unsafe.
- The hypothetical team confirms it has happened on earlier checks. The proposed local action is to investigate those three computers and check again.

The picture, percentage-free explanation, next-step guidance and role-specific wording all follow the same input values. This is a teaching example, not an agency or organization score.

**No live browser test is claimed by this documentation**; the source is provided as an offline HTML component. Try both modes in your browser before using it in a presentation.
