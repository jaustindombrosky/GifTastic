$(document).ready(function() {

var gifDinosaurs = {
    typeDinosaurs: ["Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Stegosaurus", "Allosaurus", "Spinosaurus", "Apatosaurus", "Brachiosaurus", "Archaeopteryx", "Dilophosaurus", "Iguanodon"],
    firstPick: "",
    giphyApiUrl: "",
    giphyApiKey: "",
    renderButtons: function() {
        $("#buttonsBar").empty();
		for (var i = 0; i < this.typeDinosaurs.length; i++) {
			var a = $("<button>");
			a.addClass("buttons btn btn-danger");
			a.attr("data-name", this.typeDinosaurs[i]);
			a.text(this.typeDinosaurs[i]);
            $("#buttonsBar").append(a);
        }
        $(".buttons").on("click", function() {
            gifDinosaursObj.firstPick = $(this).attr("data-name");
            gifDinosaursObj.displayGifs();
        });
    displayGifs: function() {
        var rockToShow = this.typeDinosaurs;
		var queryURL = this.giphyApiUrl + "&q=" + tvShowToDisplay + "&limit=12&api_key=" + this.giphyApiKey;
        $.ajax({url: queryURL, method: "GET"}).done(function(response) {
            $("gifsWindow").empty();
                for (var i = 0; i < response.data.length; i++){
                    var showObject = response.data[i];
                    var showStill = response.data[i].images.fixed_height_small_still.url;
				    var showMoving = response.data[i].images.fixed_height_small.url;
				    var showRating = response.data[i].rating;
                    var showDiv = $("div class='show col-md-4'>");
                    var pOne = $("<p>").text("Rating: " + showRating);
                    showDiv.append(pOne);
                    
                }
        }
    }
$("")


    gifDinosaursObj.renderButtons();
});