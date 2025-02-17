const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.replace(/[a-zA-Z0-9._%+-]+@/g, '');
}
// console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'))

module.exports = {
  getEmailDomain
};
