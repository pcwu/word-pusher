import React from 'react';
import { indigoA700, blueA200, deepOrange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigoA700,
    primary2Color: blueA200,
    accent1Color: deepOrange500,
  },
});

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
