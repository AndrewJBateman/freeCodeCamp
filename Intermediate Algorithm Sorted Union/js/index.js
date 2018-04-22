/*Algorithm challenge: Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
*/
function uniteUnique(arr) {

  var reducedArray = []; // Empty final array
  //loop through array items 
  for (var i=0; i<arguments.length; i++) {
    var arrayArguments = arguments[i];
    //now for inner arrays:
    for (var j=0; j<arrayArguments.length; j++) {
      var arrayValue = arrayArguments[j];
      //use indexOf to only pass on values that are unique (index = -1)
      if (reducedArray.indexOf(arrayValue) === -1) {
          reducedArray.push(arrayValue);
          console.log(reducedArray);
      } // end of if
    } // end of inner for
  } // end of outer for
  return reducedArray;
} //end of function 

//Test solution:
var result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
var result = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
console.log(result);
var result = uniteUnique([1, 2, 3], [5, 2, 1]);
console.log(result);
var result = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(result);