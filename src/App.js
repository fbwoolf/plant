import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Game from './components/game';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.root}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={Game} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
