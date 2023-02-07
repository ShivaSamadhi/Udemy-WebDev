const  openPlayerConfig = (e) => {
    configOverlay.style.display = `block`
    configBackdrop.style.display = `block`
}

const closePlayerConfig = () => {
    configOverlay.style.display = `none`
    configBackdrop.style.display = `none`
}

const savePlayerConfig = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const enteredPlayerName = formData.get(`playerName`).trim()

    if (!enteredPlayerName){
       configErr.textContent = `Invalid Player Name. Try Again!`
        return;
    }
}