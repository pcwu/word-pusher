import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

const enhance = compose(
  withState('select', 'setSelect', false),
  withHandlers({
    onClick: props => () => {
      props.setSelect(!props.select);
    },
  }),
);

const InputWord = ({ word, select, onClick }) => (
  <span onClick={onClick} style={{ color: select ? 'blue' : 'black' }}>{word}</span>
);


export default enhance(InputWord);
