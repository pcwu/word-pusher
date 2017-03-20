import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/composing.css';

const bgStyle = {
  background: "url('./images/1.jpg')",
  backgroundSize: 'cover',
};

const Home = () => (
  <div className="entire-wrapper" style={bgStyle}>
    <div className="content-wrapper padding-sm">
      <h1>Suffer from memorizing vocabulary?</h1>
      <h3>Let us help you.</h3>
      <Link to="/input"><RaisedButton label="Explore Now" secondary /></Link>
    </div>
  </div>
);

export default Home;
