---
title: Preview and review an authorized change
description: Requirements, the documented loopback preview command, browser checks,
  failure limits and cleanup.
kind: how-to
source_ref:
- CONTEXT.md#L24-L38
- index.html#L9-L10
- index.html#L116-L156
- index.html#L551-L656
- index.html#L732-L751
---

# Preview and review

This workflow starts a server and uses a browser/network/WebGL. It was **not run** in this documentation pass. Use it only when the owner authorizes UI review. Start with the [offline walkthrough](../tutorials/trace-a-stop-offline.md) if no live preview is authorized.

## Requirements and boundaries

Keep `index.html`, `map.config.js` and `assets/` together. A modern browser must load ES modules/import maps, WebGL, Canvas2D and fonts; [dependencies](../reference/dependencies-assets-and-rights.md) records the exact source requirements without inventing a browser-version guarantee.

Cold load fetches Three.js from jsDelivr and fonts from Google. This is not a fully offline app. There is no package install, bundler or backend to start.

The existing local preview command serves the readable repository root, including operational files unless scoped externally. Bind only to loopback. Do not tunnel it, click contact links or publish the handbook as business-site content. Resolve [release privacy](../operations/troubleshoot-and-release-gates.md#release-boundary) separately.

## Start and stop

From the repository root:

```bash
python3 -m http.server 8098 --bind 127.0.0.1
```

The explicit port is 8098 and bind address is 127.0.0.1. No directory argument is supplied, so the current directory is served. This is Python's standard-library tool, not a project CLI; project-specific exit codes or environment variables are not defined. It is a long-running foreground command. Stop it with **Ctrl-C** and close the browser tab when review ends.

If Python/port/browser access fails, record the actual error and stop; do not install, repair the environment or select another exposure/bind mode without approval. This handbook does not establish those runtime prerequisites as tested.

## Open the reviewed page

In the authorized browser, open `http://127.0.0.1:8098/`. For a bounded initial position you may append `?p=0.5`. `?qa&p=0.5` hides the loader on the first animation frame; it **does not** wait for image success, stop animation or make screenshots deterministic. `?qa=false` also enables QA behavior because presence is what is checked.

The [QA reference](../reference/browser-controls-and-qa.md) describes exact helper signatures. Optional console checks such as `window.__worldState()` report structural state, not acceptance. `pending === loaded` includes failed texture callbacks.

## Check the affected behavior

- Scroll/swipe forward and backward; try Arrow/Page keys and Space. Confirm the loop seam if position/count/finale changed.
- Use each affected stop button. It seeks, then opens its folder after 1400ms; rapid clicks create separate timers.
- Tap a note or print rather than a swipe. Art/opening photos are not all clickable.
- In each affected folder check caption/subject, single photos and before/after sliders. Use Escape, the close button and backdrop; check focus before/after.
- Resize and inspect a narrow view. Check keyboard access and focus; ARIA labels alone do not prove accessibility. There is no focus trap or reduced-motion branch in the app.
- Inspect module/CDN/font/WebGL errors and missing-texture warnings. A loader disappearing does not prove all images succeeded.
- Do not click `tel:` links or external business/PDF links as a test without separate authorization.

Expected outcomes are current code behavior, not completed results. Record exact browser/version, starting URL, actions, observed output, failure evidence and unrun checks for the owning change. See [troubleshooting](../operations/troubleshoot-and-release-gates.md) if a result differs.

## After review

Close the tab, stop the foreground server and remove any console-created frame-time buffer. Do not declare deployment, claims approval or documentation acceptance from a preview. Follow [source review](../maintenance/source-review-and-status.md) and the owner [status](../status.md).
