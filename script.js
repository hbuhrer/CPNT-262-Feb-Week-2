const calculator = document.querySelector("#calculator");
const inputOne = document.querySelector("#first-value");
const inputTwo = document.querySelector("#second-value");
const operator = document.querySelector("#operator-select");
const calculatorOutput = document.querySelector("#output");

function calculate(event) {
    event.preventDefault();

    if (isNaN(parseFloat(inputOne.value)) || isNaN(parseFloat(inputTwo.value))) {
        console.log ("Please enter a valid number");
        return;
    }

    let output;

    if (operator.value === "+") {
        output = parseFloat(inputOne.value) + parseFloat(inputTwo.value);
    } else if (operator.value === "-") {
        output = parseFloat(inputOne.value) - parseFloat(inputTwo.value);
    } else if (operator.value === "*") {
        output = parseFloat(inputOne.value) * parseFloat(inputTwo.value);
    } else if (operator.value === "/") {
        output = parseFloat(inputOne.value) / parseFloat(inputTwo.value);
    }else {
        console.log("Please enter a valid operator");
        return;
    }


    calculatorOutput.textContent = output;

}

calculator.addEventListener("submit", calculate);