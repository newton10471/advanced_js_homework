function countdown(seconds) {
  var timeleft = seconds;
  var intervalID = window.setInterval(function() {
    console.log(timeleft);  
    timeleft--;
    if (timeleft < 0) clearInterval(intervalID);
  }, seconds * 100);
}

countdown(9);
