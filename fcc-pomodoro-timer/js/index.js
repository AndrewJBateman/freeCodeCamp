var workTime = document.getElementById("workDisplay");
var breakTime = document.getElementById("breakDisplay");
var workMinutesLeft = document.getElementsById("minutesLeft");
var workCount = 25;
var breakCount = 5;

function start(){
  var counter = setInterval(timer,1000);
  $("#workCount").html(workCount);
  count *= 60;
  
  function timer(){
    
  } //end timer function
}; //end start function

/*Decrement work time display by 1 minute each time 
-button is pressed as long as display shows 0 or greater.*/ 
function decreaseWorkDisplay(val){
  if (workTime.value >=1){
    workTime.value --;
  }
  let workCount = workTime.value;
  console.log(workCount);
}
/*Increment work time display by 1 minute each time
+button is pressed.
Maximum worktime chosen as 12 hours (based on a 12-hour shift) = 720 minutes*/
function increaseWorkDisplay(val){
  if (workTime.value <=720){
    workTime.value ++;
  }
  let workCount = workTime.value;
  console.log(workCount);
}

function countDown(workTime){
  minutesLeft = workTime.value;
}
/*Decrement break time display by 1 minute each time 
-button is pressed as long as display shows 0 or greater.*/
function decreaseBreakDisplay(val){
  if (breakTime.value >=1){
    breakTime.value --;
  }
  let breakCount = breakTime.value;
  console.log(breakCount);
}

/*Increment break time display by 1 minute each time
+button is pressed.
Maximum worktime chosen as 4 hours = 120 minutes*/
function increaseBreakDisplay(val){
  if (breakTime.value <=240){
    breakTime.value ++;
  }
  let breakCount = breakTime.value;
  console.log(breakCount);
}

function resetWorkDisplay(){
  workTime.value = "25";
  let workCount = "25";
  console.log(workCount);
}

function resetBreakDisplay(){
  breakTime.value = "5";
  let breakCount = "5";
  console.log(breakCount);
}


function showWorkMinutesLeft(){
 
}