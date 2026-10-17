---
title: Working together on Harwick Route
description: Purpose, source-backed decisions, contribution boundaries and the actual
  evidence of progress.
kind: overview
source_ref:
- AGENTS.md#L3-L11
- CONTEXT.md#L3-L38
- README.md#L1-L7
- index.html#L116-L132
- index.html#L439-L479
- index.html#L572-L615
- docs/CONTEXT.md#L3-L5
---

# Working together

## Intended outcome

Make the portfolio easy to explore: drive across an illustrated map, choose a stop, then open its photos and before/after comparisons. This is a presentation project. Company records, customer work and public-claim approval stay with their existing owner (`CONTEXT.md`, “One job” and “Human check”).

## What works now means here

The inspected implementation contains the scene, six configured stops, three machine rides, scroll/touch/key navigation and folder comparisons. The [offline walkthrough](tutorials/trace-a-stop-offline.md) can demonstrate the config-to-folder wiring and local asset paths without starting anything.

That is implementation evidence, not a claim of tested browser behavior. The [existing status authority](status.md) separates source inspection from browser, hosting and publication evidence. There is no current browser demonstration or production acceptance receipt established by this review. No separate progress tracker or invented roadmap is maintained here.

## Decisions visible in the source

| Decision | Why it matters | Evidence |
| --- | --- | --- |
| Keep content in `MAP`, rendering in the HTML engine | A copy/photo change normally does not need geometry edits | `CONTEXT.md` process; `index.html` engine header and `buildChapter` |
| Static files, no company-data backend | Folder opening reads the in-memory config and local image URLs, not private records | `index.html` `openFolder`; [lifecycle](architecture/browser-lifecycle.md) |
| Scene plus HTML folder overlay | Canvas handles the journey; ordinary buttons, image captions and ranges handle folder content | `index.html` DOM shell and `openFolder` |
| Loop by copying finale/opening across a fixed span | The visual seam is intentional, but adding stops is not arbitrary route growth | `index.html` `SPAN`, `buildChapter`, `buildOpening` |
| Reuse an upstream engine | MIT engine terms do not grant rights to all content/artwork | `README.md`, `LICENSE`; [rights](reference/dependencies-assets-and-rights.md#license-boundary) |

These are explanations of current code and contracts, not newly approved architecture decisions.

## How to contribute

1. **Zack and the company owner define the approved change.** Use the company authority routes named in the root `CONTEXT.md`. Do not search private records to fill a caption or add names, prices or claims merely because files exist.
2. **A content maintainer edits the smallest matching data.** Use the existing chapter ID and [content how-to](how-to/change-approved-content.md). Check relative asset paths and provenance before changing photos.
3. **A frontend contributor changes rendering only when behavior requires it.** Use the [module and extension map](developer/engine-and-extension-points.md). Never disguise a source defect as a documentation fix.
4. **A reviewer checks affected browser paths when authorized.** Follow [preview and review](how-to/preview-and-review.md); record what actually ran and what did not. The author cannot supply independent acceptance by refreshing hashes.
5. **The hosting owner checks privacy and Zack approves publication.** No deploy workflow or actual host is established by this repository. Keep the handbook and private verification data out of public app output.

Agents follow the same roles and gates. This handbook is an implementation guide, not permission to publish, contact customers, change company records, start services or alter another owner's project.

## Blockers and demonstrations

The [status page](status.md) remains the current source for evidence limits. The practical questions are browser acceptance, actual host and private-doc exclusion, current claims/photo rights, supported browsers and the fallback PDF. The offline source exercise is available; live UI demonstrations require an authorized browser session and a new result. See [review and change impact](maintenance/source-review-and-status.md) for how a contribution becomes reviewable.
