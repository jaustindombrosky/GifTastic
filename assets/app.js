$(document).ready(function() {

var gifRocks = {
    rocksMinerals: ["", "", "", "", "", "", "", "", ""],
    firstPick: "",
    giphyApiUrl: ,
    giphyApiKey: ,
    renderButtons: function() {
        $("#buttonsBar").empty();
		for (var i = 0; i < this.rocksMinerals.length; i++) {
			var a = $("<button>");
			a.addClass("buttons btn btn-danger");
			a.attr("data-name", this.rocksMinerals[i]);
			a.text(this.rocksMinerals[i]);
			$("#buttonsBar").append(a);

    }
}


}