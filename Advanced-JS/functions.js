//Default Parameters

const greetUser = (userName = `user`) => {
    console.log(`Hi, ${userName}!`)
}
//In a func with multiple parameters, all default parameters are defined last

greetUser(`Max`)
greetUser()