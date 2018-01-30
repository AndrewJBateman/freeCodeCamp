$(document).ready(function(){
  //when search is clicked run function
  $("#search").click(function(){
    //gets search input
    var searchTerm = $("#searchTerm").val();
    //API url search term
    var url = "https://en.wikipedia.org/w/api.php?action=query&action=query&list=search&srsearch=" +searchTerm +"&format=json&formatversion=2&callback=?";  
    
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "jsonp",
      success: function(data){
        console.log(url)
        var searchData = data.query;
        console.log(searchData);
      },
      error: function(errorMessage){
        alert("Error");
      }
    })//end of AJAX query
    
  });//end of search button click function
});//end of document ready function