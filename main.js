// time
let time = document.getElementById('time');

setInterval(() => {
    let tym = new Date();
    time.innerHTML = tym.toLocaleTimeString();
}, 1000)


let inputDegree = document.getElementById("degree");  // input 
let celsius = document.getElementById("celsius");   //  ans print
let tempOption = document.getElementById("temp-option");  // temp-type
let btn = document.getElementById("convert-btn");   // convert-btn


function convertIntocelsius() {
    let inputvalue = inputDegree.value;

    // fahrenheit to celsius
    if (tempOption.value === "fahrenheit") {
        let ftoc = (inputvalue - 32) * (5 / 9);
        celsius.innerHTML = `${ftoc.toFixed(3)} &deg; c`;

    }
    // kelvin to celsius
    else if (tempOption.value === "kelvin") {
        let ktoc = inputvalue - 273.15;
        celsius.innerHTML = `${ktoc.toFixed(3)} &deg; c`;
    }

}


// validation
btn.addEventListener("click", () => {
    if (inputDegree.value == "") {
        celsius.innerHTML = "please! Enter Number";

    }
    else if (inputDegree.value == 0) {
        celsius.innerHTML = "0 Not allow";
    }
})



window.addEventListener("load", () => {
    inputDegree.value = "";
    celsius.innerHTML = "";
})

