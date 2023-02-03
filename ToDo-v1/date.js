
const getDate = () => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
        day: `numeric`,
        month: `short`
    }

    let currentDay = today.toLocaleDateString(`en-US`, dateOptions)

    return currentDay
}
const getDay = () => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
    }

    let currentDay = today.toLocaleDateString(`en-US`, dateOptions)

    return currentDay
}

module.exports.getDate = getDate;
module.exports.getDay = getDay;