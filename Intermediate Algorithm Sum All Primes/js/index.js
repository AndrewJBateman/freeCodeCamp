/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having 
only two divisors, one and itself. For example, 2 is a prime number 
because it's only divisible by one and two.

The provided number may not be a prime.*/

function sumPrimes(num) {
  
  function returnPrime(number) {
    for (var i=2; i<number; i++) {
      //console.log(number);
      if (number % i === 0) { //use modulo to see if remainder
        return false; //return false if divisible by any number so not prime
      } // end if
    } // end for loop
    return true; //return true if not divisable - so is prime
  } // end returnPrime function

  if (num === 1){
    return 0; //remove 1 from sum as not prime
  }
  
  if (returnPrime(num) === false) {
    return sumPrimes(num-1); //run function recursively with number minus 1. 
  }
  if (returnPrime(num) === true) {
    return num + sumPrimes(num-1); //add number if passes returnPrime function then 
  }                                //run function recursively number minus 1
} // end of function

//check solution:
var result = sumPrimes(10);
console.log(result);
//var result = sumPrimes(977);
//console.log(result);