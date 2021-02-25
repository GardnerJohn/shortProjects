'use strict'

// Random number generator
const ranNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = ranNum;

// Check button select and type coercion
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess || typeof(guess) !== 'number') {
        document.querySelector('.message').textContent = `No number provided!`;
    } else if (guess === ranNum) {
        document.querySelector('.message').textContent = `You have guessed correctly!`;
    } else if (guess > ranNum) {
        document.querySelector('.message').textContent = `Your guess is too high! Try again.`;
    } else {
        document.querySelector('.message').textContent = `Your guess is too low! Try again.`;
    } 
});