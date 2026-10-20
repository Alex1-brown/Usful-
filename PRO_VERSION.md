# Useful Pro 2.0.0

This is the separate development branch for the Useful Pro build. The stable `main` branch remains unchanged.

## Added Pro features
- Password generator: exclude look-alike characters and optionally prevent repeated characters.
- Password strength estimate shown locally; password generation uses the device cryptographic random-number generator.
- Calculator: local history of up to 20 successful calculations, with a clear-history action.
- Notes: export the current note as a plain-text TXT file.
- English and Russian interface retained.

## Privacy
Calculation history and notes remain in the device's local storage unless the user exports a note. Generated passwords are not saved to history.

## Important release status
This branch adds the Pro feature set, but **Google Play Billing / paid activation is not integrated yet**. Do not advertise this build as payment-protected until a real purchase flow and server/store-side entitlement checks have been implemented and tested.
