/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (w1, w2) {
  const n = w1.length;
  const m = w2.length;
  const concat = new Array(n + m).fill("");
  let i = 0,
    j = 0;
  let idx = 0;
  while (i < n || j < m) {
    if (i < n && j < m) {
      concat[idx++] = w1[i++];
      concat[idx++] = w2[j++];
    } else if (i < n) concat[idx++] = w1[i++];
    else concat[idx++] = w2[j++];
  }

  return concat.join("");
};
