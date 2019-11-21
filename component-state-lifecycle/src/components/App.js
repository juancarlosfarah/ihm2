import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Groups from './groups/Groups';
import data from '../data/groups.json';
import Header from './Header';
import ViewGroup from './groups/ViewGroup';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  }
});

class App extends Component {
  state = {
    groups: [],
  };

  componentDidMount() {
    this.fetchGroups().then((groups) => {
      this.setState({
        groups,
      });
    });
  }

  fetchGroups = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };

  render() {
    const { groups } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Groups groups={groups} />
            </Route>
            <Route path="/groups/:id">
              <ViewGroup groups={groups} />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
