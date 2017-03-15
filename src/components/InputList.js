import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const InputList = ({ words, actions }) => (
  <div>
    <RaisedButton label="Start to memorize and practice" secondary />
    <ul>
      {words.map(word => <li onClick={() => actions.deleteWord(word)}>{word}</li>)}
    </ul>
  </div>
);

export default InputList;
