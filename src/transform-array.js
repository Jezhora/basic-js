const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const transformArr = [];
  const controlsArr = [
    '--discard-prev',
    '--double-prev',
    '--discard-next',
    '--double-next'
  ]
  const [discardPrev, doublePrev, discardNext, doubleNext] = controlsArr;

  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i - 1];
    const current = arr[i];
    const next = arr[i + 1];
    const transformLast = transformArr[transformArr.length - 1];

   if (current === discardPrev &&  prev === transformLast) {
    transformArr.pop()
   } else if (current === discardNext && next !== undefined) {
    i = i + 1;
   } else if (current === doublePrev && prev === transformLast && prev !== undefined) {
    transformArr.push(prev)
   } else if (current === doubleNext && next !== undefined) {
    transformArr.push(next)
   } else {
    if (current !== discardPrev &&
      current !== doublePrev &&
      current !== doubleNext &&
      current !== discardNext) {
      transformArr.push(current)
    }
   }
  }

 return transformArr;
}
console.log(transform(
  [ 1, 2, 3, '--double-next' ]))

module.exports = {
  transform
};
