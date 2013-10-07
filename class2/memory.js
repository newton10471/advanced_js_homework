$(document).ready(function() {
    
    
    var pickcells = function(colors) {
        // for an arbitrary number of cells and colors, pick 2 of each 
        // and (randomly) populate the grid with it
        var numCells = $(".box").length;
        alert("There are " + numCells + " boxes, and " + colors.length + " colors.");
        
        
        // pick a random number 
        // if it's already populated, pick another one
        // until all 
        
    }

    var reset = function(){
        var colors = ['red', 'blue', 'green', 'yellow'];
        $(".box").each(function(){
          var r_color = Math.ceil(Math.random()*4);
          $(this).data('color', colors[r_color]);   
        });
        $('.box').text("");
        $('.box').addClass("open");
        pickcells(colors);
    }

    var checkWin = function(){
        var openList = [];
        $('.open').each(function(){
            openList.push($(this).data('color'));      
        });
        
        if (openList.length === $.unique( openList ).length){
           alert("No more matches. You win!");
        }
    }

    

    $("#reset").click(function() { 
        reset();
        //checkWin();
    });

    $(".box").click(function() {
      //$(this).toggleClass('blue');
        $('.box').each(function(){$(this).removeClass('red blue green yellow')});
        $(this).addClass($(this).data('color'));
        if( $(this).attr('id') != $('#result').data('click_id') && $(this).data('color') === $('#result').data('last_click')){
            
            alert("Match!");
            $(this).text("done");
            $(this).removeClass('open');
            var last_id = $('#result').data('click_id');
            $("#" + last_id ).text('done');
            $("#" + last_id ).removeClass('open');
            $('#result').data('last_click', null);
            checkWin();
            
            //reset();
        }
        else {
            $('#result').data('last_click', $(this).data('color'));
            $('#result').data('click_id', $(this).attr('id'));
        }
        
        var removeColor = function() {
            $(this).removeClass($(this).data('color'));
        };
        
        setInterval(removeColor.bind(this), 2000);
    });

    reset();
});