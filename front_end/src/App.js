import { useState } from 'react'
//useState Hook
//State is a JS obj that contains data about the "current state" of a component. Each comp manages its own state
import './App.css';

const Person = (props) => {
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
        </>
    )
}
// ^Functional Component (w/ props)
//Props function like an object that can be passed as a parameter to functional components. This allows for the dynamic use of key-values when rendering. Here we initialize the properties we want (name, age) when we create the component

const App = () => {
  const [counter, setCounter] = useState(0)
  //State uses array destructuring for implementation of the useState()
  //The first index represents the name of the state, the second is a setter function.
  //we can set the initial state by passing it as a parameter to the useState()

  const countUp = () => {
      setCounter(prevCount => prevCount + 1)
  }
  const countDown = () => {
      setCounter(prevCount => prevCount - 1)
  }

  const name = {
      firstName: `Ramaj`,
      lastName: `Johnson`
    }
  //Using {} syntax I can directly use any JS value, ex => {name.firstName} would be rendered as Ramaj

  return (
    <div className="App">
      <Person
          name="Ramaj"
          age='28' />

        <button onClick={countUp}>+</button>
        <h1>{counter}</h1>
        <button onClick={countDown}>-</button>
    </div>
  );
  //Here we actually define the value of the keys (name and age) as attr when we inject the component
}

export default App;
