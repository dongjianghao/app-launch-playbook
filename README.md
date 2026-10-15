# App Launch Playbook

一个可复用的 Codex skill，用来把一款本地优先的移动 App 从想法推进到应用市场上架。它沉淀了完整流程：产品定义、开发环境、设计系统、核心功能开发、平台特色能力、测试、上架素材、备案、踩坑和发布。

这个项目基于 HarmonyOS NEXT / ArkTS 的参考项目整理而来，所有敏感信息都已替换为占位符，例如 `APP_NAME`、`YOUR_BUNDLE_ID`、`YOUR_DOMAIN`、`YOUR_COMPANY`。

## 目录结构

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

## 使用方法

- 作为 Codex skill 使用：把这个仓库安装到 `$CODEX_HOME/skills`，然后调用 `$app-launch-playbook`。
- 作为人工手册使用：用浏览器打开 `assets/handbook/index.html`。清单勾选状态保存在 localStorage，可在每个页面单独清空。

使用提示词前，请先把占位符替换成新 App 的真实值。

---

# English

## What is this?

This is a reusable Codex skill for turning a local-first mobile app into a repeatable end-to-end playbook: product definition, development environment, design system, core development, platform features, testing, store assets, filing/ICP, pitfalls, and launch.

It is based on a HarmonyOS NEXT / ArkTS reference project. All sensitive values have been replaced with placeholders such as `APP_NAME`, `YOUR_BUNDLE_ID`, `YOUR_DOMAIN`, and `YOUR_COMPANY`.

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

## How to use

- As a Codex skill: install this repository into `$CODEX_HOME/skills` and invoke `$app-launch-playbook`.
- As a human playbook: open `assets/handbook/index.html` in a browser. Checklists use localStorage and can be cleared per page.

Replace the placeholders with the new app's real values before using the prompts.
