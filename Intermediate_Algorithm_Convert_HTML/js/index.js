/*Challlenge: 
Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.*/

const convertHTML = (str) => str
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");

let result;
result = convertHTML("Dolce & Gabbana");
console.log('convertHTML("Dolce & Gabbana") returns: ', result);

result = convertHTML("Hamburgers < Pizza < Tacos");
console.log('convertHTML("Hamburgers < Pizza < Tacos") returns: ', result);

result = convertHTML("Sixty > twelve");
console.log('convertHTML("Hamburgers < Pizza < Tacos") returns: ', result);

result = convertHTML('Stuff in "quotation marks"');
console.log(`convertHTML('Stuff in "quotation marks"') returns: `, result);

result = convertHTML("Schindler's List");
console.log(`convertHTML(Schindler's List) returns: `, result);

result = convertHTML("<>");
console.log('convertHTML("<>") returns: ', result);

result = convertHTML("abc");
console.log('convertHTML("abc") returns: ', result);