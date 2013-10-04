$.fn.blink = function(interval) {
	that = this;
	setInterval(function () {
	  that.toggle(function() {
      that.css("color", "white");
    }, function () {
      that.css("color", "black");
    });
	}, interval);
}

//$.fn.greenify = function() {
//  this.css( "color", "green" );
//};

// $(".myDiv").greenify(); 
$(".myDiv").blink(1000);
