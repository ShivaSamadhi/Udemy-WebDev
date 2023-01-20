"use strict"
const btnColors = [`red`, `blue`, `green`, `yellow`]

const randomNum = () => {
    return Math.floor((Math.random()*4))
}

const nextSequence = () => {

}
const randomColorChosen = btnColors[randomNum()]
console.log(randomColorChosen)