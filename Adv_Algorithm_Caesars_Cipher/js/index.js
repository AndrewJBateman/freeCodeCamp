/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

ASCII codes for uppercase are: 65 = A up to 90 = Z*/

//iterate through each character in the string and examine it using simple if, else if & else
function rot13(str) { 
  newString = "";
  for(var i=0; i<str.length; i++){
    
    // if the ASCII code for a letter is between 78 and 90 (N to Z) then subtract 13 from code
    if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90){
      newString = newString + String.fromCharCode(str.charCodeAt(i)-13);
    }
    // if the ASCII code is for a space (32), a ! (33) or a ? (63) then it is unchanged
    else if(str.charCodeAt(i) == 32 || str.charCodeAt(i) == 33 || str.charCodeAt(i) == 63 || str.charCodeAt(i) == 46){
      newString = newString + String.fromCharCode(str.charCodeAt(i));
    }
    // all remaining characters are A to M so add 13 to decipher
    else{
      newString = newString + String.fromCharCode(str.charCodeAt(i)+13);
    }
  }
  return newString;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC"); // returns "FREE CODE CAMP"