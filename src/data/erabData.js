// Eat Right Activity Book page mapping
// habit number -> { level1: [PDF page indices], level2: [PDF page indices] }
// Book page P -> PDF page index = P + 1
// Level 1 = Grades 1-4, Level 2 = Grades 5-8
const ERAB_PAGES = {
  1: { level1: [16], level2: [38] },
  2: { level1: [32], level2: [39, 67] },
  4: { level1: [31], level2: [64] },
  6: { level1: [19, 30], level2: [40] },
  12: { level1: [23, 24, 25, 26, 27], level2: [37, 48, 49, 50, 51, 52, 53, 54, 55, 56] },
  16: { level1: [], level2: [35, 36, 62] },
  17: { level1: [17, 18, 20, 21, 22], level2: [41, 44, 45, 46, 47] },
  18: { level1: [11, 12, 13, 14], level2: [] },
  19: { level1: [28, 29], level2: [60, 63, 69] },
  20: { level1: [10, 15], level2: [] },
  31: { level1: [], level2: [68, 70] },
  32: { level1: [33], level2: [57, 58, 59, 61] },
  35: { level1: [], level2: [42, 43, 65, 66] },
};

export default ERAB_PAGES;
