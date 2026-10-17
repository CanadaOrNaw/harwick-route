---
title: Dependencies, assets and rights
description: Exact external loads, complete local asset path coverage, browser requirements
  and content-license limits.
kind: reference
source_ref:
- index.html#L8-L10
- index.html#L116-L156
- index.html#L245-L318
- index.html#L359-L385
- index.html#L486-L505
- index.html#L598-L605
- map.config.js#L13-L228
- README.md#L7-L7
- LICENSE#L1-L41
- CONTEXT.md#L34-L38
---

# Dependencies, assets and rights

## Actual runtime dependencies

| Dependency | Source contract | Limit |
| --- | --- | --- |
| Three.js | Import map resolves `three` to jsDelivr npm `three@0.160.0/build/three.module.js` | Pinned external executable module; no local vendor copy or integrity attribute |
| Google Fonts | Patrick Hand plus Caveat weights 500/600/700 stylesheet; three requested font loads awaited | Cold network dependency; await errors swallowed |
| Browser | ESM/import maps/top-level await, WebGL, Canvas2D/roundRect, Font Loading API, modern JS and CSS | No tested version/device matrix or polyfill/transpile layer |
| Static files | `index.html`, `map.config.js`, `assets/` with case/paths retained | No bundle/build artifact defined |
| Optional local preview | Python3 standard-library `http.server`, explicit port/bind | Not a project backend; unrun; serves readable checkout files |

Evidence: `index.html` 9–10,116–156,245–318; the [preview guide](../how-to/preview-and-review.md) gives its exact existing command. No package/lockfile, environment-variable API or dependency installer exists in this checkout. Presence of `.nojekyll` does not establish the actual host or deploy behavior.

## Asset path contract

`TextureLoader`, traveler sprites and folder images prefix `assets/`. `P(f)` expands to `photos/f.jpg`; PNGs can use direct names. Cutouts derive width from loaded image aspect and set sRGB/anisotropy. Error callbacks warn and count completion; folders have ordinary image tags with no custom failure handler (`index.html` 360–385,486–505,598–605).

The complete metadata inventory contains **45 images**: 9 top-level artwork PNGs and 36 files under photos. All 45 are referenced by explicit config/helper calls or static favicon reference at the reviewed source. No image contents/bytes, dimensions, photo subjects or rights were inspected. A path check is not an asset-quality or license test.

| Artwork paths | Role |
| --- | --- |
| `assets/truck.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/paver.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/roller.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/skidsteer.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/terrain.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/cottage.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/plant.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/mainstreet.png` | Local presentation art/sprite; actual use determined by MAP |
| `assets/cone.png` | Local presentation art/sprite; actual use determined by MAP |

Photo-directory filenames (not a photo/content dump):

- `crew.jpg`
- `truck.jpg`
- `mack.jpg`
- `res-curved.jpg`
- `res-long.jpg`
- `res-apron.jpg`
- `res-narrow.jpg`
- `res-shed.jpg`
- `ba1-before.jpg`
- `ba1-after.jpg`
- `ba2-before.jpg`
- `ba2-after.jpg`
- `ba3-before.jpg`
- `ba3-during.jpg`
- `ba3-after.jpg`
- `step1.jpg`
- `step2.jpg`
- `step3.jpg`
- `step4.jpg`
- `step5.jpg`
- `step6.jpg`
- `townhouses.jpg`
- `subdivision.jpg`
- `street.jpg`
- `road.jpg`
- `plant-load.jpg`
- `excavation.jpg`
- `removal.jpg`
- `skid-paver.jpg`
- `commercial.jpg`
- `industrial.jpg`
- `repair.jpg`
- `paver.jpg`
- `award-2025.jpg`
- `seal-2026.png`
- `logo.png`

A replacement can affect multiple chapter folders/prints or all mascot poses. Preserve exact extension/case and obtain provenance approval before substitution. The [offline exercise](../tutorials/trace-a-stop-offline.md) checks two paths without decoding images.

## License boundary

`LICENSE` gives the MIT engine terms and attribution retention. Its explanatory section excludes example biography/content and illustrations and still names upstream files/biography not present in this checkout. `README.md` separately credits the upstream engine and states company photos/artwork copyright. This review does not resolve every asset's provenance or authorize reuse.

The company owner and Zack decide current claim truth, photo rights and publication (`CONTEXT.md` human check). Do not assume the engine license licenses business images, that source inclusion proves approval, or that a developer handbook is a public portfolio source.

## Compatibility and outward actions

No network/availability/browser/GPU/performance test ran. External CDN/font loads, the fallback PDF and business website/tel navigation remain separate dependencies. Do not activate contact links merely to test them. The [troubleshooting page](../operations/troubleshoot-and-release-gates.md) distinguishes module vs WebGL failures and private-doc publication limits.
