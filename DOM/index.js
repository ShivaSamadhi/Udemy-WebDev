"use strict"


const thirdLi = document
                    .querySelector("#list li:nth-child(3)")
                    .innerHTML = `Ramaj`

const linkColor = document
    .querySelector("#list .list a")
    .style
    .color = 'red'


const buttonColor = document
    .querySelector("#btn")
    .style
    .backgroundColor = "yellow"


const buttonVisibility = document.querySelector("#btn").classList.add("invisible")

console.log(document.querySelector('#btn').classList)