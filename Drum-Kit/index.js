"use strict"

const drumBtns = document.querySelectorAll(".drum");

for (const drumBtn of drumBtns) {
    drumBtn.addEventListener("click", ()=> {alert(`Good job.`)})
}
