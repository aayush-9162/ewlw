// FSSAI Yellow Book page mapping
// habit number -> { level1: [PDF page indices for yellowbook1], level2: [PDF page indices for yellowbook2] }
const YELLOW_BOOK_PAGES = {
  1: { level1: [], level2: [93, 94, 95] },
  2: { level1: [], level2: [70] },
  4: { level1: [], level2: [97] },
  5: { level1: [], level2: [30] },
  6: { level1: [4, 5, 6, 7, 8, 9], level2: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 47, 48, 49, 50] },
  8: { level1: [], level2: [60, 61, 62, 63, 64, 65, 66] },
  9: { level1: [], level2: [60, 61, 62, 63, 64, 65, 66] },
  10: { level1: [], level2: [60, 61, 62, 63, 64, 65, 66] },
  12: { level1: [29, 30, 31, 32, 33, 34, 35], level2: [67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83] },
  17: { level1: [9, 10, 11, 12, 13, 14, 15], level2: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 51, 52, 53, 54, 55, 56] },
  18: { level1: [], level2: [44, 45] },
  20: { level1: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], level2: [88, 89, 90, 91, 92] },
  21: { level1: [], level2: [96] },
  32: { level1: [], level2: [57, 58, 59] },
  35: { level1: [], level2: [84, 85, 86, 87] },
};

export default YELLOW_BOOK_PAGES;
