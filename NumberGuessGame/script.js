'use strict'

// Random number generator
let ranNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Refactor message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Background change 
const displayBackground = function(bg) {
    document.querySelector('body').style.backgroundColor = bg;
}

// Score function
const displayScore = function(scr) {
    document.querySelector('.score').textContent = scr;
}

const changeWidth = function(cw) {
    document.querySelector('.number').style.width = cw;
}

const resetNum = function(rn) {
    document.querySelector('.number').textContent = rn;
}

// Check button select and type coercion
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When no input or not a number
    if (!guess) {
        displayMessage(`No number provided!`);

    // Player wins
    } else if (guess === ranNum) {
        displayMessage(`You have guessed correctly!`);
        // Change background color to green upon win
        displayBackground('Green');
        changeWidth('30rem');
        resetNum(ranNum);

        if (score > highscore) {
            highscore = score;
            displayScore(highscore);
        }

    } else if (guess !== ranNum) {
        if (score > 1) {
            displayMessage(guess > ranNum ? `Your guess is too high! Try again.` : `Your guess is too low! Try again.`);
            score--;
            displayScore(score);
        } else {
            displayMessage(`Game over. Please try again.`);
            displayScore('0');
        }
    }
});

// To reset the game
document.querySelector('.reset').addEventListener('click', function() {
    let ranNum = Math.trunc(Math.random() * 20) + 1;
    displayBackground("rgb(145, 63, 63)");
    changeWidth('15rem');
    resetNum('?');
    displayMessage(`Start guessing...`);
    displayScore('20');
    document.querySelector('.guess').value = '';
});