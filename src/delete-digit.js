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
    let arr = [];
    const strNum = String(n);

    for( let i = 0; i < strNum.length; i++){
      arr.push((strNum.replace(strNum[i],'')));
    }
    console.log(arr)
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
