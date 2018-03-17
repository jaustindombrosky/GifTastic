$(document).ready(function () {
    var sports = ["Tyrannosaurus", "Triceratops", "Velociraptor", "Stegosaurus", "Allosaurus", "Spinosaurus", "Brachiosaurus", "Diplodocus", "Anklyosaurus"];

    function makeButtons() {
        $("#buttonDiv").empty();
        for (var i = 0; i < sports.length; i++) {
            var sportsButton = $("<button>");
            sportsButton.addClass("sport");
            sportsButton.addClass("btn btn-primary btn-lg");
            sportsButton.attr("data-name", sports[i]);
            sportsButton.text(sports[i]);
            $("#buttonDiv").append(sportsButton);

        }
    }


    $("#addSport").on("click", function () {
        event.preventDefault();
        var newSport = $("#input").val().trim();
        console.log(newSport);
        sports.push(newSport);
        makeButtons();
        gifs();

    });


    function remove() {
        $("#remove").on("click", function () {
            makeButtons();
        });
    }


    makeButtons();
    gifs();
    remove();

    function gifs() {
        $(".sport").on("click", function () {
            var sport = $(this).attr("data-name");
            console.log(sport);
            getGif();
            function getGif() {
                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=4rSvlLwWpKB05KtbbOtyVH1eI47V0UxD&limit=5";

                $.ajax({

                    url: queryURL,

                    method: 'GET'

                })

                    .done(function (response) {
                        $("#gifs").empty();
                        var results = response.data;

                        for (var i = 0; i < results.length; i++) {
                            var newDiv = $("<div>");
                            newDiv.addClass("newDiv");



                            var image = $("<img>");
                            image.attr("src", results[i].images.fixed_height_small_still.url);
                            image.attr("data-still", results[i].images.fixed_height_small_still.url);
                            image.attr("data-animate", results[i].images.fixed_height_small.url);
                            image.attr("data-state", "still");
                            image.addClass("image");
                            newDiv.append(image);

                            var rating = $("<p>").text("Rating: " + results[i].rating);
                            newDiv.append(rating);

                            $("#gifs").prepend(newDiv);
                        }
                    });
            }
        });
    }

    $(document).on("click", ".image", function () {
        var state = $(this).attr("data-state");
        if (state == "still") {
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
    });
});