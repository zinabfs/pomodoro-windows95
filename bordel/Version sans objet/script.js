const startBtn = document.getElementById('btnStart');
const pauseBtn = document.getElementById('btnPause');
const resetBtn = document.getElementById('btnReset');
const pomodoro = document.getElementById('pomodoro');
const shortBreakBtn = document.getElementById('short-break');
const longBreakBtn = document.getElementById('long-break');
let timerDOM = document.getElementById("timer");
let timeLeft = timerDOM.innerText.split(":");

let minutes = timeLeft[0];
let seconds = timeLeft[1];
let pomodoroInput, shortBreakInput, longBreakInput;

var timerObj = {
    pomodoro:[25,0],
    shortBreak:[5,0],
    longBreak:[15,0]
}


document.querySelector("#btnTest").addEventListener("click",()=>{
    getValues();
    console.log(pomodoroInput,shortBreakInput, longBreakInput)
    timerDOM.innerText=pomodoroInput + ":00";
})

function getValues(){
    shortBreakInput = document.getElementById("shortbreak").value;
    longBreakInput = document.getElementById("longbreak").value;
    pomodoroInput = document.getElementById("pomo").value;
}

function currentTimer(){

}

var startTimer;
let status='pomodoro';

// function timer(){
//     if (seconds != 0){
//         seconds--;
//         writeTimer();
//     }//ici
//     else if(minutes != 0 && seconds == 0){
//         seconds = 59;
//         minutes--;
//         writeTimer();
//     }
//     else if(minutes == 0 && seconds ==0){
//         alert("finis");
//     }
// }

// function stopInterval(){
//     clearInterval(startTimer);
// }
// function writeTimer(){
//     if (minutes<=9){
//         return timerDOM.innerText = "0" + minutes + ":" + seconds;
//     } else
//         return timerDOM.innerText = minutes + ":" + seconds;
// }
//
// startBtn.addEventListener('click',()=>{
//     if (startTimer === undefined){
//         startTimer = setInterval(timer, 10);
//     } else {
//         alert("timer is running");
//     }
// });

// resetBtn.addEventListener("click",()=>{
//     if (status =="pomodoro"){
//         minutes=25;
//         seconds="00";
//     } else if (status =="shortBreak"){
//         minutes=5;
//         seconds="00";
//     }
//     else{
//         minutes=15;
//         seconds="00";
//     }
//
//
//     writeTimer();
//     stopInterval();
//     startTimer = undefined;
// });

// pauseBtn.addEventListener('click',()=>{
//     stopInterval();
//     startTimer=undefined;
// });
// pomodoro.addEventListener("click",()=>{
//     status="pomodoro";
//     minutes=25;
//     seconds="00";
//     stopInterval();
//     startTimer=undefined;
//     writeTimer();
// })
// shortBreakBtn.addEventListener("click",()=>{
//     status="shortBreak";
//     minutes=5;
//     seconds="00";
//     stopInterval();
//     startTimer=undefined;
//     writeTimer();
// })
// longBreakBtn.addEventListener("click",()=>{
//     status="longBreak";
//     minutes=15;
//     seconds="00";
//     stopInterval();
//     startTimer=undefined;
//     writeTimer();
// })
