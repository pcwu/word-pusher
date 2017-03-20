import React from 'react';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Umlaut from '../components/Umlaut';
import './Karten.css';

const Pruefung = () => (
  <div className="Karten-container">
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <Card style={{ background: 'transparent' }}>
        <div className="front">
          <p>
            Deutsch
          </p>
        </div>
        <div className="listen">
          <RaisedButton
            icon={<i className="material-icons">headset</i>}
          />
        </div>
        <div className="umlaut-choice">
          <Umlaut />
        </div>
      </Card>
    </div>

    <IconButton className="Prev">
      <i className="material-icons">chevron_left</i>
    </IconButton>
    <IconButton className="Next">
      <i className="material-icons">chevron_right</i>
    </IconButton>
  </div>
);

export default Pruefung;
