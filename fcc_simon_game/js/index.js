//declare constants and variables
const maxCount = 20;
var btnSound = [
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", //red
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3", //blue  
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", //yellow 
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" //green 
];
var count = 0;
var color = "";
var strictMode, error, turnedOn = false;
var colors = ["red", "blue", "yellow", "green"];
playerSeq = [];
randomSeq = [];

//red button function
$("#red").mousedown(function(){
  redFlash();
  color = "red";
});
//blue button function
$("#blue").mousedown(function(){
  blueFlash();
  color = "blue";
});
//yellow button function
$("#yellow").mousedown(function(){
  yellowFlash();
  color = "yellow";
});
//green button function
$("#green").mousedown(function(){
  greenFlash();
  color = "green";
});
//strict button function
$(".strict-btn").mousedown(function(){
  //strictMode = !strictMode;
  $(".strict-btn").toggleClass("strict-selected");
});

$(".on").mousedown(function(){
  turnedOn = true;
  $(".on").hide();
  $(".off").show();
  $(".start-btn").removeClass("disabled");
  $(".strict-btn").removeClass("disabled");
});

$(".off").mousedown(function(){
  turnedOn = false;
  $(".on").show();
  $(".off").hide();
  $(".display").html("");
  $(".simon-btn").addClass("disabled");
  $(".start-btn").addClass("disabled");
  $(".strict-btn").removeClass("strict-selected");
  $(".strict-btn").addClass("disabled");
});

// jQuery detects state of readiness and nly runs once DOM ready.
$(document).ready(function(){
  $(".strict-btn").addClass("disabled");
  $(".on").show();
  $(".off").hide();
  $(".simon-btn").addClass("disabled");
  $(".display").html("");
  
  $(".start-btn").mousedown(function(){
    if (turnedOn){
      reset();
      count +=1;
      randSequence();  
    } else {
      alert("You need to press the ON button first!");
    }
  });
  
  $(".simon-btn").mousedown(function(){ //red, blue, yellow or green button pressed
    color = $(this).attr("id"); //color identified from id of button
    playerSequence();
  });

  $(".strict-btn").mousedown(function(){
    count = 0; //clear count
    randomSeq = []; //clear random sequence array
    playerSeq = []; //clear player sequence array
    strictMode = true;
    randSequence(); //start a new random sequence
    count +=1;
    $(".display").html(count);
  });
  
  //ON button 
  $(".on").mousedown(function(){
    turnedOn = true;
    if (turnedOn){
      $(".display").html("0");
    }
    else {
      $(".display").html("");
    }
  }); //end of function on-off switch  
}) //end function document ready

function reset(){ 
  strictMode = false; //reset strictmode 
  $(".strict-btn").removeClass("strict-selected");
  error = false; //reset error binary flags
  count = 0; //Reset count to 0 and empty random and player arrays. 
  randomSeq = [];
  playerSeq = [];
  $(".display").html(count);
}

function randSequence(){ //Create random sequences
  $(".simon-btn").addClass("disabled"); //prevent pressing of buttons when in random sequence
  $(".display").html(count);
  
  if(!error){
    getRandomColor();
  }
  
  if(error && strictMode){
    getRandomColor();
  }
  
  var i = 0;
  var myInterval = setInterval(function(){
    color = randomSeq[i];
    flashColor(color);
    i +=1;
    
    if(i == randomSeq.length){
      clearInterval(myInterval);
      $(".simon-btn").removeClass("disabled"); //reactivate user input buttons
    }
  }, 900);
}

function playerSequence(){ //Add player color choices to playerSeq array and check if correct.
  playerSeq.push(color); //add color to the end of the playerSeq array
  if(!checkPlayerSeq()){ //if player button choice does not match the random sequence
    
    if(strictMode){
      randomSeq = []; //clear random sequence
      playerSeq = []; //clear player sequence
      count = 1; //reset count to 1
    } //end if
    
    error = true;
    errDisplay(); //run error display function
    playerSeq = []; //clear the players sequence
    randSequence(); //run the random number function again
  }

  else if (playerSeq.length < maxCount && playerSeq.length == randomSeq.length) {
    count +=1; //increase count
    playerSeq = []; //empty user array
    error = false;
    randSequence(); //generate a new random sequence
  }
  
  if(playerSeq.length == maxCount){ //check if game won  
    gameWon();
    reset();
  } 
}

function checkPlayerSeq(){//check if player colour choice is correct, for entire player array. 
  for (var i=0; i<playerSeq.length; i++){
    
    if(playerSeq[i] != randomSeq[i]){
      return false;
    } 
  }
  return true; //function returns boolean true or false
} //end of function checkUserSeq

function errDisplay(){ //if error display "Err" for 1 second
  var timeCount = 0;
  var errCount = setInterval(function(){
    $(".display").html("Err");
    timeCount +=1;
    
    if(timeCount == 2){
      $(".display").html(count);
      clearInterval(errCount);
      playerSeq = [];
      timeCount = 0;
    } 
  }, 500); //end of function setInterval
} //end of function displayError

function gameWon(){ //if 20 correct color choices display "Won" for 2 seconds
  var timeCount = 0;
  var winDisplay = setInterval(function(){
    timeCount +=1;
    $(".display").text("Won!").css("font-size", "20px");
    flashAll(); //all colour buttons come on for 2 seconds. 
    
    if(timeCount == 4){
      clearInterval(winDisplay);
      $(".display").html("0");
      timeCount = 0;
    }
  }, 500);
}

function getRandomColor(){ //create random color & add to randomSeq array
  var randColor = colors[Math.floor(Math.random()*colors.length)]; 
  randomSeq.push(randColor);
}

function flashColor(randColor){ //Choose from 4 colour functions to flash and play audio
  switch(randColor){
    case "red": redFlash();
    break;
    case "blue": blueFlash();
    break;
    case "yellow": yellowFlash();
    break;
    case "green": greenFlash();
    break;
  }
}

function playSound(id){ //play sound for each button, based on buttonSound mp3 array
  var sound = new Audio(btnSound[id]);
  sound.play();
}
  
function redFlash(){ //red button clicked function
  playSound(0);
  $("#red").css("background", "darkred");
  setTimeout(function(){
    $("#red").css("background", "red");
  }, 500);
}

function blueFlash(){ //blue button clicked function
  playSound(1);
  $("#blue").css("background", "darkblue");
  setTimeout(function(){
    $("#blue").css("background", "blue");
  }, 500);
}
  
function yellowFlash(){ //yellow button clicked function
  playSound(2);
  $("#yellow").css("background", "#e6d47e");
  setTimeout(function(){
    $("#yellow").css("background", "yellow");
  }, 500);
}
  
function greenFlash(){ //green button clicked function
  playSound(3);
  $("#green").css("background", "darkgreen");
  setTimeout(function(){
    $("#green").css("background", "green");
  }, 500);
}
  
function flashAll(){ //function to flash all lights in brighter colors once for 2 seconds
  $("#red").css("background", "#FF355E");
  $("#blue").css("background", "#50BFE6");
  $("#green").css("background", "#66FF66");
  $("#yellow").css("background", "#FFAA1D");
  setTimeout(function(){
    $("#red").css("background", "red");
    $("#blue").css("background", "blue");
    $("#green").css("background", "green");
    $("#yellow").css("background", "yellow");
  }, 2000);
}