/*Algorithm challenge: Flatten a nested array. 
You must account for varying levels of nesting.*/

function steamrollArray(arr) {
  var singleArray = [];
  flatten(arr);
  
  function flatten(arr){
    arr.forEach(function(arrx){ //use forEach method to run function on each element in the array
      if(!Array.isArray(arrx)){ //use Array.isArray method to check if object is an array.
        singleArray.push(arrx); //if not an array then add it to the end of the new array variable singleArray 
        console.log(singleArray); //for Each returns [1] then [1,2] then [1,2,3] then [1,2,3,4] 
      }
      else{
        flatten(arrx); //if it is an array then use flatten method to concatenate (default depth 1)
      }
    }); //end of function forEach 
  } //end of function flatten
  return singleArray;
}

//test solution:
var result = steamrollArray([[["a"]], [["b"]]]);
console.log(result); //returns ["a", "b"]
//var result = steamrollArray([1, [2], [3, [[4]]]]);
//console.log(result); //returns [1, 2, 3, 4]
//var result = steamrollArray([1, [], [3, [[4]]]]);
//console.log(result); //returns [1, 3, 4]
//var result = steamrollArray([1, {}, [3, [[4]]]]);
//console.log(result); //returns [1, Object {}, 3, 4]