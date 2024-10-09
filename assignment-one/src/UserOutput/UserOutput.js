import React from 'react';
import './UserOutput.css';

const userOutput = (prompts) => {
  return (
    <div className='UserOutput'>
      <p>My name is {prompts.userName}</p>
      <p>My age is 22</p>
    </div>
  );
};

export default userOutput;
