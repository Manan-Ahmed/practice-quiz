let userInputEle = document.querySelectorAll(".inp")[0]


let usertemp = document.querySelectorAll(".user-temprature")[0]

let currentTempEle = document.querySelectorAll(".current-temprature")[0]
let tempH1 = document.querySelectorAll(".temprature")[0]


let convertBtn = document.querySelectorAll("#convrtBtn")


function convert() {
    const value = usertemp.value
    const convertValue = currentTempEle.value
    console.log('value', convertValue)

    if (value === "Celsius" && convertValue === "Fahrenheit") {
        tempH1.innerHTML =  (Math.round(Number(userInputEle.value * 9 / 5) + 32).toFixed(2)) + "in"
    }
    else if (value === "Fahrenheit" && convertValue === "Celsius") {
        tempH1.innerHTML =  (Math.round(Number(userInputEle.value) - 32 * 5 / 9).toFixed(2)) + "in"
    }
    else if (value === "Celsius" && convertValue === "kelvin") {
        tempH1.innerHTML = (Math.round(Number(userInputEle.value + 273.15)).toFixed(2)) + "in"
    }
    else if (value === "kelvin" && convertValue === "Celsius") {
        tempH1.innerHTML =  (Math.round(Number(userInputEle.value - 273.15) ).toFixed(2)) + "in"
    }

    else if (value === "Fahrenheit" && convertValue === "kelvin") {
        tempH1.innerHTML =  (Math.round(Number(userInputEle.value - 32) * 5 / 9 + 273.15)) + "in"
    }

    else if (value === "kelvin" && convertValue === "Fahrenheit") {
        tempH1.innerHTML = (Math.round(Number(userInputEle.value - 273.15) * 9 / 5 + 32).toFixed(2)) + "in"
    }
    
}



console.log(usertemp.value,currentTempEle.value)