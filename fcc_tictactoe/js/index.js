//declare variables and set initial values
var player = ""; //human player
var pc = ""; //computer
var arr = new Array(9); //create new array of length 9
var winner = "";

//if any of the 9 tic tac toe squares is clicked then run move function
$(".btn-primary").click(function(){
  move(this.id, "player");
});

$(document).ready(function(){
  //initial setup
  $(".btn-primary").html("").hide(); //clear buttons of X and O text and hide so they cannot be clicked
  $("#reset").hide(); //reset button not required when first starting
  $(".message").html("Choose X or O").css('color', ''); //player to choose X or O
  $(".btn-info").show(); //shows the X and O buttons
  
  //Main function - play starts when user selects X or O
  $(".btn-info").click(function(){
    player = $(this).html();
    if (player==='X') {
      $(".message").html("You are '" +player+ "'. You start - pick a square").css('color', 'black');
    }
    else {
      $(".message").html("You are '" +player+ "'. OK I start").css('color', 'black');
    }
    $(".btn-primary").html("").show();
    $(".btn-info").hide(); //hide X and O choice buttons - not needed once X or O is chosen
    $("#reset").show(); //show reset button once play has started
    //conditional ternery operator tests if player X or O with 2 expressions depending on the condition
    pc = player==='X' ? 'O' : 'X'; //pc is O if player is X, else pc is O
    if (player==='O') //if player is O then ai goes first as X always starts
      {
        ai();
      }
  }); //end function btn-info click
  
}) //end of doc ready function
  
//function reset
$("#reset").click(() => {
  for (let i=1; i<10; i++){
    document.getElementById(i).className = "btn btn-primary";
  }; //end of for loop
  $(".message").html("Choose 'X' or 'O'").css('color', '');
  $(".btn-primary").html("").hide(); //clears X or O from all 9 squares 
  $('.btn-info').show(); //show X and O choice buttons
  $("#reset").hide();
  winner = ""; //clear winner string variable
  arr = new Array(9); //recreate empty array of length 9
}); //end of function user reset

//computer takes a turn - random
const ai = () => {
  let id = Math.floor(Math.random()*9)+1;//random no 1 to 9
  //if array id already exists then run ai function again to 
  //create a new id, else run move function as ai with id created. 
  arr[id]? ai() : move(id, "ai");
}

//function move takes 2 inputs; id and turn (ie pc or player)  
const move = (id, turn) => {
  //prevents clicking on a square already used or if there is a winner already
  if (arr[id] || winner) return false;
  arr[id] = turn; //player or ai
  document.getElementById(id).className = 'btn btn-primary' + turn;
    
  if (turn == "ai"){
    $("#" +id).html(pc); //shows X or O on square
  }else{
    $("#" +id).html(player); //shows X or O on square
  }
  //ternery expression: if checkWon function returns false and it was the players 
  //turn then run ai function, else run the finishGame function.  
  !checkWon()? (turn == "player")? ai() : null : finishGame();
} //end of function move

//check if won
const checkWon = () => {
  if (
    //horizontals
    arr[1]=='ai' && arr[2]=='ai' && arr[3]=='ai' ||
    arr[4]=='ai' && arr[5]=='ai' && arr[6]=='ai' ||
    arr[7]=='ai' && arr[8]=='ai' && arr[9]=='ai' ||
    //verticals
    arr[1]=='ai' && arr[4]=='ai' && arr[7]=='ai' ||
    arr[2]=='ai' && arr[5]=='ai' && arr[8]=='ai' ||
    arr[3]=='ai' && arr[6]=='ai' && arr[9]=='ai' ||
    //diagonals
    arr[1]=='ai' && arr[5]=='ai' && arr[9]=='ai' ||
    arr[3]=='ai' && arr[5]=='ai' && arr[7]=='ai'){winner = 'ai';}
    
  else if ( 
    //horizontals
    arr[1]=='player' && arr[2]=='player' && arr[3]=='player' ||
    arr[4]=='player' && arr[5]=='player' && arr[6]=='player' ||
    arr[7]=='player' && arr[8]=='player' && arr[9]=='player' ||
    //verticals
    arr[1]=='player' && arr[4]=='player' && arr[7]=='player' ||
    arr[2]=='player' && arr[5]=='player' && arr[8]=='player' ||
    arr[3]=='player' && arr[6]=='player' && arr[9]=='player' ||
    //diagonals
    arr[1]=='player' && arr[5]=='player' && arr[9]=='player' ||
    arr[3]=='player' && arr[5]=='player' && arr[7]=='player'){winner = 'player';}
    
  else if (arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8] && arr[9])
    {winner = 'draw';} //all 9 squares filled and ai and player have not already won
  
  if (winner){
    return true;
  }
}

//function to display messages, depending on who won or if a draw
const finishGame = () => {
  if(winner == "ai"){
    $(".message").html("The computer wins - press reset to play again").css('color', 'red');
  }else if(winner == "player"){
    $(".message").html("You win - press reset to play again").css('color', 'green');
  }else{
    $(".message").html("It´s a draw - press reset to play again").css('color', 'black');
  }
}