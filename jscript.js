$(document).ready(function() {

	for (var x = 0; x < 16; x++) {
    	for (var y = 0; y < 16; y++) {
      	var unit = $("<div class='grid'></div> ");
				$(".container").append(unit);
	      	}
      	$(".container").append("<br>");
    		}

    $(".grid").hover(function() {
		$(this).css("background-color", "white");
			}, function() {
		$(this).css("background-color", "white");
	});

});

