/*Uses jQuery libary methods ($) to get JSON-formatted text from an API weblink then displays only quote (as #quote) & author (as #author) from the results in html format.  */
function getQuote () {
 $.getJSON( "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      function(apiResult) {
        $('#quote').html(apiResult[0].content);
        $('#author').html("- " + apiResult[0].title);
      });
}
/*jQuery library methods to run a function to get a new quote when the #quote-button is pressed. */
$(document).ready(function() {
  getQuote();
  $.ajaxSetup({cache: false}); /*sets default value for future ajax requests. Cache indicates if browser should cache page (boolean: default True) */
  $("#quote-button").on("click", function() {
    getQuote();
  });
  /*When #twitter-button pressed, opwn window at address shown and display #quote and #author*/
  $("#twitter-button").on("click", function(){
  window.open("https://twitter.com/intent/tweet?hashtags=quote&text=" + 
              '"' + 
              $("#quote").text() + '" ' + 
              $("#author").text());
  });
});