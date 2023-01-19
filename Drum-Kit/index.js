"use strict"

const drumBtns = document.querySelectorAll(".drum");
const playSound = () => {
    const audio = new Audio('sounds/tom-1.mp3')
    audio.play();
    }
for (const drumBtn of drumBtns) {
    drumBtn.addEventListener("click", playSound)
}
