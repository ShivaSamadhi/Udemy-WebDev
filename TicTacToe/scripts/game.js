const startGame = () => {

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
    console.log(eTarget)
    switch (activePlayerName.textContent) {
        case `${players[0].name}`:
            eTarget.textContent = `${players[0].symbol}`
            eTarget.classList.add(`disabled`)
            activePlayerName.textContent = players[1].name
            break;

        case `${players[1].name}`:
            eTarget.textContent = `${players[1].symbol}`
            eTarget.classList.add(`disabled`)
            activePlayerName.textContent = players[0].name
            break;

        default:
            break;
    }

}