# Milo eSIM website

Four static pages for GitHub Pages, styled with Tailwind CSS.

```
index.html     landing
support.html   help centre
privacy.html   privacy policy
terms.html     terms of use
src/input.css  Tailwind entry point and the palette
styles.css     built from the above — do not edit by hand
assets/
```

## Styling

Every page is styled with utility classes in the markup. The only hand-written
CSS is `src/input.css`, which sets the palette — the same values as the app's
own `Color.kt`, so a screenshot dropped onto a page sits in the blue around it.

```bash
npm install
npm run build     # writes styles.css, minified
npm run dev       # rebuilds on save
```

`styles.css` is committed so the site works straight from a checkout, and the
deploy workflow rebuilds it on every push. That second part matters: Tailwind
only emits the classes it finds in the HTML, so a class added by hand would
otherwise have no styles until someone remembered to run the build.

## What is in the pages

TurnaWorks Ltd. as the company, an effective date, and Turkish law with the
İstanbul courts for disputes. There is deliberately no postal address — the
identity and an email that reaches a person are what these pages have to carry.

## The app points here

`AppLinks.kt` in the Android project links to `/privacy.html`, `/terms.html`
and `/support.html` on this domain. Renaming a file breaks the app's links in
every installed copy, so rename with that in mind.

## What the legal text claims

It was written from the app as it stands: data-only plans with no phone number
and no SMS, credits bought through the app stores, refunds of credits handled
by the store, plan cancellations refunded in credits while the eSIM is
uninstalled, and the SDKs actually in the build — Firebase Analytics and
Crashlytics, OneSignal, RevenueCat and Meta advertising. If any of that
changes, these pages are wrong and Play's data safety form will disagree with
them.

It is not legal advice. Have someone qualified read it before you rely on it.
