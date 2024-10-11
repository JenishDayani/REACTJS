import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = (props) => {
  const style = {
    width: '25%',
    '@media (min-width: 500px)': {
      width: '100%',
    },
  };
  return (
    <div className='Person' style={style}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} year old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
