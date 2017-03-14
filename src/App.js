import React from 'react';
import { indigoA700, blueA200, deepOrange500, white } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './components/Home';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigoA700,
    primary2Color: blueA200,
    accent1Color: deepOrange500,
    textColor: white,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Home />
  </MuiThemeProvider>
);

export default App;
