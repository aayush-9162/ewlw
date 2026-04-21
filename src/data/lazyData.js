// Lazy loaders for heavy data — only fetched when a habit is actually opened.
// Each returns a Promise that resolves to the data.

const cache = {};

function lazy(key, loader) {
  if (cache[key]) return cache[key];
  cache[key] = loader().then(m => {
    cache[key] = Promise.resolve(m.default);
    return m.default;
  });
  return cache[key];
}

// Poster images (per habit index 0-20)
const posterLoaders = [
  () => import('./posterImage0.js'),
  () => import('./posterImage1.js'),
  () => import('./posterImage2.js'),
  () => import('./posterImage3.js'),
  () => import('./posterImage4.js'),
  () => import('./posterImage5.js'),
  () => import('./posterImage6.js'),
  () => import('./posterImage7.js'),
  () => import('./posterImage8.js'),
  () => import('./posterImage9.js'),
  () => import('./posterImage10.js'),
  () => import('./posterImage11.js'),
  () => import('./posterImage12.js'),
  () => import('./posterImage13.js'),
  () => import('./posterImage14.js'),
  () => import('./posterImage15.js'),
  () => import('./posterImage16.js'),
  () => import('./posterImage17.js'),
  () => import('./posterImage18.js'),
  () => import('./posterImage19.js'),
  () => import('./posterImage20.js'),
  () => import('./posterImage21.js'),
];
export function loadPoster(idx) { if (!posterLoaders[idx]) return Promise.resolve(null); return lazy(`poster_${idx}`, posterLoaders[idx]); }

// Reinforcement poster images
const reinfLoaders = {};
[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18].forEach(i => {
  reinfLoaders[i] = () => import(`./reinfPosterImage${i}.js`);
});
export function loadReinfPoster(idx) {
  if (!reinfLoaders[idx]) return Promise.resolve(null);
  return lazy(`reinf_${idx}`, reinfLoaders[idx]);
}

// Lesson images (per habit, 6 images each)
export function loadLessonImages(habitIdx) {
  return lazy(`lessons_${habitIdx}`, () =>
    Promise.all([
      import(`./h${habitIdx}_lessonImage0.js`),
      import(`./h${habitIdx}_lessonImage1.js`),
      import(`./h${habitIdx}_lessonImage2.js`),
      import(`./h${habitIdx}_lessonImage3.js`),
      import(`./h${habitIdx}_lessonImage4.js`),
      import(`./h${habitIdx}_lessonImage5.js`),
    ]).then(mods => ({ default: mods.map(m => m.default) }))
  );
}

// PPT slides (habits 0-13 only)
const pptLoaders = [
  () => import('./pptSlides0.js'),
  () => import('./pptSlides1.js'),
  () => import('./pptSlides2.js'),
  () => import('./pptSlides3.js'),
  () => import('./pptSlides4.js'),
  () => import('./pptSlides5.js'),
  () => import('./pptSlides6.js'),
  () => import('./pptSlides7.js'),
  () => import('./pptSlides8.js'),
  () => import('./pptSlides9.js'),
  () => import('./pptSlides10.js'),
  () => import('./pptSlides11.js'),
  () => import('./pptSlides12.js'),
  () => import('./pptSlides13.js'),
];
export function loadPptSlides(idx) {
  if (idx >= pptLoaders.length) return Promise.resolve(null);
  return lazy(`ppt_${idx}`, pptLoaders[idx]);
}

// Worksheets (habits 0-13 only)
export function loadWorksheets(idx) {
  if (idx >= 14) return Promise.resolve(null);
  return lazy(`ws_${idx}`, () =>
    Promise.all([
      import(`./wsL1_${idx}.js`),
      import(`./wsL2_${idx}.js`),
    ]).then(([l1, l2]) => ({ default: { level1: l1.default, level2: l2.default } }))
  );
}

// Know More PPT slides (habit 2 / index 1, 11 slides)
export function loadKnowMoreSlides() {
  return lazy('knowmore_slides', () =>
    Promise.all([
      import('./knowMoreSlide0.js'),
      import('./knowMoreSlide1.js'),
      import('./knowMoreSlide2.js'),
      import('./knowMoreSlide3.js'),
      import('./knowMoreSlide4.js'),
      import('./knowMoreSlide5.js'),
      import('./knowMoreSlide6.js'),
      import('./knowMoreSlide7.js'),
      import('./knowMoreSlide8.js'),
      import('./knowMoreSlide9.js'),
      import('./knowMoreSlide10.js'),
    ]).then(mods => ({ default: mods.map(m => m.default) }))
  );
}

// SHWC Module pages loader — keyed by module number
const SHWC_MODULE_PAGE_COUNTS = {
  1: 22, 2: 16, 3: 20, 4: 14, 5: 16, 7: 20, 9: 18, 10: 24, 11: 22,
};

