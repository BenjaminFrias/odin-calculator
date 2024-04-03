var firstNum;
var secondNum;
var operator;

var currentInput = "";
var previousInput = "";
var operation;

const display = document.querySelector(".result");
const previousDisplay = document.querySelector(".previous");
const clearBtn = document.querySelector(".clear-btn");
const inputBtns = document.querySelectorAll(".number-btn, .operator-btn");
const resultBtn = document.querySelector(".equal-btn");

display.textContent = 0;

inputBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("operator-btn")) {
            // change color
            inputBtns.forEach((btn) => btn.classList.remove("pressed"));
            btn.classList.add("pressed");

            operator = btn.textContent;
            firstNum = currentInput;
            currentInput = "";
            displayContent(previousDisplay, operator)
        } else {
            displayContent(previousDisplay, '')

            currentInput += btn.textContent;
            displayContent(display, currentInput);
        }
    });
});

resultBtn.addEventListener("click", () => {
    inputBtns.forEach((btn) => btn.classList.remove("pressed"));
    secondNum = currentInput;
    let result = operate(+firstNum, operator, +secondNum);

    displayContent(display, result);
    currentInput = result.toString();
    operation = "";
    firstNum = "";
});

function displayContent(display, value) {
    display.textContent = value;
}

clearBtn.addEventListener("click", () => {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    currentInput = "";
    display.textContent = "";
});

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
