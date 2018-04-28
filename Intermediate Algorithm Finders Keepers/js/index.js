/*Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument).*/

function findElement(arr, func) {

  return arr.filter(func)[0];
}

//check solution:
var result = findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
console.log(result); //returns 2
var result = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
console.log(result); //returns 8
var result = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
console.log(result); //returns undefined