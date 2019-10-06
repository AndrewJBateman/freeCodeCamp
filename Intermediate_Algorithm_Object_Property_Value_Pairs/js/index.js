/*This challenge is called 'WHerefore art thou' - it is too complicated to understand the question
Algorithm challenge: Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that have matching property 
and value pairs (second argument). Each property and value pair of the source 
object has to be present in the object from the collection if it is to be 
included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and 
the second argument is { last: "Capulet" }, then you must return the third 
object from the array (the first argument), because it contains the property 
and its value, that was passed on as the second argument.
*/

const whatIsInAName = (collection, source) => {
  let arr = [];
  let sourceKeys = Object.keys(source);
  let result;
  let i;
  //Use filter function to return only the items in collection that have the same key value pair
  arr = collection.filter((item) => {
    for(i=0; i<sourceKeys.length; i++){
      // console.log('sourcekeys: ', sourceKeys[i]);
      //if item has key value and it is the same as the collection value then return true
      if(item.hasOwnProperty(sourceKeys[i]) && item[sourceKeys[i]] == source[sourceKeys[i]]) {
        result = true;  
       } else {
        result = false;
       }
    }
    return result;
  });
  return arr;
}

// test restults
result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log('whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) returns: ', result);

result = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
console.log('whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) returns: ', result);

result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
console.log('whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) returns: ', result);

result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
console.log('whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) returns: ', result);

result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
console.log('whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) returns: ', result);

result = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
console.log('whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) returns: ', result);