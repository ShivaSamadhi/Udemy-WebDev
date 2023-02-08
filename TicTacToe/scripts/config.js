const  openPlayerConfig = (e) => {
    editPlayerID = +e.target.dataset.playerid
    configOverlay.style.display = `block`
    configBackdrop.style.display = `block`
}

const closePlayerConfig = () => {
    configOverlay.style.display = `none`
    configBackdrop.style.display = `none`
    playerNameDiv.classList.remove(`configErr`)
    configErr.textContent = ``
}

const savePlayerConfig = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const enteredPlayerName = formData.get(`playerName`).trim()

    if (!enteredPlayerName){
        playerNameDiv.classList.add(`configErr`)
        configErr.textContent = `Invalid Player Name. Try Again!`
        return;
    }

    const updatePlayerData = document.querySelector(`#p${editPlayerID}Data`)
    updatePlayerData.textContent = enteredPlayerName

    players[editPlayerID-1].name = enteredPlayerName
}