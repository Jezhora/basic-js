const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let str1;
  let str2;

  if (s1.length < s2.length) {
    str1 = s2;
    str2 = s1;
  } else {
    str1 = s1;
    str2 = s2;
  }

  let count = 0;

  for (let i = 0; i < str1.length; i ++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        count += 1;

        if (j < 1) {
          str2 = str2.slice(j + 1, str2.length)
        } else {
          str2 = str2.slice(0, j) + str2.slice(j + 1);
        }
        break
      }
    }
  }
  return count
}
// getCommonCharacterCount('a', 'b');

module.exports = {
  getCommonCharacterCount
};
