//Globals
let editPlayerID = 0

const players = [
    {
        name: ``,
        symbol: `X`,
        capturedSpaces: []
    },
    {
        name: ``,
        symbol: `O`,
        capturedSpaces: []
    }
]

const p1 = players[0]
const p2 = players[1]

const p1CapturedSpaces = p1.capturedSpaces
const p2CapturedSpaces = p2.capturedSpaces

const winConditions = {
    win1: [1,2,3],
    win2: [4,5,6],
    win3: [7,8,9],
    win4: [1,4,7],
    win5: [2,5,8],
    win6: [3,6,9],
    win7: [1,5,9],
    win8: [3,5,7]
}

//DOM Selectors
const configOverlay = document.querySelector(`#overlay`)
const configBackdrop = document.querySelector(`#backdrop`)
const configForm = document.querySelector(`#configForm`)
const playerNameDiv = document.querySelector(`#playerNameDiv`)
const configErr = document.querySelector(`#configErr`)
const playerName = document.querySelector(`#playerName`)
const gameField = document.querySelector(`#gameField`)
const gameFieldArticle = document.querySelector(`#gameFieldArticle`)
const winnerName = document.querySelector(`#winnerName`)
let activePlayer = document.querySelector(`#activePlayer`)
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

