/*Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument).*/

const findElement = (arr, func) => arr.filter(func)[0];

//check solution:
let result
result = findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
console.log('findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }) returns: ', result); //returns 2

result = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
console.log('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) returns: ', result); //returns 8

result = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
console.log('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) returns: ', result); //returns undefined