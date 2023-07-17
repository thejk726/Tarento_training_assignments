var timer;
var minutes=0;
var seconds=0;
var milliseconds=0;
var timerDisplay=document.getElementById("timer");
var startButton=document.getElementById("start");
var pauseButton=document.getElementById("pause");
var resetButton=document.getElementById("reset");


//function to start timer
function startTimer(){
    startButton.disabled=true;
    pauseButton.disabled=false;
    resetButton.disabled=true;
    timer=setInterval(runTimer,10);
}

//function to run the timer (defines the manner the minutes,seconds and milliseconds are updated)
function runTimer(){
    milliseconds++;
    if(milliseconds===100){
        milliseconds=0;
        seconds++;
    }

    if(seconds===60){
        seconds=0;
        minutes++;
    }
    timerDisplay.textContent=formatTime(minutes)+":"+formatTime(seconds)+":"+formatTime(milliseconds);
}

//funtion to pause the timer
function pauseTimer(){
    startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled=false;
  clearInterval(timer);
}

//function to reset the timer
function resetTimer() {
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled=true;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = "00:00:00";
  }

  //function to format the time (displays the minutes,seconds and milliseconds in two digit format each Eg: 9 -> 09)
  function formatTime(time){
    return time<10?"0"+time:time;
  }

