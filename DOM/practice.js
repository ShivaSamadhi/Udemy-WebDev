"use strict"

let paraLink = document.querySelector(`p > a`);
let h1 = document.querySelector(`h1`)


console.log(paraLink)



paraLink.setAttribute(`href`, `https://www.youtube.com`)
h1.setAttribute(`id`, `h1`)

let h1ID = document.querySelector(`#h1`)
h1ID.style.color = `#ae53ea`

console.log(paraLink.getAttribute(`href`))