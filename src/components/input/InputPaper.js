import React from 'react';
import Paper from 'material-ui/Paper';
import InputForm from './InputForm';
import InputText from './InputText';
import InputList from './InputList';

const InputPaper = ({ input, words, stepIndex, actions }) => (
  <Paper style={{ minHeight: 500, width: '100%' }} zDepth={3} className="padding-sm">
    {(() => {
      switch (stepIndex) {
        case 0:
          return <InputForm input={input} actions={actions} />;
        case 1:
          return <InputText input={input} actions={actions} />;
        case 2:
          return <InputList words={words} actions={actions} />;
        default:
          return <h1>ERROR!</h1>;
      }
    })()}
  </Paper>
);

export default InputPaper;
