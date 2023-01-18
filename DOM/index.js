"use strict"


const thirdLi = document.querySelector("#list li:nth-child(3)");
thirdLi.textContent = `Ramaj`

const linkColor = document.querySelector("#list .list a");
linkColor.style.color = 'red'


const buttonColor = document.querySelector("#btn");
buttonColor.style.backgroundColor = "yellow"


const buttonVisibility = document.querySelector("#btn");
buttonVisibility.classList.add("invisible")

const headingSize = document.querySelector("h1");
headingSize.classList.add("huge")

const linkAttributes = document.querySelector("#list .list a");
linkAttributes.setAttribute("href", "https://www.bing.com/")
console.log(linkAttributes)

console.log(document.querySelector('#btn').classList)