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
function repeater(str, options){
  let arrMain = [];
  let arrAdd = [];
  if(options.separator === undefined){
    options.separator = '+';
  }
  if(options.additionSeparator === undefined){
    options.additionSeparator = '|';
  }
  for(let i = 0; i < options.repeatTimes; i++){
    arrMain.push(str);
    
  }
  if(options.addition !== undefined){
    for( let j = 0 ; j < options.additionRepeatTimes; j++){
    arrAdd.push(options.addition);
    }
    arrMain.push(arrAdd.join(options.additionSeparator));
  }
  return arrMain.join(options.separator);
}

module.exports = {
  repeater
};
