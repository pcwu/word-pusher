import React, { useState } from 'react';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';

import { playAudio } from '../../utils';
import '../../css/Karten.css';

const WordCard = ({ words }) => {
  const [index, setIndex] = useState(0);
  const toNext = () => {
    playAudio(words[index + 1].deAudio);
    setIndex(index + 1);
  };
  const toPrev = () => {
    playAudio(words[index - 1].deAudio);
    setIndex(index - 1);
  };

  return (
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
};

export default WordCard;
