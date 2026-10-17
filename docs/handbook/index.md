---
title: Harwick Route
description: Understand the static season map and choose a content, developer or review
  task.
kind: overview
source_ref:
- README.md#L1-L7
- CONTEXT.md#L3-L38
- index.html#L116-L121
- map.config.js#L15-L41
---

# Harwick Route

Harwick Route presents a season portfolio as a scrollable, illustrated map. It is not a route planner or the company database. The browser draws local art and photos with Three.js; the map configuration supplies the story and placement data.

## Choose a task

| You want to… | Start here |
| --- | --- |
| Understand purpose, ownership, decisions and current blockers | [Collaboration overview](collaboration.md) |
| Get a useful result without starting the app | [Trace one stop offline](tutorials/trace-a-stop-offline.md) |
| Change approved copy, photos or placement | [Change approved content](how-to/change-approved-content.md) |
| Preview an authorized UI change | [Preview and review](how-to/preview-and-review.md) |
| Understand the complete browser flow | [Architecture](architecture/browser-lifecycle.md) |
| Change the renderer or add a real extension | [Developer guide](developer/engine-and-extension-points.md) |
| Find exact fields, defaults or browser helpers | [MAP reference](reference/map-config.md) · [Controls and QA](reference/browser-controls-and-qa.md) |
| Diagnose a missing scene or prepare release review | [Troubleshooting and gates](operations/troubleshoot-and-release-gates.md) |
| See evidence limits and maintain these docs | [Status](status.md) · [Source review](maintenance/source-review-and-status.md) |

## What the checkout implements

There are two runtime source files: `index.html` is the renderer, styles and interaction controller; `map.config.js` exports `MAP`. The current map has six stops, image folders and three configured machine rides. Local files live under `assets/`. Google Fonts and pinned Three.js are fetched externally on a cold browser load.

There is no package installer, app build command, backend, quote form, CRM connection, persistent progress or automated test suite in this checkout. Source inspection does not establish a working deployment or browser acceptance. See the existing [verification status](status.md), not a completion percentage.

## Approval boundary

`CONTEXT.md` assigns company-facing copy and publication to Zack. The company workspace remains the authority for facts and image rights; this handbook explains implementation, not customer records. A photo or claim already in the map is not independent approval evidence. Read the [collaboration path](collaboration.md#how-to-contribute) before changing it.

This is private developer documentation. It must not ship with a public business-site root. See [dependencies and rights](reference/dependencies-assets-and-rights.md) and [release gates](operations/troubleshoot-and-release-gates.md#release-boundary).
