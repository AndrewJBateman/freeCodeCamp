/*Algorithm challenge: Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/

function addTogether() {
  const args = [...arguments]; //create array constant using spread syntax
  
  return args.some(arg => typeof arg !== 'number')? //use some method to check if arguments are not numbers, 
    undefined      :      args.length>1           ? //return undefined if not numbers : otherwise check if there is more than one number.
    args.reduce((a,b) => a+b,0)  :  arg => typeof arg !== 'number'?  //there are 2 numbers so add them using reduce method, initial value = 0. 
    undefined      :      arg + args[0] //returns undefined if previous operation returns true : return sum
}

//check solution:
//var result = addTogether(2, 3);
//console.log(result); //returns 5
//var result = addTogether(2)(3);
//console.log(result); //returns 5
//var result = addTogether("http://bit.ly/IqT6zt");
//console.log(result); //returns undefined
//var result = addTogether(2, "3");
//console.log(result); //returns undefined as "3" is a string not a number
var result = addTogether(2)([3]);
console.log(result); //returns undefined


/*Notes:
[...arguments] uses the spread syntax. 
The some() method tests whether at least one element in the array passes the test implemented by the provided function.
Ternery operations: conditional operator - replaces if else statement. Example below: 
before:
if(userIsYoungerThan21) {
  serveGrapeJuice();
}
else {
  serveWine();
}
after:
userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

reduce method: used to add numbers. "function" replaced with "=>". const used instead of var. 
*/