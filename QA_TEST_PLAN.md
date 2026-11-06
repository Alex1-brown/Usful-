# Useful Pro 2.1.1 — Physical Device QA Plan

This checklist is for testing the Android debug APK on a real device before any public release. A successful GitHub Actions build proves that the project compiles; it does not prove that every feature works on a phone.

## Test environment

Record before testing:
- Device model:
- Android version:
- APK version: 2.1.1 (versionCode 4)
- Install type: clean install / update over previous Useful
- Test date:
- Tester:

## 1. Installation and launch

- [ ] Install the debug APK without an installation error.
- [ ] Confirm the launcher label is **Useful Pro** and the icon is the intended Useful icon.
- [ ] Launch the app; confirm the home screen appears without a blank page or crash.
- [ ] Close and reopen the app twice.
- [ ] Rotate the device if rotation is supported; check that controls remain usable.
- [ ] Confirm the app opens and core tools work with mobile data and Wi-Fi disabled.

## 2. Language

- [ ] English is selected on a clean install.
- [ ] Switch to Russian; verify visible labels, buttons, placeholders, timer controls, and QR controls.
- [ ] Close and reopen the app; confirm the selected language is retained.
- [ ] Switch back to English.

## 3. Password generator

- [ ] Generate a password using all character groups.
- [ ] Test the minimum and maximum length controls.
- [ ] Disable each character group in turn; verify the output follows the selected groups.
- [ ] Test exclusion of similar characters (I, l, 1, O, 0).
- [ ] Enable “Avoid repeated characters”; verify no character repeats.
- [ ] Test a requested length greater than the available unique characters; expect a clear error, not a crash.
- [ ] Copy the result and paste it into a temporary text field.
- [ ] Confirm generated passwords are not added to notes or calculation history.

## 4. Calculator and history

- [ ] Test addition, subtraction, multiplication, and division.
- [ ] Test parentheses and decimal values.
- [ ] Test the percent key and record whether its behavior matches the intended calculator convention.
- [ ] Test backspace and clear.
- [ ] Test division by zero and malformed expressions; expect a safe error.
- [ ] Calculate several expressions; verify successful results appear in history.
- [ ] Close and reopen the app; verify history remains on the device.
- [ ] Clear history and confirm it is empty.

## 5. Notes

- [ ] Enter text; wait briefly; confirm the auto-save indicator updates.
- [ ] Close and reopen the app; verify the note remains.
- [ ] Copy the note.
- [ ] Export the note as TXT; open the exported file and check its contents and UTF-8 characters.
- [ ] Clear the note; confirm the clear action behaves as expected.

## 6. QR generator

- [ ] Generate a QR code from plain English text.
- [ ] Generate a QR code containing Cyrillic text.
- [ ] Generate a QR code containing a URL.
- [ ] Change foreground and background colors; verify contrast and scanability.
- [ ] Test each export size: 512, 768, and 1024 px.
- [ ] Use the Save QR action. On Android, complete the share/save sheet and then locate the PNG in the destination selected.
- [ ] Open the PNG and scan it with another device or a trusted QR scanner.
- [ ] Confirm the decoded text exactly matches the original input.
- [ ] Test empty input and very long input; expect a readable message.

## 7. Timer and stopwatch

The GitHub Actions workflow also runs `tests/timer-regression.cjs` to check that a completed countdown can be restarted with newly entered duration values.

- [ ] Start, pause, resume, and reset the countdown timer.
- [ ] Test zero seconds and a multi-minute countdown.
- [ ] Confirm the completion state is visible and the timer does not continue into negative time.
- [ ] After the timer expires, change the minute/second inputs and press Start; verify the new duration is used without requiring an extra reset.
- [ ] Change language and verify timer labels follow it.
- [ ] Start, stop, and reset the stopwatch.
- [ ] Leave and reopen the tool; verify the displayed state is sensible.

## 8. Other utilities

- [ ] Unit converter: test length, weight, and temperature conversions using known reference values.
- [ ] Date difference: test same-day, reversed-date, and multi-day ranges.
- [ ] Random number: test minimum, maximum, and equal bounds.
- [ ] Text analyzer: test empty text, one word, multiple lines, and punctuation.
- [ ] Uppercase, lowercase, copy, and clear-text actions work.

## 9. Offline and privacy checks

- [ ] With all network connections disabled, launch the app and test every core tool.
- [ ] Confirm QR generation does not require a remote API.
- [ ] Confirm notes and calculation history remain device-local.
- [ ] Confirm generated passwords are not saved.
- [ ] Do not enter real passwords or sensitive personal data during QA.

## 10. Record defects

For each failure, record:
- Tool and exact steps:
- Expected result:
- Actual result:
- Screenshot or screen recording:
- Android version and device model:

Do not mark a test as passed unless it was performed on a physical device.

## Automated checks in GitHub Actions

The workflow runs these automated checks before packaging:
- JavaScript syntax validation.
- Countdown timer regression test, including restart after expiry with a newly entered duration.
- Calculator regression test for arithmetic, parentheses, percentage conventions, division by zero, and rejected code-like input.

Passing these checks verifies only the tested JavaScript logic and build process. It does not replace physical-device testing.

## Release blockers — not completed by this QA document

- Google Play Billing and server-side purchase verification are not implemented.
- The current release AAB is unsigned.
- A physical-device QA pass has not been recorded by this document.
- Store listing, privacy disclosures, and signing configuration still require completion.

Until those blockers are addressed, treat this branch as a test build, not a paid production release.
