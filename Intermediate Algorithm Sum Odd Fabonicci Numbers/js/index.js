/*Algorithm challenge: Given a positive integer num, return the sum of
all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every 
additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci 
numbers less than 10 are 1, 1, 3, and 5.*/

function sumFibs(num) {
  var i = 1;
  var j = 2;
  var k = 0;
  var sum = 2; //start with sequence at 1,1
  while (k <= num) {
    if (k % 2 === 1) sum = sum + k; //modulo to see if k = odd number
    k = i + j;                      
    i = j;
    j = k;
  }
  return sum;
}

//check solution:
var result = sumFibs(4);
console.log(result); ///returns 5
/*step 1: k=0, sum=2, then k=i+j = 1+2=3, i=2, j=3
  step 2: sum=5, then k=5, i=3, j=5
  step 3: k is now greater than num so no further steps, return sum=5*/
var result = sumFibs(1);
console.log(result); //returns 2
var result = sumFibs(1000);
console.log(result); //returns 1785
var result = sumFibs(4000000);
console.log(result); //returns 4613732
var result = sumFibs(75024);
console.log(result); //returns 60696
var result = sumFibs(75025);
console.log(result); //returns 135721