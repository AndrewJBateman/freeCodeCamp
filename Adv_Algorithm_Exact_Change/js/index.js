/*Design a cash register drawer function checkCashRegister() that accepts purchase
price as the first argument (price), payment as the second argument (cash), and 
cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.*/

//global constants denoms (const used as these values don't change)
const denoms = [
    {name: 'ONE HUNDRED', value: 100.00},
    {name: 'TWENTY', value: 20.00}, 
    {name: 'TEN', value: 10.00},
    {name: 'FIVE', value: 5.00},
    {name: 'ONE', value: 1.00},
    {name: 'QUARTER', value: 0.25},
    {name: 'DIME', value: 0.10},
    {name: 'NICKEL', value: 0.05},
    {name: 'PENNY', value: 0.01}
];
//function to calculate change and total cash in drawer
function checkCashRegister(price, cash, cid) {
  //change due is cash given minus price
  let change = 0.00;
  change = (cash - price).toFixed(2);
  let totalCiD = 0.0; //create variable for total cash in drawer & initialise to zero
  for (let i=0; i<cid.length; i++){ //use for loop to sum total cash in drawer
      totalCiD = totalCiD + cid[i][1]; // add value in each denomination to get total
  } //end for loop
  //totalCiD.toFixed(2);   
  //console.log(totalCiD);

  if (totalCiD < change) { //if else statements as per design requirements
    return "Insufficient Funds";
  } else if (totalCiD == change) {
    return "Closed";
  }  
  cid = cid.reverse();//reverse order of items to match our const array.
  
  //use reduce function to calculate change by processing each denoms array.
  var sortedChange = denoms.reduce(function(acc, next, index) {
    if (change >= next.value) {
      var currentChange = 0.0; //temporary variable which is change left to process.
      //loop while change and cash in drawer are greater than the next value in the denoms array
      while (change >= next.value && cid[index][1] >= next.value) {
        currentChange += next.value; //adds from cash in drawer to the change being processed
        change -= next.value;
        change = Math.round(change * 100) / 100; //ensures 2 dec. point accuracy is correct
        cid[index][1] -= next.value; //update cash in drawer by decrementing
      } //end while
      acc.push([next.name, currentChange]); //add to accumulator: denomination name and value of change
      return acc;
    } else {
      return acc;
    } //end if else
  }, []); //end function sorted change
  
  //if length of sorted array > 0 and change is zero then return var sortedChange, otherwise return "insufficient funds". 
  return sortedChange.length > 0 && change === 0 ? sortedChange : "Insufficient Funds";
  
} //end main function

var result = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result);