import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Karten.css';

const CardExampleExpandable = () => (
  <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
    <div className="flipper">
      <Card style={{ background: 'transparent' }}>
        <CardHeader
          title="Deutsch"
          subtitle="Subtitle"
          className="front"
        />
        <CardText className="back">
          <p>
            中文
          </p>
        </CardText>
      </Card>
    </div>
  </div>
);

export default CardExampleExpandable;
