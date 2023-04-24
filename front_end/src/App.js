import './App.css';

const App = () => {
  const name = {
      firstName: `Ramaj`,
      lastName: `Johnson`
    }

  return (
    <div className="App">
      <h1>Hello, {name.firstName} {name.lastName}</h1>
    </div>
  );
}

export default App;
