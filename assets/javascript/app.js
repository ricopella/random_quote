// Global Scope
let quote = "";
let author = "";

function getRandomQuote() {

    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20",
        method: "GET"
    }).done(function(response) {
        let randomNum = Math.floor(Math.random() * (20 - 0) + 0);
        quote = $(response[randomNum].content).text();
        author = response[randomNum].title;
        $("#quote").html("<p>" + quote + "</p>" + "<p class=\"author\">—  " + author + "</p>");
        $("#social").html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + quote + 'By: ' + author + '" data-size="large"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>');
        // twitter


        // facebook
        //  <i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i>
    })
};

$("#nextQuote").on("click", function() {
    getRandomQuote();
})

$(document).ready(function() {
    getRandomQuote();
});