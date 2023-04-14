const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if(typeof date === 'undefined'){
      return 'Unable to determine the time of year!'
    } 
    let mounth = date.getMonth();
    let error = new Error('Invalid date!');
    if( mounth === 1 && date.getDate() > 28 ){
      throw error.message;
    }
    if(mounth === 11 || mounth < 2){
      return 'winter';
    } else if(mounth < 5){
      return 'spring';
    } else if( mounth < 8){
      return 'summer';
    } else if( mounth < 11 ){
      return 'autumn';
    }

}


module.exports = {
  getSeason
};
