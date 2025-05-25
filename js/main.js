const modal = document.querySelector('#modal');
const modalOpenBtn = document.querySelector('#modal-open');
const modalCloseBtn = modal.querySelector('#modal-close');

// Adding event listeners to modal elements
modalOpenBtn.addEventListener('click', () => {openModal(modal);});
modalCloseBtn.addEventListener('click', () => {closeModal(modal);});
modal.querySelector('.modal-overlay').addEventListener('click', () => {closeModal(modal)});

// Function for opening modal
function openModal(modalElement) {
    modalElement.setAttribute('data-hidden', false);
}

// Function for closing modal
function closeModal(modalElement) {
    modalElement.setAttribute('data-hidden', true);
}