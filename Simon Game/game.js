"use strict"

const btnColors = [`red`, `blue`, `green`, `yellow`]

let gamePattern = []
let userPattern = []

let gameStarted = false
let level = 0

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
userBtnClickHandler()

const comparePatterns = (currentLevel) => {

    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
        console.log(`success`)
        if (gamePattern.length === userPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound(`wrong`)
        console.log(`wrong`)
        $("body").toggleClass("game-over");

        setTimeout(()=> {
            $("body").toggleClass("game-over")
        }, 200);

        $("h1").text(`Game Over. Press Any Key to Restart`);

        startOver()
    }
}

const nextSequence = () => {
    userPattern = []

    level++
    $('h1').text(`Level ${level}`)

    const randomColor = btnColors[randomNum()]
    gamePattern.push(randomColor)

    colorFlashEvent(randomColor)

}

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

const startOver = () => {
  level = 0;
  gamePattern = [];
  gameStarted = false
}



