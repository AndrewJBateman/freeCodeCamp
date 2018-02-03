$(document).ready(function(){
  //when search is clicked run function
  $("#search").click(function(){
    //gets search input
    var searchTerm = $("#searchTerm").val();
    //API url search term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=30&search=" +
      searchTerm + "&format=json&callback=?"
    
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "jsonp",
      success: function (data){
      console.log(url);
        
      //console.log(data[1]);//get heading
      //console.log(data[2]);//get extract
      //console.log(data[3]);//get link
        $("#output").html("");
        for (var i =0; i<data[1].length; i++) {
          $("#output").prepend("<li><a href= "+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
        }
        $("#searchTerm").val("");
      },
      error: function(errorMessage){
        console.log("Error");
      }
    })//end of success function
    
  });//end of AJAX function
  $("#searchTerm").keypress(function(e){
    if(e.which==13){
      $("#search").click();
    }
  });
});//end of document ready function