$.fn.blink = function(interval) {
	setInterval(function blinkFunction() {
	  // do the blinking
	}, interval);
}

$.fn.greenify = function() {
  this.css( "color", "green" );
};

$(".myDiv").greenify(); 
$(".myDiv").blink(1000);
