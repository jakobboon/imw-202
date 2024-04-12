console.log('is this working');

// get elements by ID wasn't working here, after some research I came across the term querySelector, which worked!
const textBox = document.querySelector('.textbox');
const keyboardInput = document.querySelector('.keyboardinput');
const fonts = ['Arial', 'Times New Roman', 'Helvetica', 'Courier', 'Garamond',];

document.addEventListener('keypress', (event) => {
    const keyPressed = event.key;
    const volume = Math.random() * 1.2 + 0.8;
    const distortion = Math.random() * 5 - 2.5;
    // google searched this for help - wasn't sure about .floor method and getting random values
    const randomSize = Math.floor(Math.random() * 150) + 50;
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = getRandomColor();
    // also searched external resources for this random positioning method
    const randomX = Math.random() * (textBox.offsetWidth - randomSize);
    const randomY = Math.random() * (textBox.offsetHeight - randomSize);
    const styledCharacter = `<span style="transform: scale(${volume}); letter-spacing: ${distortion}px; font-size: ${randomSize}px; font-family: ${randomFont}; color: ${randomColor}; position: absolute; top: ${randomY}px; left: ${randomX}px;">${keyPressed}</span>`;
    keyboardInput.innerHTML += styledCharacter;
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        // also used google and external resources for help here, wanted to have the backspace duplicate the letters outside the container-found that super tricky to sort out on my own
        const characters = keyboardInput.querySelectorAll('span');
        characters.forEach(character => {
            const clonedCharacter = character.cloneNode(true);
            const randomX = Math.random() * (window.innerWidth - parseInt(clonedCharacter.style.fontSize));
            const randomY = Math.random() * (window.innerHeight - parseInt(clonedCharacter.style.fontSize));
            clonedCharacter.style.position = 'fixed';
            clonedCharacter.style.top = randomY + 'px';
            clonedCharacter.style.left = randomX + 'px';
            document.body.appendChild(clonedCharacter);
        });
        // didn't want to have user need to press refresh page- added this option at the end
    } else if (event.key === 'Escape') {
        location.reload();
    }
});

// added this function at the end using what i learnt from the random positioning to get random infinite colours
function getRandomColor() {
    // googled the value for this as well
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
