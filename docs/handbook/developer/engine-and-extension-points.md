---
title: Engine and extension points
description: Map every renderer responsibility, actual environment/debug tooling and
  real data extensions before changing code.
kind: developer
source_ref:
- index.html#L1-L118
- index.html#L137-L304
- index.html#L306-L549
- index.html#L551-L753
- map.config.js#L13-L41
- LICENSE#L28-L39
- CONTEXT.md#L24-L38
---

# Engine and extension points

The project is plain HTML/CSS and ES module JavaScript. There is no package manager, compiler, install script, test framework, CI workflow or app build defined here. Keep that absence explicit rather than adding imaginary `npm` commands. Read [architecture](../architecture/browser-lifecycle.md) before changing behavior.

## Repository and helper map

| Source / section | Responsibility |
| --- | --- |
| `map.config.js` 13–41,41–228 | `P`, MAP root/opening/mascot/vehicles, six chapter declarations |
| `index.html` 1–118 | Static metadata/contact/fallback strings, CSS, canvas/modal DOM and import map |
| 134–162 | Title/badge, WebGL renderer, `fitFov`, lights, world constants |
| 165–241 | `ctx2d`, `grain`, `wobblyLine`, wall/ground/compass CanvasTextures |
| 245–304 | `noteTexture`, `writingTexture`, `waypointTexture` text measurement/drawing |
| 307–357 | Animation/clickable arrays, texture counters, awaited fonts, wall/ground/compass meshes |
| 360–424 | `cutout`, `place`, `waypoint`, `paintSpec` plane construction/asset loading/depth |
| 426–471 | `noteSpec`, `writeSpec`, `buildChapter`, `buildOpening` config forwarding |
| 474–527 | Opening/chapter/seam calls; `traveler`, mascot/vehicles/perches and `RIDES`/`rideAt` |
| 530–589 | Camera/traveler curves, virtual-progress input, wrap/debug/query hooks |
| 594–645 | `openFolder`, `closeFolder`, `hit`, tap detection, `seekTo`, stops buttons |
| 647–753 | Pointer parallax, resize, damp/wrap/render/vehicle/flight/HUD/loading loop |

Assets are 45 local presentation images, not code or record inputs. README and LICENSE describe attribution/rights separately. Private handbook and generated hook wrappers are not runtime dependencies. The inherited LICENSE lists upstream utility files that are **absent** in this checkout; do not invoke them.

## Native environment and checks

A static HTTP host plus a browser is the documented runtime interface. The existing Python3 loopback preview command is in [preview and review](../how-to/preview-and-review.md); it is unrun for this docs pass. Cold browser use needs the external pinned Three.js module/fonts. No minimum browser/Python version is declared.

There are no native automated tests or fixtures. For a safe result, use the [metadata-only walkthrough](../tutorials/trace-a-stop-offline.md). Browser helpers exist for manual/headless QA, but no runner ships here. [Controls and QA](../reference/browser-controls-and-qa.md) documents exact calls and unsafe invalid-input limits. Do not treat QA mode as a test pass, deterministic screenshot mode or asset-success check.

## Extending the existing data

These are real engine extension points, not promises to generalize the architecture:

- **A chapter:** `art`, `props`, `prints`, main `note`, `extraNotes`, `aphorism`, `extraWriting`, `folder` and optional `stop`, `wpX`, `ride`, `finale` are consumed. Main note/prints only become clickable when folder exists. `extraNotes` exists but current chapters do not configure it.
- **Opening placement:** `opening.place` and `opening.props` are implemented but not configured in the current opening. Each forwarded override is listed in [MAP reference](../reference/map-config.md#opening).
- **Vehicle:** add a named `MAP.vehicles` definition and matching chapter `ride` only with an approved change. The engine loads it, builds perch/windows and supports `flies`, `yOff`, `perch`. Current machines do not fly. A matching key is a caller convention, not validation.
- **Mascot poses:** sit/walkA/walkB are all required; current source reuses `truck.png`. Code/comments still say fox or plane from upstream. These names do not establish additional current characters or flight features.
- **Artwork:** supply relative `file` and placement to a PaintSpec; width derives from loaded image aspect. Notes/writing use CanvasTextures and a CSS font string with a px size. Check actual forwarding before advertising a config knob.

## Limits that require engine review

`SPAN=112`, duplicated opening/finale, hard-coded camera/traveler curves, `CH_START=15.2`, `CH_STEP=16`, `RIDE_PAD=1.2` and `RIDE_LEN=16` constrain layout. New stop counts/positions can move beyond the camera/loop; they do not automatically resize a route. Ride windows are strict, first-match world-x tests.

A text overflow may involve measurement and the `px` font regex in `writingTexture`; a missing photo may simply be its path. The `noteTexture` helper has ink/paper/pad arguments, but `noteSpec` does not forward those fields. Do not patch geometry or claim unused options without tracing the call.

## Contribution and regression scope

| Change | Recheck |
| --- | --- |
| Textures/text helpers or scene constants | All chapter note fitting/depth, loop, narrow-screen FOV, loading |
| Traveler/ride/camera | Forward/backward orientation, idle/walk/ride, boundary windows, seam |
| Modal/markup/controls | Escaping, captions/ranges, focus/close, click-vs-swipe, delayed nav |
| Dependency URL or static hosting | Cold import/font behavior, fallback scope, private-doc exclusion |
| Branding/contact config | Both MAP and hard-coded HTML metadata/CTA/fallback/hint strings |

Source-level risks such as mutable debug globals, uncancelled nav timers, no focus trap and failure-completion counters are documented, not repaired by this handbook. Obtain a separately scoped product change and authorized browser checks. Follow [collaboration](../collaboration.md#how-to-contribute) and [source review](../maintenance/source-review-and-status.md) for approval and evidence handoff.