function buildModuleImports(moduleNum) {
  const count = SHWC_MODULE_PAGE_COUNTS[moduleNum];
  if (!count) return null;
  const imports = [];
  for (let i = 0; i < count; i++) {
    imports.push(import(`./shwcModule${moduleNum}_page${i}.js`));
  }
  return imports;
}

export function loadShwcModule(moduleNum) {
  const count = SHWC_MODULE_PAGE_COUNTS[moduleNum];
  if (!count) return Promise.resolve(null);
  return lazy(`shwc_module${moduleNum}`, () =>
    Promise.all(buildModuleImports(moduleNum))
      .then(mods => ({ default: mods.map(m => m.default) }))
  );
}

// Backward compat
export function loadShwcModule2() {
  return loadShwcModule(2);
}

// DGI guideline pages loader — keyed by guideline number
const DGI_PAGE_COUNTS = {
  1: 12, 5: 10, 6: 4, 7: 6, 8: 5, 9: 7, 10: 4, 11: 4, 12: 4, 13: 9, 14: 4, 15: 7, 17: 5,
};

export function loadDgiGuideline(guidelineNum) {
  const count = DGI_PAGE_COUNTS[guidelineNum];
  if (!count) return Promise.resolve(null);
  return lazy(`dgi_g${guidelineNum}`, () => {
    const imports = [];
    for (let i = 0; i < count; i++) {
      imports.push(import(`./dgiG${guidelineNum}_page${i}.js`));
    }
    return Promise.all(imports).then(mods => ({ default: mods.map(m => m.default) }));
  });
}

// TLR Additional Poster Images — mapped per habit (page ranges from PDF)
const TLR_POSTER_MAP = {
  1: [0, 1],       // Habit 2: pages 0-1
  5: [2],           // Habit 6: page 2
  6: [13],          // Habit 7: page 13
  9: [3, 4, 5],     // Habit 10: pages 3-5
  11: [6, 7],       // Habit 12: pages 6-7
  12: [8, 9, 14],   // Habit 13: pages 8-9, 14
  16: [15],         // Habit 17: page 15
  18: [10, 11],     // Habit 19: pages 10-11
  19: [12],         // Habit 20: page 12
};

export function loadTlrPosters(habitIdx) {
  const pages = TLR_POSTER_MAP[habitIdx];
  if (!pages) return Promise.resolve(null);
  return lazy(`tlr_poster_${habitIdx}`, () =>
    Promise.all(pages.map(p => import(`./tlrPoster_page${p}.js`)))
      .then(mods => ({ default: mods.map(m => m.default) }))
  );
}

// DART Book pages (habit 17, 41 pages)
export function loadDartBook() {
  return lazy('dart_book', () => {
    const imports = [];
    for (let i = 0; i < 41; i++) {
      imports.push(import(`./dartBook_page${i}.js`));
    }
    return Promise.all(imports).then(mods => ({ default: mods.map(m => m.default) }));
  });
}

// School Nutrition Garden Guidelines (habit 31, 37 pages)
export function loadGardenBook() {
  return lazy('garden_book', () => {
    const imports = [];
    for (let i = 0; i < 37; i++) {
      imports.push(import(`./gardenBook_page${i}.js`));
    }
    return Promise.all(imports).then(mods => ({ default: mods.map(m => m.default) }));
  });
}

// Lifestyle as Medicine pages loader — loads specific PDF page indices for a habit
export function loadLamPages(pageIndices) {
  const key = `lam_${pageIndices[0]}_${pageIndices[pageIndices.length - 1]}`;
  return lazy(key, () => {
    const imports = pageIndices.map(i => import(`./lam_page${i}.js`));
    return Promise.all(imports).then(mods => ({ default: mods.map(m => m.default) }));
  });
}

// Eat Right Activity Book pages loader — loads specific PDF page indices for a given level and habit
export function loadErabPages(level, pageIndices) {
  const key = `erab_l${level}_${pageIndices.join('_')}`;
  return lazy(key, () => {
    const imports = pageIndices.map(i => import(`./erab_page${i}.js`));
    return Promise.all(imports).then(mods => ({ default: mods.map(m => m.default) }));
  });
}

// FSSAI Yellow Book pages loader — loads specific PDF page indices for a given level and habit
export function loadYellowBookPages(level, pageIndices) {
  const key = `yb${level}_${pageIndices.join('_')}`;
  return lazy(key, () => {
    const prefix = level === 1 ? 'yb1' : 'yb2';
    const imports = pageIndices.map(i => import(`./` + prefix + `_page${i}.js`));
    return Promise.all(imports).then(mods => ({ default: mods.map(m => m.default) }));
  });
}

// FAQ pages (2 pages)
export function loadFaqPages() {
  return lazy('faq_pages', () =>
    Promise.all([
      import('./faqPage0.js'),
      import('./faqPage1.js'),
    ]).then(mods => ({ default: mods.map(m => m.default) }))
  );
}
