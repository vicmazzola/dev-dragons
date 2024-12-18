const background = document.getElementById('modal-background');
const modal = document.getElementById('modal');
const modalMessage = modal.querySelector('.message');
const closeButton = document.getElementById('close-button');

const removeModal = () => {
    background.classList.remove('visible');
    modal.classList.remove('visible');
};

closeButton.addEventListener('click', removeModal);
background.addEventListener('click', removeModal);

export const showModal = (message = '') => {
    modalMessage.innerText = message;
    modal.classList.add('visible');
    background.classList.add('visible');
};
