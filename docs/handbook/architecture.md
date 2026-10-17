---
title: Architecture guide
description: A short route into the complete browser architecture and developer extension
  map.
kind: concept
source_ref:
- index.html#L116-L156
- index.html#L405-L479
- index.html#L591-L753
- map.config.js#L13-L41
---

# Architecture guide

The application has one data module and one page engine. `MAP` supplies opening, chapters, images, folders and traveler declarations. The browser engine builds a Three.js scene plus an HTML folder panel. Input changes virtual progress rather than document scroll; the render loop follows camera/traveler curves and wraps the scene.

Read [browser lifecycle and data flow](architecture/browser-lifecycle.md) for loading order, asynchronous image handling, state and external dependencies. Read [engine and extension points](developer/engine-and-extension-points.md) before modifying helpers, route extent, rides or modal behavior.

The [MAP reference](reference/map-config.md) lists consumed fields and defaults. The [QA reference](reference/browser-controls-and-qa.md) distinguishes actual browser hooks from a nonexistent test runner. No backend, database synchronization or deployment is implied by the architecture.
