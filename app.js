// grab DOM elements

// set event listeners

const nameDisplay = document.getElementById('name-display');
const button = document.getElementById('updateButton');
const nameInput = document.getElementById('name-input');
const pronounInput = document.getElementById('pronoun-input');
const pronounDisplay = document.getElementById('Pronoun');

button.addEventListener('click', () => {
    const nameDisplay = document.getElementById('name-display');
    console.log(nameDisplay);
    nameDisplay.textContent = nameInput.value;
    nameDisplay.style.color = 'black';
});

button.addEventListener('click', () => {
    const pronounDisplay = document.getElementById('pronoun-display');
    console.log(pronounDisplay);
    pronounDisplay.textContent = pronounInput.value;
    pronounDisplay.style.color = 'black';
});