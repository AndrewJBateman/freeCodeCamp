/*Return an English translated sentence of the passed binary string.
The binary string will be space separated.*/

/*split code into 8-bit chunks separated using space, convert each 
  chunk using anonymous mapping function to convert from binary 
  using parseInt (with radix 2) and CharCode methods, then join together.
  Map function used to call function on every element in the array.
  */
const binaryAgent = (str) => {
  return str.split(' ').map((binary) => {
    return String.fromCharCode(parseInt(binary, 2));
  }).join('');
  
}

//Test solution:
let result;
result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(result); //returns "Aren't bonfires fun!?"
result = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
console.log(result); // returns "I love FreeCodeCamp!""