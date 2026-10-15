# Development Workflow

Read this when setting up the environment, designing the product, implementing features, or testing.

## Environment

For HarmonyOS NEXT with DevEco Studio:

```powershell
$env:DEVECO_SDK_HOME='C:\Program Files\Huawei\DevEco Studio\sdk'
$env:JAVA_HOME='C:\Program Files\Huawei\DevEco Studio\jbr'
$env:PATH="C:\Program Files\Huawei\DevEco Studio\jbr\bin;C:\Program Files\Huawei\DevEco Studio\tools\node;$env:PATH"
```

Useful tools:

- `hvigorw.js` for builds.
- `hdc.exe` for install, launch, screenshot, input simulation.
- `@deveco/deveco-cli` for build/run/log/device/docs; keep `hvigor` for ohosTest if not yet validated.

Prefer the emulator (`127.0.0.1:5555`) for daily iteration and the real device for final validation of safe area, vibration, drag, cards, notifications, and gestures.

## Architecture

Separate concerns:

```text
pages/          UI only
widget/         desktop card UI
core/           UI-independent calculation and persistence
entryability/   lifecycle
entryformability/ form lifecycle
```

For a scheduling app, the same core should power calendar, statistics, desktop card, and reminders.

Core scheduling model in the reference project:

- One rule = start day + cycle sequence + range (N cycles / N days / unlimited).
- Rules sort by start day ascending.
- A day belongs to the latest rule whose start day is not after it, then applies that rule's range.
- Before the rule start or outside its range, the day is blank.
- Manual overrides always win.

## Persistence

- `preferences` is the source of truth.
- `AppStorage` / `PersistentStorage` is a UI mirror.
- Register `PersistentStorage` keys before reading or writing.
- On startup, hydrate the mirror from disk; never overwrite disk with an empty mirror.

## Platform features

- Desktop card: show absolute times, not countdowns, because system refresh is at least 30 minutes.
- Desktop card follows system dark/light mode; use `resources/base` and `resources/dark`.
- Reminder: writing shifts into a local system-calendar account avoids restricted background reminder permissions.
- Live View is not suitable for 8-12 hour shifts because of platform lifecycle limits; evaluate against actual constraints before implementing.

## Testing

- Use Hypium for HarmonyOS tests.
- Put tests in `entry/src/ohosTest/` so they can use device APIs.
- Run a scripted build-install-test loop.
- Debug with layered elimination: storage, model, then rendering.
- Use screenshot pixel measurements for visual alignment decisions.

For ready-to-paste prompts, see `references/prompts.md`.
