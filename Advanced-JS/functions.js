//Default Parameters

const greetUser = (greetingPrefix, userName = `user`) => {
    console.log(`${greetingPrefix}, ${userName}!`)
}
//In a func with multiple parameters, all default parameters are defined last. Non-optional parameters are always first

greetUser(`Hiya`)
greetUser(`Hello`, `Ramaj`)

//Rest Parameters
const sumUp = (...numbers) => {
  let sum = 0;

  numbers.forEach(number =>{
      sum += number
  })
    console.log(sum)
  return sum
}
//Using the spread operator within the parameter initialization allows the function to be more flexible because any amount of parameters can be passed to the function call

sumUp(3, 6, 9)
sumUp(1, -1, -20)