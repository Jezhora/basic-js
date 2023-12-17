const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string;
  if (typeof str !== 'string') {
    string = String(str);
  } else {
    string = str;
  }
  
  const strRepeat = options.repeatTimes ? options.repeatTimes : false;
  const strSeparator = options.separator;
  const strAddRepeat = options.additionRepeatTimes ? options.additionRepeatTimes : false;
  const strAddSeparator = options.additionSeparator;

  let strAdd;
  
  for (let key in options) {
    if (key === 'addition') {
      strAdd = options.addition;
      if (typeof options.addition !== 'string'
      || options.addition === false
      || options.addition === NaN
      || options.addition === Infinity
      || options.addition === null) {
        strAdd = String(options.addition);
      }
      console.log('!')
    }
  }

  let addition;
  let stringToRepeat;
  let result;

  if (strAdd) { 
    if (strAddSeparator) {
      if(strAddRepeat) {
        addition = `${strAdd}${strAddSeparator}`
        .repeat(strAddRepeat).slice(0, -strAddSeparator.length)
      } else {
        addition = `${strAdd}${strAddSeparator}`.slice(0, -strAddSeparator.length);
      }
  
    } else {
      if (strAddRepeat) {
      addition = `${strAdd}|`.repeat(strAddRepeat).slice(0,-1);
      } else {
        addition = `${strAdd}|`.slice(0,-1);
      }
    }
  }

  if (strSeparator) { 
    if(addition) {
      stringToRepeat = `${string}${addition}${strSeparator}`;
    } else {
      stringToRepeat = `${string}${strSeparator}`
    }
  
    if(strRepeat) {
      result = stringToRepeat.repeat(strRepeat).slice(0, -strSeparator.length);
    } else {
      result = stringToRepeat.slice(0, -strSeparator.length);
    }

  } else {
    if(addition) {
      stringToRepeat = `${string}${addition}+`;
    } else {
      stringToRepeat = `${string}+`
    }
    if (strRepeat) {
      result = stringToRepeat.repeat(strRepeat).slice(0,-1);
    } else {
      result = stringToRepeat.slice(0,-1);
    }
  } 

  return result;
}
// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };

// repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })

module.exports = {
  repeater
};
