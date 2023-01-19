"use strict"

const drumBtns = document.querySelectorAll(".drum");
const body = document.querySelector('body');

body.addEventListener("keydown", (event) => {
    const keyPress = event.key
    playSound(keyPress)
})

for (const drumBtn of drumBtns) {

    drumBtn.addEventListener("click", () => {
        const btnClick = drumBtn.textContent
        playSound(btnClick)
    })

}

const playSound = (instrument) => {
    let audio
    switch (instrument) {
        case `w`:
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case `a`:
            audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;

        case `s`:
            audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;

        case `d`:
            audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            break;

        case `j`:
            audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;

        case `k`:
            audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;

        case `l`:
            audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;

        default:
            return
        }
    }
