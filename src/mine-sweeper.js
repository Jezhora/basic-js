const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const result = [...matrix].map(row => row.map(item => item = 0));

  for (let row = 0; row < matrix.length; row ++) {
    for (let col = 0; col < matrix[row].length; col ++) {
      if(matrix[row][col] === true) {
        // row minus
        if (row > 0) {
          if (col > 0) {
          result[row - 1][col - 1] += 1;
          }
          result[row - 1][col] += 1;
          if (col < matrix[row].length) {
          result[row - 1][col + 1] += 1;
          }
        }
        // current row
        if (col > 0) {
          result[row][col - 1] += 1;
        }
        if (col < matrix[row].length) {
          result[row][col + 1] += 1;
        }
        // row plus
        if (row < matrix.length) {
          if (col > 0) {
          result[row + 1][col - 1] += 1;
          }
          result[row + 1][col] += 1;
          if (col < matrix[row].length) {
          result[row + 1][col + 1] += 1;
          }
        }
      }
    }
  }
  return result
}
// console.log(minesweeper([
//   [false, false, false],
//   [false, false, false],
//   [false, false, false]
//  ]))

module.exports = {
  minesweeper
};
