# JHS FITNESS HUB website

Static site, no build step.

```
index.html              page content (HTML only)
assets/css/styles.css   all styling, numbered sections, mobile fixes at the bottom (17)
assets/js/main.js       menu, scroll, reveal animation, image fallback
assets/images/          put the client's own photos here
vercel.json             caching headers for Vercel
```

## Pictures
- Photos are Unsplash stand-ins. Check the licence or replace them before launch.
- To use the client's own: save them in `assets/images/` (.webp or .jpg, about 1200px wide, under 250 KB) and change the `src` in `index.html`. Every picture sits in a fixed-shape frame (class `media`), so any photo is cropped neatly.
- If a photo fails to load, a dark placeholder shows instead of a broken icon.

## Client details to fill in (`index.html`)
- Phone: `href="tel:"` in the Call Now button, footer and contact text.
- Directions: `href="#"` on the Get Directions button, a Google Maps link.
- Social links: each `href="#"` in the footer. Empty links stay hidden.
- Google Maps embed in the Contact section (currently a generic placeholder location).
- Address, hours, trainers, prices and currency (`$`), the "24/7" badge, stats (10+ / 50+ / 1K+).
- Replace the "[ Partner 01 ]" strip and "[ Member testimonial ]" cards, or delete those sections, before going live.

## Deploy
`npx vercel`, then `npx vercel --prod`. Or push to GitHub and import it on vercel.com (framework "Other", no build command).


## Hero image update
- `assets/images/hero-trainer-arms-crossed.webp` is the supplied monochrome trainer portrait used in the hero only.
- The existing sections and photo references below the hero were restored from the original uploaded ZIP and left unchanged.
- The hero layout is responsive; on narrow screens the trainer remains within the hero as a right-side visual behind the copy.


## Hero refresh (reference-matched)
- The hero now follows the supplied JHS FITNESS HUB reference: orange-red gradient, diagonal accents, large three-line headline, stacked CTAs, and a large monochrome trainer on the right.
- The hero athlete uses `assets/images/hero-trainer-arms-crossed-cutout.webp`, a transparent-background cutout prepared from the supplied generated trainer artwork.
- The rectangular dark image panel, overlay tint, and `24/7` badge were removed.
- The content and photos below the hero were not changed.


## Final hero responsive adjustment
- Reduced the monochrome trainer image size and removed its scaling transform.
- Anchored the image to the right/bottom within the hero clipping boundary.
- Removed any image panel/background styling from the hero visual.
- On mobile, moved the trainer to the lower-right with lower opacity so the headline, description, and CTAs remain legible.
- Kept sections and imagery below the hero unchanged.

## Hero visibility correction (latest)
- Removed the low-opacity treatment that made the trainer appear washed out/red.
- Kept the athlete fully opaque and monochrome with brightness/contrast tuning only.
- Removed image scaling transforms that could push the portrait beyond the hero frame.
- Reduced and constrained the portrait on mobile; anchored it to the lower-right with `object-fit: contain`.
- Kept hero copy and CTA buttons above the image in the stacking order.
- Left all sections and photos below the hero unchanged.
