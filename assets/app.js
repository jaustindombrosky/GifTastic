$(document).ready(function () {

    var gifDinosaurs = {
        typeDinosaurs: ["Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Stegosaurus", "Allosaurus", "Spinosaurus", "Apatosaurus", "Brachiosaurus", "Archaeopteryx", "Dilophosaurus", "Iguanodon"],
        firstPick: "",
        giphyApiUrl: "",
        giphyApiKey: "",
        renderButtons: function () {
            $("#buttonsBar").empty();
            for (var i = 0; i < this.typeDinosaurs.length; i++) {
                var a = $("<button>");
                a.addClass("buttons btn btn-danger");
                a.attr("data-name", this.typeDinosaurs[i]);
                a.text(this.typeDinosaurs[i]);
                $("#buttonsBar").append(a);
            }
            $(".buttons").on("click", function () {
                gifDinosaurs.firstPick = $(this).attr("data-name");
                gifDinosaurs.displayGifs();
            });
            displayGifs: function() {
                var rockToShow = this.typeDinosaurs;
                var queryURL = this.giphyApiUrl + "&q=" + tvShowToDisplay + "&limit=12&api_key=" + this.giphyApiKey;
                $.ajax({ url: queryURL, method: "GET" }).done(function (response) {
                    $("gifsDisplay").empty();
                    for (var i = 0; i < response.data.length; i++) {
                        var showObject = response.data[i];
                        var showStill = response.data[i].images.fixed_height_small_still.url;
                        var showMoving = response.data[i].images.fixed_height_small.url;
                        var showRating = response.data[i].rating;
                        var showDiv = $("div class='show col-md-4'>");
                        var pOne = $("<p>").text("Rating: " + showRating);
                        showDiv.append(pOne);
                        var image = $("<img>").attr("src", showStill);
                        image.addClass("showImage");
                        image.attr("data-shot", showShot);
                        image.attr("data-moving", showMoving);
                        showDiv.append(image);
                        $("#gifsDisplay".append(showDiv);
                    }
                    $(".showImage").on("click", function () {
                        if ($(this).attr("src") == $(this).attr("data-still")) {
                            $(this).attr("src", $(this).attr("data-moving"));
                        } else if ($(this).attr("src") == $(this).attr("data-moving")) {
                            $(this).attr("src", $(this).attr("data-still"));
                        }
                    });

                });
            }
        };
        $("addDinosaur").on("click"), function() {
            gifDinosaurs.userInput = $("#putDinosaurHere").val().trim();
            if (gifDinosaurs.userInput != "") {
                gifDinosaurs.typeDinosaurs.unshift(gifDinosaurs.userInput);
                gifDinosaurs.renderButtons();

            }

            $("input#putDinosaurHere").val("");
            return false;

        });

gifDinosaurs.renderButtons();
});