"use strict"
//Make sure to check that the document is ready to run. This can be done with the function below but best practice is to place all scripts at the bottom of the body section so all HTML elements load first.

// $(document).ready(()=>{
//     $('h1').css("color", "red")
// })

const changeTitleStyle = $('h1').click(() => {
    $('h1').toggleClass("big-title")
})

const changeBtn = () => {
    const btns = $(".btn")
    for (const btn of btns) {
        const btnClick = $(btn)
        btnClick.click(() => btnClick.toggleClass("btn-outline-dark"))
    }
}
changeBtn()

const changeTitleText = () => {
    const doc = $(document)
    const title = $('h1')
    doc.keypress((e) => title.text(e.key))

}
changeTitleText()