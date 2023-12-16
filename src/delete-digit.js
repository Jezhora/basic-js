const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const numberToString = n.toString();
  const numbers = [];

  for (let i = 0; i < numberToString.length; i ++) {
    if (i < 1) {
      numbers.push(+numberToString.slice(i + 1, numberToString.length))
    } else {
      numbers.push(+numberToString.slice(0, i) + numberToString.slice(i + 1));
    }
  }
  return Math.max(...numbers)
}
// console.log(deleteDigit(1001))

module.exports = {
  deleteDigit
};
