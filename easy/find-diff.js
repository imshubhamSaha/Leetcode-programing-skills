/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const n = s.length;
  const m = t.length;

  for (let i = 0; i < m; i++) {
    let cnt = 1;
    for (let j = 0; j < m; j++) {
      if (i !== j && t[i] === t[j]) cnt++;
    }

    for (let k = 0; k < n; k++) {
      if (s[k] === t[i]) cnt--;
    }

    if (cnt > 0) return t[i];
  }
};
/**
 * TC --> O(m*m)
 * SC --> O(1)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const n = s.length;
  const m = t.length;
  let xor = " ".charCodeAt(0);
  let i = 0;
  while (i < n) {
    const c1 = s[i].charCodeAt(0);
    const c2 = t[i].charCodeAt(0);
    xor = xor ^ c1 ^ c2;
    i++;
  }

  while (i < m) {
    const c2 = t[i].charCodeAt(0);
    xor ^= c2;
    i++;
  }
  xor += " ".charCodeAt(0);

  return String.fromCharCode(xor);
};
/**
 * TC --> O(m)
 * SC --> O(1)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const n = s.length;
  const m = t.length;
  const freq = new Array(26).fill(0);
  let i = 0;
  while (i < n) {
    const c1 = s[i].charCodeAt(0);
    freq[c1 - 97]++;
    i++;
  }
  i = 0;
  while (i < m) {
    const c2 = t[i].charCodeAt(0);
    if (!freq[c2 - 97]) return t[i];
    freq[c2 - 97]--;
    i++;
  }
};
/**
 * TC --> O(m)
 * SC --> O(26)
 */
