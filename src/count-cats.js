const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const catEars = '^^';
  let cats = 0;

  matrix.forEach(line => {
    line.forEach(item => item === catEars ? cats += 1 : cats += 0) 
  })
  return cats;
}
// console.log(countCats(
//   [
//     [0, 1, '^^'],
//     [0, '^^', '^^'],
//     ['^^', 1, 2]
//   ]
// ))

module.exports = {
  countCats
};
