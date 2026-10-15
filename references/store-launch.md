# Store Assets and Launch

Read this when preparing icons, screenshots, promo images, store copy, privacy policy, release package, and store submission.

## Store assets

Prepare as a generated pipeline, not manual one-offs.

- App icon: square full-bleed multi-size set; the store applies its own rounding.
- Screenshots: match device resolution, redraw the status bar cleanly, use consistent time.
- Promo images: 1080x1920 or the store-required size; one headline + one subhead + selling chips.
- Store copy: plain text, concrete features, no empty phrases.
- Category and age rating: decide once and fill the content rating questionnaire accurately.

## Privacy policy

Keep three surfaces identical:

- In-app native page.
- Public website page.
- AGC/store privacy form or generated agreement.

If the app is truly local-only, say so precisely and consistently. Avoid stale phrases about network requests, CDNs, device IDs, or third-party SDKs when none exist.

## Release package

- Build a release-signed `.app` from AGC release certificate and profile.
- Do not hard-code signing passwords.
- Verify the signing public key matches the filing record.
- Validate the package installs and launches before upload.

## Store submission

1. Upload release package and create a version.
2. Fill app info, category, age rating, privacy policy.
3. Upload icon, screenshots, and promo images.
4. Enter ICP/App filing numbers when available.
5. Submit review and fix only what the reviewer asks.
6. After launch, update the website download link and HTTPS.

For prompts that generate these materials, see `references/prompts.md`.
