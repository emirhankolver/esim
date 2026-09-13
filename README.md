# Milo eSIM website

Four static pages for GitHub Pages. No build step, no dependencies: open
`index.html` in a browser and what you see is what ships.

```
index.html     landing
support.html   help centre
privacy.html   privacy policy
terms.html     terms of use
styles.css     one stylesheet for all four
assets/logo.png
```

## Publishing

Copy this folder into a GitHub repository and turn on Pages (Settings → Pages →
deploy from branch, root of `main`). A custom domain goes in a `CNAME` file next
to `index.html`.

## What is in them

The pages are filled in: TurnaWorks Ltd. as the company, an effective date, and
Turkish law with the İstanbul courts for disputes. There is deliberately no
postal address — the identity and an email that reaches a person are what these
pages have to carry.

The landing page says the app is coming soon to Google Play rather than linking
to it. When the listing exists, that sentence becomes a link again.

## Then point the app at it

`AppLinks.kt` in the Android project still points at buildup.turnaworks.com:

```kotlin
const val PRIVACY = "…/privacy.html"
const val TERMS   = "…/terms.html"
const val SUPPORT = "…/support.html"
```

Google Play also wants the privacy policy URL in the store listing, and it is
checked during review.

## What the legal text claims

It was written from the app as it stands: data-only plans with no phone number
and no SMS, credits bought through the app stores, refunds of credits handled by
the store, plan cancellations refunded in credits while the eSIM is uninstalled,
and the SDKs actually in the build — Firebase Analytics and Crashlytics,
OneSignal, RevenueCat and Meta advertising. If any of that changes, these pages
are wrong and Play's data safety form will disagree with them.

It is not legal advice. Have someone qualified read it before you rely on it.
