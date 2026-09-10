# Alexa — Portfolio

A dark, minimal personal portfolio built with plain HTML, CSS, and JavaScript.
No frameworks, no build step — it runs by simply opening `index.html`.

## Project structure

```
.
├── index.html          Markup for every section (nav, hero, about, skills, projects, journey, contact, footer)
├── css/
│   ├── variables.css    Design tokens: colors, type scale, spacing, motion
│   └── style.css        All component and layout styles
├── js/
│   ├── data.js           Every piece of personal content, in one place
│   └── main.js            Rendering + interactions (nav, scroll reveal, terminal animation, contact form)
└── README.md
```

## Running it

No install, no build tools required.

- **Quickest:** double-click `index.html` to open it in a browser.
- **Recommended:** serve it locally so relative paths and fonts behave exactly
  like they will in production —
  - VS Code: install the "Live Server" extension, right-click `index.html` → "Open with Live Server"
  - or from a terminal in this folder: `python3 -m http.server 8000`, then visit `http://localhost:8000`

## Before you publish: fill in the placeholders

Everything you need to personalize lives in **`js/data.js`**. Search that file for
`TODO` — each one marks a real value you provided as a placeholder (`[YOUR ... LINK]`
in your brief) that needs your actual link:

| In `js/data.js`            | Replace with                                  |
|-----------------------------|------------------------------------------------|
| `person.email`               | Your professional email address                |
| `socials.github`             | Your GitHub profile URL                         |
| `socials.linkedin`           | Your LinkedIn profile URL                       |
| `socials.x.url`              | Your X/Twitter URL (or set `socials.x.show` to `false` to remove it entirely) |
| `projects[i].github`         | Each project's real repository URL              |
| `projects[i].demo`           | A live demo URL, if one exists (leave `""` to hide the button — it's hidden automatically) |

Until these are filled in, the related buttons/links render safely as `#`
rather than a broken URL, and the contact form will tell you to add a real
email address instead of silently failing.

## Customizing further

- **Colors, type, spacing:** all defined once as CSS custom properties in `css/variables.css`.
- **Copy (bio, tagline, journey entries, skills, etc.):** all in `js/data.js` — the
  page re-renders from this file, so you never need to touch the HTML for a content change.
- **Layout/visual styling:** `css/style.css`, organized by section with clear comment headers.

## Notes

- The contact form has no backend — submitting it opens the visitor's email
  app with a pre-filled message addressed to you (a `mailto:` link). If you
  later want it to submit silently to an inbox, you'll need to point it at a
  form backend (e.g. Formspree) or your own server endpoint.
- Quick-facts in the About section (projects built, technologies used, start
  year) are calculated from your own project/skills lists — update the source
  lists in `data.js` and those numbers stay accurate.
