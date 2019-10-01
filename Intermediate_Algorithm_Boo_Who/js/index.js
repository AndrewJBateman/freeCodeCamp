/*Check if a value is classified as a boolean primitive. 
Return true or false.
Boolean primitives are true and false.*/

//Solution using a simple if and OR to return true or false
// booWho = (bool) => {
//   if (bool === true || bool === false) {
//       return true;
//       } else {
//       return false;
//       }
// }

//A more compact solution using typeof to return true or false
const booWho = (bool) => typeof bool === 'boolean';

//check solution
let result 
result = booWho(true);
console.log('booWho(true) returns: ', result);

result = booWho('booWho(false) returns: ', false);
console.log(result);

result = booWho([1, 2, 3]);
console.log('booWho([1, 2, 3]) returns: ', result);

result = booWho([].slice);
console.log('booWho([].slice) returns: ', result);

result = booWho({ "a": 1 });
console.log('booWho({ "a": 1 }) returns: ', result);

result = booWho(1);
console.log('booWho(1) returns: ', result);

result = booWho(false);
console.log('booWho(false) returns: ', result);