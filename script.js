$(document).ready(function() {
    var URL = "https://static.codehs.com/api/12345/movies/all";

    $("#search").click(function() {
        // Get user input
        var movie = $("#movie").val();
        findReleaseDate(movie);
    });

    function findReleaseDate(movie) {
        $.getJSON(URL, function(data) {
            if (data.hasOwnProperty(movieYear)) {
                var movieYear = data[movie].year;
                $("#release-date").text("Release Date: " + movieYear);
            } 
            
        });
    }
});
