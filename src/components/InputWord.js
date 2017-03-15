import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

const enhance = compose(
  withState('select', 'setSelect', false),
  withHandlers({
    onClick: props => () => {
      props.select ? props.actions.deleteWord(props.word) : props.actions.addWord(props.word);
      props.setSelect(!props.select);
    },
  }),
);

const InputWord = ({ word, select, onClick }) => (
  <span key={word} onClick={onClick} style={{ color: select ? 'blue' : 'black' }}>{word}</span>
);

export default enhance(InputWord);
