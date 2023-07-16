const myColorContainer = document.querySelector('.my-color');
const randomColorContainer = document.querySelector('.random-color');

const newColorButton = document.querySelector('button');
const inputField = document.querySelector('input');

// Initialising Color Strings
let randomColor = '';
let inputColor = '';

// Generates a random color - #RRGGBB
function generateRandomColor() {
    const hexCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 
                           'A', 'B', 'C', 'D', 'E', 'F'];
    
    randomColor = '';
    for (let i=0; i<6; i++) {
        randomIndex = Math.floor(Math.random()*hexCharacters.length);
        randomColor += hexCharacters[randomIndex];
    }

    randomColor = '#' + randomColor
    console.log(`Random Color: ${randomColor}`);

    return randomColor;
}

function evaluateColor() {
    if (inputColor.toLowerCase() === randomColor.toLowerCase()) {
        setTimeout(() => {
            alert('Congrats!!! You Guessed The Color.')
        }, 300);
    }
}

// Displaying random color
function displayNewColor () {
    randomColorContainer.style.backgroundColor = generateRandomColor();
    inputField.value = '';
}

// Displaying input color
function displayGuessColor() {
    inputColor = '#' + this.value;
    myColorContainer.style.backgroundColor = inputColor;

    evaluateColor();
}

// Event Listeners
newColorButton.addEventListener('click', displayNewColor);
inputField.addEventListener('input', displayGuessColor);

displayNewColor();