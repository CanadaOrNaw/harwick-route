---
title: MAP data contract and defaults
description: All consumed root, opening, chapter, placement, traveler and folder fields,
  defaults and ignored-looking options.
kind: reference
source_ref:
- map.config.js#L13-L41
- map.config.js#L41-L228
- index.html#L244-L304
- index.html#L359-L527
- index.html#L594-L611
- index.html#L695-L727
---

# MAP data contract

`map.config.js` exports one named value, `MAP`. Its local helper `P(f)` returns `photos/` + f + `.jpg`; all image consumers prefix `assets/`. This is trusted executable JavaScript, **not JSON or a validated schema**. Missing required objects, invalid line arrays/font strings or unknown ride keys are not caught by a validator.

Values below describe consumed code, not a recommendation to add every optional field. Scene coordinates are visual units, not latitude/longitude. Root/current content values are not independent company-claim evidence. Use the [content workflow](../how-to/change-approved-content.md).

## Root

| Fields/defaults | Requirements and effects | Source |
| --- | --- | --- |
| title:string (no fallback); badge:string (no fallback); odometerKm:number (fallback 5600 only in HUD, current 70); opening:object; mascot:object; vehicles?:object keyed by ride id; chapters:array. | opening/mascot/chapters assumed present. Direct property access can throw if missing. Root is executable JS, not JSON/schema-validated input. | map.config.js:15-41, index.html:134-135, index.html:453-483, index.html:508-526, index.html:725-727 |

## Opening

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| `headline?:string[]; tagline?:string; arc?:string; hero?:{image:string,caption?:string}; props?:PaintSpec[]; place?:{headline,tagline,arc,hero,caption} placement overrides.` | Headline fallback [The Field Map of, MAP.badge]. Each optional visual is built only when present. Hero caption is static handwriting; hero image has no chapter tag/click interaction. | map.config.js:20-25, index.html:453-471 |

## Opening headline placement

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| font default 700 96px Caveat; ink #3b2f21; x 5.2; y 5.0; h 2.6; tilt -.02. | Headline alignment forced center; no config w/z forwarded. | index.html:454-458 |

## Opening tagline placement

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| font default 500 58px Caveat; ink #8a765a; x 5.2; y 6.6; h .8; z .06. | Alignment forced center; no tilt forwarded. | index.html:459-461 |

## Opening arc placement

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| font default 500 52px Caveat; ink #6d5c43; w 1400; x 5.4; y 3.4; h .72; z .06; tilt .015. | Only the listed consumed fields are forwarded; no shape validation. | index.html:462-464 |

## Opening hero and caption placement

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| hero: x 11.3,y 4.7,h 3.1,sway .008. caption: font 500 44px Caveat,ink #8a765a,x 11.3,y 2.85,h .5,z .05. | Hero forces wallPin=true/framed=true. No caption tilt/w forwarded. | index.html:465-469 |

## Mascot and vehicles

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| `mascot.scale default 1.15 (current 1.0); sit/walkA/walkB each {file,h,yOff?=0}; sit.perch?=[-.19,0] interpreted [y,x]. vehicles?[id]:{file,h,yOff?=0,perch?=[0,0],flies?}; current vehicles paver/roller/skidsteer, no flies enabled.` | All three mascot poses required. file is relative to assets/. Sprite file may repeat. sit yOff is applied at load but sit Y is subsequently recomputed from sit.h and perch each frame. | map.config.js:27-39, index.html:481-527, index.html:695-705 |

## Chapter

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| id:string; stop?:string; wp?:string; wpX?:number; ride?:vehicle-id; finale?:boolean; art?:PaintSpec[]; props?:PaintSpec[]; prints?:PaintSpec[]; note?:NoteSpec; extraNotes?:NoteSpec[]; aphorism?:WritingSpec; extraWriting?:WritingSpec[]; folder?:Folder. | wpX default 15.2+i*16; waypoint label default WP· + zero-padded zero-based i. stop absent -> no nav button. folder controls note/print clickability; art/props/extraNotes not tagged. finale chapters duplicated at -112. | index.html:410-450, index.html:473-479, index.html:638-644 |

