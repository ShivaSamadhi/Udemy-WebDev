"use strict"

const drumBtns = document.querySelectorAll(".drum");
const playSound = () => {
    alert(`Good job.`)
    }
for (const drumBtn of drumBtns) {
    drumBtn.addEventListener("click", playSound)
}
