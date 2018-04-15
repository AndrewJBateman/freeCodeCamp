/*Algorithm challenge: Make a function that looks through an array of objects 
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

function whatIsInAName(collection, source) {
  //declare variables
  var arr = [];
  var sourceKeys = Object.keys(source);
  var result;
  var i;
  //Use filter function to return only the items in collection that have the same key value pair
  arr = collection.filter(function(item){
    for(i=0; i<sourceKeys.length; i++){
      console.log(sourceKeys[i]);
      //if item has key value and it is the same as the collection value then return true
      if(item.hasOwnProperty(sourceKeys[i]) &&
         item[sourceKeys[i]] == source[sourceKeys[i]]) {
        result = true;  
       } else {
        result = false;
       }
    }
    return result;
  });
  
  return arr;
}

var result = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
console.log(result);