// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

function generateNumber() {
    number1.innerText = Math.floor(Math.random() * 100) + 1;
    number2.innerText = Math.floor(Math.random() * 100) + 1;
}


// Iteration 3: Make the options button functional
let score = 0;
localStorage.setItem('score', score);
const buttons = document.getElementById("buttons");
buttons.addEventListener('click', function (event) {
    let num1 = parseInt(number1.innerText);
    let num2 = parseInt(number2.innerText);
    if (event.target.id === 'greater-than') {
        if (num1 - num2 <= 0) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 5;
        score++;
    }
    else if (event.target.id === 'equal-to') {
        if (num1 - num2 != 0) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 5;
        score++;
    }
    else if (event.target.id === 'lesser-than') {
        if (num1 - num2 >= 0) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 5;
        score++;
    }
    else {
        localStorage.setItem('score', score);
        window.open('gameover.html', '_self');
    }
    localStorage.setItem('score', score);

});

// Iteration 4: Build a timer for the game
const timer = document.getElementById('timer');
var remainingTime = 5;
function updateTimer() {
    timer.innerText = remainingTime;
    remainingTime--;
    if (remainingTime === 0) {
        clearInterval(timerInterval); // Stop the timer
        window.location.href = 'gameover.html';
    }
}

let timerInterval = setInterval(updateTimer, 1000);
