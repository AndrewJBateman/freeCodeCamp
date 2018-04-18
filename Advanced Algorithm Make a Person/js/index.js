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
var Person = function(firstAndLast){
    
    //private variables first and last obtained using string split method
    //applied to array
    var first = firstAndLast.split(' ')[0]; //' 'splits words
    console.log(first);
    var last = firstAndLast.split(' ')[1]; //' 'splits words
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

//Check solution
var bob = new Person('Bob Ross');
console.log(bob.getFullName()); //returns "Bob Ross"
console.log(bob.firstName); //return 'undefined' as required
console.log(bob.lastName); //return 'undefined' as required
bob.setFirstName("Haskell");
console.log(bob.getFullName()); //return "Haskell Ross" as required
bob.setFirstName("Curry");
console.log(bob.getFullName()); //return "Curry Ross" as required
bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); //return "Haskell Curry" as required