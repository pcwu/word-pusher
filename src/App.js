import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { indigoA700, blueA200, deepOrange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as actions from './actions';
import Home from './components/Home';
import Stepper from './components/Stepper';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigoA700,
    primary2Color: blueA200,
    accent1Color: deepOrange500,
  },
});

const App = ({ words, input, actions }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Home />
      <Stepper words={words} input={input} actions={actions} />
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = state => ({
  words: state.words,
  input: state.input,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
