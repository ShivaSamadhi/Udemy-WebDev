"use strict"
/*
1. Inside game.js create a new function called nextSequence()

2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

You can use the Chrome console to verify that your code creates random numbers between the correct range.

3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

5. At the top of the game.js file, create a new empty array called gamePattern.

6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

*/
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