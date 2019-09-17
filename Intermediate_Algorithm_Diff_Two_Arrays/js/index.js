/*Algorithm challenge: Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
  //contatenate the two arrays using ES6 arrow and filter functions. item included if
  // array1 or array2 don't have it (expression using NOT and OR boolean logic).
  return arr1
    .concat(arr2)
    .filter(item => // filter out items that were not in either arr1 or arr2
      !arr1.includes(item) ||
      !arr2.includes(item)
    )
}
//test solution
var result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result); // returns 4