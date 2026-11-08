# Shahiru Roshen — Portfolio

A single-page Next.js portfolio. Its layout and motion are modelled on grail-app.com: chapter-based sections, a 3D floating hero, pinned scroll scenes, split-line headlines and a floating bottom dock.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit your content

Everything you can see on the page is stored in **`data/portfolio.js`**: name, bio, experience, projects, services, skills and contacts. Values marked `DUMMY` are placeholders. You don't need to touch any component to change the text.

Each project, service and tile uses a generated pattern instead of an image:

- `pattern`: `checker | waves | dots | stripes | zigzag | scallop | cross`
- `palette`: `ember | ink | mustard | sky | blush | cobalt | cream | forest`
- `mock` (project artwork): `hero | grid | columns | chart | table`

## Sections

| # | Section | Reference section it mirrors |
|---|---------|------------------------------|
| 00 | Hero: name with 3D floating cards and tiles (mouse parallax, fly-through on scroll) | Reclaim your life |
| 01 | About: staggered split-line headline, bio, profile card | Problem |
| 02 | Since Day One: pinned pink scene with a live career clock and phone mockup | Timer |
| 03 | Experience: tilted card that slides in, five project rows | Journey |
| 04 | Education: words slide in from both sides, degree shown in a phone mockup | Voice feedback |
| 05 | Projects: pinned scene that switches project as you scroll, plus pill tabs | Totems |
| 06 | Skills: count-up stats and falling skill bubbles | Stats |
| 07 | Services: shield cards, scroll letter-drop headline, word-by-word text reveal | Guilds |
| 08 | Contact: large CTA and footer | Get in early |

## Fonts

The site uses **Bodoni Moda** (display) and **Geist** (body), loaded through `next/font/google`. The reference site's fonts (PP Pangaia and Switzer) are commercial or self-hosted, so free substitutes are used here. To use other fonts, change the two imports in `app/layout.jsx`.

## Deploy to Cloudflare

The site is exported as static HTML to `out/` (`output: 'export'` in `next.config.mjs`).

**Cloudflare Pages (dashboard):** connect the Git repo and set:

- Framework preset: *None*
- Build command: `npm run build`
- Output directory: `out`

**Cloudflare Workers (CLI):** `npm run deploy`. This builds the site and runs `wrangler deploy` with `wrangler.jsonc`, and asks you to log in the first time.

## Notes

- Smooth scrolling comes from [Lenis](https://github.com/darkroomengineering/lenis). All scroll animations are driven by one shared `requestAnimationFrame` loop in `lib/scroll.js`, which writes a `--p` (0→1) CSS variable that the styles in `app/globals.css` read.
- Visitors who have *Reduce motion* turned on get no smooth scrolling and close to no animation.
- On screens narrower than 900px the layout stacks, and the pink clock scene stops pinning.
