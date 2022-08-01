let inputText = document.getElementById("inputsekund")
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let resetBtn = document.getElementById("reset")
let recordBtn = document.getElementById("record")
let recordList = document.getElementById("list")

let timer = 0;
let startTime;
let interval;


startBtn.addEventListener("click", () => {
    if (interval) {
        return
    }
    startTime = new Date()
    interval = setInterval(function () {
        let now = new Date()
        let diff = now.getTime() - startTime.getTime();
        timer = parseInt(diff / 10);
        let ms = ("0"+timer % 100).slice(-2)
        let s = ("0"+ parseInt(timer /100) % 60).slice(-2)
        let m = ("0"+parseInt(timer / 6000)).slice(-2)
        inputText.value =  `${m}:${s}:${ms}`
    }, 10)   
})

stopBtn.addEventListener("click" , () =>{
    clearInterval(interval)
    interval = null

})

resetBtn.addEventListener("click", () =>{
    timer = 0;
    inputText.value = "00:00:00";
    clearInterval(interval)
    interval = null;
    recordList.innerHTML = "";
})

recordBtn.addEventListener("click", () =>{
    let li = document.createElement("li")
    li.innerText = inputText.value
    recordList.appendChild(li)
})
