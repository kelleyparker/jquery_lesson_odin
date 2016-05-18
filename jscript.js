

$(document).ready(function() {

	var numSide = 16;
	for (var x = 0; x < numSide; x++) {
				var breakLine = $("<br>");
				$(".container").append(breakLine);
		    		for (var y = 0; y < numSide; y++) {
		      		var unit = $("<div class='grid'></div> ");
					$(".container").append(unit);
			     }
		     
		    $(".grid").hover(function() {
				$(this).css("background-color", "red");
					}, function() {
				$(this).css("background-color", "white");
			});

		    $(".buttonClear").hover(function() {
		    	$(this).css("background-color","green");
		    }, function () {
		    	$(this).css("background-color", "lightgrey");
		    });

		}

	$(".buttonClear").click(function(){
		var numSide = prompt("How many squares per side do you want for your next grid?");

		if (numSide > 65) {
			var numSide = prompt("Too high, pick a lower number that's greater than 0");
		}

		if (numSide < 0) {

			var numSide = prompt("Too low, pick a lower number that's lesser than 31");
		}

		$(".grid").remove();
		$("br").remove();

		for (var x = 0; x < numSide; x++) {
				var breakLine = $("<br>");
				$(".container").append(breakLine);
		    		for (var y = 0; y < numSide; y++) {
		      		var unit = $("<div class='grid'></div> ");
					$(".container").append(unit);
			     }
			}

		 $(".grid").hover(function() {
				$(this).css("background-color", "red");
					}, function() {
				$(this).css("background-color", "white");
			});

		    $(".buttonClear").hover(function() {
		    	$(this).css("background-color","green");
		    }, function () {
		    	$(this).css("background-color", "lightgrey");
		    });			

	});


});

