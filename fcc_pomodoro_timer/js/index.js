$(document).ready(function() {
  
  // List of variables
  var 
    buttonClick = "",
    workTime = 25,
    breakTime = 5,
    timerMins = "",
    timerSecs = "",
    totalTimeSecs = "",
    timerArray = [workTime, ":", "00"],
    startCounter = "",
    resumeCounter = "",
    startBreak = "",
    statusWB = ""; //used to show work or break status
    
  // Displays to show work, break and counter variables
  $("#workDisplay").html(workTime);
  $("#breakDisplay").html(breakTime);
  $("#counter").html(timerArray);
  $("#counter").show();

  // buttons to show and hide- only start & reset buttons needed intially
  $("#pause_button").hide();
  $("#resume_button").hide();
  $("#break_button").hide();

  // function to countdown
  function startCount() {
    totalTimeSecs -= 1;//decrement total seconds by 1 second
    timerMins = Math.floor(totalTimeSecs/60);//Math.floor removes right side of dec. point
    timerSecs = totalTimeSecs - (timerMins*60);
    if (timerSecs < 10) {//put a zero in front of the number or it doesn't look right
      timerSecs = "0"+timerSecs;
    }
    timerArray = [timerMins, ":", timerSecs];
    $("#counter").html(timerArray);
    // When countdown finishes during work time, setup for breaktime
    if (totalTimeSecs === 0 && statusWB === "work") {
      clearInterval(startCounter);
      clearInterval(resumeCounter);
      timerMins = breakTime;
      timerArray = [timerMins, ":", "00"];
      $("#counter").html(timerArray);
      $("#pause_button").hide();
      $("#break_button").show();
      $("#reset_button").show();
    }
    // Whem countdown finished during break time, setup for more work 
    if (totalTimeSecs === 0 && statusWB === "break") {
      clearInterval(startBreak);
      clearInterval(resumeCounter);
      timerMins = workTime;
      timerArray = [timerMins, ":", "00"];
      $("#counter").html(timerArray);
      $("#pause_button").hide();
      $("#start_button").show();
      $("#reset_button").show();
    }
  } // end of startCount function
  
  $("button").click(function(){
    // use button id as reference for buttonClick events
    buttonClick = $(this).attr("id");
    
    // increase and decrease work time and break time
    if (buttonClick === "decrWork" && workTime > 1) {
      workTime -=1;
    }
    if (buttonClick === "incrWork") {
      workTime +=1;
    }
    if (buttonClick === "decrBreak" && breakTime > 1) {
      breakTime -=1;
    }
    if (buttonClick === "incrBreak") {
      breakTime +=1;
    }
    
    $("#workDisplay").html(workTime);
    $("#breakDisplay").html(breakTime);

    timerMins = workTime;
    timerArray[0] = timerMins;
    $("#counter").html(timerArray);
    
    // start button pressed
    if (buttonClick === "start_button") {
      timerMins = workTime;
      startCounter = setInterval(startCount, 1000); //calls startCount function every 1000mS
      totalTimeSecs = timerMins*60;
      $("#counter").show();
      $(".workbreakTimeAdjust").hide(); //no need to adjust times once countdown has started
      $("#start_button").hide();
      $("#pause_button").show();
      $("#reset_button").hide();
      statusWB = "work";
    }
    
    // pause button pressed
    if (buttonClick === "pause_button") {
      timerArray = [Math.floor(totalTimeSecs/60), ":", timerSecs];
      $("#counter").html(timerArray);
      clearInterval(startCounter); //stop counting if started
      clearInterval(resumeCounter);//stop counting if resumed
      clearInterval(startBreak);//stop counting if in breaktime
      $("#pause_button").hide();
      $("#resume_button").show();
      $("#reset_button").show(); 
    }
    // resume button pressed
    if (buttonClick === "resume_button") {
      timerArray = [Math.floor(totalTimeSecs/60), ":", timerSecs];
      $("#counter").html(timerArray);
      resumeCounter = setInterval(startCount, 1000);
      $("#pause_button").show();
      $("#resume_button").hide();
      $("#reset_button").hide();
    }
    // reset to default conditions
    if (buttonClick === "reset_button") {
      workTime = 25;
      breakTime = 5;
      timerMins = "";//set to empty string
      timerSecs = "";//set to empty string
      totalTimeSecs = "";//set to empty string
      timerArray = [workTime, ":", "00"];
      $("#counter").html(timerArray);
      startCounter = "";//set to empty string
      resumeCounter = "";//set to empty string
      startBreak = "";//set to empty string
      $("#counter").show();
      $(".workbreakTimeAdjust").show();
      $("#pause_button").hide();
      $("#resume_button").hide();
      $("#start_button").show();
      $("#break_button").hide();
      
      $("#workDisplay").html(workTime);
      $("#breakDisplay").html(breakTime);
    } 
  // break button pressed 
    if (buttonClick === "break_button") {
      timerMins = breakTime;//change variable to equal set breakTime
      $("#counter").html(breakTime + ":00");//display with 00 seconds text
      startBreak = setInterval(startCount, 1000);//call countdown function every 1000mS
      totalTimeSecs = timerMins*60;//total seconds = minutes x 60
      $("#break_button").hide();
      $("#pause_button").show();
      $("#reset_button").hide();
      statusWB = "break";
    }
      
  }); // end buttonClick event function  
  
}); // end doc ready function