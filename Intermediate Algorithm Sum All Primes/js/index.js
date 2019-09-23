/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having 
only two divisors, one and itself. For example, 2 is a prime number 
because it's only divisible by one and two.

The provided number may not be a prime.*/

const sumPrimes = (num) => {
  let i;

  // helper function to check if number is a prime
  const returnPrime = (number) => {
    for (i=2; i<number; i++) {
      //console.log(number);
      if (number % i === 0) { //use modulo to see if remainder
        return false; //return false if divisible by any number so not prime
      }
    }
    return true; //return true if not divisable - so is prime
  }

  if (num === 1){
    return 0; //remove 1 from sum as not prime
  }
  
  // add number if it is a prime then rerun function recursively 
  return returnPrime(num) ? num + sumPrimes(num-1) : sumPrimes(num-1);
}

//check solution:
let result;
result = sumPrimes(10);
console.log('sumPrimes(10) returns: ', result);
result = sumPrimes(977);
console.log('sumPrimes(977) returns: ', result);