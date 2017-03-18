import React from 'react';
import { forEachObjIndexed } from 'ramda';

const style = {
  float: 'left',
  clear: 'left',
  padding: '2px 6px 3px',
  background: '#FF5722',
  color: '#ffffff',
  marginBottom: '10px',
  border: 'none',
  outline: '0',
  borderRadius: '2px',
  cursor: 'pointer',
  fontSize: '16px',
  fontFamily: 'Roboto',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
};

const InputList = ({ words, actions }) => (
  <div>
    {words.map(word => (
      <div>
        <span style={style} onClick={() => actions.deleteWord(word.query)}>{word.query}</span>
        <span onClick={() => { const sound = new Audio(); sound.src = word.enAudio; sound.play(); }}>{word.en}</span>
        <span onClick={() => { const sound = new Audio(); sound.src = word.deAudio; sound.play(); }}>{word.de}</span>
      </div>
    ))}
  </div>
);

export default InputList;
