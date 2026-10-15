# Product Scope and Filing

Read this when planning a new app or preparing qualification, ICP filing, App filing, signing, and server setup.

## Product scope

Lock these before writing code:

- One-sentence positioning.
- Target users and three core pains.
- Core value proposition.
- Free / paid boundary.
- Explicit "not doing" list.
- Platform and distribution channel.

For "APP_NAME", the useful boundaries were:

- No backend; cross-device is export JSON + import.
- Holidays are annotation only; they do not override the user's own shift schedule.
- v1 is fully free and complete; Pro is buy-once and adds convenience.
- Schedule is a list of rules, not a single loop, so history survives when the user changes shifts.
- App is genuinely offline: holiday data is bundled locally and no INTERNET permission is requested.

## Qualification and filing flow

Work this track in parallel with development because it is usually the longest dependency.

1. Prepare the legal entity and real-name verification.
2. Register and verify the developer account.
3. Buy and real-name a domain.
4. Prepare a server if a website or filing anchor is needed.
5. Submit website ICP filing with the server provider.
6. After the website filing number is issued, submit App filing under the same entity.
7. Complete public-security filing within 30 days after the site becomes accessible.
8. Create release certificate + release profile in AGC.

Key facts from the reference project:

- File where the server is hosted. Do not open duplicate filing in another cloud provider.
- If the app has no backend, do not invent a "cloud product" entry in the filing form.
- The signing public key used for filing must match the actual release package.
- Backup the `.p12` keystore and password in two places; delete the plaintext password file after storing it.
- Keep the keystore password in DevEco encrypted storage, not in `build-profile.json5`.
- The signing `certpath` should point to the AGC root CA chain, not the leaf application certificate.

## Useful artifacts

- `PRD.md`
- `Pro方案.md`
- `上架准备.md`
- `隐私政策.md`
- `AGC权益申请-*.md`

For store/filing prompts, see `references/prompts.md`.
