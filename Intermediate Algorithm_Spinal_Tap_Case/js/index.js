/*Algorithm challenge: Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.*/

//Use string replace function with regex to globally replace underscores or spaces with '-' and replace
//all capital letters with lower-case. $1 is the first regex capture group, $2 is the second one.
//hypen added between dollar signs to insert a hyphen between the words. 

// regex expression explained:
// replace(/(\_|\s)/g,'-') = replace _ or space with -
// replace(/([a-z])([A-Z])/g, '$1-$2') = find a junction between a lower case and uppper case and insert a -
// toLowerCase() converts everything to lower case


const spinalCase = (str) => {
  
  return str.replace(/(\_|\s)/g,'-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
}

//check solution:
let result
result = spinalCase("This Is Spinal Tap");
console.log('spinalCase("This Is Spinal Tap") returns: ', result);
result = spinalCase("thisIsSpinalTap");
console.log('spinalCase("thisIsSpinalTap") returns: ', result);
result = spinalCase("The_Andy_Griffith_Show");
console.log('spinalCase("The_Andy_Griffith_Show") returns: ', result);
result = spinalCase("Teletubbies say Eh-oh");
console.log('spinalCase("Teletubbies say Eh-oh") returns: ', result);
result = spinalCase("AllThe-small Things");
console.log('spinalCase("AllThe-small Things") returns: ', result);