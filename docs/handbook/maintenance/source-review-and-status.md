---
title: Source review and change impact
description: Maintain source-backed claims and safe examples without confusing hashes,
  status or author review with acceptance.
kind: developer
source_ref:
- AGENTS.md#L8-L11
- CONTEXT.md#L24-L38
- docs/CONTEXT.md#L3-L5
- index.html#L134-L156
- index.html#L410-L549
- index.html#L551-L753
- map.config.js#L13-L228
- .githooks/docs-pre-commit#L1-L4
- .gitignore#L1-L16
---

# Source review and change impact

The [status page](../status.md) retains existing owner work/evidence statements. [Collaboration](../collaboration.md) explains decisions and contributions; it is not a second task queue. This page describes which documented claims must be reconsidered after a change.

## Coverage of this handbook

The source audit read both runtime sources completely: 756 HTML/engine lines and 228 config lines. It also read every root/handbook contract, README, license, marker and generated hook wrapper. The private manifest maps all meaningful source files, pages and applicable interfaces. It individually classifies 45 image assets as metadata-only and excludes retained generated handbook views. No private company records, image contents or database inputs were used.

The complete path inventory contains no native app tests, fixtures, schema validator, package/lockfile, CI workflow or build/deploy runner. Missing upstream utilities named by LICENSE are not assumed present. The one copied safe example checks two file paths through Python's standard library; it is not a test of browser output. All app runtime, external link, browser/GPU and publication checks remain unrun here.

## Change impact

| Changed source | Affected claims and reader routes | Evidence needed |
| --- | --- | --- |
| MAP opening, root fields and branding | [MAP reference](../reference/map-config.md), architecture, content workflow | Compare forwarded MAP fields with hard-coded HTML meta/CTA/fallback/hint; authorized opening/HUD/loop review |
| Chapter ID/copy/folder/photos | Reference, content how-to, [offline tutorial](../tutorials/trace-a-stop-offline.md) and QA helpers | Recheck text ownership, path/case, ID lookup, note/print tags, folder pairs/photos |
| Stop count/order/wpX/finale/ride | Engine guide, lifecycle and placement/window defaults | Recompute against fixed span/curves, first-match strict ride windows, seam and stop seek |
| Asset rename/replacement | Dependency/path reference and content workflow | All consumers, provenance/rights, authorized image/aspect/depth/mobile check |
| Text/geometry/traveler/render loop | Engine guide, MAP defaults, QA reference | Re-review option forwarding, camera/pose/depth and affected browser regression scope |
| Folder/controls/CSS | QA reference, tutorial and troubleshooting | Escaping, sliders, focus/close, tap/swipe, timers, narrow view |
| CDN/fonts/hosting | Dependencies, preview and release gates | Exact URLs/features, fallback scope, cold load and private-doc served boundary |
| Contracts/status/hook | Landing/collaboration/status and review routes | Owner authorization/current limits; external shared checker ownership, not a green-hook assumption |

## Review sequence

1. Inspect the actual changed source and identify behavior/default/interface impact. Do not merely regenerate a digest.
2. Update the affected canonical pages, examples, source citations and private manifest. Account for newly added meaningful source or explain its precise exclusion.
3. Run only reviewed, safe example commands through the relevant native environment. Do not execute arbitrary Markdown, launch the app or install dependencies to render a manual.
4. Record exact source/page/navigation/asset hashes, check commands/effects/outcomes and remaining limits in private verification data. A hash proves byte identity/freshness, not correct prose or a working app.
5. Obtain independent claim-to-source and reader-task review. Authors leave their own receipt **changes-required**. A fresh reviewer must observe the documented first-use and maintainer task without relying on author memory.
6. The shared website owner validates/assembles reviewed inputs and performs integrated website checks. Publication and product runtime approval remain separate. Do not claim shared commands, installed hooks or public release behavior merely from a file's presence.

The existing root instructions point to the shared living-documentation contract. The shared site, registry, hooks, staged-index checks and release machinery are owned outside this project author's scope. The old generated HTML/PDF is retained, not hand-edited or treated as the new site's current output.

## Source-control eligibility

Root `.gitignore` now keeps generated and private documentation outputs out of new Git additions. Under `docs/verification/`, only `manifest.json` and `review.json` are exceptions to the ignore rule. Auxiliary author checks/snapshots remain local evidence, not additional versioned JSON. Ordinary authored handbook Markdown and `sidebar.json` are not blocked by these rules. Handbook assets remain ignored. Under `docs/`, `_generated`, `.generated`, `build`, `node_modules` and `.fixture` directories are ignored at every depth. Environment files matching `.env*` or `*.env`, and credential, log and database patterns, are ignored recursively under the handbook (`.gitignore` 1–16).

The independently accepted parent-owned recursive rule review checked effective Git matching; no staging or untracking was part of that review. Ignore eligibility is not staging, independent content acceptance, access control or public-host exclusion. Git ignore also does not remove already tracked products; that would require a separately approved index change. The [release boundary](../operations/troubleshoot-and-release-gates.md#release-boundary) is unchanged: the hosting owner must still prove private docs are not served publicly.

## Demonstration and review limits

The offline exercise demonstrates source wiring and file existence. There is no current live UI demonstration or independent documentation acceptance supplied by the author. See [status](../status.md) for inherited owner limits, [preview](../how-to/preview-and-review.md) for the deferred runtime checklist and [release gates](../operations/troubleshoot-and-release-gates.md#release-boundary) for host/privacy/approval questions.
