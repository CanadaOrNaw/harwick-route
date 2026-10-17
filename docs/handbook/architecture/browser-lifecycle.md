---
title: Browser lifecycle and data flow
description: Follow static files, external loads, scene construction, transient input
  state and folder rendering.
kind: concept
source_ref:
- index.html#L9-L10
- index.html#L116-L156
- index.html#L306-L527
- index.html#L529-L753
- map.config.js#L13-L41
---

# Browser lifecycle and data flow

The application has no server-side state or business-data connector. The browser imports `MAP`, builds a Three.js scene and opens HTML photo folders from that same in-memory object.

## Component map

| Component | Responsibility | Dependencies |
| --- | --- | --- |
| `map.config.js` | The named value `MAP` and module-local photo helper `P` | Approved content + local asset filenames |
| HTML/CSS shell | Canvas, loader, stops nav, contact/fallback links and modal styles | Browser DOM/CSS; Google Fonts |
| Renderer/textures | WebGL renderer/camera/lights; procedural paper/compass/text | Three.js, Canvas2D, fonts |
| Scene builders | Cutout/texture planes, notes, writing, opening/chapters and seam copies | MAP + asynchronous local texture loads |
| Traveler assembly | Mascot poses, named vehicles, perch/ride windows | Mascot/vehicle config, camera/traveler curves |
| Input/folder controller | Virtual progress, raycasting, stops, modal content/ranges/focus | Browser events and chapter folders |
| Render/loading loop | Damp/wrap progress, camera/traveler animation, HUD, warm scene/reveal | Performance clock, pending/loaded callbacks |

Detailed helper locations and change impact are in the [developer guide](../developer/engine-and-extension-points.md).

## Load and construct

1. The static host supplies `index.html`. Google Fonts CSS is requested; the import map resolves `three` to pinned jsDelivr 0.160.0. The module imports local `MAP` (`index.html` 9–10,116–121).
2. Title and badge are set from MAP. WebGL renderer creation has a narrow try/catch fallback; dependency import failure occurs before it. Pixel ratio is capped at 1.5 and portrait FOV is widened (`134–156`).
3. Font loading is awaited before handwriting textures/world construction; its errors are swallowed. Procedural Canvas2D textures build paper, ground, compass and notes (`165–318`). Random grain/phase means images are not deterministic snapshots.
4. `buildOpening(0)` and every chapter create geometry/async texture requests. Finale chapters are duplicated one span west; opening is copied one span east (`320–479`). This is a fixed visual loop, not a GIS path.
5. Traveler requests three mascot poses plus declared vehicles. Ride windows derive from chapter `wpX` using fixed pad/length (`481–527`).

## Input and render

Wheel/touch/keys update `targetP`; `p` eases toward it each frame. Query `p` may seed both. The loop wraps progress, samples the camera curve by arc length, adds pointer parallax and places the traveler slightly ahead. Ride world-x windows choose a vehicle; outside ride windows, the sitting pose shows at rest or the two walk frames alternate while moving. Render frames also animate paper/cutouts and round the configured odometer to tens (`529–589,658–729`).

There is no progress storage. Reload starts at zero unless a query supplies `p`. No database, analytics or CRM update follows input.

## Select and open a folder

The main chapter note and prints enter `clickables` only when the chapter has a folder. A short pointer tap raycasts them. A stop button samples the camera curve to seek near the chapter and schedules folder opening after 1400ms (`439–450,617–645`).

`openFolder` reads only `ch.folder`: title/lede use `textContent`; escaped before/after figures precede escaped single-photo figures. Range values change CSS `--cut`. Open focuses close; Escape/button/backdrop close and try prior-focus restoration (`591–615`). This is not an operating-system job folder or a customer-record browser.

## Loading complete is not image success

Both successful and failed texture callbacks increment `loaded`. A failed cutout/traveler logs a warning and can leave a missing mesh. When all pending callbacks complete, the loop warms seven scene views and fades the loader; QA mode can hide it earlier (`310–311,360–385,486–505,732–751`). Folder images have no custom load-failure handler.

`pending === loaded` is therefore a completion-counter fact, not an image-success assertion. See [failure boundaries](../operations/troubleshoot-and-release-gates.md) and [debug return values](../reference/browser-controls-and-qa.md#debug-globals).

## Boundaries outside the browser

- Network dependencies: jsDelivr and Google Fonts; static external business/PDF links only activate on navigation.
- Ownership dependencies: root `CONTEXT.md` routes facts/rights/publication to the company owner; runtime never imports those records.
- Documentation dependencies: the shared site and checker are separate machinery. This page is not a public deployment or runtime acceptance receipt.

Related: [MAP contract](../reference/map-config.md), [dependencies and rights](../reference/dependencies-assets-and-rights.md), [working together](../collaboration.md).
