import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import TextField from 'material-ui/TextField';

const enhance = compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: props => (event) => {
      const value = event.target.value;
      props.updateValue(value);
      props.actions.addInput(value.split(/([^A-Za-zÄÖÜäöüß])/).filter(text => text));
    },
  }),
);

const InputForm = ({ value, onChange }) => (
  <div>
    <TextField
      hintText="paste your text or article"
      onChange={onChange}
      value={value}
      multiLine
      fullWidth
    /><br />
  </div>
);

export default enhance(InputForm);
