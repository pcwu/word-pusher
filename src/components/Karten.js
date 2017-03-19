import React from 'react';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import './Karten.css';

const Karten = () => (
  <div className="Karten-container">
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div className="flipper">
        <Card style={{ background: 'transparent' }}>
          <div className="front">
            <p>
              Deutsch
            </p>
          </div>
          <div className="back">
            <p>
              中文
            </p>
          </div>
        </Card>
      </div>
    </div>
    <IconButton className="Prev">
      <i className="material-icons">chevron_left</i>
    </IconButton>
    <IconButton className="Next">
      <i className="material-icons">chevron_right</i>
    </IconButton>
  </div>
);

export default Karten;
