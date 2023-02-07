//DOM Selectors
const configOverlay = document.querySelector(`#overlay`)
const configBackdrop = document.querySelector(`#backdrop`)

const editP1Btn = document.querySelector(`#editP1Btn`)
const editP2Btn = document.querySelector(`#editP2Btn`)

//Event Handlers
configBackdrop.addEventListener(`click`)


editP1Btn.addEventListener(`click`, openPlayerConfig)
editP2Btn.addEventListener(`click`, openPlayerConfig)