# Useful Pro 2.1.1

This is the separate development branch for the Useful Pro build. The stable `main` branch remains unchanged.

## Pro features in this build
- Password generator: exclude look-alike characters and optionally prevent repeated characters.
- Password generation uses Web Crypto with rejection sampling and a Fisher–Yates shuffle; generated passwords are not saved.
- Password-strength estimate is calculated locally.
- Calculator: local history of up to 20 successful calculations, with a clear-history action.
- Notes: auto-save while typing and export the current note as a plain-text TXT file.
- QR generator: UTF-8 text support, custom foreground/background colors, and 512 / 768 / 1024 px PNG export.
- Timer reset label follows the selected English/Russian interface language.

## Privacy
Calculation history and notes remain in the device's local storage unless the user exports a note. QR data and generated passwords are processed locally. Generated passwords are not saved to history.

## Release status
- App display name: Useful Pro
- Version name: 2.1.1
- Android versionCode: 4
- Application ID remains `com.alexbruno.pocketutility`
- The development pull request is still a draft and is not merged into `main`.

**Google Play Billing and purchase verification are not integrated.** Do not advertise paid access or distribute this build as payment-protected until a real purchase flow and entitlement checks have been implemented and tested.
