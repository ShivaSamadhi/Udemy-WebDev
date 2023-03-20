const imgInput = document.querySelector(`#image`)
const imgPreview = document.querySelector(`#img-preview`)

const showPreview = () => {
    const files = imgInput.files


    if (!files || files.length === 0){
        imgPreview.style.display = `none`
        return;
    }

    const pickedFile = files[0]

    imgPreview.src = URL.createObjectURL(pickedFile)
    imgPreview.style.display = `block`
}

imgInput.addEventListener(`change`, showPreview)