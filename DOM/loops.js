"use strict"

const submitBtn = document.querySelector(`#subBtn1`)
const forLoopDiv = document.querySelector(`#forLoops`)



const addingLoop = () => {
  const numInput = document.querySelector(`#userNum`).value;

  const sumElement = document.createElement(`h6`)

  let count = 0

  for (let i = 0; i <= numInput; i++) {
        count += i
    }

  sumElement.textContent =`The sum of all numbers leading up to ${numInput} is ${count}`
  forLoopDiv.append(sumElement)
}
submitBtn.addEventListener(`click`, addingLoop)