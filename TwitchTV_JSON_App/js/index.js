$(document).ready(function() {
  var ClientID= "8oplrqe1dww6gvztak3cydwhi6h58g";
  var result = "";
  var userNames = [
    'freecodecamp', 'storbeck', 'terakilobyte', 'beohoff', 'RobotCaleb',
    'thomasballinger', 'noobs2ninjas', 'habathcx', 'riotgames', 'starladder1',
    'beyondthesummit', 'tsm_theoddone', 'Tsm_dyrus', 'esl_csgo', 'garenatw',
    'HiRezTV', 'smitegame', 'Nightblue3', 'nl_kripp', 'imaqtpie', 'esl_lol',
    'asiagodtonegg3be0', 'destructoid', 'sodapoppin', 'OGNGlobal', 'ongamenet',
    'joindotared', 'faceittv', 'taketv', 'versuta','Voyboy',
    'wingsofdeath', 'towelliee', 'TrumpSC', 'leveluplive', 'twitch', 'itshafu',
    'dotastarladder_en', 'riotgamesturkish', 'twitchplayspokemon',
    'aces_tv', 'gamespot', 'sc2proleague', 'SirhcEz', 'totalbiscuit', 'mlgsc2',
    'scarra', 'RocketBeansTV', 'lethalfrag', 'dendi', 'wcs_america', 'mlglol',
    'defrancogames', 'shadbasemurdertv', 'yogscast', 'Imt_wildturtle', 'magic',
    'streamerhouse', 'dhingameclient', 'wcs_europe', 'sing_sing', 'roomonfire',
    'onemoregametv', 'dreamleague', 'syndicate', 'saintvicious', 'brunofin','comster404'
  ];
  var errorLogo = "https://images4.alphacoders.com/997/99774.jpg"; //a link to a new logo chosen to indicate an error
  
  //ajax function to show status of free code camp stream, with link to the site.  
  $.ajax({
    type: "GET",
    // url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    url: "https://api.twitch.tv/helix/streams",
    headers: {"Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"},
    dataType: "json",
    success: function(freeccstatus) { 
      if (freeccstatus.stream === null) {
        $("#freeCodeCampStatus").html("The Free Code Camp channel is offline");
      } else {
        $("#freeCodeCampStatus").html("The Free Code Camp channel is online");
      } //end else
       
      // function to get data for all users
      var getData = function(user) {
        var getStatus = function() {
          //main ajax function to get streams for usernames
          $.ajax({
            url: "https://api.twitch.tv/helix/streams" + user,
            headers: {"Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"},
            dataType: "json",
            success: function (data) {
              if (!data.stream) {
                //user offline - use ajax function to get data
                $.ajax({
                  url: "https://api.twitch.tv/kraken/channels/" + user,
                  headers: {"Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"},
                  dataType: "json",
                  statusCode: {
                    404: function () {
                      var logo = errorLogo;
                      $(".noaccount").prepend("<div class = 'row'>" + 
                      "<div class = 'col-sm-4'>" + "<img src ='" + logo + "'>" + "</div>" + 
                      "<div class = 'col-sm-4'>" + user + "</div>" + 
                      "<div class = 'col-sm-4'>" + "non-existant or closed account" + "</div></div>").css("color", "red");
                    } //end 404 function
                  }, //end statusCode function
                  success: function (data) {
                    var logo = data.logo;
                    //if user offline
                    if (logo === null) {
                      logo = errorLogo;
                    } //end if statement   
                    $(".offline").prepend("<div class = 'row'>" + 
                    "<div class = 'col-sm-4'>" + "<img src = '" + logo + "'>" + "</div>" + 
                    "<div class = 'col-sm-4'>" + user + "</div>" + 
                    "<div class = 'col-sm-4'>" + "is offline" + "</div></div>").css("color", "#006666");                                    
                  }, //end success function
                }); //end of ajax function for user offline
              } //end if no data function
              //user online - extract json user data
              else {
                if (data.stream) {
                  var name = data.stream.channel.display_name;
                  var url = "https://www.twitch.tv/" + name;
                  var logo = data.stream.channel.logo;
                  var stream = data.stream.game;
                  var status = data.stream.channel.status;
                  $(".online").prepend("<div class = 'row'>" + 
                  "<div class = 'col-sm-2'>" + "<img src = '" + logo + "'>" + "</div>" + 
                  "<div class = 'col-sm-3'>" + "<a href ='" + url + "' target='_blank'>" + name + "</a></div>" + 
                  "<div class = 'col-sm-7'>" + status + "</div></div>").css("color", "#009900");
                }
              } //end else

            } //end success data function
          }); //end main ajax function
          
        } //end var function get status
        getStatus();
      }; //end var function get data
    
      for (i = 0; i < userNames.length; i++) {
         getData(userNames[i]);
      }; //end for loop
      
  //search function
  $("#submit").click(function(e){
    e.preventDefault();
    $(".searchResultError, .searchResultOffline, .searchResultOnline").empty();    
    var userInput = $(".search-input").val().toUpperCase();
    for(var i=0; i<userNames.length; i++){
      if (userNames[i].toUpperCase().indexOf(userInput)>-1){
         result = userNames[i];
          //ajax function just for search result        
          $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/helix/streams" + result,
            headers: {"Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"},
            dataType: "json",
            success: function (data) {
              if (!data.stream) {
                //user offline - use ajax function to get data
                $.ajax({
                  url: "https://api.twitch.tv/kraken/channels/" + result,
                  headers: {"Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"},
                  dataType: "json",
                  statusCode: {
                    404: function (xhr) {
                      var logo = errorLogo;
                       //status = data.message for error code;
                      $(".searchResultError").prepend("<div class = 'row'>" + 
                      "<div class = 'col-sm-4'>" + "<img src ='" + logo + "'>" + "</div>" + 
                      "<div class = 'col-sm-4'>" + result + "</div>" + 
                      "<div class = 'col-sm-4'>" + "non-existant or closed account" + "</div></div>").css("color", "red");
                    } //end 404 function
                  }, //end statusCode function
                  success: function (data) {
                    var logo = data.logo;
                    //if user offline
                    if (logo === null) {
                      logo = errorLogo;
                    } //end if statement   
                    //status for result of search offline
                    $(".searchResultOffline").prepend("<div class = 'row'>" + 
                    "<div class = 'col-sm-4'>" + "<img src = '" + logo + "'>" + "</div>" + 
                    "<div class = 'col-sm-4'>" + result + "</div>" + 
                    "<div class = 'col-sm-4'>" + "is offline" + "</div></div>").css("color", "#006666");
                                 
                  }, //end success function
                }); //end of ajax function for user offline
              } //end if no data function
              //user online - extract json user data
              else {
                if (data.stream) {
                  var name = data.stream.channel.display_name;
                  var url = "https://www.twitch.tv/" + name;
                  var logo = data.stream.channel.logo;
                  var stream = data.stream.game;
                  var status = data.stream.channel.status;
                  $(".searchResultOnline").prepend("<div class = 'row'>" + 
                  "<div class = 'col-sm-2'>" + "<img src = '" + logo + "'>" + "</div>" + 
                  "<div class = 'col-sm-3'>" + "<a href ='" + url + "' target='_blank'>" + name + "</a></div>" + 
                  "<div class = 'col-sm-7'>" + status + "</div></div>").css("color", "#009900");
                } //end if for online data stream
              } //end else
            } //end success data function
          }); //end ajax function 
      } //end if
    } //end for
  }); //end search function
      
  //show hide buttons
  $("#all").click(function(){
   $(".online").show(1000);
   $(".offline").show(1000);
   $(".noaccount").show(1000);
   $(".searchResultError, .searchResultOffline, .searchResultOnline").hide(1000);
  });
  $("#displayOnline").click(function(){
   $(".online").show(1000);
   $(".offline").hide(1000);
   $(".noaccount").hide(1000);
   //$(".searchResult").hide(1000);
   $(".searchResultError, .searchResultOffline, .searchResultOnline").hide(1000);
  });
  $("#displayOffline").click(function(){
   $(".online").hide(1000);
   $(".offline").show(1000);
   $(".noaccount").hide(1000);
   $(".searchResultError, .searchResultOffline, .searchResultOnline").hide(1000);
  });
  $("#submit").click(function(e){
   $(".online").hide(1000);
   $(".offline").hide(1000);
   $(".noaccount").hide(1000);
   $(".searchResultError, .searchResultOffline, .searchResultOnline").show(1000);
   });
  //search user array function 
   } //end success function freecodecamp
   }) //end success function search function    
  } //end first ajax function
); // end document ready function