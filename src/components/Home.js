import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './composing.css';

const bgStyle = {
  background: '#304FFE',
};

const Home = () => (
  <div className="entire-wrapper" style={bgStyle}>
    <div className="content-wrapper padding-sm">
      <h1>Suffer from memorizing vocabulary?</h1>
      <h3>Let us help you.</h3>
      <RaisedButton label="Explore Now" secondary />
    </div>
  </div>
);

export default Home;
