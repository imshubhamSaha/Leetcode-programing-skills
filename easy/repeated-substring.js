/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;
  let str = s[0];
  for (let i = 1; i < n; i++) {
    if (str.repeat(Math.floor(n / str.length)) === s) return true;
    str += s[i];
  }

  return false;
};

/**
 * TC --> O(n * n)
 * SC --> O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;
  const concat = (s + s).slice(1, -1);

  return concat.includes(s);
};
/**
 * TC --> O(n )
 * SC --> O(n)
 */
