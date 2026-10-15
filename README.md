# App Launch Playbook

A reusable Codex skill that turns a local-first mobile app into a repeatable end-to-end playbook: product definition, development environment, design system, core development, platform features, testing, store assets, filing/ICP, pitfalls, and launch.

It is based on a HarmonyOS NEXT / ArkTS reference project, with all sensitive values replaced by placeholders such as `APP_NAME`, `YOUR_BUNDLE_ID`, `YOUR_DOMAIN`, and `YOUR_COMPANY`.

## Structure

```text
SKILL.md
references/
  product-filing.md
  development.md
  store-launch.md
  pitfalls.md
  prompts.md
assets/
  handbook/
    index.html
    01-product.html ... 10-launch.html
```

## Use

- As a Codex skill: install this repository into `$CODEX_HOME/skills` and invoke `$app-launch-playbook`.
- As a human playbook: open `assets/handbook/index.html` in a browser. Checklists use localStorage and can be cleared per page.

Replace the placeholders with the new app's real values before using the prompts.
