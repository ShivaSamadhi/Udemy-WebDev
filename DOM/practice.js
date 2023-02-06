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

bodyElem.appendChild(newPara)
console.log(bodyElem)

let para2 = document.querySelector(`p:nth-of-type(2)`)
console.log(para2)

