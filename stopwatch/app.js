
let containerEl = document.querySelectorAll("h1")[0]
let startEl = document.querySelectorAll(".start")[0]

let stopEl = document.querySelectorAll(".stop")[0]

let resetEl = document.querySelectorAll(".reset")[0]


let milliSeconds = 00

let seconds = 00
let minutes = 00

let stopTimer;
let timer = null


startEl.addEventListener('click', () => {
    if(timer !== null){
        clearInterval(stopTimer)
    }
    stopTimer = setInterval(() => {
        startTimer()
    },  10)
})

stopEl.addEventListener('click',() =>{
    clearInterval(stopTimer)
})

resetEl.addEventListener("click",()=>{
    containerEl.innerHTML = '00 : 00 :00'
    clearInterval(stopTimer)
})

function startTimer(){
        milliSeconds++

    if(milliSeconds === 60){
        milliSeconds = 0
           seconds++
    
    if(seconds === 60){
                    seconds = 0
                    minutes++
                    if(minutes === 60){
                        minutes = 0
                    }
                }
            }


let milli = milliSeconds < 10 ? `0${milliSeconds}`:milliSeconds
let sec = seconds < 10 ? `0${seconds}` : seconds
let min = minutes < 10 ? `0${minutes}`: minutes
    containerEl.innerHTML = `${milli} : ${sec} ${min}`
        }

