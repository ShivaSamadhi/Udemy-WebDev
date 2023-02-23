//Default Parameters

const greetUser = (greetingPrefix, userName = `user`) => {
    console.log(`${greetingPrefix}, ${userName}!`)
}
//In a func with multiple parameters, all default parameters are defined last

greetUser(`Hiya`)
greetUser(`Hello`, `Ramaj`)