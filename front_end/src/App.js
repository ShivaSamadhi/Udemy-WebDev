import { useState, useEffect } from 'react'
//useState Hook
//Hooks let you use different React features from your components. This might have similarities to how middlewares are used in Express
//State is a JS obj that contains data about the "current state" of a component. Each comp manages its own state which can be compared to detect changes in that comp

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
  const [counter, setCounter] = useState(0);
  //State uses array destructuring for implementation of the useState()
  //The first index represents the name of the state, the second is a setter function.
  //we can set the initial state by passing it as a parameter to the useState()

  useEffect(()=>{
      setCounter(100)
  }, []);
  useEffect(()=>{
      //alert(`Count Updated to ${counter}`)
  }, [counter])
  //The Effect Hook lets you perform side effects in function components. Here we set the counter to 100 as soon as the component loads. Because the dependency arr is empty this only happens once. We could also create an alert that fires off as a side effect of the counter updating by placing it in the dependency arr.

  const countUp = () => {
      setCounter(prevCount => prevCount + 1)
  }
  const countDown = () => {
      setCounter(prevCount => prevCount - 1)
  }
  //When the onClick() triggers these functions, the setCounter() is used to update the state of the counter. NEVER modify state directly, always use setter func

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
