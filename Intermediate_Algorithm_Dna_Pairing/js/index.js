/*Algorithm challenge: The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the 
provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays 
are grouped into one encapsulating array.*/

const pairElement = (str) => {
  //create a char array with the first and second elements as pairs
  const chars = {'A':'T','T':'A','C':'G','G':'C'};
  //split the string into its individual letters then use map function to pair each element in its own array using the char array above
  return str.split('').map(item => [item, chars[item]]); 
}

//Test solution 
let result 
result = pairElement("GCG");
console.log('pairElement("GCG") returns; ', result);

result = pairElement("TTGAG");
console.log('pairElement("TTGAG") returns: ', result);

result = pairElement("CTCTA");
console.log('pairElement("CTCTA") returns: ', result);