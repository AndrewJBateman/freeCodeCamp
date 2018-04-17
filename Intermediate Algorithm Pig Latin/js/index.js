/*Algorithm challenge: Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an 
English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
  var newString = '';
  var i;
  var vowel = ["a","e","i","o","u"]; //create array of vowels
  var regex = /[aeiou]/gi; //create regex array of vowels as a global search & ignore case

  for (i = 0; i < 5; i++){ //for loop to 5 for all 5 vowels
    if (vowel[i] == str[0]){ //check if first letter of string is a vowel
      newString = str +"way"; //if so add 'way' at the end of the string
    //console.log(newString);
    //break;
    return newString;
    }
  } //end of for loop
  
  //create variable that is the index of where the first vowel occurs in the string.
  //indexOf and match functions used to compare the string with the regex variable.  
  var vowelIndex = str.indexOf(str.match(regex)[0]);
  //the new string starts with the first vowel of the original string and adds the letters
  //that were before the vowel to be after the word, then add 'ay'. 
  newString = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
  return newString; 
} //end of function

//test solution
var result = translatePigLatin("california");
console.log(result);
var result = translatePigLatin("glove");
console.log(result);
var result = translatePigLatin("paragraphs");
console.log(result);
var result = translatePigLatin("algorithm");
console.log(result);
var result = translatePigLatin("eight");
console.log(result);