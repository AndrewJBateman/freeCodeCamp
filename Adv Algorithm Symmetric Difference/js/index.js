/*This was removed from the new freecodecamp list of algorithms
Algorithm challenge: Create a function that takes two or more arrays and returns an array of the 
symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the 
mathematical term "symmetric difference" of two sets is the set of elements 
which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
For every additional symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two sets 
but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
Note: functions can be in any order due to javascript "hoisting" where all functions 
are lifted to the top of the code*/

//Helper function1 to combine arrays into one array. 
const uniqueArray = (arr1, arr2) => {
  const newArray = arr1.concat(arr2); //combine arrays in new array with concat method
  return newArray.filter((value, index, array) => {
    //return value if not repeated - check either side of index position to see if a match
    if (array.slice(index+1).indexOf(value) === -1 &&
        array.slice(0, index).indexOf(value) === -1) {
        return value;
    }
  });
}

//Helper Function2 to remove duplicates in each sub-array
const extractDuplicates = (arr) => {
  const endResult = []; //empty array variable
  //use foreach method to add each value to new array if not repeated
  arr.forEach((value) => {
    if (endResult.indexOf(value) < 0) { //indexOf =-1 means does not exist
      endResult.push(value);
    }
  });
  return endResult; //new array without duplicates
}
/*Main function - cannot be converted to a fat arrow function due to use of arguments. 
Convert argument objects to a real array using [].slice function
to return a function object then use the call() function to this. 
so array methods can be used. */
function sym (args) {
  args = [].slice.call(arguments);
  return args.reduce((acc, next) => {
    acc = extractDuplicates(acc);//reduce method accumulator for first sub-array in the array: remove duplicates
    next = extractDuplicates(next);//reduce method for next sub-array in the array: remove duplicates
    acc = uniqueArray(acc, next);
    return acc;
  }, []); //end args reduce function. Note no default value is needed - [] at end of function is not required.
}

let result
result = sym([1, 2, 3], [5, 2, 1, 4]);
console.log('sym([1, 2, 3], [5, 2, 1, 4]) returns: ', result);

result = sym([1,1,2,5], [2,2,3,5], [3,4,5,5]);
console.log('sym([1,1,2,5], [2,2,3,5], [3,4,5,5]) returns: ', result);

result = sym([3,3,3,2,5], [2,1,5,7], [3,4,6,6], [1,2,3], [5,3,9,8], [1]);
console.log('sym([3,3,3,2,5], [2,1,5,7], [3,4,6,6], [1,2,3], [5,3,9,8], [1]) returns: ', result);