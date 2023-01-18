"use strict"

const randomNum = () => {
    return Math.floor((Math.random() * 6) + 1)
}

const changeDiceImgP1 = () => {
  let num = randomNum();
    console.log(num)
  const dice1 = document.querySelector('.img1').setAttribute("src", `images/dice${num}.png`)
    return num
}

const changeDiceImgP2 = () => {
    let num = randomNum();
    console.log(num)
    const dice1 = document.querySelector('.img2').setAttribute("src", `images/dice${num}.png`)
    return num
}

const theWinnerIs = () => {
    const num1 = changeDiceImgP1()
    const num2 = changeDiceImgP2()
    const header = document.querySelector("h1")

    if (num1 === num2)
        header.textContent = `Issa Draw!`;
    if (num1 > num2)
        header.textContent = `Player 1 Wins!`;
    else
        header.textContent = `Player 2 Wins!`;

}


const startGame = document.querySelector('h1').addEventListener('click', theWinnerIs())