"use strict"

const drumBtns = document.querySelectorAll(".drum");
const body = document.querySelector('body');

body.addEventListener("keydown", (e) => {
    const keyPress = e.key
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


/*In order to standardize the creation of multiple objects that require the same properties, we can create a factory for it. This concept draws heavily on the principles of OOP
Label the function, define the property names as parameters, then use the this keyword to assign those parameters as properties
CANNOT BE DONE AS ARROW FUNCTION
*/
function BellBoy (name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages
}

const bellBoy1 = new BellBoy("Ramaj", 28, true, ["English", "Japanese"]);

console.log(bellBoy1)