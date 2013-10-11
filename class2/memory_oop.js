	var Board = function() {
	
		this.initialize = function() {
			$("#reset").click(function() { 
    		this.reset();
  		});
		};

		this.reset = function(){
    	var colors = ['red', 'blue', 'green', 'yellow'];
    	$(".box").each(function(){
    	  var r_color = Math.ceil(Math.random()*4);
     	  $(this).data('color', colors[r_color]);   
    	});
    	$('.box').text("");
    	$('.box').addClass("open");
  	};

  	this.checkIfWon = function(){
    	var openList = [];
    	$('.open').each(function(){
      	openList.push($(this).data('color'));      
    	});
        
    	if (openList.length === $.unique(openList).length) {
      	alert("No more matches. You win!");
    	};
  	};

	};

	var Box = function(board) {
		this.initialize = function() {

			// set up click handler for .box class in the html
			$(".box").click(function() {
				// clear all boxes and reset their color
    		$('.box').each(function(){$(this).removeClass('red blue green yellow')});
    		$(this).addClass($(this).data('color'));
    		if( $(this).attr('id') != $('#result').data('click_id') && $(this).data('color') === $('#result').data('last_click')) {
      		alert("Match!");
      		$(this).text("done");
      		$(this).removeClass('open');
      		var last_id = $('#result').data('click_id');
      		$("#" + last_id).text('done');
      		$("#" + last_id).removeClass('open');
      		$('#result').data('last_click', null);
      		board.checkIfWon();
    		}
    		else {
      		$('#result').data('last_click', $(this).data('color'));
      		$('#result').data('click_id', $(this).attr('id'));
    		};
        
    		var removeColor = function() {
      		$(this).removeClass($(this).data('color'));
    		};
        
    		setInterval(removeColor.bind(this), 2000);
  		});
		};
	};

$(document).ready(function() {
	var myBoard = new Board();
	var myBox = new Box(myBoard);
	myBoard.initialize();
	myBox.initialize();
  // board.reset();
});
