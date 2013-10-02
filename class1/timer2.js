function countdown(seconds) {
  timeleft = seconds;
  intervalID = window.setInterval(function() {
    console.log(timeleft);  
    timeleft--;
    if (timeleft < 0) clearInterval(intervalID);
  }, seconds * 100);
}

countdown(9);
