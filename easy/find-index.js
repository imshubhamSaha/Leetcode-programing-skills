/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (hs, ned) {
  const n = hs.length;
  const m = ned.length;

  let idx = 0;
  for (let i = 0; i < n; i++) {
    const ch = hs[i];
    if (ch !== ned[idx]) {
      i = i - idx;
      idx = 0;
    } else {
      idx++;
      if (idx === m) return i - (idx - 1);
    }
  }

  return -1;
};

/**
 * TC -- O(n * m)
 * SC - constant
 */

var buildLPS = function (needle) {
  const lps = new Array(needle.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < needle.length) {
    if (needle[i] === needle[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = needle.length;
  const m = haystack.length;
  if (n === 0) return 0;

  const lps = buildLPS(needle);

  let i = 0;
  let j = 0;

  while (i < m) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === n) {
      return i - j;
    } else if (i < m && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
};
/**
 * TC -- O(n + m)
 * SC - O(m)
 */
