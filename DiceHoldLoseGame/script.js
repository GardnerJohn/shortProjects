'use strict'

// Selecting elements
const score0El = document.querySelector('#score-0');
const score1El = document.querySelector('#score-1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

// Conditions at start
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Roll dice
btnRoll.addEventListener('click', function() {
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // remove hidden class and display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;
    // check for a dice roll of 1
      // if true: next player turn
    
});