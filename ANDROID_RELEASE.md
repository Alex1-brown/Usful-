# Pocket Utility

Android packaging for the existing offline-first Pocket Utility web app.

## Current release target

- App name: Pocket Utility
- Version: 1.0.0
- Android application ID: com.alexbruno.pocketutility
- Capacitor: 8.x
- Target/compile SDK: Android 16 / API 36
- Minimum Android version: API 24 in the Capacitor 8 project template
- Main app data stays local in the WebView/localStorage.

## Build

The GitHub Actions workflow creates the Android project from the existing web app and produces:

- Debug APK for device testing
- Release AAB for Google Play preparation

The release AAB produced by this workflow is currently unsigned. Before production upload, configure a secure Android upload keystore/signing credentials in GitHub Actions or build/sign the release in Android Studio.

## Version updates

For a Play Store update:

1. Keep the same application ID.
2. Increase versionCode for every upload.
3. Increase versionName when appropriate (for example 1.0.0 -> 1.1.0).
4. Keep the signing key unchanged.

This preserves the installed app as the same application and allows normal Google Play updates.

## Monetization plan

Version 1.0.0 keeps the core utilities free.

A later 1.1.x release can add:

- QR PRO: Wi-Fi, contact, email, phone/SMS, customization, history and export.
- Code Generator PRO: UUID, PIN, random strings, Base64, Hex and URL-safe tokens.
- Google Play Billing for the PRO entitlement.

No payment code is enabled in 1.0.0 yet.
