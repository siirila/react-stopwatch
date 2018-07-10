import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';


let removeClock = false;

class App extends Component {
  constructor() {
    super();

    this.state = {
      savedTimes: []
    };

    this.saveCurrentTime = this.saveCurrentTime.bind(this);
  }

  saveCurrentTime(time) {
    console.log(`saving ${time}`);
    this.setState({
      savedTimes: [...this.state.savedTimes, time]
    });
  }

  render() {
    return (
      <div className="App">
        {!removeClock && <Clock onSaveTime={this.saveCurrentTime} savedTimes={this.state.savedTimes} />}

        { !removeClock &&
          <button type="button" onClick={() => {removeClock = true; this.forceUpdate()}}>Remove clock</button>
        }
        { removeClock &&
          <button type="button" onClick={() => {removeClock = false; this.forceUpdate()}}>Add clock</button>
        }
      </div>
    );
  }
}

export default App;
