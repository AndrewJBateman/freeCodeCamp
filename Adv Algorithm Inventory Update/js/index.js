/*This was removed from the new freecodecamp list of algorithms
Algorithm Challenge: Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, 
add the new item and quantity into the inventory array. The returned inventory array should be 
in alphabetical order by item.*/

const updateInventory = (arr1, arr2) => {
  //concatenate arrays into 1 array and sort by description in ascending alphabetical order
  arr1 = arr1
    .concat(arr2)
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return 1;
      }
      if (a[1] < b[1]) {
        return -1;
      }
      return 0;
    });
  //loop through array, adding sequential items that are the same then removing the second item using splice.
  let i;
  for (i=0; i<arr1.length-1; i++) {
    if (arr1[i][1] === arr1[i+1][1]) { //compare to see if description (array item 2) for both arrays is the same
      arr1[i][0] += arr1[i+1][0]; //add array quantities if description the same
      arr1.splice(i+1, 1); //remove item from array that has been added
    }   
  }
  return arr1;
}
//test solution to algorithm challenge
let result
result = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
console.log('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) returns:', result);

result = updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
// should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
console.log('updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) returns: ', result);

result = updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
console.log('updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) returns: ', result);