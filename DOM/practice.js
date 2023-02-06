"use strict"

let paraLink = document.querySelector(`p > a`);
let h1 = document.querySelector(`h1`)
let bodyElem = document.querySelector(`body`)

let newPara = document.createElement(`p`)

console.log(paraLink)
paraLink.setAttribute(`href`, `https://www.youtube.com`)
console.log(paraLink.getAttribute(`href`))

h1.setAttribute(`id`, `h1`)

let h1ID = document.querySelector(`#h1`)
h1ID.style.color = `#ae53ea`

bodyElem.append(newPara)
console.log(bodyElem)

let para2 = document.querySelector(`p:nth-of-type(2)`)
console.log(para2)
para2.setAttribute(`class`, `para2`)
para2.textContent = `Hello`
let para2Class = para2.getAttribute(`class`)
console.log(para2Class)

//Input Event Listener
let textInput = document.querySelector(`#textInput`)
let charCount = document.querySelector(`#charCount`)

let maxCount = textInput.maxLength

charCount.textContent = `${maxCount}/${maxCount}`


const strCount = (e) => {
    let userInput = e.target.value.length;
    let remainingChars = maxCount - userInput

    charCount.textContent = `${remainingChars}/${maxCount}`

    if (remainingChars <= 10)
        textInput.classList.add(`bg-red`)
    else
        textInput.classList.remove(`bg-red`)

}

textInput.addEventListener(`input`, strCount)