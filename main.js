// Correcting the syntax for element selection
const selectElement = (element) => document.querySelector(element);

// Adding event listener for the mobile menu click
selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});
