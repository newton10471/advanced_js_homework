var timeleft; 

function echotimeleft() {
  console.log(timeleft + "\n");
}

function countdown(seconds){
  for(timeleft = seconds; timeleft > 0 ; timeleft--) {
  //echotime();
    window.setTimeout(echotimeleft(), 1000);
  }
}

countdown(10);
console.log('done');
