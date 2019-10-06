let mem = document.getElementById("calcDisplay");

const addToDisplay = (val) => {
  /*Use the slice method to check if the last value entered is an operand then simple logic to prevent repeated decimal points or mathematical operators*/
  let sliced = mem.value.slice(-1);
  sliced == "." && val == "." || 
  sliced == "/" && val == "/" || 
  sliced == "*" && val == "*" || 
  sliced == "-" && val == "-" || 
  sliced == "+" && val == "+" ? 
  mem.value = mem.value : 
  mem.value+=val; 
  //check if AllClear button pressed. If so clear screen.  
  if (val==="AC") {
    mem.value = "";
  }
}
//If CE button pressed then clear last value of string by slicing 1 from end of string
const clearEntry = () => {
  val = mem.value;
  mem.value = val.slice(0,-1);
}
//if % key pressed then calculate percent
const perCent = () => {
  val = mem.value;
  mem.value = (val / 100) + "%";
}
//Use eval method to calculate result of calculation. This already checks for divide by 0 and NaN. It can cope with negative numbers and has a moving decimal point. 
const output = () => {
  val = mem.value;
  mem.value = eval(val);
}