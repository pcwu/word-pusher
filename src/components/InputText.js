import React from 'react';
import InputWord from './InputWord';

const InputText = ({ input, actions }) => (
  <div>
    {input.map(word => <InputWord word={word} actions={actions} />)}
  </div>
);

export default InputText;
