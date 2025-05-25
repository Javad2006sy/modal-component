const modal = document.querySelector('#modal');
const modalOpenBtn = document.querySelector('#modal-open');
const modalCloseBtn = modal.querySelector('#modal-close');

let activeModal = null;

// Adding event listeners to modal elements
modalOpenBtn.addEventListener('click', () => {openModal(modal);});
modalCloseBtn.addEventListener('click', () => {closeModal(modal);});
modal.querySelector('.modal-overlay').addEventListener('click', () => {closeModal(modal)});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModal) {
        e.preventDefault();
        closeModal(activeModal);
    };
});

// Function for opening modal
function openModal(modalElement) {
    modalElement.setAttribute('data-hidden', false);
    activeModal = modalElement;
}

// Function for closing modal
function closeModal(modalElement) {
    modalElement.setAttribute('data-hidden', true);
    activeModal = null;
}