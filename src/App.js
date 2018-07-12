import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
import StartPauseButton from './StartPauseButton.js';
import ClearButton from './ClearButton.js';


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
        <StartPauseButton />
        <ClearButton />
      </div>
    );
  }
}

export default App;
