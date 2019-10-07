/*Algorithm challenge: Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an 
English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.*/

const translatePigLatin = (str) => {
  let newString = '';
  let i;
  const vowel = ["a","e","i","o","u"]; //create array of vowels
  const regex = /[aeiou]/gi; //create regex array of vowels as a global search & ignore case

  for (i = 0; i < 5; i++){ //for loop to 5 for all 5 vowels
    if (vowel[i] == str[0]){ //check if first letter of string is a vowel
      newString = str +"way"; //if so add 'way' at the end of the string
    return newString;
    }
  }
  
  //create variable that is the index of where the first vowel occurs in the string.
  //indexOf and match functions used to compare the string with the regex variable.  
  const vowelIndex = str.indexOf(str.match(regex)[0]);
  console.log('vowelIndex: ', vowelIndex);
  //the new string starts with the first vowel of the original string and adds the letters
  //that were before the vowel to be after the word, then add 'ay'. 
  newString = str.substring(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
  return newString; 
} //end of function

//test solution
let result
result = translatePigLatin("california");
console.log('translatePigLatin("california" returns: )', result);

result = translatePigLatin("glove");
console.log('translatePigLatin("glove" returns: )', result);

result = translatePigLatin("paragraphs");
console.log('translatePigLatin("paragraphs" returns: )', result);

result = translatePigLatin("algorithm");
console.log('translatePigLatin("algorithm") returns: ' ,result);

result = translatePigLatin("eight");
console.log('translatePigLatin("eight") returns: ', result);