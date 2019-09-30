/*Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.*/

//Solution - function expression stored as a variable
var Person = function(firstAndLast) {
    
    //private variables first and last obtained using string split method
    //applied to array
    let first = firstAndLast.split(' ')[0]; //' 'splits words
    console.log(first);
    let last = firstAndLast.split(' ')[1]; //' 'splits words
    console.log(last);
  
    //getter functions
    this.getFirstName = function(){
      return first;
    };
    this.getLastName = function(){
      return last;
    };
    this.getFullName = function(){
      return first+ ' ' +last;
    };
  
    //setter functions - argument arg is a string
    this.setFirstName = function(arg){
      first = arg;
    };
    this.setLastName = function(arg){
      last = arg;
    };
    this.setFullName = function(arg){
      first = arg.split(' ')[0];
      last = arg.split(' ')[1];
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();

//Check solution
console.log(bob.getFullName()); //returns "Bob Ross"
console.log(bob.firstName); //returns 'undefined' as required
console.log(bob.lastName); //returns 'undefined' as required
bob.setFirstName("Haskell");
console.log(bob.getFullName()); //returns "Haskell Ross" as required
bob.setFirstName("Curry");
console.log(bob.getFullName()); //returns "Curry Ross" as required
bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); //returns "Haskell Curry" as required
console.log(Object.keys(bob).length);
console.log(Object.keys(bob));