var timeleft = 10; 

function echotimeleft() {
  console.log(timeleft + "\n");
  timeleft--;
}

function countdown(seconds){
  window.setInterval(echotimeleft, 1000);
  //for(timeleft = seconds; timeleft > 0 ; timeleft--) {
  //echotime();
  //  window.setTimeout(echotimeleft(), 1000);
  //}
}

countdown(10);
console.log('done');
