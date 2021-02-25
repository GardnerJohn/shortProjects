'use strict'

// Random number generator
const ranNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = ranNum;
let score = 20;

// Check button select and type coercion
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When no input or not a number
    if (!guess || typeof guess !== 'number') {
        document.querySelector('.message').textContent = `No number provided!`;

    // When player wins
    } else if (guess === ranNum) {
        document.querySelector('.message').textContent = `You have guessed correctly!`;
        // Change background color to green upon win
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.number').style.width = '30rem';

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