"use strict"

const drumBtns = document.querySelectorAll(".drum");
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

    }
    // const audio = new Audio('sounds/tom-1.mp3')
    // audio.play();
    }
for (const drumBtn of drumBtns) {
    // console.log(drumBtn)
    const instrument = drumBtn.textContent
    console.log(instrument)
    drumBtn.addEventListener("click", () => {
        playSound(instrument)
    })
}
