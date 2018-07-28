import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './App.css';
import Clock from './Clock.js';
import Stopwatch from './Stopwatch.js';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Paper elevation={5}>
            <Typography variant="headline" bottomGutter>Stopwatch</Typography>
            <br />
            <Stopwatch />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
