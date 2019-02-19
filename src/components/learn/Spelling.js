import React, { useState } from 'react';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';

import Umlaut from './Umlaut';
import { playAudio } from '../../utils';
import '../../css/Karten.css';

const Spelling = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [correct, setCorrect] = useState(null);

  const addUmlaut = umlaut => setValue(value + umlaut);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    if (!!value && e.keyCode === 13) {
      if (value === words[index].de) {
        setCorrect(true);
      } else {
        setCorrect(false);
      }
    }
  };
  const toNext = () => {
    playAudio(words[index + 1].deAudio);
    setIndex(index + 1);
    setValue('');
    setCorrect(null);
  };
  const toPrev = () => {
    playAudio(words[index - 1].deAudio);
    setIndex(index - 1);
  };

  return (
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
}
export default Spelling;
