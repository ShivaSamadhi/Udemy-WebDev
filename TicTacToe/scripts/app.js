//DOM Selectors
const configOverlay = document.querySelector(`#overlay`)
const configBackdrop = document.querySelector(`#backdrop`)
const configForm = document.querySelector(`#configForm`)
const playerNameDiv = document.querySelector(`#playerNameDiv`)
const configErr = document.querySelector(`#configErr`)


const cancelBtn = document.querySelector(`#cancelBtn`)
const confirmBtn = document.querySelector(`#confirmBtn`)
const editP1Btn = document.querySelector(`#editP1Btn`)
const editP2Btn = document.querySelector(`#editP2Btn`)

//Event Handlers
configBackdrop.addEventListener(`click`, closePlayerConfig)
cancelBtn.addEventListener(`click`, closePlayerConfig)

editP1Btn.addEventListener(`click`, openPlayerConfig)
editP2Btn.addEventListener(`click`, openPlayerConfig)

configForm.addEventListener(`submit`, savePlayerConfig)