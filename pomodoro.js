var timer = [
    ['pomodoro','25','00'],
    ['short','5','00'],
    ['long','15','00']
];

let timerDOM = document.getElementById("timer");
const startBtn = document.getElementById('btnStart');
const pauseBtn = document.getElementById('btnPause');
const resetBtn = document.getElementById('btnReset');
const pomodoro = document.getElementById('pomodoro');
const pomoStatus = document.querySelector(".pomo-status");
const shortBreakBtn = document.getElementById('short-break');
let pomodoroInput, shortBreakInput, longBreakInput;
const longBreakBtn = document.getElementById('long-break');
var startTimer, status=0;

function displayTimer(x){
    if (timer[x][1]<=9 && timer[x][2]<=9 && timer[x][2]>0){
        timerDOM.innerText="0" + timer[x][1] + ":0" + timer[x][2];
    }
    else if (timer[x][2]<=9 && timer[x][2]>0) {
        timerDOM.innerText=timer[x][1] + ":0" + timer[x][2];
    }
    else if (timer[x][1]<=9){
        timerDOM.innerText= "0" + timer[x][1] + ":" + timer[x][2];
    }
    else {
        timerDOM.innerText=timer[x][1] + ":" + timer[x][2];
    }

}

displayTimer(0);

function timerFctn(){
    if (timer[status][2] != 0){
        timer[status][2]--;
        displayTimer(status);
    }
    else if (timer[status][1] != 0 && timer[status][2] == 0){
        timer[status][2] = 59;
        timer[status][1]--;
        displayTimer(status);
    }
    else if (timer[status][1] == 0 && timer[status][2] == 0){
        alert("finis");
    }
}
function stopInterval(){
    clearInterval(startTimer);
}

startBtn.addEventListener('click',()=>{
    if (startTimer === undefined){
        startTimer = setInterval(timerFctn, 100);
    } else {
        alert("timer is running");
    }
});
pauseBtn.addEventListener('click',()=>{
    stopInterval();
    startTimer=undefined;
});

resetBtn.addEventListener("click",()=>{
    if (status == 0){
        timer[status][1]=25;
        timer[status][2]="00";
    } else if (status == 1){
        timer[status][1]=5;
        timer[status][2]="00";
    }
    else{
        timer[status][1]=15;
        timer[status][2]="00";
    }


    displayTimer(status);
    stopInterval();
    startTimer = undefined;
});

pomodoro.addEventListener("click",()=>{
    status=0;
    stopInterval();
    startTimer=undefined;
    displayTimer(status);
    pomoStatus.innerHTML = "pomodoro";
})
shortBreakBtn.addEventListener("click",()=>{
    status=1;
    stopInterval();
    startTimer=undefined;
    displayTimer(status);
    pomoStatus.innerHTML = "short break";
})
longBreakBtn.addEventListener("click",()=>{
    status=2;
    stopInterval();
    startTimer=undefined;
    displayTimer(status);
    pomoStatus.innerHTML = "long break";
})

function getValues(){
    shortBreakInput = document.getElementById("shortbreak").value;
    longBreakInput = document.getElementById("longbreak").value;
    pomodoroInput = document.getElementById("pomo").value;
}
document.querySelector("#btnTest").addEventListener("click",()=>{
    getValues();
    timer[0][1]=pomodoroInput;
    timer[0][2]="00";
    timer[1][1]=shortBreakInput;
    timer[1][2]="00";
    timer[2][1]=longBreakInput;
    timer[2][2]="00";
    displayTimer(status);
})
