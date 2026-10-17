---
title: Controls, query flags and QA globals
description: Exact input behavior, URL parsing, debug calls, return shapes and limits
  for authorized browser review.
kind: reference
source_ref:
- index.html#L551-L656
- index.html#L663-L665
- index.html#L732-L751
- map.config.js#L43-L75
---

# Controls and browser QA

These are browser implementation interfaces, not a backend/package API or automated suite. The globals are always exposed after module initialization, not gated by `qa`. Only use them in an authorized preview. They do not grant permission to start a server or contact a business.

## User controls

| Control | Input | Effect and limits | Source |
| --- | --- | --- | --- |
| Wheel / vertical touch swipe | wheel e.deltaY; touchstart first clientY and touchmove delta | targetP += wheel delta*.00007; touch delta*.00007*5. Handlers passive; wheel/touch movement ignored while folder open. Progress starts0; touch movement state initialized null, touchstart sets it. | index.html:552-564 |
| Keyboard route / Escape | ArrowDown, PageDown or Space; ArrowUp or PageUp; Escape when folder open. | Down/PageDown/Space increments targetP .012; Up/PageUp decrements .012. Folder open causes all route key behavior to return; Escape closes folder. No preventDefault or focus trap. | index.html:565-569, index.html:612 |
| Stops navigation buttons | Click or keyboard-activate the generated button for each truthy chapter.stop; focus alone does not seek/open. | Sample camera curve601 points toward wpX+1, dismiss hint and after1400ms open chapter folder if present. Timers not cancelled/coalesced. | index.html:630-645 |
| Note/photo tap and cursor | Canvas pointerdown/up with movement distance<8px; pointermove. | Raycast registered clickable meshes; opens nearest hit folder. Hover toggles canvas.hot. Canvas pointermove also updates camera parallax normalized mx/my. | index.html:617-628, index.html:647-651, index.html:678-680 |
| Folder close and comparisons | Visible close button, Escape, or click backdrop itself; before/after range input. | Close removes open class and attempts previous focus restore. Open focuses close. Range min0/max100/default50 updates CSS --cut percentage. | index.html:598-615 |
| Resize / narrow layout | Window resize; CSS width<=700px. | Recompute FOV/aspect and renderer size. Small CSS hides badge/odometer, reduces stop button sizes; no separate mobile engine. | index.html:97, index.html:149-152, index.html:653-656 |
| Contact / fallback links | Static tel: and business HTTPS links; fallback PDF link if WebGL renderer creation throws. | Browser/OS navigation/contact action, not a quote form or app API. Do not activate during source audit. | index.html:106-113, index.html:139-140 |

## Query parameters

| Name | Example | Default and parsing | Effect | Source |
| --- | --- | --- | --- | --- |
| p | ?p=0.5 | p=targetP=0 initially. Presence -> parseFloat(value) \|\| 0, clamp to [0,.999]; sets current and target before rendering. | Initial seek only; does not persist progress or disable motion. | index.html:552, index.html:586-589 |
| qa | ?qa or ?qa&p=0.5 | Absent -> false. Presence only matters: ?qa=false also enables it. new URLSearchParams(location.search).has('qa') | Hides loader immediately on first animation frame. It does not run assertions, freeze random textures, stop animation or prove all assets loaded. | index.html:585, index.html:732-751 |

For example, `?p=2&qa=false` seeds both progress values at `.999` and enables QA loader hiding. This is source-derived expected behavior, not an executed browser example. QA does not freeze animation, randomness or texture requests.

## Debug globals

| Name | Arguments | Effects | Return / limit | Source |
| --- | --- | --- | --- | --- |
| window.__worldSeek(v) | v numeric progress target; no validation/clamping in this hook. | Sets targetP only; render loop damps p toward it and wraps progress. | undefined; the block-body arrow function has no return statement. Browser QA/debug helper, not a stable service API. | index.html:552-584, index.html:668-673 |
| window.__scene | None (property). | Exposes the live mutable Three.Scene object. | scene reference. | index.html:573-574 |
| window.__worldState() | None. | Read-only snapshot construction. | `{p,targetP,cam:[x,y,z],travelers:{fox:boolean,[vehicleId]:boolean},fox:null\|{sitVisible,walkVisible,sitH,walkH,sitY,groupY,scale,topLayer},pending,loaded}. Presence flags mean meshes loaded, not active mode or successful image rights/UX.` | index.html:575-584 |
| window.__openFolder(id) | Existing chapter id whose chapter has folder. Current ids are residential, builders, base, process, recognition, quote. | Looks up chapter and calls openFolder; unknown id is not guarded and can throw. | undefined from openFolder, on success. | index.html:594-615, map.config.js:43-44, map.config.js:79-80, map.config.js:109-110, map.config.js:140-141, map.config.js:171-172, map.config.js:202-204 |
| window.__ft / window.__ftLast | Optional caller-created object with push method (normally an array); __ftLast stores previous timestamp. | If __ft truthy, each render appends frame delta milliseconds and updates __ftLast. Not created by the app and can grow without bound while set. | No helper return. | index.html:663-665 |

`__worldState().travelers` reports whether meshes loaded, not which ride is active. `pending`/`loaded` count callbacks; errors increment loaded too. `fox` is the inherited key name even though the current mascot is a truck. `__scene` is mutable. Invalid `__openFolder` IDs can throw; `__worldSeek` has no numeric validation/clamp.

## Safe interpretation and cleanup

- A possible authorized console call is `window.__openFolder("residential")`. The current source creates three pair figures before six single photos and focuses close. It is **unrun** here; inspect actual visual/focus behavior before reporting it works.
- `window.__worldState()` builds a transient snapshot. It does not query a device/service or validate image rights/claims.
- The optional frame probe requires the caller to create `window.__ft = []`. Frames append milliseconds and update `__ftLast`; the app does not bound the array. Remove the buffer after an authorized measurement. This documentation did not create it or measure performance.
- The source has no exported `openFolder` package function, assert runner, persistent progress, telemetry endpoint or HTTP service routes. Do not substitute an invented API for browser behavior.

Related: [preview checklist](../how-to/preview-and-review.md), [loading failure limits](../operations/troubleshoot-and-release-gates.md), [MAP config](map-config.md).
