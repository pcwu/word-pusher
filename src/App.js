import React from 'react';
import { indigoA700, blueA200, deepOrange500, white } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './components/Home';
import Stepper from './components/Stepper';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigoA700,
    primary2Color: blueA200,
    accent1Color: deepOrange500,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Home />
      <Stepper />
    </div>
  </MuiThemeProvider>
);

export default App;
