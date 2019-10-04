/*Algorithm challenge: Check if the predicate (second argument) is 
truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot 
notation or [] notation.*/

const truthCheck = (collection, pre) => {
  /* Use the every method with a callback function accessing one argument defined by pre. 
  Executes the callback function for every element in the collection until the 
  callback function returns a falsey value, where false is returned by the every method. 
  Falsey values include: false, 0 and -0, "", '' and ``, null, undefined, NaN
  If every object has the property defined by pre  and none are falsey then it will return true*/  
  return collection.every(object => object[pre]);
}

//test solution
let result;
result = truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
], "sex");
console.log(`truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
], "sex") returns: `, result); //returns true

result = truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
], "sex");
console.log(`truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
], "sex") returns: `, result); //returns false

result = truthCheck([
  {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
  {"user": "Dipsy", "sex": "male", "age": 3}, 
  {"user": "Laa-Laa", "sex": "female", "age": 5}, 
  {"user": "Po", "sex": "female", "age": 4}
], "age");
console.log(`truthCheck([
  {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
  {"user": "Dipsy", "sex": "male", "age": 3}, 
  {"user": "Laa-Laa", "sex": "female", "age": 5}, 
  {"user": "Po", "sex": "female", "age": 4}
], "age") returns: `, result); //returns false due to the zero value for Tinky-Winky

result = truthCheck([
  {"name": "Pete", "onBoat": true}, 
  {"name": "Repeat", "onBoat": true}, 
  {"name": "FastFoward", "onBoat": null}
], "onBoat");
console.log(`truthCheck([
  {"name": "Pete", "onBoat": true}, 
  {"name": "Repeat", "onBoat": true}, 
  {"name": "FastFoward", "onBoat": null}
], "onBoat") returns: `, result); //returns false due to the null value for "onBoat"

result = truthCheck([
  {"name": "Pete", "onBoat": true}, 
  {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
  {"name": "FastFoward", "onBoat": true}
], "onBoat");
console.log(`truthCheck([
  {"name": "Pete", "onBoat": true}, 
  {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
  {"name": "FastFoward", "onBoat": true}
], "onBoat") returns: `, result); //returns true

result = truthCheck([
  {"single": "yes"}], "single");
console.log(`truthCheck([
  {"single": "yes"}], "single") returns: `, result); //returns true

result = truthCheck([
  {"single": ""}, 
  {"single": "double"}
], "single");
console.log(`truthCheck([
  {"single": ""}, 
  {"single": "double"}
], "single") returns: `, result); //returns false due to empty "" in first object

result = truthCheck([
  {"single": "double"}, 
  {"single": undefined}
], "single");
console.log(`truthCheck([
  {"single": "double"}, 
  {"single": undefined}
], "single") returns: `, result);  //returns false due to second object being undefined

result = truthCheck([
  {"single": "double"}, 
  {"single": NaN}
], "single");
console.log(`truthCheck([
  {"single": "double"}, 
  {"single": NaN}
], "single") returns: `, result);  //returns false due to second object being Not a Number (NaN)