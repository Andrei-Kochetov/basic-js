const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if(Array.isArray(arr)){
    return arr.filter((el)=> typeof el === 'string').map((el)=> el.trim()[0].toUpperCase()).sort().join('');
  } else{
    return false;
  }
  

}
/* console.log(createDreamTeam(['Henry', 'Peter', 'Amber', 'Jordan', 'Lauren', 'Andrew', 'Emma', 'Gregory', 'Kayla', 'Deborah']))
'AADEGHJKLP' */
module.exports = {
  createDreamTeam
};
