import React from 'react';
import { withHandlers, withState, compose } from 'recompose';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import Umlaut from './Umlaut';
import { playAudio } from '../../utils';
import '../../css/Karten.css';

const enhance = compose(
  withState('index', 'setIndex', 0),
  withState('value', 'setValue', ''),
  withState('correct', 'setCorrect', null),
  withHandlers({
    addUmlaut: ({ value, setValue }) => (umlaut) => {
      setValue(value + umlaut);
    },
    onChange: ({ setValue }) => (event) => {
      setValue(event.target.value);
    },
    onSubmit: ({ index, value, words, setCorrect }) => (event) => {
      if (!!value && event.keyCode === 13) {
        if (value === words[index].de) {
          setCorrect(true);
        } else {
          setCorrect(false);
        }
      }
    },
    toNext: ({ words, index, setCorrect, setIndex, setValue }) => () => {
      playAudio(words[index + 1].deAudio);
      setIndex(index + 1);
      setValue('');
      setCorrect(null);
    },
    toPrev: ({ words, index, setIndex }) => () => {
      playAudio(words[index - 1].deAudio);
      setIndex(index - 1);
    },
  }),
);

const Spelling = ({ words, correct, index, value, onChange, onSubmit, setCorrect, setIndex, toPrev, toNext, addUmlaut }) => (
  <div className="Karten-container">
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <Card style={{ background: 'transparent' }}>
        <div className="front">
          <p>
            {correct ? words[index].de :
              <TextField
                hintText="Enter Answer Here:"
                onChange={onChange}
                onKeyDown={onSubmit}
                value={value}
              />
            } <br />
            {correct ? words[index].en : null}
          </p>
        </div>
        <div className="listen">
          <RaisedButton
            icon={<i className="material-icons">headset</i>}
            onClick={() => playAudio(words[index].deAudio)}
          />
        </div>
        <div className="umlaut-choice">
          <Umlaut value={value} addUmlaut={umlaut => addUmlaut(umlaut)} />
        </div>
      </Card>
    </div>
    <IconButton className="Prev" disabled={index <= 0} onClick={() => toPrev()}>
      <i className="material-icons">chevron_left</i>
    </IconButton>
    <IconButton className="Next" disabled={index >= (words.length - 1)} onClick={() => toNext()}>
      <i className="material-icons">chevron_right</i>
    </IconButton>
    <Snackbar
      open={correct === false}
      message="Wrong Answer! Try Again!"
      autoHideDuration={2000}
      onRequestClose={() => setCorrect(null)}
    />
    <Snackbar
      open={correct === true}
      message="Correct Answer! Nice Job!"
      autoHideDuration={2000}
      onRequestClose={() => { if (index < words.length - 1) toNext(); setCorrect(null); }}
    />
  </div>
);

export default enhance(Spelling);
