import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import Groups from './Groups';
import data from '../data/groups.json';
import Header from './Header';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Groups groups={data} />
      </ThemeProvider>
    );
  }
}

export default App;
