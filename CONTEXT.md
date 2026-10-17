# harwick-route: workspace contract

One job: present Harwick's 2026 portfolio as an interactive route map. This is a
presentation project, not the company records or a second customer/job database.

## Entry routes

- [AGENTS.md](AGENTS.md): small agent route; [README.md](README.md): introduction.
- [map.config.js](map.config.js): chapter, caption, photo and visual-position data.
- [index.html](index.html): page engine; [assets/](assets/): images used by it.
- [Harwick AGENTS](../Harwick-Paving/AGENTS.md): company authority and gates;
  [company facts](../Harwick-Paving/Social/facts.md): approved claim source.
- [LICENSE](LICENSE): upstream engine license; README separates company artwork.

## Inputs

Working: the requested map/caption change and matching files in `assets/`.
Reference: the existing map data, README and canonical company facts linked above.
The map's own header names portfolio/facts as sources; verify each changed claim
there rather than treating existing page copy as independent evidence.

## Process

Change content in `map.config.js`, rendering in `index.html`, and matching local
assets only as needed. Keep content data separate from the rendering engine.
Review the changed route, open/close interactions and image paths in a browser
when a UI change is authorized. A file or commit alone does not prove those work.

## Outputs

The static page source, map data and local artwork in this root. No generated
build pipeline, deploy success or automated test result is claimed by this contract.

## Human check

Zack approves company-facing copy and publication. Check factual claims, image
rights, layout and navigation before sharing; no customer names, prices or private
records are added merely because a source folder is available. This ICM pass did
not launch, deploy or contact the site.
