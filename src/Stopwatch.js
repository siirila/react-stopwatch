import React, { Component } from 'react';
import StartPauseButton from './StartPauseButton.js';
import ClearButton from './ClearButton.js';
import TimeDisplay from './TimeDisplay.js';

class Stopwatch extends Component {
    constructor() {
        super();

        this.state = {
            isRunning: false,
            elapsedTime: 0,
        }

        this.onStartOrPause = this.onStartOrPause.bind(this);
        this.tick = this.tick.bind(this);
    }

    onStartOrPause() {
        let isRunning = !this.state.isRunning;

        this.setState({
            isRunning: isRunning,
        });

        if (isRunning) {
            this.intervalId = setInterval(this.tick, 10);
        } else {
            clearInterval(this.intervalId);
        }
    }

    tick() {
        this.setState({
            elapsedTime: this.state.elapsedTime + 10
        });
    }

    render() {
        return (
            <div>
                <TimeDisplay time={this.state.elapsedTime} />
                <br />
                <StartPauseButton isRunning={this.state.isRunning} onStartOrPause={this.onStartOrPause} />
                <ClearButton onClear={() => console.log('Clear button clicked')} />
            </div>
        );
    }
}

export default Stopwatch;
