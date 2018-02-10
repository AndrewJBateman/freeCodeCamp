//Client ID= 8oplrqe1dww6gvztak3cydwhi6h58g

$(document).ready(function() {
  var users = [
    "veldruko",
    "ESL_SC2",
    "comster404",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "brunofin"
  ];
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers: {
      "Client-ID": "8oplrqe1dww6gvztak3cydwhi6h58g"
    },
    success: function(data1) {
      if (data1.stream === null) {
        $("#freeCodeCampStatus").html("The FreeCodeCamp channel is offline");
      } else {
        $("#freeCodeCampStatus").html("The FreeCodeCamp channel is online");
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
          
          if (data3.stream === null) {
            var status = "Offline";
            if (game == null) {
              game = "No title";
            }
          } else {
            var status = "Online";
            }
          //If there is no logo use a Star Wars one.
          if (logo == null) {
            logo =
              "https://images.alphacoders.com/645/645081.jpg";
          }
          //display data in columns. 
          $("#userInfo").append("<div class= 'row'>" +
              "<div class= 'col-md-3'>" + "<img src= '" + logo + "'>" + "</div>" +
              "<div class= 'col-md-3'>" + game + "</div>" +
              "<div class= 'col-md-3'>" + "<a href='" + url + "' target='_blank'>" + name + "</a></div>" +
              "<div class= 'col-md-3'>" + status + "</div></div>"
          );
        });
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
        $("#userInfo").append("<div class= 'row'>" +
            "<div class= 'col-md-3'>" + "<img src= '" + logo + "'>" + "</div>" +
            "<div class= 'col-md-3'>" + game + "</div>" +
            "<div class= 'col-md-3'>" + "<a href='" + url + "' target='_blank'>" + name + "</a></div>" +
            "<div class= 'col-md-3'>" + status + "</div></div>"
        );
      }
    });
    };
});