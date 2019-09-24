/*Algorithm challenge: Given a positive integer num, return the sum of
all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every 
additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci 
numbers less than 10 are 1, 1, 3, and 5.*/

const sumFibs = (num) => {
  let i = 1;
  let j = 2;
  let k = 0;
  let sum = 2; //start with sequence at 1,1
  while (k <= num) {
    if (k % 2 === 1) sum = sum + k; //modulo to see if k = odd number
    k = i + j;                      
    i = j;
    j = k;
  }
  return sum;
}

//check solution:
let result

/*step 1: k=0, sum=2, then k=i+j = 1+2=3, i=2, j=3
  step 2: sum=5, then k=5, i=3, j=5
  step 3: k is now greater than num so no further steps, return sum=5*/
result = sumFibs(1);
console.log('result of sumFibs(1) is:', result); //returns 2
result = sumFibs(1000);
console.log('result of sumFibs(1000) is:', result); //returns 1785
result = sumFibs(4000000);
console.log('result of sumFibs(4000000) is:', result); //returns 4613732
result = sumFibs(4);
console.log('result of sumFibs(4) is:', result); ///returns 5
result = sumFibs(75024);
console.log('result of sumFibs(75024) is:', result); //returns 60696
result = sumFibs(75025);
console.log('result of sumFibs(75025) is:', result); //returns 135721