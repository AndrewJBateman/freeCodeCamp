/*Algorithm challenge: Check if the predicate (second argument) is 
truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot 
notation or [] notation.*/

function truthCheck(collection, pre) {
  /* Use the every method with a callback function accessing one argument defined by pre. 
  Executes the callback function for every element in the collection until the 
  callback function returns a falsey value, where false is returned by the every method. 
  Falsey values include: false, 0 and -0, "", '' and ``, null, undefined, NaN
  If every object has the property defined by pre  and none are falsey then it will return true*/  
  return collection.every(function(object) {
    return object[pre];
  });
}

//test solution
var result = truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
], "sex");
console.log(result); //returns true

var result = truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
], "sex");
console.log(result); //returns false

var result = truthCheck([
  {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
  {"user": "Dipsy", "sex": "male", "age": 3}, 
  {"user": "Laa-Laa", "sex": "female", "age": 5}, 
  {"user": "Po", "sex": "female", "age": 4}
], "age");
console.log(result); //returns false due to the zero value for Tinky-Winky

var result = truthCheck([
  {"name": "Pete", "onBoat": true}, 
  {"name": "Repeat", "onBoat": true}, 
  {"name": "FastFoward", "onBoat": null}
], "onBoat");
console.log(result); //returns false due to the null value for "onBoat"

var result = truthCheck([
  {"name": "Pete", "onBoat": true}, 
  {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
  {"name": "FastFoward", "onBoat": true}
], "onBoat");
console.log(result); //returns true

var result = truthCheck([
  {"single": "yes"}], "single");
console.log(result); //returns true

var result = truthCheck([
  {"single": ""}, 
  {"single": "double"}
], "single");
console.log(result); //returns false due to empty "" in first object

var result = truthCheck([
  {"single": "double"}, 
  {"single": undefined}
], "single");
console.log(result);  //returns false due to second object being undefined

var result = truthCheck([
  {"single": "double"}, 
  {"single": NaN}
], "single");
console.log(result);  //returns false due to second object being Not a Number (NaN)