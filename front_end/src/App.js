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
//Props function like objects that can be passed as a parameter to functional components. This allows for the dynamic use of key-values when rendering. Here we initialize the properties we want (name, age) when we create the component

const App = () => {
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
    </div>
  );
  //Here we actually define the value of the keys (name and age) when we inject the component
}

export default App;
