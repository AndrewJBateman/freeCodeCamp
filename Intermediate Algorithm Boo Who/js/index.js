/*Check if a value is classified as a boolean primitive. 
Return true or false.
Boolean primitives are true and false.*/

//Solution using a simple if and OR to return true or false
function booWho(bool) {
  if (bool === true || bool === false) {
      return true;
      } else {
      return false;
      }
}

//A more compact solution using typeof to return true or false
function booWho(bool){
  return typeof bool === 'boolean'
}

//check solution
var result = booWho(true);
console.log(result);
var result = booWho(false);
console.log(result);
var result = booWho([1, 2, 3]);
console.log(result);
var result = booWho([].slice);
console.log(result);
var result = booWho({ "a": 1 });
console.log(result);
var result = booWho(1);
console.log(result);
var result = booWho(NaN);
console.log(result);
var result = booWho(a);
console.log(result);