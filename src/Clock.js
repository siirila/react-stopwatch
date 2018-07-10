import React, { Component } from 'react';


function ClockRender(props) {
  return (
    <div>
      <h2>{props.time.toLocaleTimeString()}</h2>
      <div>on</div>
      <h3>{props.time.toLocaleDateString()}</h3>
    </div>
  );
}

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      dateTime: new Date(),
      color: 'green',
    };

    this.tick = this.tick.bind(this);
    this.saveCurrentTime = this.saveCurrentTime.bind(this);
  }

  componentDidMount() {
    console.log('Created a new instance of Clock');
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    console.log('Did somebody call for a big blue superhero!');
    this.setState({
      dateTime: new Date()
    });
  }

  saveCurrentTime() {
    this.props.onSaveTime(this.state.dateTime);
  }

  renderSavedTime(time) {
    return (<li key={time.toLocaleTimeString()}><ClockRender time={time} /></li>);
  }

  render() {
    let time = this.state.dateTime.toLocaleTimeString();
    let formattedDate = this.state.dateTime.toLocaleDateString();

    return (
      <div>
        <h2>{time}</h2>
        <div>on</div>
        <h3>{formattedDate}</h3>
        <button type="button" onClick={this.saveCurrentTime}>Save Time</button>
        <ul>
          {this.props.savedTimes.map(this.renderSavedTime)}
        </ul>
      </div>
    );
  }
}

export default Clock;
