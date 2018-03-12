$(document).ready(function() {

var gifRocks = {
    rocksMinerals: ["", "", "", "", "", "", "", "", ""],
    firstPick: "",
    giphyApiUrl: "",
    giphyApiKey: "",
    renderButtons: function() {
        $("#buttonsBar").empty();
		for (var i = 0; i < this.rocksMinerals.length; i++) {
			var a = $("<button>");
			a.addClass("buttons btn btn-danger");
			a.attr("data-name", this.rocksMinerals[i]);
			a.text(this.rocksMinerals[i]);
            $("#buttonsBar").append(a);
        }
        $(".buttons").on("click", function() {
            gifRocksObj.firstPick = $(this).attr("data-name");
            gifRocksObj.displayGifs();
        });
    displayGifs: function() {
        var rockToShow = this.rocksMinerals;
		var queryURL = this.giphyApiUrl + "&q=" + tvShowToDisplay + "&limit=12&api_key=" + this.giphyApiKey;

    }
$("")


    gifRocksObj.renderButtons();
});