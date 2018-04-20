/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  //loop through string checking to see if the difference in the ASCII character codes
  //between the string characters at index i+1 and index i
  // is only 1 - ie letters are sequential. return that missing letter at index
  //i+1. else return "undefined".
  for (var i=0; i<str.length-1; i++) {
    if (str.charCodeAt(i+1) - str.charCodeAt(i) != 1){
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
    else {
    result = "undefined";
    } // end of else
  } // end of for loop
 
} //end of function

//check Solution
var result = fearNotLetter("abce");
console.log(result); //returns "d"
var result = fearNotLetter("abcdefghjklmno");
console.log(result); //return "i"
var result = fearNotLetter("bcd");
console.log(result); //returns "undefined"
var result = fearNotLetter("yz");
console.log(result); //returns "undefined"