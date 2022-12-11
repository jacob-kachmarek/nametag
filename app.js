// grab DOM elements

// set event listeners


const button = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');
const otherbutton = document.getElementById('pronoun-button');
const pronounInput = document.getElementById('pronoun-input');
button.addEventListener('click', () => {
const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);
nameDisplay.textContent = nameInput.value;
nameDisplay.style.color = 'black';
});
button.addEventListener('click', () => {
const pronounDisplay.textContent = pronounInput.value;
console.log(pronounDisplay);
nameDisplay.textContent = pronounInput.value;
nameDisplay.style.color = 'black';
});