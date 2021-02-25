'use strict'

// Random number generator
let ranNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Check button select and type coercion
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When no input or not a number
    if (!guess) {
        document.querySelector('.message').textContent = `No number provided!`;

    // Player wins
    } else if (guess === ranNum) {
        document.querySelector('.message').textContent = `You have guessed correctly!`;
        // Change background color to green upon win
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = ranNum;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // Guess is too high
    } else if (guess > ranNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Your guess is too high! Try again.`;
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = `Game over. Please try again.`;
        }

    // Guess too low
    } else if (guess < ranNum){
        if (score > 1) {
            document.querySelector('.message').textContent = `Your guess is too low! Try again.`;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `Game over. Please try again.`;
        }
    }
});

// To reset the game
document.querySelector('.again').addEventListener('click', function() {
    let ranNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = "rgb(145, 63, 63)";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
});