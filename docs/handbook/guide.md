---
title: Working guide
description: Pick the correct content, preview or troubleshooting workflow without
  mixing approval with implementation.
kind: how-to
source_ref:
- CONTEXT.md#L15-L38
- index.html#L410-L450
- index.html#L551-L656
---

# Working guide

Keep content, rendering and approval separate.

- **New maintainer:** [Trace an existing stop offline](tutorials/trace-a-stop-offline.md). It reads source and file metadata only.
- **Approved content edit:** [Change copy, photos or position](how-to/change-approved-content.md), then review affected browser paths.
- **UI verification:** [Authorized preview](how-to/preview-and-review.md) explains requirements, the existing loopback command, observable checks and cleanup. It was not run in this documentation pass.
- **Unexpected behavior:** [Troubleshoot by symptom](operations/troubleshoot-and-release-gates.md). Module, WebGL and texture failures have different handling.
- **Exact field or control:** use [MAP data](reference/map-config.md) and [browser controls/QA](reference/browser-controls-and-qa.md).

The root `CONTEXT.md` owns public-claim and publication approval. [Working together](collaboration.md) explains who contributes and what evidence is still missing. A file change, local server or commit alone does not prove the presentation works or may be shared.
