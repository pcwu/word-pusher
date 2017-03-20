import React from 'react';
import { withHandlers, withState, compose } from 'recompose';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import { playAudio } from '../utils';
import '../css/Karten.css';

const enhance = compose(
  withState('index', 'setIndex', 0),
  withHandlers({
    toNext: ({ words, index, setIndex }) => () => {
      playAudio(words[index + 1].deAudio);
      setIndex(index + 1);
    },
    toPrev: ({ words, index, setIndex }) => () => {
      playAudio(words[index - 1].deAudio);
      setIndex(index - 1);
    },
  }),
);

const Karten = ({ words, index, toNext, toPrev }) => (
  <div className="Karten-container">
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div className="flipper">
        <Card style={{ background: 'transparent' }}>
          <div className="front">
            <p>
              {words[index].de}
            </p>
          </div>
          <div className="back">
            <p>
              {words[index].en}
            </p>
          </div>
        </Card>
      </div>
    </div>
    <IconButton className="Prev" disabled={index <= 0} onClick={() => toPrev()}>
      <i className="material-icons">chevron_left</i>
    </IconButton>
    <IconButton className="Next" disabled={index >= (words.length - 1)} onClick={() => toNext()}>
      <i className="material-icons">chevron_right</i>
    </IconButton>
  </div>
);

export default enhance(Karten);
