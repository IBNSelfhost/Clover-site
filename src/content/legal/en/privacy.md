---
title: Privacy Policy
updated: 2026-09-06
---
Clover is an iOS client for TriliumNext notes. It talks only to **the Trilium server you configure**. We run no servers of our own, and there are no analytics, ads or tracking.

## Data collected
None. Clover does not collect or transmit any personal data to the developer or to third parties.

## On-device storage
- A copy of your notes (SQLite under iOS data protection), reading positions, appearance preferences, avatar and Home wallpaper — device only.
- Protected notes are never cached or indexed; decryption happens within the current session only.
- In Local Vault mode, notes exist only on this device.

## Keychain
Server password, session cookies and Cloudflare Access tokens are stored in the iOS Keychain, isolated per account.

## Network access
- Only the Trilium server address you enter.
- When you save a web page via Share, Clover fetches that page to extract its content.
- AI chat is provided by your Trilium server and the model you configured there; Clover stores no AI keys and involves no third-party AI service.

## System permissions (all optional)
- **Camera / Photos**: insert images into notes or attach them.
- **Microphone & speech recognition**: voice-to-text input. Recognition uses Apple's speech framework and may run on device or through Apple's speech service under Apple's privacy policy; Clover keeps no recordings.
- **Face ID**: app lock.

## Third-party SDKs
None with network access; the open-source libraries used (GRDB, SwiftSoup, …) run locally only.

## Deleting data
Removing an account inside the app deletes its on-device copy; notes on the server are untouched. Uninstalling removes all local data.

