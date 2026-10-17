---
title: Trace a stop without starting the app
description: Read an existing chapter from MAP through clickable meshes, ride selection
  and a folder, then check two local paths.
kind: tutorial
source_ref:
- map.config.js#L13-L75
- index.html#L410-L450
- index.html#L522-L527
- index.html#L594-L645
---

# Trace a stop offline

You will explain how `residential` becomes a waypoint, a ride and a photo folder, then check two referenced files. This is a source walkthrough, **not a live installation or browser acceptance test**.

## Prerequisites

- A readable checkout with `index.html`, `map.config.js` and `assets/`.
- A text editor. The optional metadata command uses Python 3's standard library; the project has no virtual environment or dependency installation.
- Work from the repository root. Read the root `CONTEXT.md` and [status](../status.md). Do not open private business records or image contents.

## 1. Find the chapter and its image helper

In `map.config.js`, find `const P` and the chapter whose `id` is `residential` (lines 13 and 43–75 at the reviewed source). `P('ba1-before')` builds `photos/ba1-before.jpg`; consumers add `assets/`.

The chapter has `wpX: 15.2`, `ride: 'paver'`, a main note, three prints and a folder. Notice that the note's `lines` are separate from the folder's `lede` and captions. Editing one does not edit the other.

## 2. Follow the builder

Read `wpXof` and `buildChapter` in `index.html` (lines 410–450). A chapter becomes a waypoint plus its optional art, props, prints, note and writing. A folder makes the main note and prints clickable; terrain artwork does not get that tag. `extraNotes` also lack a folder tag.

**Expected:** you can point to the `tag` passed only to the main note and prints, not infer click behavior from the appearance of a photo.

## 3. Follow the ride window

`RIDES` derives bounds from chapter `wpX`, `RIDE_PAD = 1.2` and `RIDE_LEN = 16`. The residential paver window is strict `(14.0, 30.0)` on the traveler's world x. `rideAt` picks the first matching window; exact boundary points do not match it. Progress `p` is not itself a world-x coordinate.

**Expected:** you can calculate the window and locate the matching `paver` declaration. No equipment or device is queried.

## 4. Follow the folder

`openFolder` (lines 594–615) reads the in-memory chapter. It sets title/lede with `textContent`, then creates three configured before/after figures followed by six single photos. Each comparison range starts at 50 and changes CSS `--cut`; it does not modify a photo file. Close/Escape/backdrop close the overlay and try to restore prior focus.

**Expected:** you can distinguish transient DOM state from a job database or file-browser action. There is no record lookup.

## 5. Check the referenced paths

From the repository root, copy this one-line metadata-only check:

```bash
python3 -c "from pathlib import Path; paths=('assets/photos/ba1-before.jpg','assets/photos/ba1-after.jpg'); print('\n'.join(p+': '+str(Path(p).is_file()) for p in paths))"
```

Expected output in this checkout:

```text
assets/photos/ba1-before.jpg: True
assets/photos/ba1-after.jpg: True
```

It checks file existence only. It does not read/decode images, run JavaScript, fetch a CDN, validate rights or prove the browser can display them. No files are written and no cleanup is needed.

## If the result differs

If Python is unavailable, use your file manager's metadata view; do not install dependencies for this exercise. If either line is `False`, confirm you are in the repository root, compare path/case with `P(...)`, and check whether the asset is missing from this checkout. Stop before substituting a different business photo. A positive result still needs [authorized visual review](../how-to/preview-and-review.md) for a real change.

Next: use [MAP defaults](../reference/map-config.md) to explain omitted fields, or [change approved content](../how-to/change-approved-content.md) for a maintainer task.
