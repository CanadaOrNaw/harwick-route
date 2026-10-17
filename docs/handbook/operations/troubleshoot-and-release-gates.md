---
title: Troubleshooting and release gates
description: Separate source checks from runtime failures and preserve company/privacy/publication
  boundaries.
kind: how-to
source_ref:
- index.html#L109-L140
- index.html#L313-L318
- index.html#L360-L385
- index.html#L486-L505
- index.html#L591-L645
- index.html#L737-L751
- CONTEXT.md#L24-L38
- docs/CONTEXT.md#L5-L5
- .githooks/docs-pre-commit#L1-L4
---

# Troubleshooting and release gates

No browser, WebGL, deployment or network failure was reproduced in this documentation pass. These are source-backed diagnostic routes, not a claim that the application failed or that a fix was tested.

## By symptom

| Symptom | Check in order | What source does and does not establish |
| --- | --- | --- |
| Blank scene / stuck loading | Module import, CDN availability, JS execution; then WebGL creation and fonts | Import failures happen before the renderer try/catch. Fallback only covers renderer-construction throw |
| WebGL fallback shown | Actual renderer error and browser capabilities in authorized review | Fallback links to an external PDF. Its availability/current approval was not checked |
| Missing scene photo/machine | MAP file/case, `assets/` prefix, success/error callback and console warning | Error callbacks tick loaded; disappearing loader is not success proof |
| Folder photo missing | `folder.pairs` / `photos`, path/case and actual browser image request | No custom folder image error handler; a valid scene print does not validate every folder photo |
| Wrong note or folder copy | Compare `note` versus `folder` fields and owner-approved wording | They are separate values, not synchronized records |
| Stop opens unexpectedly later | Review the 1400ms timer per click | Timers are not cancelled/coalesced; rapid actions need browser reproduction |
| Stop/ride/loop goes to wrong place | Check IDs/wpX/ride keys, fixed span/camera curves and window bounds | No schema/uniqueness validator or automatic arbitrary route extension |
| Wrong mobile/focus behavior | Authorized narrow-screen, keyboard/touch/focus checks | ARIA/buttons and FOV code exist; no focus trap, reduced-motion branch or acceptance matrix |

First use the [offline walkthrough](../tutorials/trace-a-stop-offline.md). A real browser diagnosis follows [preview and review](../how-to/preview-and-review.md), with observed errors recorded before proposing source changes. Do not edit company records to match a presentation or invent a backend outage.

## Security and trusted content

MAP is same-origin executable JS; it is not an untrusted content API. Folder title/lede use `textContent`; image/caption strings escape ampersand, angle brackets and double quotes before HTML insertion. Image paths are prefixed, not path-sanitized. No server authentication, CSP or validation layer is implemented here. These observations describe scope, not a security certification.

Debug globals are always exposed and include mutable scene/target state. Unknown folder IDs and malformed hook arguments are unsupported. See [QA limits](../reference/browser-controls-and-qa.md#debug-globals) before calling them.

## Release boundary

The root contract requires Zack's company-copy and publication approval. Confirm claim truth and photo provenance at the company owner; do not use developer docs, source comments or images already present as approval evidence.

`docs/CONTEXT.md` requires operational documentation to stay out of public business-site deployment. An HTTP server at the repository root can expose readable docs and other files. No deployment workflow here proves an allowlist/exclusion, production host, HTTPS, caching policy or current release. `.nojekyll` is only a marker, not evidence of any of those things.

Before sharing, the hosting owner must demonstrate the actual served app boundary excludes private handbook/verification data. A temporary loopback preview, Git commit, source hash or shared documentation-site build does not satisfy that gate.

## Documentation hook limit

`.githooks/docs-pre-commit` obtains Git root, exits 2 if that lookup fails, then execs the external shared documentation checker with its registry and Git-root arguments. Other exits come from that checker, not an app CLI. The file is present; installation/active hook configuration and external checker behavior were not queried. Do not run it or edit shared hooks merely to claim enforcement.

Related: [dependencies/rights](../reference/dependencies-assets-and-rights.md), [status](../status.md), [source review](../maintenance/source-review-and-status.md).
