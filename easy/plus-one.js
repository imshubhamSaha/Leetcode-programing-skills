/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const n = digits.length;
  digits.reverse();

  let carry = Math.floor((digits[0] + 1) / 10);
  let res = [];
  res.push((digits[0] + 1) % 10);

  let i = 1;

  while (i < n) {
    let sum = digits[i++] + carry;
    res.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry) res.push(carry);
  res.reverse();
  return res;
};
