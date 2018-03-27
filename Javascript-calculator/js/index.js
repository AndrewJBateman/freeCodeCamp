var mem = document.getElementById("calcDisplay");

function addToDisplay(val){
  /*var operators = ["/", "*", "-", "+"];
  var lastChar = mem.value.slice(-1);
  console.log(lastChar);
  if(operators.indexOf(lastChar) == -1) {
    mem.value+=val;
  }*/
  
  /*Use the slice method to check if the last value entered is an operand then simple logic to prevent repeated decimal points or mathematical operators
  Using an array of operators to compare with input value would be more efficient but I was unable to get it to work. Future update.*/
  if (mem.value.slice(-1) == "." && val == ".") {
    mem.value = mem.value;
  }
  else if (mem.value.slice(-1) == "/" && val == "/") {
    mem.value = mem.value;
  }
  else if (mem.value.slice(-1) == "*" && val == "*") {
    mem.value = mem.value;
  }
  else if (mem.value.slice(-1) == "-" && val == "-") {
    mem.value = mem.value;
  }
  else if (mem.value.slice(-1) == "+" && val == "+") {
    mem.value = mem.value;
  }
  //If no repeated decimal points or operands then add inputted value to end of string.
  else
    mem.value+=val;
  //check if AllClear button pressed. If so clear screen.  
  if (val==="AC") {
    mem.value = "";
  }
}
//If CE button pressed then clear last value of string by slicing 1 from end of string
function clearEntry() {
  val = mem.value;
  mem.value = val.slice(0,-1);
}
//if % key pressed then calculate percent
function perCent() {
  val = mem.value;
  mem.value = (val / 100) + "%";
}
//Use eval method to calculate result of calculation. This already checks for divide by 0 and NaN. It can cope with negative numbers and has a moving decimal point. 
function output() {
  val = mem.value;
  mem.value = eval(val);
}