## Paint spec

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| file:string; x:number; h?:number=3; y?:number; wallPin?:boolean=false; framed?:boolean=false; zBack?:number; sway?:number=.02; flip?:boolean=false; bob?:number=0. | Default z=PATH_Z=2.5; when not wallPin and zBack supplied, z=2.5-zBack. wallPin forces z .03. Unset y uses h/2. prints seed framed:true,sway:.006 but each entry can override. Phase is random inside cutout and not configurable through paintSpec. | index.html:359-386, index.html:414-424, index.html:444-446 |

## Note spec

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| lines:string[]; title?:string=null; pin?:string\|false\|null default #b0503c (false/null disables drawn pin); font?:CSS-font default 600 46px Caveat; w?:number=640; x?:number=cx+2.5; y?:number=5.9; h?:number=2.3; z?:number=.07; tilt?:number= i odd .03 else -.03. | Measured text can expand width; line height 56. ink/paper/pad exist only in noteTexture helper defaults (#3b2f21/#fdf6e6/34) and are NOT passed from NoteSpec; do not document them as working config knobs. | index.html:244-268, index.html:425-430 |

## Writing spec

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| lines:string[]; font?:CSS-font default 600 58px Caveat; ink?:string=#6d5c43; align?:string (center supported; otherwise left); w?:number=1024 via texture helper; x?:number=cx+11; y?:number=6.8; h?:number=1; z?:number=.07; tilt?:number=i odd -.02 else .02. | Text is reduced to fit width using px font regex when too wide; font should contain a px size. Line height 96. | index.html:270-292, index.html:431-437 |

## Folder

| Fields and defaults | Requirements and effects | Source |
| --- | --- | --- |
| `title:string; lede?:string default empty; pairs?:[{before:string,after:string,cap:string}]; photos?:[{file:string,cap:string}].` | Relative image URLs prefix assets/. pairs render first with two images and range min0 max100 initial50; photos follow, loading=lazy. Text set via textContent or escaped into HTML. No remote record lookup or file-browser behavior. | index.html:591-611, map.config.js:59-75 |

## Constants and observable effects

| Group | Values and effects | Source |
| --- | --- | --- |
| World dimensions | SPAN 112; BRIDGE 10; PATH_Z 2.5; WALL_H 15. Scene-local placement units; not geographic coordinates or measured distance. | index.html:158-162, index.html:320-350 |
| Chapter and ride windows | CH_START 15.2; CH_STEP 16; RIDE_PAD 1.2; RIDE_LEN 16. rideAt matches the first ride when traveler x is strictly between its min and max. | index.html:410-412, index.html:522-527 |
| Renderer/camera | Antialias true, high-performance power preference; pixel ratio min(devicePixelRatio,1.5); SRGB; base FOV41; near .1 far90; portrait fit expands FOV. | index.html:137-156 |
| Input/timing | WHEEL_K .00007; touch factor5; key step .012; tap distance <8px; nav modal delay1400ms; seekTo samples601 camera-curve points; dt capped .05 seconds; progress damping3.5; asset warm views seven fixed points. | index.html:551-570, index.html:623-644, index.html:663-673, index.html:739-751 |

For `noteTexture`, line height is 56; text can expand width. `writingTexture` uses line height 96 and reduces its px font size when text exceeds the requested width. Required `lines` arrays should contain the intended lines; this is no Markdown renderer (`index.html` 245–291).

The current chapter IDs are `residential`, `builders`, `base`, `process`, `recognition`, `quote`; all are unique in the inspected source, but uniqueness is not enforced. The first three declare paver/roller/skidsteer rides. The last declares `finale`. The [offline tutorial](../tutorials/trace-a-stop-offline.md) follows a real current chapter.

## Important non-options

- No project env variables, config files with precedence, command flags, backend API or formal schema exist. MAP is imported directly once at page load.
- `NoteSpec.ink`, `paper` and `pad` are **not forwarded** even though helper defaults exist. `PaintSpec.phase` is also not forwarded; cutout phase is random.
- Opening headline does not forward width/z; tagline does not forward tilt. Opening hero is always wall-pinned and framed, without a chapter click tag.
- `id` is for the debug chapter lookup; there is no chapter URL router. `p` is numeric initial progress, documented in [QA reference](browser-controls-and-qa.md).
- `sit.yOff` is applied during sprite creation but the sitting pose Y is recomputed each frame from sit height/perch. Do not assume it is a persistent idle offset.

Related: [engine guide](../developer/engine-and-extension-points.md), [controls and QA](browser-controls-and-qa.md), [dependencies](dependencies-assets-and-rights.md).
