

// Declare variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

// Define and call functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Call the functions and use console.log() to print output
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(5, 3));
console.log("Division:", divide(6, 2));
console.log("Multiplication:", multiply(4, 3));

// DOM Manipulation

// Get references to DOM elements
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const divideBtn = document.getElementById('divideBtn');
const multiplyBtn = document.getElementById('multiplyBtn');

// Add event listeners for buttons
addBtn.addEventListener('click', () => {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    result.textContent = `Result: ${add(val1, val2)}`;
});

subtractBtn.addEventListener('click', () => {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    result.textContent = `Result: ${subtract(val1, val2)}`;
});

divideBtn.addEventListener('click', () => {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    result.textContent = `Result: ${divide(val1, val2)}`;
});

multiplyBtn.addEventListener('click', () => {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    result.textContent = `Result: ${multiply(val1, val2)}`;
});


