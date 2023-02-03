
const getDate = () => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
        day: `numeric`,
        month: `short`
    }

    return today.toLocaleDateString(`en-US`, dateOptions)
}
const getDay = () => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
    }

    return today.toLocaleDateString(`en-US`, dateOptions)
}

module.exports.getDate = getDate;
module.exports.getDay = getDay;