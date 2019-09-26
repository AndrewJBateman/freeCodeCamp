/*This was removed from the new freecodecamp list of algorithms
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

const pairwise = (arr, arg) => {
  //use reduce function on the array arr to apply a callback function
  return arr.reduce(function(acc, num, index, arr){
    let i = 0; //initialise var I
    //use for loop to start from index+1 as we are comparing with index
    for (i = index+1; i < arr.length; i++){
      if (arr[index] + arr[i] === arg){
        acc += index + i; //sum the 2 indexes
        delete arr[index]; //remove the used key index so it cannot be reused
        delete arr[i]; //remove the used value element using pop (slice also works)
        //console.log(arr);
        //console.log(arr[index]);
      } //end if
    } //end for
    return acc;
  }, 0); //default value is 0. end function arr reduce
}
//var result = pairwise([1,4,2,3,0,5], 7);
//console.log(result); //return 11 as 4(1)+3(3) = 4, 2(2)+5(5)=7.Sum 11
let result 
result = pairwise([1, 4, 2, 3, 0, 5], 7);
console.log('pairwise([1, 4, 2, 3, 0, 5], 7) returns: ', result); //returns 11 as 4(1)+3(3) = 4, 2(2)+5(5)=7.Sum 11
result = pairwise([1, 3, 2, 4], 4);
console.log('pairwise([1, 3, 2, 4], 4) returns: ', result); //returns 1 as 1(0)+3(1) = 1.
result = pairwise([1, 1, 1], 2);
console.log('pairwise([1, 1, 1], 2) returns: ', result); //returns 1 as 1(0)+1(1) = 1.
result = pairwise([0, 0, 0, 0, 1, 1], 1);
console.log('pairwise([0, 0, 0, 0, 1, 1], 1) returns: ', result); //returns 10 as 0(0)+1(4) and 1(1)+1(5) = 10.
result = pairwise([0, 0, 0, 0, 1, 1], 1);
console.log('pairwise([0, 0, 0, 0, 1, 1], 1) returns: ', result); //returns 10 as 0(0)+1(4) and 1(1)+1(5) = 10.