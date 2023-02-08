const startGame = () => {

    gameFieldArticle.style.display = `none`

    for (const btn of gameBoardBtns) {
        btn.classList.remove(`disabled`)
        btn.textContent = ``
        btn.addEventListener(`click`, addPlayerSymbol)
    }

  if(players[0].name === `` || players[1].name === ``)
      return alert(`Enter Valid Names For Both Players`)

  activePlayerName.textContent = players[0].name

  gameField.style.display = `block`;
}

const addPlayerSymbol = (e) => {
    let eTarget = e.target

    switch (activePlayerName.textContent) {
        case `${p1.name}`:

            eTarget.textContent = `${players[0].symbol}`
            eTarget.classList.add(`disabled`)

            p1CapturedSpaces.push(+eTarget.id)
            checkWinner(p1.name, p1CapturedSpaces)

            activePlayerName.textContent = players[1].name
            break;

        case `${p2.name}`:

            eTarget.textContent = `${players[1].symbol}`
            eTarget.classList.add(`disabled`)

            p2CapturedSpaces.push(+eTarget.id)
            checkWinner(p2.name, p2CapturedSpaces)

            activePlayerName.textContent = players[0].name
            break;

        default:
            break;
    }

}

const compareArr = (playerArr, winConditionArr) => {
  return winConditionArr.every(num => {
      return playerArr.includes(num)
  })
}

const checkWinner = (playerName, playerArr) => {
    if (compareArr(playerArr, winConditions.win1) ||
        compareArr(playerArr, winConditions.win2) ||
        compareArr(playerArr, winConditions.win3) ||
        compareArr(playerArr, winConditions.win4) ||
        compareArr(playerArr, winConditions.win5) ||
        compareArr(playerArr, winConditions.win6) ||
        compareArr(playerArr, winConditions.win7) ||
        compareArr(playerArr, winConditions.win8)){

        gameFieldArticle.style.display = `block`
        winnerName.textContent = `${playerName}`
        activePlayer.style.display = `none`
    }


}