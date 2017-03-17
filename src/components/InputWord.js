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

const style = (select) => {
  if (select) {
    return {
      background: '#FF5722',
      color: '#ffffff',
      marginTop: '2px',
      border: 'none',
      outline: '0',
      borderRadius: '2px',
      cursor: 'pointer',
      fontSize: '16px',
      fontFamily: 'Roboto',
      boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    };
  }
  return {
    background: 'transparent',
    marginTop: '2px',
    border: 'none',
    outline: '0',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Roboto',
  };
};

const InputWord = ({ word, select, onClick }) => (
  <button key={word} onClick={onClick} style={style(select)}>{word}</button>
);

export default enhance(InputWord);
