//Client ID= 8oplrqe1dww6gvztak3cydwhi6h58g

$(document).ready(function() {
  var users = [
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
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers: {
      "Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"
    },
    success: function(data1) {
      if (data1.stream === null) {
        $("#freeCodeCampStatus").html("The Free Code Camp channel is offline");
      } else {
        $("#freeCodeCampStatus").html("The Free Code Camp channel is online");
      }
    } //end of success function
  }); //end of ajax freecodecamp function
  // Display username, logo and details of game and if they are online or not.
  for (var i = 0; i < users.length; i++) {
    $.ajax({
      type: "GET",
      url: "https://api.twitch.tv/kraken/channels/" + users[i],
      headers: {
        "Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"
      },
      success: function(data2) {
        $.getJSON(
          "https://api.twitch.tv/kraken/streams/" + data2.name + "?client_id=8oplrqe1dww6gvztak3cydwhi6h58g"
        ).done(function(data3) {
          var name = data2.display_name;
          var logo = data2.logo;
          var game = data2.game;
          var url = "https://www.twitch.tv/" + name;
          
          if (game == null) {
            game = "No title";
          }
          //If there is no logo use a Star Wars one.
          if (logo == null) {
            logo =
              "https://images.alphacoders.com/645/645081.jpg";
          }
          //display user info for all radion button selected
          
          
          if (data3.stream === null) {
            var status = "offline";
            $('#offline').click(function(){
              $("#userInfo").prepend("<div class= 'row'>" +
              "<div class= 'col-md-3'>" + "<img src= '" + logo + "'>" + "</div>" +
              "<div class= 'col-md-3'>" + game + "</div>" +
              "<div class= 'col-md-3'>" + "<a href='" + url + "' target='_blank'>" + name + "</a></div>" +
              "<div class= 'col-md-3'>" + status + "</div></div>"
              ); //end of userinfo append - note online and offline are not sorted. 
            }); //end of offline click function
                        
           } //end of if clause
           else {
             var status = "online";  
             $('#online').click(function(){
               $("#userInfo").prepend("<div class= 'row'>" +
              "<div class= 'col-md-3'>" + "<img src= '" + logo + "'>" + "</div>" +
              "<div class= 'col-md-3'>" + game + "</div>" +
              "<div class= 'col-md-3'>" + "<a href='" + url + "' target='_blank'>" + name + "</a></div>" +
              "<div class= 'col-md-3'>" + status + "</div></div>"
              ); //end of userinfo prepend
             }); //end of online click funcion
              
          } //end of else clause
          
          $('#all').click(function(){
              $("#userInfo").append("<div class= 'row'>" +
              "<div class= 'col-md-3'>" + "<img src= '" + logo + "'>" + "</div>" +
              "<div class= 'col-md-3'>" + game + "</div>" +
              "<div class= 'col-md-3'>" + "<a href='" + url + "' target='_blank'>" + name + "</a></div>" +
              "<div class= 'col-md-3'>" + status + "</div></div>"
              ); //end of userinfo append 
            }); //end of all click function
          
        }); //end of function for data3
      },
      error: function(data2) {
        //Slice out the name by removing the first 34 characters and the last character of the string
        var name = data2.responseJSON.message.slice(34, -1);
        //console.log(data2.responseJSON);
        //console.log(name);
        //a link to a new logo chosen to indicate an error
        var logo = "https://images4.alphacoders.com/997/99774.jpg";
        var status = "Code " + data2.responseJSON.status + "; " + data2.responseJSON.message;
        var game = data2.responseJSON.error;
        //append user info so it goes at the end. 
        $("#userInfo").append("<div class= 'row'>" +
            "<div class= 'col-md-3'>" + "<img src= '" + logo + "'>" + "</div>" +
            "<div class= 'col-md-3'>" + game + "</div>" +
            "<div class= 'col-md-3'>" + "<a href='" + url + "' target='_blank'>" + name + "</a></div>" +
            "<div class= 'col-md-3'>" + status + "</div></div>"
        ); //end of append user info
        
      } //end of error function
    }); //end of ajax function

    
    $("#all").click(function(){
     $(".online").show();
     $(".offline").show();
    });
    $("#online").click(function(){
     $(".online").show();
     $(".offline").hide();
    });
    $("#offline").click(function(){
     $(".online").hide();
     $(".offline").show();
    });
    
  }; //end of for loop
  
}); // end document ready function