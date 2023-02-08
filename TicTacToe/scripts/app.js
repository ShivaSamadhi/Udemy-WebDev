//Globals
let editPlayerID = 0

const players = [
    {
        name: ``,
        symbol: `X`
    },
    {
        name: ``,
        symbol: `O`
    }
]

//DOM Selectors
const configOverlay = document.querySelector(`#overlay`)
const configBackdrop = document.querySelector(`#backdrop`)
const configForm = document.querySelector(`#configForm`)
const playerNameDiv = document.querySelector(`#playerNameDiv`)
const configErr = document.querySelector(`#configErr`)
const playerName = document.querySelector(`#playerName`)
const gameField = document.querySelector(`#gameField`)
let activePlayerName = document.querySelector(`#activePlayerName`)



const cancelBtn = document.querySelector(`#cancelBtn`)
const confirmBtn = document.querySelector(`#confirmBtn`)
const editP1Btn = document.querySelector(`#editP1Btn`)
const editP2Btn = document.querySelector(`#editP2Btn`)
const startGameBtn = document.querySelector(`#startGameBtn`)
const gameBoardBtns = document.querySelectorAll(`#gameBoard li`)

//Event Handlers
configBackdrop.addEventListener(`click`, closePlayerConfig)
cancelBtn.addEventListener(`click`, closePlayerConfig)

editP1Btn.addEventListener(`click`, openPlayerConfig)
editP2Btn.addEventListener(`click`, openPlayerConfig)

configForm.addEventListener(`submit`, savePlayerConfig)

startGameBtn.addEventListener(`click`, startGame)

for (const btn of gameBoardBtns) {
    btn.addEventListener(`click`, addPlayerSymbol)
}
