"use strict";

document.addEventListener("DOMContentLoaded", init);

let i = 0;
let findText;
let displayedText;

function init() {
    console.log("init");
    findText = document.querySelector("#typewriter").textContent;
    document.querySelector("h1").classList.add("hidden");
    console.log(findText)

    displayedText = document.createElement("h1");
    displayedText.classList.add("typewritten");
    displayedText.textContent = "";
    document.querySelector("body").appendChild(displayedText);
    loop();
}

function loop() {
    //find next character
    let nextChar = findText[i];
    console.log(nextChar)

    //add character to main string
    displayedText.textContent = displayedText.textContent + nextChar;

    //iterator++
    i++;


    if (i < findText.length) {
        setTimeout(loop, 100)
    } else {
        i = 0;
        setTimeout(() => {
            displayedText.textContent = "";
            loop();
        }, 1000)
    }
}