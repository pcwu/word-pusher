import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

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

const enhance = compose(
  withState('select', 'setSelect', props => props.word.select),
  withHandlers({
    onClick: props => () => {
      props.select ? props.actions.deleteWord(props.word.text) : props.actions.addWord(props.word.text);
      props.setSelect(!props.select);
      props.actions.selectInput(props.word.text);
    },
  }),
);

const InputWord = ({ word, select, onClick }) => (
  <button key={word} onClick={onClick} style={style(select)}>{word.text}</button>
);

export default enhance(InputWord);
