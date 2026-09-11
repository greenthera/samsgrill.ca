# Food imagery

The homepage keeps Sam’s Grill’s products and source descriptions. Sources were downloaded from https://samsgrill.ca/ on September 11, 2026.

## Revised assets

The site serves `.webp` exports of each asset from `public/images/` (converted at quality 85 — 86% smaller on average, e.g. `barnyard-cutout.png` 2.7MB → `barnyard-cutout.webp` 401KB) for faster load times. The lossless `.png`/`.jpg` masters (plus the original raw source photos and unused early drafts) were moved out of `public/` to `_unused-images/` at the repo root, gitignored, so they don't ship with the site — re-export from there if an asset needs editing.

- `hero-burger-cutout`: updated photograph based on the original homepage burger.
- `poutine-cutout`: classic poutine bowl, based on the original website photo.
- `barnyard-cutout`: Barnyard Burger, based on the original website photo.
- `super-burger-cutout`, `donair-cutout`, `pulled-pork-cutout`, `hot-dog-cutout`: original product photographs with their backgrounds masked out.
- `contact.jpg` also has a `.webp` export in use (598KB vs 640KB — modest, but still smaller).
- `video-preview.jpg` stays in use as the original JPG — already tiny (8KB), and its `.webp` export came out slightly larger, so there was no reason to switch it.

The first three assets used the built-in image-generation tool, followed by local alpha masking and edge cleanup. The other four preserve the source photographs with local foreground masks. Shadows are applied through CSS so they blend with each section.

## Image-generation prompts

Hero: “Extract ONLY the complete bacon cheeseburger; remove fries, bowl, table, smoke and background. Preserve the actual burger ingredients, proportions, natural photographic textures and perspective. Center the complete burger with 5% transparent padding. Clean every lettuce and bacon edge, no dark halo or polygon edges. No text, extra food, floor or baked shadow.”

Poutine: “Extract the complete black bowl of classic poutine from this exact reference. Preserve fries, cheese curds, gravy, black bowl, high angle perspective and real photographic textures. Remove table and all background. Isolated on transparent alpha, no checkerboard, text, props or cast shadow. Full bowl visible.”

Barnyard: “Extract this exact Barnyard Burger onto a clean transparent background, complete bun and burger fully visible. Keep real pulled pork, onion rings, beef, BBQ sauce and cheese unchanged. Preserve natural photographic texture. Remove background and table fully. No props, lettering, checkerboard or shadow.”

No Chrome testing was performed for this revision, at the user's request. Verification is limited to image inspection, alpha checks, TypeScript production build and lint.
