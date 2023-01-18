"use strict"

const randomNum = () => {
    return Math.floor((Math.random() * 6) + 1)
}


const changeDiceImgP1 = () => {
  let num = randomNum();
    console.log(num)
  const dice1 = document.querySelector('.img1').setAttribute("src", `images/dice${num}.png`)
}
