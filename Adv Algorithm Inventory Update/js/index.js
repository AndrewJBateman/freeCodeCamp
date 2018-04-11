/*Algorithm Challenge: Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, 
add the new item and quantity into the inventory array. The returned inventory array should be 
in alphabetical order by item.*/

function updateInventory(arr1, arr2) {
  //concatenate arrays into 1 array and sort by description in ascending alphabetical order
  arr1 = arr1.concat(arr2).sort(function(a,b) {
    return a[1] > b[1];
  });
  console.log(arr1);
  //loop through array, adding sequential items that are the same then removing the second item using splice. 
  for (var i=0; i<arr1.length-1; i++) {
    if (arr1[i][1] === arr1[i+1][1]) { //compare to see if description (array item 2) for both arrays is the same
      arr1[i][0] += arr1[i+1][0]; //add array quantities if description the same
      arr1.splice(i+1, 1); //remove item from array that has been added
    } //end if    
  } //end for
  return arr1;
}
//test solution to algorithm challenge
var result = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
console.log(result);