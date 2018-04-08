/*You are given a JSON object representing a part of your musical album collection. 
Each album has several properties and a unique id number as its key. 
Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), 
and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding 
the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.*/

// Setup. This is a variable array that will be used to test the function below. 
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

//function to update records. If no value in a property then delete that property.         
function updateRecords(id, prop, value) {
  if (!value){
    delete collection[id][prop]; //collection -id ref. -property(album, artist or tracks). 
    return collection;
  }
  //if property to be updated is not "tracks" and it has a value (ie not an empty string), 
  //update the collection variable property specified with the value.
  if (prop !== "tracks" && value){
    collection[id][prop] = value;
  }
  else {
    //if collection does not have any tracks then create an empty array & add the tracks to it.
    //if first expression returns false then it will proceed to the next line and the value will
    //be pushed to the tracks sub-array.
    if(!collection[id].hasOwnProperty("tracks")) collection[id].tracks = [];
      collection[id].tracks.push(value);
  }
  return collection;//return updated collection variable
}

// Alter values below to test your code
var output = updateRecords(2468, "tracks", "Free");
console.log(output);