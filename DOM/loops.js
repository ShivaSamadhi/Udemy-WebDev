"use strict"

const userNum = document.querySelector(`#userNum`)
const forLoopDiv = document.querySelector(`#forLoops`)


const addingLoop = () => {

  if (document.querySelector(`#sumElement`)){
    const sumElement = document.querySelector(`#sumElement`)
    sumElement.remove()
  }

  let count = 0

  const numInput = userNum.value;

  const sumElement = document.createElement(`h6`)
  sumElement.id = `sumElement`
  sumElement.textContent = ``

  for (let i = 0; i <= numInput; i++) {
        count += i
    }

  sumElement.textContent =`The sum of all numbers leading up to ${numInput} is ${count}`

  forLoopDiv.append(sumElement)
}
userNum.addEventListener(`input`, addingLoop)