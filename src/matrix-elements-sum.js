const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  const summ = [];

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for(let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
      if (rowIndex > 0 && matrix[rowIndex - 1][colIndex] === 0) {
        summ.push(0)
      } else if (matrix[rowIndex][colIndex] !== 0
        || rowIndex > 0 && matrix[rowIndex][colIndex] !== 0) {
        summ.push(matrix[rowIndex][colIndex])
      }
    }
  }
  if (summ.length === 0) {
    return 0;
  }
  return summ.reduce((acc,item) => acc + item);
}
// console.log(getMatrixElementsSum([
//   [0],
//   ]))

module.exports = {
  getMatrixElementsSum
};
