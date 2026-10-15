---
name: app-launch-playbook
description: Plan and build a mobile app from idea to app-store submission using a repeatable end-to-end playbook: product definition, environment, design, core development, platform features, testing, store assets, filing/ICP, pitfalls, and launch. Use for new app projects or when the user wants the full app-building workflow; do not use for isolated bug fixes in an existing codebase unless the full playbook is requested.
---

# App Launch Playbook

Use this skill when the user wants to take a new mobile app from idea to store submission, especially with a local-first, no-backend product and Huawei/HarmonyOS distribution. It distills the end-to-end experience of the "APP_NAME" app into a repeatable workflow.

## Defaults

Assume these until the user says otherwise:

- Platform: HarmonyOS NEXT / ArkTS / ArkUI unless the user explicitly chooses iOS/Android or Flutter.
- Data: local-first; no backend unless a concrete feature requires one.
- Store: Huawei AppGallery / AGC when HarmonyOS is the target.
- Business model: free version must be complete and usable; paid Pro only adds convenience, not core access.

## Workflow

1. Lock product scope first: one-sentence positioning, target users, core pain, free/paid boundary, and explicit "not doing" list.
2. Start qualification and filing early. They take the longest and are independent of code.
3. Make the environment loop reliable: build, install, launch, screenshot must be scripted.
4. Lock design tokens and motion tokens before building pages.
5. Put calculation and persistence in a UI-independent core; make the core testable.
6. Validate platform-specific features against their actual constraints before committing to them.
7. Prepare store assets as a generated pipeline, not manual one-offs.
8. Keep privacy and filing statements factual and consistent across app, site, and store forms.

## Routing

- Product scope, pricing, qualification, ICP/App filing, server, signing: read [references/product-filing.md](references/product-filing.md).
- Environment, design system, core development, cards/reminders, testing: read [references/development.md](references/development.md).
- Store assets, copy, privacy policy, release package, store submission: read [references/store-launch.md](references/store-launch.md).
- Platform/ArkUI pitfalls: read [references/pitfalls.md](references/pitfalls.md).
- Ready-to-paste prompts: read [references/prompts.md](references/prompts.md).
- Human-facing HTML handbook with localStorage checklists: open `assets/handbook/index.html`; regenerate or adapt the HTML files under `assets/handbook/` when the user wants that deliverable.

## Non-negotiable lessons from the reference project

- UI must not read module-level mutable data directly; use observable state.
- Preferences is the source of truth for persistence; AppStorage/PersistentStorage is only a UI mirror.
- The core scheduling/calculation logic must be shared by pages, widgets, and reminders.
- Keep "no network" as a real, verifiable implementation choice if you claim it.
- Real-device validation is required for safe area, vibration, drag feel, cards, notifications, and gestures.

When a phase needs copy-paste material for a coding agent, open [references/prompts.md](references/prompts.md) and reuse the closest prompt, replacing bracketed values.
