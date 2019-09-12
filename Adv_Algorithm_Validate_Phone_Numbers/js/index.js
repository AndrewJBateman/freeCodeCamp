function telephoneCheck(str) {
  //use regex to check number format. Each capturing group explained below: 
  // expression starts with a 1 then a ) or space: /^(1\s?)?
  // then 3 digits in () or without (): (\(\d{3}\)|\d{3})
  // then a space or a -: [\s\-]?
  // then 3 digits followed by a space or -\d{3}[\s\-]?
  // then 4 digits then a $ to show end of string: \d{4}$/
  var tryout = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return tryout.test(str);
}

telephoneCheck("555-5555");