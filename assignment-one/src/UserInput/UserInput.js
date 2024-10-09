import React from 'react';

const userInput = (prompts) => {
  const inputStyle = {
    border: '2px solid red',
  };
  return (
    <input
      type='text'
      style={inputStyle}
      onChange={prompts.changed}
      value={prompts.value}
    />
  );
};

export default userInput;
