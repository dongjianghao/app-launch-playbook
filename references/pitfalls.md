# ArkUI and HarmonyOS Pitfalls

Use this as a lookup table during development. Each entry is symptom -> cause -> solution.

## Rendering

1. Module-level mutable data does not trigger UI refresh. Use `@State` / `@StorageLink`; add a revision counter when needed.
2. `LazyForEach` caches children and does not rebuild them on `@State` change. Call `notifyReload()`.
3. `Grid` drag callbacks may not fire in the SDK version. Use `List` with `.lanes(3, 10)`.
4. `onItemDragMove` index can be non-integer across columns. Calculate row/column from pointer position.
5. `parallelGesture(LongPressGesture)` can steal drag. Use `onTouch` with a 460ms timer; use 15ms vibration.
6. `@Builder` with primitive parameters may not refresh. Inline or read component `@State`.
7. `outline` must be after `.animation()` to avoid animating corner radius.
8. `Image` is draggable by default and may trigger system assistant. Add `.enableAnalyzer(false).draggable(false)`.
9. Fixed width/height includes padding. Enlarge the whole hit target, not just padding.

## Cards and Live View

10. Card neutral colors must be resource references for system dark/light mode.
11. 2x2 cards are only 130-160vp wide. Use separate layouts and `maxLines(1)`.
12. Debug signatures have no reminder quota. Validate after release signing.
13. Reinstalling HAP recycles desktop cards. Provide an add-card entry.
14. Live View icon updates need the Live View to be recreated; design icons for circular cropping.
15. `primary.content` rich-text segments concatenate directly. Put separators in the text; text color must be consistent.

## Persistence and reminders

16. Unregistered `PersistentStorage` keys are empty after cold start. Register keys before reading.
17. Only `preferences` is durable. Every setting needs a preferences copy.
18. `PersistentStorage` mirror can be empty after process kill; startup must hydrate from disk, not overwrite it.
19. Calendar reminders can be silently blocked if the calendar app's notification permission is off. Surface a user hint.
