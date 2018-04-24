/*Algorithm challenge: Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.*/

//Use string replace function with regex to globally replace underscores or spaces with '-' and replace
//all capital letters with lower-case. $1 is the first regex capture group, $2 is the second one.
//hypen added between dollar signs to insert a hyphen bewtten the words. 
function spinalCase(str) {
  
  return str.replace(/(\_|\s)/g,'-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
}

//check solution:
var result = spinalCase("This Is Spinal Tap");
console.log(result);
var result = spinalCase("thisIsSpinalTap");
console.log(result);
var result = spinalCase("The_Andy_Griffith_Show");
console.log(result);
var result = spinalCase("Teletubbies say Eh-oh");
console.log(result);
var result = spinalCase("AllThe-small Things");
console.log(result);