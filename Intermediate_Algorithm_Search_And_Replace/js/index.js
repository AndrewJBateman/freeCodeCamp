/*Algorithm challenge: Perform a search and replace on the sentence 
using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", 
it should be replaced as "Dog"*/

//function that takes 3 arguments
function myReplace(str, before, after) {
  
  //if 2nd argument first letter is uppercase then replace first letter of 
  //3rd argument with upper case letter too
  if (before[0] === before[0].toUpperCase()){
    after = after.replace(after[0], after[0].toUpperCase());
  }
   //create new string which replaces the word `before` with the word 'after'
   var newstr = str.replace(before, after);
   return newstr; //function returns the modified string
  
}

//Test solution
var result = myReplace("His name is Tom", "Tom", "john");
console.log(result);