import React from 'react';
import { withHandlers, withProps, withState, compose } from 'recompose';
import { Card } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import { playAudio } from '../utils';
import './Karten.css';

const style = {
  margin: 12,
};

const enhance = compose(
  withProps(({ words }) => ({ words: words.filter(word => word.type === 'noun') })),
  withState('index', 'setIndex', 0),
  withState('correct', 'setCorrect', null),
  withHandlers({
    toNext: ({ index, setIndex, setCorrect }) => () => {
      setCorrect(null);
      setIndex(index + 1);
    },
    toPrev: ({ index, setIndex }) => () => {
      setIndex(index - 1);
    },
    checkAns: ({ setCorrect, index, words }) => (ans) => {
      const artikel = words[index].de.split(' ')[0];
      if (ans === artikel) {
        setCorrect(true);
        playAudio(words[index].deAudio);
      }
      else {
        setCorrect(false);
      }
    },
  }),
);

const Artikel = ({ words, correct, index, toNext, toPrev, checkAns }) => (
  <div className="Karten-container">
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <Card style={{ background: 'transparent' }}>
        <div className="front">
          <p>
            {correct ? `${words[index].de}` : `____ ${words[index].de.split(' ')[1]}`}<br />
            {correct ? words[index].en : null}
          </p>
        </div>
      </Card>
    </div>
    <div className="artikel-choice">
      <RaisedButton label="der" disabled={correct} style={style} onClick={() => checkAns('der')} />
      <RaisedButton label="die" disabled={correct} style={style} onClick={() => checkAns('die')} />
      <RaisedButton label="das" disabled={correct} style={style} onClick={() => checkAns('das')} />
    </div>
    <IconButton className="Prev" disabled={index <= 0 || !correct} onClick={() => toPrev()}>
      <i className="material-icons">chevron_left</i>
    </IconButton>
    <IconButton className="Next" disabled={index >= (words.length - 1) || !correct} onClick={() => toNext()}>
      <i className="material-icons">chevron_right</i>
    </IconButton>
    <Snackbar
      open={correct === false}
      message="Wrong Answer! Try Again!"
      autoHideDuration={3000}
    />
    <Snackbar
      open={correct === true}
      message="Correct Answer! Nice Job!"
      autoHideDuration={3000}
      onRequestClose={() => { if (index < words.length - 1) toNext(); }}
    />
  </div>
);

export default enhance(Artikel);
