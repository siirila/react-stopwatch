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
        this.onClear = this.onClear.bind(this);
    }

    onStartOrPause() {
        let isRunning = !this.state.isRunning;

        this.setState({
            isRunning: isRunning,
            previousTick: new Date(),
        });

        setInterval(() => {
            let sum = 0;
            for(let i = 0; i < 10; i++) {
                sum += i;
            }
            console.log(sum);
            return sum;
        }, 1);

        if (isRunning) {
            this.intervalId = setInterval(this.tick, 10);
        } else {
            clearInterval(this.intervalId);
        }
    }

    onClear() {
        this.setState({
            elapsedTime: 0,
            isRunning: false
        });

        clearInterval(this.intervalId);
    }

    tick() {
        let now = new Date();
        this.setState({
            elapsedTime: this.state.elapsedTime + (now - this.state.previousTick),
            previousTick: now
        });
    }

    render() {
        return (
            <div>
                <TimeDisplay time={this.state.elapsedTime} />
                <br />
                <StartPauseButton isRunning={this.state.isRunning} onStartOrPause={this.onStartOrPause} />
                <ClearButton onClear={this.onClear} isDisabled={this.state.isRunning || this.state.elapsedTime === 0} />
            </div>
        );
    }
}

export default Stopwatch;
