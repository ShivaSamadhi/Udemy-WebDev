const imgInput = document.querySelector(`#image`)
const imgPreview = document.querySelector(`#img-preview`)
//DOM selectors

const showPreview = () => {
    const files = imgInput.files
    // .files selects all the file data associated with the selected element

    if (!files || files.length === 0){
        imgPreview.style.display = `none`
        return;
    }
    // checks if any files are attached to the element

    const pickedFile = files[0]
    // the attached file of the selected element

    imgPreview.src = URL.createObjectURL(pickedFile)
    // using the URL class and createObjectURL(), we can create a local url that can be used as the src attr of the imgPreview element before it is actually uploaded to the file system
    imgPreview.style.display = `block`

}

imgInput.addEventListener(`change`, showPreview)