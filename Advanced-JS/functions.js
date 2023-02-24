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
//Using the rest/spread operator (which creates an array behind the scenes) within the parameter initialization allows the function to be more flexible because any amount of parameters can be passed to the function call

sumUp(3, 6, 9)
sumUp(1, -1, -20)

const numArr = [1,2,3,4,5,6]
sumUp(...numArr)
//Because the rest/spread operator creates an array behind the scenes, when we place it into the parameter statement it expects a list of values when the function is called.
//If I pass an array into the function call, it wont work properly. To fix this, we simply use the spread operator on that array within the function call which will effectively turn the array back into a list before executing the function
//Spread operator can also be used on objects to create a copy of the object which can be manipulated independently of the original

const person = {
  age: 32
}

const adultYears = (person) => {
  person.age -= 18
    return person.age
}
console.log(adultYears({...person}))
console.log(person)