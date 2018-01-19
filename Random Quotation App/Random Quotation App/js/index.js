/*This function gets just 1 JSON-formatted quote from an API weblink then displays only the actual quote and the author from the API results */
function getQuote () {
 $.getJSON( "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      function(apiResult) {
        $('#quote').html(apiResult[0].content);
        $('#author').html("- " + apiResult[0].title);
      });
}
$(document).ready(function() {
  getQuote();
  $.ajaxSetup({cache: false});
  $("#quote-button").on("click", function() {
    getQuote();
  });
  
  $("#twitter-button").on("click", function(){
  window.open("https://twitter.com/intent/tweet?hashtags=quote&text=" + 
              '"' + 
              $("#quote").text() + '" ' + 
              $("#author").text());
  });
});