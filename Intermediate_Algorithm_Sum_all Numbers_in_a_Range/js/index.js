/*Algorithm challenge: We'll pass you an array of two numbers. Return the sum of those two 
numbers and all numbers between them.
The lowest number will not always come first*/

/*function to put the smallest number at the beginning and the largest
number at the end using Math functions.*/
function sumAll(arr) { //function takes an array arr as an input
  var min = Math.min(arr[0], arr[1]); // create variables for minimum 
  var max = Math.max(arr[0], arr[1]); // and maximum values in array
  var total = 0; //create variable total and initialise to zero
    
  for (var i=min; i<= max; i++){ //loop from min to max value
    total = total + i;  // summing all values from min to max
  }
  return total;
}

//test solution
var result = sumAll([1, 4]);
console.log(result);