# Alexa — Portfolio

A dark, minimal personal portfolio built with plain HTML, CSS, and JavaScript.
No frameworks, no build step — it runs by simply opening `index.html`.

## Project structure

.
├── index.html          Markup for every section (nav, hero, about, skills, projects, journey, contact, footer)
├── css/
│   ├── variables.css    Design tokens: colors, type scale, spacing, motion
│   └── style.css        All component and layout styles
├── js/
│   ├── data.js           Every piece of personal content, in one place
│   └── main.js            Rendering + interactions (nav, scroll reveal, terminal animation, contact form)
└── README.md


## Running it

No install, no build tools required.

- **Quickest:** double-click `index.html` to open it in a browser.
- **Recommended:** serve it locally so relative paths and fonts behave exactly
  like they will in production —
  - VS Code: install the "Live Server" extension, right-click `index.html` → "Open with Live Server"
  - or from a terminal in this folder: `python3 -m http.server 8000`, then visit `http://localhost:8000`

## Before you publish: fill in the placeholders

Everything you need to personalize lives in **`js/data.js`**.


- **Colors, type, spacing:** all defined once as CSS custom properties in `css/variables.css`.
- **Copy (bio, tagline, journey entries, skills, etc.):** all in `js/data.js` — the
  page re-renders from this file, so you never need to touch the HTML for a content change.
- **Layout/visual styling:** `css/style.css`, organized by section with clear comment headers.

## Notes

- The contact form has no backend — submitting it opens the visitor's email
  app with a pre-filled message addressed to you (a `mailto:` link). If you
  later want it to submit silently to an inbox, you'll need to point it at a
  form backend (e.g. Formspree) or your own server endpoint.
