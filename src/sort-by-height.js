const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrCopy = [...arr];
  const sortedHeight = arr.sort((a, b) => a > b ? 1 : -1).filter(num => num !== -1);

  const sortedArr = [];

  for (let i = 0; i < arrCopy.length; i++) {
    const currentNumber = arrCopy[i];
    const [currentHeight] = sortedHeight;
    if(currentNumber === -1){
      sortedArr.push(currentNumber);
    }
    if(currentNumber !== -1) {
      sortedArr.push(currentHeight);
      sortedHeight.shift()
    }
  }
  return sortedArr
}
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

module.exports = {
  sortByHeight
};
