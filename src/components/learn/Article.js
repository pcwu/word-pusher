import React, { useState } from 'react';
import { Card } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import { playAudio } from '../../utils';
import '../../css/Karten.css';


const Article = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(null);

  const toNext = () => {
    setCorrect(null);
    setIndex(index + 1);
  };
  const toPrev = () => setIndex(index - 1);
  const checkAns = (ans) => {
    const artikel = words[index].de.split(' ')[0];
    if (ans === artikel) {
      setCorrect(true);
      playAudio(words[index].deAudio);
    } else {
      setCorrect(false);
    }
  };

  return (
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
        <RaisedButton label="der" disabled={correct} style={{ margin: 12 }} onClick={() => checkAns('der')} />
        <RaisedButton label="die" disabled={correct} style={{ margin: 12 }} onClick={() => checkAns('die')} />
        <RaisedButton label="das" disabled={correct} style={{ margin: 12 }} onClick={() => checkAns('das')} />
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
        autoHideDuration={2000}
        onRequestClose={() => setCorrect(null)}
      />
      <Snackbar
        open={correct === true}
        message="Correct Answer! Nice Job!"
        autoHideDuration={2000}
        onRequestClose={() => { if (index < words.length - 1) toNext(); setCorrect(null);}}
      />
    </div>
  );
};

export default Article;
