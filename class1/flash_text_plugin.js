$.fn.blink = function(interval) {
	that = this;
	setInterval(function () {
	  that.toggle(function() {
      that.css("visibility", "hidden");
    }, function () {
      that.css("visibility", "visible");
    });
	}, interval);
}

//$.fn.greenify = function() {
//  this.css( "color", "green" );
//};

// $(".myDiv").greenify(); 
$(".myDiv").blink(1000);
