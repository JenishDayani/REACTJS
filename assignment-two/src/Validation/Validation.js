const validation = (prompts) => {
  let validationMessage = 'Text long enough';
  if (prompts.length <= 5) {
    validationMessage = 'Text too short';
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
