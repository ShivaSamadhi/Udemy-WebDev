let today = new Date();

const dateOptions = {
    weekday: `long`,
    day: `numeric`,
    month: `short`
}

let currentDay = today.toLocaleDateString(`en-US`, dateOptions)