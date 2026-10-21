# Samuel Chen

Current source for [samuelchen.hk](https://samuelchen.hk). English is the default, with Traditional and Simplified Chinese available from the language selector.

## Preview

Run `python3 -m http.server 4173` and open `http://127.0.0.1:4173/`. The site is static and needs no package installation.

## Files

- `index.html`, `styles.css`, `script.js`: page content, responsive layout and interactions.
- `assets/`: only the four current illustrations and the SCKC icon/favicon.
- `image-credits.html`: illustration and reference attribution.
- `locales/`: Traditional and Simplified Chinese source translations.
- `translations.js`: generated browser translations. Run `node scripts/build-translations.mjs` after editing the locale files.
- `CNAME` and `.nojekyll`: GitHub Pages configuration.

The cover shows an anonymous gamer from behind. Script Bridge For FileMaker uses a female illustrated developer. The project links to https://github.com/samuelkcc/script-bridge and its current artwork is `assets/script-bridge-cover.jpg`. The work examples are anonymised; do not add employer information, private screenshots or operational data.

## Publish

GitHub Pages publishes the root of `main`. Keep only assets used by the current site; remove superseded images before publishing replacements. Verify the Pages deployment and the public page after pushing.
