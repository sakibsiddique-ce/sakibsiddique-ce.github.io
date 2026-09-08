# sakibsiddique-ce.github.io

Academic personal site for Sakib Siddique — Lecturer in Civil Engineering at Daffodil
International University, applying for PhD positions in structural health monitoring.

**Live at:** https://sakibsiddique-ce.github.io

> **If you are Claude reading this in a later session:** this file is the handover note.
> Read it before editing anything. The "Common requests" table maps what Sakib is likely
> to ask for onto exactly which file to change.

---

## What this is

Plain static HTML and CSS. No Jekyll, no Ruby, no build step, no npm. What is in the repo
is what gets served. GitHub Pages publishes the `main` branch root, and changes go live
roughly a minute after a push.

This was a deliberate choice over the `al-folio` Jekyll template: the site is small, and a
build toolchain would add setup cost without adding anything the site needs yet. The visual
style still borrows from al-folio.

## File map

```
index.html          Home — headshot, bio, research interests, Latest News
research.html       Motivation, past work, three ongoing projects
publications.html   Journal article, thesis, work in preparation
experience.html     Employment, education, awards, activities
projects.html       Six engineering projects
cv.html             CV download button, summary, skills, certifications
contact.html        Emails and profile links

assets/css/style.css    Every style. Light theme + dark theme
assets/js/theme.js      Dark mode toggle button only
assets/img/banner.jpg   Golden Gate Bridge banner, 1920x620
assets/img/photo.jpg    Headshot, 640x640, displayed as a circle
assets/files/sakib_siddique_cv.pdf          CV — keep this filename
assets/files/siddique_rana_2024_iut_jet.pdf Published paper

.gitignore          Ignores .superpowers/ (scratch files from a design tool)
README.md           This file
```

## Common requests

| If Sakib says... | Change this |
|---|---|
| "Add news: X happened" | `index.html`, the `<ul class="news">` block. Newest goes first. Copy an existing `<li>` — it has a `<span class="date">` and a `<span>` |
| "I published a new paper" | `publications.html` (add an `.entry` under Journal article), plus a Latest News line in `index.html`. If a PDF exists, drop it in `assets/files/` and link it |
| "Update my CV" | Replace `assets/files/sakib_siddique_cv.pdf` — **keep the same filename**, several pages link to it |
| "Change my photo" | Replace `assets/img/photo.jpg`. Square, roughly 640x640. CSS rounds it into a circle |
| "Change the banner" | Replace `assets/img/banner.jpg`, roughly 1920x620. Must be freely licensed — see Licensing below. Update the credit line in every page footer |
| "Add my Google Scholar / ORCID" | Add a text link in the `.intro-links` row in `index.html` and a `<dt>/<dd>` pair in `contact.html`. Also update `Abroad Apply/01_sakib_profile.md` |
| "Add a new project" | `projects.html`, copy an `.entry` block. Research projects go on `research.html` instead |
| "Add a page" | New `.html` file, copy the nav + banner + footer from any existing page, then add the nav link to **all** pages |
| "Change the colors" | `assets/css/style.css`, the `:root` token block at the top. Change dark theme in **both** the `@media (prefers-color-scheme: dark)` block and the `:root[data-theme="dark"]` block |

## Publishing

Editing files locally does nothing until they are pushed:

```bash
cd "D:/Claude Setup/Abroad Applications/sakibsiddique-ce.github.io"
git add -A
git commit -m "message"
git push
```

Live about a minute later. Images and CSS are cached hard by browsers — hard-refresh with
Ctrl+Shift+R when a change appears not to have landed.

Sakib can also edit any file directly on github.com (pencil icon, then "Commit changes"),
which publishes it without touching the local copy. If he has done that, `git pull` before
editing locally.

## Conventions

**Header and footer are duplicated in all seven pages.** There is no template engine. A nav
change, footer change, or banner-credit change means editing seven files. This is the
accepted trade-off for having no build step. Keep them identical except for the
`aria-current="page"` attribute, which marks the active nav link.

**Every page follows the same skeleton:** inline theme script in `<head>` (prevents a flash
of the wrong theme), `nav.nav`, `header.banner`, `div.wrap > main`, `footer`, then
`assets/js/theme.js`.

**The repeating content unit is `.entry`** — a title, a `.meta` line, a description, and an
optional `.links` row. Used on Research, Publications, Experience, and Projects. Reuse it
rather than inventing new markup.

**Dark mode:** every color is a CSS variable defined on plain `:root` first. Dark values are
redefined in two places — the `prefers-color-scheme` media query and `:root[data-theme="dark"]`
— so both the system setting and the manual toggle work. Never define a color only inside a
media query.

## Content sources

- `../Abroad Apply/01_sakib_profile.md` — master record. Employment, education, awards,
  activities, and the Online Profiles table live here. Also holds private data.
- `../Abroad Apply/Sakib_Siddique_CV_3Ref.pdf` — current CV. Research and project wording on
  the site follows this document.

**Never publish** anything from the profile file beyond what is already on the site:
no passport or NID numbers, no phone numbers, no home addresses, no family details, no
application trackers. Referees are named in the CV PDF; do not reproduce referee contact
details as a web page.

## Licensing

The banner is *Golden Gate Bridge at Purple Sunset* by Umer Sayyam, public domain (CC0), from
Wikimedia Commons. Credited in every page footer as courtesy, not obligation.

Any replacement banner must be public domain, CC0, or a license the site can satisfy. Stock
photo site screenshots are not usable. Wikimedia Commons is the reliable source — filter for
CC0 to avoid attribution requirements.

## Verification after changes

```bash
# every page and asset should return 200
for p in "" research.html publications.html experience.html projects.html cv.html \
         contact.html assets/img/banner.jpg assets/img/photo.jpg assets/js/theme.js; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' "https://sakibsiddique-ce.github.io/$p")  /$p"
done
```

Then check: both themes render, the layout holds at 375px width, and no internal link 404s.

## Known gaps

- **Google Scholar and ORCID** do not exist yet. Worth creating — a Scholar profile is often
  the first thing a professor clicks. When created, add to the site and the profile file.
- **Latest News is the section that goes stale.** It is the main signal that the site is
  maintained. It should gain a line whenever a paper is submitted, an offer arrives, or a
  project reaches a milestone.
- **No custom domain.** A `sakibsiddique.com` style domain could be pointed here later via
  Settings → Pages → Custom domain, plus DNS records at the registrar.
- **No analytics, blog, or search.** Deliberately out of scope.

## Design decisions worth not relitigating

These were settled with mockups; do not quietly reverse them.

- Static HTML over Jekyll/al-folio — build complexity not justified at this size.
- Golden Gate banner, chosen by Sakib over a Padma Bridge alternative.
- Name left-aligned on the banner with a research tagline, over a centered bordered box.
- **Profile links are plain text, not circular icon buttons.** Icons were built once and
  rejected. Do not reintroduce them unasked.
