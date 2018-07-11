$(document).ready(function () {
    var dinosaur = ["Tyrannosaurus", "Triceratops", "Velociraptor", "Stegosaurus", "Allosaurus", "Spinosaurus", "Brachiosaurus", "Diplodocus", "Anklyosaurus"];

    function makeButtons() {
        $("#buttonDiv").empty();
        for (var i = 0; i < dinosaur.length; i++) {
            var dinosaurButton = $("<button>");
            dinosaurButton.addClass("dinosaur");
            dinosaurButton.addClass("btn btn-primary btn-lg");
            dinosaurButton.attr("data-name", dinosaur[i]);
            dinosaurButton.text(dinosaur[i]);
            $("#buttonDiv").append(dinosaurButton);

        }
    }


    $("#addDinosaur").on("click", function () {
        event.preventDefault();
        var newDinosaur = $("#input").val().trim();
        console.log(newDinosaur);
        dinosaur.push(newDinosaur);
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
        $(".dinosaur").on("click", function () {
            var dinosaur = $(this).attr("data-name");
            console.log(dinosaur);
            getGif();
            function getGif() {
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dinosaur + "&api_key=4rSvlLwWpKB05KtbbOtyVH1eI47V0UxD&limit=5";

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