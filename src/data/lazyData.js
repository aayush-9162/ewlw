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
];
export function loadPoster(idx) { return lazy(`poster_${idx}`, posterLoaders[idx]); }

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

// SHWC Module 2 pages (16 pages, for habit 7 / index 6)
export function loadShwcModule2() {
  return lazy('shwc_module2', () =>
    Promise.all([
      import('./shwcModule2_page0.js'),
      import('./shwcModule2_page1.js'),
      import('./shwcModule2_page2.js'),
      import('./shwcModule2_page3.js'),
      import('./shwcModule2_page4.js'),
      import('./shwcModule2_page5.js'),
      import('./shwcModule2_page6.js'),
      import('./shwcModule2_page7.js'),
      import('./shwcModule2_page8.js'),
      import('./shwcModule2_page9.js'),
      import('./shwcModule2_page10.js'),
      import('./shwcModule2_page11.js'),
      import('./shwcModule2_page12.js'),
      import('./shwcModule2_page13.js'),
      import('./shwcModule2_page14.js'),
      import('./shwcModule2_page15.js'),
    ]).then(mods => ({ default: mods.map(m => m.default) }))
  );
}
