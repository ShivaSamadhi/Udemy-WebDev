module.exports.getDate = () => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
        day: `numeric`,
        month: `short`
    }

    return today.toLocaleDateString(`en-US`, dateOptions)
}

module.exports.getDay = () => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
    }

    return today.toLocaleDateString(`en-US`, dateOptions)
}


