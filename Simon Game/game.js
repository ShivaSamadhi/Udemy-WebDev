"use strict"
/*STEP 2
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
const userPattern = []
let gameStarted = false
let level = 0

const randomNum = () => {
    return Math.floor((Math.random()*4))
}

const playSound = (color) => {
    $(document).ready(()=>{
        let audio = new Audio(`sounds/${color}.mp3`);
        audio.play();
    })
}

const colorFlashEvent = (color) => {

    const chosenColorBtn = $(`#${color}`)
    chosenColorBtn.fadeOut(100).fadeIn(100)

    playSound(color)
}

const animatePressHandler = (currentColor) => {
  const color = $(`.${currentColor}`);
  color.toggleClass('pressed')

  setTimeout(()=> color.toggleClass('pressed')
  , 100)
}

const userBtnClickHandler = () => {
    const btn = $('.btn')

    btn.click((e) => {
        const selectedBtn = e.currentTarget.id

        userPattern.push(selectedBtn)
        playSound(selectedBtn)
        animatePressHandler(selectedBtn)

        comparePatterns(userPattern.length-1)
    })
}


const startGameHandler = () => {
    const doc = $(document)
    if (!gameStarted){
       doc.keydown(() => {
           $("#level-title").text(`Level ${level}`);
           nextSequence()
           gameStarted = true
       });
    }
}
startGameHandler()

const comparePatterns = (currentLevel) => {

    if(userPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log(`success`)
        if (userPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    }
    else
        playSound(`wrong`)
        $("h1").text(`Game Over`)
}

const nextSequence = () => {
    level++
    $('h1').text(`Level ${level}`)

    const randomColor = btnColors[randomNum()]
    gamePattern.push(randomColor)

    colorFlashEvent(randomColor)
    userBtnClickHandler()
}

console.log(gamePattern)
console.log(userPattern)


