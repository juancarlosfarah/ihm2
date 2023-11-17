import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import Groups from './Groups';
import data from '../data/groups.json';
import Header from './Header';
import ViewGroup from './ViewGroup';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  }
});

class App extends Component {
  state = { groups: [] };

  componentDidMount() {
    this.fetchGroups().then((groups) => {
      this.setState({ groups });
    });
  }

  fetchGroups = () => new Promise((resolve) => {
    setTimeout(() => {
      // data comes from our groups.json file
      resolve(data);
    }, 1000);
  });

  render() {
    const { groups } = this.state;
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Groups groups={groups} />
            </Route>
            <Route path="/groups/:id">
              <ViewGroup groups={groups} />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
