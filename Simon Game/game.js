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

const randomNum = () => {
    return Math.floor((Math.random()*4))
}

const playSound = (color) => {
    $(document).ready(()=>{
        let audio = new Audio(`sounds/${color}.mp3`);
        audio.play();
    })
}

const colorFlash = (randomColor, chosenColorBtn) => {
    gamePattern.push(randomColor)

    chosenColorBtn.fadeOut(100).fadeIn(100)

    playSound(randomColor)
}

const animatePress = (currentColor) => {
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
        animatePress(selectedBtn)
        playSound(selectedBtn)

        console.log(userPattern)
    })
}

const keyDownHandler = () => {
    const doc = $(document)
    if (gameStarted === false){
       doc.keydown(nextSequence);
       gameStarted = true
    }
}
keyDownHandler()

const nextSequence = () => {
    const randomColor = btnColors[randomNum()]
    const chosenColorBtn = $(`#${randomColor}`)

    colorFlash(randomColor, chosenColorBtn)

    userBtnClickHandler()
}

console.log(gamePattern)



