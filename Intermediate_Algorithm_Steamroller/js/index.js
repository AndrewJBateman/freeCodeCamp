/*Algorithm challenge: Flatten a nested array. 
You must account for varying levels of nesting.*/

/*The key to this is the javascript flatten array method which returns an array of depth 1.*/

const steamrollArray = (arr) => {
  let singleArray = [];
  
  const flatten = (arr) => {
    arr.forEach((arrx) => { //use forEach method to run function on each element in the array
      if (!Array.isArray(arrx)){ //use Array.isArray method to check if object is an array.
        singleArray.push(arrx); //if not an array then add it to the end of the new array variable singleArray 
      }
      else {
        flatten(arrx); //if it is an array then use flatten method to concatenate (default depth 1)
      }
    }); //end of function forEach 
  } //end of function flatten
  flatten(arr);
  return singleArray;
}

//test solution:
let result
result = steamrollArray([[["a"]], [["b"]]]);
console.log('steamrollArray([[["a"]], [["b"]]]) returns: ', result ); //returns ["a", "b"];
result = steamrollArray([1, [2], [3, [[4]]]]);
console.log('steamrollArray([1, [2], [3, [[4]]]]) returns: ', result); //returns [1, 2, 3, 4]
result = steamrollArray([1, [], [3, [[4]]]]);
console.log('steamrollArray([1, [], [3, [[4]]]]) returns: ', result); //returns [1, 3, 4]
result = steamrollArray([1, {}, [3, [[4]]]]);
console.log('steamrollArray([1, {}, [3, [[4]]]]) returns: ', result); //returns [1, Object {}, 3, 4]