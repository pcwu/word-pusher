import React from 'react';
import InputWord from './InputWord';

const InputText = ({ input, actions }) => (
  <div>
    {input.map((word) => {
      if (word.text.match(/[^A-Za-zÄÖÜäöüß]+/) === null) {
        return <InputWord word={word} actions={actions} />;
      }
      return word.text;
    })}
  </div>
);

export default InputText;
