import React from 'react';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import './Karten.css';

const style = {
  margin: 12,
};

const Artikel = () => (
  <div className="Karten-container">
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <Card style={{ background: 'transparent' }}>
        <div className="front">
          <p>
            Deutsch
          </p>
        </div>
      </Card>
    </div>
    <div className="artikel-choice">
      <RaisedButton label="der" style={style} />
      <RaisedButton label="die" style={style} />
      <RaisedButton label="das" style={style} />
    </div>
    <IconButton className="Prev">
      <i className="material-icons">chevron_left</i>
    </IconButton>
    <IconButton className="Next">
      <i className="material-icons">chevron_right</i>
    </IconButton>
  </div>
);

export default Artikel;
