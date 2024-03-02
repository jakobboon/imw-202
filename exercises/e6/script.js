// console tab

console.log("hello- message to the console here");

//interaction tab

const greenCircle = document.getElementById("green");
const plumCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");

let interactContainer = document.getElementById("InteractionContainer");

greenCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "lightgreen";
})

plumCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "lightblue";
})

// loop tab

const loopContainter = document.getElementById("loopContainer");
const message = "gloomy";

for (let i = 0; i < 10; i++) {
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainter.appendChild(textDiv);
}

// condition tab

const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function () {
    square.style.backgroundColor = "limegreen";
});

conditionContainer.addEventListener("mouseleave", function () {
    square.style.backgroundColor = "lightsalmon";
});

// time tab

const timeContainer = document.getElementById("timeContainer");
const increaseText = document.getElementById("increaseText");
increaseText.addEventListener("load", init(), false);


function increaseSize() {
    increaseText.style.fontSize = "90px";
}

function init() {
    setTimeout(increaseSize, 5000);
}

// input tab

const inputContainer = document.getElementById("inputContainer");
const textLength = document.getElementById("text-length");
const form = document.getElementById("form");
const inputText = document.getElementById("inputText");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const lengthOfInput = inputText.value.length;
    textLength.textContent = "character #: " + lengthOfInput;
});