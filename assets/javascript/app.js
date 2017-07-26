// Global Scope
let quote = "";
let author = "";
let bgcolors = ['#16a085', '#27ae60', '#2c3e50', '#000080', '#008080', '#9b59b6', '#00FF00', '#FF0000', "#808080", "#FFA07A", "#77B1A9", "#CD5C5C"]

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

    })
};

function randomColor() {

    var color = bgcolors[Math.floor(Math.random() * bgcolors.length)];
    console.log(color);

    $("html body").css({
        backgroundColor: color,
        color: color
    });
}

$("#nextQuote").on("click", function() {
    randomColor();
    getRandomQuote();

})

$(document).ready(function() {
    getRandomQuote();
    randomColor();
});