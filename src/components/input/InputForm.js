import React, { useState } from 'react';
import TextField from 'material-ui/TextField';

const InputForm = ({ actions }) => {
  const [value, setValue] = useState('');
  const handleOnChange = (e) => {
    const value = e.target.value;
    setValue(value);
    actions.addInput(value.split(/([^A-Za-zÄÖÜäöüß])/).filter(text => text));
  };

  return (
    <div>
      <TextField
        hintText="paste German or English article here"
        onChange={handleOnChange}
        value={value}
        multiLine
        fullWidth
      /><br />
    </div>
  );
}

export default InputForm;
