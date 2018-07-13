import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
import Stopwatch from './Stopwatch.js';


let removeClock = false;

class App extends Component {
  render() {
    return (
      <div className="App">
        {!removeClock && <Clock />}

        { !removeClock &&
          <button type="button" onClick={() => {removeClock = true; this.forceUpdate()}}>Remove clock</button>
        }
        { removeClock &&
          <button type="button" onClick={() => {removeClock = false; this.forceUpdate()}}>Add clock</button>
        }
        <br />
        <Stopwatch />
      </div>
    );
  }
}

export default App;
