# Useful

An offline-first utility app for Android, built with HTML, CSS, JavaScript and Capacitor 8.

## Features
- Password generator
- Calculator
- Unit converter
- Notes stored locally
- Countdown timer and stopwatch
- Date difference calculator
- Random number generator
- Text analyzer
- Offline QR-code generator

The interface supports English and Russian.

## Useful Pro development branch
The `useful-pro-next` branch adds:
- More password-generation controls and a local strength estimate
- Calculation history
- TXT export for notes
- QR export at 512, 768 and 1024 px with custom colors and UTF-8 text

The Pro branch is still under review. Version 2.1.1 adds a countdown restart fix, automatic note saving, QR PNG export at three sizes, custom QR colors, and UTF-8 QR content. Google Play Billing and purchase verification are not implemented. A bilingual privacy-policy draft is available in [privacy-policy.html](privacy-policy.html); it must be hosted at a public URL before Play Store submission.

## Testing
Use [QA_TEST_PLAN.md](QA_TEST_PLAN.md) to test the debug APK on a physical Android device. A successful build does not replace device testing.

## Privacy
The main tools work locally and do not require a cloud AI service. Notes and calculation history use device-local storage. Generated passwords are not saved.

## Automated checks

GitHub Actions validates JavaScript syntax and runs the timer and calculator regression tests before building the debug APK and unsigned release AAB.

## Android build
The GitHub Actions workflow builds a debug APK and an unsigned release AAB.

For a local build:
1. Install Node.js 22 and Java 21.
2. Run `npm install`.
3. Run `mkdir -p www` and copy `index.html` to `www/index.html`.
4. Run `npx cap add android`.
5. From the `android` directory, run `./gradlew assembleDebug`.

## Before publishing
- Test the APK on a physical Android device.
- Configure and protect the Android signing key.
- Sign the AAB before production upload.
- Complete the store listing and privacy disclosures.
- If offering paid features, implement and test Google Play Billing and purchase verification first.

## License
No license has been specified yet. Do not assume permission to redistribute or reuse the source.
