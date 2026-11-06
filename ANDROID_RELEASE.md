# Useful — Android release status

## Stable release on `main`
- App display name: Useful
- Version: 1.0.0
- Application ID: `com.alexbruno.pocketutility`
- Capacitor: 8.x
- Compile / target SDK: Android 16 / API 36

## Pro development branch
- Branch: `useful-pro-next`
- App display name: Useful Pro
- Version: 2.1.1
- Android versionCode: 4
- Application ID is unchanged, so a correctly signed build can update the same installed app.
- The Pro pull request is still a draft and has not been merged into `main`.

See [PRO_VERSION.md](PRO_VERSION.md) for the Pro feature list and limitations.

## Build workflow
The GitHub Actions workflow prepares the Android project from the existing web app and produces:
- Debug APK for device testing
- Release AAB for Google Play preparation

The release AAB is currently unsigned. Before production upload, configure a secure Android upload keystore and signing credentials in GitHub Actions or build and sign the release in Android Studio.

## Google Play readiness
Google Play Billing and purchase verification are not integrated. The Pro build must not be advertised as a paid, payment-protected version until purchase handling and entitlement checks are implemented and tested.

For every Play Store update:
1. Keep the same application ID.
2. Increase `versionCode` for every upload.
3. Increase `versionName` when appropriate.
4. Keep the signing key unchanged.
