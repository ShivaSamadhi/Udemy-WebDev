"use strict"
const btnColors = [`red`, `blue`, `green`, `yellow`]
const gamePattern = []

const randomNum = () => {
    return Math.floor((Math.random()*4))
}

const nextSequence = () => {

}
const randomColorChosen = btnColors[randomNum()]
gamePattern.push(randomColorChosen)

console.log(randomColorChosen)