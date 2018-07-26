import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
import Stopwatch from './Stopwatch.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Stopwatch</h2>
        <br />
        <Stopwatch />
      </div>
    );
  }
}

export default App;
