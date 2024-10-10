import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hi, I'm a React </h1>
//     </div>
//   );
// }

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Jenish', age: 28 },
      { name: 'Vaibhav', age: 18 },
      { name: 'Het', age: 38 },
      { name: 'Hardik', age: 29 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Vaibhav', age: 18 },
        { name: 'Het', age: 19 },
        { name: 'Hardik Tank', age: 29 },
      ],
      otherState: personsState.otherState,
      showPersons: personsState.showPersons,
    });
  };

  const NameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Jenish', age: 28 },
        { name: event.target.value, age: 18 },
        { name: 'Het', age: 19 },
        { name: 'Hardik Tank', age: 29 },
      ],
    });
  };

  // const NameChangedHandler = (event) => {
  //   const updatedPersons = [...personsState.persons];
  //   updatedPersons[1] = { name: event.target.value, age: 18 };

  //   setPersonsState((prevState) => ({
  //     ...prevState,
  //     persons: updatedPersons,
  //   }));
  // };

  const style = {
    backgroundColor: 'lightblue',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  const togglePersonsHandler = () => {
    setPersonsState({
      persons: personsState.persons,
      otherState: personsState.otherState,
      showPersons: !personsState.showPersons,
    });
  };

  return (
    <div className='app'>
      <h1>Hi, I'm a React First Project</h1>
      <p>This is really Working!</p>
      <button style={style} onClick={togglePersonsHandler}>
        Switch Name
      </button>
      {personsState.showPersons ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
          />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            changed={NameChangedHandler}
          />
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
            click={switchNameHandler.bind(this, 'JD!')}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={personsState.persons[3].name}
            age={personsState.persons[3].age}
          />
        </div>
      ) : null}
    </div>
  );

  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, 'Does this work how ?')
  // );
};

export default App;
