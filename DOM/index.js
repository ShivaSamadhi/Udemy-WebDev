"use strict"


const thirdLi = document
                    .querySelector("#list li:nth-child(3)")
                    .textContent = `Ramaj`

const linkColor = document
    .querySelector("#list .list a")
    .style
    .color = 'red'


const buttonColor = document
    .querySelector("#btn")
    .style
    .backgroundColor = "yellow"


const buttonVisibility = document.querySelector("#btn").classList.add("invisible")

const headingSize = document.querySelector("h1").classList.add("huge")

console.log(document.querySelector('#btn').classList)