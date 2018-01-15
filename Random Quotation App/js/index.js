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
  
});