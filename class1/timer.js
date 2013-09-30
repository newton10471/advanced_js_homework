var timeleft = 10; 
var intervalID;

function echotimeleft() {
  console.log(timeleft + "\n");
  timeleft--;
  if (timeleft < 0) clearInterval(intervalID);
}

function countdown(seconds){
  intervalID = window.setInterval(echotimeleft, seconds * 100);
}

countdown(10);
