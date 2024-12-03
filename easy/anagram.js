/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const n = s.length;
  const m = t.length;

  if (n !== m) return false;

  const char = new Array(26).fill(0);

  for (const ch of s) char[ch.charCodeAt(0) - 97]++;

  for (const ch of t) {
    if (char[ch.charCodeAt(0) - 97] === 0) return false;
    char[ch.charCodeAt(0) - 97]--;
  }

  return true;
};
