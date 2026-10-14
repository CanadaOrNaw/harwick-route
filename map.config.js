/* ══════════════════════════════════════════════════════════════════════════
   map.config.js — the whole Harwick map as plain data. index.html is the engine.
   ══════════════════════════════════════════════════════════════════════════
   • x runs WEST→EAST along the route; chapters sit 16 apart (15.2 … 95.4).
   • y is height on the paper wall (≈2–3 low by the road, ≈6–7 near the top).
   • `prints` are real job photos (assets/photos/), framed and standing in front
     of the wall. Clicking a print or the chapter's note opens its `folder`.
   • `stop` is the label on the top-right stops bar.
   • Every claim here comes from the 2026 portfolio / Social/facts.md. No
     customer names, prices, testimonials or quotes (facts.md "Never state").
   ══════════════════════════════════════════════════════════════════════════ */

const P = f => 'photos/' + f + '.jpg';

export const MAP = {
  title: 'Harwick Paving — The Route',
  badge: 'Harwick Paving',
  odometerKm: 70,

  opening: {
    headline: ['Harwick Paving', 'across the Kawarthas'],
    tagline:  'portfolio 2026 · scroll to drive east →',
    arc:      'Driveways  →  lots & builders  →  base work  →  done right the first time',
    hero:     { image: P('crew'), caption: 'fig. 0 — the Harwick crew, Lindsay ON' },
  },

  /* the traveler: a Harwick dump truck. While a chapter has a `ride`, the truck
     parks and that machine carries you through the chapter. */
  mascot: {
    scale: 1.0,
    sit:   { file: 'truck.png', h: 1.1, perch: [0, 0] },
    walkA: { file: 'truck.png', h: 1.1 },
    walkB: { file: 'truck.png', h: 1.1 },
  },
  vehicles: {
    paver:     { file: 'paver.png',     h: 1.25 },
    roller:    { file: 'roller.png',    h: 1.35 },
    skidsteer: { file: 'skidsteer.png', h: 1.1 },
  },

  chapters: [
    {
      id: 'residential', stop: 'Driveways',
      wp: 'STOP·01', wpX: 15.2, ride: 'paver',
      note: {
        title: '01 · residential driveways',
        lines: ['New driveways built on a proper base,', 'graded for drainage, finished clean.',
                'Before → after, edge to edge.', '✎ click to open the job folder'],
        x: 17.8, y: 6.0, h: 2.35, tilt: -.03,
      },
      aphorism: { lines: ['“We’d rather do it right', ' than do it cheap.”'], ink: '#1d3c72',
                  x: 28.2, y: 6.8, h: 1.35, tilt: .025, font: '600 58px "Caveat"' },
      art: [ { file: 'terrain.png', x: 23.0, y: 1.9, h: 2.4, wallPin: true, sway: 0 } ],
      prints: [
        { file: P('res-curved'), x: 20.6, y: 3.3, h: 2.5, zBack: 2 },
        { file: P('ba1-after'),  x: 24.6, y: 3.0, h: 2.1, zBack: 2.1 },
        { file: P('res-apron'),  x: 28.6, y: 3.4, h: 1.9, zBack: 2 },
      ],
      folder: {
        title: 'Residential driveways',
        lede: 'New driveways built on a proper base, graded for drainage and finished clean. Drag the sliders to see the same driveways before and after.',
        pairs: [
          { before: P('ba1-before'), after: P('ba1-after'), cap: 'Gravel drive to a double garage, paved edge to edge with a clean apron' },
          { before: P('ba2-before'), after: P('ba2-after'), cap: 'New build: compacted gravel to finished asphalt' },
          { before: P('ba3-before'), after: P('ba3-after'), cap: 'Gravel to asphalt, start to finish' },
        ],
        photos: [
          { file: P('ba3-during'), cap: 'During: rolling the new asphalt' },
          { file: P('res-curved'), cap: 'Curved driveway at a double-garage brick home, rolled and edge-checked' },
          { file: P('res-long'),   cap: 'Long new driveway, taped off at the road while it cures' },
          { file: P('res-apron'),  cap: 'New driveway and apron across the sidewalk' },
          { file: P('res-narrow'), cap: 'Narrow driveway to a single garage' },
          { file: P('res-shed'),   cap: 'Driveway alongside the house back to the shed' },
        ],
      },
    },

    {
      id: 'builders', stop: 'Builders & lots',
      wp: 'STOP·02', wpX: 31.2, ride: 'roller',
      note: {
        title: '02 · builders & commercial lots',
        lines: ['Subdivision and townhouse driveways,', 'lots laid out for drainage,',
                'durability and traffic flow.', '✎ click to open the job folder'],
        x: 33.4, y: 6.0, h: 2.3, tilt: .03,
      },
      aphorism: { lines: ['“Seven townhouse driveways.', ' One day.”'], ink: '#7a5a22',
                  x: 44.2, y: 6.8, h: 1.35, tilt: -.02, font: '600 58px "Caveat"' },
      art: [ { file: 'mainstreet.png', x: 39.4, y: 2.6, h: 5.2, wallPin: true, sway: 0 } ],
      prints: [
        { file: P('townhouses'), x: 35.2, y: 3.3, h: 2.5, zBack: 2 },
        { file: P('commercial'), x: 43.6, y: 3.0, h: 2.0, zBack: 2.1 },
      ],
      folder: {
        title: 'Builders & larger jobs',
        lede: 'Subdivision and townhouse driveways paved as the units finish, commercial lots, and road sections, with our own trucks and paver.',
        photos: [
          { file: P('townhouses'),  cap: 'New townhouse driveways: seven paved in one day' },
          { file: P('subdivision'), cap: 'Subdivision driveways, paved as the units finish' },
          { file: P('street'),      cap: 'Paving along a street of new homes' },
          { file: P('road'),        cap: 'Fresh asphalt road section' },
          { file: P('commercial'),  cap: 'Commercial parking lots' },
          { file: P('industrial'),  cap: 'Industrial yards, access roads and loading areas' },
        ],
      },
    },

    {
      id: 'base', stop: 'Excavation & base',
      wp: 'STOP·03', wpX: 47.2, ride: 'skidsteer',
      note: {
        title: '03 · excavation, removal & base',
        lines: ['Old asphalt torn out, dug to depth,', 'aggregate base placed, graded',
                'and compacted. The part you', 'never see is what makes it last.'],
        x: 50.4, y: 5.9, h: 2.35, tilt: -.025,
      },
      aphorism: { lines: ['“The base work is what', ' makes pavement last.”'], ink: '#6d5c43',
                  x: 59.6, y: 6.8, h: 1.35, tilt: .02, font: '600 56px "Caveat"' },
      props: [ { file: 'cone.png', x: 49.2, h: 1.3, zBack: 1.3, sway: .01 } ],
      prints: [
        { file: P('excavation'), x: 52.8, y: 3.2, h: 2.5, zBack: 2 },
        { file: P('removal'),    x: 56.0, y: 3.0, h: 2.3, zBack: 2.1 },
        { file: P('skid-paver'), x: 59.2, y: 3.3, h: 2.4, zBack: 2 },
      ],
      folder: {
        title: 'Excavation, removal & base',
        lede: 'Digging, base aggregate and grading for driveways, lots and site work. Old, cracked asphalt torn out and replaced, and failing sections fixed before they become bigger, costlier failures.',
        photos: [
          { file: P('removal'),    cap: 'Removal: old asphalt comes out' },
          { file: P('step2'),      cap: 'Dug to the depth the job needs' },
          { file: P('excavation'), cap: 'Skid steer spreading gravel base while the crew rakes and grades' },
          { file: P('step3'),      cap: 'Aggregate base graded for drainage and compacted' },
          { file: P('skid-paver'), cap: 'Skid steer loading the paver hopper' },
          { file: P('repair'),     cap: 'Repair & patching' },
        ],
      },
    },

    {
      id: 'process', stop: 'How we work',
      wp: 'STOP·04', wpX: 63.2,
      note: {
        title: '04 · from quote to finished drive',
        lines: ['Site visit & quote → removal →', 'base & grading → paving →',
                'compaction → walkthrough and', 'our 1-year guarantee.'],
        x: 66.4, y: 5.9, h: 2.35, tilt: .03,
      },
      aphorism: { lines: ['“Proper preparation.', ' Clean job sites.”'], ink: '#1d3c72',
                  x: 75.6, y: 6.8, h: 1.35, tilt: -.025, font: '600 58px "Caveat"' },
      art: [ { file: 'plant.png', x: 71.0, y: 2.6, h: 5.0, wallPin: true, sway: 0 } ],
      prints: [
        { file: P('step1'), x: 66.0, y: 3.0, h: 2.0, zBack: 2 },
        { file: P('step4'), x: 76.0, y: 3.2, h: 2.4, zBack: 2 },
      ],
      folder: {
        title: 'How we work',
        lede: 'Most projects get a site visit first, because size, base, drainage and access all change the job. Every paving job carries our 1-Year Workmanship & Material Guarantee.',
        photos: [
          { file: P('step1'), cap: '1 · Site visit & written quote' },
          { file: P('step2'), cap: '2 · Removal & excavation' },
          { file: P('step3'), cap: '3 · Base & grading' },
          { file: P('step4'), cap: '4 · Paving: laid, raked and edged by hand' },
          { file: P('step5'), cap: '5 · Rolled and plate-packed, edges finished tight' },
          { file: P('step6'), cap: '6 · Walkthrough & 1-year guarantee' },
          { file: P('plant-load'), cap: 'Loading at the asphalt plant' },
        ],
      },
    },

    {
      id: 'recognition', stop: 'Awards & crew',
      wp: 'STOP·05', wpX: 79.2,
      note: {
        title: '05 · voted #1 in the Kawarthas',
        lines: ['CommunityVotes Kawarthas,', 'Paving & Driveways:',
                '2026 Platinum · 2025 Gold', '5.0 ★ on Google'],
        x: 81.4, y: 6.1, h: 2.3, tilt: -.02,
      },
      aphorism: { lines: ['“Voted by the community. Two years running.”'], ink: '#a9792f',
                  x: 82.0, y: 2.2, h: .8, tilt: .02, font: '600 60px "Caveat"', w: 1400 },
      art: [
        { file: P('award-2025'), x: 90.0, y: 4.5, h: 3.3, wallPin: true, framed: true, sway: .006 },
      ],
      prints: [
        { file: 'photos/seal-2026.png', x: 86.0, y: 4.0, h: 2.6, zBack: 2, framed: false },
        { file: P('mack'), x: 93.4, y: 3.1, h: 2.3, zBack: 2 },
      ],
      folder: {
        title: 'Awards, crew & equipment',
        lede: 'Family-owned in Kawartha Lakes. CommunityVotes Kawarthas Paving & Driveways: 2026 Platinum (most votes) and 2025 Gold. 5.0 ★ on Google. We run our own trucks and paving equipment, so jobs are scheduled on our calendar, not a rental yard’s.',
        photos: [
          { file: P('award-2025'), cap: 'CommunityVotes Kawarthas 2025 · Gold' },
          { file: P('crew'),       cap: 'The Harwick crew' },
          { file: P('mack'),       cap: 'Our wrapped Mack dump truck' },
          { file: P('truck'),      cap: 'Harwick dump truck' },
          { file: P('paver'),      cap: 'LeeBoy 8500 paver and skid steer' },
        ],
      },
    },

    {
      id: 'quote', stop: 'Get a quote',
      wp: 'STOP·06', wpX: 95.4,
      finale: true,
      note: {
        title: '06 · your driveway’s next',
        lines: ['Free, no-obligation quotes.', 'Lindsay, Bobcaygeon, Fenelon Falls,',
                'Peterborough and the Kawarthas.', '☎ 705-341-4113 · harwickpaving.com'],
        x: 97.0, y: 5.9, h: 2.35, tilt: -.03,
      },
      aphorism: { lines: ['“Done right', ' the first time.”'], ink: '#1d3c72',
                  x: 107.3, y: 6.6, h: 1.45, tilt: .02, font: '600 62px "Caveat"' },
      art: [ { file: 'cottage.png', x: 102.5, y: 2.5, h: 5.2, wallPin: true, sway: 0 } ],
      folder: {
        title: 'Get a free quote',
        lede: 'Residential, commercial and industrial, across all of Kawartha Lakes and surrounding areas: Lindsay, Bobcaygeon, Fenelon Falls, Cannington, Peterborough, Woodville and Beaverton. Call 705-341-4113, or visit harwickpaving.com. 1751 Elm Tree Rd, Lindsay, ON.',
        photos: [
          { file: P('step6'),    cap: 'Every job ends with a walkthrough' },
          { file: P('res-long'), cap: 'Yours could be next' },
        ],
      },
      extraWriting: [
        { lines: ['the route keeps going —', 'and so does the work. keep scrolling →'], ink: '#8a765a',
          x: 108.6, y: 2.6, h: 1.15, tilt: -.015, font: '500 52px "Caveat"' },
      ],
    },
  ],
};
