/*Algorithm challenge: Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

//array variable to use as a look up table to convert to roman numerals
var romanNumerals = [
  ["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
  ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],        // Hundreds
  ["","M","MM","MMM"]]; //Thousands
 
 //convert number to string, separate each digit and reverse the order
 var digits = num.toString().split('').reverse(); 
 // console.log(digits); //36 becomes ["6", "3"]
 var numerals = ""; //create new variable as empty string
 
  //loop from last to first decimal digit, changing the order back to largest to smallest,
  //use the romanNumerals array with indexes to convert. Use parseInt function to let through only the numbers. 
 for (var i = 0; i < digits.length; i++){
   numerals = romanNumerals[i][parseInt(digits[i])] + numerals;
   //i=0 numerals = [ones].[parseInt6 which is VI] +0
   //i=1 numerals = [tens].[parseInt3 which is XXX] + VI
   //comes to XXXVI
 } 
  
 return numerals;
}
//Example to test algorithm solution 
var result = convertToRoman(36);
console.log(result); // "XXXVI"