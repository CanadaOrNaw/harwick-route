---
title: Change approved map content
description: Update the right note, folder, photo or position while preserving claim
  ownership and renderer boundaries.
kind: how-to
source_ref:
- CONTEXT.md#L15-L38
- map.config.js#L1-L13
- map.config.js#L41-L228
- index.html#L414-L450
- index.html#L594-L611
---

# Change approved map content

Use this for an approved caption, photo or placement request. Do not treat this as approval to publish or access company records. For a rendering change use the [developer guide](../developer/engine-and-extension-points.md).

## Before editing

1. Confirm the requested copy/photo and its approval/provenance with Zack and the company owner routes named in root `CONTEXT.md`. Existing map text is not independent fact evidence.
2. Locate the existing `MAP.chapters` ID. Current IDs are `residential`, `builders`, `base`, `process`, `recognition`, `quote`.
3. Read the affected [MAP contract](../reference/map-config.md). Keep unrelated chapters unchanged; do not add a backend, customer list or private records to make a caption easier.

## Choose the actual field

| Change | Field / effect |
| --- | --- |
| Top-right button wording | Chapter `stop`; absent/falsy means no button |
| Waypoint stamp | `wp`; position `wpX`, otherwise default cadence |
| Canvas note copy | `note.title`, `note.lines`; folder prose is separate |
| Folder heading/intro | `folder.title`, `folder.lede` |
| Comparison images/caption | `folder.pairs` entries: `before`, `after`, `cap` |
| Single folder photo/caption | `folder.photos` entries: `file`, `cap` |
| Scene photograph | `prints`; only it and main note get the chapter's folder tag |
| Non-clickable illustration | `art` or `props`; placement uses scene coordinates |
| Handwriting on the map | `aphorism` or `extraWriting` |
| Different chapter machine | `ride` must match `MAP.vehicles` key |

These consumers are `buildChapter`, `paintSpec`, `noteSpec`, `writeSpec` and `openFolder` in `index.html`. Folder content does not automatically appear on the canvas.

## Match the asset path

`P('name')` expands to `photos/name.jpg`. Direct filenames may name PNGs. The engine and folder prefix `assets/`; preserve exact case and extension. A repeated filename may be used by several chapters or all three mascot poses. Do not rename/replace it without checking all consumers.

Use the [offline path check](../tutorials/trace-a-stop-offline.md#5-check-the-referenced-paths) before any preview. File existence does not establish the right subject, image quality, license or approval. Do not copy raw artwork into the documentation website.

## Position safely

`x`, `y`, `h`, depth and tilt describe a visual scene, not a geographic location. `wallPin` places art against the wall; `zBack` offsets non-wall depth from `PATH_Z`. Read [the exact defaults](../reference/map-config.md#paint-spec) rather than adjusting engine geometry for a missing photo.

Adding/reordering stops or changing `wpX`, `finale` or `ride` affects camera extent, ride windows and seam copies. The fixed route is not automatically extended. Escalate those changes through the [extension map](../developer/engine-and-extension-points.md#extending-the-existing-data), not a copy-only edit.

## Review and handoff

- Re-read changed copy against its approved source at the owner. Do not rewrite company evidence to match the presentation.
- Check affected path references, then conduct the [authorized preview checklist](preview-and-review.md).
- Check the note/print, folder, range pairs, forward/backward navigation and affected mobile view. Report failures and unrun limits.
- Update affected handbook reference/example claims and private review evidence; [source review](../maintenance/source-review-and-status.md) maps impact.
- Zack approves company-facing copy and publication. A successful local preview is not a public release result.
