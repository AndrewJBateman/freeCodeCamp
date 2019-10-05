/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

const fearNotLetter = (str) => {
  // loop through string checking to see if the difference in the ASCII character codes
  // between the string characters at index i+1 and index i
  // is only 1 - ie letters are sequential. return that missing letter at index
  // i+1. else return "undefined".
  for (let i=0; i<str.length-1; i++) {
    if (str.charCodeAt(i+1) - str.charCodeAt(i) !== 1){
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
    else {
    result = "undefined";
    }
  }

}

//check Solution
let result
result = fearNotLetter("abce");
console.log('fearNotLetter("abce") returns:', result); //returns "d"

result = fearNotLetter("abcdefghjklmno");
console.log('fearNotLetter("abcdefghjklmno") returns: ', result); //return "i"

result = fearNotLetter("bcd");
console.log('fearNotLetter("bcd") returns: ', result); //returns "undefined"

result = fearNotLetter("yz");
console.log('fearNotLetter("yz") returns: ', result); //returns "undefined"