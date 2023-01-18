"use strict"


const thirdLi = document.querySelector("#list li:nth-child(3)");
thirdLi.textContent = `Ramaj`

const linkColor = document.querySelector("#list .list a");
linkColor.style.color = 'red'


const buttonColor = document
    .querySelector("#btn")
    .style
    .backgroundColor = "yellow"


const buttonVisibility = document.querySelector("#btn").classList.add("invisible")

const headingSize = document.querySelector("h1").classList.add("huge")

const linkAttributes = document.querySelector("#list .list a").setAttribute("href", "https://www.bing.com/")
console.log(linkAttributes)

console.log(document.querySelector('#btn').classList)