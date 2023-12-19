const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsValue = [];
  domains.forEach(domain => {
    dnsValue.push(domain.split('.').reverse())
  })

  return dnsValue.reduce((acc, item ,index) => {
    let [zone, name, add] = item;
    acc[`.${zone}`] = index + 1;
    acc[`.${zone}.${name}`] = index + 1;
    if(add) {
      acc[`.${zone}.${name}.${add}`] = 0;
      dnsValue.forEach(value => {
        value.forEach(item => {
          if (item === add) {
            acc[`.${zone}.${name}.${add}`] += 1;
          }
        })
      })
    }
    return acc
  }, {})


}
// console.log(getDNSStats([
//    'code.yandex.ru',
//    'music.yandex.ru',
//    'yandex.ru'
//   ]))

module.exports = {
  getDNSStats
};
