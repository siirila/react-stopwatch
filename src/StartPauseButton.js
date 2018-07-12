import React, { Component } from 'react';

class StartPauseButton extends Component {
    constructor() {
        super();

        this.state = {
            isRunning: false
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            isRunning: !this.state.isRunning
        });
    }

    render() {
        let text = "Start";

        if (this.state.isRunning) {
            text = "Pause";
        }

        return <button type="button" onClick={this.onClick} >{text}</button>;
    }
}

export default StartPauseButton;
