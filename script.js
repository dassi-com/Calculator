// JavaScript Fundamentals

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

// Interactive Charts and Graphs with Chart.js

// Chart.js setup
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
