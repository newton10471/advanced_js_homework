$.fn.blink = function(interval) {
	blinkText = this;
	setInterval(function () {
	  blinkText.toggle(function() {
      blinkText.css("display", "hidden");
    }, function () {
      blinkText.css("display", "inline");
    });
	}, interval);
}

$(".myDiv").blink(1000);
