'use strict';

// set up the selectors to make code more streamlined 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
        modal.classList.remove('hidden'); // removes modal class hidden to show modal
        overlay.classList.remove('hidden'); // blurs original background and focuses foreground
    }

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
    
// show modal
btnCloseModal.addEventListener('click', closeModal);

// remove the modal when clicking on the overlay
overlay.addEventListener('click', closeModal);

// remove modal on keydown('ESC')
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});