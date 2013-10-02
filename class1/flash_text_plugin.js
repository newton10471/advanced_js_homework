$.fn.blink = function(interval) {
	setInterval(function blinkFunction() {
	  // do the blinking
	}, interval);
}

$(".testclass").blink(1000);
