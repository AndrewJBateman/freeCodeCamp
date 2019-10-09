/*Algorithm challenge: Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.*/

//use array shift method to remove the first item in the array until the conditions of the function is met. 
const dropElements = (arr, func) => {
  while (func(arr[0]) !== true && arr.length > 0) {
    arr.shift(); 
  }
  return arr.length > 0 ? arr : []
}
//test solution:
let result
result = dropElements([1, 2, 3, 4], n => n >= 3);
console.log('dropElements([1, 2, 3, 4], n => n >= 3) return: ', result); //returns [3, 4]

result = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
console.log('dropElements([0, 1, 0, 1], function(n) {return n === 1; })', result); //returns [1,0,1]

result = dropElements([1, 2, 3], function(n) {return n > 0;});
console.log('dropElements([1, 2, 3], function(n) {return n > 0;})', result); //returns [1,2,3]

result = dropElements([1, 2, 3, 4], function(n) {return n > 5;});
console.log('dropElements([1, 2, 3, 4], function(n) {return n > 5;})', result); //returns []

result = dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
console.log('dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})', result); //returns [7, 4]

result = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
console.log('dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})', result); //returns [3, 9, 2]