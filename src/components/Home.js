import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import './Home.css';

const Home = () => (
  <div className="entire-wrapper">
    <div className="content-wrapper">
      <h1 style={{ color: '#fff', fontWeight: 300 }}>Suffer from memorizing vocabulary?</h1>
      <h3 style={{ color: '#fff', fontWeight: 300 }}>Let us help you.</h3>
      <RaisedButton label="Explore Now" secondary />
    </div>
  </div>
);

export default Home;
